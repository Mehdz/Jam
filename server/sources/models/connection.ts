import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbConnect = async (): Promise<void> =>
{
  try {
    return await mongoose.connect(process.env.MONGO_URI || '')
      .then(() => console.log('Connected to MongoDB...'))
      .catch((err) => console.error('Coudn\'t connect MongoDB....', err));
  } catch (error) {
    console.error(error);
  }
};

export default dbConnect;
