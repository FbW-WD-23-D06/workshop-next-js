async function getPosts() {
  let data;
  let errorMessage;

  try {
    const respone = await fetch("http://localhost:3000/api/posts", {
      // in Next js we can use revalidate to re-fetch the data after a certain time
      // beacause the data will be automatically cached
      next: { revalidate: 60 },
    });
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

export default async function PostsList() {
  const { data, errorMessage } = await getPosts();

  return (
    <>
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
    </>
  );
}
