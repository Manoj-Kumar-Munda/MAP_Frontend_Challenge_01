import React from "react";
import { PiShare } from "react-icons/pi";
import { MdBookmarkAdd } from "react-icons/md";

const FeaturesBtn = ({ btnTitle }) => {
  return (
    <button title={btnTitle} className="cursor-pointer">
      {btnTitle === "Share" && <PiShare />}
      {btnTitle === "Save for later" && <MdBookmarkAdd />}
    </button>
  );
};

export default FeaturesBtn;
