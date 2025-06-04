---
sidebar_position: 5
---

# Tpsbar Usage

The `/tpsbar` command displays a visual bar showing the current **TPS (Ticks Per Second)** and optionally **MSPT (Milliseconds Per Tick)** to monitor server performance.

***

### What is TPS?

* **TPS** = _Ticks Per Second_.
* Minecraft’s game loop is designed to run at a maximum of **20 TPS**.
* If the server cannot process all events in time, TPS drops.
* TPS is a high-level indicator of performance.

***

### What is MSPT?

* **MSPT** = _Milliseconds Per Tick_.
* This measures **how long it takes the server to process one game tick**.
* The game aims for **50ms per tick** or less. Why 50ms?
  * 1000ms (1 second) ÷ 20 ticks = 50ms per tick.
* If the **MSPT exceeds 50**, the server can no longer maintain 20 TPS.
* **MSPT is more precise than TPS**, as it can show lag even before TPS drops.

#### MSPT Ranges

| MSPT Range   | Performance     |
| ------------ | --------------- |
| 0ms - 49ms   | ✅ Healthy       |
| 50ms - 59ms  | ⚠️ Slight delay |
| 60ms - 100ms | ❗ Lag building  |
| 100ms+       | 🔥 Critical lag |

***

### TPS Bar Colors

| TPS Range   | Color     | Description           |
| ----------- | --------- | --------------------- |
| 19.5 - 20.0 | 🟩 Green  | Excellent performance |
| 17.0 - 19.4 | 🟨 Yellow | Minor lag             |
| 14.0 - 16.9 | 🟧 Orange | Noticeable lag        |
| 0.0 - 13.9  | 🟥 Red    | Heavy lag             |
