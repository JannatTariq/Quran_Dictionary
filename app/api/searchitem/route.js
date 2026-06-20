export async function POST(req) {
  try {
    const requestJson = await req.json();

    const { selectedCategory, searchQuery } = requestJson;

    console.log(
      "selectedCategory =>",
      selectedCategory,
      "searchQuery =>",
      searchQuery,
    );

    const response = await fetch(
      `/api/getSubcategoriesByCategory?categoryId=${selectedCategory}`,
      {
        cache: "no-store",
      },
    );

    const subcategories = await response.json();

    const results = subcategories.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return Response.json({
      searchItems: results,
    });
  } catch (err) {
    console.log(err);

    return new Response("Error. Unable to process request", { status: 400 });
  }
}
