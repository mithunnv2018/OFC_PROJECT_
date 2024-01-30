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
var commonsubmenu_component_1 = require('./commonsubmenu.component');
var auth_guard_1 = require('../shared/login/auth.guard');
var CommonsubmenuRoutingModule = (function () {
    function CommonsubmenuRoutingModule() {
    }
    CommonsubmenuRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'commonsubmenu', component: commonsubmenu_component_1.CommonsubmenuComponent, canActivate: [auth_guard_1.AuthGuard] }
                ])
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], CommonsubmenuRoutingModule);
    return CommonsubmenuRoutingModule;
}());
exports.CommonsubmenuRoutingModule = CommonsubmenuRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21tb25zdWJtZW51L2NvbW1vbnN1Ym1lbnUtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx3Q0FBdUMsMkJBQTJCLENBQUMsQ0FBQTtBQUNuRSwyQkFBd0IsNEJBQTRCLENBQUMsQ0FBQTtBQVVyRDtJQUFBO0lBQTBDLENBQUM7SUFSM0M7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AscUJBQVksQ0FBQyxRQUFRLENBQUM7b0JBQ3BCLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsZ0RBQXNCLEVBQUUsV0FBVyxFQUFDLENBQUMsc0JBQVMsQ0FBQyxFQUFDO2lCQUNyRixDQUFDO2FBQ0g7WUFDRCxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO1NBQ3hCLENBQUM7O2tDQUFBO0lBQ3dDLGlDQUFDO0FBQUQsQ0FBMUMsQUFBMkMsSUFBQTtBQUE5QixrQ0FBMEIsNkJBQUksQ0FBQSIsImZpbGUiOiJhcHAvY29tbW9uc3VibWVudS9jb21tb25zdWJtZW51LXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29tbW9uc3VibWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tbW9uc3VibWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0F1dGhHdWFyZH0gZnJvbSAnLi4vc2hhcmVkL2xvZ2luL2F1dGguZ3VhcmQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xyXG4gICAgICB7IHBhdGg6ICdjb21tb25zdWJtZW51JywgY29tcG9uZW50OiBDb21tb25zdWJtZW51Q29tcG9uZW50ICxjYW5BY3RpdmF0ZTpbQXV0aEd1YXJkXX1cclxuICAgIF0pXHJcbiAgXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tbW9uc3VibWVudVJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==
