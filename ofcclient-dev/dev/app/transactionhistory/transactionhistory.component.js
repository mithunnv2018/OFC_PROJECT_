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
var index_1 = require('../shared/transactionhistory/index');
var app_component_1 = require('../app.component');
var TransactionhistoryComponent = (function () {
    function TransactionhistoryComponent(router, localService, appComponent, fb, route, mycur, mydate1, emailval) {
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
        this.transactionhistorygrid = [];
        this.drpQuestions = [];
        this.drpStateId = [];
        this.drpCityId = [];
        this.selectedSecQuetions = [];
        this.checked = false;
        this.localService.getCountry('hj').subscribe(function (p) { _this.drpQuestions = p; _this.drpQuestions.unshift({ label: "Select", value: "1" }); }, function (e) { return console.log(e); }, function () { return console.log(_this.drpQuestions); });
    }
    TransactionhistoryComponent.prototype.ngOnInit = function () {
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
    TransactionhistoryComponent.prototype.clear = function () {
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
    TransactionhistoryComponent.prototype.populateStates = function (events1) {
        var _this = this;
        this.ngModelcountryId = events1.value;
        this.localService.getState(this.ngModelcountryId).subscribe(function (p) { return _this.drpStateId = p; }, function (e) { return console.log(e); }, function () { return console.log(_this.drpStateId); });
    };
    TransactionhistoryComponent.prototype.populateCity = function (events1) {
        var _this = this;
        this.ngModelStateId = events1.value;
        this.localService.getCity(this.ngModelStateId).subscribe(function (p) { return _this.drpCityId = p; }, function (e) { return console.log(e); }, function () { return console.log(_this.drpCityId); });
    };
    TransactionhistoryComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.msgs = [];
        this.localService.transactionhistory(this.ofcmembers)
            .subscribe(function (p) { return _this.transactionhistorygrid = p; }, function (e) { return console.log(e); }, function () { return _this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Update Successfully' }); });
        this.clear();
    };
    TransactionhistoryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-transactionhistory',
            templateUrl: 'transactionhistory.component.html',
            styleUrls: ['transactionhistory.component.css'],
            providers: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.TransactionhistoryService, app_component_1.AppComponent, forms_1.FormBuilder, router_1.ActivatedRoute, first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate])
    ], TransactionhistoryComponent);
    return TransactionhistoryComponent;
}());
exports.TransactionhistoryComponent = TransactionhistoryComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90cmFuc2FjdGlvbmhpc3RvcnkvdHJhbnNhY3Rpb25oaXN0b3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHNCQUFnRSxnQkFBZ0IsQ0FBQyxDQUFBO0FBU2pGLHVCQUF1QyxpQkFBaUIsQ0FBQyxDQUFBO0FBR3pELDJCQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBRzVELGtDQUE2QixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ2pFLG1DQUE4QixvQ0FBb0MsQ0FBQyxDQUFBO0FBR25FLHNCQUEwQyxvQ0FBb0MsQ0FBQyxDQUFBO0FBRS9FLDhCQUE2QixrQkFBa0IsQ0FBQyxDQUFBO0FBY2hEO0lBb0JFLHFDQUNVLE1BQWMsRUFDZCxZQUF1QyxFQUN2QyxZQUEwQixFQUMxQixFQUFlLEVBQ2YsS0FBcUIsRUFDckIsS0FBcUIsRUFDckIsT0FBcUIsRUFDckIsUUFBdUI7UUE1Qm5DLGlCQTRIQztRQXZHVyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQTJCO1FBQ3ZDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQWU7UUEzQmpDLFNBQUksR0FBYyxFQUFFLENBQUM7UUFPckIsMkJBQXNCLEdBQWlCLEVBQUUsQ0FBQztRQUMxQyxpQkFBWSxHQUFpQixFQUFFLENBQUM7UUFDaEMsZUFBVSxHQUFpQixFQUFFLENBQUM7UUFDOUIsY0FBUyxHQUFpQixFQUFFLENBQUM7UUFNOUIsd0JBQW1CLEdBQWEsRUFBRSxDQUFDO1FBRWxDLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFZdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxV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QUEyQixDQUFDLENBQUM7SUFDNUksQ0FBQztJQUVELDhDQUFRLEdBQVI7UUFBQSxpQkFlQztRQVpDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBR2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ2xELFNBQVMsQ0FDYSxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLEVBQS9CLENBQStCLEVBQ3BDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBZCxDQUFjLEVBQ3BCLGNBQU0sT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQyxFQUE1RixDQUE0RixDQUFDLENBQUM7UUFHNUgsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQWpJSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxXQUFXLEVBQUUsbUNBQW1DO1lBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FFMUIsQ0FBQzs7bUNBQUE7SUE2SEYsa0NBQUM7QUFBRCxDQTVIQSxBQTRIQyxJQUFBO0FBNUhZLG1DQUEyQiw4QkE0SHZDLENBQUEiLCJmaWxlIjoiYXBwL3RyYW5zYWN0aW9uaGlzdG9yeS90cmFuc2FjdGlvbmhpc3RvcnkuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEYXRhVGFibGVNb2R1bGUsIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgRGlhbG9nTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgQ2FsZW5kYXJNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWVzc2FnZXNNb2R1bGUsIE1lc3NhZ2UsIEdyb3dsIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgUGFuZWxNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBJbnB1dFRleHRhcmVhTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgTXlDdXJyZW5jeVBpcGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZmlyc3QucGlwZSc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBTZWxlY3RJdGVtIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgTXlEYXRlRm9ybWF0IH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL215ZGF0ZWZvcm1hdC5waXBlJztcclxuaW1wb3J0IHsgRW1haWxWYWxpZGF0ZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9lbWFpbHZhbGlkYXRlLnBpcGUnO1xyXG5pbXBvcnQgeyBDdXN0b21WYWxpZGF0b3IgfSBmcm9tICcuLi9zaGFyZWQvdmFsaWRhdG9ycy92YWxpZGF0b3IuZGlyZWN0aXZlJztcclxuXHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uaGlzdG9yeVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvdHJhbnNhY3Rpb25oaXN0b3J5L2luZGV4JztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4uL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPRkNNZW1iZXJzIH0gZnJvbSAnLi9vZmNtZW1iZXJzJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEFib3V0Q29tcG9uZW50LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NkLXRyYW5zYWN0aW9uaGlzdG9yeScsXHJcbiAgdGVtcGxhdGVVcmw6ICd0cmFuc2FjdGlvbmhpc3RvcnkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyd0cmFuc2FjdGlvbmhpc3RvcnkuY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW0FwcENvbXBvbmVudF1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvbmhpc3RvcnlDb21wb25lbnQge1xyXG4gIG1zZ3M6IE1lc3NhZ2VbXSA9IFtdO1xyXG4gIHVzZXJmb3JtOiBGb3JtR3JvdXA7XHJcbiAgYm9vbHRyYW5zYWN0aW9uaGlzdG9yeTogYm9vbGVhbjtcclxuXHJcbiAgb2ZjbWVtYmVyczogT0ZDTWVtYmVycztcclxuICBuZXdvZmNtZW1iZXJzOiBib29sZWFuO1xyXG5cclxuICB0cmFuc2FjdGlvbmhpc3RvcnlncmlkOiBPRkNNZW1iZXJzW10gPSBbXTtcclxuICBkcnBRdWVzdGlvbnM6IFNlbGVjdEl0ZW1bXSA9IFtdO1xyXG4gIGRycFN0YXRlSWQ6IFNlbGVjdEl0ZW1bXSA9IFtdO1xyXG4gIGRycENpdHlJZDogU2VsZWN0SXRlbVtdID0gW107XHJcblxyXG4gIG5nTW9kZWxjb3VudHJ5SWQ6IHN0cmluZztcclxuICBuZ01vZGVsU3RhdGVJZDogc3RyaW5nO1xyXG5cclxuICBzdWJtaXR0ZWQ6IGJvb2xlYW47XHJcbiBzZWxlY3RlZFNlY1F1ZXRpb25zOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBsb2NhbFNlcnZpY2U6IFRyYW5zYWN0aW9uaGlzdG9yeVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50LFxyXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgbXljdXI6IE15Q3VycmVuY3lQaXBlLFxyXG4gICAgcHJpdmF0ZSBteWRhdGUxOiBNeURhdGVGb3JtYXQsXHJcbiAgICBwcml2YXRlIGVtYWlsdmFsOiBFbWFpbFZhbGlkYXRlXHJcbiAgKSB7XHJcblxyXG4gICAgdGhpcy5sb2NhbFNlcnZpY2UuZ2V0Q291bnRyeSgnaGonKS5zdWJzY3JpYmUocCA9PiB7IHRoaXMuZHJwUXVlc3Rpb25zID0gcDsgdGhpcy5kcnBRdWVzdGlvbnMudW5zaGlmdCh7IGxhYmVsOiBcIlNlbGVjdFwiLCB2YWx1ZTogXCIxXCIgfSkgfSwgZSA9PiBjb25zb2xlLmxvZyhlKSwgKCkgPT4gY29uc29sZS5sb2codGhpcy5kcnBRdWVzdGlvbnMpKTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgdGhpcy5jbGVhcigpO1xyXG5cclxuXHJcbiAgICB0aGlzLnVzZXJmb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICdvZmNtZW1iZXJzX2ZuYW1lJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ29mY21lbWJlcnNfbW5hbWUnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnb2ZjbWVtYmVyc19sbmFtZSc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICdvZmNtZW1iZXJzX25hbWUnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnb2ZjbWVtYmVyX3R5cGUnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnY2l0eV9pZCc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICdvZmNtZW1iZXJzX2VtYWlsaWQnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnb2ZjbWVtYmVyc19wYXNzd29yZCc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICdvZmNtZW1iZXJzX2FkZHJlc3MxJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ29mY21lbWJlcnNfYWRkcmVzczInOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnb2ZjbWVtYmVyc19waW5jb2RlJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ29mY21lbWJlcnNfY29udGFjdG5vcyc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICdjb3VudHJ5X2lkJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgJ3N0YXRlX2lkJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMubmV3b2ZjbWVtYmVycyA9IHRydWU7XHJcbiAgICB0aGlzLm9mY21lbWJlcnMgPSB7XHJcbiAgICAgIG9mY21lbWJlcnNfaWQ6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2ZuYW1lOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19tbmFtZTogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfbG5hbWU6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX25hbWU6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJfdHlwZTogJycsXHJcbiAgICAgIGNpdHlfaWQ6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2VtYWlsaWQ6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX3Bhc3N3b3JkOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19hZGRyZXNzMTogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfYWRkcmVzczI6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX3BpbmNvZGU6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2NvbnRhY3Rub3M6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2F2YWlsYWJpbGl0eTogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfZGlzcGxheW5hbWU6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2Rlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19zZWxmcmF0aW5nOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19leHBlcmllbmNlbGV2ZWw6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2dlbmRlcjogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfZG9iOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19ub3NvZnRlYW1tZW1iZXJzOiAnJyxcclxuICAgICAgY3JlYXRlZGF0ZTogJycsXHJcbiAgICAgIG1vZGlmaWVkZGF0ZTogJycsXHJcbiAgICAgIHN0YXR1czogJydcclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgcG9wdWxhdGVTdGF0ZXMoZXZlbnRzMTogYW55KSB7XHJcblxyXG4gICAgdGhpcy5uZ01vZGVsY291bnRyeUlkID0gZXZlbnRzMS52YWx1ZTtcclxuICAgIHRoaXMubG9jYWxTZXJ2aWNlLmdldFN0YXRlKHRoaXMubmdNb2RlbGNvdW50cnlJZCkuc3Vic2NyaWJlKHAgPT4gdGhpcy5kcnBTdGF0ZUlkID0gcCwgZSA9PiBjb25zb2xlLmxvZyhlKSwgKCkgPT4gY29uc29sZS5sb2codGhpcy5kcnBTdGF0ZUlkKSk7XHJcbiAgfVxyXG5cclxuICBwb3B1bGF0ZUNpdHkoZXZlbnRzMTogYW55KSB7XHJcblxyXG4gICAgdGhpcy5uZ01vZGVsU3RhdGVJZCA9IGV2ZW50czEudmFsdWU7XHJcbiAgICB0aGlzLmxvY2FsU2VydmljZS5nZXRDaXR5KHRoaXMubmdNb2RlbFN0YXRlSWQpLnN1YnNjcmliZShwID0+IHRoaXMuZHJwQ2l0eUlkID0gcCwgZSA9PiBjb25zb2xlLmxvZyhlKSwgKCkgPT4gY29uc29sZS5sb2codGhpcy5kcnBDaXR5SWQpKTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0KCkge1xyXG5cclxuXHJcbiAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICB0aGlzLm1zZ3MgPSBbXTtcclxuXHJcblxyXG4gICAgdGhpcy5sb2NhbFNlcnZpY2UudHJhbnNhY3Rpb25oaXN0b3J5KHRoaXMub2ZjbWVtYmVycylcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgLyogaGFwcHkgcGF0aCAqLyBwID0+IHRoaXMudHJhbnNhY3Rpb25oaXN0b3J5Z3JpZCA9IHAsXHJcbiAgICAgICAgICAgIC8qIGVycm9yIHBhdGggKi8gZSA9PiBjb25zb2xlLmxvZyhlKSxcclxuICAgICAgICAgICAgLyogb25Db21wbGV0ZSAqLygpID0+IHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdpbmZvJywgc3VtbWFyeTogJ1N1Y2Nlc3MnLCBkZXRhaWw6ICdGb3JtIFVwZGF0ZSBTdWNjZXNzZnVsbHknIH0pKTtcclxuXHJcblxyXG4gICAgdGhpcy5jbGVhcigpO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==
