import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HttpModule } from '@angular/http'
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
    providers: [ ConfigService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
