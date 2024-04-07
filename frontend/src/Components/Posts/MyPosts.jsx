import React from "react";
import IndividualRow from "./IndividualRow";
import './myposts.css'

const posts = [
  {
    _id: 1,
    updatedAt: "17-02-2023",
    title: "Title 1",
    overview: "This is overview 1 brought to you by me....",
  },
  {
    _id: 2,
    updatedAt: "17-01-2023",
    title: "Title 2",
    overview: "This is overview 2 ....",
  },
  {
    _id: 3,
    updatedAt: "17-03-2023",
    title: "Title 1",
    overview: "This is overview 3 brought to you by Srijan....",
  },
  {
    _id: 4,
    updatedAt: "17-04-2023",
    title: "Title 4",
    overview: "This is overview 4 brought to you by me....",
  },
  {
    _id: 5,
    updatedAt: "20-02-2023",
    title: "Title is 5",
    overview: "This is overview 5 brought to you by him the great one....",
  },
];

function MyPosts() {
  return (
    <div className="w-full py-2 px-4">
      <table className="w-full overflow-x-scroll">
        <thead className="lato-bold text-start">
          <th>Date</th>
          <th>Title</th>
          <th>Overview</th>
          <th>View Post</th>
          <th>Delete Post</th>
        </thead>
        <tbody>
          {posts.map((item) => {
            return <IndividualRow key={item._id} details={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MyPosts;
