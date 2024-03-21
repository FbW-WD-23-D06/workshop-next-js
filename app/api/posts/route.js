import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json([
      {
        id: 1,
        title: "Hello World",
        body: "This is a post",
      },
      {
        id: 2,
        title: "Hello World 2",
        body: "This is another post",
      },
    ]);
  } catch (error) {
    return NextResponse.json({
      message: "Server Error",
      status: 500,
    });
  }
}
