export default async function handler(req, res) {
    await fetch('http://localhost:3001/dev/validateToken', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Token': '1234567890'
        },
        body: JSON.stringify({
            token: req.body.token,
            code: req.body.code
        })
    }).then(async (response) => {
        if (response.status != 200) {
            res.status(400).json({ message: "Invalid Code" })
        } else {
            const data = await response.json();
            res.status(200).json(data)
        }
    })
}