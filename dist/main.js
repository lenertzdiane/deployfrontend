(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/anchor/anchor.component.css":
/*!*********************************************!*\
  !*** ./src/app/anchor/anchor.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/anchor/anchor.component.html":
/*!**********************************************!*\
  !*** ./src/app/anchor/anchor.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-sm-1\">\n  <app-menu>  </app-menu>\n</div>\n<h1>Add An Anchor</h1>\n\n<div class=\"col-sm-5\">\n\n  <input type=\"text\" name=\"\" value=\"\" placeholder=\"Name\" class = \"form-control title\" [(ngModel)]=\"this.newAnchor.name\" [ngModelOptions]=\"{standalone: true}\" >\n  <textarea type=\"text\" name=\"\" value=\"\" placeholder=\"Notes\" id = \"text-input\" [(ngModel)]=\"this.newAnchor.notes\" [ngModelOptions]=\"{standalone: true}\" ></textarea>\n  <input type=\"text\" name=\"\" value=\"\" placeholder=\"Characters\" class = \"form-control character-input\" [(ngModel)]=\"this.newAnchor.characters[0]\" [ngModelOptions]=\"{standalone: true}\" >\n  <input type=\"text\" name=\"\" value=\"\" placeholder=\"Characters\" class = \"form-control character-input\" [(ngModel)]=\"this.newAnchor.characters[1]\" [ngModelOptions]=\"{standalone: true}\" >\n  <button class=\"btn btn-default btn-add\" (click)=\"insertNewAnchor()\"> ADD </button>\n</div>\n\n<div class=\"col-sm-5\">\n\n  <button class=\"btn btn-anchor\" (click)=\"showAnchors()\"> Show Anchors </button>\n  <!-- <button class=\"btn btn-anchor\" (click)=\"hideAnchors()\"> Hide Anchors </button> -->\n\n  <app-map id = \"anchors-map\" class = \"anchors-map \" (click) = \"setAnchor($event)\"></app-map>\n\n</div>\n"

/***/ }),

/***/ "./src/app/anchor/anchor.component.ts":
/*!********************************************!*\
  !*** ./src/app/anchor/anchor.component.ts ***!
  \********************************************/
/*! exports provided: AnchorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorComponent", function() { return AnchorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/anchor */ "./src/app/models/anchor.ts");
/* harmony import */ var _services_anchor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/anchor.service */ "./src/app/services/anchor.service.ts");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/map.service */ "./src/app/services/map.service.ts");
/* harmony import */ var _services_d3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/d3.service */ "./src/app/services/d3.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AnchorComponent = /** @class */ (function () {
    function AnchorComponent(anchorService, mapService, d3Service) {
        this.anchorService = anchorService;
        this.mapService = mapService;
        this.d3Service = d3Service;
    }
    AnchorComponent.prototype.ngOnInit = function () {
        this.newAnchor = _models_anchor__WEBPACK_IMPORTED_MODULE_1__["Anchor"].CreateDefault();
        this.getAnchors();
        this.anchors = [];
        this.searchCriteria = '';
        this.feat = '';
        this.feature = '';
        this.anchorPlaced = false;
        this.anchorPlaced = false;
    };
    AnchorComponent.prototype.showAnchors = function () {
        if (!(this.anchorPlaced)) {
            this.mapService.readyAnchorGroup();
            this.d3Service.placeAnchors(this.mapService.map, this.anchors);
            this.anchorPlaced = true;
        }
    };
    AnchorComponent.prototype.hideAnchors = function () {
        console.log('in here');
        this.mapService.removeAnchors();
        this.anchorPlaced = false;
    };
    AnchorComponent.prototype.setAnchor = function (event) {
        this.mapService.readyAnchorGroup();
        if (this.feat.length === 0) {
            var latlng = this.mapService.addAnchorMarker(event);
            this.feat = "{       \"type\": \"Feature\",       \"properties\": {},       \"geometry\": {         \"type\": \"Point\",         \"coordinates\": [           " + latlng.lng + ",           " + latlng.lat + "        ]       }     }, ";
            this.feature = this.feat;
            console.log(this.feature);
        }
        this.anchorSet = true;
    };
    AnchorComponent.prototype.getAnchors = function () {
        var _this = this;
        this.anchorService.getAnchors(this.searchCriteria)
            .subscribe(function (data) {
            _this.anchors = [];
            data.forEach(function (element) {
                var newAnchor = new _models_anchor__WEBPACK_IMPORTED_MODULE_1__["Anchor"](element._id, element.name, element.notes, element.characters, element.location);
                _this.anchors.push(newAnchor);
            });
        });
    };
    AnchorComponent.prototype.insertNewAnchor = function () {
        var _this = this;
        if (this.anchorSet) {
            this.newAnchor.location = this.feature;
            this.anchorService
                .insertNewAnchor(this.newAnchor)
                .subscribe(function (data) {
                _this.newAnchor._id = data.id;
                _this.anchors.push(_this.newAnchor);
                _this.newAnchor = _models_anchor__WEBPACK_IMPORTED_MODULE_1__["Anchor"].CreateDefault();
                console.log("Added anchor.");
            });
            this.mapService.removeAnchors();
            this.feat = '';
            console.log(this.anchors);
        }
        else {
            //ERROR REPORT
        }
        this.anchorSet = false;
    };
    AnchorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-anchor',
            template: __webpack_require__(/*! ./anchor.component.html */ "./src/app/anchor/anchor.component.html"),
            styles: [__webpack_require__(/*! ./anchor.component.css */ "./src/app/anchor/anchor.component.css")]
        }),
        __metadata("design:paramtypes", [_services_anchor_service__WEBPACK_IMPORTED_MODULE_2__["AnchorService"], _services_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"], _services_d3_service__WEBPACK_IMPORTED_MODULE_4__["D3Service"]])
    ], AnchorComponent);
    return AnchorComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _vignettes_vignettes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vignettes/vignettes.component */ "./src/app/vignettes/vignettes.component.ts");
/* harmony import */ var _vignette_display_vignettes_display_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vignette-display/vignettes-display.component */ "./src/app/vignette-display/vignettes-display.component.ts");
/* harmony import */ var _author_author_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./author/author.component */ "./src/app/author/author.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _reader_reader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reader/reader.component */ "./src/app/reader/reader.component.ts");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notes/notes.component */ "./src/app/notes/notes.component.ts");
/* harmony import */ var _standalone_standalone_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./standalone/standalone.component */ "./src/app/standalone/standalone.component.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/filter/filter.component.ts");
/* harmony import */ var _anchor_anchor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./anchor/anchor.component */ "./src/app/anchor/anchor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'author', component: _author_author_component__WEBPACK_IMPORTED_MODULE_4__["AuthorComponent"] },
    { path: 'reader', component: _reader_reader_component__WEBPACK_IMPORTED_MODULE_6__["ReaderComponent"] },
    { path: 'add', component: _vignettes_vignettes_component__WEBPACK_IMPORTED_MODULE_2__["VignetteComponent"] },
    { path: 'manage', component: _vignette_display_vignettes_display_component__WEBPACK_IMPORTED_MODULE_3__["VignetteDisplayComponent"] },
    { path: 'notes', component: _notes_notes_component__WEBPACK_IMPORTED_MODULE_7__["NotesComponent"] },
    { path: 'standalone', component: _standalone_standalone_component__WEBPACK_IMPORTED_MODULE_8__["StandaloneComponent"] },
    { path: 'filter', component: _filter_filter_component__WEBPACK_IMPORTED_MODULE_9__["FilterComponent"] },
    { path: 'anchor', component: _anchor_anchor_component__WEBPACK_IMPORTED_MODULE_10__["AnchorComponent"] }
];
//The method is called forRoot() because you configure the router at the application's
//root level. The forRoot() method supplies the service providers and directives needed
//for routing, and performs the initial navigation based on the current browser URL.
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\">\n  <title></title>\n  <script src=\"//unpkg.com/leaflet@0.7.7/dist/leaflet.js\"></script>\n  <script src=\"//ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.min.js\"></script>\n  <script src=\"/js/ui-leaflet.min.js\"></script>\n  <!-- If you need other layers -->\n<link rel=\"stylesheet\" href=\"https://unpkg.com/leaflet@1.2.0/dist/leaflet.css\" />\n  <script src=\"//unpkg.com/ui-leaflet-layers@0.1.3/dist/ui-leaflet-layers.min.js\"></script>\n</head>\n<body>\n\n</body>\n</html>\n\n<div>\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/index.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _vignettes_vignettes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vignettes/vignettes.component */ "./src/app/vignettes/vignettes.component.ts");
/* harmony import */ var _vignette_display_vignettes_display_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vignette-display/vignettes-display.component */ "./src/app/vignette-display/vignettes-display.component.ts");
/* harmony import */ var _services_vignettes_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/vignettes.service */ "./src/app/services/vignettes.service.ts");
/* harmony import */ var _services_standalone_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/standalone.service */ "./src/app/services/standalone.service.ts");
/* harmony import */ var _services_anchor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/anchor.service */ "./src/app/services/anchor.service.ts");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/map.service */ "./src/app/services/map.service.ts");
/* harmony import */ var _services_d3_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/d3.service */ "./src/app/services/d3.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _author_author_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./author/author.component */ "./src/app/author/author.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _reader_reader_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./reader/reader.component */ "./src/app/reader/reader.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./notes/notes.component */ "./src/app/notes/notes.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _directives_scroll_animate_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./directives/scroll-animate.directive */ "./src/app/directives/scroll-animate.directive.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./directives/highlight.directive */ "./src/app/directives/highlight.directive.ts");
/* harmony import */ var _part_edit_part_edit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./part-edit/part-edit.component */ "./src/app/part-edit/part-edit.component.ts");
/* harmony import */ var _standalone_standalone_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./standalone/standalone.component */ "./src/app/standalone/standalone.component.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/filter/filter.component.ts");
/* harmony import */ var _anchor_anchor_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./anchor/anchor.component */ "./src/app/anchor/anchor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { VignetteEditComponent } from './vignette-edit/vignettes-edit.component';














// import { ResizeDirective } from './directives/resize.directive';

// import { ModalDirective } from './directives/modal.directive';

