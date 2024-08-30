const BASE_URL = 'http://localhost:5001'; // Base URL for your backend API

// Helper function to make API requests
const request = async (endpoint, method = 'GET', body = null) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  console.log(`Making ${method} request to ${BASE_URL}/${endpoint}`);
  console.log('Request body:', body);

  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });

  if (!response.ok) {
    console.error(`HTTP error! Status: ${response.status}`);
    const errorText = await response.text();
    console.error('Response body:', errorText);
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

// API functions
export const createRecipe = (recipe) => {
  console.log('Creating recipe with data:', recipe);
  return request('recipes', 'POST', recipe);
};

export const getRecipes = () => request('recipes');
export const getRecipeById = (id) => request(`recipes/${id}`);
export const updateRecipe = (id, recipe) => {
  console.log('Updating recipe with id:', id, 'and data:', recipe);
  return request(`recipes/${id}`, 'PUT', recipe);
};
export const deleteRecipe = (id) => request(`recipes/${id}`, 'DELETE');

export const getCookbooks = () => request('cookbooks');
export const getCookbookById = (id) => request(`cookbooks/${id}`);
export const createCookbook = (cookbook) => request('cookbooks', 'POST', cookbook);
export const updateCookbook = (id, cookbook) => request(`cookbooks/${id}`, 'PUT', cookbook);
export const deleteCookbook = (id) => request(`cookbooks/${id}`, 'DELETE');
