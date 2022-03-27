(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/buscar-filme/buscar-filme.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/buscar-filme/buscar-filme.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\r\n<input [(ngModel)]=\"keyword\"  (keydown.enter)=\"getByKeyword(keyword); announce();\"matInput  type=\"text\" placeholder=\"Digite um filme, palavra chave\" aria-label=\"Caixa de texto, digite um filme ou palavra chave\"/>\r\n</mat-form-field>\r\n<span>{{ ' ' }}</span>\r\n<button mat-flat-button color=\"primary\" (click)=\"getByKeyword(keyword); announce();\"  aria-label=\"Pesquisar\">\r\n    <i  class=\"material-icons\">search</i>\r\n</button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/detalhes-filme/detalhes-filme.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/detalhes-filme/detalhes-filme.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"movieDetail\" color=\"accent\"  [ngStyle]=\"{ \r\n        'fontSize' : fontSize + 2 + 'px' \r\n    }\"\r\n>\r\n    <h1 mat-dialog-title>{{movieDetail.title}}</h1>\r\n    <div mat-dialog-content class=\"black\">\r\n        <div mat-grid-list>\r\n            <img src=\"https://image.tmdb.org/t/p/{{ imageSize }}/{{movieDetail.poster_path}}\" alt=\"Pôster do filme {{movieDetail.title}}\"/>\r\n            <div>\r\n                <span><b>Media:</b></span> {{ movieDetail.vote_average }}\r\n                {{ '  ' }}\r\n                <span><b>Popularidade:</b></span> {{ movieDetail.popularity }}\r\n            </div>\r\n            <h3>Sinopse</h3>\r\n            <p>{{ movieDetail.overview }}</p>\r\n            <h3>Ano de lançamento:</h3>{{movieDetail.release_date}}\r\n            <h3>Tags:</h3>\r\n            <div *ngFor = \"let g of movieDetail.genres\">\r\n                <span>{{g.name}}</span>\r\n            </div>  \r\n            \r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"toolbar-background\" [class.change-font]=\"changeFont\" role=\"heading\"\r\n  [ngStyle]=\"{ \r\n    'fontSize' : selectedSize  + 'px'\r\n  }\"\r\n>\r\n  <span>Listagem de Filmes</span>\r\n  <span class=\"space\"></span>\r\n  <div fxShow=\"true\" fxHide.xs>\r\n    <!-- Os botões desaparecerão em tamanho menor de tela -->\r\n    <button mat-raised-button (click)=\"notifyTheme();\" role=\"button\" aria-label=\"Mudar alto contraste\">\r\n      <i class=\"material-icons\">brightness_4</i>\r\n    </button>\r\n    <button mat-raised-button (click)=\"increaseFont(); notifyFont();\" aria-label=\"Aumentar fonte\">\r\n      <i class=\"material-icons material-icons-i\">A</i>\r\n      <sup><i class=\"material-icons material-icons-i\" style=\"font-size: 16px\">add</i></sup>\r\n\r\n    </button>\r\n    <button mat-raised-button (click)=\"decreaseFont(); notifyFont();\" aria-label=\"Reduzir fonte\">\r\n      <i class=\"material-icons material-icons-i\">A</i>\r\n      <sup><i class=\"material-icons material-icons-i\" style=\"font-size: 20px;\"><sup>minimize</sup></i></sup>\r\n    </button>\r\n    <button mat-raised-button (click)=\"redefineFont(); notifyFont();\" aria-label=\"Redefinir fonte\">\r\n      <i class=\"material-icons material-icons-i\">A</i>\r\n      <sup><i class=\"material-icons material-icons-i\" style=\"font-size: 16px\">settings_backup_restore</i></sup>\r\n    </button>\r\n\r\n  </div>\r\n  <!--Botão aparecerá ao atingir tamanho menor de tela -->\r\n  <button mat-mini-fab [matMenuTriggerFor]=\"menu\" class=\"fixed\" fxShow=\"true\" fxHide.gt-xs role=\"button\"\r\n    aria-label=\"Configurações Menu\" tabindex=\"0\">\r\n    <i class=\"material-icons\" aria-labelledby=\"Configurações Menu\">settings</i>\r\n  </button>\r\n  <!-- Menu responsivo -->\r\n  <mat-menu #menu=\"matMenu\" overlapTrigger=\"true\" color=\"primary\">\r\n    <button mat-menu-item (click)=\"notifyTheme();\" role=\"button\" aria-label=\"Mudar alto contraste botão\">\r\n      <i class=\"material-icons\">brightness_4</i>\r\n      Mudar constraste\r\n    </button>\r\n    <button mat-menu-item (click)=\"increaseFont(); notifyFont();\" aria-label=\"Aumentar fonte botão\">\r\n      <i class=\"material-icons material-icons-i\">A</i>\r\n      <sup><i class=\"material-icons material-icons-i\" style=\"font-size: 16px\">add</i></sup>\r\n      Aumentar Fonte\r\n    </button>\r\n    <button mat-menu-item (click)=\"decreaseFont(); notifyFont();\" aria-label=\"Reduzir fonte botão\">\r\n      <i class=\"material-icons material-icons-i\">A</i>\r\n      <sup><i class=\"material-icons material-icons-i\" style=\"font-size: 20px;\"><sup>minimize</sup></i></sup>\r\n      Reduzir Fonte\r\n    </button>\r\n    <button mat-menu-item (click)=\"redefineFont(); notifyFont();\" aria-label=\"Redefinir fonte botão\">\r\n      <i class=\"material-icons material-icons-i\">A</i>\r\n      <sup><i class=\"material-icons material-icons-i\" style=\"font-size: 16px;\">settings_backup_restore</i></sup>\r\n      Redefinir Fonte\r\n    </button>\r\n  </mat-menu>\r\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/intro/intro.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/intro/intro.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <div id=\"main\" style=\"text-align:center;height: 100vh\">\r\n        <img src=\"../../assets/movie-icon.png\" width=\"250\" alt=\"Icone de filme\" />\r\n        <h1>App Filmes</h1>\r\n        <app-spinner>   \r\n        </app-spinner>\r\n    </div>\r\n    \r\n   \r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/listagem-filmes/listagem-filmes.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/listagem-filmes/listagem-filmes.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Aqui vai entrar o header -->\r\n<div [class.high-contrast-theme]=\"highContrastTheme\" color=\"accent\">\r\n    <!-- CABEÇALHO -->\r\n    <app-header \r\n        (sendChangeTheme)=\"changeTheme();\"\r\n        (sendChangeFont)=\"changeFontSize($event);\"\r\n        [ngStyle]=\"{ \r\n            'fontSize' : fontSize + 'px'\r\n        }\"\r\n    >\r\n    </app-header>\r\n    <!-- COMPONENTES DE INTERAÇÃO -->\r\n    <div mat-content fxLayout.xs=\"column\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly\"  [ngStyle]=\"{ \r\n        'fontSize' : fontSize - 4 + 'px'\r\n    }\">\r\n        <div fxLayoutAlign=\"center\"><buscar-filme (changeFind)=\"changeFind($event)\"></buscar-filme></div>\r\n        <div fxLayoutAlign=\"center\"><seletor-genero (changeGener)=\"changeGener($event);\"></seletor-genero></div>\r\n    </div>\r\n\r\n    <!-- LISTAGEM DOS FILMES -->\r\n    <div *ngIf=\"movies; else loading\">\r\n        <mat-grid-list [cols]=\"larguraAtual\" rowHeight=\"300px\" color=\"warn\" fxLayoutalign=\"center\">\r\n            <mat-grid-tile *ngFor= \"let m of movies | paginate: { itemsPerPage: 20, currentPage : result.page, totalItems: 1000 }\" >\r\n                <mat-card class=\"larguraFixa\" (click)=\"openDialog(m.id);\">\r\n                    <img mat-card-lg-image src=\"{{base_image_url+image_size+m.poster_path}}\" alt=\"Pôster do filme {{m.original_title}}\"/>\r\n                    <mat-card-title  \r\n                    [ngStyle]=\"{ \r\n                        'fontSize' : fontSize + 'px'\r\n                    }\"\r\n                    class=\"mat-h5\" [class.change-font]=\"changeFont\">{{m.original_title}}</mat-card-title>\r\n                    <mat-card-subtitle>{{m.release_date}}</mat-card-subtitle>\r\n                </mat-card>\r\n            </mat-grid-tile>\r\n        </mat-grid-list>\r\n        <!-- PAGINAÇÃO -->\r\n        <div *ngIf=\"result.total_pages\" fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n            <pagination-controls class=\"seletor\" [class.change-font]=\"changeFont\"\r\n                [ngStyle]=\"{ \r\n                    'fontSize' : fontSize + 'px'\r\n                }\"\r\n                (pageChange)=\"page = $event; nextPage();\"\r\n                responsive=\"true\"\r\n                previousLabel=\"{{ paginationPrevious }}\"\r\n                nextLabel=\"{{ paginationNext }}\"\r\n                screenReaderPaginationLabel=\"Paginação\"\r\n                screenReaderPageLabel=\"página\"\r\n                screenReaderCurrentLabel=\"Você esta na página {{ currentPage }}\"\r\n            >\r\n            </pagination-controls>\r\n        </div>\r\n    </div>\r\n    <!--Spinner para quando estiver carregando dados-->\r\n    <ng-template #loading>\r\n        <app-spinner></app-spinner>\r\n    </ng-template>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/seletor-genero/seletor-genero.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/seletor-genero/seletor-genero.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\r\n    <mat-label>Seleciona a categoria</mat-label>\r\n    <mat-select [(value)]=\"choosed\" (valueChange)=\"changeChoosed($event)\" panelClass=\"teste\"   aria-placeholder=\"Procurar filme por gênero\">\r\n        <div *ngFor=\"let g of genres\">\r\n          <mat-option  value=\"{{ g.id }}\">\r\n              {{g.name}}\r\n          </mat-option>\r\n        </div>\r\n    </mat-select>\r\n  </mat-form-field>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/spinner/spinner.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/spinner/spinner.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center\" style=\"text-align:center\" class=\"lds-css ng-scope\">\r\n    <div  class=\"lds-spinner\" style=\"width:100%;height:100%\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>\r\n        <style type=\"text/css\">@keyframes lds-spinner {\r\n        0% {\r\n            opacity: 1;\r\n        }\r\n        100% {\r\n            opacity: 0;\r\n        }\r\n        }\r\n        @-webkit-keyframes lds-spinner {\r\n        0% {\r\n            opacity: 1;\r\n        }\r\n        100% {\r\n            opacity: 0;\r\n        }\r\n        }\r\n        .lds-spinner {\r\n        position: relative;\r\n        }\r\n        .lds-spinner div {\r\n        left: 94px;\r\n        top: 48px;\r\n        position: absolute;\r\n        -webkit-animation: lds-spinner linear 1s infinite;\r\n        animation: lds-spinner linear 1s infinite;\r\n        background: #3be8b0;\r\n        width: 12px;\r\n        height: 24px;\r\n        border-radius: 40%;\r\n        -webkit-transform-origin: 6px 52px;\r\n        transform-origin: 6px 52px;\r\n        }\r\n        .lds-spinner div:nth-child(1) {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n        -webkit-animation-delay: -0.916666666666667s;\r\n        animation-delay: -0.916666666666667s;\r\n        }\r\n        .lds-spinner div:nth-child(2) {\r\n        -webkit-transform: rotate(30deg);\r\n        transform: rotate(30deg);\r\n        -webkit-animation-delay: -0.833333333333333s;\r\n        animation-delay: -0.833333333333333s;\r\n        }\r\n        .lds-spinner div:nth-child(3) {\r\n        -webkit-transform: rotate(60deg);\r\n        transform: rotate(60deg);\r\n        -webkit-animation-delay: -0.75s;\r\n        animation-delay: -0.75s;\r\n        }\r\n        .lds-spinner div:nth-child(4) {\r\n        -webkit-transform: rotate(90deg);\r\n        transform: rotate(90deg);\r\n        -webkit-animation-delay: -0.666666666666667s;\r\n        animation-delay: -0.666666666666667s;\r\n        }\r\n        .lds-spinner div:nth-child(5) {\r\n        -webkit-transform: rotate(120deg);\r\n        transform: rotate(120deg);\r\n        -webkit-animation-delay: -0.583333333333333s;\r\n        animation-delay: -0.583333333333333s;\r\n        }\r\n        .lds-spinner div:nth-child(6) {\r\n        -webkit-transform: rotate(150deg);\r\n        transform: rotate(150deg);\r\n        -webkit-animation-delay: -0.5s;\r\n        animation-delay: -0.5s;\r\n        }\r\n        .lds-spinner div:nth-child(7) {\r\n        -webkit-transform: rotate(180deg);\r\n        transform: rotate(180deg);\r\n        -webkit-animation-delay: -0.416666666666667s;\r\n        animation-delay: -0.416666666666667s;\r\n        }\r\n        .lds-spinner div:nth-child(8) {\r\n        -webkit-transform: rotate(210deg);\r\n        transform: rotate(210deg);\r\n        -webkit-animation-delay: -0.333333333333333s;\r\n        animation-delay: -0.333333333333333s;\r\n        }\r\n        .lds-spinner div:nth-child(9) {\r\n        -webkit-transform: rotate(240deg);\r\n        transform: rotate(240deg);\r\n        -webkit-animation-delay: -0.25s;\r\n        animation-delay: -0.25s;\r\n        }\r\n        .lds-spinner div:nth-child(10) {\r\n        -webkit-transform: rotate(270deg);\r\n        transform: rotate(270deg);\r\n        -webkit-animation-delay: -0.166666666666667s;\r\n        animation-delay: -0.166666666666667s;\r\n        }\r\n        .lds-spinner div:nth-child(11) {\r\n        -webkit-transform: rotate(300deg);\r\n        transform: rotate(300deg);\r\n        -webkit-animation-delay: -0.083333333333333s;\r\n        animation-delay: -0.083333333333333s;\r\n        }\r\n        .lds-spinner div:nth-child(12) {\r\n        -webkit-transform: rotate(330deg);\r\n        transform: rotate(330deg);\r\n        -webkit-animation-delay: 0s;\r\n        animation-delay: 0s;\r\n        }\r\n        .lds-spinner {\r\n        width: 200px !important;\r\n        height: 200px !important;\r\n        -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\r\n        transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\r\n        }\r\n    </style>\r\n</div>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _listagem_filmes_listagem_filmes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listagem-filmes/listagem-filmes.component */ "./src/app/listagem-filmes/listagem-filmes.component.ts");





var routes = [
    { path: 'intro', component: _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"] },
    { path: 'home', component: _listagem_filmes_listagem_filmes_component__WEBPACK_IMPORTED_MODULE_4__["ListagemFilmesComponent"] },
    { path: ' ', redirectTo: 'intro', pathMatch: 'full' },
    { path: '**', redirectTo: 'intro' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _listagem_filmes_listagem_filmes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listagem-filmes/listagem-filmes.component */ "./src/app/listagem-filmes/listagem-filmes.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _detalhes_filme_detalhes_filme_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./detalhes-filme/detalhes-filme.component */ "./src/app/detalhes-filme/detalhes-filme.component.ts");
/* harmony import */ var _seletor_genero_seletor_genero_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./seletor-genero/seletor-genero.component */ "./src/app/seletor-genero/seletor-genero.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _buscar_filme_buscar_filme_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./buscar-filme/buscar-filme.component */ "./src/app/buscar-filme/buscar-filme.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"],
                _listagem_filmes_listagem_filmes_component__WEBPACK_IMPORTED_MODULE_7__["ListagemFilmesComponent"],
                _detalhes_filme_detalhes_filme_component__WEBPACK_IMPORTED_MODULE_10__["DetalhesFilmeComponent"],
                _seletor_genero_seletor_genero_component__WEBPACK_IMPORTED_MODULE_11__["SeletorGeneroComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
                _buscar_filme_buscar_filme_component__WEBPACK_IMPORTED_MODULE_16__["BuscarFilmeComponent"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_18__["SpinnerComponent"]
            ],
            entryComponents: [
                _detalhes_filme_detalhes_filme_component__WEBPACK_IMPORTED_MODULE_10__["DetalhesFilmeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/buscar-filme/buscar-filme.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/buscar-filme/buscar-filme.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".material-icons {\n  color: white;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzY2FyLWZpbG1lL0M6XFxVc2Vyc1xcaWFnb2dcXE9uZURyaXZlXFxEb2N1bWVudG9zXFxXb3Jrc3BhY2VcXFByb2pldG9zXFxhcHAtZmlsbWVzL3NyY1xcYXBwXFxidXNjYXItZmlsbWVcXGJ1c2Nhci1maWxtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYnVzY2FyLWZpbG1lL2J1c2Nhci1maWxtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYnVzY2FyLWZpbG1lL2J1c2Nhci1maWxtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59IiwiLm1hdGVyaWFsLWljb25zIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNTAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/buscar-filme/buscar-filme.component.ts":
/*!********************************************************!*\
  !*** ./src/app/buscar-filme/buscar-filme.component.ts ***!
  \********************************************************/
/*! exports provided: BuscarFilmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarFilmeComponent", function() { return BuscarFilmeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_filme_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/filme/http.service */ "./src/app/services/filme/http.service.ts");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");




var BuscarFilmeComponent = /** @class */ (function () {
    function BuscarFilmeComponent(http, liveAnnouncer) {
        this.http = http;
        this.liveAnnouncer = liveAnnouncer;
        this.result = {
            results: null,
            total_pages: null,
            total_results: null,
            page: null
        };
        this.changeFind = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BuscarFilmeComponent.prototype.ngOnInit = function () {
    };
    // Notificação para o componente pai
    BuscarFilmeComponent.prototype.notifyChange = function () {
        this.changeFind.emit(this.result.results);
    };
    // Buscar filme por palavra chave. Fazendo requisição e obtendo resultados
    BuscarFilmeComponent.prototype.getByKeyword = function (query) {
        var _this = this;
        this.http.getByKeyword(query)
            .subscribe(function (dados) {
            _this.result.results = dados.results;
            _this.result.total_pages = dados.total_pages;
            _this.result.total_results = dados.total_results;
            _this.result.page = dados.page;
            _this.notifyChange();
        }),
            function (erro) { };
    };
    // Feedback para leitor de tela
    BuscarFilmeComponent.prototype.announce = function () {
        this.liveAnnouncer.announce("Bot\u00E3o pressionado. Gerando nova lista");
    };
    BuscarFilmeComponent.ctorParameters = function () { return [
        { type: _services_filme_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["LiveAnnouncer"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], BuscarFilmeComponent.prototype, "changeFind", void 0);
    BuscarFilmeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'buscar-filme',
            template: __webpack_require__(/*! raw-loader!./buscar-filme.component.html */ "./node_modules/raw-loader/index.js!./src/app/buscar-filme/buscar-filme.component.html"),
            styles: [__webpack_require__(/*! ./buscar-filme.component.scss */ "./src/app/buscar-filme/buscar-filme.component.scss")]
        })
    ], BuscarFilmeComponent);
    return BuscarFilmeComponent;
}());



/***/ }),

/***/ "./src/app/detalhes-filme/detalhes-filme.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/detalhes-filme/detalhes-filme.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  margin-bottom: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWxoZXMtZmlsbWUvQzpcXFVzZXJzXFxpYWdvZ1xcT25lRHJpdmVcXERvY3VtZW50b3NcXFdvcmtzcGFjZVxcUHJvamV0b3NcXGFwcC1maWxtZXMvc3JjXFxhcHBcXGRldGFsaGVzLWZpbG1lXFxkZXRhbGhlcy1maWxtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGV0YWxoZXMtZmlsbWUvZGV0YWxoZXMtZmlsbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGV0YWxoZXMtZmlsbWUvZGV0YWxoZXMtZmlsbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoM3tcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuIiwiaDMge1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/detalhes-filme/detalhes-filme.component.ts":
/*!************************************************************!*\
  !*** ./src/app/detalhes-filme/detalhes-filme.component.ts ***!
  \************************************************************/
/*! exports provided: DetalhesFilmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhesFilmeComponent", function() { return DetalhesFilmeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_filme_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/filme/http.service */ "./src/app/services/filme/http.service.ts");




var DetalhesFilmeComponent = /** @class */ (function () {
    function DetalhesFilmeComponent(movieService, dialogRef, data // cria uma variavel que traz os dados que vão compor o dialog; Componente que o chama, informa os dados. (Exemplo: id do filme, tamanho da imagem para renderizar)
    ) {
        this.movieService = movieService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.fontSize = 16;
    }
    DetalhesFilmeComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DetalhesFilmeComponent.prototype.ngOnInit = function () {
        this.getDetail(this.data.id);
        this.imageSize = this.data.size;
        this.fontSize = this.data.fontSize;
    };
    DetalhesFilmeComponent.prototype.ngOnDestroy = function () {
        this.movieSub.unsubscribe();
    };
    DetalhesFilmeComponent.prototype.getDetail = function (movieId) {
        var _this = this;
        this.movieSub = this.movieService.getById(movieId).subscribe(function (movie) { _this.movieDetail = movie; }, function (erro) { });
    };
    DetalhesFilmeComponent.ctorParameters = function () { return [
        { type: _services_filme_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DetalhesFilmeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalhes-filme',
            template: __webpack_require__(/*! raw-loader!./detalhes-filme.component.html */ "./node_modules/raw-loader/index.js!./src/app/detalhes-filme/detalhes-filme.component.html"),
            styles: [__webpack_require__(/*! ./detalhes-filme.component.scss */ "./src/app/detalhes-filme/detalhes-filme.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], DetalhesFilmeComponent);
    return DetalhesFilmeComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".space {\n  flex: 1 1 auto;\n}\n\nbutton {\n  margin-right: 3px;\n}\n\nmat-toolbar {\n  z-index: 2;\n  margin-top: 0px;\n}\n\n.fixed {\n  position: fixed;\n  left: 80%;\n  z-index: 2;\n}\n\n.material-icons-i {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcaWFnb2dcXE9uZURyaXZlXFxEb2N1bWVudG9zXFxXb3Jrc3BhY2VcXFByb2pldG9zXFxhcHAtZmlsbWVzL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FESUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDREo7O0FESUE7RUFDSSxtQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG5cclxuXHJcblxyXG5tYXQtdG9vbGJhcntcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5maXhlZCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiA4MCU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4ubWF0ZXJpYWwtaWNvbnMtaSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59IiwiLnNwYWNlIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIHotaW5kZXg6IDI7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiA4MCU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5tYXRlcmlhbC1pY29ucy1pIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.changeFont = false;
        this.fontSizes = [16, 18, 22, 25, 29];
        this.n = 0;
        this.selectedSize = this.fontSizes[this.n];
        this.sendChangeTheme = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sendChangeFont = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.notifyTheme = function () {
        this.sendChangeTheme.emit();
    };
    HeaderComponent.prototype.notifyFont = function () {
        this.sendChangeFont.emit({ fontSize: this.selectedSize });
    };
    HeaderComponent.prototype.changeFontSize = function (value) {
        this.changeFont = value;
    };
    HeaderComponent.prototype.increaseFont = function () {
        if (this.n + 1 > 4) {
            return;
        }
        this.n++;
        this.selectedSize = this.fontSizes[this.n];
    };
    HeaderComponent.prototype.decreaseFont = function () {
        if (this.n - 1 < 0) {
            return;
        }
        this.n--;
        this.selectedSize = this.fontSizes[this.n];
    };
    HeaderComponent.prototype.redefineFont = function () {
        this.n = 0;
        this.selectedSize = this.fontSizes[this.n];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], HeaderComponent.prototype, "sendChangeTheme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], HeaderComponent.prototype, "sendChangeFont", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/intro/intro.component.scss":
/*!********************************************!*\
  !*** ./src/app/intro/intro.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column nowrap;\n}\n\nh1 {\n  font-style: italic;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm8vQzpcXFVzZXJzXFxpYWdvZ1xcT25lRHJpdmVcXERvY3VtZW50b3NcXFdvcmtzcGFjZVxcUHJvamV0b3NcXGFwcC1maWxtZXMvc3JjXFxhcHBcXGludHJvXFxpbnRyby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FDQ0o7O0FER0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9pbnRyby9pbnRyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbn1cclxuXHJcblxyXG5oMSB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59IiwiI21haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xufVxuXG5oMSB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var IntroComponent = /** @class */ (function () {
    function IntroComponent(liveAnnouncer, router) {
        this.liveAnnouncer = liveAnnouncer;
        this.router = router;
        this.title = 'aplicativo de filmes';
        this.button = "consultar";
        this.time = 3000;
    }
    IntroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.liveAnnouncer.announce("Bem vindo ao Aplicativo de filmes!");
        setTimeout(function () { _this.nextPage(); }, this.time);
    };
    IntroComponent.prototype.nextPage = function () {
        this.router.navigate(['/home']);
    };
    IntroComponent.ctorParameters = function () { return [
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["LiveAnnouncer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! raw-loader!./intro.component.html */ "./node_modules/raw-loader/index.js!./src/app/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.scss */ "./src/app/intro/intro.component.scss")]
        })
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/listagem-filmes/listagem-filmes.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/listagem-filmes/listagem-filmes.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-header {\n  margin-bottom: 50px;\n}\n\n.larguraFixa {\n  width: 14em;\n  text-align: center;\n}\n\n.seletor {\n  flex: auto auto;\n}\n\nmat-card:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGFnZW0tZmlsbWVzL0M6XFxVc2Vyc1xcaWFnb2dcXE9uZURyaXZlXFxEb2N1bWVudG9zXFxXb3Jrc3BhY2VcXFByb2pldG9zXFxhcHAtZmlsbWVzL3NyY1xcYXBwXFxsaXN0YWdlbS1maWxtZXNcXGxpc3RhZ2VtLWZpbG1lcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGlzdGFnZW0tZmlsbWVzL2xpc3RhZ2VtLWZpbG1lcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBRUEsa0JBQUE7QUNESjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2xpc3RhZ2VtLWZpbG1lcy9saXN0YWdlbS1maWxtZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYXBwLWhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4ubGFyZ3VyYUZpeGEge1xyXG4gICAgd2lkdGg6IDE0ZW07XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2VsZXRvciB7XHJcbiAgICBmbGV4OiBhdXRvIGF1dG87XHJcbn1cclxuXHJcbm1hdC1jYXJkOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuIiwiYXBwLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5sYXJndXJhRml4YSB7XG4gIHdpZHRoOiAxNGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWxldG9yIHtcbiAgZmxleDogYXV0byBhdXRvO1xufVxuXG5tYXQtY2FyZDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/listagem-filmes/listagem-filmes.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/listagem-filmes/listagem-filmes.component.ts ***!
  \**************************************************************/
/*! exports provided: ListagemFilmesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListagemFilmesComponent", function() { return ListagemFilmesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_filme_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/filme/http.service */ "./src/app/services/filme/http.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _detalhes_filme_detalhes_filme_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../detalhes-filme/detalhes-filme.component */ "./src/app/detalhes-filme/detalhes-filme.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");







var ListagemFilmesComponent = /** @class */ (function () {
    function ListagemFilmesComponent(httpService, dialog, breakpointObserver, liveAnnouncer) {
        this.httpService = httpService;
        this.dialog = dialog;
        this.breakpointObserver = breakpointObserver;
        this.liveAnnouncer = liveAnnouncer;
        this.base_image_url = "https://image.tmdb.org/t/p/";
        this.image_size = "w500";
        this.changeFont = false;
        this.highContrastTheme = false;
        this.larguraAtual = 4;
        this.page = 1;
        this.generChoosed = 16;
        this.fontSize = 16;
        this.paginationPrevious = "";
        this.paginationNext = "";
        this.result = {
            results: null,
            total_pages: null,
            total_results: null,
            page: null
        };
    }
    ListagemFilmesComponent.prototype.ngOnInit = function () {
        this.consultarFilmes();
        this.onResize();
        this.liveAnnouncer.announce("Escolha o filme desejado!");
    };
    ListagemFilmesComponent.prototype.onResize = function () {
        var currentWidth = window.innerWidth;
        if (currentWidth >= 1200) {
            this.larguraAtual = 4;
            this.image_size = "w300";
            this.paginationPrevious = "Anterior";
            this.paginationNext = "Próximo";
        }
        else if (currentWidth >= 992) {
            this.larguraAtual = 3;
        }
        else if (currentWidth >= 576) {
            this.larguraAtual = 2;
        }
        else {
            this.larguraAtual = 1;
            this.image_size = "w185";
            this.paginationPrevious = "";
            this.paginationNext = "";
        }
    };
    ListagemFilmesComponent.prototype.ngOnDestroy = function () {
    };
    // Método para verificar tamanho da tela
    ListagemFilmesComponent.prototype.watchScreen = function () {
        // this.breakpointObserver.observe([
        //   Breakpoints.XSmall,
        // ]).subscribe(result => {
        //   if (result.matches) {
        //     this.larguraAtual = 1;
        //     this.image_size = "w185";
        //     this.paginationPrevious ="";
        //     this.paginationNext = "";
        //   } else {
        //     this.larguraAtual = 3;
        //     this.image_size = "w300";
        //     this.paginationPrevious = "Anterior";
        //     this.paginationNext = "Próximo";
        //   }
        // });
        // this.breakpointObserver.observe([
        //   Breakpoints.Small,
        // ]).subscribe(result => {
        //   if (result.matches) this.larguraAtual = 2;
        // });
    };
    // Consultar filmes mais bem votados - Carregamento inicial
    ListagemFilmesComponent.prototype.consultarFilmes = function () {
        var _this = this;
        this.httpService.getTopRated()
            .subscribe(function (dados) {
            _this.result.total_pages = dados.total_pages;
            _this.result.total_results = dados.total_results;
            _this.result.page = dados.page;
            _this.movies = dados.results;
        }, function (erro) { });
    };
    // Método para avançar, retroceder ou atualizar para pagina desejada
    ListagemFilmesComponent.prototype.nextPage = function () {
        var _this = this;
        this.httpService.nextPage(this.page, this.generChoosed)
            .subscribe(function (dados) {
            _this.result.total_pages = dados.total_pages;
            _this.result.total_results = dados.total_results;
            _this.result.page = dados.page;
            _this.movies = dados.results;
        }, function (erro) { });
    };
    // Método para abrir pop-up com detalhes do filme
    ListagemFilmesComponent.prototype.openDialog = function (movieId) {
        var classe = "";
        if (this.highContrastTheme) {
            classe = 'dialog-contrast';
        }
        var dialogRef = this.dialog.open(_detalhes_filme_detalhes_filme_component__WEBPACK_IMPORTED_MODULE_4__["DetalhesFilmeComponent"], {
            width: '600px',
            data: { id: movieId, size: this.image_size, fontSize: this.fontSize },
            panelClass: classe
        });
    };
    // Método para mudar os filmes que serão listados, recebendo o id de genero escolhido no seletor-genero componente
    ListagemFilmesComponent.prototype.changeGener = function (evento) {
        this.result = evento.genreResult;
        this.generChoosed = evento.choosed;
        this.nextPage();
    };
    ListagemFilmesComponent.prototype.changeFind = function (movies) {
        this.movies = movies;
        this.result.total_pages = null;
    };
    ListagemFilmesComponent.prototype.changeTheme = function () {
        this.highContrastTheme = !this.highContrastTheme;
    };
    ListagemFilmesComponent.prototype.changeFontSize = function (value) {
        //this.changeFont = value.value;
        this.fontSize = value.fontSize;
    };
    ListagemFilmesComponent.ctorParameters = function () { return [
        { type: _services_filme_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
    ], ListagemFilmesComponent.prototype, "onResize", null);
    ListagemFilmesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listagem-filmes',
            template: __webpack_require__(/*! raw-loader!./listagem-filmes.component.html */ "./node_modules/raw-loader/index.js!./src/app/listagem-filmes/listagem-filmes.component.html"),
            styles: [__webpack_require__(/*! ./listagem-filmes.component.scss */ "./src/app/listagem-filmes/listagem-filmes.component.scss")]
        })
    ], ListagemFilmesComponent);
    return ListagemFilmesComponent;
}());



/***/ }),

/***/ "./src/app/seletor-genero/seletor-genero.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/seletor-genero/seletor-genero.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGV0b3ItZ2VuZXJvL3NlbGV0b3ItZ2VuZXJvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/seletor-genero/seletor-genero.component.ts":
/*!************************************************************!*\
  !*** ./src/app/seletor-genero/seletor-genero.component.ts ***!
  \************************************************************/
/*! exports provided: SeletorGeneroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeletorGeneroComponent", function() { return SeletorGeneroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_genero_genero_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/genero/genero.service */ "./src/app/services/genero/genero.service.ts");



var SeletorGeneroComponent = /** @class */ (function () {
    function SeletorGeneroComponent(generoService) {
        this.generoService = generoService;
        this.result = {
            total_pages: 0,
            total_results: 0,
            page: 0,
            results: null
        };
        this.changeGener = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SeletorGeneroComponent.prototype.ngOnInit = function () {
        this.getGeners();
    };
    // Mudar para o genero escolhido
    SeletorGeneroComponent.prototype.changeChoosed = function (value) {
        this.choosed = value;
        this.getGenreById(this.choosed);
    };
    // Notifica a mudança para o componente pai 
    SeletorGeneroComponent.prototype.notifyChange = function () {
        this.changeGener.emit({ choosed: this.choosed, genreResult: this.result });
    };
    // Método para solicitar consulta dos filmes por gênero
    SeletorGeneroComponent.prototype.getGenreById = function (value) {
        var _this = this;
        this.generoService.loadGenreById(value).subscribe(function (dados) {
            _this.result.total_pages = dados.total_pages;
            _this.result.total_results = dados.total_results;
            _this.result.page = dados.page;
            _this.notifyChange();
        }, function (erro) { });
    };
    // Método para solicitar todos os gêneros disponíveis
    SeletorGeneroComponent.prototype.getGeners = function () {
        var _this = this;
        this.generoService.loadGenres().subscribe(function (dados) { return _this.genres = dados.genres; });
    };
    SeletorGeneroComponent.ctorParameters = function () { return [
        { type: _services_genero_genero_service__WEBPACK_IMPORTED_MODULE_2__["GeneroService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], SeletorGeneroComponent.prototype, "changeGener", void 0);
    SeletorGeneroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'seletor-genero',
            template: __webpack_require__(/*! raw-loader!./seletor-genero.component.html */ "./node_modules/raw-loader/index.js!./src/app/seletor-genero/seletor-genero.component.html"),
            styles: [__webpack_require__(/*! ./seletor-genero.component.scss */ "./src/app/seletor-genero/seletor-genero.component.scss")]
        })
    ], SeletorGeneroComponent);
    return SeletorGeneroComponent;
}());



/***/ }),

/***/ "./src/app/services/filme/http.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/filme/http.service.ts ***!
  \************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.api_key = "?api_key=7e18fad3e87379a9f2e8d60fb46ff5b0";
    }
    HttpService.prototype.getTopRated = function () {
        return this.http.get("https://api.themoviedb.org/3/movie/top_rated" + this.api_key);
    };
    HttpService.prototype.getById = function (movieId) {
        return this.http.get("https://api.themoviedb.org/3/movie/" + movieId + this.api_key);
    };
    HttpService.prototype.getByKeyword = function (query) {
        return this.http.get("https://api.themoviedb.org/3/search/movie" + this.api_key + "&query=" + query + "&language=pt-BR");
    };
    HttpService.prototype.nextPage = function (p, g) {
        return this.http.get("https://api.themoviedb.org/3/discover/movie" + this.api_key + "&with_genres=" + g + "&page=" + p + "&language=pt-BR");
    };
    HttpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/genero/genero.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/genero/genero.service.ts ***!
  \***************************************************/
/*! exports provided: GeneroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneroService", function() { return GeneroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GeneroService = /** @class */ (function () {
    function GeneroService(http) {
        this.http = http;
    }
    GeneroService.prototype.loadGenreById = function (genreId) {
        return this.http.get("https://api.themoviedb.org/3/discover/movie?api_key=7e18fad3e87379a9f2e8d60fb46ff5b0&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=" + genreId + "&language=pt-BR");
    };
    GeneroService.prototype.loadGenres = function () {
        return this.http.get("https://api.themoviedb.org/3/genre/movie/list?api_key=7e18fad3e87379a9f2e8d60fb46ff5b0&language=pt-BR");
    };
    GeneroService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    GeneroService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], GeneroService);
    return GeneroService;
}());



/***/ }),

/***/ "./src/app/spinner/spinner.component.scss":
/*!************************************************!*\
  !*** ./src/app/spinner/spinner.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/index.js!./src/app/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.scss */ "./src/app/spinner/spinner.component.scss")]
        })
    ], SpinnerComponent);
    return SpinnerComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\iagog\OneDrive\Documentos\Workspace\Projetos\app-filmes\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map