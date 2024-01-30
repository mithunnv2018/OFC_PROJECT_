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
var contactinfo_component_1 = require('./contactinfo.component');
var contactinfo_routing_module_1 = require('./contactinfo-routing.module');
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var primeng_3 = require('primeng/primeng');
var primeng_4 = require('primeng/primeng');
var primeng_5 = require('primeng/primeng');
var first_pipe_1 = require('../shared/pipes/first.pipe');
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var index_1 = require('../shared/contactinfo/index');
var forms_1 = require('@angular/forms');
var commonsettings_module_1 = require('../commonsettings/commonsettings.module');
var ContactinfoModule = (function () {
    function ContactinfoModule() {
    }
    ContactinfoModule = __decorate([
        core_1.NgModule({
            imports: [primeng_4.InputTextareaModule, primeng_2.MessagesModule, primeng_2.GrowlModule, common_1.CommonModule, contactinfo_routing_module_1.ContactinfoRoutingModule,
                primeng_1.DataTableModule, primeng_2.DialogModule, primeng_3.ButtonModule, primeng_1.DropdownModule, commonsettings_module_1.CommonsettingsModule,
                forms_1.FormsModule, forms_1.ReactiveFormsModule, primeng_1.PasswordModule, primeng_2.FileUploadModule, commonsettings_module_1.CommonsettingsModule,
                primeng_4.InputTextModule, primeng_5.CalendarModule],
            declarations: [contactinfo_component_1.ContactinfoComponent],
            exports: [contactinfo_component_1.ContactinfoComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, index_1.ContactinfoService]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactinfoModule);
    return ContactinfoModule;
}());
exports.ContactinfoModule = ContactinfoModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb250YWN0aW5mby9jb250YWN0aW5mby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxzQ0FBcUMseUJBQXlCLENBQUMsQ0FBQTtBQUMvRCwyQ0FBeUMsOEJBQThCLENBQUMsQ0FBQTtBQUV4RSx3QkFBNEQsaUJBQWlCLENBQUMsQ0FBQTtBQUM5RSx3QkFBdUUsaUJBQWlCLENBQUMsQ0FBQTtBQUN6Rix3QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3Qyx3QkFBa0QsaUJBQWlCLENBQUMsQ0FBQTtBQUNwRSx3QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQywyQkFBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUM1RCxrQ0FBNkIsbUNBQW1DLENBQUMsQ0FBQTtBQUNqRSxtQ0FBOEIsb0NBQW9DLENBQUMsQ0FBQTtBQUNuRSxzQkFBbUMsNkJBQTZCLENBQUMsQ0FBQTtBQUNqRSxzQkFBOEMsZ0JBQWdCLENBQUMsQ0FBQTtBQUMvRCxzQ0FBbUMseUNBQXlDLENBQUMsQ0FBQTtBQVU3RTtJQUFBO0lBQWlDLENBQUM7SUFUbEM7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyw2QkFBbUIsRUFBQyx3QkFBYyxFQUFDLHFCQUFXLEVBQUMscUJBQVksRUFBRSxxREFBd0I7Z0JBQy9GLHlCQUFlLEVBQUMsc0JBQVksRUFBQyxzQkFBWSxFQUFDLHdCQUFjLEVBQUMsNENBQW9CO2dCQUM3RSxtQkFBVyxFQUFDLDJCQUFtQixFQUFDLHdCQUFjLEVBQUMsMEJBQWdCLEVBQUMsNENBQW9CO2dCQUNwRix5QkFBZSxFQUFDLHdCQUFjLENBQUM7WUFDL0IsWUFBWSxFQUFFLENBQUMsNENBQW9CLENBQUM7WUFDcEMsT0FBTyxFQUFFLENBQUMsNENBQW9CLENBQUM7WUFDL0IsU0FBUyxFQUFFLENBQUMsMkJBQWMsRUFBQyxnQ0FBWSxFQUFDLGtDQUFhLEVBQUMsMEJBQWtCLENBQUM7U0FDMUUsQ0FBQzs7eUJBQUE7SUFDK0Isd0JBQUM7QUFBRCxDQUFqQyxBQUFrQyxJQUFBO0FBQXJCLHlCQUFpQixvQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9jb250YWN0aW5mby9jb250YWN0aW5mby5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDb250YWN0aW5mb0NvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdGluZm8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udGFjdGluZm9Sb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9jb250YWN0aW5mby1yb3V0aW5nLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQge0RhdGFUYWJsZU1vZHVsZSxEcm9wZG93bk1vZHVsZSxQYXNzd29yZE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtEaWFsb2dNb2R1bGUsRmlsZVVwbG9hZE1vZHVsZSxNZXNzYWdlc01vZHVsZSxHcm93bE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtCdXR0b25Nb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7SW5wdXRUZXh0TW9kdWxlLElucHV0VGV4dGFyZWFNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7Q2FsZW5kYXJNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZSc7XHJcbmltcG9ydCB7IENvbnRhY3RpbmZvU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9jb250YWN0aW5mby9pbmRleCc7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0NvbW1vbnNldHRpbmdzTW9kdWxlfSBmcm9tICcuLi9jb21tb25zZXR0aW5ncy9jb21tb25zZXR0aW5ncy5tb2R1bGUnO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtJbnB1dFRleHRhcmVhTW9kdWxlLE1lc3NhZ2VzTW9kdWxlLEdyb3dsTW9kdWxlLENvbW1vbk1vZHVsZSwgQ29udGFjdGluZm9Sb3V0aW5nTW9kdWxlLFxyXG4gIERhdGFUYWJsZU1vZHVsZSxEaWFsb2dNb2R1bGUsQnV0dG9uTW9kdWxlLERyb3Bkb3duTW9kdWxlLENvbW1vbnNldHRpbmdzTW9kdWxlLFxyXG4gIEZvcm1zTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGUsUGFzc3dvcmRNb2R1bGUsRmlsZVVwbG9hZE1vZHVsZSxDb21tb25zZXR0aW5nc01vZHVsZSxcclxuICBJbnB1dFRleHRNb2R1bGUsQ2FsZW5kYXJNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0NvbnRhY3RpbmZvQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQ29udGFjdGluZm9Db21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW015Q3VycmVuY3lQaXBlLE15RGF0ZUZvcm1hdCxFbWFpbFZhbGlkYXRlLENvbnRhY3RpbmZvU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRhY3RpbmZvTW9kdWxlIHsgfVxyXG4iXX0=