// import { LocationDirective } from './directives/location.directive';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _vignettes_vignettes_component__WEBPACK_IMPORTED_MODULE_8__["VignetteComponent"], _vignette_display_vignettes_display_component__WEBPACK_IMPORTED_MODULE_9__["VignetteDisplayComponent"], _author_author_component__WEBPACK_IMPORTED_MODULE_16__["AuthorComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"], _reader_reader_component__WEBPACK_IMPORTED_MODULE_18__["ReaderComponent"], _notes_notes_component__WEBPACK_IMPORTED_MODULE_20__["NotesComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_21__["MenuComponent"], _directives_scroll_animate_directive__WEBPACK_IMPORTED_MODULE_22__["ScrollAnimateDirective"], _map_map_component__WEBPACK_IMPORTED_MODULE_23__["MapComponent"], _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_24__["HighlightDirective"], _part_edit_part_edit_component__WEBPACK_IMPORTED_MODULE_25__["PartEditComponent"], _standalone_standalone_component__WEBPACK_IMPORTED_MODULE_26__["StandaloneComponent"], _filter_filter_component__WEBPACK_IMPORTED_MODULE_27__["FilterComponent"], _anchor_anchor_component__WEBPACK_IMPORTED_MODULE_28__["AnchorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_4__["DragulaModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderModule"]
            ],
            providers: [_services_vignettes_service__WEBPACK_IMPORTED_MODULE_10__["VignetteService"], _services_map_service__WEBPACK_IMPORTED_MODULE_13__["MapService"], _services_d3_service__WEBPACK_IMPORTED_MODULE_14__["D3Service"], _services_standalone_service__WEBPACK_IMPORTED_MODULE_11__["StandaloneService"], _services_anchor_service__WEBPACK_IMPORTED_MODULE_12__["AnchorService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/author/author.component.css":
/*!*********************************************!*\
  !*** ./src/app/author/author.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/author/author.component.html":
/*!**********************************************!*\
  !*** ./src/app/author/author.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class= \"container-fluid full-width\">\n  <div class=\"row row-no-gutter\">\n\n    <div class=\"col-sm-1\" id=\"nav\">\n      <div class=\"row\">\n        <a class=\"col-sm-12\" routerLink=\"/add\">Add</a>\n        <a class=\"col-sm-12\" routerLink=\"/manage\">Manage</a>\n        <a class=\"col-sm-12\" routerLink=\"/reader\">Reader</a>\n        <a class=\"col-sm-12\" routerLink=\"/notes\">Notes</a>\n      </div>\n\n    </div>\n    <div class=\"col-sm-10\">\n      <p>what will be on the author welcome page? Maybe this should be manage</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/author/author.component.ts":
/*!********************************************!*\
  !*** ./src/app/author/author.component.ts ***!
  \********************************************/
/*! exports provided: AuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorComponent", function() { return AuthorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthorComponent = /** @class */ (function () {
    function AuthorComponent() {
    }
    AuthorComponent.prototype.ngOnInit = function () {
    };
    AuthorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-author',
            template: __webpack_require__(/*! ./author.component.html */ "./src/app/author/author.component.html"),
            styles: [__webpack_require__(/*! ./author.component.css */ "./src/app/author/author.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthorComponent);
    return AuthorComponent;
}());



/***/ }),

/***/ "./src/app/directives/highlight.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directives/highlight.directive.ts ***!
  \***************************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/map.service */ "./src/app/services/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(mapService) {
        this.mapService = mapService;
    }
    HighlightDirective.prototype.mouseup = function ($event) {
        var text = $(document.getElementById("text-input"));
        var start = text[0].selectionStart;
        var end = text[0].selectionEnd;
        var selection = text[0].value.slice(start, end);
        if (start < end) {
            this.textArray.push(" " + selection);
        }
        console.log(text);
        text[0].value = text[0].value.slice(0, start) + $(text)[0].value.slice(end);
        // text = document.getElementById("text-input")
        var hiddenDiv = document.createElement('div'), content = null;
        text[0].classList.add('txtstuff');
        hiddenDiv.classList.add('hiddendiv', 'common');
        document.body.appendChild(hiddenDiv);
        // text = text.slice(highlighted, another)
        content = text[0].value;
        console.log(text);
        hiddenDiv.innerHTML = content + '\n\n';
        text[0].style.height = hiddenDiv.getBoundingClientRect().height + 'px';
        //THIS IS A RIDICULOUS PLACE TO PUT THIS FUNCTION CALL, SHOULD BE ON SOME NG INIT SOMEWHERE BUT.
    };
    HighlightDirective.prototype.keyup = function ($event) {
        var text = $(document.getElementById("text-input"));
        var hiddenDiv = document.createElement('div'), content = null;
        text[0].classList.add('txtstuff');
        console.log(hiddenDiv);
        hiddenDiv.classList.add('hiddendiv', 'common');
        document.body.appendChild(hiddenDiv);
        // text = text.slice(highlighted, another)
        content = text[0].value;
        console.log(text);
        hiddenDiv.innerHTML = content + '\n\n';
        text[0].style.height = hiddenDiv.getBoundingClientRect().height + 'px';
        //push into text array
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HighlightDirective.prototype, "textArray", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseup'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "mouseup", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keyup'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HighlightDirective.prototype, "keyup", null);
    HighlightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHighlight]'
        }),
        __metadata("design:paramtypes", [_services_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/directives/scroll-animate.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/directives/scroll-animate.directive.ts ***!
  \********************************************************/
/*! exports provided: ScrollAnimateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollAnimateDirective", function() { return ScrollAnimateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_d3_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/d3.service */ "./src/app/services/d3.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrollAnimateDirective = /** @class */ (function () {
    function ScrollAnimateDirective(d3Service, el) {
        this.d3Service = d3Service;
        this.el = el;
    }
    ScrollAnimateDirective.prototype.scroll = function ($event) {
        var vignetteElements = document.getElementsByClassName("read-vignette");
        var workingVignette;
        for (var i = 0; i < vignetteElements.length; i++) {
            // console.log($(elements[i]).position().top, $(window).innerHeight()))
            // console.log(i)
            //DIRTY HACK have to find something beetter than window height...
            var txt = document.getElementsByClassName("txt");
            var txtHeight = $(txt).innerHeight();
            if ($($(vignetteElements[i]).children().last()).position()) {
                if ($($(vignetteElements[i]).children().last()).position().top > txtHeight) {
                    var workingVignette_1 = $(vignetteElements[i]);
                    break;
                }
            }
        }
        console.log(workingVignette);
        // console.log(event.path[0].children)
        // console.log(event.path[0].children[1].scrollTop)
        this.callback(event.target.scrollTop, event.target, workingVignette);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], ScrollAnimateDirective.prototype, "callback", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ScrollAnimateDirective.prototype, "scroll", null);
    ScrollAnimateDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appScrollAnimate]',
        }),
        __metadata("design:paramtypes", [_services_d3_service__WEBPACK_IMPORTED_MODULE_1__["D3Service"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ScrollAnimateDirective);
    return ScrollAnimateDirective;
}());



/***/ }),

/***/ "./src/app/filter/filter.component.css":
/*!*********************************************!*\
  !*** ./src/app/filter/filter.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/filter/filter.component.html":
/*!**********************************************!*\
  !*** ./src/app/filter/filter.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"reader row row-no-gutter\" >\n  <!-- <div class = \"nav col-sm-1\"  (click)=\"hide()\">\n    <app-menu ></app-menu>\n  </div> -->\n\n  <h1>Filter Vignettes</h1>\n\n  <button class = \"col-sm-5 btn-filter\" type=\"button\" name=\"button\" (click) = \"assembleCharacters()\" (click) = \"assembleStandaloneCharacters()\">Read by Character</button>\n  <button class = \"col-sm-5 btn-time btn-filter\" type=\"button\" name=\"button\">Read by Time</button>\n\n  <div class=\"row filter-container\">\n    <div class=\"col-sm-3 character\" *ngFor=\"let char of filteredCharacters\">\n      <button class = \"btn-filter\" type=\"button\" name=\"button\" (click) = \"findByCharacter(char)\" (click) = \"findStandaloneByCharacter(char)\" >{{char}}</button>\n    </div>\n    <div class=\"filter-read-container\">\n\n    <div class=\"filter-read-vignette\" *ngFor=\"let vignette of filteredVignettes | orderBy: 'order'\">\n      <div class=\"title\">\n        {{vignette.name}}\n      </div>\n\n      <div class=\"filter-reader-text\">\n      <!-- {{vignette.charsacters}} -->\n      {{vignette.text}}\n    </div>\n    </div>\n  </div>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/filter/filter.component.ts":
/*!********************************************!*\
  !*** ./src/app/filter/filter.component.ts ***!
  \********************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_vignettes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/vignettes.service */ "./src/app/services/vignettes.service.ts");
