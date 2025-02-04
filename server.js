//Pulling in express to create the API Server
const express = require('express');
const app = express();

app.use(express.json());    //middleware that parses JSON in the request body

//Creating a route listens for GET requests on the root URL
app.post('/', (req,res) => {
    const acceptHeader = req.get('accept');

    const responseBody = {
        acceptHeader: acceptHeader,
        ...req.body
    }

    res.json(responseBody)
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = server;