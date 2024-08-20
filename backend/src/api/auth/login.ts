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
    console.log("New login route");

    app.post("/api/auth/login", async (req, res) => {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.send("Missing username or password");
        }

        try {
            db.get("SELECT * FROM users WHERE username = ?", [username], async (err, row: User) => {
                if (err) {
                    console.error("Database error:", err);
                    return res.send({ message: "Error logging in" });
                }

                if (!row) {
                    return res.send({ message: "Invalid username" });
                }

                const passwordMatch = await bcrypt.compare(password, row.password);

                if (!passwordMatch) {
                    return res.send({ message: "Invalid password" });
                }

                const token = jwt.sign(
                    { id: row.id, username: row.username, email: row.email },
                    process.env.JWT_SECRET || "ASDQWE123321",
                    { expiresIn: "15m" }
                );

                req.session.user = {
                    id: row.id,
                    username: row.username,
                };

                return res.send({
                    active: true,
                    message: "Logged in successfully",
                    token: token
                });
            });
        } catch (error) {
            console.error("Login error:", error);
            return res.status(500).send({ message: "Internal server error" });
        }
    });
}

export { login };
