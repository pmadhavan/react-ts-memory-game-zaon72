import { useState } from 'react';
import { Block } from './Block';
import styles from './Game.module.css';

const GRID_SIZE = 3;
export const Grid = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
export const getCorrectAnswers = () => {
  const correctAnswers = [];
  for (let i = 0; i < GRID_SIZE; i++) {
    let random = Math.floor(Math.random() * GRID_SIZE);
    correctAnswers.push(random);
  }
  return correctAnswers;
};
export const Game = ({
  correctAnswers,
  grid,
}: {
  correctAnswers: number[];
  grid: number[][];
}) => {
  const [canShowAnswers, setCanShowAnswers] = useState(false);
  const onStart = () => {
    console.log('Game Starts now...');
    setCanShowAnswers(true);

    setTimeout(() => {
      setCanShowAnswers(false);
    }, 1000);
  };
  return (
    <div className="game_container">
      <h1>Memory Game</h1>
      <button className={styles.start_button} onClick={onStart}>
        Start Game
      </button>
      <div className={styles.grid}>
        {grid.map((row, rIndex) =>
          row.map((col, cIndex) => (
            <Block
              key={col}
              blockId={col}
              correctAnswers={correctAnswers}
              canShowAnswers={canShowAnswers}
            />
          ))
        )}
      </div>
    </div>
  );
};
