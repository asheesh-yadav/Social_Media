import { useContext , useRef} from "react";
import { PostList } from "../Store/Post-List-Store";
import { useNavigate } from "react-router-dom";

export default function CreatePost(){
  
     const userIdElement = useRef();
     const postTitleElement = useRef();
     const postBodyElement = useRef();
     const reactionsElement = useRef();
     const tagsElement = useRef();

   const {addPost} =  useContext(PostList);
   const navigate = useNavigate();

     const handleSubmit = (event)=>{
      event.preventDefault();
      const userId = userIdElement.current.value;
      const postTilte = postTitleElement.current.value;
      const postBody = postBodyElement.current.value;
      const reactions = reactionsElement.current.value;
      const tags = tagsElement.current.value.split(" ");

      userIdElement.current.value="";
      postTitleElement.current.value="";
      postBodyElement.current.value="";
      reactionsElement.current.value="";
      tagsElement.current.value="";


      fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title : postTilte,
            body : postBody,
            reactions: reactions,
            userId : userId,
            tags: tags
    }),
      })
      .then(res => res.json())
      .then((post)=>{
        console.log(post);
        addPost(post)
        navigate("/");
     });
     }

    return(
        <>
        <form className = "createPost" onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter your User Id here</label>
    <input type="text" ref={userIdElement} placeholder="Your User Id Should be Integer Value" className="form-control" id="userId"/>
  </div>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" ref={postTitleElement} placeholder="How are you felling today..." className="form-control" id="title"/>
  </div>

  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea type="text" ref={postBodyElement} rows="4" placeholder="Tell us more about it" className="form-control" id="body"/>
  </div>

  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">No. of reactions</label>
    <input type="text" ref={reactionsElement} placeholder="How many people reacted to this post" className="form-control" id="reactions"/>
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter your hastags here</label>
    <input type="text" ref={tagsElement} placeholder="Please enter tags using space" className="form-control" id="title"/>
  </div>

  <button type="submit" className="btn btn-primary postBtn" >Post</button>
</form>
        </>
    )
}