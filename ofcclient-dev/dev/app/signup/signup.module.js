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
var signup_component_1 = require('./signup.component');
var signup_routing_module_1 = require('./signup-routing.module');
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
var SignupModule = (function () {
    function SignupModule() {
    }
    SignupModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, signup_routing_module_1.SignupRoutingModule, primeng_1.DataTableModule, primeng_2.DialogModule, primeng_3.ButtonModule, primeng_1.DropdownModule,
                forms_1.FormsModule, forms_1.ReactiveFormsModule, primeng_2.CheckboxModule, primeng_5.GrowlModule,
                primeng_4.InputTextModule, primeng_5.CalendarModule],
            declarations: [signup_component_1.SignupComponent],
            exports: [signup_component_1.SignupComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, index_1.SignupService]
        }), 
        __metadata('design:paramtypes', [])
    ], SignupModule);
    return SignupModule;
}());
exports.SignupModule = SignupModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaWdudXAvc2lnbnVwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3JELHNDQUFvQyx5QkFBeUIsQ0FBQyxDQUFBO0FBRTlELHdCQUE2QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQy9ELHdCQUEyQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzdELHdCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHdCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHdCQUEwQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzVELDJCQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELGtDQUE2QixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ2pFLG1DQUE4QixvQ0FBb0MsQ0FBQyxDQUFBO0FBQ25FLHNCQUE4Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3ZELHNCQUE4QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBVS9EO0lBQUE7SUFBNEIsQ0FBQztJQVI3QjtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUsMkNBQW1CLEVBQUMseUJBQWUsRUFBQyxzQkFBWSxFQUFDLHNCQUFZLEVBQUMsd0JBQWM7Z0JBQ3BHLG1CQUFXLEVBQUMsMkJBQW1CLEVBQUMsd0JBQWMsRUFBQyxxQkFBVztnQkFDMUQseUJBQWUsRUFBQyx3QkFBYyxDQUFDO1lBQy9CLFlBQVksRUFBRSxDQUFDLGtDQUFlLENBQUM7WUFDL0IsT0FBTyxFQUFFLENBQUMsa0NBQWUsQ0FBQztZQUMxQixTQUFTLEVBQUUsQ0FBQywyQkFBYyxFQUFDLGdDQUFZLEVBQUMsa0NBQWEsRUFBQyxxQkFBYSxDQUFDO1NBQ3JFLENBQUM7O29CQUFBO0lBQzBCLG1CQUFDO0FBQUQsQ0FBNUIsQUFBNkIsSUFBQTtBQUFoQixvQkFBWSxlQUFJLENBQUEiLCJmaWxlIjoiYXBwL3NpZ251cC9zaWdudXAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9zaWdudXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2lnbnVwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vc2lnbnVwLXJvdXRpbmcubW9kdWxlJztcclxuXHJcbmltcG9ydCB7RGF0YVRhYmxlTW9kdWxlLERyb3Bkb3duTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0RpYWxvZ01vZHVsZSwgQ2hlY2tib3hNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7QnV0dG9uTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0lucHV0VGV4dE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtDYWxlbmRhck1vZHVsZSwgR3Jvd2xNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZSc7XHJcbmltcG9ydCB7IFNpZ251cFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2lnbnVwL2luZGV4JztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFNpZ251cFJvdXRpbmdNb2R1bGUsRGF0YVRhYmxlTW9kdWxlLERpYWxvZ01vZHVsZSxCdXR0b25Nb2R1bGUsRHJvcGRvd25Nb2R1bGUsXHJcbiAgRm9ybXNNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZSxDaGVja2JveE1vZHVsZSxHcm93bE1vZHVsZSxcclxuICBJbnB1dFRleHRNb2R1bGUsQ2FsZW5kYXJNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1NpZ251cENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1NpZ251cENvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbTXlDdXJyZW5jeVBpcGUsTXlEYXRlRm9ybWF0LEVtYWlsVmFsaWRhdGUsU2lnbnVwU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ251cE1vZHVsZSB7IH1cclxuIl19
