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
require('rxjs/add/operator/map');
var Subject_1 = require('rxjs/Subject');
var LoginPageService = (function () {
    function LoginPageService(http, baseurlservice) {
        this.http = http;
        this.baseurlservice = baseurlservice;
        this.baseUrl = 'http://localhost:8080/OFCAdmin/rest/';
        this.missionAnnouncedSource = new Subject_1.Subject();
        this.missionAnnounced$ = this.missionAnnouncedSource.asObservable();
        this.baseUrl = baseurlservice.getBaseurl() + 'loginclient/';
    }
    LoginPageService.prototype.announceMission = function (mission) {
        this.missionAnnouncedSource.next(mission);
    };
    LoginPageService.prototype.isloggedin = function () {
        if (sessionStorage.getItem('memberdetails')) {
            return true;
        }
        else {
            return false;
        }
    };
    LoginPageService.prototype.getUserDetails = function () {
        if (sessionStorage.getItem('memberdetails')) {
            var data = sessionStorage.getItem('memberdetails');
            var obj = JSON.parse(data);
            var sessionid = obj.ofcmemsession_id;
            var data2 = sessionStorage.getItem(sessionid);
            var obj2 = JSON.parse(data2);
            return obj2.ofcmembers_fname;
        }
        return "empty";
    };
    LoginPageService.prototype.logout = function () {
        sessionStorage.removeItem('memberdetails');
    };
    LoginPageService.prototype.get = function () {
        return this.http.get('/assets/data.json')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    LoginPageService.prototype.getLoginClient = function (username, password) {
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
    LoginPageService.prototype.getViewOfcMember = function (input0) {
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
    LoginPageService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    LoginPageService.prototype.getHeaders2 = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    LoginPageService.prototype.getHeadersUrlencode = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    LoginPageService.prototype.getHeadersUrlencodeUtf8 = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    LoginPageService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    LoginPageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, baseurl_service_1.BaseUrlService])
    ], LoginPageService);
    return LoginPageService;
}());
exports.LoginPageService = LoginPageService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbG9naW5wYWdlL2xvZ2lucGFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQXdELGVBQWUsQ0FBQyxDQUFBO0FBQ3hFLDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBTTdDLFFBQU8sc0JBQXNCLENBQUMsQ0FBQTtBQUM5QixnQ0FBNkIsNEJBQTRCLENBQUMsQ0FBQTtBQUMxRCxRQUFPLHVCQUNQLENBQUMsQ0FENkI7QUFDOUIsd0JBQTJCLGNBQWMsQ0FBQyxDQUFBO0FBTTFDO0lBY0UsMEJBQW9CLElBQVcsRUFBUyxjQUE2QjtRQUFqRCxTQUFJLEdBQUosSUFBSSxDQUFPO1FBQVMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFQN0QsWUFBTyxHQUFXLHNDQUFzQyxDQUFDO1FBR3pELDJCQUFzQixHQUFHLElBQUksaUJBQU8sRUFBVyxDQUFDO1FBRXZELHNCQUFpQixHQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUcxRCxJQUFJLENBQUMsT0FBTyxHQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsR0FBQyxjQUFjLENBQUM7SUFDNUQsQ0FBQztJQUVELDBDQUFlLEdBQWYsVUFBZ0IsT0FBZTtRQUN6QixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDO0lBQ2pELENBQUM7SUFFRCxxQ0FBVSxHQUFWO1FBQ00sRUFBRSxDQUFBLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsSUFBSSxDQUFBLENBQUM7WUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0lBQ0YseUNBQWMsR0FBZDtRQUNLLEVBQUUsQ0FBQSxDQUFDLGNBQWMsQ0FB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ZmlsZSI6ImFwcC9zaGFyZWQvbG9naW5wYWdlL2xvZ2lucGFnZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IExvZ2luUGFnZSB9IGZyb20gJy4uLy4uL2xvZ2lucGFnZS9sb2dpbnBhZ2UnO1xyXG5pbXBvcnQgeyBPRkNNZW1iZXJzfSBmcm9tICcuLi8uLi9sb2dpbnBhZ2Uvb2ZjbWVtYmVycyc7XHJcbmltcG9ydCB7IE9GQ21lbVNlc3Npb24gfSBmcm9tICcuLi8uLi9sb2dpbnBhZ2Uvb2ZjbWVtc2Vzc2lvbic7XHJcbmltcG9ydCB7Vmlld09GQ21lbVNlc3Npb259IGZyb20gJy4uLy4uL2xvZ2lucGFnZS92aWV3b2ZjbWVtc2Vzc2lvbic7XHJcblxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJzsgIC8vIGZvciBkZWJ1Z2dpbmdcclxuaW1wb3J0IHtCYXNlVXJsU2VydmljZX0gZnJvbSAnLi4vYmFzZXVybC9iYXNldXJsLnNlcnZpY2UnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCdcclxuaW1wb3J0IHsgU3ViamVjdCB9ICAgIGZyb20gJ3J4anMvU3ViamVjdCc7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyBwcm92aWRlcyB0aGUgTmFtZUxpc3Qgc2VydmljZSB3aXRoIG1ldGhvZHMgdG8gcmVhZCBuYW1lcyBhbmQgYWRkIG5hbWVzLlxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9naW5QYWdlU2VydmljZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgTmFtZUxpc3RTZXJ2aWNlIHdpdGggdGhlIGluamVjdGVkIEh0dHAuXHJcbiAgICogQHBhcmFtIHtIdHRwfSBodHRwIC0gVGhlIGluamVjdGVkIEh0dHAuXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmcgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL09GQ0FkbWluL3Jlc3QvJztcclxuICBcclxuICAgIC8vIE9ic2VydmFibGUgc3RyaW5nIHNvdXJjZXNcclxuICBwcml2YXRlIG1pc3Npb25Bbm5vdW5jZWRTb3VyY2UgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gXHJcbiAgIG1pc3Npb25Bbm5vdW5jZWQkPXRoaXMubWlzc2lvbkFubm91bmNlZFNvdXJjZS5hc09ic2VydmFibGUoKTtcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHAgOiBIdHRwLHByaXZhdGUgYmFzZXVybHNlcnZpY2U6QmFzZVVybFNlcnZpY2Upe1xyXG4gICAgICB0aGlzLmJhc2VVcmw9YmFzZXVybHNlcnZpY2UuZ2V0QmFzZXVybCgpKydsb2dpbmNsaWVudC8nO1xyXG4gIH1cclxuXHJcbiAgYW5ub3VuY2VNaXNzaW9uKG1pc3Npb246Ym9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5taXNzaW9uQW5ub3VuY2VkU291cmNlLm5leHQobWlzc2lvbiApOyAgICBcclxuICB9XHJcblxyXG4gIGlzbG9nZ2VkaW4oKTpib29sZWFue1xyXG4gICAgICAgIGlmKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ21lbWJlcmRldGFpbHMnKSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICBnZXRVc2VyRGV0YWlscygpOnN0cmluZ3tcclxuICAgICAgICBpZihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdtZW1iZXJkZXRhaWxzJykpe1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ21lbWJlcmRldGFpbHMnKTtcclxuICAgICAgICAgICAgbGV0IG9iajpPRkNtZW1TZXNzaW9uPUpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgICAgIGxldCBzZXNzaW9uaWQ9b2JqLm9mY21lbXNlc3Npb25faWQ7XHJcbiAgICAgICAgICAgIHZhciBkYXRhMiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oc2Vzc2lvbmlkKTtcclxuICAgICAgICAgICAgbGV0IG9iajI6Vmlld09GQ21lbVNlc3Npb249SlNPTi5wYXJzZShkYXRhMik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gb2JqMi5vZmNtZW1iZXJzX2ZuYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJlbXB0eVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICAvLyByZW1vdmUgdXNlciBmcm9tIGxvY2FsIHN0b3JhZ2UgdG8gbG9nIHVzZXIgb3V0XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnbWVtYmVyZGV0YWlscycpO1xyXG4gICAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgZm9yIHRoZSBIVFRQIEdFVCByZXF1ZXN0IGZvciB0aGUgSlNPTiByZXNvdXJjZS5cclxuICAgKiBAcmV0dXJuIHtzdHJpbmdbXX0gVGhlIE9ic2VydmFibGUgZm9yIHRoZSBIVFRQIHJlcXVlc3QuXHJcbiAgICovXHJcbiAgZ2V0KCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXNzZXRzL2RhdGEuanNvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgIC8vICAgICAgICAgICAgICAuZG8oZGF0YSA9PiBjb25zb2xlLmxvZygnc2VydmVyIGRhdGE6JywgZGF0YSkpICAvLyBkZWJ1Z1xyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICB9XHJcblxyXG4gIC8vIExvZ2luIENsaWVudFxyXG4gIGdldExvZ2luQ2xpZW50KHVzZXJuYW1lOiBzdHJpbmcscGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8T0ZDbWVtU2Vzc2lvbj57XHJcbiAgICBcclxuICAgIGxldCBoZWFkZXJzMSA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuICAgIFxyXG4gICAgdmFyIGJvZHkxID0gYHVzZXJuYW1lPSR7dXNlcm5hbWV9JnBhc3N3b3JkPSR7IHBhc3N3b3JkfWA7XHJcbiAgICBcclxuICAgIC8qY29uc29sZS5sb2coJ0hJSSBNSVRIIENBTEwgRE9ORScpO1xyXG4gICAgdmFyIHVybDMgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxL2NhbGxteXNxbHByb2MnO1xyXG4gICAgbGV0IGNvbXBsYWludHMyJCA9IHRoaXMuaHR0cFxyXG4gICAgICAucG9zdCh1cmwzICwgYm9keTEgLHtoZWFkZXJzOiBoZWFkZXJzMX0pXHJcbiAgICAgIC5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgICAvL2FsZXJ0KFwiZ2V0RGlzcGxheUFsbDIgYWZ0ZXJcIik7eVxyXG4gICAgICBjb25zb2xlLmxvZyhcIk1JVEggSEVSRTotXCIrY29tcGxhaW50czIkKTtcclxuICAgICAgY29uc29sZS5sb2coXCJNSVRIIEhFUkU6LVwiLGNvbXBsYWludHMyJCk7Ki9cclxuXHJcbiAgICB2YXIgdXJsMiA9IGAke3RoaXMuYmFzZVVybH1XU19wcm9jX29mY21lbWJlcl9sb2dpbmA7XHJcblxyXG4gICAgXHJcblxyXG5cclxuICAgIGxldCBjb21wbGFpbnRzMSQgPSB0aGlzLmh0dHBcclxuICAgICAgLnBvc3QodXJsMiAsIGJvZHkxICx7aGVhZGVyczogaGVhZGVyczF9KVxyXG4gICAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgICAgLy9hbGVydChcImdldERpc3BsYXlBbGwyIGFmdGVyXCIpO3lcclxuICAgICAgcmV0dXJuIGNvbXBsYWludHMxJDsgXHJcbiAgfVxyXG5cclxuICAvLyBnZXQgVmlldyBvZiBPRkMgTWVtYmVyIGFmdGVyIGxvZ2luIHZpYSBvZmNzZXNzaW9uaWRcclxuICBnZXRWaWV3T2ZjTWVtYmVyKGlucHV0MDogc3RyaW5nKTogT2JzZXJ2YWJsZTxWaWV3T0ZDbWVtU2Vzc2lvbj57XHJcbiAgICBcclxuICAgIGxldCBoZWFkZXJzMSA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuICAgIFxyXG4gICAgdmFyIGJvZHkxID0gYG1lbWJlcnNlc3Npb25pZD0ke2lucHV0MH1gO1xyXG4gICAgXHJcbiAgICB2YXIgdXJsMiA9IGAke3RoaXMuYmFzZVVybH1XU19wcm9jX3RibF9vZmNtZW1iZXJzX21hc3Rlcl9zZWxlY3Rqc29uYDtcclxuICAgIFxyXG4gICAgbGV0IGNvbXBsYWludHMxJCA9IHRoaXMuaHR0cFxyXG4gICAgICAucG9zdCh1cmwyICwgYm9keTEgLHtoZWFkZXJzOiBoZWFkZXJzMX0pXHJcbiAgICAgIC5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgICAvL2FsZXJ0KFwiZ2V0RGlzcGxheUFsbDIgYWZ0ZXJcIik7XHJcbiAgICAgIHJldHVybiBjb21wbGFpbnRzMSQ7IFxyXG4gIH1cclxuXHJcbiAgXHJcbiAgLy8gc3VibWl0VXBsb2FkQW5kT3RoZXJzKHVwbG9hZGVkRmlsZXM6IGFueVtdKTpPYnNlcnZhYmxlPGFueT57XHJcbiAgLy8gICBsZXQgaGVhZGVyczEgPSBuZXcgSGVhZGVycygpO1xyXG4gIC8vICAgaGVhZGVyczEuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgLy8gICB2YXIgYm9keTEgPSBgZmlsZXVwbG9hZGFycmF5PSR7SlNPTi5zdHJpbmdpZnkoIHVwbG9hZGVkRmlsZXMpfWA7XHJcbiAgLy8gICBhbGVydChcImJvZHlcIiArIEpTT04uc3RyaW5naWZ5KHVwbG9hZGVkRmlsZXMpKVxyXG4gIC8vICAgdmFyIHVybDIgPSBgaHR0cDovL2xvY2FsaG9zdDo4MDgwL1Rhc2tNYW5hZ2VyV1MvcmVzdC9hdHVsdGVzdC9zdWJtaXRmaWxldXBsb2FkYDtcclxuICAgIFxyXG5cclxuICAvLyAgIC8vdHlwZSBNeVR5cGU9e2lzc3VjY2VzczpzdHJpbmd9O1xyXG5cclxuICAvLyAgIGxldCBteXJlc3VsdD10aGlzLmh0dHBcclxuICAvLyAgICAgLnBvc3QodXJsMixib2R5MSAgLHtoZWFkZXJzOiBoZWFkZXJzMX0pXHJcbiAgLy8gICAgIC5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAvLyAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gIC8vICAgLy8gYWxlcnQoXCJoaFwiK215cmVzdWx0Lmlzc3VjY2Vzcyk7ICBcclxuICAvLyAgIGNvbnNvbGUubG9nKFwiTWl0aDpcIixteXJlc3VsdCk7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhcIm1pdGgyOlwiLHVwbG9hZGVkRmlsZXMpO1xyXG4gIC8vICAgcmV0dXJuIG15cmVzdWx0OyAgXHJcbiAgLy8gfVxyXG5cclxuICBcclxuXHJcbiAgLy8gZ2V0RGlzcGxheUFsbDIoKTogT2JzZXJ2YWJsZTxMb2dpblBhZ2VbXT57XHJcbiAgLy8gICAvL2FsZXJ0KFwiZ2V0RGlzcGxheUFsbDIgYmVmb3JlXCIpO1xyXG4gIC8vICAgLy8gbGV0IGNvbXBsYWludHMxJCA9IHRoaXMuaHR0cFxyXG4gIC8vICAgLy8gICAucG9zdChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL0F0dWx0ZXN0L3Jlc3QvYXR1bHRlc3Qvc2VsZWN0dGVzdG9uZT9lbnJvbGxubz1lcmAsIHtoZWFkZXJzOiB0aGlzLmdldEhlYWRlcnMyKCl9KVxyXG4gIC8vICAgLy8gICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgLy8gICAvLyAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAvLyAgIC8vICAgLy9hbGVydChcImdldERpc3BsYXlBbGwyIGFmdGVyXCIpO1xyXG4gIC8vICAgLy8gICByZXR1cm4gY29tcGxhaW50czEkOyBcclxuXHJcbiAgLy8gICBsZXQgaGVhZGVyczEgPSBuZXcgSGVhZGVycygpO1xyXG4gIC8vICAgaGVhZGVyczEuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgLy8gICAvL2hlYWRlcnMxLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nICk7XHJcbiAgLy8gICAvL2hlYWRlcnMxLmFwcGVuZCgnaW5wdXQnLCBKU09OLnN0cmluZ2lmeSggaW5wYXJhbSkpO1xyXG4gIC8vICAgLy92YXIgYm9keTEgPSBgaW5wdXQ9JHtKU09OLnN0cmluZ2lmeSggaW5wYXJhbSl9YDtcclxuICAvLyAgIC8vY29uc29sZS5sb2coYm9keTEpO1xyXG4gIC8vICAgLy92YXIgdXJsMiA9IGBodHRwOi8vbG9jYWxob3N0OjgwODAvQXR1bHRlc3QvcmVzdC9hdHVsdGVzdC9pbnNlcnRUZXN0b25lP2AgKyBib2R5MTtcclxuICAvLyAgIHZhciB1cmwyID0gYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9UYXNrTWFuYWdlcldTL3Jlc3QvYXR1bHRlc3QvZHJwcHJvamVjdGA7XHJcbiAgLy8gICBjb25zb2xlLmxvZyh1cmwyKTtcclxuICAvLyAgIGxldCBjb21wbGFpbnRzMSQgPSB0aGlzLmh0dHBcclxuICAvLyAgICAgLnBvc3QodXJsMiAgLHtoZWFkZXJzOiBoZWFkZXJzMX0pXHJcbiAgLy8gICAgIC5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAvLyAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gIC8vICAgICAvL2FsZXJ0KFwiZ2V0RGlzcGxheUFsbDIgYWZ0ZXJcIik7XHJcbiAgLy8gICAgIHJldHVybiBjb21wbGFpbnRzMSQ7IFxyXG5cclxuICAvLyB9XHJcbiBcclxuICBcclxuICAgcHJpdmF0ZSBnZXRIZWFkZXJzKCl7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgIHJldHVybiBoZWFkZXJzO1xyXG4gIH1cclxuICBwcml2YXRlIGdldEhlYWRlcnMyKCl7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyB9KTsgIFxyXG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG4gIHByaXZhdGUgZ2V0SGVhZGVyc1VybGVuY29kZSgpe1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9KTsgIFxyXG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG4gIHByaXZhdGUgZ2V0SGVhZGVyc1VybGVuY29kZVV0ZjgoKXtcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOCcgfSk7ICBcclxuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEhhbmRsZSBIVFRQIGVycm9yXHJcbiAgICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IgKGVycm9yOiBhbnkpIHtcclxuICAgIC8vIEluIGEgcmVhbCB3b3JsZCBhcHAsIHdlIG1pZ2h0IHVzZSBhIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXHJcbiAgICAvLyBXZSdkIGFsc28gZGlnIGRlZXBlciBpbnRvIHRoZSBlcnJvciB0byBnZXQgYSBiZXR0ZXIgbWVzc2FnZVxyXG4gICAgbGV0IGVyck1zZyA9IChlcnJvci5tZXNzYWdlKSA/IGVycm9yLm1lc3NhZ2UgOlxyXG4gICAgICBlcnJvci5zdGF0dXMgPyBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0fWAgOiAnU2VydmVyIGVycm9yJztcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTsgLy8gbG9nIHRvIGNvbnNvbGUgaW5zdGVhZFxyXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==
