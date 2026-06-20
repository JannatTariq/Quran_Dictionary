export async function GET() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/getCategories`,
      {
        cache: "no-store",
      },
    );

    const categories = await response.json();

    return Response.json({ categories });
  } catch (err) {
    console.log(err);

    return Response.json({
      message: "Something went wrong",
    });
  }
}
