import sqlite3 from "sqlite3";
import bcrypt from "bcrypt";
import { Application, application } from "express";

const db = new sqlite3.Database("./db/user.db");

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE NOT NULL, password TEXT NOT NULL, email TEXT UNIQUE NOT NULL)");
});

async function register(app: Application) {
    app.post("/api/auth/register", async (req, res) => {
        const username: string = req.body.username;
        const password: string = req.body.password;
        const email: string = req.body.email;
        const hashedPassword = await bcrypt.hash(password, 10);
        db.run("INSERT INTO users (username, password, email) VALUES (?, ?, ?)", [username, hashedPassword, email], (err) => {
            if (err) {
                console.error(err);
                res.status(500).send("Error registering user");
            } else {
                res.status(200).send("User registered successfully");
            }
        });
    });
}
export { register }