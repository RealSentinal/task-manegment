import express from 'express';
import session from 'express-session';

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

auth(app);

app.listen(3000, () => {
    console.log(`Server started on port ${port}`);
});