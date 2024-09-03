import React from 'react';
import RuneWord from './RuneWord';
import {IRuneWord} from '../../../../types/IRuneWord';

// Define the interface for the props
interface RuneWordsContainerProps {
  matches: IRuneWord[];
}

const RuneWordsContainer: React.FC<RuneWordsContainerProps> = ({matches}) => {
  return (
    <div className="rune-words-container">
      {matches.map((match, index) => (
        <RuneWord
          key={index}
          word={match.word}
          properties={match.properties}
        />
      ))}
    </div>
  );
};

export default RuneWordsContainer;
