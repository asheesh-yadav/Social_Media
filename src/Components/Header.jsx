
import { Link, useNavigate } from "react-router-dom";
import './Header.css';
import { useState, useEffect } from "react";
export default function Header(){

    const [activeTab, setActiveTab] = useState("home");

        const [searchTerm, setSearchTerm] = useState("");
        const navigate = useNavigate();



  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("search") || "";
    setSearchTerm(searchQuery);
  }, [location]);




    const handleTabClick = (tab) => {
      setActiveTab(tab); 
    };





      const handleSearch = (e) => {
        e.preventDefault(); 
    
        if (searchTerm.trim()) {
          navigate(`/posts?search=${encodeURIComponent(searchTerm.trim())}`);
        } else {
          navigate("/");
        }
      };


    return (
        <>
        <header className="p-3 text-bg-dark" id="header">
      <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li className={`nav-item ${activeTab === "home" ? "active-tab" : ""}`}
                onClick={() => handleTabClick("home")} >
        <Link to="/" className="nav-link text-white" aria-current="page">
          <svg className="bi pe-none me-2" width="0" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </Link>
      </li>
      <li className={`nav-item ${activeTab === "create-post" ? "active-tab" : ""}`}
                onClick={() => handleTabClick("create-post")}>
        <Link to="/create-post" className="nav-link text-white">
          <svg className="bi pe-none me-2" width="0" height="16"><use xlinkHref="#speedometer2"></use></svg>
         Create Post
        </Link>
      </li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" onSubmit={handleSearch} role="search">
          <input type="search" className="form-control form-control-dark text-bg-light"
                 placeholder="Search..." aria-label="Search"
                 value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
        </>
    )
}