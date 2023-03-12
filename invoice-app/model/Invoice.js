import mongoose from 'mongoose';
import validator from 'validator';

const InvoiceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: [true, 'Please provide address'],
    },
    city: {
      type: String,
      required: [true, 'Please provide city'],
    },
    postCode: {
      type: String,
      required: [true, 'Please provide post code'],
    },
    country: {
      type: String,
      required: [true, 'Please provide country'],
    },
    date: {
      type: Date,
      required: [true, 'Please provide date'],
    },
    paymentTerms: {
      type: Number,
      enum: [1, 7, 14, 30],
      required: [true, 'Please provide payment terms'],
    },
    description: {
      type: String,
      required: [true, 'Please provide description'],
    },
    status: {
      type: String,
      enum: ['paid', 'pending', 'draft'],
      required: [true, 'Please provide status'],
    },
    items: [
      {
        name: { type: String, required: [true, 'Please provide name'] },
        quantity: {
          type: Number,
          required: [true, 'Please provide quantity'],
        },
        price: { type: Number, required: [true, 'Please provide price'] },
        amount: { type: Number },
        check: { type: String },
      },
    ],
    clientName: {
      type: String,
      required: [true, 'Please provide name'],
    },
    clientEmail: {
      type: String,
      required: [true, 'Please provide email'],
      validate: {
        validator: validator.isEmail,
        message: 'Please provide a valid email',
      },
      unique: true,
    },
    clientAddress: {
      type: String,
      required: [true, 'Please provide address'],
    },
    clientCity: {
      type: String,
      required: [true, 'Please provide city'],
    },
    clientPostCode: {
      type: String,
      required: [true, 'Please provide post code'],
    },
    clientCountry: {
      type: String,
      required: [true, 'Please provide country'],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('Invoice', InvoiceSchema);
