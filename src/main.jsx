import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  { RouterProvider,  createBrowserRouter }  from 'react-router-dom'
import App from './routes/App.jsx'
import CreatePost from './Components/CreatePost.jsx';
import PostList from './Components/PostList.jsx';
// import './index.css'

const router = createBrowserRouter([
  {path : "/", element: <App/>, children:[
    {path : "/" , element : <PostList/>},
    {path : "/create-post", element: <CreatePost/>},
    { path: "/posts", element: <PostList /> },  
  ],
 },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
);
