import { Clipboard, getSelectedText, showHUD } from "@raycast/api";
import { parseUtc, formatUTC, epochToDate, isNumeric } from "./utils";

export default async function main(): Promise<void> {
  try {
    const raw = (await getSelectedText()).trim();

    // Numeric → epoch path
    if (isNumeric(raw)) {
      const date = epochToDate(Number(raw));
      if (!date) {
        await showHUD("❌ Invalid epoch");
        return;
      }

      const utc = formatUTC(date);
      await Clipboard.copy(utc);
      await Clipboard.paste(`${raw} ${utc}`);
      await showHUD("✅ Copied with UTC");
      return;
    }

    // Non-numeric → UTC path
    const date = parseUtc(raw);
    if (!date) {
      await showHUD("❌ Unrecognised format");
      return;
    }

    const epochMs = date.getTime().toString();
    await Clipboard.copy(epochMs);
    await Clipboard.paste(`${raw} ${epochMs}`);
    await showHUD("✅ Copied with epoch ms");
  } catch {
    await showHUD("❌ No text selected");
  }
}
