import React from "react";
import styles from "./PaypalComp.module.scss";
import axios from "axios";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useLocation } from "react-router-dom";

function PaypalComp() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const eventPrice = queryParams.get('price');

  const createPayment = async () => {
    const response = await axios.post(
      "http://localhost:3000/api/paypal/create-payment",
      { total: eventPrice }
    );
    window.location.href = response.data.redirectUrl;
  };

  const executePayment = async () => {
    const response = await axios.post(
      "http://localhost:3000/api/paypal/execute-payment",
      { paymentId, payerId }
    );
    setMessage("Payment Successful");
  };

  const initialOptions = {
    clientId: "AX6obRJvscK-AuOr4jccXN1fl9QfjGUwIvnu2feH1qYQ8tTnlztk7OoQRXLW7NsaeeTu5u88FVFpUemP",
    currency: "USD",
    intent: "capture",
  };

  return (
    <div className={styles.all}>
      <div className={styles.details}>
        <h3>Payment Summary</h3>
        <h4>
          Total: <span>{eventPrice}</span>
        </h4>
      </div>
      <div className={styles.paypal}>
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons />
        </PayPalScriptProvider>
      </div>
    </div>
  );
}

export default PaypalComp;
