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
var purchasecoins_component_1 = require('./purchasecoins.component');
var ofcauth_guard_1 = require('../shared/loginpage/ofcauth.guard');
var PurchasecoinsRoutingModule = (function () {
    function PurchasecoinsRoutingModule() {
    }
    PurchasecoinsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'purchasecoins', component: purchasecoins_component_1.PurchasecoinsComponent, canActivate: [ofcauth_guard_1.AuthGuard] }
                ])
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], PurchasecoinsRoutingModule);
    return PurchasecoinsRoutingModule;
}());
exports.PurchasecoinsRoutingModule = PurchasecoinsRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wdXJjaGFzZWNvaW5zL3B1cmNoYXNlY29pbnMtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx3Q0FBdUMsMkJBQTJCLENBQUMsQ0FBQTtBQUNuRSw4QkFBd0IsbUNBQW1DLENBQUMsQ0FBQTtBQVU1RDtJQUFBO0lBQTBDLENBQUM7SUFSM0M7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AscUJBQVksQ0FBQyxRQUFRLENBQUM7b0JBQ3BCLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsZ0RBQXNCLEVBQUUsV0FBVyxFQUFDLENBQUMseUJBQVMsQ0FBQyxFQUFDO2lCQUNyRixDQUFDO2FBQ0g7WUFDRCxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO1NBQ3hCLENBQUM7O2tDQUFBO0lBQ3dDLGlDQUFDO0FBQUQsQ0FBMUMsQUFBMkMsSUFBQTtBQUE5QixrQ0FBMEIsNkJBQUksQ0FBQSIsImZpbGUiOiJhcHAvcHVyY2hhc2Vjb2lucy9wdXJjaGFzZWNvaW5zLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUHVyY2hhc2Vjb2luc0NvbXBvbmVudCB9IGZyb20gJy4vcHVyY2hhc2Vjb2lucy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0F1dGhHdWFyZH0gZnJvbSAnLi4vc2hhcmVkL2xvZ2lucGFnZS9vZmNhdXRoLmd1YXJkJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcclxuICAgICAgeyBwYXRoOiAncHVyY2hhc2Vjb2lucycsIGNvbXBvbmVudDogUHVyY2hhc2Vjb2luc0NvbXBvbmVudCAsY2FuQWN0aXZhdGU6W0F1dGhHdWFyZF19XHJcbiAgICBdKVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFB1cmNoYXNlY29pbnNSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=
