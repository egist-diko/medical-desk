import React from "react";

import InputField from "./inputField";

const PrivateForm = () => {
  return (
    <div className="sm:grid grid-cols-2 sm:gap-x-28 gap-y-4">
      <InputField type="text" label="Nome" name="fname" id="fname" />
      <InputField type="text" label="Cogname" name="lname" id="lname" />
      <InputField type="text" label="Codice Fiscale" name="fcode" id="fcode" />
      <InputField
        type="text"
        label="Email invio fattura"
        name="email"
        id="email"
      />
      <InputField type="text" label="Indirizzo" name="address" id="address" />
      <InputField type="text" label="Citta" name="city" id="city" />
      <InputField type="text" label="Cap" name="postalcode" id="postalcode" />
      <InputField type="text" label="Provinzia" name="province" id="province" />
      <InputField type="text" label="Nazione" name="nation" id="nation" />
    </div>
  );
};

export default PrivateForm;
