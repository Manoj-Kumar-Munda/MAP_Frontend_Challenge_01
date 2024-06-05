import { createContext } from "react";
import Main from "./components/Main";
import Popups from "./components/Popups";
import { PopupContextProvider } from "./components/PopuopContext";

function App() {
  return (
    <>
      <PopupContextProvider>
        <Popups />
        <Main />
      </PopupContextProvider>
    </>
  );
}

export default App;
