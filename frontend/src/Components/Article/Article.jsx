import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./article.css";
import { useNavigate } from "react-router-dom";
import { FiSave } from "react-icons/fi";
import { HiOutlineSave } from "react-icons/hi";

function Article(props) {
  const navigate = useNavigate();

  const handleGoToArticle = (e) => {};

  const handleSave = (e) => {};

  const { title, overview, image, link } = props.article;

  return (
    <div
      className="card max-w-lg shadow-xl md:max-w-max bg-cover"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="card-content w-full relative">
        <HiOutlineSave
          className="absolute top-2 right-1 text-white text-3xl cursor-pointer"
          onClick={handleSave}
        />
        <h2 className="text-xl md:text-3xl roboto-bold mb-5">{title}</h2>
        <p className="card-body">{overview}</p>
        <a href={link} target="_blank">
          <FaLongArrowAltRight
            className="absolute bottom-2 text-white right-2 text-3xl cursor-pointer"
            onClick={handleGoToArticle}
          />
        </a>
      </div>
    </div>
  );
}

export default Article;
