export default async function AddPostForm() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1>Add Post</h1>
      <form  className="mt-10 w-1/2">
        <label htmlFor="title" className="block">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="w-full border p-2 mt-2"
        />
        <label htmlFor="body" className="block mt-4">
          Body
        </label>
        <textarea
          id="body"
          name="body"
          className="w-full border p-2 mt-2"
        ></textarea>
        <button className="mt-4 bg-blue-500 text-white p-2">Add Post</button>
      </form>
    </main>
  );
}
