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
var index_1 = require('../shared/employeeafterlogin/index');
var app_component_1 = require('../app.component');
var EmployeeafterloginComponent = (function () {
    function EmployeeafterloginComponent(router, localService, appComponent, fb, route, mycur, mydate1, emailval) {
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
    EmployeeafterloginComponent.prototype.ngOnInit = function () {
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
    EmployeeafterloginComponent.prototype.clear = function () {
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
    EmployeeafterloginComponent.prototype.populateStates = function (events1) {
        var _this = this;
        this.ngModelcountryId = events1.value;
        this.localService.getState(this.ngModelcountryId).subscribe(function (p) { return _this.drpStateId = p; }, function (e) { return console.log(e); }, function () { });
    };
    EmployeeafterloginComponent.prototype.populateCity = function (events1) {
        var _this = this;
        this.ngModelStateId = events1.value;
        this.localService.getCity(this.ngModelStateId).subscribe(function (p) { return _this.drpCityId = p; }, function (e) { return console.log(e); }, function () { });
    };
    EmployeeafterloginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.msgs = [];
        this.localService.employeeafterlogin(this.ofcmembers)
            .subscribe(function (p) { return _this.ofcmembersGrid = p; }, function (e) { return console.log(e); }, function () { return _this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Update Successfully' }); });
        this.clear();
    };
    EmployeeafterloginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-employeeafterlogin',
            templateUrl: 'employeeafterlogin.component.html',
            styleUrls: ['employeeafterlogin.component.css'],
            providers: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.EmployeeafterloginService, app_component_1.AppComponent, forms_1.FormBuilder, router_1.ActivatedRoute, first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate])
    ], EmployeeafterloginComponent);
    return EmployeeafterloginComponent;
}());
exports.EmployeeafterloginComponent = EmployeeafterloginComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9lbXBsb3llZWFmdGVybG9naW4vZW1wbG95ZWVhZnRlcmxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHNCQUFnRSxnQkFBZ0IsQ0FBQyxDQUFBO0FBU2pGLHVCQUF1QyxpQkFBaUIsQ0FBQyxDQUFBO0FBR3pELDJCQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBRzVELGtDQUE2QixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ2pFLG1DQUE4QixvQ0FBb0MsQ0FBQyxDQUFBO0FBR25FLHNCQUEwQyxvQ0FBb0MsQ0FBQyxDQUFBO0FBRS9FLDhCQUE2QixrQkFBa0IsQ0FBQyxDQUFBO0FBY2hEO0lBa0JFLHFDQUNVLE1BQWMsRUFDZCxZQUF1QyxFQUN2QyxZQUEwQixFQUMxQixFQUFlLEVBQ2YsS0FBcUIsRUFDckIsS0FBcUIsRUFDckIsT0FBcUIsRUFDckIsUUFBdUI7UUExQm5DLGlCQTBIQztRQXZHVyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQTJCO1FBQ3ZDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQWU7UUF6QmxDLFNBQUksR0FBWSxFQUFFLENBQUM7UUFPcEIsbUJBQWMsR0FBZSxFQUFFLENBQUM7UUFDOUIsaUJBQVksR0FBaUIsRUFBRSxDQUFDO1FBQ2hDLGVBQVUsR0FBaUIsRUFBRSxDQUFDO1FBQzlCLGNBQVMsR0FBaUIsRUFBRSxDQUFDO1FBa0IzQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQU0sS0FBSSxD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LE9BQUEsS0FBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLEVBQXZCLENBQXVCLEVBQzVCLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBZCxDQUFjLEVBQ25CLGNBQU0sT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsMEJBQTBCLEVBQUMsQ0FBQyxFQUF2RixDQUF1RixDQUFDLENBQUM7UUFHeEgsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQS9ISDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxXQUFXLEVBQUUsbUNBQW1DO1lBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FFMUIsQ0FBQzs7bUNBQUE7SUEySEYsa0NBQUM7QUFBRCxDQTFIQSxBQTBIQyxJQUFBO0FBMUhZLG1DQUEyQiw4QkEwSHZDLENBQUEiLCJmaWxlIjoiYXBwL2VtcGxveWVlYWZ0ZXJsb2dpbi9lbXBsb3llZWFmdGVybG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEYXRhVGFibGVNb2R1bGUsIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgRGlhbG9nTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgQ2FsZW5kYXJNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWVzc2FnZXNNb2R1bGUsIE1lc3NhZ2UsIEdyb3dsIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgUGFuZWxNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBJbnB1dFRleHRhcmVhTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgTXlDdXJyZW5jeVBpcGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZmlyc3QucGlwZSc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBTZWxlY3RJdGVtIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgTXlEYXRlRm9ybWF0IH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL215ZGF0ZWZvcm1hdC5waXBlJztcclxuaW1wb3J0IHsgRW1haWxWYWxpZGF0ZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9lbWFpbHZhbGlkYXRlLnBpcGUnO1xyXG5pbXBvcnQgeyBDdXN0b21WYWxpZGF0b3IgfSBmcm9tICcuLi9zaGFyZWQvdmFsaWRhdG9ycy92YWxpZGF0b3IuZGlyZWN0aXZlJztcclxuXHJcbmltcG9ydCB7IEVtcGxveWVlYWZ0ZXJsb2dpblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvZW1wbG95ZWVhZnRlcmxvZ2luL2luZGV4JztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4uL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPRkNNZW1iZXJzIH0gZnJvbSAnLi9vZmNtZW1iZXJzJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEFib3V0Q29tcG9uZW50LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NkLWVtcGxveWVlYWZ0ZXJsb2dpbicsXHJcbiAgdGVtcGxhdGVVcmw6ICdlbXBsb3llZWFmdGVybG9naW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydlbXBsb3llZWFmdGVybG9naW4uY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW0FwcENvbXBvbmVudF1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbXBsb3llZWFmdGVybG9naW5Db21wb25lbnQge1xyXG4gbXNnczogTWVzc2FnZVtdPVtdO1xyXG4gIHVzZXJmb3JtOiBGb3JtR3JvdXA7XHJcbiAgYm9vbGVtcGxveWVlYWZ0ZXJsb2dpbjogYm9vbGVhbjtcclxuXHJcbiAgb2ZjbWVtYmVyczogT0ZDTWVtYmVycztcclxuICBuZXdvZmNtZW1iZXJzOiBib29sZWFuO1xyXG5cclxub2ZjbWVtYmVyc0dyaWQ6IE9GQ01lbWJlcnNbXT1bXTtcclxuICBkcnBDb3VudHJ5SWQ6IFNlbGVjdEl0ZW1bXSA9IFtdO1xyXG4gIGRycFN0YXRlSWQ6IFNlbGVjdEl0ZW1bXSA9IFtdO1xyXG4gIGRycENpdHlJZDogU2VsZWN0SXRlbVtdID0gW107XHJcblxyXG4gIG5nTW9kZWxjb3VudHJ5SWQ6IHN0cmluZztcclxuICBuZ01vZGVsU3RhdGVJZDogc3RyaW5nO1xyXG5cclxuICAgc3VibWl0dGVkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGxvY2FsU2VydmljZTogRW1wbG95ZWVhZnRlcmxvZ2luU2VydmljZSxcclxuICAgIHByaXZhdGUgYXBwQ29tcG9uZW50OiBBcHBDb21wb25lbnQsXHJcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBteWN1cjogTXlDdXJyZW5jeVBpcGUsXHJcbiAgICBwcml2YXRlIG15ZGF0ZTE6IE15RGF0ZUZvcm1hdCxcclxuICAgIHByaXZhdGUgZW1haWx2YWw6IEVtYWlsVmFsaWRhdGVcclxuICApIHtcclxuXHJcbiAgICB0aGlzLmxvY2FsU2VydmljZS5nZXRDb3VudHJ5KCdoaicpLnN1YnNjcmliZShwID0+IHsgdGhpcy5kcnBDb3VudHJ5SWQgPSBwOyB0aGlzLmRycENvdW50cnlJZC51bnNoaWZ0KHsgbGFiZWw6IFwiU2VsZWN0XCIsIHZhbHVlOiBcIjFcIiB9KSB9LCBlID0+IGNvbnNvbGUubG9nKGUpLCAoKSA9PiB7fSk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIHRoaXMuY2xlYXIoKTtcclxuXHJcblxyXG4gICAgdGhpcy51c2VyZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAnb2ZjbWVtYmVyc19mbmFtZSc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICdvZmNtZW1iZXJzX21uYW1lJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ29mY21lbWJlcnNfbG5hbWUnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnb2ZjbWVtYmVyc19uYW1lJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ29mY21lbWJlcl90eXBlJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ2NpdHlfaWQnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnb2ZjbWVtYmVyc19lbWFpbGlkJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ29mY21lbWJlcnNfcGFzc3dvcmQnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnb2ZjbWVtYmVyc19hZGRyZXNzMSc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICdvZmNtZW1iZXJzX2FkZHJlc3MyJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ29mY21lbWJlcnNfcGluY29kZSc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICdvZmNtZW1iZXJzX2NvbnRhY3Rub3MnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnY291bnRyeV9pZCc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICdzdGF0ZV9pZCc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZClcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLm5ld29mY21lbWJlcnMgPSB0cnVlO1xyXG4gICAgdGhpcy5vZmNtZW1iZXJzID0ge1xyXG4gICAgICBvZmNtZW1iZXJzX2lkOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19mbmFtZTogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfbW5hbWU6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2xuYW1lOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19uYW1lOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyX3R5cGU6ICcnLFxyXG4gICAgICBjaXR5X2lkOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19lbWFpbGlkOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19wYXNzd29yZDogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfYWRkcmVzczE6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2FkZHJlc3MyOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19waW5jb2RlOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19jb250YWN0bm9zOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19hdmFpbGFiaWxpdHk6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2Rpc3BsYXluYW1lOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19kZXNjcmlwdGlvbjogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfc2VsZnJhdGluZzogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfZXhwZXJpZW5jZWxldmVsOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19nZW5kZXI6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2RvYjogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfbm9zb2Z0ZWFtbWVtYmVyczogJycsXHJcbiAgICAgIGNyZWF0ZWRhdGU6ICcnLFxyXG4gICAgICBtb2RpZmllZGRhdGU6ICcnLFxyXG4gICAgICBzdGF0dXM6ICcnXHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcblxyXG4gIHBvcHVsYXRlU3RhdGVzKGV2ZW50czE6IGFueSkge1xyXG4gICBcclxuICAgIHRoaXMubmdNb2RlbGNvdW50cnlJZCA9IGV2ZW50czEudmFsdWU7XHJcbiAgICB0aGlzLmxvY2FsU2VydmljZS5nZXRTdGF0ZSh0aGlzLm5nTW9kZWxjb3VudHJ5SWQpLnN1YnNjcmliZShwID0+IHRoaXMuZHJwU3RhdGVJZCA9IHAsIGUgPT4gY29uc29sZS5sb2coZSksICgpID0+IHt9KTtcclxuICB9XHJcblxyXG4gIHBvcHVsYXRlQ2l0eShldmVudHMxOiBhbnkpIHtcclxuICAgXHJcbiAgICB0aGlzLm5nTW9kZWxTdGF0ZUlkID0gZXZlbnRzMS52YWx1ZTtcclxuICAgIHRoaXMubG9jYWxTZXJ2aWNlLmdldENpdHkodGhpcy5uZ01vZGVsU3RhdGVJZCkuc3Vic2NyaWJlKHAgPT4gdGhpcy5kcnBDaXR5SWQgPSBwLCBlID0+IGNvbnNvbGUubG9nKGUpLCAoKSA9PiB7fSk7XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCgpe1xyXG4gICAgXHJcbiAgICAgXHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubXNncyA9IFtdO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgIHRoaXMubG9jYWxTZXJ2aWNlLmVtcGxveWVlYWZ0ZXJsb2dpbih0aGlzLm9mY21lbWJlcnMpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAvKiBoYXBweSBwYXRoICovIHAgPT4gdGhpcy5vZmNtZW1iZXJzR3JpZCA9IHAsXHJcbiAgICAgICAgICAgIC8qIGVycm9yIHBhdGggKi8gZSA9PiBjb25zb2xlLmxvZyhlKSxcclxuICAgICAgICAgICAgLyogb25Db21wbGV0ZSAqLyAoKSA9PiB0aGlzLm1zZ3MucHVzaCh7c2V2ZXJpdHk6J2luZm8nLCBzdW1tYXJ5OidTdWNjZXNzJywgZGV0YWlsOidGb3JtIFVwZGF0ZSBTdWNjZXNzZnVsbHknfSkpO1xyXG4gICAgICBcclxuICAgICAgIFxyXG4gICAgdGhpcy5jbGVhcigpOyAgIFxyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==
