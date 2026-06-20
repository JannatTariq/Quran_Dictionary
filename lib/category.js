export async function getCategories() {
  const categories = await Category.find({});

  const romanMap = {
    i: 1,
    ii: 2,
    iii: 3,
    iv: 4,
    v: 5,
  };

  return categories.sort((a, b) => {
    const regex = /^(\d+)(?:\s*\(([^)]+)\))?/;

    const matchA = a.name.match(regex);
    const matchB = b.name.match(regex);

    const numA = parseInt(matchA?.[1] || 0);
    const numB = parseInt(matchB?.[1] || 0);

    const subA = romanMap[(matchA?.[2] || "").toLowerCase()] || 0;
    const subB = romanMap[(matchB?.[2] || "").toLowerCase()] || 0;

    if (numA === numB) {
      return subA - subB;
    }

    return numA - numB;
  });
}
