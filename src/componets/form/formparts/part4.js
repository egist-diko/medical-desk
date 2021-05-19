import React, { useEffect, useRef, useState } from "react";
import { Formik, Form, FieldArray } from "formik";
import "react-phone-input-2/lib/style.css";
import axios from "axios";

import { useFormContex } from "../formContex";

import Terms from "../terms";
import MyButton from "../button";
import PersonalDate from "../PersonalData";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  nationality: "",
  fiscal_code: "",
  birthday: "",
  sex: "",
  residency: "",
  postal_code: "",
  address: "",
  servicename: "",
};

const people = [initialValues];
const term1 = "";
const term2 = "";

const Part4 = (props) => {
  const {
    step,
    STEPS,
    peopleNr,
    onSubmit,
    stepValues,
    setAppointmentId,
  } = useFormContex();

  const [startDate, setStartDate] = useState(new Date());
  const [list, setList] = useState([]);
  const formRef = useRef();

  useEffect(() => {
    formRef.current.values.service = [];
    const joined = [];
    const tempData = [];

    for (var i = 0; i < peopleNr.length; i++) {
      for (var j = 0; j < peopleNr[i].service; j++) {
        joined.push(peopleNr[i].service_name);
        formRef.current.values.service.push(initialValues);
      }
    }

    formRef.current.values.service.forEach((res, i) => {
      formRef.current.setFieldValue(`service[${i}].servicename`, joined[i]);
      const temp = `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}`;
      formRef.current.setFieldValue(`service[${i}].birthday`, temp);
      tempData.push(
        <PersonalDate
          i={i}
          serviceName={joined}
          startDate={startDate}
          setStartDate={setStartDate}
          key={i}
        />
      );
    });

    setList(tempData);
  }, [peopleNr]);

  return (
    <Formik
      innerRef={formRef}
      initialValues={{
        service: [people],
        term1: term1,
        term2: term2,
      }}
      validationSchema={props.validationSchema}
      onSubmit={(values) => {
        onSubmit(values.service);

        const newStepValues = {
          ...stepValues,
          data: values.service,
        };
        axios
          .post(
            `https://medical-desk.staging.nmc-services.com/api/makeappointment`,
            newStepValues
          )
          .then((response) => {
            console.log(response);
            setAppointmentId(response.data.appointmentId);
          })
          .catch((error) => {
            console.log(error.response);
          });
      }}
    >
      {() => {
        return (
          <div>
            <Form>
              <FieldArray name="service">
                {() => {
                  return <div>{list}</div>;
                }}
              </FieldArray>
              <div className="sm:pb-16 pb-3">
                <Terms
                  id={`checkbox-1-4`}
                  name={`term1`}
                  text={
                    <div>
                      Ho preso visione dell’informativa sul trattamento dei miei
                      dati personali e i Termini e Condizioni *(leggi)
                    </div>
                  }
                />
                <Terms
                  id={`checkbox-1-5`}
                  name={`term2`}
                  text={
                    <div>
                      Ho preso visione dell’informativa sul trattamento dei miei
                      dati personali e do il consenso al loro trattamento da
                      parte di Medispa
                      <br></br>
                      S.r.l. quale unico Responsabile Esterno del trattamento
                      dei dati sanitari. * (leggi)
                    </div>
                  }
                />
              </div>
              <div className="">
                <MyButton
                  text={step > STEPS.part4 ? "MODIFICARE" : "AVANTI"}
                  class={step > STEPS.part4 ? "bg-gray-350 " : "bg-light-cyan "}
                />
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Part4;
