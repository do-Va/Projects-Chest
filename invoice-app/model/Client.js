import mongoose from 'mongoose';
import validator from 'validator';

const ClientSchema = new mongoose.Schema({
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
});

export default mongoose.model('Client', ClientSchema);
