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
var baseurl_service_1 = require('../shared/baseurl/baseurl.service');
var index_1 = require('../shared/membershipcoins/index');
var MembershipcoinsComponent = (function () {
    function MembershipcoinsComponent(fb, route, router, localService, mycur, mydate1, emailval, baseUrlservice) {
        var _this = this;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.localService = localService;
        this.mycur = mycur;
        this.mydate1 = mydate1;
        this.emailval = emailval;
        this.baseUrlservice = baseUrlservice;
        this.mybaseurl = baseUrlservice.getBaseurl();
        var data = sessionStorage.getItem('memberdetails');
        var ofcmemsession = JSON.parse(data);
        this.sessionid = ofcmemsession.ofcmemsession_id;
        this.localService.getAllPlan('dummy').subscribe(function (p) { return _this.planGrid = p; }, function (e) { return console.log("my error " + e, e); }, function () { return console.log(_this.planGrid); });
        this.localService.getAllTransaction(this.sessionid).subscribe(function (p) { return _this.transactionGrid = p; }, function (e) { return console.log("my error " + e, e); }, function () { return console.log(_this.transactionGrid); });
        this.localService.getActivePlan(this.sessionid).subscribe(function (p) { return _this.activePlan = p; }, function (e) { return console.log("my error " + e, e); }, function () { return console.log("ActivePlan", _this.activePlan); });
        this.localService.getSumCoins(this.sessionid).subscribe(function (p) { return _this.sumOfCoins = p; }, function (e) { return console.log("my error " + e, e); }, function () { return console.log(_this.sumOfCoins); });
    }
    MembershipcoinsComponent.prototype.clear = function () {
        this.newmembershipcoins = true;
        this.membershipcoins = {
            status: '',
            plan_id: '',
            plan_name: '',
            plan_rate: '',
            createdate: '',
            modifieddate: '',
            plan_bidsnos: '',
            ofcmemplan_id: '',
            ofcmemplan_rate: '',
            ofcmemplan_coupon: '',
            ofcmemplan_ispaid: '',
            ofcmemplan_status: '',
            ofcmemplan_enddate: '',
            ofcmemplan_jobfees: '',
            ofcmemplan_currency: '',
            ofcmemplan_discount: '',
            plan_feespercentage: '',
            ofcmemplan_startdate: '',
            plan_nosofcategories: '',
            ofcmemplan_description: '',
            ofcmembers_id_ofcmemplan: '',
            ofcmemplan_coinsassigned: '',
            ofcmemplan_paymentmethod: '',
            ofcmemplan_nosofteammembers: ''
        };
        this.plan = {
            plan_id: '',
            plan_name: '',
            plan_rate: '',
            createdate: '',
            modifieddate: '',
            plan_bidsnos: '',
            plan_feespercentage: '',
            plan_nosofcategories: '',
            status: ''
        };
        this.transaction = {
            status: '',
            plan_id: '',
            plan_name: '',
            plan_rate: '',
            createdate: '',
            modifieddate: '',
            plan_bidsnos: '',
            ofcmemplan_id: '',
            ofcmemplan_rate: '',
            ofcmemplan_coupon: '',
            ofcmemplan_ispaid: '',
            ofcmemplan_status: '',
            ofcmemplan_enddate: '',
            ofcmemplan_jobfees: '',
            ofcmemplan_currency: '',
            ofcmemplan_discount: '',
            plan_feespercentage: '',
            ofcmemplan_startdate: '',
            plan_nosofcategories: '',
            ofcmemplan_description: '',
            ofcmembers_id_ofcmemplan: '',
            ofcmemplan_coinsassigned: '',
            ofcmemplan_paymentmethod: '',
            ofcmemplan_nosofteammembers: ''
        };
        this.activePlan = {
            status: '',
            plan_id: '',
            plan_name: '',
            plan_rate: '',
            createdate: '',
            modifieddate: '',
            plan_bidsnos: '',
            ofcmemplan_id: '',
            ofcmemplan_rate: '',
            ofcmemplan_coupon: '',
            ofcmemplan_ispaid: '',
            ofcmemplan_status: '',
            ofcmemplan_enddate: '',
            ofcmemplan_jobfees: '',
            ofcmemplan_currency: '',
            ofcmemplan_discount: '',
            plan_feespercentage: '',
            ofcmemplan_startdate: '',
            plan_nosofcategories: '',
            ofcmemplan_description: '',
            ofcmembers_id_ofcmemplan: '',
            ofcmemplan_coinsassigned: '',
            ofcmemplan_paymentmethod: '',
            ofcmemplan_nosofteammembers: ''
        };
    };
    MembershipcoinsComponent.prototype.ngOnInit = function () {
        this.clear();
    };
    MembershipcoinsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-membershipcoins',
            templateUrl: 'membershipcoins.component.html',
            styleUrls: ['membershipcoins.component.css'],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, baseurl_service_1.BaseUrlService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, index_1.MembershipcoinsService, first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, baseurl_service_1.BaseUrlService])
    ], MembershipcoinsComponent);
    return MembershipcoinsComponent;
}());
exports.MembershipcoinsComponent = MembershipcoinsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tZW1iZXJzaGlwY29pbnMvbWVtYmVyc2hpcGNvaW5zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHNCQUFnRSxnQkFBZ0IsQ0FBQyxDQUFBO0FBSWpGLHVCQUF1QyxpQkFBaUIsQ0FBQyxDQUFBO0FBTXpELDJCQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBRzVELGtDQUE2QixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ2pFLG1DQUE4QixvQ0FBb0MsQ0FBQyxDQUFBO0FBRW5FLGdDQUErQixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ25FLHNCQUF1QyxpQ0FBaUMsQ0FBQyxDQUFBO0FBZXpFO0lBcUhFLGtDQUFvQixFQUFlLEVBQ3pCLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxZQUFvQyxFQUNwQyxLQUFxQixFQUNyQixPQUFxQixFQUNyQixRQUF1QixFQUN2QixjQUE4QjtRQTVIMUMsaUJBK0pDO1FBMUNxQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBd0I7UUFDcEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUV0QyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUU1QyxJQUFJLElBQUksR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3BELElBQUksYUFBYSxHQUFrQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDO1FBRWhELElB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VUFBVSxFQUFFLEVBQUU7WUFDZCxZQUFZLEVBQUUsRUFBRTtZQUNoQixZQUFZLEVBQUUsRUFBRTtZQUNoQixhQUFhLEVBQUUsRUFBRTtZQUNqQixlQUFlLEVBQUUsRUFBRTtZQUNuQixpQkFBaUIsRUFBRSxFQUFFO1lBQ3JCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsaUJBQWlCLEVBQUUsRUFBRTtZQUNyQixrQkFBa0IsRUFBRSxFQUFFO1lBQ3RCLGtCQUFrQixFQUFFLEVBQUU7WUFDdEIsbUJBQW1CLEVBQUUsRUFBRTtZQUN2QixtQkFBbUIsRUFBRSxFQUFFO1lBQ3ZCLG1CQUFtQixFQUFFLEVBQUU7WUFDdkIsb0JBQW9CLEVBQUUsRUFBRTtZQUN4QixvQkFBb0IsRUFBRSxFQUFFO1lBQ3hCLHNCQUFzQixFQUFFLEVBQUU7WUFDMUIsd0JBQXdCLEVBQUUsRUFBRTtZQUM1Qix3QkFBd0IsRUFBRSxFQUFFO1lBQzVCLHdCQUF3QixFQUFFLEVBQUU7WUFDNUIsMkJBQTJCLEVBQUUsRUFBRTtTQUNoQyxDQUFBO0lBQ0gsQ0FBQztJQXVDRCwyQ0FBUSxHQUFSO1FBRUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQW5LSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDJCQUFjLEVBQUUsZ0NBQVksRUFBRSxrQ0FBYSxFQUFFLGdDQUFjLENBQUM7U0FDekUsQ0FBQzs7Z0NBQUE7SUFnS0YsK0JBQUM7QUFBRCxDQS9KQSxBQStKQyxJQUFBO0FBL0pZLGdDQUF3QiwyQkErSnBDLENBQUEiLCJmaWxlIjoiYXBwL21lbWJlcnNoaXBjb2lucy9tZW1iZXJzaGlwY29pbnMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNZXNzYWdlc01vZHVsZSwgTWVzc2FnZSwgR3Jvd2wgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBQYW5lbE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBEcm9wZG93bjEgfSBmcm9tICcuL2Ryb3Bkb3duMSc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWQgfSBmcm9tICcuL2ZpbGV1cGxvYWQnO1xyXG5pbXBvcnQgeyBEYXRhVGFibGVNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgU2VsZWN0SXRlbSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE15RGF0ZUZvcm1hdCB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9teWRhdGVmb3JtYXQucGlwZSc7XHJcbmltcG9ydCB7IEVtYWlsVmFsaWRhdGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZW1haWx2YWxpZGF0ZS5waXBlJztcclxuaW1wb3J0IHsgQ3VzdG9tVmFsaWRhdG9yIH0gZnJvbSAnLi4vc2hhcmVkL3ZhbGlkYXRvcnMvdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEJhc2VVcmxTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2Jhc2V1cmwvYmFzZXVybC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWVtYmVyc2hpcGNvaW5zU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9tZW1iZXJzaGlwY29pbnMvaW5kZXgnO1xyXG5pbXBvcnQgeyBPRkNtZW1TZXNzaW9uIH0gZnJvbSAnLi4vbG9naW5wYWdlL29mY21lbXNlc3Npb24nO1xyXG5pbXBvcnQgeyBNZW1iZXJzaGlwY29pbnMgfSBmcm9tICcuL21lbWJlcnNoaXBjb2lucyc7XHJcbmltcG9ydCB7IFBsYW4gfSBmcm9tICcuL3BsYW4nO1xyXG5pbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gJy4vdHJhbnNhY3Rpb24nO1xyXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBtZW1iZXJzaGlwY29pbnNDb21wb25lbnQuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnc2QtbWVtYmVyc2hpcGNvaW5zJyxcclxuICB0ZW1wbGF0ZVVybDogJ21lbWJlcnNoaXBjb2lucy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ21lbWJlcnNoaXBjb2lucy5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbTXlDdXJyZW5jeVBpcGUsIE15RGF0ZUZvcm1hdCwgRW1haWxWYWxpZGF0ZSwgQmFzZVVybFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZW1iZXJzaGlwY29pbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbiAgcGxhbkdyaWQ6IFBsYW5bXTtcclxuICB0cmFuc2FjdGlvbkdyaWQ6IFRyYW5zYWN0aW9uW107XHJcbiAgYWN0aXZlUGxhbjogVHJhbnNhY3Rpb247IFxyXG4gIHN1bU9mQ29pbnM6TnVtYmVyO1xyXG5cclxuICBtZW1iZXJzaGlwY29pbnM6IE1lbWJlcnNoaXBjb2lucztcclxuICBwbGFuOiBQbGFuO1xyXG4gIHRyYW5zYWN0aW9uOiBUcmFuc2FjdGlvbjtcclxuXHJcbiAgc3VibWl0dGVkOiBib29sZWFuO1xyXG4gIG5ld21lbWJlcnNoaXBjb2luczogYm9vbGVhbjtcclxuICBteWJhc2V1cmw6IHN0cmluZztcclxuICBzZXNzaW9uaWQ6IHN0cmluZzsgXHJcbiAgXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLm5ld21lbWJlcnNoaXBjb2lucyA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5tZW1iZXJzaGlwY29pbnMgPSB7XHJcblxyXG4gICAgICBzdGF0dXM6ICcnLFxyXG4gICAgICBwbGFuX2lkOiAnJyxcclxuICAgICAgcGxhbl9uYW1lOiAnJyxcclxuICAgICAgcGxhbl9yYXRlOiAnJyxcclxuICAgICAgY3JlYXRlZGF0ZTogJycsXHJcbiAgICAgIG1vZGlmaWVkZGF0ZTogJycsXHJcbiAgICAgIHBsYW5fYmlkc25vczogJycsXHJcbiAgICAgIG9mY21lbXBsYW5faWQ6ICcnLFxyXG4gICAgICBvZmNtZW1wbGFuX3JhdGU6ICcnLFxyXG4gICAgICBvZmNtZW1wbGFuX2NvdXBvbjogJycsXHJcbiAgICAgIG9mY21lbXBsYW5faXNwYWlkOiAnJyxcclxuICAgICAgb2ZjbWVtcGxhbl9zdGF0dXM6ICcnLFxyXG4gICAgICBvZmNtZW1wbGFuX2VuZGRhdGU6ICcnLFxyXG4gICAgICBvZmNtZW1wbGFuX2pvYmZlZXM6ICcnLFxyXG4gICAgICBvZmNtZW1wbGFuX2N1cnJlbmN5OiAnJyxcclxuICAgICAgb2ZjbWVtcGxhbl9kaXNjb3VudDogJycsXHJcbiAgICAgIHBsYW5fZmVlc3BlcmNlbnRhZ2U6ICcnLFxyXG4gICAgICBvZmNtZW1wbGFuX3N0YXJ0ZGF0ZTogJycsXHJcbiAgICAgIHBsYW5fbm9zb2ZjYXRlZ29yaWVzOiAnJyxcclxuICAgICAgb2ZjbWVtcGxhbl9kZXNjcmlwdGlvbjogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfaWRfb2ZjbWVtcGxhbjogJycsXHJcbiAgICAgIG9mY21lbXBsYW5fY29pbnNhc3NpZ25lZDogJycsXHJcbiAgICAgIG9mY21lbXBsYW5fcGF5bWVudG1ldGhvZDogJycsXHJcbiAgICAgIG9mY21lbXBsYW5fbm9zb2Z0ZWFtbWVtYmVyczogJydcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBsYW4gPSB7XHJcbiAgICAgIHBsYW5faWQ6ICcnLFxyXG4gICAgICBwbGFuX25hbWU6ICcnLFxyXG4gICAgICBwbGFuX3JhdGU6ICcnLFxyXG4gICAgICBjcmVhdGVkYXRlOiAnJyxcclxuICAgICAgbW9kaWZpZWRkYXRlOiAnJyxcclxuICAgICAgcGxhbl9iaWRzbm9zOiAnJyxcclxuICAgICAgcGxhbl9mZWVzcGVyY2VudGFnZTogJycsXHJcbiAgICAgIHBsYW5fbm9zb2ZjYXRlZ29yaWVzOiAnJyxcclxuICAgICAgc3RhdHVzOiAnJ1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aGlzLnRyYW5zYWN0aW9uID0ge1xyXG4gICAgICBzdGF0dXM6ICcnLCBcclxuICAgICAgcGxhbl9pZDogJycsIFxyXG4gICAgICBwbGFuX25hbWU6ICcnLCBcclxuICAgICAgcGxhbl9yYXRlOiAnJywgXHJcbiAgICAgIGNyZWF0ZWRhdGU6ICcnLCBcclxuICAgICAgbW9kaWZpZWRkYXRlOiAnJywgXHJcbiAgICAgIHBsYW5fYmlkc25vczogJycsIFxyXG4gICAgICBvZmNtZW1wbGFuX2lkOiAnJywgXHJcbiAgICAgIG9mY21lbXBsYW5fcmF0ZTogJycsIFxyXG4gICAgICBvZmNtZW1wbGFuX2NvdXBvbjogJycsIFxyXG4gICAgICBvZmNtZW1wbGFuX2lzcGFpZDogJycsXHJcbiAgICAgIG9mY21lbXBsYW5fc3RhdHVzOiAnJywgXHJcbiAgICAgIG9mY21lbXBsYW5fZW5kZGF0ZTogJycsIFxyXG4gICAgICBvZmNtZW1wbGFuX2pvYmZlZXM6ICcnLCBcclxuICAgICAgb2ZjbWVtcGxhbl9jdXJyZW5jeTogJycsIFxyXG4gICAgICBvZmNtZW1wbGFuX2Rpc2NvdW50OiAnJywgXHJcbiAgICAgIHBsYW5fZmVlc3BlcmNlbnRhZ2U6ICcnLCBcclxuICAgICAgb2ZjbWVtcGxhbl9zdGFydGRhdGU6ICcnLCBcclxuICAgICAgcGxhbl9ub3NvZmNhdGVnb3JpZXM6ICcnLCBcclxuICAgICAgb2ZjbWVtcGxhbl9kZXNjcmlwdGlvbjogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfaWRfb2ZjbWVtcGxhbjogJycsIFxyXG4gICAgICBvZmNtZW1wbGFuX2NvaW5zYXNzaWduZWQ6ICcnLCBcclxuICAgICAgb2ZjbWVtcGxhbl9wYXltZW50bWV0aG9kOiAnJywgXHJcbiAgICAgIG9mY21lbXBsYW5fbm9zb2Z0ZWFtbWVtYmVyczogJydcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFjdGl2ZVBsYW4gPSB7XHJcbiAgICAgIHN0YXR1czogJycsIFxyXG4gICAgICBwbGFuX2lkOiAnJywgXHJcbiAgICAgIHBsYW5fbmFtZTogJycsIFxyXG4gICAgICBwbGFuX3JhdGU6ICcnLCBcclxuICAgICAgY3JlYXRlZGF0ZTogJycsIFxyXG4gICAgICBtb2RpZmllZGRhdGU6ICcnLCBcclxuICAgICAgcGxhbl9iaWRzbm9zOiAnJywgXHJcbiAgICAgIG9mY21lbXBsYW5faWQ6ICcnLCBcclxuICAgICAgb2ZjbWVtcGxhbl9yYXRlOiAnJywgXHJcbiAgICAgIG9mY21lbXBsYW5fY291cG9uOiAnJywgXHJcbiAgICAgIG9mY21lbXBsYW5faXNwYWlkOiAnJyxcclxuICAgICAgb2ZjbWVtcGxhbl9zdGF0dXM6ICcnLCBcclxuICAgICAgb2ZjbWVtcGxhbl9lbmRkYXRlOiAnJywgXHJcbiAgICAgIG9mY21lbXBsYW5fam9iZmVlczogJycsIFxyXG4gICAgICBvZmNtZW1wbGFuX2N1cnJlbmN5OiAnJywgXHJcbiAgICAgIG9mY21lbXBsYW5fZGlzY291bnQ6ICcnLCBcclxuICAgICAgcGxhbl9mZWVzcGVyY2VudGFnZTogJycsIFxyXG4gICAgICBvZmNtZW1wbGFuX3N0YXJ0ZGF0ZTogJycsIFxyXG4gICAgICBwbGFuX25vc29mY2F0ZWdvcmllczogJycsIFxyXG4gICAgICBvZmNtZW1wbGFuX2Rlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19pZF9vZmNtZW1wbGFuOiAnJywgXHJcbiAgICAgIG9mY21lbXBsYW5fY29pbnNhc3NpZ25lZDogJycsIFxyXG4gICAgICBvZmNtZW1wbGFuX3BheW1lbnRtZXRob2Q6ICcnLCBcclxuICAgICAgb2ZjbWVtcGxhbl9ub3NvZnRlYW1tZW1iZXJzOiAnJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBsb2NhbFNlcnZpY2U6IE1lbWJlcnNoaXBjb2luc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIG15Y3VyOiBNeUN1cnJlbmN5UGlwZSxcclxuICAgIHByaXZhdGUgbXlkYXRlMTogTXlEYXRlRm9ybWF0LFxyXG4gICAgcHJpdmF0ZSBlbWFpbHZhbDogRW1haWxWYWxpZGF0ZSxcclxuICAgIHByaXZhdGUgYmFzZVVybHNlcnZpY2U6IEJhc2VVcmxTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLm15YmFzZXVybCA9IGJhc2VVcmxzZXJ2aWNlLmdldEJhc2V1cmwoKTtcclxuXHJcbiAgICAgdmFyIGRhdGEgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdtZW1iZXJkZXRhaWxzJyk7XHJcbiAgICBsZXQgb2ZjbWVtc2Vzc2lvbjogT0ZDbWVtU2Vzc2lvbiA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICB0aGlzLnNlc3Npb25pZCA9IG9mY21lbXNlc3Npb24ub2ZjbWVtc2Vzc2lvbl9pZDtcclxuXHJcbiAgICB0aGlzLmxvY2FsU2VydmljZS5nZXRBbGxQbGFuKCdkdW1teScpLnN1YnNjcmliZShwID0+IHRoaXMucGxhbkdyaWQgPSBwLFxyXG4gICAgICBlID0+IGNvbnNvbGUubG9nKFwibXkgZXJyb3IgXCIgKyBlLCBlKSxcclxuICAgICAgKCkgPT4gY29uc29sZS5sb2codGhpcy5wbGFuR3JpZCkpO1xyXG5cclxuXHJcblxyXG4gICAgdGhpcy5sb2NhbFNlcnZpY2UuZ2V0QWxsVHJhbnNhY3Rpb24odGhpcy5zZXNzaW9uaWQpLnN1YnNjcmliZShwID0+IHRoaXMudHJhbnNhY3Rpb25HcmlkID0gcCxcclxuICAgICAgZSA9PiBjb25zb2xlLmxvZyhcIm15IGVycm9yIFwiICsgZSwgZSksXHJcbiAgICAgICgpID0+IGNvbnNvbGUubG9nKHRoaXMudHJhbnNhY3Rpb25HcmlkKSk7XHJcblxyXG4gICAgdGhpcy5sb2NhbFNlcnZpY2UuZ2V0QWN0aXZlUGxhbih0aGlzLnNlc3Npb25pZCkuc3Vic2NyaWJlKHAgPT4gdGhpcy5hY3RpdmVQbGFuID0gcCxcclxuICAgICAgZSA9PiBjb25zb2xlLmxvZyhcIm15IGVycm9yIFwiICsgZSwgZSksXHJcbiAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiQWN0aXZlUGxhblwiLCB0aGlzLmFjdGl2ZVBsYW4pKTtcclxuXHJcbiAgICB0aGlzLmxvY2FsU2VydmljZS5nZXRTdW1Db2lucyh0aGlzLnNlc3Npb25pZCkuc3Vic2NyaWJlKHAgPT4gdGhpcy5zdW1PZkNvaW5zID0gcCxcclxuICAgICAgZSA9PiBjb25zb2xlLmxvZyhcIm15IGVycm9yIFwiICsgZSwgZSksXHJcbiAgICAgICgpID0+IGNvbnNvbGUubG9nKHRoaXMuc3VtT2ZDb2lucykpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB0aGlzLmNsZWFyKCk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19
