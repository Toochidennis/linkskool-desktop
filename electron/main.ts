import { app, BrowserWindow } from "electron";
import * as url from "url";
import * as path from "path";
import { isDev } from "./util.js";

//type test = string;

app.on('ready', () => {
    const mainWindow = new BrowserWindow({});

    if (isDev()) {
        mainWindow.loadURL("http://localhost:3000");
    } else {
        mainWindow.loadURL(
            url.format({
                pathname: path.join(app.getAppPath(), "/dist-react/index.html"),
                protocol: "file:",
                slashes: true
            })
        );
    }
});
