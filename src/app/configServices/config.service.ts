import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ConfigService {

    constructor(private http_service:Http) {}

    getDBConfig():Observable<Response>{
        return this.http_service.get('/dbconfig')
    }

    updateDBConfig(data):Observable<Response> {
        return this.http_service.put('/dbconfig', data)
    }

    getServerIPAddress():Observable<Response>{
        return this.http_service.get( '/ipaddress' )
    }
}
