import React from "react";
import { useState } from "react/cjs/react.development";

import { useFormContex } from "../formContex";

import Paypal from "../Paypal";

const Part6 = (props) => {
  const { appointmentId } = useFormContex();
  const [gotPayed, setGotPayed] = useState(false);

  if (gotPayed) {
    return (
      <>
        <div className="mx-8 lg:mx-0 lg:w-105">
          <div className="bg-green-100 border-green-500 text-black border-2">
            Payment Successful
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Paypal appointmentId={appointmentId} setGotPayed={setGotPayed} />
      </>
    );
  }
};

export default Part6;
