import React, { useEffect, useState, use } from "react";
import PopupContext from "./PopuopContext";

const Popups = () => {
  const [showPopUp, setShowPopup] = useState(false);

  const {popup: { message }} = use(PopupContext);

  useEffect(() => {
    if (message) {
      setShowPopup(true);
    }
    const timer = setTimeout(() => setShowPopup(false), 1500);
    return () => clearTimeout(timer);
  }, [message]);
  return (
    <div
      className={`fixed transition-all duration-300 left-1/2 -translate-x-1/2 mx-auto border px-4 py-1 rounded-xl bg-white text-black text-sm font-semibold ${
        showPopUp ? "top-4 opacity-1" : "top-2 opacity-0"
      }`}
    >
      {message}
    </div>
  );
};

export default Popups;
