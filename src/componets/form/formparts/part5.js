import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useFormContex } from "../formContex";

import InputField from "../inputField";
import MyButton from "../button";

import audience from "../../../assets/audience.png";
import person from "../../../assets/person.png";
import PrivateForm from "../PrivateForm";
import AziendaForm from "../AziendaForm";

const initialValues1 = {
  fname: "",
  lname: "",
  fcode: "",
  email: "",
  address: "",
  city: "",
  postalcode: "",
  province: "",
  nation: "",
};
const initialValues2 = {
  fname: "",
  lname: "",
  fcode: "",
  email: "",
  address: "",
  city: "",
  postalcode: "",
  province: "",
  nation: "",
  ragione: "",
  VAT: "",
  recipient_code: "",
  PEC: "",
};

const Part5 = (props) => {
  const { step, STEPS, onSubmit } = useFormContex();

  const [select, setSelect] = useState(true);

  const selected =
    "flex items-center justify-between px-6 sm:px-9 py-5 rounded-mdish bg-light-cyan";
  const unselected =
    "flex items-center justify-between px-6 sm:px-9 py-5 rounded-mdish bg-gray-350";
  return (
    <Formik
      initialValues={!select ? initialValues1 : initialValues2}
      validationSchema={
        !select ? props.validationSchema[0] : props.validationSchema[1]
      }
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {(props) => {
        return (
          <div>
            <Form>
              <div className="2xl pb-11">
                A chi dovrà essere intestata la fattura?
              </div>
              <div className="flex sm:pb-20 pb-10">
                <div
                  className={
                    !select
                      ? unselected + " mr-1 sm:mr-4"
                      : selected + " mr-1 sm:mr-4"
                  }
                  onClick={() => {
                    setSelect(true);
                    props.setErrors({});
                  }}
                >
                  <div>
                    <img src={audience} className="w-1/2" alt="" />
                  </div>
                  <div className="font-bold text-sm sm:text-2xl text-main-col">
                    Azienda
                  </div>
                </div>

                <div
                  className={select ? unselected : selected}
                  onClick={() => {
                    setSelect(false);
                    props.setErrors({});
                  }}
                >
                  <div className="p-4">
                    <img src={person} className="w-1/2" alt="" />
                  </div>
                  <div className="font-bold text-sm sm:text-2xl text-white">
                    Privato
                  </div>
                </div>
              </div>
              {!select ? <PrivateForm /> : <AziendaForm />}
              <div className="">
                <MyButton
                  text={step > STEPS.part5 ? "MODIFICARE" : "AVANTI"}
                  class={step > STEPS.part5 ? "bg-gray-350 " : "bg-light-cyan "}
                />
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Part5;
