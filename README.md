# Diablo 2 Runeword Getter

It's a runeword getter for runes.

## About

This app is designed to accept an input of **runes** and output all possible matching **runewords** the player can build. It allows you to 'build' and subtract the required runes for a given runeword from the current inventory. 

## Inspiration

This game and I have some heartfelt history. This project aims at assisting fellow Diablo 2 fans.

## Acknowledgements

[Pure Diablo](https://www.purediablo.com/) for sprites and statistics.

## Features

- Search for runewords based on available runes
- Detailed stats and information about each runeword
- User-friendly interface; WIP

## Installation

1. **Clone**

    ```bash
    git clone https://github.com/your-username/diablo2-runeword-getter.git
    cd d2-runeword-getter
    ```

2. **Install**

    ```bash
    npm install
    ```

3. **Build**

    ```bash
    npm run build
    ```

4. **Compile**

    ```bash
    npm run compile
    ```

5. **Run**

    ```bash
    cd dist/win-unpacked
    ./d2Rwg.exe
    ```

## Usage

1. `Left-click` to add rune to inventory; `Right-click` to remove..
2. The app will stack possible runeword matches to the right, or below the rune list.
3. `Left-click` a runeword match and it will subtract the required runes from the inventory.
4. ~~Save and Load persistent inventories for managing multiple character builds~~

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.