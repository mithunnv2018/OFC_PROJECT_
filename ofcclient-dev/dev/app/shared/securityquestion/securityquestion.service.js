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
var SecurityquestionService = (function () {
    function SecurityquestionService(http, baseUrlservice) {
        this.http = http;
        this.baseUrlservice = baseUrlservice;
        this.baseUrl = baseUrlservice.getBaseurl() + 'loginclient/';
        this.baseUrlQues = baseUrlservice.getBaseurl() + 'securityquestion/';
    }
    SecurityquestionService.prototype.get = function () {
        return this.http.get('/assets/data.json')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SecurityquestionService.prototype.getExistingQuestion = function (inparam) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "membersessionid=" + inparam;
        var url2 = this.baseUrlQues + "WS_proc_member_getall_securityquestionandansw";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    SecurityquestionService.prototype.getQuestions = function (inparam) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "input0=" + inparam;
        var url2 = this.baseUrl + "WS_tbl_securityquestion_master_drpjson";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    SecurityquestionService.prototype.changeSecurityQuestion = function (membersessionid, oldsecurityanswer, newsecurityid, newsecurityanswer) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "membersessionid=" + membersessionid + "&oldsecurityanswer=" + oldsecurityanswer + "&newsecurityid=" + newsecurityid + "&newsecurityanswer=" + newsecurityanswer;
        var url2 = this.baseUrl + "WS_proc_member_changesecurityquestion";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    SecurityquestionService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return Observable_1.Observable.throw(errMsg);
    };
    SecurityquestionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, baseurl_service_1.BaseUrlService])
    ], SecurityquestionService);
    return SecurityquestionService;
}());
exports.SecurityquestionService = SecurityquestionService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VjdXJpdHlxdWVzdGlvbi9zZWN1cml0eXF1ZXN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBd0QsZUFBZSxDQUFDLENBQUE7QUFDeEUsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0MsZ0NBQStCLDRCQUE0QixDQUFDLENBQUE7QUFXNUQ7SUFXRSxpQ0FBb0IsSUFBVSxFQUFVLGNBQThCO1FBQWxELFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDcEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsVUFBVSxFQUFFLEdBQUcsY0FBYyxDQUFDO1FBRTVELElBQUksQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDLFVBQVUsRUFBRSxHQUFHLG1CQUFtQixDQUFDO0lBRXZFLENBQUM7SUFNRCxxQ0FBRyxHQUFIO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO2FBQ3hCLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFFbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQscURBQW1CLEdBQW5CLFVBQW9CLE9BQWU7UUFFakMsSUFBSSxRQUFRLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM3QixRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1FBRXJFLElBQUksS0FBSyxHQUFHLHFCQUFtQixPQUFTLENBQUM7UUFFekMsSUFBSSxJQUFJLEdBQU0sSUFBSSxDQUFDLFdBQVcsa0RBQStDLENBQUM7UUFFOUUsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUk7YUFDekIsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7YUFDeEMsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTNCLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVILDhDQUFZLEdBQVosVUFBYSxPQUFlO1FBRXhCLElBQUksUUFBUSxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDN0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQUVyRSxJQUFJLEtBQUssR0FBRyxZQUFVLE9BQVMsQ0FBQztRQUVoQyxJQUFJLElBQUksR0FBTSxJQUFJLENBQUMsT0FBTywyQ0FBd0MsQ0FBQztRQUVuRSxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSTthQUN6QixJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQzthQUN4QyxHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFM0IsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBR0Qsd0RBQXNCLEdBQXRCLFVBQXVCLGVBQXVCLEVBQUMsaUJBQXlCLEVBQUMsYUFBcUIsRUFBRSxpQkFBeUI7UUFFdkgsSUFBSSxRQUFRLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM3QixRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1FBRXJFLElBQUksS0FBSyxHQUFHLHFCQUFtQixlQUFlLDJCQUFzQixpQkFBaUIsdUJBQWtCLGFBQWEsMkJBQXNCLGlCQUFtQixDQUFDO1FBRTlKLElBQUksSUFBSSxHQUFNLElBQUksQ0FBQyxPQUFPLDBDQUF1QyxDQUFDO1FBRWxFLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJO2FBQ3pCLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO2FBQ3hDLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUzQixNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFTyw2Q0FBVyxHQUFuQixVQUFvQixLQUFVO1FBRTVCLElBQUksTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPO1lBQzFDLEtBQUssQ0FBQyxNQUFNLEdBQU0sS0FBSyxDQUFDLE1BQU0sV0FBTSxLQUFLLENBQUMsVUFBWSxHQUFHLGNBQWMsQ0FBQztRQUUxRSxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQXhGSDtRQUFDLGlCQUFVLEVBQUU7OytCQUFBO0lBNEZiLDhCQUFDO0FBQUQsQ0EzRkEsQUEyRkMsSUFBQTtBQTNGWSwrQkFBdUIsMEJBMkZuQyxDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VjdXJpdHlxdWVzdGlvbi9zZWN1cml0eXF1ZXN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgU2VsZWN0SXRlbSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEJhc2VVcmxTZXJ2aWNlIH0gZnJvbSAnLi4vYmFzZXVybC9iYXNldXJsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tb25FcnJvciB9IGZyb20gJy4uLy4uL2xvZ2lucGFnZS9jb21tb25lcnJvcic7XHJcbmltcG9ydCB7IEV4aXN0aW5nUXVlc3Rpb24gfSBmcm9tICcuLi8uLi9zZWN1cml0eXF1ZXN0aW9uL2V4aXN0aW5ncXVlc3Rpb24nO1xyXG5cclxuXHJcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nOyAgLy8gZm9yIGRlYnVnZ2luZ1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgdGhlIE5hbWVMaXN0IHNlcnZpY2Ugd2l0aCBtZXRob2RzIHRvIHJlYWQgbmFtZXMgYW5kIGFkZCBuYW1lcy5cclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5cXVlc3Rpb25TZXJ2aWNlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBOYW1lTGlzdFNlcnZpY2Ugd2l0aCB0aGUgaW5qZWN0ZWQgSHR0cC5cclxuICAgKiBAcGFyYW0ge0h0dHB9IGh0dHAgLSBUaGUgaW5qZWN0ZWQgSHR0cC5cclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuXHJcbiAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBiYXNlVXJsUXVlczogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgYmFzZVVybHNlcnZpY2U6IEJhc2VVcmxTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsc2VydmljZS5nZXRCYXNldXJsKCkgKyAnbG9naW5jbGllbnQvJztcclxuXHJcbiAgICB0aGlzLmJhc2VVcmxRdWVzID0gYmFzZVVybHNlcnZpY2UuZ2V0QmFzZXVybCgpICsgJ3NlY3VyaXR5cXVlc3Rpb24vJztcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgICAvKipcclxuICAgKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgZm9yIHRoZSBIVFRQIEdFVCByZXF1ZXN0IGZvciB0aGUgSlNPTiByZXNvdXJjZS5cclxuICAgKiBAcmV0dXJuIHtzdHJpbmdbXX0gVGhlIE9ic2VydmFibGUgZm9yIHRoZSBIVFRQIHJlcXVlc3QuXHJcbiAgICovXHJcbiAgZ2V0KCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXNzZXRzL2RhdGEuanNvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgIC8vICAgICAgICAgICAgICAuZG8oZGF0YSA9PiBjb25zb2xlLmxvZygnc2VydmVyIGRhdGE6JywgZGF0YSkpICAvLyBkZWJ1Z1xyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICB9XHJcblxyXG4gIGdldEV4aXN0aW5nUXVlc3Rpb24oaW5wYXJhbTogc3RyaW5nKTogT2JzZXJ2YWJsZTxFeGlzdGluZ1F1ZXN0aW9uW10+IHtcclxuXHJcbiAgICBsZXQgaGVhZGVyczEgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVyczEuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcblxyXG4gICAgdmFyIGJvZHkxID0gYG1lbWJlcnNlc3Npb25pZD0ke2lucGFyYW19YDtcclxuXHJcbiAgICB2YXIgdXJsMiA9IGAke3RoaXMuYmFzZVVybFF1ZXN9V1NfcHJvY19tZW1iZXJfZ2V0YWxsX3NlY3VyaXR5cXVlc3Rpb25hbmRhbnN3YDtcclxuXHJcbiAgICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KHVybDIsIGJvZHkxLCB7IGhlYWRlcnM6IGhlYWRlcnMxIH0pXHJcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuXHJcbiAgICByZXR1cm4gY29tcGxhaW50czEkO1xyXG4gIH1cclxuXHJcbmdldFF1ZXN0aW9ucyhpbnBhcmFtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFNlbGVjdEl0ZW1bXT4ge1xyXG5cclxuICAgIGxldCBoZWFkZXJzMSA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuXHJcbiAgICB2YXIgYm9keTEgPSBgaW5wdXQwPSR7aW5wYXJhbX1gO1xyXG5cclxuICAgIHZhciB1cmwyID0gYCR7dGhpcy5iYXNlVXJsfVdTX3RibF9zZWN1cml0eXF1ZXN0aW9uX21hc3Rlcl9kcnBqc29uYDtcclxuXHJcbiAgICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KHVybDIsIGJvZHkxLCB7IGhlYWRlcnM6IGhlYWRlcnMxIH0pXHJcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuXHJcbiAgICByZXR1cm4gY29tcGxhaW50czEkO1xyXG4gIH1cclxuXHJcblxyXG4gIGNoYW5nZVNlY3VyaXR5UXVlc3Rpb24obWVtYmVyc2Vzc2lvbmlkOiBzdHJpbmcsb2xkc2VjdXJpdHlhbnN3ZXI6IHN0cmluZyxuZXdzZWN1cml0eWlkOiBzdHJpbmcsIG5ld3NlY3VyaXR5YW5zd2VyOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvbW1vbkVycm9yPiB7XHJcblxyXG4gICAgbGV0IGhlYWRlcnMxID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMxLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG5cclxuICAgIHZhciBib2R5MSA9IGBtZW1iZXJzZXNzaW9uaWQ9JHttZW1iZXJzZXNzaW9uaWR9Jm9sZHNlY3VyaXR5YW5zd2VyPSR7b2xkc2VjdXJpdHlhbnN3ZXJ9Jm5ld3NlY3VyaXR5aWQ9JHtuZXdzZWN1cml0eWlkfSZuZXdzZWN1cml0eWFuc3dlcj0ke25ld3NlY3VyaXR5YW5zd2VyfWA7XHJcblxyXG4gICAgdmFyIHVybDIgPSBgJHt0aGlzLmJhc2VVcmx9V1NfcHJvY19tZW1iZXJfY2hhbmdlc2VjdXJpdHlxdWVzdGlvbmA7XHJcblxyXG4gICAgbGV0IGNvbXBsYWludHMxJCA9IHRoaXMuaHR0cFxyXG4gICAgICAucG9zdCh1cmwyLCBib2R5MSwgeyBoZWFkZXJzOiBoZWFkZXJzMSB9KVxyXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcblxyXG4gICAgcmV0dXJuIGNvbXBsYWludHMxJDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xyXG5cclxuICAgIGxldCBlcnJNc2cgPSAoZXJyb3IubWVzc2FnZSkgPyBlcnJvci5tZXNzYWdlIDpcclxuICAgICAgZXJyb3Iuc3RhdHVzID8gYCR7ZXJyb3Iuc3RhdHVzfSAtICR7ZXJyb3Iuc3RhdHVzVGV4dH1gIDogJ1NlcnZlciBlcnJvcic7XHJcbiAgXHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJNc2cpO1xyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuIl19
