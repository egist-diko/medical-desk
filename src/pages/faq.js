import React, { useEffect } from "react";
import Navbar from "../componets/shared/navbar";
import Footer from "../componets/shared/footer";
import back from "../assets/back.svg";
import { useHistory } from "react-router-dom";

const Faq = (props) => {
  let history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="font-poppins">
      <Navbar />
      <div>
        <div className="xl:pl-44 pl-8 pt-11 sm:w-full w-2/12 pb-8">
          <img
            src={back}
            onClick={() => history.goBack()}
            className="cursor-pointer"
            alt=""
          />
        </div>
        <div className="xl:px-64 sm:pb-28 px-8 pb-12">
          <div className="font-bold text-4.5xl pb-8">Faq</div>
          <div className="text-xs">
            <div className="text-main-col">
              I parcheggi sono sempre aperti?
              <br></br>
              <br></br>
              Sì, il servizio è operativo 24 ore al giorno, 7 giorni su 7. Puoi
              parcheggiare da noi la tua auto a qualsiasi ora e in qualsiasi
              giorno dell'anno.
              <br></br>
              <br></br>
              Perchè scegliere un parcheggio ParkinGO?
              <br></br>ParkinGO assicura il miglior rapporto qualità prezzo, con
              una consolidata esperienza nel settore dei parcheggi aeroportuali,
              portuali e dei servizi ai passeggeri. ParkinGO opera infatti nel
              settore dal 1995.
              <br></br> Perché è meglio scegliere il parcheggio satellite
              rispetto al parcheggio interno dell'aeroporto?
              <br></br>Si evitano lunghi tragitti a piedi con i bagagli e il
              trasporto passeggeri con la navetta avviene direttamente presso le
              aree di check-in. Con ParkinGO scegli non solo per la
              competitività del prezzo, ma anche per la qualità del servizio.
              <br></br>
              Esiste un servizio di navetta?
              <br></br> Sì, forniamo un servizio navetta operativo 24 ore al
              giorno, 7 giorni su 7 dal parcheggio all'aeroporto/porto e
              viceversa.
              <br></br> Devo pagare per il servizio di navetta da e per
              l'aeroporto/porto?
              <br></br> Il servizio navetta é sempre disponibile e incluso per i
              clienti del parcheggio.
              <br></br> Quando torno dal viaggio come avviso il parcheggio? Devo
              telefonarvi al rientro?
              <br></br> Sì, dopo aver ritirato i bagagli, devi telefonare agli
              appositi numeri che ti vengono rilasciati in accettazione il
              giorno del tuo arrivo affinché la navetta venga a prenderti in
              aeroporto e ti riaccompagni in parcheggio a ritirare la tua auto.
              <br></br>
              <br></br>
              Siete assicurati?
              <br></br>
              <br></br>
              Nel prezzo del parcheggio l'assicurazione contro furto e incendio
              è sempre compresa.
              <br></br>
              <br></br>
              La prenotazione è obbligatoria?
              <br></br>
              <br></br>
              La prenotazione è sempre consigliata, ma diventa obbligatoria nei
              periodi di alta stagione (luglio, agosto e dal 20/12 al 06/01),
              mentre nel parcheggio di Linate la prenotazione è sempre
              obbligatoria.
              <br></br>
              <br></br>
              Quanto tempo occorre per arrivare ai Terminal degli aeroporti?
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
