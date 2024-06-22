const express = require('express');
const router = express.Router();
const { createPayment, executePayment } = require('../controllers/paypalController');

router.post('/create-payment', createPayment);
router.post('/execute-payment', executePayment);

module.exports = router;
