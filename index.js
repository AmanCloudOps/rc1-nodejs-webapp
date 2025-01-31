const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: "Hello, World! This is an node.js app created by Aman Kumar" });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

