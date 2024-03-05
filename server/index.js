import express from "express";
import cors from 'cors';
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/quote', async (req, res) => {
    try{
        const response = await axios.get('https://zenquotes.io/api/random');
        res.json(response.data[0]);
    }catch{
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }  
});

app.listen(8080, () => console.log('listening on http://localhost:8080'));