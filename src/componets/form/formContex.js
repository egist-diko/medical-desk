import React, { useContext, useReducer } from "react";
import reducer from "./formReducer";

const FormContex = React.createContext();
const initialValues = {
  STEPS: {
    part1: 1,
    part2: 2,
    part3: 3,
    part4: 4,
    part5: 5,
    part6: 6,
  },
  step: 2,
  visualStep: 2,
  stepValues: {
    The_end: {},
    data: [],
    store_id: "",
    date: "",
    time: "",
  },
  peopleNr: [],
  localData: {
    store: {},
    date: "",
  },
  appointmentId: 0,
};
const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const onSubmit = (values) => {
    dispatch({ type: "SUBMIT", payload: values });
  };
  const onModify = () => {
    dispatch({ type: "MODIFY" });
  };
  const setVisualStep = (step) => {
    dispatch({ type: "DISPLAY_STEP", payload: step });
  };
  const setPeopleNr = (value) => {
    dispatch({ type: "SET_PEOPLENR", payload: value });
  };
  const setLocalData = (value) => {
    dispatch({ type: "SET_LOCALDATA", payload: value });
  };
  const setAppointmentId = (value) => {
    dispatch({ type: "SET_APPOINTMENTID", payload: value });
  };

  return (
    <FormContex.Provider
      value={{
        ...state,
        onSubmit,
        onModify,
        setVisualStep,
        setPeopleNr,
        setLocalData,
        setAppointmentId,
      }}
    >
      {children}
    </FormContex.Provider>
  );
};

export const useFormContex = () => {
  return useContext(FormContex);
};

export { FormContex, FormProvider };
