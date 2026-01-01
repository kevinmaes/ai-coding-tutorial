#!/bin/bash
# Install Claude Code Teaching Framework globally

set -e

DEST="$HOME/.claude/commands"
REPO_URL="https://raw.githubusercontent.com/kevinmaes/ai-coding-tutorial/main"

mkdir -p "$DEST"

# If running from cloned repo, copy local file
if [ -f ".claude/commands/teach.md" ]; then
  cp .claude/commands/teach.md "$DEST/"
  echo "Installed from local repo"
else
  # Otherwise fetch from GitHub
  curl -fsSL "$REPO_URL/.claude/commands/teach.md" -o "$DEST/teach.md"
  echo "Installed from GitHub"
fi

echo "Done! /teach is now available globally."
echo "Try: /teach <any task>"
