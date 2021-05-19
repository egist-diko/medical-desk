import React from "react";
import { Field, ErrorMessage } from "formik";

const Terms = (props) => {
  return (
    <div>
      <div className="flex items-start sm:items-center pb-3">
        <div>
          <Field
            type="checkbox"
            id={props.id}
            className="regular-checkbox"
            name={props.name}
          />
          <label htmlFor={props.id}></label>
        </div>
        <div className="sm:pl-5 pl-1 sm:text-lg text-sm sm:max-w-8xl sm:mx-0 max-w-xs mx-auto">
          {props.text}
        </div>
      </div>
      <div className="text-red-500 py-1">
        <ErrorMessage name={props.name} />
      </div>
    </div>
  );
};

export default Terms;
