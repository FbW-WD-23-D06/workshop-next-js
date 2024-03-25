import { revalidatePath } from "next/cache";

async function addPost(formData) {
  "use server";
  let data;
  let errorMessage;

  try {
    const response = await fetch("http://localhost:3000/api/posts/add-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.get("title"),
        body: formData.get("body"),
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to add post");
    }

    data = await response.json();
    revalidatePath("/posts");
  } catch (err) {
    console.log(err);
    errorMessage = err.message;
  } finally {
    return { data, errorMessage };
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
