function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getPosts() {
  let data;
  let errorMessage;
  try {
    await delay(3000);
    const respone = await fetch("http://localhost:3000/api/posts");
    if (!respone.ok) {
      throw new Error("Failed to fetch data");
    }
    data = await respone.json();
  } catch (err) {
    console.log(err);
    errorMessage = err.message;
  } finally {
    return { data, errorMessage };
  }
}

export default async function Posts() {
  const { data, errorMessage } = await getPosts();
  return (
    <main className="flex min-h-screen flex-col items-center  p-10">
      <h1>Posts</h1>
      {errorMessage && <p>{errorMessage}</p>}
      {data && (
        <ul className="mt-10">
          {data.map((post) => (
            <li key={post._id} className="border p-6 m-6">
              <h2 className="text-red-600">{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
