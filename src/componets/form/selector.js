import { useFormikContext } from "formik";
import React, { useState } from "react";
import Select from "react-select";
import { useEffect } from "react/cjs/react.development";

import info from "../../assets/info.svg";

const customStyles = {
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (provided, state) => {
    const color = "white";

    return {
      ...provided,
      color,
      "&:hover": {
        color: state.isFocused ? "white" : "white",
      },
    };
  },
  control: (provided, state) => {
    const backgroundColor = "#D0D8DA";
    const border = "1px solid white";

    return {
      ...provided,
      backgroundColor,
      border,
      boxShadow: state.isFocused ? 0 : 0,
      "&:hover": {
        border: state.isFocused ? "1px solid white" : "1px solid white",
      },
    };
  },
  singleValue: (provided) => {
    const color = "white";

    return { ...provided, color };
  },
  menu: (provided) => {
    const color = "#09425A";

    return { ...provided, color };
  },
};

const customStyles1 = {
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (provided, state) => {
    const color = "white";

    return {
      ...provided,
      color,
      "&:hover": {
        color: state.isFocused ? "white" : "white",
      },
    };
  },
  control: (provided, state) => {
    const backgroundColor = "#16C5B3";
    const border = "1px solid white";

    return {
      ...provided,
      backgroundColor,
      border,
      boxShadow: state.isFocused ? 0 : 0,
      "&:hover": {
        border: state.isFocused ? "1px solid white" : "1px solid white",
      },
    };
  },
  singleValue: (provided) => {
    const color = "white";

    return { ...provided, color };
  },
  menu: (provided) => {
    const color = "#09425A";

    return { ...provided, color };
  },
};

const Selector = (props) => {
  const { setFieldValue } = useFormikContext();

  const [value, setValue] = useState(0);
  const [option, setOption] = useState([]);

  useEffect(() => {
    var values = [];
    for (var i = 0; i <= props.res.max_number; i++) {
      values.push({ label: String(i), value: i });
    }
    setOption(values);
  }, []);

  const selected =
    "pb-6 pt-4 px-5 bg-light-cyan w-full text-white rounded-mdish lg:mb-0 mb-2 sm:pr-3 w-full";
  const unselected =
    "pb-6 pt-4 px-5 bg-gray-350 w-full text-white rounded-mdish lg:mb-0 mb-2 sm:pr-3 w-full";
  return (
    <div className={value === 0 ? unselected : selected}>
      <div className="pb-8 flex items-center">
        <div className="text-sm font-medium pr-2">
          Tampone {props.res.service_name}
        </div>
        <div className="text-gray-350">
          <img src={info} alt="" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-4.5xl font-bold text-white">{value}$</div>
        <div>
          <Select
            options={option}
            defaultValue={{ label: "0", value: 0 }}
            styles={value === 0 ? customStyles : customStyles1}
            name={props.name}
            onChange={(option) => {
              if (option.value > 0) {
                setFieldValue(props.name, option.value);
                setFieldValue(props.service_name, props.res.service_name);
                setValue(props.res.cost * option.value);
              } else {
                setFieldValue(props.name, 0);
                setValue(0);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Selector;
