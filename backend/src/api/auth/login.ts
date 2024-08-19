import sqlite3 from "sqlite3";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
                res.status(500).send({ message: "Error logging in" });
                return;
            }
            if (!row) {
                res.status(401).send({ message: "Invalid username" });
                return;
            }
            const passwordMatch = await bcrypt.compare(password, row.password);
            if (!passwordMatch) {
                res.status(401).send({ message: "Invalid password" });
                return;
            }

            req.session.user = {
                id: row.id,
                sessionId: req.sessionID,
            }
            req.session.token = jwt.sign({ id: row.id }, "ASDQWE123321", { expiresIn: "2m" });

            res.status(200).send({
                message: "Logged in successfully",
            });
        })
    })
}

export { login }