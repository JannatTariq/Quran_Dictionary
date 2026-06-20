export async function POST(req) {
  try {
    const requestJson = await req.json();

    const { categoryId, pageNumber } = requestJson;

    console.log("CategoryId =>", categoryId, "PageNumber =>", pageNumber);

    const response = await fetch(
      `/api/getSubcategoriesByCategory?categoryId=${categoryId}`,
      {
        cache: "no-store",
      },
    );

    const allSubcategories = await response.json();

    const pageSize = 100;

    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const currentPage = allSubcategories.slice(startIndex, endIndex);

    return Response.json({
      subcategories: currentPage,
      hasMore: endIndex < allSubcategories.length,
    });
  } catch (err) {
    console.log(err);

    return new Response("Error. Unable to process request", { status: 400 });
  }
}
