const jwt = require('jsonwebtoken');

export default async function handler(req, res) {
    const { token } = req.body;

    if (!token) return res.status(401).json({ message: "Invalid token" });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            if(err.expiredAt < new Date()) return res.status(401).json({ message: "Token expired" });
        }
        const expiration = new Date(decoded.exp * 1000);
        if(new Date() - expiration < 3600) {
            const newToken = jwt.sign({ metadata: decoded.metadata }, process.env.JWT_SECRET, {
                expiresIn: 86400 // expires in 24 hours
            });
            return res.status(200).json({ message: "Valid token", user: decoded.metadata, newToken: newToken });
        }
        res.status(200).json({ message: "Valid token", user: decoded.metadata});
    });
}