const { app, BrowserWindow, BrowserView } = require("electron");
const path = require("path");

let win;

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    title: "View over main view electron experiment",
    webPreferences: {
      devTools: true,
      nodeIntegration: false,
      nodeIntegrationInWorker: false,
      nodeIntegrationInSubFrames: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, "preload.js"),
      disableBlinkFeatures: "Auxclick",
    },
  });
};

app.on("ready", createWindow);
