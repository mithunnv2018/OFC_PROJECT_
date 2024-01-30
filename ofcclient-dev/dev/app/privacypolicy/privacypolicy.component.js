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
var index_1 = require('../shared/privacypolicy/index');
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var baseurl_service_1 = require('../shared/baseurl/baseurl.service');
var PrivacyPolicyComponent = (function () {
    function PrivacyPolicyComponent(fb, route, router, localService, mycur, mydate1, emailval, baseUrlservice) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.localService = localService;
        this.mycur = mycur;
        this.mydate1 = mydate1;
        this.emailval = emailval;
        this.baseUrlservice = baseUrlservice;
        this.msgs = [];
        this.privacypolicys = [];
    }
    PrivacyPolicyComponent.prototype.clear = function () {
        this.privacypolicy = {
            privacypolicy_id: '',
            privacypolicy_title: '',
            privacypolicy_description: '',
            createdate: '',
            modifieddate: '',
            status: ''
        };
    };
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clear();
        this.userform = this.fb.group({
            'privacypolicy_title': new forms_1.FormControl('', forms_1.Validators.required),
            'privacypolicy_description': new forms_1.FormControl('', forms_1.Validators.required),
        });
        this.localService
            .getall()
            .subscribe(function (p) { return _this.privacypolicys = p; }, function (e) { return console.log(e); }, function () {
            console.log('this.privacypolicys : ' + JSON.stringify(_this.privacypolicys));
        });
    };
    PrivacyPolicyComponent.prototype.processdata = function () {
    };
    PrivacyPolicyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-privacypolicy',
            templateUrl: 'privacypolicy.component.html',
            styleUrls: ['privacypolicy.component.css'],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, baseurl_service_1.BaseUrlService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, index_1.PrivacyPolicyService, first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, baseurl_service_1.BaseUrlService])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());
