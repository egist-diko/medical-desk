import React from "react";
import { Field, useFormikContext } from "formik";

const DateButton = (props) => {
  const { submitForm, validateForm } = useFormikContext();
  const taken =
    "border-2 border-gray-350 text-gray-400 flex justify-center rounded-mdish focus:outline-none bg-gray-350 max-w-xxxs w-full p-4";
  if (props.disabled) {
    return (
      <div className="w-full">
        <div className={taken}>{props.text}</div>
      </div>
    );
  } else {
    return (
      <div className="w-full ">
        <Field
          type="radio"
          name={props.name}
          className="time_radio"
          value={props.time}
          id={props.id}
          onClick={() => {
            if (props.name === "time") {
              validateForm().then(() => submitForm());
            } else {
              props.onClick();
            }
          }}
        />
        <label htmlFor={props.id}>{props.text}</label>
      </div>
    );
  }
};

export default DateButton;
