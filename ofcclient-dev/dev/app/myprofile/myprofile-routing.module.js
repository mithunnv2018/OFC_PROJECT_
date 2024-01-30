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
var myprofile_component_1 = require('./myprofile.component');
var ofcauth_guard_1 = require('../shared/loginpage/ofcauth.guard');
var MyprofileRoutingModule = (function () {
    function MyprofileRoutingModule() {
    }
    MyprofileRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'myprofile', component: myprofile_component_1.MyprofileComponent, canActivate: [ofcauth_guard_1.AuthGuard] }
                ])
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], MyprofileRoutingModule);
    return MyprofileRoutingModule;
}());
exports.MyprofileRoutingModule = MyprofileRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9teXByb2ZpbGUvbXlwcm9maWxlLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msb0NBQW1DLHVCQUF1QixDQUFDLENBQUE7QUFDM0QsOEJBQXdCLG1DQUFtQyxDQUFDLENBQUE7QUFXNUQ7SUFBQTtJQUFzQyxDQUFDO0lBVHZDO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZLENBQUMsUUFBUSxDQUFDO29CQUNwQixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFFLFdBQVcsRUFBQyxDQUFDLHlCQUFTLENBQUMsRUFBQztpQkFFN0UsQ0FBQzthQUNIO1lBQ0QsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztTQUN4QixDQUFDOzs4QkFBQTtJQUNvQyw2QkFBQztBQUFELENBQXRDLEFBQXVDLElBQUE7QUFBMUIsOEJBQXNCLHlCQUFJLENBQUEiLCJmaWxlIjoiYXBwL215cHJvZmlsZS9teXByb2ZpbGUtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNeXByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL215cHJvZmlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0F1dGhHdWFyZH0gZnJvbSAnLi4vc2hhcmVkL2xvZ2lucGFnZS9vZmNhdXRoLmd1YXJkJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcclxuICAgICAgeyBwYXRoOiAnbXlwcm9maWxlJywgY29tcG9uZW50OiBNeXByb2ZpbGVDb21wb25lbnQgLGNhbkFjdGl2YXRlOltBdXRoR3VhcmRdfVxyXG4gICAgICAvLyB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IE15cHJvZmlsZUNvbXBvbmVudCAsY2FuQWN0aXZhdGU6W0F1dGhHdWFyZF19XHJcbiAgICBdKVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE15cHJvZmlsZVJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==
