import {app, ipcMain} from 'electron';
import './security-restrictions';
import {restoreOrCreateWindow} from '/@/mainWindow.js';
import {platform} from 'node:process';
// import {autoUpdater} from 'electron-updater'; // Corrected import
import getRunewordMatches from './runeApi.js';

// Resolve the paths to your JSON files using import
import runeList from '../rune-list.json';
import runeWords from '../rune-words.json';

/**
 * Prevent electron from running multiple instances.
 */
const isSingleInstance = app.requestSingleInstanceLock();
if (!isSingleInstance) {
  app.quit();
  process.exit(0);
}
app.on('second-instance', restoreOrCreateWindow);

/**
 * Disable Hardware Acceleration to save more system resources.
 */
app.disableHardwareAcceleration();

/**
 * Shut down background process if all windows were closed
 */
app.on('window-all-closed', () => {
  if (platform !== 'darwin') {
    app.quit();
  }
});

/**
 * @see https://www.electronjs.org/docs/latest/api/app#event-activate-macos Event: 'activate'.
 */
app.on('activate', restoreOrCreateWindow);

/**
 * Create the application window when the background process is ready.
 */
app
  .whenReady()
  .then(() => {
    restoreOrCreateWindow();

    // IPC Handlers
    ipcMain.handle('ping', () => 'pong');

    ipcMain.handle('get-rune-word-matches', async (event, runes) => {
      const matches = getRunewordMatches(runes, runeWords);
      return matches; // Returns an array of rune word objects
    });

    ipcMain.handle('get-rune-list', async () => {
      return runeList; // Returns the whole rune-list.json object
    });

    // ipcMain.handle('get-characters', async () => {
    //   const characters = await import(resolve('../../src/main/characters.json')).characters;
    //   return Object.keys(characters); // Returns an array of character names
    // });

    // ipcMain.handle('get-character', async (event, characterName) => {
    //   const characters = await import(resolve('../../src/main/characters.json')).characters;
    //   return characters[characterName]; // Returns the character object
    // });
  })
  .catch(e => console.error('Failed to create window:', e));

/**
 * Install Vue.js or any other extension in development mode only.
 */
// if (import.meta.env.DEV) {
//   app
//     .whenReady()
//     .then(() => import('electron-devtools-installer'))
//     .then(module => {
//       const {default: installExtension, REACT_DEVELOPER_TOOLS} =
//         //@ts-expect-error Hotfix for https://github.com/cawa-93/vite-electron-builder/issues/915
//         typeof module.default === 'function' ? module : (module.default as typeof module);
//
//       return installExtension(REACT_DEVELOPER_TOOLS, {
//         loadExtensionOptions: {
//           allowFileAccess: true,
//         },
//       });
//     })
//     .catch(e => console.error('Failed to install extension:', e));
// }

/**
 * Check for app updates, install it in background and notify user that new version was installed.
 */
if (import.meta.env.PROD) {
  app
    .whenReady()
    // .then(() => autoUpdater.checkForUpdatesAndNotify())
    .catch(e => console.error('Failed to check and install updates:', e));
}
