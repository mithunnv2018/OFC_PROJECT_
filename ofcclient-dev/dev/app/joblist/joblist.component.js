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
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var index_1 = require('../shared/joblist/index');
var app_component_1 = require('../app.component');
var JoblistComponent = (function () {
    function JoblistComponent(router, localService, appComponent, fb, route, mycur, mydate1, emailval) {
        var _this = this;
        this.router = router;
        this.localService = localService;
        this.appComponent = appComponent;
        this.fb = fb;
        this.route = route;
        this.mycur = mycur;
        this.mydate1 = mydate1;
        this.emailval = emailval;
        this.msgs = [];
        this.drpMaincat = [];
        this.selectedMaincat = [];
        this.checked = false;
        this.localService.getMainCat('dummy').subscribe(function (p) { _this.drpMaincat = p; _this.drpMaincat.unshift({ label: "Select Category", value: "1" }); }, function (e) { return console.log(e); }, function () { return console.log(_this.drpMaincat); });
        var data = sessionStorage.getItem('memberdetails');
        var ofcmemsession = JSON.parse(data);
        this.sessionid = ofcmemsession.ofcmemsession_id;
        this.localService.getAllProjects(this.sessionid).subscribe(function (p) { return _this.joblistGrid = p; }, function (e) { return console.log("my error " + e, e); }, function () { return console.log(_this.joblistGrid); });
    }
    JoblistComponent.prototype.ngOnInit = function () {
        this.clear();
    };
    JoblistComponent.prototype.clear = function () {
        this.newjoblists = true;
        this.joblists = {
            ofcprojectpost_id: '',
            ofcprojectpost_budget: '',
            ofcprojectpost_negotiable: '',
            ofcprojectpost_title: '',
            ofcprojectpost_description: '',
            ofcprojectpost_timeframe: '',
            ofcprojectpost_typepreference: '',
            ofcprojectpost_kind: '',
            ofcprojectpost_budgetamount: '',
            ofcprojectpost_commissionpercentage: '',
            ofcprojectpost_ofccommission: '',
            ofcprojectpost_estimatestartdate: '',
            ofcprojectpost_startdate: '',
            ofcprojectpost_enddate: '',
            ofcprojectpost_invitefreelancers: '',
            ofcprojectpost_public: '',
            subcat_id_fkprojectpost: '',
            country_id_fkprojectpost: '',
            language_id_fkprojectpost: '',
            experience_id_fkprojectpost: '',
            ofcprojectpost_projectamount: '',
            ofcprojectpost_advanceamount: '',
            ofcprojectpost_finalpaidamount: '',
            ofcprojectpost_ispaymenttermsagreed: '',
            ofcprojectpost_ispaid: '',
            ofcprojectpost_iscompleted: '',
            ofcprojectpost_delayed: '',
            ofcprojectpost_istermsaggreedbyme: '',
            ofcprojectpost_istermsaggreedbyfreelancer: '',
            ofcprojectpost_isdispute: '',
            ofcprojectpost_isrefundrequested: '',
            ofcprojectpost_isrefunded: '',
            ofcprojectpost_isdisputeresolved: '',
            createdate: '',
            modifieddate: '',
            status: '',
            filearr: []
        };
    };
    JoblistComponent.prototype.getSkillList = function (skillList) {
        var a = "";
        for (var i = 0; i < skillList.length; i++) {
            var c = skillList[i].skill_name;
            var b = '<div class="skills">' + c + '</div>';
            a += b;
        }
        return a;
    };
    ;
    JoblistComponent.prototype.displayMyProposal = function (ofcprojectpost_id) {
        this.router.navigate(['/myproposal', ofcprojectpost_id]);
    };
    JoblistComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-joblist',
            templateUrl: 'joblist.component.html',
            styleUrls: ['joblist.component.css'],
            providers: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.JoblistService, app_component_1.AppComponent, forms_1.FormBuilder, router_1.ActivatedRoute, first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate])
    ], JoblistComponent);
    return JoblistComponent;
}());
exports.JoblistComponent = JoblistComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9qb2JsaXN0L2pvYmxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsc0JBQWdFLGdCQUFnQixDQUFDLENBQUE7QUFTakYsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFHekQsMkJBQStCLDRCQUE0QixDQUFDLENBQUE7QUFHNUQsa0NBQTZCLG1DQUFtQyxDQUFDLENBQUE7QUFDakUsbUNBQThCLG9DQUFvQyxDQUFDLENBQUE7QUFLbkUsc0JBQStCLHlCQUF5QixDQUFDLENBQUE7QUFFekQsOEJBQTZCLGtCQUFrQixDQUFDLENBQUE7QUFjaEQ7SUF5QkUsMEJBQ1UsTUFBYyxFQUNkLFlBQTRCLEVBQzVCLFlBQTBCLEVBQzFCLEVBQWUsRUFDZixLQUFxQixFQUNyQixLQUFxQixFQUNyQixPQUFxQixFQUNyQixRQUF1QjtRQWpDbkMsaUJBeUhDO1FBL0ZXLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFDNUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQWhDakMsU0FBSSxHQUFjLEVBQUUsQ0FBQztRQVFyQixlQUFVLEdBQWlCLEVBQUUsQ0FBQztRQVk5QixvQkFBZSxHQUFhLEVBQUUsQ0FBQztRQUUvQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBYXZCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBTSxLQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FB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QUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxHQUFHLHNCQUFzQixHQUFHLENBQUMsR0FBRyxRQUFRLENBQUM7WUFDOUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNULENBQUM7UUFDRCxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7SUFFSCw0Q0FBaUIsR0FBakIsVUFBa0IsaUJBQXdCO1FBRXhDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxFQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUUxRCxDQUFDO0lBL0hEO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FFMUIsQ0FBQzs7d0JBQUE7SUEwSEYsdUJBQUM7QUFBRCxDQXpIQSxBQXlIQyxJQUFBO0FBekhZLHdCQUFnQixtQkF5SDVCLENBQUEiLCJmaWxlIjoiYXBwL2pvYmxpc3Qvam9ibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IERhdGFUYWJsZU1vZHVsZSwgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBEaWFsb2dNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBJbnB1dFRleHRNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBDYWxlbmRhck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNZXNzYWdlc01vZHVsZSwgTWVzc2FnZSwgR3Jvd2wgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBQYW5lbE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IElucHV0VGV4dGFyZWFNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBNeUN1cnJlbmN5UGlwZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9maXJzdC5waXBlJztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IFNlbGVjdEl0ZW0gfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZSc7XHJcbmltcG9ydCB7IEN1c3RvbVZhbGlkYXRvciB9IGZyb20gJy4uL3NoYXJlZC92YWxpZGF0b3JzL3ZhbGlkYXRvci5kaXJlY3RpdmUnO1xyXG5cclxuaW1wb3J0IHsgT0ZDbWVtU2Vzc2lvbiB9IGZyb20gJy4uL2xvZ2lucGFnZS9vZmNtZW1zZXNzaW9uJztcclxuaW1wb3J0IHsgQ29tbW9uRXJyb3IgfSBmcm9tICcuLi9sb2dpbnBhZ2UvY29tbW9uZXJyb3InO1xyXG5pbXBvcnQgeyBKb2JsaXN0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9qb2JsaXN0L2luZGV4JztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4uL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPRkNQcm9qZWN0UG9zdERldGFpbHMgfSBmcm9tICcuL29mY3Byb2plY3Rwb3N0ZGV0YWlscyc7XHJcbmltcG9ydCB7IFNraWxsIH0gZnJvbSAnLi9za2lsbCc7XHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEFib3V0Q29tcG9uZW50LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NkLWpvYmxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnam9ibGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2pvYmxpc3QuY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW0FwcENvbXBvbmVudF1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKb2JsaXN0Q29tcG9uZW50IHtcclxuICBtc2dzOiBNZXNzYWdlW10gPSBbXTtcclxuICB1c2VyZm9ybTogRm9ybUdyb3VwO1xyXG4gIGJvb2xqb2JsaXN0OiBib29sZWFuO1xyXG5cclxuICBqb2JsaXN0czogT0ZDUHJvamVjdFBvc3REZXRhaWxzO1xyXG4gIG5ld2pvYmxpc3RzOiBib29sZWFuO1xyXG5cclxuICBqb2JsaXN0R3JpZDogT0ZDUHJvamVjdFBvc3REZXRhaWxzW107XHJcbiAgZHJwTWFpbmNhdDogU2VsZWN0SXRlbVtdID0gW107XHJcblxyXG5cclxuICBuZ01vZGVsY291bnRyeUlkOiBzdHJpbmc7XHJcbiAgbmdNb2RlbFN0YXRlSWQ6IHN0cmluZztcclxuXHJcbiAgc3VibWl0dGVkOiBib29sZWFuO1xyXG5cclxuICBjb21tb25FcnJvcjogQ29tbW9uRXJyb3I7XHJcbiAgc2Vzc2lvbmlkOiBzdHJpbmc7XHJcblxyXG4gIHZhbDogbnVtYmVyO1xyXG4gIHNlbGVjdGVkTWFpbmNhdDogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGxvY2FsU2VydmljZTogSm9ibGlzdFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50LFxyXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgbXljdXI6IE15Q3VycmVuY3lQaXBlLFxyXG4gICAgcHJpdmF0ZSBteWRhdGUxOiBNeURhdGVGb3JtYXQsXHJcbiAgICBwcml2YXRlIGVtYWlsdmFsOiBFbWFpbFZhbGlkYXRlXHJcbiAgKSB7XHJcblxyXG4gICAgdGhpcy5sb2NhbFNlcnZpY2UuZ2V0TWFpbkNhdCgnZHVtbXknKS5zdWJzY3JpYmUocCA9PiB7IHRoaXMuZHJwTWFpbmNhdCA9IHA7IHRoaXMuZHJwTWFpbmNhdC51bnNoaWZ0KHsgbGFiZWw6IFwiU2VsZWN0IENhdGVnb3J5XCIsIHZhbHVlOiBcIjFcIiB9KSB9LCBlID0+IGNvbnNvbGUubG9nKGUpLCAoKSA9PiBjb25zb2xlLmxvZyh0aGlzLmRycE1haW5jYXQpKTtcclxuICAgIHZhciBkYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbWVtYmVyZGV0YWlscycpO1xyXG4gICAgbGV0IG9mY21lbXNlc3Npb246IE9GQ21lbVNlc3Npb24gPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgdGhpcy5zZXNzaW9uaWQgPSBvZmNtZW1zZXNzaW9uLm9mY21lbXNlc3Npb25faWQ7XHJcbiAgICBcclxuICBcclxuICAgIHRoaXMubG9jYWxTZXJ2aWNlLmdldEFsbFByb2plY3RzKHRoaXMuc2Vzc2lvbmlkKS5zdWJzY3JpYmUocCA9PnRoaXMuam9ibGlzdEdyaWQgPSBwLFxyXG4gICAgICBlID0+IGNvbnNvbGUubG9nKFwibXkgZXJyb3IgXCIrZSxlKSxcclxuICAgICAgKCkgPT4gY29uc29sZS5sb2codGhpcy5qb2JsaXN0R3JpZCkpO1xyXG4gIH1cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIHRoaXMuY2xlYXIoKTtcclxuXHJcbiAgICBcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKFwiam9ibGlzdEdyaWQgXCIsIHRoaXMuam9ibGlzdEdyaWQpO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMubmV3am9ibGlzdHMgPSB0cnVlO1xyXG4gICAgdGhpcy5qb2JsaXN0cyA9IHtcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfaWQ6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9idWRnZXQ6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9uZWdvdGlhYmxlOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfdGl0bGU6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9kZXNjcmlwdGlvbjogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X3RpbWVmcmFtZTogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X3R5cGVwcmVmZXJlbmNlOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3Rfa2luZDogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2J1ZGdldGFtb3VudDogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2NvbW1pc3Npb25wZXJjZW50YWdlOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3Rfb2ZjY29tbWlzc2lvbjogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2VzdGltYXRlc3RhcnRkYXRlOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3Rfc3RhcnRkYXRlOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfZW5kZGF0ZTogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2ludml0ZWZyZWVsYW5jZXJzOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfcHVibGljOiAnJyxcclxuICAgICAgc3ViY2F0X2lkX2ZrcHJvamVjdHBvc3Q6ICcnLFxyXG4gICAgICBjb3VudHJ5X2lkX2ZrcHJvamVjdHBvc3Q6ICcnLFxyXG4gICAgICBsYW5ndWFnZV9pZF9ma3Byb2plY3Rwb3N0OiAnJyxcclxuICAgICAgZXhwZXJpZW5jZV9pZF9ma3Byb2plY3Rwb3N0OiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfcHJvamVjdGFtb3VudDogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2FkdmFuY2VhbW91bnQ6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9maW5hbHBhaWRhbW91bnQ6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9pc3BheW1lbnR0ZXJtc2FncmVlZDogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2lzcGFpZDogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2lzY29tcGxldGVkOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfZGVsYXllZDogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2lzdGVybXNhZ2dyZWVkYnltZTogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2lzdGVybXNhZ2dyZWVkYnlmcmVlbGFuY2VyOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfaXNkaXNwdXRlOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfaXNyZWZ1bmRyZXF1ZXN0ZWQ6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9pc3JlZnVuZGVkOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfaXNkaXNwdXRlcmVzb2x2ZWQ6ICcnLFxyXG4gICAgICBjcmVhdGVkYXRlOiAnJyxcclxuICAgICAgbW9kaWZpZWRkYXRlOiAnJyxcclxuICAgICAgc3RhdHVzOiAnJyxcclxuICAgICAgZmlsZWFycjogW11cclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0U2tpbGxMaXN0KHNraWxsTGlzdDogU2tpbGxbXSk6IHN0cmluZyB7XHJcbiAgICBsZXQgYTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNraWxsTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgYyA9IHNraWxsTGlzdFtpXS5za2lsbF9uYW1lO1xyXG4gICAgICBsZXQgYiA9ICc8ZGl2IGNsYXNzPVwic2tpbGxzXCI+JyArIGMgKyAnPC9kaXY+JztcclxuICAgICAgYSArPSBiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGE7XHJcbiAgfTtcclxuXHJcbmRpc3BsYXlNeVByb3Bvc2FsKG9mY3Byb2plY3Rwb3N0X2lkOnN0cmluZylcclxue1xyXG4gIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL215cHJvcG9zYWwnLG9mY3Byb2plY3Rwb3N0X2lkXSk7XHJcbiAgXHJcbn1cclxuXHJcbn1cclxuIl19
