import db from "@/lib/db";

export async function GET() {
  try {
    // get total views
    const total = await db.post.aggregate({
      _sum: {
        views: true,
      },
    });

    return Response.json({ total: total._sum.views });
  } catch (error) {
    console.error(error);
    return new Response("Something went wrong", { status: 200 });
  } finally {
    await db.$disconnect();
  }
}
