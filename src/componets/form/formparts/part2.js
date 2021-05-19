import React, { useRef, useState } from "react";
import { Form, Formik, FieldArray } from "formik";
import axios from "axios";

import { useFormContex } from "../formContex";

import MyButton from "../button";
import CustomError from "../customError";
import Selector from "../selector";
import { useEffect } from "react/cjs/react.development";

const initialValues = {
  service: 0,
  service_name: "",
};

const type = [initialValues];
const Part2 = (props) => {
  const { step, STEPS, onSubmit, setPeopleNr } = useFormContex();

  const [service, setService] = useState([]);
  const [people, setPeople] = useState([]);

  const formRef = useRef();

  useEffect(() => {
    axios
      .post(`https://medical-desk.staging.nmc-services.com/api/services`, {
        store_id: props.store.id,
      })
      .then((response) => {
        response.data.forEach((res) => {
          formRef.current.values.type.push(initialValues);
          setService((prev) => [
            ...prev,
            {
              service_name: res.name,
              cost: res.cost,
              max_number: res.max_number,
            },
          ]);
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  return (
    <Formik
      innerRef={formRef}
      initialValues={{
        type: type,
      }}
      validationSchema={props.validationSchema}
      onSubmit={(values) => {
        const temp = values.type.filter((value) => !(value.service === 0));
        const sum = values.type.reduce((a, b) => a + (b["service"] || 0), 0);
        setPeople(sum);
        if (sum > 5 || sum === 0) {
        } else {
          setPeopleNr(temp);
          onSubmit(temp);
        }
      }}
    >
      {(props) => {
        return (
          <div>
            <Form>
              <FieldArray name="type">
                {(props) => {
                  const list = service.map((res, i) => {
                    return (
                      <Selector
                        key={i}
                        res={res}
                        service_name={`type[${i}].service_name`}
                        name={`type[${i}].service`}
                      />
                    );
                  });
                  return (
                    <div className="lg:grid grid-flow-row grid-cols-3 pb-10 gap-4">
                      {list}
                    </div>
                  );
                }}
              </FieldArray>
              {people > 5 ? (
                <CustomError text="Pick less than 5" />
              ) : people === 0 ? (
                <CustomError text="Pick one pls" />
              ) : (
                <CustomError />
              )}
              <div>
                <MyButton
                  text={step > STEPS.part2 ? "MODIFICARE" : "AVANTI"}
                  class={step > STEPS.part2 ? "bg-gray-350 " : "bg-light-cyan "}
                />
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Part2;
