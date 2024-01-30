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
var membershipcoins_component_1 = require('./membershipcoins.component');
var membershipcoins_routing_module_1 = require('./membershipcoins-routing.module');
var primeng_1 = require('primeng/primeng');
var forms_1 = require('@angular/forms');
var primeng_2 = require('primeng/primeng');
var primeng_3 = require('primeng/primeng');
var primeng_4 = require('primeng/primeng');
var primeng_5 = require('primeng/primeng');
var primeng_6 = require('primeng/primeng');
var primeng_7 = require('primeng/primeng');
var primeng_8 = require('primeng/primeng');
var primeng_9 = require('primeng/primeng');
var first_pipe_1 = require('../shared/pipes/first.pipe');
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var membershipcoins_service_1 = require('../shared/membershipcoins/membershipcoins.service');
var commonbrowsetopskills_module_1 = require('../commonbrowsetopskills/commonbrowsetopskills.module');
var commonsettings_module_1 = require('../commonsettings/commonsettings.module');
var MembershipcoinsModule = (function () {
    function MembershipcoinsModule() {
    }
    MembershipcoinsModule = __decorate([
        core_1.NgModule({
            imports: [commonbrowsetopskills_module_1.CommonBrowseTopSkillsModule, common_1.CommonModule, membershipcoins_routing_module_1.MembershipcoinsRoutingModule, forms_1.FormsModule, primeng_8.DropdownModule,
                primeng_9.CalendarModule, primeng_7.FileUploadModule, primeng_6.DataTableModule, forms_1.ReactiveFormsModule, commonsettings_module_1.CommonsettingsModule,
                primeng_5.InputTextModule, primeng_2.GrowlModule, primeng_4.ButtonModule, primeng_1.PanelModule, primeng_3.MessagesModule],
            declarations: [membershipcoins_component_1.MembershipcoinsComponent],
            exports: [membershipcoins_component_1.MembershipcoinsComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, membershipcoins_service_1.MembershipcoinsService]
        }), 
        __metadata('design:paramtypes', [])
    ], MembershipcoinsModule);
    return MembershipcoinsModule;
}());
exports.MembershipcoinsModule = MembershipcoinsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tZW1iZXJzaGlwY29pbnMvbWVtYmVyc2hpcGNvaW5zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDBDQUF5Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3ZFLCtDQUE2QyxrQ0FBa0MsQ0FBQyxDQUFBO0FBRWhGLHdCQUEwQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzVDLHNCQUE4QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQy9ELHdCQUEwQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzVDLHdCQUEyQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRTdELHdCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHdCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHdCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHdCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pELHdCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHdCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLDJCQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELGtDQUE2QixtQ0FBbUMsQ0FBQyxDQUFBO0FBR2pFLG1DQUE4QixvQ0FBb0MsQ0FBQyxDQUFBO0FBQ25FLHdDQUFxQyxtREFBbUQsQ0FBQyxDQUFBO0FBQ3pGLDZDQUEwQyx1REFBdUQsQ0FBQyxDQUFBO0FBQ2xHLHNDQUFtQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBUzdFO0lBQUE7SUFBcUMsQ0FBQztJQVJ0QztRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLDBEQUEyQixFQUFDLHFCQUFZLEVBQUUsNkRBQTRCLEVBQUMsbUJBQVcsRUFBQyx3QkFBYztnQkFDM0csd0JBQWMsRUFBQywwQkFBZ0IsRUFBQyx5QkFBZSxFQUFDLDJCQUFtQixFQUFDLDRDQUFvQjtnQkFDeEYseUJBQWUsRUFBQyxxQkFBVyxFQUFDLHNCQUFZLEVBQUMscUJBQVcsRUFBQyx3QkFBYyxDQUFDO1lBQ3BFLFlBQVksRUFBRSxDQUFDLG9EQUF3QixDQUFDO1lBQ3hDLE9BQU8sRUFBRSxDQUFDLG9EQUF3QixDQUFDO1lBQ25DLFNBQVMsRUFBRSxDQUFDLDJCQUFjLEVBQUMsZ0NBQVksRUFBQyxrQ0FBYSxFQUFDLGdEQUFzQixDQUFDO1NBQzlFLENBQUM7OzZCQUFBO0lBQ21DLDRCQUFDO0FBQUQsQ0FBckMsQUFBc0MsSUFBQTtBQUF6Qiw2QkFBcUIsd0JBQUksQ0FBQSIsImZpbGUiOiJhcHAvbWVtYmVyc2hpcGNvaW5zL21lbWJlcnNoaXBjb2lucy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNZW1iZXJzaGlwY29pbnNDb21wb25lbnQgfSBmcm9tICcuL21lbWJlcnNoaXBjb2lucy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZW1iZXJzaGlwY29pbnNSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9tZW1iZXJzaGlwY29pbnMtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQge0Zvcm1Hcm91cCxGb3JtQ29udHJvbCxWYWxpZGF0b3JzLEZvcm1CdWlsZGVyfSBmcm9tICdAYW5ndWxhci9mb3JtcydcclxuaW1wb3J0IHtQYW5lbE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7R3Jvd2xNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7TWVzc2FnZXNNb2R1bGUsTWVzc2FnZSxHcm93bH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7QnV0dG9uTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0lucHV0VGV4dE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtEYXRhVGFibGVNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7RmlsZVVwbG9hZE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtEcm9wZG93bk1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtDYWxlbmRhck1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuXHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5cclxuXHJcbmltcG9ydCB7IEVtYWlsVmFsaWRhdGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZW1haWx2YWxpZGF0ZS5waXBlJztcclxuaW1wb3J0IHtNZW1iZXJzaGlwY29pbnNTZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvbWVtYmVyc2hpcGNvaW5zL21lbWJlcnNoaXBjb2lucy5zZXJ2aWNlJztcclxuaW1wb3J0IHtDb21tb25Ccm93c2VUb3BTa2lsbHNNb2R1bGV9IGZyb20gJy4uL2NvbW1vbmJyb3dzZXRvcHNraWxscy9jb21tb25icm93c2V0b3Bza2lsbHMubW9kdWxlJztcclxuaW1wb3J0IHtDb21tb25zZXR0aW5nc01vZHVsZX0gZnJvbSAnLi4vY29tbW9uc2V0dGluZ3MvY29tbW9uc2V0dGluZ3MubW9kdWxlJztcclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uQnJvd3NlVG9wU2tpbGxzTW9kdWxlLENvbW1vbk1vZHVsZSwgTWVtYmVyc2hpcGNvaW5zUm91dGluZ01vZHVsZSxGb3Jtc01vZHVsZSxEcm9wZG93bk1vZHVsZSxcclxuICBDYWxlbmRhck1vZHVsZSxGaWxlVXBsb2FkTW9kdWxlLERhdGFUYWJsZU1vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlLENvbW1vbnNldHRpbmdzTW9kdWxlLFxyXG4gIElucHV0VGV4dE1vZHVsZSxHcm93bE1vZHVsZSxCdXR0b25Nb2R1bGUsUGFuZWxNb2R1bGUsTWVzc2FnZXNNb2R1bGVdLC8vLFBhbmVsTW9kdWxlLE1lc3NhZ2VzTW9kdWxlLEdyb3dsXSxcclxuICBkZWNsYXJhdGlvbnM6IFtNZW1iZXJzaGlwY29pbnNDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtNZW1iZXJzaGlwY29pbnNDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW015Q3VycmVuY3lQaXBlLE15RGF0ZUZvcm1hdCxFbWFpbFZhbGlkYXRlLE1lbWJlcnNoaXBjb2luc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZW1iZXJzaGlwY29pbnNNb2R1bGUgeyB9XHJcbiJdfQ==
