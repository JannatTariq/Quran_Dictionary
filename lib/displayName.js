// Removes a trailing count in brackets from a category name, for display only.
// "4 Aayaat Rabb-e-Kareem Baare (12,984 items)" -> "4 Aayaat Rabb-e-Kareem Baare"
// "10 Quran-e-Hakeem (Roman Arabi) (6,349 Aayaat)" -> "10 Quran-e-Hakeem (Roman Arabi)"
export function withoutCount(name = "") {
  return String(name).replace(/\s*\((?=[^()]*\d)[^()]*\)\s*$/, "").trim();
}

// Keeps the count in brackets but says "Aayaat" instead of "items", for display only.
// "4 Aayaat Rabb-e-Kareem Baare (12,984 items)" -> "4 Aayaat Rabb-e-Kareem Baare (12,984 Aayaat)"
export function withAayaat(name = "") {
  return String(name)
    .replace(/\(\s*([\d,]+)\s*items?\s*\)\s*$/i, "($1 Aayaat)")
    .trim();
}

// Item counts per section, from the User manual ("System kaisay kaam kerta hai").
// Shown after the Aayaat count in the category page title.
const ITEM_COUNTS = {
  "1 (i)": "18,253",
  "1 (ii)": "14,311",
  "1 (iii)": "9,232",
  "2": "21,001",
  "3": "19,418",
  "4": "12,903",
  "5": "2,555",
  "6": "1,758",
  "7": "3,226",
  "8": "29",
  "12": "1,557",
  "13": "6,533",
};

// Shows the items count when one is listed, otherwise the Aayaat count.
// "4 Aayaat Rabb-e-Kareem Baare (12,984 items)" -> "4 Aayaat Rabb-e-Kareem Baare (12,903 items)"
export function withAayaatAndItems(name = "") {
  const title = withAayaat(name);
  const key = (String(name).trim().match(/^(\d+(?:\s*\([ivx]+\))?)\s/i) || [])[1];
  const items = key && ITEM_COUNTS[key.replace(/\s+/, " ")];
  return items ? `${withoutCount(name)} (${items} items)` : title;
}
