import * as React from 'react';
import { Game, getCorrectAnswers, Grid } from './components/Game';
import './style.css';

export default function App() {
  return (
    <div>
      <Game correctAnswers={getCorrectAnswers()} grid={Grid} />
    </div>
  );
}
