import express, {type Request, type Response} from 'express';
import { addDilemma } from './controllers/dilemmaController.ts';

const app = express();

app.get('/addDilemma', addDilemma);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});