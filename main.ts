import "dotenv/config";
import express from 'express';
import bodyParser from 'body-parser';
import { addDilemma } from './controllers/dilemmaController.ts';

const app = express();
app.use(bodyParser.json());

app.post('/addDilemma', addDilemma);

app.listen(process.env.PORT, () => {
    console.log('Server is running on port ' + process.env.PORT);
});