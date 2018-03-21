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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_content_content_component__ = __webpack_require__("./src/app/components/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_container_container_component__ = __webpack_require__("./src/app/components/container/container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_qlist_qlist_component__ = __webpack_require__("./src/app/components/qlist/qlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_fetch_question_service__ = __webpack_require__("./src/app/services/fetch-question-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_content_content_component__["a" /* ContentComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_container_container_component__["a" /* ContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_qlist_qlist_component__["a" /* QlistComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_fetch_question_service__["a" /* FetchQuestionService */], __WEBPACK_IMPORTED_MODULE_10__services_shared_service__["a" /* SharedService */]],
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

module.exports = "<div class=\"container\">\n    <app-qlist></app-qlist>\n</div>\n"

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

/***/ "./src/app/components/content/content.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">Header</div>\n  <div class=\"card-body\">Content</div> \n</div>\n"

/***/ }),

/***/ "./src/app/components/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
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

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-content',
            template: __webpack_require__("./src/app/components/content/content.component.html"),
            styles: [__webpack_require__("./src/app/components/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n  <ul class=\"navbar-nav\">\n    \n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" href=\"#\" (click)='selectCategory($event)' id=\"home\">Home</a>\n    </li>\n    \n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\" (click)='selectCategory($event)' id=\"sports\">Sports</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\" (click)='selectCategory($event)' id=\"movies\">Movie</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\" (click)='selectCategory($event)' id=\"history\">History</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\" (click)='selectCategory($event)' id=\"geography\">Geography</a>\n    </li>\n  </ul>\n</nav>"

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

module.exports = "ul li.radio {\r\n    list-style-type: none;\r\n}\r\n.card button {\r\n    width: 10%;\r\n    margin: 1%;\r\n    min-width: 80px;\r\n}\r\n.correct {\r\n    background-color: green;\r\n    color: white;\r\n}\r\n.incorrect {\r\n    background-color: red;\r\n    color: white; \r\n}\r\n.option-err {\r\n    color: red;\r\n}\r\n.css_card {\r\n  /* Add shadows to create the \"card\" effect */\r\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  width: 150px;\r\n  cursor: pointer;\r\n}\r\n.css_card img {\r\n    height: 100px;\r\n    width: 100px;\r\n    position: relative;\r\n    top: 50%;\r\n    left: 50%;\r\n     margin-top: 0px;\r\n     margin-left: -50px;\r\n}\r\n/* On mouse-over, add a deeper shadow */\r\n.css_card:hover {\r\n  -webkit-box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/qlist/qlist.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\"  *ngIf=\"mquizData.length else home\">\n  <li class=\"list-group-item\" *ngFor=\"let quizItem of mquizData; let i = index\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        {{quizItem.question}}\n      </div>\n      <div class=\"card-body\">\n        <ul #list id='{{i}}-list'> \n          \n          <li class=\"radio\" *ngFor=\"let option of quizItem.options; let j = index\" id={{i}}-{{j}} #item >  \n            <label><input type=\"radio\" #opt  name={{i}} value={{option}} (click)='selectedListItem(item, opt.value, list.id)' /> {{option}} </label>\n          </li>\n          <button type=\"button\" class=\"btn btn-dark\" (click)=checkAnswer(list)>submit</button>\n          <span class=\"option-err\"></span>\n        \n        </ul>\n      </div> \n      \n    </div>\n  </li>\n</ul> \n\n<ng-template #home>\n  <ul class=\"list-inline\" id=\"home\">\n    <li class=\"css_card list-inline-item\" id=\"sports\" (click)='show(sports.id)' #sports>\n      <img src=\"../../assets/icons/sports.png\" alt=\"Card image\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\" style=\"text-align:center\">Sports</h5>\n      </div>\n    </li>\n    <li class=\"css_card list-inline-item\" id=\"movies\" (click)='show(movies.id)' #movies>\n      <img src=\"../../assets/icons/movies.png\" alt=\"Card image\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\" style=\"text-align:center\">Movies</h5>\n      </div>\n    </li>\n    <li class=\"css_card list-inline-item\" id=\"history\" (click)='show(history.id)' #history>\n      <img src=\"../../assets/icons/swords.png\" alt=\"Card image\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\" style=\"text-align:center\">History</h5>\n      </div>\n    </li>\n    <li class=\"css_card list-inline-item\" id=\"geography\" (click)='show(geography.id)' #geography>\n      <img src=\"../../assets/icons/earth-globe.png\" alt=\"Card image\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Geography</h5>\n      </div>\n    </li>\n  </ul>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/qlist/qlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_fetch_question_service__ = __webpack_require__("./src/app/services/fetch-question-service.ts");
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
    function QlistComponent(questionService, sharedData) {
        this.questionService = questionService;
        this.sharedData = sharedData;
        this.mquizData = [];
        var self = this;
        this.sharedData.quizData$.subscribe(function (qdata) {
            if (typeof qdata === 'object' && Array.isArray(qdata)) {
                self.mquizData = qdata;
            }
        });
    }
    QlistComponent.prototype.ngOnInit = function () {
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
            self.sharedData.publishData(id);
        });
    };
    QlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-qlist',
            template: __webpack_require__("./src/app/components/qlist/qlist.component.html"),
            styles: [__webpack_require__("./src/app/components/qlist/qlist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_fetch_question_service__["a" /* FetchQuestionService */], __WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */]])
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
    }
    FetchQuestionService.prototype.fetchQuestionData = function (quizCategory) {
        switch (quizCategory) {
            case 'sports':
            case 'movies':
            case 'history':
            case 'geography':
                return this.http.get(this.baseURL + quizCategory).map(function (res) { return res.json(); });
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