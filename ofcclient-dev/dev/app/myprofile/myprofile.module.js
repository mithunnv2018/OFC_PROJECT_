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
var myprofile_component_1 = require('./myprofile.component');
var myprofile_routing_module_1 = require('./myprofile-routing.module');
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var primeng_3 = require('primeng/primeng');
var primeng_4 = require('primeng/primeng');
var primeng_5 = require('primeng/primeng');
var primeng_6 = require('primeng/primeng');
var first_pipe_1 = require('../shared/pipes/first.pipe');
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var index_1 = require('../shared/myprofile/index');
var forms_1 = require('@angular/forms');
var commonsettings_module_1 = require('../commonsettings/commonsettings.module');
var commonsubmenu_module_1 = require('../commonsubmenu/commonsubmenu.module');
var MyprofileModule = (function () {
    function MyprofileModule() {
    }
    MyprofileModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, myprofile_routing_module_1.MyprofileRoutingModule, primeng_2.DataTableModule,
                primeng_3.DialogModule, primeng_4.ButtonModule, primeng_2.DropdownModule, commonsettings_module_1.CommonsettingsModule, commonsubmenu_module_1.CommonsubmenuModule,
                forms_1.FormsModule, forms_1.ReactiveFormsModule, primeng_2.PasswordModule, primeng_3.FileUploadModule, primeng_1.AutoCompleteModule, primeng_6.GrowlModule,
                primeng_5.InputTextModule, primeng_6.CalendarModule],
            declarations: [myprofile_component_1.MyprofileComponent],
            exports: [myprofile_component_1.MyprofileComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, index_1.MyprofileService]
        }), 
        __metadata('design:paramtypes', [])
    ], MyprofileModule);
    return MyprofileModule;
}());
exports.MyprofileModule = MyprofileModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9teXByb2ZpbGUvbXlwcm9maWxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLG9DQUFtQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzNELHlDQUF1Qyw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3BFLHdCQUFtQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3JELHdCQUFnRSxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2xGLHdCQUErQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pFLHdCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHdCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2xELHdCQUEyQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzdELDJCQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELGtDQUE2QixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ2pFLG1DQUE4QixvQ0FBb0MsQ0FBQyxDQUFBO0FBQ25FLHNCQUFpQywyQkFBMkIsQ0FBQyxDQUFBO0FBQzdELHNCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2xFLHNDQUFtQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBQzdFLHFDQUFrQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBWTFFO0lBQUE7SUFBK0IsQ0FBQztJQVRoQztRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUsaURBQXNCLEVBQUUseUJBQWU7Z0JBQy9ELHNCQUFZLEVBQUUsc0JBQVksRUFBRSx3QkFBYyxFQUFDLDRDQUFvQixFQUFDLDBDQUFtQjtnQkFDakYsbUJBQVcsRUFBRSwyQkFBbUIsRUFBRSx3QkFBYyxFQUFFLDBCQUFnQixFQUFFLDRCQUFrQixFQUFDLHFCQUFXO2dCQUNsRyx5QkFBZSxFQUFFLHdCQUFjLENBQUM7WUFDbEMsWUFBWSxFQUFFLENBQUMsd0NBQWtCLENBQUM7WUFDbEMsT0FBTyxFQUFFLENBQUMsd0NBQWtCLENBQUM7WUFDN0IsU0FBUyxFQUFFLENBQUMsMkJBQWMsRUFBRSxnQ0FBWSxFQUFFLGtDQUFhLEVBQUUsd0JBQWdCLENBQUM7U0FDM0UsQ0FBQzs7dUJBQUE7SUFDNkIsc0JBQUM7QUFBRCxDQUEvQixBQUFnQyxJQUFBO0FBQW5CLHVCQUFlLGtCQUFJLENBQUEiLCJmaWxlIjoiYXBwL215cHJvZmlsZS9teXByb2ZpbGUubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTXlwcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9teXByb2ZpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXlwcm9maWxlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vbXlwcm9maWxlLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgQXV0b0NvbXBsZXRlTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgRGF0YVRhYmxlTW9kdWxlLCBEcm9wZG93bk1vZHVsZSwgUGFzc3dvcmRNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBEaWFsb2dNb2R1bGUsIEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBJbnB1dFRleHRNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBDYWxlbmRhck1vZHVsZSxHcm93bE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZSc7XHJcbmltcG9ydCB7IE15cHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbXlwcm9maWxlL2luZGV4JztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7Q29tbW9uc2V0dGluZ3NNb2R1bGV9IGZyb20gJy4uL2NvbW1vbnNldHRpbmdzL2NvbW1vbnNldHRpbmdzLm1vZHVsZSc7XHJcbmltcG9ydCB7Q29tbW9uc3VibWVudU1vZHVsZX0gZnJvbSAnLi4vY29tbW9uc3VibWVudS9jb21tb25zdWJtZW51Lm1vZHVsZSc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNeXByb2ZpbGVSb3V0aW5nTW9kdWxlLCBEYXRhVGFibGVNb2R1bGUsIFxyXG4gIERpYWxvZ01vZHVsZSwgQnV0dG9uTW9kdWxlLCBEcm9wZG93bk1vZHVsZSxDb21tb25zZXR0aW5nc01vZHVsZSxDb21tb25zdWJtZW51TW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIFBhc3N3b3JkTW9kdWxlLCBGaWxlVXBsb2FkTW9kdWxlLCBBdXRvQ29tcGxldGVNb2R1bGUsR3Jvd2xNb2R1bGUsXHJcbiAgICBJbnB1dFRleHRNb2R1bGUsIENhbGVuZGFyTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtNeXByb2ZpbGVDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtNeXByb2ZpbGVDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW015Q3VycmVuY3lQaXBlLCBNeURhdGVGb3JtYXQsIEVtYWlsVmFsaWRhdGUsIE15cHJvZmlsZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeXByb2ZpbGVNb2R1bGUgeyB9XHJcbiJdfQ==
