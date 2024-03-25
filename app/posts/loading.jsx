export default async function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1>Posts</h1>
      <ul className="mt-10">
        {Array.from({ length: 2 }, (_, index) => (
          <li key={index} className="border p-6 m-6">
            <h2 className="skeleton-loading  h-6 w-28"></h2>
            <p className="skeleton-loading  h-4 w-full mt-2"></p>
          </li>
        ))}
      </ul>
    </main>
  );
}

