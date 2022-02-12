import express, {Application} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './routes/routes';
import dbConnect from './models/connection';

dotenv.config();

const app:Application = express();
const PORT:number = Number(process.env.PORT) || 8080;

app.listen(PORT, ():void => {
  console.log(`Server Running here 👉 https://localhost:${PORT}`);
});

app.use(express.json());
app.use(cors());
app.use(router);

dbConnect();