/* harmony import */ var _services_standalone_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/standalone.service */ "./src/app/services/standalone.service.ts");
/* harmony import */ var _models_vignette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/vignette */ "./src/app/models/vignette.ts");
/* harmony import */ var _models_standalone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/standalone */ "./src/app/models/standalone.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FilterComponent = /** @class */ (function () {
    function FilterComponent(vignetteService, standaloneService) {
        this.vignetteService = vignetteService;
        this.standaloneService = standaloneService;
    }
    FilterComponent.prototype.ngOnInit = function () {
        this.searchCriteria = '',
            this.vignettes = [],
            this.getVignettes();
        this.getStandalones();
        this.filteredVignettes = [];
        this.filteredCharacters = [];
        this.filteredStandaloneCharacters = [];
        this.standalones = [];
    };
    FilterComponent.prototype.getVignettes = function () {
        var _this = this;
        this.vignetteService.getVignettes(this.searchCriteria)
            .subscribe(function (data) {
            _this.vignettes = [];
            data.forEach(function (element) {
                var newVignette = new _models_vignette__WEBPACK_IMPORTED_MODULE_3__["Vignette"](element._id, element.name, element.text, element.characters, element.location, element.order);
                _this.vignettes.push(newVignette);
            });
        });
    };
    FilterComponent.prototype.getStandalones = function () {
        var _this = this;
        this.standaloneService.getStandalones(this.searchCriteria)
            .subscribe(function (data) {
            _this.standalones = [];
            data.forEach(function (element) {
                var newStandalone = new _models_standalone__WEBPACK_IMPORTED_MODULE_4__["Standalone"](element._id, element.name, element.text, element.characters, element.location);
                _this.standalones.push(newStandalone);
            });
        });
    };
    FilterComponent.prototype.assembleCharacters = function () {
        var _this = this;
        this.vignettes.forEach(function (vignette) {
            vignette.characters.forEach(function (char) {
                console.log(char);
                console.log(typeof char);
                if (!(_this.filteredCharacters.includes(char))) {
                    _this.filteredCharacters.push(char);
                    console.log(char);
                }
            });
        });
    };
    FilterComponent.prototype.assembleStandaloneCharacters = function () {
        var _this = this;
        this.standalones.forEach(function (standalone) {
            standalone.characters.forEach(function (char) {
                if (!(_this.filteredCharacters.includes(char))) {
                    _this.filteredCharacters.push(char);
                }
            });
        });
    };
    FilterComponent.prototype.assembleStandalonCharacters = function () {
        var _this = this;
        this.vignettes.forEach(function (vignette) {
            vignette.characters.forEach(function (char) {
                if (!(_this.filteredCharacters.includes(char))) {
                    _this.filteredCharacters.push(char);
                }
            });
        });
    };
    FilterComponent.prototype.findStandaloneByCharacter = function (character) {
        var _this = this;
        this.standaloneService.getStandalones(character)
            .subscribe(function (data) {
            data.forEach(function (element) {
                var newStandalone = new _models_standalone__WEBPACK_IMPORTED_MODULE_4__["Standalone"](element._id, element.name, element.text, element.characters, element.location);
                _this.filteredVignettes.push(newStandalone);
            });
        });
    };
    FilterComponent.prototype.findByCharacter = function (character) {
        var _this = this;
        this.vignetteService.getVignettes(character)
            .subscribe(function (data) {
            _this.filteredVignettes = [];
            data.forEach(function (element) {
                var newVignette = new _models_vignette__WEBPACK_IMPORTED_MODULE_3__["Vignette"](element._id, element.name, element.text, element.characters, element.location, element.order);
                _this.filteredVignettes.push(newVignette);
            });
        });
    };
    FilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/filter/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.component.css */ "./src/app/filter/filter.component.css")]
        }),
        __metadata("design:paramtypes", [_services_vignettes_service__WEBPACK_IMPORTED_MODULE_1__["VignetteService"], _services_standalone_service__WEBPACK_IMPORTED_MODULE_2__["StandaloneService"]])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\n<h2 class = \"main-title\">Plot</h2>\n\n  <app-map  class = \"splash\"></app-map>\n  <div (click) = \"placeInstructions()\" class=\"\">\n    place instructions\n  </div>\n  <div  class=\"row\">\n\n  <a  class=\"col-sm-3 btn-home\" routerLink=\"/add\">Add A Story</a>\n  <a  class=\"col-sm-3 btn-home\" routerLink=\"/manage\">Manage Stories</a>\n  <a  class=\"col-sm-3 btn-home\" routerLink=\"/reader\">Read Stories</a>\n  <a  class=\"col-sm-3 btn-home\" routerLink=\"/filter\">Filter Stories</a>\n</div>\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_d3_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/d3.service */ "./src/app/services/d3.service.ts");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/map.service */ "./src/app/services/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(d3Service, mapService) {
        this.d3Service = d3Service;
        this.mapService = mapService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.instructions = ["attatch ongoing narratives to a path on the map", "attatch standalone stories to points on the map"];
        this.points = "{\"type\": \"FeatureCollection\",\"features\": [{  \"type\": \"Feature\",\"properties\": {},\"geometry\": {\"type\": \"Point\",\"coordinates\": [-87.65401124954224,41.792640583111805]}}, {  \"type\": \"Feature\",\"properties\": {},\"geometry\": {\"type\": \"Point\",\"coordinates\": [-87.64899015426634, 41.788848941062334]}}]}";
        this.map = this.mapService.map;
        this.path = "{\"type\": \"FeatureCollection\",\"features\": [{  \"type\": \"Feature\",\"properties\": {},\"geometry\": {\"type\": \"Point\",\"coordinates\": [ -87.65235900878906, 41.790632800595844]}}, {  \"type\": \"Feature\",\"properties\": {},\"geometry\": {\"type\": \"Point\",\"coordinates\": [  -87.6524019241333, 41.79239261337629]}}, {  \"type\": \"Feature\",\"properties\": {},\"geometry\": {\"type\": \"Point\",\"coordinates\": [  -87.65120029449463, 41.7924246095251]}}, {  \"type\": \"Feature\",\"properties\": {},\"geometry\": {\"type\": \"Point\",\"coordinates\": [-87.6499557495117, 41.7924406075935]}}]}";
    };
    HomeComponent.prototype.placeInstructions = function () {
        this.mapService.placeInstructions(this.instructions, this.points, this.path);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_d3_service__WEBPACK_IMPORTED_MODULE_1__["D3Service"], _services_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class= \"map-div\" id = 'map' >\n\n</div>\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/map.service */ "./src/app/services/map.service.ts");
/* harmony import */ var _services_d3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/d3.service */ "./src/app/services/d3.service.ts");
/* harmony import */ var _models_vignette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/vignette */ "./src/app/models/vignette.ts");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapComponent = /** @class */ (function () {
    function MapComponent(mapService, d3Service) {
        this.mapService = mapService;
        this.d3Service = d3Service;
    }
    MapComponent.prototype.ngOnInit = function () {
        this.features = [];
        var map = leaflet__WEBPACK_IMPORTED_MODULE_4__["map"]("map", {
            zoomControl: false,
            center: leaflet__WEBPACK_IMPORTED_MODULE_4__["latLng"](41.79, -87.65),
            zoom: 17,
            // minZoom: 8,
            // maxZoom: 18,
            layers: leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"]("http://{s}.sm.mapstack.stamen.com/(toner-lite,$fff[difference],$fff[@23],$fff[hsl-saturation@20])/{z}/{x}/{y}.png") //, {
            // attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
            // [this.mapService.baseMaps.OpenStreetMap]
        });
        this.map = map;
        this.mapService.map = map;
        this.standalones = [];
        map.touchZoom.disable();
        map.doubleClickZoom.disable();
        map.scrollWheelZoom.disable();
        map.boxZoom.disable();
        map.keyboard.disable();
        // this.d3Service.readyMap(this.mapService.map) //this.actingVignette.location);
        // this.d3Service.(this.mapService.map) //this.actingVignette.location);
        // this.d3Service.placeMarkers(this.mapService.map) // this.actingVignette.location)
    };
    //when a new vignette is actingVignette
    MapComponent.prototype.ngOnChanges = function (changes) {
        console.log();
        if (changes['actingVignette'] && changes['actingVignette'].currentValue != undefined) {
            // let scrollTop = changes.scrollTop.currentValue
            if (changes['actingVignette'].previousValue == undefined) {
                console.log(this.mapService.map);
                this.d3Service.placeSVG(this.mapService.map);
                this.d3Service.readyMap(this.mapService.map, this.actingVignette.location);
                this.d3Service.placeMarkers(this.mapService.map, this.standalones);
            }
            if (changes['actingVignette'].previousValue._id != changes['actingVignette'].currentValue._id) {
                this.d3Service.removePrevious(this.mapService.map);
                this.d3Service.readyMap(this.mapService.map, this.actingVignette.location);
            }
            ;
            // this.d3Service.drawLine(this.mapService.map, scrollTop, this.text, this.actingVignette.location)
        }
        if (changes['scrollTop'] && changes['scrollTop'].currentValue != undefined) {
            var scrollTop = changes.scrollTop.currentValue;
            this.d3Service.drawLine(this.mapService.map, scrollTop, this.text, this.actingVignette.location);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MapComponent.prototype, "scrollTop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_vignette__WEBPACK_IMPORTED_MODULE_3__["Vignette"])
    ], MapComponent.prototype, "actingVignette", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "features", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "standalones", void 0);
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [_services_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"], _services_d3_service__WEBPACK_IMPORTED_MODULE_2__["D3Service"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\" row col-sm-12\" id=\"nav\"> -->\n  <!-- <div class=\"row\"> -->\n\n<!-- <button (click)=\"toggleCollapse()\" class=\"navbar-toggler navbar-toggler-right\" type=\"button\"> v </button> -->\n<!-- <p [@myAnimation]='state' (click)=\"toggleCollapse()\">I will animate</p> -->\n<!-- other navbar code omitted -->\n<div (click)=\"toggleCollapse()\" >\n  <div class=\"hamburger\">\n\n  </div>\n  <div class=\"hamburger\">\n\n  </div><div class=\"hamburger\">\n\n  </div>\n</div>\n\n  <div >\n    <a [@myAnimation]='state' class=\"collapse\" class=\"col-sm-12 btn-menu\" routerLink=\"/add\">Add</a>\n    <a [@myAnimation2]='state' class=\"collapse\" class=\"col-sm-12 btn-menu\" routerLink=\"/manage\">Manage</a>\n    <a [@myAnimation3]='state' class=\"collapse\" class=\"col-sm-12 btn-menu\" routerLink=\"/reader\">Reader</a>\n    <a [@myAnimation4]='state' class=\"collapse\" class=\"col-sm-12 btn-menu\" routerLink=\"/filter\">Filter</a>\n  </div>\n\n<!-- </div> -->\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.state = true;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.toggleCollapse = function () {
        this.state = !this.state;
        console.log(this.state);
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('myAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        'transform': 'translateY(-300%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('true => false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('350ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' })))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('myAnimation2', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        'transform': 'translateY(-500%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('true => false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('350ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' })))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('myAnimation3', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        'transform': 'translateY(-700%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('true => false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('350ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' })))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('myAnimation4', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        'transform': 'translateY(-900%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('true => false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('350ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' })))
                ]),
            ]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/models/anchor.ts":
/*!**********************************!*\
  !*** ./src/app/models/anchor.ts ***!
  \**********************************/
/*! exports provided: Anchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Anchor", function() { return Anchor; });
var Anchor = /** @class */ (function () {
    function Anchor(_id, name, notes, characters, location) {
        this._id = _id;
        this.name = name;
        this.notes = notes;
        this.characters = characters;
        this.location = location;
    }
    Anchor.CreateDefault = function () {
        return new Anchor('', '', '', [], '');
    };
    return Anchor;
}());



/***/ }),

/***/ "./src/app/models/standalone.ts":
/*!**************************************!*\
  !*** ./src/app/models/standalone.ts ***!
  \**************************************/
/*! exports provided: Standalone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Standalone", function() { return Standalone; });
var Standalone = /** @class */ (function () {
    function Standalone(_id, name, text, characters, location) {
        this._id = _id;
        this.name = name;
        this.text = text;
        this.characters = characters;
        this.location = location;
    }
    Standalone.CreateDefault = function () {
        return new Standalone('', '', [], [], '');
    };
    return Standalone;
}());



/***/ }),

/***/ "./src/app/models/vignette.ts":
/*!************************************!*\
  !*** ./src/app/models/vignette.ts ***!
  \************************************/
/*! exports provided: Vignette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vignette", function() { return Vignette; });
var Vignette = /** @class */ (function () {
    function Vignette(_id, name, text, characters, location, //geoJSON
        order) {
        this._id = _id;
        this.name = name;
        this.text = text;
        this.characters = characters;
        this.location = location;
        this.order = order;
    }
    Vignette.CreateDefault = function () {
        return new Vignette('', '', [], [], '', 0);
    };
    return Vignette;
}());



/***/ }),

/***/ "./src/app/notes/notes.component.css":
/*!*******************************************!*\
  !*** ./src/app/notes/notes.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notes/notes.component.html":
/*!********************************************!*\
  !*** ./src/app/notes/notes.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class= \"container-fluid full-width\">\n  <div class=\"row row-no-gutter\">\n\n    <app-menu>  </app-menu>\n\n    <div class=\"col-sm-10\">\n      <p>Notes page</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/notes/notes.component.ts":
/*!******************************************!*\
  !*** ./src/app/notes/notes.component.ts ***!
  \******************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotesComponent = /** @class */ (function () {
    function NotesComponent() {
    }
    NotesComponent.prototype.ngOnInit = function () {
    };
    NotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notes',
            template: __webpack_require__(/*! ./notes.component.html */ "./src/app/notes/notes.component.html"),
            styles: [__webpack_require__(/*! ./notes.component.css */ "./src/app/notes/notes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotesComponent);
    return NotesComponent;
}());



/***/ }),

/***/ "./src/app/part-edit/part-edit.component.css":
/*!***************************************************!*\
  !*** ./src/app/part-edit/part-edit.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/part-edit/part-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/part-edit/part-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <textarea class = \"col-sm-12 part-edit-input\" name=\"editPart\" [(ngModel)] = \"editPart\"> </textarea>\n\n  <button class=\"col-sm-12 btn btn-edit\" (click)=\"updatePart(editPart, index, textArray)\"> Edit Part</button>\n</div>\n"

/***/ }),

/***/ "./src/app/part-edit/part-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/part-edit/part-edit.component.ts ***!
  \**************************************************/
/*! exports provided: PartEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartEditComponent", function() { return PartEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PartEditComponent = /** @class */ (function () {
    function PartEditComponent() {
    }
    PartEditComponent.prototype.ngOnInit = function () {
    };
    PartEditComponent.prototype.updatePart = function (editPart, index, textArray) {
        textArray[index] = editPart;
        editPart = '';
        console.log(editPart);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PartEditComponent.prototype, "editPart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PartEditComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PartEditComponent.prototype, "textArray", void 0);
    PartEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-part-edit',
            template: __webpack_require__(/*! ./part-edit.component.html */ "./src/app/part-edit/part-edit.component.html"),
            styles: [__webpack_require__(/*! ./part-edit.component.css */ "./src/app/part-edit/part-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PartEditComponent);
    return PartEditComponent;
}());



/***/ }),

/***/ "./src/app/reader/reader.component.css":
/*!*********************************************!*\
  !*** ./src/app/reader/reader.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reader/reader.component.html":
/*!**********************************************!*\
  !*** ./src/app/reader/reader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class= \"whole container-fluid full-width\" >\n  <div class=\"reader row row-no-gutter\" >\n    <div class = \"nav col-sm-1\"  (click)=\"hide()\">\n      <app-menu ></app-menu>\n    </div>\n    <section class = \"big\">\n\n      <div appScrollAnimate [callback] = \"scrollHandler\"  class = \"txt\">\n        <div [id]=\"index+1\" class = \"read-vignette\" *ngFor=\"let vignette of vignettes |  orderBy: 'order', let index = index;\" >\n          <div  class=\"reader-title\">\n            {{vignette.name}}\n          </div>\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n          {{vignette.name}}\n\n\n\n          <div *ngFor=\"let t of vignette.text; let index = index\"  class = \"reader-text\">\n            <div *ngIf = \"t[0] === '@'; else unattatched \" class = \"part\" [id] = \"index + 1\">\n              {{t}}\n              <!-- {{t.substring(1, t.length)}} -->\n              <span class = \"invisible last\" [id] = \"index + 1\">x</span>\n            </div>\n              <ng-template #unattatched>{{t}}</ng-template>\n          </div>\n\n\n\n        </div>\n      </div>\n    </section>\n\n    <div class=\"\" >\n      <app-map (click) =  \"changeStyling\" appResize [standalones]= \"standalones\" [text]=\"text\" [scrollTop]=\"scrollTop\" [actingVignette] = \"actingVignette\" id = \"mapid\"></app-map>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/reader/reader.component.ts":
/*!********************************************!*\
  !*** ./src/app/reader/reader.component.ts ***!
  \********************************************/
/*! exports provided: ReaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReaderComponent", function() { return ReaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_vignette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/vignette */ "./src/app/models/vignette.ts");
/* harmony import */ var _services_vignettes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/vignettes.service */ "./src/app/services/vignettes.service.ts");
/* harmony import */ var _services_standalone_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/standalone.service */ "./src/app/services/standalone.service.ts");
/* harmony import */ var _models_standalone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/standalone */ "./src/app/models/standalone.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReaderComponent = /** @class */ (function () {
    function ReaderComponent(vignetteService, standaloneService) {
        this.vignetteService = vignetteService;
        this.standaloneService = standaloneService;
        this.scrollHandler = this.handleScroll.bind(this);
    }
    ReaderComponent.prototype.ngOnInit = function () {
        // this.editVignette = Vignette.CreateDefault();
        this.searchCriteria = '';
        this.getVignettes();
        this.show = true;
        this.getStandalones();
    };
    // defineVignette(vignette:Vignette) {
    //   this.vignette = vignette
    //   console.log(this.vignette)
    // }
    ReaderComponent.prototype.changeStyling = function (e) {
        console.log(e);
        console.log('HERE');
    };
    ReaderComponent.prototype.handleScroll = function (scrollTop, text, vignette) {
        this.scrollTop = scrollTop;
        // this.actingVignette =
        this.text = text;
        console.log(scrollTop);
        console.log(text);
        console.log(vignette);
        // this.standalones = standalones;
        this.setActingVignette(vignette);
    };
    ReaderComponent.prototype.hide = function () {
        this.show = !this.show;
    };
    ReaderComponent.prototype.setActingVignette = function (vignette) {
        var title = vignette[0].childNodes[1].innerText;
        // console.log(this.vignettes)
        var interest = this.vignettes.find(function (x) { return x.name == title; });
        // let workingVignette = Vignettes.where(name = workVignette )
        // console.log(this.actingVignette)
        this.actingVignette = new _models_vignette__WEBPACK_IMPORTED_MODULE_1__["Vignette"](interest._id, interest.name, interest.text, interest.characters, interest.location, interest.order);
    };
    ReaderComponent.prototype.getStandalones = function () {
        var _this = this;
        this.standaloneService.getStandalones(this.searchCriteria)
            .subscribe(function (data) {
            _this.standalones = [];
            data.forEach(function (element) {
                var newStandalone = new _models_standalone__WEBPACK_IMPORTED_MODULE_4__["Standalone"](element._id, element.name, element.text, element.characters, element.location);
                _this.standalones.push(newStandalone);
            });
        });
    };
    ReaderComponent.prototype.getVignettes = function () {
        var _this = this;
        this.vignetteService.getVignettes(this.searchCriteria)
            .subscribe(function (data) {
            _this.vignettes = [];
            data.forEach(function (element) {
                var newVignette = new _models_vignette__WEBPACK_IMPORTED_MODULE_1__["Vignette"](element._id, element.name, element.text, element.characters, element.location, element.order);
                _this.vignettes.push(newVignette);
            });
        });
    };
    ReaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reader',
            template: __webpack_require__(/*! ./reader.component.html */ "./src/app/reader/reader.component.html"),
            styles: [__webpack_require__(/*! ./reader.component.css */ "./src/app/reader/reader.component.css")]
        }),
        __metadata("design:paramtypes", [_services_vignettes_service__WEBPACK_IMPORTED_MODULE_2__["VignetteService"], _services_standalone_service__WEBPACK_IMPORTED_MODULE_3__["StandaloneService"]])
    ], ReaderComponent);
    return ReaderComponent;
}());



