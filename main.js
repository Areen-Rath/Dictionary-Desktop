const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
    // Create a window but not show as to maximize and open it.
    mainWindow = new BrowserWindow({
        show: false
    });

    // Open maximized window.
    mainWindow.maximize();
    mainWindow.show();

    // Load Dictionary web app.
    mainWindow.loadURL("https://areen-rath.github.io/Dictionary");

    // Close app.
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});