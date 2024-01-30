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
var CommonsettingsService = (function () {
    function CommonsettingsService(http, baseUrlservice) {
        this.http = http;
        this.baseUrlservice = baseUrlservice;
        this.baseUrl = 'http://localhost:8080/TaskManagerWS/rest/taskmanager/';
        this.baseUrl = baseUrlservice.getBaseurl();
    }
    CommonsettingsService.prototype.get = function () {
        return this.http.get('/assets/data.json')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CommonsettingsService.prototype.insert = function (inparam, fileUpload) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "input=" + JSON.stringify(inparam) + "&fileupload=" + JSON.stringify(fileUpload);
        var url2 = this.baseUrl + "WS_tbl_commonsettings_master_create";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    CommonsettingsService.prototype.update = function (inparam, fileUpload) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "input=" + JSON.stringify(inparam) + "&fileupload=" + JSON.stringify(fileUpload);
        var url2 = this.baseUrl + "WS_tbl_commonsettings_master_update";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    CommonsettingsService.prototype.getselectAllfileCommonsettings = function (pkid) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "input=" + pkid;
        var url2 = this.baseUrl + "selectAllfileuploadCommonsettings";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    CommonsettingsService.prototype.getselectAllfileuploadMilestone = function (pkid) {
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
    CommonsettingsService.prototype.getedit = function (pkid) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "input=" + pkid;
        var url2 = this.baseUrl + "WS_tbl_commonsettings_master_selectedit";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    CommonsettingsService.prototype.getall = function () {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "input=abc";
        var url2 = this.baseUrl + "WS_tbl_commonsettings_master_selectall";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    CommonsettingsService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    CommonsettingsService.prototype.getHeaders2 = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    CommonsettingsService.prototype.getHeadersUrlencode = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    CommonsettingsService.prototype.getHeadersUrlencodeUtf8 = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    CommonsettingsService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    CommonsettingsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, baseurl_service_1.BaseUrlService])
    ], CommonsettingsService);
    return CommonsettingsService;
}());
exports.CommonsettingsService = CommonsettingsService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tbW9uc2V0dGluZ3MvY29tbW9uc2V0dGluZ3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUF3RCxlQUFlLENBQUMsQ0FBQTtBQUN4RSwyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUc3QyxnQ0FBNkIsNEJBQTRCLENBQUMsQ0FBQTtBQVExRDtJQVVFLCtCQUFvQixJQUFXLEVBQVMsY0FBNkI7UUFBakQsU0FBSSxHQUFKLElBQUksQ0FBTztRQUFTLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBRjdELFlBQU8sR0FBVyx1REFBdUQsQ0FBQztRQUdoRixJQUFJLENBQUMsT0FBTyxHQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBS0QsbUNBQUcsR0FBSDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQzthQUN4QixHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBRWxDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUdELHNDQUFNLEdBQU4sVUFBTyxPQUF1QixFQUFDLFVBQXVCO1FBRXBELElBQUksUUFBUSxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDN0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQUVyRSxJQUFJLEtBQUssR0FBRyxXQUFTLElBQUksQ0FBQyxTQUFTLENBQUUsT0FBTyxDQUFDLG9CQUFlLElBQUksQ0FBQyxTQUFTLENBQUUsVUFBVSxDQUFHLENBQUM7UUFFMUYsSUFBSSxJQUFJLEdBQU0sSUFBSSxDQUFDLE9BQU8sd0NBQXFDLENBQUM7UUFFaEUsSUFBSSxZQUFZLEdBQUcsSUFB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RUFBRTs7NkJBQUE7SUE2T2IsNEJBQUM7QUFBRCxDQTVPQSxBQTRPQyxJQUFBO0FBNU9ZLDZCQUFxQix3QkE0T2pDLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb21tb25zZXR0aW5ncy9jb21tb25zZXR0aW5ncy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IENvbW1vbnNldHRpbmdzIH0gZnJvbSAnLi4vLi4vY29tbW9uc2V0dGluZ3MvY29tbW9uc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkIH0gZnJvbSAnLi4vLi4vY29tbW9uc2V0dGluZ3MvZmlsZXVwbG9hZCc7XHJcbmltcG9ydCB7QmFzZVVybFNlcnZpY2V9IGZyb20gJy4uL2Jhc2V1cmwvYmFzZXVybC5zZXJ2aWNlJztcclxuXHJcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nOyAgLy8gZm9yIGRlYnVnZ2luZ1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgdGhlIE5hbWVMaXN0IHNlcnZpY2Ugd2l0aCBtZXRob2RzIHRvIHJlYWQgbmFtZXMgYW5kIGFkZCBuYW1lcy5cclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbW1vbnNldHRpbmdzU2VydmljZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgTmFtZUxpc3RTZXJ2aWNlIHdpdGggdGhlIGluamVjdGVkIEh0dHAuXHJcbiAgICogQHBhcmFtIHtIdHRwfSBodHRwIC0gVGhlIGluamVjdGVkIEh0dHAuXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgLy9wcml2YXRlIGJhc2VVcmw6IHN0cmluZyA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvVGFza01hbmFnZXJXUy9yZXN0L2F0dWx0ZXN0Lyc7XHJcbiAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmcgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL1Rhc2tNYW5hZ2VyV1MvcmVzdC90YXNrbWFuYWdlci8nO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cCA6IEh0dHAscHJpdmF0ZSBiYXNlVXJsc2VydmljZTpCYXNlVXJsU2VydmljZSl7XHJcbiAgICB0aGlzLmJhc2VVcmw9YmFzZVVybHNlcnZpY2UuZ2V0QmFzZXVybCgpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgZm9yIHRoZSBIVFRQIEdFVCByZXF1ZXN0IGZvciB0aGUgSlNPTiByZXNvdXJjZS5cclxuICAgKiBAcmV0dXJuIHtzdHJpbmdbXX0gVGhlIE9ic2VydmFibGUgZm9yIHRoZSBIVFRQIHJlcXVlc3QuXHJcbiAgICovXHJcbiAgZ2V0KCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXNzZXRzL2RhdGEuanNvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgIC8vICAgICAgICAgICAgICAuZG8oZGF0YSA9PiBjb25zb2xlLmxvZygnc2VydmVyIGRhdGE6JywgZGF0YSkpICAvLyBkZWJ1Z1xyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICB9XHJcblxyXG5cclxuICBpbnNlcnQoaW5wYXJhbTogQ29tbW9uc2V0dGluZ3MsZmlsZVVwbG9hZDpGaWxlVXBsb2FkW10pOiBPYnNlcnZhYmxlPENvbW1vbnNldHRpbmdzW10+e1xyXG4gICAgLy9IZWFkZXIgZGVjbGFyYXRpb25cclxuICAgIGxldCBoZWFkZXJzMSA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuICAgIC8vQm9keSBwYXJhbXNcclxuICAgIHZhciBib2R5MSA9IGBpbnB1dD0ke0pTT04uc3RyaW5naWZ5KCBpbnBhcmFtKX0mZmlsZXVwbG9hZD0ke0pTT04uc3RyaW5naWZ5KCBmaWxlVXBsb2FkKX1gO1xyXG4gICAgLy8gVVJMIGRlY2xhcmF0aW9uXHJcbiAgICB2YXIgdXJsMiA9IGAke3RoaXMuYmFzZVVybH1XU190YmxfY29tbW9uc2V0dGluZ3NfbWFzdGVyX2NyZWF0ZWA7Ly9pbnNlcnRNaWxlc3RvbmVzQ29tbW9uc2V0dGluZ3NgO1xyXG4gICAgXHJcbiAgICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KHVybDIgLCBib2R5MSAse2hlYWRlcnM6IGhlYWRlcnMxfSkgLy8gUG9zdCBVUkwgYW5kIGhlYWRlclxyXG4gICAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpIC8vIE1hcHBpbmcgcmVzcG9uc2UgdG8gcmV0dXJuIHZhcmlhYmxlXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTsgLy8gRXJyb3IgaGFuZGxlclxyXG4gICAgICAvL2FsZXJ0KFwiZ2V0RGlzcGxheUFsbDIgYWZ0ZXJcIik7XHJcbiAgICAgIHJldHVybiBjb21wbGFpbnRzMSQ7IFxyXG4gIH1cclxuXHJcbiAgLy8gVXBkYXRlIG9sZCBlbnRyeVxyXG4gIHVwZGF0ZShpbnBhcmFtOiBDb21tb25zZXR0aW5ncyxmaWxlVXBsb2FkOkZpbGVVcGxvYWRbXSk6IE9ic2VydmFibGU8Q29tbW9uc2V0dGluZ3NbXT57XHJcbiAgICBcclxuICAgICAvL0hlYWRlciBkZWNsYXJhdGlvblxyXG4gICAgbGV0IGhlYWRlcnMxID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMxLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICAgLy9Cb2R5IHBhcmFtc1xyXG4gICAgdmFyIGJvZHkxID0gYGlucHV0PSR7SlNPTi5zdHJpbmdpZnkoIGlucGFyYW0pfSZmaWxldXBsb2FkPSR7SlNPTi5zdHJpbmdpZnkoIGZpbGVVcGxvYWQpfWA7XHJcbiAgICAvLyBVUkwgZGVjbGFyYXRpb25cclxuICAgIHZhciB1cmwyID0gYCR7dGhpcy5iYXNlVXJsfVdTX3RibF9jb21tb25zZXR0aW5nc19tYXN0ZXJfdXBkYXRlYDsvL2luc2VydE1pbGVzdG9uZXNDb21tb25zZXR0aW5nc2A7XHJcbiAgICBcclxuICAgIC8vQ2FsbCBXU1xyXG4gICAgbGV0IGNvbXBsYWludHMxJCA9IHRoaXMuaHR0cFxyXG4gICAgICAucG9zdCh1cmwyICwgYm9keTEgLHtoZWFkZXJzOiBoZWFkZXJzMX0pIC8vIFBvc3QgVVJMIGFuZCBoZWFkZXJcclxuICAgICAgLm1hcCgocmVzOlJlc3BvbnNlKSA9PiByZXMuanNvbigpKSAvLyBNYXBwaW5nIHJlc3BvbnNlIHRvIHJldHVybiB2YXJpYWJsZVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7IC8vIEVycm9yIGhhbmRsZXJcclxuICAgICAgLy9hbGVydChcImdldERpc3BsYXlBbGwyIGFmdGVyXCIpO1xyXG4gICAgICByZXR1cm4gY29tcGxhaW50czEkOyBcclxuICB9XHJcblxyXG4vLyBvbiBFZGl0IGdldCBmaWxlcyB1cGxvYWRcclxuICBnZXRzZWxlY3RBbGxmaWxlQ29tbW9uc2V0dGluZ3MocGtpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxGaWxlVXBsb2FkW10+e1xyXG4gICAgXHJcbiAgICBsZXQgaGVhZGVyczEgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVyczEuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICBcclxuICAgIHZhciBib2R5MSA9IGBpbnB1dD0keyBwa2lkfWA7XHJcbiAgICBcclxuICAgIHZhciB1cmwyID0gYCR7dGhpcy5iYXNlVXJsfXNlbGVjdEFsbGZpbGV1cGxvYWRDb21tb25zZXR0aW5nc2A7XHJcbiAgICBcclxuICAgIGxldCBjb21wbGFpbnRzMSQgPSB0aGlzLmh0dHBcclxuICAgICAgLnBvc3QodXJsMiAsIGJvZHkxICx7aGVhZGVyczogaGVhZGVyczF9KVxyXG4gICAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgICAgLy9hbGVydChcImdldERpc3BsYXlBbGwyIGFmdGVyXCIpO1xyXG4gICAgICByZXR1cm4gY29tcGxhaW50czEkOyBcclxuICB9XHJcbiAgXHJcblxyXG4gIC8vIG9uIEVkaXQgZ2V0IGZpbGVzIHVwbG9hZFxyXG4gIGdldHNlbGVjdEFsbGZpbGV1cGxvYWRNaWxlc3RvbmUocGtpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxGaWxlVXBsb2FkW10+e1xyXG4gICAgXHJcbiAgICBsZXQgaGVhZGVyczEgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVyczEuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICBcclxuICAgIHZhciBib2R5MSA9IGBpbnB1dD0keyBwa2lkfWA7XHJcbiAgICBcclxuICAgIHZhciB1cmwyID0gYCR7dGhpcy5iYXNlVXJsfXNlbGVjdEFsbGZpbGV1cGxvYWRNaWxlc3RvbmVgO1xyXG4gICAgXHJcbiAgICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KHVybDIgLCBib2R5MSAse2hlYWRlcnM6IGhlYWRlcnMxfSlcclxuICAgICAgLm1hcCgocmVzOlJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICAgIC8vYWxlcnQoXCJnZXREaXNwbGF5QWxsMiBhZnRlclwiKTtcclxuICAgICAgcmV0dXJuIGNvbXBsYWludHMxJDsgXHJcbiAgfVxyXG5cclxuICAvLyBPbiBFZGl0IGdldCBkYXRhXHJcbiAgZ2V0ZWRpdChwa2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvbW1vbnNldHRpbmdzPntcclxuICAgXHJcbiAgICBsZXQgaGVhZGVyczEgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVyczEuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgIFxyXG4gICAgdmFyIGJvZHkxID0gYGlucHV0PSR7IHBraWR9YDtcclxuICAgXHJcbiAgICB2YXIgdXJsMiA9IGAke3RoaXMuYmFzZVVybH1XU190YmxfY29tbW9uc2V0dGluZ3NfbWFzdGVyX3NlbGVjdGVkaXRgOy8vc2VsZWN0RWRpdE1pbGVzdG9uZWA7XHJcbiAgICBcclxuICAgIGxldCBjb21wbGFpbnRzMSQgPSB0aGlzLmh0dHBcclxuICAgICAgLnBvc3QodXJsMiAsIGJvZHkxICx7aGVhZGVyczogaGVhZGVyczF9KVxyXG4gICAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgICAgLy9hbGVydChcImdldERpc3BsYXlBbGwyIGFmdGVyXCIpO1xyXG4gICAgICByZXR1cm4gY29tcGxhaW50czEkOyBcclxuICB9XHJcblxyXG4gIC8vIGdldCBhbGwgZm9yIEdyaWRcclxuICBnZXRhbGwoKTogT2JzZXJ2YWJsZTxDb21tb25zZXR0aW5nc1tdPntcclxuICAgIFxyXG4gICAgbGV0IGhlYWRlcnMxID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMxLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICAgXHJcbiAgICB2YXIgYm9keTEgPSBgaW5wdXQ9YWJjYDtcclxuICAgIFxyXG4gICAgdmFyIHVybDIgPSBgJHt0aGlzLmJhc2VVcmx9V1NfdGJsX2NvbW1vbnNldHRpbmdzX21hc3Rlcl9zZWxlY3RhbGxgOy8vc2VsZWN0QWxsTWlsZXN0b25lYDtcclxuICAgIFxyXG4gICAgbGV0IGNvbXBsYWludHMxJCA9IHRoaXMuaHR0cFxyXG4gICAgICAucG9zdCh1cmwyICwgYm9keTEgLHtoZWFkZXJzOiBoZWFkZXJzMX0pXHJcbiAgICAgIC5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgICAvL2FsZXJ0KFwiZ2V0RGlzcGxheUFsbDIgYWZ0ZXJcIik7XHJcbiAgICAgIHJldHVybiBjb21wbGFpbnRzMSQ7IFxyXG4gIH1cclxuXHJcbiAgLy8gc3VibWl0VXBsb2FkQW5kT3RoZXJzKHVwbG9hZGVkRmlsZXM6IGFueVtdKTpPYnNlcnZhYmxlPGFueT57XHJcbiAgLy8gICBsZXQgaGVhZGVyczEgPSBuZXcgSGVhZGVycygpO1xyXG4gIC8vICAgaGVhZGVyczEuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgLy8gICB2YXIgYm9keTEgPSBgZmlsZXVwbG9hZGFycmF5PSR7SlNPTi5zdHJpbmdpZnkoIHVwbG9hZGVkRmlsZXMpfWA7XHJcbiAgLy8gICBhbGVydChcImJvZHlcIiArIEpTT04uc3RyaW5naWZ5KHVwbG9hZGVkRmlsZXMpKVxyXG4gIC8vICAgdmFyIHVybDIgPSBgaHR0cDovL2xvY2FsaG9zdDo4MDgwL1Rhc2tNYW5hZ2VyV1MvcmVzdC9hdHVsdGVzdC9zdWJtaXRmaWxldXBsb2FkYDtcclxuICAgIFxyXG5cclxuICAvLyAgIC8vdHlwZSBNeVR5cGU9e2lzc3VjY2VzczpzdHJpbmd9O1xyXG5cclxuICAvLyAgIGxldCBteXJlc3VsdD10aGlzLmh0dHBcclxuICAvLyAgICAgLnBvc3QodXJsMixib2R5MSAgLHtoZWFkZXJzOiBoZWFkZXJzMX0pXHJcbiAgLy8gICAgIC5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAvLyAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gIC8vICAgLy8gYWxlcnQoXCJoaFwiK215cmVzdWx0Lmlzc3VjY2Vzcyk7ICBcclxuICAvLyAgIGNvbnNvbGUubG9nKFwiTWl0aDpcIixteXJlc3VsdCk7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhcIm1pdGgyOlwiLHVwbG9hZGVkRmlsZXMpO1xyXG4gIC8vICAgcmV0dXJuIG15cmVzdWx0OyAgXHJcbiAgLy8gfVxyXG5cclxuICBcclxuXHJcbiAgLy8gZ2V0RGlzcGxheUFsbDIoKTogT2JzZXJ2YWJsZTxNaWxlc3RvbmVbXT57XHJcbiAgLy8gICAvL2FsZXJ0KFwiZ2V0RGlzcGxheUFsbDIgYmVmb3JlXCIpO1xyXG4gIC8vICAgLy8gbGV0IGNvbXBsYWludHMxJCA9IHRoaXMuaHR0cFxyXG4gIC8vICAgLy8gICAucG9zdChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL0F0dWx0ZXN0L3Jlc3QvYXR1bHRlc3Qvc2VsZWN0dGVzdG9uZT9lbnJvbGxubz1lcmAsIHtoZWFkZXJzOiB0aGlzLmdldEhlYWRlcnMyKCl9KVxyXG4gIC8vICAgLy8gICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgLy8gICAvLyAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAvLyAgIC8vICAgLy9hbGVydChcImdldERpc3BsYXlBbGwyIGFmdGVyXCIpO1xyXG4gIC8vICAgLy8gICByZXR1cm4gY29tcGxhaW50czEkOyBcclxuXHJcbiAgLy8gICBsZXQgaGVhZGVyczEgPSBuZXcgSGVhZGVycygpO1xyXG4gIC8vICAgaGVhZGVyczEuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgLy8gICAvL2hlYWRlcnMxLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nICk7XHJcbiAgLy8gICAvL2hlYWRlcnMxLmFwcGVuZCgnaW5wdXQnLCBKU09OLnN0cmluZ2lmeSggaW5wYXJhbSkpO1xyXG4gIC8vICAgLy92YXIgYm9keTEgPSBgaW5wdXQ9JHtKU09OLnN0cmluZ2lmeSggaW5wYXJhbSl9YDtcclxuICAvLyAgIC8vY29uc29sZS5sb2coYm9keTEpO1xyXG4gIC8vICAgLy92YXIgdXJsMiA9IGBodHRwOi8vbG9jYWxob3N0OjgwODAvQXR1bHRlc3QvcmVzdC9hdHVsdGVzdC9pbnNlcnRUZXN0b25lP2AgKyBib2R5MTtcclxuICAvLyAgIHZhciB1cmwyID0gYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9UYXNrTWFuYWdlcldTL3Jlc3QvYXR1bHRlc3QvZHJwY29tbW9uc2V0dGluZ3NgO1xyXG4gIC8vICAgY29uc29sZS5sb2codXJsMik7XHJcbiAgLy8gICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgLy8gICAgIC5wb3N0KHVybDIgICx7aGVhZGVyczogaGVhZGVyczF9KVxyXG4gIC8vICAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgLy8gICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAvLyAgICAgLy9hbGVydChcImdldERpc3BsYXlBbGwyIGFmdGVyXCIpO1xyXG4gIC8vICAgICByZXR1cm4gY29tcGxhaW50czEkOyBcclxuXHJcbiAgLy8gfVxyXG4gXHJcbiAgLy8gcG9wdXBsYXRlIGRyb3Bkb3duXHJcbiAgLy8gZ2V0Y29tbW9uc2V0dGluZ3NkcnAoKTogT2JzZXJ2YWJsZTxEcm9wZG93bjFbXT57XHJcbiAgIFxyXG4gIC8vICAgbGV0IGhlYWRlcnMxID0gbmV3IEhlYWRlcnMoKTtcclxuICAvLyAgIGhlYWRlcnMxLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICBcclxuICAvLyAgIHZhciBib2R5MSA9IGBpbnB1dD1tYDtcclxuICBcclxuICAvLyAgIHZhciB1cmwyID0gYCR7dGhpcy5iYXNlVXJsfWRycGNvbW1vbnNldHRpbmdzYDtcclxuICAgXHJcbiAgLy8gICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgLy8gICAgIC5wb3N0KHVybDIgLGJvZHkxICx7aGVhZGVyczogaGVhZGVyczF9KVxyXG4gIC8vICAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgLy8gICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gIC8vICAgICByZXR1cm4gY29tcGxhaW50czEkOyBcclxuXHJcbiAgLy8gfVxyXG5cclxuICAgcHJpdmF0ZSBnZXRIZWFkZXJzKCl7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgIHJldHVybiBoZWFkZXJzO1xyXG4gIH1cclxuICBwcml2YXRlIGdldEhlYWRlcnMyKCl7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyB9KTsgIFxyXG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG4gIHByaXZhdGUgZ2V0SGVhZGVyc1VybGVuY29kZSgpe1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9KTsgIFxyXG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG4gIHByaXZhdGUgZ2V0SGVhZGVyc1VybGVuY29kZVV0ZjgoKXtcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOCcgfSk7ICBcclxuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEhhbmRsZSBIVFRQIGVycm9yXHJcbiAgICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IgKGVycm9yOiBhbnkpIHtcclxuICAgIC8vIEluIGEgcmVhbCB3b3JsZCBhcHAsIHdlIG1pZ2h0IHVzZSBhIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXHJcbiAgICAvLyBXZSdkIGFsc28gZGlnIGRlZXBlciBpbnRvIHRoZSBlcnJvciB0byBnZXQgYSBiZXR0ZXIgbWVzc2FnZVxyXG4gICAgbGV0IGVyck1zZyA9IChlcnJvci5tZXNzYWdlKSA/IGVycm9yLm1lc3NhZ2UgOlxyXG4gICAgICBlcnJvci5zdGF0dXMgPyBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0fWAgOiAnU2VydmVyIGVycm9yJztcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTsgLy8gbG9nIHRvIGNvbnNvbGUgaW5zdGVhZFxyXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==
