import express from 'express';

import {
  createInvoice,
  getAllInvoices,
} from '../controllers/invoiceController.js';

const router = express.Router();

router.route('/').post(createInvoice).get(getAllInvoices);

export default router;
