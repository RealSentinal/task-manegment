import { Application } from 'express';
import { register } from './auth/register';
import fs from 'fs';

if (!fs.existsSync("./db/user.db")) {
    fs.writeFileSync("./db/user.db", "[]");
}

function auth(app: Application) {
    register(app);
}