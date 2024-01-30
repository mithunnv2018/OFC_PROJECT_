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
var BaseUrlService = (function () {
    function BaseUrlService(http) {
        this.http = http;
        this.basehost = 'http://www.fasttechinfo.biz:8080/';
        this.baseUrl = this.basehost + 'OFCAdmin/rest/';
        this.filedownloadedpath = this.basehost + 'OFCAdminFiles/real/';
    }
    BaseUrlService.prototype.get = function () {
        return this.http.get('/assets/data.json')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    BaseUrlService.prototype.getBaseurl = function () {
        return this.baseUrl;
    };
    BaseUrlService.prototype.getBaseurlfiledownloadepath = function () {
        return this.filedownloadedpath;
    };
    BaseUrlService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    BaseUrlService.prototype.getHeaders2 = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    BaseUrlService.prototype.getHeadersUrlencode = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    BaseUrlService.prototype.getHeadersUrlencodeUtf8 = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    BaseUrlService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    BaseUrlService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BaseUrlService);
    return BaseUrlService;
}());
exports.BaseUrlService = BaseUrlService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYmFzZXVybC9iYXNldXJsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBd0QsZUFBZSxDQUFDLENBQUE7QUFDeEUsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFRN0M7SUFnQkUsd0JBQW9CLElBQVc7UUFBWCxTQUFJLEdBQUosSUFBSSxDQUFPO1FBTHhCLGFBQVEsR0FBVyxtQ0FBbUMsQ0FBQztRQUN0RCxZQUFPLEdBQVcsSUFBSSxDQUFDLFFBQVEsR0FBQyxnQkFBZ0IsQ0FBQztRQUVqRCx1QkFBa0IsR0FBUSxJQUFJLENBQUMsUUFBUSxHQUFDLHFCQUFxQixDQUFDO0lBSXRFLENBQUM7SUFLRCw0QkFBRyxHQUFIO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO2FBQ3hCLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFFbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBSUQsbUNBQVUsR0FBVjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFHRCxvREFBMkIsR0FBM0I7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7SUFPUSxtQ0FBVSxHQUFsQjtRQUNDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFDTyxvQ0FBVyxHQUFuQjtRQUNFLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGlDQUFpQyxFQUFFLENBQUMsQ0FBQztRQUNqRixJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFDTyw0Q0FBbUIsR0FBM0I7UUFDRSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxtQ0FBbUMsRUFBRSxDQUFDLENBQUM7UUFDbkYsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBQ08sZ0RBQXVCLEdBQS9CO1FBQ0UsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsa0RBQWtELEVBQUUsQ0FBQyxDQUFDO1FBQ2xHLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUtPLG9DQUFXLEdBQW5CLFVBQXFCLEtBQVU7UUFHN0IsSUFBSSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU87WUFDMUMsS0FBSyxDQUFDLE1BQU0sR0FBTSxLQUFLLENBQUMsTUFBTSxXQUFNLEtBQUssQ0FBQyxVQUFZLEdBQUcsY0FBYyxDQUFDO1FBQzFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUE5RUg7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQStFYixxQkFBQztBQUFELENBOUVBLEFBOEVDLElBQUE7QUE5RVksc0JBQWMsaUJBOEUxQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvYmFzZXVybC9iYXNldXJsLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nOyAgLy8gZm9yIGRlYnVnZ2luZ1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgdGhlIE5hbWVMaXN0IHNlcnZpY2Ugd2l0aCBtZXRob2RzIHRvIHJlYWQgbmFtZXMgYW5kIGFkZCBuYW1lcy5cclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJhc2VVcmxTZXJ2aWNlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBOYW1lTGlzdFNlcnZpY2Ugd2l0aCB0aGUgaW5qZWN0ZWQgSHR0cC5cclxuICAgKiBAcGFyYW0ge0h0dHB9IGh0dHAgLSBUaGUgaW5qZWN0ZWQgSHR0cC5cclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICAvLyBwcml2YXRlIGJhc2VVcmw6IHN0cmluZyA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvVGFza01hbmFnZXJXUy9yZXN0L3Rhc2ttYW5hZ2VyLyc7XHJcbiAgLy8gcHJpdmF0ZSBiYXNlaG9zdDogc3RyaW5nID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8nO1xyXG4gICAgLy8gcHJpdmF0ZSBiYXNlaG9zdDpzdHJpbmc9J2h0dHA6Ly8xOTIuMTY4LjAuNTc6ODA4MS8nO1xyXG4vLyAgcHJpdmF0ZSBiYXNlaG9zdDogc3RyaW5nID0gJ2h0dHA6Ly93d3cub2xsb21hbGwuY246ODA4MC8nO1xyXG4gcHJpdmF0ZSBiYXNlaG9zdDogc3RyaW5nID0gJ2h0dHA6Ly93d3cuZmFzdHRlY2hpbmZvLmJpejo4MDgwLyc7XHJcbiAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmcgPSB0aGlzLmJhc2Vob3N0KydPRkNBZG1pbi9yZXN0Lyc7XHJcbiAgLy8gcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmcgPSAnaHR0cDovL3d3dy5vbGxvbWFsbC5jbjo4MDgwL09GQ0FkbWluL3Jlc3QvJztcclxuICBwcml2YXRlIGZpbGVkb3dubG9hZGVkcGF0aDpzdHJpbmc9dGhpcy5iYXNlaG9zdCsnT0ZDQWRtaW5GaWxlcy9yZWFsLyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cCA6IEh0dHApe1xyXG5cclxuICB9XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIGZvciB0aGUgSFRUUCBHRVQgcmVxdWVzdCBmb3IgdGhlIEpTT04gcmVzb3VyY2UuXHJcbiAgICogQHJldHVybiB7c3RyaW5nW119IFRoZSBPYnNlcnZhYmxlIGZvciB0aGUgSFRUUCByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIGdldCgpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL2Fzc2V0cy9kYXRhLmpzb24nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAvLyAgICAgICAgICAgICAgLmRvKGRhdGEgPT4gY29uc29sZS5sb2coJ3NlcnZlciBkYXRhOicsIGRhdGEpKSAgLy8gZGVidWdcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgfVxyXG5cclxuXHJcbiBcclxuICBnZXRCYXNldXJsKCk6c3RyaW5ne1xyXG4gICAgcmV0dXJuIHRoaXMuYmFzZVVybDtcclxuICB9XHJcblxyXG4gIC8vYXMgZG9uZSBvbiAzMSBqYW4gMjAxNyBieSBNYW5kYXIgZm9yIHBvcHVsYXIgc2VydmljZXMgdG8gZ2V0IGltYWdlc1xyXG4gIGdldEJhc2V1cmxmaWxlZG93bmxvYWRlcGF0aCgpOnN0cmluZ3tcclxuICAgIHJldHVybiB0aGlzLmZpbGVkb3dubG9hZGVkcGF0aDtcclxuICB9XHJcblxyXG4gXHJcbiAgIFxyXG4gIFxyXG5cclxuICBcclxuICAgcHJpdmF0ZSBnZXRIZWFkZXJzKCl7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgIHJldHVybiBoZWFkZXJzO1xyXG4gIH1cclxuICBwcml2YXRlIGdldEhlYWRlcnMyKCl7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyB9KTsgIFxyXG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG4gIHByaXZhdGUgZ2V0SGVhZGVyc1VybGVuY29kZSgpe1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9KTsgIFxyXG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG4gIHByaXZhdGUgZ2V0SGVhZGVyc1VybGVuY29kZVV0ZjgoKXtcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOCcgfSk7ICBcclxuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEhhbmRsZSBIVFRQIGVycm9yXHJcbiAgICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IgKGVycm9yOiBhbnkpIHtcclxuICAgIC8vIEluIGEgcmVhbCB3b3JsZCBhcHAsIHdlIG1pZ2h0IHVzZSBhIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXHJcbiAgICAvLyBXZSdkIGFsc28gZGlnIGRlZXBlciBpbnRvIHRoZSBlcnJvciB0byBnZXQgYSBiZXR0ZXIgbWVzc2FnZVxyXG4gICAgbGV0IGVyck1zZyA9IChlcnJvci5tZXNzYWdlKSA/IGVycm9yLm1lc3NhZ2UgOlxyXG4gICAgICBlcnJvci5zdGF0dXMgPyBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0fWAgOiAnU2VydmVyIGVycm9yJztcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTsgLy8gbG9nIHRvIGNvbnNvbGUgaW5zdGVhZFxyXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==
