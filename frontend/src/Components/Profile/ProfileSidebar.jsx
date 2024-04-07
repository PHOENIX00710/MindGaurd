import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaRegSave } from "react-icons/fa";

function ProfileSidebar() {
  const userDetails = useSelector((state) => state.user.userDetails);
  return (
    <div className="lg:min-h-screen lg:w-1/4 bg-slate-200 flex flex-col gap-4 p-4">
      <Link to={"/profile?tab=savedArticles"}>
        <div className="bg-white hover:bg-slate-400 flex justify-between items-center p-3 rounded-md w-full">
          <section className="roboto-medium">Saved Articles</section>
          <section>
            <FaRegSave className="text-2xl" />
          </section>
        </div>
      </Link>
      <Link to={"/profile?tab=allPosts"}>
        <div className="bg-white hover:bg-slate-400 flex justify-between items-center p-3 rounded-md w-full">
          <section className="roboto-medium">Posts</section>
          <section>
            <IoNewspaperOutline className="text-2xl" />
          </section>
        </div>
      </Link>
      <Link
        to={"/signout"}
        className="p-3 bg-white hover:bg-slate-500 rounded-md flex justify-between"
      >
        <section className="roboto-medium text-red-400">Signout</section>
        <section>
          <FaSignOutAlt className="text-2xl text-red-400" />
        </section>
      </Link>
    </div>
  );
}

export default ProfileSidebar;
