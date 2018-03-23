webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-container></app-container>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_container_container_component__ = __webpack_require__("./src/app/components/container/container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_qlist_qlist_component__ = __webpack_require__("./src/app/components/qlist/qlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_fetch_question_service__ = __webpack_require__("./src/app/services/fetch-question-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    /* { path: '**', redirectTo: '/home', pathMatch: 'full' }, */
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */], data: { sub: 'home' } },
    { path: 'quiz/sports', component: __WEBPACK_IMPORTED_MODULE_7__components_qlist_qlist_component__["a" /* QlistComponent */], data: { sub: 'sports' } },
    { path: 'quiz/movies', component: __WEBPACK_IMPORTED_MODULE_7__components_qlist_qlist_component__["a" /* QlistComponent */], data: { sub: 'movies' } },
    { path: 'quiz/history', component: __WEBPACK_IMPORTED_MODULE_7__components_qlist_qlist_component__["a" /* QlistComponent */], data: { sub: 'history' } },
    { path: 'quiz/geography', component: __WEBPACK_IMPORTED_MODULE_7__components_qlist_qlist_component__["a" /* QlistComponent */], data: { sub: 'geography' } }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_container_container_component__["a" /* ContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_qlist_qlist_component__["a" /* QlistComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_fetch_question_service__["a" /* FetchQuestionService */], __WEBPACK_IMPORTED_MODULE_9__services_shared_service__["a" /* SharedService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/container/container.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/container/container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <router-outlet></router-outlet> <!-- <app-qlist></app-qlist> -->\n</div>\n"

/***/ }),

