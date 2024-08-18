import fs from 'fs';
import path from 'path';
import { Application } from 'express';
const sqlite3 = require("sqlite3").verbose();

import { register } from './auth/register';
import { login } from './auth/login';

const db = new sqlite3.Database(path.resolve(__dirname, "../db/user.db"));

function auth(app: Application) {
    db.serialize(() => {
        db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE NOT NULL, password TEXT NOT NULL, email TEXT UNIQUE NOT NULL)", (err: any) => {
            if (err) {
                console.error(err);
            }
            else {
                console.log("User table created successfully");
            }
        });
    });

    register(app, db);
    login(app, db);
}

export { auth }