/***/ }),

/***/ "./src/app/services/anchor.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/anchor.service.ts ***!
  \********************************************/
/*! exports provided: AnchorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorService", function() { return AnchorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AnchorService = /** @class */ (function () {
    function AnchorService(http) {
        this.http = http;
    }
    AnchorService.prototype.getAnchors = function (searchCriteria) {
        return this.http.get("https://groupthinktv.herokuapp.com/getAnchors")
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json ? error.json().error : error || 'Server error');
        });
    };
    AnchorService.prototype.insertNewAnchor = function (anchor) {
        return this.http.post("https://groupthinktv.herokuapp.com/insertNewAnchor", anchor)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json ? error.json().error : error || 'Server error');
        });
    };
    AnchorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AnchorService);
    return AnchorService;
}());



/***/ }),

/***/ "./src/app/services/d3.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/d3.service.ts ***!
  \****************************************/
/*! exports provided: D3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3Service", function() { return D3Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var D3Service = /** @class */ (function () {
    function D3Service() {
        this.projectedArray = [];
        this.linePath = {};
        this.marker = {};
        this.popups = [];
        this.svg = {};
    }
    D3Service.prototype.placeSVG = function (map) {
        console.log('yep');
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](map.getPanes().overlayPane).append("svg");
        console.log(map);
    };
    D3Service.prototype.removePrevious = function (map) {
        console.log(d3__WEBPACK_IMPORTED_MODULE_1__["select"]('g'));
        d3__WEBPACK_IMPORTED_MODULE_1__["select"]('g').remove();
    };
    D3Service.prototype.readyMap = function (map, location) {
        this.marker = {};
        var projectedArray = this.projectedArray;
        this.linePath = {};
        var g = this.svg.append("g").attr("class", "character path");
        var dataLayer = leaflet__WEBPACK_IMPORTED_MODULE_2__["geoJson"](this.popups);
        dataLayer.addTo(map);
        var geoData = JSON.parse(location);
        // if(geoData.features.length < 2) {
        //   map.setZoom(18)
        // } else {
        //   map.setZoom(16)
        // }
        //linear scale for preserving scale
        //https://github.com/d3/d3-scale/blob/master/README.md#continuous-scales
        // var cscale = d3
        // .scale
        // .linear()
        // .domain([1, 3])
        // .range(["#ff0000", "#ff6a00", "#ffd800", "#b6ff00", "#00ffff", "#0094ff"]); //"#00FF00","#FFA500"
        var transform = d3__WEBPACK_IMPORTED_MODULE_1__["geo"].transform({
            point: projectPoint,
        });
        //path: given a GeoJSON geometry or feature object, it generates an SVG path data string or renders the path to a Canvas.
        var path = d3__WEBPACK_IMPORTED_MODULE_1__["geo"].path().projection(transform);
        this.projectedArray = [];
        var makeLine = d3__WEBPACK_IMPORTED_MODULE_1__["svg"].line()
            .x(function (d) { return applyLatLngToLayer(d).x; })
            .y(function (d) { return applyLatLngToLayer(d).y; })
            .interpolate("linear");
        this.linePath = g.selectAll(".lines")
            .data([geoData.features])
            .enter()
            .append("path")
            .attr("class", "lines");
        var ptFeatures = g.selectAll("circle")
            .data(geoData)
            .enter()
            .append("circle")
            .attr("r", 10);
        this.marker = g.append("circle")
            .attr("r", 10)
            .attr("id", "marker")
            .attr("class", "travelMarker");
        this.marker.attr("transform", function () {
            var y = geoData.features[0].geometry.coordinates[1];
            var x = geoData.features[0].geometry.coordinates[0];
            return "translate(" +
                map.latLngToLayerPoint(new leaflet__WEBPACK_IMPORTED_MODULE_2__["LatLng"](y, x)).x + "," +
                map.latLngToLayerPoint(new leaflet__WEBPACK_IMPORTED_MODULE_2__["LatLng"](y, x)).y + ")";
        });
        var latitude = geoData.features[0].geometry.coordinates[0];
        var longitude = geoData.features[0].geometry.coordinates[1];
        map.panTo([longitude, latitude]);
        function projectPoint(x, y) {
            var point = map.latLngToLayerPoint(new leaflet__WEBPACK_IMPORTED_MODULE_2__["LatLng"](y, x));
            projectedArray.push([point.x, point.y]);
            this.stream.point(point.x, point.y);
        }
        function applyLatLngToLayer(d) {
            // console.log('applylatlng')
            var y = d.geometry.coordinates[1];
            var x = d.geometry.coordinates[0];
            return map.latLngToLayerPoint(new leaflet__WEBPACK_IMPORTED_MODULE_2__["LatLng"](y, x));
        }
        // console.log(geoData)
        var bounds = path.bounds(geoData);
        var topLeft = bounds[0];
        var bottomRight = bounds[1];
        ptFeatures.attr("transform", function (d) {
            return "translate(" +
                applyLatLngToLayer(d).x + "," +
                applyLatLngToLayer(d).y + ")";
        });
        this.svg.attr("width", bottomRight[0] - topLeft[0] + 120)
            .attr("height", bottomRight[1] - topLeft[1] + 120)
            .style("left", topLeft[0] - 50 + "px")
            .style("top", topLeft[1] - 50 + "px");
        // linePath.attr("d", d3path);
        this.linePath.attr("d", makeLine);
        // ptPath.attr("d", d3path);
        g.attr("transform", "translate(" + (-topLeft[0] + 50) + "," + (-topLeft[1] + 50) + ")");
        var p = this.linePath.node().getPointAtLength(length - parseInt(this.linePath.style('stroke-dashoffset')));
        // console.log(p)
        this.marker.attr("transform", "translate(" + p.x + "," + p.y + ")");
        this.projectedArray = projectedArray;
        //if this is the splash page
        // this.linePath.style("stroke-width", 10)
        // this.timeTransition()
    };
    D3Service.prototype.timeTransition = function () {
        console.log(this.linePath);
        transition(this.linePath);
        function transition(linePath) {
            linePath.transition()
                .duration(7500)
                .attrTween("stroke-dasharray", tweenDash(linePath))
                .each("end", function () {
                console.log('not callin!!!!');
                // d3.select(this).call(transition);// infinite loop
            });
        } //end transition
        function tweenDash(linePath) {
            return function (t) {
                //total length of path (single value)
                var l = linePath.node().getTotalLength();
                console.log(l);
                var interpol = d3__WEBPACK_IMPORTED_MODULE_1__["interpolateString"]("0," + l, l + "," + l);
                //t is fraction of time 0-1 since transition began
                var marker = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("#marker");
                // p is the point on the line (coordinates) at a given length
                // along the line. In this case if l=50 and we're midway through
                // the time then this would 25.
                var p = linePath.node().getPointAtLength(t * l);
                //Move the marker to that point
                // this.marker.attr("transform", "translate(" + p.x + "," + p.y + ")"); //move marker
                console.log(interpol(t));
                return interpol(t);
            };
        } //end tweenDash
    };
    D3Service.prototype.drawLine = function (map, scrollTop, text, location) {
        // let map = map
        var vignetteElements = document.getElementsByClassName("read-vignette");
        var actingVignette = $(vignetteElements[0]); //these allow me to compile but throw errors when scrolling
        var actingChild = actingVignette.children().children()[1];
        var actingLast = actingVignette.children().children()[0];
        ;
        var actingLastNum = 0;
        var marker = this.marker;
        var projectedArray = this.projectedArray;
        var linePath = this.linePath;
        var txtHeight;
        // console.log(location)
        var geoData = JSON.parse(location);
        // console.log(location)
        // projectedArray = projectedArray.slice((projectedArray.length - geoData.features.length), (projectedArray.length))
        // console.log(projectedArray)
        //this will become
        // map.on("viewreset", reset);
        // map.on("moveend", reset);
        // console.log(linePath)
        reset();
        function reset() {
            var distance = 0;
            var lengthsArray = [];
            projectedArray = projectedArray.slice((projectedArray.length - geoData.features.length), (projectedArray.length));
            var getDistance = function getDistance(point1, point2) {
                var xs = 0;
                var ys = 0;
                xs = point2[0] - point1[0];
                xs = xs * xs;
                ys = point2[1] - point1[1];
                ys = ys * ys;
                return Math.sqrt(xs + ys);
            };
            for (var i = 0; i < projectedArray.length - 1; i++) {
                distance = getDistance(projectedArray[i], projectedArray[i + 1]);
                lengthsArray.push(distance);
            }
            function makePartPosition(scrollTop, number, actingChild) {
                if (number === 0) {
                    return 0;
                }
                else {
                    // console.log(actingChild)
                    return $(actingChild).position().top + scrollTop - (txtHeight);
                }
            }
            function makeLastPartPosition(scrollTop, actingLast) {
                if (actingLast.length === 0) {
                    // console.log('am i ever in here?')
                    return 0;
                }
                else {
                    // console.log(actingLast.children())
                    return $(actingLast.children()[0]).position().top + scrollTop - (txtHeight);
                }
            }
            function makeSegLength(lengthsArray, number) {
                var total = 0;
                if (number === 0) {
                    return 0;
                }
                else {
                    for (var i = 0; i < number; i++) {
                        // console.log(lengthsArray)
                        total = total + lengthsArray[i];
                    }
                    return total;
                }
            }
            function makeLinePathScale(scrollTop, number, actingChild, actingLast) {
                // console.log(actingChild)
                var linePathScale = d3__WEBPACK_IMPORTED_MODULE_1__["scale"].linear()
                    .domain([makeLastPartPosition(scrollTop, actingLast), makePartPosition(scrollTop, number, actingChild)])
                    .range([makeSegLength(lengthsArray, number - 1), makeSegLength(lengthsArray, number)])
                    .clamp(true);
                return linePathScale(scrollTop);
            }
            render();
            function render() {
                // console.log('in render')
                var length = linePath.node().getTotalLength();
                vignetteElements = document.getElementsByClassName("read-vignette");
                for (var i = 0; i < vignetteElements.length; i++) {
                    // console.log($(elements[i]).position().top, $(window).innerHeight()))
                    // console.log(i)
                    //DIRTY HACK have to find something beetter than window height...
                    var txt = document.getElementsByClassName("txt");
                    txtHeight = $(txt).innerHeight();
                    if ($($(vignetteElements[i]).children().last()).position()) {
                        if ($($(vignetteElements[i]).children().last()).position().top > txtHeight) {
                            actingVignette = $(vignetteElements[i]);
                            break;
                        }
                    }
                }
                //let elements be the children of the acting vignette
                var children = actingVignette.children().children();
                for (var i = 0; i < children.length; i++) {
                    // console.log($(elements[i]).position().top, $(window).innerHeight()))
                    // console.log(i)
                    //if children[i] has a div with an id i then thats the acting child
                    // console.log(i)
                    if ($(children[i]).position().top > txtHeight) {
                        // if($(children[i]).has('div')){
                        actingChild = $(children[i]);
                        // console.log(actingChild)
                        // }
                        // console.log('actingChild')
                        // console.log(actingChild)
                        //this wont work between the last one of the last vignette and the first
                        //one of the second vignette
                        actingLast = $(children[i - 1]);
                        actingLastNum = i;
                        break;
                    }
                }
                linePath
                    .style('stroke-dashoffset', function (d) {
                    var num = actingLastNum;
                    return length - makeLinePathScale(scrollTop, num, actingChild, actingLast) + 'px';
                })
                    .style('stroke-dasharray', length)
                    .style('stroke-width', 5)
                    .style('stroke-dasharray', length);
                var p = linePath.node().getPointAtLength(length - parseInt(linePath.style('stroke-dashoffset')));
                marker.attr("transform", "translate(" + p.x + "," + p.y + ")");
                var svgPnt = leaflet__WEBPACK_IMPORTED_MODULE_2__["point"](p.x, p.y);
                var mapLatLng = map.layerPointToLatLng(svgPnt);
                map.panTo(mapLatLng);
            }
            window.requestAnimationFrame(render);
            // var marker2 = document.getElementById('marker')
            // console.log(typeof $(marker2).lngLat())
            // getPosition($(marker2))
        } // end reset
    };
    ;
    // //
    // //   //this is called from ngOnInit in map component, must find a way to import geJSON data
    // //   //probably from a model. should be something like import Popups from '../models/popups'
    // //   //then use popups.coordinates
    // //
    // //
    D3Service.prototype.placeAnchors = function (map, anchors) {
        var popups = "{\"type\": \"FeatureCollection\",\"features\": [";
        var names = [];
        var notes = [];
        anchors.forEach(function (anchor) {
            popups += anchor.location;
            names.push(anchor.name);
            notes.push(anchor.notes);
        });
        var finishedPopups = popups.substring(0, popups.length - 2);
        finishedPopups += " ] }";
        var geoJSONPopups = JSON.parse(finishedPopups);
        var counter = 0;
        var dataLayer = leaflet__WEBPACK_IMPORTED_MODULE_2__["geoJson"](geoJSONPopups, {
            pointToLayer: function (feature, latlng) {
                var popupText = names[counter] + '\n' + notes[counter];
                counter += 1;
                return leaflet__WEBPACK_IMPORTED_MODULE_2__["circleMarker"](latlng, { 'className': 'anchor' }).bindPopup(popupText);
            }
        });
        dataLayer.addTo(map);
    };
    D3Service.prototype.placeMarkers = function (map, standalones) {
        var names = [];
        var text = [];
        var popups = "{\"type\": \"FeatureCollection\",\"features\": [";
        standalones.forEach(function (standalone) {
            popups += standalone.location;
            names.push(standalone.name);
            text.push(standalone.text);
        });
        var finishedPopups = popups.substring(0, popups.length - 2);
        finishedPopups += " ] }";
        var geoJSONPopups = JSON.parse(finishedPopups);
        var counter = 0;
        var dataLayer = leaflet__WEBPACK_IMPORTED_MODULE_2__["geoJson"](geoJSONPopups, {
            pointToLayer: function (feature, latlng) {
                var popupText = names[counter] + '\n' + text[counter];
                counter += 1;
                return leaflet__WEBPACK_IMPORTED_MODULE_2__["circleMarker"](latlng, { 'className': 'standalone' }).bindPopup(popupText);
            }
        });
        dataLayer.bringToFront();
        dataLayer.addTo(map);
        //   //I think this is just leaflet stuff so does the d3 library work?
        //   let dataLayer = L.geoJson(geoJSONPopups, {
        //   onEachFeature: function(feature, layer) {
        //     var popupText = names[counter] + text[counter]
        //     + feature.geometry.coordinates;
        //     counter +=1
        //     layer.bindPopup(popupText);
        //     layer.on("click", function() {
        //     })
        //   }
        // });
        // dataLayer.addTo(map)
    };
    D3Service.prototype.placeInstructions = function (instructions, points, map) {
        var geoJSONPopups = JSON.parse(points);
        var counter = 0;
        var dataLayer = leaflet__WEBPACK_IMPORTED_MODULE_2__["geoJson"](geoJSONPopups, {
            pointToLayer: function (feature, latlng) {
                var popupText = instructions[counter];
                counter += 1;
                return leaflet__WEBPACK_IMPORTED_MODULE_2__["circleMarker"](latlng, { 'className': 'instructions' }).bindPopup(popupText);
            }
        });
        dataLayer.addTo(map);
    };
    D3Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], D3Service);
    return D3Service;
}());



