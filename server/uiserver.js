import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';
import render from './render.jsx';
const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static(path.resolve(__dirname, '../public')));
app.use('/images', express.static(path.resolve(__dirname, '../src/images')))

app.get('*', render);

app.listen(port, () => console.log(`Server has been starting with port ${port}`));
