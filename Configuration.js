

module.exports = class Configuration {
    constructor( username, password, db_name, host ) {
        this.username = username
        this.password = password
        this.db_name = db_name
        this.host = host
    }
}
