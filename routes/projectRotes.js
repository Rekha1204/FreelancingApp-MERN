// routes/projectRoutes.js
const express = require('express');
const Project = require('./models/Project');
const router = express.Router();

// 🔨 Post a new project
router.post('/', async (req, res) => {
  try {
    const { title, description, budget, deadline, client } = req.body;
    const newProject = new Project({ title, description, budget, deadline, client });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📃 Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().populate('client', 'name email');
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
