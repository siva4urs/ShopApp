#!/usr/bin/env bash
set -euo pipefail

# replace-husky.sh
# Usage: ./replace-husky.sh
# Runs from repo root (where .git lives). Creates branch chore/remove-husky and pushes it.
# Review the branch and CI before merging to main.

TARGET_BRANCH=${1:-"chore/remove-husky"}
PUSH_TO_MAIN=false

if [ ! -d ".git" ]; then
  echo "Error: .git not found. Run from repository root."
  exit 1
fi

echo "Creating branch ${TARGET_BRANCH}..."
git fetch origin
git checkout -b "${TARGET_BRANCH}"

# 1) Remove .husky folder if present
if [ -d ".husky" ]; then
  echo "Removing .husky folder..."
  rm -rf .husky
fi

# 2) Remove 'husky' prepare script and husky entries from package.json files (root and workspace packages)
PKG_PATHS=(./package.json)
# gather workspace package.json under apps and packages (maxdepth 2)
while IFS= read -r -d ''; do PKG_PATHS+=("$REPLY"); done < <(find apps packages -maxdepth 2 -type f -name package.json -print0 2>/dev/null)

echo "Processing package.json files to remove 'prepare' scripts referencing husky and husky devDeps..."
for P in "${PKG_PATHS[@]}"; do
  echo " - checking $P"
  node -e "
    const fs=require('fs');
    const p='$P';
    const json=JSON.parse(fs.readFileSync(p,'utf8'));
    let changed=false;
    // remove prepare script if it contains husky
    if (json.scripts && json.scripts.prepare && /husky/.test(json.scripts.prepare)) {
      delete json.scripts.prepare;
      changed=true;
    }
    // remove husky devDependency if present
    if (json.devDependencies && json.devDependencies.husky) {
      delete json.devDependencies.husky;
      changed=true;
    }
    // also remove 'prepare' if it is exactly 'husky install'
    if (json.scripts && json.scripts.prepare && json.scripts.prepare.trim()==='husky install') {
      delete json.scripts.prepare;
      changed=true;
    }
    if (changed) {
      fs.writeFileSync(p, JSON.stringify(json, null, 2) + '\\n', 'utf8');
      console.log('Updated', p);
    } else {
      console.log('No husky references found in', p);
    }
  "
done

# 3) Add simple-git-hooks as root devDependency and add config to root package.json
echo "Adding simple-git-hooks to root devDependencies and adding config..."
node - <<'NODE'
const fs = require('fs');
const p = './package.json';
const j = JSON.parse(fs.readFileSync(p,'utf8'));
j.devDependencies = j.devDependencies || {};
j.devDependencies['simple-git-hooks'] = 'latest';
j['simple-git-hooks'] = j['simple-git-hooks'] || {};
j['simple-git-hooks']['pre-commit'] = 'pnpm -w run -r lint-staged';
j.scripts = j.scripts || {};
// add prepare script to auto-install hooks for contributors (optional)
j.scripts.prepare = j.scripts.prepare || 'npx simple-git-hooks';
fs.writeFileSync(p, JSON.stringify(j, null, 2) + '\n', 'utf8');
console.log('Updated root package.json with simple-git-hooks and prepare script.');
NODE

# 4) Ensure .lintstagedrc exists (simple check)
if [ ! -f ".lintstagedrc" ]; then
  cat > .lintstagedrc <<'EOF'
{
  "src/**/*.{ts,tsx,js,jsx}": ["eslint --fix", "prettier --write"]
}
EOF
  echo "Created .lintstagedrc"
fi

# 5) Install dependencies from repo root (ensures workspace deps are resolved)
echo "Running pnpm install (repo root)..."
pnpm install

# 6) Install git hooks via simple-git-hooks (run once now)
echo "Installing git hooks via simple-git-hooks..."
npx simple-git-hooks

# 7) Remove husky package from lock if still present: optional - pnpm will update lockfile during install
# (We already removed husky from package.json files above)

# 8) Stage changes, commit and push to branch
git add -A
git commit -m "chore: replace husky with simple-git-hooks and run lint-staged via pre-commit" || echo "No changes to commit"
git push -u origin "${TARGET_BRANCH}"

echo "Done. Review branch ${TARGET_BRANCH}, run CI and tests. If you want this on main, merge the branch after validation."