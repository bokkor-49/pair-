const express = require('express');
const app = express();

// Use JSON middleware for parsing JSON data (if required in the future)
app.use(express.json());

app.get('/love-calculator', (req, res) => {
    const boyName = req.query.boy;
    const girlName = req.query.girl;

    // Check if both boy and girl names are provided
    if (!boyName || !girlName) {
        return res.status(400).json({ 
            error: "Both boy and girl names are required." 
        });
    }

    // Calculate the love percentage (50-100)
    const lovePercentage = Math.floor(Math.random() * 51) + 50;

    // Return JSON response
    res.json({
        boy: boyName,
        girl: girlName,
        love_percentage: `${lovePercentage}%`
    });
});

// Set the port to 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
