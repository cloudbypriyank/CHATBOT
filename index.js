// chatbot-backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());

// Handling the root endpoint
app.get('/', (req, res) => {
    res.send('Hello, this is the chatbot backend!');
});

// Handling the setup endpoint
app.post('/setup', (req, res) => {
    const { name, greeting, prompt } = req.body;
    // Handle the setup data (e.g., save it to a database)
    console.log('Received Setup:', { name, greeting, prompt });
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
