import React from "react";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Reserve from "./reserve";
import Tampon from "./tampon";

const HPCenter = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full bg-homepagebg xl:px-64 xl:pb-48 xl:pt-16 py-12 px-9 bg-no-repeat bg-cover">
      <div className="text-main-col sm:text-title text-titlexs text-center font-bold pb-16">
        {t("TAMPONE RAPIDO ANTIGENICO E TAMPONE MOLECOLARE PCR")}
      </div>
      <div className="flex justify-center items-center">
        <div className="lg:grid grid-cols-3 justify-center">
          <div className="pb-4 lg:pb-0 lg:mr-2.5 mr-0">
            <Tampon />
          </div>
          <div className="col-span-2">
            <Reserve />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(HPCenter);
