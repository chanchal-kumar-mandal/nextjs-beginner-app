export default function Post({ post }) {
    if (!post) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  }
  
  export async function getServerSideProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await res.json();
  
    return {
      props: { post },
    };
  }