import express from 'express';

const route =  express.Router();

route.get('/fetch', (req, res) => {
    res.json("hello user");
});

export default route;