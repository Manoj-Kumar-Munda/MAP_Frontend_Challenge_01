import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import FeaturesBtn from "./FeaturesBtn";
const EventCard = ({ item }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-1">
        <MdOutlineDateRange />
        <span className="text-xs">{item?.date}</span>
      </div>
      {item?.features.map((i) => (
        <FeaturesBtn key={i} btnTitle={i} />
      ))}
    </div>
  );
};

export default EventCard;
