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
require('./operators');
var router_1 = require('@angular/router');
var loginpage_service_1 = require('./shared/loginpage/loginpage.service');
var AppComponent = (function () {
    function AppComponent(el, router, loginpageservice) {
        var _this = this;
        this.el = el;
        this.router = router;
        this.loginpageservice = loginpageservice;
        this.layoutCompact = true;
        this.layoutMode = 'static';
        this.darkMenu = false;
        this.profileMode = 'inline';
        this.loggedIn = false;
        this.usertype = "client";
        this.loggedIn = false;
        loginpageservice.missionAnnounced$.subscribe(function (mission) {
            _this.loggedIn = mission;
            if (mission == true) {
                _this.userName = _this.loginpageservice.getUserDetails();
            }
        });
        this.settingsmenu = [{
                label: 'Setting',
                routerLink: "['/myprofile']",
            },
            {
                label: 'Log Out',
                command: function () {
                    _this.logout();
                }
            },
        ];
    }
    AppComponent.prototype.OnInit = function () {
        this.loggedIn = this.loginpageservice.isloggedin();
        this.userName = this.loginpageservice.getUserDetails();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        $.getScript('../../resources/ofc/js/index.js');
        $.getScript('../resources/ofc/js/menu-style.js');
        $.getScript('../resources/ofc/js/smk-accordion.js');
        this.loggedIn = this.loginpageservice.isloggedin();
        this.userName = this.loginpageservice.getUserDetails();
    };
    AppComponent.prototype.reloadAppT = function () {
        this.loggedIn = true;
    };
    AppComponent.prototype.logout = function () {
        this.loginpageservice.logout();
        this.loggedIn = false;
        this.router.navigate(['/index']);
    };
    AppComponent.prototype.loadDropdown0 = function () {
        $("#list-22").slideToggle("easeIn");
    };
    AppComponent.prototype.loadDropdown1 = function () {
        $("#list-23").slideToggle("easeIn");
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-app',
            templateUrl: 'app.component.html',
            providers: [loginpage_service_1.LoginPageService]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, router_1.Router, loginpage_service_1.LoginPageService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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O1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFDLENBQUMsb0NBQWdCLENBQUM7U0FFN0IsQ0FBQzs7b0JBQUE7SUEwR0YsbUJBQUM7QUFBRCxDQXpHQSxBQXlHQyxJQUFBO0FBekdZLG9CQUFZLGVBeUd4QixDQUFBIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LEFmdGVyVmlld0luaXQsRWxlbWVudFJlZixPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi9zaGFyZWQvaW5kZXgnO1xyXG5pbXBvcnQgJy4vb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuLy9pbXBvcnQge0F1dGhlbnRpY2F0aW9uU2VydmljZX0gIGZyb20gJy4vc2hhcmVkL2xvZ2luL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TG9naW5QYWdlU2VydmljZX0gZnJvbSAnLi9zaGFyZWQvbG9naW5wYWdlL2xvZ2lucGFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtNZW51TW9kdWxlLE1lbnVJdGVtfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG4vL2RlY2xhcmUgdmFyIFVsdGltYTogYW55O1xyXG5kZWNsYXJlICB2YXIgJDphbnk7XHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIG1haW4gYXBwbGljYXRpb24gY29tcG9uZW50LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NkLWFwcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczpbTG9naW5QYWdlU2VydmljZV1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0e1xyXG4gbGF5b3V0Q29tcGFjdDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgbGF5b3V0TW9kZTogc3RyaW5nID0gJ3N0YXRpYyc7Ly9zdGF0aWMnO1xyXG4gICAgXHJcbiAgICBkYXJrTWVudTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICBwcm9maWxlTW9kZTogc3RyaW5nID0gJ2lubGluZSc7XHJcblxyXG4gICAgbG9nZ2VkSW46IGJvb2xlYW49ZmFsc2U7XHJcbiAgICBcclxuICAgIHVzZXJOYW1lOnN0cmluZztcclxuICAgICBcclxuICAgIHVzZXJ0eXBlOnN0cmluZz1cImNsaWVudFwiO1xyXG5cclxuICAgIHByaXZhdGUgc2V0dGluZ3NtZW51Ok1lbnVJdGVtW107XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYscHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixwcml2YXRlIGxvZ2lucGFnZXNlcnZpY2U6TG9naW5QYWdlU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMubG9nZ2VkSW49ZmFsc2U7XHJcbiAgICAgICAgbG9naW5wYWdlc2VydmljZS5taXNzaW9uQW5ub3VuY2VkJC5zdWJzY3JpYmUobWlzc2lvbj0+e1xyXG4gICAgICAgICAgICAgICB0aGlzLmxvZ2dlZEluPW1pc3Npb247XHJcbiAgICAgICAgICAgICAgICBpZihtaXNzaW9uPT10cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJOYW1lPXRoaXMubG9naW5wYWdlc2VydmljZS5nZXRVc2VyRGV0YWlscygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMudXNlcnR5cGU9dGhpcy5hdXRoc2VydmljZS5nZXRVc2VyVHlwZSgpOyAgICBcclxuICAgICAgICAgICAgICAgICAgICAvL2FsZXJ0KFwiRG9uZSBJVFwiK3RoaXMudXNlck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNldHRpbmdzbWVudT1be1xyXG4gICAgICAgICAgIGxhYmVsOidTZXR0aW5nJyxcclxuICAgICAgICAgICByb3V0ZXJMaW5rOlwiWycvbXlwcm9maWxlJ11cIixcclxuXHJcbiAgICAgICB9LFxyXG4gICAgICAge1xyXG4gICAgICAgICAgIGxhYmVsOidMb2cgT3V0JyxcclxuICAgICAgICAgICBjb21tYW5kOigpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ291dCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgfSxcclxuICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5sb2dnZWRJbj0gdGhpcy5sb2dpbnBhZ2VzZXJ2aWNlLmlzbG9nZ2VkaW4oKTsvL3RydWU7XHJcbiAgICAgICAgdGhpcy51c2VyTmFtZT10aGlzLmxvZ2lucGFnZXNlcnZpY2UuZ2V0VXNlckRldGFpbHMoKTtcclxuICAgICAgICAvLyBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRVc2VyJykpIHtcclxuICAgICAgICAvLyAgICAgLy8gbG9nZ2VkIGluIHNvIHJldHVybiB0cnVlXHJcbiAgICAgICAgLy8gICAgIHRoaXMubG9nZ2VkSW49IHRydWU7XHJcbiAgICAgICAgLy8gICAgIGFsZXJ0KFwibG9nZ2VkaW5cIik7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcclxuICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgdGhpcy5sb2dnZWRJbj1mYWxzZTtcclxuICAgICAgICAvLyAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XHJcbiAgICAgICAgLy8gICAgIGFsZXJ0KFwibm90IGxvZ2dlZGluXCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgLy9VbHRpbWEuaW5pdCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgICAgICAkLmdldFNjcmlwdCgnLi4vLi4vcmVzb3VyY2VzL29mYy9qcy9pbmRleC5qcycpO1xyXG4gICAgICAgICQuZ2V0U2NyaXB0KCcuLi9yZXNvdXJjZXMvb2ZjL2pzL21lbnUtc3R5bGUuanMnKTtcclxuLy8gICAgJC5nZXRTY3JpcHQoJy4uL3Jlc291cmNlcy9vZmMvanMvZHJpbGxkb3duLmpzJyk7XHJcbiAgICAkLmdldFNjcmlwdCgnLi4vcmVzb3VyY2VzL29mYy9qcy9zbWstYWNjb3JkaW9uLmpzJyk7XHJcbiAgLy8gICQuZ2V0U2NyaXB0KCcuLi9yZXNvdXJjZXMvb2ZjL2pzL215YWNjb3JkaW9uX2pxdWVyeS5qcycpO1xyXG4gICAgIFxyXG5cclxuICAgICAgICB0aGlzLmxvZ2dlZEluPSB0aGlzLmxvZ2lucGFnZXNlcnZpY2UuaXNsb2dnZWRpbigpOy8vdHJ1ZTtcclxuICAgICAgICB0aGlzLnVzZXJOYW1lPXRoaXMubG9naW5wYWdlc2VydmljZS5nZXRVc2VyRGV0YWlscygpOyBcclxuICAgICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy90YXNrZGFzaGJvYXJkJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbG9hZEFwcFQoKXtcclxuICAgICAgICAvL2FsZXJ0KFwiSElcIik7XHJcbiAgICAgICAgdGhpcy5sb2dnZWRJbj10cnVlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpe1xyXG4gICAgICAgIC8vYWxlcnQoXCJMb2dPdXRcIik7XHJcbiAgICAgICAgdGhpcy5sb2dpbnBhZ2VzZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgIHRoaXMubG9nZ2VkSW49ZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaW5kZXgnXSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvYWREcm9wZG93bjAoKXtcclxuICAgICAgICAkKFwiI2xpc3QtMjJcIikuc2xpZGVUb2dnbGUoIFwiZWFzZUluXCIpO1xyXG4gICAgfVxyXG4gICAgbG9hZERyb3Bkb3duMSgpe1xyXG4gICAgICAgIC8vYWxlcnQoXCJISSBkcm9wZG93blwiKTtcclxuICAgICAgICAkKFwiI2xpc3QtMjNcIikuc2xpZGVUb2dnbGUoIFwiZWFzZUluXCIpO1xyXG4gICAgfVxyXG4gICAgLy8gY2hhbmdlVGhlbWUoZXZlbnQsIHRoZW1lKSB7XHJcbiAgICAvLyAgICAgbGV0IHRoZW1lTGluazogSFRNTExpbmtFbGVtZW50ID0gPEhUTUxMaW5rRWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lLWNzcycpO1xyXG4gICAgLy8gICAgIGxldCBsYXlvdXRMaW5rOiBIVE1MTGlua0VsZW1lbnQgPSA8SFRNTExpbmtFbGVtZW50PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5b3V0LWNzcycpO1xyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIHRoZW1lTGluay5ocmVmID0gJ3Jlc291cmNlcy90aGVtZS90aGVtZS0nICsgdGhlbWUgKycuY3NzJztcclxuICAgIC8vICAgICBsYXlvdXRMaW5rLmhyZWYgPSAncmVzb3VyY2VzL2xheW91dC9jc3MvbGF5b3V0LScgKyB0aGVtZSArJy5jc3MnO1xyXG4gICAgLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyB9XHJcbn1cclxuIl19
