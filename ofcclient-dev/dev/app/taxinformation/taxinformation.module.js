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
var taxinformation_component_1 = require('./taxinformation.component');
var taxinformation_routing_module_1 = require('./taxinformation-routing.module');
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
var taxinformation_service_1 = require('../shared/taxinformation/taxinformation.service');
var commonbrowsetopskills_module_1 = require('../commonbrowsetopskills/commonbrowsetopskills.module');
var commonsettings_module_1 = require('../commonsettings/commonsettings.module');
var TaxinformationModule = (function () {
    function TaxinformationModule() {
    }
    TaxinformationModule = __decorate([
        core_1.NgModule({
            imports: [commonbrowsetopskills_module_1.CommonBrowseTopSkillsModule, common_1.CommonModule,
                taxinformation_routing_module_1.TaxinformationRoutingModule, forms_1.FormsModule, commonsettings_module_1.CommonsettingsModule,
                primeng_8.DropdownModule, primeng_9.CalendarModule, primeng_7.FileUploadModule, primeng_6.DataTableModule,
                forms_1.ReactiveFormsModule, primeng_5.InputTextModule, primeng_2.GrowlModule, primeng_4.ButtonModule, primeng_1.PanelModule, primeng_3.MessagesModule],
            declarations: [taxinformation_component_1.TaxinformationComponent],
            exports: [taxinformation_component_1.TaxinformationComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, taxinformation_service_1.TaxinformationService]
        }), 
        __metadata('design:paramtypes', [])
    ], TaxinformationModule);
    return TaxinformationModule;
}());
exports.TaxinformationModule = TaxinformationModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90YXhpbmZvcm1hdGlvbi90YXhpbmZvcm1hdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx5Q0FBd0MsNEJBQTRCLENBQUMsQ0FBQTtBQUNyRSw4Q0FBNEMsaUNBQWlDLENBQUMsQ0FBQTtBQUU5RSx3QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM1QyxzQkFBOEMsZ0JBQWdCLENBQUMsQ0FBQTtBQUMvRCx3QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM1Qyx3QkFBMkMsaUJBQWlCLENBQUMsQ0FBQTtBQUU3RCx3QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3Qyx3QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCx3QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCx3QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCx3QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx3QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQywyQkFBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUM1RCxrQ0FBNkIsbUNBQW1DLENBQUMsQ0FBQTtBQUVqRSxtQ0FBOEIsb0NBQW9DLENBQUMsQ0FBQTtBQUNuRSx1Q0FBb0MsaURBQWlELENBQUMsQ0FBQTtBQUN0Riw2Q0FBMEMsdURBQXVELENBQUMsQ0FBQTtBQUNsRyxzQ0FBbUMseUNBQXlDLENBQUMsQ0FBQTtBQVU3RTtJQUFBO0lBQW9DLENBQUM7SUFUckM7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQywwREFBMkIsRUFBQyxxQkFBWTtnQkFDbEQsMkRBQTJCLEVBQUMsbUJBQVcsRUFBQyw0Q0FBb0I7Z0JBQzVELHdCQUFjLEVBQUMsd0JBQWMsRUFBQywwQkFBZ0IsRUFBQyx5QkFBZTtnQkFDOUQsMkJBQW1CLEVBQUMseUJBQWUsRUFBQyxxQkFBVyxFQUFDLHNCQUFZLEVBQUMscUJBQVcsRUFBQyx3QkFBYyxDQUFDO1lBQ3hGLFlBQVksRUFBRSxDQUFDLGtEQUF1QixDQUFDO1lBQ3ZDLE9BQU8sRUFBRSxDQUFDLGtEQUF1QixDQUFDO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLDJCQUFjLEVBQUMsZ0NBQVksRUFBQyxrQ0FBYSxFQUFDLDhDQUFxQixDQUFDO1NBQzdFLENBQUM7OzRCQUFBO0lBQ2tDLDJCQUFDO0FBQUQsQ0FBcEMsQUFBcUMsSUFBQTtBQUF4Qiw0QkFBb0IsdUJBQUksQ0FBQSIsImZpbGUiOiJhcHAvdGF4aW5mb3JtYXRpb24vdGF4aW5mb3JtYXRpb24ubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVGF4aW5mb3JtYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3RheGluZm9ybWF0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRheGluZm9ybWF0aW9uUm91dGluZ01vZHVsZSB9IGZyb20gJy4vdGF4aW5mb3JtYXRpb24tcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cCxGb3JtQ29udHJvbCxWYWxpZGF0b3JzLEZvcm1CdWlsZGVyfSBmcm9tICdAYW5ndWxhci9mb3JtcydcclxuaW1wb3J0IHtQYW5lbE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7R3Jvd2xNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7TWVzc2FnZXNNb2R1bGUsTWVzc2FnZSxHcm93bH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7QnV0dG9uTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0lucHV0VGV4dE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtEYXRhVGFibGVNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7RmlsZVVwbG9hZE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtEcm9wZG93bk1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtDYWxlbmRhck1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuXHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5cclxuaW1wb3J0IHsgRW1haWxWYWxpZGF0ZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9lbWFpbHZhbGlkYXRlLnBpcGUnO1xyXG5pbXBvcnQge1RheGluZm9ybWF0aW9uU2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL3RheGluZm9ybWF0aW9uL3RheGluZm9ybWF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQge0NvbW1vbkJyb3dzZVRvcFNraWxsc01vZHVsZX0gZnJvbSAnLi4vY29tbW9uYnJvd3NldG9wc2tpbGxzL2NvbW1vbmJyb3dzZXRvcHNraWxscy5tb2R1bGUnO1xyXG5pbXBvcnQge0NvbW1vbnNldHRpbmdzTW9kdWxlfSBmcm9tICcuLi9jb21tb25zZXR0aW5ncy9jb21tb25zZXR0aW5ncy5tb2R1bGUnO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Ccm93c2VUb3BTa2lsbHNNb2R1bGUsQ29tbW9uTW9kdWxlLCBcclxuICBUYXhpbmZvcm1hdGlvblJvdXRpbmdNb2R1bGUsRm9ybXNNb2R1bGUsQ29tbW9uc2V0dGluZ3NNb2R1bGUsXHJcbiAgRHJvcGRvd25Nb2R1bGUsQ2FsZW5kYXJNb2R1bGUsRmlsZVVwbG9hZE1vZHVsZSxEYXRhVGFibGVNb2R1bGUsXHJcbiAgUmVhY3RpdmVGb3Jtc01vZHVsZSxJbnB1dFRleHRNb2R1bGUsR3Jvd2xNb2R1bGUsQnV0dG9uTW9kdWxlLFBhbmVsTW9kdWxlLE1lc3NhZ2VzTW9kdWxlXSwvLyxQYW5lbE1vZHVsZSxNZXNzYWdlc01vZHVsZSxHcm93bF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbVGF4aW5mb3JtYXRpb25Db21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtUYXhpbmZvcm1hdGlvbkNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbTXlDdXJyZW5jeVBpcGUsTXlEYXRlRm9ybWF0LEVtYWlsVmFsaWRhdGUsVGF4aW5mb3JtYXRpb25TZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGF4aW5mb3JtYXRpb25Nb2R1bGUgeyB9XHJcbiJdfQ==
