"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var searchfreelancers_component_1 = require('./searchfreelancers.component');
var ofcauth_guard_1 = require('../shared/loginpage/ofcauth.guard');
var SearchFreeLancersRoutingModule = (function () {
    function SearchFreeLancersRoutingModule() {
    }
    SearchFreeLancersRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'searchfreelancers', component: searchfreelancers_component_1.SearchFreeLancersComponent, canActivate: [ofcauth_guard_1.AuthGuard] }
                ])
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchFreeLancersRoutingModule);
    return SearchFreeLancersRoutingModule;
}());
exports.SearchFreeLancersRoutingModule = SearchFreeLancersRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZWFyY2hmcmVlbGFuY2Vycy9zZWFyY2hmcmVlbGFuY2Vycy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDRDQUEyQywrQkFBK0IsQ0FBQyxDQUFBO0FBQzNFLDhCQUF3QixtQ0FBbUMsQ0FBQyxDQUFBO0FBVTVEO0lBQUE7SUFBOEMsQ0FBQztJQVIvQztRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxxQkFBWSxDQUFDLFFBQVEsQ0FBQztvQkFDcEIsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLHdEQUEwQixFQUFFLFdBQVcsRUFBQyxDQUFDLHlCQUFTLENBQUMsRUFBQztpQkFDN0YsQ0FBQzthQUNIO1lBQ0QsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztTQUN4QixDQUFDOztzQ0FBQTtJQUM0QyxxQ0FBQztBQUFELENBQTlDLEFBQStDLElBQUE7QUFBbEMsc0NBQThCLGlDQUFJLENBQUEiLCJmaWxlIjoiYXBwL3NlYXJjaGZyZWVsYW5jZXJzL3NlYXJjaGZyZWVsYW5jZXJzLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU2VhcmNoRnJlZUxhbmNlcnNDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaGZyZWVsYW5jZXJzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QXV0aEd1YXJkfSBmcm9tICcuLi9zaGFyZWQvbG9naW5wYWdlL29mY2F1dGguZ3VhcmQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xyXG4gICAgICB7IHBhdGg6ICdzZWFyY2hmcmVlbGFuY2VycycsIGNvbXBvbmVudDogU2VhcmNoRnJlZUxhbmNlcnNDb21wb25lbnQgLGNhbkFjdGl2YXRlOltBdXRoR3VhcmRdfVxyXG4gICAgXSlcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hGcmVlTGFuY2Vyc1JvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==
