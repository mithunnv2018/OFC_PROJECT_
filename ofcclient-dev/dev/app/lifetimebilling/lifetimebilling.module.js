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
var lifetimebilling_component_1 = require('./lifetimebilling.component');
var lifetimebilling_routing_module_1 = require('./lifetimebilling-routing.module');
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var primeng_3 = require('primeng/primeng');
var primeng_4 = require('primeng/primeng');
var primeng_5 = require('primeng/primeng');
var first_pipe_1 = require('../shared/pipes/first.pipe');
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var index_1 = require('../shared/lifetimebilling/index');
var forms_1 = require('@angular/forms');
var LifetimebillingModule = (function () {
    function LifetimebillingModule() {
    }
    LifetimebillingModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, lifetimebilling_routing_module_1.LifetimebillingRoutingModule, primeng_1.DataTableModule, primeng_2.DialogModule, primeng_3.ButtonModule, primeng_1.DropdownModule,
                forms_1.FormsModule, forms_1.ReactiveFormsModule, primeng_1.PasswordModule, primeng_2.CheckboxModule,
                primeng_4.InputTextModule, primeng_5.CalendarModule],
            declarations: [lifetimebilling_component_1.LifetimebillingComponent],
            exports: [lifetimebilling_component_1.LifetimebillingComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, index_1.LifetimebillingService]
        }), 
        __metadata('design:paramtypes', [])
    ], LifetimebillingModule);
    return LifetimebillingModule;
}());
exports.LifetimebillingModule = LifetimebillingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9saWZldGltZWJpbGxpbmcvbGlmZXRpbWViaWxsaW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDBDQUF5Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3ZFLCtDQUE2QyxrQ0FBa0MsQ0FBQyxDQUFBO0FBRWhGLHdCQUE0RCxpQkFBaUIsQ0FBQyxDQUFBO0FBQzlFLHdCQUEwQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzVELHdCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHdCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHdCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDJCQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELGtDQUE2QixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ2pFLG1DQUE4QixvQ0FBb0MsQ0FBQyxDQUFBO0FBQ25FLHNCQUF1QyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ3pFLHNCQUE4QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBVS9EO0lBQUE7SUFBcUMsQ0FBQztJQVJ0QztRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUsNkRBQTRCLEVBQUMseUJBQWUsRUFBQyxzQkFBWSxFQUFDLHNCQUFZLEVBQUMsd0JBQWM7Z0JBQzdHLG1CQUFXLEVBQUMsMkJBQW1CLEVBQUMsd0JBQWMsRUFBQyx3QkFBYztnQkFDN0QseUJBQWUsRUFBQyx3QkFBYyxDQUFDO1lBQy9CLFlBQVksRUFBRSxDQUFDLG9EQUF3QixDQUFDO1lBQ3hDLE9BQU8sRUFBRSxDQUFDLG9EQUF3QixDQUFDO1lBQ25DLFNBQVMsRUFBRSxDQUFDLDJCQUFjLEVBQUMsZ0NBQVksRUFBQyxrQ0FBYSxFQUFDLDhCQUFzQixDQUFDO1NBQzlFLENBQUM7OzZCQUFBO0lBQ21DLDRCQUFDO0FBQUQsQ0FBckMsQUFBc0MsSUFBQTtBQUF6Qiw2QkFBcUIsd0JBQUksQ0FBQSIsImZpbGUiOiJhcHAvbGlmZXRpbWViaWxsaW5nL2xpZmV0aW1lYmlsbGluZy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBMaWZldGltZWJpbGxpbmdDb21wb25lbnQgfSBmcm9tICcuL2xpZmV0aW1lYmlsbGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaWZldGltZWJpbGxpbmdSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9saWZldGltZWJpbGxpbmctcm91dGluZy5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHtEYXRhVGFibGVNb2R1bGUsRHJvcGRvd25Nb2R1bGUsUGFzc3dvcmRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7RGlhbG9nTW9kdWxlLENoZWNrYm94TW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0J1dHRvbk1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtJbnB1dFRleHRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7Q2FsZW5kYXJNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZSc7XHJcbmltcG9ydCB7IExpZmV0aW1lYmlsbGluZ1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbGlmZXRpbWViaWxsaW5nL2luZGV4JztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIExpZmV0aW1lYmlsbGluZ1JvdXRpbmdNb2R1bGUsRGF0YVRhYmxlTW9kdWxlLERpYWxvZ01vZHVsZSxCdXR0b25Nb2R1bGUsRHJvcGRvd25Nb2R1bGUsXHJcbiAgRm9ybXNNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZSxQYXNzd29yZE1vZHVsZSxDaGVja2JveE1vZHVsZSxcclxuICBJbnB1dFRleHRNb2R1bGUsQ2FsZW5kYXJNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0xpZmV0aW1lYmlsbGluZ0NvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0xpZmV0aW1lYmlsbGluZ0NvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbTXlDdXJyZW5jeVBpcGUsTXlEYXRlRm9ybWF0LEVtYWlsVmFsaWRhdGUsTGlmZXRpbWViaWxsaW5nU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpZmV0aW1lYmlsbGluZ01vZHVsZSB7IH1cclxuIl19
