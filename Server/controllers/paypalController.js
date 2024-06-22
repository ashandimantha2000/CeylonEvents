const paypal = require('../config/paypal');

exports.createPayment = (req, res) => {
  const { total } = req.body;
  const create_payment_json = {
    "intent": "sale",
    "payer": {
      "payment_method": "paypal"
    },
    "redirect_urls": {
      "return_url": "http://localhost:3000/success",
      "cancel_url": "http://localhost:3000/cancel"
    },
    "transactions": [{
      "amount": {
        "currency": "USD",
        "total": total
      },
      "description": "Payment description"
    }]
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      throw error;
    } else {
      res.json({ id: payment.id });
    }
  });
};

exports.executePayment = (req, res) => {
  const { paymentId, payerId } = req.body;
  const execute_payment_json = {
    "payer_id": payerId
  };

  paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
      throw error;
    } else {
      res.json({ payment });
    }
  });
};
