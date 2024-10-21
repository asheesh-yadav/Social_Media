import { createContext , useReducer,useEffect, useState } from "react";

export const PostList = createContext( {
    postList: [],
    addPost: () => {},
    fecthing: false,
    deletePost: () => {},
});


 const postListReducer = (currPostList, action) =>{
    let newPostList = currPostList;
    if(action.type ==="DELETE_POST"){
        newPostList = currPostList.filter(
            (post)=> post.id !== action.payload.postId);
    } else if(action.type === "INITIAL_POSTS"){
           newPostList = action.payload.posts;
    }
     else if(action.type === "ADD_POST"){
        newPostList = [action.payload , ...currPostList];
    }
    return newPostList;
} 

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer( postListReducer, []);
    const [fecthing , setFecthing] = useState(false);

    const addPost = (post) =>     {
             dispatchPostList({
                type: 'ADD_POST',
                payload :  post,
             });
           };


    const addInitialPosts = (posts) => {
        dispatchPostList({
           type: 'INITIAL_POSTS',
           payload : {
                    posts,
           },
        });
      };


    const deletePost = (postId) => {
       dispatchPostList({
        type : "DELETE_POST",
        payload: {
            postId,
        },
       });
    };

useEffect(()=>{
    //cleaning Use Effect
    const controller = new AbortController();
    const signal = controller.signal;

    setFecthing(true);
    fetch('https://dummyjson.com/posts',{signal})
    .then((res) => res.json())
    .then((data)=>{
        addInitialPosts(data.posts);
        setFecthing(false)
    });

    return ()=>{
        controller.abort();
    }

},[]);

    return (
        <>
            <PostList.Provider value={
                {
                    postList,
                    fecthing,
                    addPost,
                    deletePost,
                }
            }>
                {children}</PostList.Provider>
        </>
    );
};

// const DEFAULT_POST_LIST = [
// {
// id : '1',
// title : 'going to college',
// body : 'hello I am going to my college after a long time , feeling good',
// reaction : "10+",
// userId : 'user-5',
// tags:['enjoy','masti','hurrah']
// },
//   {
//     id : '2',
//     title : 'you are my soniya',
//     body : 'hello I am going to my college after a long time , feeling good',
//     reaction : "99+",
//     userId : 'user-5',
//     tags:['enjoy','masti']
//     }
// ];

export default PostListProvider;