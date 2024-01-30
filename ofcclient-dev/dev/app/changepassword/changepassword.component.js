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
var index_1 = require('../shared/changepassword/index');
var app_component_1 = require('../app.component');
var ChangepasswordComponent = (function () {
    function ChangepasswordComponent(router, localService, appComponent, fb, route, mycur, mydate1, emailval) {
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
    ChangepasswordComponent.prototype.ngOnInit = function () {
        this.clear();
    };
    ChangepasswordComponent.prototype.clear = function () {
        this.newofcmembers = true;
        this.oldpassword = '';
        this.newpassword = '';
        this.confirmpassword = '';
    };
    ChangepasswordComponent.prototype.populateStates = function (events1) {
        var _this = this;
        this.ngModelcountryId = events1.value;
        this.localService.getState(this.ngModelcountryId).subscribe(function (p) { return _this.drpStateId = p; }, function (e) { return console.log(e); }, function () { });
    };
    ChangepasswordComponent.prototype.populateCity = function (events1) {
        var _this = this;
        this.ngModelStateId = events1.value;
        this.localService.getCity(this.ngModelStateId).subscribe(function (p) { return _this.drpCityId = p; }, function (e) { return console.log(e); }, function () { });
    };
    ChangepasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.msgs = [];
        var data = sessionStorage.getItem('memberdetails');
        var ofcmemsession = JSON.parse(data);
        var ofcmemsession_id = ofcmemsession.ofcmemsession_id;
        if (this.newpassword === this.confirmpassword) {
            this.localService.changepassword(ofcmemsession_id, this.oldpassword, this.newpassword)
                .subscribe(function (p) { return _this.commonerror = p; }, function (e) { return console.log(e); }, function () {
                var isSuccess = _this.commonerror.Isuccess;
                if (isSuccess === 1) {
                    _this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Password Update Successfully' });
                    _this.clear();
                }
                else {
                    _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Password Update Failed' });
                }
            });
        }
        else {
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Unmatch new and confirm password' });
        }
    };
    ChangepasswordComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-changepassword',
            templateUrl: 'changepassword.component.html',
            styleUrls: ['changepassword.component.css'],
            providers: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.ChangepasswordService, app_component_1.AppComponent, forms_1.FormBuilder, router_1.ActivatedRoute, first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}());
