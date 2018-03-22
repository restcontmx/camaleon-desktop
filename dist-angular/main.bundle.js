webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_main_component__ = __webpack_require__("../../../../../src/app/auth/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_component__ = __webpack_require__("../../../../../src/app/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dbConfig_component__ = __webpack_require__("../../../../../src/app/dbConfig.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__configServices_config_service__ = __webpack_require__("../../../../../src/app/configServices/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__auth_main_component__["a" /* MainComponent */] },
    {
        path: 'menu', component: __WEBPACK_IMPORTED_MODULE_7__menu_component__["a" /* MenuComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_8__dbConfig_component__["a" /* DbConfigComponent */]
            },
            {
                path: 'db',
                component: __WEBPACK_IMPORTED_MODULE_8__dbConfig_component__["a" /* DbConfigComponent */]
            }
        ]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__auth_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_7__menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dbConfig_component__["a" /* DbConfigComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
            ),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__configServices_config_service__["a" /* ConfigService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/main.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Camaleon Desktop Application</h1>\n\n<a [routerLink]=\"[ 'menu/db' ]\">DB</a>\n\n<small>{{address}}</small>"

/***/ }),

/***/ "../../../../../src/app/auth/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configServices_config_service__ = __webpack_require__("../../../../../src/app/configServices/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = (function () {
    function MainComponent(configService) {
        this.configService = configService;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.getServerAddress();
    };
    MainComponent.prototype.getServerAddress = function () {
        var _this = this;
        this.configService.getServerIPAddress()
            .subscribe(function (response) {
            var body = JSON.parse(response["_body"]);
            _this.address = body.data.address;
        });
    };
    return MainComponent;
}());
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/auth/main.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__configServices_config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__configServices_config_service__["a" /* ConfigService */]) === "function" && _a || Object])
], MainComponent);

var _a;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/configServices/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigService = (function () {
    function ConfigService(http_service) {
        this.http_service = http_service;
    }
    ConfigService.prototype.getDBConfig = function () {
        return this.http_service.get('/dbconfig');
    };
    ConfigService.prototype.updateDBConfig = function (data) {
        return this.http_service.put('/dbconfig', data);
    };
    ConfigService.prototype.getServerIPAddress = function () {
        return this.http_service.get('/ipaddress');
    };
    return ConfigService;
}());
ConfigService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ConfigService);

var _a;
//# sourceMappingURL=config.service.js.map

/***/ }),

/***/ "../../../../../src/app/dbConfig.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>DB Config</h2>\n\n<form (ngSubmit)=\"updateConfiguration()\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label for=\"host\">Host</label>\n                <input type=\"text\" class=\"form-control\" name=\"host\" placeholder=\"host\" required autofocus [(ngModel)]=\"config.host\">\n            </div>\n        </div>\n\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label for=\"username\">User</label>\n                <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"username\" required autofocus [(ngModel)]=\"config.username\">                \n            </div>\n        </div>\n\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"text\" class=\"form-control\" name=\"password\" placeholder=\"password\" required autofocus [(ngModel)]=\"config.password\">                \n            </div>\n        </div>\n\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label for=\"db_name\">DB Name</label>\n                <input type=\"text\" class=\"form-control\" name=\"db_name\" placeholder=\"db_name\" required autofocus [(ngModel)]=\"config.db_name\">                \n            </div>\n        </div>\n\n        <div class=\"col-md-6\">\n            <button type=\"button\" class=\"btn btn-block btn-danger\"  [routerLink]=\"['/']\">Cancel</button>\n        </div>\n\n        <div class=\"col-md-6\">\n            <button type=\"submit\" class=\"btn btn-block btn-primary\">Submit</button>\n        </div>\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/dbConfig.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbConfigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configServices_config_service__ = __webpack_require__("../../../../../src/app/configServices/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DbConfigComponent = (function () {
    // constructor function
    // @param service Config Service
    function DbConfigComponent(service) {
        this.service = service;
        this.config = { host: "", username: "", password: "", db_name: "" };
    }
    // initializer function
    DbConfigComponent.prototype.ngOnInit = function () { this.getConfiguration(); };
    // getConfiguration
    // retrieves the db configuration
    // @params none
    // @returns none
    DbConfigComponent.prototype.getConfiguration = function () {
        var _this = this;
        this.service
            .getDBConfig()
            .subscribe(function (response) {
            var body = JSON.parse(response["_body"]);
            _this.config.host = body.host;
            _this.config.username = body.username;
            _this.config.password = body.password;
            _this.config.db_name = body.db_name;
        });
    };
    // updateConfiguration
    // function update configuration
    // @params none
    // @returns none 
    DbConfigComponent.prototype.updateConfiguration = function () {
        this.service
            .updateDBConfig(this.config)
            .subscribe(function (response) {
            var body = JSON.parse(response["_body"]);
            console.log(body);
        });
    };
    return DbConfigComponent;
}());
DbConfigComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/dbConfig.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__configServices_config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__configServices_config_service__["a" /* ConfigService */]) === "function" && _a || Object])
], DbConfigComponent);

var _a;
//# sourceMappingURL=dbConfig.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/menu.component.html")
    })
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map