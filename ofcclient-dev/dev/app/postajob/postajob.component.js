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
var index_1 = require('../shared/postajob/index');
var app_component_1 = require('../app.component');
var baseurl_service_1 = require('../shared/baseurl/baseurl.service');
var PostajobComponent = (function () {
    function PostajobComponent(router, localService, appComponent, fb, route, mycur, mydate1, emailval, baseUrlservice) {
        var _this = this;
        this.router = router;
        this.localService = localService;
        this.appComponent = appComponent;
        this.fb = fb;
        this.route = route;
        this.mycur = mycur;
        this.mydate1 = mydate1;
        this.emailval = emailval;
        this.baseUrlservice = baseUrlservice;
        this.msgs = [];
        this.ofcmembersGrid = [];
        this.drpLanguageId = [];
        this.drpCountryId = [];
        this.drpStateId = [];
        this.drpCityId = [];
        this.drpdate = [];
        this.drpPrice = [];
        this.drpQuestions = [];
        this.uploadedFiles = [];
        this.fileuploadarr = [];
        this.keyword = [];
        this.subcat = [];
        this.skill = [];
        this.selectedTypeskeyword = [];
        this.autoSkillsGlobal = [];
        this.autoSkills = [];
        this.selectedSkills = [];
        this.postquestion = [];
        this.timeframe = "More than 6 Months";
        this.localService.getCountry('hj').subscribe(function (p) { _this.drpCountryId = p; _this.drpCountryId.unshift({ label: "Select Country", value: "1" }); }, function (e) { return console.log(e); }, function () { });
        this.localService.getLanguage('hj').subscribe(function (p) { _this.drpLanguageId = p; _this.drpLanguageId.unshift({ label: "Select Language", value: "1" }); }, function (e) { return console.log(e); }, function () { });
        this.mybaseurl = this.baseUrlservice.getBaseurl();
    }
    PostajobComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clear();
        var catid = 'MCAT2';
        this.localService.getSubCat(catid)
            .subscribe(function (p) { return _this.subcat = p; }, function (e) { return console.log(e); }, function () { return _this.processdata(); });
    };
    PostajobComponent.prototype.search = function (event) {
        var selectedSkill = event.query;
        var skills = this.autoSkillsGlobal;
        this.autoSkills = [];
        for (var i = 0; i < skills.length; i++) {
            var skilltemp = skills[i];
            if (skilltemp.label.toLowerCase().indexOf(selectedSkill.toLowerCase()) == 0) {
                this.autoSkills.push(skilltemp);
            }
        }
    };
    PostajobComponent.prototype.subcatClick = function (event) {
        var _this = this;
        this.keyword = [];
        this.selectedTypeskeyword = [];
        this.autoSkillsGlobal = [];
        this.autoSkills = [];
        this.selectedSkills = [];
        var subcatid = this.selectedTypesubcat;
        this.projectpost.subcat_id_fkprojectpost = subcatid;
        this.localService.getKeywordBySubCat(subcatid)
            .subscribe(function (p) { return _this.keyword = p; }, function (e) { return console.log(e); }, function () { return _this.processdata(); });
        this.localService.getSkillsBySubCat(subcatid)
            .subscribe(function (p) { return _this.autoSkillsGlobal = p; }, function (e) { return console.log(e); }, function () { return _this.processdata(); });
    };
    PostajobComponent.prototype.processdata = function () {
    };
    PostajobComponent.prototype.clear = function () {
        this.keyword = [];
        this.subcat = [];
        this.selectedTypesubcat = null;
        this.selectedTypeskeyword = [];
        this.fileupload = {
            fileName: '',
            fileType: '',
            filePath: '',
            fileStatus: '',
            uploadfile_filename: ''
        };
        this.projectpost = {
            ofcprojectpost_id: '',
            ofcmembers_id_fkprojectpost: '',
            subcat_id_fkprojectpost: '',
            experience_id_fkprojectpost: '1',
            ofcprojectpost_budget: '',
            ofcprojectpost_negotiable: '',
            ofcprojectpost_title: '',
            ofcprojectpost_description: '',
            ofcprojectpost_timeframe: '',
            ofcprojectpost_typepreference: '',
            ofcprojectpost_kind: '',
            ofcprojectpost_budgetamount: '0',
            ofcprojectpost_commissionpercentage: '0',
            ofcprojectpost_ofccommission: '0',
            ofcprojectpost_estimatestartdate: '',
            ofcprojectpost_startdate: '',
            ofcprojectpost_enddate: '',
            ofcprojectpost_invitefreelancers: '',
            ofcprojectpost_public: '',
            country_id_fkprojectpost: '',
            language_id_fkprojectpost: '',
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
        };
    };
    PostajobComponent.prototype.validatePostaJob = function () {
        var subcat = this.projectpost.subcat_id_fkprojectpost;
        var keywordlength = this.selectedTypeskeyword.length;
        var langId = this.projectpost.language_id_fkprojectpost;
        var countryId = this.projectpost.country_id_fkprojectpost;
        var title = this.projectpost.ofcprojectpost_title;
        var descpr = this.projectpost.ofcprojectpost_description;
        var skilllength = this.selectedSkills.length;
        var exper = this.projectpost.experience_id_fkprojectpost;
        var timecommit = this.projectpost.ofcprojectpost_timeframe;
        var questlength = this.postquestion.length;
        var bool = true;
        if (subcat === '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Please select Sub Category' });
            return bool = false;
        }
        if (keywordlength === 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Please select Label' });
            return bool = false;
        }
        if (langId === '' || langId === 'Select') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Please select Language' });
            return bool = false;
        }
        if (countryId === '' || countryId === 'Select') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Please select Country' });
            return bool = false;
        }
        if (title === '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Please Enter Name of your job posting' });
            return bool = false;
        }
        if (descpr === '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Please Enter Description of work' });
            return bool = false;
        }
        if (skilllength === 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Please Enter Require skills' });
            return bool = false;
        }
        if (exper === '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Please Click Desired experience level' });
            bool = false;
        }
        if (timecommit === '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Please Click How much time duration do you need' });
            return bool = false;
        }
        if (questlength === 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Please Add Question' });
            return bool = false;
        }
        return bool;
    };
    PostajobComponent.prototype.onSubmit = function () {
        var _this = this;
        this.onFinalFileUpload();
        if (!this.validatePostaJob()) {
        }
        else {
            var data = sessionStorage.getItem('memberdetails');
            var ofcmemsession = JSON.parse(data);
            var ofcmemsession_id = ofcmemsession.ofcmemsession_id;
            var member_id = ofcmemsession.ofcmembers_id;
            this.projectpost.ofcmembers_id_fkprojectpost = member_id;
            this.submitted = true;
            this.msgs = [];
            var keywordSelectItem = void 0;
            var keywordArr = [];
            for (var i = 0; i < this.selectedTypeskeyword.length; i++) {
                keywordSelectItem = { label: '', value: this.selectedTypeskeyword[i] };
                keywordArr.push(keywordSelectItem);
            }
            var keywordstr = JSON.stringify(keywordArr);
            var skillstr = JSON.stringify(this.selectedSkills);
            var queststr = JSON.stringify(this.postquestion);
            var filestr = JSON.stringify(this.fileuploadarr);
            var projectpoststr = JSON.stringify(this.projectpost);
            this.localService.postajob(ofcmemsession_id, this.projectpost, keywordstr, queststr, skillstr, filestr)
                .subscribe(function (p) { return _this.commonerror = p; }, function (e) { return console.log(e); }, function () {
                var isSuccess = _this.commonerror.Isuccess;
                if (isSuccess === 1) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Inserted Successfully...' });
                    _this.router.navigate(['/joblist']);
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Data Insertion Fail...' });
                }
            });
        }
    };
    PostajobComponent.prototype.populateCountry = function (events1) {
    };
    PostajobComponent.prototype.populateLanguage = function (events1) {
    };
    PostajobComponent.prototype.onUpload = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
        }
    };
    PostajobComponent.prototype.onFinalFileUpload = function () {
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
    PostajobComponent.prototype.addQuest = function () {
        var abctemp;
        abctemp = { ofcprojectpost_id: '', projectpostquestions_id: '', projectpostquestions_name: this.question };
        this.postquestion.push(abctemp);
        this.question = "";
    };
    PostajobComponent.prototype.deleteQuest = function (index) {
        this.postquestion.splice(index, 1);
    };
    PostajobComponent.prototype.selectExperience = function (expid) {
        this.projectpost.experience_id_fkprojectpost = expid;
    };
    PostajobComponent.prototype.selectTimeFrame = function (timeframe) {
        this.projectpost.ofcprojectpost_timeframe = timeframe;
    };
    PostajobComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-postajob',
            templateUrl: 'postajob.component.html',
            styleUrls: ['postajob.component.css'],
            providers: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.PostajobService, app_component_1.AppComponent, forms_1.FormBuilder, router_1.ActivatedRoute, first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, baseurl_service_1.BaseUrlService])
    ], PostajobComponent);
    return PostajobComponent;
}());
exports.PostajobComponent = PostajobComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wb3N0YWpvYi9wb3N0YWpvYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQVNqRix1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUd6RCwyQkFBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUc1RCxrQ0FBNkIsbUNBQW1DLENBQUMsQ0FBQTtBQUNqRSxtQ0FBOEIsb0NBQW9DLENBQUMsQ0FBQTtBQUduRSxzQkFBZ0MsMEJBQTBCLENBQUMsQ0FBQTtBQUUzRCw4QkFBNkIsa0JBQWtCLENBQUMsQ0FBQTtBQUVoRCxnQ0FBK0IsbUNBQW1DLENBQUMsQ0FBQTtBQWtCbkU7SUErQ0UsMkJBQ1UsTUFBYyxFQUNkLFlBQTZCLEVBQzdCLFlBQTBCLEVBQzFCLEVBQWUsRUFDZixLQUFxQixFQUNyQixLQUFxQixFQUNyQixPQUFxQixFQUNyQixRQUF1QixFQUN2QixjQUE4QjtRQXhEMUMsaUJBaWJDO1FBallXLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFDN0IsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUF2RHhDLFNBQUksR0FBYyxFQUFFLENBQUM7UUFPckIsbUJBQWMsR0FBaUIsRUFBRSxDQUFDO1FBQ2xDLGtCQUFhLEdBQWlCLEVBQUUsQ0FBQztRQUNqQyxpQkFBWSxHQUFpQixFQUFFLENBQUM7UUFDaEMsZUFBVSxHQUFpQixFQUFFLENBQUM7UUFDOUIsY0FBUyxHQUFpQixFQUFFLENBQUM7UUFD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QyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFckMsQ0FBQztJQUdELDRDQUFnQixHQUFoQixVQUFpQixLQUFhO1FBRTVCLElBQUksQ0FBQyxXQUFXLENBQUMsMkJBQTJCLEdBQUcsS0FBSyxDQUFDO0lBQ3ZELENBQUM7SUFFRCwyQ0FBZSxHQUFmLFVBQWdCLFNBQWlCO1FBRS9CLElBQUksQ0FBQyxXQUFXLENBQUMsd0JBQXdCLEdBQUcsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFuYkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7WUFDckMsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUUxQixDQUFDOzt5QkFBQTtJQWtiRix3QkFBQztBQUFELENBamJBLEFBaWJDLElBQUE7QUFqYlkseUJBQWlCLG9CQWliN0IsQ0FBQSIsImZpbGUiOiJhcHAvcG9zdGFqb2IvcG9zdGFqb2IuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEYXRhVGFibGVNb2R1bGUsIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgRGlhbG9nTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgQ2FsZW5kYXJNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWVzc2FnZXNNb2R1bGUsIE1lc3NhZ2UsIEdyb3dsIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgUGFuZWxNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBJbnB1dFRleHRhcmVhTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgTXlDdXJyZW5jeVBpcGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZmlyc3QucGlwZSc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBTZWxlY3RJdGVtIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgTXlEYXRlRm9ybWF0IH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL215ZGF0ZWZvcm1hdC5waXBlJztcclxuaW1wb3J0IHsgRW1haWxWYWxpZGF0ZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9lbWFpbHZhbGlkYXRlLnBpcGUnO1xyXG5pbXBvcnQgeyBDdXN0b21WYWxpZGF0b3IgfSBmcm9tICcuLi9zaGFyZWQvdmFsaWRhdG9ycy92YWxpZGF0b3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZCB9IGZyb20gJy4vZmlsZXVwbG9hZCc7XHJcbmltcG9ydCB7IFBvc3Rham9iU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9wb3N0YWpvYi9pbmRleCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT0ZDTWVtYmVycyB9IGZyb20gJy4vb2ZjbWVtYmVycyc7XHJcbmltcG9ydCB7IEJhc2VVcmxTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2Jhc2V1cmwvYmFzZXVybC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUHJvamVjdFBvc3RRdWVzdGlvbnMgfSBmcm9tICcuL3Byb2plY3Rwb3N0cXVlc3Rpb25zJztcclxuaW1wb3J0IHsgUHJvamVjdFBvc3QgfSBmcm9tICcuL3Byb2plY3Rwb3N0JztcclxuXHJcbi8vZm9yIG1lbWJlcnNlc3Npb25pZFxyXG5pbXBvcnQgeyBPRkNtZW1TZXNzaW9uIH0gZnJvbSAnLi4vbG9naW5wYWdlL29mY21lbXNlc3Npb24nO1xyXG5pbXBvcnQgeyBDb21tb25FcnJvciB9IGZyb20gJy4vY29tbW9uZXJyb3InO1xyXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBBYm91dENvbXBvbmVudC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzZC1wb3N0YWpvYicsXHJcbiAgdGVtcGxhdGVVcmw6ICdwb3N0YWpvYi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3Bvc3Rham9iLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtBcHBDb21wb25lbnRdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9zdGFqb2JDb21wb25lbnQge1xyXG4gIG1zZ3M6IE1lc3NhZ2VbXSA9IFtdO1xyXG4gIHVzZXJmb3JtOiBGb3JtR3JvdXA7XHJcbiAgYm9vbHBvc3Rham9iOiBib29sZWFuO1xyXG5cclxuICBvZmNtZW1iZXJzOiBPRkNNZW1iZXJzO1xyXG4gIG5ld29mY21lbWJlcnM6IGJvb2xlYW47XHJcblxyXG4gIG9mY21lbWJlcnNHcmlkOiBPRkNNZW1iZXJzW10gPSBbXTtcclxuICBkcnBMYW5ndWFnZUlkOiBTZWxlY3RJdGVtW10gPSBbXTtcclxuICBkcnBDb3VudHJ5SWQ6IFNlbGVjdEl0ZW1bXSA9IFtdO1xyXG4gIGRycFN0YXRlSWQ6IFNlbGVjdEl0ZW1bXSA9IFtdO1xyXG4gIGRycENpdHlJZDogU2VsZWN0SXRlbVtdID0gW107XHJcbiAgZHJwZGF0ZTogU2VsZWN0SXRlbVtdID0gW107XHJcbiAgZHJwUHJpY2U6IFNlbGVjdEl0ZW1bXSA9IFtdO1xyXG4gIGRycFF1ZXN0aW9uczogU2VsZWN0SXRlbVtdID0gW107XHJcblxyXG4gIHN1Ym1pdHRlZDogYm9vbGVhbjtcclxuXHJcbiAgdXBsb2FkZWRGaWxlczogYW55W10gPSBbXTtcclxuICBmaWxldXBsb2FkYXJyOiBGaWxlVXBsb2FkW10gPSBbXTtcclxuICBmaWxldXBsb2FkOiBGaWxlVXBsb2FkO1xyXG4gIG15YmFzZXVybDogc3RyaW5nO1xyXG5cclxuICAvL2FzIGRvbmUgb24gMTcgamFuIDIwMTYgYnkgTWFuZGFyIGZvciBzZWxlY3QgYnV0dG9uIFxyXG4gIGtleXdvcmQ6IFNlbGVjdEl0ZW1bXSA9IFtdO1xyXG4gIHN1YmNhdDogU2VsZWN0SXRlbVtdID0gW107XHJcbiAgc2tpbGw6IFNlbGVjdEl0ZW1bXSA9IFtdO1xyXG5cclxuICBzZWxlY3RlZFR5cGVzdWJjYXQ6IHN0cmluZztcclxuXHJcbiAgc2VsZWN0ZWRUeXBlc2tleXdvcmQ6IHN0cmluZ1tdID0gW107Ly9bJ0FwYXJ0bWVudCcsJ1N0dWRpbyddO1xyXG5cclxuICBhdXRvU2tpbGxzR2xvYmFsOiBTZWxlY3RJdGVtW10gPSBbXTtcclxuICBhdXRvU2tpbGxzOiBTZWxlY3RJdGVtW10gPSBbXTtcclxuICBzZWxlY3RlZFNraWxsczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgcG9zdHF1ZXN0aW9uOiBQcm9qZWN0UG9zdFF1ZXN0aW9uc1tdID0gW107XHJcbiAgcXVlc3Rpb246IHN0cmluZztcclxuXHJcbiAgcHJvamVjdHBvc3Q6IFByb2plY3RQb3N0O1xyXG5cclxuICBjb21tb25lcnJvcjogQ29tbW9uRXJyb3I7XHJcbiAgXHJcbiAgdGltZWZyYW1lOiBzdHJpbmcgPSBcIk1vcmUgdGhhbiA2IE1vbnRoc1wiO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBsb2NhbFNlcnZpY2U6IFBvc3Rham9iU2VydmljZSxcclxuICAgIHByaXZhdGUgYXBwQ29tcG9uZW50OiBBcHBDb21wb25lbnQsXHJcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBteWN1cjogTXlDdXJyZW5jeVBpcGUsXHJcbiAgICBwcml2YXRlIG15ZGF0ZTE6IE15RGF0ZUZvcm1hdCxcclxuICAgIHByaXZhdGUgZW1haWx2YWw6IEVtYWlsVmFsaWRhdGUsXHJcbiAgICBwcml2YXRlIGJhc2VVcmxzZXJ2aWNlOiBCYXNlVXJsU2VydmljZVxyXG4gICkge1xyXG5cclxuICAgIHRoaXMubG9jYWxTZXJ2aWNlLmdldENvdW50cnkoJ2hqJykuc3Vic2NyaWJlKHAgPT4geyB0aGlzLmRycENvdW50cnlJZCA9IHA7IHRoaXMuZHJwQ291bnRyeUlkLnVuc2hpZnQoeyBsYWJlbDogXCJTZWxlY3QgQ291bnRyeVwiLCB2YWx1ZTogXCIxXCIgfSkgfSwgZSA9PiBjb25zb2xlLmxvZyhlKSwgKCkgPT4ge30pO1xyXG4gICAgdGhpcy5sb2NhbFNlcnZpY2UuZ2V0TGFuZ3VhZ2UoJ2hqJykuc3Vic2NyaWJlKHAgPT4geyB0aGlzLmRycExhbmd1YWdlSWQgPSBwOyB0aGlzLmRycExhbmd1YWdlSWQudW5zaGlmdCh7IGxhYmVsOiBcIlNlbGVjdCBMYW5ndWFnZVwiLCB2YWx1ZTogXCIxXCIgfSkgfSwgZSA9PiBjb25zb2xlLmxvZyhlKSwgKCkgPT4ge30pO1xyXG4gICAgXHJcbiAgICB0aGlzLm15YmFzZXVybCA9IHRoaXMuYmFzZVVybHNlcnZpY2UuZ2V0QmFzZXVybCgpO1xyXG5cclxuICB9XHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB0aGlzLmNsZWFyKCk7XHJcblxyXG4gICAgbGV0IGNhdGlkID0gJ01DQVQyJztcclxuXHJcbiAgICB0aGlzLmxvY2FsU2VydmljZS5nZXRTdWJDYXQoY2F0aWQpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIC8qIGhhcHB5IHBhdGggKi8gcCA9PiB0aGlzLnN1YmNhdCA9IHAsXHJcbiAgICAgICAgICAgIC8qIGVycm9yIHBhdGggKi8gZSA9PiBjb25zb2xlLmxvZyhlKSxcclxuICAgICAgICAgICAgLyogb25Db21wbGV0ZSAqLygpID0+IHRoaXMucHJvY2Vzc2RhdGEoKSk7Ly90aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnaW5mbycsIHN1bW1hcnk6ICdTdWNjZXNzJywgZGV0YWlsOiAnRm9ybSBVcGRhdGUgU3VjY2Vzc2Z1bGx5JyB9KSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBzZWFyY2goZXZlbnQ6IGFueSkge1xyXG4gICAgLy8gdGhpcy5sb2NhbFNlcnZpY2UuZ2V0QXV0b1NraWxscygnZHVtbXknKS5zdWJzY3JpYmUocCA9PnRoaXMuYXV0b1NraWxscz1wLGUgPT4gY29uc29sZS5sb2coZSksICgpID0+IGNvbnNvbGUubG9nKHRoaXMuYXV0b1NraWxscykpO1xyXG5cclxuICAgIGxldCBzZWxlY3RlZFNraWxsID0gZXZlbnQucXVlcnk7XHJcbiAgICBsZXQgc2tpbGxzID0gdGhpcy5hdXRvU2tpbGxzR2xvYmFsO1xyXG4gICAgdGhpcy5hdXRvU2tpbGxzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBza2lsbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHNraWxsdGVtcCA9IHNraWxsc1tpXTtcclxuICAgICAgaWYgKHNraWxsdGVtcC5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VsZWN0ZWRTa2lsbC50b0xvd2VyQ2FzZSgpKSA9PSAwKSB7XHJcbiAgICAgICAgdGhpcy5hdXRvU2tpbGxzLnB1c2goc2tpbGx0ZW1wKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgc3ViY2F0Q2xpY2soZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5rZXl3b3JkID0gW107XHJcbiAgICB0aGlzLnNlbGVjdGVkVHlwZXNrZXl3b3JkID0gW107XHJcblxyXG4gICAgdGhpcy5hdXRvU2tpbGxzR2xvYmFsID0gW107XHJcbiAgICB0aGlzLmF1dG9Ta2lsbHMgPSBbXTtcclxuICAgIHRoaXMuc2VsZWN0ZWRTa2lsbHMgPSBbXTtcclxuXHJcbiAgICBsZXQgc3ViY2F0aWQgPSB0aGlzLnNlbGVjdGVkVHlwZXN1YmNhdDtcclxuXHJcbiAgICB0aGlzLnByb2plY3Rwb3N0LnN1YmNhdF9pZF9ma3Byb2plY3Rwb3N0ID0gc3ViY2F0aWQ7XHJcblxyXG4gICAgdGhpcy5sb2NhbFNlcnZpY2UuZ2V0S2V5d29yZEJ5U3ViQ2F0KHN1YmNhdGlkKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAvKiBoYXBweSBwYXRoICovIHAgPT4gdGhpcy5rZXl3b3JkID0gcCxcclxuICAgICAgICAgICAgLyogZXJyb3IgcGF0aCAqLyBlID0+IGNvbnNvbGUubG9nKGUpLFxyXG4gICAgICAgICAgICAvKiBvbkNvbXBsZXRlICovKCkgPT4gdGhpcy5wcm9jZXNzZGF0YSgpKTsvL3RoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdpbmZvJywgc3VtbWFyeTogJ1N1Y2Nlc3MnLCBkZXRhaWw6ICdGb3JtIFVwZGF0ZSBTdWNjZXNzZnVsbHknIH0pKTtcclxuXHJcblxyXG4gICAgdGhpcy5sb2NhbFNlcnZpY2UuZ2V0U2tpbGxzQnlTdWJDYXQoc3ViY2F0aWQpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIC8qIGhhcHB5IHBhdGggKi8gcCA9PiB0aGlzLmF1dG9Ta2lsbHNHbG9iYWwgPSBwLFxyXG4gICAgICAgICAgICAvKiBlcnJvciBwYXRoICovIGUgPT4gY29uc29sZS5sb2coZSksXHJcbiAgICAgICAgICAgIC8qIG9uQ29tcGxldGUgKi8oKSA9PiB0aGlzLnByb2Nlc3NkYXRhKCkpOy8vdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2luZm8nLCBzdW1tYXJ5OiAnU3VjY2VzcycsIGRldGFpbDogJ0Zvcm0gVXBkYXRlIFN1Y2Nlc3NmdWxseScgfSkpO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJvY2Vzc2RhdGEoKSB7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIGNsZWFyKCkge1xyXG5cclxuICAgIHRoaXMua2V5d29yZCA9IFtdO1xyXG4gICAgdGhpcy5zdWJjYXQgPSBbXTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkVHlwZXN1YmNhdCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5zZWxlY3RlZFR5cGVza2V5d29yZCA9IFtdO1xyXG5cclxuIFxyXG4gICAgdGhpcy5maWxldXBsb2FkID0ge1xyXG4gICAgICBmaWxlTmFtZTogJycsXHJcbiAgICAgIGZpbGVUeXBlOiAnJyxcclxuICAgICAgZmlsZVBhdGg6ICcnLFxyXG4gICAgICBmaWxlU3RhdHVzOiAnJyxcclxuICAgICAgdXBsb2FkZmlsZV9maWxlbmFtZTogJydcclxuICAgIH1cclxuICAgIHRoaXMucHJvamVjdHBvc3QgPSB7XHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2lkOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19pZF9ma3Byb2plY3Rwb3N0OiAnJyxcclxuICAgICAgc3ViY2F0X2lkX2ZrcHJvamVjdHBvc3Q6ICcnLFxyXG4gICAgICBleHBlcmllbmNlX2lkX2ZrcHJvamVjdHBvc3Q6ICcxJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfYnVkZ2V0OiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfbmVnb3RpYWJsZTogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X3RpdGxlOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF90aW1lZnJhbWU6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF90eXBlcHJlZmVyZW5jZTogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2tpbmQ6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9idWRnZXRhbW91bnQ6ICcwJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfY29tbWlzc2lvbnBlcmNlbnRhZ2U6ICcwJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3Rfb2ZjY29tbWlzc2lvbjogJzAnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9lc3RpbWF0ZXN0YXJ0ZGF0ZTogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X3N0YXJ0ZGF0ZTogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2VuZGRhdGU6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9pbnZpdGVmcmVlbGFuY2VyczogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X3B1YmxpYzogJycsXHJcbiAgICAgIGNvdW50cnlfaWRfZmtwcm9qZWN0cG9zdDogJycsXHJcbiAgICAgIGxhbmd1YWdlX2lkX2ZrcHJvamVjdHBvc3Q6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9wcm9qZWN0YW1vdW50OiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfYWR2YW5jZWFtb3VudDogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2ZpbmFscGFpZGFtb3VudDogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2lzcGF5bWVudHRlcm1zYWdyZWVkOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfaXNwYWlkOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfaXNjb21wbGV0ZWQ6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9kZWxheWVkOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfaXN0ZXJtc2FnZ3JlZWRieW1lOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfaXN0ZXJtc2FnZ3JlZWRieWZyZWVsYW5jZXI6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9pc2Rpc3B1dGU6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9pc3JlZnVuZHJlcXVlc3RlZDogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2lzcmVmdW5kZWQ6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9pc2Rpc3B1dGVyZXNvbHZlZDogJycsXHJcbiAgICAgIGNyZWF0ZWRhdGU6ICcnLFxyXG4gICAgICBtb2RpZmllZGRhdGU6ICcnLFxyXG4gICAgICBzdGF0dXM6ICcnLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVQb3N0YUpvYigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XHJcbiAgICBsZXQgc3ViY2F0ID0gdGhpcy5wcm9qZWN0cG9zdC5zdWJjYXRfaWRfZmtwcm9qZWN0cG9zdDtcclxuICAgIFxyXG4gICAgbGV0IGtleXdvcmRsZW5ndGg6IGFueSA9IHRoaXMuc2VsZWN0ZWRUeXBlc2tleXdvcmQubGVuZ3RoO1xyXG4gICAgXHJcbiAgICBsZXQgbGFuZ0lkID0gdGhpcy5wcm9qZWN0cG9zdC5sYW5ndWFnZV9pZF9ma3Byb2plY3Rwb3N0O1xyXG4gICAgXHJcbiAgICBsZXQgY291bnRyeUlkID0gdGhpcy5wcm9qZWN0cG9zdC5jb3VudHJ5X2lkX2ZrcHJvamVjdHBvc3Q7XHJcbiAgICBcclxuICAgIGxldCB0aXRsZSA9IHRoaXMucHJvamVjdHBvc3Qub2ZjcHJvamVjdHBvc3RfdGl0bGU7XHJcbiAgICBsZXQgZGVzY3ByID0gdGhpcy5wcm9qZWN0cG9zdC5vZmNwcm9qZWN0cG9zdF9kZXNjcmlwdGlvbjtcclxuICAgIGxldCBza2lsbGxlbmd0aDogYW55ID0gdGhpcy5zZWxlY3RlZFNraWxscy5sZW5ndGg7XHJcbiAgICBsZXQgZXhwZXIgPSB0aGlzLnByb2plY3Rwb3N0LmV4cGVyaWVuY2VfaWRfZmtwcm9qZWN0cG9zdDtcclxuICAgIGxldCB0aW1lY29tbWl0ID0gdGhpcy5wcm9qZWN0cG9zdC5vZmNwcm9qZWN0cG9zdF90aW1lZnJhbWU7XHJcblxyXG4gICAgbGV0IHF1ZXN0bGVuZ3RoOmFueSA9IHRoaXMucG9zdHF1ZXN0aW9uLmxlbmd0aDtcclxuXHJcbiAgICBsZXQgYm9vbDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBpZiAoc3ViY2F0ID09PSAnJykge1xyXG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcclxuICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgc3VtbWFyeTogJ0Vycm9yIE1lc3NhZ2UnLCBkZXRhaWw6ICdQbGVhc2Ugc2VsZWN0IFN1YiBDYXRlZ29yeScgfSk7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gYm9vbCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGtleXdvcmRsZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5tc2dzID0gW107XHJcbiAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIHN1bW1hcnk6ICdFcnJvciBNZXNzYWdlJywgZGV0YWlsOiAnUGxlYXNlIHNlbGVjdCBMYWJlbCcgfSk7XHJcbiAgICAgIHJldHVybiBib29sID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxhbmdJZCA9PT0gJycgfHwgbGFuZ0lkID09PSAnU2VsZWN0Jykge1xyXG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcclxuICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgc3VtbWFyeTogJ0Vycm9yIE1lc3NhZ2UnLCBkZXRhaWw6ICdQbGVhc2Ugc2VsZWN0IExhbmd1YWdlJyB9KTtcclxuICAgICAgcmV0dXJuIGJvb2wgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChjb3VudHJ5SWQgPT09ICcnIHx8IGNvdW50cnlJZCA9PT0gJ1NlbGVjdCcpIHtcclxuICAgICAgdGhpcy5tc2dzID0gW107XHJcbiAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIHN1bW1hcnk6ICdFcnJvciBNZXNzYWdlJywgZGV0YWlsOiAnUGxlYXNlIHNlbGVjdCBDb3VudHJ5JyB9KTtcclxuICAgICAgcmV0dXJuIGJvb2wgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0aXRsZSA9PT0gJycpIHtcclxuICAgICAgdGhpcy5tc2dzID0gW107XHJcbiAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIHN1bW1hcnk6ICdFcnJvciBNZXNzYWdlJywgZGV0YWlsOiAnUGxlYXNlIEVudGVyIE5hbWUgb2YgeW91ciBqb2IgcG9zdGluZycgfSk7XHJcbiAgICAgIHJldHVybiBib29sID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZGVzY3ByID09PSAnJykge1xyXG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcclxuICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgc3VtbWFyeTogJ0Vycm9yIE1lc3NhZ2UnLCBkZXRhaWw6ICdQbGVhc2UgRW50ZXIgRGVzY3JpcHRpb24gb2Ygd29yaycgfSk7XHJcbiAgICAgIHJldHVybiBib29sID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNraWxsbGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMubXNncyA9IFtdO1xyXG4gICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBzdW1tYXJ5OiAnRXJyb3IgTWVzc2FnZScsIGRldGFpbDogJ1BsZWFzZSBFbnRlciBSZXF1aXJlIHNraWxscycgfSk7XHJcbiAgICAgIHJldHVybiBib29sID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZXhwZXIgPT09ICcnKSB7XHJcbiAgICAgIHRoaXMubXNncyA9IFtdO1xyXG4gICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBzdW1tYXJ5OiAnRXJyb3IgTWVzc2FnZScsIGRldGFpbDogJ1BsZWFzZSBDbGljayBEZXNpcmVkIGV4cGVyaWVuY2UgbGV2ZWwnIH0pO1xyXG4gICAgICBib29sID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGltZWNvbW1pdCA9PT0gJycpIHtcclxuICAgICAgdGhpcy5tc2dzID0gW107XHJcbiAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIHN1bW1hcnk6ICdFcnJvciBNZXNzYWdlJywgZGV0YWlsOiAnUGxlYXNlIENsaWNrIEhvdyBtdWNoIHRpbWUgZHVyYXRpb24gZG8geW91IG5lZWQnIH0pO1xyXG4gICAgICByZXR1cm4gYm9vbCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChxdWVzdGxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcclxuICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgc3VtbWFyeTogJ0Vycm9yIE1lc3NhZ2UnLCBkZXRhaWw6ICdQbGVhc2UgQWRkIFF1ZXN0aW9uJyB9KTtcclxuICAgICAgcmV0dXJuIGJvb2wgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIGJvb2w7XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCgpIHtcclxuXHJcbiAgICAvL29wdGlvbmFsIHZhbGlkYXRpb25cclxuXHJcbiAgICAvL2FzIGRvbmUgb24gMTkgamFuIDIwMTYgYnkgTWFuZGFyIGZvciB0ZXN0aW5nIGFsbCBkYXRhIGluIGNvcnJlY3QgZm9ybWF0XHJcbiAgICB0aGlzLm9uRmluYWxGaWxlVXBsb2FkKCk7XHJcbiAgICBcclxuICAgIC8vYXMgZG9uZSBvbiAyMCBqYW4gMjAxNiBieSBNYW5kYXIgZm9yIHRlc3RpbmcgYWxsIGRhdGEgaW4gY29ycmVjdCBmb3JtYXRcclxuICAgIC8vdmFsaWRhdGlvblxyXG4gICAgLy9jYWxsIHZhbGlkYXRpb24gbWV0aG9kXHJcbiAgICBpZiAoIXRoaXMudmFsaWRhdGVQb3N0YUpvYigpKSB7XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgLy9yZXRyaWV2ZSBtZW1iZXJzZXNzaW9uaWQgZnJvbSBzdG9yYWdlXHJcbiAgICAgIC8vIEdldCBzYXZlZCBkYXRhIGZyb20gc2Vzc2lvblN0b3JhZ2VcclxuICAgICAgdmFyIGRhdGEgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdtZW1iZXJkZXRhaWxzJyk7XHJcblxyXG4gICAgICBcclxuICAgICAgbGV0IG9mY21lbXNlc3Npb246IE9GQ21lbVNlc3Npb24gPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICBsZXQgb2ZjbWVtc2Vzc2lvbl9pZCA9IG9mY21lbXNlc3Npb24ub2ZjbWVtc2Vzc2lvbl9pZDtcclxuICAgICAgXHJcblxyXG4gICAgICBsZXQgbWVtYmVyX2lkID0gb2ZjbWVtc2Vzc2lvbi5vZmNtZW1iZXJzX2lkO1xyXG4gICAgICB0aGlzLnByb2plY3Rwb3N0Lm9mY21lbWJlcnNfaWRfZmtwcm9qZWN0cG9zdCA9IG1lbWJlcl9pZDtcclxuXHJcbiAgICAgXHJcbiAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5tc2dzID0gW107XHJcblxyXG4gICAgICBsZXQga2V5d29yZFNlbGVjdEl0ZW06IFNlbGVjdEl0ZW07XHJcbiAgICAgIGxldCBrZXl3b3JkQXJyOiBTZWxlY3RJdGVtW10gPSBbXTtcclxuXHJcbiAgICAgIFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWRUeXBlc2tleXdvcmQubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAga2V5d29yZFNlbGVjdEl0ZW0gPSB7IGxhYmVsOiAnJywgdmFsdWU6IHRoaXMuc2VsZWN0ZWRUeXBlc2tleXdvcmRbaV0gfTtcclxuICAgICAgICBrZXl3b3JkQXJyLnB1c2goa2V5d29yZFNlbGVjdEl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vY29uc29sZS5sb2coJ2tleXdvcmRBcnI6ICcgKyBrZXl3b3JkQXJyKTtcclxuICAgICAgbGV0IGtleXdvcmRzdHIgPSBKU09OLnN0cmluZ2lmeShrZXl3b3JkQXJyKTtcclxuXHJcbiAgICAgIGxldCBza2lsbHN0ciA9IEpTT04uc3RyaW5naWZ5KHRoaXMuc2VsZWN0ZWRTa2lsbHMpO1xyXG4gICAgICBsZXQgcXVlc3RzdHIgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnBvc3RxdWVzdGlvbik7XHJcbiAgICAgIGxldCBmaWxlc3RyID0gSlNPTi5zdHJpbmdpZnkodGhpcy5maWxldXBsb2FkYXJyKTtcclxuICAgICAgbGV0IHByb2plY3Rwb3N0c3RyID0gSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9qZWN0cG9zdCk7XHJcblxyXG4gICAgICBcclxuXHJcbiAgICAgIC8vIGZvcm0gZGF0YSBzdWJtaXR0ZWQuLi5cclxuICAgICAgdGhpcy5sb2NhbFNlcnZpY2UucG9zdGFqb2Iob2ZjbWVtc2Vzc2lvbl9pZCwgdGhpcy5wcm9qZWN0cG9zdCwga2V5d29yZHN0ciwgcXVlc3RzdHIsIHNraWxsc3RyLCBmaWxlc3RyKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIC8qIGhhcHB5IHBhdGggKi8gcCA9PiB0aGlzLmNvbW1vbmVycm9yID0gcCxcclxuICAgICAgICAgICAgLyogZXJyb3IgcGF0aCAqLyBlID0+IGNvbnNvbGUubG9nKGUpLFxyXG4gICAgICAgICAgICAvKiBvbkNvbXBsZXRlICovKCkgPT4ge1xyXG4gICAgICAgICAgLy90aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnaW5mbycsIHN1bW1hcnk6ICdTdWNjZXNzJywgZGV0YWlsOiAnRm9ybSBVcGRhdGUgU3VjY2Vzc2Z1bGx5JyB9KVxyXG4gICAgICAgICAgbGV0IGlzU3VjY2VzczogYW55ID0gdGhpcy5jb21tb25lcnJvci5Jc3VjY2VzcztcclxuICAgICAgICAgIGlmIChpc1N1Y2Nlc3MgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5tc2dzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdpbmZvJywgc3VtbWFyeTogJ1N1Y2Nlc3MnLCBkZXRhaWw6ICdEYXRhIEluc2VydGVkIFN1Y2Nlc3NmdWxseS4uLicgfSlcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvam9ibGlzdCddKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1zZ3MgPSBbXTtcclxuICAgICAgICAgICAgLy90aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnaW5mbycsIHN1bW1hcnk6ICdTdWNjZXNzJywgZGV0YWlsOiAnRm9ybSBVcGRhdGUgU3VjY2Vzc2Z1bGx5JyB9KVxyXG4gICAgICAgICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBzdW1tYXJ5OiAnRXJyb3IgTWVzc2FnZScsIGRldGFpbDogJ0RhdGEgSW5zZXJ0aW9uIEZhaWwuLi4nIH0pO1xyXG5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAvL2FzIGRvbmUgb24gMTkgamFuIDIwMTcgYnkgTWFuZGFyIGZvciByb3V0aW5nIHRvIGpvYmxpc3RcclxuXHJcbiAgICAgIC8vdGhpcy5jbGVhcigpO1xyXG4gICAgfS8vZW5kIGVsc2Ugb2YgdmFsaWRhdGlvblxyXG4gIH1cclxuXHJcbiAgcG9wdWxhdGVDb3VudHJ5KGV2ZW50czE6IGFueSkge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBwb3B1bGF0ZUxhbmd1YWdlKGV2ZW50czE6IGFueSkge1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcbiAgb25VcGxvYWQoZXZlbnQ6IGFueSkge1xyXG5cclxuICAgIC8vdGhpcy51cGxvYWRlZEZpbGVzID0gW107XHJcbiAgICBmb3IgKGxldCBmaWxlIG9mIGV2ZW50LmZpbGVzKSB7XHJcblxyXG4gICAgICB0aGlzLnVwbG9hZGVkRmlsZXMucHVzaChmaWxlKTtcclxuICAgICAgLy9icmVhaztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy90aGlzLm1zZ3MgPSBbXTtcclxuICAgIC8vdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2luZm8nLCBzdW1tYXJ5OiAnRmlsZSBVcGxvYWRlZCcsIGRldGFpbDogJycgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgXHJcbiAgb25GaW5hbEZpbGVVcGxvYWQoKSB7XHJcblxyXG4gICAgXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudXBsb2FkZWRGaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLnVwbG9hZGVkRmlsZXNbaV0ubmFtZTtcclxuICAgICAgbGV0IHRlbXBmaWxldXBsb2FkOkZpbGVVcGxvYWQ7XHJcblxyXG4gICAgIFxyXG4gICAgICB0ZW1wZmlsZXVwbG9hZCA9IHtcclxuICAgICAgICBmaWxlTmFtZTogZmlsZW5hbWUsXHJcbiAgICAgICAgZmlsZVR5cGU6ICdpbWcnLFxyXG4gICAgICAgIGZpbGVQYXRoOiAnJyxcclxuICAgICAgICBmaWxlU3RhdHVzOiAnWWVzJyxcclxuICAgICAgICB1cGxvYWRmaWxlX2ZpbGVuYW1lOiAnJ1xyXG4gICAgICB9XHJcblxyXG4gICAgIFxyXG4gICAgICB0aGlzLmZpbGV1cGxvYWRhcnIucHVzaCh0ZW1wZmlsZXVwbG9hZCk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgYWRkUXVlc3QoKSB7XHJcbiAgICBsZXQgYWJjdGVtcDogUHJvamVjdFBvc3RRdWVzdGlvbnM7XHJcbiAgICBhYmN0ZW1wID0geyBvZmNwcm9qZWN0cG9zdF9pZDogJycsIHByb2plY3Rwb3N0cXVlc3Rpb25zX2lkOiAnJywgcHJvamVjdHBvc3RxdWVzdGlvbnNfbmFtZTogdGhpcy5xdWVzdGlvbiB9O1xyXG4gICAgdGhpcy5wb3N0cXVlc3Rpb24ucHVzaChhYmN0ZW1wKTtcclxuICAgIHRoaXMucXVlc3Rpb24gPSBcIlwiO1xyXG5cclxuICB9XHJcblxyXG4gIGRlbGV0ZVF1ZXN0KGluZGV4OiBhbnkpIHtcclxuICAgIHRoaXMucG9zdHF1ZXN0aW9uLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLy8gYXMgZG9uZSBvbiAxOSBqYW4gMjAxNyBieSBNYW5kYXIgZm9yIGV4cGVyaWVuY2VcclxuICBzZWxlY3RFeHBlcmllbmNlKGV4cGlkOiBzdHJpbmcpIHtcclxuXHJcbiAgICB0aGlzLnByb2plY3Rwb3N0LmV4cGVyaWVuY2VfaWRfZmtwcm9qZWN0cG9zdCA9IGV4cGlkO1xyXG4gIH1cclxuICAvLyBhcyBkb25lIG9uIDE5IGphbiAyMDE3IGJ5IE1hbmRhciBmb3IgdGltZSBmcmFtZVxyXG4gIHNlbGVjdFRpbWVGcmFtZSh0aW1lZnJhbWU6IHN0cmluZykge1xyXG4gICAgXHJcbiAgICB0aGlzLnByb2plY3Rwb3N0Lm9mY3Byb2plY3Rwb3N0X3RpbWVmcmFtZSA9IHRpbWVmcmFtZTtcclxuICB9XHJcbiAgLy9hcyBkb25lIG9uIDE5IGphbiAyMDE3IGJ5IE1hbmRhciBmb3IgY29tbWl0bWVudFxyXG4gIC8vIHNlbGVjdENvbW1pdG1lbnQoY29tbWl0bWVudDpzdHJpbmcpe1xyXG5cclxuICAvLyAgIHRoaXMucHJvamVjdHBvc3Qub2ZjcHJvamVjdHBvc3RfdGltZWZyYW1lPWNvbW1pdG1lbnQ7XHJcbiAgLy8gfVxyXG59XHJcbiJdfQ==
