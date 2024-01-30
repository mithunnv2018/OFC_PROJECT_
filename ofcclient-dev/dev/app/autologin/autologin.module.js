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
var common_1 = require('@angular/common');
var autologin_component_1 = require('./autologin.component');
var autologin_routing_module_1 = require('./autologin-routing.module');
var forms_1 = require('@angular/forms');
var autologin_service_1 = require('../shared/autologin/autologin.service');
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var AutologinModule = (function () {
    function AutologinModule() {
    }
    AutologinModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, autologin_routing_module_1.AutologinRoutingModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, primeng_1.GrowlModule, primeng_2.MessagesModule, primeng_1.PasswordModule],
            declarations: [autologin_component_1.AutologinComponent],
            exports: [autologin_component_1.AutologinComponent],
            providers: [autologin_service_1.AutoLoginService]
        }), 
        __metadata('design:paramtypes', [])
    ], AutologinModule);
    return AutologinModule;
}());
exports.AutologinModule = AutologinModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRvbG9naW4vYXV0b2xvZ2luLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLG9DQUFtQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzNELHlDQUF1Qyw0QkFBNEIsQ0FBQyxDQUFBO0FBRXBFLHNCQUE4QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQy9ELGtDQUErQix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ3ZFLHdCQUF5QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzNELHdCQUEyQyxpQkFBaUIsQ0FBQyxDQUFBO0FBUzdEO0lBQUE7SUFBK0IsQ0FBQztJQU5oQztRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUsaURBQXNCLEVBQUMsbUJBQVcsRUFBQywyQkFBbUIsRUFBQyxxQkFBVyxFQUFDLHdCQUFjLEVBQUMsd0JBQWMsQ0FBQztZQUN6SCxZQUFZLEVBQUUsQ0FBQyx3Q0FBa0IsQ0FBQztZQUNsQyxPQUFPLEVBQUUsQ0FBQyx3Q0FBa0IsQ0FBQztZQUM3QixTQUFTLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztTQUM5QixDQUFDOzt1QkFBQTtJQUM2QixzQkFBQztBQUFELENBQS9CLEFBQWdDLElBQUE7QUFBbkIsdUJBQWUsa0JBQUksQ0FBQSIsImZpbGUiOiJhcHAvYXV0b2xvZ2luL2F1dG9sb2dpbi5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBdXRvbG9naW5Db21wb25lbnQgfSBmcm9tICcuL2F1dG9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdXRvbG9naW5Sb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hdXRvbG9naW4tcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cCxGb3JtQ29udHJvbCxWYWxpZGF0b3JzLEZvcm1CdWlsZGVyfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0F1dG9Mb2dpblNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9hdXRvbG9naW4vYXV0b2xvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQge0dyb3dsTW9kdWxlLFBhc3N3b3JkTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge01lc3NhZ2VzTW9kdWxlLE1lc3NhZ2UsR3Jvd2x9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBBdXRvbG9naW5Sb3V0aW5nTW9kdWxlLEZvcm1zTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGUsR3Jvd2xNb2R1bGUsTWVzc2FnZXNNb2R1bGUsUGFzc3dvcmRNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0F1dG9sb2dpbkNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0F1dG9sb2dpbkNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbQXV0b0xvZ2luU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dG9sb2dpbk1vZHVsZSB7IH1cclxuIl19
