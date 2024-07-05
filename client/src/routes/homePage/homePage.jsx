import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  
  const { currentUser } = useContext(AuthContext)
  console.log(currentUser)
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">One stop for all college students!
          </h1>
          <p>
            Tired of college hostels? Looking for a new place to live with your close circle? Then you came to the right place. Find and choose rooms, flats, apartments only for students and make memories that lasts life time.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>10+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>1000+</h1>
              <h2>Reviews</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Properties hand picked</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
