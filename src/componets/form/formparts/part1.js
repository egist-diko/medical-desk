import React from "react";
import { Link } from "react-router-dom";
import location from "../../../assets/location.png";
import time from "../../../assets/time.png";
import { useFormContex } from "../formContex";

const Part1 = (props) => {
  const { onModify, localData } = useFormContex();

  const date = new Date(localData.date).toDateString();

  return (
    <div className="bg-gray-350 sm:px-20 sm:py-14 rounded-mdish w-full px-12 py-8">
      <div className="sm:pb-12 flex pb-10 items-center">
        <div className="sm:pr-12 pr-7">
          <img src={location} alt="" />
        </div>
        <div className="sm:text-4.5xl text-lg">{localData.store.name}</div>
      </div>
      <div className="pb-14 sm:pb-0 flex">
        <div className="sm:pr-12 pr-7">
          <img src={time} alt="" />
        </div>
        <div className="sm:text-2xl text-lg">{date}</div>
      </div>
      <div className="justify-end flex">
        <div className="border-b-2 border-main-col ">
          <Link
            to="/"
            onClick={() => {
              onModify();
            }}
          >
            Modiﬁca negozio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Part1;
