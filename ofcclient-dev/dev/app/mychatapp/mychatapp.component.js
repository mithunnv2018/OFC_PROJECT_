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
var index_1 = require('../shared/signup/index');
var app_component_1 = require('../app.component');
var chat_service_1 = require('../shared/chat/chat.service');
var navbar_component_1 = require('./navbar.component');
var websocket_service_1 = require('../shared/chat/websocket.service');
var MyChatAppComponent = (function () {
    function MyChatAppComponent(router, localService, appComponent, fb, route, mycur, mydate1, emailval) {
        this.router = router;
        this.localService = localService;
        this.appComponent = appComponent;
        this.fb = fb;
        this.route = route;
        this.mycur = mycur;
        this.mydate1 = mydate1;
        this.emailval = emailval;
        this.msgs = [];
    }
    MyChatAppComponent.prototype.ngOnInit = function () {
    };
    MyChatAppComponent.prototype.clear = function () {
    };
    MyChatAppComponent.prototype.onSubmit = function () {
    };
    MyChatAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-mychatapp',
            templateUrl: 'mychatapp.component.html',
            styleUrls: ['mychatapp.component.css'],
            providers: [app_component_1.AppComponent, chat_service_1.ChatService, websocket_service_1.WebSocketService],
            viewProviders: [navbar_component_1.Navbar]
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.SignupService, app_component_1.AppComponent, forms_1.FormBuilder, router_1.ActivatedRoute, first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate])
    ], MyChatAppComponent);
    return MyChatAppComponent;
}());
exports.MyChatAppComponent = MyChatAppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9teWNoYXRhcHAvbXljaGF0YXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHNCQUFnRSxnQkFBZ0IsQ0FBQyxDQUFBO0FBU2pGLHVCQUF1QyxpQkFBaUIsQ0FBQyxDQUFBO0FBR3pELDJCQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBRzVELGtDQUE2QixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ2pFLG1DQUE4QixvQ0FBb0MsQ0FBQyxDQUFBO0FBR25FLHNCQUE4Qix3QkFBd0IsQ0FBQyxDQUFBO0FBRXZELDhCQUE2QixrQkFBa0IsQ0FBQyxDQUFBO0FBRWhELDZCQUEwQiw2QkFDMUIsQ0FBQyxDQURzRDtBQUd2RCxpQ0FBcUIsb0JBQW9CLENBQUMsQ0FBQTtBQUMxQyxrQ0FBK0Isa0NBQWtDLENBQUMsQ0FBQTtBQWtCbEU7SUFHRSw0QkFDVSxNQUFjLEVBQ2QsWUFBMkIsRUFDM0IsWUFBMEIsRUFDMUIsRUFBZSxFQUNmLEtBQXFCLEVBQ3JCLEtBQXFCLEVBQ3JCLE9BQXFCLEVBQ3JCLFFBQXVCO1FBUHZCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBZTtRQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBVmpDLFNBQUksR0FBYyxFQUFFLENBQUM7SUFlckIsQ0FBQztJQUdELHFDQUFRLEdBQVI7SUFJQSxDQUFDO0lBRUQsa0NBQUssR0FBTDtJQUdBLENBQUM7SUFFRCxxQ0FBUSxHQUFSO0lBZUEsQ0FBQztJQXhESDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztZQUV0QyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxFQUFDLDBCQUFXLEVBQUMsb0NBQWdCLENBQUM7WUFDdEQsYUFBYSxFQUFDLENBQUMseUJBQU0sQ0FBQztTQUd2QixDQUFDOzswQkFBQTtJQWlERix5QkFBQztBQUFELENBaERBLEFBZ0RDLElBQUE7QUFoRFksMEJBQWtCLHFCQWdEOUIsQ0FBQSIsImZpbGUiOiJhcHAvbXljaGF0YXBwL215Y2hhdGFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IERhdGFUYWJsZU1vZHVsZSwgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBEaWFsb2dNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBJbnB1dFRleHRNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBDYWxlbmRhck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNZXNzYWdlc01vZHVsZSwgTWVzc2FnZSwgR3Jvd2wgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBQYW5lbE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IElucHV0VGV4dGFyZWFNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBNeUN1cnJlbmN5UGlwZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9maXJzdC5waXBlJztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IFNlbGVjdEl0ZW0gfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZSc7XHJcbmltcG9ydCB7IEN1c3RvbVZhbGlkYXRvciB9IGZyb20gJy4uL3NoYXJlZC92YWxpZGF0b3JzL3ZhbGlkYXRvci5kaXJlY3RpdmUnO1xyXG5cclxuaW1wb3J0IHsgU2lnbnVwU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zaWdudXAvaW5kZXgnO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi4vYXBwLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQge0NoYXRTZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvY2hhdC9jaGF0LnNlcnZpY2UnXHJcbmltcG9ydCB7Q2hhdH0gZnJvbSAnLi9jaGF0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q3JlYXRlTWVzc2FnZX0gZnJvbSAnLi9jcmVhdGVtZXNzYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TmF2YmFyfSBmcm9tICcuL25hdmJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQge1dlYlNvY2tldFNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9jaGF0L3dlYnNvY2tldC5zZXJ2aWNlJztcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgQWJvdXRDb21wb25lbnQuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnc2QtbXljaGF0YXBwJyxcclxuICB0ZW1wbGF0ZVVybDogJ215Y2hhdGFwcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ215Y2hhdGFwcC5jb21wb25lbnQuY3NzJ10sXHJcblxyXG4gIHByb3ZpZGVyczogW0FwcENvbXBvbmVudCxDaGF0U2VydmljZSxXZWJTb2NrZXRTZXJ2aWNlXSxcclxuICB2aWV3UHJvdmlkZXJzOltOYXZiYXJdXHJcblxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIE15Q2hhdEFwcENvbXBvbmVudCB7XHJcbiAgbXNnczogTWVzc2FnZVtdID0gW107XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBsb2NhbFNlcnZpY2U6IFNpZ251cFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50LFxyXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgbXljdXI6IE15Q3VycmVuY3lQaXBlLFxyXG4gICAgcHJpdmF0ZSBteWRhdGUxOiBNeURhdGVGb3JtYXQsXHJcbiAgICBwcml2YXRlIGVtYWlsdmFsOiBFbWFpbFZhbGlkYXRlXHJcbiAgKSB7XHJcblxyXG4gICAgLy8gdGhpcy5sb2NhbFNlcnZpY2UuZ2V0Q291bnRyeSgnaGonKS5zdWJzY3JpYmUocCA9PiB7IHRoaXMuZHJwQ291bnRyeUlkID0gcDsgdGhpcy5kcnBDb3VudHJ5SWQudW5zaGlmdCh7IGxhYmVsOiBcIlNlbGVjdFwiLCB2YWx1ZTogXCIxXCIgfSkgfSwgZSA9PiBjb25zb2xlLmxvZyhlKSwgKCkgPT4gY29uc29sZS5sb2codGhpcy5kcnBDb3VudHJ5SWQpKTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiBcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICAgXHJcblxyXG4gIH1cclxuIFxyXG4gIG9uU3VibWl0KCkge1xyXG5cclxuXHJcbiAgICAvLyB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICAvLyB0aGlzLm1zZ3MgPSBbXTtcclxuXHJcblxyXG4gICAgLy8gdGhpcy5sb2NhbFNlcnZpY2Uuc2lnbnVwKHRoaXMub2ZjbWVtYmVycylcclxuICAgIC8vICAgLnN1YnNjcmliZShcclxuICAgIC8vICAgICAgICAgLyogaGFwcHkgcGF0aCAqLyBwID0+IHRoaXMub2ZjbWVtYmVyc0dyaWQgPSBwLFxyXG4gICAgLy8gICAgICAgICAvKiBlcnJvciBwYXRoICovIGUgPT4gY29uc29sZS5sb2coZSksXHJcbiAgICAvLyAgICAgICAgIC8qIG9uQ29tcGxldGUgKi8oKSA9PiB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnaW5mbycsIHN1bW1hcnk6ICdTdWNjZXNzJywgZGV0YWlsOiAnRm9ybSBVcGRhdGUgU3VjY2Vzc2Z1bGx5JyB9KSk7XHJcblxyXG5cclxuICAgIC8vIHRoaXMuY2xlYXIoKTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=
