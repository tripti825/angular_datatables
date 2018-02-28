webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_service/crud.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CrudService = (function () {
    function CrudService(http) {
        this.http = http;
        this.useUrl = 'http://192.168.0.110:4200/api';
    }
    CrudService.prototype.commonCurdOperation = function (model, action, form, packet, packetoptions) {
        var newUseUrl = this.useUrl + '/' + model + '/' + action;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        var newPacket;
        if (form === true) {
            newPacket = packet;
        }
        else {
            newPacket = { 'packet': packet };
        }
        if (packetoptions) {
            newPacket.options = packetoptions;
        }
        else {
            newPacket.options = {};
        }
        return this.http.post(newUseUrl, newPacket)
            .map(function (res) { return (res.json()); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Something went wrong'); });
    };
    CrudService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CrudService);
    return CrudService;
}());



/***/ }),

/***/ "../../../../../src/app/_service/guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlwaysAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isLoggedIn_service__ = __webpack_require__("../../../../../src/app/_service/isLoggedIn.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlwaysAuthGuard = (function () {
    function AlwaysAuthGuard(loggedinservice, router) {
        this.loggedinservice = loggedinservice;
        this.router = router;
    }
    AlwaysAuthGuard.prototype.canActivate = function () {
        if (this.loggedinservice.isLoggedIn()) {
            return true;
        }
        else {
            window.alert("Login to view this page");
            this.router.navigate(['/login']);
            return false;
        }
    };
    AlwaysAuthGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    AlwaysAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__isLoggedIn_service__["a" /* LoggedinService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AlwaysAuthGuard);
    return AlwaysAuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/_service/isLoggedIn.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedinService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_service__ = __webpack_require__("../../../../../src/app/_service/crud.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoggedinService = (function () {
    function LoggedinService(crudservice) {
        this.crudservice = crudservice;
    }
    LoggedinService.prototype.isLoggedIn = function () {
        this.loginFlag = localStorage.getItem('isLoggedIn') ? localStorage.getItem('isLoggedIn') : 'false';
        if (this.loginFlag == 'true')
            return true;
        else
            return false;
    };
    LoggedinService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__crud_service__["a" /* CrudService */]])
    ], LoggedinService);
    return LoggedinService;
}());



/***/ }),

