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
var PrivacyPolicyService = (function () {
    function PrivacyPolicyService(http, baseUrlservice) {
        this.http = http;
        this.baseUrlservice = baseUrlservice;
        this.baseUrl = baseUrlservice.getBaseurl() + 'privacypolicy/';
    }
    PrivacyPolicyService.prototype.get = function () {
        return this.http.get('/assets/data.json')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PrivacyPolicyService.prototype.getall = function () {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "input=abc";
        var url2 = this.baseUrl + "WS_tbl_privacypolicy_selectjson";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    PrivacyPolicyService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    PrivacyPolicyService.prototype.getHeaders2 = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    PrivacyPolicyService.prototype.getHeadersUrlencode = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    PrivacyPolicyService.prototype.getHeadersUrlencodeUtf8 = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    PrivacyPolicyService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    PrivacyPolicyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, baseurl_service_1.BaseUrlService])
    ], PrivacyPolicyService);
    return PrivacyPolicyService;
}());
exports.PrivacyPolicyService = PrivacyPolicyService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcHJpdmFjeXBvbGljeS9wcml2YWN5cG9saWN5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBd0QsZUFBZSxDQUFDLENBQUE7QUFDeEUsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFJN0MsZ0NBQTZCLDRCQUE0QixDQUFDLENBQUE7QUFRMUQ7SUFVRSw4QkFBb0IsSUFBVyxFQUFTLGNBQTZCO1FBQWpELFNBQUksR0FBSixJQUFJLENBQU87UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUNuRSxJQUFJLENBQUMsT0FBTyxHQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsR0FBQyxnQkFBZ0IsQ0FBQztJQUM1RCxDQUFDO0lBS0Qsa0NBQUcsR0FBSDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQzthQUN4QixHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBRWxDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUtELHFDQUFNLEdBQU47UUFFRSxJQUFJLFFBQVEsR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzdCLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7UUFFckUsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDO1FBRXhCLElBQUksSUFBSSxHQUFNLElBQUksQ0FBQyxPQUFPLG9DQUFpQyxDQUFDO1FBRTVELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJO2FBQ3pCLElBQUksQ0FBQyxJQUFJLEVBQUcsS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBQyxDQUFDO2FBQ3ZDLEdBQUcsQ0FBQyxVQUFDLEdBQVksSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV6QixNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFFUSx5Q0FBVSxHQUFsQjtRQUNDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFDTywwQ0FBVyxHQUFuQjtRQUNFLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGlDQUFpQyxFQUFFLENBQUMsQ0FBQztRQUNqRixJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFDTyxrREFBbUIsR0FBM0I7UUFDRSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxtQ0FBbUMsRUFBRSxDQUFDLENBQUM7UUFDbkYsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBQ08sc0RBQXVCLEdBQS9CO1FBQ0UsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsa0RBQWtELEVBQUUsQ0FBQyxDQUFDO1FBQ2xHLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUtPLDBDQUFXLEdBQW5CLFVBQXFCLEtBQVU7UUFHN0IsSUFBSSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU87WUFDMUMsS0FBSyxDQUFDLE1BQU0sR0FBTSxLQUFLLENBQUMsTUFBTSxXQUFNLEtBQUssQ0FBQyxVQUFZLEdBQUcsY0FBYyxDQUFDO1FBQzFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUE1RUg7UUFBQyxpQkFBVSxFQUFFOzs0QkFBQTtJQTZFYiwyQkFBQztBQUFELENBNUVBLEFBNEVDLElBQUE7QUE1RVksNEJBQW9CLHVCQTRFaEMsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3ByaXZhY3lwb2xpY3kvcHJpdmFjeXBvbGljeS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFByaXZhY3lQb2xpY3kgfSBmcm9tICcuLi8uLi9wcml2YWN5cG9saWN5L3ByaXZhY3lwb2xpY3knO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkIH0gZnJvbSAnLi4vLi4vcHJpdmFjeXBvbGljeS9maWxldXBsb2FkJztcclxuXHJcbmltcG9ydCB7QmFzZVVybFNlcnZpY2V9IGZyb20gJy4uL2Jhc2V1cmwvYmFzZXVybC5zZXJ2aWNlJztcclxuXHJcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nOyAgLy8gZm9yIGRlYnVnZ2luZ1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgdGhlIE5hbWVMaXN0IHNlcnZpY2Ugd2l0aCBtZXRob2RzIHRvIHJlYWQgbmFtZXMgYW5kIGFkZCBuYW1lcy5cclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByaXZhY3lQb2xpY3lTZXJ2aWNlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBOYW1lTGlzdFNlcnZpY2Ugd2l0aCB0aGUgaW5qZWN0ZWQgSHR0cC5cclxuICAgKiBAcGFyYW0ge0h0dHB9IGh0dHAgLSBUaGUgaW5qZWN0ZWQgSHR0cC5cclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICAvL3ByaXZhdGUgYmFzZVVybDogc3RyaW5nID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9UYXNrTWFuYWdlcldTL3Jlc3QvYXR1bHRlc3QvJztcclxuICBwcml2YXRlIGJhc2VVcmw6IHN0cmluZzsvLyA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvVGFza01hbmFnZXJXUy9yZXN0L3Rhc2ttYW5hZ2VyLyc7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwIDogSHR0cCxwcml2YXRlIGJhc2VVcmxzZXJ2aWNlOkJhc2VVcmxTZXJ2aWNlKXtcclxuICAgIHRoaXMuYmFzZVVybD1iYXNlVXJsc2VydmljZS5nZXRCYXNldXJsKCkrJ3ByaXZhY3lwb2xpY3kvJztcclxuICB9XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIGZvciB0aGUgSFRUUCBHRVQgcmVxdWVzdCBmb3IgdGhlIEpTT04gcmVzb3VyY2UuXHJcbiAgICogQHJldHVybiB7c3RyaW5nW119IFRoZSBPYnNlcnZhYmxlIGZvciB0aGUgSFRUUCByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIGdldCgpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL2Fzc2V0cy9kYXRhLmpzb24nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAvLyAgICAgICAgICAgICAgLmRvKGRhdGEgPT4gY29uc29sZS5sb2coJ3NlcnZlciBkYXRhOicsIGRhdGEpKSAgLy8gZGVidWdcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgfVxyXG5cclxuXHJcbiAgXHJcbiAgLy8gZ2V0IGFsbCBmb3IgR3JpZFxyXG4gIGdldGFsbCgpOiBPYnNlcnZhYmxlPFByaXZhY3lQb2xpY3lbXT57XHJcbiAgICBcclxuICAgIGxldCBoZWFkZXJzMSA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuICAgIFxyXG4gICAgdmFyIGJvZHkxID0gYGlucHV0PWFiY2A7XHJcbiAgICBcclxuICAgIHZhciB1cmwyID0gYCR7dGhpcy5iYXNlVXJsfVdTX3RibF9wcml2YWN5cG9saWN5X3NlbGVjdGpzb25gOy8vc2VsZWN0QWxsTWlsZXN0b25lYDtcclxuICAgIFxyXG4gICAgbGV0IGNvbXBsYWludHMxJCA9IHRoaXMuaHR0cFxyXG4gICAgICAucG9zdCh1cmwyICwgYm9keTEgLHtoZWFkZXJzOiBoZWFkZXJzMX0pXHJcbiAgICAgIC5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgICAvL2FsZXJ0KFwiZ2V0RGlzcGxheUFsbDIgYWZ0ZXJcIik7XHJcbiAgICAgIHJldHVybiBjb21wbGFpbnRzMSQ7IFxyXG4gIH1cclxuXHJcbiAgIHByaXZhdGUgZ2V0SGVhZGVycygpe1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICByZXR1cm4gaGVhZGVycztcclxuICB9XHJcbiAgcHJpdmF0ZSBnZXRIZWFkZXJzMigpe1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcgfSk7ICBcclxuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuICBwcml2YXRlIGdldEhlYWRlcnNVcmxlbmNvZGUoKXtcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfSk7ICBcclxuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuICBwcml2YXRlIGdldEhlYWRlcnNVcmxlbmNvZGVVdGY4KCl7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLTgnIH0pOyAgXHJcbiAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBIYW5kbGUgSFRUUCBlcnJvclxyXG4gICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUVycm9yIChlcnJvcjogYW55KSB7XHJcbiAgICAvLyBJbiBhIHJlYWwgd29ybGQgYXBwLCB3ZSBtaWdodCB1c2UgYSByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxyXG4gICAgLy8gV2UnZCBhbHNvIGRpZyBkZWVwZXIgaW50byB0aGUgZXJyb3IgdG8gZ2V0IGEgYmV0dGVyIG1lc3NhZ2VcclxuICAgIGxldCBlcnJNc2cgPSAoZXJyb3IubWVzc2FnZSkgPyBlcnJvci5tZXNzYWdlIDpcclxuICAgICAgZXJyb3Iuc3RhdHVzID8gYCR7ZXJyb3Iuc3RhdHVzfSAtICR7ZXJyb3Iuc3RhdHVzVGV4dH1gIDogJ1NlcnZlciBlcnJvcic7XHJcbiAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7IC8vIGxvZyB0byBjb25zb2xlIGluc3RlYWRcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVyck1zZyk7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=
