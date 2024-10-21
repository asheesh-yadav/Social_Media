import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/Post-List-Store";
import WelcomeMessage from "./WelcomeMessage";
import LodingSpinner from "./LodingSpinner";
import { useLocation, useNavigate } from "react-router-dom";

export default function PostList() {
  const { postList, fecthing } = useContext(PostListData);
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search")?.toLowerCase() || "";

  const filteredPosts = searchTerm
    ? postList.filter((post) =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.body.toLowerCase().includes(searchTerm)
      )
    : postList;

  useEffect(() => {
    if (!searchTerm) {
      navigate("/", { replace: true });
    }
  }, [searchTerm, navigate]);

  return (
    <div className="post-container">
      {fecthing && <LodingSpinner />}
      {!fecthing && filteredPosts.length === 0 && <WelcomeMessage />}
      {!fecthing &&
        filteredPosts.map((post) => (
          <Post key={post.id} post={post} searchTerm={searchTerm} />
        ))}
    </div>
  );
}
