import React from "react";

import InputField from "./inputField";

const AziendaForm = () => {
  return (
    <div className="sm:grid grid-cols-2 sm:gap-x-28 gap-y-4">
      <InputField type="text" name="fname" id="fname" label="Nome" />
      <InputField type="text" name="lname" id="lname" label="Cognome" />
      <InputField type="text" name="fcode" id="fcode" label="Codice fiscle" />
      <InputField
        type="email"
        name="email"
        id="email"
        label="Email invio fattura"
      />
      <InputField type="text" name="address" id="address" label="Indirizzo" />
      <InputField type="text" name="city" id="city" label="Citta" />
      <InputField type="number" name="postalcode" id="postalcode" label="Cap" />
      <InputField type="text" name="province" id="province" label="Provincia" />
      <InputField
        type="text"
        name="ragione"
        id="ragione"
        label="Ragione sociale"
      />
      <InputField type="text" name="VAT" id="VAT" label="P.iva" />
      <InputField
        type="text"
        name="recipient_code"
        id="recipient_code"
        label="Codice destinatario"
      />
      <InputField type="text" name="PEC" id="PEC" label="PEC" />
      <InputField id="nation" name="nation" label="Nazione" />
    </div>
  );
};

export default AziendaForm;
