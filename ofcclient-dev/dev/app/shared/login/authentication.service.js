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
require('rxjs/add/operator/map');
var Subject_1 = require('rxjs/Subject');
var baseurl_service_1 = require('../baseurl/baseurl.service');
var AuthenticationService = (function () {
    function AuthenticationService(http, baseurlservice) {
        this.http = http;
        this.baseurlservice = baseurlservice;
        this.missionAnnouncedSource = new Subject_1.Subject();
        this.missionAnnounced$ = this.missionAnnouncedSource.asObservable();
        this.baseUrl = baseurlservice.getBaseurl();
    }
    AuthenticationService.prototype.announceMission = function (mission) {
        this.missionAnnouncedSource.next(mission);
    };
    AuthenticationService.prototype.callLoginWS = function (username, password) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "username=" + username + "&password=" + password;
        var url2 = this.baseUrl + "WS_proc_member_login";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.isloggedin = function () {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.getUserDetails = function () {
        if (localStorage.getItem('currentUser')) {
            var obj = JSON.parse(localStorage.getItem('currentUser'));
            return obj.member_name;
        }
        return "empty";
    };
    AuthenticationService.prototype.getUserType = function () {
        if (localStorage.getItem('currentUser')) {
            var obj = JSON.parse(localStorage.getItem('currentUser'));
            return obj.member_type;
        }
        return "client";
    };
    AuthenticationService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    AuthenticationService.prototype.getHeaders2 = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    AuthenticationService.prototype.getHeadersUrlencode = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    AuthenticationService.prototype.getHeadersUrlencodeUtf8 = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    AuthenticationService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, baseurl_service_1.BaseUrlService])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbG9naW4vYXV0aGVudGljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUF1RCxlQUFlLENBQUMsQ0FBQTtBQUN2RSwyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUU3QyxRQUFPLHVCQUNQLENBQUMsQ0FENkI7QUFDOUIsd0JBQTJCLGNBQWMsQ0FBQyxDQUFBO0FBRTFDLGdDQUE2Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBRTFEO0lBUUksK0JBQW9CLElBQVUsRUFBUyxjQUE2QjtRQUFoRCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFMOUQsMkJBQXNCLEdBQUcsSUFBSSxpQkFBTyxFQUFXLENBQUM7UUFHdkQsc0JBQWlCLEdBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBR3hELElBQUksQ0FBQyxPQUFPLEdBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBRTdDLENBQUM7SUFFRCwrQ0FBZSxHQUFmLFVBQWdCLE9BQWU7UUFDM0IsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQztJQUMvQyxDQUFDO0lBeUJELDJDQUFXLEdBQVgsVUFBWSxRQUFnQixFQUFDLFFBQWU7UUFFeEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM3QixRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1FBRXJFLElBQUksS0FBSyxHQUFHLGNBQVksUUFBUSxrQkFBYSxRQUFVLENBQUM7UUFFeEQsSUFBSSxJQUFJLEdBQU0sSUFBSSxDQUFDLE9BQU8seUJBQXNCLENBQUM7UUFFakQsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUk7YUFDM0IsSUFBSSxDQUFDLElBQUksRUFBRyxLQUFL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QUFNLFdBQU0sS0FBSyxDQUFDLFVBQVksR0FBRyxjQUFjLENBQUM7UUFDMUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQTFISDtRQUFDLGlCQUFVLEVBQUU7OzZCQUFBO0lBMkhiLDRCQUFDO0FBQUQsQ0ExSEEsQUEwSEMsSUFBQTtBQTFIWSw2QkFBcUIsd0JBMEhqQyxDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvbG9naW4vYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgLFJlcXVlc3RPcHRpb25zfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCdcclxuaW1wb3J0IHsgU3ViamVjdCB9ICAgIGZyb20gJ3J4anMvU3ViamVjdCc7XHJcbmltcG9ydCB7TWVtYmVyfSBmcm9tICcuLi8uLi9sb2dpbi9tZW1iZXInO1xyXG5pbXBvcnQge0Jhc2VVcmxTZXJ2aWNlfSBmcm9tICcuLi9iYXNldXJsL2Jhc2V1cmwuc2VydmljZSc7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VydmljZSB7XHJcblxyXG4gICAgLy8gT2JzZXJ2YWJsZSBzdHJpbmcgc291cmNlc1xyXG4gIHByaXZhdGUgbWlzc2lvbkFubm91bmNlZFNvdXJjZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgYmFzZVVybDpzdHJpbmc7XHJcblxyXG4gICBtaXNzaW9uQW5ub3VuY2VkJD10aGlzLm1pc3Npb25Bbm5vdW5jZWRTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLHByaXZhdGUgYmFzZXVybHNlcnZpY2U6QmFzZVVybFNlcnZpY2UpIHsgXHJcbiAgICAgICAgdGhpcy5iYXNlVXJsPWJhc2V1cmxzZXJ2aWNlLmdldEJhc2V1cmwoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYW5ub3VuY2VNaXNzaW9uKG1pc3Npb246Ym9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5taXNzaW9uQW5ub3VuY2VkU291cmNlLm5leHQobWlzc2lvbiApOyAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyBsb2dpbih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgIC8vICAgICBsZXQgc2VuZGFycjphbnlbXT1bXTtcclxuICAgIC8vICAgICB0eXBlIE15VHlwZT17bmFtZTpzdHJpbmcscGFzc3dvcmQ6c3RyaW5nfTtcclxuICAgIC8vICAgICBsZXQgbzI6TXlUeXBlPXtcIm5hbWVcIjp1c2VybmFtZSxcInBhc3N3b3JkXCI6cGFzc3dvcmR9O1xyXG4gICAgLy8gICAgIC8vc2VuZGFyci5wdXNoKG8yKTtcclxuICAgIC8vICAgICBhbGVydChKU09OLnN0cmluZ2lmeShvMikpO1xyXG4gICAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50VXNlcicsIEpTT04uc3RyaW5naWZ5KG8yKSk7XHJcblxyXG4gICAgLy8gICAgIHJldHVybiB0cnVlO1xyXG4gICAgLy8gICAgIC8vIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS9hdXRoZW50aWNhdGUnLCBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkIH0pKVxyXG4gICAgLy8gICAgIC8vICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgIC8vICAgICAvLyAgICAgICAgIC8vIGxvZ2luIHN1Y2Nlc3NmdWwgaWYgdGhlcmUncyBhIGp3dCB0b2tlbiBpbiB0aGUgcmVzcG9uc2VcclxuICAgIC8vICAgICAvLyAgICAgICAgIGxldCB1c2VyID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgaWYgKHVzZXIgJiYgdXNlci50b2tlbikge1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgICAgIC8vIHN0b3JlIHVzZXIgZGV0YWlscyBhbmQgand0IHRva2VuIGluIGxvY2FsIHN0b3JhZ2UgdG8ga2VlcCB1c2VyIGxvZ2dlZCBpbiBiZXR3ZWVuIHBhZ2UgcmVmcmVzaGVzXHJcbiAgICAvLyAgICAgLy8gICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRVc2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjYWxsTG9naW5XUyh1c2VybmFtZTogc3RyaW5nLHBhc3N3b3JkOnN0cmluZyk6IE9ic2VydmFibGU8TWVtYmVyW10+e1xyXG4gICAgICAgIC8vSGVhZGVyIGRlY2xhcmF0aW9uXHJcbiAgICAgICAgbGV0IGhlYWRlcnMxID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuICAgICAgICAvL0JvZHkgcGFyYW1zXHJcbiAgICAgICAgdmFyIGJvZHkxID0gYHVzZXJuYW1lPSR7dXNlcm5hbWV9JnBhc3N3b3JkPSR7cGFzc3dvcmR9YDtcclxuICAgICAgICAvLyBVUkwgZGVjbGFyYXRpb25cclxuICAgICAgICB2YXIgdXJsMiA9IGAke3RoaXMuYmFzZVVybH1XU19wcm9jX21lbWJlcl9sb2dpbmA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGNvbXBsYWludHMxJCA9IHRoaXMuaHR0cFxyXG4gICAgICAgIC5wb3N0KHVybDIgLCBib2R5MSAse2hlYWRlcnM6IGhlYWRlcnMxfSkgLy8gUG9zdCBVUkwgYW5kIGhlYWRlclxyXG4gICAgICAgIC5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSkgLy8gTWFwcGluZyByZXNwb25zZSB0byByZXR1cm4gdmFyaWFibGVcclxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7IC8vIEVycm9yIGhhbmRsZXJcclxuICAgICAgICAvL2FsZXJ0KFwiZ2V0RGlzcGxheUFsbDIgYWZ0ZXJcIik7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBsYWludHMxJDsgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICAvLyByZW1vdmUgdXNlciBmcm9tIGxvY2FsIHN0b3JhZ2UgdG8gbG9nIHVzZXIgb3V0XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2N1cnJlbnRVc2VyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNsb2dnZWRpbigpOmJvb2xlYW57XHJcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRVc2VyJykpe1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VyRGV0YWlscygpOnN0cmluZ3tcclxuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVzZXInKSl7XHJcbiAgICAgICAgICAgIGxldCBvYmo6TWVtYmVyPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRVc2VyJykpO1xyXG4gICAgICAgICAgICAvLyBhbGVydChcIkRldGlhbHM7XCIrbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRVc2VyJykpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqLm1lbWJlcl9uYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJlbXB0eVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJUeXBlKCk6c3RyaW5ne1xyXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VXNlcicpKXtcclxuICAgICAgICAgICAgbGV0IG9iajpNZW1iZXI9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVzZXInKSk7XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KFwiRGV0aWFscztcIitsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVzZXInKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmoubWVtYmVyX3R5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcImNsaWVudFwiO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgIHByaXZhdGUgZ2V0SGVhZGVycygpe1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICByZXR1cm4gaGVhZGVycztcclxuICB9XHJcbiAgcHJpdmF0ZSBnZXRIZWFkZXJzMigpe1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcgfSk7ICBcclxuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuICBwcml2YXRlIGdldEhlYWRlcnNVcmxlbmNvZGUoKXtcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfSk7ICBcclxuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuICBwcml2YXRlIGdldEhlYWRlcnNVcmxlbmNvZGVVdGY4KCl7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLTgnIH0pOyAgXHJcbiAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBIYW5kbGUgSFRUUCBlcnJvclxyXG4gICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUVycm9yIChlcnJvcjogYW55KSB7XHJcbiAgICAvLyBJbiBhIHJlYWwgd29ybGQgYXBwLCB3ZSBtaWdodCB1c2UgYSByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxyXG4gICAgLy8gV2UnZCBhbHNvIGRpZyBkZWVwZXIgaW50byB0aGUgZXJyb3IgdG8gZ2V0IGEgYmV0dGVyIG1lc3NhZ2VcclxuICAgIGxldCBlcnJNc2cgPSAoZXJyb3IubWVzc2FnZSkgPyBlcnJvci5tZXNzYWdlIDpcclxuICAgICAgZXJyb3Iuc3RhdHVzID8gYCR7ZXJyb3Iuc3RhdHVzfSAtICR7ZXJyb3Iuc3RhdHVzVGV4dH1gIDogJ1NlcnZlciBlcnJvcic7XHJcbiAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7IC8vIGxvZyB0byBjb25zb2xlIGluc3RlYWRcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVyck1zZyk7XHJcbiAgfVxyXG59Il19
