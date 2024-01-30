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
var joblist_component_1 = require('./joblist.component');
var joblist_routing_module_1 = require('./joblist-routing.module');
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var first_pipe_1 = require('../shared/pipes/first.pipe');
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var index_1 = require('../shared/joblist/index');
var forms_1 = require('@angular/forms');
var commonsubmenu_module_1 = require('../commonsubmenu/commonsubmenu.module');
var JoblistModule = (function () {
    function JoblistModule() {
    }
    JoblistModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, joblist_routing_module_1.JoblistRoutingModule, primeng_1.DataTableModule, primeng_1.DialogModule,
                primeng_1.DataListModule, primeng_1.ButtonModule, primeng_1.DropdownModule, primeng_2.RatingModule,
                forms_1.FormsModule, forms_1.ReactiveFormsModule, primeng_2.CheckboxModule,
                primeng_1.InputTextModule, primeng_2.CalendarModule, commonsubmenu_module_1.CommonsubmenuModule],
            declarations: [joblist_component_1.JoblistComponent],
            exports: [joblist_component_1.JoblistComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, index_1.JoblistService]
        }), 
        __metadata('design:paramtypes', [])
    ], JoblistModule);
    return JoblistModule;
}());
exports.JoblistModule = JoblistModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9qb2JsaXN0L2pvYmxpc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msa0NBQWlDLHFCQUFxQixDQUFDLENBQUE7QUFDdkQsdUNBQXFDLDBCQUEwQixDQUFDLENBQUE7QUFDaEUsd0JBQXVHLGlCQUFpQixDQUFDLENBQUE7QUFDekgsd0JBQTBELGlCQUFpQixDQUFDLENBQUE7QUFDNUUsMkJBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsa0NBQTZCLG1DQUFtQyxDQUFDLENBQUE7QUFDakUsbUNBQThCLG9DQUFvQyxDQUFDLENBQUE7QUFDbkUsc0JBQStCLHlCQUF5QixDQUFDLENBQUE7QUFDekQsc0JBQThDLGdCQUFnQixDQUFDLENBQUE7QUFDL0QscUNBQWtDLHVDQUF1QyxDQUFDLENBQUE7QUFXMUU7SUFBQTtJQUE2QixDQUFDO0lBVDlCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSw2Q0FBb0IsRUFBQyx5QkFBZSxFQUFDLHNCQUFZO2dCQUN6RSx3QkFBYyxFQUFDLHNCQUFZLEVBQUMsd0JBQWMsRUFBQyxzQkFBWTtnQkFDdkQsbUJBQVcsRUFBQywyQkFBbUIsRUFBQyx3QkFBYztnQkFDOUMseUJBQWUsRUFBQyx3QkFBYyxFQUFDLDBDQUFtQixDQUFDO1lBQ25ELFlBQVksRUFBRSxDQUFDLG9DQUFnQixDQUFDO1lBQ2hDLE9BQU8sRUFBRSxDQUFDLG9DQUFnQixDQUFDO1lBQzNCLFNBQVMsRUFBRSxDQUFDLDJCQUFjLEVBQUMsZ0NBQVksRUFBQyxrQ0FBYSxFQUFDLHNCQUFjLENBQUM7U0FDdEUsQ0FBQzs7cUJBQUE7SUFDMkIsb0JBQUM7QUFBRCxDQUE3QixBQUE4QixJQUFBO0FBQWpCLHFCQUFhLGdCQUFJLENBQUEiLCJmaWxlIjoiYXBwL2pvYmxpc3Qvam9ibGlzdC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBKb2JsaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9qb2JsaXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEpvYmxpc3RSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9qb2JsaXN0LXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgRGF0YUxpc3RNb2R1bGUsRGF0YVRhYmxlTW9kdWxlLERyb3Bkb3duTW9kdWxlLERpYWxvZ01vZHVsZSxCdXR0b25Nb2R1bGUsSW5wdXRUZXh0TW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBDYWxlbmRhck1vZHVsZSxSYXRpbmdNb2R1bGUsQ2hlY2tib3hNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZSc7XHJcbmltcG9ydCB7IEpvYmxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2pvYmxpc3QvaW5kZXgnO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtDb21tb25zdWJtZW51TW9kdWxlfSBmcm9tICcuLi9jb21tb25zdWJtZW51L2NvbW1vbnN1Ym1lbnUubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSm9ibGlzdFJvdXRpbmdNb2R1bGUsRGF0YVRhYmxlTW9kdWxlLERpYWxvZ01vZHVsZSxcclxuICBEYXRhTGlzdE1vZHVsZSxCdXR0b25Nb2R1bGUsRHJvcGRvd25Nb2R1bGUsUmF0aW5nTW9kdWxlLFxyXG4gIEZvcm1zTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGUsQ2hlY2tib3hNb2R1bGUsXHJcbiAgSW5wdXRUZXh0TW9kdWxlLENhbGVuZGFyTW9kdWxlLENvbW1vbnN1Ym1lbnVNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0pvYmxpc3RDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtKb2JsaXN0Q29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtNeUN1cnJlbmN5UGlwZSxNeURhdGVGb3JtYXQsRW1haWxWYWxpZGF0ZSxKb2JsaXN0U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEpvYmxpc3RNb2R1bGUgeyB9XHJcbiJdfQ==
