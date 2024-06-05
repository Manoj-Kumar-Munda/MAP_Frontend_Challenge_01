import React, { use } from "react";
import { PiShare } from "react-icons/pi";
import { MdBookmarkAdd } from "react-icons/md";
import PopupContext from "./PopuopContext";

const FeaturesBtn =  ({ btnTitle }) => {
  const { setPopup } = use(PopupContext);

  //mock onclick actions
  const onClickHandler = () => {
    let message;
    if (btnTitle === "Share") {
      setPopup({ message: "Shared" });
    }
    if (btnTitle === "Save for later") {
      setPopup({ message: "Saved" });
    }
  };
  return (
    <>
      <button
        onClick={onClickHandler}
        title={btnTitle}
        className="cursor-pointer"
      >
        {btnTitle === "Share" && <PiShare />}
        {btnTitle === "Save for later" && <MdBookmarkAdd />}
      </button>
    </>
  );
};

export default FeaturesBtn;
