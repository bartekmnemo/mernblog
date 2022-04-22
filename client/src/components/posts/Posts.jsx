import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts, id }) {
  return (
    <div className="posts" id={id}>
      {posts.map((p) => (
        <Post post={p} key={p._id} />
      ))}
    </div>
  );
}
