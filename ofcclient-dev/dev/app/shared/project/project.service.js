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
var ProjectService = (function () {
    function ProjectService(http, baseUrlservice) {
        this.http = http;
        this.baseUrlservice = baseUrlservice;
        this.baseUrl = 'http://localhost:8080/TaskManagerWS/rest/taskmanager/';
        this.baseUrl = baseUrlservice.getBaseurl();
    }
    ProjectService.prototype.get = function () {
        return this.http.get('/assets/data.json')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProjectService.prototype.insert = function (inparam, fileUpload) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "input=" + JSON.stringify(inparam) + "&fileupload=" + JSON.stringify(fileUpload);
        var url2 = this.baseUrl + "WS_tbl_project_master_create";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    ProjectService.prototype.update = function (inparam, fileUpload) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "input=" + JSON.stringify(inparam) + "&fileupload=" + JSON.stringify(fileUpload);
        var url2 = this.baseUrl + "WS_tbl_project_master_update";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    ProjectService.prototype.getselectAllfileProject = function (pkid) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "input=" + pkid;
        var url2 = this.baseUrl + "selectAllfileuploadProject";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    ProjectService.prototype.getselectAllfileuploadMilestone = function (pkid) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "input=" + pkid;
        var url2 = this.baseUrl + "selectAllfileuploadMilestone";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    ProjectService.prototype.getedit = function (pkid) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "input=" + pkid;
        var url2 = this.baseUrl + "WS_tbl_project_master_selectedit";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    ProjectService.prototype.getall = function () {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "input=abc";
        var url2 = this.baseUrl + "WS_tbl_project_master_selectall";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    ProjectService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    ProjectService.prototype.getHeaders2 = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    ProjectService.prototype.getHeadersUrlencode = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    ProjectService.prototype.getHeadersUrlencodeUtf8 = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    ProjectService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    ProjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, baseurl_service_1.BaseUrlService])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcHJvamVjdC9wcm9qZWN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBd0QsZUFBZSxDQUFDLENBQUE7QUFDeEUsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFJN0MsZ0NBQTZCLDRCQUE0QixDQUFDLENBQUE7QUFRMUQ7SUFVRSx3QkFBb0IsSUFBVyxFQUFTLGNBQTZCO1FBQWpELFNBQUksR0FBSixJQUFJLENBQU87UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUY3RCxZQUFPLEdBQVcsdURBQXVELENBQUM7UUFHaEYsSUFBSSxDQUFDLE9BQU8sR0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUtELDRCQUFHLEdBQUg7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7YUFDeEIsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUVsQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFHRCwrQkFBTSxHQUFOLFVBQU8sT0FBZ0IsRUFBQyxVQUF1QjtRQUU3QyxJQUFJLFFBQVEsR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzdCLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7UUFFckUsSUFBSSxLQUFLLEdBQUcsV0FBUyxJQUFJLENBQUMsU0FBUyxDQUFFLE9BQU8sQ0FBQyxvQkFBZSxJQUFJLENBQUMsU0FBUyxDQUFFLFVBQVUsQ0FBRyxDQUFDO1FBRTFGLElBQUksSUFBSSxHQUFNLElBQUksQ0FBQyxPQUFPLGlDQUE4QixDQUFDO1FBRXpELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJO2FB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NE5iLHFCQUFDO0FBQUQsQ0EzTkEsQUEyTkMsSUFBQTtBQTNOWSxzQkFBYyxpQkEyTjFCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9wcm9qZWN0L3Byb2plY3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vLi4vcHJvamVjdC9wcm9qZWN0JztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZCB9IGZyb20gJy4uLy4uL3Byb2plY3QvZmlsZXVwbG9hZCc7XHJcblxyXG5pbXBvcnQge0Jhc2VVcmxTZXJ2aWNlfSBmcm9tICcuLi9iYXNldXJsL2Jhc2V1cmwuc2VydmljZSc7XHJcblxyXG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJzsgIC8vIGZvciBkZWJ1Z2dpbmdcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIHRoZSBOYW1lTGlzdCBzZXJ2aWNlIHdpdGggbWV0aG9kcyB0byByZWFkIG5hbWVzIGFuZCBhZGQgbmFtZXMuXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0U2VydmljZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgTmFtZUxpc3RTZXJ2aWNlIHdpdGggdGhlIGluamVjdGVkIEh0dHAuXHJcbiAgICogQHBhcmFtIHtIdHRwfSBodHRwIC0gVGhlIGluamVjdGVkIEh0dHAuXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgLy9wcml2YXRlIGJhc2VVcmw6IHN0cmluZyA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvVGFza01hbmFnZXJXUy9yZXN0L2F0dWx0ZXN0Lyc7XHJcbiAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmcgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL1Rhc2tNYW5hZ2VyV1MvcmVzdC90YXNrbWFuYWdlci8nO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cCA6IEh0dHAscHJpdmF0ZSBiYXNlVXJsc2VydmljZTpCYXNlVXJsU2VydmljZSl7XHJcbiAgICB0aGlzLmJhc2VVcmw9YmFzZVVybHNlcnZpY2UuZ2V0QmFzZXVybCgpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgZm9yIHRoZSBIVFRQIEdFVCByZXF1ZXN0IGZvciB0aGUgSlNPTiByZXNvdXJjZS5cclxuICAgKiBAcmV0dXJuIHtzdHJpbmdbXX0gVGhlIE9ic2VydmFibGUgZm9yIHRoZSBIVFRQIHJlcXVlc3QuXHJcbiAgICovXHJcbiAgZ2V0KCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXNzZXRzL2RhdGEuanNvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgIC8vICAgICAgICAgICAgICAuZG8oZGF0YSA9PiBjb25zb2xlLmxvZygnc2VydmVyIGRhdGE6JywgZGF0YSkpICAvLyBkZWJ1Z1xyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICB9XHJcblxyXG5cclxuICBpbnNlcnQoaW5wYXJhbTogUHJvamVjdCxmaWxlVXBsb2FkOkZpbGVVcGxvYWRbXSk6IE9ic2VydmFibGU8UHJvamVjdFtdPntcclxuICAgIC8vSGVhZGVyIGRlY2xhcmF0aW9uXHJcbiAgICBsZXQgaGVhZGVyczEgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVyczEuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICAvL0JvZHkgcGFyYW1zXHJcbiAgICB2YXIgYm9keTEgPSBgaW5wdXQ9JHtKU09OLnN0cmluZ2lmeSggaW5wYXJhbSl9JmZpbGV1cGxvYWQ9JHtKU09OLnN0cmluZ2lmeSggZmlsZVVwbG9hZCl9YDtcclxuICAgIC8vIFVSTCBkZWNsYXJhdGlvblxyXG4gICAgdmFyIHVybDIgPSBgJHt0aGlzLmJhc2VVcmx9V1NfdGJsX3Byb2plY3RfbWFzdGVyX2NyZWF0ZWA7Ly9pbnNlcnRNaWxlc3RvbmVzUHJvamVjdGA7XHJcbiAgICBcclxuICAgIGxldCBjb21wbGFpbnRzMSQgPSB0aGlzLmh0dHBcclxuICAgICAgLnBvc3QodXJsMiAsIGJvZHkxICx7aGVhZGVyczogaGVhZGVyczF9KSAvLyBQb3N0IFVSTCBhbmQgaGVhZGVyXHJcbiAgICAgIC5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSkgLy8gTWFwcGluZyByZXNwb25zZSB0byByZXR1cm4gdmFyaWFibGVcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpOyAvLyBFcnJvciBoYW5kbGVyXHJcbiAgICAgIC8vYWxlcnQoXCJnZXREaXNwbGF5QWxsMiBhZnRlclwiKTtcclxuICAgICAgcmV0dXJuIGNvbXBsYWludHMxJDsgXHJcbiAgfVxyXG5cclxuICAvLyBVcGRhdGUgb2xkIGVudHJ5XHJcbiAgdXBkYXRlKGlucGFyYW06IFByb2plY3QsZmlsZVVwbG9hZDpGaWxlVXBsb2FkW10pOiBPYnNlcnZhYmxlPFByb2plY3RbXT57XHJcbiAgICBcclxuICAgICAvL0hlYWRlciBkZWNsYXJhdGlvblxyXG4gICAgbGV0IGhlYWRlcnMxID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMxLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICAgLy9Cb2R5IHBhcmFtc1xyXG4gICAgdmFyIGJvZHkxID0gYGlucHV0PSR7SlNPTi5zdHJpbmdpZnkoIGlucGFyYW0pfSZmaWxldXBsb2FkPSR7SlNPTi5zdHJpbmdpZnkoIGZpbGVVcGxvYWQpfWA7XHJcbiAgICAvLyBVUkwgZGVjbGFyYXRpb25cclxuICAgIHZhciB1cmwyID0gYCR7dGhpcy5iYXNlVXJsfVdTX3RibF9wcm9qZWN0X21hc3Rlcl91cGRhdGVgOy8vaW5zZXJ0TWlsZXN0b25lc1Byb2plY3RgO1xyXG4gICAgXHJcbiAgICAvL0NhbGwgV1NcclxuICAgIGxldCBjb21wbGFpbnRzMSQgPSB0aGlzLmh0dHBcclxuICAgICAgLnBvc3QodXJsMiAsIGJvZHkxICx7aGVhZGVyczogaGVhZGVyczF9KSAvLyBQb3N0IFVSTCBhbmQgaGVhZGVyXHJcbiAgICAgIC5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSkgLy8gTWFwcGluZyByZXNwb25zZSB0byByZXR1cm4gdmFyaWFibGVcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpOyAvLyBFcnJvciBoYW5kbGVyXHJcbiAgICAgIC8vYWxlcnQoXCJnZXREaXNwbGF5QWxsMiBhZnRlclwiKTtcclxuICAgICAgcmV0dXJuIGNvbXBsYWludHMxJDsgXHJcbiAgfVxyXG5cclxuLy8gb24gRWRpdCBnZXQgZmlsZXMgdXBsb2FkXHJcbiAgZ2V0c2VsZWN0QWxsZmlsZVByb2plY3QocGtpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxGaWxlVXBsb2FkW10+e1xyXG4gICAgXHJcbiAgICBsZXQgaGVhZGVyczEgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVyczEuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICBcclxuICAgIHZhciBib2R5MSA9IGBpbnB1dD0keyBwa2lkfWA7XHJcbiAgICBcclxuICAgIHZhciB1cmwyID0gYCR7dGhpcy5iYXNlVXJsfXNlbGVjdEFsbGZpbGV1cGxvYWRQcm9qZWN0YDtcclxuICAgIFxyXG4gICAgbGV0IGNvbXBsYWludHMxJCA9IHRoaXMuaHR0cFxyXG4gICAgICAucG9zdCh1cmwyICwgYm9keTEgLHtoZWFkZXJzOiBoZWFkZXJzMX0pXHJcbiAgICAgIC5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgICAvL2FsZXJ0KFwiZ2V0RGlzcGxheUFsbDIgYWZ0ZXJcIik7XHJcbiAgICAgIHJldHVybiBjb21wbGFpbnRzMSQ7IFxyXG4gIH1cclxuICBcclxuXHJcbiAgLy8gb24gRWRpdCBnZXQgZmlsZXMgdXBsb2FkXHJcbiAgZ2V0c2VsZWN0QWxsZmlsZXVwbG9hZE1pbGVzdG9uZShwa2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEZpbGVVcGxvYWRbXT57XHJcbiAgICBcclxuICAgIGxldCBoZWFkZXJzMSA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuICAgIFxyXG4gICAgdmFyIGJvZHkxID0gYGlucHV0PSR7IHBraWR9YDtcclxuICAgIFxyXG4gICAgdmFyIHVybDIgPSBgJHt0aGlzLmJhc2VVcmx9c2VsZWN0QWxsZmlsZXVwbG9hZE1pbGVzdG9uZWA7XHJcbiAgICBcclxuICAgIGxldCBjb21wbGFpbnRzMSQgPSB0aGlzLmh0dHBcclxuICAgICAgLnBvc3QodXJsMiAsIGJvZHkxICx7aGVhZGVyczogaGVhZGVyczF9KVxyXG4gICAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgICAgLy9hbGVydChcImdldERpc3BsYXlBbGwyIGFmdGVyXCIpO1xyXG4gICAgICByZXR1cm4gY29tcGxhaW50czEkOyBcclxuICB9XHJcblxyXG4gIC8vIE9uIEVkaXQgZ2V0IGRhdGFcclxuICBnZXRlZGl0KHBraWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UHJvamVjdD57XHJcbiAgIFxyXG4gICAgbGV0IGhlYWRlcnMxID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMxLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICBcclxuICAgIHZhciBib2R5MSA9IGBpbnB1dD0keyBwa2lkfWA7XHJcbiAgIFxyXG4gICAgdmFyIHVybDIgPSBgJHt0aGlzLmJhc2VVcmx9V1NfdGJsX3Byb2plY3RfbWFzdGVyX3NlbGVjdGVkaXRgOy8vc2VsZWN0RWRpdE1pbGVzdG9uZWA7XHJcbiAgICBcclxuICAgIGxldCBjb21wbGFpbnRzMSQgPSB0aGlzLmh0dHBcclxuICAgICAgLnBvc3QodXJsMiAsIGJvZHkxICx7aGVhZGVyczogaGVhZGVyczF9KVxyXG4gICAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgICAgLy9hbGVydChcImdldERpc3BsYXlBbGwyIGFmdGVyXCIpO1xyXG4gICAgICByZXR1cm4gY29tcGxhaW50czEkOyBcclxuICB9XHJcblxyXG4gIC8vIGdldCBhbGwgZm9yIEdyaWRcclxuICBnZXRhbGwoKTogT2JzZXJ2YWJsZTxQcm9qZWN0W10+e1xyXG4gICAgXHJcbiAgICBsZXQgaGVhZGVyczEgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVyczEuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICBcclxuICAgIHZhciBib2R5MSA9IGBpbnB1dD1hYmNgO1xyXG4gICAgXHJcbiAgICB2YXIgdXJsMiA9IGAke3RoaXMuYmFzZVVybH1XU190YmxfcHJvamVjdF9tYXN0ZXJfc2VsZWN0YWxsYDsvL3NlbGVjdEFsbE1pbGVzdG9uZWA7XHJcbiAgICBcclxuICAgIGxldCBjb21wbGFpbnRzMSQgPSB0aGlzLmh0dHBcclxuICAgICAgLnBvc3QodXJsMiAsIGJvZHkxICx7aGVhZGVyczogaGVhZGVyczF9KVxyXG4gICAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgICAgLy9hbGVydChcImdldERpc3BsYXlBbGwyIGFmdGVyXCIpO1xyXG4gICAgICByZXR1cm4gY29tcGxhaW50czEkOyBcclxuICB9XHJcblxyXG4gIC8vIHN1Ym1pdFVwbG9hZEFuZE90aGVycyh1cGxvYWRlZEZpbGVzOiBhbnlbXSk6T2JzZXJ2YWJsZTxhbnk+e1xyXG4gIC8vICAgbGV0IGhlYWRlcnMxID0gbmV3IEhlYWRlcnMoKTtcclxuICAvLyAgIGhlYWRlcnMxLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gIC8vICAgdmFyIGJvZHkxID0gYGZpbGV1cGxvYWRhcnJheT0ke0pTT04uc3RyaW5naWZ5KCB1cGxvYWRlZEZpbGVzKX1gO1xyXG4gIC8vICAgYWxlcnQoXCJib2R5XCIgKyBKU09OLnN0cmluZ2lmeSh1cGxvYWRlZEZpbGVzKSlcclxuICAvLyAgIHZhciB1cmwyID0gYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9UYXNrTWFuYWdlcldTL3Jlc3QvYXR1bHRlc3Qvc3VibWl0ZmlsZXVwbG9hZGA7XHJcbiAgICBcclxuXHJcbiAgLy8gICAvL3R5cGUgTXlUeXBlPXtpc3N1Y2Nlc3M6c3RyaW5nfTtcclxuXHJcbiAgLy8gICBsZXQgbXlyZXN1bHQ9dGhpcy5odHRwXHJcbiAgLy8gICAgIC5wb3N0KHVybDIsYm9keTEgICx7aGVhZGVyczogaGVhZGVyczF9KVxyXG4gIC8vICAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgLy8gICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAvLyAgIC8vIGFsZXJ0KFwiaGhcIitteXJlc3VsdC5pc3N1Y2Nlc3MpOyAgXHJcbiAgLy8gICBjb25zb2xlLmxvZyhcIk1pdGg6XCIsbXlyZXN1bHQpO1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJtaXRoMjpcIix1cGxvYWRlZEZpbGVzKTtcclxuICAvLyAgIHJldHVybiBteXJlc3VsdDsgIFxyXG4gIC8vIH1cclxuXHJcbiAgXHJcblxyXG4gIC8vIGdldERpc3BsYXlBbGwyKCk6IE9ic2VydmFibGU8TWlsZXN0b25lW10+e1xyXG4gIC8vICAgLy9hbGVydChcImdldERpc3BsYXlBbGwyIGJlZm9yZVwiKTtcclxuICAvLyAgIC8vIGxldCBjb21wbGFpbnRzMSQgPSB0aGlzLmh0dHBcclxuICAvLyAgIC8vICAgLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9BdHVsdGVzdC9yZXN0L2F0dWx0ZXN0L3NlbGVjdHRlc3RvbmU/ZW5yb2xsbm89ZXJgLCB7aGVhZGVyczogdGhpcy5nZXRIZWFkZXJzMigpfSlcclxuICAvLyAgIC8vICAgLm1hcCgocmVzOlJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4gIC8vICAgLy8gICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgLy8gICAvLyAgIC8vYWxlcnQoXCJnZXREaXNwbGF5QWxsMiBhZnRlclwiKTtcclxuICAvLyAgIC8vICAgcmV0dXJuIGNvbXBsYWludHMxJDsgXHJcblxyXG4gIC8vICAgbGV0IGhlYWRlcnMxID0gbmV3IEhlYWRlcnMoKTtcclxuICAvLyAgIGhlYWRlcnMxLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gIC8vICAgLy9oZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyApO1xyXG4gIC8vICAgLy9oZWFkZXJzMS5hcHBlbmQoJ2lucHV0JywgSlNPTi5zdHJpbmdpZnkoIGlucGFyYW0pKTtcclxuICAvLyAgIC8vdmFyIGJvZHkxID0gYGlucHV0PSR7SlNPTi5zdHJpbmdpZnkoIGlucGFyYW0pfWA7XHJcbiAgLy8gICAvL2NvbnNvbGUubG9nKGJvZHkxKTtcclxuICAvLyAgIC8vdmFyIHVybDIgPSBgaHR0cDovL2xvY2FsaG9zdDo4MDgwL0F0dWx0ZXN0L3Jlc3QvYXR1bHRlc3QvaW5zZXJ0VGVzdG9uZT9gICsgYm9keTE7XHJcbiAgLy8gICB2YXIgdXJsMiA9IGBodHRwOi8vbG9jYWxob3N0OjgwODAvVGFza01hbmFnZXJXUy9yZXN0L2F0dWx0ZXN0L2RycHByb2plY3RgO1xyXG4gIC8vICAgY29uc29sZS5sb2codXJsMik7XHJcbiAgLy8gICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgLy8gICAgIC5wb3N0KHVybDIgICx7aGVhZGVyczogaGVhZGVyczF9KVxyXG4gIC8vICAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgLy8gICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAvLyAgICAgLy9hbGVydChcImdldERpc3BsYXlBbGwyIGFmdGVyXCIpO1xyXG4gIC8vICAgICByZXR1cm4gY29tcGxhaW50czEkOyBcclxuXHJcbiAgLy8gfVxyXG4gXHJcbiAgLy8gcG9wdXBsYXRlIGRyb3Bkb3duXHJcblxyXG5cclxuICAgcHJpdmF0ZSBnZXRIZWFkZXJzKCl7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgIHJldHVybiBoZWFkZXJzO1xyXG4gIH1cclxuICBwcml2YXRlIGdldEhlYWRlcnMyKCl7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyB9KTsgIFxyXG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG4gIHByaXZhdGUgZ2V0SGVhZGVyc1VybGVuY29kZSgpe1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9KTsgIFxyXG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG4gIHByaXZhdGUgZ2V0SGVhZGVyc1VybGVuY29kZVV0ZjgoKXtcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOCcgfSk7ICBcclxuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEhhbmRsZSBIVFRQIGVycm9yXHJcbiAgICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IgKGVycm9yOiBhbnkpIHtcclxuICAgIC8vIEluIGEgcmVhbCB3b3JsZCBhcHAsIHdlIG1pZ2h0IHVzZSBhIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXHJcbiAgICAvLyBXZSdkIGFsc28gZGlnIGRlZXBlciBpbnRvIHRoZSBlcnJvciB0byBnZXQgYSBiZXR0ZXIgbWVzc2FnZVxyXG4gICAgbGV0IGVyck1zZyA9IChlcnJvci5tZXNzYWdlKSA/IGVycm9yLm1lc3NhZ2UgOlxyXG4gICAgICBlcnJvci5zdGF0dXMgPyBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0fWAgOiAnU2VydmVyIGVycm9yJztcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTsgLy8gbG9nIHRvIGNvbnNvbGUgaW5zdGVhZFxyXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==
