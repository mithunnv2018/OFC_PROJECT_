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
var jobproposal_component_1 = require('./jobproposal.component');
var jobproposal_routing_module_1 = require('./jobproposal-routing.module');
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
var jobproposal_service_1 = require('../shared/jobproposal/jobproposal.service');
var commonbrowsetopskills_module_1 = require('../commonbrowsetopskills/commonbrowsetopskills.module');
var JobproposalModule = (function () {
    function JobproposalModule() {
    }
    JobproposalModule = __decorate([
        core_1.NgModule({
            imports: [commonbrowsetopskills_module_1.CommonBrowseTopSkillsModule, common_1.CommonModule, jobproposal_routing_module_1.JobproposalRoutingModule, forms_1.FormsModule, primeng_8.DropdownModule, primeng_9.CalendarModule, primeng_7.FileUploadModule, primeng_6.DataTableModule, forms_1.ReactiveFormsModule, primeng_5.InputTextModule, primeng_2.GrowlModule, primeng_4.ButtonModule, primeng_1.PanelModule, primeng_3.MessagesModule],
            declarations: [jobproposal_component_1.JobproposalComponent],
            exports: [jobproposal_component_1.JobproposalComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, jobproposal_service_1.JobproposalService]
        }), 
        __metadata('design:paramtypes', [])
    ], JobproposalModule);
    return JobproposalModule;
}());
exports.JobproposalModule = JobproposalModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9qb2Jwcm9wb3NhbC9qb2Jwcm9wb3NhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxzQ0FBcUMseUJBQXlCLENBQUMsQ0FBQTtBQUMvRCwyQ0FBeUMsOEJBQThCLENBQUMsQ0FBQTtBQUV4RSx3QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM1QyxzQkFBOEMsZ0JBQWdCLENBQUMsQ0FBQTtBQUMvRCx3QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM1Qyx3QkFBMkMsaUJBQWlCLENBQUMsQ0FBQTtBQUU3RCx3QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3Qyx3QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCx3QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCx3QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCx3QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx3QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQywyQkFBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUM1RCxrQ0FBNkIsbUNBQW1DLENBQUMsQ0FBQTtBQUdqRSxtQ0FBOEIsb0NBQW9DLENBQUMsQ0FBQTtBQUNuRSxvQ0FBaUMsMkNBQTJDLENBQUMsQ0FBQTtBQUM3RSw2Q0FBMEMsdURBQXVELENBQUMsQ0FBQTtBQVFsRztJQUFBO0lBQWlDLENBQUM7SUFObEM7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQywwREFBMkIsRUFBQyxxQkFBWSxFQUFFLHFEQUF3QixFQUFDLG1CQUFXLEVBQUMsd0JBQWMsRUFBQyx3QkFBYyxFQUFDLDBCQUFnQixFQUFDLHlCQUFlLEVBQUMsMkJBQW1CLEVBQUMseUJBQWUsRUFBQyxxQkFBVyxFQUFDLHNCQUFZLEVBQUMscUJBQVcsRUFBQyx3QkFBYyxDQUFDO1lBQ2hQLFlBQVksRUFBRSxDQUFDLDRDQUFvQixDQUFDO1lBQ3BDLE9BQU8sRUFBRSxDQUFDLDRDQUFvQixDQUFDO1lBQy9CLFNBQVMsRUFBRSxDQUFDLDJCQUFjLEVBQUMsZ0NBQVksRUFBQyxrQ0FBYSxFQUFDLHdDQUFrQixDQUFDO1NBQzFFLENBQUM7O3lCQUFBO0lBQytCLHdCQUFDO0FBQUQsQ0FBakMsQUFBa0MsSUFBQTtBQUFyQix5QkFBaUIsb0JBQUksQ0FBQSIsImZpbGUiOiJhcHAvam9icHJvcG9zYWwvam9icHJvcG9zYWwubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSm9icHJvcG9zYWxDb21wb25lbnQgfSBmcm9tICcuL2pvYnByb3Bvc2FsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEpvYnByb3Bvc2FsUm91dGluZ01vZHVsZSB9IGZyb20gJy4vam9icHJvcG9zYWwtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cCxGb3JtQ29udHJvbCxWYWxpZGF0b3JzLEZvcm1CdWlsZGVyfSBmcm9tICdAYW5ndWxhci9mb3JtcydcclxuaW1wb3J0IHtQYW5lbE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7R3Jvd2xNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7TWVzc2FnZXNNb2R1bGUsTWVzc2FnZSxHcm93bH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7QnV0dG9uTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0lucHV0VGV4dE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtEYXRhVGFibGVNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7RmlsZVVwbG9hZE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtEcm9wZG93bk1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtDYWxlbmRhck1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuXHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5cclxuXHJcbmltcG9ydCB7IEVtYWlsVmFsaWRhdGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZW1haWx2YWxpZGF0ZS5waXBlJztcclxuaW1wb3J0IHtKb2Jwcm9wb3NhbFNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9qb2Jwcm9wb3NhbC9qb2Jwcm9wb3NhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHtDb21tb25Ccm93c2VUb3BTa2lsbHNNb2R1bGV9IGZyb20gJy4uL2NvbW1vbmJyb3dzZXRvcHNraWxscy9jb21tb25icm93c2V0b3Bza2lsbHMubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbkJyb3dzZVRvcFNraWxsc01vZHVsZSxDb21tb25Nb2R1bGUsIEpvYnByb3Bvc2FsUm91dGluZ01vZHVsZSxGb3Jtc01vZHVsZSxEcm9wZG93bk1vZHVsZSxDYWxlbmRhck1vZHVsZSxGaWxlVXBsb2FkTW9kdWxlLERhdGFUYWJsZU1vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlLElucHV0VGV4dE1vZHVsZSxHcm93bE1vZHVsZSxCdXR0b25Nb2R1bGUsUGFuZWxNb2R1bGUsTWVzc2FnZXNNb2R1bGVdLC8vLFBhbmVsTW9kdWxlLE1lc3NhZ2VzTW9kdWxlLEdyb3dsXSxcclxuICBkZWNsYXJhdGlvbnM6IFtKb2Jwcm9wb3NhbENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0pvYnByb3Bvc2FsQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtNeUN1cnJlbmN5UGlwZSxNeURhdGVGb3JtYXQsRW1haWxWYWxpZGF0ZSxKb2Jwcm9wb3NhbFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKb2Jwcm9wb3NhbE1vZHVsZSB7IH1cclxuIl19
