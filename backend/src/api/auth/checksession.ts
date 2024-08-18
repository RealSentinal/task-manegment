import { Application } from "express";

function checksession(app: Application) {
    app.get('/api/session', (req, res) => {
        if (req.session.user) {
            res.json({ active: true, user: req.session.user });
        } else {
            res.json({ active: false, message: "Session expired or invalid" });
        }
    });
}

export { checksession }