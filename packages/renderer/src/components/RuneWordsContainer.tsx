import React, { useEffect } from 'react';
import RuneWord from './RuneWord';
import {IRuneWord} from '../../../../types/IRuneWord';

// Define the interface for the props
interface RuneWordsContainerProps {
  matches: IRuneWord[];

  handleBuild: (runeword: IRuneWord) => void;
}

const RuneWordsContainer: React.FC<RuneWordsContainerProps> = ({matches, handleBuild}) => {

  useEffect(() => {}, [matches]);
  return (
    <div className="rune-words-container">
      {matches.map((match, index) => (
        <RuneWord
          key={index}
          match={match}
          handleBuild={handleBuild}
        />
      ))}
    </div>
  );
};

export default RuneWordsContainer;
