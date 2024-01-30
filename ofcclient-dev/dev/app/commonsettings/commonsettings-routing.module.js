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
var commonsettings_component_1 = require('./commonsettings.component');
var auth_guard_1 = require('../shared/login/auth.guard');
var CommonsettingsRoutingModule = (function () {
    function CommonsettingsRoutingModule() {
    }
    CommonsettingsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'commonsettings', component: commonsettings_component_1.CommonsettingsComponent, canActivate: [auth_guard_1.AuthGuard] }
                ])
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], CommonsettingsRoutingModule);
    return CommonsettingsRoutingModule;
}());
exports.CommonsettingsRoutingModule = CommonsettingsRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21tb25zZXR0aW5ncy9jb21tb25zZXR0aW5ncy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHlDQUF3Qyw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3JFLDJCQUF3Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBVXJEO0lBQUE7SUFBMkMsQ0FBQztJQVI1QztRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxxQkFBWSxDQUFDLFFBQVEsQ0FBQztvQkFDcEIsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLGtEQUF1QixFQUFFLFdBQVcsRUFBQyxDQUFDLHNCQUFTLENBQUMsRUFBQztpQkFDdkYsQ0FBQzthQUNIO1lBQ0QsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztTQUN4QixDQUFDOzttQ0FBQTtJQUN5QyxrQ0FBQztBQUFELENBQTNDLEFBQTRDLElBQUE7QUFBL0IsbUNBQTJCLDhCQUFJLENBQUEiLCJmaWxlIjoiYXBwL2NvbW1vbnNldHRpbmdzL2NvbW1vbnNldHRpbmdzLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29tbW9uc2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL2NvbW1vbnNldHRpbmdzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QXV0aEd1YXJkfSBmcm9tICcuLi9zaGFyZWQvbG9naW4vYXV0aC5ndWFyZCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXHJcbiAgICAgIHsgcGF0aDogJ2NvbW1vbnNldHRpbmdzJywgY29tcG9uZW50OiBDb21tb25zZXR0aW5nc0NvbXBvbmVudCAsY2FuQWN0aXZhdGU6W0F1dGhHdWFyZF19XHJcbiAgICBdKVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW1vbnNldHRpbmdzUm91dGluZ01vZHVsZSB7IH1cclxuIl19
