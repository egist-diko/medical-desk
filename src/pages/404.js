import React from "react";
import { useHistory } from "react-router-dom";

import Navbar from "../componets/shared/navbar";
import Footer from "../componets/shared/footer";

import back from "../assets/back.svg";

const Page404 = () => {
  let history = useHistory();
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="mx-auto container">
        <div className="text-6xl font-bold">PAGE 404</div>
        <div className="xl:pl-44 pl-8 pt-11 sm:w-full w-2/12 pb-8">
          <img
            src={back}
            onClick={() => history.goBack()}
            className="cursor-pointer"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page404;
