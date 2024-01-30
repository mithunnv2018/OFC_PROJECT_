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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var baseurl_service_1 = require('../baseurl/baseurl.service');
var PurchasecoinsService = (function () {
    function PurchasecoinsService(http, baseUrlservice) {
        this.http = http;
        this.baseUrlservice = baseUrlservice;
        this.baseUrl = baseUrlservice.getBaseurl() + 'memberplan/';
        this.baseUrlPlan = baseUrlservice.getBaseurl() + 'plan/';
        this.baseUrlDrp = baseUrlservice.getBaseurl() + 'currencyconversion/';
    }
    PurchasecoinsService.prototype.get = function () {
        return this.http.get('/assets/data.json')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PurchasecoinsService.prototype.getAllTransaction = function (inparam) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "membersessionid=" + inparam;
        var url2 = this.baseUrl + "WS_proc_member_getall_transactions";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    PurchasecoinsService.prototype.getCurrencyDropdown = function (inparam) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "input0=" + inparam;
        var url2 = this.baseUrlDrp + "WS_tbl_currency_master_drpjson";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    PurchasecoinsService.prototype.getPlanDropdown = function (inparam) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "input0=" + inparam;
        var url2 = this.baseUrl + "WS_proc_tbl_plan_master_drpjson";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    PurchasecoinsService.prototype.getSumCoins = function (inparam) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "membersessionid=" + inparam;
        var url2 = this.baseUrl + "WS_proc_member_get_sumcoins";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    PurchasecoinsService.prototype.savePlan = function (membersessionid, inparam) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "membersessionid=" + membersessionid + "&inparam=" + JSON.stringify(inparam);
        console.log("Params=" + body1);
        var url2 = this.baseUrl + "WS_proc_member_ofcplan";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    PurchasecoinsService.prototype.editPlan = function (pkid) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "input0=" + pkid;
        var url2 = this.baseUrlPlan + "WS_tbl_plan_master_selectedit";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    PurchasecoinsService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    PurchasecoinsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, baseurl_service_1.BaseUrlService])
    ], PurchasecoinsService);
    return PurchasecoinsService;
}());
exports.PurchasecoinsService = PurchasecoinsService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcHVyY2hhc2Vjb2lucy9wdXJjaGFzZWNvaW5zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBd0QsZUFBZSxDQUFDLENBQUE7QUFDeEUsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0MsZ0NBQStCLDRCQUE0QixDQUFDLENBQUE7QUFZNUQ7SUFXRSw4QkFBb0IsSUFBVSxFQUFVLGNBQThCO1FBQWxELFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDcEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsVUFBVSxFQUFFLEdBQUMsYUFBYSxDQUFDO1FBQ3pELElBQUksQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDLFVBQVUsRUFBRSxHQUFDLE9BQU8sQ0FBQztRQUN2RCxJQUFJLENBQUMsVUFBVSxHQUFHLGNBQWMsQ0FBQyxVQUFVLEVBQUUsR0FBQyxxQkFBcUIsQ0FBQztJQUV0RSxDQUFDO0lBT0Qsa0NBQUcsR0FBSDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQzthQUN0QyxHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUlILGdEQUFpQixHQUFqQixVQUFrQixPQUFlO1FBRTdCLElBQUksUUFBUSxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDN0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQUVyRSxJQUFJLEtBQUssR0FBRSxxQkFBb0IsT0FBUyxDQUFDO1FBQ3pDLElBQUksSUFBSSxHQUFLLElBQUksQ0FBQyxPQUFP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S0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPO1lBQzFDLEtBQUssQ0FBQyxNQUFNLEdBQU0sS0FBSyxDQUFDLE1BQU0sV0FBTSxLQUFLLENBQUMsVUFBWSxHQUFHLGNBQWMsQ0FBQztRQUMxRSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBMUlIO1FBQUMsaUJBQVUsRUFBRTs7NEJBQUE7SUEySWIsMkJBQUM7QUFBRCxDQTFJQSxBQTBJQyxJQUFBO0FBMUlZLDRCQUFvQix1QkEwSWhDLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9wdXJjaGFzZWNvaW5zL3B1cmNoYXNlY29pbnMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkIH0gZnJvbSAnLi4vLi4vcHVyY2hhc2Vjb2lucy9maWxldXBsb2FkJztcclxuaW1wb3J0IHsgQmFzZVVybFNlcnZpY2UgfSBmcm9tICcuLi9iYXNldXJsL2Jhc2V1cmwuc2VydmljZSc7XHJcbmltcG9ydCB7IE1lbWJlclBsYW4gfSBmcm9tICcuLi8uLi9wdXJjaGFzZWNvaW5zL21lbWJlcnBsYW4nO1xyXG5pbXBvcnQge1NlbGVjdEl0ZW19IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IFBsYW4gfSBmcm9tICcuLi8uLi9wdXJjaGFzZWNvaW5zL3BsYW4nO1xyXG5pbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3B1cmNoYXNlY29pbnMvdHJhbnNhY3Rpb24nO1xyXG5pbXBvcnQgeyBDb21tb25FcnJvciB9IGZyb20gJy4uLy4uL2xvZ2lucGFnZS9jb21tb25lcnJvcic7XHJcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nOyAgLy8gZm9yIGRlYnVnZ2luZ1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgdGhlIE5hbWVMaXN0IHNlcnZpY2Ugd2l0aCBtZXRob2RzIHRvIHJlYWQgbmFtZXMgYW5kIGFkZCBuYW1lcy5cclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFB1cmNoYXNlY29pbnNTZXJ2aWNlIHtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgTmFtZUxpc3RTZXJ2aWNlIHdpdGggdGhlIGluamVjdGVkIEh0dHAuXHJcbiAgICogQHBhcmFtIHtIdHRwfSBodHRwIC0gVGhlIGluamVjdGVkIEh0dHAuXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBiYXNlVXJsUGxhbjogc3RyaW5nO1xyXG4gIHByaXZhdGUgYmFzZVVybERycDogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBiYXNlVXJsc2VydmljZTogQmFzZVVybFNlcnZpY2UpIHtcclxuICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmxzZXJ2aWNlLmdldEJhc2V1cmwoKSsnbWVtYmVycGxhbi8nO1xyXG4gICAgdGhpcy5iYXNlVXJsUGxhbiA9IGJhc2VVcmxzZXJ2aWNlLmdldEJhc2V1cmwoKSsncGxhbi8nO1xyXG4gICAgdGhpcy5iYXNlVXJsRHJwID0gYmFzZVVybHNlcnZpY2UuZ2V0QmFzZXVybCgpKydjdXJyZW5jeWNvbnZlcnNpb24vJztcclxuICAgIFxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSBmb3IgdGhlIEhUVFAgR0VUIHJlcXVlc3QgZm9yIHRoZSBKU09OIHJlc291cmNlLlxyXG4gICAqIEByZXR1cm4ge3N0cmluZ1tdfSBUaGUgT2JzZXJ2YWJsZSBmb3IgdGhlIEhUVFAgcmVxdWVzdC5cclxuICAgKi9cclxuICBnZXQoKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9hc3NldHMvZGF0YS5qc29uJylcclxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gIH1cclxuXHJcblxyXG4gXHJcbmdldEFsbFRyYW5zYWN0aW9uKGlucGFyYW06IHN0cmluZyk6IE9ic2VydmFibGU8VHJhbnNhY3Rpb25bXT4ge1xyXG5cclxuICAgIGxldCBoZWFkZXJzMSA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuXHJcbiAgICB2YXIgYm9keTEgPWBtZW1iZXJzZXNzaW9uaWQ9JHsgaW5wYXJhbX1gO1xyXG4gICAgdmFyIHVybDIgPWAke3RoaXMuYmFzZVVybH1XU19wcm9jX21lbWJlcl9nZXRhbGxfdHJhbnNhY3Rpb25zYDtcclxuXHJcbiAgICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KHVybDIsIGJvZHkxLCB7IGhlYWRlcnM6IGhlYWRlcnMxIH0pXHJcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgXHJcbiAgICByZXR1cm4gY29tcGxhaW50czEkO1xyXG4gIH1cclxuIFxyXG5nZXRDdXJyZW5jeURyb3Bkb3duKGlucGFyYW06IHN0cmluZyk6IE9ic2VydmFibGU8U2VsZWN0SXRlbVtdPntcclxuICAgIFxyXG4gICAgbGV0IGhlYWRlcnMxID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMxLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICAgXHJcbiAgICB2YXIgYm9keTEgPSBgaW5wdXQwPSR7IGlucGFyYW19YDtcclxuICAgIFxyXG4gICAgdmFyIHVybDIgPSBgJHt0aGlzLmJhc2VVcmxEcnB9V1NfdGJsX2N1cnJlbmN5X21hc3Rlcl9kcnBqc29uYDtcclxuICAgIFxyXG4gICAgbGV0IGNvbXBsYWludHMxJCA9IHRoaXMuaHR0cFxyXG4gICAgICAucG9zdCh1cmwyICwgYm9keTEgLHtoZWFkZXJzOiBoZWFkZXJzMX0pXHJcbiAgICAgIC5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgICAvL2FsZXJ0KFwiZ2V0RGlzcGxheUFsbDIgYWZ0ZXJcIik7XHJcbiAgICAgIHJldHVybiBjb21wbGFpbnRzMSQ7IFxyXG4gIH1cclxuXHJcbmdldFBsYW5Ecm9wZG93bihpbnBhcmFtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFNlbGVjdEl0ZW1bXT57XHJcbiAgICBcclxuICAgIGxldCBoZWFkZXJzMSA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuICAgIFxyXG4gICAgdmFyIGJvZHkxID0gYGlucHV0MD0keyBpbnBhcmFtfWA7XHJcbiAgICBcclxuICAgIHZhciB1cmwyID0gYCR7dGhpcy5iYXNlVXJsfVdTX3Byb2NfdGJsX3BsYW5fbWFzdGVyX2RycGpzb25gO1xyXG4gICAgXHJcbiAgICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KHVybDIgLCBib2R5MSAse2hlYWRlcnM6IGhlYWRlcnMxfSlcclxuICAgICAgLm1hcCgocmVzOlJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICAgIC8vYWxlcnQoXCJnZXREaXNwbGF5QWxsMiBhZnRlclwiKTtcclxuICAgICAgcmV0dXJuIGNvbXBsYWludHMxJDsgXHJcbiAgfVxyXG5cclxuZ2V0U3VtQ29pbnMoaW5wYXJhbTogc3RyaW5nKTogT2JzZXJ2YWJsZTxOdW1iZXI+IHtcclxuXHJcbiAgICBsZXQgaGVhZGVyczEgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVyczEuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcblxyXG4gICAgdmFyIGJvZHkxID1gbWVtYmVyc2Vzc2lvbmlkPSR7IGlucGFyYW19YDtcclxuICAgIHZhciB1cmwyID1gJHt0aGlzLmJhc2VVcmx9V1NfcHJvY19tZW1iZXJfZ2V0X3N1bWNvaW5zYDtcclxuXHJcbiAgICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KHVybDIsIGJvZHkxLCB7IGhlYWRlcnM6IGhlYWRlcnMxIH0pXHJcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgXHJcbiAgICByZXR1cm4gY29tcGxhaW50czEkO1xyXG4gIH1cclxuXHJcblxyXG4gIHNhdmVQbGFuKG1lbWJlcnNlc3Npb25pZDogc3RyaW5nLGlucGFyYW06IE1lbWJlclBsYW4pOiBPYnNlcnZhYmxlPENvbW1vbkVycm9yPiB7XHJcblxyXG4gICAgbGV0IGhlYWRlcnMxID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMxLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG5cclxuICAgIHZhciBib2R5MSA9IGBtZW1iZXJzZXNzaW9uaWQ9JHttZW1iZXJzZXNzaW9uaWR9JmlucGFyYW09JHtKU09OLnN0cmluZ2lmeSggaW5wYXJhbSl9YDtcclxuICAgIGNvbnNvbGUubG9nKFwiUGFyYW1zPVwiK2JvZHkxKTtcclxuICAgIHZhciB1cmwyID0gYCR7dGhpcy5iYXNlVXJsfVdTX3Byb2NfbWVtYmVyX29mY3BsYW5gO1xyXG5cclxuICAgIGxldCBjb21wbGFpbnRzMSQgPSB0aGlzLmh0dHBcclxuICAgICAgLnBvc3QodXJsMiwgYm9keTEsIHsgaGVhZGVyczogaGVhZGVyczEgfSlcclxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG5cclxuICAgIHJldHVybiBjb21wbGFpbnRzMSQ7XHJcbiAgfVxyXG5cclxuICBlZGl0UGxhbihwa2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBsYW4+e1xyXG4gICBcclxuICAgIGxldCBoZWFkZXJzMSA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuICAgXHJcbiAgICB2YXIgYm9keTEgPSBgaW5wdXQwPSR7IHBraWR9YDtcclxuICAgXHJcbiAgICB2YXIgdXJsMiA9IGAke3RoaXMuYmFzZVVybFBsYW59V1NfdGJsX3BsYW5fbWFzdGVyX3NlbGVjdGVkaXRgOy8vc2VsZWN0RWRpdE1pbGVzdG9uZWA7XHJcbiAgICBcclxuICAgIGxldCBjb21wbGFpbnRzMSQgPSB0aGlzLmh0dHBcclxuICAgICAgLnBvc3QodXJsMiAsIGJvZHkxICx7aGVhZGVyczogaGVhZGVyczF9KVxyXG4gICAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgICAgLy9hbGVydChcImdldERpc3BsYXlBbGwyIGFmdGVyXCIpO1xyXG4gICAgICByZXR1cm4gY29tcGxhaW50czEkOyBcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xyXG4gICAgbGV0IGVyck1zZyA9IChlcnJvci5tZXNzYWdlKSA/IGVycm9yLm1lc3NhZ2UgOlxyXG4gICAgICBlcnJvci5zdGF0dXMgPyBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0fWAgOiAnU2VydmVyIGVycm9yJztcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTsgLy8gbG9nIHRvIGNvbnNvbGUgaW5zdGVhZFxyXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==
