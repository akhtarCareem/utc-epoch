# UTC ↔ Epoch Converter (Raycast Extension)

A tiny, no-view Raycast extension that converts between UTC date-time strings and Unix epoch **milliseconds** right from your selection.  
It ships with three headless commands:

| Command | What it does | Example Input | Clipboard Result |
| ------- | ------------ | ------------- | ---------------- |
| **UTC → Epoch (ms)** | Appends Unix epoch milliseconds to the selected UTC string | `2025-07-12 20:00:00` | `1752340800000` |
| **Epoch → UTC** | Appends a formatted UTC string (`YYYY-MM-DD HH:MM:SS`) to the selected epoch | `1752340800000` | `2025-07-12 20:00:00` |
| **Epoch ↔ UTC** | Detects the selection and converts the other way | `2025-07-12 20:00:00` → `1752340800000`<br>`1752340800000` → `2025-07-12 20:00:00` | |

The commands paste the converted value into your active text field and also copy it to the clipboard for easy access.

---

## Assign a hotkey
1. Open Raycast preferences.
2. Navigate to the **Extensions** tab.
3. Find the **UTC ↔ Epoch Converter** extension.
4. Assign a hotkey to the commands you want to use.
