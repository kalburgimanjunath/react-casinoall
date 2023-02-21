import React from 'react';
import './style.css';
import { Header, Banner, Cards } from './components';
import { Routes, Route } from 'react-router-dom';
import { Home, Category, Game } from './pages';
import { useParams } from 'react-router-dom';
import { GAMES } from './data/games';
export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home GAMES={GAMES} />}></Route>
        <Route path="/category/*" element={<Category />}></Route>
        <Route path="/item/*" element={<Game GAEMS={GAMES} />}></Route>
      </Routes>

      <ul>
        <li>Search</li>
        <li>Footer</li>
      </ul>
    </div>
  );
}
