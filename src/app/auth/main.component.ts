import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../configServices/config.service";

@Component({
    templateUrl:"./main.component.html"
})
export class MainComponent implements OnInit{

    public address : String

    constructor(private configService:ConfigService) {}

    ngOnInit(){
        this.getServerAddress()
    }
    
    getServerAddress(){
        this.configService.getServerIPAddress()
            .subscribe(response =>{
                let body = JSON.parse(response["_body"])
                this.address = body.data.address
            })
    }
}