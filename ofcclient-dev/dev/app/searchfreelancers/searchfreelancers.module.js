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
var searchfreelancers_component_1 = require('./searchfreelancers.component');
var searchfreelancers_routing_module_1 = require('./searchfreelancers-routing.module');
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
var primeng_10 = require('primeng/primeng');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var searchfreelancers_service_1 = require('../shared/searchfreelancers/searchfreelancers.service');
var commonbrowsetopskills_module_1 = require('../commonbrowsetopskills/commonbrowsetopskills.module');
var primeng_11 = require('primeng/primeng');
var SearchFreeLancersModule = (function () {
    function SearchFreeLancersModule() {
    }
    SearchFreeLancersModule = __decorate([
        core_1.NgModule({
            imports: [commonbrowsetopskills_module_1.CommonBrowseTopSkillsModule, common_1.CommonModule, primeng_11.SelectButtonModule, primeng_9.DataListModule, primeng_10.RatingModule, searchfreelancers_routing_module_1.SearchFreeLancersRoutingModule, forms_1.FormsModule, primeng_8.DropdownModule, primeng_9.CalendarModule, primeng_7.FileUploadModule, primeng_6.DataTableModule, forms_1.ReactiveFormsModule, primeng_5.InputTextModule, primeng_2.GrowlModule, primeng_4.ButtonModule, primeng_1.PanelModule, primeng_3.MessagesModule],
            declarations: [searchfreelancers_component_1.SearchFreeLancersComponent],
            exports: [searchfreelancers_component_1.SearchFreeLancersComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, searchfreelancers_service_1.SearchFreeLancersService]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchFreeLancersModule);
    return SearchFreeLancersModule;
}());
exports.SearchFreeLancersModule = SearchFreeLancersModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZWFyY2hmcmVlbGFuY2Vycy9zZWFyY2hmcmVlbGFuY2Vycy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyw0Q0FBMkMsK0JBQStCLENBQUMsQ0FBQTtBQUMzRSxpREFBK0Msb0NBQW9DLENBQUMsQ0FBQTtBQUVwRix3QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM1QyxzQkFBOEMsZ0JBQWdCLENBQUMsQ0FBQTtBQUMvRCx3QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM1Qyx3QkFBMkMsaUJBQWlCLENBQUMsQ0FBQTtBQUU3RCx3QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3Qyx3QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCx3QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCx3QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCx3QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx3QkFBNEMsaUJBQWlCLENBQUMsQ0FBQTtBQUU5RCwyQkFBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUM1RCxrQ0FBNkIsbUNBQW1DLENBQUMsQ0FBQTtBQUNqRSx5QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUU3QyxtQ0FBOEIsb0NBQW9DLENBQUMsQ0FBQTtBQUNuRSwwQ0FBdUMsdURBQXVELENBQUMsQ0FBQTtBQUMvRiw2Q0FBMEMsdURBQXVELENBQUMsQ0FBQTtBQUNsRyx5QkFBaUMsaUJBQWlCLENBQUMsQ0FBQTtBQVFuRDtJQUFBO0lBQXVDLENBQUM7SUFOeEM7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQywwREFBMkIsRUFBQyxxQkFBWSxFQUFDLDZCQUFrQixFQUFDLHdCQUFjLEVBQUMsdUJBQVksRUFBQyxpRUFBOEIsRUFBQyxtQkFBVyxFQUFDLHdCQUFjLEVBQUMsd0JBQWMsRUFBQywwQkFBZ0IsRUFBQyx5QkFBZSxFQUFDLDJCQUFtQixFQUFDLHlCQUFlLEVBQUMscUJBQVcsRUFBQyxzQkFBWSxFQUFDLHFCQUFXLEVBQUMsd0JBQWMsQ0FBQztZQUNwUyxZQUFZLEVBQUUsQ0FBQyx3REFBMEIsQ0FBQztZQUMxQyxPQUFPLEVBQUUsQ0FBQyx3REFBMEIsQ0FBQztZQUNyQyxTQUFTLEVBQUUsQ0FBQywyQkFBYyxFQUFDLGdDQUFZLEVBQUMsa0NBQWEsRUFBQyxvREFBd0IsQ0FBQztTQUNoRixDQUFDOzsrQkFBQTtJQUNxQyw4QkFBQztBQUFELENBQXZDLEFBQXdDLElBQUE7QUFBM0IsK0JBQXVCLDBCQUFJLENBQUEiLCJmaWxlIjoiYXBwL3NlYXJjaGZyZWVsYW5jZXJzL3NlYXJjaGZyZWVsYW5jZXJzLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFNlYXJjaEZyZWVMYW5jZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2hmcmVlbGFuY2Vycy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWFyY2hGcmVlTGFuY2Vyc1JvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3NlYXJjaGZyZWVsYW5jZXJzLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHtGb3JtR3JvdXAsRm9ybUNvbnRyb2wsVmFsaWRhdG9ycyxGb3JtQnVpbGRlcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXHJcbmltcG9ydCB7UGFuZWxNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0dyb3dsTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge01lc3NhZ2VzTW9kdWxlLE1lc3NhZ2UsR3Jvd2x9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0J1dHRvbk1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtJbnB1dFRleHRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7RGF0YVRhYmxlTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0ZpbGVVcGxvYWRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7RHJvcGRvd25Nb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7Q2FsZW5kYXJNb2R1bGUsRGF0YUxpc3RNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcblxyXG5pbXBvcnQgeyBNeUN1cnJlbmN5UGlwZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9maXJzdC5waXBlJztcclxuaW1wb3J0IHsgTXlEYXRlRm9ybWF0IH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL215ZGF0ZWZvcm1hdC5waXBlJztcclxuaW1wb3J0IHtSYXRpbmdNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcblxyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZSc7XHJcbmltcG9ydCB7U2VhcmNoRnJlZUxhbmNlcnNTZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvc2VhcmNoZnJlZWxhbmNlcnMvc2VhcmNoZnJlZWxhbmNlcnMuc2VydmljZSc7XHJcbmltcG9ydCB7Q29tbW9uQnJvd3NlVG9wU2tpbGxzTW9kdWxlfSBmcm9tICcuLi9jb21tb25icm93c2V0b3Bza2lsbHMvY29tbW9uYnJvd3NldG9wc2tpbGxzLm1vZHVsZSc7XHJcbmltcG9ydCB7U2VsZWN0QnV0dG9uTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG4vL2ltcG9ydCB7Q29tbW9uQnJvd3NlVG9wU2tpbGxzQ29tcG9uZW50fSBmcm9tICcuLi9jb21tb25icm93c2V0b3Bza2lsbHMvY29tbW9uYnJvd3NldG9wc2tpbGxzLmNvbXBvbmVudCc7XHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbkJyb3dzZVRvcFNraWxsc01vZHVsZSxDb21tb25Nb2R1bGUsU2VsZWN0QnV0dG9uTW9kdWxlLERhdGFMaXN0TW9kdWxlLFJhdGluZ01vZHVsZSxTZWFyY2hGcmVlTGFuY2Vyc1JvdXRpbmdNb2R1bGUsRm9ybXNNb2R1bGUsRHJvcGRvd25Nb2R1bGUsQ2FsZW5kYXJNb2R1bGUsRmlsZVVwbG9hZE1vZHVsZSxEYXRhVGFibGVNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZSxJbnB1dFRleHRNb2R1bGUsR3Jvd2xNb2R1bGUsQnV0dG9uTW9kdWxlLFBhbmVsTW9kdWxlLE1lc3NhZ2VzTW9kdWxlXSwvLyxQYW5lbE1vZHVsZSxNZXNzYWdlc01vZHVsZSxHcm93bF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbU2VhcmNoRnJlZUxhbmNlcnNDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtTZWFyY2hGcmVlTGFuY2Vyc0NvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbTXlDdXJyZW5jeVBpcGUsTXlEYXRlRm9ybWF0LEVtYWlsVmFsaWRhdGUsU2VhcmNoRnJlZUxhbmNlcnNTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoRnJlZUxhbmNlcnNNb2R1bGUgeyB9XHJcbiJdfQ==
