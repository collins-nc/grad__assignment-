import React from 'react';
import { useEffect } from 'react';
import "./about.css";
import Typed from "typed.js";
import contactMail from "../../assets/nav_icons/mail.png";
import {Block} from "../../componets";
import {Cpp,Css,Git,Html,Jq,Js,Mongodb,Mysql,Nodejs,Php,Reactp} from "../../assets/skills";
import {Tv,Book,Gym,Tennis} from "../../assets/hobby";


const About = () => {


    	const el = React.useRef(null);
      // Create reference to store the Typed instance itself
      const typed = React.useRef(null);

      useEffect(() => {
        const options = {
          strings: [
            "<p class = 'abouString'>Hi, I'm Collins Moeketsi, I completed my studies at Tshwane University of Technology towards a National Diploma in Computer Systems Engineering, I love programming and creating nice websites with smoooth animations. I am always ready to learn new things  </p>",
          ],
          typeSpeed: 30,
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
          // Make sure to destroy Typed instance during cleanup
          // to prevent memory leaks
          typed.current.destroy();
        };
      }, []);


    window.onscroll = ()=> {
      if (
        document.body.scrollTop > window.innerHeight / 2 ||
        document.documentElement.scrollTop > window.innerHeight / 2
      ) {
        typed.current.reset();
      } 
    };

    function ProjectDt(){
      return (
        <>
          <div className="project__block">
            <a href="https://github.com/collins-nc/linkedin-clone">
              <div className="project">
                <p className="project--name">Linkedin clone</p>
                <p className="project--use">use: React Redux and Firebase</p>
              </div>
            </a>
            <a href="https://github.com/collins-nc/online-store">
              <div className="project">
                <p className="project--name">Online store</p>
                <p className="project--use">use: PHP and MySQL</p>
              </div>
            </a>
            <a href="https://github.com/collins-nc/simple-chatApp">
            <div className="project">
              <p className="project--name">Chat application</p>
              <p className="project--use">use: NodeJS and Socketio</p>
            </div>
            </a>
          </div>
        </>
      );
    }
      
    function SkillDt(){
      return (
        <div className="skill__img">
          <img width="35px" src={Cpp} alt="Cpp" />
          <img width="35px" src={Css} alt="Css" />
          <img width="35px" src={Git} alt="Git" /><br />
          <img width="35px" src={Html} alt="Html" />
          <img width="35px" src={Jq} alt="Jq" />
          <img width="35px" src={Js} alt="Js" />
          <img width="35px" src={Mongodb} alt="Mongodb" />
          <img width="35px" src={Mysql} alt="Mysql" />
          <img width="35px" src={Nodejs} alt="Nodejs" />
          <img width="35px" src={Php} alt="Php" />
          <img width="35px" src={Reactp} alt="React" />
        </div>
      );
    }
    function HobbyDt() {
      return (
        <>
          <div className="hobby">
            <div className="hobby--name">Playing Tennis</div>
            <img src={Tennis} alt="Tennis" />
          </div>
          <div className="hobby">
            <div className="hobby--name">Gym vibs</div>
            <img src={Gym} alt="Gym" />
          </div>
          <div className="hobby">
            <div className="hobby--name">Reading Books</div>
            <img src={Book} alt="Book" />
          </div>
          <div className="hobby">
            <div className="hobby--name">Watching Anime</div>
            <img src={Tv} alt="Tv" />
          </div>
        </>
      );
    }
  return (
    <div className="about">
      <div className="logo--cover"></div>
      <div className="about__top">
        <div className="about__topLeft">
          <p className="about--title">About</p>
          <div
            className="about__info"
            style={{ whiteSpace: "pre-wrap" }}
            ref={el}
          />
        </div>
        {/*<img className="flower" src={Bg} alt="flower" />*/}
        <div className="about__topRight">
          <p className="about--title">Contact</p>
          <div className="about__mail">
            <img src={contactMail} alt="contact" />
            <a className="about--email" href="mailto:noko.nc@gmail.com">
              noko.nc@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="about__bottom">
        <Block no="01" data={<ProjectDt/>} title="Projects"/>
        <Block no="02" data={<SkillDt/>} title="Skills" />
        <Block no="03" data={<HobbyDt/>} title="Hobby"/>
      </div>
    </div>
  );
};

export default About;