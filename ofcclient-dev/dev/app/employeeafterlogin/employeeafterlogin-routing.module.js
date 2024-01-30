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
var employeeafterlogin_component_1 = require('./employeeafterlogin.component');
var ofcauth_guard_1 = require('../shared/loginpage/ofcauth.guard');
var EmployeeafterloginRoutingModule = (function () {
    function EmployeeafterloginRoutingModule() {
    }
    EmployeeafterloginRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'employeeafterlogin', component: employeeafterlogin_component_1.EmployeeafterloginComponent, canActivate: [ofcauth_guard_1.AuthGuard] }
                ])
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], EmployeeafterloginRoutingModule);
    return EmployeeafterloginRoutingModule;
}());
exports.EmployeeafterloginRoutingModule = EmployeeafterloginRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lbXBsb3llZWFmdGVybG9naW4vZW1wbG95ZWVhZnRlcmxvZ2luLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsNkNBQTRDLGdDQUFnQyxDQUFDLENBQUE7QUFDN0UsOEJBQXdCLG1DQUFtQyxDQUFDLENBQUE7QUFTNUQ7SUFBQTtJQUErQyxDQUFDO0lBUmhEO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZLENBQUMsUUFBUSxDQUFDO29CQUNwQixFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsMERBQTJCLEVBQUUsV0FBVyxFQUFDLENBQUMseUJBQVMsQ0FBQyxFQUFDO2lCQUMvRixDQUFDO2FBQ0g7WUFDRCxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO1NBQ3hCLENBQUM7O3VDQUFBO0lBQzZDLHNDQUFDO0FBQUQsQ0FBL0MsQUFBZ0QsSUFBQTtBQUFuQyx1Q0FBK0Isa0NBQUksQ0FBQSIsImZpbGUiOiJhcHAvZW1wbG95ZWVhZnRlcmxvZ2luL2VtcGxveWVlYWZ0ZXJsb2dpbi1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEVtcGxveWVlYWZ0ZXJsb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vZW1wbG95ZWVhZnRlcmxvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QXV0aEd1YXJkfSBmcm9tICcuLi9zaGFyZWQvbG9naW5wYWdlL29mY2F1dGguZ3VhcmQnO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXHJcbiAgICAgIHsgcGF0aDogJ2VtcGxveWVlYWZ0ZXJsb2dpbicsIGNvbXBvbmVudDogRW1wbG95ZWVhZnRlcmxvZ2luQ29tcG9uZW50ICxjYW5BY3RpdmF0ZTpbQXV0aEd1YXJkXX1cclxuICAgIF0pXHJcbiAgXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVhZnRlcmxvZ2luUm91dGluZ01vZHVsZSB7IH1cclxuIl19
