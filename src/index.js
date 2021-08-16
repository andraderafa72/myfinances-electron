import { app, BrowserWindow } from 'electron';
// import path from 'path';

if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

let mainWindow;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 700,
    // eslint-disable-next-line no-path-concat
    icon: `${__dirname}/assets/img/icon.png`,
  });

  // and load the index.html of the app.
  // eslint-disable-next-line quotes
  mainWindow.loadURL(`https://myfinances-web.netlify.app/`);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
