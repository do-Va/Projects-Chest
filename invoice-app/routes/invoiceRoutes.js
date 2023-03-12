import express from 'express';

import {
  createInvoice,
  getAllInvoices,
  getSingleInvoice,
} from '../controllers/invoiceController.js';

const router = express.Router();

router.route('/').post(createInvoice).get(getAllInvoices);

router.route('/:id').get(getSingleInvoice);

export default router;
