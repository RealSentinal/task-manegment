import jwt from "jsonwebtoken";
import { Application } from "express";

function checksession(app: Application) {
    app.get('/api/session', (req, res) => {
        // const token = req.session.token;

        if (!req.session.user) {
            res.json({ active: false, message: "Session expired or invalid" });
        }

        // jwt.verify(token, "ASDQWE123321", (err: any) => {
        //     if (err) {
        //         res.json({ active: false, message: "Session expired or invalid" });
        //     }
        // });
        res.send({ active: true, user: req.session.user })
    });
}

export { checksession }