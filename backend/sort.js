function extractFirstNumber(str) {
  // Use a regular expression to find the first sequence of digits in the string
  const match = str.match(/\d+/);
  // Return the number as a string if found, or null if no match
  return match ? parseInt(match[0], 10) : null;
}


exports.sort = (subcategories) => {

    for (let i = 0; i < subcategories.length - 1; i++) {
        for (let j = 0; j < subcategories.length - 1 - i; j++) {
            const num1 = extractFirstNumber(subcategories[j].name);
            const num2 = extractFirstNumber(subcategories[j + 1].name);

            if (num1 > num2) {
                // Swap elements
                [subcategories[j], subcategories[j + 1]] = [subcategories[j + 1], subcategories[j]];
            }
        }
    }

    return subcategories;
};

