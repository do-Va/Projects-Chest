import { StatusCodes } from 'http-status-codes';

import Invoice from '../model/Invoice.js';
import { BadRequestError } from '../errors/index.js';

const createInvoice = async (req, res) => {
  const {
    name,
    address,
    city,
    postCode,
    country,
    date,
    paymentTerms,
    status,
    items,
    clientName,
    clientEmail,
    clientAddress,
    clientCity,
    clientPostCode,
    clientCountry,
  } = req.body;

  if (
    !name ||
    !address ||
    !city ||
    !postCode ||
    !country ||
    !date ||
    !paymentTerms ||
    !status ||
    !items ||
    !clientName ||
    !clientEmail ||
    !clientAddress ||
    !clientCity ||
    !clientPostCode ||
    !clientCountry
  ) {
    throw new BadRequestError('Please provide all values');
  }

  const userId = req.user.userId;

  const invoice = await Invoice.create({
    name,
    address,
    city,
    postCode,
    country,
    date,
    paymentTerms,
    items,
    status,
    clientName,
    clientEmail,
    clientAddress,
    clientCity,
    clientPostCode,
    clientCountry,
    createdBy: userId,
  });

  res.status(StatusCodes.CREATED).json({ invoice });
};

const getAllInvoices = async (req, res) => {
  const invoices = await Invoice.find({ createdBy: req.user.userId });

  res.status(StatusCodes.OK).json({ invoices, totalInvoices: invoices.length });
};

export { createInvoice, getAllInvoices };
