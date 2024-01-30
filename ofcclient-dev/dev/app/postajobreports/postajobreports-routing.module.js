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
var postajobreports_component_1 = require('./postajobreports.component');
var ofcauth_guard_1 = require('../shared/loginpage/ofcauth.guard');
var PostajobreportsRoutingModule = (function () {
    function PostajobreportsRoutingModule() {
    }
    PostajobreportsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'postajobreports', component: postajobreports_component_1.PostajobreportsComponent, canActivate: [ofcauth_guard_1.AuthGuard] }
                ])
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], PostajobreportsRoutingModule);
    return PostajobreportsRoutingModule;
}());
exports.PostajobreportsRoutingModule = PostajobreportsRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wb3N0YWpvYnJlcG9ydHMvcG9zdGFqb2JyZXBvcnRzLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsMENBQXlDLDZCQUE2QixDQUFDLENBQUE7QUFDdkUsOEJBQXdCLG1DQUFtQyxDQUFDLENBQUE7QUFVNUQ7SUFBQTtJQUE0QyxDQUFDO0lBUjdDO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZLENBQUMsUUFBUSxDQUFDO29CQUNwQixFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsb0RBQXdCLEVBQUMsV0FBVyxFQUFDLENBQUMseUJBQVMsQ0FBQyxFQUFFO2lCQUN6RixDQUFDO2FBQ0g7WUFDRCxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO1NBQ3hCLENBQUM7O29DQUFBO0lBQzBDLG1DQUFDO0FBQUQsQ0FBNUMsQUFBNkMsSUFBQTtBQUFoQyxvQ0FBNEIsK0JBQUksQ0FBQSIsImZpbGUiOiJhcHAvcG9zdGFqb2JyZXBvcnRzL3Bvc3Rham9icmVwb3J0cy1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFBvc3Rham9icmVwb3J0c0NvbXBvbmVudCB9IGZyb20gJy4vcG9zdGFqb2JyZXBvcnRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QXV0aEd1YXJkfSBmcm9tICcuLi9zaGFyZWQvbG9naW5wYWdlL29mY2F1dGguZ3VhcmQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xyXG4gICAgICB7IHBhdGg6ICdwb3N0YWpvYnJlcG9ydHMnLCBjb21wb25lbnQ6IFBvc3Rham9icmVwb3J0c0NvbXBvbmVudCxjYW5BY3RpdmF0ZTpbQXV0aEd1YXJkXSB9XHJcbiAgICBdKVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvc3Rham9icmVwb3J0c1JvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==
