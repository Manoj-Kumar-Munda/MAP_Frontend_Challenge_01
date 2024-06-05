import React from "react";
import { PiShare } from "react-icons/pi";
import { MdBookmarkAdd } from "react-icons/md";
import FeaturesBtn from "./FeaturesBtn";
import ProductCard from "./ProductCard";
import EventCard from "./EventCard";

const Card = ({ item }) => {
  return (
    <div className=" relative flex-flex-col group hover:scale-110 delay-75 duration-300 hover:z-20 transition-all">
      <div className="w-60">
        <img
          className="aspect-[4/5] rounded-lg object-cover"
          width={240}
          src={item?.url}
          alt={item?.title}
          loading="lazy"
        />
      </div>
      <div className="transition-all  opacity-0 duration-500 delay-75  group-hover:opacity-100 absolute bottom-0 right-0 left-0 py-2 px-2 text-white bg-gradient-to-b from-transparent to-gray-950 ">
        <p className="text-xs font-semibold">{item?.title}</p>
        <p className="text-[10px] line-clamp-2  ">{item?.description}</p>

        {item?.cardType === "product" && (
          <ProductCard item={item} />
        )}
        { item?.cardType === "event" && <EventCard item={item} />}
      </div>

      {item.tags && (
        <span className="absolute inline-block text-xs font-semibold z-10 top-4 right-4 bg-pink-600 text-white px-2 py-1 rounded-md">
          {item.tags}
        </span>
      )}
    </div>
  );
};

export default Card;
