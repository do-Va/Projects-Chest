import express from 'express';

import {
  createInvoice,
  getAllInvoices,
  getSingleInvoice,
  updateInvoice,
} from '../controllers/invoiceController.js';

const router = express.Router();

router.route('/').post(createInvoice).get(getAllInvoices);

router.route('/:id').get(getSingleInvoice).patch(updateInvoice);

export default router;
