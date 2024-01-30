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
var submitproposal_component_1 = require('./submitproposal.component');
var submitproposal_routing_module_1 = require('./submitproposal-routing.module');
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
var submitproposal_service_1 = require('../shared/submitproposal/submitproposal.service');
var commonbrowsetopskills_module_1 = require('../commonbrowsetopskills/commonbrowsetopskills.module');
var commonsubmenu_module_1 = require('../commonsubmenu/commonsubmenu.module');
var SubmitproposalModule = (function () {
    function SubmitproposalModule() {
    }
    SubmitproposalModule = __decorate([
        core_1.NgModule({
            imports: [commonbrowsetopskills_module_1.CommonBrowseTopSkillsModule, common_1.CommonModule, commonsubmenu_module_1.CommonsubmenuModule, submitproposal_routing_module_1.SubmitproposalRoutingModule, forms_1.FormsModule, primeng_8.DropdownModule, primeng_9.CalendarModule, primeng_7.FileUploadModule, primeng_6.DataTableModule, forms_1.ReactiveFormsModule, primeng_5.InputTextModule,
                primeng_2.GrowlModule, primeng_4.ButtonModule, primeng_1.PanelModule, primeng_3.MessagesModule],
            declarations: [submitproposal_component_1.SubmitproposalComponent],
            exports: [submitproposal_component_1.SubmitproposalComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, submitproposal_service_1.SubmitproposalService]
        }), 
        __metadata('design:paramtypes', [])
    ], SubmitproposalModule);
    return SubmitproposalModule;
}());
exports.SubmitproposalModule = SubmitproposalModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdWJtaXRwcm9wb3NhbC9zdWJtaXRwcm9wb3NhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx5Q0FBd0MsNEJBQTRCLENBQUMsQ0FBQTtBQUNyRSw4Q0FBNEMsaUNBQWlDLENBQUMsQ0FBQTtBQUU5RSx3QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM1QyxzQkFBOEMsZ0JBQWdCLENBQUMsQ0FBQTtBQUMvRCx3QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM1Qyx3QkFBMkMsaUJBQWlCLENBQUMsQ0FBQTtBQUU3RCx3QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3Qyx3QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCx3QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCx3QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCx3QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx3QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQywyQkFBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUM1RCxrQ0FBNkIsbUNBQW1DLENBQUMsQ0FBQTtBQUdqRSxtQ0FBOEIsb0NBQW9DLENBQUMsQ0FBQTtBQUNuRSx1Q0FBb0MsaURBQWlELENBQUMsQ0FBQTtBQUN0Riw2Q0FBMEMsdURBQXVELENBQUMsQ0FBQTtBQUNsRyxxQ0FBa0MsdUNBQXVDLENBQUMsQ0FBQTtBQVMxRTtJQUFBO0lBQW9DLENBQUM7SUFQckM7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQywwREFBMkIsRUFBQyxxQkFBWSxFQUFDLDBDQUFtQixFQUFFLDJEQUEyQixFQUFDLG1CQUFXLEVBQUMsd0JBQWMsRUFBQyx3QkFBYyxFQUFDLDBCQUFnQixFQUFDLHlCQUFlLEVBQUMsMkJBQW1CLEVBQUMseUJBQWU7Z0JBQ2xOLHFCQUFXLEVBQUMsc0JBQVksRUFBQyxxQkFBVyxFQUFDLHdCQUFjLENBQUM7WUFDcEQsWUFBWSxFQUFFLENBQUMsa0RBQXVCLENBQUM7WUFDdkMsT0FBTyxFQUFFLENBQUMsa0RBQXVCLENBQUM7WUFDbEMsU0FBUyxFQUFFLENBQUMsMkJBQWMsRUFBQyxnQ0FBWSxFQUFDLGtDQUFhLEVBQUMsOENBQXFCLENBQUM7U0FDN0UsQ0FBQzs7NEJBQUE7SUFDa0MsMkJBQUM7QUFBRCxDQUFwQyxBQUFxQyxJQUFBO0FBQXhCLDRCQUFvQix1QkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9zdWJtaXRwcm9wb3NhbC9zdWJtaXRwcm9wb3NhbC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBTdWJtaXRwcm9wb3NhbENvbXBvbmVudCB9IGZyb20gJy4vc3VibWl0cHJvcG9zYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3VibWl0cHJvcG9zYWxSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9zdWJtaXRwcm9wb3NhbC1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7Rm9ybUdyb3VwLEZvcm1Db250cm9sLFZhbGlkYXRvcnMsRm9ybUJ1aWxkZXJ9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xyXG5pbXBvcnQge1BhbmVsTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtHcm93bE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtNZXNzYWdlc01vZHVsZSxNZXNzYWdlLEdyb3dsfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtCdXR0b25Nb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7SW5wdXRUZXh0TW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0RhdGFUYWJsZU1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtGaWxlVXBsb2FkTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0Ryb3Bkb3duTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0NhbGVuZGFyTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5cclxuaW1wb3J0IHsgTXlDdXJyZW5jeVBpcGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZmlyc3QucGlwZSc7XHJcbmltcG9ydCB7IE15RGF0ZUZvcm1hdCB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9teWRhdGVmb3JtYXQucGlwZSc7XHJcblxyXG5cclxuaW1wb3J0IHsgRW1haWxWYWxpZGF0ZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9lbWFpbHZhbGlkYXRlLnBpcGUnO1xyXG5pbXBvcnQge1N1Ym1pdHByb3Bvc2FsU2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL3N1Ym1pdHByb3Bvc2FsL3N1Ym1pdHByb3Bvc2FsLnNlcnZpY2UnO1xyXG5pbXBvcnQge0NvbW1vbkJyb3dzZVRvcFNraWxsc01vZHVsZX0gZnJvbSAnLi4vY29tbW9uYnJvd3NldG9wc2tpbGxzL2NvbW1vbmJyb3dzZXRvcHNraWxscy5tb2R1bGUnO1xyXG5pbXBvcnQge0NvbW1vbnN1Ym1lbnVNb2R1bGV9IGZyb20gJy4uL2NvbW1vbnN1Ym1lbnUvY29tbW9uc3VibWVudS5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uQnJvd3NlVG9wU2tpbGxzTW9kdWxlLENvbW1vbk1vZHVsZSxDb21tb25zdWJtZW51TW9kdWxlLCBTdWJtaXRwcm9wb3NhbFJvdXRpbmdNb2R1bGUsRm9ybXNNb2R1bGUsRHJvcGRvd25Nb2R1bGUsQ2FsZW5kYXJNb2R1bGUsRmlsZVVwbG9hZE1vZHVsZSxEYXRhVGFibGVNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZSxJbnB1dFRleHRNb2R1bGUsXHJcbiAgR3Jvd2xNb2R1bGUsQnV0dG9uTW9kdWxlLFBhbmVsTW9kdWxlLE1lc3NhZ2VzTW9kdWxlXSwvLyxQYW5lbE1vZHVsZSxNZXNzYWdlc01vZHVsZSxHcm93bF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbU3VibWl0cHJvcG9zYWxDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtTdWJtaXRwcm9wb3NhbENvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbTXlDdXJyZW5jeVBpcGUsTXlEYXRlRm9ybWF0LEVtYWlsVmFsaWRhdGUsU3VibWl0cHJvcG9zYWxTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VibWl0cHJvcG9zYWxNb2R1bGUgeyB9XHJcbiJdfQ==
