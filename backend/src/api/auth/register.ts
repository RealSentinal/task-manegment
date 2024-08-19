import sqlite3 from "sqlite3";
import bcrypt from "bcrypt";
import { Application, Request, Response } from "express";

async function register(app: Application, db: sqlite3.Database) {
    console.log("New register route");
    app.post("/api/auth/register", async (req: Request, res: Response) => {
        const username: string = req.body.username;
        const password: string = req.body.password;
        const email: string = req.body.email;
        const hashedPassword = bcrypt.hashSync(password, 10);

        if (!username || !password || !email) {
            res.status(400).send({ message: "Missing data" });
            return;
        }

        db.run("INSERT INTO users (username, password, email) VALUES (?, ?, ?)", [username, hashedPassword, email], (err: any) => {
            if (err) {
                if (err.code === 'SQLITE_CONSTRAINT' && err.message.includes('UNIQUE')) {
                    res.status(409).send({ message: "Username or email already exists" });
                    return;
                } else
                    res.status(500).send({ message: "Error registering user" });
            } else {
                res.status(200).send({ message: "User registered successfully" });
            }
        });
    });
}
export { register }