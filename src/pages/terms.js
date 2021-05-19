import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Navbar from "../componets/shared/navbar";
import Footer from "../componets/shared/footer";
import back from "../assets/back.svg";

const Terms = (props) => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let history = useHistory();
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
          <div className="font-bold text-4.5xl pb-8">
            {t("Termini e condizicioni")}
          </div>
          <div className="text-xs text-main-col">
            <div>
              Regolamento per l'acquisto di beni e servizi
              <br></br>Regolamento Covid-19
              <br></br>È consentito l’ingresso in parcheggio solo a coloro con
              temperatura inferiore ai 37,5°C, e a chi non abbia avuto negli
              ultimi 14 giorni contatti con soggetti risultati positivi al
              COVID-19.
              <br></br> All’interno delle strutture e dei mezzi ParkinGO è
              necessario indossare la mascherina e rispettare la distanza di
              sicurezza interpersonale.
              <br></br> Prima di ogni contatto con i nostri operatori è
              necessario utilizzare i prodotti di igienizzazione mani
              disponibili in diversi punti all’interno del parcheggio.
              <br></br>
              L’ingresso in navetta viene contingentato in base al mezzo
              presente al momento dell’arrivo, in parcheggio o in aeroporto.
              Seguire le indicazioni dei nostri operatori e non salire mai
              autonomamente senza autorizzazione.
              <br></br>
              <br></br>
              Identificazione del Fornitore
              <br></br>
              <br></br>I servizi oggetto del presente regolamento sono posti in
              vendita da ParkinGO Group S.R.L. con sede in Milano, via Fabio
              Filzi 2, codice fiscale e partita IVA 09276010965 di seguito
              indicata come “ParkinGO”.
              <br></br>
              <br></br>
              Le indicazioni che seguono regolano i rapporti tra ParkinGo Group
              S.r.l. (ParkinGO) fornitrice del servizio e gli utenti di tale
              servizio (di seguito denominati UTENTI). L'UTENTE che si avvale
              del servizio, incarica per suo nome e conto
              <br></br> ParkinGO S.r.l. di riservare i servizi di parcheggio
              selezionati; esprime il suo consenso al trattamento dei propri
              dati ec L. 675/96 mediante l'inserimento dei dati richiesti nella
              pagina web, e corrisponde il prezzo del servizio a titolo di
              <br></br>
              provvista anticipata, ossia come "mezzi necessari per l'esecuzione
              del mandato" (articolo 1719 c.c.), è tenuto a rispettare tutte le
              condizioni generali contenute nel presente regolamento. Il
              presente regolamento deve essere quindi letto ed approvato in
              tutte le sue parti prima di terminare l'operazione di
              registrazione.
              <br></br>
              <br></br>
              ***
              <br></br>
              <br></br>
              Art. 1 - Oggetto del servizio
              <br></br>
              <br></br>
              Il servizio ha come oggetto l'intermediazione per l'acquisto on
              line di servizi relativi alle aree di sosta così come indicati e
              offerti in vendita sul sito www. ParkinGO.com.
              <br></br>
              <br></br>
              Art. 2 - Corrispettivo dei servizi
              <br></br>
              <br></br>
              Il pagamento del servizio è consentito con carta di credito
              appartenenti ai principali circuiti. Il pagamento avviene
              attraverso uno sportello virtuale in modalità sicura con
              crittografia irreversibile a 128 bit. Per mezzo di questa modalità
              la transazione avviene esclusivamente in ambito bancario e
              ParkinGO Group S.r.l. non ha in alcun modo accesso ai dati della
              Carta di Credito dell'acquirente.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
