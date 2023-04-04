import users from "@/content/users";

const getSessionToken = () => {
  return "1234567890";
};

export default async function handler(req, res) {
  const user = users.find(
    (user) =>
      user.username === req.body.username && user.password === req.body.password
  );

  if (!user)
    return res.status(401).json({ message: "Invalid username or password" });

  await fetch("http://localhost:3001/dev/createToken", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Token": "1234567890",
    },
    body: JSON.stringify({
      phone: user.phone,
      metadata: {
        sToken: getSessionToken(),
      },
    }),
  })
    .then((res) => res.json())
    .then((data) => res.status(200).json({ token: data.token, name: user.name }))
    .catch((error) => res.status(500).end({ message: error }));
}
