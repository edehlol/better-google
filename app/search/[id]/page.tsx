import { Comment } from "../../../types/comment";

const fetchRedditCommentsById = async (id: string) => {
  const response = await fetch(`https://www.reddit.com/comments/${id}.json`);
  const json = await response.json();
  return json[1].data.children as Comment[];
};

export default async function Comments({ params }: { params: { id: string } }) {
  const comments = await fetchRedditCommentsById(params.id);
  return (
    <div>
      {comments?.map((comment) => (
        <div key={comment.data.id}>
          <p>{comment.data.author}</p>
          <p>{comment.data.body}</p>
        </div>
      ))}
    </div>
  );
}
