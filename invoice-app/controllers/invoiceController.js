import { StatusCodes } from 'http-status-codes';

import Invoice from '../model/Invoice.js';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import checkPermissions from '../utils/checkPermissions.js';

const createInvoice = async (req, res) => {
  const {
    name,
    address,
    city,
    postCode,
    country,
    date,
    paymentTerms,
    description,
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
    !description ||
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
    description,
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

const getSingleInvoice = async (req, res) => {
  const { id: invoiceId } = req.params;

  const singleInvoice = await Invoice.findOne({
    _id: invoiceId,
  });

  if (!singleInvoice) {
    throw new NotFoundError(`No invoice with id : ${invoiceId}`);
  }

  res.status(StatusCodes.OK).json({ singleInvoice });
};

const updateInvoice = async (req, res) => {
  const { id: invoiceId } = req.params;

  const {
    name,
    address,
    city,
    postCode,
    country,
    date,
    paymentTerms,
    description,
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
    !description ||
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

  const invoice = await Invoice.findOne({ _id: invoiceId });

  if (!invoice) {
    throw new NotFoundError(`No invoice with id : ${invoiceId}`);
  }

  // check permission
  checkPermissions(req.user, invoice.createdBy);

  const updatedInvoice = await Invoice.findOneAndUpdate(
    { _id: invoiceId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(StatusCodes.OK).json({ updatedInvoice });
};

export { createInvoice, getAllInvoices, getSingleInvoice, updateInvoice };
