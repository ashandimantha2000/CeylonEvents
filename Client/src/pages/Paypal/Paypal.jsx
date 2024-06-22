import React, { useState } from 'react';
import axios from 'axios';

function Paypal() {
  const [amount, setAmount] = useState('');
  const [paymentId, setPaymentId] = useState('');
  const [payerId, setPayerId] = useState('');
  const [message, setMessage] = useState('');

  const createPayment = async () => {
    const response = await axios.post('http://localhost:3000/api/paypal/create-payment', { total: amount });
    window.location.href = response.data.redirectUrl;
  };

  const executePayment = async () => {
    const response = await axios.post('http://localhost:3000/api/paypal/execute-payment', { paymentId, payerId });
    setMessage('Payment Successful');
  };

  return (
    <div>
      <br /><br /><br /><br /><br /><br />
      <h1>PayPal Integration</h1>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={createPayment}>Pay with PayPal</button>

      <h2>Execute Payment</h2>
      <input
        type="text"
        value={paymentId}
        onChange={(e) => setPaymentId(e.target.value)}
        placeholder="Payment ID"
      />
      <input
        type="text"
        value={payerId}
        onChange={(e) => setPayerId(e.target.value)}
        placeholder="Payer ID"
      />
      <button onClick={executePayment}>Execute Payment</button>

      {message && <h3>{message}</h3>}
    </div>
  );
}

export default Paypal;
