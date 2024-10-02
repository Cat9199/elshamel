import { useState } from "react";
import { MdExpandMore } from "react-icons/md"; // Import the icon from react-icons

// eslint-disable-next-line react/prop-types
const Accordion = ({ title, lessons, setVid, setVidName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" border border-blue-500 rounded-2xl overflow-hidden">
      <button
        onClick={toggleAccordion}
        className="flex items-center justify-between w-full p-4 text-lg font-medium bg-gray-100 hover:bg-gray-200"
      >
        {title}
        <MdExpandMore
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="">
          {lessons.map((lesson, index) => (
            <div
              key={index}
              onClick={() => {
                setVid(lesson.embed);
                setVidName(lesson.title);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className=" cursor-pointer bg-white hover:bg-blue-300 p-4"
            >
              <h3 className="font-semibold">{lesson.title}</h3>
              <p>{lesson.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
