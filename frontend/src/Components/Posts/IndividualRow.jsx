import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { RiDeleteBin3Fill } from "react-icons/ri";
import './myposts.css'

function IndividualRow(props) {
  const handleView = () => {
    alert(props.details._id)
  };

  const handleRemove = () => {
    alert(props.details._id)
  };
  return (
    <tr className="lato-regular overflow-x-scroll">
      <td>{props.details.updatedAt}</td>
      <td>{props.details.title}</td>
      <td>{props.details.overview}</td>
      <td>
        <IoEyeOutline className="cursor-pointer text-2xl text-green-700 hover:text-green-400" onClick={handleView} />
      </td>
      <td>
        <RiDeleteBin3Fill className="cursor-pointer text-2xl text-red-700 hover:text-red-400" onClick={handleRemove} />
      </td>
    </tr>
  );
}

export default IndividualRow;
