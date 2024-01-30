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
var myproposaldetails_component_1 = require('./myproposaldetails.component');
var ofcauth_guard_1 = require('../shared/loginpage/ofcauth.guard');
var MyproposaldetailsRoutingModule = (function () {
    function MyproposaldetailsRoutingModule() {
    }
    MyproposaldetailsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'myproposaldetails11/:ofcsubmitproposal_id', component: myproposaldetails_component_1.MyproposaldetailsComponent, canActivate: [ofcauth_guard_1.AuthGuard] }
                ])
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], MyproposaldetailsRoutingModule);
    return MyproposaldetailsRoutingModule;
}());
exports.MyproposaldetailsRoutingModule = MyproposaldetailsRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9teXByb3Bvc2FsZGV0YWlscy9teXByb3Bvc2FsZGV0YWlsczExLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsNENBQTJDLCtCQUErQixDQUFDLENBQUE7QUFDM0UsOEJBQXdCLG1DQUFtQyxDQUFDLENBQUE7QUFXNUQ7SUFBQTtJQUE4QyxDQUFDO0lBVC9DO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZLENBQUMsUUFBUSxDQUFDO29CQUVuQixFQUFFLElBQUksRUFBRSwyQ0FBMkMsRUFBRSxTQUFTLEVBQUUsd0RBQTBCLEVBQUMsV0FBVyxFQUFDLENBQUMseUJBQVMsQ0FBQyxFQUFDO2lCQUNySCxDQUFDO2FBQ0g7WUFDRCxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO1NBQ3hCLENBQUM7O3NDQUFBO0lBQzRDLHFDQUFDO0FBQUQsQ0FBOUMsQUFBK0MsSUFBQTtBQUFsQyxzQ0FBOEIsaUNBQUksQ0FBQSIsImZpbGUiOiJhcHAvbXlwcm9wb3NhbGRldGFpbHMvbXlwcm9wb3NhbGRldGFpbHMxMS1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE15cHJvcG9zYWxkZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9teXByb3Bvc2FsZGV0YWlscy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0F1dGhHdWFyZH0gZnJvbSAnLi4vc2hhcmVkL2xvZ2lucGFnZS9vZmNhdXRoLmd1YXJkJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcclxuICAgICBcclxuICAgICAgIHsgcGF0aDogJ215cHJvcG9zYWxkZXRhaWxzMTEvOm9mY3N1Ym1pdHByb3Bvc2FsX2lkJywgY29tcG9uZW50OiBNeXByb3Bvc2FsZGV0YWlsc0NvbXBvbmVudCxjYW5BY3RpdmF0ZTpbQXV0aEd1YXJkXX1cclxuICAgIF0pXHJcbiAgXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlwcm9wb3NhbGRldGFpbHNSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=