/***/ "./src/app/components/container/container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
    }
    ContainerComponent.prototype.ngOnInit = function () {
    };
    ContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-container',
            template: __webpack_require__("./src/app/components/container/container.component.html"),
            styles: [__webpack_require__("./src/app/components/container/container.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".css_card {\r\n  /* Add shadows to create the \"card\" effect */\r\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  width: 150px;\r\n  cursor: pointer;\r\n}\r\n\r\n.css_card img {\r\n  height: 100px;\r\n  width: 100px;\r\n  position: relative;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin-top: 0px;\r\n  margin-left: -50px;\r\n}\r\n\r\n/* On mouse-over, add a deeper shadow */\r\n\r\n.css_card:hover {\r\n    -webkit-box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-inline\" id=\"home\">\n  <li class=\"css_card list-inline-item\" routerLink=\"/quiz/sports\" id=\"sports\">\n    <img src=\"../../assets/icons/sports.png\" alt=\"Card image\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\" style=\"text-align:center\">Sports</h5>\n    </div>\n  </li>\n  <li class=\"css_card list-inline-item\" routerLink=\"/quiz/movies\" id=\"movies\">\n    <img src=\"../../assets/icons/movies.png\" alt=\"Card image\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\" style=\"text-align:center\">Movies</h5>\n    </div>\n  </li>\n  <li class=\"css_card list-inline-item\" routerLink=\"/quiz/history\" id=\"history\">\n    <img src=\"../../assets/icons/swords.png\" alt=\"Card image\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\" style=\"text-align:center\">History</h5>\n    </div>\n  </li>\n  <li class=\"css_card list-inline-item\" routerLink=\"/quiz/geography\" id=\"geography\">\n    <img src=\"../../assets/icons/earth-globe.png\" alt=\"Card image\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Geography</h5>\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n  <ul class=\"navbar-nav\">\n    \n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\"  id=\"home\">Home</a>\n    </li>\n    \n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/quiz/sports\" routerLinkActive=\"active\" id=\"sports\">Sports</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/quiz/movies\" routerLinkActive=\"active\" id=\"movies\">Movie</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/quiz/history\" routerLinkActive=\"active\"  id=\"history\">History</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/quiz/geography\" routerLinkActive=\"active\" id=\"geography\">Geography</a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fetch_question_service__ = __webpack_require__("./src/app/services/fetch-question-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(questionService, sharedData) {
        this.questionService = questionService;
        this.sharedData = sharedData;
        var self = this;
        this.sharedData.quizData$.subscribe(function (qdata) {
            if (typeof qdata === 'string') {
                self.markActiveCategeory(qdata);
            }
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.lastClickedItem = document.getElementById('home');
        console.log('this.lastClickedItem: ' + this.lastClickedItem);
        /* const self = this;
        this.questionService.fetchQuestionData('sports').subscribe(function (qdata) {
          // console.log('qdata: ' + qdata);
          self.shareQuizData.publishData(qdata);
        }); */
    };
    NavbarComponent.prototype.markActiveCategeory = function (id) {
        var listItem = document.getElementById(id);
        listItem.classList.add('active');
        this.lastClickedItem.classList.remove('active');
        this.lastClickedItem = listItem;
    };
    NavbarComponent.prototype.selectCategory = function (e) {
        console.log(e.target.id);
        var self = this;
        var listItem = e.target.parentNode;
        listItem.classList.add('active');
        console.log('this.lastClickedItem: ' + this.lastClickedItem);
        if (this.lastClickedItem) {
            this.lastClickedItem.classList.remove('active');
        }
        this.lastClickedItem = listItem;
        if (e.target.id === 'home') {
            var qdata = [];
            self.sharedData.publishData(qdata);
        }
        else {
            this.questionService.fetchQuestionData(e.target.id).subscribe(function (qdata) {
                console.log(qdata);
                self.sharedData.publishData(qdata);
            });
        }
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_fetch_question_service__["a" /* FetchQuestionService */], __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/qlist/qlist.component.css":
/***/ (function(module, exports) {

module.exports = "ul li.radio {\r\n    list-style-type: none;\r\n}\r\n.card button {\r\n    width: 10%;\r\n    margin: 1%;\r\n    min-width: 80px;\r\n}\r\n.correct {\r\n    background-color: green !important;\r\n    color: white !important;\r\n}\r\n.incorrect {\r\n    background-color: red !important;\r\n    color: white !important; \r\n}\r\n.option-err {\r\n    color: red;\r\n}\r\n#loader {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  z-index: 1;\r\n  width: 150px;\r\n  height: 150px;\r\n  margin: -75px 0 0 -75px;\r\n  border: 16px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 16px solid #3498db;\r\n  width: 120px;\r\n  height: 120px;\r\n  -webkit-animation: spin 2s linear infinite;\r\n  animation: spin 2s linear infinite;\r\n}\r\n@-webkit-keyframes spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n#left,\r\n#right {\r\n  cursor: pointer;  \r\n  position: relative;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin-top: 0px;\r\n  margin-left: -50px;\r\n\r\n}\r\n.time-left,\r\n.score-points {\r\n  text-align: center;\r\n  margin: 2%;\r\n}\r\n.time-left {\r\n  color: blue;\r\n}\r\n.score-points {\r\n  color: green;\r\n}\r\n.css_card { \r\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); \r\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  cursor: pointer;\r\n  padding: 2%;\r\n  border-radius: 5px;\r\n\r\n}\r\n.question {\r\n  text-align: center;\r\n}\r\n.options {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\n.options p:hover {\r\n  background-color: orange;\r\n  color: whitesmoke;\r\n  cursor: pointer;\r\n}\r\n.options p {\r\n  background-color: snow;\r\n  color: black;\r\n  cursor: pointer;\r\n\r\n}\r\n.options > p {  \r\n  border: 2px solid black;\r\n  border-radius: 15%;\r\n  min-width: 35%;\r\n  margin: 3% 0 3% 10%;\r\n  background-color:snow;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n.mouse-leave {\r\n  background-color:snow;\r\n  color: black;\r\n\r\n}\r\n.selected-answer {\r\n  background-color: orange !important;\r\n  color: whitesmoke !important;\r\n\r\n}\r\n.options img {\r\n  width: 50px;\r\n  height: 50px;\r\n  margin-left: 2%;\r\n}\r\n.hide {\r\n  display: none;\r\n}\r\n.options:nth-child(even) {\r\n  -ms-flex-item-align: start;\r\n      align-self: flex-start; \r\n}\r\n.options:nth-child(odd) {\r\n  -ms-flex-item-align: end;\r\n      align-self: flex-end;\r\n}\r\n.css_card:hover {\r\n  -webkit-box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/qlist/qlist.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\" *ngIf=\"quizItem else loader\">\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <img src=\"../../assets/icons/icons-left.png\" (click)=\"prevQ()\" id=\"left\">\n      </div>\n      \n      <div class=\"col-8\">\n          <h4 class=\"time-left\">\n              <span>Time Left: </span>\n              <span>{{qtime}}</span>\n          </h4>\n          <div class=\"css_card\">\n            <div class=\"question\">\n              <h5>{{quizItem.question}}</h5>\n            </div>\n          \n            <div class=\"options\">              \n              <p *ngFor=\"let option of quizItem.options; let i = index\" (click)=\"checkQ(opt)\" id={{i}} #opt>\n                <label>{{option}}</label>\n              <!--   <img src=\"\" id=\"img_{{i}}\" class=\"hide\" alt=\"answer status\"  /> -->\n              </p>\n            </div>\n          \n            <!-- <div class=\"submit-button\">\n              <button type=button class=\"btn btn-md btn-dark\" (click)=\"checkQ(selectedOption, btn)\" #btn>submit</button>\n            </div> -->\n          </div>\n          <h4 class=\"score-points\">\n            <span>Score Point: </span>\n            <span>{{score}}</span>\n          </h4>\n      </div>\n      \n      <div class=\"col-2\">\n        <img src=\"../../assets/icons/icons-right.png\" (click)=\"nextQ()\" id=\"right\">\n      </div>\n</div>\n\n\n<!-- <ul class=\"list-group\"  *ngIf=\"mquizData.length else loader\">\n  <li class=\"list-group-item\" *ngFor=\"let quizItem of mquizData; let i = index\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        {{quizItem.question}}\n      </div>\n      <div class=\"card-body\">\n        <ul #list id='{{i}}-list'> \n          \n          <li class=\"radio\" *ngFor=\"let option of quizItem.options; let j = index\" id={{i}}-{{j}} #item >  \n            <label><input type=\"radio\" #opt  name={{i}} value={{option}} (click)='selectedListItem(item, opt.value, list.id)' /> {{option}} </label>\n          </li>\n          <button type=\"button\" class=\"btn btn-dark\" (click)=checkAnswer(list)>submit</button>\n          <span class=\"option-err\"></span>\n        \n        </ul>\n      </div> \n      \n    </div>\n  </li>\n</ul>  -->\n\n<ng-template #loader>\n<div id=\"loader\"></div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/qlist/qlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_fetch_question_service__ = __webpack_require__("./src/app/services/fetch-question-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QlistComponent = /** @class */ (function () {
    function QlistComponent(route, router, questionService, sharedData) {
        this.route = route;
        this.router = router;
        this.questionService = questionService;
        this.sharedData = sharedData;
        this.mquizData = [];
        this.quizItem = null;
        this.qcount = 0;
        this.qtime = 0;
        this.score = 0;
        console.log('route data: ' + route.snapshot.data['sub']);
        /* const self = this;
        this.sharedData.quizData$.subscribe(function(qdata) {
          if (typeof qdata === 'object' && Array.isArray(qdata)) {
              self.mquizData = qdata;
            }
        }); */
    }
    QlistComponent.prototype.ngOnInit = function () {
        this.show(this.route.snapshot.data['sub']);
    };
    QlistComponent.prototype.selectedListItem = function (item, option, listID) {
        console.log(item);
        console.log(option);
        console.log(listID);
        this.selectedItem = item;
        this.selectedOption = option;
        this.selectListID = listID;
    };
    QlistComponent.prototype.checkAnswer = function (optionList) {
        console.log('--- In option list ---');
        if (optionList.id === this.selectListID) {
            console.log('in major if');
            var id = optionList.id.split('-')[0];
            var correctOption = this.mquizData[id].answer;
            if (correctOption === this.selectedOption) {
                if (!this.selectedItem.classList.contains('correct')) {
                    this.selectedItem.classList.remove('incorrect');
                    this.selectedItem.classList.add('correct');
                }
            }
            else {
                var correctListItemID = id + '-' + this.mquizData[id].options.indexOf(correctOption);
                var listElements = optionList.getElementsByTagName('li');
                var correctListItem = null;
                for (var i = 0; i < listElements.length; i++) {
                    if (listElements[i].id === correctListItemID) {
                        correctListItem = listElements[i];
                        break;
                    }
                }
                if (!correctListItem.classList.contains('correct')) {
                    correctListItem.classList.add('correct');
                }
            }
            optionList.getElementsByTagName('span')[0].innerText = '';
        }
        else {
            console.log('In major else');
            optionList.getElementsByTagName('span')[0].innerHTML = 'No options selected';
        }
    };
    QlistComponent.prototype.show = function (id) {
        console.log(id);
        var self = this;
        this.questionService.fetchQuestionData(id).subscribe(function (qdata) {
            self.mquizData = [];
            console.log(qdata);
            self.mquizData = qdata;
            self.LoadQ();
            self.sharedData.publishData(id);
        });
    };
    QlistComponent.prototype.prevQ = function () {
        this.qcount = (this.qcount > 0) ? this.qcount - 1 : 0;
        this.LoadQ();
    };
    QlistComponent.prototype.nextQ = function () {
        this.qcount = (this.qcount < this.mquizData.length - 1) ? this.qcount + 1 : this.mquizData.length - 1;
        this.LoadQ();
    };
    QlistComponent.prototype.LoadQ = function () {
        this.stopTimer();
        this.quizItem = this.mquizData[this.qcount];
        this.startTimer();
    };
    QlistComponent.prototype.checkQ = function (opt) {
        console.log(opt.id);
        opt.className = 'selected-answer';
        var correctIndex = this.quizItem.options.indexOf(this.quizItem.answer);
        document.getElementById(correctIndex).className = 'correct';
        var selID = parseInt(opt.id, 10);
        if (selID === correctIndex) {
            this.score += 10;
        }
        else {
            document.getElementById(opt.id).className = 'incorrect';
        }
        var options = document.querySelectorAll('.options p');
        for (var i = 0; i < options.length; i++) {
            if (i !== selID || i !== correctIndex) {
                options[i].setAttribute('disabled', 'true');
            }
        }
        // options.setAttribute('disabled', 'true');
        /* btn.disabled = true; */
        /* let correctImg;
        let incorrectImg;
        if (this.quizItem.options[id] === this.quizItem.answer) {
          correctImg = document.getElementById('img_' + id);
          correctImg.setAttribute('src', '../../assets/icons/correct.png');
          correctImg.classList.remove('hide');
          this.score += 10;
        } else {
          const correctID = this.quizItem.options.indexOf(this.quizItem.answer);
          correctImg = document.getElementById('img_' + correctID);
          correctImg.setAttribute('src', '../../assets/icons/correct.png');
          correctImg.classList.remove('hide');
    
          incorrectImg = document.getElementById('img_' + id);
          incorrectImg.setAttribute('src', '../../assets/icons/incorrect.png');
          incorrectImg.classList.remove('hide');
        } */
    };
    QlistComponent.prototype.startTimer = function () {
        this.qtime = 8;
        var self = this;
        self.lastInterval = setInterval(function () {
            self.qtime -= 1;
            if (self.qtime === 0) {
                clearInterval(self.lastInterval);
            }
        }, 1000);
    };
    QlistComponent.prototype.stopTimer = function () {
        if (this.lastInterval) {
            clearInterval(this.lastInterval);
        }
    };
    QlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-qlist',
            template: __webpack_require__("./src/app/components/qlist/qlist.component.html"),
            styles: [__webpack_require__("./src/app/components/qlist/qlist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_fetch_question_service__["a" /* FetchQuestionService */],
            __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */]])
    ], QlistComponent);
    return QlistComponent;
}());



/***/ }),

/***/ "./src/app/services/fetch-question-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchQuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FetchQuestionService = /** @class */ (function () {
    function FetchQuestionService(http) {
        this.http = http;
        this.baseURL = 'http://localhost:5000/quiz/';
        this.data = { sports: null, movies: null, history: null, geography: null };
    }
    FetchQuestionService.prototype.fetchQuestionData = function (quizCategory) {
        switch (quizCategory) {
            case 'sports':
            case 'movies':
            case 'history':
            case 'geography':
                if (this.data[quizCategory] === null) {
                    this.data[quizCategory] = this.http.get(this.baseURL + quizCategory).map(function (res) { return res.json(); });
                    return this.data[quizCategory];
                }
                else {
                    return this.data[quizCategory];
                }
        }
    };
    FetchQuestionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], FetchQuestionService);
    return FetchQuestionService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedService = /** @class */ (function () {
    function SharedService() {
        // Observable string sources
        this.quizData = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.quizData$ = this.quizData.asObservable();
    }
    SharedService.prototype.publishData = function (data) {
        this.quizData.next(data);
    };
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map