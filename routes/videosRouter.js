const express = require('express');
const router = express.Router();
const fs = require('fs');
const videos = './data/videos.json';

router.get("/", (req, res) => {
    console.log('Reached videos');

    const videosJSON = fs.readFileSync('./data/videos.json');

    res.send(videosJSON);

});

module.exports = router;