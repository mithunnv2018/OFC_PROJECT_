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
var transactionhistory_component_1 = require('./transactionhistory.component');
var ofcauth_guard_1 = require('../shared/loginpage/ofcauth.guard');
var TransactionhistoryRoutingModule = (function () {
    function TransactionhistoryRoutingModule() {
    }
    TransactionhistoryRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'transactionhistory', component: transactionhistory_component_1.TransactionhistoryComponent, canActivate: [ofcauth_guard_1.AuthGuard] }
                ])
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], TransactionhistoryRoutingModule);
    return TransactionhistoryRoutingModule;
}());
exports.TransactionhistoryRoutingModule = TransactionhistoryRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90cmFuc2FjdGlvbmhpc3RvcnkvdHJhbnNhY3Rpb25oaXN0b3J5LXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsNkNBQTRDLGdDQUFnQyxDQUFDLENBQUE7QUFDN0UsOEJBQXdCLG1DQUFtQyxDQUFDLENBQUE7QUFVNUQ7SUFBQTtJQUErQyxDQUFDO0lBUmhEO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZLENBQUMsUUFBUSxDQUFDO29CQUNwQixFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsMERBQTJCLEVBQUUsV0FBVyxFQUFDLENBQUMseUJBQVMsQ0FBQyxFQUFDO2lCQUMvRixDQUFDO2FBQ0g7WUFDRCxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO1NBQ3hCLENBQUM7O3VDQUFBO0lBQzZDLHNDQUFDO0FBQUQsQ0FBL0MsQUFBZ0QsSUFBQTtBQUFuQyx1Q0FBK0Isa0NBQUksQ0FBQSIsImZpbGUiOiJhcHAvdHJhbnNhY3Rpb25oaXN0b3J5L3RyYW5zYWN0aW9uaGlzdG9yeS1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uaGlzdG9yeUNvbXBvbmVudCB9IGZyb20gJy4vdHJhbnNhY3Rpb25oaXN0b3J5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QXV0aEd1YXJkfSBmcm9tICcuLi9zaGFyZWQvbG9naW5wYWdlL29mY2F1dGguZ3VhcmQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xyXG4gICAgICB7IHBhdGg6ICd0cmFuc2FjdGlvbmhpc3RvcnknLCBjb21wb25lbnQ6IFRyYW5zYWN0aW9uaGlzdG9yeUNvbXBvbmVudCAsY2FuQWN0aXZhdGU6W0F1dGhHdWFyZF19XHJcbiAgICBdKVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uaGlzdG9yeVJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==
