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
var workallocation_component_1 = require('./workallocation.component');
var workallocation_routing_module_1 = require('./workallocation-routing.module');
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
var commonbrowsetopskills_module_1 = require('../commonbrowsetopskills/commonbrowsetopskills.module');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var workallocation_service_1 = require('../shared/workallocation/workallocation.service');
var commonsettings_module_1 = require('../commonsettings/commonsettings.module');
var WorkallocationModule = (function () {
    function WorkallocationModule() {
    }
    WorkallocationModule = __decorate([
        core_1.NgModule({
            imports: [commonbrowsetopskills_module_1.CommonBrowseTopSkillsModule, common_1.CommonModule, workallocation_routing_module_1.WorkallocationRoutingModule, forms_1.FormsModule,
                primeng_8.DropdownModule, primeng_9.CalendarModule, primeng_7.FileUploadModule, primeng_6.DataTableModule, commonsettings_module_1.CommonsettingsModule,
                forms_1.ReactiveFormsModule, primeng_5.InputTextModule, primeng_2.GrowlModule, primeng_4.ButtonModule, primeng_1.PanelModule, primeng_3.MessagesModule],
            declarations: [workallocation_component_1.WorkallocationComponent],
            exports: [workallocation_component_1.WorkallocationComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, workallocation_service_1.WorkallocationService]
        }), 
        __metadata('design:paramtypes', [])
    ], WorkallocationModule);
    return WorkallocationModule;
}());
exports.WorkallocationModule = WorkallocationModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93b3JrYWxsb2NhdGlvbi93b3JrYWxsb2NhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx5Q0FBd0MsNEJBQTRCLENBQUMsQ0FBQTtBQUNyRSw4Q0FBNEMsaUNBQWlDLENBQUMsQ0FBQTtBQUU5RSx3QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM1QyxzQkFBOEMsZ0JBQWdCLENBQUMsQ0FBQTtBQUMvRCx3QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM1Qyx3QkFBMkMsaUJBQWlCLENBQUMsQ0FBQTtBQUU3RCx3QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3Qyx3QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCx3QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCx3QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCx3QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx3QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQywyQkFBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUM1RCxrQ0FBNkIsbUNBQW1DLENBQUMsQ0FBQTtBQUVqRSw2Q0FBMEMsdURBQXVELENBQUMsQ0FBQTtBQUVsRyxtQ0FBOEIsb0NBQW9DLENBQUMsQ0FBQTtBQUNuRSx1Q0FBb0MsaURBQWlELENBQUMsQ0FBQTtBQUN0RixzQ0FBbUMseUNBQXlDLENBQUMsQ0FBQTtBQVM3RTtJQUFBO0lBQW9DLENBQUM7SUFSckM7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQywwREFBMkIsRUFBQyxxQkFBWSxFQUFFLDJEQUEyQixFQUFDLG1CQUFXO2dCQUMzRix3QkFBYyxFQUFDLHdCQUFjLEVBQUMsMEJBQWdCLEVBQUMseUJBQWUsRUFBQyw0Q0FBb0I7Z0JBQ25GLDJCQUFtQixFQUFDLHlCQUFlLEVBQUMscUJBQVcsRUFBQyxzQkFBWSxFQUFDLHFCQUFXLEVBQUMsd0JBQWMsQ0FBQztZQUN4RixZQUFZLEVBQUUsQ0FBQyxrREFBdUIsQ0FBQztZQUN2QyxPQUFPLEVBQUUsQ0FBQyxrREFBdUIsQ0FBQztZQUNsQyxTQUFTLEVBQUUsQ0FBQywyQkFBYyxFQUFDLGdDQUFZLEVBQUMsa0NBQWEsRUFBQyw4Q0FBcUIsQ0FBQztTQUM3RSxDQUFDOzs0QkFBQTtJQUNrQywyQkFBQztBQUFELENBQXBDLEFBQXFDLElBQUE7QUFBeEIsNEJBQW9CLHVCQUFJLENBQUEiLCJmaWxlIjoiYXBwL3dvcmthbGxvY2F0aW9uL3dvcmthbGxvY2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFdvcmthbGxvY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi93b3JrYWxsb2NhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXb3JrYWxsb2NhdGlvblJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3dvcmthbGxvY2F0aW9uLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHtGb3JtR3JvdXAsRm9ybUNvbnRyb2wsVmFsaWRhdG9ycyxGb3JtQnVpbGRlcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXHJcbmltcG9ydCB7UGFuZWxNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0dyb3dsTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge01lc3NhZ2VzTW9kdWxlLE1lc3NhZ2UsR3Jvd2x9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0J1dHRvbk1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtJbnB1dFRleHRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7RGF0YVRhYmxlTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0ZpbGVVcGxvYWRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7RHJvcGRvd25Nb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7Q2FsZW5kYXJNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcblxyXG5pbXBvcnQgeyBNeUN1cnJlbmN5UGlwZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9maXJzdC5waXBlJztcclxuaW1wb3J0IHsgTXlEYXRlRm9ybWF0IH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL215ZGF0ZWZvcm1hdC5waXBlJztcclxuXHJcbmltcG9ydCB7Q29tbW9uQnJvd3NlVG9wU2tpbGxzTW9kdWxlfSBmcm9tICcuLi9jb21tb25icm93c2V0b3Bza2lsbHMvY29tbW9uYnJvd3NldG9wc2tpbGxzLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZSc7XHJcbmltcG9ydCB7V29ya2FsbG9jYXRpb25TZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvd29ya2FsbG9jYXRpb24vd29ya2FsbG9jYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7Q29tbW9uc2V0dGluZ3NNb2R1bGV9IGZyb20gJy4uL2NvbW1vbnNldHRpbmdzL2NvbW1vbnNldHRpbmdzLm1vZHVsZSc7XHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbkJyb3dzZVRvcFNraWxsc01vZHVsZSxDb21tb25Nb2R1bGUsIFdvcmthbGxvY2F0aW9uUm91dGluZ01vZHVsZSxGb3Jtc01vZHVsZSxcclxuICBEcm9wZG93bk1vZHVsZSxDYWxlbmRhck1vZHVsZSxGaWxlVXBsb2FkTW9kdWxlLERhdGFUYWJsZU1vZHVsZSxDb21tb25zZXR0aW5nc01vZHVsZSxcclxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLElucHV0VGV4dE1vZHVsZSxHcm93bE1vZHVsZSxCdXR0b25Nb2R1bGUsUGFuZWxNb2R1bGUsTWVzc2FnZXNNb2R1bGVdLC8vLFBhbmVsTW9kdWxlLE1lc3NhZ2VzTW9kdWxlLEdyb3dsXSxcclxuICBkZWNsYXJhdGlvbnM6IFtXb3JrYWxsb2NhdGlvbkNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1dvcmthbGxvY2F0aW9uQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtNeUN1cnJlbmN5UGlwZSxNeURhdGVGb3JtYXQsRW1haWxWYWxpZGF0ZSxXb3JrYWxsb2NhdGlvblNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXb3JrYWxsb2NhdGlvbk1vZHVsZSB7IH1cclxuIl19
