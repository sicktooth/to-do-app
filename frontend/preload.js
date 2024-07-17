// // preload.js
// const { contextBridge, ipcRenderer } = require('electron');

// contextBridge.exposeInMainWorld('myApp', {
//   readFile: async (filePath) => {
//     try {
//       const fileData = await ipcRenderer.invoke('read-file', filePath);
//       return fileData;
//     } catch (error) {
//       console.error('Error reading file:', error);
//       return null;
//     }
//   },
// });