exports.ChangepasswordComponent = ChangepasswordComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jaGFuZ2VwYXNzd29yZC9jaGFuZ2VwYXNzd29yZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQVNqRix1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQUd6RCwyQkFBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUc1RCxrQ0FBNkIsbUNBQW1DLENBQUMsQ0FBQTtBQUNqRSxtQ0FBOEIsb0NBQW9DLENBQUMsQ0FBQTtBQUduRSxzQkFBc0MsZ0NBQWdDLENBQUMsQ0FBQTtBQUV2RSw4QkFBNkIsa0JBQWtCLENBQUMsQ0FBQTtBQWVoRDtJQTBCRSxpQ0FDVSxNQUFjLEVBQ2QsWUFBbUMsRUFDbkMsWUFBMEIsRUFDMUIsRUFBZSxFQUNmLEtBQXFCLEVBQ3JCLEtBQXFCLEVBQ3JCLE9BQXFCLEVBQ3JCLFFBQXVCO1FBbENuQyxpQkFnSEM7UUFyRlcsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUF1QjtRQUNuQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBakNqQyxTQUFJLEdBQWMsRUFBRSxDQUFDO1FBVXJCLG1CQUFjLEdBQWlCLEVBQUUsQ0FBQztRQUNsQyxpQkFBWSxHQUFpQixFQUFFLENBQUM7UUFDaEMsZUFBVSxHQUFpQixFQUFFLENBQUM7UUFDOUIsY0FBUyxHQUFpQixFQUFFLENBQUM7UUF1QjNCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBTSxLQUFJLENBQUMsWUFB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QUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSw4QkFBOEIsRUFBRSxDQUFDLENBQUM7b0JBQ2pHLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDZixDQUFDO2dCQUNELElBQUksQ0FBQyxDQUFDO29CQUNKLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSx3QkFBd0IsRUFBRSxDQUFDLENBQUM7Z0JBQ3BHLENBQUM7WUFHSCxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxrQ0FBa0MsRUFBRSxDQUFDLENBQUM7UUFDOUcsQ0FBQztJQUlILENBQUM7SUFySEg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztZQUMzQyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBRTFCLENBQUM7OytCQUFBO0lBaUhGLDhCQUFDO0FBQUQsQ0FoSEEsQUFnSEMsSUFBQTtBQWhIWSwrQkFBdUIsMEJBZ0huQyxDQUFBIiwiZmlsZSI6ImFwcC9jaGFuZ2VwYXNzd29yZC9jaGFuZ2VwYXNzd29yZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IERhdGFUYWJsZU1vZHVsZSwgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBEaWFsb2dNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBJbnB1dFRleHRNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBDYWxlbmRhck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNZXNzYWdlc01vZHVsZSwgTWVzc2FnZSwgR3Jvd2wgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBQYW5lbE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IElucHV0VGV4dGFyZWFNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBNeUN1cnJlbmN5UGlwZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9maXJzdC5waXBlJztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IFNlbGVjdEl0ZW0gfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZSc7XHJcbmltcG9ydCB7IEN1c3RvbVZhbGlkYXRvciB9IGZyb20gJy4uL3NoYXJlZC92YWxpZGF0b3JzL3ZhbGlkYXRvci5kaXJlY3RpdmUnO1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlcGFzc3dvcmRTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2NoYW5nZXBhc3N3b3JkL2luZGV4JztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4uL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPRkNNZW1iZXJzIH0gZnJvbSAnLi9vZmNtZW1iZXJzJztcclxuaW1wb3J0IHsgT0ZDbWVtU2Vzc2lvbiB9IGZyb20gJy4vb2ZjbWVtc2Vzc2lvbic7XHJcbmltcG9ydCB7IENvbW1vbkVycm9yIH0gZnJvbSAnLi9jb21tb25lcnJvcic7XHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEFib3V0Q29tcG9uZW50LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NkLWNoYW5nZXBhc3N3b3JkJyxcclxuICB0ZW1wbGF0ZVVybDogJ2NoYW5nZXBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnY2hhbmdlcGFzc3dvcmQuY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW0FwcENvbXBvbmVudF1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VwYXNzd29yZENvbXBvbmVudCB7XHJcbiAgbXNnczogTWVzc2FnZVtdID0gW107XHJcbiAgdXNlcmZvcm06IEZvcm1Hcm91cDtcclxuICBib29sY2hhbmdlcGFzc3dvcmQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbW1vbmVycm9yOiBDb21tb25FcnJvcjtcclxuICBvZmNtZW1iZXJzOiBPRkNNZW1iZXJzO1xyXG4gIG5ld29mY21lbWJlcnM6IGJvb2xlYW47XHJcblxyXG5cclxuXHJcbiAgb2ZjbWVtYmVyc0dyaWQ6IE9GQ01lbWJlcnNbXSA9IFtdO1xyXG4gIGRycENvdW50cnlJZDogU2VsZWN0SXRlbVtdID0gW107XHJcbiAgZHJwU3RhdGVJZDogU2VsZWN0SXRlbVtdID0gW107XHJcbiAgZHJwQ2l0eUlkOiBTZWxlY3RJdGVtW10gPSBbXTtcclxuXHJcbiAgbmdNb2RlbGNvdW50cnlJZDogc3RyaW5nO1xyXG4gIG5nTW9kZWxTdGF0ZUlkOiBzdHJpbmc7XHJcblxyXG4gIHN1Ym1pdHRlZDogYm9vbGVhbjtcclxuXHJcbiAgLy9maWVsZHMgZnJvbSBmb3JtLmh0bWxcclxuICBvbGRwYXNzd29yZDogc3RyaW5nO1xyXG4gIG5ld3Bhc3N3b3JkOiBzdHJpbmc7XHJcbiAgY29uZmlybXBhc3N3b3JkOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgbG9jYWxTZXJ2aWNlOiBDaGFuZ2VwYXNzd29yZFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50LFxyXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgbXljdXI6IE15Q3VycmVuY3lQaXBlLFxyXG4gICAgcHJpdmF0ZSBteWRhdGUxOiBNeURhdGVGb3JtYXQsXHJcbiAgICBwcml2YXRlIGVtYWlsdmFsOiBFbWFpbFZhbGlkYXRlXHJcbiAgKSB7XHJcblxyXG4gICAgdGhpcy5sb2NhbFNlcnZpY2UuZ2V0Q291bnRyeSgnaGonKS5zdWJzY3JpYmUocCA9PiB7IHRoaXMuZHJwQ291bnRyeUlkID0gcDsgdGhpcy5kcnBDb3VudHJ5SWQudW5zaGlmdCh7IGxhYmVsOiBcIlNlbGVjdFwiLCB2YWx1ZTogXCIxXCIgfSkgfSwgZSA9PiBjb25zb2xlLmxvZyhlKSwgKCkgPT4ge30pO1xyXG5cclxuICB9XHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuY2xlYXIoKTtcclxuXHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMubmV3b2ZjbWVtYmVycyA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5vbGRwYXNzd29yZCA9ICcnO1xyXG4gICAgdGhpcy5uZXdwYXNzd29yZCA9ICcnO1xyXG4gICAgdGhpcy5jb25maXJtcGFzc3dvcmQgPSAnJztcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgcG9wdWxhdGVTdGF0ZXMoZXZlbnRzMTogYW55KSB7XHJcblxyXG4gICAgdGhpcy5uZ01vZGVsY291bnRyeUlkID0gZXZlbnRzMS52YWx1ZTtcclxuICAgIHRoaXMubG9jYWxTZXJ2aWNlLmdldFN0YXRlKHRoaXMubmdNb2RlbGNvdW50cnlJZCkuc3Vic2NyaWJlKHAgPT4gdGhpcy5kcnBTdGF0ZUlkID0gcCwgZSA9PiBjb25zb2xlLmxvZyhlKSwgKCkgPT4ge30pO1xyXG4gIH1cclxuXHJcbiAgcG9wdWxhdGVDaXR5KGV2ZW50czE6IGFueSkge1xyXG5cclxuICAgIHRoaXMubmdNb2RlbFN0YXRlSWQgPSBldmVudHMxLnZhbHVlO1xyXG4gICAgdGhpcy5sb2NhbFNlcnZpY2UuZ2V0Q2l0eSh0aGlzLm5nTW9kZWxTdGF0ZUlkKS5zdWJzY3JpYmUocCA9PiB0aGlzLmRycENpdHlJZCA9IHAsIGUgPT4gY29uc29sZS5sb2coZSksICgpID0+IHt9KTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0KCkge1xyXG5cclxuXHJcbiAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICB0aGlzLm1zZ3MgPSBbXTtcclxuICAgXHJcbiAgICB2YXIgZGF0YSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ21lbWJlcmRldGFpbHMnKTtcclxuXHJcbiAgICBsZXQgb2ZjbWVtc2Vzc2lvbjogT0ZDbWVtU2Vzc2lvbiA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICBsZXQgb2ZjbWVtc2Vzc2lvbl9pZCA9IG9mY21lbXNlc3Npb24ub2ZjbWVtc2Vzc2lvbl9pZDtcclxuICAgIFxyXG4gICAgXHJcbiAgICBpZiAodGhpcy5uZXdwYXNzd29yZCA9PT0gdGhpcy5jb25maXJtcGFzc3dvcmQpIHtcclxuICAgICAgdGhpcy5sb2NhbFNlcnZpY2UuY2hhbmdlcGFzc3dvcmQob2ZjbWVtc2Vzc2lvbl9pZCwgdGhpcy5vbGRwYXNzd29yZCwgdGhpcy5uZXdwYXNzd29yZClcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgcCA9PiB0aGlzLmNvbW1vbmVycm9yID0gcCxcclxuICAgICAgICAgICAgIGUgPT4gY29uc29sZS5sb2coZSksXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuXHJcbiAgICAgICAgICBsZXQgaXNTdWNjZXNzOiBhbnkgPSB0aGlzLmNvbW1vbmVycm9yLklzdWNjZXNzO1xyXG4gICAgICAgICBcclxuICAgICAgICAgIGlmIChpc1N1Y2Nlc3MgPT09IDEpIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2luZm8nLCBzdW1tYXJ5OiAnU3VjY2VzcycsIGRldGFpbDogJ1Bhc3N3b3JkIFVwZGF0ZSBTdWNjZXNzZnVsbHknIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2Vycm9yJywgc3VtbWFyeTogJ0Vycm9yIE1lc3NhZ2UnLCBkZXRhaWw6ICdQYXNzd29yZCBVcGRhdGUgRmFpbGVkJyB9KTtcclxuICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnZXJyb3InLCBzdW1tYXJ5OiAnRXJyb3IgTWVzc2FnZScsIGRldGFpbDogJ1VubWF0Y2ggbmV3IGFuZCBjb25maXJtIHBhc3N3b3JkJyB9KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=
