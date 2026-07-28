#!/usr/bin/env bash
set -euo pipefail

commit_message="${1:-Update website}"
branch="$(git branch --show-current)"

if [[ -z "$branch" ]]; then
  echo "Could not determine the current Git branch."
  exit 1
fi

git diff --check

# Stage changed/untracked files that are not ignored, while leaving macOS
# metadata and generated output alone.
while IFS= read -r -d '' path; do
  case "$path" in
    .DS_Store|*/.DS_Store|_site|_site/*|vendor|vendor/*)
      continue
      ;;
  esac

  git add -- "$path"
done < <(git ls-files -m -d -o --exclude-standard -z)

if git diff --cached --quiet; then
  echo "No staged changes to commit."
  exit 0
fi

echo "Staged changes:"
git status --short

git commit -m "$commit_message"
git push origin "$branch"
