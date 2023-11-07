const { app, BrowserWindow, ipcMain, dialog } = require("electron");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        minWidth: 640,
        minHeight: 360,
    });

    //win.setMenu(null);
    win.loadFile("../views/mapa.html");
};

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin"){
        app.quit();
    }
});