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
require('rxjs/add/operator/do');
var baseurl_service_1 = require('../baseurl/baseurl.service');
var AutoLoginService = (function () {
    function AutoLoginService(http, baseurlservice) {
        this.http = http;
        this.baseurlservice = baseurlservice;
        this.baseUrl = 'http://localhost:8080/OFCAdmin/rest/';
        this.baseUrl = baseurlservice.getBaseurl() + 'loginclient/';
    }
    AutoLoginService.prototype.get = function () {
        return this.http.get('/assets/data.json')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AutoLoginService.prototype.getLoginClient = function (username, password) {
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
    AutoLoginService.prototype.getViewOfcMember = function (input0) {
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
    AutoLoginService.prototype.getOfcMemberAutoLogin = function (input0) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "membersessionid=" + input0;
        var url2 = this.baseUrl + "WS_proc_tbl_ofcmembers_master_logindetails";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    AutoLoginService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return Observable_1.Observable.throw(errMsg);
    };
    AutoLoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, baseurl_service_1.BaseUrlService])
    ], AutoLoginService);
    return AutoLoginService;
}());
exports.AutoLoginService = AutoLoginService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYXV0b2xvZ2luL2F1dG9sb2dpbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQXdELGVBQWUsQ0FBQyxDQUFBO0FBQ3hFLDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBTTdDLFFBQU8sc0JBQXNCLENBQUMsQ0FBQTtBQUM5QixnQ0FBNkIsNEJBQTRCLENBQUMsQ0FBQTtBQUsxRDtJQVVFLDBCQUFvQixJQUFXLEVBQVMsY0FBNkI7UUFBakQsU0FBSSxHQUFKLElBQUksQ0FBTztRQUFTLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBSDdELFlBQU8sR0FBVyxzQ0FBc0MsQ0FBQztRQUk3RCxJQUFJLENBQUMsT0FBTyxHQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsR0FBQyxjQUFjLENBQUM7SUFDNUQsQ0FBQztJQUtELDhCQUFHLEdBQUg7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7YUFDeEIsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUVsQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFHRCx5Q0FBYyxHQUFkLFVBQWUsUUFBZ0IsRUFBQyxRQUFnQjtRQUU5QyxJQUFJLFFBQVEsR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzdCLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7UUFFckUsSUFBSSxLQUFLLEdBQUcsY0FBWSxRQUFRLGtCQUFjLFFBQVUsQ0FBQztRQUV6RCxJQUFJLElBQUksR0FBTSxJQUFJLENBQUMsT0FBTyw0QkFBeUIsQ0FBQztRQUVwRCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSTthQUN6QixJQUFJLENBQUMsSUFBSSxFQUFHLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUMsQ0FBQzthQUN2QyxHQUFHLENBQUMsVUFBQyxHQUFZLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ2pDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN4QixDQUFDO0lBR0YsMkNBQWdCLEdBQWhCLFVBQWlCLE1BQWM7UUFFNUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM3QixRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1FBRXJFLElBQUksS0FBSyxHQUFHLHFCQUFtQixNQUFRLENBQUM7UUFFeEMsSUFBSSxJQUFJLEdBQU0sSUFBSSxDQUFDLE9BQU8sNkNBQTBDLENBQUM7UUFFckUsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUk7YUFDekIsSUFBSSxDQUFDLElBQUksRUFBRyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFDLENBQUM7YUFDdkMsR0FBRyxDQUFDLFVBQUMsR0FBWSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDekIsQ0FBQztJQUdELGdEQUFxQixHQUFyQixVQUFzQixNQUFjO1FBRWxDLElBQUksUUFBUSxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDN0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQUVyRSxJQUFJLEtBQUssR0FBRyxxQkFBbUIsTUFBUSxDQUFDO1FBRXhDLElBQUksSUFBSSxHQUFNLElBQUksQ0FBQyxPQUFPLCtDQUE0QyxDQUFDO1FBRXZFLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJO2FBQ3pCLElBQUksQ0FBQyxJQUFJLEVBQUcsS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBQyxDQUFDO2FBQ3ZDLEdBQUcsQ0FBQyxVQUFDLEdBQVksSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QixNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFNTyxzQ0FBVyxHQUFuQixVQUFxQixLQUFVO1FBQzdCLElBQUksTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPO1lBQzFDLEtBQUssQ0FBQyxNQUFNLEdBQU0sS0FBSyxDQUFDLE1BQU0sV0FBTSxLQUFLLENBQUMsVUFBWSxHQUFHLGNBQWMsQ0FBQztRQUUxRSxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQXJGSDtRQUFDLGlCQUFVLEVBQUU7O3dCQUFBO0lBc0ZiLHVCQUFDO0FBQUQsQ0FyRkEsQUFxRkMsSUFBQTtBQXJGWSx3QkFBZ0IsbUJBcUY1QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvYXV0b2xvZ2luL2F1dG9sb2dpbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IExvZ2luUGFnZSB9IGZyb20gJy4uLy4uL2F1dG9sb2dpbi9sb2dpbnBhZ2UnO1xyXG5pbXBvcnQgeyBPRkNNZW1iZXJzfSBmcm9tICcuLi8uLi9hdXRvbG9naW4vb2ZjbWVtYmVycyc7XHJcbmltcG9ydCB7IE9GQ21lbVNlc3Npb24gfSBmcm9tICcuLi8uLi9hdXRvbG9naW4vb2ZjbWVtc2Vzc2lvbic7XHJcbmltcG9ydCB7Vmlld09GQ21lbVNlc3Npb259IGZyb20gJy4uLy4uL2F1dG9sb2dpbi92aWV3b2ZjbWVtc2Vzc2lvbic7XHJcblxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJzsgIFxyXG5pbXBvcnQge0Jhc2VVcmxTZXJ2aWNlfSBmcm9tICcuLi9iYXNldXJsL2Jhc2V1cmwuc2VydmljZSc7XHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIHRoZSBOYW1lTGlzdCBzZXJ2aWNlIHdpdGggbWV0aG9kcyB0byByZWFkIG5hbWVzIGFuZCBhZGQgbmFtZXMuXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRvTG9naW5TZXJ2aWNlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBOYW1lTGlzdFNlcnZpY2Ugd2l0aCB0aGUgaW5qZWN0ZWQgSHR0cC5cclxuICAgKiBAcGFyYW0ge0h0dHB9IGh0dHAgLSBUaGUgaW5qZWN0ZWQgSHR0cC5cclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBwcml2YXRlIGJhc2VVcmw6IHN0cmluZyA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvT0ZDQWRtaW4vcmVzdC8nO1xyXG4gIFxyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cCA6IEh0dHAscHJpdmF0ZSBiYXNldXJsc2VydmljZTpCYXNlVXJsU2VydmljZSl7XHJcbiAgICAgIHRoaXMuYmFzZVVybD1iYXNldXJsc2VydmljZS5nZXRCYXNldXJsKCkrJ2xvZ2luY2xpZW50Lyc7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSBmb3IgdGhlIEhUVFAgR0VUIHJlcXVlc3QgZm9yIHRoZSBKU09OIHJlc291cmNlLlxyXG4gICAqIEByZXR1cm4ge3N0cmluZ1tdfSBUaGUgT2JzZXJ2YWJsZSBmb3IgdGhlIEhUVFAgcmVxdWVzdC5cclxuICAgKi9cclxuICBnZXQoKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9hc3NldHMvZGF0YS5qc29uJylcclxuICAgICAgICAgICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4gICAgLy8gICAgICAgICAgICAgIC5kbyhkYXRhID0+IGNvbnNvbGUubG9nKCdzZXJ2ZXIgZGF0YTonLCBkYXRhKSkgIC8vIGRlYnVnXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gIH1cclxuXHJcbiBcclxuICBnZXRMb2dpbkNsaWVudCh1c2VybmFtZTogc3RyaW5nLHBhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9GQ21lbVNlc3Npb24+e1xyXG4gICAgXHJcbiAgICBsZXQgaGVhZGVyczEgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVyczEuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICBcclxuICAgIHZhciBib2R5MSA9IGB1c2VybmFtZT0ke3VzZXJuYW1lfSZwYXNzd29yZD0keyBwYXNzd29yZH1gO1xyXG4gICAgXHJcbiAgICB2YXIgdXJsMiA9IGAke3RoaXMuYmFzZVVybH1XU19wcm9jX29mY21lbWJlcl9sb2dpbmA7XHJcbiAgICBcclxuICAgIGxldCBjb21wbGFpbnRzMSQgPSB0aGlzLmh0dHBcclxuICAgICAgLnBvc3QodXJsMiAsIGJvZHkxICx7aGVhZGVyczogaGVhZGVyczF9KVxyXG4gICAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgICAgcmV0dXJuIGNvbXBsYWludHMxJDsgXHJcbiAgfVxyXG5cclxuXHJcbiBnZXRWaWV3T2ZjTWVtYmVyKGlucHV0MDogc3RyaW5nKTogT2JzZXJ2YWJsZTxWaWV3T0ZDbWVtU2Vzc2lvbj57XHJcbiAgICBcclxuICAgIGxldCBoZWFkZXJzMSA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuICAgIFxyXG4gICAgdmFyIGJvZHkxID0gYG1lbWJlcnNlc3Npb25pZD0ke2lucHV0MH1gO1xyXG4gICAgXHJcbiAgICB2YXIgdXJsMiA9IGAke3RoaXMuYmFzZVVybH1XU19wcm9jX3RibF9vZmNtZW1iZXJzX21hc3Rlcl9zZWxlY3Rqc29uYDtcclxuICAgIFxyXG4gICAgbGV0IGNvbXBsYWludHMxJCA9IHRoaXMuaHR0cFxyXG4gICAgICAucG9zdCh1cmwyICwgYm9keTEgLHtoZWFkZXJzOiBoZWFkZXJzMX0pXHJcbiAgICAgIC5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgICAgcmV0dXJuIGNvbXBsYWludHMxJDsgXHJcbiAgfVxyXG5cclxuICBcclxuICBnZXRPZmNNZW1iZXJBdXRvTG9naW4oaW5wdXQwOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9GQ21lbVNlc3Npb24+e1xyXG4gICAgXHJcbiAgICBsZXQgaGVhZGVyczEgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVyczEuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICBcclxuICAgIHZhciBib2R5MSA9IGBtZW1iZXJzZXNzaW9uaWQ9JHtpbnB1dDB9YDtcclxuICAgIFxyXG4gICAgdmFyIHVybDIgPSBgJHt0aGlzLmJhc2VVcmx9V1NfcHJvY190Ymxfb2ZjbWVtYmVyc19tYXN0ZXJfbG9naW5kZXRhaWxzYDtcclxuICAgIFxyXG4gICAgbGV0IGNvbXBsYWludHMxJCA9IHRoaXMuaHR0cFxyXG4gICAgICAucG9zdCh1cmwyICwgYm9keTEgLHtoZWFkZXJzOiBoZWFkZXJzMX0pXHJcbiAgICAgIC5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgICByZXR1cm4gY29tcGxhaW50czEkOyBcclxuICB9XHJcblxyXG4gICBcclxuICAvKipcclxuICAgICogSGFuZGxlIEhUVFAgZXJyb3JcclxuICAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvciAoZXJyb3I6IGFueSkge1xyXG4gICAgbGV0IGVyck1zZyA9IChlcnJvci5tZXNzYWdlKSA/IGVycm9yLm1lc3NhZ2UgOlxyXG4gICAgICBlcnJvci5zdGF0dXMgPyBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0fWAgOiAnU2VydmVyIGVycm9yJztcclxuICAgXHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJNc2cpO1xyXG4gIH1cclxufVxyXG5cclxuIl19
