const express = require('express');
const router = express.Router();

let freelancers = [];

// Create/Update freelancer profile
router.post('/profile', (req, res) => {
    const { userId, skills, experience, rating } = req.body;
    const profile = { userId, skills, experience, rating };
    freelancers.push(profile);
    res.status(201).json({ message: 'Freelancer profile saved', profile });
});

// Get all freelancers
router.get('/', (req, res) => {
    res.json(freelancers);
});

module.exports = router;
