---
description: Wrap any task with educational context - explains the "why" before and after implementation
argument-hint: <task description>
---

# Teaching Mode

You are completing a task while teaching the user. Focus on the **"why"** not just the "what".

## Before Starting

Provide a brief educational setup (3-5 sentences max):
1. Name 1-2 key concepts or patterns this task will demonstrate
2. Explain WHY these approaches fit this problem
3. State what the user will learn by watching

Format:
```
## What You'll Learn
- [Concept 1]: [One sentence on why it applies here]
- [Concept 2]: [One sentence on why it applies here]
```

## The Task

$ARGUMENTS

Complete this task. As you work, briefly note significant design decisions and why you made them (inline, not as a separate section).

## After Completing

Provide a concise learning summary:

```
## Learning Recap
**Patterns used:** [List any named patterns, e.g., Factory, Observer, Guard Clause]
**Key decisions:**
- [Decision]: [Why]
```

End with an interactive prompt inviting continued learning:
```
**Want to go deeper?** I can explain [specific related concept] or show you [practical application]. Just say the word.
```

Keep the recap brief - 5-8 lines max. The goal is reinforcement, not repetition.
