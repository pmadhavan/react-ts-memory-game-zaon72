import { MouseEvent, MouseEventHandler, useState } from 'react';
import styles from './Block.module.css';

const block_status = {
  default: 'undefined',
  memorize: styles.memorize_block,
  correct: styles.correct_block,
  incorrect: styles.incorrect_block,
};
export const Block = ({
  blockId,
  correctAnswers,
  canShowAnswers,
}: {
  blockId: number;
  correctAnswers: number[];
  canShowAnswers: boolean;
}) => {
  let isCorrect = correctAnswers.includes(blockId);
  let memorize = isCorrect && canShowAnswers;

  const [status, setStatus] = useState(block_status.default);

  const handleBlockClick: MouseEventHandler<HTMLDivElement> = (
    e: MouseEvent
  ) => {
    console.log('clicked', isCorrect);
    isCorrect
      ? setStatus(block_status.correct)
      : setStatus(block_status.incorrect);
  };
  return (
    <div
      role="button"
      className={`${styles.block} ${memorize ? block_status.memorize : status}`}
      onClick={handleBlockClick}
    >
      {blockId}
    </div>
  );
};
