import { Clipboard, getSelectedText, showHUD } from "@raycast/api";
import { formatUTC, epochToDate, isNumeric } from "./utils";

export default async function main(): Promise<void> {
  try {
    const raw = (await getSelectedText()).trim();

    if (!isNumeric(raw)) {
      await showHUD("❌ Not a number");
      return;
    }

    const date = epochToDate(Number(raw));
    if (!date) {
      await showHUD("❌ Invalid epoch");
      return;
    }

    const utc = formatUTC(date);
    await Clipboard.copy(utc);
    await Clipboard.paste(`${raw} ${utc}`);
    await showHUD("✅ Copied with UTC");
  } catch {
    await showHUD("❌ No text selected");
  }
}
