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
var membershipcoins_component_1 = require('./membershipcoins.component');
var ofcauth_guard_1 = require('../shared/loginpage/ofcauth.guard');
var MembershipcoinsRoutingModule = (function () {
    function MembershipcoinsRoutingModule() {
    }
    MembershipcoinsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'membershipcoins', component: membershipcoins_component_1.MembershipcoinsComponent, canActivate: [ofcauth_guard_1.AuthGuard] }
                ])
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], MembershipcoinsRoutingModule);
    return MembershipcoinsRoutingModule;
}());
exports.MembershipcoinsRoutingModule = MembershipcoinsRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tZW1iZXJzaGlwY29pbnMvbWVtYmVyc2hpcGNvaW5zLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsMENBQXlDLDZCQUE2QixDQUFDLENBQUE7QUFDdkUsOEJBQXdCLG1DQUFtQyxDQUFDLENBQUE7QUFTNUQ7SUFBQTtJQUE0QyxDQUFDO0lBUjdDO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZLENBQUMsUUFBUSxDQUFDO29CQUNwQixFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsb0RBQXdCLEVBQUUsV0FBVyxFQUFDLENBQUMseUJBQVMsQ0FBQyxFQUFDO2lCQUN6RixDQUFDO2FBQ0g7WUFDRCxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO1NBQ3hCLENBQUM7O29DQUFBO0lBQzBDLG1DQUFDO0FBQUQsQ0FBNUMsQUFBNkMsSUFBQTtBQUFoQyxvQ0FBNEIsK0JBQUksQ0FBQSIsImZpbGUiOiJhcHAvbWVtYmVyc2hpcGNvaW5zL21lbWJlcnNoaXBjb2lucy1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1lbWJlcnNoaXBjb2luc0NvbXBvbmVudCB9IGZyb20gJy4vbWVtYmVyc2hpcGNvaW5zLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QXV0aEd1YXJkfSBmcm9tICcuLi9zaGFyZWQvbG9naW5wYWdlL29mY2F1dGguZ3VhcmQnO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXHJcbiAgICAgIHsgcGF0aDogJ21lbWJlcnNoaXBjb2lucycsIGNvbXBvbmVudDogTWVtYmVyc2hpcGNvaW5zQ29tcG9uZW50ICxjYW5BY3RpdmF0ZTpbQXV0aEd1YXJkXX1cclxuICAgIF0pXHJcbiAgXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVtYmVyc2hpcGNvaW5zUm91dGluZ01vZHVsZSB7IH1cclxuIl19
