import { revalidatePath } from "next/cache";
import PostModel from "../../api/posts/postModel";
import { NextResponse } from "next/server";

async function addPost(formData) {
  "use server";
  const title = formData.get("title");
  const body = formData.get("body");
  try {
    const existingPost = await PostModel.findOne({ title });

    if (existingPost) {
      return NextResponse.json({
        message: "Post already exists",
        status: 400,
      });
    }

    const newPost = await PostModel.create({
      title,
      body,
    });

    NextResponse.json({
      message: "Post Added",
      newPost,
      status: 200,
    });

    revalidatePath("/posts");
  } catch (err) {
    console.log(err);
  }
}

export default async function AddPostForm() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1>Add Post</h1>
      <form action={addPost} className="mt-10 w-1/2">
        <label htmlFor="title" className="block">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="w-full border p-2 mt-2 text-black"
        />
        <label htmlFor="body" className="block mt-4">
          Body
        </label>
        <textarea
          id="body"
          name="body"
          className="w-full border p-2 mt-2 text-black"
        ></textarea>
        <button className="mt-4 bg-blue-500 text-white p-2">Add Post</button>
      </form>
    </main>
  );
}
