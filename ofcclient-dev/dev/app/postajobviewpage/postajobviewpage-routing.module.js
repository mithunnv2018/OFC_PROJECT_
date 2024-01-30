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
var postajobviewpage_component_1 = require('./postajobviewpage.component');
var ofcauth_guard_1 = require('../shared/loginpage/ofcauth.guard');
var PostajobviewpageRoutingModule = (function () {
    function PostajobviewpageRoutingModule() {
    }
    PostajobviewpageRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'postajobviewpage/:projectpostid', component: postajobviewpage_component_1.PostajobviewpageComponent, canActivate: [ofcauth_guard_1.AuthGuard] }
                ])
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], PostajobviewpageRoutingModule);
    return PostajobviewpageRoutingModule;
}());
exports.PostajobviewpageRoutingModule = PostajobviewpageRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wb3N0YWpvYnZpZXdwYWdlL3Bvc3Rham9idmlld3BhZ2Utcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQywyQ0FBMEMsOEJBQThCLENBQUMsQ0FBQTtBQUN6RSw4QkFBd0IsbUNBQW1DLENBQUMsQ0FBQTtBQVU1RDtJQUFBO0lBQTZDLENBQUM7SUFUOUM7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AscUJBQVksQ0FBQyxRQUFRLENBQUM7b0JBRXBCLEVBQUUsSUFBSSxFQUFFLGlDQUFpQyxFQUFFLFNBQVMsRUFBRSxzREFBeUIsRUFBQyxXQUFXLEVBQUMsQ0FBQyx5QkFBUyxDQUFDLEVBQUM7aUJBQ3pHLENBQUM7YUFDSDtZQUNELE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7U0FDeEIsQ0FBQzs7cUNBQUE7SUFDMkMsb0NBQUM7QUFBRCxDQUE3QyxBQUE4QyxJQUFBO0FBQWpDLHFDQUE2QixnQ0FBSSxDQUFBIiwiZmlsZSI6ImFwcC9wb3N0YWpvYnZpZXdwYWdlL3Bvc3Rham9idmlld3BhZ2Utcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQb3N0YWpvYnZpZXdwYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wb3N0YWpvYnZpZXdwYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QXV0aEd1YXJkfSBmcm9tICcuLi9zaGFyZWQvbG9naW5wYWdlL29mY2F1dGguZ3VhcmQnO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXHJcbiAgICAvKiAgeyBwYXRoOiAncG9zdGFqb2J2aWV3cGFnZScsIGNvbXBvbmVudDogUG9zdGFqb2J2aWV3cGFnZUNvbXBvbmVudCxjYW5BY3RpdmF0ZTpbQXV0aEd1YXJkXSB9Ki9cclxuICAgICAgeyBwYXRoOiAncG9zdGFqb2J2aWV3cGFnZS86cHJvamVjdHBvc3RpZCcsIGNvbXBvbmVudDogUG9zdGFqb2J2aWV3cGFnZUNvbXBvbmVudCxjYW5BY3RpdmF0ZTpbQXV0aEd1YXJkXX1cclxuICAgIF0pXHJcbiAgXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9zdGFqb2J2aWV3cGFnZVJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==
