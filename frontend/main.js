const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  

  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});


ipcMain.handle('form-submitted', (req, data) => {
  if (!data || !data.dateTime.time || !data.taskName || !data.dateTime.date) return false;
  let taskName = data.taskName;
  let date = data.dateTime.date;
  let time = data.dateTime.time;
  // console.log(data.taskName, data.date, data.time);
  return { taskName, date, time};
});