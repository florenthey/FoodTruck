import express, { urlencoded } from 'express';
import 'dotenv/config';
const app = express();
const { PORT, url_DB } = process.env;
import volleyball from "volleyball";
import mongoose from 'mongoose';
import { truckRouter } from './routes/truck';

mongoose.connect(url_DB);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('[MongoDB] Connected !')
});

app.use(express.json());
app.use(volleyball);
app.use(express.urlencoded({extended : false}));

app.use('/food-truck', truckRouter);
app.use('/', (req, res) => {
    res.send("Yeah !");
})

app.listen(PORT, () => {
    console.log(`[APP running on port : ${PORT}]`);
})