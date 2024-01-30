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
var myproposaldetails_component_1 = require('./myproposaldetails.component');
var myproposaldetails11_routing_module_1 = require('./myproposaldetails11-routing.module');
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
var index_1 = require('../shared/myproposaldetails/index');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var commonbrowsetopskills_module_1 = require('../commonbrowsetopskills/commonbrowsetopskills.module');
var MyproposaldetailsModule = (function () {
    function MyproposaldetailsModule() {
    }
    MyproposaldetailsModule = __decorate([
        core_1.NgModule({
            imports: [commonbrowsetopskills_module_1.CommonBrowseTopSkillsModule, common_1.CommonModule, primeng_10.InputTextareaModule, myproposaldetails11_routing_module_1.MyproposaldetailsRoutingModule, forms_1.FormsModule, primeng_8.DropdownModule, primeng_9.CalendarModule, primeng_7.FileUploadModule, primeng_6.DataTableModule, forms_1.ReactiveFormsModule, primeng_5.InputTextModule, primeng_2.GrowlModule, primeng_4.ButtonModule, primeng_1.PanelModule, primeng_3.MessagesModule],
            declarations: [myproposaldetails_component_1.MyproposaldetailsComponent],
            exports: [myproposaldetails_component_1.MyproposaldetailsComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, index_1.MyproposaldetailsService]
        }), 
        __metadata('design:paramtypes', [])
    ], MyproposaldetailsModule);
    return MyproposaldetailsModule;
}());
exports.MyproposaldetailsModule = MyproposaldetailsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9teXByb3Bvc2FsZGV0YWlscy9teXByb3Bvc2FsZGV0YWlscy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyw0Q0FBMkMsK0JBQStCLENBQUMsQ0FBQTtBQUMzRSxtREFBK0Msc0NBQXNDLENBQUMsQ0FBQTtBQUV0Rix3QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM1QyxzQkFBOEMsZ0JBQWdCLENBQUMsQ0FBQTtBQUMvRCx3QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM1Qyx3QkFBMkMsaUJBQWlCLENBQUMsQ0FBQTtBQUU3RCx3QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3Qyx3QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCx3QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCx3QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCx3QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx3QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx5QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUVwRCwyQkFBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUM1RCxrQ0FBNkIsbUNBQW1DLENBQUMsQ0FBQTtBQUNqRSxzQkFBdUMsbUNBQW1DLENBQUMsQ0FBQTtBQUMzRSxtQ0FBOEIsb0NBQW9DLENBQUMsQ0FBQTtBQUNuRSw2Q0FBMEMsdURBQXVELENBQUMsQ0FBQTtBQVFsRztJQUFBO0lBQXVDLENBQUM7SUFOeEM7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQywwREFBMkIsRUFBQyxxQkFBWSxFQUFDLDhCQUFtQixFQUFFLG1FQUE4QixFQUFDLG1CQUFXLEVBQUMsd0JBQWMsRUFBQyx3QkFBYyxFQUFDLDBCQUFnQixFQUFDLHlCQUFlLEVBQUMsMkJBQW1CLEVBQUMseUJBQWUsRUFBQyxxQkFBVyxFQUFDLHNCQUFZLEVBQUMscUJBQVcsRUFBQyx3QkFBYyxDQUFDO1lBQzFRLFlBQVksRUFBRSxDQUFDLHdEQUEwQixDQUFDO1lBQzFDLE9BQU8sRUFBRSxDQUFDLHdEQUEwQixDQUFDO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLDJCQUFjLEVBQUMsZ0NBQVksRUFBQyxrQ0FBYSxFQUFDLGdDQUF3QixDQUFDO1NBQ2hGLENBQUM7OytCQUFBO0lBQ3FDLDhCQUFDO0FBQUQsQ0FBdkMsQUFBd0MsSUFBQTtBQUEzQiwrQkFBdUIsMEJBQUksQ0FBQSIsImZpbGUiOiJhcHAvbXlwcm9wb3NhbGRldGFpbHMvbXlwcm9wb3NhbGRldGFpbHMubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTXlwcm9wb3NhbGRldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL215cHJvcG9zYWxkZXRhaWxzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE15cHJvcG9zYWxkZXRhaWxzUm91dGluZ01vZHVsZSB9IGZyb20gJy4vbXlwcm9wb3NhbGRldGFpbHMxMS1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7Rm9ybUdyb3VwLEZvcm1Db250cm9sLFZhbGlkYXRvcnMsRm9ybUJ1aWxkZXJ9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xyXG5pbXBvcnQge1BhbmVsTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtHcm93bE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtNZXNzYWdlc01vZHVsZSxNZXNzYWdlLEdyb3dsfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtCdXR0b25Nb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7SW5wdXRUZXh0TW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0RhdGFUYWJsZU1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtGaWxlVXBsb2FkTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0Ryb3Bkb3duTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0NhbGVuZGFyTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0lucHV0VGV4dGFyZWFNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcblxyXG5pbXBvcnQgeyBNeUN1cnJlbmN5UGlwZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9maXJzdC5waXBlJztcclxuaW1wb3J0IHsgTXlEYXRlRm9ybWF0IH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL215ZGF0ZWZvcm1hdC5waXBlJztcclxuaW1wb3J0IHtNeXByb3Bvc2FsZGV0YWlsc1NlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9teXByb3Bvc2FsZGV0YWlscy9pbmRleCc7XHJcbmltcG9ydCB7IEVtYWlsVmFsaWRhdGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZW1haWx2YWxpZGF0ZS5waXBlJztcclxuaW1wb3J0IHtDb21tb25Ccm93c2VUb3BTa2lsbHNNb2R1bGV9IGZyb20gJy4uL2NvbW1vbmJyb3dzZXRvcHNraWxscy9jb21tb25icm93c2V0b3Bza2lsbHMubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbkJyb3dzZVRvcFNraWxsc01vZHVsZSxDb21tb25Nb2R1bGUsSW5wdXRUZXh0YXJlYU1vZHVsZSwgTXlwcm9wb3NhbGRldGFpbHNSb3V0aW5nTW9kdWxlLEZvcm1zTW9kdWxlLERyb3Bkb3duTW9kdWxlLENhbGVuZGFyTW9kdWxlLEZpbGVVcGxvYWRNb2R1bGUsRGF0YVRhYmxlTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGUsSW5wdXRUZXh0TW9kdWxlLEdyb3dsTW9kdWxlLEJ1dHRvbk1vZHVsZSxQYW5lbE1vZHVsZSxNZXNzYWdlc01vZHVsZV0sLy8sUGFuZWxNb2R1bGUsTWVzc2FnZXNNb2R1bGUsR3Jvd2xdLFxyXG4gIGRlY2xhcmF0aW9uczogW015cHJvcG9zYWxkZXRhaWxzQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbTXlwcm9wb3NhbGRldGFpbHNDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW015Q3VycmVuY3lQaXBlLE15RGF0ZUZvcm1hdCxFbWFpbFZhbGlkYXRlLE15cHJvcG9zYWxkZXRhaWxzU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE15cHJvcG9zYWxkZXRhaWxzTW9kdWxlIHsgfVxyXG4iXX0=
