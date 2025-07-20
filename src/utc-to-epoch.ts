import { Clipboard, getSelectedText, showHUD } from "@raycast/api";
import { parseUtc } from "./utils";

export default async function main(): Promise<void> {
  try {
    const raw = (await getSelectedText()).trim();
    const date = parseUtc(raw);

    if (!date) {
      await showHUD("❌ Unrecognised UTC date-time");
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
