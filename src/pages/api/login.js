import users from "@/content/users";
import ocss from "ocsmsservice";
const jwt = require('jsonwebtoken');

const getSessionToken = (metadata) => {
  const token = jwt.sign( { metadata } , process.env.JWT_SECRET, {
    expiresIn: 86400 // expires in 24 hours
  });
  return token;
};

export default async function handler(req, res) {
  const user = users.find((user) => user.username === req.body.username && user.password === req.body.password );

  if (!user)
    return res.status(401).json({ message: "Invalid username or password" });

  const sms = await ocss.createToken("http://localhost:3001/dev", "1234567890", user.phone, { sToken: getSessionToken(user) })
  .then((data) => res.status(200).json({ token: data.token, user: user }))
  .catch((error) => res.status(500).end({ message: error }));
}