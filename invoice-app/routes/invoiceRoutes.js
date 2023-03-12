import express from 'express';

import {
  createInvoice,
  getAllInvoices,
  getSingleInvoice,
  updateInvoice,
  changeInvoiceStatus,
} from '../controllers/invoiceController.js';

const router = express.Router();

router.route('/').post(createInvoice).get(getAllInvoices);

router
  .route('/:id')
  .get(getSingleInvoice)
  .patch(updateInvoice)
  .put(changeInvoiceStatus);

export default router;
