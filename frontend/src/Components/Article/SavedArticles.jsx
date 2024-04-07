import React, { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

function SavedArticles() {
  const [openOptions, setOpenOptions] = useState(false);
  const handleUnsave = () => {};
  const handleView = () => {};
  return (
    <div className="relative w-72 max-h-96 self-center shadow-2xl flex flex-col">
      <img
        src="https://images.pexels.com/photos/2967156/pexels-photo-2967156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className=" h-56 w-full"
      />
      <h3 className="py-1 px-2 roboto-medium">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
        molestias dolor rem?
      </h3>
      <section className="flex justify-between items-center px-2 py-2">
        <i>By Dr. Phil</i>

        {openOptions ? (
          <>
            <motion.section
              className="flex absolute -right-12 -bottom-5 flex-col shadow-lg rounded-xl bg-slate-400 roboto-light "
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ ease: "easeInOut" }}
            >
              <IoMdClose
                className="relative top-1 -right-36 text-2xl text-white cursor-pointer "
                onClick={() => setOpenOptions((state) => !state)}
              />
              <p
                className="hover:bg-slate-500 hover:text-white px-4 py-2 cursor-pointer"
                onClick={handleView}
              >
                View Article
              </p>
              <p
                className="hover:bg-slate-500 hover:text-white px-4 py-2 cursor-pointer"
                onClick={handleUnsave}
              >
                Remove from Saved
              </p>
            </motion.section>
          </>
        ) : (
          <HiDotsHorizontal
            className="cursor-pointer "
            onClick={() => setOpenOptions((state) => !state)}
          />
        )}
      </section>
    </div>
  );
}

export default SavedArticles;
