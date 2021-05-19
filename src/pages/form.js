import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import ValidationSchema from "../componets/form/validationSchema";
import { useFormContex } from "../componets/form/formContex";

import Part1 from "../componets/form/formparts/part1";
import Part2 from "../componets/form/formparts/part2";
import Part3 from "../componets/form/formparts/part3";
import Part4 from "../componets/form/formparts/part4";
import Part5 from "../componets/form/formparts/part5";
import Part6 from "../componets/form/formparts/part6";
import Navbar from "../componets/shared/navbar";
import Footer from "../componets/shared/footer";
import Title from "../componets/form/title";

import back from "../assets/back.svg";

const Form = () => {
  const { STEPS, visualStep, setLocalData, onModify, step } = useFormContex();

  const validationSchema = ValidationSchema;

  let history = useHistory();

  const localData = localStorage.getItem("Part1");
  const { store, date } = JSON.parse(localData);

  useEffect(() => {
    setLocalData(JSON.parse(localData));
    window.scrollTo(0, 0);
  }, []);

  const selected =
    "font-bold sm:text-4.5xl text-lgish text-left pb-8 pt-16 cursor-pointer";
  return (
    <div className="text-main-col font-poppins">
      <Navbar />
      <div className="sm:container  sm:mx-auto lg:px-16 px-8">
        <div className=" pt-11 sm:w-full w-2/12 pb-8 xl:-ml-16">
          <img
            src={back}
            className="pl-5 cursor-pointer"
            onClick={() => {
              onModify();
              history.goBack();
            }}
            alt=""
          />
        </div>
        <div className=" sm:pb-11 pb-3 ">
          <div className="font-bold sm:text-title text-lgish sm:text-left text-center pb-8">
            PRENOTA SERVIZIOIN STORE
          </div>
          <div className="sm:text-left text-center">
            All’interno delle strutture e dei mezzi ParkinGO è necessario
            indossare la
            <br></br> mascherina e rispettare la distanza di sicurezza
            interpersonale.
          </div>
        </div>
        <div className={selected}>01. Prenota ora i tamponi in Drive-in</div>
      </div>
      <div className="w-full sm:container sm:mx-auto lg:px-16">
        <Part1 />
      </div>
      <div className="sm:container  sm:mx-auto pb-24 sm:pb-32 lg:px-16 px-8">
        <Title
          text="02. Prenota ora i tamponi in Drive-in"
          part={STEPS.part2}
        />
        <div>
          <div className={visualStep !== 2 ? "hidden" : "w-full"}>
            {step >= 2 ? (
              <Part2
                validationSchema={validationSchema[STEPS.part2 - 1]}
                store={store}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        <Title
          text="03. Scegli fra le date e orari disponibili"
          part={STEPS.part3}
        />
        <div className={visualStep !== 3 ? "hidden" : "w-full"}>
          {step >= 3 ? (
            <Part3
              validationSchema={validationSchema[STEPS.part3 - 1]}
              when={date}
              store={store}
            />
          ) : (
            <></>
          )}
        </div>
        <Title text="04. Dati anagrafici" part={STEPS.part4} />
        <div className={visualStep !== 4 ? "hidden" : "w-full"}>
          {step >= 4 ? (
            <Part4 validationSchema={validationSchema[STEPS.part4 - 1]} />
          ) : (
            <></>
          )}
        </div>
        <Title text="05. Tipo di ricevuta" part={STEPS.part5} />
        <div className={visualStep !== STEPS.part5 ? "hidden" : "w-full"}>
          {step >= STEPS.part5 ? (
            <Part5 validationSchema={validationSchema[STEPS.part5 - 1]} />
          ) : (
            <></>
          )}
        </div>
        <Title text="06. Metodo di pagamento" part={STEPS.part6} />
        <div className={visualStep !== 6 ? "hidden" : "w-full"}>
          {step === 6 ? <Part6 /> : <></>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Form;
