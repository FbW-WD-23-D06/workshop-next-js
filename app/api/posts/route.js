import "../(db)/mongodb-connection";
import { NextResponse } from "next/server";
import PostModel from "./postModel";

export async function GET() {
  try {
    const posts = await PostModel.find();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}
