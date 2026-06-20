export async function GET() {
  try {
    const response = await fetch(`/api/getCategories`, {
      cache: "no-store",
    });

    const categories = await response.json();

    return Response.json({ categories });
  } catch (err) {
    console.log(err);

    return Response.json({
      message: "Something went wrong",
    });
  }
}
