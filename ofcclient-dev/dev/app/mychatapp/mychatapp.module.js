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
var common_1 = require('@angular/common');
var mychatapp_component_1 = require('./mychatapp.component');
var mychatapp_routing_module_1 = require('./mychatapp-routing.module');
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var primeng_3 = require('primeng/primeng');
var primeng_4 = require('primeng/primeng');
var primeng_5 = require('primeng/primeng');
var first_pipe_1 = require('../shared/pipes/first.pipe');
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var index_1 = require('../shared/signup/index');
var forms_1 = require('@angular/forms');
var chat_service_1 = require('../shared/chat/chat.service');
var websocket_service_1 = require('../shared/chat/websocket.service');
var chat_component_1 = require('./chat.component');
var createmessage_component_1 = require('./createmessage.component');
var navbar_component_1 = require('./navbar.component');
var MyChatAppModule = (function () {
    function MyChatAppModule() {
    }
    MyChatAppModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, mychatapp_routing_module_1.MyChatAppRoutingModule, primeng_1.DataTableModule, primeng_2.DialogModule, primeng_3.ButtonModule, primeng_1.DropdownModule,
                forms_1.FormsModule, forms_1.ReactiveFormsModule, primeng_2.CheckboxModule,
                primeng_4.InputTextModule, primeng_5.CalendarModule],
            declarations: [mychatapp_component_1.MyChatAppComponent, chat_component_1.Chat, createmessage_component_1.CreateMessage, navbar_component_1.Navbar],
            exports: [mychatapp_component_1.MyChatAppComponent, chat_component_1.Chat, createmessage_component_1.CreateMessage, navbar_component_1.Navbar],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, index_1.SignupService, chat_service_1.ChatService, websocket_service_1.WebSocketService]
        }), 
        __metadata('design:paramtypes', [])
    ], MyChatAppModule);
    return MyChatAppModule;
}());
exports.MyChatAppModule = MyChatAppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9teWNoYXRhcHAvbXljaGF0YXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLG9DQUFtQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzNELHlDQUF1Qyw0QkFBNEIsQ0FBQyxDQUFBO0FBRXBFLHdCQUE2QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQy9ELHdCQUEyQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzdELHdCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHdCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHdCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDJCQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELGtDQUE2QixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ2pFLG1DQUE4QixvQ0FBb0MsQ0FBQyxDQUFBO0FBQ25FLHNCQUE4Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3ZELHNCQUE4QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBRS9ELDZCQUEwQiw2QkFDMUIsQ0FBQyxDQURzRDtBQUN2RCxrQ0FBK0Isa0NBQWtDLENBQUMsQ0FBQTtBQUVsRSwrQkFBbUIsa0JBQWtCLENBQUMsQ0FBQTtBQUN0Qyx3Q0FBNEIsMkJBQTJCLENBQUMsQ0FBQTtBQUN4RCxpQ0FBcUIsb0JBQW9CLENBQUMsQ0FBQTtBQVcxQztJQUFBO0lBQStCLENBQUM7SUFSaEM7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLGlEQUFzQixFQUFDLHlCQUFlLEVBQUMsc0JBQVksRUFBQyxzQkFBWSxFQUFDLHdCQUFjO2dCQUN2RyxtQkFBVyxFQUFDLDJCQUFtQixFQUFDLHdCQUFjO2dCQUM5Qyx5QkFBZSxFQUFDLHdCQUFjLENBQUM7WUFDL0IsWUFBWSxFQUFFLENBQUMsd0NBQWtCLEVBQUMscUJBQUksRUFBQyx1Q0FBYSxFQUFDLHlCQUFNLENBQUM7WUFDNUQsT0FBTyxFQUFFLENBQUMsd0NBQWtCLEVBQUMscUJBQUksRUFBQyx1Q0FBYSxFQUFDLHlCQUFNLENBQUM7WUFDdkQsU0FBUyxFQUFFLENBQUMsMkJBQWMsRUFBQyxnQ0FBWSxFQUFDLGtDQUFhLEVBQUMscUJBQWEsRUFBQywwQkFBVyxFQUFDLG9DQUFnQixDQUFDO1NBQ2xHLENBQUM7O3VCQUFBO0lBQzZCLHNCQUFDO0FBQUQsQ0FBL0IsQUFBZ0MsSUFBQTtBQUFuQix1QkFBZSxrQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9teWNoYXRhcHAvbXljaGF0YXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE15Q2hhdEFwcENvbXBvbmVudCB9IGZyb20gJy4vbXljaGF0YXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE15Q2hhdEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL215Y2hhdGFwcC1yb3V0aW5nLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQge0RhdGFUYWJsZU1vZHVsZSxEcm9wZG93bk1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtEaWFsb2dNb2R1bGUsIENoZWNrYm94TW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0J1dHRvbk1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtJbnB1dFRleHRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7Q2FsZW5kYXJNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZSc7XHJcbmltcG9ydCB7IFNpZ251cFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2lnbnVwL2luZGV4JztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQge0NoYXRTZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvY2hhdC9jaGF0LnNlcnZpY2UnXHJcbmltcG9ydCB7V2ViU29ja2V0U2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL2NoYXQvd2Vic29ja2V0LnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHtDaGF0fSBmcm9tICcuL2NoYXQuY29tcG9uZW50JztcclxuaW1wb3J0IHtDcmVhdGVNZXNzYWdlfSBmcm9tICcuL2NyZWF0ZW1lc3NhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHtOYXZiYXJ9IGZyb20gJy4vbmF2YmFyLmNvbXBvbmVudCc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNeUNoYXRBcHBSb3V0aW5nTW9kdWxlLERhdGFUYWJsZU1vZHVsZSxEaWFsb2dNb2R1bGUsQnV0dG9uTW9kdWxlLERyb3Bkb3duTW9kdWxlLFxyXG4gIEZvcm1zTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGUsQ2hlY2tib3hNb2R1bGUsXHJcbiAgSW5wdXRUZXh0TW9kdWxlLENhbGVuZGFyTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtNeUNoYXRBcHBDb21wb25lbnQsQ2hhdCxDcmVhdGVNZXNzYWdlLE5hdmJhcl0sXHJcbiAgZXhwb3J0czogW015Q2hhdEFwcENvbXBvbmVudCxDaGF0LENyZWF0ZU1lc3NhZ2UsTmF2YmFyXSxcclxuICBwcm92aWRlcnM6IFtNeUN1cnJlbmN5UGlwZSxNeURhdGVGb3JtYXQsRW1haWxWYWxpZGF0ZSxTaWdudXBTZXJ2aWNlLENoYXRTZXJ2aWNlLFdlYlNvY2tldFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeUNoYXRBcHBNb2R1bGUgeyB9XHJcbiJdfQ==
