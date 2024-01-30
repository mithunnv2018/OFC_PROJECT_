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
var homepage_component_1 = require('./homepage.component');
var HomePageRoutingModule = (function () {
    function HomePageRoutingModule() {
    }
    HomePageRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'index', component: homepage_component_1.HomePageComponent },
                    { path: '', redirectTo: '/index', pathMatch: 'full' }
                ])
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], HomePageRoutingModule);
    return HomePageRoutingModule;
}());
exports.HomePageRoutingModule = HomePageRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lcGFnZS9ob21lcGFnZS1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLG1DQUFrQyxzQkFBc0IsQ0FBQyxDQUFBO0FBYXpEO0lBQUE7SUFBcUMsQ0FBQztJQVZ0QztRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxxQkFBWSxDQUFDLFFBQVEsQ0FBQztvQkFDcEIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTtvQkFFL0MsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQztpQkFDbkQsQ0FBQzthQUNIO1lBQ0QsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztTQUN4QixDQUFDOzs2QkFBQTtJQUNtQyw0QkFBQztBQUFELENBQXJDLEFBQXNDLElBQUE7QUFBekIsNkJBQXFCLHdCQUFJLENBQUEiLCJmaWxlIjoiYXBwL2hvbWVwYWdlL2hvbWVwYWdlLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgSG9tZVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL2hvbWVwYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QXV0aEd1YXJkfSBmcm9tICcuLi9zaGFyZWQvbG9naW4vYXV0aC5ndWFyZCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXHJcbiAgICAgIHsgcGF0aDogJ2luZGV4JywgY29tcG9uZW50OiBIb21lUGFnZUNvbXBvbmVudCB9Ly8sY2FuQWN0aXZhdGU6W0F1dGhHdWFyZF19XHJcbiAgICAgICxcclxuICAgICAgeyBwYXRoOiAnJyxyZWRpcmVjdFRvOiAnL2luZGV4JyxwYXRoTWF0Y2g6ICdmdWxsJ31cclxuICAgIF0pXHJcbiAgXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2VSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=
