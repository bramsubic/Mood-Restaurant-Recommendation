const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for a recipe
const recipeSchema = new Schema({
    title: {type: String, required: true},
    ingredients: {type: String, required: true},
    instructions: {type: String, required: true},
    notes: String, 
    prepTime: Number,
    cookTime: Number,
    cuisine: String, 
    cookbooks: [{ type: Schema.Types.ObjectId, ref:'Cookbook'}]
});

module.exports = mongoose.model('Recipe', recipeSchema);