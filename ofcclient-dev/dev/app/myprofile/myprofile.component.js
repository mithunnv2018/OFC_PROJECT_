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
var index_1 = require('../shared/myprofile/index');
var baseurl_service_1 = require('../shared/baseurl/baseurl.service');
var app_component_1 = require('../app.component');
var MyprofileComponent = (function () {
    function MyprofileComponent(router, localService, appComponent, fb, route, mycur, mydate1, emailval, baseurlservice) {
        var _this = this;
        this.router = router;
        this.localService = localService;
        this.appComponent = appComponent;
        this.fb = fb;
        this.route = route;
        this.mycur = mycur;
        this.mydate1 = mydate1;
        this.emailval = emailval;
        this.baseurlservice = baseurlservice;
        this.msgs = [];
        this.drpMainCatId = [];
        this.drpEducationId = [];
        this.uploadedFiles = [];
        this.fileuploadarr = [];
        this.uploadedFilesProject = [];
        this.fileuploadarrProject = [];
        this.uploadedFilesEmployment = [];
        this.fileuploadarrEmployment = [];
        this.uploadedFilesExperience = [];
        this.fileuploadarrExperience = [];
        this.localService.getMainCat('dummy').subscribe(function (p) { _this.drpMainCatId = p; _this.drpMainCatId.unshift({ label: "Select Category", value: "1" }); }, function (e) { return console.log(e); }, function () { });
        this.localService.getEducationDrp('dummy').subscribe(function (p) { _this.drpEducationId = p; _this.drpEducationId.unshift({ label: "Select Education", value: "1" }); }, function (e) { return console.log(e); }, function () { });
        this.localService.getAutoSkills('dummy').subscribe(function (p) { return _this.autoSkillsGlobal = p; }, function (e) { return console.log(e); }, function () { });
        this.mybaseurl = baseurlservice.getBaseurl();
        var data = sessionStorage.getItem('memberdetails');
        var ofcmemsession = JSON.parse(data);
        var ofcmemsession_id = ofcmemsession.ofcmemsession_id;
        this.sessionid = ofcmemsession_id;
        var dataviewofcmember = sessionStorage.getItem(ofcmemsession_id);
        this.ofcmembers = JSON.parse(dataviewofcmember);
        this.selectedSkills = [];
        this.localService.getMyProfileSkills(this.sessionid).subscribe(function (p) { return _this.selectedSkills = p; }, function (e) { return console.log(e); }, function () { });
    }
    MyprofileComponent.prototype.clear = function () {
        this.newmyProject = true;
        this.myProject = {
            ofcmemmyproject_id: '',
            maincat_id: '',
            ofcmembers_id: '',
            ofcmemmyproject_title: '',
            ofcmemmyproject_url: '',
            ofcmemmyproject_description: '',
            createdate: '',
            modifieddate: '',
            status: ''
        };
        this.fileupload = {
            fileName: '',
            fileType: '',
            filePath: '',
            fileStatus: '',
            uploadfile_filename: ''
        };
        this.skill = {
            skill_id: '',
            skill_name: '',
            skill_alias: '',
            subcat_id: '',
            createdate: '',
            modifieddate: '',
            status: ''
        };
        this.memberEmployment = {
            ofcmembers_id: '',
            ofcmememployment_id: '',
            ofcmememployment_name: '',
            ofcmememployment_role: '',
            ofcmememployment_enddate: '',
            ofcmememployment_startdate: '',
            ofcmememployment_description: '',
            maincat_id: '',
            createdate: '',
            modifieddate: '',
            status: ''
        };
        this.memberEducation = {
            ofcmembereducation_id: '',
            ofcmembereducation_title: '',
            ofcmembereducation_specilization: '',
            ofcmembereducation_startdate: '',
            ofcmembereducation_enddate: '',
            ofcmembers_id: '',
            education_id: '',
            createdate: '',
            modifieddate: '',
            status: ''
        };
        this.memberExperience = {
            ofcmembers_id: '',
            ofcmemexperience_id: '',
            ofcmemexperience_name: '',
            ofcmemexperience_role: '',
            ofcmemexperience_enddate: '',
            ofcmemexperience_startdate: '',
            ofcmemexperience_description: '',
            maincat_id: '',
            createdate: '',
            modifieddate: '',
            status: ''
        };
        this.ofcmembers = {
            ofcmembers_id: '',
            ofcmembers_fname: '',
            ofcmembers_mname: '',
            ofcmembers_lname: '',
            ofcmembers_name: '',
            ofcmember_type: '',
            city_id: '',
            ofcmembers_emailid: '',
            ofcmembers_password: '',
            ofcmembers_address1: '',
            ofcmembers_address2: '',
            ofcmembers_pincode: '',
            ofcmembers_contactnos: '',
            ofcmembers_availability: '',
            ofcmembers_displayname: '',
            ofcmembers_description: '',
            ofcmembers_selfrating: '',
            ofcmembers_experiencelevel: '',
            ofcmembers_gender: '',
            ofcmembers_dob: '',
            ofcmembers_nosofteammembers: '',
            createdate: '',
            modifieddate: '',
            status: ''
        };
    };
    MyprofileComponent.prototype.clearProject = function () {
        this.newmyProject = true;
        this.myProject = {
            ofcmemmyproject_id: '',
            maincat_id: '',
            ofcmembers_id: '',
            ofcmemmyproject_title: '',
            ofcmemmyproject_url: '',
            ofcmemmyproject_description: '',
            createdate: '',
            modifieddate: '',
            status: ''
        };
    };
    MyprofileComponent.prototype.clearSkill = function () {
        this.newskill = true;
        this.skill = {
            skill_id: '',
            skill_name: '',
            skill_alias: '',
            subcat_id: '',
            createdate: '',
            modifieddate: '',
            status: ''
        };
    };
    MyprofileComponent.prototype.clearMemberEmployment = function () {
        this.newmemberEmployment = true;
        this.memberEmployment = {
            ofcmembers_id: '',
            ofcmememployment_id: '',
            ofcmememployment_name: '',
            ofcmememployment_role: '',
            ofcmememployment_enddate: '',
            ofcmememployment_startdate: '',
            ofcmememployment_description: '',
            maincat_id: '',
            createdate: '',
            modifieddate: '',
            status: ''
        };
    };
    MyprofileComponent.prototype.clearMemberEducation = function () {
        this.newmemberEducation = true;
        this.memberEducation = {
            ofcmembereducation_id: '',
            ofcmembereducation_title: '',
            ofcmembereducation_specilization: '',
            ofcmembereducation_startdate: '',
            ofcmembereducation_enddate: '',
            ofcmembers_id: '',
            education_id: '',
            createdate: '',
            modifieddate: '',
            status: ''
        };
    };
    MyprofileComponent.prototype.clearMemberExperience = function () {
        this.newmemberExperience = true;
        this.memberExperience = {
            ofcmembers_id: '',
            ofcmemexperience_id: '',
            ofcmemexperience_name: '',
            ofcmemexperience_role: '',
            ofcmemexperience_enddate: '',
            ofcmemexperience_startdate: '',
            ofcmemexperience_description: '',
            maincat_id: '',
            createdate: '',
            modifieddate: '',
            status: ''
        };
    };
    MyprofileComponent.prototype.clearMember = function () {
        this.newofcmembers = true;
    };
    MyprofileComponent.prototype.ngOnInit = function () {
        this.clear();
        var data = sessionStorage.getItem('memberdetails');
        var ofcmemsession = JSON.parse(data);
        var ofcmemsession_id = ofcmemsession.ofcmemsession_id;
        this.sessionid = ofcmemsession_id;
        var dataviewofcmember = sessionStorage.getItem(ofcmemsession_id);
        this.ofcmembers = JSON.parse(dataviewofcmember);
        this.showGridProject();
        this.showGridEmployment();
        this.showGridEducation();
        this.showGridExperience();
    };
    MyprofileComponent.prototype.search = function (event) {
        var selectedSkill = event.query;
        var skills = this.autoSkillsGlobal;
        this.autoSkills = [];
        for (var i = 0; i < skills.length; i++) {
            var skilltemp = skills[i];
            if (skilltemp.skill_name.toLowerCase().indexOf(selectedSkill.toLowerCase()) == 0) {
                this.autoSkills.push(skilltemp);
            }
        }
    };
    MyprofileComponent.prototype.onCategorySelect = function (events1) {
        this.ngModelMainCatId = events1.value;
    };
    MyprofileComponent.prototype.aftercalldate = function () {
        this.startdate = new Date(this.memberEmployment.ofcmememployment_startdate);
        this.enddate = new Date(this.memberEmployment.ofcmememployment_enddate);
    };
    MyprofileComponent.prototype.onUpload = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
        }
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    };
    MyprofileComponent.prototype.onFinalFileUpload = function () {
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
    MyprofileComponent.prototype.saveMyProfile = function () {
        var _this = this;
        this.onFinalFileUpload();
        if (!this.validateMyProfile()) {
        }
        else {
            this.submitted = true;
            this.msgs = [];
            this.localService.saveMyProfile(this.sessionid, this.ofcmembers, this.selectedSkills, this.fileuploadarr).subscribe(function (p) { return _this.commonError = p; }, function (e) { return console.log(e); }, function () {
                if (_this.commonError.Isuccess == "1") {
                    _this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Update Successfully' });
                    _this.clearMember();
                    var a = JSON.stringify(_this.ofcmembers);
                    sessionStorage.setItem(_this.sessionid, a);
                }
                else {
                    var err = _this.commonError.Error;
                    _this.msgs.push({ severity: 'info', summary: 'Error', detail: err });
                }
            });
        }
    };
    MyprofileComponent.prototype.selectExperience = function (expid) {
        this.ofcmembers.ofcmembers_experiencelevel = expid;
    };
    MyprofileComponent.prototype.validateMyProfile = function () {
        var displayname = this.ofcmembers.ofcmembers_displayname;
        var description = this.ofcmembers.ofcmembers_description;
        var skilllength = this.selectedSkills.length;
        var bool = true;
        if (displayname == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please Enter Name of your job posting' });
            return bool = false;
        }
        if (description == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please Enter Description of work' });
            return bool = false;
        }
        if (skilllength == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please Enter Required skills' });
            return bool = false;
        }
        return bool;
    };
    MyprofileComponent.prototype.onUploadProject = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var fileProject = _a[_i];
            this.uploadedFilesProject.push(fileProject);
        }
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    };
    MyprofileComponent.prototype.onFinalFileUploadProject = function () {
        for (var i = 0; i < this.uploadedFilesProject.length; i++) {
            var filename = this.uploadedFilesProject[i].name;
            var tempfileuploadProject = void 0;
            tempfileuploadProject = {
                fileName: filename,
                fileType: 'img',
                filePath: '',
                fileStatus: 'Yes',
                uploadfile_filename: ''
            };
            this.fileuploadarrProject.push(tempfileuploadProject);
        }
    };
    MyprofileComponent.prototype.onskillgridRowSelected = function (event) {
        this.newmyProject = false;
        this.myProject = this.selectedProjectsRow;
    };
    MyprofileComponent.prototype.saveMyProject = function () {
        var _this = this;
        this.onFinalFileUploadProject();
        if (!this.validateMyProject()) {
        }
        else {
            this.submitted = true;
            this.msgs = [];
            this.localService.saveMyProject(this.sessionid, this.myProject, this.selectedProjectSkills, this.fileuploadarr).subscribe(function (p) { return _this.commonError = p; }, function (e) { return console.log(e); }, function () {
                if (_this.commonError.Isuccess == "1") {
                    _this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Update Successfully' });
                    _this.showGridProject();
                }
                else {
                    var err = _this.commonError.Error;
                    _this.msgs.push({ severity: 'info', summary: 'Error', detail: err });
                }
            });
        }
    };
    MyprofileComponent.prototype.validateMyProject = function () {
        var title = this.myProject.ofcmemmyproject_title;
        var mainCatId = this.myProject.maincat_id;
        var projURL = this.myProject.ofcmemmyproject_url;
        var projDescription = this.myProject.ofcmemmyproject_description;
        var bool = true;
        if (title == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please Enter Project Title' });
            return bool = false;
        }
        if (mainCatId === '' || mainCatId === 'Select') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please Select Project Category' });
            return bool = false;
        }
        if (projURL == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please Enter Project URL' });
            return bool = false;
        }
        if (projDescription == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please Enter Project Overview' });
            return bool = false;
        }
        return bool;
    };
    MyprofileComponent.prototype.showGridProject = function () {
        var _this = this;
        this.localService.getMyProjectGrid(this.sessionid).subscribe(function (p) { return _this.myProjectGrid = p; }, function (e) { return console.log(e); }, function () { });
    };
    MyprofileComponent.prototype.deleteproj = function (proj) {
    };
    MyprofileComponent.prototype.onUploadEmployment = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var fileEmployment = _a[_i];
            this.uploadedFilesEmployment.push(fileEmployment);
        }
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    };
    MyprofileComponent.prototype.onBeforeUploadEmployment = function (event) {
        event.xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;multipart/form-data;');
    };
    MyprofileComponent.prototype.onFinalFileUploadEmployment = function () {
        for (var i = 0; i < this.uploadedFilesEmployment.length; i++) {
            var filename = this.uploadedFilesEmployment[i].name;
            var tempfileuploadEmployment = void 0;
            tempfileuploadEmployment = {
                fileName: filename,
                fileType: 'img',
                filePath: '',
                fileStatus: 'Yes',
                uploadfile_filename: ''
            };
            this.fileuploadarrEmployment.push(tempfileuploadEmployment);
        }
    };
    MyprofileComponent.prototype.onEmploymentRowSelected = function (event) {
        this.newmemberEmployment = false;
        this.memberEmployment = this.selectedEmploymentsRow;
    };
    MyprofileComponent.prototype.saveMemberEmployment = function () {
        var _this = this;
        this.onFinalFileUploadEmployment();
        if (!this.validateMemberEmployment()) {
        }
        else {
            this.submitted = true;
            this.msgs = [];
            this.localService.saveMemberEmployment(this.sessionid, this.memberEmployment, this.selectedEmploymentSkills, this.fileuploadarrEmployment).subscribe(function (p) { return _this.commonError = p; }, function (e) { return console.log(e); }, function () {
                if (_this.commonError.Isuccess == "1") {
                    _this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Update Successfully' });
                    _this.showGridEmployment();
                    _this.clearMemberEmployment();
                }
                else {
                    var err = _this.commonError.Error;
                    _this.msgs.push({ severity: 'info', summary: 'Error', detail: err });
                }
            });
        }
    };
    MyprofileComponent.prototype.validateMemberEmployment = function () {
        var employmentName = this.memberEmployment.ofcmememployment_name;
        var mainCatIdEmployment = this.memberEmployment.maincat_id;
        var roleEmployment = this.memberEmployment.ofcmememployment_role;
        var startdateEmployment = this.memberEmployment.ofcmememployment_startdate;
        var enddateEmployment = this.memberEmployment.ofcmememployment_enddate;
        var descriptionEmployment = this.memberEmployment.ofcmememployment_description;
        var bool = true;
        if (employmentName == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please Enter Employment Name' });
            return bool = false;
        }
        if (mainCatIdEmployment == '' || mainCatIdEmployment == 'Select') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please Select Project' });
            return bool = false;
        }
        if (roleEmployment == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please Enter Employment Role' });
            return bool = false;
        }
        if (startdateEmployment == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please Enter Start Date' });
            return bool = false;
        }
        if (enddateEmployment == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please Enter End Date' });
            return bool = false;
        }
        if (descriptionEmployment == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please Enter Employment Overview' });
            return bool = false;
        }
        return bool;
    };
    MyprofileComponent.prototype.showGridEmployment = function () {
        var _this = this;
        this.localService.getEmploymentGrid(this.sessionid).subscribe(function (p) { return _this.memberEmploymentGrid = p; }, function (e) { return console.log(e); }, function () { });
    };
    MyprofileComponent.prototype.deleteemp = function (emp) {
    };
    MyprofileComponent.prototype.onEducationRowSelected = function (event) {
        this.newmemberEducation = false;
        this.memberEducation = this.selectedEducationsRow;
    };
    MyprofileComponent.prototype.saveMemberEducation = function () {
        var _this = this;
        if (!this.validateMemberEducation()) {
        }
        else {
            this.submitted = true;
            this.msgs = [];
            this.localService.saveMemberEducation(this.sessionid, this.memberEducation).subscribe(function (p) { return _this.commonError = p; }, function (e) { return console.log(e); }, function () {
                if (_this.commonError.Isuccess == "1") {
                    _this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Update Successfully' });
                    _this.showGridEducation();
                    _this.clearMemberEducation();
                }
                else {
                    var err = _this.commonError.Error;
                    _this.msgs.push({ severity: 'info', summary: 'Error', detail: err });
                }
            });
        }
    };
    MyprofileComponent.prototype.validateMemberEducation = function () {
        var experienceName = this.memberEducation.ofcmembereducation_title;
        var educationId = this.memberEducation.education_id;
        var specilization = this.memberEducation.ofcmembereducation_specilization;
        var startdateEducation = this.memberEducation.ofcmembereducation_startdate;
        var enddateEducation = this.memberEducation.ofcmembereducation_enddate;
        var bool = true;
        if (experienceName == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please Enter Employment Name' });
            return bool = false;
        }
        if (educationId == '' || educationId == 'Select') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please Select Education' });
            return bool = false;
        }
        if (specilization == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please Enter Specilization' });
            return bool = false;
        }
        if (startdateEducation == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please Enter Start Date' });
            return bool = false;
        }
        if (enddateEducation == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please Enter End Date' });
            return bool = false;
        }
        return bool;
    };
    MyprofileComponent.prototype.showGridEducation = function () {
        var _this = this;
        this.localService.getEducationGrid(this.sessionid).subscribe(function (p) { return _this.memberEducationGrid = p; }, function (e) { return console.log(e); }, function () { });
    };
    MyprofileComponent.prototype.deleteedu = function (edu) {
    };
    MyprofileComponent.prototype.onUploadExperience = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var fileExperience = _a[_i];
            this.uploadedFilesExperience.push(fileExperience);
        }
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    };
    MyprofileComponent.prototype.onBeforeUploadExperience = function (event) {
        event.xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;multipart/form-data;');
    };
    MyprofileComponent.prototype.onFinalFileUploadExperience = function () {
        for (var i = 0; i < this.uploadedFilesExperience.length; i++) {
            var filename = this.uploadedFilesExperience[i].name;
            var tempfileuploadExperience = void 0;
            tempfileuploadExperience = {
                fileName: filename,
                fileType: 'img',
                filePath: '',
                fileStatus: 'Yes',
                uploadfile_filename: ''
            };
            this.fileuploadarrExperience.push(tempfileuploadExperience);
        }
    };
    MyprofileComponent.prototype.onExperienceRowSelected = function (event) {
        this.newmemberExperience = false;
        this.memberExperience = this.selectedExperienceRow;
    };
    MyprofileComponent.prototype.saveMemberExperience = function () {
        var _this = this;
        this.onFinalFileUploadExperience();
        if (!this.validateMemberExperience()) {
        }
        else {
            this.submitted = true;
            this.msgs = [];
            this.localService.saveMemberExperience(this.sessionid, this.memberExperience, this.selectedExperienceSkills, this.fileuploadarrExperience).subscribe(function (p) { return _this.commonError = p; }, function (e) { return console.log(e); }, function () {
                if (_this.commonError.Isuccess == "1") {
                    _this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Update Successfully' });
                    _this.showGridExperience();
                    _this.clearMemberExperience();
                }
                else {
                    var err = _this.commonError.Error;
                    _this.msgs.push({ severity: 'info', summary: 'Error', detail: err });
                }
            });
        }
    };
    MyprofileComponent.prototype.validateMemberExperience = function () {
        var experienceName = this.memberExperience.ofcmemexperience_name;
        var mainCatIdExperience = this.memberExperience.maincat_id;
        var roleExperience = this.memberExperience.ofcmemexperience_role;
        var startdateExperience = this.memberExperience.ofcmemexperience_startdate;
        var enddateExperience = this.memberExperience.ofcmemexperience_enddate;
        var descriptionExperience = this.memberExperience.ofcmemexperience_description;
        var bool = true;
        if (experienceName == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please Enter Employment Name' });
            return bool = false;
        }
        if (mainCatIdExperience == '' || mainCatIdExperience == 'Select') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please Select Project' });
            return bool = false;
        }
        if (roleExperience == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please Enter Experience Role' });
            return bool = false;
        }
        if (startdateExperience == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please Enter Start Date' });
            return bool = false;
        }
        if (enddateExperience == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please Enter End Date' });
            return bool = false;
        }
        if (descriptionExperience == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please Enter Experience Overview' });
            return bool = false;
        }
        return bool;
    };
    MyprofileComponent.prototype.showGridExperience = function () {
        var _this = this;
        this.localService.getExperienceGrid(this.sessionid).subscribe(function (p) { return _this.memberExperienceGrid = p; }, function (e) { return console.log(e); }, function () { });
    };
    MyprofileComponent.prototype.deleteexp = function (exp) {
    };
    MyprofileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-myprofile',
            templateUrl: 'myprofile.component.html',
            styleUrls: ['myprofile.component.css'],
            providers: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.MyprofileService, app_component_1.AppComponent, forms_1.FormBuilder, router_1.ActivatedRoute, first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, baseurl_service_1.BaseUrlService])
    ], MyprofileComponent);
    return MyprofileComponent;
}());
exports.MyprofileComponent = MyprofileComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9teXByb2ZpbGUvbXlwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHNCQUFnRSxnQkFBZ0IsQ0FBQyxDQUFBO0FBU2pGLHVCQUF1QyxpQkFBaUIsQ0FBQyxDQUFBO0FBR3pELDJCQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBRzVELGtDQUE2QixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ2pFLG1DQUE4QixvQ0FBb0MsQ0FBQyxDQUFBO0FBR25FLHNCQUFpQywyQkFBMkIsQ0FBQyxDQUFBO0FBQzdELGdDQUErQixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ25FLDhCQUE2QixrQkFBa0IsQ0FBQyxDQUFBO0FBMEJoRDtJQXdFRSw0QkFDVSxNQUFjLEVBQ2QsWUFBOEIsRUFDOUIsWUFBMEIsRUFDMUIsRUFBZSxFQUNmLEtBQXFCLEVBQ3JCLEtBQXFCLEVBQ3JCLE9BQXFCLEVBQ3JCLFFBQXVCLEVBQ3ZCLGNBQThCO1FBakYxQyxpQkFzK0JDO1FBNzVCVyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQzlCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBaEZ4QyxTQUFJLEdBQWMsRUFBRSxDQUFDO1FBOEJyQixpQkFBWSxHQUFpQixFQUFFLENBQUM7UUFDaEMsbUJBQWMsR0FBaUIsRUFBRSxDQUFDO1FBUWxDLGtCQUFhLEdBQVUsRUFBRSxDQUFDO1FBQzFCLGtCQUFhLEdBQWlCLEVBQUUsQ0FBQztRQUlqQyx5QkFBb0IsR0FBVSxFQUFFLENBQUM7UUFDakMseUJBQW9CLEdBQWlCLEVBQUUsQ0FBQztRQUN4Qyw0QkFBdUIsR0FBVSxFQUFFLENBQUM7UUFDcEMsNEJBQXVCLEdBQWlCLEVBQUUsQ0FBQztRQUMzQyw0QkFBdUIsR0FBVSxFQUFFLENBQUM7UUFDcEMsNEJBQXVCLEdBQWlCLEVBQUUsQ0FBQztRQWtDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFNLEtBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFkLENBQWMsRUFBRSxjQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3BMLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBTSxLQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBZCxDQUFjLEVBQUUsY0FBTyxDQUFDLENBQUMsQ0FBQztRQUM5TCxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBZCxDQUFjLEVBQUUsY0FBTyxDQUFDLENBQUMsQ0FBQztRQUNsSCxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUc3QyxJQUFJLElBQUksR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRW5ELElBQUksYUFBYSxHQUFrQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BELElBQUksZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7UUFDbEMsSUFBSSxpQkFBaUIsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLGNBQWMsR0FBQyxFQUFFLENBQUM7UUFFdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLEVBQXZCLENBQXVCLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFkLENBQWMsRUFBRSxjQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzlILENBQUM7SUFJRCxrQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFekIsSUFBSSxDQUFDLFNBQVMsR0FBRztZQUNmLGtCQUFrQixFQUFFLEVBQUU7WUFDdEIsVUFBVSxFQUFFLEVBQUU7WUFDZCxhQUFhLEVBQUUsRUFBRTtZQUNqQixxQkFBcUIsRUFBRSxFQUFFO1lBQ3pCLG1CQUFtQixFQUFFLEVBQUU7WUFDdkIsMkJBQTJCLEVBQUUsRUFBRTtZQUMvQixVQUFVLEVBQUUsRUFBRTtZQUNkLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE1BQU0sRUFBRSxFQUFFO1NBQ1gsQ0FBQTtRQUVELElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDaEIsUUFBUSxFQUFFLEVBQUU7WUFDWixRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxFQUFFO1lBQ1osVUFBVSxFQUFFLEVBQUU7WUFDZCxtQkFBbUIsRUFBRSxFQUFFO1NBQ3hCLENBQUE7UUFJRCxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsUUFBUSxFQUFFLEVBQUU7WUFDWixVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsU0FBUyxFQUFFLEVBQUU7WUFDYixVQUFVLEVBQUUsRUFBRTtZQUNkLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE1BQU0sRUFBRSxFQUFFO1NBQ1gsQ0FBQTtRQUlELElBQUksQ0FBQyxnQkFBZ0IsR0FBRztZQUN0QixhQUFhLEVBQUUsRUFBRTtZQUNqQixtQkFBbUIsRUFBRSxFQUFFO1lBQ3ZCLHFCQUFxQixFQUFFLEVBQUU7WUFDekIscUJBQXFCLEVBQUUsRUFBRTtZQUN6Qix3QkFBd0IsRUFBRSxFQUFFO1lBQzVCLDBCQUEwQixFQUFFLEVBQUU7WUFDOUIsNEJBQTRCLEVBQUUsRUFBRTtZQUNoQyxVQUFVLEVBQUUsRUFBRTtZQUNkLFVBQVUsRUFBRSxFQUFFO1lBQ2QsWUFBWSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxFQUFFLEVBQUU7U0FDWCxDQUFBO1FBR0QsSUFBSSxDQUFDLGVBQWUsR0FBRztZQUNyQixxQkFBcUIsRUFBRSxFQUFFO1lBQ3pCLHdCQUF3QixFQUFFLEVBQUU7WUFDNUIsZ0NBQWdDLEVBQUUsRUFBRTtZQUNwQyw0QkFBNEIsRUFBRSxFQUFFO1lBQ2hDLDBCQUEwQixFQUFFLEVBQUU7WUFDOUIsYUFBYSxFQUFFLEVBQUU7WUFDakIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsVUFBVSxFQUFFLEVBQUU7WUFDZCxZQUFZLEVBQUUsRUFBRTtZQUNoQixNQUFNLEVBQUUsRUFBRTtTQUVYLENBQUE7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUc7WUFDdEIsYUFBYSxFQUFFLEVBQUU7WUFDakIsbUJBQW1CLEVBQUUsRUFBRTtZQUN2QixxQkFBcUIsRUFBRSxFQUFFO1lBQ3pCLHFCQUFxQixFQUFFLEVBQUU7WUFDekIsd0JBQXdCLEVBQUUsRUFBRTtZQUM1QiwwQkFBMEIsRUFBRSxFQUFFO1lBQzlCLDRCQUE0QixFQUFFLEVBQUU7WUFDaEMsVUFBVSxFQUFFLEVBQUU7WUFDZCxVQUFVLEVBQUUsRUFBRTtZQUNkLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE1BQU0sRUFBRSxFQUFFO1NBQ1gsQ0FBQTtRQUVELElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDaEIsYUFBYSxFQUFFLEVBQUU7WUFDakIsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGdCQUFnQixFQUFFLEVBQUU7WUFDcEIsZUFBZSxFQUFFLEVBQUU7WUFDbkIsY0FBYyxFQUFFLEVBQUU7WUFDbEIsT0FBTyxFQUFFLEVBQUU7WUFDWCxrQkFBa0IsRUFBRSxFQUFFO1lBQ3RCLG1CQUFtQixFQUFFLEVBQUU7WUFDdkIsbUJBQW1CLEVBQUUsRUFBRTtZQUN2QixtQkFBbUIsRUFBRSxFQUFFO1lBQ3ZCLGtCQUFrQixFQUFFLEVBQUU7WUFDdEIscUJBQXFCLEVBQUUsRUFBRTtZQUN6Qix1QkFBdUIsRUFBRSxFQUFFO1lBQzNCLHNCQUFzQixFQUFFLEVBQUU7WUFDMUIsc0JBQXNCLEVBQUUsRUFBRTtZQUMxQixxQkFBcUIsRUFBRSxFQUFFO1lBQ3pCLDBCQUEwQixFQUFFLEVBQUU7WUFDOUIsaUJBQWlCLEVBQUUsRUFBRTtZQUNyQixjQUFjLEVBQUUsRUFBRTtZQUNsQiwyQkFBMkIsRUFBRSxFQUFFO1lBQy9CLFVBQVUsRUFBRSxFQUFFO1lBQ2QsWUFBWSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxFQUFFLEVBQUU7U0FDWCxDQUFBO0lBRUgsQ0FBQztJQUdELHlDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUV6QixJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2Ysa0JBQWtCLEVBQUUsRUFBRTtZQUN0QixVQUFVLEVBQUUsRUFBRTtZQUNkLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLHFCQUFxQixFQUFFLEVBQUU7WUFDekIsbUJBQW1CLEVBQUUsRUFBRTtZQUN2QiwyQkFBMkIsRUFBRSxFQUFFO1lBQy9CLFVBQVUsRUFBRSxFQUFFO1lBQ2QsWUFBWSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxFQUFFLEVBQUU7U0FDWCxDQUFBO0lBRUgsQ0FBQztJQUVELHVDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsUUFBUSxFQUFFLEVBQUU7WUFDWixVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsU0FBUyxFQUFFLEVBQUU7WUFDYixVQUFVLEVBQUUsRUFBRTtZQUNkLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE1BQU0sRUFBRSxFQUFFO1NBQ1gsQ0FBQTtJQUdILENBQUM7SUFHRCxrREFBcUIsR0FBckI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRztZQUN0QixhQUFhLEVBQUUsRUFBRTtZQUNqQixtQkFBbUIsRUFBRSxFQUFFO1lBQ3ZCLHFCQUFxQixFQUFFLEVBQUU7WUFDekIscUJBQXFCLEVBQUUsRUFBRTtZQUN6Qix3QkFBd0IsRUFBRSxFQUFFO1lBQzVCLDBCQUEwQixFQUFFLEVBQUU7WUFDOUIsNEJBQTRCLEVBQUUsRUFBRTtZQUNoQyxVQUFVLEVBQUUsRUFBRTtZQUNkLFVBQVUsRUFBRSxFQUFFO1lBQ2QsWUFBWSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxFQUFFLEVBQUU7U0FDWCxDQUFBO0lBRUgsQ0FBQztJQUVELGlEQUFvQixHQUFwQjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRztZQUNyQixxQkFBcUIsRUFBRSxFQUFFO1lBQ3pCLHdCQUF3QixFQUFFLEVBQUU7WUFDNUIsZ0NBQWdDLEVBQUUsRUFBRTtZQUNwQyw0QkFBNEIsRUFBRSxFQUFFO1lBQ2hDLDBCQUEwQixFQUFFLEVBQUU7WUFDOUIsYUFBYSxFQUFFLEVBQUU7WUFDakIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsVUFBVSxFQUFFLEVBQUU7WUFDZCxZQUFZLEVBQUUsRUFBRTtZQUNoQixNQUFNLEVBQUUsRUFBRTtTQUVYLENBQUE7SUFFSCxDQUFDO0lBR0Qsa0RBQXFCLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUc7WUFDdEIsYUFBYSxFQUFFLEVBQUU7WUFDakIsbUJBQW1CLEVBQUUsRUFBRTtZQUN2QixxQkFBcUIsRUFBRSxFQUFFO1lBQ3pCLHFCQUFxQixFQUFFLEVBQUU7WUFDekIsd0JBQXdCLEVBQUUsRUFBRTtZQUM1QiwwQkFBMEIsRUFBRSxFQUFFO1lBQzlCLDRCQUE0QixFQUFFLEVBQUU7WUFDaEMsVUFBVSxFQUFFLEVBQUU7WUFDZCxVQUFVLEVBQUUsRUFBRTtZQUNkLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE1BQU0sRUFBRSxFQUFFO1NBQ1gsQ0FBQTtJQUVILENBQUM7SUFHRCx3Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUE0QjVCLENBQUM7SUFHRCxxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWIsSUFBSSxJQUFJLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUVuRCxJQUFJLGFBQWEsR0FBa0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxJQUFJLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO1FBQ2xDLElBQUksaUJBQWlCLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBR2hELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUc1QixDQUFDO0lBRUQsbUNBQU0sR0FBTixVQUFPLEtBQVU7UUFDZixJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUVyQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN2QyxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsNkNBQWdCLEdBQWhCLFVBQWlCLE9BQVk7UUFFM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUVELDBDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFFMUUsQ0FBQztJQU1ELHFDQUFRLEdBQVIsVUFBUyxLQUFVO1FBRWpCLEdBQUcsQ0FBQyxDQUFhLFVBQVcsRUFBWCxLQUFBLEtBQUssQ0FBQyxLQUFLLEVBQVgsY0FBVyxFQUFYLElBQVcsQ0FBQztZQUF4QixJQUFJLElBQUksU0FBQTtZQUNYLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBRS9CO1FBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBR0QsOENBQWlCLEdBQWpCO1FBR0UsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ25ELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzFDLElBQUksY0FBYyxTQUFZLENBQUM7WUFHL0IsY0FBYyxHQUFHO2dCQUNmLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUUsS0FBSztnQkFDZixRQUFRLEVBQUUsRUFBRTtnQkFDWixVQUFVLEVBQUUsS0FBSztnQkFDakIsbUJBQW1CLEVBQUUsRUFBRTthQUN4QixDQUFBO1lBR0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFMUMsQ0FBQztJQUVILENBQUM7SUFHRCwwQ0FBYSxHQUFiO1FBQUEsaUJBNkJDO1FBNUJDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRzVCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTdCLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUVOLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FDakgsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBcEIsQ0FBb0IsRUFDekIsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFkLENBQWMsRUFDbkI7Z0JBQ0UsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDckMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFLENBQUMsQ0FBQztvQkFDN0YsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDdEMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUUzQyxDQUFDO2dCQUNELElBQUksQ0FBQyxDQUFDO29CQUNKLElBQUksR0FBRyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO29CQUNqQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDdEUsQ0FBQztZQUNILENBQUMsQ0FDRixDQUFDO1FBQ0YsQ0FBQztJQUNILENBQUM7SUFFSCw2Q0FBZ0IsR0FBaEIsVUFBaUIsS0FBYTtRQUUxQixJQUFJLENBQUMsVUFBVSxDQUFDLDBCQUEwQixHQUFHLEtBQUssQ0FBQztJQUNyRCxDQUFDO0lBRUQsOENBQWlCLEdBQWpCO1FBQ0UsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQztRQUN6RCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO1FBQ3pELElBQUksV0FBVyxHQUFRLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBR2xELElBQUksSUFBSSxHQUFZLElBQUksQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRyxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsQ0FBQyxDQUFDO1lBRXpGLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BGLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsQ0FBQyxDQUFDO1lBQ2hGLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7UUFHRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUlELDRDQUFlLEdBQWYsVUFBZ0IsS0FBVTtRQUV4QixHQUFHLENBQUMsQ0FBb0IsVUFBVyxFQUFYLEtBQUEsS0FBSyxDQUFDLEtBQUssRUFBWCxjQUFXLEVBQVgsSUFBVyxDQUFDO1lBQS9CLElBQUksV0FBVyxTQUFBO1lBQ2xCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FFN0M7UUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFJRCxxREFBd0IsR0FBeEI7UUFHRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMxRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2pELElBQUkscUJBQXFCLFNBQVksQ0FBQztZQUV0QyxxQkFBcUIsR0FBRztnQkFDdEIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFFBQVEsRUFBRSxLQUFLO2dCQUNmLFFBQVEsRUFBRSxFQUFFO2dCQUNaLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixtQkFBbUIsRUFBRSxFQUFFO2FBQ3hCLENBQUE7WUFDRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFHeEQsQ0FBQztJQUVILENBQUM7SUFJRCxtREFBc0IsR0FBdEIsVUFBdUIsS0FBVTtRQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUU1QyxDQUFDO0lBRUQsMENBQWEsR0FBYjtRQUFBLGlCQTJCQztRQTFCQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUVwQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU1QixDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUVmLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FDdkgsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBcEIsQ0FBb0IsRUFDekIsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFkLENBQWMsRUFDbkI7Z0JBQ0UsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDckMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFLENBQUMsQ0FBQztvQkFDN0YsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUV6QixDQUFDO2dCQUNELElBQUksQ0FBQyxDQUFDO29CQUNKLElBQUksR0FBRyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO29CQUNqQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDdEUsQ0FBQztZQUNILENBQUMsQ0FDRixDQUFDO1FBRUYsQ0FBQztJQUNILENBQUM7SUFHSCw4Q0FBaUIsR0FBakI7UUFDSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDO1FBQ2pELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO1FBQzFDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUM7UUFDakQsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQywyQkFBMkIsQ0FBQztRQUlqRSxJQUFJLElBQUksR0FBWSxJQUFJLENBQUM7UUFDekIsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLENBQUMsQ0FBQztZQUU5RSxNQUFNLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDO1FBQ0YsRUFBRSxDQUFDLENBQUMsU0FBUyxLQUFLLEVBQUUsSUFBSSxTQUFTLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsQ0FBQyxDQUFDO1lBQ2xGLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQyxDQUFDO1lBQzVFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsQ0FBQyxDQUFDO1lBQ2pGLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7UUFTRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUdELDRDQUFlLEdBQWY7UUFBQSxpQkFLQztRQUhDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUF0QixDQUFzQixFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBZCxDQUFjLEVBQUUsY0FBTyxDQUFDLENBQUMsQ0FBQztJQUczSCxDQUFDO0lBRUQsdUNBQVUsR0FBVixVQUFXLElBQWtCO0lBRTdCLENBQUM7SUFLRCwrQ0FBa0IsR0FBbEIsVUFBbUIsS0FBVTtRQUUzQixHQUFHLENBQUMsQ0FBdUIsVUFBVyxFQUFYLEtBQUEsS0FBSyxDQUFDLEtBQUssRUFBWCxjQUFXLEVBQVgsSUFBVyxDQUFDO1lBQWxDLElBQUksY0FBYyxTQUFBO1lBQ3JCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FFbkQ7UUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFHRCxxREFBd0IsR0FBeEIsVUFBeUIsS0FBVTtRQUNqQyxLQUFLLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSx3REFBd0QsQ0FBQyxDQUFDO0lBRXZHLENBQUM7SUFFRCx3REFBMkIsR0FBM0I7UUFHRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3RCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3BELElBQUksd0JBQXdCLFNBQVksQ0FBQztZQUN6Qyx3QkFBd0IsR0FBRztnQkFDekIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFFBQVEsRUFBRSxLQUFLO2dCQUNmLFFBQVEsRUFBRSxFQUFFO2dCQUNaLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixtQkFBbUIsRUFBRSxFQUFFO2FBQ3hCLENBQUE7WUFDRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFOUQsQ0FBQztJQUVILENBQUM7SUFJRCxvREFBdUIsR0FBdkIsVUFBd0IsS0FBVTtRQUNoQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFFdEQsQ0FBQztJQUVELGlEQUFvQixHQUFwQjtRQUFBLGlCQTRCQztRQXZCQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUV2QyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVuQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUVmLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFwQixDQUFvQixFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBZCxDQUFjLEVBQUU7Z0JBQ25NLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBRXJDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRSxDQUFDLENBQUM7b0JBQzdGLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO29CQUMxQixLQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztnQkFDL0IsQ0FBQztnQkFDRCxJQUFJLENBQUMsQ0FBQztvQkFDSixJQUFJLEdBQUcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztvQkFDakMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ3RFLENBQUM7WUFDSCxDQUFDLENBQ0EsQ0FBQztRQUNGLENBQUM7SUFDSCxDQUFDO0lBRUgscURBQXdCLEdBQXhCO1FBQ0ksSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDO1FBQ2pFLElBQUksbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztRQUMzRCxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUM7UUFDakUsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsMEJBQTBCLENBQUM7UUFDM0UsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsd0JBQXdCLENBQUM7UUFDdkUsSUFBSSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsNEJBQTRCLENBQUM7UUFJL0UsSUFBSSxJQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxDQUFDLENBQUM7WUFFaEYsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQztRQUNGLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixJQUFJLEVBQUUsSUFBSSxtQkFBbUIsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxDQUFDLENBQUM7WUFDekUsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxDQUFDLENBQUM7WUFDaEYsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQztRQUVDLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLENBQUMsQ0FBQztZQUMzRSxNQUFNLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDO1lBQ3pFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxxQkFBcUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxDQUFDLENBQUM7WUFDcEYsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQztRQVNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBR0QsK0NBQWtCLEdBQWxCO1FBQUEsaUJBTUM7UUFKQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxFQUE3QixDQUE2QixFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBZCxDQUFjLEVBQUUsY0FBTyxDQUFDLENBQUMsQ0FBQztJQUluSSxDQUFDO0lBR0Qsc0NBQVMsR0FBVCxVQUFVLEdBQWtCO0lBRTVCLENBQUM7SUFRRCxtREFBc0IsR0FBdEIsVUFBdUIsS0FBVTtRQUMvQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBRXBELENBQUM7SUFFRCxnREFBbUIsR0FBbkI7UUFBQSxpQkF1QkM7UUFyQkgsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFbEMsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFFZixJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFwQixDQUFvQixFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBZCxDQUFjLEVBQUU7Z0JBQ3BJLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBRXJDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRSxDQUFDLENBQUM7b0JBQzdGLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO29CQUN6QixLQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDOUIsQ0FBQztnQkFDRCxJQUFJLENBQUMsQ0FBQztvQkFDSixJQUFJLEdBQUcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztvQkFDakMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ3RFLENBQUM7WUFDSCxDQUFDLENBQ0EsQ0FBQztRQUNGLENBQUM7SUFDSCxDQUFDO0lBSUgsb0RBQXVCLEdBQXZCO1FBQ0ksSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyx3QkFBd0IsQ0FBQztRQUNuRSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQztRQUNwRCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGdDQUFnQyxDQUFDO1FBQzFFLElBQUksa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsQ0FBQztRQUMzRSxJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsMEJBQTBCLENBQUM7UUFHdkUsSUFBSSxJQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxDQUFDLENBQUM7WUFFaEYsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQztRQUNGLEVBQUUsQ0FBQyxDQUFDLFdBQVcsSUFBSSxFQUFFLElBQUksV0FBVyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLENBQUMsQ0FBQztZQUMzRSxNQUFNLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLENBQUMsQ0FBQztZQUM5RSxNQUFNLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDO1FBRUMsRUFBRSxDQUFDLENBQUMsa0JBQWtCLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsQ0FBQyxDQUFDO1lBQzNFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxDQUFDLENBQUM7WUFDekUsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQztRQUlELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBR0QsOENBQWlCLEdBQWpCO1FBQUEsaUJBS0M7UUFIQyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxFQUE1QixDQUE0QixFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBZCxDQUFjLEVBQUUsY0FBTyxDQUFDLENBQUMsQ0FBQztJQUdqSSxDQUFDO0lBRUQsc0NBQVMsR0FBVCxVQUFVLEdBQWlCO0lBRTNCLENBQUM7SUFLRCwrQ0FBa0IsR0FBbEIsVUFBbUIsS0FBVTtRQUUzQixHQUFHLENBQUMsQ0FBdUIsVUFBVyxFQUFYLEtBQUEsS0FBSyxDQUFDLEtBQUssRUFBWCxjQUFXLEVBQVgsSUFBVyxDQUFDO1lBQWxDLElBQUksY0FBYyxTQUFBO1lBQ3JCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FFbkQ7UUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFHRCxxREFBd0IsR0FBeEIsVUFBeUIsS0FBVTtRQUNqQyxLQUFLLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSx3REFBd0QsQ0FBQyxDQUFDO0lBRXZHLENBQUM7SUFFRCx3REFBMkIsR0FBM0I7UUFHRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3RCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3BELElBQUksd0JBQXdCLFNBQVksQ0FBQztZQUV6Qyx3QkFBd0IsR0FBRztnQkFDekIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFFBQVEsRUFBRSxLQUFLO2dCQUNmLFFBQVEsRUFBRSxFQUFFO2dCQUNaLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixtQkFBbUIsRUFBRSxFQUFFO2FBQ3hCLENBQUE7WUFFRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFOUQsQ0FBQztJQUVILENBQUM7SUFJRCxvREFBdUIsR0FBdkIsVUFBd0IsS0FBVTtRQUNoQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFFckQsQ0FBQztJQUVELGlEQUFvQixHQUFwQjtRQUFBLGlCQTBCQztRQXZCQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUV2QyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVuQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUVmLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFwQixDQUFvQixFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBZCxDQUFjLEVBQUU7Z0JBQ25NLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBRXJDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRSxDQUFDLENBQUM7b0JBQzdGLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO29CQUMxQixLQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztnQkFDL0IsQ0FBQztnQkFDRCxJQUFJLENBQUMsQ0FBQztvQkFDSixJQUFJLEdBQUcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztvQkFDakMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ3RFLENBQUM7WUFDSCxDQUFDLENBQ0EsQ0FBQztRQUNGLENBQUM7SUFDSCxDQUFDO0lBRUgscURBQXdCLEdBQXhCO1FBQ0ksSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDO1FBQ2pFLElBQUksbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztRQUMzRCxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUM7UUFDakUsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsMEJBQTBCLENBQUM7UUFDM0UsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsd0JBQXdCLENBQUM7UUFDdkUsSUFBSSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsNEJBQTRCLENBQUM7UUFJL0UsSUFBSSxJQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxDQUFDLENBQUM7WUFFaEYsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQztRQUNGLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixJQUFJLEVBQUUsSUFBSSxtQkFBbUIsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxDQUFDLENBQUM7WUFDekUsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxDQUFDLENBQUM7WUFDaEYsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQztRQUVDLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLENBQUMsQ0FBQztZQUMzRSxNQUFNLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDO1lBQ3pFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxxQkFBcUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxDQUFDLENBQUM7WUFDcEYsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQztRQVNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsK0NBQWtCLEdBQWxCO1FBQUEsaUJBS0M7UUFIQyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxFQUE3QixDQUE2QixFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBZCxDQUFjLEVBQUUsY0FBTyxDQUFDLENBQUMsQ0FBQztJQUduSSxDQUFDO0lBRUQsc0NBQVMsR0FBVCxVQUFVLEdBQWtCO0lBRTVCLENBQUM7SUE3K0JIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FFMUIsQ0FBQzs7MEJBQUE7SUF1K0JGLHlCQUFDO0FBQUQsQ0F0K0JBLEFBcytCQyxJQUFBO0FBdCtCWSwwQkFBa0IscUJBcytCOUIsQ0FBQSIsImZpbGUiOiJhcHAvbXlwcm9maWxlL215cHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IERhdGFUYWJsZU1vZHVsZSwgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBEaWFsb2dNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBJbnB1dFRleHRNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBDYWxlbmRhck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNZXNzYWdlc01vZHVsZSwgTWVzc2FnZSwgR3Jvd2wgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBQYW5lbE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IElucHV0VGV4dGFyZWFNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBNeUN1cnJlbmN5UGlwZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9maXJzdC5waXBlJztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IFNlbGVjdEl0ZW0gfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZSc7XHJcbmltcG9ydCB7IEN1c3RvbVZhbGlkYXRvciB9IGZyb20gJy4uL3NoYXJlZC92YWxpZGF0b3JzL3ZhbGlkYXRvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkIH0gZnJvbSAnLi9maWxldXBsb2FkJztcclxuaW1wb3J0IHsgTXlwcm9maWxlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9teXByb2ZpbGUvaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlVXJsU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9iYXNldXJsL2Jhc2V1cmwuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4uL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgT0ZDTWVtYmVycyB9IGZyb20gJy4vb2ZjbWVtYmVycyc7XHJcbmltcG9ydCB7IFNraWxsIH0gZnJvbSAnLi9za2lsbCc7XHJcbmltcG9ydCB7IFZpZXdPRkNtZW1TZXNzaW9uIH0gZnJvbSAnLi4vbG9naW5wYWdlL3ZpZXdvZmNtZW1zZXNzaW9uJztcclxuaW1wb3J0IHsgT0ZDbWVtU2Vzc2lvbiB9IGZyb20gJy4uL2xvZ2lucGFnZS9vZmNtZW1zZXNzaW9uJztcclxuaW1wb3J0IHsgQ29tbW9uRXJyb3IgfSBmcm9tICcuLi9sb2dpbnBhZ2UvY29tbW9uZXJyb3InO1xyXG5pbXBvcnQgeyBNeVByb2plY3QgfSBmcm9tICcuL215cHJvamVjdCc7XHJcbmltcG9ydCB7IE15UHJvamVjdEdyaWQgfSBmcm9tICcuL215cHJvamVjdGdyaWQnO1xyXG5pbXBvcnQgeyBNZW1iZXJFbXBsb3ltZW50IH0gZnJvbSAnLi9tZW1iZXJlbXBsb3ltZW50JztcclxuaW1wb3J0IHsgRW1wbG95bWVudEdyaWQgfSBmcm9tICcuL2VtcGxveW1lbnRncmlkJztcclxuaW1wb3J0IHsgTWVtYmVyRXhwZXJpZW5jZSB9IGZyb20gJy4vbWVtYmVyZXhwZXJpZW5jZSc7XHJcbmltcG9ydCB7IEV4cGVyaWVuY2VHcmlkIH0gZnJvbSAnLi9leHBlcmllbmNlZ3JpZCc7XHJcbmltcG9ydCB7IE1lbWJlckVkdWNhdGlvbiB9IGZyb20gJy4vbWVtYmVyZWR1Y2F0aW9uJztcclxuaW1wb3J0IHsgRWR1Y2F0aW9uR3JpZCB9IGZyb20gJy4vZWR1Y2F0aW9uZ3JpZCc7XHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEFib3V0Q29tcG9uZW50LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NkLW15cHJvZmlsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdteXByb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydteXByb2ZpbGUuY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW0FwcENvbXBvbmVudF1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeXByb2ZpbGVDb21wb25lbnQge1xyXG4gIG1zZ3M6IE1lc3NhZ2VbXSA9IFtdO1xyXG5cclxuICBteVByb2plY3Q6IE15UHJvamVjdDtcclxuICBza2lsbDogU2tpbGw7XHJcbiAgbWVtYmVyRW1wbG95bWVudDogTWVtYmVyRW1wbG95bWVudDtcclxuICBtZW1iZXJFeHBlcmllbmNlOiBNZW1iZXJFeHBlcmllbmNlO1xyXG4gIG1lbWJlckVkdWNhdGlvbjogTWVtYmVyRWR1Y2F0aW9uO1xyXG4gIG9mY21lbWJlcnM6IE9GQ01lbWJlcnM7XHJcblxyXG4gIG5ld215UHJvamVjdDogYm9vbGVhbjtcclxuICBuZXdvZmNtZW1iZXJzOiBib29sZWFuO1xyXG4gIG5ld3NraWxsOiBib29sZWFuO1xyXG4gIG5ld21lbWJlckVtcGxveW1lbnQ6IGJvb2xlYW47XHJcbiAgbmV3bWVtYmVyRXhwZXJpZW5jZTogYm9vbGVhbjtcclxuICBuZXdtZW1iZXJFZHVjYXRpb246IGJvb2xlYW47XHJcblxyXG5cclxuICAvL0ZvciBHcmlkc1xyXG4gIG15UHJvamVjdEdyaWQ6IE15UHJvamVjdEdyaWQ7XHJcbiAgb2ZjbWVtYmVyc0dyaWQ6IE9GQ01lbWJlcnM7XHJcbiAgbWVtYmVyRW1wbG95bWVudEdyaWQ6IEVtcGxveW1lbnRHcmlkO1xyXG4gIG1lbWJlckVkdWNhdGlvbkdyaWQ6IEVkdWNhdGlvbkdyaWQ7XHJcbiAgbWVtYmVyRXhwZXJpZW5jZUdyaWQ6IEV4cGVyaWVuY2VHcmlkO1xyXG5cclxuICBzdWJtaXR0ZWQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbW1vbkVycm9yOiBDb21tb25FcnJvcjtcclxuICBzZXNzaW9uaWQ6IHN0cmluZztcclxuXHJcbiAgLy9Gb3IgRHJvcGRvd25cclxuICBkcnBNYWluQ2F0SWQ6IFNlbGVjdEl0ZW1bXSA9IFtdO1xyXG4gIGRycEVkdWNhdGlvbklkOiBTZWxlY3RJdGVtW10gPSBbXTtcclxuXHJcbiAgbmdNb2RlbE1haW5DYXRJZDogc3RyaW5nO1xyXG4gIG5nTW9kZWxFZHVjYXRpb25NYWluQ2F0SWQ6IHN0cmluZztcclxuICBuZ01vZGVsRW1scG95bWVudE1haW5DYXRJZDogc3RyaW5nO1xyXG4gIG5nTW9kZWxPdGhlckV4cGVyaWVuY2VNYWluQ2F0SWQ6IHN0cmluZztcclxuXHJcbiAgLy9Gb3IgZmlsZSB1cGxvYWRpbmdcclxuICB1cGxvYWRlZEZpbGVzOiBhbnlbXSA9IFtdO1xyXG4gIGZpbGV1cGxvYWRhcnI6IEZpbGVVcGxvYWRbXSA9IFtdO1xyXG4gIGZpbGV1cGxvYWQ6IEZpbGVVcGxvYWQ7XHJcbiAgbXliYXNldXJsOiBzdHJpbmc7XHJcblxyXG4gIHVwbG9hZGVkRmlsZXNQcm9qZWN0OiBhbnlbXSA9IFtdO1xyXG4gIGZpbGV1cGxvYWRhcnJQcm9qZWN0OiBGaWxlVXBsb2FkW10gPSBbXTtcclxuICB1cGxvYWRlZEZpbGVzRW1wbG95bWVudDogYW55W10gPSBbXTtcclxuICBmaWxldXBsb2FkYXJyRW1wbG95bWVudDogRmlsZVVwbG9hZFtdID0gW107XHJcbiAgdXBsb2FkZWRGaWxlc0V4cGVyaWVuY2U6IGFueVtdID0gW107XHJcbiAgZmlsZXVwbG9hZGFyckV4cGVyaWVuY2U6IEZpbGVVcGxvYWRbXSA9IFtdO1xyXG5cclxuXHJcbiAgc2VsZWN0ZWRQcm9qZWN0c1JvdzogTXlQcm9qZWN0R3JpZDtcclxuICBzZWxlY3RlZEVtcGxveW1lbnRzUm93OiBFbXBsb3ltZW50R3JpZDtcclxuICBzZWxlY3RlZEVkdWNhdGlvbnNSb3c6IEVkdWNhdGlvbkdyaWRcclxuICBzZWxlY3RlZEV4cGVyaWVuY2VSb3c6IEV4cGVyaWVuY2VHcmlkO1xyXG5cclxuICAvL0ZvciBhdXRvY29tcGxldGVcclxuICB0ZXh0czogc3RyaW5nW107XHJcbiAgc2tpbGxJZDogc3RyaW5nO1xyXG4gIGF1dG9Ta2lsbHM6IFNraWxsW107XHJcbiAgc2VsZWN0ZWRTa2lsbHM6IFNraWxsW107XHJcbiAgc2VsZWN0ZWRQcm9qZWN0U2tpbGxzOiBTa2lsbFtdO1xyXG4gIHNlbGVjdGVkRW1wbG95bWVudFNraWxsczogU2tpbGxbXTtcclxuICBzZWxlY3RlZEV4cGVyaWVuY2VTa2lsbHM6IFNraWxsW107XHJcbiAgYXV0b1NraWxsc0dsb2JhbDogU2tpbGxbXTtcclxuICBza2lsbHNNeVByb2ZpbGU6IFNraWxsW107XHJcblxyXG4gIHN0YXJ0ZGF0ZTogRGF0ZTtcclxuICBlbmRkYXRlOiBEYXRlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGxvY2FsU2VydmljZTogTXlwcm9maWxlU2VydmljZSxcclxuICAgIHByaXZhdGUgYXBwQ29tcG9uZW50OiBBcHBDb21wb25lbnQsXHJcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBteWN1cjogTXlDdXJyZW5jeVBpcGUsXHJcbiAgICBwcml2YXRlIG15ZGF0ZTE6IE15RGF0ZUZvcm1hdCxcclxuICAgIHByaXZhdGUgZW1haWx2YWw6IEVtYWlsVmFsaWRhdGUsXHJcbiAgICBwcml2YXRlIGJhc2V1cmxzZXJ2aWNlOiBCYXNlVXJsU2VydmljZVxyXG4gICkge1xyXG5cclxuICAgIHRoaXMubG9jYWxTZXJ2aWNlLmdldE1haW5DYXQoJ2R1bW15Jykuc3Vic2NyaWJlKHAgPT4geyB0aGlzLmRycE1haW5DYXRJZCA9IHA7IHRoaXMuZHJwTWFpbkNhdElkLnVuc2hpZnQoeyBsYWJlbDogXCJTZWxlY3QgQ2F0ZWdvcnlcIiwgdmFsdWU6IFwiMVwiIH0pIH0sIGUgPT4gY29uc29sZS5sb2coZSksICgpID0+IHt9KTtcclxuICAgIHRoaXMubG9jYWxTZXJ2aWNlLmdldEVkdWNhdGlvbkRycCgnZHVtbXknKS5zdWJzY3JpYmUocCA9PiB7IHRoaXMuZHJwRWR1Y2F0aW9uSWQgPSBwOyB0aGlzLmRycEVkdWNhdGlvbklkLnVuc2hpZnQoeyBsYWJlbDogXCJTZWxlY3QgRWR1Y2F0aW9uXCIsIHZhbHVlOiBcIjFcIiB9KSB9LCBlID0+IGNvbnNvbGUubG9nKGUpLCAoKSA9PiB7fSk7XHJcbiAgICB0aGlzLmxvY2FsU2VydmljZS5nZXRBdXRvU2tpbGxzKCdkdW1teScpLnN1YnNjcmliZShwID0+IHRoaXMuYXV0b1NraWxsc0dsb2JhbCA9IHAsIGUgPT4gY29uc29sZS5sb2coZSksICgpID0+IHt9KTtcclxuICAgIHRoaXMubXliYXNldXJsID0gYmFzZXVybHNlcnZpY2UuZ2V0QmFzZXVybCgpO1xyXG5cclxuICAgIC8vZG9uZSBhcyBvbiAxMSBmZWIgMjAxNyBjb2RlIHNlbmQgYnkgYWFyYXRpXHJcbiAgICB2YXIgZGF0YSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ21lbWJlcmRldGFpbHMnKTtcclxuICAgIFxyXG4gICAgbGV0IG9mY21lbXNlc3Npb246IE9GQ21lbVNlc3Npb24gPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgbGV0IG9mY21lbXNlc3Npb25faWQgPSBvZmNtZW1zZXNzaW9uLm9mY21lbXNlc3Npb25faWQ7XHJcbiAgICB0aGlzLnNlc3Npb25pZCA9IG9mY21lbXNlc3Npb25faWQ7XHJcbiAgICB2YXIgZGF0YXZpZXdvZmNtZW1iZXIgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKG9mY21lbXNlc3Npb25faWQpO1xyXG4gICAgdGhpcy5vZmNtZW1iZXJzID0gSlNPTi5wYXJzZShkYXRhdmlld29mY21lbWJlcik7XHJcblxyXG4gICAgdGhpcy5zZWxlY3RlZFNraWxscz1bXTtcclxuXHJcbiAgICB0aGlzLmxvY2FsU2VydmljZS5nZXRNeVByb2ZpbGVTa2lsbHModGhpcy5zZXNzaW9uaWQpLnN1YnNjcmliZShwID0+IHRoaXMuc2VsZWN0ZWRTa2lsbHMgPSBwLCBlID0+IGNvbnNvbGUubG9nKGUpLCAoKSA9PiB7fSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5uZXdteVByb2plY3QgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMubXlQcm9qZWN0ID0ge1xyXG4gICAgICBvZmNtZW1teXByb2plY3RfaWQ6ICcnLFxyXG4gICAgICBtYWluY2F0X2lkOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19pZDogJycsXHJcbiAgICAgIG9mY21lbW15cHJvamVjdF90aXRsZTogJycsXHJcbiAgICAgIG9mY21lbW15cHJvamVjdF91cmw6ICcnLFxyXG4gICAgICBvZmNtZW1teXByb2plY3RfZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICBjcmVhdGVkYXRlOiAnJyxcclxuICAgICAgbW9kaWZpZWRkYXRlOiAnJyxcclxuICAgICAgc3RhdHVzOiAnJ1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZmlsZXVwbG9hZCA9IHtcclxuICAgICAgZmlsZU5hbWU6ICcnLFxyXG4gICAgICBmaWxlVHlwZTogJycsXHJcbiAgICAgIGZpbGVQYXRoOiAnJyxcclxuICAgICAgZmlsZVN0YXR1czogJycsXHJcbiAgICAgIHVwbG9hZGZpbGVfZmlsZW5hbWU6ICcnXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB0aGlzLnNraWxsID0ge1xyXG4gICAgICBza2lsbF9pZDogJycsXHJcbiAgICAgIHNraWxsX25hbWU6ICcnLFxyXG4gICAgICBza2lsbF9hbGlhczogJycsXHJcbiAgICAgIHN1YmNhdF9pZDogJycsXHJcbiAgICAgIGNyZWF0ZWRhdGU6ICcnLFxyXG4gICAgICBtb2RpZmllZGRhdGU6ICcnLFxyXG4gICAgICBzdGF0dXM6ICcnXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB0aGlzLm1lbWJlckVtcGxveW1lbnQgPSB7XHJcbiAgICAgIG9mY21lbWJlcnNfaWQ6ICcnLFxyXG4gICAgICBvZmNtZW1lbXBsb3ltZW50X2lkOiAnJyxcclxuICAgICAgb2ZjbWVtZW1wbG95bWVudF9uYW1lOiAnJyxcclxuICAgICAgb2ZjbWVtZW1wbG95bWVudF9yb2xlOiAnJyxcclxuICAgICAgb2ZjbWVtZW1wbG95bWVudF9lbmRkYXRlOiAnJyxcclxuICAgICAgb2ZjbWVtZW1wbG95bWVudF9zdGFydGRhdGU6ICcnLFxyXG4gICAgICBvZmNtZW1lbXBsb3ltZW50X2Rlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgbWFpbmNhdF9pZDogJycsXHJcbiAgICAgIGNyZWF0ZWRhdGU6ICcnLFxyXG4gICAgICBtb2RpZmllZGRhdGU6ICcnLFxyXG4gICAgICBzdGF0dXM6ICcnXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRoaXMubWVtYmVyRWR1Y2F0aW9uID0ge1xyXG4gICAgICBvZmNtZW1iZXJlZHVjYXRpb25faWQ6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJlZHVjYXRpb25fdGl0bGU6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJlZHVjYXRpb25fc3BlY2lsaXphdGlvbjogJycsXHJcbiAgICAgIG9mY21lbWJlcmVkdWNhdGlvbl9zdGFydGRhdGU6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJlZHVjYXRpb25fZW5kZGF0ZTogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfaWQ6ICcnLFxyXG4gICAgICBlZHVjYXRpb25faWQ6ICcnLFxyXG4gICAgICBjcmVhdGVkYXRlOiAnJyxcclxuICAgICAgbW9kaWZpZWRkYXRlOiAnJyxcclxuICAgICAgc3RhdHVzOiAnJ1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1lbWJlckV4cGVyaWVuY2UgPSB7XHJcbiAgICAgIG9mY21lbWJlcnNfaWQ6ICcnLFxyXG4gICAgICBvZmNtZW1leHBlcmllbmNlX2lkOiAnJyxcclxuICAgICAgb2ZjbWVtZXhwZXJpZW5jZV9uYW1lOiAnJyxcclxuICAgICAgb2ZjbWVtZXhwZXJpZW5jZV9yb2xlOiAnJyxcclxuICAgICAgb2ZjbWVtZXhwZXJpZW5jZV9lbmRkYXRlOiAnJyxcclxuICAgICAgb2ZjbWVtZXhwZXJpZW5jZV9zdGFydGRhdGU6ICcnLFxyXG4gICAgICBvZmNtZW1leHBlcmllbmNlX2Rlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgbWFpbmNhdF9pZDogJycsXHJcbiAgICAgIGNyZWF0ZWRhdGU6ICcnLFxyXG4gICAgICBtb2RpZmllZGRhdGU6ICcnLFxyXG4gICAgICBzdGF0dXM6ICcnXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vZmNtZW1iZXJzID0ge1xyXG4gICAgICBvZmNtZW1iZXJzX2lkOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19mbmFtZTogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfbW5hbWU6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2xuYW1lOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19uYW1lOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyX3R5cGU6ICcnLFxyXG4gICAgICBjaXR5X2lkOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19lbWFpbGlkOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19wYXNzd29yZDogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfYWRkcmVzczE6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2FkZHJlc3MyOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19waW5jb2RlOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19jb250YWN0bm9zOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19hdmFpbGFiaWxpdHk6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2Rpc3BsYXluYW1lOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19kZXNjcmlwdGlvbjogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfc2VsZnJhdGluZzogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfZXhwZXJpZW5jZWxldmVsOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19nZW5kZXI6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2RvYjogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfbm9zb2Z0ZWFtbWVtYmVyczogJycsXHJcbiAgICAgIGNyZWF0ZWRhdGU6ICcnLFxyXG4gICAgICBtb2RpZmllZGRhdGU6ICcnLFxyXG4gICAgICBzdGF0dXM6ICcnXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIGNsZWFyUHJvamVjdCgpIHtcclxuICAgIHRoaXMubmV3bXlQcm9qZWN0ID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLm15UHJvamVjdCA9IHtcclxuICAgICAgb2ZjbWVtbXlwcm9qZWN0X2lkOiAnJyxcclxuICAgICAgbWFpbmNhdF9pZDogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfaWQ6ICcnLFxyXG4gICAgICBvZmNtZW1teXByb2plY3RfdGl0bGU6ICcnLFxyXG4gICAgICBvZmNtZW1teXByb2plY3RfdXJsOiAnJyxcclxuICAgICAgb2ZjbWVtbXlwcm9qZWN0X2Rlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgY3JlYXRlZGF0ZTogJycsXHJcbiAgICAgIG1vZGlmaWVkZGF0ZTogJycsXHJcbiAgICAgIHN0YXR1czogJydcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBjbGVhclNraWxsKCkge1xyXG4gICAgdGhpcy5uZXdza2lsbCA9IHRydWU7XHJcbiAgICB0aGlzLnNraWxsID0ge1xyXG4gICAgICBza2lsbF9pZDogJycsXHJcbiAgICAgIHNraWxsX25hbWU6ICcnLFxyXG4gICAgICBza2lsbF9hbGlhczogJycsXHJcbiAgICAgIHN1YmNhdF9pZDogJycsXHJcbiAgICAgIGNyZWF0ZWRhdGU6ICcnLFxyXG4gICAgICBtb2RpZmllZGRhdGU6ICcnLFxyXG4gICAgICBzdGF0dXM6ICcnXHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcblxyXG5cclxuICBjbGVhck1lbWJlckVtcGxveW1lbnQoKSB7XHJcbiAgICB0aGlzLm5ld21lbWJlckVtcGxveW1lbnQgPSB0cnVlO1xyXG4gICAgdGhpcy5tZW1iZXJFbXBsb3ltZW50ID0ge1xyXG4gICAgICBvZmNtZW1iZXJzX2lkOiAnJyxcclxuICAgICAgb2ZjbWVtZW1wbG95bWVudF9pZDogJycsXHJcbiAgICAgIG9mY21lbWVtcGxveW1lbnRfbmFtZTogJycsXHJcbiAgICAgIG9mY21lbWVtcGxveW1lbnRfcm9sZTogJycsXHJcbiAgICAgIG9mY21lbWVtcGxveW1lbnRfZW5kZGF0ZTogJycsXHJcbiAgICAgIG9mY21lbWVtcGxveW1lbnRfc3RhcnRkYXRlOiAnJyxcclxuICAgICAgb2ZjbWVtZW1wbG95bWVudF9kZXNjcmlwdGlvbjogJycsXHJcbiAgICAgIG1haW5jYXRfaWQ6ICcnLFxyXG4gICAgICBjcmVhdGVkYXRlOiAnJyxcclxuICAgICAgbW9kaWZpZWRkYXRlOiAnJyxcclxuICAgICAgc3RhdHVzOiAnJ1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGNsZWFyTWVtYmVyRWR1Y2F0aW9uKCkge1xyXG4gICAgdGhpcy5uZXdtZW1iZXJFZHVjYXRpb24gPSB0cnVlO1xyXG4gICAgdGhpcy5tZW1iZXJFZHVjYXRpb24gPSB7XHJcbiAgICAgIG9mY21lbWJlcmVkdWNhdGlvbl9pZDogJycsXHJcbiAgICAgIG9mY21lbWJlcmVkdWNhdGlvbl90aXRsZTogJycsXHJcbiAgICAgIG9mY21lbWJlcmVkdWNhdGlvbl9zcGVjaWxpemF0aW9uOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyZWR1Y2F0aW9uX3N0YXJ0ZGF0ZTogJycsXHJcbiAgICAgIG9mY21lbWJlcmVkdWNhdGlvbl9lbmRkYXRlOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19pZDogJycsXHJcbiAgICAgIGVkdWNhdGlvbl9pZDogJycsXHJcbiAgICAgIGNyZWF0ZWRhdGU6ICcnLFxyXG4gICAgICBtb2RpZmllZGRhdGU6ICcnLFxyXG4gICAgICBzdGF0dXM6ICcnXHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxuICBjbGVhck1lbWJlckV4cGVyaWVuY2UoKSB7XHJcbiAgICB0aGlzLm5ld21lbWJlckV4cGVyaWVuY2UgPSB0cnVlO1xyXG4gICAgdGhpcy5tZW1iZXJFeHBlcmllbmNlID0ge1xyXG4gICAgICBvZmNtZW1iZXJzX2lkOiAnJyxcclxuICAgICAgb2ZjbWVtZXhwZXJpZW5jZV9pZDogJycsXHJcbiAgICAgIG9mY21lbWV4cGVyaWVuY2VfbmFtZTogJycsXHJcbiAgICAgIG9mY21lbWV4cGVyaWVuY2Vfcm9sZTogJycsXHJcbiAgICAgIG9mY21lbWV4cGVyaWVuY2VfZW5kZGF0ZTogJycsXHJcbiAgICAgIG9mY21lbWV4cGVyaWVuY2Vfc3RhcnRkYXRlOiAnJyxcclxuICAgICAgb2ZjbWVtZXhwZXJpZW5jZV9kZXNjcmlwdGlvbjogJycsXHJcbiAgICAgIG1haW5jYXRfaWQ6ICcnLFxyXG4gICAgICBjcmVhdGVkYXRlOiAnJyxcclxuICAgICAgbW9kaWZpZWRkYXRlOiAnJyxcclxuICAgICAgc3RhdHVzOiAnJ1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxuICBjbGVhck1lbWJlcigpIHtcclxuICAgIHRoaXMubmV3b2ZjbWVtYmVycyA9IHRydWU7XHJcbiAgICAvLyB0aGlzLm9mY21lbWJlcnMgPSB7XHJcbiAgICAvLyAgIG9mY21lbWJlcnNfaWQ6ICcnLFxyXG4gICAgLy8gICBvZmNtZW1iZXJzX2ZuYW1lOiAnJyxcclxuICAgIC8vICAgb2ZjbWVtYmVyc19tbmFtZTogJycsXHJcbiAgICAvLyAgIG9mY21lbWJlcnNfbG5hbWU6ICcnLFxyXG4gICAgLy8gICBvZmNtZW1iZXJzX25hbWU6ICcnLFxyXG4gICAgLy8gICBvZmNtZW1iZXJfdHlwZTogJycsXHJcbiAgICAvLyAgIGNpdHlfaWQ6ICcnLFxyXG4gICAgLy8gICBvZmNtZW1iZXJzX2VtYWlsaWQ6ICcnLFxyXG4gICAgLy8gICBvZmNtZW1iZXJzX3Bhc3N3b3JkOiAnJyxcclxuICAgIC8vICAgb2ZjbWVtYmVyc19hZGRyZXNzMTogJycsXHJcbiAgICAvLyAgIG9mY21lbWJlcnNfYWRkcmVzczI6ICcnLFxyXG4gICAgLy8gICBvZmNtZW1iZXJzX3BpbmNvZGU6ICcnLFxyXG4gICAgLy8gICBvZmNtZW1iZXJzX2NvbnRhY3Rub3M6ICcnLFxyXG4gICAgLy8gICBvZmNtZW1iZXJzX2F2YWlsYWJpbGl0eTogJycsXHJcbiAgICAvLyAgIG9mY21lbWJlcnNfZGlzcGxheW5hbWU6ICcnLFxyXG4gICAgLy8gICBvZmNtZW1iZXJzX2Rlc2NyaXB0aW9uOiAnJyxcclxuICAgIC8vICAgb2ZjbWVtYmVyc19zZWxmcmF0aW5nOiAnJyxcclxuICAgIC8vICAgb2ZjbWVtYmVyc19leHBlcmllbmNlbGV2ZWw6ICcnLFxyXG4gICAgLy8gICBvZmNtZW1iZXJzX2dlbmRlcjogJycsXHJcbiAgICAvLyAgIG9mY21lbWJlcnNfZG9iOiAnJyxcclxuICAgIC8vICAgb2ZjbWVtYmVyc19ub3NvZnRlYW1tZW1iZXJzOiAnJyxcclxuICAgIC8vICAgY3JlYXRlZGF0ZTogJycsXHJcbiAgICAvLyAgIG1vZGlmaWVkZGF0ZTogJycsXHJcbiAgICAvLyAgIHN0YXR1czogJydcclxuICAgIC8vIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmNsZWFyKCk7XHJcblxyXG4gICAgdmFyIGRhdGEgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdtZW1iZXJkZXRhaWxzJyk7XHJcbiAgICBcclxuICAgIGxldCBvZmNtZW1zZXNzaW9uOiBPRkNtZW1TZXNzaW9uID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgIGxldCBvZmNtZW1zZXNzaW9uX2lkID0gb2ZjbWVtc2Vzc2lvbi5vZmNtZW1zZXNzaW9uX2lkO1xyXG4gICAgdGhpcy5zZXNzaW9uaWQgPSBvZmNtZW1zZXNzaW9uX2lkO1xyXG4gICAgdmFyIGRhdGF2aWV3b2ZjbWVtYmVyID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShvZmNtZW1zZXNzaW9uX2lkKTtcclxuICAgIHRoaXMub2ZjbWVtYmVycyA9IEpTT04ucGFyc2UoZGF0YXZpZXdvZmNtZW1iZXIpO1xyXG4gIFxyXG5cclxuICAgIHRoaXMuc2hvd0dyaWRQcm9qZWN0KCk7XHJcbiAgICB0aGlzLnNob3dHcmlkRW1wbG95bWVudCgpO1xyXG4gICAgdGhpcy5zaG93R3JpZEVkdWNhdGlvbigpO1xyXG4gICAgdGhpcy5zaG93R3JpZEV4cGVyaWVuY2UoKTtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgc2VhcmNoKGV2ZW50OiBhbnkpIHtcclxuICAgIGxldCBzZWxlY3RlZFNraWxsID0gZXZlbnQucXVlcnk7XHJcbiAgICBsZXQgc2tpbGxzID0gdGhpcy5hdXRvU2tpbGxzR2xvYmFsO1xyXG4gICAgdGhpcy5hdXRvU2tpbGxzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBza2lsbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHNraWxsdGVtcCA9IHNraWxsc1tpXTtcclxuICAgICAgaWYgKHNraWxsdGVtcC5za2lsbF9uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWxlY3RlZFNraWxsLnRvTG93ZXJDYXNlKCkpID09IDApIHtcclxuICAgICAgICB0aGlzLmF1dG9Ta2lsbHMucHVzaChza2lsbHRlbXApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNhdGVnb3J5U2VsZWN0KGV2ZW50czE6IGFueSkge1xyXG5cclxuICAgIHRoaXMubmdNb2RlbE1haW5DYXRJZCA9IGV2ZW50czEudmFsdWU7XHJcbiAgfVxyXG5cclxuICBhZnRlcmNhbGxkYXRlKCkge1xyXG4gICAgdGhpcy5zdGFydGRhdGUgPSBuZXcgRGF0ZSh0aGlzLm1lbWJlckVtcGxveW1lbnQub2ZjbWVtZW1wbG95bWVudF9zdGFydGRhdGUpO1xyXG4gICAgdGhpcy5lbmRkYXRlID0gbmV3IERhdGUodGhpcy5tZW1iZXJFbXBsb3ltZW50Lm9mY21lbWVtcGxveW1lbnRfZW5kZGF0ZSk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogICAgIE15IFByb2ZpbGUgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuXHJcbiAgb25VcGxvYWQoZXZlbnQ6IGFueSkge1xyXG5cclxuICAgIGZvciAobGV0IGZpbGUgb2YgZXZlbnQuZmlsZXMpIHtcclxuICAgICAgdGhpcy51cGxvYWRlZEZpbGVzLnB1c2goZmlsZSk7XHJcbiAgICAgIC8vYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tc2dzID0gW107XHJcbiAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnaW5mbycsIHN1bW1hcnk6ICdGaWxlIFVwbG9hZGVkJywgZGV0YWlsOiAnJyB9KTtcclxuICB9XHJcblxyXG5cclxuICBvbkZpbmFsRmlsZVVwbG9hZCgpIHtcclxuXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVwbG9hZGVkRmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGZpbGVuYW1lID0gdGhpcy51cGxvYWRlZEZpbGVzW2ldLm5hbWU7XHJcbiAgICAgIGxldCB0ZW1wZmlsZXVwbG9hZDogRmlsZVVwbG9hZDtcclxuXHJcblxyXG4gICAgICB0ZW1wZmlsZXVwbG9hZCA9IHtcclxuICAgICAgICBmaWxlTmFtZTogZmlsZW5hbWUsXHJcbiAgICAgICAgZmlsZVR5cGU6ICdpbWcnLFxyXG4gICAgICAgIGZpbGVQYXRoOiAnJyxcclxuICAgICAgICBmaWxlU3RhdHVzOiAnWWVzJyxcclxuICAgICAgICB1cGxvYWRmaWxlX2ZpbGVuYW1lOiAnJ1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgdGhpcy5maWxldXBsb2FkYXJyLnB1c2godGVtcGZpbGV1cGxvYWQpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgc2F2ZU15UHJvZmlsZSgpIHtcclxuICAgIHRoaXMub25GaW5hbEZpbGVVcGxvYWQoKTtcclxuXHJcblxyXG4gaWYgKCF0aGlzLnZhbGlkYXRlTXlQcm9maWxlKCkpIHtcclxuICAgICBcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgIFxyXG4gICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5tc2dzID0gW107XHJcbiAgICB0aGlzLmxvY2FsU2VydmljZS5zYXZlTXlQcm9maWxlKHRoaXMuc2Vzc2lvbmlkLCB0aGlzLm9mY21lbWJlcnMsIHRoaXMuc2VsZWN0ZWRTa2lsbHMsIHRoaXMuZmlsZXVwbG9hZGFycikuc3Vic2NyaWJlKFxyXG4gICAgICBwID0+IHRoaXMuY29tbW9uRXJyb3IgPSBwLFxyXG4gICAgICBlID0+IGNvbnNvbGUubG9nKGUpLFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tbW9uRXJyb3IuSXN1Y2Nlc3MgPT0gXCIxXCIpIHtcclxuICAgICAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdpbmZvJywgc3VtbWFyeTogJ1N1Y2Nlc3MnLCBkZXRhaWw6ICdGb3JtIFVwZGF0ZSBTdWNjZXNzZnVsbHknIH0pO1xyXG4gICAgICAgICAgdGhpcy5jbGVhck1lbWJlcigpO1xyXG4gICAgICAgICAgbGV0IGE9SlNPTi5zdHJpbmdpZnkodGhpcy5vZmNtZW1iZXJzKTtcclxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odGhpcy5zZXNzaW9uaWQsYSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGxldCBlcnIgPSB0aGlzLmNvbW1vbkVycm9yLkVycm9yO1xyXG4gICAgICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2luZm8nLCBzdW1tYXJ5OiAnRXJyb3InLCBkZXRhaWw6IGVyciB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuc2VsZWN0RXhwZXJpZW5jZShleHBpZDogc3RyaW5nKSB7XHJcblxyXG4gICAgdGhpcy5vZmNtZW1iZXJzLm9mY21lbWJlcnNfZXhwZXJpZW5jZWxldmVsID0gZXhwaWQ7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZU15UHJvZmlsZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XHJcbiAgICBsZXQgZGlzcGxheW5hbWUgPSB0aGlzLm9mY21lbWJlcnMub2ZjbWVtYmVyc19kaXNwbGF5bmFtZTtcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IHRoaXMub2ZjbWVtYmVycy5vZmNtZW1iZXJzX2Rlc2NyaXB0aW9uO1xyXG4gICAgbGV0IHNraWxsbGVuZ3RoOiBhbnkgPSB0aGlzLnNlbGVjdGVkU2tpbGxzLmxlbmd0aDtcclxuICAgIFxyXG5cclxuICAgIGxldCBib29sOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGlmIChkaXNwbGF5bmFtZSA9PSAnJykge1xyXG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcclxuICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgIHN1bW1hcnk6ICdQbGVhc2UgRW50ZXIgTmFtZSBvZiB5b3VyIGpvYiBwb3N0aW5nJyB9KTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiBib29sID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgaWYgKGRlc2NyaXB0aW9uID09ICcnKSB7XHJcbiAgICAgIHRoaXMubXNncyA9IFtdO1xyXG4gICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCAgc3VtbWFyeTogJ1BsZWFzZSBFbnRlciBEZXNjcmlwdGlvbiBvZiB3b3JrJyB9KTtcclxuICAgICAgcmV0dXJuIGJvb2wgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2tpbGxsZW5ndGggPT0gMCkge1xyXG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcclxuICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgIHN1bW1hcnk6ICdQbGVhc2UgRW50ZXIgUmVxdWlyZWQgc2tpbGxzJyB9KTtcclxuICAgICAgcmV0dXJuIGJvb2wgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHJldHVybiBib29sO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAgICAgTXkgUHJvamVjdCAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4gIG9uVXBsb2FkUHJvamVjdChldmVudDogYW55KSB7XHJcblxyXG4gICAgZm9yIChsZXQgZmlsZVByb2plY3Qgb2YgZXZlbnQuZmlsZXMpIHtcclxuICAgICAgdGhpcy51cGxvYWRlZEZpbGVzUHJvamVjdC5wdXNoKGZpbGVQcm9qZWN0KTtcclxuICAgICAgLy9icmVhaztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1zZ3MgPSBbXTtcclxuICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdpbmZvJywgc3VtbWFyeTogJ0ZpbGUgVXBsb2FkZWQnLCBkZXRhaWw6ICcnIH0pO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBvbkZpbmFsRmlsZVVwbG9hZFByb2plY3QoKSB7XHJcblxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51cGxvYWRlZEZpbGVzUHJvamVjdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLnVwbG9hZGVkRmlsZXNQcm9qZWN0W2ldLm5hbWU7XHJcbiAgICAgIGxldCB0ZW1wZmlsZXVwbG9hZFByb2plY3Q6IEZpbGVVcGxvYWQ7XHJcblxyXG4gICAgICB0ZW1wZmlsZXVwbG9hZFByb2plY3QgPSB7XHJcbiAgICAgICAgZmlsZU5hbWU6IGZpbGVuYW1lLFxyXG4gICAgICAgIGZpbGVUeXBlOiAnaW1nJyxcclxuICAgICAgICBmaWxlUGF0aDogJycsXHJcbiAgICAgICAgZmlsZVN0YXR1czogJ1llcycsXHJcbiAgICAgICAgdXBsb2FkZmlsZV9maWxlbmFtZTogJydcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmZpbGV1cGxvYWRhcnJQcm9qZWN0LnB1c2godGVtcGZpbGV1cGxvYWRQcm9qZWN0KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbiAgb25za2lsbGdyaWRSb3dTZWxlY3RlZChldmVudDogYW55KSB7XHJcbiAgICB0aGlzLm5ld215UHJvamVjdCA9IGZhbHNlO1xyXG4gICAgdGhpcy5teVByb2plY3QgPSB0aGlzLnNlbGVjdGVkUHJvamVjdHNSb3c7XHJcblxyXG4gIH1cclxuXHJcbiAgc2F2ZU15UHJvamVjdCgpIHtcclxuICAgIHRoaXMub25GaW5hbEZpbGVVcGxvYWRQcm9qZWN0KCk7XHJcblxyXG5pZiAoIXRoaXMudmFsaWRhdGVNeVByb2plY3QoKSkge1xyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICB0aGlzLm1zZ3MgPSBbXTtcclxuXHJcbiAgICB0aGlzLmxvY2FsU2VydmljZS5zYXZlTXlQcm9qZWN0KHRoaXMuc2Vzc2lvbmlkLCB0aGlzLm15UHJvamVjdCwgdGhpcy5zZWxlY3RlZFByb2plY3RTa2lsbHMsIHRoaXMuZmlsZXVwbG9hZGFycikuc3Vic2NyaWJlKFxyXG4gICAgICBwID0+IHRoaXMuY29tbW9uRXJyb3IgPSBwLFxyXG4gICAgICBlID0+IGNvbnNvbGUubG9nKGUpLFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tbW9uRXJyb3IuSXN1Y2Nlc3MgPT0gXCIxXCIpIHtcclxuICAgICAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdpbmZvJywgc3VtbWFyeTogJ1N1Y2Nlc3MnLCBkZXRhaWw6ICdGb3JtIFVwZGF0ZSBTdWNjZXNzZnVsbHknIH0pO1xyXG4gICAgICAgICAgdGhpcy5zaG93R3JpZFByb2plY3QoKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgbGV0IGVyciA9IHRoaXMuY29tbW9uRXJyb3IuRXJyb3I7XHJcbiAgICAgICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnaW5mbycsIHN1bW1hcnk6ICdFcnJvcicsIGRldGFpbDogZXJyIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbnZhbGlkYXRlTXlQcm9qZWN0KCk6IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBib29sZWFuIHtcclxuICAgIGxldCB0aXRsZSA9IHRoaXMubXlQcm9qZWN0Lm9mY21lbW15cHJvamVjdF90aXRsZTtcclxuICAgIGxldCBtYWluQ2F0SWQgPSB0aGlzLm15UHJvamVjdC5tYWluY2F0X2lkO1xyXG4gICAgbGV0IHByb2pVUkwgPSB0aGlzLm15UHJvamVjdC5vZmNtZW1teXByb2plY3RfdXJsO1xyXG4gICAgbGV0IHByb2pEZXNjcmlwdGlvbiA9IHRoaXMubXlQcm9qZWN0Lm9mY21lbW15cHJvamVjdF9kZXNjcmlwdGlvbjtcclxuICAgIC8vbGV0IHByb2plY3RTa2lsbGxlbmd0aDogYW55ID0gdGhpcy5zZWxlY3RlZFByb2plY3RTa2lsbHMubGVuZ3RoO1xyXG4gICAgXHJcblxyXG4gICAgbGV0IGJvb2w6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgaWYgKHRpdGxlID09ICcnKSB7XHJcbiAgICAgIHRoaXMubXNncyA9IFtdO1xyXG4gICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCAgc3VtbWFyeTogJ1BsZWFzZSBFbnRlciBQcm9qZWN0IFRpdGxlJyB9KTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiBib29sID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgIGlmIChtYWluQ2F0SWQgPT09ICcnIHx8IG1haW5DYXRJZCA9PT0gJ1NlbGVjdCcpIHtcclxuICAgICAgdGhpcy5tc2dzID0gW107XHJcbiAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsICBzdW1tYXJ5OiAnUGxlYXNlIFNlbGVjdCBQcm9qZWN0IENhdGVnb3J5JyB9KTtcclxuICAgICAgcmV0dXJuIGJvb2wgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvalVSTCA9PSAnJykge1xyXG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcclxuICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgIHN1bW1hcnk6ICdQbGVhc2UgRW50ZXIgUHJvamVjdCBVUkwnIH0pO1xyXG4gICAgICByZXR1cm4gYm9vbCA9IGZhbHNlO1xyXG4gICAgfSBcclxuICAgIGlmIChwcm9qRGVzY3JpcHRpb24gPT0gJycpIHtcclxuICAgICAgdGhpcy5tc2dzID0gW107XHJcbiAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsICBzdW1tYXJ5OiAnUGxlYXNlIEVudGVyIFByb2plY3QgT3ZlcnZpZXcnIH0pO1xyXG4gICAgICByZXR1cm4gYm9vbCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qaWYgKHByb2plY3RTa2lsbGxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHRoaXMubXNncyA9IFtdO1xyXG4gICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCAgc3VtbWFyeTogJ1BsZWFzZSBFbnRlciBSZXF1aXJlZCBza2lsbHMnIH0pO1xyXG4gICAgICByZXR1cm4gYm9vbCA9IGZhbHNlO1xyXG4gICAgfSovXHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gYm9vbDtcclxuICB9XHJcblxyXG5cclxuICBzaG93R3JpZFByb2plY3QoKSB7XHJcblxyXG4gICAgdGhpcy5sb2NhbFNlcnZpY2UuZ2V0TXlQcm9qZWN0R3JpZCh0aGlzLnNlc3Npb25pZCkuc3Vic2NyaWJlKHAgPT4gdGhpcy5teVByb2plY3RHcmlkID0gcCwgZSA9PiBjb25zb2xlLmxvZyhlKSwgKCkgPT4ge30pO1xyXG4gICAgLyp0aGlzLmNsZWFyUHJvamVjdCgpO1xyXG4gICAgdGhpcy5jbGVhcigpOyovXHJcbiAgfVxyXG5cclxuICBkZWxldGVwcm9qKHByb2o6TXlQcm9qZWN0R3JpZCl7XHJcbiAgICAvLyB0aGlzLm15UHJvamVjdEdyaWQuXHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAgICAgTWVtYmVyIEVtcGxveW1lbnQgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuICBvblVwbG9hZEVtcGxveW1lbnQoZXZlbnQ6IGFueSkge1xyXG5cclxuICAgIGZvciAobGV0IGZpbGVFbXBsb3ltZW50IG9mIGV2ZW50LmZpbGVzKSB7XHJcbiAgICAgIHRoaXMudXBsb2FkZWRGaWxlc0VtcGxveW1lbnQucHVzaChmaWxlRW1wbG95bWVudCk7XHJcbiAgICAgIC8vYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tc2dzID0gW107XHJcbiAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnaW5mbycsIHN1bW1hcnk6ICdGaWxlIFVwbG9hZGVkJywgZGV0YWlsOiAnJyB9KTtcclxuICB9XHJcblxyXG5cclxuICBvbkJlZm9yZVVwbG9hZEVtcGxveW1lbnQoZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQueGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7bXVsdGlwYXJ0L2Zvcm0tZGF0YTsnKTtcclxuXHJcbiAgfVxyXG5cclxuICBvbkZpbmFsRmlsZVVwbG9hZEVtcGxveW1lbnQoKSB7XHJcblxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51cGxvYWRlZEZpbGVzRW1wbG95bWVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLnVwbG9hZGVkRmlsZXNFbXBsb3ltZW50W2ldLm5hbWU7XHJcbiAgICAgIGxldCB0ZW1wZmlsZXVwbG9hZEVtcGxveW1lbnQ6IEZpbGVVcGxvYWQ7XHJcbiAgICAgIHRlbXBmaWxldXBsb2FkRW1wbG95bWVudCA9IHtcclxuICAgICAgICBmaWxlTmFtZTogZmlsZW5hbWUsXHJcbiAgICAgICAgZmlsZVR5cGU6ICdpbWcnLFxyXG4gICAgICAgIGZpbGVQYXRoOiAnJyxcclxuICAgICAgICBmaWxlU3RhdHVzOiAnWWVzJyxcclxuICAgICAgICB1cGxvYWRmaWxlX2ZpbGVuYW1lOiAnJ1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZmlsZXVwbG9hZGFyckVtcGxveW1lbnQucHVzaCh0ZW1wZmlsZXVwbG9hZEVtcGxveW1lbnQpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIG9uRW1wbG95bWVudFJvd1NlbGVjdGVkKGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMubmV3bWVtYmVyRW1wbG95bWVudCA9IGZhbHNlO1xyXG4gICAgdGhpcy5tZW1iZXJFbXBsb3ltZW50ID0gdGhpcy5zZWxlY3RlZEVtcGxveW1lbnRzUm93O1xyXG5cclxuICB9XHJcblxyXG4gIHNhdmVNZW1iZXJFbXBsb3ltZW50KCkge1xyXG5cclxuICAgIC8qIHRoaXMubWVtYmVyRW1wbG95bWVudC5vZmNtZW1lbXBsb3ltZW50X3N0YXJ0ZGF0ZT10aGlzLm15ZGF0ZTEucGFyc2UodGhpcy5zdGFydGRhdGUpO1xyXG4gICAgIHRoaXMubWVtYmVyRW1wbG95bWVudC5vZmNtZW1lbXBsb3ltZW50X2VuZGRhdGU9dGhpcy5teWRhdGUxLnBhcnNlKHRoaXMuZW5kZGF0ZSk7Ki9cclxuXHJcbiAgICB0aGlzLm9uRmluYWxGaWxlVXBsb2FkRW1wbG95bWVudCgpO1xyXG5cclxuaWYgKCF0aGlzLnZhbGlkYXRlTWVtYmVyRW1wbG95bWVudCgpKSB7XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgIHRoaXMubXNncyA9IFtdO1xyXG5cclxuICAgIHRoaXMubG9jYWxTZXJ2aWNlLnNhdmVNZW1iZXJFbXBsb3ltZW50KHRoaXMuc2Vzc2lvbmlkLCB0aGlzLm1lbWJlckVtcGxveW1lbnQsIHRoaXMuc2VsZWN0ZWRFbXBsb3ltZW50U2tpbGxzLCB0aGlzLmZpbGV1cGxvYWRhcnJFbXBsb3ltZW50KS5zdWJzY3JpYmUocCA9PiB0aGlzLmNvbW1vbkVycm9yID0gcCwgZSA9PiBjb25zb2xlLmxvZyhlKSwgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jb21tb25FcnJvci5Jc3VjY2VzcyA9PSBcIjFcIikge1xyXG5cclxuICAgICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnaW5mbycsIHN1bW1hcnk6ICdTdWNjZXNzJywgZGV0YWlsOiAnRm9ybSBVcGRhdGUgU3VjY2Vzc2Z1bGx5JyB9KTtcclxuICAgICAgICB0aGlzLnNob3dHcmlkRW1wbG95bWVudCgpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJNZW1iZXJFbXBsb3ltZW50KCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IGVyciA9IHRoaXMuY29tbW9uRXJyb3IuRXJyb3I7XHJcbiAgICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2luZm8nLCBzdW1tYXJ5OiAnRXJyb3InLCBkZXRhaWw6IGVyciB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG52YWxpZGF0ZU1lbWJlckVtcGxveW1lbnQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IGJvb2xlYW4ge1xyXG4gICAgbGV0IGVtcGxveW1lbnROYW1lID0gdGhpcy5tZW1iZXJFbXBsb3ltZW50Lm9mY21lbWVtcGxveW1lbnRfbmFtZTtcclxuICAgIGxldCBtYWluQ2F0SWRFbXBsb3ltZW50ID0gdGhpcy5tZW1iZXJFbXBsb3ltZW50Lm1haW5jYXRfaWQ7XHJcbiAgICBsZXQgcm9sZUVtcGxveW1lbnQgPSB0aGlzLm1lbWJlckVtcGxveW1lbnQub2ZjbWVtZW1wbG95bWVudF9yb2xlO1xyXG4gICAgbGV0IHN0YXJ0ZGF0ZUVtcGxveW1lbnQgPSB0aGlzLm1lbWJlckVtcGxveW1lbnQub2ZjbWVtZW1wbG95bWVudF9zdGFydGRhdGU7XHJcbiAgICBsZXQgZW5kZGF0ZUVtcGxveW1lbnQgPSB0aGlzLm1lbWJlckVtcGxveW1lbnQub2ZjbWVtZW1wbG95bWVudF9lbmRkYXRlO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uRW1wbG95bWVudCA9IHRoaXMubWVtYmVyRW1wbG95bWVudC5vZmNtZW1lbXBsb3ltZW50X2Rlc2NyaXB0aW9uO1xyXG4gICAgLy9sZXQgZW1wbG95bWVudFNraWxsbGVuZ3RoOiBhbnkgPSB0aGlzLnNlbGVjdGVkRW1wbG95bWVudFNraWxscy5sZW5ndGg7XHJcbiAgICBcclxuXHJcbiAgICBsZXQgYm9vbDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBpZiAoZW1wbG95bWVudE5hbWUgPT0gJycpIHtcclxuICAgICAgdGhpcy5tc2dzID0gW107XHJcbiAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsICBzdW1tYXJ5OiAnUGxlYXNlIEVudGVyIEVtcGxveW1lbnQgTmFtZScgfSk7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gYm9vbCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICBpZiAobWFpbkNhdElkRW1wbG95bWVudCA9PSAnJyB8fCBtYWluQ2F0SWRFbXBsb3ltZW50ID09ICdTZWxlY3QnKSB7XHJcbiAgICAgIHRoaXMubXNncyA9IFtdO1xyXG4gICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCAgc3VtbWFyeTogJ1BsZWFzZSBTZWxlY3QgUHJvamVjdCcgfSk7XHJcbiAgICAgIHJldHVybiBib29sID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJvbGVFbXBsb3ltZW50ID09ICcnKSB7XHJcbiAgICAgIHRoaXMubXNncyA9IFtdO1xyXG4gICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCAgc3VtbWFyeTogJ1BsZWFzZSBFbnRlciBFbXBsb3ltZW50IFJvbGUnIH0pO1xyXG4gICAgICByZXR1cm4gYm9vbCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgICAgaWYgKHN0YXJ0ZGF0ZUVtcGxveW1lbnQgPT0gJycpIHtcclxuICAgICAgdGhpcy5tc2dzID0gW107XHJcbiAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsICBzdW1tYXJ5OiAnUGxlYXNlIEVudGVyIFN0YXJ0IERhdGUnIH0pO1xyXG4gICAgICByZXR1cm4gYm9vbCA9IGZhbHNlO1xyXG4gICAgfSBcclxuICAgIGlmIChlbmRkYXRlRW1wbG95bWVudCA9PSAnJykge1xyXG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcclxuICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgIHN1bW1hcnk6ICdQbGVhc2UgRW50ZXIgRW5kIERhdGUnIH0pO1xyXG4gICAgICByZXR1cm4gYm9vbCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkZXNjcmlwdGlvbkVtcGxveW1lbnQgPT0gJycpIHtcclxuICAgICAgdGhpcy5tc2dzID0gW107XHJcbiAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsICBzdW1tYXJ5OiAnUGxlYXNlIEVudGVyIEVtcGxveW1lbnQgT3ZlcnZpZXcnIH0pO1xyXG4gICAgICByZXR1cm4gYm9vbCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qaWYgKGVtcGxveW1lbnRTa2lsbGxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHRoaXMubXNncyA9IFtdO1xyXG4gICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCAgc3VtbWFyeTogJ1BsZWFzZSBFbnRlciBSZXF1aXJlZCBza2lsbHMnIH0pO1xyXG4gICAgICByZXR1cm4gYm9vbCA9IGZhbHNlO1xyXG4gICAgfSovXHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gYm9vbDtcclxuICB9XHJcblxyXG5cclxuICBzaG93R3JpZEVtcGxveW1lbnQoKSB7XHJcblxyXG4gICAgdGhpcy5sb2NhbFNlcnZpY2UuZ2V0RW1wbG95bWVudEdyaWQodGhpcy5zZXNzaW9uaWQpLnN1YnNjcmliZShwID0+IHRoaXMubWVtYmVyRW1wbG95bWVudEdyaWQgPSBwLCBlID0+IGNvbnNvbGUubG9nKGUpLCAoKSA9PiB7fSk7XHJcbiAgIFxyXG4gICAgXHJcbiAgXHJcbiAgfVxyXG5cclxuICBcclxuICBkZWxldGVlbXAoZW1wOkVtcGxveW1lbnRHcmlkKXtcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogICAgIE1lbWJlciBFZHVjYXRpb24gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuXHJcblxyXG4gIG9uRWR1Y2F0aW9uUm93U2VsZWN0ZWQoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5uZXdtZW1iZXJFZHVjYXRpb24gPSBmYWxzZTtcclxuICAgIHRoaXMubWVtYmVyRWR1Y2F0aW9uID0gdGhpcy5zZWxlY3RlZEVkdWNhdGlvbnNSb3c7XHJcblxyXG4gIH1cclxuXHJcbiAgc2F2ZU1lbWJlckVkdWNhdGlvbigpIHtcclxuXHJcbmlmICghdGhpcy52YWxpZGF0ZU1lbWJlckVkdWNhdGlvbigpKSB7XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgIHRoaXMubXNncyA9IFtdO1xyXG5cclxuICAgIHRoaXMubG9jYWxTZXJ2aWNlLnNhdmVNZW1iZXJFZHVjYXRpb24odGhpcy5zZXNzaW9uaWQsIHRoaXMubWVtYmVyRWR1Y2F0aW9uKS5zdWJzY3JpYmUocCA9PiB0aGlzLmNvbW1vbkVycm9yID0gcCwgZSA9PiBjb25zb2xlLmxvZyhlKSwgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jb21tb25FcnJvci5Jc3VjY2VzcyA9PSBcIjFcIikge1xyXG5cclxuICAgICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnaW5mbycsIHN1bW1hcnk6ICdTdWNjZXNzJywgZGV0YWlsOiAnRm9ybSBVcGRhdGUgU3VjY2Vzc2Z1bGx5JyB9KTtcclxuICAgICAgICB0aGlzLnNob3dHcmlkRWR1Y2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5jbGVhck1lbWJlckVkdWNhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCBlcnIgPSB0aGlzLmNvbW1vbkVycm9yLkVycm9yO1xyXG4gICAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdpbmZvJywgc3VtbWFyeTogJ0Vycm9yJywgZGV0YWlsOiBlcnIgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG52YWxpZGF0ZU1lbWJlckVkdWNhdGlvbigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XHJcbiAgICBsZXQgZXhwZXJpZW5jZU5hbWUgPSB0aGlzLm1lbWJlckVkdWNhdGlvbi5vZmNtZW1iZXJlZHVjYXRpb25fdGl0bGU7XHJcbiAgICBsZXQgZWR1Y2F0aW9uSWQgPSB0aGlzLm1lbWJlckVkdWNhdGlvbi5lZHVjYXRpb25faWQ7XHJcbiAgICBsZXQgc3BlY2lsaXphdGlvbiA9IHRoaXMubWVtYmVyRWR1Y2F0aW9uLm9mY21lbWJlcmVkdWNhdGlvbl9zcGVjaWxpemF0aW9uO1xyXG4gICAgbGV0IHN0YXJ0ZGF0ZUVkdWNhdGlvbiA9IHRoaXMubWVtYmVyRWR1Y2F0aW9uLm9mY21lbWJlcmVkdWNhdGlvbl9zdGFydGRhdGU7XHJcbiAgICBsZXQgZW5kZGF0ZUVkdWNhdGlvbiA9IHRoaXMubWVtYmVyRWR1Y2F0aW9uLm9mY21lbWJlcmVkdWNhdGlvbl9lbmRkYXRlO1xyXG4gIFxyXG5cclxuICAgIGxldCBib29sOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGlmIChleHBlcmllbmNlTmFtZSA9PSAnJykge1xyXG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcclxuICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgIHN1bW1hcnk6ICdQbGVhc2UgRW50ZXIgRW1wbG95bWVudCBOYW1lJyB9KTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiBib29sID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgIGlmIChlZHVjYXRpb25JZCA9PSAnJyB8fCBlZHVjYXRpb25JZCA9PSAnU2VsZWN0Jykge1xyXG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcclxuICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgIHN1bW1hcnk6ICdQbGVhc2UgU2VsZWN0IEVkdWNhdGlvbicgfSk7XHJcbiAgICAgIHJldHVybiBib29sID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNwZWNpbGl6YXRpb24gPT0gJycpIHtcclxuICAgICAgdGhpcy5tc2dzID0gW107XHJcbiAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsICBzdW1tYXJ5OiAnUGxlYXNlIEVudGVyIFNwZWNpbGl6YXRpb24nIH0pO1xyXG4gICAgICByZXR1cm4gYm9vbCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgICAgaWYgKHN0YXJ0ZGF0ZUVkdWNhdGlvbiA9PSAnJykge1xyXG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcclxuICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgIHN1bW1hcnk6ICdQbGVhc2UgRW50ZXIgU3RhcnQgRGF0ZScgfSk7XHJcbiAgICAgIHJldHVybiBib29sID0gZmFsc2U7XHJcbiAgICB9IFxyXG4gICAgaWYgKGVuZGRhdGVFZHVjYXRpb24gPT0gJycpIHtcclxuICAgICAgdGhpcy5tc2dzID0gW107XHJcbiAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsICBzdW1tYXJ5OiAnUGxlYXNlIEVudGVyIEVuZCBEYXRlJyB9KTtcclxuICAgICAgcmV0dXJuIGJvb2wgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAgIFxyXG5cclxuICAgIHJldHVybiBib29sO1xyXG4gIH1cclxuXHJcblxyXG4gIHNob3dHcmlkRWR1Y2F0aW9uKCkge1xyXG5cclxuICAgIHRoaXMubG9jYWxTZXJ2aWNlLmdldEVkdWNhdGlvbkdyaWQodGhpcy5zZXNzaW9uaWQpLnN1YnNjcmliZShwID0+IHRoaXMubWVtYmVyRWR1Y2F0aW9uR3JpZCA9IHAsIGUgPT4gY29uc29sZS5sb2coZSksICgpID0+IHt9KTtcclxuICAgIC8qICB0aGlzLmNsZWFyTWVtYmVyRWR1Y2F0aW9uKCk7XHJcbiAgICAgIHRoaXMuY2xlYXIoKTsqL1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlZWR1KGVkdTpFZHVjYXRpb25HcmlkKXtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAgICAgTWVtYmVyIEV4cGVyaWVuY2UgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuICBvblVwbG9hZEV4cGVyaWVuY2UoZXZlbnQ6IGFueSkge1xyXG5cclxuICAgIGZvciAobGV0IGZpbGVFeHBlcmllbmNlIG9mIGV2ZW50LmZpbGVzKSB7XHJcbiAgICAgIHRoaXMudXBsb2FkZWRGaWxlc0V4cGVyaWVuY2UucHVzaChmaWxlRXhwZXJpZW5jZSk7XHJcbiAgICAgIC8vYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tc2dzID0gW107XHJcbiAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnaW5mbycsIHN1bW1hcnk6ICdGaWxlIFVwbG9hZGVkJywgZGV0YWlsOiAnJyB9KTtcclxuICB9XHJcblxyXG5cclxuICBvbkJlZm9yZVVwbG9hZEV4cGVyaWVuY2UoZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQueGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7bXVsdGlwYXJ0L2Zvcm0tZGF0YTsnKTtcclxuXHJcbiAgfVxyXG5cclxuICBvbkZpbmFsRmlsZVVwbG9hZEV4cGVyaWVuY2UoKSB7XHJcblxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51cGxvYWRlZEZpbGVzRXhwZXJpZW5jZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLnVwbG9hZGVkRmlsZXNFeHBlcmllbmNlW2ldLm5hbWU7XHJcbiAgICAgIGxldCB0ZW1wZmlsZXVwbG9hZEV4cGVyaWVuY2U6IEZpbGVVcGxvYWQ7XHJcblxyXG4gICAgICB0ZW1wZmlsZXVwbG9hZEV4cGVyaWVuY2UgPSB7XHJcbiAgICAgICAgZmlsZU5hbWU6IGZpbGVuYW1lLFxyXG4gICAgICAgIGZpbGVUeXBlOiAnaW1nJyxcclxuICAgICAgICBmaWxlUGF0aDogJycsXHJcbiAgICAgICAgZmlsZVN0YXR1czogJ1llcycsXHJcbiAgICAgICAgdXBsb2FkZmlsZV9maWxlbmFtZTogJydcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5maWxldXBsb2FkYXJyRXhwZXJpZW5jZS5wdXNoKHRlbXBmaWxldXBsb2FkRXhwZXJpZW5jZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbiAgb25FeHBlcmllbmNlUm93U2VsZWN0ZWQoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5uZXdtZW1iZXJFeHBlcmllbmNlID0gZmFsc2U7XHJcbiAgICB0aGlzLm1lbWJlckV4cGVyaWVuY2UgPSB0aGlzLnNlbGVjdGVkRXhwZXJpZW5jZVJvdztcclxuXHJcbiAgfVxyXG5cclxuICBzYXZlTWVtYmVyRXhwZXJpZW5jZSgpIHtcclxuXHJcblxyXG4gICAgdGhpcy5vbkZpbmFsRmlsZVVwbG9hZEV4cGVyaWVuY2UoKTtcclxuXHJcbmlmICghdGhpcy52YWxpZGF0ZU1lbWJlckV4cGVyaWVuY2UoKSkge1xyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICB0aGlzLm1zZ3MgPSBbXTtcclxuXHJcbiAgICB0aGlzLmxvY2FsU2VydmljZS5zYXZlTWVtYmVyRXhwZXJpZW5jZSh0aGlzLnNlc3Npb25pZCwgdGhpcy5tZW1iZXJFeHBlcmllbmNlLCB0aGlzLnNlbGVjdGVkRXhwZXJpZW5jZVNraWxscywgdGhpcy5maWxldXBsb2FkYXJyRXhwZXJpZW5jZSkuc3Vic2NyaWJlKHAgPT4gdGhpcy5jb21tb25FcnJvciA9IHAsIGUgPT4gY29uc29sZS5sb2coZSksICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuY29tbW9uRXJyb3IuSXN1Y2Nlc3MgPT0gXCIxXCIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2luZm8nLCBzdW1tYXJ5OiAnU3VjY2VzcycsIGRldGFpbDogJ0Zvcm0gVXBkYXRlIFN1Y2Nlc3NmdWxseScgfSk7XHJcbiAgICAgICAgdGhpcy5zaG93R3JpZEV4cGVyaWVuY2UoKTtcclxuICAgICAgICB0aGlzLmNsZWFyTWVtYmVyRXhwZXJpZW5jZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCBlcnIgPSB0aGlzLmNvbW1vbkVycm9yLkVycm9yO1xyXG4gICAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdpbmZvJywgc3VtbWFyeTogJ0Vycm9yJywgZGV0YWlsOiBlcnIgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxudmFsaWRhdGVNZW1iZXJFeHBlcmllbmNlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBib29sZWFuIHtcclxuICAgIGxldCBleHBlcmllbmNlTmFtZSA9IHRoaXMubWVtYmVyRXhwZXJpZW5jZS5vZmNtZW1leHBlcmllbmNlX25hbWU7XHJcbiAgICBsZXQgbWFpbkNhdElkRXhwZXJpZW5jZSA9IHRoaXMubWVtYmVyRXhwZXJpZW5jZS5tYWluY2F0X2lkO1xyXG4gICAgbGV0IHJvbGVFeHBlcmllbmNlID0gdGhpcy5tZW1iZXJFeHBlcmllbmNlLm9mY21lbWV4cGVyaWVuY2Vfcm9sZTtcclxuICAgIGxldCBzdGFydGRhdGVFeHBlcmllbmNlID0gdGhpcy5tZW1iZXJFeHBlcmllbmNlLm9mY21lbWV4cGVyaWVuY2Vfc3RhcnRkYXRlO1xyXG4gICAgbGV0IGVuZGRhdGVFeHBlcmllbmNlID0gdGhpcy5tZW1iZXJFeHBlcmllbmNlLm9mY21lbWV4cGVyaWVuY2VfZW5kZGF0ZTtcclxuICAgIGxldCBkZXNjcmlwdGlvbkV4cGVyaWVuY2UgPSB0aGlzLm1lbWJlckV4cGVyaWVuY2Uub2ZjbWVtZXhwZXJpZW5jZV9kZXNjcmlwdGlvbjtcclxuICAgIC8vbGV0IGV4cGVyaWVuY2VTa2lsbGxlbmd0aDogYW55ID0gdGhpcy5zZWxlY3RlZEV4cGVyaWVuY2VTa2lsbHMubGVuZ3RoO1xyXG4gICAgXHJcblxyXG4gICAgbGV0IGJvb2w6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgaWYgKGV4cGVyaWVuY2VOYW1lID09ICcnKSB7XHJcbiAgICAgIHRoaXMubXNncyA9IFtdO1xyXG4gICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCAgc3VtbWFyeTogJ1BsZWFzZSBFbnRlciBFbXBsb3ltZW50IE5hbWUnIH0pO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIGJvb2wgPSBmYWxzZTtcclxuICAgIH1cclxuICAgaWYgKG1haW5DYXRJZEV4cGVyaWVuY2UgPT0gJycgfHwgbWFpbkNhdElkRXhwZXJpZW5jZSA9PSAnU2VsZWN0Jykge1xyXG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcclxuICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgIHN1bW1hcnk6ICdQbGVhc2UgU2VsZWN0IFByb2plY3QnIH0pO1xyXG4gICAgICByZXR1cm4gYm9vbCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyb2xlRXhwZXJpZW5jZSA9PSAnJykge1xyXG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcclxuICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgIHN1bW1hcnk6ICdQbGVhc2UgRW50ZXIgRXhwZXJpZW5jZSBSb2xlJyB9KTtcclxuICAgICAgcmV0dXJuIGJvb2wgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAgIGlmIChzdGFydGRhdGVFeHBlcmllbmNlID09ICcnKSB7XHJcbiAgICAgIHRoaXMubXNncyA9IFtdO1xyXG4gICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCAgc3VtbWFyeTogJ1BsZWFzZSBFbnRlciBTdGFydCBEYXRlJyB9KTtcclxuICAgICAgcmV0dXJuIGJvb2wgPSBmYWxzZTtcclxuICAgIH0gXHJcbiAgICBpZiAoZW5kZGF0ZUV4cGVyaWVuY2UgPT0gJycpIHtcclxuICAgICAgdGhpcy5tc2dzID0gW107XHJcbiAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsICBzdW1tYXJ5OiAnUGxlYXNlIEVudGVyIEVuZCBEYXRlJyB9KTtcclxuICAgICAgcmV0dXJuIGJvb2wgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGVzY3JpcHRpb25FeHBlcmllbmNlID09ICcnKSB7XHJcbiAgICAgIHRoaXMubXNncyA9IFtdO1xyXG4gICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCAgc3VtbWFyeTogJ1BsZWFzZSBFbnRlciBFeHBlcmllbmNlIE92ZXJ2aWV3JyB9KTtcclxuICAgICAgcmV0dXJuIGJvb2wgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKmlmIChlbXBsb3ltZW50U2tpbGxsZW5ndGggPT0gMCkge1xyXG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcclxuICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgIHN1bW1hcnk6ICdQbGVhc2UgRW50ZXIgUmVxdWlyZWQgc2tpbGxzJyB9KTtcclxuICAgICAgcmV0dXJuIGJvb2wgPSBmYWxzZTtcclxuICAgIH0qL1xyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIGJvb2w7XHJcbiAgfVxyXG5cclxuICBzaG93R3JpZEV4cGVyaWVuY2UoKSB7XHJcblxyXG4gICAgdGhpcy5sb2NhbFNlcnZpY2UuZ2V0RXhwZXJpZW5jZUdyaWQodGhpcy5zZXNzaW9uaWQpLnN1YnNjcmliZShwID0+IHRoaXMubWVtYmVyRXhwZXJpZW5jZUdyaWQgPSBwLCBlID0+IGNvbnNvbGUubG9nKGUpLCAoKSA9PiB7fSk7XHJcbiAgICAvKnRoaXMuY2xlYXJNZW1iZXJFeHBlcmllbmNlKCk7XHJcbiAgICB0aGlzLmNsZWFyKCk7Ki9cclxuICB9XHJcblxyXG4gIGRlbGV0ZWV4cChleHA6RXhwZXJpZW5jZUdyaWQpe1xyXG4gICAgICAgIFxyXG4gIH1cclxufVxyXG4iXX0=
