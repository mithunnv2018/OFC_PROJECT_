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
var searchfreelancersdetails_component_1 = require('./searchfreelancersdetails.component');
var ofcauth_guard_1 = require('../shared/loginpage/ofcauth.guard');
var SearchFreeLancersDetailsRoutingModule = (function () {
    function SearchFreeLancersDetailsRoutingModule() {
    }
    SearchFreeLancersDetailsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'searchfreelancersdetails/:freelancerid', component: searchfreelancersdetails_component_1.SearchFreeLancersDetailsComponent, canActivate: [ofcauth_guard_1.AuthGuard] }
                ])
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchFreeLancersDetailsRoutingModule);
    return SearchFreeLancersDetailsRoutingModule;
}());
exports.SearchFreeLancersDetailsRoutingModule = SearchFreeLancersDetailsRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZWFyY2hmcmVlbGFuY2Vyc2RldGFpbHMvc2VhcmNoZnJlZWxhbmNlcnNkZXRhaWxzLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsbURBQWtELHNDQUFzQyxDQUFDLENBQUE7QUFDekYsOEJBQXdCLG1DQUFtQyxDQUFDLENBQUE7QUFVNUQ7SUFBQTtJQUFxRCxDQUFDO0lBUnREO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZLENBQUMsUUFBUSxDQUFDO29CQUNwQixFQUFFLElBQUksRUFBRSx3Q0FBd0MsRUFBRSxTQUFTLEVBQUUsc0VBQWlDLEVBQUUsV0FBVyxFQUFDLENBQUMseUJBQVMsQ0FBQyxFQUFDO2lCQUN6SCxDQUFDO2FBQ0g7WUFDRCxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO1NBQ3hCLENBQUM7OzZDQUFBO0lBQ21ELDRDQUFDO0FBQUQsQ0FBckQsQUFBc0QsSUFBQTtBQUF6Qyw2Q0FBcUMsd0NBQUksQ0FBQSIsImZpbGUiOiJhcHAvc2VhcmNoZnJlZWxhbmNlcnNkZXRhaWxzL3NlYXJjaGZyZWVsYW5jZXJzZGV0YWlscy1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFNlYXJjaEZyZWVMYW5jZXJzRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoZnJlZWxhbmNlcnNkZXRhaWxzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QXV0aEd1YXJkfSBmcm9tICcuLi9zaGFyZWQvbG9naW5wYWdlL29mY2F1dGguZ3VhcmQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xyXG4gICAgICB7IHBhdGg6ICdzZWFyY2hmcmVlbGFuY2Vyc2RldGFpbHMvOmZyZWVsYW5jZXJpZCcsIGNvbXBvbmVudDogU2VhcmNoRnJlZUxhbmNlcnNEZXRhaWxzQ29tcG9uZW50ICxjYW5BY3RpdmF0ZTpbQXV0aEd1YXJkXX1cclxuICAgIF0pXHJcbiAgXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoRnJlZUxhbmNlcnNEZXRhaWxzUm91dGluZ01vZHVsZSB7IH1cclxuIl19
