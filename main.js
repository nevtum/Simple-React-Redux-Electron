
import { app, BrowserWindow } from 'electron';
import path from 'path';

var mainWindow = null;

require('electron-reload')(__dirname, {
  electron: require('electron') // perhaps need full path to remove startup error?
});

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.loadURL(path.join('file://', __dirname, 'src', 'index.html'));
  mainWindow.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
