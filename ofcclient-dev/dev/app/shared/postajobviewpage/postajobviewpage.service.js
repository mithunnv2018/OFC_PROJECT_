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
var PostajobviewpageService = (function () {
    function PostajobviewpageService(http, baseUrlservice) {
        this.http = http;
        this.baseUrlservice = baseUrlservice;
        this.baseUrl = baseUrlservice.getBaseurl() + 'loginclient/';
        this.baseUrlDrp = baseUrlservice.getBaseurl() + 'postajob/';
    }
    PostajobviewpageService.prototype.getProjectPostedByProjectId = function (membersessionid, projectpostid) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "membersessionid=" + membersessionid + "&ofcprojectpostid=" + projectpostid;
        var url2 = this.baseUrlDrp + "WS_proc_member_get_projectposted_byprojectpostid";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    PostajobviewpageService.prototype.getHireJobByProjectId = function (membersessionid, projectpostid) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "membersessionid=" + membersessionid + "&ofcprojectpostid=" + projectpostid;
        var url2 = this.baseUrlDrp + "WS_proc_member_get_projectaccepted_byprojectpostid";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    PostajobviewpageService.prototype.acceptOffer = function (membersessionid, projectpostid) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "membersessionid=" + membersessionid + "&ofcprojectsubmitid=" + projectpostid;
        var url2 = this.baseUrlDrp + "WS_proc_member_set_acceptoffer";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    PostajobviewpageService.prototype.rejectOffer = function (membersessionid, projectpostid) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "membersessionid=" + membersessionid + "&ofcprojectsubmitid=" + projectpostid;
        var url2 = this.baseUrlDrp + "WS_proc_member_set_rejectedoffer";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    PostajobviewpageService.prototype.shortListOffer = function (membersessionid, projectpostid) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "membersessionid=" + membersessionid + "&ofcprojectsubmitid=" + projectpostid;
        var url2 = this.baseUrlDrp + "WS_proc_member_set_shortlistoffer";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    PostajobviewpageService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return Observable_1.Observable.throw(errMsg);
    };
    PostajobviewpageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, baseurl_service_1.BaseUrlService])
    ], PostajobviewpageService);
    return PostajobviewpageService;
}());
exports.PostajobviewpageService = PostajobviewpageService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcG9zdGFqb2J2aWV3cGFnZS9wb3N0YWpvYnZpZXdwYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBd0QsZUFBZSxDQUFDLENBQUE7QUFDeEUsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0MsZ0NBQStCLDRCQUE0QixDQUFDLENBQUE7QUFRNUQ7SUFXRSxpQ0FBb0IsSUFBVSxFQUFVLGNBQThCO1FBQWxELFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDcEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsVUFBVSxFQUFFLEdBQUcsY0FBYyxDQUFDO1FBRTVELElBQUksQ0FBQyxVQUFVLEdBQUcsY0FBYyxDQUFDLFVBQVUsRUFBRSxHQUFHLFdBQVcsQ0FBQztJQUM5RCxDQUFDO0lBRUQsNkRBQTJCLEdBQTNCLFVBQTRCLGVBQXVCLEVBQUUsYUFBcUI7UUFFeEUsSUFBSSxRQUFRLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM3QixRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1FBRXJFLElBQUksS0FBSyxHQUFHLHFCQUFtQixlQUFlLDBCQUFxQixhQUFlLENBQUM7UUFFbkYsSUFBSSxJQUFJLEdBQU0sSUFBSSxDQUFDLFVBQVUscURBQWtELENBQUM7UUFFaEYsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUk7YUFDekIsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7YUFDeEMsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FB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QVEsRUFBRSxDQUFDO2FBQ3hDLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUzQixNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFTyw2Q0FBVyxHQUFuQixVQUFvQixLQUFVO1FBRTVCLElBQUksTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPO1lBQzFDLEtBQUssQ0FBQyxNQUFNLEdBQU0sS0FBSyxDQUFDLE1BQU0sV0FBTSxLQUFLLENBQUMsVUFBWSxHQUFHLGNBQWMsQ0FBQztRQUUxRSxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQS9HSDtRQUFDLGlCQUFVLEVBQUU7OytCQUFBO0lBbUhiLDhCQUFDO0FBQUQsQ0FsSEEsQUFrSEMsSUFBQTtBQWxIWSwrQkFBdUIsMEJBa0huQyxDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvcG9zdGFqb2J2aWV3cGFnZS9wb3N0YWpvYnZpZXdwYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgU2VsZWN0SXRlbSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEJhc2VVcmxTZXJ2aWNlIH0gZnJvbSAnLi4vYmFzZXVybC9iYXNldXJsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb3N0Sm9iVmlldyB9IGZyb20gJy4uLy4uL3Bvc3Rham9idmlld3BhZ2UvcG9zdGpvYnZpZXcnO1xyXG5pbXBvcnQgeyBDb21tb25FcnJvciB9IGZyb20gJy4uLy4uL2xvZ2lucGFnZS9jb21tb25lcnJvcic7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyBwcm92aWRlcyB0aGUgTmFtZUxpc3Qgc2VydmljZSB3aXRoIG1ldGhvZHMgdG8gcmVhZCBuYW1lcyBhbmQgYWRkIG5hbWVzLlxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUG9zdGFqb2J2aWV3cGFnZVNlcnZpY2Uge1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IE5hbWVMaXN0U2VydmljZSB3aXRoIHRoZSBpbmplY3RlZCBIdHRwLlxyXG4gICAqIEBwYXJhbSB7SHR0cH0gaHR0cCAtIFRoZSBpbmplY3RlZCBIdHRwLlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG5cclxuICBwcml2YXRlIGJhc2VVcmw6IHN0cmluZztcclxuICBwcml2YXRlIGJhc2VVcmxEcnA6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGJhc2VVcmxzZXJ2aWNlOiBCYXNlVXJsU2VydmljZSkge1xyXG4gICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybHNlcnZpY2UuZ2V0QmFzZXVybCgpICsgJ2xvZ2luY2xpZW50Lyc7XHJcblxyXG4gICAgdGhpcy5iYXNlVXJsRHJwID0gYmFzZVVybHNlcnZpY2UuZ2V0QmFzZXVybCgpICsgJ3Bvc3Rham9iLyc7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0UG9zdGVkQnlQcm9qZWN0SWQobWVtYmVyc2Vzc2lvbmlkOiBzdHJpbmcsIHByb2plY3Rwb3N0aWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UG9zdEpvYlZpZXdbXT4ge1xyXG5cclxuICAgIGxldCBoZWFkZXJzMSA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuXHJcbiAgICB2YXIgYm9keTEgPSBgbWVtYmVyc2Vzc2lvbmlkPSR7bWVtYmVyc2Vzc2lvbmlkfSZvZmNwcm9qZWN0cG9zdGlkPSR7cHJvamVjdHBvc3RpZH1gO1xyXG4gICAgXHJcbiAgICB2YXIgdXJsMiA9IGAke3RoaXMuYmFzZVVybERycH1XU19wcm9jX21lbWJlcl9nZXRfcHJvamVjdHBvc3RlZF9ieXByb2plY3Rwb3N0aWRgO1xyXG5cclxuICAgIGxldCBjb21wbGFpbnRzMSQgPSB0aGlzLmh0dHBcclxuICAgICAgLnBvc3QodXJsMiwgYm9keTEsIHsgaGVhZGVyczogaGVhZGVyczEgfSlcclxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG5cclxuICAgIHJldHVybiBjb21wbGFpbnRzMSQ7XHJcbiAgfVxyXG5cclxuXHJcbiBnZXRIaXJlSm9iQnlQcm9qZWN0SWQobWVtYmVyc2Vzc2lvbmlkOiBzdHJpbmcsIHByb2plY3Rwb3N0aWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UG9zdEpvYlZpZXdbXT4ge1xyXG5cclxuICAgIGxldCBoZWFkZXJzMSA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuXHJcbiAgICB2YXIgYm9keTEgPSBgbWVtYmVyc2Vzc2lvbmlkPSR7bWVtYmVyc2Vzc2lvbmlkfSZvZmNwcm9qZWN0cG9zdGlkPSR7cHJvamVjdHBvc3RpZH1gO1xyXG4gICAgXHJcbiAgICB2YXIgdXJsMiA9IGAke3RoaXMuYmFzZVVybERycH1XU19wcm9jX21lbWJlcl9nZXRfcHJvamVjdGFjY2VwdGVkX2J5cHJvamVjdHBvc3RpZGA7XHJcblxyXG4gICAgbGV0IGNvbXBsYWludHMxJCA9IHRoaXMuaHR0cFxyXG4gICAgICAucG9zdCh1cmwyLCBib2R5MSwgeyBoZWFkZXJzOiBoZWFkZXJzMSB9KVxyXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcblxyXG4gICAgcmV0dXJuIGNvbXBsYWludHMxJDtcclxuICB9XHJcblxyXG4gIGFjY2VwdE9mZmVyKG1lbWJlcnNlc3Npb25pZDogc3RyaW5nLCBwcm9qZWN0cG9zdGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvbW1vbkVycm9yPiB7XHJcblxyXG4gICAgbGV0IGhlYWRlcnMxID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMxLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG5cclxuICAgIHZhciBib2R5MSA9IGBtZW1iZXJzZXNzaW9uaWQ9JHttZW1iZXJzZXNzaW9uaWR9Jm9mY3Byb2plY3RzdWJtaXRpZD0ke3Byb2plY3Rwb3N0aWR9YDtcclxuICAgIFxyXG4gICAgdmFyIHVybDIgPSBgJHt0aGlzLmJhc2VVcmxEcnB9V1NfcHJvY19tZW1iZXJfc2V0X2FjY2VwdG9mZmVyYDtcclxuXHJcbiAgICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KHVybDIsIGJvZHkxLCB7IGhlYWRlcnM6IGhlYWRlcnMxIH0pXHJcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuXHJcbiAgICByZXR1cm4gY29tcGxhaW50czEkO1xyXG4gIH1cclxuXHJcbiAgcmVqZWN0T2ZmZXIobWVtYmVyc2Vzc2lvbmlkOiBzdHJpbmcsIHByb2plY3Rwb3N0aWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q29tbW9uRXJyb3I+IHtcclxuXHJcbiAgICBsZXQgaGVhZGVyczEgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVyczEuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcblxyXG4gICAgdmFyIGJvZHkxID0gYG1lbWJlcnNlc3Npb25pZD0ke21lbWJlcnNlc3Npb25pZH0mb2ZjcHJvamVjdHN1Ym1pdGlkPSR7cHJvamVjdHBvc3RpZH1gO1xyXG4gICAgXHJcbiAgICB2YXIgdXJsMiA9IGAke3RoaXMuYmFzZVVybERycH1XU19wcm9jX21lbWJlcl9zZXRfcmVqZWN0ZWRvZmZlcmA7XHJcblxyXG4gICAgbGV0IGNvbXBsYWludHMxJCA9IHRoaXMuaHR0cFxyXG4gICAgICAucG9zdCh1cmwyLCBib2R5MSwgeyBoZWFkZXJzOiBoZWFkZXJzMSB9KVxyXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcblxyXG4gICAgcmV0dXJuIGNvbXBsYWludHMxJDtcclxuICB9XHJcblxyXG5cclxuICBzaG9ydExpc3RPZmZlcihtZW1iZXJzZXNzaW9uaWQ6IHN0cmluZywgcHJvamVjdHBvc3RpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb21tb25FcnJvcj4ge1xyXG5cclxuICAgIGxldCBoZWFkZXJzMSA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuXHJcbiAgICB2YXIgYm9keTEgPSBgbWVtYmVyc2Vzc2lvbmlkPSR7bWVtYmVyc2Vzc2lvbmlkfSZvZmNwcm9qZWN0c3VibWl0aWQ9JHtwcm9qZWN0cG9zdGlkfWA7XHJcbiAgICBcclxuICAgIHZhciB1cmwyID0gYCR7dGhpcy5iYXNlVXJsRHJwfVdTX3Byb2NfbWVtYmVyX3NldF9zaG9ydGxpc3RvZmZlcmA7XHJcblxyXG4gICAgbGV0IGNvbXBsYWludHMxJCA9IHRoaXMuaHR0cFxyXG4gICAgICAucG9zdCh1cmwyLCBib2R5MSwgeyBoZWFkZXJzOiBoZWFkZXJzMSB9KVxyXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcblxyXG4gICAgcmV0dXJuIGNvbXBsYWludHMxJDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xyXG5cclxuICAgIGxldCBlcnJNc2cgPSAoZXJyb3IubWVzc2FnZSkgPyBlcnJvci5tZXNzYWdlIDpcclxuICAgICAgZXJyb3Iuc3RhdHVzID8gYCR7ZXJyb3Iuc3RhdHVzfSAtICR7ZXJyb3Iuc3RhdHVzVGV4dH1gIDogJ1NlcnZlciBlcnJvcic7XHJcbiAgICBcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVyck1zZyk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcblxyXG4iXX0=
