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
var index_1 = require('../shared/lifetimebilling/index');
var app_component_1 = require('../app.component');
var LifetimebillingComponent = (function () {
    function LifetimebillingComponent(router, localService, appComponent, fb, route, mycur, mydate1, emailval) {
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
        this.lifetimebillinggrid = [];
        this.drpQuestions = [];
        this.drpStateId = [];
        this.drpCityId = [];
        this.selectedSecQuetions = [];
        this.checked = false;
        this.localService.getCountry('hj').subscribe(function (p) { _this.drpQuestions = p; _this.drpQuestions.unshift({ label: "Select", value: "1" }); }, function (e) { return console.log(e); }, function () { return console.log(_this.drpQuestions); });
    }
    LifetimebillingComponent.prototype.ngOnInit = function () {
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
    LifetimebillingComponent.prototype.clear = function () {
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
    LifetimebillingComponent.prototype.populateStates = function (events1) {
        var _this = this;
        this.ngModelcountryId = events1.value;
        this.localService.getState(this.ngModelcountryId).subscribe(function (p) { return _this.drpStateId = p; }, function (e) { return console.log(e); }, function () { return console.log(_this.drpStateId); });
    };
    LifetimebillingComponent.prototype.populateCity = function (events1) {
        var _this = this;
        this.ngModelStateId = events1.value;
        this.localService.getCity(this.ngModelStateId).subscribe(function (p) { return _this.drpCityId = p; }, function (e) { return console.log(e); }, function () { return console.log(_this.drpCityId); });
    };
    LifetimebillingComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.msgs = [];
        this.localService.lifetimebilling(this.ofcmembers)
            .subscribe(function (p) { return _this.lifetimebillinggrid = p; }, function (e) { return console.log(e); }, function () { return _this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Update Successfully' }); });
        this.clear();
    };
    LifetimebillingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-lifetimebilling',
            templateUrl: 'lifetimebilling.component.html',
            styleUrls: ['lifetimebilling.component.css'],
            providers: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.LifetimebillingService, app_component_1.AppComponent, forms_1.FormBuilder, router_1.ActivatedRoute, first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate])
    ], LifetimebillingComponent);
    return LifetimebillingComponent;
}());
exports.LifetimebillingComponent = LifetimebillingComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9saWZldGltZWJpbGxpbmcvbGlmZXRpbWViaWxsaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHNCQUFnRSxnQkFBZ0IsQ0FBQyxDQUFBO0FBU2pGLHVCQUF1QyxpQkFBaUIsQ0FBQyxDQUFBO0FBR3pELDJCQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBRzVELGtDQUE2QixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ2pFLG1DQUE4QixvQ0FBb0MsQ0FBQyxDQUFBO0FBR25FLHNCQUF1QyxpQ0FBaUMsQ0FBQyxDQUFBO0FBRXpFLDhCQUE2QixrQkFBa0IsQ0FBQyxDQUFBO0FBY2hEO0lBb0JFLGtDQUNVLE1BQWMsRUFDZCxZQUFvQyxFQUNwQyxZQUEwQixFQUMxQixFQUFlLEVBQ2YsS0FBcUIsRUFDckIsS0FBcUIsRUFDckIsT0FBcUIsRUFDckIsUUFBdUI7UUE1Qm5DLGlCQTRIQztRQXZHVyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQXdCO1FBQ3BDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQWU7UUEzQmpDLFNBQUksR0FBYyxFQUFFLENBQUM7UUFPckIsd0JBQW1CLEdBQWlCLEVBQUUsQ0FBQztRQUN2QyxpQkFBWSxHQUFpQixFQUFFLENBQUM7UUFDaEMsZUFBVSxHQUFpQixFQUFFLENBQUM7UUFDOUIsY0FBUyxHQUFpQixFQUFFLENBQUM7UUFNOUIsd0JBQW1CLEdBQWEsRUFBRSxDQUFDO1FBRWxDLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFZdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENB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QUFDLENBQUM7SUFDNUksQ0FBQztJQUVELDJDQUFRLEdBQVI7UUFBQSxpQkFlQztRQVpDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBR2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUMvQyxTQUFTLENBQ2EsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxFQUE1QixDQUE0QixFQUNqQyxVQUFBLENBQUMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxFQUNwQixjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDBCQUEwQixFQUFFLENBQUMsRUFBNUYsQ0FBNEYsQ0FBQyxDQUFDO1FBRzVILElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFqSUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztZQUM1QyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBRTFCLENBQUM7O2dDQUFBO0lBNkhGLCtCQUFDO0FBQUQsQ0E1SEEsQUE0SEMsSUFBQTtBQTVIWSxnQ0FBd0IsMkJBNEhwQyxDQUFBIiwiZmlsZSI6ImFwcC9saWZldGltZWJpbGxpbmcvbGlmZXRpbWViaWxsaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRGF0YVRhYmxlTW9kdWxlLCB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IERpYWxvZ01vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IElucHV0VGV4dE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IENhbGVuZGFyTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1lc3NhZ2VzTW9kdWxlLCBNZXNzYWdlLCBHcm93bCB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IFBhbmVsTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgSW5wdXRUZXh0YXJlYU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgU2VsZWN0SXRlbSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE15RGF0ZUZvcm1hdCB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9teWRhdGVmb3JtYXQucGlwZSc7XHJcbmltcG9ydCB7IEVtYWlsVmFsaWRhdGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZW1haWx2YWxpZGF0ZS5waXBlJztcclxuaW1wb3J0IHsgQ3VzdG9tVmFsaWRhdG9yIH0gZnJvbSAnLi4vc2hhcmVkL3ZhbGlkYXRvcnMvdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XHJcblxyXG5pbXBvcnQgeyBMaWZldGltZWJpbGxpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2xpZmV0aW1lYmlsbGluZy9pbmRleCc7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT0ZDTWVtYmVycyB9IGZyb20gJy4vb2ZjbWVtYmVycyc7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBBYm91dENvbXBvbmVudC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzZC1saWZldGltZWJpbGxpbmcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnbGlmZXRpbWViaWxsaW5nLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbGlmZXRpbWViaWxsaW5nLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtBcHBDb21wb25lbnRdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlmZXRpbWViaWxsaW5nQ29tcG9uZW50IHtcclxuICBtc2dzOiBNZXNzYWdlW10gPSBbXTtcclxuICB1c2VyZm9ybTogRm9ybUdyb3VwO1xyXG4gIGJvb2xsaWZldGltZWJpbGxpbmc6IGJvb2xlYW47XHJcblxyXG4gIG9mY21lbWJlcnM6IE9GQ01lbWJlcnM7XHJcbiAgbmV3b2ZjbWVtYmVyczogYm9vbGVhbjtcclxuXHJcbiAgbGlmZXRpbWViaWxsaW5nZ3JpZDogT0ZDTWVtYmVyc1tdID0gW107XHJcbiAgZHJwUXVlc3Rpb25zOiBTZWxlY3RJdGVtW10gPSBbXTtcclxuICBkcnBTdGF0ZUlkOiBTZWxlY3RJdGVtW10gPSBbXTtcclxuICBkcnBDaXR5SWQ6IFNlbGVjdEl0ZW1bXSA9IFtdO1xyXG5cclxuICBuZ01vZGVsY291bnRyeUlkOiBzdHJpbmc7XHJcbiAgbmdNb2RlbFN0YXRlSWQ6IHN0cmluZztcclxuXHJcbiAgc3VibWl0dGVkOiBib29sZWFuO1xyXG4gc2VsZWN0ZWRTZWNRdWV0aW9uczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgbG9jYWxTZXJ2aWNlOiBMaWZldGltZWJpbGxpbmdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBhcHBDb21wb25lbnQ6IEFwcENvbXBvbmVudCxcclxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIG15Y3VyOiBNeUN1cnJlbmN5UGlwZSxcclxuICAgIHByaXZhdGUgbXlkYXRlMTogTXlEYXRlRm9ybWF0LFxyXG4gICAgcHJpdmF0ZSBlbWFpbHZhbDogRW1haWxWYWxpZGF0ZVxyXG4gICkge1xyXG5cclxuICAgIHRoaXMubG9jYWxTZXJ2aWNlLmdldENvdW50cnkoJ2hqJykuc3Vic2NyaWJlKHAgPT4geyB0aGlzLmRycFF1ZXN0aW9ucyA9IHA7IHRoaXMuZHJwUXVlc3Rpb25zLnVuc2hpZnQoeyBsYWJlbDogXCJTZWxlY3RcIiwgdmFsdWU6IFwiMVwiIH0pIH0sIGUgPT4gY29uc29sZS5sb2coZSksICgpID0+IGNvbnNvbGUubG9nKHRoaXMuZHJwUXVlc3Rpb25zKSk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIHRoaXMuY2xlYXIoKTtcclxuXHJcblxyXG4gICAgdGhpcy51c2VyZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAnb2ZjbWVtYmVyc19mbmFtZSc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICdvZmNtZW1iZXJzX21uYW1lJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ29mY21lbWJlcnNfbG5hbWUnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnb2ZjbWVtYmVyc19uYW1lJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ29mY21lbWJlcl90eXBlJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ2NpdHlfaWQnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnb2ZjbWVtYmVyc19lbWFpbGlkJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ29mY21lbWJlcnNfcGFzc3dvcmQnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnb2ZjbWVtYmVyc19hZGRyZXNzMSc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICdvZmNtZW1iZXJzX2FkZHJlc3MyJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ29mY21lbWJlcnNfcGluY29kZSc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICdvZmNtZW1iZXJzX2NvbnRhY3Rub3MnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnY291bnRyeV9pZCc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICdzdGF0ZV9pZCc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZClcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLm5ld29mY21lbWJlcnMgPSB0cnVlO1xyXG4gICAgdGhpcy5vZmNtZW1iZXJzID0ge1xyXG4gICAgICBvZmNtZW1iZXJzX2lkOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19mbmFtZTogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfbW5hbWU6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2xuYW1lOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19uYW1lOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyX3R5cGU6ICcnLFxyXG4gICAgICBjaXR5X2lkOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19lbWFpbGlkOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19wYXNzd29yZDogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfYWRkcmVzczE6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2FkZHJlc3MyOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19waW5jb2RlOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19jb250YWN0bm9zOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19hdmFpbGFiaWxpdHk6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2Rpc3BsYXluYW1lOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19kZXNjcmlwdGlvbjogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfc2VsZnJhdGluZzogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfZXhwZXJpZW5jZWxldmVsOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19nZW5kZXI6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2RvYjogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfbm9zb2Z0ZWFtbWVtYmVyczogJycsXHJcbiAgICAgIGNyZWF0ZWRhdGU6ICcnLFxyXG4gICAgICBtb2RpZmllZGRhdGU6ICcnLFxyXG4gICAgICBzdGF0dXM6ICcnXHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcblxyXG4gIHBvcHVsYXRlU3RhdGVzKGV2ZW50czE6IGFueSkge1xyXG5cclxuICAgIHRoaXMubmdNb2RlbGNvdW50cnlJZCA9IGV2ZW50czEudmFsdWU7XHJcbiAgICB0aGlzLmxvY2FsU2VydmljZS5nZXRTdGF0ZSh0aGlzLm5nTW9kZWxjb3VudHJ5SWQpLnN1YnNjcmliZShwID0+IHRoaXMuZHJwU3RhdGVJZCA9IHAsIGUgPT4gY29uc29sZS5sb2coZSksICgpID0+IGNvbnNvbGUubG9nKHRoaXMuZHJwU3RhdGVJZCkpO1xyXG4gIH1cclxuXHJcbiAgcG9wdWxhdGVDaXR5KGV2ZW50czE6IGFueSkge1xyXG5cclxuICAgIHRoaXMubmdNb2RlbFN0YXRlSWQgPSBldmVudHMxLnZhbHVlO1xyXG4gICAgdGhpcy5sb2NhbFNlcnZpY2UuZ2V0Q2l0eSh0aGlzLm5nTW9kZWxTdGF0ZUlkKS5zdWJzY3JpYmUocCA9PiB0aGlzLmRycENpdHlJZCA9IHAsIGUgPT4gY29uc29sZS5sb2coZSksICgpID0+IGNvbnNvbGUubG9nKHRoaXMuZHJwQ2l0eUlkKSk7XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCgpIHtcclxuXHJcblxyXG4gICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5tc2dzID0gW107XHJcblxyXG5cclxuICAgIHRoaXMubG9jYWxTZXJ2aWNlLmxpZmV0aW1lYmlsbGluZyh0aGlzLm9mY21lbWJlcnMpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIC8qIGhhcHB5IHBhdGggKi8gcCA9PiB0aGlzLmxpZmV0aW1lYmlsbGluZ2dyaWQgPSBwLFxyXG4gICAgICAgICAgICAvKiBlcnJvciBwYXRoICovIGUgPT4gY29uc29sZS5sb2coZSksXHJcbiAgICAgICAgICAgIC8qIG9uQ29tcGxldGUgKi8oKSA9PiB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnaW5mbycsIHN1bW1hcnk6ICdTdWNjZXNzJywgZGV0YWlsOiAnRm9ybSBVcGRhdGUgU3VjY2Vzc2Z1bGx5JyB9KSk7XHJcblxyXG5cclxuICAgIHRoaXMuY2xlYXIoKTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=
