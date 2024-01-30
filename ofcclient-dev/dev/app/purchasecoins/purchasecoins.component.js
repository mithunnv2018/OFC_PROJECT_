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
var index_1 = require('../shared/purchasecoins/index');
var PurchasecoinsComponent = (function () {
    function PurchasecoinsComponent(fb, route, router, localService, mycur, mydate1, emailval, baseUrlservice) {
        var _this = this;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.localService = localService;
        this.mycur = mycur;
        this.mydate1 = mydate1;
        this.emailval = emailval;
        this.baseUrlservice = baseUrlservice;
        this.msgs = [];
        this.drpCurrency = [];
        this.drpPlan = [];
        this.mybaseurl = baseUrlservice.getBaseurl();
        var data = sessionStorage.getItem('memberdetails');
        var ofcmemsession = JSON.parse(data);
        this.sessionid = ofcmemsession.ofcmemsession_id;
        this.localService.getAllTransaction(this.sessionid).subscribe(function (p) { return _this.transactionGrid = p; }, function (e) { return console.log("my error " + e, e); }, function () { return console.log(_this.transactionGrid); });
        this.localService.getSumCoins(this.sessionid).subscribe(function (p) { return _this.sumOfCoins = p; }, function (e) { return console.log("my error " + e, e); }, function () { return console.log(_this.sumOfCoins); });
        this.localService.getCurrencyDropdown('dummy').subscribe(function (p) { _this.drpCurrency = p; _this.drpCurrency.unshift({ label: "Select Currency", value: "1" }); }, function (e) { return console.log(e); }, function () { return console.log(_this.drpCurrency); });
        this.localService.getPlanDropdown('dummy').subscribe(function (p) { _this.drpPlan = p; _this.drpPlan.unshift({ label: "Select Plan", value: "1" }); }, function (e) { return console.log(e); }, function () { return console.log("Plans:", _this.drpPlan); });
    }
    PurchasecoinsComponent.prototype.clear = function () {
        this.newpurchasecoins = true;
        this.memberplan = {
            ofcmemplan_id: '',
            ofcmembers_id_ofcmemplan: '',
            plan_id_ofcmemplan: '',
            ofcmemplan_startdate: '',
            ofcmemplan_enddate: '',
            ofcmemplan_status: '',
            ofcmemplan_coupon: '',
            ofcmemplan_discount: '',
            ofcmemplan_rate: '',
            ofcmemplan_currency: '',
            ofcmemplan_coinsassigned: '',
            ofcmemplan_jobfees: '',
            ofcmemplan_nosofteammembers: '',
            ofcmemplan_description: '',
            ofcmemplan_paymentmethod: '',
            ofcmemplan_ispaid: '',
            createdate: '',
            modifieddate: '',
            status: ''
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
    PurchasecoinsComponent.prototype.ngOnInit = function () {
        this.clear();
    };
    PurchasecoinsComponent.prototype.populatePlanDetails = function (events1) {
        var _this = this;
        this.planId = events1.value;
        this.localService.editPlan(this.planId).subscribe(function (p) { return _this.plan = p; }, function (e) { return console.log("my error " + e, e); }, function () { return console.log(_this.plan); });
    };
    PurchasecoinsComponent.prototype.savePlan = function () {
        var _this = this;
        var planNew;
        this.localService.editPlan(this.planId).subscribe(function (p) { return planNew = p; }, function (e) {
            return console.log("my error " + e, e);
        }, function () {
            _this.memberplan.ofcmemplan_rate = planNew.plan_rate;
            _this.memberplan.ofcmemplan_discount = planNew.plan_rate;
            _this.memberplan.plan_id_ofcmemplan = _this.planId;
            _this.submitted = true;
            _this.msgs = [];
            _this.localService.savePlan(_this.sessionid, _this.memberplan).subscribe(function (p) { return _this.commonError = p; }, function (e) { return console.log(e); }, function () {
                console.log("save plan result", _this.commonError);
                if (Number(_this.commonError.Isuccess) == 1) {
                    _this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Update Successfully' });
                }
                else {
                    var err = _this.commonError.Error;
                    _this.msgs.push({ severity: 'info', summary: 'Error', detail: err });
                }
            });
        });
        this.clear();
    };
    PurchasecoinsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-purchasecoins',
            templateUrl: 'purchasecoins.component.html',
            styleUrls: ['purchasecoins.component.css'],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, baseurl_service_1.BaseUrlService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, index_1.PurchasecoinsService, first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, baseurl_service_1.BaseUrlService])
    ], PurchasecoinsComponent);
    return PurchasecoinsComponent;
}());
exports.PurchasecoinsComponent = PurchasecoinsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wdXJjaGFzZWNvaW5zL3B1cmNoYXNlY29pbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsc0JBQWdFLGdCQUFnQixDQUFDLENBQUE7QUFJakYsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFNekQsMkJBQStCLDRCQUE0QixDQUFDLENBQUE7QUFHNUQsa0NBQTZCLG1DQUFtQyxDQUFDLENBQUE7QUFDakUsbUNBQThCLG9DQUFvQyxDQUFDLENBQUE7QUFFbkUsZ0NBQStCLG1DQUFtQyxDQUFDLENBQUE7QUFFbkUsc0JBQXFDLCtCQUErQixDQUFDLENBQUE7QUFlckU7SUFzSEUsZ0NBQW9CLEVBQWUsRUFDekIsS0FBcUIsRUFDckIsTUFBYyxFQUNkLFlBQWtDLEVBQ2xDLEtBQXFCLEVBQ3JCLE9BQXFCLEVBQ3JCLFFBQXVCLEVBQ3ZCLGNBQThCO1FBN0gxQyxpQkFzTUM7UUFoRnFCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDekIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFzQjtRQUNsQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBM0h4QyxTQUFJLEdBQWMsRUFBRSxDQUFDO1FBaUJyQixnQkFBVyxHQUFpQixFQUFFLENBQUM7UUFDL0IsWUFBTyxHQUFpQixFQUFFLENBQUM7UUEyR3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRTdDLElBQUksSUFBSSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbkQsSUFBSSxhQUFhLEdBQWtCLElBQUksQ0FBQyxL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QUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSwwQkFBMEIsRUFBRSxDQUFDLENBQUM7Z0JBRS9GLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLENBQUM7b0JBQ0osSUFBSSxHQUFHLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7b0JBQ2pDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RSxDQUFDO1lBQ0gsQ0FBQyxDQUNBLENBQUM7UUFFSixDQUFDLENBQUMsQ0FBQztRQUdULElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVYLENBQUM7SUEzTUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztZQUMxQyxTQUFTLEVBQUUsQ0FBQywyQkFBYyxFQUFFLGdDQUFZLEVBQUUsa0NBQWEsRUFBRSxnQ0FBYyxDQUFDO1NBQ3pFLENBQUM7OzhCQUFBO0lBdU1GLDZCQUFDO0FBQUQsQ0F0TUEsQUFzTUMsSUFBQTtBQXRNWSw4QkFBc0IseUJBc01sQyxDQUFBIiwiZmlsZSI6ImFwcC9wdXJjaGFzZWNvaW5zL3B1cmNoYXNlY29pbnMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBNZXNzYWdlc01vZHVsZSwgTWVzc2FnZSwgR3Jvd2wgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBQYW5lbE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBEcm9wZG93bjEgfSBmcm9tICcuL2Ryb3Bkb3duMSc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWQgfSBmcm9tICcuL2ZpbGV1cGxvYWQnO1xyXG5pbXBvcnQgeyBEYXRhVGFibGVNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgU2VsZWN0SXRlbSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE15RGF0ZUZvcm1hdCB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9teWRhdGVmb3JtYXQucGlwZSc7XHJcbmltcG9ydCB7IEVtYWlsVmFsaWRhdGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZW1haWx2YWxpZGF0ZS5waXBlJztcclxuaW1wb3J0IHsgQ3VzdG9tVmFsaWRhdG9yIH0gZnJvbSAnLi4vc2hhcmVkL3ZhbGlkYXRvcnMvdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEJhc2VVcmxTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2Jhc2V1cmwvYmFzZXVybC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbW9uRXJyb3IgfSBmcm9tICcuLi9sb2dpbnBhZ2UvY29tbW9uZXJyb3InO1xyXG5pbXBvcnQgeyBQdXJjaGFzZWNvaW5zU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9wdXJjaGFzZWNvaW5zL2luZGV4JztcclxuaW1wb3J0IHsgT0ZDbWVtU2Vzc2lvbiB9IGZyb20gJy4uL2xvZ2lucGFnZS9vZmNtZW1zZXNzaW9uJztcclxuaW1wb3J0IHsgTWVtYmVyUGxhbiB9IGZyb20gJy4vbWVtYmVycGxhbic7XHJcbmltcG9ydCB7IFBsYW4gfSBmcm9tICcuL3BsYW4nO1xyXG5pbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gJy4vdHJhbnNhY3Rpb24nO1xyXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBwdXJjaGFzZWNvaW5zQ29tcG9uZW50LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NkLXB1cmNoYXNlY29pbnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAncHVyY2hhc2Vjb2lucy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3B1cmNoYXNlY29pbnMuY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW015Q3VycmVuY3lQaXBlLCBNeURhdGVGb3JtYXQsIEVtYWlsVmFsaWRhdGUsIEJhc2VVcmxTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHVyY2hhc2Vjb2luc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIG1zZ3M6IE1lc3NhZ2VbXSA9IFtdO1xyXG5cclxuICBwbGFuR3JpZDogUGxhbltdO1xyXG4gIHRyYW5zYWN0aW9uR3JpZDogVHJhbnNhY3Rpb25bXTtcclxuICBhY3RpdmVQbGFuOiBUcmFuc2FjdGlvbjtcclxuICBzdW1PZkNvaW5zOiBOdW1iZXI7XHJcblxyXG4gIG1lbWJlcnBsYW46IE1lbWJlclBsYW47XHJcbiAgcGxhbjogUGxhbjtcclxuICB0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb247XHJcblxyXG4gIHN1Ym1pdHRlZDogYm9vbGVhbjtcclxuICBuZXdwdXJjaGFzZWNvaW5zOiBib29sZWFuO1xyXG4gIG15YmFzZXVybDogc3RyaW5nO1xyXG4gIHNlc3Npb25pZDogc3RyaW5nO1xyXG4gIHBsYW5JZDogc3RyaW5nO1xyXG5cclxuICBkcnBDdXJyZW5jeTogU2VsZWN0SXRlbVtdID0gW107XHJcbiAgZHJwUGxhbjogU2VsZWN0SXRlbVtdID0gW107XHJcblxyXG4gIGNvbW1vbkVycm9yOiBDb21tb25FcnJvcjtcclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLm5ld3B1cmNoYXNlY29pbnMgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMubWVtYmVycGxhbiA9IHtcclxuICAgICAgb2ZjbWVtcGxhbl9pZDogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfaWRfb2ZjbWVtcGxhbjogJycsXHJcbiAgICAgIHBsYW5faWRfb2ZjbWVtcGxhbjogJycsXHJcbiAgICAgIG9mY21lbXBsYW5fc3RhcnRkYXRlOiAnJyxcclxuICAgICAgb2ZjbWVtcGxhbl9lbmRkYXRlOiAnJyxcclxuICAgICAgb2ZjbWVtcGxhbl9zdGF0dXM6ICcnLFxyXG4gICAgICBvZmNtZW1wbGFuX2NvdXBvbjogJycsXHJcbiAgICAgIG9mY21lbXBsYW5fZGlzY291bnQ6ICcnLFxyXG4gICAgICBvZmNtZW1wbGFuX3JhdGU6ICcnLFxyXG4gICAgICBvZmNtZW1wbGFuX2N1cnJlbmN5OiAnJyxcclxuICAgICAgb2ZjbWVtcGxhbl9jb2luc2Fzc2lnbmVkOiAnJyxcclxuICAgICAgb2ZjbWVtcGxhbl9qb2JmZWVzOiAnJyxcclxuICAgICAgb2ZjbWVtcGxhbl9ub3NvZnRlYW1tZW1iZXJzOiAnJyxcclxuICAgICAgb2ZjbWVtcGxhbl9kZXNjcmlwdGlvbjogJycsXHJcbiAgICAgIG9mY21lbXBsYW5fcGF5bWVudG1ldGhvZDogJycsXHJcbiAgICAgIG9mY21lbXBsYW5faXNwYWlkOiAnJyxcclxuICAgICAgY3JlYXRlZGF0ZTogJycsXHJcbiAgICAgIG1vZGlmaWVkZGF0ZTogJycsXHJcbiAgICAgIHN0YXR1czogJydcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBsYW4gPSB7XHJcbiAgICAgIHBsYW5faWQ6ICcnLFxyXG4gICAgICBwbGFuX25hbWU6ICcnLFxyXG4gICAgICBwbGFuX3JhdGU6ICcnLFxyXG4gICAgICBjcmVhdGVkYXRlOiAnJyxcclxuICAgICAgbW9kaWZpZWRkYXRlOiAnJyxcclxuICAgICAgcGxhbl9iaWRzbm9zOiAnJyxcclxuICAgICAgcGxhbl9mZWVzcGVyY2VudGFnZTogJycsXHJcbiAgICAgIHBsYW5fbm9zb2ZjYXRlZ29yaWVzOiAnJyxcclxuICAgICAgc3RhdHVzOiAnJ1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aGlzLnRyYW5zYWN0aW9uID0ge1xyXG4gICAgICBzdGF0dXM6ICcnLFxyXG4gICAgICBwbGFuX2lkOiAnJyxcclxuICAgICAgcGxhbl9uYW1lOiAnJyxcclxuICAgICAgcGxhbl9yYXRlOiAnJyxcclxuICAgICAgY3JlYXRlZGF0ZTogJycsXHJcbiAgICAgIG1vZGlmaWVkZGF0ZTogJycsXHJcbiAgICAgIHBsYW5fYmlkc25vczogJycsXHJcbiAgICAgIG9mY21lbXBsYW5faWQ6ICcnLFxyXG4gICAgICBvZmNtZW1wbGFuX3JhdGU6ICcnLFxyXG4gICAgICBvZmNtZW1wbGFuX2NvdXBvbjogJycsXHJcbiAgICAgIG9mY21lbXBsYW5faXNwYWlkOiAnJyxcclxuICAgICAgb2ZjbWVtcGxhbl9zdGF0dXM6ICcnLFxyXG4gICAgICBvZmNtZW1wbGFuX2VuZGRhdGU6ICcnLFxyXG4gICAgICBvZmNtZW1wbGFuX2pvYmZlZXM6ICcnLFxyXG4gICAgICBvZmNtZW1wbGFuX2N1cnJlbmN5OiAnJyxcclxuICAgICAgb2ZjbWVtcGxhbl9kaXNjb3VudDogJycsXHJcbiAgICAgIHBsYW5fZmVlc3BlcmNlbnRhZ2U6ICcnLFxyXG4gICAgICBvZmNtZW1wbGFuX3N0YXJ0ZGF0ZTogJycsXHJcbiAgICAgIHBsYW5fbm9zb2ZjYXRlZ29yaWVzOiAnJyxcclxuICAgICAgb2ZjbWVtcGxhbl9kZXNjcmlwdGlvbjogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfaWRfb2ZjbWVtcGxhbjogJycsXHJcbiAgICAgIG9mY21lbXBsYW5fY29pbnNhc3NpZ25lZDogJycsXHJcbiAgICAgIG9mY21lbXBsYW5fcGF5bWVudG1ldGhvZDogJycsXHJcbiAgICAgIG9mY21lbXBsYW5fbm9zb2Z0ZWFtbWVtYmVyczogJydcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFjdGl2ZVBsYW4gPSB7XHJcbiAgICAgIHN0YXR1czogJycsXHJcbiAgICAgIHBsYW5faWQ6ICcnLFxyXG4gICAgICBwbGFuX25hbWU6ICcnLFxyXG4gICAgICBwbGFuX3JhdGU6ICcnLFxyXG4gICAgICBjcmVhdGVkYXRlOiAnJyxcclxuICAgICAgbW9kaWZpZWRkYXRlOiAnJyxcclxuICAgICAgcGxhbl9iaWRzbm9zOiAnJyxcclxuICAgICAgb2ZjbWVtcGxhbl9pZDogJycsXHJcbiAgICAgIG9mY21lbXBsYW5fcmF0ZTogJycsXHJcbiAgICAgIG9mY21lbXBsYW5fY291cG9uOiAnJyxcclxuICAgICAgb2ZjbWVtcGxhbl9pc3BhaWQ6ICcnLFxyXG4gICAgICBvZmNtZW1wbGFuX3N0YXR1czogJycsXHJcbiAgICAgIG9mY21lbXBsYW5fZW5kZGF0ZTogJycsXHJcbiAgICAgIG9mY21lbXBsYW5fam9iZmVlczogJycsXHJcbiAgICAgIG9mY21lbXBsYW5fY3VycmVuY3k6ICcnLFxyXG4gICAgICBvZmNtZW1wbGFuX2Rpc2NvdW50OiAnJyxcclxuICAgICAgcGxhbl9mZWVzcGVyY2VudGFnZTogJycsXHJcbiAgICAgIG9mY21lbXBsYW5fc3RhcnRkYXRlOiAnJyxcclxuICAgICAgcGxhbl9ub3NvZmNhdGVnb3JpZXM6ICcnLFxyXG4gICAgICBvZmNtZW1wbGFuX2Rlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19pZF9vZmNtZW1wbGFuOiAnJyxcclxuICAgICAgb2ZjbWVtcGxhbl9jb2luc2Fzc2lnbmVkOiAnJyxcclxuICAgICAgb2ZjbWVtcGxhbl9wYXltZW50bWV0aG9kOiAnJyxcclxuICAgICAgb2ZjbWVtcGxhbl9ub3NvZnRlYW1tZW1iZXJzOiAnJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBsb2NhbFNlcnZpY2U6IFB1cmNoYXNlY29pbnNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBteWN1cjogTXlDdXJyZW5jeVBpcGUsXHJcbiAgICBwcml2YXRlIG15ZGF0ZTE6IE15RGF0ZUZvcm1hdCxcclxuICAgIHByaXZhdGUgZW1haWx2YWw6IEVtYWlsVmFsaWRhdGUsXHJcbiAgICBwcml2YXRlIGJhc2VVcmxzZXJ2aWNlOiBCYXNlVXJsU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5teWJhc2V1cmwgPSBiYXNlVXJsc2VydmljZS5nZXRCYXNldXJsKCk7XHJcblxyXG4gICAgdmFyIGRhdGEgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdtZW1iZXJkZXRhaWxzJyk7XHJcbiAgICBsZXQgb2ZjbWVtc2Vzc2lvbjogT0ZDbWVtU2Vzc2lvbiA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICB0aGlzLnNlc3Npb25pZCA9IG9mY21lbXNlc3Npb24ub2ZjbWVtc2Vzc2lvbl9pZDtcclxuXHJcblxyXG4gICAgdGhpcy5sb2NhbFNlcnZpY2UuZ2V0QWxsVHJhbnNhY3Rpb24odGhpcy5zZXNzaW9uaWQpLnN1YnNjcmliZShwID0+IHRoaXMudHJhbnNhY3Rpb25HcmlkID0gcCxcclxuICAgICAgZSA9PiBjb25zb2xlLmxvZyhcIm15IGVycm9yIFwiICsgZSwgZSksXHJcbiAgICAgICgpID0+IGNvbnNvbGUubG9nKHRoaXMudHJhbnNhY3Rpb25HcmlkKSk7XHJcblxyXG5cclxuICAgIHRoaXMubG9jYWxTZXJ2aWNlLmdldFN1bUNvaW5zKHRoaXMuc2Vzc2lvbmlkKS5zdWJzY3JpYmUocCA9PiB0aGlzLnN1bU9mQ29pbnMgPSBwLFxyXG4gICAgICBlID0+IGNvbnNvbGUubG9nKFwibXkgZXJyb3IgXCIgKyBlLCBlKSxcclxuICAgICAgKCkgPT4gY29uc29sZS5sb2codGhpcy5zdW1PZkNvaW5zKSk7XHJcblxyXG5cclxuICAgIHRoaXMubG9jYWxTZXJ2aWNlLmdldEN1cnJlbmN5RHJvcGRvd24oJ2R1bW15Jykuc3Vic2NyaWJlKHAgPT4geyB0aGlzLmRycEN1cnJlbmN5ID0gcDsgdGhpcy5kcnBDdXJyZW5jeS51bnNoaWZ0KHsgbGFiZWw6IFwiU2VsZWN0IEN1cnJlbmN5XCIsIHZhbHVlOiBcIjFcIiB9KSB9LCBlID0+IGNvbnNvbGUubG9nKGUpLCAoKSA9PiBjb25zb2xlLmxvZyh0aGlzLmRycEN1cnJlbmN5KSk7XHJcbiAgICB0aGlzLmxvY2FsU2VydmljZS5nZXRQbGFuRHJvcGRvd24oJ2R1bW15Jykuc3Vic2NyaWJlKHAgPT4geyB0aGlzLmRycFBsYW4gPSBwOyB0aGlzLmRycFBsYW4udW5zaGlmdCh7IGxhYmVsOiBcIlNlbGVjdCBQbGFuXCIsIHZhbHVlOiBcIjFcIiB9KSB9LCBlID0+IGNvbnNvbGUubG9nKGUpLCAoKSA9PiBjb25zb2xlLmxvZyhcIlBsYW5zOlwiLCB0aGlzLmRycFBsYW4pKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmNsZWFyKCk7XHJcbiAgfVxyXG5cclxuICBwb3B1bGF0ZVBsYW5EZXRhaWxzKGV2ZW50czE6IGFueSkge1xyXG4gICAgdGhpcy5wbGFuSWQgPSBldmVudHMxLnZhbHVlO1xyXG4gICAgdGhpcy5sb2NhbFNlcnZpY2UuZWRpdFBsYW4odGhpcy5wbGFuSWQpLnN1YnNjcmliZShwID0+IHRoaXMucGxhbiA9IHAsXHJcbiAgICAgIGUgPT4gY29uc29sZS5sb2coXCJteSBlcnJvciBcIiArIGUsIGUpLFxyXG4gICAgICAoKSA9PiBjb25zb2xlLmxvZyh0aGlzLnBsYW4pKTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgc2F2ZVBsYW4oKSB7XHJcblxyXG4gICAgbGV0IHBsYW5OZXc6IFBsYW47XHJcbiAgICB0aGlzLmxvY2FsU2VydmljZS5lZGl0UGxhbih0aGlzLnBsYW5JZCkuc3Vic2NyaWJlKHAgPT4gcGxhbk5ldyA9IHAsIGUgPT5cclxuXHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcIm15IGVycm9yIFwiICsgZSwgZSksICgpID0+IHtcclxuICAgICAgICB0aGlzLm1lbWJlcnBsYW4ub2ZjbWVtcGxhbl9yYXRlID0gcGxhbk5ldy5wbGFuX3JhdGU7XHJcbiAgICAgICAgdGhpcy5tZW1iZXJwbGFuLm9mY21lbXBsYW5fZGlzY291bnQgPSBwbGFuTmV3LnBsYW5fcmF0ZTtcclxuICAgICAgICB0aGlzLm1lbWJlcnBsYW4ucGxhbl9pZF9vZmNtZW1wbGFuPXRoaXMucGxhbklkO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubXNncyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmxvY2FsU2VydmljZS5zYXZlUGxhbih0aGlzLnNlc3Npb25pZCwgdGhpcy5tZW1iZXJwbGFuKS5zdWJzY3JpYmUocCA9PiB0aGlzLmNvbW1vbkVycm9yID0gcCwgZSA9PiBjb25zb2xlLmxvZyhlKSwgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJzYXZlIHBsYW4gcmVzdWx0XCIsdGhpcy5jb21tb25FcnJvcik7XHJcbiAgICAgICAgICBpZiAoTnVtYmVyKHRoaXMuY29tbW9uRXJyb3IuSXN1Y2Nlc3MpID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2luZm8nLCBzdW1tYXJ5OiAnU3VjY2VzcycsIGRldGFpbDogJ0Zvcm0gVXBkYXRlIFN1Y2Nlc3NmdWxseScgfSk7XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBlcnIgPSB0aGlzLmNvbW1vbkVycm9yLkVycm9yO1xyXG4gICAgICAgICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnaW5mbycsIHN1bW1hcnk6ICdFcnJvcicsIGRldGFpbDogZXJyIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgfSk7XHJcblxyXG5cclxudGhpcy5jbGVhcigpO1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ==
