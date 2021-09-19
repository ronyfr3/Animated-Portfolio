import React, { useState } from "react";
import "./Contact.css";
// import Notify from "./Notify";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [inV, setInV] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInV({
      ...inV,
      [name]: value,
    });
  };
  // const [send, setSend] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inV.name && inV.email && inV.msg) {
      toast.success("Message Sent", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Message not sent", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    window.localStorage.setItem(
      "msg",
      JSON.stringify({ name: inV.name, email: inV.email, msg: inV.msg })
    );
    setInV({
      name: "",
      email: "",
      msg: "",
    });
    // setSend(true);
  };
  // console.log(inV);
  return (
    <div className="formdd">
      <ToastContainer />
      {/* <Notify send={send} setSend={setSend} /> */}
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          placeholder=""
          value={inV.name}
          name="name"
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder=""
          value={inV.email}
          name="email"
          onChange={handleChange}
          required
        />

        <label>Message</label>
        <textarea
          type="text"
          placeholder=""
          value={inV.msg}
          name="msg"
          onChange={handleChange}
          required
        ></textarea>
        <motion.button whileTap={{ scale: 0.9 }} className="skaka">
          Send Message
        </motion.button>
      </form>
    </div>
  );
};

export default Form;
