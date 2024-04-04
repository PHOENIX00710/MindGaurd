import { Button } from "@mui/material";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LuShieldClose } from "react-icons/lu";
import { animate, motion } from "framer-motion";

const questions = [
  {
    _id: 0,
    question: "I found it hard to wind down ",
    category: "depression",
  },
  {
    _id: 1,
    question: "I was aware of dryness of my mouth",
    category: "depression",
  },
  {
    _id: 2,
    question: " I couldn't seem to experience any positive feeling at all ",
    category: "depression",
  },
  {
    _id: 3,
    question:
      " I experienced breathing difficulty (eg. excessively rapid breathing, breathlessness in the absence of physical exertion)",
    category: "depression",
  },
  {
    _id: 4,
    question: "I found it difficult to work up the initiative to do things ",
    category: "anxiety",
  },
  {
    _id: 5,
    question: " I tended to over-react to situations",
    category: "anxiety",
  },
  {
    _id: 6,
    question: " I experienced trembling (e.g. in the hands) ",
    category: "anxiety",
  },
  {
    _id: 7,
    question: "I felt that I was using a lot of nervous energy",
    category: "anxiety",
  },
  {
    _id: 8,
    question:
      "I was worried about situations in which I might panic and make a fool of myself",
  },
  {
    _id: 9,
    question: "I felt that I had nothing to look forward to",
  },
  {
    _id: 10,
    question: "I found myself getting agitated",
  },

  {
    _id: 11,
    question: "I found it difficult to relax",
  },
  {
    _id: 12,
    question: "I felt down-hearted and blue",
  },
  {
    _id: 13,
    question:
      "I was intolerant of anything that kept me from getting on with what I was doing",
  },
  {
    _id: 14,
    question: "I felt I was close to panic",
  },
  {
    _id: 15,
    question: "I was unable to become enthusiastic about anything",
  },
  {
    _id: 16,
    question: "I felt I wasn’t worth much as a person",
  },
  {
    _id: 17,
    question: "I felt that I was rather touchy",
  },
  {
    _id: 18,
    question:
      "I was aware of the action of my heart in the absence of physical exertion (e.g. sense of heart rate increase, heart missing a beat)",
  },
  {
    _id: 19,
    question: "I felt scared without any good reason",
  },
  {
    _id: 20,
    question: "I felt that life was meaningless",
  },
];

function Dass() {
  const [openModal, setOpenModal] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);
  const [isFirstQuestion, setIsFirstQuestion] = useState(false);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [computing, setComputing] = useState(false);
  const [answers, setAnswers] = useState({});

  const handleCloseModal = (e) => {
    setOpenModal(false);
    e.stopPropagation();
  };

  const increaseCount = (e) => {
    if (currIndex == questions.length - 1) {
      setIsLastQuestion(true);
      return;
    } else {
      setCurrIndex((prevCount) => prevCount + 1);
    }
  };

  const decreaseCount = (e) => {
    if (currIndex == 0) {
      setIsFirstQuestion(true);
      return;
    } else {
      setCurrIndex((prevCount) => prevCount - 1);
    }
  };

  return (
    <>
      {openModal && (
        <motion.div
          initial={{ opacity: 0, alignItems: "flex-start" }}
          animate={{ opacity: 1, alignItems: "center" }}
          transition={{ duration: 0.7 }}
        >
          <aside
            className="bg-transparent flex justify-center items-center fixed top-0 left-0 w-full h-full p-10 z-10 overflow-hidden"
            onClick={handleCloseModal}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="max-w-2xl min-w-lg h-auto flex flex-col gap-6 p-10 relative bg-white rounded-lg shadow-2xl"
              id="modal"
              onClick={(e) => e.stopPropagation()}
            >
              <LuShieldClose
                className="absolute top-0 right-0 cursor-pointer z-40"
                color="black"
                fontSize={"1.6rem"}
                onClick={handleCloseModal}
              />
              <section className="flex flex-col gap-3 justify-between">
                <p className="text-lg roboto-bold">
                  Please read each statement and circle a number 0, 1, 2 or 3
                  which indicates how much the statement applied to you over the
                  past week. There are no right or wrong answers. Do not spend
                  too much time on any statement.
                </p>
                <h3 className="text-sm roboto-regular-italic">
                  0 :: Did not apply to me at all
                </h3>
                <h3 className="text-sm roboto-regular-italic">
                  1 :: Applied to me to some degree, or some of the time
                </h3>
                <h3 className="text-sm roboto-regular-italic">
                  2 :: Applied to me to a considerable degree, or a good part of
                  time
                </h3>
                <h3 className="text-sm roboto-regular-italic">
                  3 :: Applied to me very much, or most of the time
                </h3>
              </section>
            </div>
          </aside>
        </motion.div>
      )}
      <div
        id="wrapper"
        className={`min-h-screen flex flex-col gap-3 justify-center items-center ${
          openModal ? "opacity-10" : "opacity-100"
        }`}
      >
        <h1 className="text-4xl text-blue-500 roboto-bold mb-6 ">
          DASS-21 Questionnaire
        </h1>
        <main className=" min-h-96 w-1/3 shadow-2xl flex flex-col gap-y-6 justify-evenly rounded-3xl py-10 px-16">
          <strong
            className="self-end text-red-600 cursor-pointer"
            onClick={() => {
              setOpenModal(!openModal);
            }}
          >
            Help?
          </strong>
          <h3 className="text-4xl ">Question {questions[currIndex]._id + 1}</h3>
          <motion.p
            key={currIndex} // This makes React treat it as a new instance on each change
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", delay: 0.3 }}
            className="text-xl roboto-regular-italic"
          >
            {questions[currIndex].question}
          </motion.p>
          <form className="flex flex-col mt-2 gap-3 text-lg" id="dass-answer">
            {[0, 1, 2, 3].map((optionValue) => (
              <motion.div
                key={`${currIndex}-${optionValue}`} // Unique key for re-triggering animation
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  ease: "easeInOut",
                  delay: 0.8 + 0.2 * optionValue,
                }} // Delay based on optionValue for staggering effect
                className="flex items-center gap-3"
              >
                <input
                  type="radio"
                  id={`q${optionValue}`}
                  name="dass-answer"
                  value={optionValue}
                  checked={answers[questions[currIndex]._id] === optionValue}
                  onChange={() =>
                    setAnswers({
                      ...answers,
                      [questions[currIndex]._id]: optionValue,
                    })
                  }
                />
                <label htmlFor={`q${optionValue}`}>{optionValue}</label>
              </motion.div>
            ))}
          </form>
          <div className="flex items-center justify-center gap-8">
            <IoIosArrowBack
              className="text-4xl cursor-pointer text-blue-2"
              display={isFirstQuestion ? "none" : "block"}
              onClick={decreaseCount}
            />
            <IoIosArrowForward
              className="text-4xl cursor-pointer text-blue-2"
              display={isLastQuestion ? "none" : "block"}
              onClick={increaseCount}
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default Dass;
