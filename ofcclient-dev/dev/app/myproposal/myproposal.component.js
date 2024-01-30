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
var index_1 = require('../shared/myproposal/index');
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var baseurl_service_1 = require('../shared/baseurl/baseurl.service');
var MyproposalComponent = (function () {
    function MyproposalComponent(fb, route, router, localService, mycur, mydate1, emailval, baseUrlservice) {
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
        this.uploadedFiles = [];
        this.fileuploadarr = [];
        this.submitproposalquestanswerArr = [];
        this.projectpostquestionsArr = [];
        this.arranswer = [];
        this.mybaseurl = baseUrlservice.getBaseurl();
        this.route.params.forEach(function (params) {
            _this.projectpostid = params["projectpostid"];
        });
        var data = sessionStorage.getItem('memberdetails');
        var ofcmemsession = JSON.parse(data);
        this.sessionid = ofcmemsession.ofcmemsession_id;
        this.localService.getProjectById(this.sessionid, this.projectpostid).subscribe(function (p) { return _this.myproposalGrid = p; }, function (e) { return console.log("my error " + e, e); }, function () { return _this.retrieveSingleRecord(_this.myproposalGrid.length); });
    }
    MyproposalComponent.prototype.clear = function () {
        this.newmyproposal = true;
        this.myproposal = {
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
        this.submitproposal = {
            ofcsubmitproposal_id: '',
            ofcprojectpost_id_fksubmitproposal: '',
            ofcmembers_id_fksubmitproposal: '',
            ofcsubmitproposal_coverletter: '',
            ofcsubmitproposal_budget: '',
            ofcsubmitproposal_negotiable: '',
            ofcsubmitproposal_commissionpercentage: '',
            ofcsubmitproposal_commissionamount: '',
            ofcsubmitproposal_finalamount: '',
            ofcsubmitproposal_timeframe: '',
            ofcsubmitproposal_availability: '',
            ofcsubmitproposal_status: '',
            ofcsubmitproposal_remarks: '',
            ofcsubmitproposal_terms: '',
            ofcsubmitproposal_estimatestartdate: '',
            ofcsubmitproposal_startdate: '',
            ofcsubmitproposal_enddate: '',
            ofcsubmitproposal_estimatedays: '',
            ofcsubmitproposal_estimatedhoursindays: '',
            ofcsubmitproposal_reportabusebyemployeer: '',
            ofcsubmitproposal_reportabusebyfreelancer: '',
            ofcsubmitproposal_proposalacceptdate: '',
            ofcsubmitproposal_proposalrejectdate: '',
            ofcsubmitproposal_completeddate: '',
            ofcsubmitproposal_iscompletedbyemployeer: '',
            ofcsubmitproposal_iscompletedbyfreelancer: '',
            ofcsubmitproposal_workstatus: '',
            createdate: '',
            modifieddate: '',
            status: '',
        };
        this.submitproposalquestanswer = {
            ofcsubmitproposalquest_id: '',
            ofcsubmitproposal_id_ofcsubmitproposalquest: '',
            ofcsubmitproposalquest_question: '',
            ofcsubmitproposalquest_answer: '',
        };
        this.projectpostquestions =
            {
                projectpostquestions_id: '',
                ofcprojectpost_id: '',
                projectpostquestions_name: '',
            };
        this.fileupload = {
            fileName: '',
            fileType: '',
            filePath: '',
            fileStatus: '',
            uploadfile_filename: ''
        };
    };
    MyproposalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.onFinalFileUpload();
        if (!this.validatePostaJob()) {
        }
        else {
            var projectpostid = this.myproposal.ofcprojectpost_id;
            this.submitproposal.ofcprojectpost_id_fksubmitproposal = projectpostid;
            var queststr = JSON.stringify(this.submitproposalquestanswerArr);
            var filestr = JSON.stringify(this.fileuploadarr);
            var data = sessionStorage.getItem('memberdetails');
            var ofcmemsession = JSON.parse(data);
            var ofcmemsession_id = ofcmemsession.ofcmemsession_id;
            this.submitproposal.ofcsubmitproposal_startdate = '';
            this.submitproposal.ofcsubmitproposal_enddate = '';
            this.submitproposal.ofcsubmitproposal_proposalacceptdate = '';
            this.submitproposal.ofcsubmitproposal_proposalrejectdate = '';
            this.submitproposal.ofcsubmitproposal_completeddate = '';
            this.localService.submitproposal(ofcmemsession_id, this.submitproposal, queststr, filestr)
                .subscribe(function (p) { return _this.commonerror = p; }, function (e) { return console.log(e); }, function () {
                var isSuccess = _this.commonerror.Isuccess;
                if (isSuccess === 1) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Inserted Successfully...' });
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Data Insertion Fail...' });
                }
            });
        }
    };
    MyproposalComponent.prototype.ngOnInit = function () {
        this.clear();
        this.showDetails = false;
        this.submitproposal = {
            ofcsubmitproposal_id: '',
            ofcprojectpost_id_fksubmitproposal: '',
            ofcmembers_id_fksubmitproposal: '',
            ofcsubmitproposal_coverletter: '',
            ofcsubmitproposal_budget: '',
            ofcsubmitproposal_negotiable: '',
            ofcsubmitproposal_commissionpercentage: '20',
            ofcsubmitproposal_commissionamount: '',
            ofcsubmitproposal_finalamount: '',
            ofcsubmitproposal_timeframe: '',
            ofcsubmitproposal_availability: '',
            ofcsubmitproposal_status: '',
            ofcsubmitproposal_remarks: '',
            ofcsubmitproposal_terms: '',
            ofcsubmitproposal_estimatestartdate: '',
            ofcsubmitproposal_startdate: '',
            ofcsubmitproposal_enddate: '',
            ofcsubmitproposal_estimatedays: '',
            ofcsubmitproposal_estimatedhoursindays: '',
            ofcsubmitproposal_reportabusebyemployeer: '',
            ofcsubmitproposal_reportabusebyfreelancer: '',
            ofcsubmitproposal_proposalacceptdate: '',
            ofcsubmitproposal_proposalrejectdate: '',
            ofcsubmitproposal_completeddate: '',
            ofcsubmitproposal_iscompletedbyemployeer: '',
            ofcsubmitproposal_iscompletedbyfreelancer: '',
            ofcsubmitproposal_workstatus: '',
            createdate: '',
            modifieddate: '',
            status: ''
        };
    };
    MyproposalComponent.prototype.retrieveSingleRecord = function (gridlength) {
        for (var i = 0; i < gridlength; i++) {
            this.myproposal = this.myproposalGrid[0];
        }
    };
    MyproposalComponent.prototype.onUpload = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
        }
    };
    MyproposalComponent.prototype.onBeforeUpload = function (event) {
        event.xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;multipart/form-data;');
    };
    MyproposalComponent.prototype.onFinalFileUpload = function () {
        for (var i = 0; i < this.uploadedFiles.length; i++) {
            var filename = this.uploadedFiles[i].name;
            var tempfileupload = void 0;
            tempfileupload = {
                fileName: filename,
                fileType: 'img',
                filePath: '',
                fileStatus: 'Yes',
                uploadfile_filename: ''
            };
            this.fileuploadarr.push(tempfileupload);
        }
    };
    MyproposalComponent.prototype.getSkillList = function (skillList) {
        var a = "";
        for (var i = 0; i < skillList.length; i++) {
            var c = skillList[i].skill_name;
            var b = '<div class="skills">' + c + '</div>';
            a += b;
        }
        return a;
    };
    ;
    MyproposalComponent.prototype.onclickSubmitProposal = function () {
        var _this = this;
        this.showDetails = true;
        this.localService.getAllQuestions(this.projectpostid).subscribe(function (p) { return _this.projectpostquestionsArr = p; }, function (e) { return console.log("my error " + e, e); }, function () {
            _this.arranswer = new Array(_this.projectpostquestionsArr.length);
        });
    };
    MyproposalComponent.prototype.selectTimeFrame = function (timeframe) {
        this.submitproposal.ofcsubmitproposal_timeframe = timeframe;
    };
    MyproposalComponent.prototype.selectCommitment = function (commitment) {
        this.submitproposal.ofcsubmitproposal_availability = commitment;
    };
    MyproposalComponent.prototype.aftercalldate = function () {
        this.startdate = new Date(this.submitproposal.ofcsubmitproposal_estimatestartdate);
    };
    MyproposalComponent.prototype.calcCommissionAmount = function (event) {
        var budget = this.submitproposal.ofcsubmitproposal_budget;
        var budgetAmount = parseFloat(budget);
        var commissionpercent = this.submitproposal.ofcsubmitproposal_commissionpercentage;
        var commissionpercentFloat = parseFloat(commissionpercent);
        var commissionamount = (budgetAmount * commissionpercentFloat) / 100;
        this.submitproposal.ofcsubmitproposal_commissionamount = '' + commissionamount;
        var finalAmount = budgetAmount - commissionamount;
        this.submitproposal.ofcsubmitproposal_finalamount = '' + finalAmount;
    };
    MyproposalComponent.prototype.addPostQuestAnswer = function (event, paramanswer, question) {
        if (paramanswer === '' || paramanswer === undefined) {
        }
        else {
            var abctemp = void 0;
            abctemp = {
                ofcsubmitproposalquest_id: '',
                ofcsubmitproposal_id_ofcsubmitproposalquest: '',
                ofcsubmitproposalquest_question: question,
                ofcsubmitproposalquest_answer: paramanswer,
            };
            this.submitproposalquestanswerArr.push(abctemp);
        }
    };
    MyproposalComponent.prototype.validatePostaJob = function () {
        var budget = this.submitproposal.ofcsubmitproposal_budget;
        var timeframe = this.submitproposal.ofcsubmitproposal_timeframe;
        var timecommit = this.submitproposal.ofcsubmitproposal_availability;
        var coverletter = this.submitproposal.ofcsubmitproposal_coverletter;
        var terms = this.submitproposal.ofcsubmitproposal_terms;
        var estimatedate = this.submitproposal.ofcsubmitproposal_estimatestartdate;
        var bool = true;
        if (budget === '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Please Enter Proposal Rate' });
            return bool = false;
        }
        if (timeframe === '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Please Click How much time duration do you need' });
            return bool = false;
        }
        if (timecommit === '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Please Click What time commitment is require for this job' });
            return bool = false;
        }
        if (coverletter === '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Please Enter Cover Letter' });
            return bool = false;
        }
        if (terms === '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Please Enter Terms' });
            return bool = false;
        }
        if (this.projectpostquestionsArr.length === 0) {
        }
        else {
            for (var i = 0; i < this.projectpostquestionsArr.length; i++) {
                var answer = this.arranswer[i];
                if (answer === undefined || answer === '') {
                    if (this.submitproposalquestanswerArr.length === this.projectpostquestionsArr.length) {
                        this.submitproposalquestanswerArr.splice(i);
                    }
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Please Enter Answers for ' + this.projectpostquestionsArr[i].projectpostquestions_name });
                    return bool = false;
                }
                else {
                    var abctemp = void 0;
                    abctemp = {
                        ofcsubmitproposalquest_id: '',
                        ofcsubmitproposal_id_ofcsubmitproposalquest: '',
                        ofcsubmitproposalquest_question: this.projectpostquestionsArr[i].projectpostquestions_name,
                        ofcsubmitproposalquest_answer: answer,
                    };
                    this.submitproposalquestanswerArr.push();
                }
            }
        }
        if (estimatedate === '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Please Click To Enter Estimate Start Date' });
            return bool = false;
        }
        return bool;
    };
    MyproposalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-myproposal',
            templateUrl: 'myproposal.component.html',
            styleUrls: ['myproposal.component.css'],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, baseurl_service_1.BaseUrlService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, index_1.MyproposalService, first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, baseurl_service_1.BaseUrlService])
    ], MyproposalComponent);
    return MyproposalComponent;
}());
exports.MyproposalComponent = MyproposalComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9teXByb3Bvc2FsL215cHJvcG9zYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0Qsc0JBQWdFLGdCQUFnQixDQUFDLENBQUE7QUFJakYsdUJBQStDLGlCQUFpQixDQUFDLENBQUE7QUFTakUsMkJBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsc0JBQWtDLDRCQUE0QixDQUFDLENBQUE7QUFJL0Qsa0NBQTZCLG1DQUFtQyxDQUFDLENBQUE7QUFDakUsbUNBQThCLG9DQUFvQyxDQUFDLENBQUE7QUFFbkUsZ0NBQStCLG1DQUFtQyxDQUFDLENBQUE7QUFxQm5FO0lBZ0pFLDZCQUFvQixFQUFlLEVBQ3pCLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxZQUErQixFQUMvQixLQUFxQixFQUNyQixPQUFxQixFQUNyQixRQUF1QixFQUN2QixjQUE4QjtRQXZKMUMsaUJBOGRDO1FBOVVxQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBbUI7UUFDL0IsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQXJKeEMsU0FBSSxHQUFjLEVBQUUsQ0FBQztRQVlyQixrQkFBYSxHQUFVLEVBQUUsQ0FBQztRQUMxQixrQkFBYSxHQUFpQixFQUFFLENBQUM7UUFjakMsaUNBQTRCLEdBQWdDLEVBQUUsQ0FBQztRQUkvRCw0QkFBdUIsR0FBMkIsRUFBRSxDQUFDO1FBS3JELGNBQVMsR0FBYSxFQUFFLENBQUM7UUFvSHZCLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzdDLElBQUks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Q0FBWSxFQUFFLGtDQUFhLEVBQUUsZ0NBQWMsQ0FBQztTQUN6RSxDQUFDOzsyQkFBQTtJQStkRiwwQkFBQztBQUFELENBOWRBLEFBOGRDLElBQUE7QUE5ZFksMkJBQW1CLHNCQThkL0IsQ0FBQSIsImZpbGUiOiJhcHAvbXlwcm9wb3NhbC9teXByb3Bvc2FsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNZXNzYWdlc01vZHVsZSwgTWVzc2FnZSwgR3Jvd2wgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBQYW5lbE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE9GQ1Byb2plY3RQb3N0RGV0YWlscyB9IGZyb20gJy4vb2ZjcHJvamVjdHBvc3RkZXRhaWxzJztcclxuaW1wb3J0IHsgRHJvcGRvd24xIH0gZnJvbSAnLi9kcm9wZG93bjEnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkIH0gZnJvbSAnLi9maWxldXBsb2FkJztcclxuaW1wb3J0IHsgRGF0YVRhYmxlTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBJbnB1dFRleHRhcmVhTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuXHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBNeXByb3Bvc2FsU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9teXByb3Bvc2FsL2luZGV4JztcclxuaW1wb3J0IHsgT0ZDbWVtU2Vzc2lvbiB9IGZyb20gJy4uL2xvZ2lucGFnZS9vZmNtZW1zZXNzaW9uJztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IFNlbGVjdEl0ZW0gfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZSc7XHJcbmltcG9ydCB7IEN1c3RvbVZhbGlkYXRvciB9IGZyb20gJy4uL3NoYXJlZC92YWxpZGF0b3JzL3ZhbGlkYXRvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBCYXNlVXJsU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9iYXNldXJsL2Jhc2V1cmwuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IFNraWxsIH0gZnJvbSAnLi9za2lsbCc7XHJcblxyXG4vL2FzIGRvbmUgb24gMjEgamFuIDIwMTcgYnkgTWFuZGFyIGZvciBzdWJtaXQgcHJvcG9zYWxcclxuaW1wb3J0IHsgU3VibWl0UHJvcG9zYWwgfSBmcm9tICcuL3N1Ym1pdHByb3Bvc2FsJztcclxuaW1wb3J0IHsgU3VibWl0UHJvcG9zYWxRdWVzdEFuc3dlciB9IGZyb20gJy4vc3VibWl0cHJvcG9zYWxxdWVzdGFuc3dlcic7XHJcbmltcG9ydCB7IFN1Ym1pdHRlZFByb3Bvc2FsTGlzdCB9IGZyb20gJy4vc3VibWl0dGVkcHJvcG9zYWxsaXN0JztcclxuaW1wb3J0IHsgUHJvamVjdFBvc3RRdWVzdGlvbnMgfSBmcm9tICcuL3Byb2plY3Rwb3N0cXVlc3Rpb25zJztcclxuaW1wb3J0IHsgQ29tbW9uRXJyb3IgfSBmcm9tICcuL2NvbW1vbmVycm9yJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIG15cHJvcG9zYWxDb21wb25lbnQuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnc2QtbXlwcm9wb3NhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdteXByb3Bvc2FsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbXlwcm9wb3NhbC5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbTXlDdXJyZW5jeVBpcGUsIE15RGF0ZUZvcm1hdCwgRW1haWxWYWxpZGF0ZSwgQmFzZVVybFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeXByb3Bvc2FsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgbXNnczogTWVzc2FnZVtdID0gW107XHJcblxyXG4gIG15cHJvcG9zYWw6IE9GQ1Byb2plY3RQb3N0RGV0YWlscztcclxuICBteXByb3Bvc2FsR3JpZDogT0ZDUHJvamVjdFBvc3REZXRhaWxzW107XHJcbiAgc3VibWl0dGVkUHJvcG9zYWxMaXN0OiBTdWJtaXR0ZWRQcm9wb3NhbExpc3RbXTtcclxuICBzdWJtaXR0ZWQ6IGJvb2xlYW47XHJcblxyXG4gIG5ld215cHJvcG9zYWw6IGJvb2xlYW47XHJcbiAgc2Vzc2lvbmlkOiBzdHJpbmc7XHJcbiAgcHJvamVjdHBvc3RpZDogc3RyaW5nO1xyXG5cclxuICAvL0ZvciBmaWxlIHVwbG9hZGluZ1xyXG4gIHVwbG9hZGVkRmlsZXM6IGFueVtdID0gW107XHJcbiAgZmlsZXVwbG9hZGFycjogRmlsZVVwbG9hZFtdID0gW107XHJcbiAgZmlsZXVwbG9hZDogRmlsZVVwbG9hZDtcclxuICBteWJhc2V1cmw6IHN0cmluZztcclxuXHJcblxyXG5cclxuICBzaG93RGV0YWlsczogYm9vbGVhbjtcclxuXHJcbiAgcHJpdmF0ZSByb3V0ZSQ6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgLy9hcyBkb25lIG9uIDIxIGphbiAyMDE3IGJ5IE1hbmRhciBmb3Igc3VibWl0IHByb3Bvc2FsXHJcbiAgc3VibWl0cHJvcG9zYWw6IFN1Ym1pdFByb3Bvc2FsO1xyXG5cclxuICBzdWJtaXRwcm9wb3NhbHF1ZXN0YW5zd2VyOiBTdWJtaXRQcm9wb3NhbFF1ZXN0QW5zd2VyO1xyXG4gIHN1Ym1pdHByb3Bvc2FscXVlc3RhbnN3ZXJBcnI6IFN1Ym1pdFByb3Bvc2FsUXVlc3RBbnN3ZXJbXSA9IFtdO1xyXG5cclxuICBzdWJtaXRhbnN3ZXI6IHN0cmluZztcclxuXHJcbiAgcHJvamVjdHBvc3RxdWVzdGlvbnNBcnI6IFByb2plY3RQb3N0UXVlc3Rpb25zW10gPSBbXTtcclxuICBwcm9qZWN0cG9zdHF1ZXN0aW9uczogUHJvamVjdFBvc3RRdWVzdGlvbnM7XHJcblxyXG4gIC8vYXMgZG9uZSBvbiAyMSBqYW4gMjAxNyBieSBNYW5kYXIgZm9yIGRhdGVwY2lrZXJcclxuICBzdGFydGRhdGU6IERhdGU7XHJcbiAgYXJyYW5zd2VyOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBjb21tb25lcnJvcjogQ29tbW9uRXJyb3I7XHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5uZXdteXByb3Bvc2FsID0gdHJ1ZTtcclxuICAgIHRoaXMubXlwcm9wb3NhbCA9IHtcclxuXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2lkOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfYnVkZ2V0OiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfbmVnb3RpYWJsZTogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X3RpdGxlOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF90aW1lZnJhbWU6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF90eXBlcHJlZmVyZW5jZTogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2tpbmQ6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9idWRnZXRhbW91bnQ6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9jb21taXNzaW9ucGVyY2VudGFnZTogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X29mY2NvbW1pc3Npb246ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9lc3RpbWF0ZXN0YXJ0ZGF0ZTogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X3N0YXJ0ZGF0ZTogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2VuZGRhdGU6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9pbnZpdGVmcmVlbGFuY2VyczogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X3B1YmxpYzogJycsXHJcbiAgICAgIHN1YmNhdF9pZF9ma3Byb2plY3Rwb3N0OiAnJyxcclxuICAgICAgY291bnRyeV9pZF9ma3Byb2plY3Rwb3N0OiAnJyxcclxuICAgICAgbGFuZ3VhZ2VfaWRfZmtwcm9qZWN0cG9zdDogJycsXHJcbiAgICAgIGV4cGVyaWVuY2VfaWRfZmtwcm9qZWN0cG9zdDogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X3Byb2plY3RhbW91bnQ6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9hZHZhbmNlYW1vdW50OiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfZmluYWxwYWlkYW1vdW50OiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfaXNwYXltZW50dGVybXNhZ3JlZWQ6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9pc3BhaWQ6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9pc2NvbXBsZXRlZDogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2RlbGF5ZWQ6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9pc3Rlcm1zYWdncmVlZGJ5bWU6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9pc3Rlcm1zYWdncmVlZGJ5ZnJlZWxhbmNlcjogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2lzZGlzcHV0ZTogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2lzcmVmdW5kcmVxdWVzdGVkOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfaXNyZWZ1bmRlZDogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2lzZGlzcHV0ZXJlc29sdmVkOiAnJyxcclxuICAgICAgY3JlYXRlZGF0ZTogJycsXHJcbiAgICAgIG1vZGlmaWVkZGF0ZTogJycsXHJcbiAgICAgIHN0YXR1czogJycsXHJcbiAgICAgIGZpbGVhcnI6IFtdXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdWJtaXRwcm9wb3NhbCA9IHtcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfaWQ6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9pZF9ma3N1Ym1pdHByb3Bvc2FsOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19pZF9ma3N1Ym1pdHByb3Bvc2FsOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfY292ZXJsZXR0ZXI6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9idWRnZXQ6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9uZWdvdGlhYmxlOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfY29tbWlzc2lvbnBlcmNlbnRhZ2U6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9jb21taXNzaW9uYW1vdW50OiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfZmluYWxhbW91bnQ6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF90aW1lZnJhbWU6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9hdmFpbGFiaWxpdHk6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9zdGF0dXM6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9yZW1hcmtzOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfdGVybXM6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9lc3RpbWF0ZXN0YXJ0ZGF0ZTogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX3N0YXJ0ZGF0ZTogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX2VuZGRhdGU6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9lc3RpbWF0ZWRheXM6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9lc3RpbWF0ZWRob3Vyc2luZGF5czogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX3JlcG9ydGFidXNlYnllbXBsb3llZXI6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9yZXBvcnRhYnVzZWJ5ZnJlZWxhbmNlcjogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX3Byb3Bvc2FsYWNjZXB0ZGF0ZTogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX3Byb3Bvc2FscmVqZWN0ZGF0ZTogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX2NvbXBsZXRlZGRhdGU6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9pc2NvbXBsZXRlZGJ5ZW1wbG95ZWVyOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfaXNjb21wbGV0ZWRieWZyZWVsYW5jZXI6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF93b3Jrc3RhdHVzOiAnJyxcclxuICAgICAgY3JlYXRlZGF0ZTogJycsXHJcbiAgICAgIG1vZGlmaWVkZGF0ZTogJycsXHJcbiAgICAgIHN0YXR1czogJycsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdWJtaXRwcm9wb3NhbHF1ZXN0YW5zd2VyID0ge1xyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbHF1ZXN0X2lkOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfaWRfb2Zjc3VibWl0cHJvcG9zYWxxdWVzdDogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FscXVlc3RfcXVlc3Rpb246ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbHF1ZXN0X2Fuc3dlcjogJycsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcm9qZWN0cG9zdHF1ZXN0aW9ucyA9XHJcbiAgICAgIHtcclxuICAgICAgICBwcm9qZWN0cG9zdHF1ZXN0aW9uc19pZDogJycsXHJcbiAgICAgICAgb2ZjcHJvamVjdHBvc3RfaWQ6ICcnLFxyXG4gICAgICAgIHByb2plY3Rwb3N0cXVlc3Rpb25zX25hbWU6ICcnLFxyXG4gICAgICB9XHJcblxyXG4gICAgdGhpcy5maWxldXBsb2FkID0ge1xyXG4gICAgICBmaWxlTmFtZTogJycsXHJcbiAgICAgIGZpbGVUeXBlOiAnJyxcclxuICAgICAgZmlsZVBhdGg6ICcnLFxyXG4gICAgICBmaWxlU3RhdHVzOiAnJyxcclxuICAgICAgdXBsb2FkZmlsZV9maWxlbmFtZTogJydcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBsb2NhbFNlcnZpY2U6IE15cHJvcG9zYWxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBteWN1cjogTXlDdXJyZW5jeVBpcGUsXHJcbiAgICBwcml2YXRlIG15ZGF0ZTE6IE15RGF0ZUZvcm1hdCxcclxuICAgIHByaXZhdGUgZW1haWx2YWw6IEVtYWlsVmFsaWRhdGUsXHJcbiAgICBwcml2YXRlIGJhc2VVcmxzZXJ2aWNlOiBCYXNlVXJsU2VydmljZVxyXG4gICkge1xyXG5cclxuICAgIHRoaXMubXliYXNldXJsID0gYmFzZVVybHNlcnZpY2UuZ2V0QmFzZXVybCgpO1xyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuZm9yRWFjaCgocGFyYW1zOiBQYXJhbXMpID0+IHtcclxuICAgICAgdGhpcy5wcm9qZWN0cG9zdGlkID0gcGFyYW1zW1wicHJvamVjdHBvc3RpZFwiXTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgZGF0YSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ21lbWJlcmRldGFpbHMnKTtcclxuICAgIGxldCBvZmNtZW1zZXNzaW9uOiBPRkNtZW1TZXNzaW9uID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgIHRoaXMuc2Vzc2lvbmlkID0gb2ZjbWVtc2Vzc2lvbi5vZmNtZW1zZXNzaW9uX2lkO1xyXG5cclxuXHJcbiAgICB0aGlzLmxvY2FsU2VydmljZS5nZXRQcm9qZWN0QnlJZCh0aGlzLnNlc3Npb25pZCwgdGhpcy5wcm9qZWN0cG9zdGlkKS5zdWJzY3JpYmUocCA9PiB0aGlzLm15cHJvcG9zYWxHcmlkID0gcCxcclxuICAgICAgZSA9PiBjb25zb2xlLmxvZyhcIm15IGVycm9yIFwiICsgZSwgZSksXHJcbiAgICAgICgpID0+IHRoaXMucmV0cmlldmVTaW5nbGVSZWNvcmQodGhpcy5teXByb3Bvc2FsR3JpZC5sZW5ndGgpICk7XHJcbiAgXHJcblxyXG5cclxufVxyXG5cclxuXHJcbiAgb25TdWJtaXQoKSB7XHJcblxyXG4gICAgXHJcbiAgICB0aGlzLm9uRmluYWxGaWxlVXBsb2FkKCk7XHJcbiAgICBpZiAoIXRoaXMudmFsaWRhdGVQb3N0YUpvYigpKSB7XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgXHJcbiAgICAgIGxldCBwcm9qZWN0cG9zdGlkID0gdGhpcy5teXByb3Bvc2FsLm9mY3Byb2plY3Rwb3N0X2lkO1xyXG5cclxuICAgICBcclxuICAgICAgdGhpcy5zdWJtaXRwcm9wb3NhbC5vZmNwcm9qZWN0cG9zdF9pZF9ma3N1Ym1pdHByb3Bvc2FsID0gcHJvamVjdHBvc3RpZDtcclxuXHJcblxyXG5cclxuICAgICAgbGV0IHF1ZXN0c3RyID0gSlNPTi5zdHJpbmdpZnkodGhpcy5zdWJtaXRwcm9wb3NhbHF1ZXN0YW5zd2VyQXJyKTtcclxuICAgICAgXHJcbiAgICAgIGxldCBmaWxlc3RyID0gSlNPTi5zdHJpbmdpZnkodGhpcy5maWxldXBsb2FkYXJyKTtcclxuICAgICBcclxuICAgICAgdmFyIGRhdGEgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdtZW1iZXJkZXRhaWxzJyk7XHJcblxyXG4gICAgICBcclxuICAgICAgbGV0IG9mY21lbXNlc3Npb246IE9GQ21lbVNlc3Npb24gPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICBsZXQgb2ZjbWVtc2Vzc2lvbl9pZCA9IG9mY21lbXNlc3Npb24ub2ZjbWVtc2Vzc2lvbl9pZDtcclxuXHJcbiAgICAgdGhpcy5zdWJtaXRwcm9wb3NhbC5vZmNzdWJtaXRwcm9wb3NhbF9zdGFydGRhdGU9Jyc7XHJcbiAgICAgdGhpcy5zdWJtaXRwcm9wb3NhbC5vZmNzdWJtaXRwcm9wb3NhbF9lbmRkYXRlPScnO1xyXG4gICAgIHRoaXMuc3VibWl0cHJvcG9zYWwub2Zjc3VibWl0cHJvcG9zYWxfcHJvcG9zYWxhY2NlcHRkYXRlPScnO1xyXG4gICAgIHRoaXMuc3VibWl0cHJvcG9zYWwub2Zjc3VibWl0cHJvcG9zYWxfcHJvcG9zYWxyZWplY3RkYXRlPScnO1xyXG4gICAgIHRoaXMuc3VibWl0cHJvcG9zYWwub2Zjc3VibWl0cHJvcG9zYWxfY29tcGxldGVkZGF0ZT0nJztcclxuXHJcbiAgICAgIHRoaXMubG9jYWxTZXJ2aWNlLnN1Ym1pdHByb3Bvc2FsKG9mY21lbXNlc3Npb25faWQsIHRoaXMuc3VibWl0cHJvcG9zYWwsIHF1ZXN0c3RyLCBmaWxlc3RyKVxyXG4gICAgICAgIC5zdWJzY3JpYmUocCA9PiB0aGlzLmNvbW1vbmVycm9yID0gcCxlID0+IGNvbnNvbGUubG9nKGUpLCgpID0+IHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgbGV0IGlzU3VjY2VzczogYW55ID0gdGhpcy5jb21tb25lcnJvci5Jc3VjY2VzcztcclxuICAgICAgICAgIGlmIChpc1N1Y2Nlc3MgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5tc2dzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdpbmZvJywgc3VtbWFyeTogJ1N1Y2Nlc3MnLCBkZXRhaWw6ICdEYXRhIEluc2VydGVkIFN1Y2Nlc3NmdWxseS4uLicgfSlcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tc2dzID0gW107XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIHN1bW1hcnk6ICdFcnJvciBNZXNzYWdlJywgZGV0YWlsOiAnRGF0YSBJbnNlcnRpb24gRmFpbC4uLicgfSk7XHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICB0aGlzLnNob3dEZXRhaWxzID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5zdWJtaXRwcm9wb3NhbCA9IHtcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfaWQ6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9pZF9ma3N1Ym1pdHByb3Bvc2FsOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19pZF9ma3N1Ym1pdHByb3Bvc2FsOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfY292ZXJsZXR0ZXI6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9idWRnZXQ6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9uZWdvdGlhYmxlOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfY29tbWlzc2lvbnBlcmNlbnRhZ2U6ICcyMCcsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX2NvbW1pc3Npb25hbW91bnQ6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9maW5hbGFtb3VudDogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX3RpbWVmcmFtZTogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX2F2YWlsYWJpbGl0eTogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX3N0YXR1czogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX3JlbWFya3M6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF90ZXJtczogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX2VzdGltYXRlc3RhcnRkYXRlOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfc3RhcnRkYXRlOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfZW5kZGF0ZTogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX2VzdGltYXRlZGF5czogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX2VzdGltYXRlZGhvdXJzaW5kYXlzOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfcmVwb3J0YWJ1c2VieWVtcGxveWVlcjogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX3JlcG9ydGFidXNlYnlmcmVlbGFuY2VyOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfcHJvcG9zYWxhY2NlcHRkYXRlOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfcHJvcG9zYWxyZWplY3RkYXRlOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfY29tcGxldGVkZGF0ZTogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX2lzY29tcGxldGVkYnllbXBsb3llZXI6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9pc2NvbXBsZXRlZGJ5ZnJlZWxhbmNlcjogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX3dvcmtzdGF0dXM6ICcnLFxyXG4gICAgICBjcmVhdGVkYXRlOiAnJyxcclxuICAgICAgbW9kaWZpZWRkYXRlOiAnJyxcclxuICAgICAgc3RhdHVzOiAnJ1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgcmV0cmlldmVTaW5nbGVSZWNvcmQoZ3JpZGxlbmd0aDogYW55KSB7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkbGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy5teXByb3Bvc2FsID0gdGhpcy5teXByb3Bvc2FsR3JpZFswXTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBvblVwbG9hZChldmVudDogYW55KSB7XHJcblxyXG4gICAgZm9yIChsZXQgZmlsZSBvZiBldmVudC5maWxlcykge1xyXG4gICAgICB0aGlzLnVwbG9hZGVkRmlsZXMucHVzaChmaWxlKTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxuICBvbkJlZm9yZVVwbG9hZChldmVudDogYW55KSB7XHJcbiAgICBldmVudC54aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDttdWx0aXBhcnQvZm9ybS1kYXRhOycpO1xyXG5cclxuICB9XHJcblxyXG4gb25GaW5hbEZpbGVVcGxvYWQoKSB7XHJcblxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51cGxvYWRlZEZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBmaWxlbmFtZSA9IHRoaXMudXBsb2FkZWRGaWxlc1tpXS5uYW1lO1xyXG4gICAgICBsZXQgdGVtcGZpbGV1cGxvYWQ6IEZpbGVVcGxvYWQ7XHJcblxyXG5cclxuICAgICAgdGVtcGZpbGV1cGxvYWQgPSB7XHJcbiAgICAgICAgZmlsZU5hbWU6IGZpbGVuYW1lLFxyXG4gICAgICAgIGZpbGVUeXBlOiAnaW1nJyxcclxuICAgICAgICBmaWxlUGF0aDogJycsXHJcbiAgICAgICAgZmlsZVN0YXR1czogJ1llcycsXHJcbiAgICAgICAgdXBsb2FkZmlsZV9maWxlbmFtZTogJydcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIHRoaXMuZmlsZXVwbG9hZGFyci5wdXNoKHRlbXBmaWxldXBsb2FkKTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIGdldFNraWxsTGlzdChza2lsbExpc3Q6IFNraWxsW10pOiBzdHJpbmcge1xyXG4gICAgbGV0IGE6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBza2lsbExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGMgPSBza2lsbExpc3RbaV0uc2tpbGxfbmFtZTtcclxuICAgICAgbGV0IGIgPSAnPGRpdiBjbGFzcz1cInNraWxsc1wiPicgKyBjICsgJzwvZGl2Pic7XHJcbiAgICAgIGEgKz0gYjtcclxuICAgIH1cclxuICAgIHJldHVybiBhO1xyXG4gIH07XHJcblxyXG4gIG9uY2xpY2tTdWJtaXRQcm9wb3NhbCgpIHtcclxuICAgIHRoaXMuc2hvd0RldGFpbHMgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMubG9jYWxTZXJ2aWNlLmdldEFsbFF1ZXN0aW9ucyh0aGlzLnByb2plY3Rwb3N0aWQpLnN1YnNjcmliZShwID0+IHRoaXMucHJvamVjdHBvc3RxdWVzdGlvbnNBcnIgPSBwLFxyXG4gICAgICBlID0+IGNvbnNvbGUubG9nKFwibXkgZXJyb3IgXCIgKyBlLCBlKSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgICB0aGlzLmFycmFuc3dlciA9IG5ldyBBcnJheSh0aGlzLnByb2plY3Rwb3N0cXVlc3Rpb25zQXJyLmxlbmd0aCk7XHJcbiAgICAgIH1cclxuICAgICk7IFxyXG5cclxuICB9XHJcblxyXG4gIFxyXG4gXHJcbiAgc2VsZWN0VGltZUZyYW1lKHRpbWVmcmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnN1Ym1pdHByb3Bvc2FsLm9mY3N1Ym1pdHByb3Bvc2FsX3RpbWVmcmFtZSA9IHRpbWVmcmFtZTtcclxuICB9XHJcbiBcclxuICBzZWxlY3RDb21taXRtZW50KGNvbW1pdG1lbnQ6IHN0cmluZykge1xyXG4gICAgXHJcbiAgICB0aGlzLnN1Ym1pdHByb3Bvc2FsLm9mY3N1Ym1pdHByb3Bvc2FsX2F2YWlsYWJpbGl0eSA9IGNvbW1pdG1lbnQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgYWZ0ZXJjYWxsZGF0ZSgpIHtcclxuICAgIHRoaXMuc3RhcnRkYXRlID0gbmV3IERhdGUodGhpcy5zdWJtaXRwcm9wb3NhbC5vZmNzdWJtaXRwcm9wb3NhbF9lc3RpbWF0ZXN0YXJ0ZGF0ZSk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGNhbGNDb21taXNzaW9uQW1vdW50KGV2ZW50OiBhbnkpIHtcclxuXHJcbiAgICBsZXQgYnVkZ2V0ID0gdGhpcy5zdWJtaXRwcm9wb3NhbC5vZmNzdWJtaXRwcm9wb3NhbF9idWRnZXQ7XHJcbiAgICBsZXQgYnVkZ2V0QW1vdW50ID0gcGFyc2VGbG9hdChidWRnZXQpO1xyXG4gICAgbGV0IGNvbW1pc3Npb25wZXJjZW50ID0gdGhpcy5zdWJtaXRwcm9wb3NhbC5vZmNzdWJtaXRwcm9wb3NhbF9jb21taXNzaW9ucGVyY2VudGFnZTtcclxuICAgIGxldCBjb21taXNzaW9ucGVyY2VudEZsb2F0ID0gcGFyc2VGbG9hdChjb21taXNzaW9ucGVyY2VudCk7XHJcblxyXG4gICAgbGV0IGNvbW1pc3Npb25hbW91bnQgPSAoYnVkZ2V0QW1vdW50ICogY29tbWlzc2lvbnBlcmNlbnRGbG9hdCkgLyAxMDA7XHJcbiAgICB0aGlzLnN1Ym1pdHByb3Bvc2FsLm9mY3N1Ym1pdHByb3Bvc2FsX2NvbW1pc3Npb25hbW91bnQgPSAnJyArIGNvbW1pc3Npb25hbW91bnQ7XHJcbiAgICBsZXQgZmluYWxBbW91bnQgPSBidWRnZXRBbW91bnQgLSBjb21taXNzaW9uYW1vdW50O1xyXG4gICAgdGhpcy5zdWJtaXRwcm9wb3NhbC5vZmNzdWJtaXRwcm9wb3NhbF9maW5hbGFtb3VudCA9ICcnICsgZmluYWxBbW91bnQ7XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgYWRkUG9zdFF1ZXN0QW5zd2VyKGV2ZW50OiBhbnksIHBhcmFtYW5zd2VyOiBhbnksIHF1ZXN0aW9uOiBhbnkpIHtcclxuXHJcbiAgICBpZiAocGFyYW1hbnN3ZXIgPT09ICcnIHx8IHBhcmFtYW5zd2VyID09PSB1bmRlZmluZWQpIHtcclxuICAgICBcclxuICAgIH1cclxuICBlbHNle1xyXG4gICAgIFxyXG4gICAgICBsZXQgYWJjdGVtcDogU3VibWl0UHJvcG9zYWxRdWVzdEFuc3dlcjtcclxuICAgICAgYWJjdGVtcCA9IHtcclxuICAgICAgICBvZmNzdWJtaXRwcm9wb3NhbHF1ZXN0X2lkOiAnJyxcclxuICAgICAgICBvZmNzdWJtaXRwcm9wb3NhbF9pZF9vZmNzdWJtaXRwcm9wb3NhbHF1ZXN0OiAnJyxcclxuICAgICAgICBvZmNzdWJtaXRwcm9wb3NhbHF1ZXN0X3F1ZXN0aW9uOiBxdWVzdGlvbixcclxuICAgICAgICBvZmNzdWJtaXRwcm9wb3NhbHF1ZXN0X2Fuc3dlcjogcGFyYW1hbnN3ZXIsXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zdWJtaXRwcm9wb3NhbHF1ZXN0YW5zd2VyQXJyLnB1c2goYWJjdGVtcCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZVBvc3RhSm9iKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBib29sZWFuIHtcclxuICAgIGxldCBidWRnZXQgPSB0aGlzLnN1Ym1pdHByb3Bvc2FsLm9mY3N1Ym1pdHByb3Bvc2FsX2J1ZGdldDtcclxuICAgIFxyXG4gICAgbGV0IHRpbWVmcmFtZSA9IHRoaXMuc3VibWl0cHJvcG9zYWwub2Zjc3VibWl0cHJvcG9zYWxfdGltZWZyYW1lO1xyXG4gICAgbGV0IHRpbWVjb21taXQgPSB0aGlzLnN1Ym1pdHByb3Bvc2FsLm9mY3N1Ym1pdHByb3Bvc2FsX2F2YWlsYWJpbGl0eTtcclxuXHJcbiAgICBsZXQgY292ZXJsZXR0ZXIgPSB0aGlzLnN1Ym1pdHByb3Bvc2FsLm9mY3N1Ym1pdHByb3Bvc2FsX2NvdmVybGV0dGVyO1xyXG5cclxuICAgIGxldCB0ZXJtcyA9IHRoaXMuc3VibWl0cHJvcG9zYWwub2Zjc3VibWl0cHJvcG9zYWxfdGVybXM7XHJcblxyXG5cclxuICAgIGxldCBlc3RpbWF0ZWRhdGUgPSB0aGlzLnN1Ym1pdHByb3Bvc2FsLm9mY3N1Ym1pdHByb3Bvc2FsX2VzdGltYXRlc3RhcnRkYXRlO1xyXG5cclxuICAgIGxldCBib29sOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGlmIChidWRnZXQgPT09ICcnKSB7XHJcbiAgICAgIHRoaXMubXNncyA9IFtdO1xyXG4gICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBzdW1tYXJ5OiAnRXJyb3IgTWVzc2FnZScsIGRldGFpbDogJ1BsZWFzZSBFbnRlciBQcm9wb3NhbCBSYXRlJyB9KTtcclxuXHJcbiAgICAgIHJldHVybiBib29sID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGltZWZyYW1lID09PSAnJykge1xyXG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcclxuICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgc3VtbWFyeTogJ0Vycm9yIE1lc3NhZ2UnLCBkZXRhaWw6ICdQbGVhc2UgQ2xpY2sgSG93IG11Y2ggdGltZSBkdXJhdGlvbiBkbyB5b3UgbmVlZCcgfSk7XHJcbiAgICAgIHJldHVybiBib29sID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGltZWNvbW1pdCA9PT0gJycpIHtcclxuICAgICAgdGhpcy5tc2dzID0gW107XHJcbiAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIHN1bW1hcnk6ICdFcnJvciBNZXNzYWdlJywgZGV0YWlsOiAnUGxlYXNlIENsaWNrIFdoYXQgdGltZSBjb21taXRtZW50IGlzIHJlcXVpcmUgZm9yIHRoaXMgam9iJyB9KTtcclxuICAgICAgcmV0dXJuIGJvb2wgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChjb3ZlcmxldHRlciA9PT0gJycpIHtcclxuICAgICAgdGhpcy5tc2dzID0gW107XHJcbiAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIHN1bW1hcnk6ICdFcnJvciBNZXNzYWdlJywgZGV0YWlsOiAnUGxlYXNlIEVudGVyIENvdmVyIExldHRlcicgfSk7XHJcbiAgICAgIHJldHVybiBib29sID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRlcm1zID09PSAnJykge1xyXG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcclxuICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgc3VtbWFyeTogJ0Vycm9yIE1lc3NhZ2UnLCBkZXRhaWw6ICdQbGVhc2UgRW50ZXIgVGVybXMnIH0pO1xyXG4gICAgICByZXR1cm4gYm9vbCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAodGhpcy5wcm9qZWN0cG9zdHF1ZXN0aW9uc0Fyci5sZW5ndGggPT09IDApIHtcclxuICAgICBcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvamVjdHBvc3RxdWVzdGlvbnNBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgYW5zd2VyID0gdGhpcy5hcnJhbnN3ZXJbaV07XHJcbiAgICAgICBcclxuICAgICAgICBpZiAoYW5zd2VyID09PSB1bmRlZmluZWQgfHwgYW5zd2VyID09PSAnJykge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZih0aGlzLnN1Ym1pdHByb3Bvc2FscXVlc3RhbnN3ZXJBcnIubGVuZ3RoPT09dGhpcy5wcm9qZWN0cG9zdHF1ZXN0aW9uc0Fyci5sZW5ndGgpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXRwcm9wb3NhbHF1ZXN0YW5zd2VyQXJyLnNwbGljZShpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMubXNncyA9IFtdO1xyXG4gICAgICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgc3VtbWFyeTogJ0Vycm9yIE1lc3NhZ2UnLCBkZXRhaWw6ICdQbGVhc2UgRW50ZXIgQW5zd2VycyBmb3IgJyArIHRoaXMucHJvamVjdHBvc3RxdWVzdGlvbnNBcnJbaV0ucHJvamVjdHBvc3RxdWVzdGlvbnNfbmFtZSB9KTtcclxuICAgICAgICAgIHJldHVybiBib29sID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBsZXQgYWJjdGVtcDogU3VibWl0UHJvcG9zYWxRdWVzdEFuc3dlcjtcclxuICAgICAgICAgIGFiY3RlbXAgPSB7XHJcbiAgICAgICAgICAgIG9mY3N1Ym1pdHByb3Bvc2FscXVlc3RfaWQ6ICcnLFxyXG4gICAgICAgICAgICBvZmNzdWJtaXRwcm9wb3NhbF9pZF9vZmNzdWJtaXRwcm9wb3NhbHF1ZXN0OiAnJyxcclxuICAgICAgICAgICAgb2Zjc3VibWl0cHJvcG9zYWxxdWVzdF9xdWVzdGlvbjogdGhpcy5wcm9qZWN0cG9zdHF1ZXN0aW9uc0FycltpXS5wcm9qZWN0cG9zdHF1ZXN0aW9uc19uYW1lLFxyXG4gICAgICAgICAgICBvZmNzdWJtaXRwcm9wb3NhbHF1ZXN0X2Fuc3dlcjogYW5zd2VyLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5zdWJtaXRwcm9wb3NhbHF1ZXN0YW5zd2VyQXJyLnB1c2goKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgaWYgKGVzdGltYXRlZGF0ZSA9PT0gJycpIHtcclxuICAgICAgdGhpcy5tc2dzID0gW107XHJcbiAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIHN1bW1hcnk6ICdFcnJvciBNZXNzYWdlJywgZGV0YWlsOiAnUGxlYXNlIENsaWNrIFRvIEVudGVyIEVzdGltYXRlIFN0YXJ0IERhdGUnIH0pO1xyXG4gICAgICByZXR1cm4gYm9vbCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gYm9vbDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
