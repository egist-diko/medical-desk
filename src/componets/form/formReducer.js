const reducer = (state, action) => {
  if (action.type === "SUBMIT") {
    if (state.step === state.STEPS.part6) {
      const newStepValues = {
        ...state.stepValues,
        The_end: action.payload,
      };
      return { ...state, stepValues: newStepValues };
    } else if (state.step === state.STEPS.part4) {
      console.log(action.payload);
      const newStepValues = {
        ...state.stepValues,
        data: action.payload,
      };
      console.log(newStepValues);
      return {
        ...state,
        stepValues: newStepValues,
        step: state.STEPS.part5,
        visualStep: state.STEPS.part5,
      };
    } else if (state.step === state.STEPS.part3) {
      const localData = localStorage.getItem("Part1");
      const { store } = JSON.parse(localData);

      const newStepValues = {
        ...state.stepValues,
        store_id: String(store.id),
        date: action.payload.date,
        time: action.payload.time,
      };
      console.log(newStepValues);
      return {
        ...state,
        stepValues: newStepValues,
        step: state.STEPS.part4,
        visualStep: state.STEPS.part4,
      };
    } else if (state.step === state.STEPS.part2) {
      return {
        ...state,
        step: state.STEPS.part3,
        visualStep: state.STEPS.part3,
      };
    } else {
      return {
        ...state,
        step: state.STEPS.part6,
        visualStep: state.STEPS.part6,
      };
    }
  }
  if (action.type === "SET_PEOPLENR") {
    const newPeopleNr = action.payload;
    return { ...state, peopleNr: newPeopleNr };
  }
  if (action.type === "MODIFY") {
    return {
      ...state,
      stepValues: {},
      step: state.STEPS.part2,
      visualStep: state.STEPS.part2,
    };
  }
  if (action.type === "DISPLAY_STEP") {
    return { ...state, visualStep: action.payload };
  }
  if (action.type === "SET_LOCALDATA") {
    return { ...state, localData: action.payload };
  }
  if (action.type === "SET_APPOINTMENTID") {
    return { ...state, appointmentId: action.payload };
  }
};

export default reducer;
