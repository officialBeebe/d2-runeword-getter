import React, {useEffect, useState} from 'react';
import '../App.css';

// Define the props interface
interface RuneProps {
  rune: string;
  count: number;
  handleAddRune: (rune: string) => void;
  handleRemoveRune: (rune: string) => void;
}

// Function to capitalize the first letter of a string
const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Rune component
const Rune: React.FC<RuneProps> = ({rune, count, handleAddRune, handleRemoveRune}) => {
  const [runeImage, setRuneImage] = useState<string>('');

  useEffect(() => {
    try {
      // Assuming your images are served correctly from the public directory
      const imagePath = `/assets/sprites/${rune}_rune.png`;
      setRuneImage(imagePath);
    } catch (error) {
      console.error(error);
      setRuneImage(''); // Optionally set a fallback image
    }
  }, [rune]);

  return (
    <div
      className="rune-container"
      onClick={() => handleAddRune(rune)}
      onAuxClick={() => handleRemoveRune(rune)}
    >
      <span className="rune-title">{capitalizeFirstLetter(rune)}</span>
      {runeImage && (
        <img
          className="rune-image"
          src={runeImage}
          alt={capitalizeFirstLetter(rune)}
        />
      )}
      <span className={count > 0 ? 'active rune-counter' : 'inactive rune-counter'}>{count}</span>
    </div>
  );
};

export default Rune;
