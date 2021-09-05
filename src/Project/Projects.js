import React, { useEffect } from "react";
import "./Project.css";
import TextReveal from "./../Animated/Text";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { animateTwo, transition } from "../Animations/Animate";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  // aos for whole page animation
  useEffect(() => {
    AOS.init({
      disable: false,
      offset: 120, //if we increase value it delays presence of animation
      delay: 0,
      duration: 400,
      once: false,
      mirror: false,
      easing: "ease",
      anchorPlacement: "top-down",
    });
  }, []);

  return (
    <motion.div
      className="projects"
      initial="initial"
      animate="in"
      exit="out"
      variants={animateTwo}
      transition={transition}
    >
      <div>
        <TextReveal />
      </div>
      <div className="projectfield">
        {/* project body1 */}
        <div className="jahd" data-aos="fade-down-right">
          <small>
            <span className="fea">FEATURED</span> ... march{" "}
            <span className="dasna">18, 2021</span>
          </small>
          <Link
            className="jad"
            to={{ pathname: "https://fr3shop.netlify.app/" }}
            target="_blank"
          >
            <div className="hsk">
              <p className="appname">
                Shop <AiFillEye className="goeye" />
              </p>
            </div>
            <img src="shopping.jpg" alt="" />
          </Link>
        </div>
        {/* project body2 */}
        <div className="jahd" data-aos="fade-down-left">
          <small>
            <span className="fea">FEATURED</span> ... january{" "}
            <span className="dasna">21, 2021</span>
          </small>
          <Link
            to={{ pathname: "https://fr3music.netlify.app/" }}
            target="_blank"
            className="jad"
          >
            <div className="hsk">
              <p className="appname">
                Music <AiFillEye className="goeye" />
              </p>
            </div>

            <img src="mus.jpg" alt="" />
          </Link>
        </div>
        {/* project body3 */}
        <div data-aos="zoom-in-right" className="jahd">
          <small>
            <span className="fea">FEATURED</span> ... september{" "}
            <span className="dasna">30, 2020</span>
          </small>
          <Link
            to={{ pathname: "https://fr3-newspaper.netlify.app/" }}
            target="_blank"
            className="jad"
          >
            <div className="hsk">
              <p className="appname">
                Newspaper <AiFillEye className="goeye" />
              </p>
            </div>

            <img src="newsp.jpg" alt="" />
          </Link>
        </div>
        {/* project body */}
        <div data-aos="zoom-in-left" className="jahd">
          <small>
            <span className="fea">FEATURED</span> ... august{" "}
            <span className="dasna">18, 2020</span>
          </small>
          <Link
            to={{ pathname: "https://covid19-tracker-black.vercel.app/" }}
            target="_blank"
            className="jad"
          >
            <div className="hsk">
              <p className="appname">
                Covid19 <AiFillEye className="goeye" />
              </p>
            </div>

            <img src="cov.jpg" alt="" />
          </Link>
        </div>
        {/* project body */}
        <div data-aos="fade-up-right" className="jahd">
          <small>
            <span className="fea">FEATURED</span> ... april{" "}
            <span className="dasna">12, 2020</span>
          </small>
          <Link
            to={{ pathname: "https://fr3sports.netlify.app/" }}
            target="_blank"
            className="jad"
          >
            <div className="hsk">
              <p className="appname">
                Sports <AiFillEye className="goeye" />
              </p>
            </div>

            <img src="cric.jpg" alt="" />
          </Link>
        </div>
        {/* project body */}
        <div data-aos="zoom-out-left" className="jahd">
          <small>
            <span className="fea">FEATURED</span> ... october{" "}
            <span className="dasna">26, 2019</span>
          </small>
          <Link
            to={{
              pathname:
                "https://ronyfr3.github.io/Weather-Application-in-React-Js/",
            }}
            target="_blank"
            className="jad"
          >
            <div className="hsk">
              <p className="appname">
                Weather <AiFillEye className="goeye" />
              </p>
            </div>

            <img src="weathers.jpg" alt="" />
          </Link>
        </div>
        {/* project body */}
        <div data-aos="zoom-out-right" className="jahd">
          <small>
            <span className="fea">FEATURED</span> ... June{" "}
            <span className="dasna">12, 2019</span>
          </small>
          <Link
            to={{ pathname: "https://e-valy-clone.netlify.app/" }}
            target="_blank"
            className="jad"
          >
            <div className="hsk">
              <p className="appname">
                E-valy Clone <AiFillEye className="goeye" />
              </p>
            </div>

            <img src="evaly.jpg" alt="" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
