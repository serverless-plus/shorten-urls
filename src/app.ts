import path from 'path';
import express from 'express';
import compression from 'compression'; // compresses requests
import bodyParser from 'body-parser';
import * as homeController from './controllers/home';

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

app.get('/', homeController.index);

export { app };
