const express = require('express');
const router = express.Router();
const fs = require('fs');
const videos = './data/videos.json';
const { v4: uuid } = require("uuid");





router.post("/", (req, res) => {
    const { title, description } = req.body;


    const videosJSON = fs.readFileSync('./data/videos.json');
    const videosArray = JSON.parse(videosJSON);
    console.log("hello", req.body);

    const newVideo = {
        id: uuid(),
        title: title,
        channel: "BrainStation",
        image: "https://i.imgur.com/8EiYYfD.jpeg",
        description: description,
        views: "0",
        likes: "0",
        duration: "0:10",
        video: 'https://project-2-api.herokuapp.com/stream/',
        timestamp: Date.now(),
    };

    videosArray.unshift(newVideo);

    fs.writeFileSync('./data/videos.json', JSON.stringify(videosArray))
    
    res.send(newVideo);
});









router.get("/:id", (req, res) => {
    const videoId = req.params.id;

    const videosJSON = fs.readFileSync('./data/videos.json');
    const videosArray = JSON.parse(videosJSON);

    const video = videosArray.find((video) => video.id === videoId)

    res.json(video);
});










router.get("/", (req, res) => {
    console.log('Reached videos');

    const videosJSON = fs.readFileSync('./data/videos.json');

    res.send(videosJSON);

});

module.exports = router;