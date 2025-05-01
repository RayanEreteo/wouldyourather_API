import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { addDilemma } from './controllers/dilemmaController.ts';

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.get('/addDilemma', addDilemma);

app.listen(process.env.PORT, () => {
    console.log('Server is running on port ' + process.env.PORT);
});