// src-electron/main.js
const { app, BrowserWindow, Menu  } = require('electron')
const { join } = require('path')

// 屏蔽安全警告
// ectron Security Warning (Insecure Content-Security-Policy)
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

// 创建浏览器窗口时，调用这个函数。
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1600,
        height: 700,
        // title: '11111111',
        icon: join(__dirname, '../public/login1.png'),
    })

    

    // win.loadURL('http://localhost:3000')
    // development模式
    if(process.env.VITE_DEV_SERVER_URL) {
        win.loadURL(process.env.VITE_DEV_SERVER_URL)
        // 开启调试台
        win.webContents.openDevTools()
    }else {
        win.loadFile(join(__dirname, '../dist/index.html'))
    }

    Menu.setApplicationMenu(null);
}

// Electron 会在初始化后并准备
app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})


