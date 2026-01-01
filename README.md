# Claude Code Teaching Framework

A `/teach` command for Claude Code that wraps any task with educational context, focusing on the "why" before and after implementation.

## Installation

| Method | Scope | Description |
|--------|-------|-------------|
| [One-liner](#global-install) | Global | Install for all projects |
| [Clone + install](#from-cloned-repo) | Global | Clone repo first, then install |
| [Project-only](#project-only-install) | Single project | Add to current project only |

### Global install

```bash
curl -fsSL https://raw.githubusercontent.com/kevinmaes/ai-coding-tutorial/main/install.sh | bash
```

### From cloned repo

```bash
git clone https://github.com/kevinmaes/ai-coding-tutorial.git
```

```bash
cd ai-coding-tutorial && ./install.sh
```

### Project-only install

```bash
mkdir -p .claude/commands && curl -fsSL https://raw.githubusercontent.com/kevinmaes/ai-coding-tutorial/main/.claude/commands/teach.md -o .claude/commands/teach.md
```

## Usage

```
/teach <task description>
```

### Examples

```
/teach add email validation to the addUser function
/teach refactor findUserByEmail to use array methods
/teach add error handling for duplicate emails
```

## What It Does

| Phase | What Happens |
|-------|--------------|
| **Before** | Identifies concepts/patterns, explains WHY they apply |
| **During** | Completes task, notes design decisions inline |
| **After** | Summarizes patterns used, key decisions, next steps |

## Example Transcript

**User:**
```
/teach refactor the for loops to use array methods
```

**Claude:**

---

## What You'll Learn
- **Array methods (find, filter, findIndex)**: These replace manual iteration with declarative, readable operations. They express intent clearly: "find the first match" vs "loop until found."
- **Immutability patterns**: Using filter instead of splice avoids mutating the array in place, making behavior more predictable.

Let me refactor the loops in `user-service.ts`.

*[Claude edits findUserByEmail to use .find() and deleteUser to use .filter() or .findIndex()]*

I used `.find()` here instead of `.filter()[0]` because we only need one result - find short-circuits on first match, which is more efficient and expresses intent better.

## Learning Recap
**Patterns used:** Declarative iteration, Early return optimization
**Key decisions:**
- Used `find()` over `filter()[0]`: Clearer intent, stops at first match
- Used `findIndex()` + splice for delete: Maintains original array reference if needed elsewhere

**Want to go deeper?** I can explain how `reduce()` handles more complex transformations, or show you how to chain these methods together. Just say the word.

---

## Testing

The `test-project/` folder contains sample code you can use to try the command:

```bash
cd test-project
claude
> /teach add email validation to addUser
```

## Future Enhancements

- `/output-style teaching` for session-wide mode (see [Issue #2](https://github.com/kevinmaes/ai-coding-tutorial/issues/2))
