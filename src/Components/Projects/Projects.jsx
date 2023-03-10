import React from "react";
import "./Projects.css";
import {fruits} from "../../assets/index.js"
import { bita } from "../../assets/index.js";
import { youtube } from "../../assets/index.js";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={fruits}
                    alt="SastaBazar"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Fruit Selling Website</h2>
                <p>
                  This project is built using Next Js and Sanity CLI where users can shop for fruits and add to cart and also payment integration is done using Stripe
                </p>
                <div>
                  <FaReact />
                  <SiMaterialui />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://ecommerce-stripe-six.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/biswajit150803/ecommerce_stripe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={youtube}
                    alt="yOutube-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Youtube Clone</h2>
                <p>
                  A youtube clone made using React JS and Rapid API where users can play videos without ads.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  <FaReact />
                </div>
                <div>
                  <a
                    href="https://biswa-youtube-clone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/biswajit150803/youtube_clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={bita} alt="47BitaPods" />
                </div>
              </div>
              <div className="project_information">
                <h2>47BitaPods</h2>
                <p>
                  47BitaPods is a real estate company website where users can book their coworking spaces from list of available places and time slots.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://47bitapods.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/biswajit150803/47BitaPodsv2.0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
              </div>
            </div>
          
      
    </>
  );
};
