import express from 'express';

import { createInvoice } from '../controllers/invoiceController.js';

const router = express.Router();

router.route('/').post(createInvoice);

export default router;
