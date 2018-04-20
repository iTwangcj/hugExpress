import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import * as morgan from 'morgan';
import { Route } from './routes';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

Route(app);

app.listen(3000, () => {
	console.log(`Server start.`);
});