const { app, BrowserWindow } = require('electron');
const path = require('path');
var mainWindow = null;

require('electron-reload')(__dirname, {
  electron: require('electron')
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.loadURL(path.join('file://', __dirname, 'src', 'index.html'));

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
