const express = require("express");
const app = express();
const PORT = 3000;

app.get("/test", (req, res) => res.status(200).send({"message": "testing api"}));

console.log(`http://localhost:${PORT}`)

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
