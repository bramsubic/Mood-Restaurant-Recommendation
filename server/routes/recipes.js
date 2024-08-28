const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// Create a new Recipe
router.post('/', async (req, res) => {
  console.log('Received Recipe Data:', req.body); // Log received data
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    console.log('Recipe Created:', recipe); // Log created recipe
    res.status(201).json(recipe);
  } catch (err) {
    console.error('Error creating recipe:', err.message);
    res.status(400).json({ message: err.message });
  }
});

// Get all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find().populate('cookbooks');
    console.log('All Recipes:', recipes); // Log all recipes
    res.json(recipes);
  } catch (err) {
    console.error('Error fetching recipes:', err.message);
    res.status(500).json({ message: err.message });
  }
});

// Get a single recipe by ID
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate('cookbooks');
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
    console.log('Fetched Recipe:', recipe); // Log fetched recipe
    res.json(recipe);
  } catch (err) {
    console.error('Error fetching recipe:', err.message);
    res.status(500).json({ message: err.message });
  }
});

// Update a recipe by ID
router.put('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
    console.log('Recipe Updated:', recipe); // Log updated recipe
    res.json(recipe);
  } catch (err) {
    console.error('Error updating recipe:', err.message);
    res.status(400).json({ message: err.message });
  }
});

// Delete a recipe by ID
router.delete('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
    console.log('Recipe Deleted:', recipe); // Log deleted recipe
    res.json({ message: 'Recipe deleted' });
  } catch (err) {
    console.error('Error deleting recipe:', err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
