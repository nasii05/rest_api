import express from 'express';

const router =  express.Router();

router.get('/fetch', (req, res) => {
    res.json('hello user')
});

export default router;