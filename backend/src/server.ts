import express from 'express';
import { auth } from './api/auth';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

auth(app);

app.listen(3000, () => {
    console.log(`Server started on port ${port}`);
});