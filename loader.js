export default function handler(req, res) {
    res.status(403).setHeader("Content-Type", "text/html; charset=utf-8").send(`
<!DOCTYPE html>
<html>
<head>
    <title>Ryken</title>
</head>
<body>
    <h1>Access Denied</h1>
    <p>This resource cannot be accessed from a browser.</p>
</body>
</html>
`);
}
