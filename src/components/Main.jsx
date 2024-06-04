import React, { useEffect, useState } from "react";
import data from "../../data/data.json";
import Card from "./Card";
import ScrollBtn from "./ScrollBtn";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [backBtnVisible, setBackBtnVisible] = useState(false);
  const [forwardBtnVisible, setForwardBtnVisible] = useState(false);

  //mock loading
  useEffect(() => {
    let timeout = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => handleIcons(0), []);

  const handleIcons = (scrollVal) => {
    const tabBox = document.querySelector("#slider");
    const maxScrollableWidth = tabBox.scrollWidth - tabBox.clientWidth;
    scrollVal <= 0 ? setBackBtnVisible(false) : setBackBtnVisible(true);
    maxScrollableWidth - scrollVal <= 1
      ? setForwardBtnVisible(false)
      : setForwardBtnVisible(true);
  };

  const scrollBackward = () => {
    const tabBox = document.querySelector("#slider");
    let scrollVal = (tabBox.scrollLeft -= 350);
    handleIcons(scrollVal);
  };

  const scrollForward = () => {
    const tabBox = document.querySelector("#slider");
    let scrollVal = (tabBox.scrollLeft += 350);
    handleIcons(scrollVal);
  };
  return (
    <div className="mx-6 my-10 relative">
      {backBtnVisible && (
        <ScrollBtn
          scrollDirection={"backward"}
          onClickHandler={scrollBackward}
        />
      )}
      {forwardBtnVisible && (
        <ScrollBtn scrollDirection={"forward"} onClickHandler={scrollForward} />
      )}

      <div
        id="slider"
        className="bg-transparent relative flex w-full py-8 gap-2 px-2 scroll-smooth overflow-hidden"
      >
        {
          isLoading 
        }
        {data.map((item) => (
          <Card key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Main;
