import React from "react";
import Form from "./Form";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { animateThree, transition } from "../Animations/Animate";
import { motion } from "framer-motion";
import { BiMessageRoundedCheck } from "react-icons/bi";
import FlexStyle from "rakib-flex-style";

const Contact = () => {
  // malito
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };
  return (
    <motion.div
      style={{ marginTop: "100px", marginBottom: "100px" }}
      initial="out"
      animate="end"
      exit="out"
      variants={animateThree}
      transition={transition}
      className="contactsss"
    >
      {/* contact */}
      <div className="sodn">
        <p className="sjsj">Contact</p>
        <div className="dksjss">
          <span>
            <FaPhoneVolume />
            <span className="hhh">+880 1997513691</span>
          </span>
          <span>
            <MdEmail />
            <span className="hhh">rakib.fstackdev@gmail.com</span>
          </span>
        </div>
      </div>

      {/* form */}
      <div>
        <Form />
        <Mailto email="rakib.fstackdev@gmail.com" subject="" body="">
          <FlexStyle column center className="hashbbjask">
            <BiMessageRoundedCheck className="BiMessageRoundedCheck" />
            <b className="mailto">Send Me A Message​​</b>
            <article>rakib.fstackdev@gmail.com</article>
          </FlexStyle>
        </Mailto>
      </div>
    </motion.div>
  );
};

export default Contact;
