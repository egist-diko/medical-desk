import React from "react";
import { Field, ErrorMessage } from "formik";

const InputField = (props) => {
  return (
    <div id={props.id}>
      <div className="sm:text-2xl text-sm font-medium pb-4">{props.label}</div>
      <div>
        <Field
          type={props.type}
          className="w-full border-light-cyan border-2 focus:outline-none sm:h-16 h-9 sm:text-2xl text-sm text-main-col rounded-mdish px-3"
          name={props.name}
        />
      </div>
      <div className="text-red-500 py-1">
        <ErrorMessage name={props.name} />
      </div>
    </div>
  );
};

export default InputField;
