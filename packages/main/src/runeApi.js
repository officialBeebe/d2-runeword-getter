// Get the frequency count of elements in an array
function getFrequency(arr) {
    const frequency = arr.reduce((acc, element) => {
        acc[element] = (acc[element] || 0) + 1; // Increment the count for the element
        return acc; // Return the updated accumulator object
    }, {});
    // console.log('Frequency count for array', arr, 'is', frequency);
    return frequency;
}

// Check if freq1 is a subset of freq2
function isSubset(freq1, freq2) {
    // console.log('freq1:', freq1);
    // console.log('freq2:', freq2);
    const subsetCheck = Object.keys(freq1).every(element => freq1[element] <= (freq2[element] || 0));
    // console.log('Checking if', freq1, 'is subset of', freq2, ':', subsetCheck);
    return subsetCheck;
}

// Function to get runeword matches for a given set of runes
function getRunewordMatches(runes, runeWords) {
    let runeWordMatches = [];
    let addedWords = new Set(); // Set to track added runewords

    // Get frequency count of runes in the runes array
    const runesFreq = getFrequency(runes);
    // console.log('Runes frequency:', runesFreq);

    // Iterate over the runewords
    Object.entries(runeWords.words).forEach(([word, properties]) => {
        // console.log(`\nEvaluating rune word: "${word}"`);

        // Get frequency count of runes in the current runeword
        const wordFreq = getFrequency(properties.runes.map(r => r.toLowerCase()));
        // console.log(`Frequency for rune word "${word}":`, wordFreq);

        // Check if the current runeword is a subset of the runes
        const isSubsetResult = isSubset(wordFreq, runesFreq);
        // console.log(`Is "${word}" a match?`, isSubsetResult);

        if (isSubsetResult && !addedWords.has(word)) {
            runeWordMatches.push({ word, properties });
            addedWords.add(word);
            // console.log(`"${word}" added to matches.`);
        } else {
            // console.log(`"${word}" not added to matches.`);
        }
    });

    console.log(runeWordMatches);
    return runeWordMatches;
}

// Export the function as the default export
export default getRunewordMatches;
