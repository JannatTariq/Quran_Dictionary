export async function POST(req) {
  console.log("REQUEST HIT POST");

  try {
    const requestJson = await req.json();
    const { subcategoryId } = requestJson;

    console.log("Subcategory ID:", subcategoryId);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/getFilesBySubcategory?subcategoryId=${subcategoryId}`,
      {
        cache: "no-store",
      },
    );

    const files = await response.json();

    return Response.json({ files });
  } catch (err) {
    console.log(err);

    return Response.json({
      message: "Something went wrong",
      error: err.message,
    });
  }
}
