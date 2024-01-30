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
var index_1 = require('../shared/securityquestion/index');
var app_component_1 = require('../app.component');
var SecurityquestionComponent = (function () {
    function SecurityquestionComponent(router, localService, appComponent, fb, route, mycur, mydate1, emailval) {
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
        this.selectedSecQuetions = [];
        this.drpQuestions = [];
        this.checked = false;
        var data = sessionStorage.getItem('memberdetails');
        var memberdetails;
        memberdetails = JSON.parse(data);
        this.sessionid = memberdetails.ofcmemsession_id;
        this.localService.getExistingQuestion(this.sessionid).subscribe(function (p) {
            var existingQuestion = p[0];
            _this.existingQues = existingQuestion.securityquest_name;
        }, function (e) { return console.log(e); }, function () { });
        this.localService.getQuestions('hj').subscribe(function (p) { _this.drpQuestions = p; _this.drpQuestions.unshift({ label: "Select", value: "1" }); }, function (e) { return console.log(e); }, function () { });
    }
    SecurityquestionComponent.prototype.ngOnInit = function () {
        this.clear();
        this.userform = this.fb.group({
            'oldsecurityanswer': new forms_1.FormControl('', forms_1.Validators.required),
            'newsecurityid': new forms_1.FormControl('', forms_1.Validators.required),
            'newsecurityanswer': new forms_1.FormControl('', forms_1.Validators.required)
        });
    };
    SecurityquestionComponent.prototype.clear = function () {
    };
    SecurityquestionComponent.prototype.populateCity = function (events1) {
    };
    SecurityquestionComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.msgs = [];
        this.localService.changeSecurityQuestion(this.sessionid, this.oldsecurityanswer, this.newsecurityid, this.newsecurityanswer)
            .subscribe(function (p) { return _this.commonError = p; }, function (e) { return console.log(e); }, function () {
            if (_this.commonError.Isuccess == "1") {
                _this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Update Successfully' });
            }
            else {
                var err = _this.commonError.Error;
                _this.msgs.push({ severity: 'info', summary: 'Error', detail: err });
            }
        });
        this.clear();
    };
    SecurityquestionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-securityquestion',
            templateUrl: 'securityquestion.component.html',
            styleUrls: ['securityquestion.component.css'],
            providers: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.SecurityquestionService, app_component_1.AppComponent, forms_1.FormBuilder, router_1.ActivatedRoute, first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate])
    ], SecurityquestionComponent);
    return SecurityquestionComponent;
}());
exports.SecurityquestionComponent = SecurityquestionComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZWN1cml0eXF1ZXN0aW9uL3NlY3VyaXR5cXVlc3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsc0JBQWdFLGdCQUFnQixDQUFDLENBQUE7QUFTakYsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFHekQsMkJBQStCLDRCQUE0QixDQUFDLENBQUE7QUFHNUQsa0NBQTZCLG1DQUFtQyxDQUFDLENBQUE7QUFDakUsbUNBQThCLG9DQUFvQyxDQUFDLENBQUE7QUFFbkUsc0JBQXdDLGtDQUFrQyxDQUFDLENBQUE7QUFDM0UsOEJBQTZCLGtCQUFrQixDQUFDLENBQUE7QUFlaEQ7SUFzQkUsbUNBQ1UsTUFBYyxFQUNkLFlBQXFDLEVBQ3JDLFlBQTBCLEVBQzFCLEVBQWUsRUFDZixLQUFxQixFQUNyQixLQUFxQixFQUNyQixPQUFxQixFQUNyQixRQUF1QjtRQTlCbkMsaUJBb0dDO1FBN0VXLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBeUI7UUFDckMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQTdCakMsU0FBSSxHQUFjLEVBQUUsQ0FBQztRQWdCckIsd0JBQW1CLEdBQWEsRUFBRSxDQUFDO1FBRW5DLGlCQUFZLEdBQWMsRUFBRSxDQUFDO1FBRTdCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFZdkIsSUFBSSxJQUFJLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuRCxJQUFJLGFBQTRCLENBQUM7UUFDakMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMs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QyxDQUNBLENBQUM7UUFHSixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBekdIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7WUFDN0MsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUUxQixDQUFDOztpQ0FBQTtJQXFHRixnQ0FBQztBQUFELENBcEdBLEFBb0dDLElBQUE7QUFwR1ksaUNBQXlCLDRCQW9HckMsQ0FBQSIsImZpbGUiOiJhcHAvc2VjdXJpdHlxdWVzdGlvbi9zZWN1cml0eXF1ZXN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRGF0YVRhYmxlTW9kdWxlLCB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IERpYWxvZ01vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IElucHV0VGV4dE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IENhbGVuZGFyTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1lc3NhZ2VzTW9kdWxlLCBNZXNzYWdlLCBHcm93bCB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IFBhbmVsTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgSW5wdXRUZXh0YXJlYU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgU2VsZWN0SXRlbSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE15RGF0ZUZvcm1hdCB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9teWRhdGVmb3JtYXQucGlwZSc7XHJcbmltcG9ydCB7IEVtYWlsVmFsaWRhdGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZW1haWx2YWxpZGF0ZS5waXBlJztcclxuaW1wb3J0IHsgQ3VzdG9tVmFsaWRhdG9yIH0gZnJvbSAnLi4vc2hhcmVkL3ZhbGlkYXRvcnMvdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFNlY3VyaXR5cXVlc3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlY3VyaXR5cXVlc3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT0ZDbWVtU2Vzc2lvbiB9IGZyb20gJy4uL2xvZ2lucGFnZS9vZmNtZW1zZXNzaW9uJztcclxuaW1wb3J0IHsgQ29tbW9uRXJyb3IgfSBmcm9tICcuLi9sb2dpbnBhZ2UvY29tbW9uZXJyb3InO1xyXG5pbXBvcnQgeyBFeGlzdGluZ1F1ZXN0aW9uIH0gZnJvbSAnLi9leGlzdGluZ3F1ZXN0aW9uJztcclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgQWJvdXRDb21wb25lbnQuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnc2Qtc2VjdXJpdHlxdWVzdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICdzZWN1cml0eXF1ZXN0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnc2VjdXJpdHlxdWVzdGlvbi5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbQXBwQ29tcG9uZW50XVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5cXVlc3Rpb25Db21wb25lbnQge1xyXG4gIG1zZ3M6IE1lc3NhZ2VbXSA9IFtdO1xyXG4gIHVzZXJmb3JtOiBGb3JtR3JvdXA7XHJcbiAgYm9vbHNlY3VyaXR5cXVlc3Rpb246IGJvb2xlYW47XHJcblxyXG4gIGV4aXN0aW5nUXVlc3Rpb25zOiBFeGlzdGluZ1F1ZXN0aW9uW107XHJcblxyXG4gIGNvbW1vbkVycm9yOiBDb21tb25FcnJvcjtcclxuICBvRkNtZW1TZXNzaW9uOiBPRkNtZW1TZXNzaW9uO1xyXG5cclxuICBleGlzdGluZ1F1ZXM6IHN0cmluZztcclxuICBvbGRzZWN1cml0eWFuc3dlcjogc3RyaW5nO1xyXG4gIG5ld3NlY3VyaXR5aWQ6IHN0cmluZztcclxuICBuZXdzZWN1cml0eWFuc3dlcjogc3RyaW5nO1xyXG4gIHNlc3Npb25pZDogc3RyaW5nO1xyXG5cclxuICBzdWJtaXR0ZWQ6IGJvb2xlYW47XHJcbiAgc2VsZWN0ZWRTZWNRdWV0aW9uczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgZHJwUXVlc3Rpb25zOlNlbGVjdEl0ZW1bXT1bXTtcclxuICBcclxuICBjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBsb2NhbFNlcnZpY2U6IFNlY3VyaXR5cXVlc3Rpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBhcHBDb21wb25lbnQ6IEFwcENvbXBvbmVudCxcclxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIG15Y3VyOiBNeUN1cnJlbmN5UGlwZSxcclxuICAgIHByaXZhdGUgbXlkYXRlMTogTXlEYXRlRm9ybWF0LFxyXG4gICAgcHJpdmF0ZSBlbWFpbHZhbDogRW1haWxWYWxpZGF0ZVxyXG4gICkge1xyXG5cclxuICAgIHZhciBkYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbWVtYmVyZGV0YWlscycpO1xyXG4gICAgbGV0IG1lbWJlcmRldGFpbHM6IE9GQ21lbVNlc3Npb247XHJcbiAgICBtZW1iZXJkZXRhaWxzID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgIHRoaXMuc2Vzc2lvbmlkID0gbWVtYmVyZGV0YWlscy5vZmNtZW1zZXNzaW9uX2lkO1xyXG5cclxuICAgIHRoaXMubG9jYWxTZXJ2aWNlLmdldEV4aXN0aW5nUXVlc3Rpb24odGhpcy5zZXNzaW9uaWQpLnN1YnNjcmliZShwID0+IHtcclxuICAgIGxldCBleGlzdGluZ1F1ZXN0aW9uOiBFeGlzdGluZ1F1ZXN0aW9uID0gcFswXTtcclxuICAgIHRoaXMuZXhpc3RpbmdRdWVzPWV4aXN0aW5nUXVlc3Rpb24uc2VjdXJpdHlxdWVzdF9uYW1lO1xyXG5cclxuICAgIH0sIGUgPT4gY29uc29sZS5sb2coZSksICgpID0+IHsgfSk7XHJcblxyXG4gICAgdGhpcy5sb2NhbFNlcnZpY2UuZ2V0UXVlc3Rpb25zKCdoaicpLnN1YnNjcmliZShwID0+IHsgdGhpcy5kcnBRdWVzdGlvbnMgPSBwOyB0aGlzLmRycFF1ZXN0aW9ucy51bnNoaWZ0KHsgbGFiZWw6IFwiU2VsZWN0XCIsIHZhbHVlOiBcIjFcIiB9KSB9LCBlID0+IGNvbnNvbGUubG9nKGUpLCAoKSA9PiB7fSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgdGhpcy5jbGVhcigpO1xyXG5cclxuXHJcbiAgICB0aGlzLnVzZXJmb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcblxyXG4gICAgICAnb2xkc2VjdXJpdHlhbnN3ZXInOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAnbmV3c2VjdXJpdHlpZCc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICduZXdzZWN1cml0eWFuc3dlcic6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZClcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcblxyXG5cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcG9wdWxhdGVDaXR5KGV2ZW50czE6IGFueSkge1xyXG5cclxuICB9XHJcblxyXG4gIG9uU3VibWl0KCkge1xyXG4gICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5tc2dzID0gW107XHJcblxyXG5cclxuICAgIHRoaXMubG9jYWxTZXJ2aWNlLmNoYW5nZVNlY3VyaXR5UXVlc3Rpb24odGhpcy5zZXNzaW9uaWQsIHRoaXMub2xkc2VjdXJpdHlhbnN3ZXIsIHRoaXMubmV3c2VjdXJpdHlpZCwgdGhpcy5uZXdzZWN1cml0eWFuc3dlcilcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgLyogaGFwcHkgcGF0aCAqLyBwID0+IHRoaXMuY29tbW9uRXJyb3IgPSBwLFxyXG4gICAgICAgICAgICAvKiBlcnJvciBwYXRoICovIGUgPT4gY29uc29sZS5sb2coZSksXHJcbiAgICAgICAgICAgIC8qIG9uQ29tcGxldGUgKi8oKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29tbW9uRXJyb3IuSXN1Y2Nlc3MgPT0gXCIxXCIpIHtcclxuICAgICAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdpbmZvJywgc3VtbWFyeTogJ1N1Y2Nlc3MnLCBkZXRhaWw6ICdGb3JtIFVwZGF0ZSBTdWNjZXNzZnVsbHknIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGxldCBlcnIgPSB0aGlzLmNvbW1vbkVycm9yLkVycm9yO1xyXG4gICAgICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2luZm8nLCBzdW1tYXJ5OiAnRXJyb3InLCBkZXRhaWw6IGVyciB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgKTtcclxuXHJcblxyXG4gICAgdGhpcy5jbGVhcigpO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==
