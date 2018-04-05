var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    Log = require('log'),
    log = new Log('info'),
    path = require('path'),
    http = require('http'),
    api = express(),
    db = require('./api-v1/db'),
    bearerToken = require('express-bearer-token'),
    jsonParser = bodyParser.json(),
    Config = require('electron-config'),
    config = new Config(),
    Configuration = require('./Configuration'),
    ip = require('ip')

const ENVIRONMENT = "testing"

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(cookieParser());
api.use(bearerToken());

api.use('/api/v1.0', require('./api-v1'))

api.get('/dbconfig', jsonParser, function (req, res) {
    // return all configuration
    let db_config = config.get('db_config')
    if (db_config) {
        res.send(db_config)
    } else {
        res.send(new Configuration("", "", "", ""))
    }
})

api.get('/ipaddress', jsonParser, function (req, res) {
    res.send({ data: { address: ip.address() } })
})

api.put('/dbconfig', jsonParser, function (req, res) {
    // return all configuration
    let strConn = {
        "host": req.body.host,
        "user": req.body.username,
        "password": req.body.password,
        "database": req.body.db_name,
        "port": 3306
    }

    config.set('db_config', new Configuration(
        req.body.username,
        req.body.password,
        req.body.db_name,
        req.body.host
    ))

    db.connect(strConn, function (err) {
        if (err) {
            log.info('Unable to connect to ENVIRONMENT MySQL.')
            res.status(400)
            res.send({ message: "Incorrect DB credentials" })
        } else {
            log.info("Connected to env mysql")
            res.send(req.body)
        }
    })
})

api.use(express.static(path.join(__dirname, 'dist-angular')));

const port = process.env.PORT || '3456';
api.set('port', port);

const server = http.createServer(api);
server.listen(port, () => console.log(`Running on localhost:${port}`));

// ------------------------ electron stuff -------------------------------------------
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu
const url = require('url')
const { appUpdater } = require('./autoupdater');
const isDev = require('electron-is-dev');
let mainWindow

// Funtion to check the current OS. As of now there is no proper method to add auto-updates to linux platform.
function isWindowsOrmacOS() {
    return process.platform === 'darwin' || process.platform === 'win32';
}

function createWindow() {
    mainWindow = new BrowserWindow()
    mainWindow.maximize()

    mainWindow.loadURL('http://localhost:3456')
    // Open the DevTools.
    mainWindow.webContents.openDevTools()
    const page = mainWindow.webContents;

    page.once('did-frame-finish-load', () => {
        const checkOS = isWindowsOrmacOS();
        if (checkOS) {
            // Initate auto-updates on macOs and windows
            appUpdater();
        }
    });

    mainWindow.on('closed', function () {
        mainWindow = null
    })

    // Create the Application's main menu
    var template = [{
        label: "Camaleon",
        submenu: [
            { label: "About Camaleon", selector: "orderFrontStandardAboutPanel:" },
            { label: "Check for Updates...", selector: "orderFrontStandardAboutPanel:" },
            { type: "separator" },
            { label: "Quit", accelerator: "Command+Q", click: function () { app.quit(); } }
        ]
    }, {
        label: "Edit",
        submenu: [
            { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
            { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
            { type: "separator" },
            { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
            { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
            { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
            { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
        ]
    }
    ];

    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
})