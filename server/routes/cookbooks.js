const express = require('express');
const router = express.Router();
const Cookbook = require('../models/Cookbook');

// Create a new Cookbook
router.post('/', async (req, res) => {
    try {
        const cookbook = new Cookbook(req.body); 
        await cookbook.save();
        res.status(201).json(cookbook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all cookbooks 
router.get('/', async (req, res) => {
    try {

    } catch (err) {
        res.status.error(500)
    }
});

// Get a single Cookbook by ID 
router.get('/:id', async (req, res) => {
    try {
        const cookbook = await Cookbook.findById(req.params.id);
        if (!cookbook) return res.status(404).json({ message: 'Cookbook not found' });
        res.json(cookbook);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// Update a cookbook by ID
router.put('/:id', async (req, res) => {
    try {
      const cookbook = await Cookbook.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!cookbook) return res.status(404).json({ message: 'Cookbook not found' });
      res.json(cookbook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Delete a cookbook by ID
  router.delete('/:id', async (req, res) => {
    try {
      const cookbook = await Cookbook.findByIdAndDelete(req.params.id);
      if (!cookbook) return res.status(404).json({ message: 'Cookbook not found' });
      res.json({ message: 'Cookbook deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  module.exports = router;