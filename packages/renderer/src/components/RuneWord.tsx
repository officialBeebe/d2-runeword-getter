import React, {useEffect} from 'react';
import {IRuneWord, IRuneWordProperties} from '../../../../types/IRuneWord';

// Define the interface for the props
interface IRuneWordProps {
    match: IRuneWord;
    handleBuild: (match: IRuneWord) => void;
}

const RuneWord: React.FC<IRuneWordProps> = ({match, handleBuild}) => {
  useEffect(() => {
    console.log('Match for RuneWord component: ', match.word, match.properties);
  }, []);

  let {active_in, items, level, runes} = match.properties;
  let reqSockets = runes.length;
  return (
    <div className="rune-word" onClick={() => handleBuild(match)}>
      <h3 className="rune-word-title">{match.word}</h3>
      <p className="rune-word-requirements">{runes}</p>
      <p className="rune-word-requirements">
        <span className="parentheses">&nbsp;{reqSockets}&nbsp;</span>&nbsp;Socket:&nbsp;
        {runes.join(', ')}
      </p>
      <ul className="rune-word-stats-list">
        {match.properties.properties.map((property, index) => (
          <li
            className="rune-word-stat"
            key={index}
          >
            {property}
          </li>
        ))}
      </ul>
      <div className="rune-word-character-level-container">
        <span className="rune-word-character-level-label">CLVL</span>
        <span className="rune-word-character-level">{level}</span>
      </div>
    </div>
  );
};

export default RuneWord;
