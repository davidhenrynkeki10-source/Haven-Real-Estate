const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/contact', (req, res) => {
    console.log('New submission:', req.body);
    // save it, email it, etc.
    res.status(201).json({ success: true });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));