/***/ "../../../../../src/app/_shared/_shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_module__ = __webpack_require__("../../../../../src/app/_shared/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_module__ = __webpack_require__("../../../../../src/app/_shared/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loader_loader_module__ = __webpack_require__("../../../../../src/app/_shared/loader/loader.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_5__loader_loader_module__["a" /* LoaderModule */]
            ],
            declarations: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_5__loader_loader_module__["a" /* LoaderModule */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/_shared/footer/footer-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var footerRoutes = [];
var FooterRoutingModule = (function () {
    function FooterRoutingModule() {
    }
    FooterRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(footerRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], FooterRoutingModule);
    return FooterRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/_shared/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/_shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer-dir',
            template: __webpack_require__("../../../../../src/app/_shared/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_shared/footer/footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_component__ = __webpack_require__("../../../../../src/app/_shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_routing_module__ = __webpack_require__("../../../../../src/app/_shared/footer/footer-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FooterModule = (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_4__footer_routing_module__["a" /* FooterRoutingModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]
            ]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "../../../../../src/app/_shared/header/header-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var headerRoutes = [];
var HeaderRoutingModule = (function () {
    function HeaderRoutingModule() {
    }
    HeaderRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(headerRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], HeaderRoutingModule);
    return HeaderRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/_shared/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n    border-radius: 0;\n    /*box-shadow: -4px 0px 20px 2px black;*/\n    border-bottom-style: groove;\n    border: 0px;\n    min-height: 60px;\n}\n\n#mainNavbar {\n    list-style-type: none;\n    position: relative;\n    display: block;\n    font-size: 12px;\n    font-family: Verdana, Helvetica, Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    border-bottom: 1px solid seagreen;\n    zoom: 1;\n}\n\n#subHeader {\n    width: 100% !important;\n    float: unset !important;\n}\n\n.navbar-brand {\n    color: white !important;\n    text-shadow: 2px 2px seagreen;\n}\n\n.active-link {\n\tborder-bottom: 2px solid seagreen;\n    color : white !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = " <div>\n    <!--navbar starts-->\n      <nav class=\"navbar navbar-inverse \">\n        <div class=\"container-fluid\" id=\"mainNavbar\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" routerLink=\"/home\">Assignment 1</a>\n        </div>\n        <ul class=\"nav navbar-nav\" id=\"subHeader\">\n          <li><a routerLink=\"/home\" routerLinkActive=\"active-link\">Home</a></li>\n          <li><a routerLink=\"/page1\" routerLinkActive=\"active-link\">Page 1</a></li>\n          <li><a routerLink=\"/page2\" routerLinkActive=\"active-link\">Page 2</a></li>\n          <li *ngIf=\"loggedinservice.isLoggedIn()\" style=\"float:right;\" ><a href=\"\" (click)=\"logout()\" data-toggle=\"tooltip\" title=\"Logout\"><i class=\"fa fa-power-off\" aria-hidden=\"true\" style=\"color:white;\"></i></a></li>\n        </ul>\n        </div>\n      </nav>\n\n      <!--navbar ends-->\n  </div>"

/***/ }),

/***/ "../../../../../src/app/_shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_isLoggedIn_service__ = __webpack_require__("../../../../../src/app/_service/isLoggedIn.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(loggedinservice, router) {
        this.loggedinservice = loggedinservice;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.logout = function () {
        localStorage.removeItem('isLoggedIn');
        this.router.navigate(['/login']);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header-dir',
            template: __webpack_require__("../../../../../src/app/_shared/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_isLoggedIn_service__["a" /* LoggedinService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_shared/header/header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_component__ = __webpack_require__("../../../../../src/app/_shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_routing_module__ = __webpack_require__("../../../../../src/app/_shared/header/header-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HeaderModule = (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__header_component__["a" /* HeaderComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_4__header_routing_module__["a" /* HeaderRoutingModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__header_component__["a" /* HeaderComponent */]
            ]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "../../../../../src/app/_shared/loader/loader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overlay-loader {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  z-index: 1;\r\n  width: 50px;\r\n  height: 50px;\r\n  margin: -25px 0 0 -25px;\r\n  -webkit-animation: spin 2s linear infinite;\r\n  animation: spin 1s linear infinite;\r\n  border: 5px solid #f3f3f3;\r\n  border-top: 5px solid #555;\r\n  border-radius: 50%;\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  top: 0!important;\r\n  left: 0!important;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  background-color: rgba(0,0,0,.85);\r\n  opacity: .5;\r\n  line-height: 1;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n  -webkit-animation-duration: .5s;\r\n  animation-duration: .5s;\r\n  transition: background-color .5s linear;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  will-change: opacity;\r\n  z-index: 1000;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_shared/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" *ngIf=\"visible\">\r\n  <div class=\"overlay-loader\" *ngIf=\"visible\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/_shared/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = (function () {
    function LoaderComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LoaderComponent.prototype, "visible", void 0);
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            selector: 'app-ui-loader',
            template: __webpack_require__("../../../../../src/app/_shared/loader/loader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/_shared/loader/loader.component.css")]
        })
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_shared/loader/loader.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loader_component__ = __webpack_require__("../../../../../src/app/_shared/loader/loader.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoaderModule = (function () {
    function LoaderModule() {
    }
    LoaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__loader_component__["a" /* LoaderComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__loader_component__["a" /* LoaderComponent */]
            ]
        })
    ], LoaderModule);
    return LoaderModule;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_component__ = __webpack_require__("../../../../../src/app/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_2__not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule(router) {
        var _this = this;
        this.router = router;
        this.router.errorHandler = function (error) {
            _this.router.navigate(['/404']); // or redirect to default route
        };
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<div>\n  <!-- header -->\n  <header-dir></header-dir>\n\n  <!-- content -->\n  <router-outlet></router-outlet>\n\n  <!-- footer -->\n  <footer-dir></footer-dir>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__not_found_component__ = __webpack_require__("../../../../../src/app/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__ = __webpack_require__("../../../../../src/app/_shared/_shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__page1_page1_module__ = __webpack_require__("../../../../../src/app/page1/page1.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__page2_page2_module__ = __webpack_require__("../../../../../src/app/page2/page2.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_user_module__ = __webpack_require__("../../../../../src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_isLoggedIn_service__ = __webpack_require__("../../../../../src/app/_service/isLoggedIn.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_guard_service__ = __webpack_require__("../../../../../src/app/_service/guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__service_crud_service__ = __webpack_require__("../../../../../src/app/_service/crud.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










/**importing custom modules**/





/**services**/



var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__not_found_component__["a" /* PageNotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_13__page2_page2_module__["a" /* Page2Module */],
                __WEBPACK_IMPORTED_MODULE_12__page1_page1_module__["a" /* Page1Module */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_14__user_user_module__["a" /* UserModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__service_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_16__service_guard_service__["a" /* AlwaysAuthGuard */], __WEBPACK_IMPORTED_MODULE_15__service_isLoggedIn_service__["a" /* LoggedinService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_guard_service__ = __webpack_require__("../../../../../src/app/_service/guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var homeRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__service_guard_service__["a" /* AlwaysAuthGuard */]], canActivate: [__WEBPACK_IMPORTED_MODULE_3__service_guard_service__["a" /* AlwaysAuthGuard */]] },
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(homeRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*for the image*/\r\n.imageclass {\r\n\theight: 100px;\r\n\ttransition: all .3s ease-in-out;\r\n\tmargin-top: 30px;\r\n\tmargin-bottom: 30px;\r\n}\r\n.imageclass:hover {\r\n    height: 300px;\r\n}\r\n.danger {\r\n\tcolor: RED;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n  <h1>File Upload</h1>\n<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"name\">Name <span class=\"danger\">*</span></label>\n    <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter Name\" formControlName=\"name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"avatar\">Avatar <span class=\"danger\">*</span></label>\n    <input type=\"file\" id=\"avatar\" (change)=\"onFileChange($event)\" #fileInput >\n  </div>\n  <div>\n  <img class=\"imageclass\"  src={{src}} alt=\"Image preview...\">\n  </div>\n\n  <div>\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <button type=\"submit\" [disabled]=\"form.invalid || loading \" style=\"background-color: seagreen\" class=\"btn btn-sm btn-success\">Submit <i class=\"fa fa-spinner fa-spin fa-fw\" *ngIf=\"loading\"></i></button>\n      </div>\n      <div class=\"col-md-10\">\n        <button type=\"button\" [disabled]=\"form.invalid || loading \" class=\"btn btn-sm btn-default\" (click)=\"clearFile()\">clear file</button>\n      </div>\n    </div>\n  </div>\n</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_crud_service__ = __webpack_require__("../../../../../src/app/_service/crud.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(crudservice, toastr, vcr, fb, http) {
        this.crudservice = crudservice;
        this.toastr = toastr;
        this.fb = fb;
        this.http = http;
        this.src = "";
        this.loading = false;
        this.createForm();
        this.toastr.setRootViewContainerRef(vcr);
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            file: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    };
    HomeComponent.prototype.canDeactivate = function () {
        if ((this.form.value.name && this.form.value.name != null) || (this.form.value.file && this.form.value.file != null)) {
            return window.confirm('Discard current data?');
        }
        return true;
    };
    HomeComponent.prototype.onFileChange = function (event) {
        var _this = this;
        this.filesToUpload = event.target.files;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            reader.readAsDataURL(file_1);
            reader.onload = function () {
                _this.src = reader.result;
                _this.form.get('file').setValue({
                    filename: file_1.name
                    //filetype: file.type
                    //value: reader.result.split(',')[1]
                });
            };
        }
    };
    HomeComponent.prototype.onSubmit = function () {
        var _this = this;
        var formData = new FormData();
        for (var _i = 0, _a = this.filesToUpload; _i < _a.length; _i++) {
            var filetoupload = _a[_i];
            formData.append("file", filetoupload, filetoupload.name);
        }
        formData.append("name ", this.form.controls.name.value);
        this.loading = true;
        this.crudservice.commonCurdOperation('file', 'create', true, formData)
            .subscribe(function (res) {
            if (res.status == 200) {
                _this.loading = false;
                _this.clearFile();
                _this.toastr.success('File uploaded', 'Success');
            }
            else {
                _this.toastr.error('Something went wrong!', 'Oops!');
                _this.clearFile();
                _this.loading = false;
            }
        }, function (err) { _this.loading = false; _this.clearFile(); _this.toastr.error('Something went wrong!', 'Oops!'); });
    };
    HomeComponent.prototype.clearFile = function () {
        this.form.get('file').setValue(null);
        this.form.get('name').setValue(null);
        this.fileInput.nativeElement.value = '';
        this.src = "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HomeComponent.prototype, "fileInput", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__service_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_routing_module__ = __webpack_require__("../../../../../src/app/home/home-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__home_routing_module__["a" /* HomeRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "<div class=\"page animsition vertical-align text-center\" data-animsition-in=\"fade-in\" data-animsition-out=\"fade-out\" style=\"animation-duration: 800ms; opacity: 1;\">\n    <div class=\"page-content vertical-align-middle\">\n      <header>\n        <h1 class=\"animation-slide-top\">404</h1>\n        <p>Page Not Found !</p>\n      </header>\n      <p class=\"error-advise\">YOU SEEM TO BE TRYING TO FIND YOUR WAY HOME</p>\n      <a class=\"btn btn-sm btn-success\" style=\"background-color: seagreen\" routerLink=\"/home\">GO TO HOME PAGE</a>\n\n      \n    </div>\n  </div>"
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page1/page1-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page1RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page1_component__ = __webpack_require__("../../../../../src/app/page1/page1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_guard_service__ = __webpack_require__("../../../../../src/app/_service/guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var page1Routes = [
    { path: 'page1', component: __WEBPACK_IMPORTED_MODULE_2__page1_component__["a" /* Page1Component */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__service_guard_service__["a" /* AlwaysAuthGuard */]] },
];
var Page1RoutingModule = (function () {
    function Page1RoutingModule() {
    }
    Page1RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(page1Routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], Page1RoutingModule);
    return Page1RoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/page1/page1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".listimg {\r\n\theight: 100px;\r\n    transition: all .3s ease-in-out;\r\n\tborder: groove;\r\n}\r\n.listimg:hover {\r\n    height: 300px;\r\n}\r\n\r\n#file_table.dataTable.no-footer {\r\n    border-bottom: 0px solid #111111;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n#file_table {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: separate !important;\r\n    width: 98%;\r\n}\r\n\r\n#file_table td, #file_table th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n}\r\n\r\n#file_table tr {\r\n    transition: all .3s ease-in-out;\r\n}\r\n\r\n#file_table tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\n#file_table tr:hover {background-color: darkseagreen;}\r\n\r\n#file_table th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: seagreen;\r\n    //background-color: #5cb85c;\r\n    //border-color: #4cae4c;\r\n    color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page1/page1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\" id=\"file_table\">\n  <thead>\n    <tr>\n      <th></th>\n      <th>Name</th>\n      <th>Image</th>\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor = \" let file of filelist; let i = index \">\n      <td></td>\n      <td *ngIf=\"enableEditFlag == false\">{{file.originalName}}</td>\n      <td *ngIf=\"enableEditFlag == true && enableEditId == file._id\">\n        <input type=\"text\"  [(ngModel)]=\"newname\" autofocus>\n        <label style=\"background-color: seagreen\" class=\"btn btn-sm btn-success\" (click)=\"editFile(file._id, newname)\">Update</label></td> \n      <td *ngIf=\"enableEditFlag == true && enableEditId != file._id\">{{file.originalName}}</td>\n      <td><img src=\"{{file.path}}\" class=\"listimg\"></td>\n      <td><span data-toggle=\"tooltip\" title=\"delete\" class=\"btn\" (click)=\"deleteFile(file._id, file.originalName)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span>\n      <span data-toggle=\"tooltip\" title=\"edit\" class=\"btn\" (click)=\"enableEdit(file._id, file.originalName)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></span></td>\n    </tr>\n    \n  </tbody>\n</table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/page1/page1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_crud_service__ = __webpack_require__("../../../../../src/app/_service/crud.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Page1Component = (function () {
    function Page1Component(http, el, crudservice, toastr, vcr) {
        this.http = http;
        this.el = el;
        this.crudservice = crudservice;
        this.toastr = toastr;
        this.filelist = [];
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.dtOptions = {};
        this.enableEditFlag = false;
        this.toastr.setRootViewContainerRef(vcr);
    }
    Page1Component.prototype.ngOnInit = function () {
        /*DataTables configuration and initialization*/
        this.dtOptions = {
            pageLength: 4,
            lengthMenu: [4, 10, 25, 50, 100],
            columns: [{
                    title: 'Image'
                }, {
                    title: 'Name'
                }, {
                    title: 'Image',
                    class: 'none'
                },
                {
                    title: 'Actions'
                }],
            // Use this attribute to enable the responsive extension
            responsive: true,
            // Declare the use of the extension in the dom parameter
            dom: 'lfrtBip',
            // Configure the buttons
            buttons: [
                'copy'
            ],
            select: true
        };
        this.getFiles();
    };
    /*to enable edit option for a file*/
    Page1Component.prototype.enableEdit = function (id, name) {
        if (this.enableEditFlag == false) {
            this.enableEditFlag = true;
            this.enableEditId = id;
            this.newname = name;
            this.extension = name.split('.').pop();
        }
        else {
            this.enableEditFlag = false;
            this.enableEditId = '';
            this.newname = '';
            this.extension = '';
        }
    };
    Page1Component.prototype.editFile = function (id, name) {
        var _this = this;
        if (name.split('.').pop() != this.extension)
            name += '.' + this.extension;
        this.crudservice.commonCurdOperation('file', 'update', false, { id: id, name: name })
            .subscribe(function (res) {
            if (res.status == 200) {
                _this.toastr.success('File updated', 'Success');
                _this.updateTable();
                _this.enableEditFlag = false;
                _this.enableEditId = '';
                _this.newname = '';
            }
            else {
                _this.toastr.error('Something went wrong!', 'Oops!');
            }
        }, function (err) { _this.toastr.error('Something went wrong!', 'Oops!'); });
    };
    /*to delete a file using id*/
    Page1Component.prototype.deleteFile = function (id, name) {
        var _this = this;
        if (confirm("Are you sure you want to delete " + name)) {
            this.crudservice.commonCurdOperation('file', 'delete', false, { id: id })
                .subscribe(function (res) {
                if (res.status == 200) {
                    _this.toastr.success('File deleted', 'Success');
                    _this.updateTable();
                }
                else {
                    _this.toastr.error('Something went wrong!', 'Oops!');
                }
            }, function (err) { _this.toastr.error('Something went wrong!', 'Oops!'); });
        }
    };
    /*to get list of all files*/
    Page1Component.prototype.getFiles = function () {
        var _this = this;
        this.crudservice.commonCurdOperation('file', 'read', false)
            .subscribe(function (filelist) { _this.filelist = filelist.data; _this.dtTrigger.next(); }, function (err) { _this.toastr.error('Something went wrong!', 'Oops!'); console.log("ERROR"); });
    };
    /*to update/ refresh the table */
    Page1Component.prototype.updateTable = function () {
        var _this = this;
        this.dtElement.dtInstance.then(function (dtInstance) {
            // Destroy the table first
            dtInstance.destroy();
            _this.getFiles();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_angular_datatables__["a" /* DataTableDirective */])
    ], Page1Component.prototype, "dtElement", void 0);
    Page1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page1',
            template: __webpack_require__("../../../../../src/app/page1/page1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page1/page1.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_5__service_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], Page1Component);
    return Page1Component;
}());



/***/ }),

/***/ "../../../../../src/app/page1/page1.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page1_component__ = __webpack_require__("../../../../../src/app/page1/page1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page1_routing_module__ = __webpack_require__("../../../../../src/app/page1/page1-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Page1Module = (function () {
    function Page1Module() {
    }
    Page1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["b" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_5__page1_routing_module__["a" /* Page1RoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__page1_component__["a" /* Page1Component */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__page1_component__["a" /* Page1Component */]
            ]
        })
    ], Page1Module);
    return Page1Module;
}());



