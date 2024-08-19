import jwt from "jsonwebtoken";
import { Application } from "express";

function authenticate(app: Application) {
    app.post('/api/auth/authenticate', (req, res) => {
        const token = req.body.token;
        console.log(token)

        if (!token) {
            return res.json({ active: false, message: "Session expired or invalid" });
        }

        jwt.verify(token, process.env.JWT_SECRET || "ASDQWE123321", (err: any, decoded: any) => {
            if (err) {
                console.error("JWT Verification Error:", err);
                return res.json({ active: false, message: "Session expired or invalid" });
            }

            return res.send({
                active: true,
                id: decoded.id,
                username: decoded.user,
                email: decoded.email,
                token: req.session.token
            });
        });
    });
}

export { authenticate };
