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
var SignupService = (function () {
    function SignupService(http, baseUrlservice) {
        this.http = http;
        this.baseUrlservice = baseUrlservice;
        this.baseUrl = baseUrlservice.getBaseurl() + 'loginclient/';
        this.baseUrlDrp = baseUrlservice.getBaseurl() + 'company/';
    }
    SignupService.prototype.get = function () {
        return this.http.get('/assets/data.json')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SignupService.prototype.getCountry = function (inparam) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "input0=" + inparam;
        var url2 = this.baseUrlDrp + "WS_tbl_country_master_drpjson";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    SignupService.prototype.getState = function (inparam) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "input0=" + inparam;
        var url2 = this.baseUrlDrp + "WS_tbl_state_master_country_id_drpjson";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    SignupService.prototype.getCity = function (inparam) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "input0=" + inparam;
        var url2 = this.baseUrlDrp + "WS_tbl_city_master_state_id_drpjson";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    SignupService.prototype.signup = function (inparam) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "input0=" + JSON.stringify(inparam);
        console.log("body1", body1);
        var url2 = this.baseUrl + "WS_tbl_ofcmembers_master_create";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    SignupService.prototype.getLoginClient = function (username, password) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "username=" + username + "&password=" + password;
        var url2 = this.baseUrl + "WS_proc_ofcmember_login";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    SignupService.prototype.getViewOfcMember = function (input0) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "membersessionid=" + input0;
        var url2 = this.baseUrl + "WS_proc_tbl_ofcmembers_master_selectjson";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    SignupService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return Observable_1.Observable.throw(errMsg);
    };
    SignupService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, baseurl_service_1.BaseUrlService])
    ], SignupService);
    return SignupService;
}());
exports.SignupService = SignupService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2lnbnVwL3NpZ251cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQXdELGVBQWUsQ0FBQyxDQUFBO0FBQ3hFLDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTdDLGdDQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBWTVEO0lBV0UsdUJBQW9CLElBQVUsRUFBVSxjQUE4QjtRQUFsRCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3BFLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLFVBQVUsRUFBRSxHQUFDLGNBQWMsQ0FBQztRQUUxRCxJQUFJLENBQUMsVUFBVSxHQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsR0FBQyxVQUFVLENBQUM7SUFDekQsQ0FBQztJQUVDLDJCQUFHLEdBQUg7UUFDQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7YUFDeEIsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUVsQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFHRCxrQ0FBVSxHQUFWLFVBQVcsT0FBZTtRQUV4QixJQUFJLFFBQVEsR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzdCLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7UUFFckUsSUFBSSxLQUFLLEdBQUcsWUFBVSxPQUFTLENBQUM7UUFFaEMsSUFBSSxJQUFJLEdBQU0sSUFBSSxDQUFDLFVBQVUsa0NBQStCLENBQUM7UUFFN0QsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUk7YUFDekIsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVB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TSxLQUFLLENBQUMsVUFBWSxHQUFHLGNBQWMsQ0FBQztRQUUxRSxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQXpJSDtRQUFDLGlCQUFVLEVBQUU7O3FCQUFBO0lBNkliLG9CQUFDO0FBQUQsQ0E1SUEsQUE0SUMsSUFBQTtBQTVJWSxxQkFBYSxnQkE0SXpCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zaWdudXAvc2lnbnVwLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtTZWxlY3RJdGVtfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBCYXNlVXJsU2VydmljZSB9IGZyb20gJy4uL2Jhc2V1cmwvYmFzZXVybC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbW9uRXJyb3IgfSBmcm9tICcuLi8uLi9sb2dpbnBhZ2UvY29tbW9uZXJyb3InO1xyXG5pbXBvcnQgeyBPRkNtZW1TZXNzaW9uIH0gZnJvbSAnLi4vLi4vbG9naW5wYWdlL29mY21lbXNlc3Npb24nO1xyXG5pbXBvcnQgeyBPRkNNZW1iZXJzIH0gZnJvbSAnLi4vLi4vc2lnbnVwL29mY21lbWJlcnMnO1xyXG5pbXBvcnQge1ZpZXdPRkNtZW1TZXNzaW9ufSBmcm9tICcuLi8uLi9sb2dpbnBhZ2Uvdmlld29mY21lbXNlc3Npb24nO1xyXG5cclxuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7ICAvLyBmb3IgZGVidWdnaW5nXHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyBwcm92aWRlcyB0aGUgTmFtZUxpc3Qgc2VydmljZSB3aXRoIG1ldGhvZHMgdG8gcmVhZCBuYW1lcyBhbmQgYWRkIG5hbWVzLlxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2lnbnVwU2VydmljZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgTmFtZUxpc3RTZXJ2aWNlIHdpdGggdGhlIGluamVjdGVkIEh0dHAuXHJcbiAgICogQHBhcmFtIHtIdHRwfSBodHRwIC0gVGhlIGluamVjdGVkIEh0dHAuXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgXHJcbiAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmc7XHJcbiAgIHByaXZhdGUgYmFzZVVybERycDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgYmFzZVVybHNlcnZpY2U6IEJhc2VVcmxTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsc2VydmljZS5nZXRCYXNldXJsKCkrJ2xvZ2luY2xpZW50Lyc7XHJcblxyXG4gICAgdGhpcy5iYXNlVXJsRHJwPWJhc2VVcmxzZXJ2aWNlLmdldEJhc2V1cmwoKSsnY29tcGFueS8nO1xyXG4gIH1cclxuXHJcbiAgICBnZXQoKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9hc3NldHMvZGF0YS5qc29uJylcclxuICAgICAgICAgICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgZ2V0Q291bnRyeShpbnBhcmFtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFNlbGVjdEl0ZW1bXT4ge1xyXG5cclxuICAgIGxldCBoZWFkZXJzMSA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuXHJcbiAgICB2YXIgYm9keTEgPSBgaW5wdXQwPSR7aW5wYXJhbX1gO1xyXG5cclxuICAgIHZhciB1cmwyID0gYCR7dGhpcy5iYXNlVXJsRHJwfVdTX3RibF9jb3VudHJ5X21hc3Rlcl9kcnBqc29uYDtcclxuXHJcbiAgICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KHVybDIsIGJvZHkxLCB7IGhlYWRlcnM6IGhlYWRlcnMxIH0pXHJcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIC8vYWxlcnQoXCJnZXREaXNwbGF5QWxsMiBhZnRlclwiKTtcclxuICAgIHJldHVybiBjb21wbGFpbnRzMSQ7XHJcbiAgfVxyXG5cclxuICAvLyA2LkdldCBzdGF0ZSBmb3IgRHJvcGRvd25cclxuICBnZXRTdGF0ZShpbnBhcmFtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFNlbGVjdEl0ZW1bXT4ge1xyXG5cclxuICAgIGxldCBoZWFkZXJzMSA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuXHJcbiAgICB2YXIgYm9keTEgPSBgaW5wdXQwPSR7aW5wYXJhbX1gO1xyXG5cclxuICAgIHZhciB1cmwyID0gYCR7dGhpcy5iYXNlVXJsRHJwfVdTX3RibF9zdGF0ZV9tYXN0ZXJfY291bnRyeV9pZF9kcnBqc29uYDtcclxuXHJcbiAgICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KHVybDIsIGJvZHkxLCB7IGhlYWRlcnM6IGhlYWRlcnMxIH0pXHJcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIC8vYWxlcnQoXCJnZXREaXNwbGF5QWxsMiBhZnRlclwiKTtcclxuICAgIHJldHVybiBjb21wbGFpbnRzMSQ7XHJcbiAgfVxyXG5cclxuICAvLyA3LkdldCBjaXR5IGZvciBEcm9wZG93blxyXG4gIGdldENpdHkoaW5wYXJhbTogc3RyaW5nKTogT2JzZXJ2YWJsZTxTZWxlY3RJdGVtW10+IHtcclxuXHJcbiAgICBsZXQgaGVhZGVyczEgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVyczEuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcblxyXG4gICAgdmFyIGJvZHkxID0gYGlucHV0MD0ke2lucGFyYW19YDtcclxuXHJcbiAgICB2YXIgdXJsMiA9IGAke3RoaXMuYmFzZVVybERycH1XU190YmxfY2l0eV9tYXN0ZXJfc3RhdGVfaWRfZHJwanNvbmA7XHJcblxyXG4gICAgbGV0IGNvbXBsYWludHMxJCA9IHRoaXMuaHR0cFxyXG4gICAgICAucG9zdCh1cmwyLCBib2R5MSwgeyBoZWFkZXJzOiBoZWFkZXJzMSB9KVxyXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICAvL2FsZXJ0KFwiZ2V0RGlzcGxheUFsbDIgYWZ0ZXJcIik7XHJcbiAgICByZXR1cm4gY29tcGxhaW50czEkO1xyXG4gIH1cclxuXHJcblxyXG4gIHNpZ251cChpbnBhcmFtOiBPRkNNZW1iZXJzKTogT2JzZXJ2YWJsZTxDb21tb25FcnJvcj57XHJcbiAgICAvL0hlYWRlciBkZWNsYXJhdGlvblxyXG4gICAgbGV0IGhlYWRlcnMxID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMxLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICAgLy9Cb2R5IHBhcmFtc1xyXG4gICAgdmFyIGJvZHkxID0gYGlucHV0MD0ke0pTT04uc3RyaW5naWZ5KGlucGFyYW0pfWA7XHJcbiAgICAgY29uc29sZS5sb2coXCJib2R5MVwiLGJvZHkxKTtcclxuICAgIHZhciB1cmwyID0gYCR7dGhpcy5iYXNlVXJsfVdTX3RibF9vZmNtZW1iZXJzX21hc3Rlcl9jcmVhdGVgOy8vaW5zZXJ0TWlsZXN0b25lc1Byb2plY3RgO1xyXG4gICAgXHJcbiAgICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KHVybDIgLCBib2R5MSAse2hlYWRlcnM6IGhlYWRlcnMxfSkgLy8gUG9zdCBVUkwgYW5kIGhlYWRlclxyXG4gICAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpIC8vIE1hcHBpbmcgcmVzcG9uc2UgdG8gcmV0dXJuIHZhcmlhYmxlXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTsgLy8gRXJyb3IgaGFuZGxlclxyXG4gICAgICAvL2FsZXJ0KFwiZ2V0RGlzcGxheUFsbDIgYWZ0ZXJcIik7XHJcbiAgICAgIHJldHVybiBjb21wbGFpbnRzMSQ7IFxyXG4gIH1cclxuXHJcbiAgICBnZXRMb2dpbkNsaWVudCh1c2VybmFtZTogc3RyaW5nLHBhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9GQ21lbVNlc3Npb24+e1xyXG4gICAgXHJcbiAgICBsZXQgaGVhZGVyczEgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVyczEuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICBcclxuICAgIHZhciBib2R5MSA9IGB1c2VybmFtZT0ke3VzZXJuYW1lfSZwYXNzd29yZD0keyBwYXNzd29yZH1gO1xyXG4gICAgXHJcbiAgICB2YXIgdXJsMiA9IGAke3RoaXMuYmFzZVVybH1XU19wcm9jX29mY21lbWJlcl9sb2dpbmA7XHJcbiAgICBcclxuICAgIGxldCBjb21wbGFpbnRzMSQgPSB0aGlzLmh0dHBcclxuICAgICAgLnBvc3QodXJsMiAsIGJvZHkxICx7aGVhZGVyczogaGVhZGVyczF9KVxyXG4gICAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgICAgLy9hbGVydChcImdldERpc3BsYXlBbGwyIGFmdGVyXCIpO1xyXG4gICAgICByZXR1cm4gY29tcGxhaW50czEkOyBcclxuICB9XHJcblxyXG4gICAgZ2V0Vmlld09mY01lbWJlcihpbnB1dDA6IHN0cmluZyk6IE9ic2VydmFibGU8Vmlld09GQ21lbVNlc3Npb24+e1xyXG4gICAgXHJcbiAgICBsZXQgaGVhZGVyczEgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVyczEuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICBcclxuICAgIHZhciBib2R5MSA9YG1lbWJlcnNlc3Npb25pZD0ke2lucHV0MH1gO1xyXG4gICAgXHJcbiAgICB2YXIgdXJsMiA9IGAke3RoaXMuYmFzZVVybH1XU19wcm9jX3RibF9vZmNtZW1iZXJzX21hc3Rlcl9zZWxlY3Rqc29uYDtcclxuICAgIFxyXG4gICAgbGV0IGNvbXBsYWludHMxJCA9IHRoaXMuaHR0cFxyXG4gICAgICAucG9zdCh1cmwyICwgYm9keTEgLHtoZWFkZXJzOiBoZWFkZXJzMX0pXHJcbiAgICAgIC5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgICAvL2FsZXJ0KFwiZ2V0RGlzcGxheUFsbDIgYWZ0ZXJcIik7XHJcbiAgICAgIHJldHVybiBjb21wbGFpbnRzMSQ7IFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KSB7XHJcbiAgICBcclxuICAgIGxldCBlcnJNc2cgPSAoZXJyb3IubWVzc2FnZSkgPyBlcnJvci5tZXNzYWdlIDpcclxuICAgICAgZXJyb3Iuc3RhdHVzID8gYCR7ZXJyb3Iuc3RhdHVzfSAtICR7ZXJyb3Iuc3RhdHVzVGV4dH1gIDogJ1NlcnZlciBlcnJvcic7XHJcbiAgICBcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVyck1zZyk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcblxyXG4iXX0=