/***/ }),

/***/ "./src/app/services/map.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/map.service.ts ***!
  \*****************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _d3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./d3.service */ "./src/app/services/d3.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapService = /** @class */ (function () {
    function MapService(http, d3Service) {
        this.http = http;
        this.d3Service = d3Service;
        this.markerGroup = {};
        this.anchorGroup = {};
        this.baseMaps = {
            // MapBox:L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            //   attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            //   maxZoom: 18,
            //   id: 'mapbox.streets',
            //   accessToken: 'pk.eyJ1IjoibGVuZXJ0emQiLCJhIjoiY2pibDFhdHdpMHY2NDJxcWtrZjZodWlidSJ9.fBjof9UOXV117fVfw2H8vA'
            // }),
            OpenStreetMap: leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"]("http://{s}.sm.mapstack.stamen.com/(toner-lite,$fff[difference],$fff[@23],$fff[hsl-saturation@20])/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
            }),
        };
    }
    MapService.prototype.placeInstructions = function (instructions, points, path) {
        var geoJSONPopups = JSON.parse(points);
        var counter = 0;
        var dataLayer = leaflet__WEBPACK_IMPORTED_MODULE_2__["geoJson"](geoJSONPopups, {
            pointToLayer: function (feature, latlng) {
                var popupText = instructions[counter];
                counter += 1;
                return leaflet__WEBPACK_IMPORTED_MODULE_2__["circleMarker"](latlng, { 'className': 'instructions' }).bindPopup(popupText);
            }
        });
        // var marker = L.marker([  -87.6499557495117, 41.7924406075935]).addTo(this.map).bindPopup("Add paths to stories and see them animate when you scroll!");
        // marker.addTo(this.map)
        dataLayer.addTo(this.map);
        this.d3Service.readyMap(this.map, path);
    };
    MapService.prototype.readyMarkerGroup = function () {
        this.markerGroup = leaflet__WEBPACK_IMPORTED_MODULE_2__["layerGroup"]();
        this.markerGroup.addTo(this.map);
    };
    MapService.prototype.readyAnchorGroup = function () {
        this.anchorGroup = leaflet__WEBPACK_IMPORTED_MODULE_2__["layerGroup"]();
        this.anchorGroup.addTo(this.map);
    };
    MapService.prototype.getLatLng = function (event) {
        var ll = this.map.mouseEventToLatLng(event);
        if (event.target.localName != "path") {
            var marker = leaflet__WEBPACK_IMPORTED_MODULE_2__["circleMarker"]([ll.lat, ll.lng]).addTo(this.markerGroup);
            //if I wanted to do this part better i'd convert to geoJSON and pass back lol
            //console.log(marker.toGeoJSON())
            return ll;
        }
    };
    MapService.prototype.addAnchorMarker = function (event) {
        var ll = this.map.mouseEventToLatLng(event);
        var marker = leaflet__WEBPACK_IMPORTED_MODULE_2__["circleMarker"]([ll.lat, ll.lng], { 'className': 'anchor' }).addTo(this.anchorGroup);
        return ll;
    };
    MapService.prototype.addStandaloneMarker = function (event) {
        this.markerGroup = leaflet__WEBPACK_IMPORTED_MODULE_2__["layerGroup"]();
        this.markerGroup.addTo(this.map);
        var ll = this.map.mouseEventToLatLng(event);
        var marker = leaflet__WEBPACK_IMPORTED_MODULE_2__["circleMarker"]([ll.lat, ll.lng], { 'className': 'standalone' }).addTo(this.markerGroup);
        //if I wanted to do this part better i'd convert to geoJSON and pass back lol
        //console.log(marker.toGeoJSON())
        return ll;
    };
    MapService.prototype.removeMarkers = function () {
        this.map.removeLayer(this.markerGroup);
    };
    MapService.prototype.removeAnchors = function () {
        this.map.removeLayer(this.anchorGroup);
    };
    MapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _d3_service__WEBPACK_IMPORTED_MODULE_3__["D3Service"]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/services/standalone.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/standalone.service.ts ***!
  \************************************************/
