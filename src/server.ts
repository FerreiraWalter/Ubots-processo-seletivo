import express from 'express';
import routes from './routes';
import { catchError } from './middlewares/CatchError';
import "dotenv/config";

const app = express();
const port = 8080;

app.use(express.json());
app.use(routes);
app.use(catchError);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
