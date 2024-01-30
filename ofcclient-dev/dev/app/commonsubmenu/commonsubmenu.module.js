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
var commonsubmenu_component_1 = require('./commonsubmenu.component');
var commonsubmenu_routing_module_1 = require('./commonsubmenu-routing.module');
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
var commonsubmenu_service_1 = require('../shared/commonsubmenu/commonsubmenu.service');
var CommonsubmenuModule = (function () {
    function CommonsubmenuModule() {
    }
    CommonsubmenuModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, commonsubmenu_routing_module_1.CommonsubmenuRoutingModule, forms_1.FormsModule, primeng_8.DropdownModule, primeng_9.CalendarModule, primeng_7.FileUploadModule, primeng_6.DataTableModule, forms_1.ReactiveFormsModule, primeng_5.InputTextModule, primeng_2.GrowlModule, primeng_4.ButtonModule, primeng_1.PanelModule, primeng_3.MessagesModule],
            declarations: [commonsubmenu_component_1.CommonsubmenuComponent],
            exports: [commonsubmenu_component_1.CommonsubmenuComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, commonsubmenu_service_1.CommonsubmenuService]
        }), 
        __metadata('design:paramtypes', [])
    ], CommonsubmenuModule);
    return CommonsubmenuModule;
}());
exports.CommonsubmenuModule = CommonsubmenuModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21tb25zdWJtZW51L2NvbW1vbnN1Ym1lbnUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msd0NBQXVDLDJCQUEyQixDQUFDLENBQUE7QUFDbkUsNkNBQTJDLGdDQUFnQyxDQUFDLENBQUE7QUFFNUUsd0JBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFDNUMsc0JBQThDLGdCQUFnQixDQUFDLENBQUE7QUFDL0Qsd0JBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFDNUMsd0JBQTJDLGlCQUFpQixDQUFDLENBQUE7QUFFN0Qsd0JBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0Msd0JBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsd0JBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsd0JBQStCLGlCQUFpQixDQUFDLENBQUE7QUFDakQsd0JBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msd0JBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFFL0MsMkJBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsa0NBQTZCLG1DQUFtQyxDQUFDLENBQUE7QUFHakUsbUNBQThCLG9DQUFvQyxDQUFDLENBQUE7QUFDbkUsc0NBQW1DLCtDQUErQyxDQUFDLENBQUE7QUFRbkY7SUFBQTtJQUFtQyxDQUFDO0lBTnBDO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBQyx5REFBMEIsRUFBQyxtQkFBVyxFQUFDLHdCQUFjLEVBQUMsd0JBQWMsRUFBQywwQkFBZ0IsRUFBQyx5QkFBZSxFQUFDLDJCQUFtQixFQUFDLHlCQUFlLEVBQUMscUJBQVcsRUFBQyxzQkFBWSxFQUFDLHFCQUFXLEVBQUMsd0JBQWMsQ0FBQztZQUNyTixZQUFZLEVBQUUsQ0FBQyxnREFBc0IsQ0FBQztZQUN0QyxPQUFPLEVBQUUsQ0FBQyxnREFBc0IsQ0FBQztZQUNqQyxTQUFTLEVBQUUsQ0FBQywyQkFBYyxFQUFDLGdDQUFZLEVBQUMsa0NBQWEsRUFBQyw0Q0FBb0IsQ0FBQztTQUM1RSxDQUFDOzsyQkFBQTtJQUNpQywwQkFBQztBQUFELENBQW5DLEFBQW9DLElBQUE7QUFBdkIsMkJBQW1CLHNCQUFJLENBQUEiLCJmaWxlIjoiYXBwL2NvbW1vbnN1Ym1lbnUvY29tbW9uc3VibWVudS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDb21tb25zdWJtZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21tb25zdWJtZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbW1vbnN1Ym1lbnVSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9jb21tb25zdWJtZW51LXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHtGb3JtR3JvdXAsRm9ybUNvbnRyb2wsVmFsaWRhdG9ycyxGb3JtQnVpbGRlcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXHJcbmltcG9ydCB7UGFuZWxNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0dyb3dsTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge01lc3NhZ2VzTW9kdWxlLE1lc3NhZ2UsR3Jvd2x9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0J1dHRvbk1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtJbnB1dFRleHRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7RGF0YVRhYmxlTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0ZpbGVVcGxvYWRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7RHJvcGRvd25Nb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7Q2FsZW5kYXJNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcblxyXG5pbXBvcnQgeyBNeUN1cnJlbmN5UGlwZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9maXJzdC5waXBlJztcclxuaW1wb3J0IHsgTXlEYXRlRm9ybWF0IH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL215ZGF0ZWZvcm1hdC5waXBlJztcclxuXHJcblxyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZSc7XHJcbmltcG9ydCB7Q29tbW9uc3VibWVudVNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9jb21tb25zdWJtZW51L2NvbW1vbnN1Ym1lbnUuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsQ29tbW9uc3VibWVudVJvdXRpbmdNb2R1bGUsRm9ybXNNb2R1bGUsRHJvcGRvd25Nb2R1bGUsQ2FsZW5kYXJNb2R1bGUsRmlsZVVwbG9hZE1vZHVsZSxEYXRhVGFibGVNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZSxJbnB1dFRleHRNb2R1bGUsR3Jvd2xNb2R1bGUsQnV0dG9uTW9kdWxlLFBhbmVsTW9kdWxlLE1lc3NhZ2VzTW9kdWxlXSwvLyxQYW5lbE1vZHVsZSxNZXNzYWdlc01vZHVsZSxHcm93bF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQ29tbW9uc3VibWVudUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0NvbW1vbnN1Ym1lbnVDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW015Q3VycmVuY3lQaXBlLE15RGF0ZUZvcm1hdCxFbWFpbFZhbGlkYXRlLENvbW1vbnN1Ym1lbnVTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tbW9uc3VibWVudU1vZHVsZSB7IH1cclxuIl19
