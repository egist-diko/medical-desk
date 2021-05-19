import React from "react";

const MyButton = (props) => {
  return (
    <div className="max-w-lg lg:mx-0 mx-auto">
      <button
        disabled={props.disabled}
        className={
          props.class +
          " rounded-full sm:py-6 py-4 w-full text-center focus:outline-none my-4  text-white font-bold sm:text-4.5xl text-lgish"
        }
        type="submit"
      >
        {props.text}
      </button>
    </div>
  );
};

export default MyButton;
