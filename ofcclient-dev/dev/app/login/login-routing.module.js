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
var login_component_1 = require('./login.component');
var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'login', component: login_component_1.LoginComponent }
                ])
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());
exports.LoginRoutingModule = LoginRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbi9sb2dpbi1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBVW5EO0lBQUE7SUFBa0MsQ0FBQztJQVJuQztRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxxQkFBWSxDQUFDLFFBQVEsQ0FBQztvQkFDcEIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO2lCQUM3QyxDQUFDO2FBQ0g7WUFDRCxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO1NBQ3hCLENBQUM7OzBCQUFBO0lBQ2dDLHlCQUFDO0FBQUQsQ0FBbEMsQUFBbUMsSUFBQTtBQUF0QiwwQkFBa0IscUJBQUksQ0FBQSIsImZpbGUiOiJhcHAvbG9naW4vbG9naW4tcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcclxuICAgICAgeyBwYXRoOiAnbG9naW4nLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH1cclxuICAgIF0pXHJcbiAgXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Sb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=
