export default async function PostPage({ params }) {
  const { id } = params;

  return <main className="p-8 max-w-3xl mx-auto">Post {id}</main>;
}
