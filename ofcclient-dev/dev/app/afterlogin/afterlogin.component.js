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
var index_1 = require('../shared/afterlogin/index');
var app_component_1 = require('../app.component');
var AfterloginComponent = (function () {
    function AfterloginComponent(router, localService, appComponent, fb, route, mycur, mydate1, emailval) {
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
        this.drpCountryId = [];
        this.drpStateId = [];
        this.drpCityId = [];
        this.localService.getCountry('hj').subscribe(function (p) { _this.drpCountryId = p; _this.drpCountryId.unshift({ label: "Select", value: "1" }); }, function (e) { return console.log(e); }, function () { });
    }
    AfterloginComponent.prototype.ngOnInit = function () {
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
    };
    AfterloginComponent.prototype.clear = function () {
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
    };
    AfterloginComponent.prototype.populateStates = function (events1) {
        var _this = this;
        this.ngModelcountryId = events1.value;
        this.localService.getState(this.ngModelcountryId).subscribe(function (p) { return _this.drpStateId = p; }, function (e) { return console.log(e); }, function () { });
    };
    AfterloginComponent.prototype.populateCity = function (events1) {
        var _this = this;
        this.ngModelStateId = events1.value;
        this.localService.getCity(this.ngModelStateId).subscribe(function (p) { return _this.drpCityId = p; }, function (e) { return console.log(e); }, function () { });
    };
    AfterloginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.msgs = [];
        this.localService.afterlogin(this.ofcmembers)
            .subscribe(function (p) { return _this.ofcmembersGrid = p; }, function (e) { return console.log(e); }, function () { return _this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Update Successfully' }); });
        this.clear();
    };
    AfterloginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-afterlogin',
            templateUrl: 'afterlogin.component.html',
            styleUrls: ['afterlogin.component.css'],
            providers: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.AfterloginService, app_component_1.AppComponent, forms_1.FormBuilder, router_1.ActivatedRoute, first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate])
    ], AfterloginComponent);
    return AfterloginComponent;
}());
exports.AfterloginComponent = AfterloginComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZnRlcmxvZ2luL2FmdGVybG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsc0JBQWdFLGdCQUFnQixDQUFDLENBQUE7QUFTakYsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFHekQsMkJBQStCLDRCQUE0QixDQUFDLENBQUE7QUFHNUQsa0NBQTZCLG1DQUFtQyxDQUFDLENBQUE7QUFDakUsbUNBQThCLG9DQUFvQyxDQUFDLENBQUE7QUFHbkUsc0JBQWtDLDRCQUE0QixDQUFDLENBQUE7QUFFL0QsOEJBQTZCLGtCQUFrQixDQUFDLENBQUE7QUFjaEQ7SUFrQkUsNkJBQ1UsTUFBYyxFQUNkLFlBQStCLEVBQy9CLFlBQTBCLEVBQzFCLEVBQWUsRUFDZixLQUFxQixFQUNyQixLQUFxQixFQUNyQixPQUFxQixFQUNyQixRQUF1QjtRQTFCbkMsaUJBMEhDO1FBdkdXLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBbUI7UUFDL0IsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQXpCbEMsU0FBSSxHQUFZLEVBQUUsQ0FBQztRQU9wQixtQkFBYyxHQUFlLEVBQUUsQ0FBQztRQUM5QixpQkFBWSxHQUFpQixFQUFFLENBQUM7UUFDaEMsZUFBVSxHQUFpQixFQUFFLENBQUM7UUFDOUIsY0FBUyxHQUFpQixFQUFFLENBQUM7UUFrQjNCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBTSxLQUFJLENBQUMsWUFBWSxHQUFHLENB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QWMsR0FBRyxDQUFDLEVBQXZCLENBQXVCLEVBQzVCLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBZCxDQUFjLEVBQ25CLGNBQU0sT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsMEJBQTBCLEVBQUMsQ0FBQyxFQUF2RixDQUF1RixDQUFDLENBQUM7UUFHeEgsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQS9ISDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUN2QyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBRTFCLENBQUM7OzJCQUFBO0lBMkhGLDBCQUFDO0FBQUQsQ0ExSEEsQUEwSEMsSUFBQTtBQTFIWSwyQkFBbUIsc0JBMEgvQixDQUFBIiwiZmlsZSI6ImFwcC9hZnRlcmxvZ2luL2FmdGVybG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEYXRhVGFibGVNb2R1bGUsIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgRGlhbG9nTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgQ2FsZW5kYXJNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWVzc2FnZXNNb2R1bGUsIE1lc3NhZ2UsIEdyb3dsIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgUGFuZWxNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBJbnB1dFRleHRhcmVhTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgTXlDdXJyZW5jeVBpcGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZmlyc3QucGlwZSc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBTZWxlY3RJdGVtIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgTXlEYXRlRm9ybWF0IH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL215ZGF0ZWZvcm1hdC5waXBlJztcclxuaW1wb3J0IHsgRW1haWxWYWxpZGF0ZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9lbWFpbHZhbGlkYXRlLnBpcGUnO1xyXG5pbXBvcnQgeyBDdXN0b21WYWxpZGF0b3IgfSBmcm9tICcuLi9zaGFyZWQvdmFsaWRhdG9ycy92YWxpZGF0b3IuZGlyZWN0aXZlJztcclxuXHJcbmltcG9ydCB7IEFmdGVybG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2FmdGVybG9naW4vaW5kZXgnO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9GQ01lbWJlcnMgfSBmcm9tICcuL29mY21lbWJlcnMnO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgQWJvdXRDb21wb25lbnQuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnc2QtYWZ0ZXJsb2dpbicsXHJcbiAgdGVtcGxhdGVVcmw6ICdhZnRlcmxvZ2luLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYWZ0ZXJsb2dpbi5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbQXBwQ29tcG9uZW50XVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEFmdGVybG9naW5Db21wb25lbnQge1xyXG4gbXNnczogTWVzc2FnZVtdPVtdO1xyXG4gIHVzZXJmb3JtOiBGb3JtR3JvdXA7XHJcbiAgYm9vbGFmdGVybG9naW46IGJvb2xlYW47XHJcblxyXG4gIG9mY21lbWJlcnM6IE9GQ01lbWJlcnM7XHJcbiAgbmV3b2ZjbWVtYmVyczogYm9vbGVhbjtcclxuXHJcbm9mY21lbWJlcnNHcmlkOiBPRkNNZW1iZXJzW109W107XHJcbiAgZHJwQ291bnRyeUlkOiBTZWxlY3RJdGVtW10gPSBbXTtcclxuICBkcnBTdGF0ZUlkOiBTZWxlY3RJdGVtW10gPSBbXTtcclxuICBkcnBDaXR5SWQ6IFNlbGVjdEl0ZW1bXSA9IFtdO1xyXG5cclxuICBuZ01vZGVsY291bnRyeUlkOiBzdHJpbmc7XHJcbiAgbmdNb2RlbFN0YXRlSWQ6IHN0cmluZztcclxuXHJcbiAgIHN1Ym1pdHRlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBsb2NhbFNlcnZpY2U6IEFmdGVybG9naW5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBhcHBDb21wb25lbnQ6IEFwcENvbXBvbmVudCxcclxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIG15Y3VyOiBNeUN1cnJlbmN5UGlwZSxcclxuICAgIHByaXZhdGUgbXlkYXRlMTogTXlEYXRlRm9ybWF0LFxyXG4gICAgcHJpdmF0ZSBlbWFpbHZhbDogRW1haWxWYWxpZGF0ZVxyXG4gICkge1xyXG5cclxuICAgIHRoaXMubG9jYWxTZXJ2aWNlLmdldENvdW50cnkoJ2hqJykuc3Vic2NyaWJlKHAgPT4geyB0aGlzLmRycENvdW50cnlJZCA9IHA7IHRoaXMuZHJwQ291bnRyeUlkLnVuc2hpZnQoeyBsYWJlbDogXCJTZWxlY3RcIiwgdmFsdWU6IFwiMVwiIH0pIH0sIGUgPT4gY29uc29sZS5sb2coZSksICgpID0+IHt9KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgdGhpcy5jbGVhcigpO1xyXG5cclxuXHJcbiAgICB0aGlzLnVzZXJmb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICdvZmNtZW1iZXJzX2ZuYW1lJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ29mY21lbWJlcnNfbW5hbWUnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnb2ZjbWVtYmVyc19sbmFtZSc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICdvZmNtZW1iZXJzX25hbWUnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnb2ZjbWVtYmVyX3R5cGUnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnY2l0eV9pZCc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICdvZmNtZW1iZXJzX2VtYWlsaWQnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnb2ZjbWVtYmVyc19wYXNzd29yZCc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICdvZmNtZW1iZXJzX2FkZHJlc3MxJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ29mY21lbWJlcnNfYWRkcmVzczInOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnb2ZjbWVtYmVyc19waW5jb2RlJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ29mY21lbWJlcnNfY29udGFjdG5vcyc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICdjb3VudHJ5X2lkJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ3N0YXRlX2lkJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMubmV3b2ZjbWVtYmVycyA9IHRydWU7XHJcbiAgICB0aGlzLm9mY21lbWJlcnMgPSB7XHJcbiAgICAgIG9mY21lbWJlcnNfaWQ6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2ZuYW1lOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19tbmFtZTogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfbG5hbWU6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX25hbWU6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJfdHlwZTogJycsXHJcbiAgICAgIGNpdHlfaWQ6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2VtYWlsaWQ6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX3Bhc3N3b3JkOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19hZGRyZXNzMTogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfYWRkcmVzczI6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX3BpbmNvZGU6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2NvbnRhY3Rub3M6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2F2YWlsYWJpbGl0eTogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfZGlzcGxheW5hbWU6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2Rlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19zZWxmcmF0aW5nOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19leHBlcmllbmNlbGV2ZWw6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2dlbmRlcjogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfZG9iOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19ub3NvZnRlYW1tZW1iZXJzOiAnJyxcclxuICAgICAgY3JlYXRlZGF0ZTogJycsXHJcbiAgICAgIG1vZGlmaWVkZGF0ZTogJycsXHJcbiAgICAgIHN0YXR1czogJydcclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgcG9wdWxhdGVTdGF0ZXMoZXZlbnRzMTogYW55KSB7XHJcbiAgIFxyXG4gICAgdGhpcy5uZ01vZGVsY291bnRyeUlkID0gZXZlbnRzMS52YWx1ZTtcclxuICAgIHRoaXMubG9jYWxTZXJ2aWNlLmdldFN0YXRlKHRoaXMubmdNb2RlbGNvdW50cnlJZCkuc3Vic2NyaWJlKHAgPT4gdGhpcy5kcnBTdGF0ZUlkID0gcCwgZSA9PiBjb25zb2xlLmxvZyhlKSwgKCkgPT4ge30pO1xyXG4gIH1cclxuXHJcbiAgcG9wdWxhdGVDaXR5KGV2ZW50czE6IGFueSkge1xyXG4gICBcclxuICAgIHRoaXMubmdNb2RlbFN0YXRlSWQgPSBldmVudHMxLnZhbHVlO1xyXG4gICAgdGhpcy5sb2NhbFNlcnZpY2UuZ2V0Q2l0eSh0aGlzLm5nTW9kZWxTdGF0ZUlkKS5zdWJzY3JpYmUocCA9PiB0aGlzLmRycENpdHlJZCA9IHAsIGUgPT4gY29uc29sZS5sb2coZSksICgpID0+IHt9KTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0KCl7XHJcbiAgICBcclxuICAgICBcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tc2dzID0gW107XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgdGhpcy5sb2NhbFNlcnZpY2UuYWZ0ZXJsb2dpbih0aGlzLm9mY21lbWJlcnMpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAvKiBoYXBweSBwYXRoICovIHAgPT4gdGhpcy5vZmNtZW1iZXJzR3JpZCA9IHAsXHJcbiAgICAgICAgICAgIC8qIGVycm9yIHBhdGggKi8gZSA9PiBjb25zb2xlLmxvZyhlKSxcclxuICAgICAgICAgICAgLyogb25Db21wbGV0ZSAqLyAoKSA9PiB0aGlzLm1zZ3MucHVzaCh7c2V2ZXJpdHk6J2luZm8nLCBzdW1tYXJ5OidTdWNjZXNzJywgZGV0YWlsOidGb3JtIFVwZGF0ZSBTdWNjZXNzZnVsbHknfSkpO1xyXG4gICAgICBcclxuICAgICAgIFxyXG4gICAgdGhpcy5jbGVhcigpOyAgIFxyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==
