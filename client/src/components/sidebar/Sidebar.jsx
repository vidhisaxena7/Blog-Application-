import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
          alt=""
        />
        <p>
        This is my digital home, where I offer unfiltered advice and 
        offerings about how to choose self expression, inner healing, ancient wisdom, 
        and alignment as the pathway to real and lasting abundance.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <a href="https://www.facebook.com/vidhi.saxena.1291/">
          <i className="sidebarIcon fab fa-facebook-square"></i>
         </a> 
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <a href="https://www.instagram.com/vidhisaxena_7/?hl=en">
          <i className="sidebarIcon fab fa-instagram-square"></i>
          </a> 
        </div>
      </div>
    </div>
  );
}
