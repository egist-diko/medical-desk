import React, { useEffect, useRef, useState } from "react";
import Select, { components } from "react-select";
import { Form, Formik, ErrorMessage } from "formik";
import { withRouter } from "react-router-dom";
import DatePicker from "react-datepicker";

import validationSchema from "../form/validationSchema";
import axios from "axios";
import { useFormContex } from "../form/formContex";

const customStyles = {
  indicatorSeparator: () => ({
    display: "none",
  }),
  control: (provided) => {
    const height = 50;

    return { ...provided, height };
  },
  ValueContainer: (provided) => {
    const height = 50;

    return { ...provided, height };
  },
};

const initialValues = {
  store: "",
  date: "",
};

const { Option } = components;
const CustomOption = (props) => (
  <Option {...props}>
    <div className="flex flex-col">
      <span className="text-lg outline-none text-black font-medium">
        {props.data.value.name}
      </span>
      <span className="text-lg outline-none text-black font-medium">
        {props.data.value.location}
      </span>
    </div>
  </Option>
);

const Reserve = (props) => {
  const { localData } = useFormContex();
  const [startDate, setStartDate] = useState(new Date());

  const [options, setOptions] = useState([]);

  const somedate = new Date();
  const date = new Date().setDate(somedate.getDate() + 14);

  const formRef = useRef();

  useEffect(() => {
    if (localData.store.id) {
      formRef.current.setFieldValue("store", localData.store);
    }
    if (localData.date) {
      const temp = new Date(localData.date);
      setStartDate(temp);
    }
    axios
      .get(`https://medical-desk.staging.nmc-services.com/api/stores`)
      .then((response) => {
        response.data.forEach((res) => {
          setOptions((prev) => [
            ...prev,
            {
              label: res.name,
              value: res,
            },
          ]);
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
    formRef.current.setFieldValue(
      "date",
      `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}`
    );
  }, []);

  return (
    <Formik
      innerRef={formRef}
      initialValues={initialValues}
      validationSchema={validationSchema[0]}
      onSubmit={(values) => {
        localStorage.setItem("Part1", JSON.stringify(values));
        localStorage.setItem("isAuth", "true");
        props.history.push({
          pathname: "/form",
        });
      }}
    >
      {(props) => {
        return (
          <div className="lg:pl-12 lg:pr-14 px-4 lg:pt-10 pt-6 lg:pb-20 pb-12 bg-opacity-75 bg-dark-cyan lg:rounded-2.5xl rounded-mdish h-full">
            <div className="text-white font-bold lg:text-4.5xl text-3xl pb-7   text-center ">
              Prenota ora i tamponi in Drive-in
            </div>
            <Form>
              <div className="pb-4">
                <div className="text-white text-lg pb-0.5">Dove</div>
                <div className="rounded-md">
                  <Select
                    components={{ Option: CustomOption }}
                    options={options}
                    placeholder={localData.store ? localData.store.name : ""}
                    styles={customStyles}
                    name="store"
                    onChange={(option) => {
                      props.setFieldValue("store", option.value);
                    }}
                  />
                </div>
                <div className="text-red-500">
                  <ErrorMessage name="store" />
                </div>
              </div>
              <div className="">
                <div className="text-white text-lg pb-0.5">Quando</div>
                <div className="pb-20 h-24">
                  <DatePicker
                    showMonthDropdown
                    showYearDropdown
                    adjustDateOnChange
                    dropdownMode="select"
                    selected={startDate}
                    className="w-full border border-gray-300 py-3 px-7 mt-1 outline-none text-sm"
                    minDate={new Date()}
                    maxDate={date}
                    onChange={(date) => {
                      const test = `${date.getFullYear()}-${
                        date.getMonth() + 1
                      }-${date.getDate()}`;
                      props.setFieldValue("date", test);
                      setStartDate(date);
                    }}
                    name="date"
                  />
                  <div className="text-red-500">
                    <ErrorMessage name="date" />
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <button
                  className="font-bold focus:outline-none flex justify-center w-full rounded-full bg-light-cyan text-white py-5"
                  type="submit"
                >
                  PROSEGUI
                </button>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default withRouter(Reserve);
