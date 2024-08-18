import sqlite3 from "sqlite3";
import bcrypt from "bcrypt";
import { Application } from "express";

interface User {
    id: number;
    username: string;
    password: string;
    email: string;
}

async function login(app: Application, db: sqlite3.Database) {
    app.post("/api/auth/login", async (req, res) => {
        const username: string = req.body.username;
        const password: string = req.body.password;
        if (!username || !password) {
            res.status(400).send("Missing username or password");
            return;
        }

        db.get("SELECT * FROM users WHERE username = ?", [username], async (err, row: User) => {
            if (err) {
                console.error(err);
                res.status(500).send("Error logging in");
                return;
            }
            if (!row) {
                res.status(401).send("Invalid username");
                return;
            }
            const passwordMatch = await bcrypt.compare(password, row.password);
            if (!passwordMatch) {
                res.status(401).send("Invalid password");
                return;
            }

            req.session.user = {
                id: row.id,
                username: row.username,
                email: row.email
            }
            res.status(200).send("Logged in successfully");
        })
    })
}

export { login }