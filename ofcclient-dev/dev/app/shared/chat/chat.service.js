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
var websocket_service_1 = require('./websocket.service');
var CHAT_URL = 'ws://www.ollomall.cn:8080/OFCWebsocket/websocket/chat';
var ChatService = (function () {
    function ChatService(http, baseUrlservice, wsService) {
        this.http = http;
        this.baseUrlservice = baseUrlservice;
        this.wsService = wsService;
        this.messagesMulti = [];
        this.baseUrl = 'http://localhost:8080/TaskManagerWS/rest/taskmanager/';
        this.baseUrl = baseUrlservice.getBaseurl() + "chatservice/";
    }
    ChatService.prototype.loadSingleChatAtClient = function () {
        this.messages = this.wsService
            .connect(CHAT_URL)
            .map(function (response) {
            var data = JSON.parse(response.data);
            return {
                author: data.author,
                message: data.message,
                otherauthor: data.otherauthor,
                username: data.username,
                senderid: data.senderid,
                recieverid: data.recieverid,
                projectpostid: data.projectpostid,
                submitproposal_id: data.submitproposal_id,
                ofcsubmitproposalchat_id: data.ofcsubmitproposalchat_id,
                createdate: data.createdate,
                modifieddate: data.modifieddate,
                status: data.status,
            };
        });
    };
    ChatService.prototype.loadChatAtClient = function (param) {
        for (var i = 0; i < param.length; i++) {
            var p = param[i];
            this.messagesMulti[i] = this.wsService
                .connect(CHAT_URL)
                .map(function (response) {
                var data = JSON.parse(response.data);
                return {
                    author: data.author,
                    message: data.message,
                    otherauthor: data.otherauthor,
                    username: data.username,
                    senderid: data.senderid,
                    recieverid: data.recieverid,
                    projectpostid: data.projectpostid,
                    submitproposal_id: data.submitproposal_id,
                    ofcsubmitproposalchat_id: data.ofcsubmitproposalchat_id,
                    createdate: data.createdate,
                    modifieddate: data.modifieddate,
                    status: data.status,
                };
            });
        }
        console.log("Number of connections=" + this.messagesMulti.length);
    };
    ChatService.prototype.DEPRECATEDloadChatAtClient = function (param, projectpostid) {
        var result = [];
        for (var i = 0; i < param.length; i++) {
            var p = param[i];
            var messagestemp = this.wsService
                .connect(CHAT_URL)
                .map(function (response) {
                var data = JSON.parse(response.data);
                return {
                    author: data.author,
                    message: data.message,
                    otherauthor: data.otherauthor,
                    username: data.username,
                    senderid: data.senderid,
                    recieverid: data.recieverid,
                    projectpostid: data.projectpostid,
                    submitproposal_id: data.submitproposal_id,
                    ofcsubmitproposalchat_id: data.ofcsubmitproposalchat_id,
                    createdate: data.createdate,
                    modifieddate: data.modifieddate,
                    status: data.status,
                };
            });
            result.push(messagestemp);
        }
        return result;
    };
    ChatService.prototype.getOldChatMessages = function (submitproposalid) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "submitproposalid=" + submitproposalid;
        var url2 = this.baseUrl + "WS_proc_tbl_ofcsubmitproposal_chat_selectjson";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    ChatService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    ChatService.prototype.getHeaders2 = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    ChatService.prototype.getHeadersUrlencode = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    ChatService.prototype.getHeadersUrlencodeUtf8 = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    ChatService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    ChatService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, baseurl_service_1.BaseUrlService, websocket_service_1.WebSocketService])
    ], ChatService);
    return ChatService;
}());
exports.ChatService = ChatService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY2hhdC9jaGF0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBd0QsZUFBZSxDQUFDLENBQUE7QUFDeEUsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFHN0MsZ0NBQTZCLDRCQUE0QixDQUFDLENBQUE7QUFHMUQsa0NBQStCLHFCQUFxQixDQUFDLENBQUE7QUFLcEQsSUFBTSxRQUFRLEdBQVUsdURBQXVELENBQUM7QUF5QmpGO0lBZUUscUJBQW9CLElBQVcsRUFBUyxjQUE2QixFQUFTLFNBQTJCO1FBQXJGLFNBQUksR0FBSixJQUFJLENBQU87UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBVmxHLGtCQUFhLEdBQTJCLEVBQUUsQ0FBQztRQVExQyxZQUFPLEdBQVcsdURBQXVELENBQUM7UUFHaEYsSUFBSSxDQUFDLE9BQU8sR0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLEdBQUMsY0FBYyxDQUFDO0lBYTFELENBQUM7SUFFRiw0Q0FBc0IsR0FBdEI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUEyQixJQUFJLENBQUMsU0FBUzthQUM1QyxPQUFPLENBQUMsUUFBUSxDQUFDO2FBQ2pCLEdBQUcsQ0FBQyxVQUFDLFFBQXNCO1lBQ3hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQztnQkFDSCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDckIsV0FBVyxFQUFDLElBQUksQ0FBQyxXQUFXO2dCQUM1QixRQUFRLEVBQUMsSUFBSSxDQUFDLFFBQVE7Z0JBQ3RCLFFBQVEsRUFBQyxJQUFJLENBQUMsUUFBUTtnQkFDdEIsVUFBVSxFQUFDLElBQUksQ0FB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IiwiZmlsZSI6ImFwcC9zaGFyZWQvY2hhdC9jaGF0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgT0ZDTWVtYmVycyB9IGZyb20gJy4uLy4uL3NlYXJjaGZyZWVsYW5jZXJzL29mY21lbWJlcnMnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkIH0gZnJvbSAnLi4vLi4vc2VhcmNoZnJlZWxhbmNlcnMvZmlsZXVwbG9hZCc7XHJcbmltcG9ydCB7QmFzZVVybFNlcnZpY2V9IGZyb20gJy4uL2Jhc2V1cmwvYmFzZXVybC5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7V2ViU29ja2V0U2VydmljZX0gZnJvbSAnLi93ZWJzb2NrZXQuc2VydmljZSc7XHJcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nOyAgLy8gZm9yIGRlYnVnZ2luZ1xyXG5pbXBvcnQgeyBQb3N0Sm9iVmlldyB9IGZyb20gJy4uLy4uL3Bvc3Rham9idmlld3BhZ2UvcG9zdGpvYnZpZXcnO1xyXG5cclxuLy8gIGNvbnN0IENIQVRfVVJMOnN0cmluZyA9ICd3czovL2xvY2FsaG9zdDo4MDgwL09GQ1dlYnNvY2tldC93ZWJzb2NrZXQvY2hhdCc7XHJcbiBjb25zdCBDSEFUX1VSTDpzdHJpbmcgPSAnd3M6Ly93d3cub2xsb21hbGwuY246ODA4MC9PRkNXZWJzb2NrZXQvd2Vic29ja2V0L2NoYXQnO1xyXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2Uge1xyXG4gICAgYXV0aG9yOiBzdHJpbmc7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBvdGhlcmF1dGhvcjpzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlQ2xpZW50IHtcclxuICAgIGF1dGhvcjogc3RyaW5nO1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgb3RoZXJhdXRob3I6c3RyaW5nO1xyXG4gICAgdXNlcm5hbWU6c3RyaW5nO1xyXG5cclxuICAgIHNlbmRlcmlkOnN0cmluZztcclxuICAgIHJlY2lldmVyaWQ6c3RyaW5nO1xyXG4gICAgcHJvamVjdHBvc3RpZDpzdHJpbmc7XHJcbiAgICBzdWJtaXRwcm9wb3NhbF9pZDpzdHJpbmc7XHJcbiAgICBvZmNzdWJtaXRwcm9wb3NhbGNoYXRfaWQ6c3RyaW5nO1xyXG4gICAgY3JlYXRlZGF0ZTpzdHJpbmc7XHJcbiAgICBtb2RpZmllZGRhdGU6c3RyaW5nO1xyXG4gICAgc3RhdHVzOnN0cmluZztcclxufVxyXG4vKipcclxuICogVGhpcyBjbGFzcyBwcm92aWRlcyB0aGUgTmFtZUxpc3Qgc2VydmljZSB3aXRoIG1ldGhvZHMgdG8gcmVhZCBuYW1lcyBhbmQgYWRkIG5hbWVzLlxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2hhdFNlcnZpY2Uge1xyXG5cclxuLy8gIHB1YmxpYyBtZXNzYWdlczogU3ViamVjdDxNZXNzYWdlPjtcclxuICBwdWJsaWMgbWVzc2FnZXM6IFN1YmplY3Q8TWVzc2FnZUNsaWVudD47XHJcblxyXG4gIHB1YmxpYyBtZXNzYWdlc011bHRpOiBTdWJqZWN0PE1lc3NhZ2VDbGllbnQ+W109W107XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBOYW1lTGlzdFNlcnZpY2Ugd2l0aCB0aGUgaW5qZWN0ZWQgSHR0cC5cclxuICAgKiBAcGFyYW0ge0h0dHB9IGh0dHAgLSBUaGUgaW5qZWN0ZWQgSHR0cC5cclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICAvL3ByaXZhdGUgYmFzZVVybDogc3RyaW5nID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9UYXNrTWFuYWdlcldTL3Jlc3QvYXR1bHRlc3QvJztcclxuICBwcml2YXRlIGJhc2VVcmw6IHN0cmluZyA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAvVGFza01hbmFnZXJXUy9yZXN0L3Rhc2ttYW5hZ2VyLyc7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwIDogSHR0cCxwcml2YXRlIGJhc2VVcmxzZXJ2aWNlOkJhc2VVcmxTZXJ2aWNlLHByaXZhdGUgd3NTZXJ2aWNlOiBXZWJTb2NrZXRTZXJ2aWNlKXtcclxuICAgIHRoaXMuYmFzZVVybD1iYXNlVXJsc2VydmljZS5nZXRCYXNldXJsKCkrXCJjaGF0c2VydmljZS9cIjtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMubWVzc2FnZXMgPSA8U3ViamVjdDxNZXNzYWdlQ2xpZW50Pj53c1NlcnZpY2VcclxuICAgICAgICAgICAgLy8gLmNvbm5lY3QoQ0hBVF9VUkwpXHJcbiAgICAgICAgICAgIC8vIC5tYXAoKHJlc3BvbnNlOiBNZXNzYWdlRXZlbnQpOiBNZXNzYWdlQ2xpZW50ID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgYXV0aG9yOiBkYXRhLmF1dGhvcixcclxuICAgICAgICAgICAgLy8gICAgICAgICBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgb3RoZXJhdXRob3I6ZGF0YS5vdGhlcmF1dGhvcixcclxuICAgICAgICAgICAgLy8gICAgICAgICB1c2VybmFtZTpkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICB9XHJcbiBcclxuIGxvYWRTaW5nbGVDaGF0QXRDbGllbnQoKXtcclxuICAgdGhpcy5tZXNzYWdlcyA9IDxTdWJqZWN0PE1lc3NhZ2VDbGllbnQ+PnRoaXMud3NTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5jb25uZWN0KENIQVRfVVJMKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogTWVzc2FnZUV2ZW50KTogTWVzc2FnZUNsaWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogZGF0YS5hdXRob3IsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIG90aGVyYXV0aG9yOmRhdGEub3RoZXJhdXRob3IsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6ZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBzZW5kZXJpZDpkYXRhLnNlbmRlcmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2lldmVyaWQ6ZGF0YS5yZWNpZXZlcmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Rwb3N0aWQ6ZGF0YS5wcm9qZWN0cG9zdGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdHByb3Bvc2FsX2lkOmRhdGEuc3VibWl0cHJvcG9zYWxfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgb2Zjc3VibWl0cHJvcG9zYWxjaGF0X2lkOmRhdGEub2Zjc3VibWl0cHJvcG9zYWxjaGF0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRhdGU6ZGF0YS5jcmVhdGVkYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkZGF0ZTpkYXRhLm1vZGlmaWVkZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ZGF0YS5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gfVxyXG5cclxuIGxvYWRDaGF0QXRDbGllbnQocGFyYW06UG9zdEpvYlZpZXdbXSl7XHJcbiAgICBmb3IobGV0IGk9MDtpPHBhcmFtLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIGxldCBwOlBvc3RKb2JWaWV3PXBhcmFtW2ldO1xyXG4gICAgICAgIC8vIHRoaXMud3NTZXJ2aWNlPW5ldyBXZWJTb2NrZXRTZXJ2aWNlKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWVzc2FnZXNNdWx0aVtpXSA9IDxTdWJqZWN0PE1lc3NhZ2VDbGllbnQ+PnRoaXMud3NTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5jb25uZWN0KENIQVRfVVJMKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogTWVzc2FnZUV2ZW50KTogTWVzc2FnZUNsaWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogZGF0YS5hdXRob3IsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIG90aGVyYXV0aG9yOmRhdGEub3RoZXJhdXRob3IsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6ZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBzZW5kZXJpZDpkYXRhLnNlbmRlcmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2lldmVyaWQ6ZGF0YS5yZWNpZXZlcmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Rwb3N0aWQ6ZGF0YS5wcm9qZWN0cG9zdGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdHByb3Bvc2FsX2lkOmRhdGEuc3VibWl0cHJvcG9zYWxfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgb2Zjc3VibWl0cHJvcG9zYWxjaGF0X2lkOmRhdGEub2Zjc3VibWl0cHJvcG9zYWxjaGF0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRhdGU6ZGF0YS5jcmVhdGVkYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkZGF0ZTpkYXRhLm1vZGlmaWVkZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ZGF0YS5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJOdW1iZXIgb2YgY29ubmVjdGlvbnM9XCIrdGhpcy5tZXNzYWdlc011bHRpLmxlbmd0aCk7XHJcbiB9XHJcblxyXG4gREVQUkVDQVRFRGxvYWRDaGF0QXRDbGllbnQocGFyYW06UG9zdEpvYlZpZXdbXSxwcm9qZWN0cG9zdGlkOnN0cmluZyk6U3ViamVjdDxNZXNzYWdlQ2xpZW50Pltde1xyXG4gICBsZXQgcmVzdWx0OlN1YmplY3Q8TWVzc2FnZUNsaWVudD5bXT1bXTtcclxuXHJcbiAgICAgIGZvcihsZXQgaT0wO2k8cGFyYW0ubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICBsZXQgcDpQb3N0Sm9iVmlldz1wYXJhbVtpXTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gbGV0IHBvc3RzdWJtaXRpZD1wLm9mY3N1Ym1pdHByb3Bvc2FsX2lkO1xyXG5cclxuICAgICAgICAgIC8vIGxldCBiaWRkaW5nbWVtYmVyaWQ9cC5vZmNtZW1iZXJzX2lkX2Zrc3VibWl0cHJvcG9zYWw7XHJcbiAgICAgICAgICAvLyAvL290aGVyaWRcclxuICAgICAgICAgIC8vIGxldCBiaWRkZXJjaGF0aWQgPSBwcm9qZWN0cG9zdGlkK1wiX1wiK3Bvc3RzdWJtaXRpZCtcIl9cIitiaWRkaW5nbWVtYmVyaWQ7XHJcbiAgICAgICAgICAvLyBsZXQgb3RoZXJzY2hhdD1wcm9qZWN0cG9zdGlkK1wiX1wiK3Bvc3RzdWJtaXRpZCtcIl9cIitiaWRkaW5nbWVtYmVyaWQ7XHJcblxyXG5cclxuICAgICAgICAgIGxldCBtZXNzYWdlc3RlbXAgPSA8U3ViamVjdDxNZXNzYWdlQ2xpZW50Pj50aGlzLndzU2VydmljZVxyXG4gICAgICAgICAgICAuY29ubmVjdChDSEFUX1VSTClcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IE1lc3NhZ2VFdmVudCk6IE1lc3NhZ2VDbGllbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6IGRhdGEuYXV0aG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICBvdGhlcmF1dGhvcjpkYXRhLm90aGVyYXV0aG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOmRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZGVyaWQ6ZGF0YS5zZW5kZXJpZCxcclxuICAgICAgICAgICAgICAgICAgICByZWNpZXZlcmlkOmRhdGEucmVjaWV2ZXJpZCxcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0cG9zdGlkOmRhdGEucHJvamVjdHBvc3RpZCxcclxuICAgICAgICAgICAgICAgICAgICBzdWJtaXRwcm9wb3NhbF9pZDpkYXRhLnN1Ym1pdHByb3Bvc2FsX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsY2hhdF9pZDpkYXRhLm9mY3N1Ym1pdHByb3Bvc2FsY2hhdF9pZCxcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkYXRlOmRhdGEuY3JlYXRlZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllZGRhdGU6ZGF0YS5tb2RpZmllZGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOmRhdGEuc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2gobWVzc2FnZXN0ZW1wKTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuIH1cclxuICAgIFxyXG5cclxuICBnZXRPbGRDaGF0TWVzc2FnZXMoc3VibWl0cHJvcG9zYWxpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxNZXNzYWdlQ2xpZW50W10+e1xyXG4gICAgLy9IZWFkZXIgZGVjbGFyYXRpb25cclxuICAgIGxldCBoZWFkZXJzMSA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuICAgIC8vQm9keSBwYXJhbXNcclxuICAgIHZhciBib2R5MSA9IGBzdWJtaXRwcm9wb3NhbGlkPSR7c3VibWl0cHJvcG9zYWxpZH1gO1xyXG4gICAgLy8gVVJMIGRlY2xhcmF0aW9uXHJcbiAgICB2YXIgdXJsMiA9IGAke3RoaXMuYmFzZVVybH1XU19wcm9jX3RibF9vZmNzdWJtaXRwcm9wb3NhbF9jaGF0X3NlbGVjdGpzb25gOy8vaW5zZXJ0TWlsZXN0b25lc1Byb2plY3RgO1xyXG4gICAgXHJcbiAgICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KHVybDIgLCBib2R5MSAse2hlYWRlcnM6IGhlYWRlcnMxfSkgLy8gUG9zdCBVUkwgYW5kIGhlYWRlclxyXG4gICAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpIC8vIE1hcHBpbmcgcmVzcG9uc2UgdG8gcmV0dXJuIHZhcmlhYmxlXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTsgLy8gRXJyb3IgaGFuZGxlclxyXG4gICAgICAvL2FsZXJ0KFwiZ2V0RGlzcGxheUFsbDIgYWZ0ZXJcIik7XHJcbiAgICAgIHJldHVybiBjb21wbGFpbnRzMSQ7XHJcbiAgfVxyXG4gXHJcblxyXG4gICBwcml2YXRlIGdldEhlYWRlcnMoKXtcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgfVxyXG4gIHByaXZhdGUgZ2V0SGVhZGVyczIoKXtcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnIH0pOyAgXHJcbiAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxuICB9XHJcbiAgcHJpdmF0ZSBnZXRIZWFkZXJzVXJsZW5jb2RlKCl7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0pOyAgXHJcbiAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxuICB9XHJcbiAgcHJpdmF0ZSBnZXRIZWFkZXJzVXJsZW5jb2RlVXRmOCgpe1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04JyB9KTsgIFxyXG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICogSGFuZGxlIEhUVFAgZXJyb3JcclxuICAgICovXHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvciAoZXJyb3I6IGFueSkge1xyXG4gICAgLy8gSW4gYSByZWFsIHdvcmxkIGFwcCwgd2UgbWlnaHQgdXNlIGEgcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcclxuICAgIC8vIFdlJ2QgYWxzbyBkaWcgZGVlcGVyIGludG8gdGhlIGVycm9yIHRvIGdldCBhIGJldHRlciBtZXNzYWdlXHJcbiAgICBsZXQgZXJyTXNnID0gKGVycm9yLm1lc3NhZ2UpID8gZXJyb3IubWVzc2FnZSA6XHJcbiAgICAgIGVycm9yLnN0YXR1cyA/IGAke2Vycm9yLnN0YXR1c30gLSAke2Vycm9yLnN0YXR1c1RleHR9YCA6ICdTZXJ2ZXIgZXJyb3InO1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJNc2cpOyAvLyBsb2cgdG8gY29uc29sZSBpbnN0ZWFkXHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJNc2cpO1xyXG4gIH1cclxufVxyXG5cclxuIl19
