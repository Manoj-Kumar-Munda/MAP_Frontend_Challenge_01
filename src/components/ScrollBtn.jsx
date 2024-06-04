import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ScrollBtn = ({ scrollDirection, onClickHandler }) => {
  return (
    <div className={`flex items-center absolute h-full  z-50 ${scrollDirection === "backward" ? "left-0" : "right-0"}`}>
      <button
        className={`border-0 px-3 py-2 bg-white/30 backdrop-blur-xl ${scrollDirection === "backward" ? "rounded-r-md" : "rounded-l-md"}`}
        onClick={onClickHandler}
      >
        {scrollDirection === "backward" && (
          <MdKeyboardArrowLeft size={20} color="#fff" />
        )}
        {scrollDirection === "forward" && (
          <MdKeyboardArrowRight size={20} color="#fff" />
        )}
      </button>
    </div>
  );
};

export default ScrollBtn;
