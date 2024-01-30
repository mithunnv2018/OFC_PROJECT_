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
var MyproposalService = (function () {
    function MyproposalService(http, baseUrlservice) {
        this.http = http;
        this.baseUrlservice = baseUrlservice;
        this.baseUrl = baseUrlservice.getBaseurl() + 'joblist/';
    }
    MyproposalService.prototype.get = function () {
        return this.http.get('/assets/data.json')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MyproposalService.prototype.getProjectById = function (membersessionid, projectpostid) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "membersessionid=" + membersessionid + "&projectpostid=" + projectpostid;
        var url2 = this.baseUrl + "WS_proc_member_getall_latestprojectpostedById";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    MyproposalService.prototype.getAllQuestions = function (ofcprojectpost_id_param) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "ofcprojectpost_id_param=" + ofcprojectpost_id_param;
        var url2 = this.baseUrl + "WS_proc_tbl_ofcprojectpost_questions_selectjson";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    MyproposalService.prototype.submitproposal = function (membersessionid, inparam, inquestions, fileuploadjson) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "membersessionid=" + membersessionid + "&inparam=" + JSON.stringify(inparam) + "&inquestions=" + inquestions + "&fileuploadjson=" + fileuploadjson;
        console.log("body1 : " + body1);
        var url2 = this.baseUrl + "WS_proc_member_ofcprojectsubmitproposal";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    MyproposalService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return Observable_1.Observable.throw(errMsg);
    };
    MyproposalService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, baseurl_service_1.BaseUrlService])
    ], MyproposalService);
    return MyproposalService;
}());
exports.MyproposalService = MyproposalService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbXlwcm9wb3NhbC9teXByb3Bvc2FsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBd0QsZUFBZSxDQUFDLENBQUE7QUFDeEUsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFJN0MsZ0NBQStCLDRCQUE0QixDQUFDLENBQUE7QUFZNUQ7SUFVSSwyQkFBb0IsSUFBVSxFQUFVLGNBQThCO1FBQWxELFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDbEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsVUFBVSxFQUFFLEdBQUcsVUFBVSxDQUFDO0lBQzVELENBQUM7SUFLRCwrQkFBRyxHQUFIO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO2FBQ3BDLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFFbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBR0QsMENBQWMsR0FBZCxVQUFlLGVBQXVCLEVBQUUsYUFBcUI7UUFFekQsSUFBSSxRQUFRLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM3QixRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1FBRXJFLElBQUksS0FBSyxHQUFHLHFCQUFtQixlQUFlLHVCQUFrQixhQUFlLENBQUM7UUFFaEYsSUFBSSxJQUFJLEdBQU0sSUFBSSxDQUFDLE9BQU8sa0RBQStDLENBQUM7UUFFMUUsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUk7YUFDdkIsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7YUFDeEMsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTdCLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDeEIsQ0FBQztJQU1ELDJDQUFlLEdBQWYsVUFBZ0IsdUJBQStCO1FBRTNDLElBQUksUUFBUSxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDN0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQUVyRSxJQUFJLEtBQUssR0FBRyw2QkFBMkIsdUJBQXlCLENBQUM7UUFFakUsSUFBSSxJQUFJLEdBQU0sSUFBSSxDQUFDLE9BQU8sb0RBQWlELENBQUM7UUFFNUUsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUk7YUFDdkIsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7YUFDeEMsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTdCLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDeEIsQ0FBQztJQUdELDBDQUFjLEdBQWQsVUFBZSxlQUF1QixFQUFFLE9BQXVCLEVBQUUsV0FBbUIsRUFBRSxjQUFzQjtRQUV4RyxJQUFJLFFBQVEsR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzdCLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7UUFFckUsSUFBSSxLQUFLLEdBQUcscUJBQW1CLGVBQWUsaUJBQVksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMscUJBQWdCLFdBQVcsd0JBQW1CLGNBQWdCLENBQUM7UUFDaEosT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxJQUFJLEdBQU0sSUFBSSxDQUFDLE9BQU8sNENBQXlDLENBQUM7UUFFcEUsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUk7YUFDdkIsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7YUFDeEMsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTdCLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDeEIsQ0FBQztJQUdPLHVDQUFXLEdBQW5CLFVBQW9CLEtBQVU7UUFFMUIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU87WUFDeEMsS0FBSyxDQUFDLE1BQU0sR0FBTSxLQUFLLENBQUMsTUFBTSxXQUFNLEtBQUssQ0FBQyxVQUFZLEdBQUcsY0FBYyxDQUFDO1FBRTVFLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBekZMO1FBQUMsaUJBQVUsRUFBRTs7eUJBQUE7SUEwRmIsd0JBQUM7QUFBRCxDQXpGQSxBQXlGQyxJQUFBO0FBekZZLHlCQUFpQixvQkF5RjdCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9teXByb3Bvc2FsL215cHJvcG9zYWwuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBPRkNQcm9qZWN0UG9zdERldGFpbHMgfSBmcm9tICcuLi8uLi9teXByb3Bvc2FsL29mY3Byb2plY3Rwb3N0ZGV0YWlscyc7XHJcbmltcG9ydCB7IFN1Ym1pdHRlZFByb3Bvc2FsTGlzdCB9IGZyb20gJy4uLy4uL215cHJvcG9zYWwvc3VibWl0dGVkcHJvcG9zYWxsaXN0JztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZCB9IGZyb20gJy4uLy4uL215cHJvcG9zYWwvZmlsZXVwbG9hZCc7XHJcbmltcG9ydCB7IEJhc2VVcmxTZXJ2aWNlIH0gZnJvbSAnLi4vYmFzZXVybC9iYXNldXJsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJtaXRQcm9wb3NhbFF1ZXN0QW5zd2VyIH0gZnJvbSAnLi4vLi4vbXlwcm9wb3NhbC9zdWJtaXRwcm9wb3NhbHF1ZXN0YW5zd2VyJztcclxuaW1wb3J0IHsgUHJvamVjdFBvc3RRdWVzdGlvbnMgfSBmcm9tICcuLi8uLi9teXByb3Bvc2FsL3Byb2plY3Rwb3N0cXVlc3Rpb25zJztcclxuaW1wb3J0IHsgU3VibWl0UHJvcG9zYWwgfSBmcm9tICcuLi8uLi9teXByb3Bvc2FsL3N1Ym1pdHByb3Bvc2FsJztcclxuaW1wb3J0IHsgQ29tbW9uRXJyb3IgfSBmcm9tICcuLi8uLi9teXByb3Bvc2FsL2NvbW1vbmVycm9yJztcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgdGhlIE5hbWVMaXN0IHNlcnZpY2Ugd2l0aCBtZXRob2RzIHRvIHJlYWQgbmFtZXMgYW5kIGFkZCBuYW1lcy5cclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE15cHJvcG9zYWxTZXJ2aWNlIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgTmFtZUxpc3RTZXJ2aWNlIHdpdGggdGhlIGluamVjdGVkIEh0dHAuXHJcbiAgICAgKiBAcGFyYW0ge0h0dHB9IGh0dHAgLSBUaGUgaW5qZWN0ZWQgSHR0cC5cclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICAvL3ByaXZhdGUgYmFzZVVybDogc3RyaW5nID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9UYXNrTWFuYWdlcldTL3Jlc3QvYXR1bHRlc3QvJztcclxuICAgIHByaXZhdGUgYmFzZVVybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBiYXNlVXJsc2VydmljZTogQmFzZVVybFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsc2VydmljZS5nZXRCYXNldXJsKCkgKyAnam9ibGlzdC8nO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgZm9yIHRoZSBIVFRQIEdFVCByZXF1ZXN0IGZvciB0aGUgSlNPTiByZXNvdXJjZS5cclxuICAgICAqIEByZXR1cm4ge3N0cmluZ1tdfSBUaGUgT2JzZXJ2YWJsZSBmb3IgdGhlIEhUVFAgcmVxdWVzdC5cclxuICAgICAqL1xyXG4gICAgZ2V0KCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL2Fzc2V0cy9kYXRhLmpzb24nKVxyXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgLmRvKGRhdGEgPT4gY29uc29sZS5sb2coJ3NlcnZlciBkYXRhOicsIGRhdGEpKSAgLy8gZGVidWdcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRQcm9qZWN0QnlJZChtZW1iZXJzZXNzaW9uaWQ6IHN0cmluZywgcHJvamVjdHBvc3RpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxPRkNQcm9qZWN0UG9zdERldGFpbHNbXT4ge1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVyczEgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMxLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG5cclxuICAgICAgICB2YXIgYm9keTEgPSBgbWVtYmVyc2Vzc2lvbmlkPSR7bWVtYmVyc2Vzc2lvbmlkfSZwcm9qZWN0cG9zdGlkPSR7cHJvamVjdHBvc3RpZH1gO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB1cmwyID0gYCR7dGhpcy5iYXNlVXJsfVdTX3Byb2NfbWVtYmVyX2dldGFsbF9sYXRlc3Rwcm9qZWN0cG9zdGVkQnlJZGA7XHJcblxyXG4gICAgICAgIGxldCBjb21wbGFpbnRzMSQgPSB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3QodXJsMiwgYm9keTEsIHsgaGVhZGVyczogaGVhZGVyczEgfSlcclxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG5cclxuICAgICAgICByZXR1cm4gY29tcGxhaW50czEkO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICBcclxuXHJcbiAgICBnZXRBbGxRdWVzdGlvbnMob2ZjcHJvamVjdHBvc3RfaWRfcGFyYW06IHN0cmluZyk6IE9ic2VydmFibGU8UHJvamVjdFBvc3RRdWVzdGlvbnNbXT4ge1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVyczEgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMxLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG5cclxuICAgICAgICB2YXIgYm9keTEgPSBgb2ZjcHJvamVjdHBvc3RfaWRfcGFyYW09JHtvZmNwcm9qZWN0cG9zdF9pZF9wYXJhbX1gO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB1cmwyID0gYCR7dGhpcy5iYXNlVXJsfVdTX3Byb2NfdGJsX29mY3Byb2plY3Rwb3N0X3F1ZXN0aW9uc19zZWxlY3Rqc29uYDtcclxuXHJcbiAgICAgICAgbGV0IGNvbXBsYWludHMxJCA9IHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdCh1cmwyLCBib2R5MSwgeyBoZWFkZXJzOiBoZWFkZXJzMSB9KVxyXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcblxyXG4gICAgICAgIHJldHVybiBjb21wbGFpbnRzMSQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy9zdWJtaXQgcHJvcG9zYWxcclxuICAgIHN1Ym1pdHByb3Bvc2FsKG1lbWJlcnNlc3Npb25pZDogc3RyaW5nLCBpbnBhcmFtOiBTdWJtaXRQcm9wb3NhbCwgaW5xdWVzdGlvbnM6IHN0cmluZywgZmlsZXVwbG9hZGpzb246IHN0cmluZyk6IE9ic2VydmFibGU8Q29tbW9uRXJyb3I+IHtcclxuICAgICAgICAvL0hlYWRlciBkZWNsYXJhdGlvblxyXG4gICAgICAgIGxldCBoZWFkZXJzMSA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVyczEuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICAgICAgLy9Cb2R5IHBhcmFtc1xyXG4gICAgICAgIHZhciBib2R5MSA9IGBtZW1iZXJzZXNzaW9uaWQ9JHttZW1iZXJzZXNzaW9uaWR9JmlucGFyYW09JHtKU09OLnN0cmluZ2lmeShpbnBhcmFtKX0maW5xdWVzdGlvbnM9JHtpbnF1ZXN0aW9uc30mZmlsZXVwbG9hZGpzb249JHtmaWxldXBsb2FkanNvbn1gO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYm9keTEgOiBcIiArIGJvZHkxKTtcclxuICAgICAgICB2YXIgdXJsMiA9IGAke3RoaXMuYmFzZVVybH1XU19wcm9jX21lbWJlcl9vZmNwcm9qZWN0c3VibWl0cHJvcG9zYWxgOy8vaW5zZXJ0TWlsZXN0b25lc1Byb2plY3RgO1xyXG5cclxuICAgICAgICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0KHVybDIsIGJvZHkxLCB7IGhlYWRlcnM6IGhlYWRlcnMxIH0pIC8vIFBvc3QgVVJMIGFuZCBoZWFkZXJcclxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSkgLy8gTWFwcGluZyByZXNwb25zZSB0byByZXR1cm4gdmFyaWFibGVcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpOyAvLyBFcnJvciBoYW5kbGVyXHJcbiAgICAgICAgLy9hbGVydChcImdldERpc3BsYXlBbGwyIGFmdGVyXCIpO1xyXG4gICAgICAgIHJldHVybiBjb21wbGFpbnRzMSQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xyXG5cclxuICAgICAgICBsZXQgZXJyTXNnID0gKGVycm9yLm1lc3NhZ2UpID8gZXJyb3IubWVzc2FnZSA6XHJcbiAgICAgICAgICAgIGVycm9yLnN0YXR1cyA/IGAke2Vycm9yLnN0YXR1c30gLSAke2Vycm9yLnN0YXR1c1RleHR9YCA6ICdTZXJ2ZXIgZXJyb3InO1xyXG5cclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJNc2cpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
