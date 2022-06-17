import React from "react";
import { useEffect } from "react";
import Typed from "typed.js";
import "./home.css";
import coffee from "../../assets/coffee.png";
import x from "../../assets/nav_icons/x.png";

const Home = () => {
    	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

    useEffect(() => {
        const options = {
          strings: [
            "<p class = 'helloString'>Hello My name is Collins Moeketsi</p>"
          ],
          typeSpeed: 80,
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
          // Make sure to destroy Typed instance during cleanup
          // to prevent memory leaks
          typed.current.destroy();
        };
      }, []);
    const magic = () =>{
      document.getElementById("homeId").style.display = "flex";
      document.getElementById("whyId").style.display = "flex";
    }
    const remove = () =>{
      
      document.getElementById("homeId").style.display = "none";
      document.getElementById("whyId").style.display =  "none";
    }
  return (
    <div className="home">
      <div id="homeId" className="home__blur"></div>
      <div id="whyId" className="why">
        <p>
          Why I want to be a developer at{" "}
          <strong style={{ color: "#3489e5" }}>SovTech</strong> ?{" "} <br /><br />
          Being one of the leading software development companies in Africa, there is a lot to be learned from everyone in the company, an opportunity to learn and be guided in the right path to gain quality technical skills and soft skills as well as exposure to the industry, an opportunity to go throught that journey with an award winning company is an honour.
        </p>
      

        <div onClick={remove} className="cross">
          <img src={x} alt="x" />
        </div>
      </div>

      <div onClick={magic} className="home__why">
        <div id="whyBtn" className="home__why--button">
          Why
        </div>
        <p>
          i want to be a developer at{" "}
          <a className="home__link" href="https://www.sovtech.co.za/">
            {" "}
            SovTech
          </a>
        </p>
      </div>
      <span style={{ whiteSpace: "pre" }} ref={el} />
      <img className="home__coffee--img" src={coffee} alt="coffee" />
    </div>
  );
};

export default Home;
