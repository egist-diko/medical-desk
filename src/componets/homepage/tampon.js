import React from "react";
import { useTranslation } from "react-i18next";

import MyPDF from "../../pdf/TODO.pdf";

const Tampon = () => {
  const { t } = useTranslation();
  return (
    <div className="lg:px-14 px-8 lg:pt-10 pt-6 pb-14 bg-opacity-75 bg-dark-cyan lg:rounded-2.5xl rounded-mdish h-full">
      <div className="text-white font-bold text-3xl text-center lg:text-left  pr-0 lg:pb-14 pb-10">
        {t("Quanto costano i Tamponi")}
      </div>
      <div className="flex items-baseline pb-7 lg:px-0 px-10 lg:justify-start justify-center">
        <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-white mr-3"></div>
        <div className="text-white lg:text-2xl max-w-xxs text-lgish">
          Tampone Rapido Antigenico 50€
        </div>
      </div>
      <div className="flex items-baseline pb-16 justify-center lg:px-0 px-10 lg:justify-start">
        <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-white mr-3"></div>
        <div className="text-white lg:text-2xl max-w-xxs text-lgish">
          Tampone Molecolare PCR 95€
        </div>
      </div>
      <div className="">
        <a href={MyPDF} download="TODO.pdf">
          <button className="font-medium focus:outline-none flex justify-center w-full rounded-full bg-white text-main-col py-5 sm:px-14 px-10">
            Scarica le date e gli orari in PDF
          </button>
        </a>
      </div>
    </div>
  );
};

export default Tampon;
