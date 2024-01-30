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
var commonbrowsetopskills_component_1 = require('./commonbrowsetopskills.component');
var commonbrowsetopskills_routing_module_1 = require('./commonbrowsetopskills-routing.module');
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
var commonbrowsetopskills_service_1 = require('../shared/commonbrowsetopskills/commonbrowsetopskills.service');
var CommonBrowseTopSkillsModule = (function () {
    function CommonBrowseTopSkillsModule() {
    }
    CommonBrowseTopSkillsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, commonbrowsetopskills_routing_module_1.CommonBrowseTopSkillsRoutingModule, forms_1.FormsModule, primeng_8.DropdownModule, primeng_9.CalendarModule, primeng_7.FileUploadModule, primeng_6.DataTableModule, forms_1.ReactiveFormsModule, primeng_5.InputTextModule, primeng_2.GrowlModule, primeng_4.ButtonModule, primeng_1.PanelModule, primeng_3.MessagesModule],
            declarations: [commonbrowsetopskills_component_1.CommonBrowseTopSkillsComponent],
            exports: [commonbrowsetopskills_component_1.CommonBrowseTopSkillsComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, commonbrowsetopskills_service_1.CommonBrowseTopSkillsService]
        }), 
        __metadata('design:paramtypes', [])
    ], CommonBrowseTopSkillsModule);
    return CommonBrowseTopSkillsModule;
}());
exports.CommonBrowseTopSkillsModule = CommonBrowseTopSkillsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21tb25icm93c2V0b3Bza2lsbHMvY29tbW9uYnJvd3NldG9wc2tpbGxzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLGdEQUErQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ25GLHFEQUFtRCx3Q0FBd0MsQ0FBQyxDQUFBO0FBRTVGLHdCQUEwQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzVDLHNCQUE4QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQy9ELHdCQUEwQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzVDLHdCQUEyQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRTdELHdCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHdCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHdCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHdCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pELHdCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHdCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLDJCQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELGtDQUE2QixtQ0FBbUMsQ0FBQyxDQUFBO0FBR2pFLG1DQUE4QixvQ0FBb0MsQ0FBQyxDQUFBO0FBQ25FLDhDQUEyQywrREFBK0QsQ0FBQyxDQUFBO0FBUTNHO0lBQUE7SUFBMkMsQ0FBQztJQU41QztRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUMseUVBQWtDLEVBQUMsbUJBQVcsRUFBQyx3QkFBYyxFQUFDLHdCQUFjLEVBQUMsMEJBQWdCLEVBQUMseUJBQWUsRUFBQywyQkFBbUIsRUFBQyx5QkFBZSxFQUFDLHFCQUFXLEVBQUMsc0JBQVksRUFBQyxxQkFBVyxFQUFDLHdCQUFjLENBQUM7WUFDN04sWUFBWSxFQUFFLENBQUMsZ0VBQThCLENBQUM7WUFDOUMsT0FBTyxFQUFFLENBQUMsZ0VBQThCLENBQUM7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQWMsRUFBQyxnQ0FBWSxFQUFDLGtDQUFhLEVBQUMsNERBQTRCLENBQUM7U0FDcEYsQ0FBQzs7bUNBQUE7SUFDeUMsa0NBQUM7QUFBRCxDQUEzQyxBQUE0QyxJQUFBO0FBQS9CLG1DQUEyQiw4QkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9jb21tb25icm93c2V0b3Bza2lsbHMvY29tbW9uYnJvd3NldG9wc2tpbGxzLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENvbW1vbkJyb3dzZVRvcFNraWxsc0NvbXBvbmVudCB9IGZyb20gJy4vY29tbW9uYnJvd3NldG9wc2tpbGxzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbW1vbkJyb3dzZVRvcFNraWxsc1JvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2NvbW1vbmJyb3dzZXRvcHNraWxscy1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7Rm9ybUdyb3VwLEZvcm1Db250cm9sLFZhbGlkYXRvcnMsRm9ybUJ1aWxkZXJ9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xyXG5pbXBvcnQge1BhbmVsTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtHcm93bE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtNZXNzYWdlc01vZHVsZSxNZXNzYWdlLEdyb3dsfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtCdXR0b25Nb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7SW5wdXRUZXh0TW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0RhdGFUYWJsZU1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtGaWxlVXBsb2FkTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0Ryb3Bkb3duTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0NhbGVuZGFyTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5cclxuaW1wb3J0IHsgTXlDdXJyZW5jeVBpcGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZmlyc3QucGlwZSc7XHJcbmltcG9ydCB7IE15RGF0ZUZvcm1hdCB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9teWRhdGVmb3JtYXQucGlwZSc7XHJcblxyXG5cclxuaW1wb3J0IHsgRW1haWxWYWxpZGF0ZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9lbWFpbHZhbGlkYXRlLnBpcGUnO1xyXG5pbXBvcnQge0NvbW1vbkJyb3dzZVRvcFNraWxsc1NlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9jb21tb25icm93c2V0b3Bza2lsbHMvY29tbW9uYnJvd3NldG9wc2tpbGxzLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLENvbW1vbkJyb3dzZVRvcFNraWxsc1JvdXRpbmdNb2R1bGUsRm9ybXNNb2R1bGUsRHJvcGRvd25Nb2R1bGUsQ2FsZW5kYXJNb2R1bGUsRmlsZVVwbG9hZE1vZHVsZSxEYXRhVGFibGVNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZSxJbnB1dFRleHRNb2R1bGUsR3Jvd2xNb2R1bGUsQnV0dG9uTW9kdWxlLFBhbmVsTW9kdWxlLE1lc3NhZ2VzTW9kdWxlXSwvLyxQYW5lbE1vZHVsZSxNZXNzYWdlc01vZHVsZSxHcm93bF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQ29tbW9uQnJvd3NlVG9wU2tpbGxzQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQ29tbW9uQnJvd3NlVG9wU2tpbGxzQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtNeUN1cnJlbmN5UGlwZSxNeURhdGVGb3JtYXQsRW1haWxWYWxpZGF0ZSxDb21tb25Ccm93c2VUb3BTa2lsbHNTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tbW9uQnJvd3NlVG9wU2tpbGxzTW9kdWxlIHsgfVxyXG4iXX0=
