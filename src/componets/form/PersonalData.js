import React, { useMemo } from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";
import PhoneInput from "react-phone-input-2";
import DatePicker from "react-datepicker";
import Select from "react-select";
import countryList from "react-select-country-list";

import InputField from "./inputField";
import { useEffect, useRef } from "react/cjs/react.development";

const customStyles = {
  indicatorSeparator: () => ({
    display: "none",
  }),
  control: (provided) => {
    const height = 64;
    const border = "2px solid #16C5B3 !important";

    return { ...provided, height, border };
  },
  dropdownIndicator: (provided) => {
    const color = "#16C5B3";

    return { ...provided, color };
  },
};

const PersonalDate = ({ i, serviceName, startDate, setStartDate }) => {
  const { errors, isSubmitting, setFieldValue } = useFormikContext();

  const tempRef = useRef(true);

  useEffect(() => {
    if (tempRef.current) {
      tempRef.current = false;
    } else {
      if (errors.service) {
        var abort = false;
        for (var i = 0; i < errors.service.length && !abort; i++) {
          for (const res in errors.service[i]) {
            const element = document.getElementById(`${res}${i}`);
            element.scrollIntoView();
            abort = true;
            break;
          }
        }
      }
    }
  }, [isSubmitting]);

  const options = useMemo(() => countryList().getData(), []);
  const date = new Date();
  return (
    <div className="border-2 border-light-cyan p-4 mb-4">
      <div>{serviceName[i]}</div>
      <div className="sm:grid grid-cols-2 sm:gap-x-28 gap-y-6">
        <InputField
          type="text"
          label="Nome"
          name={`service[${i}].firstname`}
          id={`firstname${i}`}
        />

        <InputField
          type="text"
          label="Cogname"
          id={`lastname${i}`}
          name={`service[${i}].lastname`}
        />

        <InputField
          type="text"
          label="Email"
          name={`service[${i}].email`}
          id={`email${i}`}
        />

        <div className="pb-6">
          <div
            className="sm:text-2xl text-sm font-medium pb-4"
            id={`phone${i}`}
          >
            Cellulare
          </div>
          <PhoneInput
            country={"us"}
            name={`service[${i}].phone`}
            inputStyle={{
              height: "4rem",
              fontSize: "1.5rem",
              lineHeight: "2rem",
            }}
            buttonStyle={{ margin: "0px 0px 0px -45px" }}
            onChange={(option) => {
              setFieldValue(`service[${i}].phone`, option);
            }}
          />
          <div className="text-red-500 py-1">
            <ErrorMessage name={`service[${i}].phone`} />
          </div>
        </div>

        <div className="max-w-lg sm:pb-9 pb-3">
          La conferma verrà invita a questa mail.
          <br></br> Si richiede di utilizzare la mail propria personale non mail
          aziendali
        </div>
        <div></div>

        <div className="pb-6">
          <div
            className="sm:text-2xl text-sm font-medium pb-4"
            id={`nationality${i}`}
          >
            Nazionalita
          </div>
          <Select
            classNamePrefix={"react-select1"}
            className="react-select1-container"
            styles={customStyles}
            options={options}
            name={`service[${i}].nationality`}
            onChange={(option) => {
              setFieldValue(`service[${i}].nationality`, option.label);
            }}
          />
          <div className="text-red-500 py-1">
            <ErrorMessage name={`service[${i}].nationality`} />
          </div>
        </div>

        <InputField
          type="text"
          label="Code di fiscale"
          name={`service[${i}].fiscal_code`}
          id={`fiscal_code${i}`}
        />

        <div className="pb-6">
          <div
            className="sm:text-2xl text-sm font-medium pb-4"
            id={`birthday${i}`}
          >
            Data di nascita
          </div>
          <DatePicker
            showMonthDropdown
            showYearDropdown
            adjustDateOnChange
            dropdownMode="select"
            selected={startDate}
            className="w-full border-light-cyan border-2 focus:outline-none sm:h-16 h-9 sm:text-2xl text-sm text-main-col rounded-mdish px-3"
            maxDate={date}
            onChange={(date) => {
              const temp = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
              setFieldValue(`service[${i}].birthday`, temp);
              setStartDate(date);
            }}
            name={`service[${i}].birthday`}
          />
          <div className="text-red-500 py-1">
            <ErrorMessage name={`service[${i}].birthday`} />
          </div>
        </div>
        <div>
          <div className="max-w-xxxs pb-3 sm:pb-0">
            <div className="text-2xl font-medium" id={`sex${i}`}>
              Sesso
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <Field
                  type="radio"
                  name={`service[${i}].sex`}
                  className="regular-radio"
                  value="male"
                  id={`radio-${i}-1`}
                />
                <label htmlFor={`radio-${i}-1`}></label>
                <div className="p-3.5 sm:text-2xl text-sm font-medium">M</div>
              </div>
              <div className="flex items-center">
                <Field
                  type="radio"
                  name={`service[${i}].sex`}
                  value="female"
                  className="regular-radio"
                  id={`radio-${i}-2`}
                />
                <label htmlFor={`radio-${i}-2`}></label>

                <div className="p-3.5 sm:text-2xl text-sm font-medium">F</div>
              </div>
            </div>
            <div className="text-red-500 py-1">
              <ErrorMessage name={`service[${i}].sex`} />
            </div>
          </div>
        </div>

        <InputField
          type="text"
          label="Comune residenca"
          name={`service[${i}].residency`}
          id={`residency${i}`}
        />

        <InputField
          id={`postal_code${i}`}
          type="text"
          label="Cap"
          name={`service[${i}].postal_code`}
        />
      </div>
      <div className="sm:grid grid-cols-2 gap-x-28">
        <InputField
          type="text"
          label="Indirizzo"
          name={`service[${i}.address`}
          id={`address${i}`}
        />
      </div>
    </div>
  );
};

export default PersonalDate;
