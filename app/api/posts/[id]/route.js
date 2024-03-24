import { NextResponse } from "next/server";
import PostModel from "../postModel";

export async function GET(request, { params }) {
  const { id } = params;
  try {
    const post = await PostModel.findById(id);
    if (!post) {
      return NextResponse.json({
        message: "Post not found",
        status: 404,
      });
    }
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}
