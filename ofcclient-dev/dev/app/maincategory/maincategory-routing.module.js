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
var maincategory_component_1 = require('./maincategory.component');
var auth_guard_1 = require('../shared/login/auth.guard');
var MaincategoryRoutingModule = (function () {
    function MaincategoryRoutingModule() {
    }
    MaincategoryRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'maincategory', component: maincategory_component_1.MaincategoryComponent, canActivate: [auth_guard_1.AuthGuard] }
                ])
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], MaincategoryRoutingModule);
    return MaincategoryRoutingModule;
}());
exports.MaincategoryRoutingModule = MaincategoryRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYWluY2F0ZWdvcnkvbWFpbmNhdGVnb3J5LXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsdUNBQXNDLDBCQUEwQixDQUFDLENBQUE7QUFDakUsMkJBQXdCLDRCQUE0QixDQUFDLENBQUE7QUFVckQ7SUFBQTtJQUF5QyxDQUFDO0lBUjFDO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZLENBQUMsUUFBUSxDQUFDO29CQUNwQixFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLDhDQUFxQixFQUFFLFdBQVcsRUFBQyxDQUFDLHNCQUFTLENBQUMsRUFBRTtpQkFDcEYsQ0FBQzthQUNIO1lBQ0QsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztTQUN4QixDQUFDOztpQ0FBQTtJQUN1QyxnQ0FBQztBQUFELENBQXpDLEFBQTBDLElBQUE7QUFBN0IsaUNBQXlCLDRCQUFJLENBQUEiLCJmaWxlIjoiYXBwL21haW5jYXRlZ29yeS9tYWluY2F0ZWdvcnktcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNYWluY2F0ZWdvcnlDb21wb25lbnQgfSBmcm9tICcuL21haW5jYXRlZ29yeS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0F1dGhHdWFyZH0gZnJvbSAnLi4vc2hhcmVkL2xvZ2luL2F1dGguZ3VhcmQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xyXG4gICAgICB7IHBhdGg6ICdtYWluY2F0ZWdvcnknLCBjb21wb25lbnQ6IE1haW5jYXRlZ29yeUNvbXBvbmVudCwgY2FuQWN0aXZhdGU6W0F1dGhHdWFyZF0gfVxyXG4gICAgXSlcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluY2F0ZWdvcnlSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=
