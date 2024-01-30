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
var searchfreelancersdetails_component_1 = require('./searchfreelancersdetails.component');
var searchfreelancersdetails_routing_module_1 = require('./searchfreelancersdetails-routing.module');
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
var searchfreelancersdetails_service_1 = require('../shared/searchfreelancersdetails/searchfreelancersdetails.service');
var primeng_10 = require('primeng/primeng');
var primeng_11 = require('primeng/primeng');
var commonbrowsetopskills_module_1 = require('../commonbrowsetopskills/commonbrowsetopskills.module');
var SearchFreeLancersDetailsModule = (function () {
    function SearchFreeLancersDetailsModule() {
    }
    SearchFreeLancersDetailsModule = __decorate([
        core_1.NgModule({
            imports: [commonbrowsetopskills_module_1.CommonBrowseTopSkillsModule, common_1.CommonModule, primeng_6.DataListModule, primeng_10.RatingModule, primeng_11.ProgressBarModule, searchfreelancersdetails_routing_module_1.SearchFreeLancersDetailsRoutingModule, forms_1.FormsModule, primeng_8.DropdownModule, primeng_9.CalendarModule, primeng_7.FileUploadModule, primeng_6.DataTableModule, forms_1.ReactiveFormsModule, primeng_5.InputTextModule, primeng_2.GrowlModule, primeng_4.ButtonModule, primeng_1.PanelModule, primeng_3.MessagesModule],
            declarations: [searchfreelancersdetails_component_1.SearchFreeLancersDetailsComponent],
            exports: [searchfreelancersdetails_component_1.SearchFreeLancersDetailsComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, searchfreelancersdetails_service_1.SearchFreeLancersDetailsService]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchFreeLancersDetailsModule);
    return SearchFreeLancersDetailsModule;
}());
exports.SearchFreeLancersDetailsModule = SearchFreeLancersDetailsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZWFyY2hmcmVlbGFuY2Vyc2RldGFpbHMvc2VhcmNoZnJlZWxhbmNlcnNkZXRhaWxzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLG1EQUFrRCxzQ0FBc0MsQ0FBQyxDQUFBO0FBQ3pGLHdEQUFzRCwyQ0FBMkMsQ0FBQyxDQUFBO0FBRWxHLHdCQUEwQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzVDLHNCQUE4QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQy9ELHdCQUEwQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzVDLHdCQUEyQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRTdELHdCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHdCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHdCQUE2QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQy9ELHdCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pELHdCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHdCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLDJCQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELGtDQUE2QixtQ0FBbUMsQ0FBQyxDQUFBO0FBRWpFLG1DQUE4QixvQ0FBb0MsQ0FBQyxDQUFBO0FBQ25FLGlEQUE4QyxxRUFBcUUsQ0FBQyxDQUFBO0FBQ3BILHlCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHlCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2xELDZDQUEwQyx1REFBdUQsQ0FBQyxDQUFBO0FBUWxHO0lBQUE7SUFBOEMsQ0FBQztJQU4vQztRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLDBEQUEyQixFQUFDLHFCQUFZLEVBQUMsd0JBQWMsRUFBQyx1QkFBWSxFQUFDLDRCQUFpQixFQUFFLCtFQUFxQyxFQUFDLG1CQUFXLEVBQUMsd0JBQWMsRUFBQyx3QkFBYyxFQUFDLDBCQUFnQixFQUFDLHlCQUFlLEVBQUMsMkJBQW1CLEVBQUMseUJBQWUsRUFBQyxxQkFBVyxFQUFDLHNCQUFZLEVBQUMscUJBQVcsRUFBQyx3QkFBYyxDQUFDO1lBQzNTLFlBQVksRUFBRSxDQUFDLHNFQUFpQyxDQUFDO1lBQ2pELE9BQU8sRUFBRSxDQUFDLHNFQUFpQyxDQUFDO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDJCQUFjLEVBQUMsZ0NBQVksRUFBQyxrQ0FBYSxFQUFDLGtFQUErQixDQUFDO1NBQ3ZGLENBQUM7O3NDQUFBO0lBQzRDLHFDQUFDO0FBQUQsQ0FBOUMsQUFBK0MsSUFBQTtBQUFsQyxzQ0FBOEIsaUNBQUksQ0FBQSIsImZpbGUiOiJhcHAvc2VhcmNoZnJlZWxhbmNlcnNkZXRhaWxzL3NlYXJjaGZyZWVsYW5jZXJzZGV0YWlscy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBTZWFyY2hGcmVlTGFuY2Vyc0RldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaGZyZWVsYW5jZXJzZGV0YWlscy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWFyY2hGcmVlTGFuY2Vyc0RldGFpbHNSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9zZWFyY2hmcmVlbGFuY2Vyc2RldGFpbHMtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cCxGb3JtQ29udHJvbCxWYWxpZGF0b3JzLEZvcm1CdWlsZGVyfSBmcm9tICdAYW5ndWxhci9mb3JtcydcclxuaW1wb3J0IHtQYW5lbE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7R3Jvd2xNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7TWVzc2FnZXNNb2R1bGUsTWVzc2FnZSxHcm93bH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7QnV0dG9uTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0lucHV0VGV4dE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtEYXRhVGFibGVNb2R1bGUsRGF0YUxpc3RNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7RmlsZVVwbG9hZE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtEcm9wZG93bk1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtDYWxlbmRhck1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuXHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5cclxuaW1wb3J0IHsgRW1haWxWYWxpZGF0ZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9lbWFpbHZhbGlkYXRlLnBpcGUnO1xyXG5pbXBvcnQge1NlYXJjaEZyZWVMYW5jZXJzRGV0YWlsc1NlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9zZWFyY2hmcmVlbGFuY2Vyc2RldGFpbHMvc2VhcmNoZnJlZWxhbmNlcnNkZXRhaWxzLnNlcnZpY2UnO1xyXG5pbXBvcnQge1JhdGluZ01vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtQcm9ncmVzc0Jhck1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtDb21tb25Ccm93c2VUb3BTa2lsbHNNb2R1bGV9IGZyb20gJy4uL2NvbW1vbmJyb3dzZXRvcHNraWxscy9jb21tb25icm93c2V0b3Bza2lsbHMubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbkJyb3dzZVRvcFNraWxsc01vZHVsZSxDb21tb25Nb2R1bGUsRGF0YUxpc3RNb2R1bGUsUmF0aW5nTW9kdWxlLFByb2dyZXNzQmFyTW9kdWxlLCBTZWFyY2hGcmVlTGFuY2Vyc0RldGFpbHNSb3V0aW5nTW9kdWxlLEZvcm1zTW9kdWxlLERyb3Bkb3duTW9kdWxlLENhbGVuZGFyTW9kdWxlLEZpbGVVcGxvYWRNb2R1bGUsRGF0YVRhYmxlTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGUsSW5wdXRUZXh0TW9kdWxlLEdyb3dsTW9kdWxlLEJ1dHRvbk1vZHVsZSxQYW5lbE1vZHVsZSxNZXNzYWdlc01vZHVsZV0sLy8sUGFuZWxNb2R1bGUsTWVzc2FnZXNNb2R1bGUsR3Jvd2xdLFxyXG4gIGRlY2xhcmF0aW9uczogW1NlYXJjaEZyZWVMYW5jZXJzRGV0YWlsc0NvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1NlYXJjaEZyZWVMYW5jZXJzRGV0YWlsc0NvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbTXlDdXJyZW5jeVBpcGUsTXlEYXRlRm9ybWF0LEVtYWlsVmFsaWRhdGUsU2VhcmNoRnJlZUxhbmNlcnNEZXRhaWxzU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaEZyZWVMYW5jZXJzRGV0YWlsc01vZHVsZSB7IH1cclxuIl19
