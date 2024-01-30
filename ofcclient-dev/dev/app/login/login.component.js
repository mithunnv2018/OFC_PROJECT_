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
var router_1 = require('@angular/router');
var index_1 = require('../shared/login/index');
var app_component_1 = require('../app.component');
var LoginComponent = (function () {
    function LoginComponent(router, localService, appComponent) {
        this.router = router;
        this.localService = localService;
        this.appComponent = appComponent;
    }
    LoginComponent.prototype.adminlogin = function () {
        var _this = this;
        this.localService.callLoginWS(this.username, this.password)
            .subscribe(function (p) {
            _this.member = p[0];
        }, function (e) { return console.log("Login Error ", e); }, function () {
            if (_this.member != null) {
                if (_this.member.username == _this.username) {
                    localStorage.setItem('currentUser', JSON.stringify(_this.member));
                    _this.boollogin = true;
                    _this.localService.announceMission(true);
                    _this.router.navigate(['/taskdashboard']);
                }
                else {
                    _this.boollogin = false;
                    _this.router.navigate(['/login']);
                }
            }
            else {
                _this.boollogin = false;
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent.prototype.adminlogout = function () {
        this.localService.logout();
        this.router.navigate(['/login']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-login',
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css'],
            providers: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.AuthenticationService, app_component_1.AppComponent])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQVExQyx1QkFBc0IsaUJBQWlCLENBQUMsQ0FBQTtBQUN4QyxzQkFBc0MsdUJBQXVCLENBQUMsQ0FBQTtBQUU5RCw4QkFBMkIsa0JBQWtCLENBQUMsQ0FBQTtBQWM5QztJQVFFLHdCQUFvQixNQUFjLEVBQVMsWUFBbUMsRUFBUyxZQUF5QjtRQUE1RixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsaUJBQVksR0FBWixZQUFZLENBQXVCO1FBQVMsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBRyxDQUFDO0lBQ3BILG1DQUFVLEdBQVY7UUFBQSxpQkF3Q0s7UUFyQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ3ZELFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFBTSxLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVyQixDQUFDLEVBQ1AsVUFBQSxDQUFDLElBQUUsT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxDQUFDLENBQUMsRUFBN0IsQ0FBNkIsRUFDaEM7WUFFRyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsTUFBTSxJQUFFLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ3BCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO29CQUN2QyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNqRSxLQUFJLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQztvQkFDcEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3hDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQUNELElBQUksQ0FBQSxDQUFDO29CQUNILEtBQUksQ0FBQyxTQUFTLEdBQUMsS0FBSyxDQUFDO29CQUNyQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLENBQUM7WUFDSCxDQUFDO1lBQ0QsSUFBSSxDQUFBLENBQUM7Z0JBQ0gsS0FBSSxDQUFDLFNBQVMsR0FBQyxLQUFLLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNuQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFjYixDQUFDO0lBRVAsb0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUE5REQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7WUFDbEMsU0FBUyxFQUFDLENBQUMsNEJBQVksQ0FBQztTQUV6QixDQUFDOztzQkFBQTtJQXlERCxxQkFBQztBQUFELENBeERELEFBd0RFLElBQUE7QUF4RFcsc0JBQWMsaUJBd0R6QixDQUFBIiwiZmlsZSI6ImFwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RGF0YVRhYmxlTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0RpYWxvZ01vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtCdXR0b25Nb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7SW5wdXRUZXh0TW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0NhbGVuZGFyTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5cclxuaW1wb3J0IHsgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbG9naW4vaW5kZXgnO1xyXG5cclxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gJy4uL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQge01lbWJlcn0gZnJvbSAnLi9tZW1iZXInO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgQWJvdXRDb21wb25lbnQuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnc2QtbG9naW4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnbG9naW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydsb2dpbi5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOltBcHBDb21wb25lbnRdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG5cclxuICBib29sbG9naW46IGJvb2xlYW47XHJcbiAgdXNlcm5hbWU6c3RyaW5nO1xyXG4gIHBhc3N3b3JkOnN0cmluZztcclxuXHJcbiAgbWVtYmVyOk1lbWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixwcml2YXRlIGxvY2FsU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLHByaXZhdGUgYXBwQ29tcG9uZW50OkFwcENvbXBvbmVudCkge31cclxuICBhZG1pbmxvZ2luKCl7XHJcbiAgICAvLyBhbGVydCh0aGlzLnVzZXJuYW1lKTtcclxuICAgIC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydob21lJ10pO1xyXG4gICAgdGhpcy5sb2NhbFNlcnZpY2UuY2FsbExvZ2luV1ModGhpcy51c2VybmFtZSx0aGlzLnBhc3N3b3JkKVxyXG4gICAgICAuc3Vic2NyaWJlKHAgID0+IHt0aGlzLm1lbWJlciA9IHBbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGU9PmNvbnNvbGUubG9nKFwiTG9naW4gRXJyb3IgXCIsZSksXHJcbiAgICAgICAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIC8vYWxlcnQoSlNPTi5zdHJpbmdpZnkodGhpcy5tZW1iZXIpKTtcclxuICAgICAgICAgICAgICAgICAgIGlmKHRoaXMubWVtYmVyIT1udWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5tZW1iZXIudXNlcm5hbWU9PXRoaXMudXNlcm5hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRVc2VyJywgSlNPTi5zdHJpbmdpZnkodGhpcy5tZW1iZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9vbGxvZ2luPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsU2VydmljZS5hbm5vdW5jZU1pc3Npb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy90YXNrZGFzaGJvYXJkJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib29sbG9naW49ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9vbGxvZ2luPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAvLyBpZih0aGlzLmxvY2FsU2VydmljZS5sb2dpbih0aGlzLnVzZXJuYW1lLHRoaXMucGFzc3dvcmQpKXtcclxuICAgIC8vICAgICAgICAgdGhpcy5ib29sbG9naW49dHJ1ZTtcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gICAgLy8gICAgICAgICAvL3RoaXMuYXBwQ29tcG9uZW50LnJlbG9hZEFwcFQoKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5sb2NhbFNlcnZpY2UuYW5ub3VuY2VNaXNzaW9uKHRydWUpO1xyXG4gICAgLy8gfWVsc2V7XHJcbiAgICAvLyAgIHRoaXMuYm9vbGxvZ2luPWZhbHNlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbmFkbWlubG9nb3V0KCl7XHJcbiAgdGhpcy5sb2NhbFNlcnZpY2UubG9nb3V0KCk7XHJcbiAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XHJcbn0gICAgICBcclxuXHJcbiB9XHJcbiJdfQ==
