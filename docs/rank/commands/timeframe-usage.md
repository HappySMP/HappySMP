---
sidebar_position: 4
---

# Timeframe Usage

* `/command <player> <time> <reason> (-p)` : Apply a temporary action to a player for a specific amount of time, useful for handling rule violations.

When using `/command`, you must specify the duration using a **time notation**. You can set seconds, minutes, hours, days, or weeks using the following abbreviations:

#### Example

```
/command <name> 7d Cheating
```

Applies the action for 7 days due to cheating.

#### Time Notation

| Notation | Meaning |
| -------- | ------- |
| `s`      | seconds |
| `m`      | minutes |
| `h`      | hours   |
| `d`      | days    |
| `w`      | weeks   |

#### Note

Add `-p` at the end of a command to make it **public**. This allows everyone to see it in the chat. If you omit `-p`, the action will be **silent**, meaning only the affected player will be notified.
