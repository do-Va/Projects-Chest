import { StatusCodes } from 'http-status-codes';

import Invoice from '../model/Invoice.js';
import Client from '../model/Client.js';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const createInvoice = async (req, res) => {
  const {
    name,
    address,
    city,
    postCode,
    country,
    date,
    paymentTerms,
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

  const client = await Client.create({
    clientName,
    clientEmail,
    clientAddress,
    clientCity,
    clientPostCode,
    clientCountry,
  });

  const userId = req.user.userId;
  const clientId = client._id;

  const invoice = await Invoice.create({
    name,
    address,
    city,
    postCode,
    country,
    date,
    paymentTerms,
    items,
    client: clientId,
    createdBy: userId,
  });

  res.status(StatusCodes.CREATED).json({ invoice });
};

export { createInvoice };
