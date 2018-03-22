import { Component, OnInit } from "@angular/core";
import { ConfigService } from "./configServices/config.service";

@Component({
    templateUrl: "./dbConfig.component.html"
})
export class DbConfigComponent implements OnInit{

    public config = {host:"", username:"", password:"", db_name:""}
    
    // constructor function
    // @param service Config Service
    constructor(public service:ConfigService) {}

    // initializer function
    ngOnInit() { this.getConfiguration() }

    // getConfiguration
    // retrieves the db configuration
    // @params none
    // @returns none
    getConfiguration() {
        this.service
            .getDBConfig()
            .subscribe(response => {
                
                let body = JSON.parse(response["_body"])
                
                this.config.host = body.host
                this.config.username = body.username
                this.config.password = body.password
                this.config.db_name = body.db_name

            })
    }

    // updateConfiguration
    // function update configuration
    // @params none
    // @returns none 
    updateConfiguration() {
        this.service
            .updateDBConfig(this.config)
            .subscribe(response => {
                let body = JSON.parse(response["_body"])

                console.log(body)
            })
    }
}