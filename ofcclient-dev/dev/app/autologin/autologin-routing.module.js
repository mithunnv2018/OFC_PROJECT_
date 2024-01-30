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
var autologin_component_1 = require('./autologin.component');
var AutologinRoutingModule = (function () {
    function AutologinRoutingModule() {
    }
    AutologinRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    {
                        path: 'autologin/:sessionid',
                        component: autologin_component_1.AutologinComponent
                    }
                ])
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AutologinRoutingModule);
    return AutologinRoutingModule;
}());
exports.AutologinRoutingModule = AutologinRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRvbG9naW4vYXV0b2xvZ2luLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msb0NBQW1DLHVCQUF1QixDQUFDLENBQUE7QUFnQjNEO0lBQUE7SUFBc0MsQ0FBQztJQWJ2QztRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxxQkFBWSxDQUFDLFFBQVEsQ0FBQztvQkFFdEI7d0JBQ0ksSUFBSSxFQUFFLHNCQUFzQjt3QkFDNUIsU0FBUyxFQUFFLHdDQUFrQjtxQkFDaEM7aUJBRUEsQ0FBQzthQUNIO1lBQ0QsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztTQUN4QixDQUFDOzs4QkFBQTtJQUNvQyw2QkFBQztBQUFELENBQXRDLEFBQXVDLElBQUE7QUFBMUIsOEJBQXNCLHlCQUFJLENBQUEiLCJmaWxlIjoiYXBwL2F1dG9sb2dpbi9hdXRvbG9naW4tcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBdXRvbG9naW5Db21wb25lbnQgfSBmcm9tICcuL2F1dG9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge0F1dGhHdWFyZH0gZnJvbSAnLi4vc2hhcmVkL2xvZ2luL2F1dGguZ3VhcmQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xyXG5cclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnYXV0b2xvZ2luLzpzZXNzaW9uaWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogQXV0b2xvZ2luQ29tcG9uZW50XHJcbiAgICB9XHJcbiAgICAgIFxyXG4gICAgXSlcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRvbG9naW5Sb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=
