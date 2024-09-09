import { useState, useRef } from "react";

// eslint-disable-next-line react/prop-types
const HomeAccordion = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null); // Reference to measure height

  return (
    <div className="border border-gray-400 overflow-hidden rounded-xl bg-white w-[550px] max-md:w-full">
      <button
        className="w-full flex justify-between items-center p-4 text-left "
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{title}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>

      {/* This is the animated section */}
      <div
        ref={contentRef}
        className="transition-all duration-500 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px", // Transition maxHeight for open/close effect
        }}
      >
        <div className="p-4 text-gray-700">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeAccordion;
