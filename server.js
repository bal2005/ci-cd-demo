const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const now = new Date();
    res.send(`Current Time: ${now.toLocaleTimeString()} | Date: ${now.toLocaleDateString()}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
