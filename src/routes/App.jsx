import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer"
import PostListProvider from "../Store/Post-List-Store";
import { Outlet } from "react-router-dom";
function App() {
  return (
    
    <PostListProvider>
    <div className="header-container">
        <Header />
      </div>
      <Outlet/>
      <Footer></Footer>
      </PostListProvider>
  
  )
}

export default App
