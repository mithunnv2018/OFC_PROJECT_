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
var index_1 = require('../shared/contactinfo/index');
var app_component_1 = require('../app.component');
var ContactinfoComponent = (function () {
    function ContactinfoComponent(router, localService, appComponent, fb, route, mycur, mydate1, emailval) {
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
        this.ofcmembersGrid = [];
        this.drpProjectId = [];
        this.drpStateId = [];
        this.drpCityId = [];
        this.uploadedFiles = [];
        this.fileuploadarr = [];
        this.localService.getCountry('hj').subscribe(function (p) { _this.drpProjectId = p; _this.drpProjectId.unshift({ label: "Select", value: "1" }); }, function (e) { return console.log(e); }, function () { });
    }
    ContactinfoComponent.prototype.ngOnInit = function () {
        this.clear();
        var data = sessionStorage.getItem('memberdetails');
        var ofcmemsession = JSON.parse(data);
        var ofcmemsession_id = ofcmemsession.ofcmemsession_id;
        var memberdata = sessionStorage.getItem(ofcmemsession_id);
        var viewofcmemsession = JSON.parse(memberdata);
        this.ofcmembers.city_id = viewofcmemsession.city_id;
        this.ofcmembers.ofcmembers_address1 = viewofcmemsession.ofcmembers_address1;
        this.ofcmembers.ofcmembers_address2 = viewofcmemsession.ofcmembers_address2;
        this.ofcmembers.ofcmembers_pincode = viewofcmemsession.ofcmembers_pincode;
        this.ofcmembers.ofcmembers_contactnos = viewofcmemsession.ofcmembers_contactnos;
        this.userform = this.fb.group({
            'ofcmembers_fname': new forms_1.FormControl('', forms_1.Validators.required),
            'ofcmembers_mname': new forms_1.FormControl('', forms_1.Validators.required),
            'ofcmembers_lname': new forms_1.FormControl('', forms_1.Validators.required),
            'ofcmembers_name': new forms_1.FormControl('', forms_1.Validators.required),
            'ofcmember_type': new forms_1.FormControl('', forms_1.Validators.required),
            'city_id': new forms_1.FormControl('', forms_1.Validators.required),
            'ofcmembers_emailid': new forms_1.FormControl('', forms_1.Validators.required),
            'ofcmembers_password': new forms_1.FormControl('', forms_1.Validators.required),
            'ofcmembers_address1': new forms_1.FormControl('', forms_1.Validators.required),
            'ofcmembers_address2': new forms_1.FormControl('', forms_1.Validators.required),
            'ofcmembers_pincode': new forms_1.FormControl('', forms_1.Validators.required),
            'ofcmembers_contactnos': new forms_1.FormControl('', forms_1.Validators.required),
            'country_id': new forms_1.FormControl('', forms_1.Validators.required),
            'state_id': new forms_1.FormControl('', forms_1.Validators.required)
        });
    };
    ContactinfoComponent.prototype.clear = function () {
        this.newofcmembers = true;
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
        this.fileupload = {
            fileName: '',
            fileType: '',
            filePath: '',
            fileStatus: '',
            uploadfile_filename: ''
        };
    };
    ContactinfoComponent.prototype.populateStates = function (events1) {
        var _this = this;
        this.ngModelcountryId = events1.value;
        this.localService.getState(this.ngModelcountryId).subscribe(function (p) { return _this.drpStateId = p; }, function (e) { return console.log(e); }, function () { });
    };
    ContactinfoComponent.prototype.populateCity = function (events1) {
        var _this = this;
        this.ngModelStateId = events1.value;
        this.localService.getCity(this.ngModelStateId).subscribe(function (p) { return _this.drpCityId = p; }, function (e) { return console.log(e); }, function () { });
    };
    ContactinfoComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.msgs = [];
        var data = sessionStorage.getItem('memberdetails');
        var ofcmemsession = JSON.parse(data);
        var ofcmemsession_id = ofcmemsession.ofcmemsession_id;
        if (!this.validatePostaJob()) {
        }
        else {
            this.localService.contactinfo(ofcmemsession_id, this.ofcmembers)
                .subscribe(function (p) { return _this.commonerror = p; }, function (e) { return console.log(e); }, function () {
                var isSuccess = _this.commonerror.Isuccess;
                if (isSuccess === 1) {
                    _this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Contact Info Added Successfully' });
                    _this.localService
                        .getViewOfcMember(ofcmemsession_id)
                        .subscribe(function (p) { return _this.viewofcmemsession = p; }, function (e) { return console.log(e); }, function () {
                        var viewofcmemsession = _this.viewofcmemsession;
                        sessionStorage.setItem(ofcmemsession_id, JSON.stringify(viewofcmemsession));
                    });
                }
                else {
                    _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Contact Info Add Failed' });
                }
            });
        }
    };
    ContactinfoComponent.prototype.validatePostaJob = function () {
        var bool = true;
        var address1 = this.ofcmembers.ofcmembers_address1;
        var address2 = this.ofcmembers.ofcmembers_address2;
        var pincode = this.ofcmembers.ofcmembers_pincode;
        var contactno = this.ofcmembers.ofcmembers_contactnos;
        if (address1 === '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Please Enter Address1' });
            return bool = false;
        }
        if (address2 === '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Please Enter Address2' });
            return bool = false;
        }
        if (pincode === '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Please Enter Pincode' });
            return bool = false;
        }
        if (contactno === '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Please Enter Contact No' });
            return bool = false;
        }
        return bool;
    };
    ContactinfoComponent.prototype.onUpload = function (event) {
        this.uploadedFiles = [];
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
            break;
        }
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    };
    ContactinfoComponent.prototype.onFinalFileUpload = function () {
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
    ContactinfoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-contactinfo',
            templateUrl: 'contactinfo.component.html',
            styleUrls: ['contactinfo.component.css'],
            providers: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.ContactinfoService, app_component_1.AppComponent, forms_1.FormBuilder, router_1.ActivatedRoute, first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate])
    ], ContactinfoComponent);
    return ContactinfoComponent;
}());
exports.ContactinfoComponent = ContactinfoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb250YWN0aW5mby9jb250YWN0aW5mby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQVNqRix1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUd6RCwyQkFBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUc1RCxrQ0FBNkIsbUNBQW1DLENBQUMsQ0FBQTtBQUNqRSxtQ0FBOEIsb0NBQW9DLENBQUMsQ0FBQTtBQUduRSxzQkFBbUMsNkJBQTZCLENBQUMsQ0FBQTtBQUVqRSw4QkFBNkIsa0JBQWtCLENBQUMsQ0FBQTtBQW1CaEQ7SUE2QkUsOEJBQ1UsTUFBYyxFQUNkLFlBQWdDLEVBQ2hDLFlBQTBCLEVBQzFCLEVBQWUsRUFDZixLQUFxQixFQUNyQixLQUFxQixFQUNyQixPQUFxQixFQUNyQixRQUF1QjtRQXJDbkMsaUJBMFFDO1FBNU9XLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQXBDakMsU0FBSSxHQUFjLEVBQUUsQ0FBQztRQU9yQixtQkFBYyxHQUFpQixFQUFFLENBQUM7UUFDbEMsaUJBQVksR0FBaUIsRUFBRSxDQUFDO1FBQ2hDLGVBQVUsR0FBaUIsRUFBRSxDQUFDO1FBQzlCLGNBQVMsR0FBaUIsRUFBRSxDQUFDO1FBTzdCLGtCQUFhLEdBQVUsRUFBRSxDQUFDO1FBQzFCLGtCQUFhLEdBQWlCLEVBQUUsQ0FBQztRQXFCL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFB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LENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ25ELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBRzFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztZQUV6QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFM0MsQ0FBQztJQUVILENBQUM7SUFqUkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztZQUN4QyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBRTFCLENBQUM7OzRCQUFBO0lBMlFGLDJCQUFDO0FBQUQsQ0ExUUEsQUEwUUMsSUFBQTtBQTFRWSw0QkFBb0IsdUJBMFFoQyxDQUFBIiwiZmlsZSI6ImFwcC9jb250YWN0aW5mby9jb250YWN0aW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IERhdGFUYWJsZU1vZHVsZSwgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBEaWFsb2dNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBJbnB1dFRleHRNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBDYWxlbmRhck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNZXNzYWdlc01vZHVsZSwgTWVzc2FnZSwgR3Jvd2wgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBQYW5lbE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IElucHV0VGV4dGFyZWFNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBNeUN1cnJlbmN5UGlwZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9maXJzdC5waXBlJztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IFNlbGVjdEl0ZW0gfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZSc7XHJcbmltcG9ydCB7IEN1c3RvbVZhbGlkYXRvciB9IGZyb20gJy4uL3NoYXJlZC92YWxpZGF0b3JzL3ZhbGlkYXRvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkIH0gZnJvbSAnLi9maWxldXBsb2FkJztcclxuaW1wb3J0IHsgQ29udGFjdGluZm9TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2NvbnRhY3RpbmZvL2luZGV4JztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4uL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPRkNNZW1iZXJzIH0gZnJvbSAnLi9vZmNtZW1iZXJzJztcclxuaW1wb3J0IHsgQ29tbW9uRXJyb3IgfSBmcm9tICcuL2NvbW1vbmVycm9yJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQge09GQ21lbVNlc3Npb259IGZyb20gJy4vb2ZjbWVtc2Vzc2lvbic7XHJcbi8vYXMgZG9uZSBvbiAzIGZlYiAyMDE3IGJ5IE1hbmRhciB0byBnZXQgY29udGFjdCBkYXRhXHJcbmltcG9ydCB7Vmlld09GQ21lbVNlc3Npb259IGZyb20gJy4vdmlld29mY21lbXNlc3Npb24nO1xyXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBBYm91dENvbXBvbmVudC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzZC1jb250YWN0aW5mbycsXHJcbiAgdGVtcGxhdGVVcmw6ICdjb250YWN0aW5mby5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2NvbnRhY3RpbmZvLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtBcHBDb21wb25lbnRdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGFjdGluZm9Db21wb25lbnQge1xyXG4gIG1zZ3M6IE1lc3NhZ2VbXSA9IFtdO1xyXG4gIHVzZXJmb3JtOiBGb3JtR3JvdXA7XHJcbiAgYm9vbGNvbnRhY3RpbmZvOiBib29sZWFuO1xyXG5cclxuICBvZmNtZW1iZXJzOiBPRkNNZW1iZXJzO1xyXG4gIG5ld29mY21lbWJlcnM6IGJvb2xlYW47XHJcblxyXG4gIG9mY21lbWJlcnNHcmlkOiBPRkNNZW1iZXJzW10gPSBbXTtcclxuICBkcnBQcm9qZWN0SWQ6IFNlbGVjdEl0ZW1bXSA9IFtdO1xyXG4gIGRycFN0YXRlSWQ6IFNlbGVjdEl0ZW1bXSA9IFtdO1xyXG4gIGRycENpdHlJZDogU2VsZWN0SXRlbVtdID0gW107XHJcblxyXG4gIG5nTW9kZWxjb3VudHJ5SWQ6IHN0cmluZztcclxuICBuZ01vZGVsU3RhdGVJZDogc3RyaW5nO1xyXG5cclxuICBzdWJtaXR0ZWQ6IGJvb2xlYW47XHJcblxyXG4gIHVwbG9hZGVkRmlsZXM6IGFueVtdID0gW107XHJcbiAgZmlsZXVwbG9hZGFycjogRmlsZVVwbG9hZFtdID0gW107XHJcbiAgZmlsZXVwbG9hZDogRmlsZVVwbG9hZDtcclxuICBteWJhc2V1cmw6IHN0cmluZztcclxuXHJcbiAgLy9hcyBkb25lIG9uIDI0IGphbiAyMDE3IGJ5IE1hbmRhciBmb3IgY29udGFjdCBpbmZvIHJlc3VsdFxyXG4gIGNvbW1vbmVycm9yOiBDb21tb25FcnJvcjtcclxuXHJcbiAgLy9hcyBkb25lIG9uIDMgZmViIDIwMTcgYnkgTWFuZGFyIGZvciBzZXR0aW5nIHZpZXdvZmNtZW1zZXNzaW9uXHJcbiAgdmlld29mY21lbXNlc3Npb24gOiBWaWV3T0ZDbWVtU2Vzc2lvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBsb2NhbFNlcnZpY2U6IENvbnRhY3RpbmZvU2VydmljZSxcclxuICAgIHByaXZhdGUgYXBwQ29tcG9uZW50OiBBcHBDb21wb25lbnQsXHJcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBteWN1cjogTXlDdXJyZW5jeVBpcGUsXHJcbiAgICBwcml2YXRlIG15ZGF0ZTE6IE15RGF0ZUZvcm1hdCxcclxuICAgIHByaXZhdGUgZW1haWx2YWw6IEVtYWlsVmFsaWRhdGVcclxuICApIHtcclxuXHJcbiAgICB0aGlzLmxvY2FsU2VydmljZS5nZXRDb3VudHJ5KCdoaicpLnN1YnNjcmliZShwID0+IHsgdGhpcy5kcnBQcm9qZWN0SWQgPSBwOyB0aGlzLmRycFByb2plY3RJZC51bnNoaWZ0KHsgbGFiZWw6IFwiU2VsZWN0XCIsIHZhbHVlOiBcIjFcIiB9KSB9LCBlID0+IGNvbnNvbGUubG9nKGUpLCAoKSA9PiB7fSk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIHRoaXMuY2xlYXIoKTtcclxuXHJcbiAgICAvLyBHZXQgc2F2ZWQgZGF0YSBmcm9tIHNlc3Npb25TdG9yYWdlXHJcbiAgICB2YXIgZGF0YSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ21lbWJlcmRldGFpbHMnKTtcclxuXHJcbiAgICBsZXQgb2ZjbWVtc2Vzc2lvbjogT0ZDbWVtU2Vzc2lvbiA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICBsZXQgb2ZjbWVtc2Vzc2lvbl9pZCA9IG9mY21lbXNlc3Npb24ub2ZjbWVtc2Vzc2lvbl9pZDtcclxuXHJcbiAgICBsZXQgbWVtYmVyZGF0YSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0ob2ZjbWVtc2Vzc2lvbl9pZCk7XHJcbiAgICBsZXQgdmlld29mY21lbXNlc3Npb246IFZpZXdPRkNtZW1TZXNzaW9uID0gSlNPTi5wYXJzZShtZW1iZXJkYXRhKTtcclxuICAgIHRoaXMub2ZjbWVtYmVycy5jaXR5X2lkID0gdmlld29mY21lbXNlc3Npb24uY2l0eV9pZDtcclxuICAgIHRoaXMub2ZjbWVtYmVycy5vZmNtZW1iZXJzX2FkZHJlc3MxID0gdmlld29mY21lbXNlc3Npb24ub2ZjbWVtYmVyc19hZGRyZXNzMTtcclxuICAgIHRoaXMub2ZjbWVtYmVycy5vZmNtZW1iZXJzX2FkZHJlc3MyID0gdmlld29mY21lbXNlc3Npb24ub2ZjbWVtYmVyc19hZGRyZXNzMjtcclxuICAgIHRoaXMub2ZjbWVtYmVycy5vZmNtZW1iZXJzX3BpbmNvZGUgPSB2aWV3b2ZjbWVtc2Vzc2lvbi5vZmNtZW1iZXJzX3BpbmNvZGU7XHJcbiAgICB0aGlzLm9mY21lbWJlcnMub2ZjbWVtYmVyc19jb250YWN0bm9zID0gdmlld29mY21lbXNlc3Npb24ub2ZjbWVtYmVyc19jb250YWN0bm9zO1xyXG5cclxuXHJcbiAgICB0aGlzLnVzZXJmb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICdvZmNtZW1iZXJzX2ZuYW1lJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ29mY21lbWJlcnNfbW5hbWUnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnb2ZjbWVtYmVyc19sbmFtZSc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICdvZmNtZW1iZXJzX25hbWUnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnb2ZjbWVtYmVyX3R5cGUnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnY2l0eV9pZCc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICdvZmNtZW1iZXJzX2VtYWlsaWQnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnb2ZjbWVtYmVyc19wYXNzd29yZCc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICdvZmNtZW1iZXJzX2FkZHJlc3MxJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ29mY21lbWJlcnNfYWRkcmVzczInOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnb2ZjbWVtYmVyc19waW5jb2RlJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ29mY21lbWJlcnNfY29udGFjdG5vcyc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICdjb3VudHJ5X2lkJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ3N0YXRlX2lkJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMubmV3b2ZjbWVtYmVycyA9IHRydWU7XHJcbiAgICB0aGlzLm9mY21lbWJlcnMgPSB7XHJcbiAgICAgIG9mY21lbWJlcnNfaWQ6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2ZuYW1lOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19tbmFtZTogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfbG5hbWU6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX25hbWU6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJfdHlwZTogJycsXHJcbiAgICAgIGNpdHlfaWQ6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2VtYWlsaWQ6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX3Bhc3N3b3JkOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19hZGRyZXNzMTogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfYWRkcmVzczI6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX3BpbmNvZGU6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2NvbnRhY3Rub3M6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2F2YWlsYWJpbGl0eTogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfZGlzcGxheW5hbWU6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2Rlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19zZWxmcmF0aW5nOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19leHBlcmllbmNlbGV2ZWw6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2dlbmRlcjogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfZG9iOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19ub3NvZnRlYW1tZW1iZXJzOiAnJyxcclxuICAgICAgY3JlYXRlZGF0ZTogJycsXHJcbiAgICAgIG1vZGlmaWVkZGF0ZTogJycsXHJcbiAgICAgIHN0YXR1czogJydcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZpbGV1cGxvYWQgPSB7XHJcbiAgICAgIGZpbGVOYW1lOiAnJyxcclxuICAgICAgZmlsZVR5cGU6ICcnLFxyXG4gICAgICBmaWxlUGF0aDogJycsXHJcbiAgICAgIGZpbGVTdGF0dXM6ICcnLFxyXG4gICAgICB1cGxvYWRmaWxlX2ZpbGVuYW1lOiAnJ1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHBvcHVsYXRlU3RhdGVzKGV2ZW50czE6IGFueSkge1xyXG5cclxuICAgIHRoaXMubmdNb2RlbGNvdW50cnlJZCA9IGV2ZW50czEudmFsdWU7XHJcbiAgICB0aGlzLmxvY2FsU2VydmljZS5nZXRTdGF0ZSh0aGlzLm5nTW9kZWxjb3VudHJ5SWQpLnN1YnNjcmliZShwID0+IHRoaXMuZHJwU3RhdGVJZCA9IHAsIGUgPT4gY29uc29sZS5sb2coZSksICgpID0+IHt9KTtcclxuICB9XHJcblxyXG4gIHBvcHVsYXRlQ2l0eShldmVudHMxOiBhbnkpIHtcclxuXHJcbiAgICB0aGlzLm5nTW9kZWxTdGF0ZUlkID0gZXZlbnRzMS52YWx1ZTtcclxuICAgIHRoaXMubG9jYWxTZXJ2aWNlLmdldENpdHkodGhpcy5uZ01vZGVsU3RhdGVJZCkuc3Vic2NyaWJlKHAgPT4gdGhpcy5kcnBDaXR5SWQgPSBwLCBlID0+IGNvbnNvbGUubG9nKGUpLCAoKSA9PiB7fSk7XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCgpIHtcclxuXHJcblxyXG4gICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5tc2dzID0gW107XHJcbiAgICAvL3RoaXMub2ZjbWVtYmVycy5jaXR5X2lkPScxJztcclxuICAgICAvL3JldHJpZXZlIG1lbWJlcnNlc3Npb25pZCBmcm9tIHN0b3JhZ2VcclxuICAgIC8vIEdldCBzYXZlZCBkYXRhIGZyb20gc2Vzc2lvblN0b3JhZ2VcclxuICAgIHZhciBkYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbWVtYmVyZGV0YWlscycpO1xyXG5cclxuICAgXHJcbiAgICBsZXQgb2ZjbWVtc2Vzc2lvbjogT0ZDbWVtU2Vzc2lvbiA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICBsZXQgb2ZjbWVtc2Vzc2lvbl9pZCA9IG9mY21lbXNlc3Npb24ub2ZjbWVtc2Vzc2lvbl9pZDtcclxuXHJcbiAgICBcclxuICAgIGlmICghdGhpcy52YWxpZGF0ZVBvc3RhSm9iKCkpIHtcclxuICAgICBcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG5cclxuICAgICAgdGhpcy5sb2NhbFNlcnZpY2UuY29udGFjdGluZm8ob2ZjbWVtc2Vzc2lvbl9pZCx0aGlzLm9mY21lbWJlcnMpXHJcbiAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgLyogaGFwcHkgcGF0aCAqLyBwID0+IHRoaXMuY29tbW9uZXJyb3IgPSBwLFxyXG4gICAgICAgICAgICAvKiBlcnJvciBwYXRoICovIGUgPT4gY29uc29sZS5sb2coZSksXHJcbiAgICAgICAgICAgIC8qIG9uQ29tcGxldGUgKi8oKSA9PiB7XHJcblxyXG4gICAgICAgICAgbGV0IGlzU3VjY2VzczogYW55ID0gdGhpcy5jb21tb25lcnJvci5Jc3VjY2VzcztcclxuICAgICAgICAgXHJcbiAgICAgICAgICBpZiAoaXNTdWNjZXNzID09PSAxKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbXlwcm9maWxlJ10pO1xyXG4gICAgICAgICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnaW5mbycsIHN1bW1hcnk6ICdTdWNjZXNzJywgZGV0YWlsOiAnQ29udGFjdCBJbmZvIEFkZGVkIFN1Y2Nlc3NmdWxseScgfSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IG9mY3Nlc3Npb25pZDpzdHJpbmcgPSB0aGlzLm9mY21lbXNlc3Npb24ub2ZjbWVtc2Vzc2lvbl9pZDtcclxuICAgICAgICAgICAgICB0aGlzLmxvY2FsU2VydmljZVxyXG4gICAgICAgICAgLmdldFZpZXdPZmNNZW1iZXIob2ZjbWVtc2Vzc2lvbl9pZClcclxuICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBwID0+IHRoaXMudmlld29mY21lbXNlc3Npb24gPSBwLFxyXG4gICAgICAgICAgICAvKiBlcnJvciBwYXRoICovIGUgPT4gY29uc29sZS5sb2coZSksXHJcbiAgICAgICAgICAgIC8qIG9uQ29tcGxldGUgKi8gKCk9PntcclxuICAgICAgICAgICAgICBsZXQgdmlld29mY21lbXNlc3Npb246YW55ID0gdGhpcy52aWV3b2ZjbWVtc2Vzc2lvbjtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0ob2ZjbWVtc2Vzc2lvbl9pZCwgSlNPTi5zdHJpbmdpZnkgKHZpZXdvZmNtZW1zZXNzaW9uKSk7XHJcblxyXG4gICAgICAgICAgICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9teXByb2ZpbGUnXSk7XHJcbiAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIHN1bW1hcnk6ICdFcnJvciBNZXNzYWdlJywgZGV0YWlsOiAnQ29udGFjdCBJbmZvIEFkZCBGYWlsZWQnIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgIC8vdGhpcy5jbGVhcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVQb3N0YUpvYigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XHJcbiAgICBsZXQgYm9vbDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBsZXQgYWRkcmVzczEgPSB0aGlzLm9mY21lbWJlcnMub2ZjbWVtYmVyc19hZGRyZXNzMTtcclxuICAgIGxldCBhZGRyZXNzMiA9IHRoaXMub2ZjbWVtYmVycy5vZmNtZW1iZXJzX2FkZHJlc3MyO1xyXG4gICAgbGV0IHBpbmNvZGUgPSB0aGlzLm9mY21lbWJlcnMub2ZjbWVtYmVyc19waW5jb2RlO1xyXG5cclxuICAgIGxldCBjb250YWN0bm8gPSB0aGlzLm9mY21lbWJlcnMub2ZjbWVtYmVyc19jb250YWN0bm9zO1xyXG5cclxuICAgIGlmIChhZGRyZXNzMSA9PT0gJycpIHtcclxuICAgICAgdGhpcy5tc2dzID0gW107XHJcbiAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIHN1bW1hcnk6ICdFcnJvciBNZXNzYWdlJywgZGV0YWlsOiAnUGxlYXNlIEVudGVyIEFkZHJlc3MxJyB9KTtcclxuXHJcbiAgICAgIHJldHVybiBib29sID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoYWRkcmVzczIgPT09ICcnKSB7XHJcbiAgICAgIHRoaXMubXNncyA9IFtdO1xyXG4gICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBzdW1tYXJ5OiAnRXJyb3IgTWVzc2FnZScsIGRldGFpbDogJ1BsZWFzZSBFbnRlciBBZGRyZXNzMicgfSk7XHJcblxyXG4gICAgICByZXR1cm4gYm9vbCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHBpbmNvZGUgPT09ICcnKSB7XHJcbiAgICAgIHRoaXMubXNncyA9IFtdO1xyXG4gICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBzdW1tYXJ5OiAnRXJyb3IgTWVzc2FnZScsIGRldGFpbDogJ1BsZWFzZSBFbnRlciBQaW5jb2RlJyB9KTtcclxuXHJcbiAgICAgIHJldHVybiBib29sID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoY29udGFjdG5vID09PSAnJykge1xyXG4gICAgICB0aGlzLm1zZ3MgPSBbXTtcclxuICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgc3VtbWFyeTogJ0Vycm9yIE1lc3NhZ2UnLCBkZXRhaWw6ICdQbGVhc2UgRW50ZXIgQ29udGFjdCBObycgfSk7XHJcblxyXG4gICAgICByZXR1cm4gYm9vbCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBib29sO1xyXG4gIH1cclxuXHJcblxyXG4gIG9uVXBsb2FkKGV2ZW50OiBhbnkpIHtcclxuXHJcbiAgICB0aGlzLnVwbG9hZGVkRmlsZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGZpbGUgb2YgZXZlbnQuZmlsZXMpIHtcclxuXHJcbiAgICAgIHRoaXMudXBsb2FkZWRGaWxlcy5wdXNoKGZpbGUpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcblxyXG4gICAgdGhpcy5tc2dzID0gW107XHJcbiAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnaW5mbycsIHN1bW1hcnk6ICdGaWxlIFVwbG9hZGVkJywgZGV0YWlsOiAnJyB9KTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgb25GaW5hbEZpbGVVcGxvYWQoKSB7XHJcblxyXG4gICAgLy8gYWxlcnQodGhpcy51cGxvYWRlZEZpbGVzLmxlbmd0aCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudXBsb2FkZWRGaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLnVwbG9hZGVkRmlsZXNbaV0ubmFtZTtcclxuXHJcblxyXG4gICAgICB0aGlzLmZpbGV1cGxvYWQuZmlsZU5hbWUgPSBmaWxlbmFtZTtcclxuICAgICAgdGhpcy5maWxldXBsb2FkLmZpbGVQYXRoID0gJyc7XHJcbiAgICAgIHRoaXMuZmlsZXVwbG9hZC5maWxlU3RhdHVzID0gJ1llcyc7XHJcbiAgICAgIHRoaXMuZmlsZXVwbG9hZC5maWxlVHlwZSA9ICdpbWcnO1xyXG4gICAgICB0aGlzLmZpbGV1cGxvYWQudXBsb2FkZmlsZV9maWxlbmFtZSA9ICcnO1xyXG4gICAgICAvLyBhbGVydChcImluc2lkZWZpbGV1cGxvYWQ6IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5maWxldXBsb2FkKSk7XHJcbiAgICAgIHRoaXMuZmlsZXVwbG9hZGFyci5wdXNoKHRoaXMuZmlsZXVwbG9hZCk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuIl19
