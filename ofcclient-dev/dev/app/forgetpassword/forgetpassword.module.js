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
var forgetpassword_component_1 = require('./forgetpassword.component');
var forgetpassword_routing_module_1 = require('./forgetpassword-routing.module');
var primeng_1 = require('primeng/primeng');
var forms_1 = require('@angular/forms');
var primeng_2 = require('primeng/primeng');
var primeng_3 = require('primeng/primeng');
var primeng_4 = require('primeng/primeng');
var primeng_5 = require('primeng/primeng');
var primeng_6 = require('primeng/primeng');
var primeng_7 = require('primeng/primeng');
var primeng_8 = require('primeng/primeng');
var primeng_9 = require('primeng/primeng');
var first_pipe_1 = require('../shared/pipes/first.pipe');
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var forgetpassword_service_1 = require('../shared/forgetpassword/forgetpassword.service');
var ForgetPasswordModule = (function () {
    function ForgetPasswordModule() {
    }
    ForgetPasswordModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forgetpassword_routing_module_1.ForgetPasswordRoutingModule, forms_1.FormsModule, primeng_8.DropdownModule, primeng_9.CalendarModule, primeng_7.FileUploadModule, primeng_6.DataTableModule, forms_1.ReactiveFormsModule, primeng_5.InputTextModule, primeng_2.GrowlModule, primeng_4.ButtonModule, primeng_1.PanelModule, primeng_3.MessagesModule],
            declarations: [forgetpassword_component_1.ForgetPasswordComponent],
            exports: [forgetpassword_component_1.ForgetPasswordComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, forgetpassword_service_1.ForgetPasswordService]
        }), 
        __metadata('design:paramtypes', [])
    ], ForgetPasswordModule);
    return ForgetPasswordModule;
}());
exports.ForgetPasswordModule = ForgetPasswordModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mb3JnZXRwYXNzd29yZC9mb3JnZXRwYXNzd29yZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx5Q0FBd0MsNEJBQTRCLENBQUMsQ0FBQTtBQUNyRSw4Q0FBNEMsaUNBQWlDLENBQUMsQ0FBQTtBQUU5RSx3QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM1QyxzQkFBOEMsZ0JBQWdCLENBQUMsQ0FBQTtBQUMvRCx3QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM1Qyx3QkFBMkMsaUJBQWlCLENBQUMsQ0FBQTtBQUU3RCx3QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3Qyx3QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCx3QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCx3QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCx3QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx3QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQywyQkFBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUM1RCxrQ0FBNkIsbUNBQW1DLENBQUMsQ0FBQTtBQUdqRSxtQ0FBOEIsb0NBQW9DLENBQUMsQ0FBQTtBQUNuRSx1Q0FBb0MsaURBQWlELENBQUMsQ0FBQTtBQVF0RjtJQUFBO0lBQW9DLENBQUM7SUFOckM7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLDJEQUEyQixFQUFDLG1CQUFXLEVBQUMsd0JBQWMsRUFBQyx3QkFBYyxFQUFDLDBCQUFnQixFQUFDLHlCQUFlLEVBQUMsMkJBQW1CLEVBQUMseUJBQWUsRUFBQyxxQkFBVyxFQUFDLHNCQUFZLEVBQUMscUJBQVcsRUFBQyx3QkFBYyxDQUFDO1lBQ3ZOLFlBQVksRUFBRSxDQUFDLGtEQUF1QixDQUFDO1lBQ3ZDLE9BQU8sRUFBRSxDQUFDLGtEQUF1QixDQUFDO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLDJCQUFjLEVBQUMsZ0NBQVksRUFBQyxrQ0FBYSxFQUFDLDhDQUFxQixDQUFDO1NBQzdFLENBQUM7OzRCQUFBO0lBQ2tDLDJCQUFDO0FBQUQsQ0FBcEMsQUFBcUMsSUFBQTtBQUF4Qiw0QkFBb0IsdUJBQUksQ0FBQSIsImZpbGUiOiJhcHAvZm9yZ2V0cGFzc3dvcmQvZm9yZ2V0cGFzc3dvcmQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9yZ2V0UGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL2ZvcmdldHBhc3N3b3JkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcmdldFBhc3N3b3JkUm91dGluZ01vZHVsZSB9IGZyb20gJy4vZm9yZ2V0cGFzc3dvcmQtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cCxGb3JtQ29udHJvbCxWYWxpZGF0b3JzLEZvcm1CdWlsZGVyfSBmcm9tICdAYW5ndWxhci9mb3JtcydcclxuaW1wb3J0IHtQYW5lbE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7R3Jvd2xNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7TWVzc2FnZXNNb2R1bGUsTWVzc2FnZSxHcm93bH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7QnV0dG9uTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0lucHV0VGV4dE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtEYXRhVGFibGVNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7RmlsZVVwbG9hZE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtEcm9wZG93bk1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtDYWxlbmRhck1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuXHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5cclxuXHJcbmltcG9ydCB7IEVtYWlsVmFsaWRhdGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZW1haWx2YWxpZGF0ZS5waXBlJztcclxuaW1wb3J0IHtGb3JnZXRQYXNzd29yZFNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9mb3JnZXRwYXNzd29yZC9mb3JnZXRwYXNzd29yZC5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9yZ2V0UGFzc3dvcmRSb3V0aW5nTW9kdWxlLEZvcm1zTW9kdWxlLERyb3Bkb3duTW9kdWxlLENhbGVuZGFyTW9kdWxlLEZpbGVVcGxvYWRNb2R1bGUsRGF0YVRhYmxlTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGUsSW5wdXRUZXh0TW9kdWxlLEdyb3dsTW9kdWxlLEJ1dHRvbk1vZHVsZSxQYW5lbE1vZHVsZSxNZXNzYWdlc01vZHVsZV0sLy8sUGFuZWxNb2R1bGUsTWVzc2FnZXNNb2R1bGUsR3Jvd2xdLFxyXG4gIGRlY2xhcmF0aW9uczogW0ZvcmdldFBhc3N3b3JkQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbRm9yZ2V0UGFzc3dvcmRDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW015Q3VycmVuY3lQaXBlLE15RGF0ZUZvcm1hdCxFbWFpbFZhbGlkYXRlLEZvcmdldFBhc3N3b3JkU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcmdldFBhc3N3b3JkTW9kdWxlIHsgfVxyXG4iXX0=