/*! exports provided: StandaloneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandaloneService", function() { return StandaloneService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StandaloneService = /** @class */ (function () {
    function StandaloneService(http) {
        this.http = http;
    }
    StandaloneService.prototype.getStandalones = function (searchCriteria) {
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        params.set('name', searchCriteria);
        return this.http.get("https://groupthinktv.herokuapp.com/getStandalones", { search: params })
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json ? error.json().error : error || 'Server error');
        });
    };
    StandaloneService.prototype.insertNewStandalone = function (standalone) {
        return this.http.post("https://groupthinktv.herokuapp.com/insertNewStandalone", standalone)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json ? error.json().error : error || 'Server error');
        });
    };
    StandaloneService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], StandaloneService);
    return StandaloneService;
}());



/***/ }),

/***/ "./src/app/services/vignettes.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/vignettes.service.ts ***!
  \***********************************************/
/*! exports provided: VignetteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VignetteService", function() { return VignetteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VignetteService = /** @class */ (function () {
    function VignetteService(http) {
        this.http = http;
    }
    VignetteService.prototype.getVignettes = function (searchCriteria) {
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        params.set('name', searchCriteria);
        return this.http.get("https://groupthinktv.herokuapp.com/getVignettes", { search: params })
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json ? error.json().error : error || 'Server error');
        });
    };
    VignetteService.prototype.insertNewVignette = function (vignette) {
        return this.http.post("https://groupthinktv.herokuapp.com/insertNewVignette", vignette)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json ? error.json().error : error || 'Server error');
        });
    };
    VignetteService.prototype.updateVignette = function (vignette) {
        console.log(vignette);
        return this.http.post("https://groupthinktv.herokuapp.com/updateVignette", vignette)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json ? error.json().error : error || 'Server error');
        });
    };
    VignetteService.prototype.deleteVignette = function (vignette) {
        console.log(vignette._id);
        return this.http.post("https://groupthinktv.herokuapp.com/deleteVignette", { id: vignette._id })
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json ? error.json().error : error || 'Server error');
        });
    };
    VignetteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], VignetteService);
    return VignetteService;
}());



/***/ }),

/***/ "./src/app/standalone/standalone.component.css":
/*!*****************************************************!*\
  !*** ./src/app/standalone/standalone.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/standalone/standalone.component.html":
/*!******************************************************!*\
  !*** ./src/app/standalone/standalone.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class= \"container-fluid full-width\">\n  <div class=\"row row-no-gutter\">\n\n\n    <div class=\"col-sm-1\">\n      <app-menu>  </app-menu>\n    </div>\n\n    <div class = \"forms row col-sm-4\">\n      <h1>Add A Standalone</h1>\n\n      <a class=\"add-toggle acting col-sm-6\" >Standalone</a>\n      <a class=\"add-toggle col-sm-6\" routerLink=\"/add\">Narrative</a>\n\n      <input class=\"form-control title\" type=\"text\" placeholder=\"Title\" [(ngModel)]=\"this.newStandalone.name\" [ngModelOptions]=\"{standalone: true}\"/>\n      <textarea  id= \"text-input\" name=\"name\" rows=\"8\" cols=\"80\"  [(ngModel)]=\"this.newStandalone.text\"></textarea>\n\n      <input class=\"character-input form-control\" type=\"text\" placeholder=\"Characters\" [(ngModel)]=\"this.newStandalone.characters[0]\" [ngModelOptions]=\"{standalone: true}\"/>\n      <input class=\"character-input form-control\" type=\"text\" placeholder=\"Characters\" [(ngModel)]=\"this.newStandalone.characters[1]\" [ngModelOptions]=\"{standalone: true}\"/>\n      <input class=\"character-input form-control\" type=\"text\" placeholder=\"Characters\" [(ngModel)]=\"this.newStandalone.characters[2]\" [ngModelOptions]=\"{standalone: true}\"/>\n\n      <button class=\"btn btn-default btn-add\" (click)=\"insertNewStandalone()\"> ADD </button>\n    </div>\n\n\n\n\n  </div>\n  <div class=\"anchor-buttons\">\n    <button class=\"btn btn-anchor\" (click)=\"removeMarkers()\"> Remove my Markers </button>\n    <button class=\"btn btn-anchor\" (click)=\"showAnchors()\"> Show Anchors </button>\n    <button class=\"btn btn-anchor\" (click)=\"hideAnchors()\"> Hide Anchors </button>\n    <button class=\"btn btn-anchor\" routerLink=\"/anchor\"> Add Anchors </button>\n  </div>\n  <app-map id = \"mapid\"  (click) = \"setLocation($event)\" id = \"mapid\"></app-map>\n</div>\n\n\n<!-- <leaflet></leaflet> -->\n"

/***/ }),

/***/ "./src/app/standalone/standalone.component.ts":
/*!****************************************************!*\
  !*** ./src/app/standalone/standalone.component.ts ***!
  \****************************************************/
