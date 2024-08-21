import express from 'express';
import session from 'express-session';
import cookieparser from 'cookie-parser'

import { auth } from './api/auth';

const app = express();
const port = 3001;

app.use(session({
    secret: 'lasjdnisjdnSAaPKDMslasmd',
    name: 'session',
    cookie: { maxAge: 2 * 60 * 1000 },
    resave: false,
    saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());

auth(app);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});