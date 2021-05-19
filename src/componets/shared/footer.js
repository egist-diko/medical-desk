import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import { useFormContex } from "../form/formContex";

const Footer = () => {
  const { onModify } = useFormContex();
  return (
    <div className="lg:px-64 px-8 pt-6 pb-16 bg-main-col w-full">
      <div className="sm:flex pb-24">
        <div className="pr-40">
          <div className="sm:w-6/12 w-8/12">
            <Link to="/" onClick={() => onModify()}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="text-xs text-white py-6">
            <div>Adress, Tirana, Albania</div>
            <div>Email: online@example.com</div>
            <div>Phone: xxx xxx xxx xxx</div>
          </div>
        </div>
        <div className="text-white">
          <div className="font-bold text-2xl pb-10">Supporto</div>
          <div className="sm:flex text-sm">
            <div>
              <Link to="/faq">Faq</Link>
            </div>
            <div>
              <Link className="sm:px-8 px-0 sm:py-0 py-1" to="/privacy">
                Privacy
              </Link>
            </div>
            <div>
              <Link to="/terms">Termini e condizicioni</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white text-sm text-center sm:text-left">
        2021 © Created by New Media Communications{" "}
      </div>
    </div>
  );
};

export default Footer;
