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
var myproposal_component_1 = require('./myproposal.component');
var MyproposalRoutingModule = (function () {
    function MyproposalRoutingModule() {
    }
    MyproposalRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'myproposal/:projectpostid', component: myproposal_component_1.MyproposalComponent }
                ])
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], MyproposalRoutingModule);
    return MyproposalRoutingModule;
}());
exports.MyproposalRoutingModule = MyproposalRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9teXByb3Bvc2FsL215cHJvcG9zYWwtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxxQ0FBb0Msd0JBQXdCLENBQUMsQ0FBQTtBQVc3RDtJQUFBO0lBQXVDLENBQUM7SUFUeEM7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AscUJBQVksQ0FBQyxRQUFRLENBQUM7b0JBRW5CLEVBQUUsSUFBSSxFQUFFLDJCQUEyQixFQUFFLFNBQVMsRUFBRSwwQ0FBbUIsRUFBQztpQkFDdEUsQ0FBQzthQUNIO1lBQ0QsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztTQUN4QixDQUFDOzsrQkFBQTtJQUNxQyw4QkFBQztBQUFELENBQXZDLEFBQXdDLElBQUE7QUFBM0IsK0JBQXVCLDBCQUFJLENBQUEiLCJmaWxlIjoiYXBwL215cHJvcG9zYWwvbXlwcm9wb3NhbC1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE15cHJvcG9zYWxDb21wb25lbnQgfSBmcm9tICcuL215cHJvcG9zYWwuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcclxuICAgICBcclxuICAgICAgIHsgcGF0aDogJ215cHJvcG9zYWwvOnByb2plY3Rwb3N0aWQnLCBjb21wb25lbnQ6IE15cHJvcG9zYWxDb21wb25lbnR9XHJcbiAgICBdKVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE15cHJvcG9zYWxSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=
