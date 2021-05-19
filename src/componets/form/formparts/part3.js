import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import axios from "axios";

import { useFormContex } from "../formContex";
import DateButton from "../dateButton";

const initialValues = {
  time: "",
  date: "",
};

const Part3 = (props) => {
  const { onSubmit, setLocalData } = useFormContex();

  const [dates, setDates] = useState([]);
  const [times, setTimes] = useState([]);

  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  useEffect(() => {
    axios
      .post(`https://medical-desk.staging.nmc-services.com/api/dates`, {
        store_id: props.store.id,
      })
      .then((response) => {
        setDates(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  function PickTime(date) {
    localStorage.setItem(
      "Part1",
      JSON.stringify({ store: props.store, date: date })
    );
    const localData = localStorage.getItem("Part1");
    setLocalData(JSON.parse(localData));
    axios
      .post(`https://medical-desk.staging.nmc-services.com/api/hours`, {
        store_id: props.store.id,
        date: date,
      })
      .then((response) => {
        setTimes([]);
        setTimes(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return (
    <Formik
      initialTouched={{
        field: true,
      }}
      initialValues={initialValues}
      validationSchema={props.validationSchema}
      validateOnMount
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {() => {
        return (
          <div>
            <div className="text-2xl text-main-col py-4">Date</div>
            <div className="grid grid-cols-2 sm:grid-cols-7 gap-4">
              {dates.map((res, i) => {
                const formatedDate = `${
                  weekday[new Date(res.date).getDay()]
                }-${new Date(res.date).getMonth()}-${new Date(
                  res.date
                ).getDate()}`;
                return (
                  <DateButton
                    key={i}
                    time={res.date}
                    text={formatedDate}
                    disabled={!res.isAvailable}
                    name="date"
                    id={`date${i}`}
                    onClick={() => PickTime(res.date)}
                  />
                );
              })}
            </div>
            <Form>
              <div className="text-2xl text-main-col pt-8 pb-4">Orari</div>
              <div className="grid grid-cols-2 sm:grid-cols-7 gap-4 pb-10">
                {times.map((data, i) => {
                  return (
                    <DateButton
                      key={i}
                      time={data.time}
                      text={data.time}
                      name="time"
                      id={`time${i}`}
                      disabled={!data.isAvailable}
                    />
                  );
                })}
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Part3;
