"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WebsitesComponent = void 0;
var core_1 = require("@angular/core");
var $ = require("jquery");
var WebsitesComponent = /** @class */ (function () {
    function WebsitesComponent() {
    }
    WebsitesComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.trocar').hover(function () {
                $(this).children('.front').stop().animate({
                    "top": '220px'
                }, 500); //Trabalha no hoverIn
            }, function () {
                $(this).children('.front').stop().animate({
                    "top": '0'
                }, 400); //Trabalha no hoverOut
            });
        });
    };
    WebsitesComponent = __decorate([
        core_1.Component({
            selector: 'app-websites',
            templateUrl: './websites.component.html',
            styleUrls: ['./websites.component.scss']
        })
    ], WebsitesComponent);
    return WebsitesComponent;
}());
exports.WebsitesComponent = WebsitesComponent;
