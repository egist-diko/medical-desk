import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../componets/shared/navbar";
import Footer from "../componets/shared/footer";
import back from "../assets/back.svg";

const Privacy = (props) => {
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
          <div className="font-bold text-4.5xl pb-8">Privacy</div>
          <div className="text-xs text-main-col">
            <div className="font-bold">
              Informativa in materia di protezione dei dati personali ai sensi
              dell'art. 13 del Regolamento Europeo 2016/679 (GDPR)
            </div>
            <div>
              In osservanza di quanto previsto ai sensi e per gli effetti degli
              artt. 13 e 14 del Regolamento Europeo 2016/679 [in seguito GDPR] e
              in linea con il Decreto Legislativo 30 giugno 2003, n° 196 [in
              seguito D.Lgs. 196/2003] e s.m.i. date dal Decreto Legislativo 10
              agosto 2018, n° 101 [in seguito D.Lgs. 101/2018], ParkinGO Group
              S.r.l., nella sua qualità di titolare del trattamento dei dati
              personali, in persona del legale rappresentante, con la presente
              informa su quali siano le finalità e modalità del trattamento dei
              dati personali raccolti, il loro ambito di comunicazione e
              diffusione, oltre alla loro natura ed il loro conferimento, e
              nello specifico quanto segue.
              <br></br>
              1. Finalità
              <br></br>I dati personali comuni relativi alla Sua persona,
              oggetto del trattamento, in possesso del titolare o che verranno
              richiesti in seguito o comunicati da terze parti sono necessari,
              provengono da operazioni di trattamento dei dati che ha fornito al
              momento della registrazione al servizio ParkinGO o che siano
              riconducibili ai siti del network ParkinGO Group S.r.l., e saranno
              utilizzati per:
              <br></br>1.1. senza il Suo consenso espresso (art. 6 lett. b), e)
              del GDPR), per le seguenti Finalità di Servizio:
              <br></br>esecuzione a vostro favore dei servizi, come promossi
              anche nell’ambito del sito www.parkingo.com;
              <br></br>adempiere agli obblighi precontrattuali, contrattuali e
              fiscali derivanti da rapporti con Lei in essere;
              <br></br>
              adempiere agli obblighi previsti dalla legge, da un regolamento,
              dalla normativa comunitaria o da un ordine dell’Autorità (come ad
              esempio in materia di antiriciclaggio);
              <br></br>esercitare i diritti del Titolare, ad esempio il diritto
              di difesa in giudizio;
              <br></br>1.2. Solo previo Suo specifico e distinto consenso (artt.
              130 Codice Privacy e art. 7 del GDPR), per le seguenti Finalità di
              Marketing:
              <br></br>inviarLe via e-mail, posta e/o sms e/o contatti
              telefonici, newsletter, comunicazioni commerciali e/o materiale
              pubblicitario su prodotti o servizi offerti dal Titolare e
              rilevazione del grado di soddisfazione sulla qualità dei servizi;
              <br></br>
              inviarLe via e-mail, posta e/o sms e/o contatti telefonici
              comunicazioni commerciali e/o promozionali di soggetti terzi (ad
              esempio, business partner, compagnie assicurative);
              <br></br>in caso di partecipazione al programma fedeltà, rendere
              possibile la partecipazione alle promozioni associate e promuovere
              prodotti, servizi, offerte e sconti esclusivi nell’ambito dei
              propri negozi e dei propri siti internet;
              <br></br>l’effettuazione di ricerche di mercato, anche via posta
              elettronica, in ordine all’offerta dei prodotti e dei servizi
              offerti dal titolare del trattamento.
              <br></br> Le segnaliamo che qualora siete già nostri clienti,
              potremo inviarLe comunicazioni commerciali relative a servizi e
              prodotti del Titolare analoghi a quelli di cui ha già usufruito,
              salvo Suo dissenso (art. 130 c. 4 Codice Privacy).
              <br></br> servizi richiesti.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
