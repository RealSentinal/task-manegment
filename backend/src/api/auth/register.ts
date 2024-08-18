import sqlite3 from "sqlite3";
import bcrypt from "bcrypt";
import { Application, Request, Response } from "express";

async function register(app: Application, db: sqlite3.Database) {

    app.post("/api/auth/register", async (req: Request, res: Response) => {
        const username: string = req.body.username;
        const password: string = req.body.password;
        const email: string = req.body.email;
        console.log({ username, password, email })
        // req.body is undefined
        const hashedPassword = bcrypt.hashSync(password, 10);
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