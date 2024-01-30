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
var index_1 = require('../shared/loginpage/index');
var router_1 = require('@angular/router');
var LoginpageComponent = (function () {
    function LoginpageComponent(fb, localService, router) {
        this.fb = fb;
        this.localService = localService;
        this.router = router;
        this.msgs = [];
    }
    LoginpageComponent.prototype.clear = function () {
        this.loginpage = {
            username: '',
            password: ''
        };
    };
    LoginpageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.localService.getLoginClient(this.loginpage.username, this.loginpage.password).subscribe(function (p) { return _this.ofcmemsession = p; }, function (e) { return console.log(e); }, function () {
            var validatemember = JSON.stringify(_this.ofcmemsession);
            if (validatemember === '[]') {
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Unauthorize User' });
            }
            else {
                _this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Update Successfully' });
                var memberdetails = _this.ofcmemsession;
                sessionStorage.setItem('memberdetails', JSON.stringify(memberdetails));
                var data = sessionStorage.getItem('memberdetails');
                var ofcsessionid_1 = _this.ofcmemsession.ofcmemsession_id;
                _this.localService.getViewOfcMember(ofcsessionid_1).subscribe(function (p) { return _this.viewofcmemsession = p; }, function (e) { return console.log(e); }, function () {
                    var viewofcmemsession = _this.viewofcmemsession;
                    if (viewofcmemsession) {
                        sessionStorage.setItem(ofcsessionid_1, JSON.stringify(viewofcmemsession));
                        _this.router.navigate(['/myprofile']);
                        _this.localService.announceMission(true);
                    }
                });
            }
            var data = sessionStorage.getItem('memberdetails');
            var ofcmemsession = JSON.parse(data);
            var ofcmemsession_id = ofcmemsession.ofcmemsession_id;
            var dataviewofcmember = sessionStorage.getItem(ofcmemsession_id);
        });
    };
    LoginpageComponent.prototype.ngOnInit = function () {
        this.clear();
        this.userform = this.fb.group({
            'username': new forms_1.FormControl('', forms_1.Validators.required),
            'password': new forms_1.FormControl('', forms_1.Validators.required)
        });
    };
    LoginpageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-loginpage',
            templateUrl: 'loginpage.component.html',
            styleUrls: ['loginpage.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, index_1.LoginPageService, router_1.Router])
    ], LoginpageComponent);
    return LoginpageComponent;
}());
exports.LoginpageComponent = LoginpageComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbnBhZ2UvbG9naW5wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHNCQUFnRSxnQkFBZ0IsQ0FBQyxDQUFBO0FBRWpGLHNCQUFpQywyQkFBMkIsQ0FBQyxDQUFBO0FBTTdELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBVXpDO0lBVUUsNEJBQW9CLEVBQWUsRUFFekIsWUFBOEIsRUFDOUIsTUFBYztRQUhKLE9BQUUsR0FBRixFQUFFLENBQWE7UUFFekIsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFUeEIsU0FBSSxHQUFjLEVBQUUsQ0FBQztJQWFyQixDQUFDO0lBRUQsa0NBQUssR0FBTDtRQUVFLElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDZixRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQTtJQUNILENBQUM7SUFJRCxxQ0FBUSxHQUFSO1FBQUEsaUJBOENDO1FBNUNDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUMxRixVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUF0QixDQUFzQixFQUMzQixVQUFBLENBQUMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxFQUNuQjtZQUNTLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBQ3RELEVBQUUsQ0FBQyxDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1lBRW5HLENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFFSixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQyxDQUFBO2dCQUM1RixJQUFJLGFBQWEsR0FBUSxLQUFJLENBQUMsYUFBYSxDQUFDO2dCQUM1QyxjQUFjLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBR3ZFLElBQUksSUFBSSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ25ELElBQUksY0FBWSxHQUFXLEtBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7Z0JBRS9ELEtBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsY0FBWSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsRUFBMUIsQ0FBMEIsRUFDMUYsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFkLENBQWMsRUFDbkI7b0JBQ00sSUFBSSxpQkFBaUIsR0FBUSxLQUFJLENBQUMsaUJBQWlCLENBQUM7b0JBQ3BELEVBQUUsQ0FBQSxDQUFDLGlCQUFpQixDQUFDLENBQUEsQ0FBQzt3QkFDcEIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7d0JBQ3hFLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzt3QkFFckMsS0FBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRTFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUNBLENBQUM7WUFDTixDQUFDO1lBR0QsSUFBSSxJQUFJLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNuRCxJQUFJLGFBQWEsR0FBa0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwRCxJQUFJLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztZQUN0RCxJQUFJLGlCQUFpQixHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUduRSxDQUFDLENBQ0EsQ0FBQztJQUVOLENBQUM7SUFLRCxxQ0FBUSxHQUFSO1FBRUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUM1QixVQUFVLEVBQUUsSUFBSSxtQkFBVyxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwRCxVQUFVLEVBQUUsSUFBSSxtQkFBVyxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUVyRCxDQUFDLENBQUM7SUFFTCxDQUFDO0lBaEdIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3ZDLENBQUM7OzBCQUFBO0lBNkZGLHlCQUFDO0FBQUQsQ0E1RkEsQUE0RkMsSUFBQTtBQTVGWSwwQkFBa0IscUJBNEY5QixDQUFBIiwiZmlsZSI6ImFwcC9sb2dpbnBhZ2UvbG9naW5wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTG9naW5QYWdlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9sb2dpbnBhZ2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBMb2dpblBhZ2UgfSBmcm9tICcuL2xvZ2lucGFnZSc7XHJcbmltcG9ydCB7IE9GQ01lbWJlcnMgfSBmcm9tICcuL29mY21lbWJlcnMnO1xyXG5pbXBvcnQgeyBNZXNzYWdlc01vZHVsZSwgTWVzc2FnZSwgR3Jvd2wsIFBhc3N3b3JkTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgT0ZDbWVtU2Vzc2lvbiB9IGZyb20gJy4vb2ZjbWVtc2Vzc2lvbic7XHJcbmltcG9ydCB7IFZpZXdPRkNtZW1TZXNzaW9uIH0gZnJvbSAnLi92aWV3b2ZjbWVtc2Vzc2lvbic7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIGxvZ2lucGFnZUNvbXBvbmVudC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzZC1sb2dpbnBhZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnbG9naW5wYWdlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbG9naW5wYWdlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5wYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvL0Zvcm0gZ3JvcCBcclxuICB1c2VyZm9ybTogRm9ybUdyb3VwO1xyXG4gIC8vIEdyb3dsIG1lc3NlZ2VcclxuICBtc2dzOiBNZXNzYWdlW10gPSBbXTtcclxuICBsb2dpbnBhZ2U6IExvZ2luUGFnZTtcclxuICAvL29mY21lbWJlcnM6T0ZDTWVtYmVyc1tdPVtdO1xyXG4gIG9mY21lbXNlc3Npb246IE9GQ21lbVNlc3Npb247XHJcbiAgdmlld29mY21lbXNlc3Npb246IFZpZXdPRkNtZW1TZXNzaW9uO1xyXG4gIC8vIGNvbnN0cnVjdG9yIGluaXRpYXplIG9mIGFsbCBuZWNlc3NhcnkgdmFyaWFibGUgYW5kIG9iamVjdHNcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuXHJcbiAgICBwcml2YXRlIGxvY2FsU2VydmljZTogTG9naW5QYWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcclxuICApIHtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcblxyXG4gICAgdGhpcy5sb2dpbnBhZ2UgPSB7XHJcbiAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgcGFzc3dvcmQ6ICcnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIG9uU3VibWl0KCkge1xyXG4gICBcclxuICAgIHRoaXMubG9jYWxTZXJ2aWNlLmdldExvZ2luQ2xpZW50KHRoaXMubG9naW5wYWdlLnVzZXJuYW1lLCB0aGlzLmxvZ2lucGFnZS5wYXNzd29yZCkuc3Vic2NyaWJlKFxyXG4gICAgICBwID0+IHRoaXMub2ZjbWVtc2Vzc2lvbiA9IHAsXHJcbiAgICAgIGUgPT4gY29uc29sZS5sb2coZSksXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRlbWVtYmVyID0gSlNPTi5zdHJpbmdpZnkodGhpcy5vZmNtZW1zZXNzaW9uKVxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlbWVtYmVyID09PSAnW10nKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdlcnJvcicsIHN1bW1hcnk6ICdFcnJvciBNZXNzYWdlJywgZGV0YWlsOiAnVW5hdXRob3JpemUgVXNlcicgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnaW5mbycsIHN1bW1hcnk6ICdTdWNjZXNzJywgZGV0YWlsOiAnRm9ybSBVcGRhdGUgU3VjY2Vzc2Z1bGx5JyB9KVxyXG4gICAgICAgICAgbGV0IG1lbWJlcmRldGFpbHM6IGFueSA9IHRoaXMub2ZjbWVtc2Vzc2lvbjtcclxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ21lbWJlcmRldGFpbHMnLCBKU09OLnN0cmluZ2lmeShtZW1iZXJkZXRhaWxzKSk7XHJcblxyXG4gICAgICAgICBcclxuICAgICAgICAgIHZhciBkYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbWVtYmVyZGV0YWlscycpO1xyXG4gICAgICAgICAgbGV0IG9mY3Nlc3Npb25pZDogc3RyaW5nID0gdGhpcy5vZmNtZW1zZXNzaW9uLm9mY21lbXNlc3Npb25faWQ7XHJcblxyXG4gICAgICAgICAgdGhpcy5sb2NhbFNlcnZpY2UuZ2V0Vmlld09mY01lbWJlcihvZmNzZXNzaW9uaWQpLnN1YnNjcmliZShwID0+IHRoaXMudmlld29mY21lbXNlc3Npb24gPSBwLCBcclxuICAgICAgICAgIGUgPT4gY29uc29sZS5sb2coZSksXHJcbiAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmlld29mY21lbXNlc3Npb246IGFueSA9IHRoaXMudmlld29mY21lbXNlc3Npb247XHJcbiAgICAgICAgICAgICAgICBpZih2aWV3b2ZjbWVtc2Vzc2lvbil7XHJcbiAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0ob2Zjc2Vzc2lvbmlkLCBKU09OLnN0cmluZ2lmeSh2aWV3b2ZjbWVtc2Vzc2lvbikpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9teXByb2ZpbGUnXSk7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsU2VydmljZS5hbm5vdW5jZU1pc3Npb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdtZW1iZXJkZXRhaWxzJyk7XHJcbiAgICAgICAgbGV0IG9mY21lbXNlc3Npb246IE9GQ21lbVNlc3Npb24gPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgIGxldCBvZmNtZW1zZXNzaW9uX2lkID0gb2ZjbWVtc2Vzc2lvbi5vZmNtZW1zZXNzaW9uX2lkO1xyXG4gICAgICAgIHZhciBkYXRhdmlld29mY21lbWJlciA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0ob2ZjbWVtc2Vzc2lvbl9pZCk7XHJcblxyXG5cclxuICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIHRoaXMuY2xlYXIoKTtcclxuXHJcbiAgICB0aGlzLnVzZXJmb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICd1c2VybmFtZSc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICdwYXNzd29yZCc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZClcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxufSJdfQ==
