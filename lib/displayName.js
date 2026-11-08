// Removes a trailing count in brackets from a category name, for display only.
// "4 Aayaat Rabb-e-Kareem Baare (12,984 items)" -> "4 Aayaat Rabb-e-Kareem Baare"
// "10 Quran-e-Hakeem (Roman Arabi) (6,349 Aayaat)" -> "10 Quran-e-Hakeem (Roman Arabi)"
export function withoutCount(name = "") {
  return String(name).replace(/\s*\((?=[^()]*\d)[^()]*\)\s*$/, "").trim();
}
