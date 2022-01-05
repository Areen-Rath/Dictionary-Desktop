const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        show: false
    });
    mainWindow.maximize();
    mainWindow.show();

    mainWindow.loadURL("https://areen-rath.github.io/Dictionary");

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});