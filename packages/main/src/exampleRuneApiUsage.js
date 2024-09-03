// exampleUsage.js

import getRunewordMatches from './runeApi.js';

// Example set of runes
const runes = ['el', 'eld', 'nef', 'tal', 'io', 'sol', 'eth', 'lem', 'ort', 'thul'];

// Example rune words collection
const runeWords = {
    words: {
        "Ancient's Pledge": {
            runes: ['ral', 'ort', 'tal'],
            items: ['shield'],
            properties: ['50% Enhanced Defense', 'Cold Resist +43%', 'Lightning Resist +48%', 'Fire Resist +48%', 'Poison Resist +48%'],
            level: 21,
            active_in: { 'Normal': true, 'Ladder': true },
        },
        'Leaf': {
            runes: ['tir', 'ral'],
            items: ['staff'],
            properties: ['+3 to Fire Skills', '+3 to Fire Bolt', '+3 to Inferno', '+3 to Warmth', '+2 to Mana after each Kill'],
            level: 19,
            active_in: { 'Normal': true, 'Ladder': true },
        },
        // Add more rune words as needed for testing
    },
};

// Run the function to find matching rune words
const matches = getRunewordMatches(runes, runeWords);

// Output the matches
console.log('Matching Rune Words:', matches);
