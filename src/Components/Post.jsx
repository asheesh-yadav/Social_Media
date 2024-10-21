import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostList } from "../Store/Post-List-Store";
import "./Post.css";

export default function Post({ post, searchTerm }) {
  const { deletePost } = useContext(PostList);


  const highlightSearchTerm = (text, term) => {
    if (!term) return text;
    const parts = text.split(new RegExp(`(${term})`, "gi")); 
    return parts.map((part, index) =>
      part.toLowerCase() === term.toLowerCase() ? (
        <span key={index} className="highlight">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {highlightSearchTerm(post.title, searchTerm)}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
            style={{ cursor: "pointer" }}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{highlightSearchTerm(post.body, searchTerm)}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reaction" role="alert">
          This post has been reacted by {post.reactions?.likes || post.reactions}{" "}
          people.
        </div>
      </div>
    </div>
  );
}
