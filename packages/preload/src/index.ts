/**
 * @module preload
 */

import {sha256sum} from './nodeCrypto.js';
import {versions} from './versions.js';
export {sha256sum, versions};

// Preloader endpoinds

import {contextBridge, ipcRenderer} from 'electron';

contextBridge.exposeInMainWorld('runeApi', {
  getRuneWordMatches: (runes: string[]) =>
    ipcRenderer.invoke('get-rune-word-matches', runes),
  getRuneList: () => ipcRenderer.invoke('get-rune-list'),
  //   getCharacters: () => ipcRenderer.invoke('get-characters'),
  //   getCharacter: character => ipcRenderer.invoke('get-character', character),
});

contextBridge.exposeInMainWorld('customApi', {
  ping: () => ipcRenderer.invoke('ping'),
});

console.log('Preload script loaded');