exports.PrivacyPolicyComponent = PrivacyPolicyComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcml2YWN5cG9saWN5L3ByaXZhY3lwb2xpY3kuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUMsZUFBZSxDQUFDLENBQUE7QUFDakQsc0JBQTJELGdCQUFnQixDQUFDLENBQUE7QUFJNUUsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFTekQsMkJBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsc0JBQXFDLCtCQUErQixDQUFDLENBQUE7QUFJckUsa0NBQTZCLG1DQUFtQyxDQUFDLENBQUE7QUFDakUsbUNBQThCLG9DQUFvQyxDQUFDLENBQUE7QUFFbkUsZ0NBQTZCLG1DQUFtQyxDQUFDLENBQUE7QUFXakU7SUFzQ0UsZ0NBQW9CLEVBQWUsRUFDZixLQUFxQixFQUNyQixNQUFjLEVBQ2QsWUFBa0MsRUFDbEMsS0FBcUIsRUFDckIsT0FBcUIsRUFDckIsUUFBdUIsRUFDdkIsY0FBNkI7UUFQN0IsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBc0I7UUFDbEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBekNqRCxTQUFJLEdBQVksRUFBRSxDQUFDO1FBR25CLG1CQUFjLEdBQWtCLEVBQUUsQ0FBQztJQTBDbkMsQ0FBQztJQTdCRCxzQ0FBSyxHQUFMO1FBRU0sSUFBSSxDQUFDLGFBQWEsR0FBQztZQUNqQixnQkFBZ0IsRUFBQyxFQUFFO1lBQ25CLG1CQUFtQixFQUFDLEVBQUU7WUFDdEIseUJBQXlCLEVBQUMsRUFBRTtZQUM1QixVQUFVLEVBQUMsRUFBRTtZQUNiLFlBQVksRUFBQyxFQUFFO1lBQ2YsTUFBTSxFQUFDLEVBQUU7U0FDVixDQUFBO0lBTVAsQ0FBQztJQW1CSCx5Q0FBUSxHQUFSO1FBQUEsaUJBcUJHO1FBbkJHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQzVCO1lBQ0UscUJBQXFCLEVBQUMsSUFBSSxtQkFBVyxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFFLFFBQVEsQ0FBQztZQUMvRCwyQkFBMkIsRUFBQyxJQUFJLG1CQUFXLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUUsUUFBUSxDQUFDO1NBQ3JFLENBQUMsQ0FBQztRQUdILElBQUksQ0FBQyxZQUFZO2FBQ2xCLE1BQU0sRUFBRTthQUNSLFNBQVMsQ0FDVSxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLEdBQUMsQ0FBQyxFQUFyQixDQUFxQixFQUMxQixVQUFBLENBQUMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUUsQ0FBQyxDQUFDLEVBQWYsQ0FBZSxFQUNwQjtZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUM1RSxDQUFDLENBQUMsQ0FBQztJQUlWLENBQUM7SUFDRCw0Q0FBVyxHQUFYO0lBR0EsQ0FBQztJQXRGSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1lBQzFDLFNBQVMsRUFBQyxDQUFDLDJCQUFjLEVBQUMsZ0NBQVksRUFBQyxrQ0FBYSxFQUFDLGdDQUFjLENBQUM7U0FDckUsQ0FBQzs7OEJBQUE7SUF1RkQsNkJBQUM7QUFBRCxDQXRGRCxBQXNGRSxJQUFBO0FBdEZXLDhCQUFzQix5QkFzRmpDLENBQUEiLCJmaWxlIjoiYXBwL3ByaXZhY3lwb2xpY3kvcHJpdmFjeXBvbGljeS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUdyb3VwLEZvcm1Db250cm9sLFZhbGlkYXRvcnMsRm9ybUJ1aWxkZXJ9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7TWVzc2FnZXNNb2R1bGUsTWVzc2FnZSxHcm93bH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtQYW5lbE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7QnV0dG9uTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge1ByaXZhY3lQb2xpY3l9IGZyb20gJy4vcHJpdmFjeXBvbGljeSc7XHJcbmltcG9ydCB7RHJvcGRvd24xfSBmcm9tICcuL2Ryb3Bkb3duMSc7XHJcbmltcG9ydCB7RmlsZVVwbG9hZH0gZnJvbSAnLi9maWxldXBsb2FkJztcclxuaW1wb3J0IHtEYXRhVGFibGVNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7RHJvcGRvd25Nb2R1bGUsRWRpdG9yTW9kdWxlLFNoYXJlZE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuXHJcblxyXG5pbXBvcnQgeyBNeUN1cnJlbmN5UGlwZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9maXJzdC5waXBlJztcclxuaW1wb3J0IHsgUHJpdmFjeVBvbGljeVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvcHJpdmFjeXBvbGljeS9pbmRleCc7XHJcblxyXG5pbXBvcnQge0ZpbGVVcGxvYWRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7U2VsZWN0SXRlbX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgTXlEYXRlRm9ybWF0IH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL215ZGF0ZWZvcm1hdC5waXBlJztcclxuaW1wb3J0IHsgRW1haWxWYWxpZGF0ZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9lbWFpbHZhbGlkYXRlLnBpcGUnO1xyXG5pbXBvcnQgeyBDdXN0b21WYWxpZGF0b3IgfSBmcm9tICcuLi9zaGFyZWQvdmFsaWRhdG9ycy92YWxpZGF0b3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtCYXNlVXJsU2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL2Jhc2V1cmwvYmFzZXVybC5zZXJ2aWNlJztcclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgcHJpdmFjeXBvbGljeUNvbXBvbmVudC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzZC1wcml2YWN5cG9saWN5JyxcclxuICB0ZW1wbGF0ZVVybDogJ3ByaXZhY3lwb2xpY3kuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydwcml2YWN5cG9saWN5LmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6W015Q3VycmVuY3lQaXBlLE15RGF0ZUZvcm1hdCxFbWFpbFZhbGlkYXRlLEJhc2VVcmxTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJpdmFjeVBvbGljeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLy9Gb3JtIGdyb3AgXHJcbiAgdXNlcmZvcm06IEZvcm1Hcm91cDtcclxuICAvLyBHcm93bCBtZXNzZWdlXHJcbiAgbXNnczogTWVzc2FnZVtdPVtdO1xyXG5cclxuICAvL0RlY2xhcmU6IERhdGEgaGFuZGxpbmcgZm9yIEdyaWQgZmxvdywgZm9ybSBmbG93XHJcbiAgcHJpdmFjeXBvbGljeXM6IFByaXZhY3lQb2xpY3lbXT1bXTtcclxuICBzdWJtaXR0ZWQ6IGJvb2xlYW47XHJcbiAgcHJpdmFjeXBvbGljeTogUHJpdmFjeVBvbGljeTtcclxuICBzZWxlY3RlZFByaXZhY3lQb2xpY3lSb3c6IFByaXZhY3lQb2xpY3k7XHJcblxyXG4gIFxyXG5cclxuICAgXHJcblxyXG5cclxuXHJcblxyXG4gIC8vUHJlcGFyZSBkYXRhIGZvciBuZXcgZW50cnkgb3IgaW5pdGl6ZSBkYXRhIGR1cmluZyBmb3JtIGxvYWQgYnkgY2xlYXJpbmcgZGF0YSBvciBwcmVzZXR0aW5nIGRhdGFcclxuICBjbGVhcigpe1xyXG4gICAgICAgXHJcbiAgICAgICAgdGhpcy5wcml2YWN5cG9saWN5PXtcclxuICAgICAgICAgIHByaXZhY3lwb2xpY3lfaWQ6JycsXHJcbiAgICAgICAgICBwcml2YWN5cG9saWN5X3RpdGxlOicnLFxyXG4gICAgICAgICAgcHJpdmFjeXBvbGljeV9kZXNjcmlwdGlvbjonJyxcclxuICAgICAgICAgIGNyZWF0ZWRhdGU6JycsXHJcbiAgICAgICAgICBtb2RpZmllZGRhdGU6JycsXHJcbiAgICAgICAgICBzdGF0dXM6JydcclxuICAgICAgICB9XHJcblxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIFxyXG5cclxuICB9XHJcblxyXG4gIC8vIGNvbnN0cnVjdG9yIGluaXRpYXplIG9mIGFsbCBuZWNlc3NhcnkgdmFyaWFibGUgYW5kIG9iamVjdHNcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgbG9jYWxTZXJ2aWNlOiBQcml2YWN5UG9saWN5U2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG15Y3VyOiBNeUN1cnJlbmN5UGlwZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG15ZGF0ZTE6IE15RGF0ZUZvcm1hdCxcclxuICAgICAgICAgICAgICBwcml2YXRlIGVtYWlsdmFsOiBFbWFpbFZhbGlkYXRlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYmFzZVVybHNlcnZpY2U6QmFzZVVybFNlcnZpY2VcclxuICAgICAgICAgICAgICApe1xyXG4gICAgICAgICAgIFxyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG5cclxuLy9Gb3JtIGluaXRcclxubmdPbkluaXQoKSB7IFxyXG4gICAgICAvL0NsZWFyIGV2ZW50IGFuZCBpbml0YWxpemUgb2JqZWN0c1xyXG4gICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgIHRoaXMudXNlcmZvcm0gPSB0aGlzLmZiLmdyb3VwKFxyXG4gICAgICAge1xyXG4gICAgICAgICAncHJpdmFjeXBvbGljeV90aXRsZSc6bmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLiByZXF1aXJlZCksXHJcbiAgICAgICAgICdwcml2YWN5cG9saWN5X2Rlc2NyaXB0aW9uJzpuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMuIHJlcXVpcmVkKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvL3ByZWxvYWQgZGF0YSBHcmlkIHJlcXVpcmVkIFxyXG4gICAgICAgIHRoaXMubG9jYWxTZXJ2aWNlXHJcbiAgICAgIC5nZXRhbGwoKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAvKiBoYXBweSBwYXRoICovIHAgPT4gdGhpcy5wcml2YWN5cG9saWN5cz1wLFxyXG4gICAgICAgICAvKiBlcnJvciBwYXRoICovIGUgPT4gY29uc29sZS5sb2coIGUpLFxyXG4gICAgICAgICAvKiBvbkNvbXBsZXRlICovICgpID0+IHtcclxuICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcy5wcml2YWN5cG9saWN5cyA6ICcrSlNPTi5zdHJpbmdpZnkodGhpcy5wcml2YWN5cG9saWN5cykpO1xyXG4gICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gIH1cclxuICBwcm9jZXNzZGF0YSgpe1xyXG4gICAgXHJcblxyXG4gIH1cclxuICBcclxuXHJcbiBcclxuXHJcbiAgXHJcblxyXG4gfVxyXG4iXX0=
