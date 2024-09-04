import React, {useEffect, useState} from 'react';
import {IRuneWord} from '../../../types/IRuneWord';
import {IRune} from '../../../types/IRune';
import RuneListContainer from './components/RuneListContainer';
import RuneWordsContainer from './components/RuneWordsContainer';
import './App.css';

function App() {
  const [runes, setRunes] = useState<IRune[]>([]);
  const [runewordMatches, setRunewordMatches] = useState<IRuneWord[]>([]);
  const [runeList, setRuneList] = useState<string[]>([]);

  const fetchMatches = async () => {
      let runeNames: string[] = runes.map(rune => rune.name);
      const runewordResponses: IRuneWord[] = await window.runeApi.getRuneWordMatches(runeNames);

      let _runewordMatches = runewordResponses;
      console.log('Matches: ', _runewordMatches);
      setRunewordMatches(_runewordMatches);
    };

  useEffect(() => {
      fetchMatches();
  }, [runes]);

  useEffect(() => {
    const fetchRunes = async () => {
      const runeListResponse = await window.runeApi.getRuneList();
      const runeListArray = Object.keys(runeListResponse.runes);
      setRuneList(runeListArray);
    };

    fetchRunes();
  }, []);

  // Rune Handlers
  const handleAddRune = (runeName: string) => {
    const selectedRune = {
      name: runeName,
      properties: {
        id: Date.now(), // Replace with actual id from data source
        createdWith: [],
        stats: {},
        characterLevel: 0,
      },
    } as IRune;

    setRunes([...runes, selectedRune]);
  };

  const handleRemoveRune = (rune: string) => {
    console.log('Removing rune:', rune);

    let newRunes = [...runes];

    let i = newRunes.findIndex(r => r.name.toLowerCase() === rune.toLowerCase());

    if (i > -1) {
      newRunes.splice(i, 1);
    }

    setRunes(newRunes);
  };

  const handleBuild = (runeword: IRuneWord) => {
    console.log('Building runeword:', runeword);

    let newRunes = [...runes];

    for (let rune of runeword.properties.runes) {
      console.log('Removing rune:', rune);

      let i = newRunes.findIndex(r => r.name.toLowerCase() === rune.toLowerCase());

      if (i > -1) {
        newRunes.splice(i, 1);
      }
    }

    setRunes(newRunes);
  };

  return (
    <div>
      {runeList.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="main-content">
          <RuneListContainer
            runeList={runeList}
            runes={runes.map(rune => rune.name)}
            handleAddRune={handleAddRune}
            handleRemoveRune={handleRemoveRune}
          />
          <RuneWordsContainer
            matches={runewordMatches}
            handleBuild={handleBuild}
          />
        </div>
      )}
    </div>
  );
}

export default App;
