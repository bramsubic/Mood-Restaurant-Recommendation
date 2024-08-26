import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import BlogPage from './pages/BlogPage';
import GroceriePage from './pages/GroceriePage';
import ExplorePage from './pages/ExplorePage';
import HomePage from './pages/HomePage';
import PlanPage from './pages/PlanPage';
import Nav from './components/Nav/Nav'
import RecipePage from './pages/RecipePage';

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/groceries' element={<GroceriePage />} />
        <Route path='/explore' element={<ExplorePage />} />
        <Route path='/plan' element={<PlanPage />} />
        <Route path='/recipes' element={<RecipePage />} />
      </Routes>
    </Router>
  )
}

export default App
