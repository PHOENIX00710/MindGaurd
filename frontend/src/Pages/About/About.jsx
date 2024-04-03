import React, { useEffect, useState } from "react";
import svg from "../../assets/main_svg.svg";
import { animate, motion } from "framer-motion";
import "./about.css";
import { useNavigate } from "react-router-dom";

function About() {
  const finalTitle = "Guard";
  const [visibleTitle, setVisibleTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let currIndex = 0;
    let expanding = true;
    const expandContract = setInterval(() => {
      if (expanding) {
        currIndex++;
        setVisibleTitle(finalTitle.slice(0, currIndex));
        if (currIndex === finalTitle.length) expanding = false;
      } else {
        currIndex--;
        setVisibleTitle(finalTitle.slice(0, currIndex - 1));
        if (currIndex === 0) {
          expanding = true;
          setVisibleTitle("G");
        }
      }
    }, 300);
    return () => clearInterval(expandContract);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/articles");
  };

  return (
    <main className="min-h-screen flex flex-col-reverse gap-6 md:flex-row items-center md:justify-around">
      <article className="flex flex-col gap-4 w-2/3 md:w-1/2">
        <h1 className="text-4xl md:text-7xl roboto-bold ">
          Mind<span className="text-blue-2">{visibleTitle}</span>
        </h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <p className="text-sm md:text-lg space-x-0 roboto-regular-italic">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            possimus tempore quo, itaque voluptatum doloremque. Distinctio at
            sapiente sint facilis alias maiores. Harum, quia quis!
          </p>
        </motion.p>
        <button className="btn " onClick={handleSubmit}>
          Get Articles
        </button>
      </article>
      <motion.section
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      >
        <section
          id="image"
          className="w-48 h-48 md:h-96 md:w-96 rounded-full shadow-main-svg overflow-hidden"
        >
          <img src={svg} alt="Main SVG" className="bg-cover bg-center" />
        </section>
      </motion.section>
    </main>
  );
}

export default About;
