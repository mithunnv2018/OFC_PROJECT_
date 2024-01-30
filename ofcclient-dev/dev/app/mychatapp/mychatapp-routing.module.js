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
var mychatapp_component_1 = require('./mychatapp.component');
var MyChatAppRoutingModule = (function () {
    function MyChatAppRoutingModule() {
    }
    MyChatAppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'mychatapp/:typeofuser', component: mychatapp_component_1.MyChatAppComponent }
                ])
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], MyChatAppRoutingModule);
    return MyChatAppRoutingModule;
}());
exports.MyChatAppRoutingModule = MyChatAppRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9teWNoYXRhcHAvbXljaGF0YXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msb0NBQW1DLHVCQUF1QixDQUFDLENBQUE7QUFVM0Q7SUFBQTtJQUFzQyxDQUFDO0lBUnZDO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZLENBQUMsUUFBUSxDQUFDO29CQUNwQixFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsd0NBQWtCLEVBQUU7aUJBQ2pFLENBQUM7YUFDSDtZQUNELE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7U0FDeEIsQ0FBQzs7OEJBQUE7SUFDb0MsNkJBQUM7QUFBRCxDQUF0QyxBQUF1QyxJQUFBO0FBQTFCLDhCQUFzQix5QkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9teWNoYXRhcHAvbXljaGF0YXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTXlDaGF0QXBwQ29tcG9uZW50IH0gZnJvbSAnLi9teWNoYXRhcHAuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcclxuICAgICAgeyBwYXRoOiAnbXljaGF0YXBwLzp0eXBlb2Z1c2VyJywgY29tcG9uZW50OiBNeUNoYXRBcHBDb21wb25lbnQgfVxyXG4gICAgXSlcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeUNoYXRBcHBSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=
