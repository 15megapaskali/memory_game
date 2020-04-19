'use strict'
const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
app.on('ready', () => {
    // Create the browser window.
    const win = new BrowserWindow({
        maximizable: true,
        resizable: true,
        minWidth: 1366,
        minHeight: 800,
        center:true,

    })

    // and load the index.html of the app.
    win.loadURL(
        url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
        })
    )


})


