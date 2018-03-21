var express       = require( 'express' ),
    path          = require( 'path' ),
    favicon       = require( 'serve-favicon' ),
    cookieParser  = require( 'cookie-parser' ),
    bodyParser    = require( 'body-parser' ),
    Log           = require('log'),
    log           = new Log('info'),
    path          = require( 'path' ),
    http          = require( 'http' ),
    api           = express(),
    db            = require('./api-v1/db'),
    bearerToken     = require('express-bearer-token')

const ENVIRONMENT = "testing"

api.use( bodyParser.json() );
api.use( bodyParser.urlencoded( { extended: false } ) );
api.use( cookieParser() );
api.use(bearerToken());

api.use( express.static( path.join(__dirname, 'dist-angular') ) );

api.use( '/api/v1.0', require('./api-v1') )

api.get( '*', ( req, res ) => {
    res.sendFile( path.join( __dirname, 'dist-angular/index.html' ) );
});

// open environment database pool connection
db.connect(ENVIRONMENT, function (err) {
    if (err) {
        log.info('Unable to connect to ENVIRONMENT MySQL.')
        process.exit(1)
    } else {
        log.info( "Connected to env mysql" )
    }
})

// open authentication database pool connection
db.connect_auth(ENVIRONMENT, function(err) {
    if (err) {
        log.info('Unable to connect to AUTH MySQL.')
        process.exit(1)
    } else {
        log.info( "Connected to Auth DB" )
    }
})

const port = process.env.PORT || '3456';
api.set( 'port', port );

const server = http.createServer(api);
server.listen( port, () => console.log( `Running on localhost:${port}` ) );

const electron      = require( 'electron' )
const app           = electron.app
const BrowserWindow = electron.BrowserWindow
const url           = require( 'url' )

let mainWindow

function createWindow () {

    mainWindow = new BrowserWindow()
    mainWindow.maximize()

    mainWindow.loadURL( 'http://localhost:3456' )
    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
    mainWindow.on( 'closed', function () {
        mainWindow = null
    })
}

app.on( 'ready', createWindow )

app.on( 'window-all-closed', function () {
    if ( process.platform !== 'darwin' ) {
        app.quit()
    }
})

app.on( 'activate', function () {
    if ( mainWindow === null ) {
        createWindow()
    }
})