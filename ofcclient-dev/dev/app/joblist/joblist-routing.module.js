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
var joblist_component_1 = require('./joblist.component');
var ofcauth_guard_1 = require('../shared/loginpage/ofcauth.guard');
var JoblistRoutingModule = (function () {
    function JoblistRoutingModule() {
    }
    JoblistRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'joblist', component: joblist_component_1.JoblistComponent, canActivate: [ofcauth_guard_1.AuthGuard] }
                ])
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], JoblistRoutingModule);
    return JoblistRoutingModule;
}());
exports.JoblistRoutingModule = JoblistRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9qb2JsaXN0L2pvYmxpc3Qtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxrQ0FBaUMscUJBQXFCLENBQUMsQ0FBQTtBQUN2RCw4QkFBd0IsbUNBQW1DLENBQUMsQ0FBQTtBQVM1RDtJQUFBO0lBQW9DLENBQUM7SUFSckM7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AscUJBQVksQ0FBQyxRQUFRLENBQUM7b0JBQ3BCLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUUsV0FBVyxFQUFDLENBQUMseUJBQVMsQ0FBQyxFQUFDO2lCQUN6RSxDQUFDO2FBQ0g7WUFDRCxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO1NBQ3hCLENBQUM7OzRCQUFBO0lBQ2tDLDJCQUFDO0FBQUQsQ0FBcEMsQUFBcUMsSUFBQTtBQUF4Qiw0QkFBb0IsdUJBQUksQ0FBQSIsImZpbGUiOiJhcHAvam9ibGlzdC9qb2JsaXN0LXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgSm9ibGlzdENvbXBvbmVudCB9IGZyb20gJy4vam9ibGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0F1dGhHdWFyZH0gZnJvbSAnLi4vc2hhcmVkL2xvZ2lucGFnZS9vZmNhdXRoLmd1YXJkJztcclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xyXG4gICAgICB7IHBhdGg6ICdqb2JsaXN0JywgY29tcG9uZW50OiBKb2JsaXN0Q29tcG9uZW50ICxjYW5BY3RpdmF0ZTpbQXV0aEd1YXJkXX1cclxuICAgIF0pXHJcbiAgXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSm9ibGlzdFJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==
