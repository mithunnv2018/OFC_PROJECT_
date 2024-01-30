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
var notification_component_1 = require('./notification.component');
var ofcauth_guard_1 = require('../shared/loginpage/ofcauth.guard');
var NotificationRoutingModule = (function () {
    function NotificationRoutingModule() {
    }
    NotificationRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'notification', component: notification_component_1.NotificationComponent, canActivate: [ofcauth_guard_1.AuthGuard] }
                ])
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], NotificationRoutingModule);
    return NotificationRoutingModule;
}());
exports.NotificationRoutingModule = NotificationRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsdUNBQXNDLDBCQUEwQixDQUFDLENBQUE7QUFDakUsOEJBQXdCLG1DQUFtQyxDQUFDLENBQUE7QUFVNUQ7SUFBQTtJQUF5QyxDQUFDO0lBUjFDO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZLENBQUMsUUFBUSxDQUFDO29CQUNwQixFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLDhDQUFxQixFQUFFLFdBQVcsRUFBQyxDQUFDLHlCQUFTLENBQUMsRUFBQztpQkFDbkYsQ0FBQzthQUNIO1lBQ0QsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztTQUN4QixDQUFDOztpQ0FBQTtJQUN1QyxnQ0FBQztBQUFELENBQXpDLEFBQTBDLElBQUE7QUFBN0IsaUNBQXlCLDRCQUFJLENBQUEiLCJmaWxlIjoiYXBwL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24tcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL25vdGlmaWNhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge0F1dGhHdWFyZH0gZnJvbSAnLi4vc2hhcmVkL2xvZ2lucGFnZS9vZmNhdXRoLmd1YXJkJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcclxuICAgICAgeyBwYXRoOiAnbm90aWZpY2F0aW9uJywgY29tcG9uZW50OiBOb3RpZmljYXRpb25Db21wb25lbnQgLGNhbkFjdGl2YXRlOltBdXRoR3VhcmRdfVxyXG4gICAgXSlcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25Sb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=
