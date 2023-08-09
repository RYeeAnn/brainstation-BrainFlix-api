const express = require('express');
const cors = require('cors');
const app = express();
const videosRouter = require('./routes/videosRouter');





require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use('/videos', videosRouter);



app.get("/", (req, res) => {
    console.log('Made it to the server!');
    res.send('Welcome to the server!');
});

app.listen(PORT, () => {
    console.log(`Listening on ${process.env.PORT}`);
});