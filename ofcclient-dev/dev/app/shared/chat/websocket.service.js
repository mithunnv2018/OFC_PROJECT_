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
var Rx_1 = require('rxjs/Rx');
var WebSocketService = (function () {
    function WebSocketService(http, baseUrlservice) {
        this.http = http;
        this.baseUrlservice = baseUrlservice;
        this.baseUrl = 'http://localhost:8080/TaskManagerWS/rest/taskmanager/';
        this.baseUrl = baseUrlservice.getBaseurl() + "searchfreelancers/";
    }
    WebSocketService.prototype.connect = function (url) {
        this.subject = this.create(url);
        return this.subject;
    };
    WebSocketService.prototype.create = function (url) {
        var ws = new WebSocket(url);
        var observable = Observable_1.Observable.create(function (obs) {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });
        var observer = {
            next: function (data) {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            },
        };
        return Rx_1.Subject.create(observer, observable);
    };
    WebSocketService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    WebSocketService.prototype.getHeaders2 = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    WebSocketService.prototype.getHeadersUrlencode = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    WebSocketService.prototype.getHeadersUrlencodeUtf8 = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    WebSocketService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    WebSocketService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, baseurl_service_1.BaseUrlService])
    ], WebSocketService);
    return WebSocketService;
}());
exports.WebSocketService = WebSocketService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY2hhdC93ZWJzb2NrZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUF3RCxlQUFlLENBQUMsQ0FBQTtBQUN4RSwyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QyxnQ0FBNkIsNEJBQTRCLENBQUMsQ0FBQTtBQUUxRCxtQkFBK0IsU0FBUyxDQUFDLENBQUE7QUFRekM7SUFjRSwwQkFBb0IsSUFBVyxFQUFTLGNBQTZCO1FBQWpELFNBQUksR0FBSixJQUFJLENBQU87UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUo3RCxZQUFPLEdBQVcsdURBQXVELENBQUM7UUFLaEYsSUFBSSxDQUFDLE9BQU8sR0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLEdBQUMsb0JBQW9CLENBQUM7SUFDaEUsQ0FBQztJQUVPLGtDQUFPLEdBQWQsVUFBZSxHQUFPO1FBR2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBR3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFUSxpQ0FBTSxHQUFkLFVBQWUsR0FBTztRQUNuQixJQUFJLEVBQUUsR0FBRyxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU1QixJQUFJLFVBQVUsR0FBRyx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQTJCO1lBQzNELEVBQUUsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEMsRUFBRSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQyxFQUFFLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXBDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksUUFBUSxHQUFHO1lBQ1gsSUFBSSxFQUFFLFVBQUMsSUFBWTtnQkFDZixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNuQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztZQUNMLENBQUM7U0FFSixDQUFDO1FBRUYsTUFBTSxDQUFDLFlBQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFNTSxxQ0FBVSxHQUFsQjtRQUNDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFDTyxzQ0FBVyxHQUFuQjtRQUNFLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGlDQUFpQyxFQUFFLENBQUMsQ0FBQztRQUNqRixJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFDTyw4Q0FBbUIsR0FBM0I7UUFDRSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxtQ0FBbUMsRUFBRSxDQUFDLENBQUM7UUFDbkYsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBQ08sa0RBQXVCLEdBQS9CO1FBQ0UsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsa0RBQWtELEVBQUUsQ0FBQyxDQUFDO1FBQ2xHLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUtPLHNDQUFXLEdBQW5CLFVBQXFCLEtBQVU7UUFHN0IsSUFBSSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU87WUFDMUMsS0FBSyxDQUFDLE1BQU0sR0FBTSxLQUFLLENBQUMsTUFBTSxXQUFNLEtBQUssQ0FBQyxVQUFZLEdBQUcsY0FBYyxDQUFDO1FBQzFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUF0Rkg7UUFBQyxpQkFBVSxFQUFFOzt3QkFBQTtJQXVGYix1QkFBQztBQUFELENBdEZBLEFBc0ZDLElBQUE7QUF0Rlksd0JBQWdCLG1CQXNGNUIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2NoYXQvd2Vic29ja2V0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtCYXNlVXJsU2VydmljZX0gZnJvbSAnLi4vYmFzZXVybC9iYXNldXJsLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHtTdWJqZWN0LE9ic2VydmVyfSBmcm9tICdyeGpzL1J4JztcclxuXHJcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nOyAgLy8gZm9yIGRlYnVnZ2luZ1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgdGhlIE5hbWVMaXN0IHNlcnZpY2Ugd2l0aCBtZXRob2RzIHRvIHJlYWQgbmFtZXMgYW5kIGFkZCBuYW1lcy5cclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdlYlNvY2tldFNlcnZpY2Uge1xyXG5cclxuICAgcHJpdmF0ZSBzdWJqZWN0OiBTdWJqZWN0PE1lc3NhZ2VFdmVudD47XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgTmFtZUxpc3RTZXJ2aWNlIHdpdGggdGhlIGluamVjdGVkIEh0dHAuXHJcbiAgICogQHBhcmFtIHtIdHRwfSBodHRwIC0gVGhlIGluamVjdGVkIEh0dHAuXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgLy9wcml2YXRlIGJhc2VVcmw6IHN0cmluZyA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvVGFza01hbmFnZXJXUy9yZXN0L2F0dWx0ZXN0Lyc7XHJcbiAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmcgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL1Rhc2tNYW5hZ2VyV1MvcmVzdC90YXNrbWFuYWdlci8nO1xyXG5cclxuICBcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHAgOiBIdHRwLHByaXZhdGUgYmFzZVVybHNlcnZpY2U6QmFzZVVybFNlcnZpY2Upe1xyXG4gICAgdGhpcy5iYXNlVXJsPWJhc2VVcmxzZXJ2aWNlLmdldEJhc2V1cmwoKStcInNlYXJjaGZyZWVsYW5jZXJzL1wiO1xyXG4gIH1cclxuXHJcbiAgIHB1YmxpYyBjb25uZWN0KHVybDphbnkpOiBTdWJqZWN0PE1lc3NhZ2VFdmVudD4ge1xyXG4gICAgIC8vZG9uZSBhcyBvbiAwNCBmZWIgMjAxNyBjb21tZW50IGJlbG93IGlmIGNvbmRpdGlvbiB0byBhbGxvdyBtdWx0aSBjb25uZWN0cy5cclxuICAgICAgICAvLyBpZighdGhpcy5zdWJqZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ViamVjdCA9IHRoaXMuY3JlYXRlKHVybCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zdWJqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgICBwcml2YXRlIGNyZWF0ZSh1cmw6YW55KTogU3ViamVjdDxNZXNzYWdlRXZlbnQ+IHtcclxuICAgICAgICBsZXQgd3MgPSBuZXcgV2ViU29ja2V0KHVybCk7XHJcblxyXG4gICAgICAgIGxldCBvYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5jcmVhdGUoKG9iczogT2JzZXJ2ZXI8TWVzc2FnZUV2ZW50PikgPT4ge1xyXG4gICAgICAgICAgICB3cy5vbm1lc3NhZ2UgPSBvYnMubmV4dC5iaW5kKG9icyk7XHJcbiAgICAgICAgICAgIHdzLm9uZXJyb3IgPSBvYnMuZXJyb3IuYmluZChvYnMpO1xyXG4gICAgICAgICAgICB3cy5vbmNsb3NlID0gb2JzLmNvbXBsZXRlLmJpbmQob2JzKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB3cy5jbG9zZS5iaW5kKHdzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IG9ic2VydmVyID0ge1xyXG4gICAgICAgICAgICBuZXh0OiAoZGF0YTogT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAod3MucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcclxuICAgICAgICAgICAgICAgICAgICB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFN1YmplY3QuY3JlYXRlKG9ic2VydmVyLCBvYnNlcnZhYmxlKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuIFxyXG5cclxuICAgcHJpdmF0ZSBnZXRIZWFkZXJzKCl7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgIHJldHVybiBoZWFkZXJzO1xyXG4gIH1cclxuICBwcml2YXRlIGdldEhlYWRlcnMyKCl7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyB9KTsgIFxyXG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG4gIHByaXZhdGUgZ2V0SGVhZGVyc1VybGVuY29kZSgpe1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9KTsgIFxyXG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG4gIHByaXZhdGUgZ2V0SGVhZGVyc1VybGVuY29kZVV0ZjgoKXtcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOCcgfSk7ICBcclxuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAqIEhhbmRsZSBIVFRQIGVycm9yXHJcbiAgICAqL1xyXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IgKGVycm9yOiBhbnkpIHtcclxuICAgIC8vIEluIGEgcmVhbCB3b3JsZCBhcHAsIHdlIG1pZ2h0IHVzZSBhIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXHJcbiAgICAvLyBXZSdkIGFsc28gZGlnIGRlZXBlciBpbnRvIHRoZSBlcnJvciB0byBnZXQgYSBiZXR0ZXIgbWVzc2FnZVxyXG4gICAgbGV0IGVyck1zZyA9IChlcnJvci5tZXNzYWdlKSA/IGVycm9yLm1lc3NhZ2UgOlxyXG4gICAgICBlcnJvci5zdGF0dXMgPyBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0fWAgOiAnU2VydmVyIGVycm9yJztcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTsgLy8gbG9nIHRvIGNvbnNvbGUgaW5zdGVhZFxyXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==
