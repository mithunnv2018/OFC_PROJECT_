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
var notification_component_1 = require('./notification.component');
var notification_routing_module_1 = require('./notification-routing.module');
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var primeng_3 = require('primeng/primeng');
var primeng_4 = require('primeng/primeng');
var primeng_5 = require('primeng/primeng');
var first_pipe_1 = require('../shared/pipes/first.pipe');
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var index_1 = require('../shared/notification/index');
var forms_1 = require('@angular/forms');
var NotificationModule = (function () {
    function NotificationModule() {
    }
    NotificationModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, notification_routing_module_1.NotificationRoutingModule, primeng_1.DataTableModule, primeng_2.DialogModule, primeng_3.ButtonModule, primeng_1.DropdownModule,
                forms_1.FormsModule, forms_1.ReactiveFormsModule, primeng_1.PasswordModule, primeng_2.CheckboxModule,
                primeng_4.InputTextModule, primeng_5.CalendarModule],
            declarations: [notification_component_1.NotificationComponent],
            exports: [notification_component_1.NotificationComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, index_1.NotificationService]
        }), 
        __metadata('design:paramtypes', [])
    ], NotificationModule);
    return NotificationModule;
}());
exports.NotificationModule = NotificationModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHVDQUFzQywwQkFBMEIsQ0FBQyxDQUFBO0FBQ2pFLDRDQUEwQywrQkFBK0IsQ0FBQyxDQUFBO0FBRTFFLHdCQUE0RCxpQkFBaUIsQ0FBQyxDQUFBO0FBQzlFLHdCQUEwQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzVELHdCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHdCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHdCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDJCQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELGtDQUE2QixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ2pFLG1DQUE4QixvQ0FBb0MsQ0FBQyxDQUFBO0FBQ25FLHNCQUFvQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ25FLHNCQUE4QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBVS9EO0lBQUE7SUFBa0MsQ0FBQztJQVJuQztRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUsdURBQXlCLEVBQUMseUJBQWUsRUFBQyxzQkFBWSxFQUFDLHNCQUFZLEVBQUMsd0JBQWM7Z0JBQzFHLG1CQUFXLEVBQUMsMkJBQW1CLEVBQUMsd0JBQWMsRUFBQyx3QkFBYztnQkFDN0QseUJBQWUsRUFBQyx3QkFBYyxDQUFDO1lBQy9CLFlBQVksRUFBRSxDQUFDLDhDQUFxQixDQUFDO1lBQ3JDLE9BQU8sRUFBRSxDQUFDLDhDQUFxQixDQUFDO1lBQ2hDLFNBQVMsRUFBRSxDQUFDLDJCQUFjLEVBQUMsZ0NBQVksRUFBQyxrQ0FBYSxFQUFDLDJCQUFtQixDQUFDO1NBQzNFLENBQUM7OzBCQUFBO0lBQ2dDLHlCQUFDO0FBQUQsQ0FBbEMsQUFBbUMsSUFBQTtBQUF0QiwwQkFBa0IscUJBQUksQ0FBQSIsImZpbGUiOiJhcHAvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL25vdGlmaWNhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Sb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9ub3RpZmljYXRpb24tcm91dGluZy5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHtEYXRhVGFibGVNb2R1bGUsRHJvcGRvd25Nb2R1bGUsUGFzc3dvcmRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7RGlhbG9nTW9kdWxlLENoZWNrYm94TW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0J1dHRvbk1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtJbnB1dFRleHRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7Q2FsZW5kYXJNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbm90aWZpY2F0aW9uL2luZGV4JztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5vdGlmaWNhdGlvblJvdXRpbmdNb2R1bGUsRGF0YVRhYmxlTW9kdWxlLERpYWxvZ01vZHVsZSxCdXR0b25Nb2R1bGUsRHJvcGRvd25Nb2R1bGUsXHJcbiAgRm9ybXNNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZSxQYXNzd29yZE1vZHVsZSxDaGVja2JveE1vZHVsZSxcclxuICBJbnB1dFRleHRNb2R1bGUsQ2FsZW5kYXJNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW05vdGlmaWNhdGlvbkNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW05vdGlmaWNhdGlvbkNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbTXlDdXJyZW5jeVBpcGUsTXlEYXRlRm9ybWF0LEVtYWlsVmFsaWRhdGUsTm90aWZpY2F0aW9uU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbk1vZHVsZSB7IH1cclxuIl19
