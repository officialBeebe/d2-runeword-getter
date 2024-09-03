import type { IRune } from './IRune';
import type { IRuneWord } from './IRuneWord';

declare global {
  interface Window {
    runeApi: {
      getRuneWordMatches: (runes: string[]) => Promise<IRuneWord[]>;
      getRuneList: () => Promise<{runes: Record<string, IRune>}>;
      // If you have characters and character APIs, include them as well
      // getCharacters: () => Promise<string[]>;
      // getCharacter: (characterName: string) => Promise<Character>;
    };
  }
}

export {};
