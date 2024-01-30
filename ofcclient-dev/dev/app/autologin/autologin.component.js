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
var index_1 = require('../shared/autologin/index');
var router_1 = require('@angular/router');
var baseurl_service_1 = require('../shared/baseurl/baseurl.service');
var AutologinComponent = (function () {
    function AutologinComponent(fb, route, router, localService, baseUrlservice) {
        var _this = this;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.localService = localService;
        this.baseUrlservice = baseUrlservice;
        this.msgs = [];
        this.mybaseurl = baseUrlservice.getBaseurl();
        this.route.params.forEach(function (params) {
            if (params["sessionid"]) {
                _this.sessionid = params["sessionid"];
                _this.localService.getOfcMemberAutoLogin(_this.sessionid).subscribe(function (p) { _this.ofcmemsession = p; }, function (e) { return console.log(e); }, function () {
                    sessionStorage.setItem('memberdetails', JSON.stringify(_this.ofcmemsession));
                    var data = sessionStorage.getItem('memberdetails');
                    var ofcmemsession1 = JSON.parse(data);
                    var ofcmemsession_id = ofcmemsession1.ofcmemsession_id;
                    sessionStorage.setItem(ofcmemsession_id, JSON.stringify(ofcmemsession1));
                    _this.router.navigate(['/myprofile']);
                });
            }
        });
    }
    AutologinComponent.prototype.ngOnInit = function () {
    };
    AutologinComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-autologin',
            template: "<h1>Please wait Redirecting..</h1>",
            styleUrls: ['autologin.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, index_1.AutoLoginService, baseurl_service_1.BaseUrlService])
    ], AutologinComponent);
    return AutologinComponent;
}());
exports.AutologinComponent = AutologinComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRvbG9naW4vYXV0b2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHNCQUFnRSxnQkFBZ0IsQ0FBQyxDQUFBO0FBRWpGLHNCQUFpQywyQkFBMkIsQ0FBQyxDQUFBO0FBTTdELHVCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pFLGdDQUErQixtQ0FBbUMsQ0FBQyxDQUFBO0FBVW5FO0lBWUUsNEJBQW9CLEVBQWUsRUFDekIsS0FBcUIsRUFDckIsTUFBYyxFQUNkLFlBQThCLEVBQzlCLGNBQThCO1FBaEIxQyxpQkE0REM7UUFoRHFCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDekIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFaeEMsU0FBSSxHQUFjLEVBQUUsQ0FBQztRQWdCbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBYztZQUVyQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUV4QixLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDckMsS0FBSSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUMvRCxVQUFBLENBQUMsSUFBTSxLQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDaEMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFkLENBQWMsRUFDbkI7b0JBQ0UsY0FBYyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztvQkFFNUUsSUFBSSxJQUFJLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDbkQsSUFBSSxjQUFjLEdBQWtCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRXJELElBQUksZ0JBQWdCLEdBQUcsY0FBYyxDQUFDLGdCQUFnQixDQUFDO29CQUV2RCxjQUFjLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFFekUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDLENBQ0YsQ0FBQztZQUVKLENBQUM7UUFFSCxDQUFDLENBQUMsQ0FBQztJQUdMLENBQUM7SUFLRCxxQ0FBUSxHQUFSO0lBSUEsQ0FBQztJQS9ESDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFDLG9DQUFvQztZQUM3QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN2QyxDQUFDOzswQkFBQTtJQTZERix5QkFBQztBQUFELENBNURBLEFBNERDLElBQUE7QUE1RFksMEJBQWtCLHFCQTREOUIsQ0FBQSIsImZpbGUiOiJhcHAvYXV0b2xvZ2luL2F1dG9sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEF1dG9Mb2dpblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvYXV0b2xvZ2luL2luZGV4JztcclxuaW1wb3J0IHsgTG9naW5QYWdlIH0gZnJvbSAnLi9sb2dpbnBhZ2UnO1xyXG5pbXBvcnQgeyBPRkNNZW1iZXJzIH0gZnJvbSAnLi9vZmNtZW1iZXJzJztcclxuaW1wb3J0IHsgTWVzc2FnZXNNb2R1bGUsIE1lc3NhZ2UsIEdyb3dsLCBQYXNzd29yZE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE9GQ21lbVNlc3Npb24gfSBmcm9tICcuL29mY21lbXNlc3Npb24nO1xyXG5pbXBvcnQgeyBWaWV3T0ZDbWVtU2Vzc2lvbiB9IGZyb20gJy4vdmlld29mY21lbXNlc3Npb24nO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCYXNlVXJsU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9iYXNldXJsL2Jhc2V1cmwuc2VydmljZSc7XHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIGF1dG9sb2dpbkNvbXBvbmVudC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzZC1hdXRvbG9naW4nLFxyXG4gIHRlbXBsYXRlOmA8aDE+UGxlYXNlIHdhaXQgUmVkaXJlY3RpbmcuLjwvaDE+YCxcclxuICBzdHlsZVVybHM6IFsnYXV0b2xvZ2luLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0b2xvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvL0Zvcm0gZ3JvcCBcclxuICB1c2VyZm9ybTogRm9ybUdyb3VwO1xyXG4gIC8vIEdyb3dsIG1lc3NlZ2VcclxuICBtc2dzOiBNZXNzYWdlW10gPSBbXTtcclxuICBsb2dpbnBhZ2U6IExvZ2luUGFnZTtcclxuICAvL29mY21lbWJlcnM6T0ZDTWVtYmVyc1tdPVtdO1xyXG4gIG9mY21lbXNlc3Npb246IE9GQ21lbVNlc3Npb247XHJcbiAgdmlld29mY21lbXNlc3Npb246IFZpZXdPRkNtZW1TZXNzaW9uO1xyXG4gIG15YmFzZXVybDogc3RyaW5nO1xyXG4gIHNlc3Npb25pZDogc3RyaW5nO1xyXG4gIC8vIGNvbnN0cnVjdG9yIGluaXRpYXplIG9mIGFsbCBuZWNlc3NhcnkgdmFyaWFibGUgYW5kIG9iamVjdHNcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgbG9jYWxTZXJ2aWNlOiBBdXRvTG9naW5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBiYXNlVXJsc2VydmljZTogQmFzZVVybFNlcnZpY2VcclxuICApIHtcclxuXHJcblxyXG4gICAgdGhpcy5teWJhc2V1cmwgPSBiYXNlVXJsc2VydmljZS5nZXRCYXNldXJsKCk7XHJcbiAgdGhpcy5yb3V0ZS5wYXJhbXMuZm9yRWFjaCgocGFyYW1zOiBQYXJhbXMpID0+IHtcclxuXHJcbiAgICAgIGlmIChwYXJhbXNbXCJzZXNzaW9uaWRcIl0pIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNlc3Npb25pZCA9IHBhcmFtc1tcInNlc3Npb25pZFwiXTtcclxuICAgICAgICB0aGlzLmxvY2FsU2VydmljZS5nZXRPZmNNZW1iZXJBdXRvTG9naW4odGhpcy5zZXNzaW9uaWQpLnN1YnNjcmliZShcclxuICAgICAgICAgIHAgPT4geyB0aGlzLm9mY21lbXNlc3Npb24gPSBwOyB9LFxyXG4gICAgICAgICAgZSA9PiBjb25zb2xlLmxvZyhlKSxcclxuICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbWVtYmVyZGV0YWlscycsIEpTT04uc3RyaW5naWZ5KHRoaXMub2ZjbWVtc2Vzc2lvbikpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdtZW1iZXJkZXRhaWxzJyk7XHJcbiAgICAgICAgICAgIGxldCBvZmNtZW1zZXNzaW9uMTogT0ZDbWVtU2Vzc2lvbiA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBvZmNtZW1zZXNzaW9uX2lkID0gb2ZjbWVtc2Vzc2lvbjEub2ZjbWVtc2Vzc2lvbl9pZDtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShvZmNtZW1zZXNzaW9uX2lkLCBKU09OLnN0cmluZ2lmeShvZmNtZW1zZXNzaW9uMSkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbXlwcm9maWxlJ10pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICB9KTtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIFxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuXHJcblxyXG4gIH1cclxuICBcclxuXHJcbn0iXX0=
