import React, { useRef, useEffect } from "react";
export default function Paypal(props) {
  const paypal = useRef();
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: function () {
          return fetch(
            "https://medical-desk.staging.nmc-services.com/api/create-paypal-transaction",
            {
              method: "post",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                appointmentId: props.appointmentId,
              }),
            }
          )
            .then(function (res) {
              return res.json();
            })
            .then(function (data) {
              return data.result.id;
            })
            .catch((ex) => {
              console.log(ex);
            });
        },
        onApprove: function (data) {
          return fetch(
            "https://medical-desk.staging.nmc-services.com/api/capture-paypal-transaction",
            {
              method: "post",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                orderID: data.orderID,
              }),
            }
          )
            .then(function (res) {
              return res.json();
            })
            .then(function (details) {
              console.log(details.result);
              console.log("Payment Successful!");
              props.setGotPayed(true);
            })
            .catch((err) => {
              console.log(err);
            });
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
