import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/post.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://aysha30:aysha30@cluster0.xy1g7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);