/*! exports provided: StandaloneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandaloneComponent", function() { return StandaloneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_standalone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/standalone */ "./src/app/models/standalone.ts");
/* harmony import */ var _models_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/anchor */ "./src/app/models/anchor.ts");
/* harmony import */ var _services_standalone_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/standalone.service */ "./src/app/services/standalone.service.ts");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/map.service */ "./src/app/services/map.service.ts");
/* harmony import */ var _services_d3_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/d3.service */ "./src/app/services/d3.service.ts");
/* harmony import */ var _services_anchor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/anchor.service */ "./src/app/services/anchor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StandaloneComponent = /** @class */ (function () {
    function StandaloneComponent(anchorService, standaloneService, mapService, d3Service) {
        this.anchorService = anchorService;
        this.standaloneService = standaloneService;
        this.mapService = mapService;
        this.d3Service = d3Service;
    }
    StandaloneComponent.prototype.ngOnInit = function () {
        this.newStandalone = _models_standalone__WEBPACK_IMPORTED_MODULE_1__["Standalone"].CreateDefault();
        this.getStandalones();
        this.anchors = [];
        this.getAnchors();
        this.searchCriteria = '';
        this.feature = '';
        this.feat = '';
        this.standalones = [];
        this.anchorsPlaced = false;
    };
    StandaloneComponent.prototype.setLocation = function (event) {
        console.log('in setlocation');
        if (this.feat.length === 0) {
            var latlng = this.mapService.addStandaloneMarker(event);
            this.feat = "{       \"type\": \"Feature\",       \"properties\": {},       \"geometry\": {         \"type\": \"Point\",         \"coordinates\": [           " + latlng.lng + ",           " + latlng.lat + "        ]       }     }, ";
            this.feature = this.feat;
        }
    };
    StandaloneComponent.prototype.removeMarkers = function () {
        this.mapService.removeMarkers();
        this.feat = '';
    };
    StandaloneComponent.prototype.showAnchors = function () {
        if (!this.anchorsPlaced) {
            this.mapService.readyAnchorGroup();
            if (this.anchors) {
                this.d3Service.placeAnchors(this.mapService.anchorGroup, this.anchors);
                this.anchorsPlaced = true;
            }
        }
    };
    StandaloneComponent.prototype.hideAnchors = function () {
        this.mapService.removeAnchors();
        this.anchorsPlaced = false;
    };
    StandaloneComponent.prototype.getAnchors = function () {
        var _this = this;
        this.anchorService.getAnchors(this.searchCriteria)
            .subscribe(function (data) {
            _this.anchors = [];
            data.forEach(function (element) {
                var newAnchor = new _models_anchor__WEBPACK_IMPORTED_MODULE_2__["Anchor"](element._id, element.name, element.notes, element.characters, element.location);
                _this.anchors.push(newAnchor);
            });
        });
    };
    StandaloneComponent.prototype.getStandalones = function () {
        var _this = this;
        this.standaloneService.getStandalones(this.searchCriteria)
            .subscribe(function (data) {
            _this.standalones = [];
            data.forEach(function (element) {
                var newStandalone = new _models_standalone__WEBPACK_IMPORTED_MODULE_1__["Standalone"](element._id, element.name, element.text, element.characters, element.location);
                _this.standalones.push(newStandalone);
            });
        });
    };
    StandaloneComponent.prototype.insertNewStandalone = function () {
        var _this = this;
        this.newStandalone.location = this.feature;
        this.standaloneService
            .insertNewStandalone(this.newStandalone)
            .subscribe(function (data) {
            _this.newStandalone._id = data.id;
            _this.standalones.push(_this.newStandalone);
            _this.newStandalone = _models_standalone__WEBPACK_IMPORTED_MODULE_1__["Standalone"].CreateDefault();
            console.log("Added standalone.");
        });
        this.mapService.removeMarkers();
        this.feat = '';
    };
    StandaloneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-standalone',
            template: __webpack_require__(/*! ./standalone.component.html */ "./src/app/standalone/standalone.component.html"),
            styles: [__webpack_require__(/*! ./standalone.component.css */ "./src/app/standalone/standalone.component.css")]
        }),
        __metadata("design:paramtypes", [_services_anchor_service__WEBPACK_IMPORTED_MODULE_6__["AnchorService"], _services_standalone_service__WEBPACK_IMPORTED_MODULE_3__["StandaloneService"], _services_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"], _services_d3_service__WEBPACK_IMPORTED_MODULE_5__["D3Service"]])
    ], StandaloneComponent);
    return StandaloneComponent;
}());



/***/ }),

/***/ "./src/app/vignette-display/vignettes-display.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/vignette-display/vignettes-display.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class= \"container-fluid full-width\">\n  <div class=\"row row-no-gutter\">\n\n    <app-menu class = \"col-sm-1\">  </app-menu>\n<h1>Manage Order</h1>\n<!-- <section class=\"todo-list\" dnd-sortable-container [sortableData]=\"todos\"> -->\n<div class='wrapper'>\n  <div class='container' [dragula]=\"bag-one\" [dragulaModel]='vignettes'>\n  <div class=\"col-sm-10 vignette-display\" *ngFor=\"let vignette of vignettes |  orderBy: 'order', let i = index;\" (click)=\"setEditVignette(vignette)\" [attr.data-id] = \"vignette._id\" [attr.data-index] = \"i\" [attr.data-name]= \"vignette.name\" [attr.data-characters] = \"vignette.characters\" [attr.data-location] = \"vignette.location\">\n    <div class=\"manage-title\" >\n      {{vignette.name}}\n    </div>\n\n    <div class=\"\">\n      <button class=\"btn btn-delete\" (click)=\"deleteVignette(vignette)\">Delete</button>\n    </div>\n  </div>\n</div>\n\n\n<!-- </section> -->\n\n\n\n\n  <!-- <vignettes-edit [vignette]=\"editVignette\" ></vignettes-edit> -->\n  <!-- <div class=\"form-group col-sm-2\">\n      <label for=\"editVignette\">Edit Vignette:</label>\n      <input class=\"form-control\" type=\"text\" placeholder=\"Name\" [(ngModel)]=\"this.editVignette.name\" [ngModelOptions]=\"{standalone: true}\"/>\n      <textarea placeholder=\"Text\" [(ngModel)]=\"this.editVignette.text\"></textarea>\n      <input class=\"form-control\" type=\"text\" placeholder=\"Characters\" [(ngModel)]=\"this.editVignette.characters\" [ngModelOptions]=\"{standalone: true}\"/>\n      <input class=\"form-control\" type=\"text\" placeholder=\"Location\" [(ngModel)]=\"this.editVignette.location\" [ngModelOptions]=\"{standalone: true}\"/>\n      <input class=\"form-control\" type=\"text\" placeholder=\"Order\" [(ngModel)]=\"this.editVignette.order\" [ngModelOptions]=\"{standalone: true}\"/>\n\n      <button class=\"btn btn-default\" (click)=\"updateVignette()\"> Edit Vignette </button>\n  </div> -->\n\n"

/***/ }),

/***/ "./src/app/vignette-display/vignettes-display.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/vignette-display/vignettes-display.component.ts ***!
  \*****************************************************************/
/*! exports provided: VignetteDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VignetteDisplayComponent", function() { return VignetteDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_vignette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/vignette */ "./src/app/models/vignette.ts");
/* harmony import */ var _services_vignettes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/vignettes.service */ "./src/app/services/vignettes.service.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/index.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VignetteDisplayComponent = /** @class */ (function () {
    function VignetteDisplayComponent(vignetteService, dragulaService) {
        var _this = this;
        this.vignetteService = vignetteService;
        this.dragulaService = dragulaService;
        this.vignetteList = [];
        this.updatedVignette = [];
        var currentVignette = this.vignetteList;
        // dragulaService.setOptions();
        dragulaService.drag.subscribe(function (value) {
            var currentVignette = _this.vignetteList; //onchage event ---> pushing data through
        });
        dragulaService.drop.subscribe(function (value) {
            var currentVignette = _this.vignetteList; // --> pushing the data through
            var bagName = value[0], e = value[1], el = value[2];
            console.log(value);
            _this.onDrop(value.slice(1)); //  --> passing to onDrop
        });
    }
    VignetteDisplayComponent.prototype.onDrop = function (args) {
        var _this = this;
        var el = args[0], target = args[1], source = args[2];
        var rowData = Array.from(target.children);
        this.updatedVignette = rowData.map(function (row, index) {
            return {
                id: row.dataset.id,
                name: row.dataset.name,
                text: row.dataset.text,
                characters: row.dataset.characters,
                location: row.dataset.location,
                index: index
            };
        });
        return new Promise(function (resolve, reject) {
            _this.handleSaveRequest();
        });
    };
    VignetteDisplayComponent.prototype.handleSaveRequest = function () {
        for (var _i = 0, _a = this.updatedVignette; _i < _a.length; _i++) {
            var vignette = _a[_i];
            var newVignette = new _models_vignette__WEBPACK_IMPORTED_MODULE_1__["Vignette"](vignette.id, vignette.name, vignette.text, vignette.characters, vignette.location, (vignette.index + 1));
            this.updateVignetteOrder(newVignette);
        }
    };
    VignetteDisplayComponent.prototype.ngOnInit = function () {
        this.newVignette = _models_vignette__WEBPACK_IMPORTED_MODULE_1__["Vignette"].CreateDefault();
        this.editVignette = _models_vignette__WEBPACK_IMPORTED_MODULE_1__["Vignette"].CreateDefault();
        this.searchCriteria = '';
        this.getVignettes();
    };
    VignetteDisplayComponent.prototype.deleteVignette = function (vignette) {
        var _this = this;
        this.vignetteService
            .deleteVignette(vignette)
            .subscribe(function (data) {
            _this.vignettes.splice(_this.vignettes.indexOf(vignette), 1);
            console.log("Vignette deleted!");
        });
    };
    VignetteDisplayComponent.prototype.setEditVignette = function (vignette) {
        console.log(this.vignettes);
        this.editVignette = new _models_vignette__WEBPACK_IMPORTED_MODULE_1__["Vignette"](vignette._id, vignette.name, vignette.text, vignette.characters, vignette.location, vignette.order);
    };
    VignetteDisplayComponent.prototype.updateVignetteOrder = function (vignette) {
        var _this = this;
        this.vignetteService
            .updateVignette(vignette)
            .subscribe(function (data) {
            var index = _this.vignettes.findIndex(function (item) { return item._id === vignette._id; });
            _this.vignettes[index] = vignette;
            console.log("updated Vignette.");
        });
    };
    VignetteDisplayComponent.prototype.updateVignette = function (vignette) {
        var _this = this;
        console.log(this.editVignette);
        this.vignetteService
            .updateVignette(this.editVignette)
            .subscribe(function (data) {
            var index = _this.vignettes.findIndex(function (item) { return item._id === _this.editVignette._id; });
            _this.vignettes[index] = _this.editVignette;
            _this.editVignette = _models_vignette__WEBPACK_IMPORTED_MODULE_1__["Vignette"].CreateDefault();
            console.log("updated Vignette.");
        });
    };
    // setEditVignette(vignette: Vignette){
    //   console.log('in set edit')
    //   this.editVignette = new Vignette(vignette._id, vignette.name, vignette.text, vignette.characters, vignette.location);
    // }
    VignetteDisplayComponent.prototype.getVignettes = function () {
        var _this = this;
        this.vignetteService.getVignettes(this.searchCriteria)
            .subscribe(function (data) {
            _this.vignettes = [];
            data.forEach(function (element) {
                var newVignette = new _models_vignette__WEBPACK_IMPORTED_MODULE_1__["Vignette"](element._id, element.name, element.text, element.characters, element.location, element.order);
                _this.vignettes.push(newVignette);
            });
        });
    };
    VignetteDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vignettes-display',
            template: __webpack_require__(/*! ./vignettes-display.component.html */ "./src/app/vignette-display/vignettes-display.component.html"),
        }),
        __metadata("design:paramtypes", [_services_vignettes_service__WEBPACK_IMPORTED_MODULE_2__["VignetteService"], ng2_dragula__WEBPACK_IMPORTED_MODULE_3__["DragulaService"]])
    ], VignetteDisplayComponent);
    return VignetteDisplayComponent;
}());



