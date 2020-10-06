import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

import indexRoutes from './routes/index';

//SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('views', path.resolve('views'))

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) 
// parse application/json
app.use(bodyParser.json())

//Globals variables

//ROUTES
app.use('/api', indexRoutes);

//Static files
app.use(express.static(path.resolve('public')));

//this folder for this app will be used to store public files
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;