/***/ }),

/***/ "../../../../../src/app/page2/page2-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page2_component__ = __webpack_require__("../../../../../src/app/page2/page2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_guard_service__ = __webpack_require__("../../../../../src/app/_service/guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var page2Routes = [
    { path: 'page2', component: __WEBPACK_IMPORTED_MODULE_2__page2_component__["a" /* Page2Component */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__service_guard_service__["a" /* AlwaysAuthGuard */]] }
];
var Page2RoutingModule = (function () {
    function Page2RoutingModule() {
    }
    Page2RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(page2Routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], Page2RoutingModule);
    return Page2RoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/page2/page2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".listimg {\r\n\theight: 100px;\r\n    transition: all .3s ease-in-out;\r\n\tborder: groove;\r\n}\r\n.listimg:hover {\r\n    height: 300px;\r\n}\r\n\r\n#file_table.dataTable.no-footer {\r\n    border-bottom: 0px solid #111111;\r\n    margin-bottom: 10px;\r\n}\r\n\r\ntable.dataTable {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: separate !important;\r\n    width: 98%;\r\n}\r\n\r\ntable.dataTable td, table.dataTable th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n}\r\n\r\ntable.dataTable tr {\r\n    transition: all .3s ease-in-out;\r\n}\r\n\r\ntable.dataTable tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\n/*table.dataTable tr:hover {background-color: darkseagreen;}*/\r\n\r\ntable.dataTable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: seagreen;\r\n    color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page2/page2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\" id=\"file_table\">\n<tfoot>\n  <tr>\n  <td *ngFor = \"let title of dtOptions.columns\"><input type=\"text\" placeholder=\"Search\"  style=\"width: 100%;\" /></td>\n  </tr>\n</tfoot>\n</table>\n</div>\n\n<div class=\"row\" style=\"padding-left: 30px;\">\n  <div class=\"col-md-5\">\n  <input type=\"text\" [formControl]=\"term\" placeholder=\"Search [USING OBSERVABLE]\" />\n  </div>\n  <div class=\"col-md-5\" style=\"float:right;\">\n  <mat-paginator [length]=\"pageLength\"\n                 [pageSize]=\"pageOption.limit\"\n                 [pageSizeOptions]=\"pageSizeOptions\"\n                 (page)=\"pageEvent = paginateEvent($event)\">\n  </mat-paginator>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/page2/page2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_crud_service__ = __webpack_require__("../../../../../src/app/_service/crud.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var Page2Component = (function () {
    function Page2Component(http, el, crudservice, toastr, vcr, router) {
        this.http = http;
        this.el = el;
        this.crudservice = crudservice;
        this.toastr = toastr;
        this.router = router;
        this.appdata = [];
        this.term = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]();
        this.pagecolumn = [];
        this.pageSizeOptions = [4, 10, 25, 50, 100];
        this.pageOption = {
            page: 1,
            limit: 4
        };
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.dtOptions = {};
        this.toastr.setRootViewContainerRef(vcr);
    }
    Page2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.initializetable();
        /*OBSERVABLE*/
        this.term.valueChanges
            .debounceTime(400) // wait for 400ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .subscribe(function (term) {
            if (term != '')
                _this.searchText(term);
            else
                _this.getFiles();
        });
    };
    Page2Component.prototype.ngAfterContentInit = function () {
        var self = this;
        $('table').on('click', '#delete', function (evt) {
            var index = ($(this).closest('td').parent()[0].sectionRowIndex);
            var record = self.appdata[index];
            self.deleteRecord(record._id, record.first_name, record._action_disabled);
        });
        $('table').on('click', '#view', function (evt) {
            var index = ($(this).closest('td').parent()[0].sectionRowIndex);
            var record = self.appdata[index];
            self.navigatetoview(record._id, record._action_disabled);
        });
    };
    /* CRUD FUNCTIONS */
    /*to get list of all files */
    Page2Component.prototype.getFiles = function (columns) {
        var _this = this;
        this.crudservice.commonCurdOperation('appdata', 'read', false, {}, this.pageOption)
            .subscribe(function (appdata) {
            _this.appdata = appdata.data.docs;
            _this.pageLength = appdata.data.total;
            if (columns) {
                var rowitems = [];
                var rows = [];
                for (var _i = 0, _a = _this.appdata; _i < _a.length; _i++) {
                    var item = _a[_i];
                    rows.push(item);
                }
                for (var key in rows) {
                    var rowdata = [];
                    for (var _b = 0, columns_1 = columns; _b < columns_1.length; _b++) {
                        var col = columns_1[_b];
                        rowdata.push((rows[key])[col.title]);
                    }
                    rowitems.push(rowdata);
                }
                _this.dtOptions.data = rowitems;
                _this.dtTrigger.next();
                _this.dtElement.dtInstance.then(function (dtInstance) {
                    dtInstance.columns().every(function () {
                        var that = this;
                        $('input', this.footer()).on('keyup change', function () {
                            if (that.search() !== this['value']) {
                                that
                                    .search(this['value'])
                                    .draw();
                            }
                        });
                    });
                });
            }
            else {
                _this.dtElement.dtInstance.then(function (dtInstance) {
                    dtInstance.destroy();
                    var rowitems = [];
                    var rows = [];
                    for (var _i = 0, _a = _this.appdata; _i < _a.length; _i++) {
                        var item = _a[_i];
                        rows.push(item);
                    }
                    for (var key in rows) {
                        var rowdata = [];
                        for (var _b = 0, _c = _this.pagecolumn; _b < _c.length; _b++) {
                            var col = _c[_b];
                            rowdata.push((rows[key])[col.title]);
                        }
                        rowitems.push(rowdata);
                    }
                    _this.dtOptions.data = rowitems;
                    _this.dtOptions.aaData = rowitems;
                    _this.dtTrigger.next();
                });
            }
        }, function (err) { _this.toastr.error('Something went wrong!', 'Oops!'); console.log("ERROR"); });
    };
    /*to delete a record using id */
    Page2Component.prototype.deleteRecord = function (id, name, actionflag) {
        var _this = this;
        if (!actionflag) {
            if (confirm("Are you sure you want to delete " + name + "'s record?")) {
                this.crudservice.commonCurdOperation('appdata', 'delete', false, { id: id })
                    .subscribe(function (res) {
                    if (res.status == 200) {
                        _this.toastr.success('Record deleted', 'Success');
                        _this.getFiles();
                    }
                    else {
                        _this.toastr.error('Something went wrong!', 'Oops!');
                    }
                }, function (err) { _this.toastr.error('Something went wrong!', 'Oops!'); });
            }
        }
    };
    /*to edit a record usinf id */
    // editToggle (id: string, actionflag: boolean) {
    //   var newflag : boolean = !actionflag;
    //   this.crudservice.commonCurdOperation('appdata', 'update', false, {id: id}, {action_disabled : newflag})
    //         .subscribe((res: Response) => { if(res.status == 200) { this.getFiles();} 
    //           else {this.toastr.error('Something went wrong!', 'Oops!');}
    //             },err => { this.toastr.error('Something went wrong!', 'Oops!');});
    // }
    /* EXTRA FUNCTIONS */
    /* to navigate to new page for view action */
    Page2Component.prototype.navigatetoview = function (id, actionflag) {
        if (!actionflag) {
            this.router.navigate(['/page2/view'], { queryParams: { id: id } });
        }
    };
    /* to handle pagination event */
    Page2Component.prototype.paginateEvent = function (evt) {
        this.pageOption.page = ++evt.pageIndex;
        this.pageOption.limit = evt.pageSize;
        this.getFiles();
    };
    /*to search a text */
    Page2Component.prototype.searchText = function (term) {
        var _this = this;
        this.crudservice.commonCurdOperation('appdata', 'search', false, { _id: "5a389ac49ef28be9a412967a" })
            .subscribe(function (appdata) {
            _this.foundrecord = appdata.data;
            var self = _this;
            _this.dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
                var rowitems = [];
                var rows = [];
                for (var _i = 0, _a = self.foundrecord; _i < _a.length; _i++) {
                    var item = _a[_i];
                    rows.push(item);
                }
                for (var key in rows) {
                    var rowdata = [];
                    for (var _b = 0, _c = self.pagecolumn; _b < _c.length; _b++) {
                        var col = _c[_b];
                        rowdata.push((rows[key])[col.title]);
                    }
                    rowitems.push(rowdata);
                }
                _this.dtOptions.data = rowitems;
                _this.dtOptions.aaData = rowitems;
                _this.dtTrigger.next();
            });
        }, function (err) { _this.toastr.error('Something went wrong!', 'Oops!'); console.log("ERROR"); });
        // return this.foundrecord;
    };
    /*to get list of all columns and initialize the datatable */
    Page2Component.prototype.initializetable = function () {
        var _this = this;
        this.crudservice.commonCurdOperation('appdata', 'fetch', false, {}, {})
            .subscribe(function (appdata) {
            var columns = [];
            for (var _i = 0, _a = appdata.data.sort(); _i < _a.length; _i++) {
                var item = _a[_i];
                var obj = {
                    title: item,
                    sTitle: item,
                    defaultContent: "-"
                };
                columns.push(obj);
            }
            columns.push({ title: 'actions',
                sTitle: 'actions',
                defaultContent: '<button id="delete"><i class="fa fa-trash" aria-hidden="true"></i></button>' +
                    '<button id="view"><i class="fa fa-eye" aria-hidden="true"></i></button>' });
            _this.pagecolumn = columns;
            _this.dtOptions = {
                columns: columns,
                dom: 'Bt',
                stateSave: true,
                buttons: [
                    'colvis'
                ]
            };
            _this.getFiles(columns);
        }, function (err) { _this.toastr.error('Something went wrong!', 'Oops!'); console.log("ERROR"); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_angular_datatables__["a" /* DataTableDirective */])
    ], Page2Component.prototype, "dtElement", void 0);
    Page2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page2',
            template: __webpack_require__("../../../../../src/app/page2/page2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page2/page2.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_10__service_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], Page2Component);
    return Page2Component;
}());



