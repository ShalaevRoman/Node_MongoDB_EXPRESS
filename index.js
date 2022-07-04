import express from 'express';
import mongoose from 'mongoose';
const app = express();
import { engine } from 'express-handlebars';

import homeRouter from './src/routes/routes.js';
import authRouter from './src/routes/authRouter.js'

app.use(express.urlencoded({extended: true}))
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(homeRouter);
app.use(authRouter);


app.listen(8080, async(error) => {
    await mongoose.connect('mongodb+srv://Roman:0958684618@cluster0.lue3vvw.mongodb.net/?retryWrites=true&w=majority');
    error ? console.log(error) : console.log("Port 8080 working");
});



