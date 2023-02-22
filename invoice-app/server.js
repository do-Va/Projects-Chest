import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

// database
import connectDB from './database/connect.js';

// routes
import authRouter from './routes/authRoutes.js';

// middleware
import errorHandlerMiddleware from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';

const app = express();
dotenv.config();

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome');
});

const base = '/api/v1';

app.use(`${base}/auth`, authRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
