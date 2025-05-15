import "dotenv/config";
import cors from "cors"
import express from 'express';
import bodyParser from 'body-parser';
import { addDilemma, getDilemma, setDilemmaClicks } from './controllers/dilemmaController.ts';

const app = express();
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    methods: ['POST'],
    allowedHeaders: ['Content-Type']
}));    
app.use(bodyParser.json());

app.post('/addDilemma', addDilemma);
app.get('/getDilemma', getDilemma);
app.post("/setDilemmaClicks", setDilemmaClicks)

app.listen(process.env.PORT, () => {
    console.log('Server is running on port ' + process.env.PORT);
});