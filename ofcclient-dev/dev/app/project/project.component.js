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
var index_1 = require('../shared/project/index');
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var validator_directive_1 = require('../shared/validators/validator.directive');
var baseurl_service_1 = require('../shared/baseurl/baseurl.service');
var ProjectComponent = (function () {
    function ProjectComponent(fb, route, router, localService, mycur, mydate1, emailval, baseUrlservice) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.localService = localService;
        this.mycur = mycur;
        this.mydate1 = mydate1;
        this.emailval = emailval;
        this.baseUrlservice = baseUrlservice;
        this.msgs = [];
        this.projects = [];
        this.drpvar = [];
        this.drpproject = [];
        this.uploadedFiles = [];
        this.fileuploadarr = [];
        this.mybaseurl = baseUrlservice.getBaseurl();
    }
    ProjectComponent.prototype.clear = function () {
        this.newproject = true;
        this.project = {
            status: 'active',
            comp_id: '',
            member_id: '',
            project_id: '1',
            project_name: '',
            project_budget: '',
            project_enddate: '',
            project_remarks: '',
            project_manhours: '',
            Project_timeframe: '',
            project_completed: 'No',
            project_startdate: '',
            project_commission: '',
            project_description: '',
            project_requireddaystocomplete: '',
        };
        this.fileupload = {
            fileName: '',
            fileType: '',
            filePath: '',
            fileStatus: '',
            uploadfile_filename: ''
        };
    };
    ProjectComponent.prototype.onRowSelect = function (event) {
        var _this = this;
        this.newproject = false;
        var tempproj;
        tempproj = this.selectedRow;
        this.localService
            .getselectAllfileProject(tempproj.project_id)
            .subscribe(function (p) { return _this.fileuploadarr = p; }, function (e) { return console.log(e); }, function () { return console.log('done getselectAllfileuploadproject: ' + _this.fileuploadarr); });
        this.localService
            .getedit(tempproj.project_id)
            .subscribe(function (p) { return _this.project = p; }, function (e) { return console.log(e); }, function () { _this.aftercalldate(); });
    };
    ProjectComponent.prototype.aftercalldate = function () {
        alert(JSON.stringify(this.project));
        alert(this.project.project_enddate);
        alert(new Date(Number(this.project.project_enddate)));
        alert(new Date(Number(this.project.project_startdate)));
        this.startdate = new Date(Number(this.project.project_startdate));
        this.enddate = new Date(Number(this.project.project_enddate));
    };
    ProjectComponent.prototype.onFinalFileUpload = function () {
        for (var i = 0; i < this.uploadedFiles.length; i++) {
            var filename = this.uploadedFiles[i].name;
            this.fileupload.fileName = filename;
            this.fileupload.filePath = '';
            this.fileupload.fileStatus = 'Yes';
            this.fileupload.fileType = 'img';
            this.fileupload.uploadfile_filename = '';
            this.fileuploadarr.push(this.fileupload);
        }
    };
    ProjectComponent.prototype.onSubmit = function () {
        var _this = this;
        this.project.project_startdate = this.mydate1.parse(this.startdate);
        this.project.project_enddate = this.mydate1.parse(this.enddate);
        this.onFinalFileUpload();
        this.submitted = true;
        this.msgs = [];
        console.log(JSON.stringify(this.project));
        this.msgs.push({ severity: 'info', summary: 'Please wait', detail: 'Form Submitted Successfully.. Please wait..' });
        if (this.newproject) {
            this.localService
                .insert(this.project, this.fileuploadarr)
                .subscribe(function (p) { return _this.projects = p; }, function (e) { return console.log(e); }, function () { return _this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Update Successfully' }); });
        }
        else {
            console.log('project: ' + JSON.stringify(this.project) + ' , f:' + JSON.stringify(this.fileuploadarr));
            this.localService
                .update(this.project, this.fileuploadarr)
                .subscribe(function (p) { return _this.projects = p; }, function (e) { return console.log(e); }, function () { return _this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Update Successfully' }); });
        }
        this.submitted = true;
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Update Successfully' });
    };
    ProjectComponent.prototype.onUpload = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
        }
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    };
    ProjectComponent.prototype.onBeforeUpload = function (event) {
        event.xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;multipart/form-data;');
        console.log("mith here:");
    };
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clear();
        this.userform = this.fb.group({
            'name': new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, validator_directive_1.CustomValidator.isEmailValid])),
            'budget': new forms_1.FormControl('', forms_1.Validators.required),
            'remarks': new forms_1.FormControl('', forms_1.Validators.required),
            'manhours': new forms_1.FormControl('', forms_1.Validators.required),
            'startdatev': new forms_1.FormControl('', forms_1.Validators.required),
            'enddatev': new forms_1.FormControl('', forms_1.Validators.required),
            'timeframe': new forms_1.FormControl('', forms_1.Validators.required),
            'completed': new forms_1.FormControl('', forms_1.Validators.required),
            'commission': new forms_1.FormControl('', forms_1.Validators.required),
            'description': new forms_1.FormControl('', forms_1.Validators.required),
            'daysrequired': new forms_1.FormControl('', forms_1.Validators.required),
        });
        this.localService
            .getall()
            .subscribe(function (p) { return _this.projects = p; }, function (e) { return console.log(e); }, function () { return _this.processdata(); });
    };
    ProjectComponent.prototype.processdata = function () {
    };
    ProjectComponent.prototype.populatedrp = function () {
        for (var i = 0; i < this.drpvar.length; i++) {
            this.drpproject.push({ label: this.drpvar[i].labeld, value: this.drpvar[i].valued });
        }
    };
    ProjectComponent.prototype.drpchange = function (events1) {
        alert(events1.value);
    };
    Object.defineProperty(ProjectComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.userform.value); },
        enumerable: true,
        configurable: true
    });
    ProjectComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-project',
            templateUrl: 'project.component.html',
            styleUrls: ['project.component.css'],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, baseurl_service_1.BaseUrlService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, index_1.ProjectService, first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, baseurl_service_1.BaseUrlService])
    ], ProjectComponent);
    return ProjectComponent;
}());
exports.ProjectComponent = ProjectComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUMsZUFBZSxDQUFDLENBQUE7QUFDakQsc0JBQTJELGdCQUFnQixDQUFDLENBQUE7QUFJNUUsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFTekQsMkJBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsc0JBQStCLHlCQUF5QixDQUFDLENBQUE7QUFJekQsa0NBQTZCLG1DQUFtQyxDQUFDLENBQUE7QUFDakUsbUNBQThCLG9DQUFvQyxDQUFDLENBQUE7QUFDbkUsb0NBQWdDLDBDQUEwQyxDQUFDLENBQUE7QUFDM0UsZ0NBQTZCLG1DQUFtQyxDQUFDLENBQUE7QUFXakU7SUFtRUUsMEJBQW9CLEVBQWUsRUFDZixLQUFxQixFQUNyQixNQUFjLEVBQ2QsWUFBNEIsRUFDNUIsS0FBcUIsRUFDckIsT0FBcUIsRUFDckIsUUFBdUIsRUFDdkIsY0FBNkI7UUFQN0IsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBdEVqRCxTQUFJLEdBQVksRUFBRSxDQUFDO1FBR25CLGFBQVEsR0FBWSxFQUFFLENBQUM7UUFNdEIsV0FBTSxHQUFjLEVBQUUsQ0FBQztRQUN2QixlQUFVLEdBQWUsRUFBRSxDQUFDO1FBVzdCLGtCQUFhLEdBQVUsRUFBRSxDQUFDO1FBRTFCLGtCQUFhLEdBQWUsRUFBRSxDQUFDO1FBaUR0QixJQUFJLENBQUMsU0FBUyxHQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQVVwRCxDQUFDO0lB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ZWN0L3Byb2plY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cCxGb3JtQ29udHJvbCxWYWxpZGF0b3JzLEZvcm1CdWlsZGVyfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge01lc3NhZ2VzTW9kdWxlLE1lc3NhZ2UsR3Jvd2x9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7UGFuZWxNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0J1dHRvbk1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtQcm9qZWN0fSBmcm9tICcuL3Byb2plY3QnO1xyXG5pbXBvcnQge0Ryb3Bkb3duMX0gZnJvbSAnLi9kcm9wZG93bjEnO1xyXG5pbXBvcnQge0ZpbGVVcGxvYWR9IGZyb20gJy4vZmlsZXVwbG9hZCc7XHJcbmltcG9ydCB7RGF0YVRhYmxlTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0Ryb3Bkb3duTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5cclxuXHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBQcm9qZWN0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9wcm9qZWN0L2luZGV4JztcclxuXHJcbmltcG9ydCB7RmlsZVVwbG9hZE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtTZWxlY3RJdGVtfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZSc7XHJcbmltcG9ydCB7IEN1c3RvbVZhbGlkYXRvciB9IGZyb20gJy4uL3NoYXJlZC92YWxpZGF0b3JzL3ZhbGlkYXRvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0Jhc2VVcmxTZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvYmFzZXVybC9iYXNldXJsLnNlcnZpY2UnO1xyXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBwcm9qZWN0Q29tcG9uZW50LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NkLXByb2plY3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAncHJvamVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3Byb2plY3QuY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczpbTXlDdXJyZW5jeVBpcGUsTXlEYXRlRm9ybWF0LEVtYWlsVmFsaWRhdGUsQmFzZVVybFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvL0Zvcm0gZ3JvcCBcclxuICB1c2VyZm9ybTogRm9ybUdyb3VwO1xyXG4gIC8vIEdyb3dsIG1lc3NlZ2VcclxuICBtc2dzOiBNZXNzYWdlW109W107XHJcblxyXG4gIC8vRGVjbGFyZTogRGF0YSBoYW5kbGluZyBmb3IgR3JpZCBmbG93LCBmb3JtIGZsb3dcclxuICBwcm9qZWN0czogUHJvamVjdFtdPVtdO1xyXG4gIHN1Ym1pdHRlZDogYm9vbGVhbjtcclxuICBwcm9qZWN0OiBQcm9qZWN0O1xyXG4gIHNlbGVjdGVkUm93OiBQcm9qZWN0O1xyXG5cclxuICAgLy8gRm9ybSBkYXRhIHByZWZpbGxlZFxyXG4gICBkcnB2YXI6IERyb3Bkb3duMVtdPVtdO1xyXG4gICBkcnBwcm9qZWN0OiBTZWxlY3RJdGVtW109W107XHJcbiAgIHN0YXJ0ZGF0ZTogRGF0ZTtcclxuICAgZW5kZGF0ZTogRGF0ZTtcclxuXHJcbiAgIC8vYm9vbGVhbiB2YWx1ZSBmb3IgQWRkIG5ldyBvciBFZGl0IE1vZGVcclxuICAgbmV3cHJvamVjdDogYm9vbGVhbjtcclxuICAgXHJcbiAgLy8gIHNlbGVjdGVkcHJvamVjdDogc3RyaW5nO1xyXG4gICAgICAgXHJcbiAgLy8qKiogZmlsZXVwbG9hZCBEZWNsYXJlICoqKlxyXG4gIC8vQ2xpZW50IGZvcm1hdCBmb3IgZmlsZSB1cGxvYWRcclxuICB1cGxvYWRlZEZpbGVzOiBhbnlbXSA9IFtdO1xyXG4gIC8vc2VydmVyIGZvcm1hdCBmb3IgZmlsZSB1cGxvYWRcclxuICBmaWxldXBsb2FkYXJyOiBGaWxlVXBsb2FkW109W107XHJcbiAgZmlsZXVwbG9hZDogRmlsZVVwbG9hZDtcclxuXHJcbiAgbXliYXNldXJsOnN0cmluZztcclxuXHJcbiAgLy9QcmVwYXJlIGRhdGEgZm9yIG5ldyBlbnRyeSBvciBpbml0aXplIGRhdGEgZHVyaW5nIGZvcm0gbG9hZCBieSBjbGVhcmluZyBkYXRhIG9yIHByZXNldHRpbmcgZGF0YVxyXG4gIGNsZWFyKCl7XHJcbiAgICAgICAgdGhpcy5uZXdwcm9qZWN0PXRydWU7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0PXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBzdGF0dXMgOidhY3RpdmUnLFxyXG4gICAgICAgICAgY29tcF9pZCA6JycsXHJcbiAgICAgICAgICBtZW1iZXJfaWQgOicnLFxyXG4gICAgICAgICAgcHJvamVjdF9pZDonMScsXHJcbiAgICAgICAgICBwcm9qZWN0X25hbWU6JycsXHJcbiAgICAgICAgICBwcm9qZWN0X2J1ZGdldDonJyxcclxuICAgICAgICAgIHByb2plY3RfZW5kZGF0ZTonJyxcclxuICAgICAgICAgIHByb2plY3RfcmVtYXJrczonJyxcclxuICAgICAgICAgIHByb2plY3RfbWFuaG91cnM6JycsXHJcbiAgICAgICAgICBQcm9qZWN0X3RpbWVmcmFtZTonJyxcclxuICAgICAgICAgIHByb2plY3RfY29tcGxldGVkOidObycsXHJcbiAgICAgICAgICBwcm9qZWN0X3N0YXJ0ZGF0ZTonJyxcclxuICAgICAgICAgIHByb2plY3RfY29tbWlzc2lvbjonJyxcclxuICAgICAgICAgIHByb2plY3RfZGVzY3JpcHRpb246JycsXHJcbiAgICAgICAgICBwcm9qZWN0X3JlcXVpcmVkZGF5c3RvY29tcGxldGU6JycsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICB0aGlzLmZpbGV1cGxvYWQ9e1xyXG4gICAgICBmaWxlTmFtZTogJycsXHJcbiAgICAgIGZpbGVUeXBlOiAnJyxcclxuICAgICAgZmlsZVBhdGg6ICcnLFxyXG4gICAgICBmaWxlU3RhdHVzOiAnJyxcclxuICAgICAgdXBsb2FkZmlsZV9maWxlbmFtZTogJydcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNvbnN0cnVjdG9yIGluaXRpYXplIG9mIGFsbCBuZWNlc3NhcnkgdmFyaWFibGUgYW5kIG9iamVjdHNcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbG9jYWxTZXJ2aWNlOiBQcm9qZWN0U2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG15Y3VyOiBNeUN1cnJlbmN5UGlwZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG15ZGF0ZTE6IE15RGF0ZUZvcm1hdCxcclxuICAgICAgICAgICAgICBwcml2YXRlIGVtYWlsdmFsOiBFbWFpbFZhbGlkYXRlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYmFzZVVybHNlcnZpY2U6QmFzZVVybFNlcnZpY2VcclxuICAgICAgICAgICAgICApe1xyXG4gICAgICAgICAgIHRoaXMubXliYXNldXJsPWJhc2VVcmxzZXJ2aWNlLmdldEJhc2V1cmwoKTsgICAgIFxyXG4gICAgICAgICAgLy8gZHJwb3AgZG93biBjYW4gb25seSBiZSBwb3B1bGF0ZWQgaW4gY29uc3RydWN0b3IgYW5kIG5vdCBpbiBuZ2luaXQoKVxyXG4gICAgICAgICAgLy8gdGhpcy5sb2NhbFNlcnZpY2VcclxuICAgICAgICAgIC8vIC5nZXRzZWxlY3RkcnBwcm9qZWN0KCdoaicpXHJcbiAgICAgICAgICAvLyAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgLy8gICAvKiBoYXBweSBwYXRoICovIHAgPT50aGlzLmRycHZhcj1wLC8vYWxlcnQoIEpTT04uc3RyaW5naWZ5KCBwKSksXHJcbiAgICAgICAgICAvLyAgIC8qIGVycm9yIHBhdGggKi8gZSA9PiBjb25zb2xlLmxvZyhlKSxcclxuICAgICAgICAgIC8vICAgLyogb25Db21wbGV0ZSAqLyAoKSA9PiB0aGlzLnBvcHVsYXRlZHJwKCkpOy8ve3RoaXMubXltZXRob2QodGhpcy5kcnB2YXIpO30pOy8vdGhpcy5tc2dzLnB1c2goe3NldmVyaXR5OidpbmZvJywgc3VtbWFyeTonU3VjY2VzcycsIGRldGFpbDonRm9ybSBVcGRhdGUgU3VjY2Vzc2Z1bGx5OiAnICsgSlNPTi5zdHJpbmdpZnkoIHRoaXMuZHJwdmFyKSArICcgOiAnICsgdGhpcy5kcnB2YXIubGVuZ3RofSkpO1xyXG5cclxuICAgIFxyXG4gIH1cclxuICBvblJvd1NlbGVjdChldmVudDogYW55KXtcclxuICAgICAgICAgLy9JbmRpY2F0b3IgZm9yIGZvcm0gaXMgaW4gRWRpdCBtb2RlXHJcbiAgICAgICAgIHRoaXMubmV3cHJvamVjdD1mYWxzZTtcclxuICAgICAgICAgLy9Db3B5IG9mIHJvdyBzZWxlY3RlZFxyXG4gICAgICAgIC8vICB0aGlzLnByb2plY3Q9dGhpcy5zZWxlY3RlZFJvdztcclxuICAgICAgICAgbGV0IHRlbXBwcm9qOiBQcm9qZWN0O1xyXG4gICAgICAgICB0ZW1wcHJvaiA9IHRoaXMuc2VsZWN0ZWRSb3c7XHJcbiAgICAgICAgIC8vQ2FsbGluZyBXUyB0byBnZXQgdGhlIHNlbGVjdGVkIGRhdGEgZnJvbSBzZXJ2ZXIgREIgb2YgdGhlIHNlbGVjdGVkIHJvd1xyXG4gICAgICAgICB0aGlzLmxvY2FsU2VydmljZVxyXG4gICAgICAuZ2V0c2VsZWN0QWxsZmlsZVByb2plY3QodGVtcHByb2oucHJvamVjdF9pZClcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgLyogaGFwcHkgcGF0aCAqLyBwID0+IHRoaXMuZmlsZXVwbG9hZGFycj1wLFxyXG4gICAgICAgICAvKiBlcnJvciBwYXRoICovIGUgPT4gY29uc29sZS5sb2coIGUpLFxyXG4gICAgICAgICAvKiBvbkNvbXBsZXRlICovICgpID0+IGNvbnNvbGUubG9nKCdkb25lIGdldHNlbGVjdEFsbGZpbGV1cGxvYWRwcm9qZWN0OiAnICsgdGhpcy5maWxldXBsb2FkYXJyKSk7XHJcblxyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZygnb25Sb3dTZWxlY3Q6ICcgKyBKU09OLnN0cmluZ2lmeSAodGhpcy5wcm9qZWN0KSk7XHJcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKCdvblJvd1NlbGVjdCBmaWxldXBsb2FkYXJyOiAnICsgSlNPTi5zdHJpbmdpZnkgKHRoaXMuZmlsZXVwbG9hZGFycikpO1xyXG5cclxuICAgICAgICAgLy9DYWxsaW5nIFdTIHRvIGdldCB0aGUgc2VsZWN0ZWQgZGF0YSBmcm9tIHNlcnZlciBEQiBvZiB0aGUgc2VsZWN0ZWQgcm93XHJcbiAgICAgICAgdGhpcy5sb2NhbFNlcnZpY2VcclxuICAgICAgLmdldGVkaXQodGVtcHByb2oucHJvamVjdF9pZClcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgLyogaGFwcHkgcGF0aCAqLyBwID0+IHRoaXMucHJvamVjdD1wLFxyXG4gICAgICAgICAvKiBlcnJvciBwYXRoICovIGUgPT4gY29uc29sZS5sb2coIGUpLFxyXG4gICAgICAgICAvKiBvbkNvbXBsZXRlICovICgpID0+IHt0aGlzLmFmdGVyY2FsbGRhdGUoKTt9ICk7Ly9jb25zb2xlLmxvZygnZG9uZSBnZXRzZWxlY3RFZGl0cHJvamVjdDogJyArIHRoaXMucHJvamVjdCkpO1xyXG5cclxuICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gIH1cclxuICBhZnRlcmNhbGxkYXRlKCl7XHJcbiAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkoIHRoaXMucHJvamVjdCkpO1xyXG4gICAgYWxlcnQodGhpcy5wcm9qZWN0LnByb2plY3RfZW5kZGF0ZSk7XHJcbiAgICAgICAgIGFsZXJ0KG5ldyBEYXRlKE51bWJlcih0aGlzLnByb2plY3QucHJvamVjdF9lbmRkYXRlKSApKTtcclxuICAgICAgICAgYWxlcnQobmV3IERhdGUoTnVtYmVyKHRoaXMucHJvamVjdC5wcm9qZWN0X3N0YXJ0ZGF0ZSkgKSk7XHJcbiAgICB0aGlzLnN0YXJ0ZGF0ZSAgPSBuZXcgRGF0ZShOdW1iZXIodGhpcy5wcm9qZWN0LnByb2plY3Rfc3RhcnRkYXRlICkpO1xyXG4gICAgdGhpcy5lbmRkYXRlICA9IG5ldyBEYXRlKE51bWJlcih0aGlzLnByb2plY3QucHJvamVjdF9lbmRkYXRlICkpO1xyXG4gIH1cclxuXHJcbiAgLy9QcmVwYXJlIGZvciBKU09OIGZvciBmaWxlIHRvIGJlIHVwbG9hZGVkIHRvIHNlcnZlciBqdXN0IGFmdGVyIGZvcm0gc3VibWlzc2lvblxyXG4gIG9uRmluYWxGaWxlVXBsb2FkKCl7ICAgXHJcbiAgXHJcbiAgICAvLyBhbGVydCh0aGlzLnVwbG9hZGVkRmlsZXMubGVuZ3RoKTtcclxuICAgIGZvcihsZXQgaT0wO2k8dGhpcy51cGxvYWRlZEZpbGVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgbGV0IGZpbGVuYW1lPXRoaXMudXBsb2FkZWRGaWxlc1tpXS5uYW1lO1xyXG4gICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdGhpcy5maWxldXBsb2FkLmZpbGVOYW1lPWZpbGVuYW1lO1xyXG4gICAgICAgICAgdGhpcy5maWxldXBsb2FkLmZpbGVQYXRoPScnO1xyXG4gICAgICAgICAgdGhpcy5maWxldXBsb2FkLmZpbGVTdGF0dXM9J1llcyc7XHJcbiAgICAgICAgICB0aGlzLmZpbGV1cGxvYWQuZmlsZVR5cGU9J2ltZyc7XHJcbiAgICAgICAgICB0aGlzLmZpbGV1cGxvYWQudXBsb2FkZmlsZV9maWxlbmFtZT0nJztcclxuICAgICAgICAgLy8gYWxlcnQoXCJpbnNpZGVmaWxldXBsb2FkOiBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuZmlsZXVwbG9hZCkpO1xyXG4gICAgICAgICAgdGhpcy5maWxldXBsb2FkYXJyLnB1c2godGhpcy5maWxldXBsb2FkKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICBcclxuICB9IFxyXG5cclxuICAvLyBEYXRlIGNoYW5nZSBldmVudCB0byBmb3JtYXQgbmdtb2RlbCB0byBvdXIgZm9ybWF0IGRhdGUgYW5kIGNhbGxpbmcgcGlwZSBcclxuICAvLyBzdGFydGRhdGVjaGFuZ2UoKXtcclxuICAvLyAgIHRoaXMucHJvamVjdC5wcm9qbWlsZV9zdGFydGRhdGU9dGhpcy5teWRhdGUxLnBhcnNlKHRoaXMucHJvamVjdC5wcm9qbWlsZV9zdGFydGRhdGUpXHJcbiAgLy8gfVxyXG4gIC8vIGVuZGRhdGVjaGFuZ2UoKXtcclxuICAvLyAgIHRoaXMucHJvamVjdC5wcm9qbWlsZV9lbmRkYXRlPXRoaXMubXlkYXRlMS5wYXJzZSh0aGlzLnByb2plY3QucHJvam1pbGVfZW5kZGF0ZSlcclxuICAvLyB9XHJcblxyXG5cclxuICBvblN1Ym1pdCgpe1xyXG4gICAgICAvLyAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHRoaXMuc2VsZWN0ZWRSb3cpKTtcclxuICAgICAgICAvL2FsZXJ0KHRoaXMucHJvamVjdC5wcm9qZWN0X3N0YXJ0ZGF0ZSk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0LnByb2plY3Rfc3RhcnRkYXRlPXRoaXMubXlkYXRlMS5wYXJzZSh0aGlzLnN0YXJ0ZGF0ZSlcclxuICBcclxuICAgICAgICB0aGlzLnByb2plY3QucHJvamVjdF9lbmRkYXRlPXRoaXMubXlkYXRlMS5wYXJzZSh0aGlzLmVuZGRhdGUpXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5vbkZpbmFsRmlsZVVwbG9hZCgpO1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1zZ3MgPSBbXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnByb2plY3QpKTtcclxuICAgICAgICB0aGlzLm1zZ3MucHVzaCh7c2V2ZXJpdHk6J2luZm8nLCBzdW1tYXJ5OidQbGVhc2Ugd2FpdCcsIGRldGFpbDonRm9ybSBTdWJtaXR0ZWQgU3VjY2Vzc2Z1bGx5Li4gUGxlYXNlIHdhaXQuLid9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZygnb25TdWJtaXQgb25Sb3dTZWxlY3Q6ICcgKyBKU09OLnN0cmluZ2lmeSAodGhpcy5wcm9qZWN0KSk7XHJcbiAgICAgICAgLy8gIGNvbnNvbGUubG9nKCdvblN1Ym1pdCBvblJvd1NlbGVjdCBmaWxldXBsb2FkYXJyOiAnICsgSlNPTi5zdHJpbmdpZnkgKHRoaXMuZmlsZXVwbG9hZGFycikpO1xyXG5cclxuICAgICAgICBpZih0aGlzLm5ld3Byb2plY3Qpey8vQWRkIG5ldyBlbnRyeSBzYXZpbmdcclxuICAgICAgICAgICB0aGlzLmxvY2FsU2VydmljZVxyXG4gICAgICAgICAgLmluc2VydCh0aGlzLnByb2plY3QsdGhpcy5maWxldXBsb2FkYXJyKVxyXG4gICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgLyogaGFwcHkgcGF0aCAqLyBwID0+IHRoaXMucHJvamVjdHMgPSBwLFxyXG4gICAgICAgICAgICAvKiBlcnJvciBwYXRoICovIGUgPT4gY29uc29sZS5sb2coZSksXHJcbiAgICAgICAgICAgIC8qIG9uQ29tcGxldGUgKi8gKCkgPT4gdGhpcy5tc2dzLnB1c2goe3NldmVyaXR5OidpbmZvJywgc3VtbWFyeTonU3VjY2VzcycsIGRldGFpbDonRm9ybSBVcGRhdGUgU3VjY2Vzc2Z1bGx5J30pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXsgLy8gdXBkYXRlIGVudHJ5IHNhdmluZ1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3Q6ICcgKyBKU09OLnN0cmluZ2lmeSggdGhpcy5wcm9qZWN0KSArICcgLCBmOicgKyAgSlNPTi5zdHJpbmdpZnkoIHRoaXMuZmlsZXVwbG9hZGFycikpO1xyXG4gICAgICAgICAgdGhpcy5sb2NhbFNlcnZpY2VcclxuICAgICAgICAgIC51cGRhdGUodGhpcy5wcm9qZWN0LHRoaXMuZmlsZXVwbG9hZGFycilcclxuICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIC8qIGhhcHB5IHBhdGggKi8gcCA9PiB0aGlzLnByb2plY3RzID0gcCxcclxuICAgICAgICAgICAgLyogZXJyb3IgcGF0aCAqLyBlID0+IGNvbnNvbGUubG9nKGUpLFxyXG4gICAgICAgICAgICAvKiBvbkNvbXBsZXRlICovICgpID0+IHRoaXMubXNncy5wdXNoKHtzZXZlcml0eTonaW5mbycsIHN1bW1hcnk6J1N1Y2Nlc3MnLCBkZXRhaWw6J0Zvcm0gVXBkYXRlIFN1Y2Nlc3NmdWxseSd9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5tc2dzID0gW107XHJcbiAgICAgICAgICB0aGlzLm1zZ3MucHVzaCh7c2V2ZXJpdHk6J2luZm8nLCBzdW1tYXJ5OidTdWNjZXNzJywgZGV0YWlsOidGb3JtIFVwZGF0ZSBTdWNjZXNzZnVsbHknfSk7XHJcbiAgfVxyXG5cclxuICAvL3VwbG9hZCBmaWxlcyB0byB0aGUgc2VydmVyXHJcbm9uVXBsb2FkKGV2ZW50OiBhbnkpe1xyXG4gIC8vYWxlcnQoZXZlbnQuZmlsZXMpO1xyXG4gIGZvcihsZXQgZmlsZSBvZiBldmVudC5maWxlcykge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLnVwbG9hZGVkRmlsZXMucHVzaChmaWxlKTtcclxuICB9XHJcbiAgXHJcbiAgLy9jb25zb2xlLmxvZyhldmVudC54aHIucmVzcG9uc2UpO1xyXG4gIHRoaXMubXNncyA9IFtdO1xyXG4gIHRoaXMubXNncy5wdXNoKHtzZXZlcml0eTogJ2luZm8nLCBzdW1tYXJ5OiAnRmlsZSBVcGxvYWRlZCcsIGRldGFpbDogJyd9KTtcclxufVxyXG5cclxuICAvL0ZpbGUgdXBsb2FkIGV2ZW50XHJcbm9uQmVmb3JlVXBsb2FkKGV2ZW50IDphbnkgKXtcclxuICBldmVudC54aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDttdWx0aXBhcnQvZm9ybS1kYXRhOycpO1xyXG4gIGNvbnNvbGUubG9nKFwibWl0aCBoZXJlOlwiKTtcclxufVxyXG5cclxuLy9Gb3JtIGluaXRcclxubmdPbkluaXQoKSB7IFxyXG4gICAgICAvL0NsZWFyIGV2ZW50IGFuZCBpbml0YWxpemUgb2JqZWN0c1xyXG4gICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBhbGVydCggdGhpcy5zdGFydGRhdGUuZ2V0RGF5ICsgJy8nICt0aGlzLnN0YXJ0ZGF0ZS5nZXRNb250aCArICcvJyArdGhpcy5zdGFydGRhdGUuZ2V0RnVsbFllYXIpOyBcclxuICAgICAgLy8gYWxlcnQoICdudW1iZXI6ICcgKyB0aGlzLm15Y3VyLnBhcnNlKFwiMTBcIikpO1xyXG4gICAgICAvLyBsZXQgYmw6IGJvb2xlYW47XHJcbiAgICAgIC8vIGJsID0gIHRoaXMuZW1haWx2YWwucGFyc2UoJ2F0dWxrdWx2ZWdtYWlsLmNvbScsJycpO1xyXG4gICAgICAvLyBhbGVydChibCApO1xyXG5cclxuICAgICAgLy9DcmVhdGUgdXNlcmZvcm0gYW5kIGFwcGx5IFZhbGlkYXRpb25cclxuICAgICAgLy8gYWxlcnQodGhpcy5teWRhdGUxLnBhcnNlKCAnMjAxNi0xMi0xM1QxODozMDowMC4wMDBaJykpO1xyXG4gICAgICB0aGlzLnVzZXJmb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgICduYW1lJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsQ3VzdG9tVmFsaWRhdG9yLmlzRW1haWxWYWxpZF0pKSxcclxuICAgICAgICAgICAgICdidWRnZXQnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAgICAgICAgJ3JlbWFya3MnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAgICAgICAgJ21hbmhvdXJzJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgICAgICAgICdzdGFydGRhdGV2JzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgICAgICAgICdlbmRkYXRldic6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICAgICAgICAndGltZWZyYW1lJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgICAgICAgICdjb21wbGV0ZWQnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAgICAgICAgJ2NvbW1pc3Npb24nOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgICAgICAgICdkYXlzcmVxdWlyZWQnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvL3ByZWxvYWQgZGF0YSBHcmlkIHJlcXVpcmVkIFxyXG4gICAgICAgIHRoaXMubG9jYWxTZXJ2aWNlXHJcbiAgICAgIC5nZXRhbGwoKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAvKiBoYXBweSBwYXRoICovIHAgPT4gdGhpcy5wcm9qZWN0cz1wLFxyXG4gICAgICAgICAvKiBlcnJvciBwYXRoICovIGUgPT4gY29uc29sZS5sb2coIGUpLFxyXG4gICAgICAgICAvKiBvbkNvbXBsZXRlICovICgpID0+IHRoaXMucHJvY2Vzc2RhdGEoKSk7XHJcblxyXG4gICAgICAgICBcclxuICAgICAgICBcclxuICB9XHJcbiAgcHJvY2Vzc2RhdGEoKXtcclxuICAgIFxyXG5cclxuICB9XHJcbiAgcG9wdWxhdGVkcnAoKXsgLy9wb3B1bGF0ZSBkcm9wZG93bnMgb24gcGFnZSBsb2FkLiBieSB1c2luZyBwdXNoIGFuZCBTZWxlY3RJdGVtXHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuZHJwdmFyLmxlbmd0aCk7XHJcbiAgICAgICAgZm9yKHZhciBpID0wO2k8dGhpcy5kcnB2YXIubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAvL2FsZXJ0KHRoaXMuZHJwdmFyW2ldLmxhYmVsZCArICcgOiAnICArIHRoaXMuZHJwdmFyW2ldLnZhbHVlZCk7XHJcbiAgICAgICAgICAgdGhpcy5kcnBwcm9qZWN0LnB1c2goe2xhYmVsOnRoaXMuZHJwdmFyW2ldLmxhYmVsZCAsIHZhbHVlOnRoaXMuZHJwdmFyW2ldLnZhbHVlZH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBhbGVydChKU09OLnN0cmluZ2lmeSh0aGlzLmRycHByb2plY3QpKTtcclxuXHJcbiAgfVxyXG5cclxuICAvL0Ryb3Bkb3duIGNoYW5nZSBldmVudCBjYXB0dXJlXHJcbiAgZHJwY2hhbmdlKGV2ZW50czE6IGFueSl7XHJcbiAgICBhbGVydChldmVudHMxLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8vSnVzdCBhIG1ldGhvZCB0byBjYWxsIHVzZXIgZm9ybSBkYXRhIG9uIGZvcm0gc3VibWl0XHJcbiAgZ2V0IGRpYWdub3N0aWMoKSB7IHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXJmb3JtLnZhbHVlKTsgfVxyXG5cclxuIH1cclxuIl19
