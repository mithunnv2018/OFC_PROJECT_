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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var index_1 = require('./toolbar/index');
var index_2 = require('./navbar/index');
var index_3 = require('./login/index');
var index_4 = require('./login/index');
var baseurl_service_1 = require('./baseurl/baseurl.service');
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule,
            providers: [index_3.AuthGuard, index_4.AuthenticationService, baseurl_service_1.BaseUrlService]
        };
    };
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule],
            declarations: [index_1.ToolbarComponent, index_2.NavbarComponent],
            exports: [index_1.ToolbarComponent, index_2.NavbarComponent,
                common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThDLGVBQWUsQ0FBQyxDQUFBO0FBQzlELHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLHNCQUFpQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ25ELHNCQUFnQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBR2pELHNCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxzQkFBc0MsZUFBZSxDQUFDLENBQUE7QUFDdEQsZ0NBQTZCLDJCQUEyQixDQUFDLENBQUE7QUFZekQ7SUFBQTtJQU9BLENBQUM7SUFOUSxvQkFBTyxHQUFkO1FBQ0UsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUMsaUJBQVMsRUFBQyw2QkFBcUIsRUFBQyxnQ0FBYyxDQUFDO1NBQzVELENBQUM7SUFDSixDQUFDO0lBWkg7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLHFCQUFZLENBQUM7WUFDckMsWUFBWSxFQUFFLENBQUMsd0JBQWdCLEVBQUUsdUJBQWUsQ0FBQztZQUNqRCxPQUFPLEVBQUUsQ0FBQyx3QkFBZ0IsRUFBRSx1QkFBZTtnQkFDekMscUJBQVksRUFBRSxtQkFBVyxFQUFFLHFCQUFZLENBQUM7U0FDM0MsQ0FBQzs7b0JBQUE7SUFRRixtQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksb0JBQVksZUFPeEIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL25hdmJhci9pbmRleCc7XHJcblxyXG5cclxuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi9sb2dpbi9pbmRleCc7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vbG9naW4vaW5kZXgnO1xyXG5pbXBvcnQge0Jhc2VVcmxTZXJ2aWNlfSBmcm9tICcuL2Jhc2V1cmwvYmFzZXVybC5zZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiBEbyBub3Qgc3BlY2lmeSBwcm92aWRlcnMgZm9yIG1vZHVsZXMgdGhhdCBtaWdodCBiZSBpbXBvcnRlZCBieSBhIGxhenkgbG9hZGVkIG1vZHVsZS5cclxuICovXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbVG9vbGJhckNvbXBvbmVudCwgTmF2YmFyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbVG9vbGJhckNvbXBvbmVudCwgTmF2YmFyQ29tcG9uZW50LFxyXG4gICAgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBTaGFyZWRNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW0F1dGhHdWFyZCxBdXRoZW50aWNhdGlvblNlcnZpY2UsQmFzZVVybFNlcnZpY2VdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=
