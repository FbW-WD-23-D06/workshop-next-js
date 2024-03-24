import "../../(db)/mongodb-connection";
import { NextResponse } from "next/server";
import PostModel from "../postModel";

export async function POST(request) {
  const { title, body } = await request.json();

  try {
    const existingPost = await PostModel.findOne({ title });

    if (existingPost) {
      return NextResponse.json({
        message: "Post already exists",
        newPost,
        status: 400,
      });
    }

    const newPost = await PostModel.create({
      title,
      body,
    });

    return NextResponse.json({
      message: "Post Added",
      newPost,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}
