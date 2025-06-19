const express = require('express');
const router = express.Router();

let chats = [];

// Send message
router.post('/send', (req, res) => {
    const { senderId, receiverId, projectId, message } = req.body;
    const newMessage = { id: Date.now(), senderId, receiverId, projectId, message, timestamp: new Date() };
    chats.push(newMessage);
    res.status(201).json({ message: 'Message sent', chat: newMessage });
});

// Get messages by project
router.get('/:projectId', (req, res) => {
    const projectChats = chats.filter(chat => chat.projectId == req.params.projectId);
    res.json(projectChats);
});

module.exports = router;
