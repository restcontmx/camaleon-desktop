import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HttpModule, Http, Headers } from '@angular/http'
import {HttpHeaders} from '@angular/common/http'

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './auth/main.component';
import { MenuComponent } from './menu.component';
import { DbConfigComponent } from './dbConfig.component';
import { ConfigService } from './configServices/config.service';

const appRoutes: Routes = [
    { path: '', component: MainComponent },
    {
        path: 'menu', component: MenuComponent,
        children: [
            {
                path: '',
                component: DbConfigComponent
            },
            {
                path: 'db',
                component: DbConfigComponent
            }
        ]
    }
]

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        MenuComponent,
        DbConfigComponent
    ],
    imports: [
        HttpModule,
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false } // <-- debugging purposes only
        ),
    ],
    providers: [ConfigService],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor(public http: Http) { }

    createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Basic ' +
            btoa('username:password'));
    }

    get(url) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        });
    }

    post(url, data) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    }

}
