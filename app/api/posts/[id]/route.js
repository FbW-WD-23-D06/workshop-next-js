import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  try {
    return NextResponse.json({
      id,
      title: "Hello World",
      body: "This is a post",
    });
  } catch (error) {
    return NextResponse.json({
      message: "Server Error",
      status: 500,
    });
  }
}
