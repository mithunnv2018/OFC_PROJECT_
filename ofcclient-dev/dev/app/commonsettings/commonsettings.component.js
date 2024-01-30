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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var first_pipe_1 = require('../shared/pipes/first.pipe');
var index_1 = require('../shared/commonsettings/index');
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var baseurl_service_1 = require('../shared/baseurl/baseurl.service');
var CommonsettingsComponent = (function () {
    function CommonsettingsComponent(fb, route, router, localService, mycur, mydate1, emailval, baseUrlservice) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.localService = localService;
        this.mycur = mycur;
        this.mydate1 = mydate1;
        this.emailval = emailval;
        this.baseUrlservice = baseUrlservice;
        this.msgs = [];
        this.mybaseurl = baseUrlservice.getBaseurl();
    }
    CommonsettingsComponent.prototype.clear = function () {
        this.newcommonsettings = true;
        this.commonsettings = {
            status: 'active',
            comp_id: '',
            member_id: '',
            commonsettings_id: '1',
            commonsettings_name: '',
            commonsettings_budget: '',
            commonsettings_enddate: '',
            commonsettings_remarks: '',
            commonsettings_manhours: '',
            Commonsettings_timeframe: '',
            commonsettings_completed: 'No',
            commonsettings_startdate: '',
            commonsettings_commission: '',
            commonsettings_description: '',
            commonsettings_requireddaystocomplete: '',
        };
    };
    CommonsettingsComponent.prototype.ngOnInit = function () {
        this.clear();
    };
    __decorate([
        core_1.Input("pagetype"), 
        __metadata('design:type', String)
    ], CommonsettingsComponent.prototype, "pagetype", void 0);
    CommonsettingsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-commonsettings',
            templateUrl: 'commonsettings.component.html',
            styleUrls: ['commonsettings.component.css'],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, baseurl_service_1.BaseUrlService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, index_1.CommonsettingsService, first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, baseurl_service_1.BaseUrlService])
    ], CommonsettingsComponent);
    return CommonsettingsComponent;
}());
exports.CommonsettingsComponent = CommonsettingsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21tb25zZXR0aW5ncy9jb21tb25zZXR0aW5ncy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQUN2RCxzQkFBMkQsZ0JBQWdCLENBQUMsQ0FBQTtBQUk1RSx1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQVN6RCwyQkFBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUM1RCxzQkFBc0MsZ0NBQWdDLENBQUMsQ0FBQTtBQUl2RSxrQ0FBNkIsbUNBQW1DLENBQUMsQ0FBQTtBQUNqRSxtQ0FBOEIsb0NBQW9DLENBQUMsQ0FBQTtBQUVuRSxnQ0FBNkIsbUNBQW1DLENBQUMsQ0FBQTtBQVdqRTtJQXFDRSxpQ0FBb0IsRUFBZSxFQUNmLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxZQUFtQyxFQUNuQyxLQUFxQixFQUNyQixPQUFxQixFQUNyQixRQUF1QixFQUN2QixjQUE2QjtRQVA3QixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUF1QjtRQUNuQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUF2Q2pELFNBQUksR0FBWSxFQUFFLENBQUM7UUF5Q1YsSUFBSSxDQUFDLFNBQVMsR0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUM7SUFHcEQsQ0FBQztJQXJDRCx1Q0FBSyxHQUFMO1FBQ00sSUFBSSxDQUFDLGlCQUFpQixHQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFDO1lBRWxCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLE9BQU8sRUFBRSxFQUFFO1lBQ1gsU0FBUyxFQUFFLEVBQUU7WUFDYixpQkFBaUIsRUFBQyxHQUFHO1lBQ3JCLG1CQUFtQixFQUFDLEVBQUU7WUFDdEIscUJBQXFCLEVBQUMsRUFBRTtZQUN4QixzQkFBc0IsRUFBQyxFQUFFO1lBQ3pCLHNCQUFzQixFQUFDLEVBQUU7WUFDekIsdUJBQXVCLEVBQUMsRUFBRTtZQUMxQix3QkFBd0IsRUFBQyxFQUFFO1lBQzNCLHdCQUF3QixFQUFDLElBQUk7WUFDN0Isd0JBQXdCLEVBQUMsRUFBRTtZQUMzQix5QkFBeUIsRUFBQyxFQUFFO1lBQzVCLDBCQUEwQixFQUFDLEVBQUU7WUFDN0IscUNBQXFDLEVBQUMsRUFBRTtTQUMzQyxDQUFBO0lBR0wsQ0FBQztJQWtCSCwwQ0FBUSxHQUFSO1FBRU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRWpCLENBQUM7SUFyREQ7UUFBQyxZQUFLLENBQUMsVUFBVSxDQUFDOzs2REFBQTtJQVZwQjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1lBQzNDLFNBQVMsRUFBQyxDQUFDLDJCQUFjLEVBQUMsZ0NBQVksRUFBQyxrQ0FBYSxFQUFDLGdDQUFjLENBQUM7U0FDckUsQ0FBQzs7K0JBQUE7SUE2REQsOEJBQUM7QUFBRCxDQTVERCxBQTRERSxJQUFBO0FBNURXLCtCQUF1QiwwQkE0RGxDLENBQUEiLCJmaWxlIjoiYXBwL2NvbW1vbnNldHRpbmdzL2NvbW1vbnNldHRpbmdzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxPbkluaXQsSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtR3JvdXAsRm9ybUNvbnRyb2wsVmFsaWRhdG9ycyxGb3JtQnVpbGRlcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtNZXNzYWdlc01vZHVsZSxNZXNzYWdlLEdyb3dsfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge1BhbmVsTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtCdXR0b25Nb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7Q29tbW9uc2V0dGluZ3N9IGZyb20gJy4vY29tbW9uc2V0dGluZ3MnO1xyXG5pbXBvcnQge0Ryb3Bkb3duMX0gZnJvbSAnLi9kcm9wZG93bjEnO1xyXG5pbXBvcnQge0ZpbGVVcGxvYWR9IGZyb20gJy4vZmlsZXVwbG9hZCc7XHJcbmltcG9ydCB7RGF0YVRhYmxlTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0Ryb3Bkb3duTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5cclxuXHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBDb21tb25zZXR0aW5nc1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvY29tbW9uc2V0dGluZ3MvaW5kZXgnO1xyXG5cclxuaW1wb3J0IHtGaWxlVXBsb2FkTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge1NlbGVjdEl0ZW19IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE15RGF0ZUZvcm1hdCB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9teWRhdGVmb3JtYXQucGlwZSc7XHJcbmltcG9ydCB7IEVtYWlsVmFsaWRhdGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZW1haWx2YWxpZGF0ZS5waXBlJztcclxuaW1wb3J0IHsgQ3VzdG9tVmFsaWRhdG9yIH0gZnJvbSAnLi4vc2hhcmVkL3ZhbGlkYXRvcnMvdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7QmFzZVVybFNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9iYXNldXJsL2Jhc2V1cmwuc2VydmljZSc7XHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIGNvbW1vbnNldHRpbmdzQ29tcG9uZW50LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NkLWNvbW1vbnNldHRpbmdzJyxcclxuICB0ZW1wbGF0ZVVybDogJ2NvbW1vbnNldHRpbmdzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnY29tbW9uc2V0dGluZ3MuY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczpbTXlDdXJyZW5jeVBpcGUsTXlEYXRlRm9ybWF0LEVtYWlsVmFsaWRhdGUsQmFzZVVybFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21tb25zZXR0aW5nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICBASW5wdXQoXCJwYWdldHlwZVwiKSBwYWdldHlwZTpzdHJpbmc7XHJcblxyXG4gIG1zZ3M6IE1lc3NhZ2VbXT1bXTtcclxuICBzdWJtaXR0ZWQ6IGJvb2xlYW47XHJcbiAgY29tbW9uc2V0dGluZ3M6IENvbW1vbnNldHRpbmdzO1xyXG4gIG5ld2NvbW1vbnNldHRpbmdzOiBib29sZWFuO1xyXG4gIG15YmFzZXVybDpzdHJpbmc7XHJcblxyXG4gIC8vUHJlcGFyZSBkYXRhIGZvciBuZXcgZW50cnkgb3IgaW5pdGl6ZSBkYXRhIGR1cmluZyBmb3JtIGxvYWQgYnkgY2xlYXJpbmcgZGF0YSBvciBwcmVzZXR0aW5nIGRhdGFcclxuICBjbGVhcigpe1xyXG4gICAgICAgIHRoaXMubmV3Y29tbW9uc2V0dGluZ3M9dHJ1ZTtcclxuICAgICAgICB0aGlzLmNvbW1vbnNldHRpbmdzPXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBzdGF0dXMgOidhY3RpdmUnLFxyXG4gICAgICAgICAgY29tcF9pZCA6JycsXHJcbiAgICAgICAgICBtZW1iZXJfaWQgOicnLFxyXG4gICAgICAgICAgY29tbW9uc2V0dGluZ3NfaWQ6JzEnLFxyXG4gICAgICAgICAgY29tbW9uc2V0dGluZ3NfbmFtZTonJyxcclxuICAgICAgICAgIGNvbW1vbnNldHRpbmdzX2J1ZGdldDonJyxcclxuICAgICAgICAgIGNvbW1vbnNldHRpbmdzX2VuZGRhdGU6JycsXHJcbiAgICAgICAgICBjb21tb25zZXR0aW5nc19yZW1hcmtzOicnLFxyXG4gICAgICAgICAgY29tbW9uc2V0dGluZ3NfbWFuaG91cnM6JycsXHJcbiAgICAgICAgICBDb21tb25zZXR0aW5nc190aW1lZnJhbWU6JycsXHJcbiAgICAgICAgICBjb21tb25zZXR0aW5nc19jb21wbGV0ZWQ6J05vJyxcclxuICAgICAgICAgIGNvbW1vbnNldHRpbmdzX3N0YXJ0ZGF0ZTonJyxcclxuICAgICAgICAgIGNvbW1vbnNldHRpbmdzX2NvbW1pc3Npb246JycsXHJcbiAgICAgICAgICBjb21tb25zZXR0aW5nc19kZXNjcmlwdGlvbjonJyxcclxuICAgICAgICAgIGNvbW1vbnNldHRpbmdzX3JlcXVpcmVkZGF5c3RvY29tcGxldGU6JycsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gIH1cclxuXHJcbiAgLy8gY29uc3RydWN0b3IgaW5pdGlhemUgb2YgYWxsIG5lY2Vzc2FyeSB2YXJpYWJsZSBhbmQgb2JqZWN0c1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBsb2NhbFNlcnZpY2U6IENvbW1vbnNldHRpbmdzU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG15Y3VyOiBNeUN1cnJlbmN5UGlwZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG15ZGF0ZTE6IE15RGF0ZUZvcm1hdCxcclxuICAgICAgICAgICAgICBwcml2YXRlIGVtYWlsdmFsOiBFbWFpbFZhbGlkYXRlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYmFzZVVybHNlcnZpY2U6QmFzZVVybFNlcnZpY2VcclxuICAgICAgICAgICAgICApe1xyXG4gICAgICAgICAgIHRoaXMubXliYXNldXJsPWJhc2VVcmxzZXJ2aWNlLmdldEJhc2V1cmwoKTsgICAgIFxyXG4gICAgICAgICBcclxuICAgIFxyXG4gIH1cclxuXHJcbiBcclxubmdPbkluaXQoKSB7IFxyXG4gICAgICBcclxuICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgXHJcbiAgfVxyXG4gXHJcbiAgXHJcblxyXG4gfVxyXG4iXX0=
