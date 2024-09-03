import React from 'react';
import Rune from './Rune';

// Define the props interface
interface RuneListContainerProps {
  runeList: string[];
  runes: string[];
  handleAddRune: (rune: string) => void;
  handleRemoveRune: (rune: string) => void;
}

// Helper function to count occurrences of a rune in the runes array
const countOccurrences = (arr: string[], val: string): number =>
  arr.filter(item => item === val).length;

const RuneListContainer: React.FC<RuneListContainerProps> = ({
  runeList,
  runes,
  handleAddRune,
  handleRemoveRune,
}) => {
  const runeListContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  };

  const runeListStyle: React.CSSProperties = {
    listStyleType: 'none',
  };

  const runeListItemStyle: React.CSSProperties = {
    display: 'inline-block',
  };

  return (
    <div
      className="rune-list-container"
      style={runeListContainerStyle}
    >
      <ul style={runeListStyle}>
        {runeList.map((rune, index) => (
          <li
            style={runeListItemStyle}
            key={index}
          >
            <Rune
              rune={rune}
              count={countOccurrences(runes, rune)}
              handleAddRune={handleAddRune}
              handleRemoveRune={handleRemoveRune}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RuneListContainer;
