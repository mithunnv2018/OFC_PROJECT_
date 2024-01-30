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
var securityquestion_component_1 = require('./securityquestion.component');
var securityquestion_routing_module_1 = require('./securityquestion-routing.module');
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var primeng_3 = require('primeng/primeng');
var primeng_4 = require('primeng/primeng');
var primeng_5 = require('primeng/primeng');
var first_pipe_1 = require('../shared/pipes/first.pipe');
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var index_1 = require('../shared/securityquestion/index');
var forms_1 = require('@angular/forms');
var commonsettings_module_1 = require('../commonsettings/commonsettings.module');
var SecurityquestionModule = (function () {
    function SecurityquestionModule() {
    }
    SecurityquestionModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, securityquestion_routing_module_1.SecurityquestionRoutingModule, primeng_1.DataTableModule, primeng_2.DialogModule,
                primeng_3.ButtonModule, primeng_1.DropdownModule, commonsettings_module_1.CommonsettingsModule,
                forms_1.FormsModule, forms_1.ReactiveFormsModule, primeng_1.PasswordModule, primeng_2.CheckboxModule, primeng_1.MessagesModule,
                primeng_4.InputTextModule, primeng_5.CalendarModule, primeng_5.GrowlModule],
            declarations: [securityquestion_component_1.SecurityquestionComponent],
            exports: [securityquestion_component_1.SecurityquestionComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, index_1.SecurityquestionService]
        }), 
        __metadata('design:paramtypes', [])
    ], SecurityquestionModule);
    return SecurityquestionModule;
}());
exports.SecurityquestionModule = SecurityquestionModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZWN1cml0eXF1ZXN0aW9uL3NlY3VyaXR5cXVlc3Rpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsMkNBQTBDLDhCQUE4QixDQUFDLENBQUE7QUFDekUsZ0RBQThDLG1DQUFtQyxDQUFDLENBQUE7QUFFbEYsd0JBQTRFLGlCQUFpQixDQUFDLENBQUE7QUFDOUYsd0JBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFDNUQsd0JBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0Msd0JBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsd0JBQXlDLGlCQUFpQixDQUFDLENBQUE7QUFDM0QsMkJBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsa0NBQTZCLG1DQUFtQyxDQUFDLENBQUE7QUFDakUsbUNBQThCLG9DQUFvQyxDQUFDLENBQUE7QUFDbkUsc0JBQXdDLGtDQUFrQyxDQUFDLENBQUE7QUFDM0Usc0JBQThDLGdCQUFnQixDQUFDLENBQUE7QUFDL0Qsc0NBQW1DLHlDQUF5QyxDQUFDLENBQUE7QUFVN0U7SUFBQTtJQUFzQyxDQUFDO0lBVHZDO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSwrREFBNkIsRUFBQyx5QkFBZSxFQUFDLHNCQUFZO2dCQUNsRixzQkFBWSxFQUFDLHdCQUFjLEVBQUMsNENBQW9CO2dCQUNoRCxtQkFBVyxFQUFDLDJCQUFtQixFQUFDLHdCQUFjLEVBQUMsd0JBQWMsRUFBQyx3QkFBYztnQkFDNUUseUJBQWUsRUFBQyx3QkFBYyxFQUFDLHFCQUFXLENBQUM7WUFDM0MsWUFBWSxFQUFFLENBQUMsc0RBQXlCLENBQUM7WUFDekMsT0FBTyxFQUFFLENBQUMsc0RBQXlCLENBQUM7WUFDcEMsU0FBUyxFQUFFLENBQUMsMkJBQWMsRUFBQyxnQ0FBWSxFQUFDLGtDQUFhLEVBQUMsK0JBQXVCLENBQUM7U0FDL0UsQ0FBQzs7OEJBQUE7SUFDb0MsNkJBQUM7QUFBRCxDQUF0QyxBQUF1QyxJQUFBO0FBQTFCLDhCQUFzQix5QkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9zZWN1cml0eXF1ZXN0aW9uL3NlY3VyaXR5cXVlc3Rpb24ubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU2VjdXJpdHlxdWVzdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vc2VjdXJpdHlxdWVzdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWN1cml0eXF1ZXN0aW9uUm91dGluZ01vZHVsZSB9IGZyb20gJy4vc2VjdXJpdHlxdWVzdGlvbi1yb3V0aW5nLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQge0RhdGFUYWJsZU1vZHVsZSxEcm9wZG93bk1vZHVsZSxQYXNzd29yZE1vZHVsZSwgTWVzc2FnZXNNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7RGlhbG9nTW9kdWxlLENoZWNrYm94TW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0J1dHRvbk1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtJbnB1dFRleHRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7Q2FsZW5kYXJNb2R1bGUsR3Jvd2xNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZSc7XHJcbmltcG9ydCB7IFNlY3VyaXR5cXVlc3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlY3VyaXR5cXVlc3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtDb21tb25zZXR0aW5nc01vZHVsZX0gZnJvbSAnLi4vY29tbW9uc2V0dGluZ3MvY29tbW9uc2V0dGluZ3MubW9kdWxlJztcclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTZWN1cml0eXF1ZXN0aW9uUm91dGluZ01vZHVsZSxEYXRhVGFibGVNb2R1bGUsRGlhbG9nTW9kdWxlLFxyXG4gIEJ1dHRvbk1vZHVsZSxEcm9wZG93bk1vZHVsZSxDb21tb25zZXR0aW5nc01vZHVsZSxcclxuICBGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlLFBhc3N3b3JkTW9kdWxlLENoZWNrYm94TW9kdWxlLE1lc3NhZ2VzTW9kdWxlLFxyXG4gIElucHV0VGV4dE1vZHVsZSxDYWxlbmRhck1vZHVsZSxHcm93bE1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbU2VjdXJpdHlxdWVzdGlvbkNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1NlY3VyaXR5cXVlc3Rpb25Db21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW015Q3VycmVuY3lQaXBlLE15RGF0ZUZvcm1hdCxFbWFpbFZhbGlkYXRlLFNlY3VyaXR5cXVlc3Rpb25TZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlxdWVzdGlvbk1vZHVsZSB7IH1cclxuIl19
