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
var changepassword_component_1 = require('./changepassword.component');
var changepassword_routing_module_1 = require('./changepassword-routing.module');
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var primeng_3 = require('primeng/primeng');
var primeng_4 = require('primeng/primeng');
var primeng_5 = require('primeng/primeng');
var first_pipe_1 = require('../shared/pipes/first.pipe');
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var index_1 = require('../shared/changepassword/index');
var forms_1 = require('@angular/forms');
var commonsettings_module_1 = require('../commonsettings/commonsettings.module');
var ChangepasswordModule = (function () {
    function ChangepasswordModule() {
    }
    ChangepasswordModule = __decorate([
        core_1.NgModule({
            imports: [primeng_2.GrowlModule, primeng_2.MessagesModule, common_1.CommonModule, changepassword_routing_module_1.ChangepasswordRoutingModule, primeng_1.DataTableModule, primeng_2.DialogModule, primeng_3.ButtonModule, primeng_1.DropdownModule,
                forms_1.FormsModule, forms_1.ReactiveFormsModule, primeng_1.PasswordModule, commonsettings_module_1.CommonsettingsModule,
                primeng_4.InputTextModule, primeng_5.CalendarModule],
            declarations: [changepassword_component_1.ChangepasswordComponent],
            exports: [changepassword_component_1.ChangepasswordComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, index_1.ChangepasswordService]
        }), 
        __metadata('design:paramtypes', [])
    ], ChangepasswordModule);
    return ChangepasswordModule;
}());
exports.ChangepasswordModule = ChangepasswordModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jaGFuZ2VwYXNzd29yZC9jaGFuZ2VwYXNzd29yZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx5Q0FBd0MsNEJBQTRCLENBQUMsQ0FBQTtBQUNyRSw4Q0FBNEMsaUNBQWlDLENBQUMsQ0FBQTtBQUU5RSx3QkFBNEQsaUJBQWlCLENBQUMsQ0FBQTtBQUM5RSx3QkFBc0QsaUJBQWlCLENBQUMsQ0FBQTtBQUN4RSx3QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3Qyx3QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCx3QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQywyQkFBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUM1RCxrQ0FBNkIsbUNBQW1DLENBQUMsQ0FBQTtBQUNqRSxtQ0FBOEIsb0NBQW9DLENBQUMsQ0FBQTtBQUNuRSxzQkFBc0MsZ0NBQWdDLENBQUMsQ0FBQTtBQUN2RSxzQkFBOEMsZ0JBQWdCLENBQUMsQ0FBQTtBQUMvRCxzQ0FBbUMseUNBQXlDLENBQUMsQ0FBQTtBQVM3RTtJQUFBO0lBQW9DLENBQUM7SUFSckM7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBVyxFQUFDLHdCQUFjLEVBQUMscUJBQVksRUFBRSwyREFBMkIsRUFBQyx5QkFBZSxFQUFDLHNCQUFZLEVBQUMsc0JBQVksRUFBQyx3QkFBYztnQkFDdkksbUJBQVcsRUFBQywyQkFBbUIsRUFBQyx3QkFBYyxFQUFDLDRDQUFvQjtnQkFDbkUseUJBQWUsRUFBQyx3QkFBYyxDQUFDO1lBQy9CLFlBQVksRUFBRSxDQUFDLGtEQUF1QixDQUFDO1lBQ3ZDLE9BQU8sRUFBRSxDQUFDLGtEQUF1QixDQUFDO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLDJCQUFjLEVBQUMsZ0NBQVksRUFBQyxrQ0FBYSxFQUFDLDZCQUFxQixDQUFDO1NBQzdFLENBQUM7OzRCQUFBO0lBQ2tDLDJCQUFDO0FBQUQsQ0FBcEMsQUFBcUMsSUFBQTtBQUF4Qiw0QkFBb0IsdUJBQUksQ0FBQSIsImZpbGUiOiJhcHAvY2hhbmdlcGFzc3dvcmQvY2hhbmdlcGFzc3dvcmQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ2hhbmdlcGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL2NoYW5nZXBhc3N3b3JkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoYW5nZXBhc3N3b3JkUm91dGluZ01vZHVsZSB9IGZyb20gJy4vY2hhbmdlcGFzc3dvcmQtcm91dGluZy5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHtEYXRhVGFibGVNb2R1bGUsRHJvcGRvd25Nb2R1bGUsUGFzc3dvcmRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7RGlhbG9nTW9kdWxlLE1lc3NhZ2VzTW9kdWxlLEdyb3dsTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0J1dHRvbk1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtJbnB1dFRleHRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7Q2FsZW5kYXJNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZSc7XHJcbmltcG9ydCB7IENoYW5nZXBhc3N3b3JkU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9jaGFuZ2VwYXNzd29yZC9pbmRleCc7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0NvbW1vbnNldHRpbmdzTW9kdWxlfSBmcm9tICcuLi9jb21tb25zZXR0aW5ncy9jb21tb25zZXR0aW5ncy5tb2R1bGUnO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtHcm93bE1vZHVsZSxNZXNzYWdlc01vZHVsZSxDb21tb25Nb2R1bGUsIENoYW5nZXBhc3N3b3JkUm91dGluZ01vZHVsZSxEYXRhVGFibGVNb2R1bGUsRGlhbG9nTW9kdWxlLEJ1dHRvbk1vZHVsZSxEcm9wZG93bk1vZHVsZSxcclxuICBGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlLFBhc3N3b3JkTW9kdWxlLENvbW1vbnNldHRpbmdzTW9kdWxlLFxyXG4gIElucHV0VGV4dE1vZHVsZSxDYWxlbmRhck1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQ2hhbmdlcGFzc3dvcmRDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtDaGFuZ2VwYXNzd29yZENvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbTXlDdXJyZW5jeVBpcGUsTXlEYXRlRm9ybWF0LEVtYWlsVmFsaWRhdGUsQ2hhbmdlcGFzc3dvcmRTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlcGFzc3dvcmRNb2R1bGUgeyB9XHJcbiJdfQ==
