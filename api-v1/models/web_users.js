
// web_users 
// web_users model from auth db
module.exports = class web_users {
    constructor(User_EMail, User_Password) {
        this.User_EMail = User_EMail
        this.User_Password = User_Password
    }
}