/***/ }),

/***/ "../../../../../src/app/page2/page2.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_slide_toggle__ = __webpack_require__("../../../material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_paginator__ = __webpack_require__("../../../material/esm5/paginator.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page2_component__ = __webpack_require__("../../../../../src/app/page2/page2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page2_routing_module__ = __webpack_require__("../../../../../src/app/page2/page2-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page2view_page2view_module__ = __webpack_require__("../../../../../src/app/page2/page2view/page2view.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var Page2Module = (function () {
    function Page2Module() {
    }
    Page2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["b" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_paginator__["a" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__page2_routing_module__["a" /* Page2RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__page2view_page2view_module__["a" /* Page2viewModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__page2_component__["a" /* Page2Component */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_8__page2_component__["a" /* Page2Component */]
            ],
        })
    ], Page2Module);
    return Page2Module;
}());



/***/ }),

/***/ "../../../../../src/app/page2/page2view/page2view-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2viewRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page2view_component__ = __webpack_require__("../../../../../src/app/page2/page2view/page2view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_guard_service__ = __webpack_require__("../../../../../src/app/_service/guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var page2viewRoutes = [
    { path: 'page2/view', component: __WEBPACK_IMPORTED_MODULE_2__page2view_component__["a" /* Page2viewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__service_guard_service__["a" /* AlwaysAuthGuard */]] }
];
var Page2viewRoutingModule = (function () {
    function Page2viewRoutingModule() {
    }
    Page2viewRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(page2viewRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], Page2viewRoutingModule);
    return Page2viewRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/page2/page2view/page2view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\r\n    font-family: arial, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\ntd, th {\r\n    border: 1px solid #dddddd;\r\n    text-align: left;\r\n    padding: 8px;\r\n}\r\n\r\ntr:nth-child(even) {\r\n    background-color: #dddddd;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page2/page2view/page2view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n<table>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Address</th>\n      <th>Zipcode</th>\n      <th>Age</th>\n      <th>Phone</th>\n      <th>Admin</th>\n      <th>Created</th>\n      <th>Modified</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngIf=\"appdata\">\n      <td>{{ appdata.first_name }} {{ appdata.last_name }}</td>\n      <td>{{ appdata.address }}</td>\n      <td>{{ appdata.zip }}</td>\n      <td>{{ appdata.age }}</td>\n      <td>{{ appdata.phone }}</td>\n      <td>{{ appdata.isAdmin }}</td>\n      <td>{{ appdata.createdAt | date}}</td>\n      <td>{{ appdata.updatedAt | date}}</td>\n    </tr>\n    \n    \n  </tbody>\n</table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/page2/page2view/page2view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2viewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_crud_service__ = __webpack_require__("../../../../../src/app/_service/crud.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Page2viewComponent = (function () {
    function Page2viewComponent(route, crudservice, toastr, vcr) {
        this.route = route;
        this.crudservice = crudservice;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    Page2viewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (translatedValue) { _this.id = translatedValue.id; });
        this.getData(this.id);
    };
    Page2viewComponent.prototype.getData = function (id) {
        var _this = this;
        this.crudservice.commonCurdOperation('appdata', 'read', false, { _id: this.id })
            .subscribe(function (appdata) { _this.appdata = appdata.data.docs[0]; }, function (err) { _this.toastr.error('Something went wrong!', 'Oops!'); console.log("ERROR"); });
    };
    Page2viewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page2view',
            template: __webpack_require__("../../../../../src/app/page2/page2view/page2view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page2/page2view/page2view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__service_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], Page2viewComponent);
    return Page2viewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page2/page2view/page2view.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2viewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page2view_component__ = __webpack_require__("../../../../../src/app/page2/page2view/page2view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page2view_routing_module__ = __webpack_require__("../../../../../src/app/page2/page2view/page2view-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Page2viewModule = (function () {
    function Page2viewModule() {
    }
    Page2viewModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__page2view_routing_module__["a" /* Page2viewRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__page2view_component__["a" /* Page2viewComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__page2view_component__["a" /* Page2viewComponent */]
            ]
        })
    ], Page2viewModule);
    return Page2viewModule;
}());



