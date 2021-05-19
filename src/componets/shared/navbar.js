import React from "react";
import { Link } from "react-router-dom";
import Select, { components } from "react-select";
import i18n from "../../i18n";

import { useFormContex } from "../form/formContex";

import logo from "../../assets/logo.png";
import italy from "../../assets/italy.svg";

const options = [
  {
    value: "it",
    label: (
      <React.Fragment>
        {" "}
        <div className="flex items-center">
          <img src={italy} alt="it" className="w-8 md:w-auto" />
          <span className="ml-2.5 mr-12 text-lg outline-none -mt-0.5 text-black font-medium hidden md:block">
            Italiano
          </span>
        </div>
      </React.Fragment>
    ),
    icon: italy,
  },
  {
    value: "en",
    label: (
      <React.Fragment>
        {" "}
        <div className="flex items-center">
          <img src={italy} alt="it" className="w-8 md:w-auto" />
          <span className="ml-2.5 mr-12 text-lg outline-none -mt-0.5 text-black font-medium hidden md:block">
            England
          </span>
        </div>
      </React.Fragment>
    ),
  },
  {
    value: "al",
    label: (
      <React.Fragment>
        {" "}
        <div className="flex items-center">
          <img src={italy} alt="it" className="w-8 md:w-auto" />
          <span className="ml-2.5 mr-12 text-lg outline-none -mt-0.5 text-black font-medium hidden md:block">
            Albanian
          </span>
        </div>
      </React.Fragment>
    ),
  },
];

const defaultValue = options[0];

const { Option } = components;
const IconOption = (props) => (
  <Option {...props}>
    <div
      className="flex items-center"
      onClick={() => changeLanguage(props.data.value)}
    >
      {props.data.label}
    </div>
  </Option>
);
const customStyles = {
  indicatorSeparator: () => ({
    display: "none",
  }),
  control: (provided) => {
    return { ...provided };
  },
};

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};
const Navbar = () => {
  const { onModify } = useFormContex();
  return (
    <div className="xl:px-44 xl:py-10 px-8 py-5 w-full bg-main-col">
      <div className="flex justify-between justify-items-center items-center">
        <div className="sm:w-full w-4/12">
          <Link to="/" onClick={() => onModify()}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="sm:w-60 w-14">
          <Select
            defaultValue={defaultValue}
            options={options}
            components={{ Option: IconOption }}
            styles={customStyles}
            className="react_select_fix-container"
            classNamePrefix="react_select_fix"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
