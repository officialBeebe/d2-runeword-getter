import React, {useEffect} from 'react';
import {IRuneWord, IRuneWordProperties} from '../../../../types/IRuneWord';

// Define the interface for the props
interface IRuneWordProps {
  word: string;
  properties: IRuneWordProperties;
}

const RuneWord: React.FC<IRuneWordProps> = ({word, properties}) => {
  useEffect(() => {
    console.log('Match for RuneWord component: ', word, properties);
  }, []);

  let {active_in, items, level, runes} = properties;
  let reqSockets = runes.length;
  return (
    <div className="rune-word">
      <h3 className="rune-word-title">{word}</h3>
      <p className="rune-word-requirements">{runes}</p>
      <p className="rune-word-requirements">
        <span className="parentheses">&nbsp;{reqSockets}&nbsp;</span>&nbsp;Socket:&nbsp;
        {runes.join(', ')}
      </p>
      <ul className="rune-word-stats-list">
        {properties.properties.map((property, index) => (
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