/***/ }),

/***/ "../../../../../src/app/user/login/login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("../../../../../src/app/user/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var loginRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */] }
];
var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(loginRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".danger {\n\tcolor: RED;\n}\n\n#loginDiv {\n\twidth: 700px !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"loginDiv\">\n<div class=\"well\">\n<h1>Login</h1>\n<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group row\">\n    <div class=\"col-md-2\"><label for=\"username\">Username <span class=\"danger\">*</span></label></div>\n    <div class=\"col-md-10\"><input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Enter Name\" formControlName=\"username\" #fileInput></div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-2\"><label for=\"password\">Password <span class=\"danger\">*</span></label></div>\n    <div class=\"col-md-10\"><input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Enter Password\" formControlName=\"password\"></div>\n  </div>\n  \n  \n  <div>\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <button type=\"submit\" [disabled]=\"form.invalid || loading \" style=\"background-color: seagreen\" class=\"btn btn-sm btn-success\">Login <i class=\"fa fa-spinner fa-spin fa-fw\" *ngIf=\"loading\"></i></button>\n      </div>\n      <div class=\"col-md-10\">\n        <button type=\"button\" [disabled]=\"loading \" (click)=\"forgotPassword()\" class=\"btn btn-sm btn-default\" >Forgot Password?</button>\n      </div>\n    </div>\n  </div>\n</form>\n</div>\n<span><a routerLink=\"/signup\">Signup?</a></span>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_crud_service__ = __webpack_require__("../../../../../src/app/_service/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_isLoggedIn_service__ = __webpack_require__("../../../../../src/app/_service/isLoggedIn.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = (function () {
    function LoginComponent(crudservice, toastr, vcr, fb, http, router, loggedinservice) {
        this.crudservice = crudservice;
        this.toastr = toastr;
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.loggedinservice = loggedinservice;
        this.loading = false;
        this.createForm();
        this.toastr.setRootViewContainerRef(vcr);
    }
    LoginComponent.prototype.ngOnInit = function () {
        //if a user is logged in, hitting /login will redirect it to home page
        if (this.loggedinservice.isLoggedIn() == true) {
            this.router.navigate(['/home']);
        }
    };
    LoginComponent.prototype.canDeactivate = function () {
        if ((this.form.value.username && this.form.value.username != null) || (this.form.value.password && this.form.value.password != null)) {
            return window.confirm('Discard current data?');
        }
        return true;
    };
    LoginComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formData = this.form.value;
        this.loading = true;
        this.crudservice.commonCurdOperation('user', 'login', false, this.formData)
            .subscribe(function (res) { if (res.status == 200) {
            _this.handleSuccessResponse();
        }
        else {
            _this.handleFailureResponse();
        } }, function (err) { return _this.handleFailureResponse(); });
    };
    LoginComponent.prototype.handleSuccessResponse = function () {
        var _this = this;
        localStorage.setItem('isLoggedIn', 'true');
        this.toastr.success('Login Successful', 'Success');
        this.loading = true;
        setTimeout(function () {
            _this.router.navigate(['/home']);
        }, 1000);
    };
    LoginComponent.prototype.handleFailureResponse = function () {
        localStorage.setItem('isLoggedIn', 'false');
        this.toastr.error('Something went wrong!', 'Oops!');
        this.loading = false;
        this.clearFile();
    };
    LoginComponent.prototype.clearFile = function () {
        this.form.get('username').setValue(null);
        this.form.get('password').setValue(null);
        this.fileInput.nativeElement.value = '';
    };
    LoginComponent.prototype.forgotPassword = function () {
        this.toastr.error('Option is disabled for now!', 'Oops!');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], LoginComponent.prototype, "fileInput", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/user/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__service_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_6__service_isLoggedIn_service__["a" /* LoggedinService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__("../../../../../src/app/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_routing_module__ = __webpack_require__("../../../../../src/app/user/login/login-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__login_routing_module__["a" /* LoginRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */]
            ],
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "../../../../../src/app/user/signup/signup-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_component__ = __webpack_require__("../../../../../src/app/user/signup/signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var signupRoutes = [
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_2__signup_component__["a" /* SignupComponent */] }
];
var SignupRoutingModule = (function () {
    function SignupRoutingModule() {
    }
    SignupRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(signupRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], SignupRoutingModule);
    return SignupRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/user/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".danger {\r\n\tcolor: RED;\r\n}\r\n\r\n#loginDiv {\r\n\twidth: 700px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"loginDiv\">\n<div class=\"well\">\n<h1>Sign Up</h1>\n<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group row\">\n    <div class=\"col-md-2\"><label for=\"name\">Name <span class=\"danger\">*</span></label></div>\n    <div class=\"col-md-10\"><input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter Name\" formControlName=\"name\"></div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-2\"><label for=\"username\">Username <span class=\"danger\">*</span></label></div>\n    <div class=\"col-md-10\"><input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Enter Username\" formControlName=\"username\" #fileInput></div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-2\"><label for=\"password\">Password <span class=\"danger\">*</span></label></div>\n    <div class=\"col-md-10\"><input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Enter Password\" formControlName=\"password\"></div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-md-2\"><label for=\"confirmpassword\">Confirm Password <span class=\"danger\">*</span></label></div>\n    <div class=\"col-md-10\"><input type=\"password\" class=\"form-control\" id=\"confirmpassword\" placeholder=\"Re Enter Password\" formControlName=\"confirmpassword\"></div>\n  </div>\n  \n  \n  <div>\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <button type=\"submit\" [disabled]=\"form.invalid || loading \" style=\"background-color: seagreen\" class=\"btn btn-sm btn-success\">Sign Up <i class=\"fa fa-spinner fa-spin fa-fw\" *ngIf=\"loading\"></i></button>\n      </div>\n      \n    </div>\n  </div>\n</form>\n</div>\n<span><a routerLink=\"/login\">Login?</a></span>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_crud_service__ = __webpack_require__("../../../../../src/app/_service/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_isLoggedIn_service__ = __webpack_require__("../../../../../src/app/_service/isLoggedIn.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupComponent = (function () {
    function SignupComponent(crudservice, toastr, vcr, fb, http, router, loggedinservice) {
        this.crudservice = crudservice;
        this.toastr = toastr;
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.loggedinservice = loggedinservice;
        this.loading = false;
        this.createForm();
        this.toastr.setRootViewContainerRef(vcr);
    }
    SignupComponent.prototype.ngOnInit = function () {
        //if a user is logged in, hitting /signup will redirect it to home page
        if (this.loggedinservice.isLoggedIn() == true) {
            this.router.navigate(['/home']);
        }
    };
    SignupComponent.prototype.canDeactivate = function () {
        if ((this.form.value.username && this.form.value.username != null) || (this.form.value.password && this.form.value.password != null)) {
            return window.confirm('Discard current data?');
        }
        return true;
    };
    SignupComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            confirmpassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formData = this.form.value;
        this.loading = true;
        this.crudservice.commonCurdOperation('user', 'create', false, this.formData)
            .subscribe(function (res) {
            if (res.status == 200) {
                _this.loading = false;
                _this.clearFile();
                _this.toastr.success('Sign Up completed', 'Success');
                _this.handleResponse();
            }
            else {
                _this.toastr.error('Something went wrong!', 'Oops!');
                _this.clearFile();
                _this.loading = false;
            }
        }, function (err) { _this.loading = false; _this.clearFile(); _this.toastr.error('Something went wrong!', 'Oops!'); });
    };
    SignupComponent.prototype.handleResponse = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.router.navigate(['/login']);
        }, 1000);
    };
    SignupComponent.prototype.clearFile = function () {
        this.form.get('name').setValue(null);
        this.form.get('username').setValue(null);
        this.form.get('password').setValue(null);
        this.form.get('confirmpassword').setValue(null);
        this.fileInput.nativeElement.value = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SignupComponent.prototype, "fileInput", void 0);
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__service_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_6__service_isLoggedIn_service__["a" /* LoggedinService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/signup/signup.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_component__ = __webpack_require__("../../../../../src/app/user/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_routing_module__ = __webpack_require__("../../../../../src/app/user/signup/signup-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SignupModule = (function () {
    function SignupModule() {
    }
    SignupModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__signup_routing_module__["a" /* SignupRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__signup_component__["a" /* SignupComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__signup_component__["a" /* SignupComponent */]
            ],
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ }),

/***/ "../../../../../src/app/user/user-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_guard_service__ = __webpack_require__("../../../../../src/app/_service/guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var userRoutes = [
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_2__user_component__["a" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__service_guard_service__["a" /* AlwaysAuthGuard */]] },
];
var UserRoutingModule = (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(userRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_routing_module__ = __webpack_require__("../../../../../src/app/user/user-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_module__ = __webpack_require__("../../../../../src/app/user/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup_signup_module__ = __webpack_require__("../../../../../src/app/user/signup/signup.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["b" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_5__user_routing_module__["a" /* UserRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_7__signup_signup_module__["a" /* SignupModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__user_component__["a" /* UserComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__user_component__["a" /* UserComponent */]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map