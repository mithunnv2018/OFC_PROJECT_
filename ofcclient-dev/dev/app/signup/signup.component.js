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
var index_1 = require('../shared/signup/index');
var app_component_1 = require('../app.component');
var index_2 = require('../shared/loginpage/index');
var SignupComponent = (function () {
    function SignupComponent(router, localService, appComponent, fb, route, mycur, mydate1, emailval, loginlocalService) {
        this.router = router;
        this.localService = localService;
        this.appComponent = appComponent;
        this.fb = fb;
        this.route = route;
        this.mycur = mycur;
        this.mydate1 = mydate1;
        this.emailval = emailval;
        this.loginlocalService = loginlocalService;
        this.msgs = [];
        this.ofcmembersGrid = [];
        this.drpCountryId = [];
        this.drpStateId = [];
        this.drpCityId = [];
        this.selectedTermsConditions = [];
        this.selectedTermsConditions1 = [];
        this.checked = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.getScript('../../resources/ofc/js/index.js');
        this.clear();
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
        this.localService.getCountry('hj').subscribe(function (p) { _this.drpCountryId = p; _this.drpCountryId.unshift({ label: "Select", value: "1" }); }, function (e) { return console.log(e); }, function () { });
    };
    SignupComponent.prototype.clear = function () {
        this.newofcmembers = true;
        this.ofcmembers = {
            ofcmembers_id: '',
            ofcmembers_fname: '',
            ofcmembers_mname: '',
            ofcmembers_lname: '',
            ofcmembers_name: '',
            ofcmember_type: 'Company',
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
        this.ofcmembers1 = {
            ofcmembers_id: '',
            ofcmembers_fname: '',
            ofcmembers_mname: '',
            ofcmembers_lname: '',
            ofcmembers_name: '',
            ofcmember_type: 'Individual',
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
    SignupComponent.prototype.populateStates = function (events1) {
        var _this = this;
        this.ngModelcountryId = events1.value;
        this.localService.getState(this.ngModelcountryId).subscribe(function (p) { return _this.drpStateId = p; }, function (e) { return console.log(e); }, function () { });
    };
    SignupComponent.prototype.populateCity = function (events1) {
        var _this = this;
        this.ngModelStateId = events1.value;
        this.localService.getCity(this.ngModelStateId).subscribe(function (p) { return _this.drpCityId = p; }, function (e) { return console.log(e); }, function () { });
    };
    SignupComponent.prototype.onSubmitIndividual = function () {
        var _this = this;
        this.submitted = true;
        this.msgs = [];
        this.ofcmembers1.ofcmembers_dob = "";
        console.log("ofcmembers1", this.ofcmembers1);
        this.localService.signup(this.ofcmembers1).subscribe(function (p) { return _this.commonError = p; }, function (e) { return console.log(e); }, function () {
            if (_this.commonError.Isuccess == '1') {
                var email = _this.ofcmembers1.ofcmembers_emailid;
                var password = _this.ofcmembers1.ofcmembers_password;
                _this.loginAfterSignUp(email, password);
            }
            else {
                var err = _this.commonError.Error;
                _this.msgs.push({ severity: 'info', summary: 'Error', detail: err });
            }
        });
    };
    SignupComponent.prototype.onSubmitCompany = function () {
        var _this = this;
        this.submitted = true;
        this.msgs = [];
        this.ofcmembers.ofcmembers_dob = "";
        this.localService.signup(this.ofcmembers).subscribe(function (p) { return _this.commonError = p; }, function (e) { return console.log(e); }, function () {
            if (_this.commonError.Isuccess == '1') {
                var email = _this.ofcmembers.ofcmembers_emailid;
                var password = _this.ofcmembers.ofcmembers_password;
                _this.loginAfterSignUp(email, password);
            }
            else {
                var err = _this.commonError.Error;
                _this.msgs.push({ severity: 'info', summary: 'Error', detail: err });
            }
        });
    };
    SignupComponent.prototype.loginAfterSignUp = function (email, password) {
        var _this = this;
        this.localService.getLoginClient(email, password)
            .subscribe(function (p) { return _this.ofcmemsession = p; }, function (e) { return console.log(e); }, function () {
            var validatemember = JSON.stringify(_this.ofcmemsession);
            if (validatemember == '[]') {
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Unauthorize User' });
            }
            else {
                _this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Update Successfully' });
                var memberdetails = _this.ofcmemsession;
                sessionStorage.setItem('memberdetails', JSON.stringify(memberdetails));
                var data = sessionStorage.getItem('memberdetails');
                var ofcsessionid_1 = _this.ofcmemsession.ofcmemsession_id;
                _this.localService.getViewOfcMember(ofcsessionid_1).subscribe(function (p) {
                    _this.viewofcmemsession = p;
                }, function (e) { return console.log(e); }, function () {
                    var viewofcmemsession = _this.viewofcmemsession;
                    sessionStorage.setItem(ofcsessionid_1, JSON.stringify(viewofcmemsession));
                    _this.router.navigate(['/myprofile']);
                    _this.loginlocalService.announceMission(true);
                });
            }
            var data = sessionStorage.getItem('memberdetails');
            var ofcmemsession = JSON.parse(data);
            var ofcmemsession_id = ofcmemsession.ofcmemsession_id;
            var dataviewofcmember = sessionStorage.getItem(ofcmemsession_id);
            _this.clear();
        });
    };
    SignupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-signup',
            templateUrl: 'signup.component.html',
            styleUrls: ['signup.component.css'],
            providers: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.SignupService, app_component_1.AppComponent, forms_1.FormBuilder, router_1.ActivatedRoute, first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, index_2.LoginPageService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHNCQUFnRSxnQkFBZ0IsQ0FBQyxDQUFBO0FBU2pGLHVCQUF1QyxpQkFBaUIsQ0FBQyxDQUFBO0FBR3pELDJCQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBRzVELGtDQUE2QixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ2pFLG1DQUE4QixvQ0FBb0MsQ0FBQyxDQUFBO0FBRW5FLHNCQUE4Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3ZELDhCQUE2QixrQkFBa0IsQ0FBQyxDQUFBO0FBTWhELHNCQUFpQywyQkFBMkIsQ0FBQyxDQUFBO0FBYzdEO0lBNkJFLHlCQUNVLE1BQWMsRUFDZCxZQUEyQixFQUMzQixZQUEwQixFQUMxQixFQUFlLEVBQ2YsS0FBcUIsRUFDckIsS0FBcUIsRUFDckIsT0FBcUIsRUFDckIsUUFBdUIsRUFDdkIsaUJBQW1DO1FBUm5DLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBZTtRQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFyQzdDLFNBQUksR0FBYyxFQUFFLENBQUM7UUFZckIsbUJBQWMsR0FBa0IsRUFBRSxDQUFDO1FBQ25DLGlCQUFZLEdBQWlCLEVBQUUsQ0FBQztRQUNoQyxlQUFVLEdBQWlCLEVBQUUsQ0FBQztRQUM5QixjQUFTLEdBQWlCLEVBQUUsQ0FBQztRQU83Qiw0QkFBdUIsR0FBYSxFQUFFLENBQUM7UUFDdkMsNkJBQXdCLEdBQWEs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QU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNuRCxJQUFJLGFBQWEsR0FBa0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwRCxJQUFJLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztZQUN0RCxJQUFJLGlCQUFpQixHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNqRSxLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZixDQUFDLENBQ0EsQ0FBQztJQUdOLENBQUM7SUExUEg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUUxQixDQUFDOzt1QkFBQTtJQW9QRixzQkFBQztBQUFELENBblBBLEFBbVBDLElBQUE7QUFuUFksdUJBQWUsa0JBbVAzQixDQUFBIiwiZmlsZSI6ImFwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRGF0YVRhYmxlTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBEaWFsb2dNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBJbnB1dFRleHRNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBDYWxlbmRhck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNZXNzYWdlc01vZHVsZSwgTWVzc2FnZSwgR3Jvd2wgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBQYW5lbE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IElucHV0VGV4dGFyZWFNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBNeUN1cnJlbmN5UGlwZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9maXJzdC5waXBlJztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IFNlbGVjdEl0ZW0gfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZSc7XHJcbmltcG9ydCB7IEN1c3RvbVZhbGlkYXRvciB9IGZyb20gJy4uL3NoYXJlZC92YWxpZGF0b3JzL3ZhbGlkYXRvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBTaWdudXBTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NpZ251cC9pbmRleCc7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4uL2FwcC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgT0ZDTWVtYmVycyB9IGZyb20gJy4vb2ZjbWVtYmVycyc7XHJcbmltcG9ydCB7IENvbW1vbkVycm9yIH0gZnJvbSAnLi4vbG9naW5wYWdlL2NvbW1vbmVycm9yJztcclxuaW1wb3J0IHsgT0ZDbWVtU2Vzc2lvbiB9IGZyb20gJy4uL2xvZ2lucGFnZS9vZmNtZW1zZXNzaW9uJztcclxuaW1wb3J0IHsgVmlld09GQ21lbVNlc3Npb24gfSBmcm9tICcuLi9sb2dpbnBhZ2Uvdmlld29mY21lbXNlc3Npb24nO1xyXG5pbXBvcnQgeyBMb2dpblBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2xvZ2lucGFnZS9pbmRleCc7XHJcblxyXG5kZWNsYXJlIHZhciAkOiBhbnk7XHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEFib3V0Q29tcG9uZW50LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NkLXNpZ251cCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdzaWdudXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydzaWdudXAuY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW0FwcENvbXBvbmVudF1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQge1xyXG4gIG1zZ3M6IE1lc3NhZ2VbXSA9IFtdO1xyXG4gIHVzZXJmb3JtOiBGb3JtR3JvdXA7XHJcbiAgYm9vbHNpZ251cDogYm9vbGVhbjtcclxuXHJcbiAgb2ZjbWVtYmVyczogT0ZDTWVtYmVycztcclxuICBvZmNtZW1iZXJzMTogT0ZDTWVtYmVycztcclxuICBvZmNtZW1zZXNzaW9uOiBPRkNtZW1TZXNzaW9uO1xyXG5cclxuICBjb21tb25FcnJvcjogQ29tbW9uRXJyb3I7XHJcblxyXG4gIG5ld29mY21lbWJlcnM6IGJvb2xlYW47XHJcblxyXG4gIG9mY21lbWJlcnNHcmlkOiBDb21tb25FcnJvcltdID0gW107XHJcbiAgZHJwQ291bnRyeUlkOiBTZWxlY3RJdGVtW10gPSBbXTtcclxuICBkcnBTdGF0ZUlkOiBTZWxlY3RJdGVtW10gPSBbXTtcclxuICBkcnBDaXR5SWQ6IFNlbGVjdEl0ZW1bXSA9IFtdO1xyXG5cclxuICBuZ01vZGVsY291bnRyeUlkOiBzdHJpbmc7XHJcbiAgbmdNb2RlbFN0YXRlSWQ6IHN0cmluZztcclxuXHJcbiAgc3VibWl0dGVkOiBib29sZWFuO1xyXG4gIHZhbDogbnVtYmVyO1xyXG4gIHNlbGVjdGVkVGVybXNDb25kaXRpb25zOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHNlbGVjdGVkVGVybXNDb25kaXRpb25zMTogc3RyaW5nW10gPSBbXTtcclxuICBjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICB2aWV3b2ZjbWVtc2Vzc2lvbjogVmlld09GQ21lbVNlc3Npb247XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBsb2NhbFNlcnZpY2U6IFNpZ251cFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50LFxyXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgbXljdXI6IE15Q3VycmVuY3lQaXBlLFxyXG4gICAgcHJpdmF0ZSBteWRhdGUxOiBNeURhdGVGb3JtYXQsXHJcbiAgICBwcml2YXRlIGVtYWlsdmFsOiBFbWFpbFZhbGlkYXRlLFxyXG4gICAgcHJpdmF0ZSBsb2dpbmxvY2FsU2VydmljZTogTG9naW5QYWdlU2VydmljZSxcclxuICApIHtcclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgJC5nZXRTY3JpcHQoJy4uLy4uL3Jlc291cmNlcy9vZmMvanMvaW5kZXguanMnKTtcclxuICAgIHRoaXMuY2xlYXIoKTtcclxuXHJcblxyXG4gICAgdGhpcy51c2VyZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAnb2ZjbWVtYmVyc19mbmFtZSc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICdvZmNtZW1iZXJzX21uYW1lJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ29mY21lbWJlcnNfbG5hbWUnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnb2ZjbWVtYmVyc19uYW1lJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ29mY21lbWJlcl90eXBlJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ2NpdHlfaWQnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnb2ZjbWVtYmVyc19lbWFpbGlkJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ29mY21lbWJlcnNfcGFzc3dvcmQnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnb2ZjbWVtYmVyc19hZGRyZXNzMSc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICdvZmNtZW1iZXJzX2FkZHJlc3MyJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ29mY21lbWJlcnNfcGluY29kZSc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICdvZmNtZW1iZXJzX2NvbnRhY3Rub3MnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnY291bnRyeV9pZCc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICdzdGF0ZV9pZCc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZClcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB0aGlzLmxvY2FsU2VydmljZS5nZXRDb3VudHJ5KCdoaicpLnN1YnNjcmliZShwID0+IHsgdGhpcy5kcnBDb3VudHJ5SWQgPSBwOyB0aGlzLmRycENvdW50cnlJZC51bnNoaWZ0KHsgbGFiZWw6IFwiU2VsZWN0XCIsIHZhbHVlOiBcIjFcIiB9KSB9LCBlID0+IGNvbnNvbGUubG9nKGUpLCAoKSA9PiB7fSk7XHJcblxyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLm5ld29mY21lbWJlcnMgPSB0cnVlO1xyXG4gICAgdGhpcy5vZmNtZW1iZXJzID0ge1xyXG4gICAgICBvZmNtZW1iZXJzX2lkOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19mbmFtZTogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfbW5hbWU6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2xuYW1lOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19uYW1lOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyX3R5cGU6ICdDb21wYW55JyxcclxuICAgICAgY2l0eV9pZDogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfZW1haWxpZDogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfcGFzc3dvcmQ6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2FkZHJlc3MxOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19hZGRyZXNzMjogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfcGluY29kZTogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfY29udGFjdG5vczogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfYXZhaWxhYmlsaXR5OiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19kaXNwbGF5bmFtZTogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX3NlbGZyYXRpbmc6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2V4cGVyaWVuY2VsZXZlbDogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfZ2VuZGVyOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19kb2I6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX25vc29mdGVhbW1lbWJlcnM6ICcnLFxyXG4gICAgICBjcmVhdGVkYXRlOiAnJyxcclxuICAgICAgbW9kaWZpZWRkYXRlOiAnJyxcclxuICAgICAgc3RhdHVzOiAnJ1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9mY21lbWJlcnMxID0ge1xyXG4gICAgICBvZmNtZW1iZXJzX2lkOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19mbmFtZTogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfbW5hbWU6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2xuYW1lOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19uYW1lOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyX3R5cGU6ICdJbmRpdmlkdWFsJyxcclxuICAgICAgY2l0eV9pZDogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfZW1haWxpZDogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfcGFzc3dvcmQ6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2FkZHJlc3MxOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19hZGRyZXNzMjogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfcGluY29kZTogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfY29udGFjdG5vczogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfYXZhaWxhYmlsaXR5OiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19kaXNwbGF5bmFtZTogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX3NlbGZyYXRpbmc6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2V4cGVyaWVuY2VsZXZlbDogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfZ2VuZGVyOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19kb2I6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX25vc29mdGVhbW1lbWJlcnM6ICcnLFxyXG4gICAgICBjcmVhdGVkYXRlOiAnJyxcclxuICAgICAgbW9kaWZpZWRkYXRlOiAnJyxcclxuICAgICAgc3RhdHVzOiAnJ1xyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBwb3B1bGF0ZVN0YXRlcyhldmVudHMxOiBhbnkpIHtcclxuXHJcbiAgICB0aGlzLm5nTW9kZWxjb3VudHJ5SWQgPSBldmVudHMxLnZhbHVlO1xyXG4gICAgdGhpcy5sb2NhbFNlcnZpY2UuZ2V0U3RhdGUodGhpcy5uZ01vZGVsY291bnRyeUlkKS5zdWJzY3JpYmUocCA9PiB0aGlzLmRycFN0YXRlSWQgPSBwLCBlID0+IGNvbnNvbGUubG9nKGUpLCAoKSA9PiB7fSk7XHJcbiAgfVxyXG5cclxuICBwb3B1bGF0ZUNpdHkoZXZlbnRzMTogYW55KSB7XHJcblxyXG4gICAgdGhpcy5uZ01vZGVsU3RhdGVJZCA9IGV2ZW50czEudmFsdWU7XHJcbiAgICB0aGlzLmxvY2FsU2VydmljZS5nZXRDaXR5KHRoaXMubmdNb2RlbFN0YXRlSWQpLnN1YnNjcmliZShwID0+IHRoaXMuZHJwQ2l0eUlkID0gcCwgZSA9PiBjb25zb2xlLmxvZyhlKSwgKCkgPT4ge30pO1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXRJbmRpdmlkdWFsKCkge1xyXG5cclxuICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgIHRoaXMubXNncyA9IFtdO1xyXG4gICAgdGhpcy5vZmNtZW1iZXJzMS5vZmNtZW1iZXJzX2RvYj1cIlwiO1xyXG4gICAgY29uc29sZS5sb2coXCJvZmNtZW1iZXJzMVwiLHRoaXMub2ZjbWVtYmVyczEpO1xyXG4gICAgdGhpcy5sb2NhbFNlcnZpY2Uuc2lnbnVwKHRoaXMub2ZjbWVtYmVyczEpLnN1YnNjcmliZShwID0+IHRoaXMuY29tbW9uRXJyb3IgPSBwLCBlID0+IGNvbnNvbGUubG9nKGUpLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNvbW1vbkVycm9yLklzdWNjZXNzID09ICcxJykgXHJcbiAgICAgIHtcclxuICAgICAgICBsZXQgZW1haWwgPSB0aGlzLm9mY21lbWJlcnMxLm9mY21lbWJlcnNfZW1haWxpZDtcclxuICAgICAgICBsZXQgcGFzc3dvcmQgPSB0aGlzLm9mY21lbWJlcnMxLm9mY21lbWJlcnNfcGFzc3dvcmQ7XHJcbiAgICAgICAgdGhpcy5sb2dpbkFmdGVyU2lnblVwKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBcclxuICAgICAge1xyXG4gICAgICAgIGxldCBlcnIgPSB0aGlzLmNvbW1vbkVycm9yLkVycm9yO1xyXG4gICAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdpbmZvJywgc3VtbWFyeTogJ0Vycm9yJywgZGV0YWlsOiBlcnIgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICBvblN1Ym1pdENvbXBhbnkoKSB7XHJcblxyXG4gICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5tc2dzID0gW107XHJcbiAgICB0aGlzLm9mY21lbWJlcnMub2ZjbWVtYmVyc19kb2I9XCJcIjtcclxuICAgIHRoaXMubG9jYWxTZXJ2aWNlLnNpZ251cCh0aGlzLm9mY21lbWJlcnMpLnN1YnNjcmliZShwID0+IHRoaXMuY29tbW9uRXJyb3IgPSBwLCBlID0+IGNvbnNvbGUubG9nKGUpLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNvbW1vbkVycm9yLklzdWNjZXNzID09ICcxJykgXHJcbiAgICAgIHtcclxuICAgICAgIFxyXG4gICAgICAgIGxldCBlbWFpbCA9IHRoaXMub2ZjbWVtYmVycy5vZmNtZW1iZXJzX2VtYWlsaWQ7XHJcbiAgICAgICAgbGV0IHBhc3N3b3JkID0gdGhpcy5vZmNtZW1iZXJzLm9mY21lbWJlcnNfcGFzc3dvcmQ7XHJcbiAgICAgICAgdGhpcy5sb2dpbkFmdGVyU2lnblVwKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBcclxuICAgICAge1xyXG4gICAgICAgIGxldCBlcnIgPSB0aGlzLmNvbW1vbkVycm9yLkVycm9yO1xyXG4gICAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdpbmZvJywgc3VtbWFyeTogJ0Vycm9yJywgZGV0YWlsOiBlcnIgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuICBsb2dpbkFmdGVyU2lnblVwKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuXHJcbiAgIFxyXG4gICAgdGhpcy5sb2NhbFNlcnZpY2UuZ2V0TG9naW5DbGllbnQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAuc3Vic2NyaWJlKHAgPT4gdGhpcy5vZmNtZW1zZXNzaW9uID0gcCwgZSA9PiBjb25zb2xlLmxvZyhlKSwgKCkgPT4ge1xyXG4gICAgICAgXHJcbiAgICAgICAgbGV0IHZhbGlkYXRlbWVtYmVyID0gSlNPTi5zdHJpbmdpZnkodGhpcy5vZmNtZW1zZXNzaW9uKVxyXG4gICAgICBcclxuICAgICAgICBpZiAodmFsaWRhdGVtZW1iZXIgPT0gJ1tdJykgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgc3VtbWFyeTogJ0Vycm9yIE1lc3NhZ2UnLCBkZXRhaWw6ICdVbmF1dGhvcml6ZSBVc2VyJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnaW5mbycsIHN1bW1hcnk6ICdTdWNjZXNzJywgZGV0YWlsOiAnRm9ybSBVcGRhdGUgU3VjY2Vzc2Z1bGx5JyB9KVxyXG4gICAgICAgICAgbGV0IG1lbWJlcmRldGFpbHM6IGFueSA9IHRoaXMub2ZjbWVtc2Vzc2lvbjtcclxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ21lbWJlcmRldGFpbHMnLCBKU09OLnN0cmluZ2lmeShtZW1iZXJkZXRhaWxzKSk7XHJcbiAgICAgICAgICB2YXIgZGF0YSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ21lbWJlcmRldGFpbHMnKTtcclxuICAgICAgICAgIGxldCBvZmNzZXNzaW9uaWQ6IHN0cmluZyA9IHRoaXMub2ZjbWVtc2Vzc2lvbi5vZmNtZW1zZXNzaW9uX2lkO1xyXG5cclxuICAgICAgICAgIHRoaXMubG9jYWxTZXJ2aWNlLmdldFZpZXdPZmNNZW1iZXIob2Zjc2Vzc2lvbmlkKS5zdWJzY3JpYmUocCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudmlld29mY21lbXNlc3Npb24gPSBwO30sZSA9PiBjb25zb2xlLmxvZyhlKSwoKSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IHZpZXdvZmNtZW1zZXNzaW9uOiBhbnkgPSB0aGlzLnZpZXdvZmNtZW1zZXNzaW9uO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0ob2Zjc2Vzc2lvbmlkLCBKU09OLnN0cmluZ2lmeSh2aWV3b2ZjbWVtc2Vzc2lvbikpO1xyXG4gICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbXlwcm9maWxlJ10pO1xyXG4gICAgICAgICAgICAgdGhpcy5sb2dpbmxvY2FsU2VydmljZS5hbm5vdW5jZU1pc3Npb24odHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ21lbWJlcmRldGFpbHMnKTtcclxuICAgICAgICBsZXQgb2ZjbWVtc2Vzc2lvbjogT0ZDbWVtU2Vzc2lvbiA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgbGV0IG9mY21lbXNlc3Npb25faWQgPSBvZmNtZW1zZXNzaW9uLm9mY21lbXNlc3Npb25faWQ7XHJcbiAgICAgICAgdmFyIGRhdGF2aWV3b2ZjbWVtYmVyID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShvZmNtZW1zZXNzaW9uX2lkKTtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgICk7XHJcbiAgICBcclxuXHJcbiAgfVxyXG59XHJcbiJdfQ==
