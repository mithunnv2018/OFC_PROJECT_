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
var commonbrowsetopskills_component_1 = require('./commonbrowsetopskills.component');
var auth_guard_1 = require('../shared/login/auth.guard');
var CommonBrowseTopSkillsRoutingModule = (function () {
    function CommonBrowseTopSkillsRoutingModule() {
    }
    CommonBrowseTopSkillsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'commonbrowsetopskills', component: commonbrowsetopskills_component_1.CommonBrowseTopSkillsComponent, canActivate: [auth_guard_1.AuthGuard] }
                ])
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], CommonBrowseTopSkillsRoutingModule);
    return CommonBrowseTopSkillsRoutingModule;
}());
exports.CommonBrowseTopSkillsRoutingModule = CommonBrowseTopSkillsRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21tb25icm93c2V0b3Bza2lsbHMvY29tbW9uYnJvd3NldG9wc2tpbGxzLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsZ0RBQStDLG1DQUFtQyxDQUFDLENBQUE7QUFDbkYsMkJBQXdCLDRCQUE0QixDQUFDLENBQUE7QUFVckQ7SUFBQTtJQUFrRCxDQUFDO0lBUm5EO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZLENBQUMsUUFBUSxDQUFDO29CQUNwQixFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsZ0VBQThCLEVBQUUsV0FBVyxFQUFDLENBQUMsc0JBQVMsQ0FBQyxFQUFDO2lCQUNyRyxDQUFDO2FBQ0g7WUFDRCxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO1NBQ3hCLENBQUM7OzBDQUFBO0lBQ2dELHlDQUFDO0FBQUQsQ0FBbEQsQUFBbUQsSUFBQTtBQUF0QywwQ0FBa0MscUNBQUksQ0FBQSIsImZpbGUiOiJhcHAvY29tbW9uYnJvd3NldG9wc2tpbGxzL2NvbW1vbmJyb3dzZXRvcHNraWxscy1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbW1vbkJyb3dzZVRvcFNraWxsc0NvbXBvbmVudCB9IGZyb20gJy4vY29tbW9uYnJvd3NldG9wc2tpbGxzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QXV0aEd1YXJkfSBmcm9tICcuLi9zaGFyZWQvbG9naW4vYXV0aC5ndWFyZCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXHJcbiAgICAgIHsgcGF0aDogJ2NvbW1vbmJyb3dzZXRvcHNraWxscycsIGNvbXBvbmVudDogQ29tbW9uQnJvd3NlVG9wU2tpbGxzQ29tcG9uZW50ICxjYW5BY3RpdmF0ZTpbQXV0aEd1YXJkXX1cclxuICAgIF0pXHJcbiAgXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tbW9uQnJvd3NlVG9wU2tpbGxzUm91dGluZ01vZHVsZSB7IH1cclxuIl19
