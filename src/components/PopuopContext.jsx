import { createContext, useState } from "react";

const PopupContext = createContext();

export const PopupContextProvider = ({ children }) => {
  const [popup, setPopup] = useState({ message: "" });
  return <PopupContext value={{ popup, setPopup }}>{children}</PopupContext>;
};


export default PopupContext;