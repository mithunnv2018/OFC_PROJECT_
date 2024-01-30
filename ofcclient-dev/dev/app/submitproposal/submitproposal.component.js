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
var index_1 = require('../shared/submitproposal/index');
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var baseurl_service_1 = require('../shared/baseurl/baseurl.service');
var SubmitproposalComponent = (function () {
    function SubmitproposalComponent(fb, route, router, localService, mycur, mydate1, emailval, baseUrlservice) {
        var _this = this;
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
        var data = sessionStorage.getItem('memberdetails');
        var ofcmemsession = JSON.parse(data);
        this.sessionid = ofcmemsession.ofcmemsession_id;
        this.localService.getAllSubmittedProposals(this.sessionid).subscribe(function (p) { return _this.submittedProposalList = p; }, function (e) { return console.log("my error " + e, e); }, function () { });
    }
    SubmitproposalComponent.prototype.clear = function () {
        this.newsubmitproposal = true;
        this.submitproposal = {
            status: '',
            skillsarr: [],
            createdate: '',
            subcat_name: '',
            country_name: '',
            maincat_name: '',
            modifieddate: '',
            experience_name: '',
            projectpostdate: '',
            ofcprojectpost_id: '',
            ofcprojectpost_kind: '',
            ofcprojectpost_title: '',
            ofcsubmitproposal_id: '',
            ofcprojectpost_budget: '',
            ofcprojectpost_ispaid: '',
            ofcprojectpost_public: '',
            ofcprojectpost_delayed: '',
            ofcprojectpost_enddate: '',
            ofcsubmitproposal_terms: '',
            subcat_id_fkprojectpost: '',
            country_id_fkprojectpost: '',
            ofcprojectpost_isdispute: '',
            ofcprojectpost_startdate: '',
            ofcprojectpost_timeframe: '',
            ofcsubmitproposal_budget: '',
            ofcsubmitproposal_status: '',
            language_id_fkprojectpost: '',
            ofcprojectpost_isrefunded: '',
            ofcprojectpost_negotiable: '',
            ofcsubmitproposal_enddate: '',
            ofcsubmitproposal_remarks: '',
            ofcprojectpost_description: '',
            ofcprojectpost_iscompleted: '',
            experience_id_fkprojectpost: '',
            ofcmembers_id_fkprojectpost: '',
            ofcprojectpost_budgetamount: '',
            ofcsubmitproposal_startdate: '',
            ofcsubmitproposal_timeframe: '',
            ofcprojectpost_advanceamount: '',
            ofcprojectpost_ofccommission: '',
            ofcprojectpost_projectamount: '',
            ofcsubmitproposal_negotiable: '',
            ofcsubmitproposal_workstatus: '',
            ofcprojectpost_typepreference: '',
            ofcsubmitproposal_coverletter: '',
            ofcsubmitproposal_finalamount: '',
            ofcmembers_id_fksubmitproposal: '',
            ofcprojectpost_finalpaidamount: '',
            ofcsubmitproposal_availability: '',
            ofcsubmitproposal_estimatedays: '',
            ofcsubmitproposal_completeddate: '',
            ofcprojectpost_estimatestartdate: '',
            ofcprojectpost_invitefreelancers: '',
            ofcprojectpost_isdisputeresolved: '',
            ofcprojectpost_isrefundrequested: '',
            ofcprojectpost_istermsaggreedbyme: '',
            ofcsubmitproposal_commissionamount: '',
            ofcprojectpost_commissionpercentage: '',
            ofcprojectpost_ispaymenttermsagreed: '',
            ofcsubmitproposal_estimatestartdate: '',
            ofcsubmitproposal_proposalacceptdate: '',
            ofcsubmitproposal_proposalrejectdate: '',
            ofcsubmitproposal_commissionpercentage: '',
            ofcsubmitproposal_estimatedhoursindays: '',
            ofcsubmitproposal_iscompletedbyemployeer: '',
            ofcsubmitproposal_reportabusebyemployeer: '',
            ofcprojectpost_istermsaggreedbyfreelancer: '',
            ofcsubmitproposal_iscompletedbyfreelancer: '',
            ofcsubmitproposal_reportabusebyfreelancer: ''
        };
    };
    SubmitproposalComponent.prototype.ngOnInit = function () {
    };
    SubmitproposalComponent.prototype.getSkillList = function (skillList) {
        var a = "";
        for (var i = 0; i < skillList.length; i++) {
            var c = skillList[i].skill_name;
            var b = '<div class="skills">' + c + '</div>';
            a += b;
        }
        return a;
    };
    ;
    SubmitproposalComponent.prototype.onRowSelect = function (ofcsubmitproposal_id) {
        this.router.navigate(['/myproposaldetails11', ofcsubmitproposal_id]);
    };
    SubmitproposalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-submitproposal',
            templateUrl: 'submitproposal.component.html',
            styleUrls: ['submitproposal.component.css'],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, baseurl_service_1.BaseUrlService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, index_1.SubmitproposalService, first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, baseurl_service_1.BaseUrlService])
    ], SubmitproposalComponent);
    return SubmitproposalComponent;
}());
exports.SubmitproposalComponent = SubmitproposalComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdWJtaXRwcm9wb3NhbC9zdWJtaXRwcm9wb3NhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQUlqRix1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQU16RCwyQkFBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUM1RCxzQkFBc0MsZ0NBQWdDLENBQUMsQ0FBQTtBQUd2RSxrQ0FBNkIsbUNBQW1DLENBQUMsQ0FBQTtBQUNqRSxtQ0FBOEIsb0NBQW9DLENBQUMsQ0FBQTtBQUVuRSxnQ0FBK0IsbUNBQW1DLENBQUMsQ0FBQTtBQWNuRTtJQTZGRSxpQ0FBb0IsRUFBZSxFQUN6QixLQUFxQixFQUNyQixNQUFjLEVBQ2QsWUFBbUMsRUFDbkMsS0FBcUIsRUFDckIsT0FBcUIsRUFDckIsUUFBdUIsRUFDdkIsY0FBOEI7UUFwRzFDLGlCQTBJQztRQTdDcUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQXVCO1FBQ25DLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFsR3hDLFNBQUksR0FBYyxFQUFFLENBQUM7UUFvR25CLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzdDLElBQUksSUFBSSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbkQsSUFBSSxhQUFhLEdBQWtCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFh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cHAvc3VibWl0cHJvcG9zYWwvc3VibWl0cHJvcG9zYWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNZXNzYWdlc01vZHVsZSwgTWVzc2FnZSwgR3Jvd2wgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBQYW5lbE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBEcm9wZG93bjEgfSBmcm9tICcuL2Ryb3Bkb3duMSc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWQgfSBmcm9tICcuL2ZpbGV1cGxvYWQnO1xyXG5pbXBvcnQgeyBEYXRhVGFibGVNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBTdWJtaXRwcm9wb3NhbFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc3VibWl0cHJvcG9zYWwvaW5kZXgnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgU2VsZWN0SXRlbSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE15RGF0ZUZvcm1hdCB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9teWRhdGVmb3JtYXQucGlwZSc7XHJcbmltcG9ydCB7IEVtYWlsVmFsaWRhdGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZW1haWx2YWxpZGF0ZS5waXBlJztcclxuaW1wb3J0IHsgQ3VzdG9tVmFsaWRhdG9yIH0gZnJvbSAnLi4vc2hhcmVkL3ZhbGlkYXRvcnMvdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEJhc2VVcmxTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2Jhc2V1cmwvYmFzZXVybC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3VibWl0cHJvcG9zYWwgfSBmcm9tICcuL3N1Ym1pdHByb3Bvc2FsJztcclxuaW1wb3J0IHsgU2tpbGwgfSBmcm9tICcuL3NraWxsJztcclxuaW1wb3J0IHsgT0ZDbWVtU2Vzc2lvbiB9IGZyb20gJy4uL2xvZ2lucGFnZS9vZmNtZW1zZXNzaW9uJztcclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgc3VibWl0cHJvcG9zYWxDb21wb25lbnQuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnc2Qtc3VibWl0cHJvcG9zYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnc3VibWl0cHJvcG9zYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydzdWJtaXRwcm9wb3NhbC5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbTXlDdXJyZW5jeVBpcGUsIE15RGF0ZUZvcm1hdCwgRW1haWxWYWxpZGF0ZSwgQmFzZVVybFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWJtaXRwcm9wb3NhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIG1zZ3M6IE1lc3NhZ2VbXSA9IFtdO1xyXG5cclxuXHJcbiAgc3VibWl0dGVkOiBib29sZWFuO1xyXG4gIHN1Ym1pdHByb3Bvc2FsOiBTdWJtaXRwcm9wb3NhbDtcclxuICBzZWxlY3RlZFJvdzogU3VibWl0cHJvcG9zYWw7XHJcbiAgc3VibWl0dGVkUHJvcG9zYWxMaXN0OiBTdWJtaXRwcm9wb3NhbFtdO1xyXG4gIHNlc3Npb25pZDogc3RyaW5nO1xyXG4gIG5ld3N1Ym1pdHByb3Bvc2FsOiBib29sZWFuO1xyXG5cclxuICBteWJhc2V1cmw6IHN0cmluZztcclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLm5ld3N1Ym1pdHByb3Bvc2FsID0gdHJ1ZTtcclxuICAgIHRoaXMuc3VibWl0cHJvcG9zYWwgPSB7XHJcblxyXG4gICAgICBzdGF0dXM6ICcnLFxyXG4gICAgICBza2lsbHNhcnI6IFtdLFxyXG4gICAgICBjcmVhdGVkYXRlOiAnJyxcclxuICAgICAgc3ViY2F0X25hbWU6ICcnLFxyXG4gICAgICBjb3VudHJ5X25hbWU6ICcnLFxyXG4gICAgICBtYWluY2F0X25hbWU6ICcnLFxyXG4gICAgICBtb2RpZmllZGRhdGU6ICcnLFxyXG4gICAgICBleHBlcmllbmNlX25hbWU6ICcnLFxyXG4gICAgICBwcm9qZWN0cG9zdGRhdGU6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9pZDogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2tpbmQ6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF90aXRsZTogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX2lkOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfYnVkZ2V0OiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfaXNwYWlkOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfcHVibGljOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfZGVsYXllZDogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2VuZGRhdGU6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF90ZXJtczogJycsXHJcbiAgICAgIHN1YmNhdF9pZF9ma3Byb2plY3Rwb3N0OiAnJyxcclxuICAgICAgY291bnRyeV9pZF9ma3Byb2plY3Rwb3N0OiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfaXNkaXNwdXRlOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3Rfc3RhcnRkYXRlOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfdGltZWZyYW1lOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfYnVkZ2V0OiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfc3RhdHVzOiAnJyxcclxuICAgICAgbGFuZ3VhZ2VfaWRfZmtwcm9qZWN0cG9zdDogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2lzcmVmdW5kZWQ6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9uZWdvdGlhYmxlOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfZW5kZGF0ZTogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX3JlbWFya3M6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9kZXNjcmlwdGlvbjogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2lzY29tcGxldGVkOiAnJyxcclxuICAgICAgZXhwZXJpZW5jZV9pZF9ma3Byb2plY3Rwb3N0OiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19pZF9ma3Byb2plY3Rwb3N0OiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfYnVkZ2V0YW1vdW50OiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfc3RhcnRkYXRlOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfdGltZWZyYW1lOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfYWR2YW5jZWFtb3VudDogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X29mY2NvbW1pc3Npb246ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9wcm9qZWN0YW1vdW50OiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfbmVnb3RpYWJsZTogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX3dvcmtzdGF0dXM6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF90eXBlcHJlZmVyZW5jZTogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX2NvdmVybGV0dGVyOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfZmluYWxhbW91bnQ6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2lkX2Zrc3VibWl0cHJvcG9zYWw6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9maW5hbHBhaWRhbW91bnQ6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9hdmFpbGFiaWxpdHk6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9lc3RpbWF0ZWRheXM6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9jb21wbGV0ZWRkYXRlOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfZXN0aW1hdGVzdGFydGRhdGU6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9pbnZpdGVmcmVlbGFuY2VyczogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2lzZGlzcHV0ZXJlc29sdmVkOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfaXNyZWZ1bmRyZXF1ZXN0ZWQ6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9pc3Rlcm1zYWdncmVlZGJ5bWU6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9jb21taXNzaW9uYW1vdW50OiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfY29tbWlzc2lvbnBlcmNlbnRhZ2U6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9pc3BheW1lbnR0ZXJtc2FncmVlZDogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX2VzdGltYXRlc3RhcnRkYXRlOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfcHJvcG9zYWxhY2NlcHRkYXRlOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfcHJvcG9zYWxyZWplY3RkYXRlOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfY29tbWlzc2lvbnBlcmNlbnRhZ2U6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9lc3RpbWF0ZWRob3Vyc2luZGF5czogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX2lzY29tcGxldGVkYnllbXBsb3llZXI6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9yZXBvcnRhYnVzZWJ5ZW1wbG95ZWVyOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfaXN0ZXJtc2FnZ3JlZWRieWZyZWVsYW5jZXI6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9pc2NvbXBsZXRlZGJ5ZnJlZWxhbmNlcjogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX3JlcG9ydGFidXNlYnlmcmVlbGFuY2VyOiAnJ1xyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGxvY2FsU2VydmljZTogU3VibWl0cHJvcG9zYWxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBteWN1cjogTXlDdXJyZW5jeVBpcGUsXHJcbiAgICBwcml2YXRlIG15ZGF0ZTE6IE15RGF0ZUZvcm1hdCxcclxuICAgIHByaXZhdGUgZW1haWx2YWw6IEVtYWlsVmFsaWRhdGUsXHJcbiAgICBwcml2YXRlIGJhc2VVcmxzZXJ2aWNlOiBCYXNlVXJsU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5teWJhc2V1cmwgPSBiYXNlVXJsc2VydmljZS5nZXRCYXNldXJsKCk7XHJcbiAgICB2YXIgZGF0YSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ21lbWJlcmRldGFpbHMnKTtcclxuICAgIGxldCBvZmNtZW1zZXNzaW9uOiBPRkNtZW1TZXNzaW9uID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgIHRoaXMuc2Vzc2lvbmlkID0gb2ZjbWVtc2Vzc2lvbi5vZmNtZW1zZXNzaW9uX2lkO1xyXG5cclxuICAgIHRoaXMubG9jYWxTZXJ2aWNlLmdldEFsbFN1Ym1pdHRlZFByb3Bvc2Fscyh0aGlzLnNlc3Npb25pZCkuc3Vic2NyaWJlKHAgPT4gdGhpcy5zdWJtaXR0ZWRQcm9wb3NhbExpc3QgPSBwLFxyXG4gICAgICBlID0+IGNvbnNvbGUubG9nKFwibXkgZXJyb3IgXCIgKyBlLCBlKSxcclxuICAgICAgKCkgPT4ge30pO1xyXG5cclxuICB9XHJcbiBcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG5cclxuICB9XHJcblxyXG5cclxuICBnZXRTa2lsbExpc3Qoc2tpbGxMaXN0OiBTa2lsbFtdKTogc3RyaW5nIHtcclxuICAgIGxldCBhOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2tpbGxMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBjID0gc2tpbGxMaXN0W2ldLnNraWxsX25hbWU7XHJcbiAgICAgIGxldCBiID0gJzxkaXYgY2xhc3M9XCJza2lsbHNcIj4nICsgYyArICc8L2Rpdj4nO1xyXG4gICAgICBhICs9IGI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYTtcclxuICB9O1xyXG5cclxuXHJcbm9uUm93U2VsZWN0KG9mY3N1Ym1pdHByb3Bvc2FsX2lkOiBzdHJpbmcpIHtcclxuICAgICAgXHJcbiAgICAgICBcclxuICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbXlwcm9wb3NhbGRldGFpbHMxMScsb2Zjc3VibWl0cHJvcG9zYWxfaWRdKTtcclxuXHJcbiAgfVxyXG59XHJcbiJdfQ==
