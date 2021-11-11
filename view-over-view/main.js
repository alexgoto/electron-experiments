const { app, BrowserWindow, BrowserView } = require("electron");
const path = require("path");

let win;

const createWindow = () => {
  //   win = new BrowserWindow({
  //     width: 800,
  //     height: 600,
  //     title: "View over main view electron experiment",
  //     webPreferences: {
  //       devTools: true,
  //       nodeIntegration: false,
  //       nodeIntegrationInWorker: false,
  //       nodeIntegrationInSubFrames: false,
  //       contextIsolation: true,
  //       enableRemoteModule: false,
  //       preload: path.join(__dirname, "preload.js"),
  //       disableBlinkFeatures: "Auxclick",
  //     },
  //   });

    // win.loadURL("https://google.com");

  win = new BrowserWindow({ width: 800, height: 600 });
  const view = new BrowserView();
  win.setBrowserView(view);
  view.setBounds({ x: 0, y: 0, width: 600, height: 500 });
  view.webContents.loadURL("https://google.com");
};

app.on("ready", createWindow);
