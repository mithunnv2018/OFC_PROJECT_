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
var privacypolicy_component_1 = require('./privacypolicy.component');
var privacypolicy_routing_module_1 = require('./privacypolicy-routing.module');
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
var privacypolicy_service_1 = require('../shared/privacypolicy/privacypolicy.service');
var PrivacyPolicyModule = (function () {
    function PrivacyPolicyModule() {
    }
    PrivacyPolicyModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, privacypolicy_routing_module_1.PrivacyPolicyRoutingModule, forms_1.FormsModule, primeng_8.DropdownModule, primeng_9.CalendarModule, primeng_7.FileUploadModule, primeng_6.DataTableModule, forms_1.ReactiveFormsModule, primeng_5.InputTextModule, primeng_2.GrowlModule,
                primeng_4.ButtonModule, primeng_1.PanelModule, primeng_3.MessagesModule, primeng_9.EditorModule, primeng_9.SharedModule],
            declarations: [privacypolicy_component_1.PrivacyPolicyComponent],
            exports: [privacypolicy_component_1.PrivacyPolicyComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, privacypolicy_service_1.PrivacyPolicyService]
        }), 
        __metadata('design:paramtypes', [])
    ], PrivacyPolicyModule);
    return PrivacyPolicyModule;
}());
exports.PrivacyPolicyModule = PrivacyPolicyModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcml2YWN5cG9saWN5L3ByaXZhY3lwb2xpY3kubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msd0NBQXVDLDJCQUEyQixDQUFDLENBQUE7QUFDbkUsNkNBQTJDLGdDQUFnQyxDQUFDLENBQUE7QUFFNUUsd0JBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFDNUMsc0JBQThDLGdCQUFnQixDQUFDLENBQUE7QUFDL0Qsd0JBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFDNUMsd0JBQTJDLGlCQUFpQixDQUFDLENBQUE7QUFFN0Qsd0JBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0Msd0JBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsd0JBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsd0JBQStCLGlCQUFpQixDQUFDLENBQUE7QUFDakQsd0JBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msd0JBQXVELGlCQUFpQixDQUFDLENBQUE7QUFFekUsMkJBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsa0NBQTZCLG1DQUFtQyxDQUFDLENBQUE7QUFDakUsbUNBQThCLG9DQUFvQyxDQUFDLENBQUE7QUFDbkUsc0NBQW1DLCtDQUErQyxDQUFDLENBQUE7QUFTbkY7SUFBQTtJQUFtQyxDQUFDO0lBUHBDO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSx5REFBMEIsRUFBQyxtQkFBVyxFQUFDLHdCQUFjLEVBQUMsd0JBQWMsRUFBQywwQkFBZ0IsRUFBQyx5QkFBZSxFQUFDLDJCQUFtQixFQUFDLHlCQUFlLEVBQUMscUJBQVc7Z0JBQzdLLHNCQUFZLEVBQUMscUJBQVcsRUFBQyx3QkFBYyxFQUFDLHNCQUFZLEVBQUMsc0JBQVksQ0FBQztZQUNsRSxZQUFZLEVBQUUsQ0FBQyxnREFBc0IsQ0FBQztZQUN0QyxPQUFPLEVBQUUsQ0FBQyxnREFBc0IsQ0FBQztZQUNqQyxTQUFTLEVBQUUsQ0FBQywyQkFBYyxFQUFDLGdDQUFZLEVBQUMsa0NBQWEsRUFBQyw0Q0FBb0IsQ0FBQztTQUM1RSxDQUFDOzsyQkFBQTtJQUNpQywwQkFBQztBQUFELENBQW5DLEFBQW9DLElBQUE7QUFBdkIsMkJBQW1CLHNCQUFJLENBQUEiLCJmaWxlIjoiYXBwL3ByaXZhY3lwb2xpY3kvcHJpdmFjeXBvbGljeS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBQcml2YWN5UG9saWN5Q29tcG9uZW50IH0gZnJvbSAnLi9wcml2YWN5cG9saWN5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByaXZhY3lQb2xpY3lSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9wcml2YWN5cG9saWN5LXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHtGb3JtR3JvdXAsRm9ybUNvbnRyb2wsVmFsaWRhdG9ycyxGb3JtQnVpbGRlcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXHJcbmltcG9ydCB7UGFuZWxNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0dyb3dsTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge01lc3NhZ2VzTW9kdWxlLE1lc3NhZ2UsR3Jvd2x9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0J1dHRvbk1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtJbnB1dFRleHRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7RGF0YVRhYmxlTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0ZpbGVVcGxvYWRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7RHJvcGRvd25Nb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7Q2FsZW5kYXJNb2R1bGUsRWRpdG9yTW9kdWxlLFNoYXJlZE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuXHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZSc7XHJcbmltcG9ydCB7UHJpdmFjeVBvbGljeVNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9wcml2YWN5cG9saWN5L3ByaXZhY3lwb2xpY3kuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFByaXZhY3lQb2xpY3lSb3V0aW5nTW9kdWxlLEZvcm1zTW9kdWxlLERyb3Bkb3duTW9kdWxlLENhbGVuZGFyTW9kdWxlLEZpbGVVcGxvYWRNb2R1bGUsRGF0YVRhYmxlTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGUsSW5wdXRUZXh0TW9kdWxlLEdyb3dsTW9kdWxlLFxyXG4gIEJ1dHRvbk1vZHVsZSxQYW5lbE1vZHVsZSxNZXNzYWdlc01vZHVsZSxFZGl0b3JNb2R1bGUsU2hhcmVkTW9kdWxlXSwvLyxQYW5lbE1vZHVsZSxNZXNzYWdlc01vZHVsZSxHcm93bF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbUHJpdmFjeVBvbGljeUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1ByaXZhY3lQb2xpY3lDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW015Q3VycmVuY3lQaXBlLE15RGF0ZUZvcm1hdCxFbWFpbFZhbGlkYXRlLFByaXZhY3lQb2xpY3lTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJpdmFjeVBvbGljeU1vZHVsZSB7IH1cclxuIl19
