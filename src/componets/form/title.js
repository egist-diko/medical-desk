import React from "react";

import { useFormContex } from "./formContex";

const Title = (props) => {
  const { visualStep, setVisualStep, step } = useFormContex();

  const selected =
    "font-bold sm:text-4.5xl text-lgish text-left pb-8 pt-16 cursor-pointer";
  const unselected =
    "sm:text-4.5xl text-sm sm:text-gray-300 text-light-cyan font-semibold border-b-2 sm:border-gray-300 border-light-cyan pb-8 pt-16 cursor-pointer";
  const unselected1 =
    "sm:text-4.5xl text-sm text-gray-300 font-semibold border-b-2 border-gray-300 pb-8 pt-16 cursor-pointer";
  return (
    <div
      className={
        visualStep !== props.part
          ? step > props.part
            ? unselected1
            : unselected
          : selected
      }
      onClick={() => {
        if (step >= props.part) {
          setVisualStep(props.part);
        }
      }}
    >
      {props.text}
    </div>
  );
};

export default Title;
