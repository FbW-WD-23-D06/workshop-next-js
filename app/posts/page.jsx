import AddPostForm from "./(components)/AddPostForm";
import PostsList from "./(components)/PostsList";

export default async function Posts() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1>Posts</h1>
      <PostsList />
      <AddPostForm />
    </main>
  );
}
