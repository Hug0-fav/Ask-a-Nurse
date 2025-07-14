import CommentForm from "./CommentForm";

function PostCard() {
  return (
    <div>
      <CommentForm postId={post.id} />
    </div>
  );
}

export default PostCard;
