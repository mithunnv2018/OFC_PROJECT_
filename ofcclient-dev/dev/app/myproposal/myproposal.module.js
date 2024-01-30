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
var myproposal_component_1 = require('./myproposal.component');
var myproposal_routing_module_1 = require('./myproposal-routing.module');
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
var primeng_10 = require('primeng/primeng');
var first_pipe_1 = require('../shared/pipes/first.pipe');
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var myproposal_service_1 = require('../shared/myproposal/myproposal.service');
var commonbrowsetopskills_module_1 = require('../commonbrowsetopskills/commonbrowsetopskills.module');
var commonsubmenu_module_1 = require('../commonsubmenu/commonsubmenu.module');
var MyproposalModule = (function () {
    function MyproposalModule() {
    }
    MyproposalModule = __decorate([
        core_1.NgModule({
            imports: [commonbrowsetopskills_module_1.CommonBrowseTopSkillsModule, commonsubmenu_module_1.CommonsubmenuModule, common_1.CommonModule, primeng_10.InputTextareaModule, myproposal_routing_module_1.MyproposalRoutingModule, forms_1.FormsModule, primeng_8.DropdownModule, primeng_9.CalendarModule, primeng_7.FileUploadModule, primeng_6.DataTableModule, forms_1.ReactiveFormsModule, primeng_5.InputTextModule, primeng_2.GrowlModule, primeng_4.ButtonModule, primeng_1.PanelModule, primeng_3.MessagesModule],
            declarations: [myproposal_component_1.MyproposalComponent],
            exports: [myproposal_component_1.MyproposalComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, myproposal_service_1.MyproposalService]
        }), 
        __metadata('design:paramtypes', [])
    ], MyproposalModule);
    return MyproposalModule;
}());
exports.MyproposalModule = MyproposalModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9teXByb3Bvc2FsL215cHJvcG9zYWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MscUNBQW9DLHdCQUF3QixDQUFDLENBQUE7QUFDN0QsMENBQXdDLDZCQUE2QixDQUFDLENBQUE7QUFFdEUsd0JBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFDNUMsc0JBQThDLGdCQUFnQixDQUFDLENBQUE7QUFDL0Qsd0JBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFDNUMsd0JBQTJDLGlCQUFpQixDQUFDLENBQUE7QUFFN0Qsd0JBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0Msd0JBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsd0JBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsd0JBQStCLGlCQUFpQixDQUFDLENBQUE7QUFDakQsd0JBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msd0JBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MseUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFFcEQsMkJBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsa0NBQTZCLG1DQUFtQyxDQUFDLENBQUE7QUFFakUsbUNBQThCLG9DQUFvQyxDQUFDLENBQUE7QUFDbkUsbUNBQWdDLHlDQUF5QyxDQUFDLENBQUE7QUFDMUUsNkNBQTBDLHVEQUF1RCxDQUFDLENBQUE7QUFDbEcscUNBQWtDLHVDQUF1QyxDQUFDLENBQUE7QUFTMUU7SUFBQTtJQUFnQyxDQUFDO0lBTmpDO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsMERBQTJCLEVBQUMsMENBQW1CLEVBQUMscUJBQVksRUFBQyw4QkFBbUIsRUFBRSxtREFBdUIsRUFBQyxtQkFBVyxFQUFDLHdCQUFjLEVBQUMsd0JBQWMsRUFBQywwQkFBZ0IsRUFBQyx5QkFBZSxFQUFDLDJCQUFtQixFQUFDLHlCQUFlLEVBQUMscUJBQVcsRUFBQyxzQkFBWSxFQUFDLHFCQUFXLEVBQUMsd0JBQWMsQ0FBQztZQUN2UixZQUFZLEVBQUUsQ0FBQywwQ0FBbUIsQ0FBQztZQUNuQyxPQUFPLEVBQUUsQ0FBQywwQ0FBbUIsQ0FBQztZQUM5QixTQUFTLEVBQUUsQ0FBQywyQkFBYyxFQUFDLGdDQUFZLEVBQUMsa0NBQWEsRUFBQyxzQ0FBaUIsQ0FBQztTQUN6RSxDQUFDOzt3QkFBQTtJQUM4Qix1QkFBQztBQUFELENBQWhDLEFBQWlDLElBQUE7QUFBcEIsd0JBQWdCLG1CQUFJLENBQUEiLCJmaWxlIjoiYXBwL215cHJvcG9zYWwvbXlwcm9wb3NhbC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNeXByb3Bvc2FsQ29tcG9uZW50IH0gZnJvbSAnLi9teXByb3Bvc2FsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE15cHJvcG9zYWxSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9teXByb3Bvc2FsLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHtGb3JtR3JvdXAsRm9ybUNvbnRyb2wsVmFsaWRhdG9ycyxGb3JtQnVpbGRlcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXHJcbmltcG9ydCB7UGFuZWxNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0dyb3dsTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge01lc3NhZ2VzTW9kdWxlLE1lc3NhZ2UsR3Jvd2x9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0J1dHRvbk1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtJbnB1dFRleHRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7RGF0YVRhYmxlTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0ZpbGVVcGxvYWRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7RHJvcGRvd25Nb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7Q2FsZW5kYXJNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7SW5wdXRUZXh0YXJlYU1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuXHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5cclxuaW1wb3J0IHsgRW1haWxWYWxpZGF0ZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9lbWFpbHZhbGlkYXRlLnBpcGUnO1xyXG5pbXBvcnQge015cHJvcG9zYWxTZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvbXlwcm9wb3NhbC9teXByb3Bvc2FsLnNlcnZpY2UnO1xyXG5pbXBvcnQge0NvbW1vbkJyb3dzZVRvcFNraWxsc01vZHVsZX0gZnJvbSAnLi4vY29tbW9uYnJvd3NldG9wc2tpbGxzL2NvbW1vbmJyb3dzZXRvcHNraWxscy5tb2R1bGUnO1xyXG5pbXBvcnQge0NvbW1vbnN1Ym1lbnVNb2R1bGV9IGZyb20gJy4uL2NvbW1vbnN1Ym1lbnUvY29tbW9uc3VibWVudS5tb2R1bGUnO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbkJyb3dzZVRvcFNraWxsc01vZHVsZSxDb21tb25zdWJtZW51TW9kdWxlLENvbW1vbk1vZHVsZSxJbnB1dFRleHRhcmVhTW9kdWxlLCBNeXByb3Bvc2FsUm91dGluZ01vZHVsZSxGb3Jtc01vZHVsZSxEcm9wZG93bk1vZHVsZSxDYWxlbmRhck1vZHVsZSxGaWxlVXBsb2FkTW9kdWxlLERhdGFUYWJsZU1vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlLElucHV0VGV4dE1vZHVsZSxHcm93bE1vZHVsZSxCdXR0b25Nb2R1bGUsUGFuZWxNb2R1bGUsTWVzc2FnZXNNb2R1bGVdLC8vLFBhbmVsTW9kdWxlLE1lc3NhZ2VzTW9kdWxlLEdyb3dsXSxcclxuICBkZWNsYXJhdGlvbnM6IFtNeXByb3Bvc2FsQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTXlwcm9wb3NhbENvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbTXlDdXJyZW5jeVBpcGUsTXlEYXRlRm9ybWF0LEVtYWlsVmFsaWRhdGUsTXlwcm9wb3NhbFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeXByb3Bvc2FsTW9kdWxlIHsgfVxyXG4iXX0=
