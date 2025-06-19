const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); // ✅ Middleware import for protecting routes

let applications = []; // Temporary storage (replace with DB later)

// ✅ Submit proposal (Protected route)
router.post('/apply', auth, (req, res) => {
    const { projectId, proposalText, portfolio, rate } = req.body;

    const newApplication = {
        id: Date.now(),
        freelancerId: req.user.userId, // Fetched from decoded JWT token
        projectId,
        proposalText,
        portfolio,
        rate,
        submittedAt: new Date()
    };

    applications.push(newApplication);
    res.status(201).json({ message: 'Application submitted', application: newApplication });
});

// ✅ View all applications (Public route for now)
router.get('/', (req, res) => {
    res.json(applications);
});

module.exports = router;
