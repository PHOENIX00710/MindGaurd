import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa6";
import { CiShare1 } from "react-icons/ci";
import IndividualComment from "../Components/IndividualComment";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function IndividualPost() {
  const [like, setLike] = useState(false);
  const navigate = useNavigate();
  const handleLike = () => {
    console.log(like);
    setLike((prevState) => !prevState);
  };

  const goBack = () => {
    navigate("/community");
  };

  return (
    <div className="relative min-h-screen flex flex-col py-10 px-20 items-center">
      <IoIosArrowRoundBack
        className="text-5xl absolute left-6 top-6 cursor-pointer"
        onClick={goBack}
      />
      <section className="flex flex-col gap-7">
        <section className="flex gap-8 items-center justify-start">
          <Avatar
            src="https://www.shutterstock.com/image-photo/san-diego-california-july-22-600nw-1300933561.jpg"
            className=" bg-cover bg-center"
          />
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-2xl roboto-bold">Aditi Sharma</h1>
            <p className="font-medium text-gray-500 text-sm italic">
              5 days ago
            </p>
          </div>
        </section>
        <p className="roboto-regular">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          nulla culpa maxime animi corporis, eligendi in aut esse corrupti odit.
        </p>
        <section className="w-full justify-start flex items-center gap-3 py-2">
          <p>
            <strong className="mr-0.5">478</strong>
            <span className="roboto-light text-slate-500">Likes</span>
          </p>
          <p>
            <strong className="mr-0.5">45</strong>
            <span className="roboto-light text-slate-500">Comments</span>
          </p>
        </section>
        <section className="w-1/3 flex items-center justify-between">
          {like ? (
            <FaHeart
              className="text-2xl cursor-pointer overflow-hidden"
              style={{ color: "red" }}
              onClick={handleLike}
            />
          ) : (
            <CiHeart
              className="text-2xl cursor-pointer overflow-hidden"
              onClick={handleLike}
            />
          )}
          <FaRegComment className="text-xl cursor-pointer" />
          <CiShare1 className="text-xl cursor-pointer" />
        </section>
        <h2 className="pl-4 self-start text-xl roboto-semibold ">
          {" "}
          45 comments
        </h2>
        {[1, 2, 3, 4].map((item, ind) => {
          return <IndividualComment key={ind} />;
        })}
      </section>
    </div>
  );
}

export default IndividualPost;