/***/ }),

/***/ "./src/app/vignettes/vignettes.component.html":
/*!****************************************************!*\
  !*** ./src/app/vignettes/vignettes.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class= \"container-fluid full-width\">\n  <div class=\"row row-no-gutter\">\n\n\n    <div class=\"col-sm-1\">\n      <app-menu>  </app-menu>\n    </div>\n    <div class = \"forms row col-sm-4\">\n      <h1>Add A Vignette</h1>\n      <a class=\"add-toggle col-sm-6\" routerLink=\"/standalone\">Standalone</a>\n      <a class=\"add-toggle acting col-sm-6\">Narrative</a>\n\n\n      <!-- <label for=\"insertvignette\">New Vignette:</label> -->\n      <input class=\"form-control title\" type=\"text\" placeholder=\"Title\" [(ngModel)]=\"this.newVignette.name\" [ngModelOptions]=\"{standalone: true}\"/>\n      <textarea appHighlight [(textArray)] = \"this.textArray\" id= \"text-input\" placeholder=\"Text\" (input)=\"textArray = this.newVignette.text\"></textarea>\n\n\n      <!-- <input class=\"form-control\" type=\"text\" placeholder=\"Location\" (input)=\"this.features = this.newVignette.location\" /> -->\n\n\n\n      <input class=\"character-input form-control\" type=\"text\" placeholder=\"Characters\" [(ngModel)]=\"this.newVignette.characters[0]\" [ngModelOptions]=\"{standalone: true}\"/>\n      <input class=\"character-input form-control\" type=\"text\" placeholder=\"Characters\" [(ngModel)]=\"this.newVignette.characters[1]\" [ngModelOptions]=\"{standalone: true}\"/>\n      <input class=\"character-input form-control\" type=\"text\" placeholder=\"Characters\" [(ngModel)]=\"this.newVignette.characters[2]\" [ngModelOptions]=\"{standalone: true}\"/>\n      <button class=\"btn btn-default btn-add\" (click)=\"insertNewVignette()\"> ADD </button>\n    </div>\n\n\n\n\n    <div class=\"part-container col-sm-5\">\n\n      <div>\n        <div class = \"row parts \" *ngFor=\"let part of textArray; let index = index\" (click)=\"setEditPart(part, index)\">\n          <div class=\"col-sm-2 part-index\">\n            {{index + 1}}\n          </div>\n          <div class=\"col-sm-9\">\n            {{part}}\n          </div>\n          <div class=\"col-sm-1\">\n            <button class=\"btn btn-delete\" (click)=\"deletePart(index)\">x</button>\n            <div *ngIf = \"part[0] != '@'; else detatch \">\n              <button type=\"button\" name=\"button\" class = 'btn-delete' (click)= \"attatchPart(part, index)\">📍</button>\n            </div>\n            <ng-template #detatch>\n              <button type=\"button\" name=\"button\" class = 'btn-delete' (click)= \"detatchPart(part, index)\">✖️</button>\n            </ng-template>\n          </div>\n        </div>\n\n\n        <app-part-edit class = \"\" *ngIf = \"editPart.length > 0\" [(editPart)]= \"this.editPart\" [(index)] = \"this.index\" [(textArray)] = \"this.textArray\" ></app-part-edit>\n\n      </div>\n\n\n    </div>\n\n\n\n\n\n  </div>\n  <div class=\"anchor-buttons\">\n    <button class=\"btn btn-anchor\" (click)=\"removeMarkers()\"> Remove my Markers </button>\n    <button class=\"btn btn-anchor\" (click)=\"showAnchors()\"> Show Anchors </button>\n    <button class=\"btn btn-anchor\" (click)=\"hideAnchors()\"> Hide Anchors </button>\n    <button class=\"btn btn-anchor\" routerLink=\"/anchor\"> Add Anchors </button>\n  </div>\n  <app-map id = \"mapid\"  (click) = \"setLocation($event)\" id = \"mapid\"></app-map>\n</div>\n\n\n<!-- <leaflet></leaflet> -->\n"

/***/ }),

/***/ "./src/app/vignettes/vignettes.component.ts":
/*!**************************************************!*\
  !*** ./src/app/vignettes/vignettes.component.ts ***!
  \**************************************************/
/*! exports provided: VignetteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VignetteComponent", function() { return VignetteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_vignette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/vignette */ "./src/app/models/vignette.ts");
/* harmony import */ var _models_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/anchor */ "./src/app/models/anchor.ts");
/* harmony import */ var _services_vignettes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/vignettes.service */ "./src/app/services/vignettes.service.ts");
/* harmony import */ var _services_anchor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/anchor.service */ "./src/app/services/anchor.service.ts");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/map.service */ "./src/app/services/map.service.ts");
/* harmony import */ var _services_d3_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/d3.service */ "./src/app/services/d3.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VignetteComponent = /** @class */ (function () {
    function VignetteComponent(vignetteService, mapService, d3Service, anchorService) {
        this.vignetteService = vignetteService;
        this.mapService = mapService;
        this.d3Service = d3Service;
        this.anchorService = anchorService;
    }
    VignetteComponent.prototype.ngOnInit = function () {
        this.newVignette = _models_vignette__WEBPACK_IMPORTED_MODULE_1__["Vignette"].CreateDefault();
        this.searchCriteria = '';
        this.getVignettes(); // I shouldn't have to do this right?
        this.getAnchors();
        this.textArray = [];
        this.editPart = '';
        this.index = 0;
        this.features = '[';
        this.vignettes = [];
        this.anchors = [];
        this.anchorsPlaced = false;
    };
    VignetteComponent.prototype.ngAfterViewInit = function () {
        this.mapService.readyMarkerGroup();
    };
    VignetteComponent.prototype.showAnchors = function () {
        if (!this.anchorsPlaced) {
            this.mapService.readyAnchorGroup();
            if (this.anchors) {
                this.d3Service.placeAnchors(this.mapService.anchorGroup, this.anchors);
                this.anchorsPlaced = true;
            }
        }
    };
    VignetteComponent.prototype.hideAnchors = function () {
        this.mapService.removeAnchors();
        this.anchorsPlaced = false;
    };
    VignetteComponent.prototype.setLocation = function (event) {
        if (this.mapService.getLatLng(event)) {
            var latlng = this.mapService.getLatLng(event);
            var feature = "{\n  \"type\": \"Feature\",\n  \"properties\": {},\n  \"geometry\": {\n    \"type\": \"Point\",\n    \"coordinates\": [\n      " + latlng.lng + ",\n      " + latlng.lat + "\n    ]\n  }\n},";
            this.features += feature;
        }
    };
    VignetteComponent.prototype.removeMarkers = function () {
        this.mapService.removeMarkers();
        // this.features = '['
        this.mapService.readyMarkerGroup();
    };
    VignetteComponent.prototype.deletePart = function (i) {
        this.textArray.splice(i, 1);
    };
    VignetteComponent.prototype.attatchPart = function (part, i) {
        this.textArray[i] = "@" + part;
    };
    VignetteComponent.prototype.detatchPart = function (part, i) {
        this.textArray[i] = part.substring(1, part.length);
    };
    VignetteComponent.prototype.setEditPart = function (part, index) {
        this.editPart = part;
        this.index = index;
    };
    VignetteComponent.prototype.insertNewVignette = function () {
        var _this = this;
        var points = "{\"type\": \"FeatureCollection\", \"features\":" + this.features.substring(0, this.features.length - 1) + "] }";
        this.newVignette.location = points;
        this.newVignette.order = this.vignettes.length + 1;
        this.vignetteService
            .insertNewVignette(this.newVignette)
            .subscribe(function (data) {
            _this.newVignette._id = data.id;
            _this.vignettes.push(_this.newVignette);
            _this.newVignette = _models_vignette__WEBPACK_IMPORTED_MODULE_1__["Vignette"].CreateDefault();
        });
        this.features = '';
        this.textArray = [];
        this.mapService.removeMarkers();
        this.mapService.readyMarkerGroup();
    };
    VignetteComponent.prototype.getVignettes = function () {
        var _this = this;
        this.vignetteService.getVignettes(this.searchCriteria)
            .subscribe(function (data) {
            _this.vignettes = [];
            data.forEach(function (element) {
                var newVignette = new _models_vignette__WEBPACK_IMPORTED_MODULE_1__["Vignette"](element._id, element.name, element.text, element.characters, element.location, element.order);
                _this.vignettes.push(newVignette);
            });
        });
    };
    VignetteComponent.prototype.getAnchors = function () {
        var _this = this;
        this.anchorService.getAnchors(this.searchCriteria)
            .subscribe(function (data) {
            _this.anchors = [];
            data.forEach(function (element) {
                var newAnchor = new _models_anchor__WEBPACK_IMPORTED_MODULE_2__["Anchor"](element._id, element.name, element.notes, element.characters, element.location);
                _this.anchors.push(newAnchor);
            });
        });
    };
    VignetteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vignettes',
            template: __webpack_require__(/*! ./vignettes.component.html */ "./src/app/vignettes/vignettes.component.html"),
        }),
        __metadata("design:paramtypes", [_services_vignettes_service__WEBPACK_IMPORTED_MODULE_3__["VignetteService"],
            _services_map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"],
            _services_d3_service__WEBPACK_IMPORTED_MODULE_6__["D3Service"],
            _services_anchor_service__WEBPACK_IMPORTED_MODULE_4__["AnchorService"]])
    ], VignetteComponent);
    return VignetteComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dlenertz/Desktop/deploycapstone/deployfrontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map