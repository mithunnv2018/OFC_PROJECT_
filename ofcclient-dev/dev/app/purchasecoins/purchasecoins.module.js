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
var purchasecoins_component_1 = require('./purchasecoins.component');
var purchasecoins_routing_module_1 = require('./purchasecoins-routing.module');
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
var purchasecoins_service_1 = require('../shared/purchasecoins/purchasecoins.service');
var commonbrowsetopskills_module_1 = require('../commonbrowsetopskills/commonbrowsetopskills.module');
var commonsettings_module_1 = require('../commonsettings/commonsettings.module');
var PurchasecoinsModule = (function () {
    function PurchasecoinsModule() {
    }
    PurchasecoinsModule = __decorate([
        core_1.NgModule({
            imports: [commonbrowsetopskills_module_1.CommonBrowseTopSkillsModule, common_1.CommonModule, purchasecoins_routing_module_1.PurchasecoinsRoutingModule, forms_1.FormsModule, primeng_8.DropdownModule, primeng_9.CalendarModule, primeng_7.FileUploadModule,
                primeng_6.DataTableModule, forms_1.ReactiveFormsModule, primeng_5.InputTextModule, primeng_2.GrowlModule, commonsettings_module_1.CommonsettingsModule,
                primeng_4.ButtonModule, primeng_1.PanelModule, primeng_3.MessagesModule],
            declarations: [purchasecoins_component_1.PurchasecoinsComponent],
            exports: [purchasecoins_component_1.PurchasecoinsComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, purchasecoins_service_1.PurchasecoinsService]
        }), 
        __metadata('design:paramtypes', [])
    ], PurchasecoinsModule);
    return PurchasecoinsModule;
}());
exports.PurchasecoinsModule = PurchasecoinsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wdXJjaGFzZWNvaW5zL3B1cmNoYXNlY29pbnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msd0NBQXVDLDJCQUEyQixDQUFDLENBQUE7QUFDbkUsNkNBQTJDLGdDQUFnQyxDQUFDLENBQUE7QUFFNUUsd0JBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFDNUMsc0JBQThDLGdCQUFnQixDQUFDLENBQUE7QUFDL0Qsd0JBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFDNUMsd0JBQTJDLGlCQUFpQixDQUFDLENBQUE7QUFFN0Qsd0JBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0Msd0JBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsd0JBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsd0JBQStCLGlCQUFpQixDQUFDLENBQUE7QUFDakQsd0JBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msd0JBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFFL0MsMkJBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsa0NBQTZCLG1DQUFtQyxDQUFDLENBQUE7QUFFakUsbUNBQThCLG9DQUFvQyxDQUFDLENBQUE7QUFDbkUsc0NBQW1DLCtDQUErQyxDQUFDLENBQUE7QUFDbkYsNkNBQTBDLHVEQUF1RCxDQUFDLENBQUE7QUFDbEcsc0NBQW1DLHlDQUF5QyxDQUFDLENBQUE7QUFTN0U7SUFBQTtJQUFtQyxDQUFDO0lBUnBDO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsMERBQTJCLEVBQUMscUJBQVksRUFBRSx5REFBMEIsRUFBQyxtQkFBVyxFQUFDLHdCQUFjLEVBQUMsd0JBQWMsRUFBQywwQkFBZ0I7Z0JBQ3pJLHlCQUFlLEVBQUMsMkJBQW1CLEVBQUMseUJBQWUsRUFBQyxxQkFBVyxFQUFDLDRDQUFvQjtnQkFDcEYsc0JBQVksRUFBQyxxQkFBVyxFQUFDLHdCQUFjLENBQUM7WUFDeEMsWUFBWSxFQUFFLENBQUMsZ0RBQXNCLENBQUM7WUFDdEMsT0FBTyxFQUFFLENBQUMsZ0RBQXNCLENBQUM7WUFDakMsU0FBUyxFQUFFLENBQUMsMkJBQWMsRUFBQyxnQ0FBWSxFQUFDLGtDQUFhLEVBQUMsNENBQW9CLENBQUM7U0FDNUUsQ0FBQzs7MkJBQUE7SUFDaUMsMEJBQUM7QUFBRCxDQUFuQyxBQUFvQyxJQUFBO0FBQXZCLDJCQUFtQixzQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9wdXJjaGFzZWNvaW5zL3B1cmNoYXNlY29pbnMubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUHVyY2hhc2Vjb2luc0NvbXBvbmVudCB9IGZyb20gJy4vcHVyY2hhc2Vjb2lucy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQdXJjaGFzZWNvaW5zUm91dGluZ01vZHVsZSB9IGZyb20gJy4vcHVyY2hhc2Vjb2lucy1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7Rm9ybUdyb3VwLEZvcm1Db250cm9sLFZhbGlkYXRvcnMsRm9ybUJ1aWxkZXJ9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xyXG5pbXBvcnQge1BhbmVsTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtHcm93bE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtNZXNzYWdlc01vZHVsZSxNZXNzYWdlLEdyb3dsfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtCdXR0b25Nb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7SW5wdXRUZXh0TW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0RhdGFUYWJsZU1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtGaWxlVXBsb2FkTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0Ryb3Bkb3duTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0NhbGVuZGFyTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5cclxuaW1wb3J0IHsgTXlDdXJyZW5jeVBpcGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZmlyc3QucGlwZSc7XHJcbmltcG9ydCB7IE15RGF0ZUZvcm1hdCB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9teWRhdGVmb3JtYXQucGlwZSc7XHJcblxyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZSc7XHJcbmltcG9ydCB7UHVyY2hhc2Vjb2luc1NlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9wdXJjaGFzZWNvaW5zL3B1cmNoYXNlY29pbnMuc2VydmljZSc7XHJcbmltcG9ydCB7Q29tbW9uQnJvd3NlVG9wU2tpbGxzTW9kdWxlfSBmcm9tICcuLi9jb21tb25icm93c2V0b3Bza2lsbHMvY29tbW9uYnJvd3NldG9wc2tpbGxzLm1vZHVsZSc7XHJcbmltcG9ydCB7Q29tbW9uc2V0dGluZ3NNb2R1bGV9IGZyb20gJy4uL2NvbW1vbnNldHRpbmdzL2NvbW1vbnNldHRpbmdzLm1vZHVsZSc7XHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbkJyb3dzZVRvcFNraWxsc01vZHVsZSxDb21tb25Nb2R1bGUsIFB1cmNoYXNlY29pbnNSb3V0aW5nTW9kdWxlLEZvcm1zTW9kdWxlLERyb3Bkb3duTW9kdWxlLENhbGVuZGFyTW9kdWxlLEZpbGVVcGxvYWRNb2R1bGUsXHJcbiAgRGF0YVRhYmxlTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGUsSW5wdXRUZXh0TW9kdWxlLEdyb3dsTW9kdWxlLENvbW1vbnNldHRpbmdzTW9kdWxlLFxyXG4gIEJ1dHRvbk1vZHVsZSxQYW5lbE1vZHVsZSxNZXNzYWdlc01vZHVsZV0sLy8sUGFuZWxNb2R1bGUsTWVzc2FnZXNNb2R1bGUsR3Jvd2xdLFxyXG4gIGRlY2xhcmF0aW9uczogW1B1cmNoYXNlY29pbnNDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtQdXJjaGFzZWNvaW5zQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtNeUN1cnJlbmN5UGlwZSxNeURhdGVGb3JtYXQsRW1haWxWYWxpZGF0ZSxQdXJjaGFzZWNvaW5zU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFB1cmNoYXNlY29pbnNNb2R1bGUgeyB9XHJcbiJdfQ==
