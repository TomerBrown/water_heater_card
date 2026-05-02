#!/usr/bin/env sh
set -eu

staged=""
if staged="$(git diff --cached --name-only 2>/dev/null)" &&
  printf '%s\n' "$staged" | grep -qE \
    '^(src/|translations/|package-lock\.json|package\.json|rollup\.config\.js|tsconfig\.json)';
then
  echo "husky(pre-commit): building HACS bundle (water-heater-card.js)..."
  npm run build
  git add water-heater-card.js
fi
