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
var MyprofileService = (function () {
    function MyprofileService(http, baseUrlservice) {
        this.http = http;
        this.baseUrlservice = baseUrlservice;
        this.baseUrl = baseUrlservice.getBaseurl() + 'profile/';
        this.baseUrlSkills = baseUrlservice.getBaseurl() + 'skill/';
        this.baseUrlDrp = baseUrlservice.getBaseurl() + 'subcategory/';
    }
    MyprofileService.prototype.get = function () {
        return this.http.get('/assets/data.json')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MyprofileService.prototype.getAutoSkills = function (inparam) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "input0=" + inparam;
        var url2 = this.baseUrlSkills + "WS_tbl_skill_master_selectjson";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    MyprofileService.prototype.getMyProfileSkills = function (membersessionid) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "membersessionid=" + membersessionid;
        var url2 = this.baseUrl + "WS_proc_member_getall_skills";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    MyprofileService.prototype.getMainCat = function (inparam) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "input0=" + inparam;
        var url2 = this.baseUrlDrp + "WS_tbl_maincat_master_drpjson";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    MyprofileService.prototype.getEducationDrp = function (inparam) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "input0=" + inparam;
        var url2 = this.baseUrl + "WS_tbl_education_master_drpjson";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    MyprofileService.prototype.myprofile = function (inparam) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "input0=" + JSON.stringify(inparam);
        var url2 = this.baseUrl + "WS_tbl_ofcmembers_master_create";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    MyprofileService.prototype.saveMyProfile = function (membersessionid, inparam, inparam2, inparam3) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "membersessionid=" + membersessionid + "&inparam=" + JSON.stringify(inparam) + "&inparam2=" + JSON.stringify(inparam2) + "&fileuploadjson=" + JSON.stringify(inparam3);
        var url2 = this.baseUrl + "WS_proc_member_myprofile";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    MyprofileService.prototype.saveMyProject = function (membersessionid, inparam, inparam2, inparam3) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "membersessionid=" + membersessionid + "&inparam=" + JSON.stringify(inparam) + "&inparam2=" + JSON.stringify(inparam2) + "&fileuploadjson=" + JSON.stringify(inparam3);
        var url2 = this.baseUrl + "WS_proc_member_myproject";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    MyprofileService.prototype.getMyProjectGrid = function (membersessionid) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "membersessionid=" + membersessionid;
        var url2 = this.baseUrl + "WS_proc_vw_membermyproject_maincat_selectjson";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    MyprofileService.prototype.saveMemberEmployment = function (membersessionid, inparam, inparam2, inparam3) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "membersessionid=" + membersessionid + "&inparam=" + JSON.stringify(inparam) + "&inparam2=" + JSON.stringify(inparam2) + "&fileuploadjson=" + JSON.stringify(inparam3);
        var url2 = this.baseUrl + "WS_proc_member_employment";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    MyprofileService.prototype.getEmploymentGrid = function (membersessionid) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "membersessionid=" + membersessionid;
        var url2 = this.baseUrl + "WS_proc_vw_memberemployment_maincat_selectjson";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    MyprofileService.prototype.saveMemberEducation = function (membersessionid, inparam) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "membersessionid=" + membersessionid + "&inparam=" + JSON.stringify(inparam);
        var url2 = this.baseUrl + "WS_proc_member_education";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    MyprofileService.prototype.getEducationGrid = function (membersessionid) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "membersessionid=" + membersessionid;
        var url2 = this.baseUrl + "WS_proc_vw_membereducation_education_selectjson";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    MyprofileService.prototype.saveMemberExperience = function (membersessionid, inparam, inparam2, inparam3) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "membersessionid=" + membersessionid + "&inparam=" + JSON.stringify(inparam) + "&inparam2=" + JSON.stringify(inparam2) + "&fileuploadjson=" + JSON.stringify(inparam3);
        var url2 = this.baseUrl + "WS_proc_member_experience";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    MyprofileService.prototype.getExperienceGrid = function (membersessionid) {
        var headers1 = new http_1.Headers();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body1 = "membersessionid=" + membersessionid;
        var url2 = this.baseUrl + "WS_proc_vw_memberexperience_maincat_selectjson";
        var complaints1$ = this.http
            .post(url2, body1, { headers: headers1 })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        return complaints1$;
    };
    MyprofileService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return Observable_1.Observable.throw(errMsg);
    };
    MyprofileService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, baseurl_service_1.BaseUrlService])
    ], MyprofileService);
    return MyprofileService;
}());
exports.MyprofileService = MyprofileService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbXlwcm9maWxlL215cHJvZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQXdELGVBQWUsQ0FBQyxDQUFBO0FBQ3hFLDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTdDLGdDQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBbUI1RDtJQVlFLDBCQUFvQixJQUFVLEVBQVUsY0FBOEI7UUFBbEQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUNwRSxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyxVQUFVLEVBQUUsR0FBQyxVQUFVLENBQUM7UUFDdEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxjQUFjLENBQUMsVUFBVSxFQUFFLEdBQUMsUUFBUSxDQUFDO1FBQzFELElBQUksQ0FBQyxVQUFVLEdBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxHQUFDLGNBQWMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsOEJBQUcsR0FBSDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQzthQUN4QixHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBRWxDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVDLHdDQUFhLEdBQWIsVUFBYyxPQUFlO1FBRTdCLElBQUksUUFBUSxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDN0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQUVyRSxJQUFJLEtBQUssR0FBRyxZQUFXLE9BQVMsQ0FBQztRQUVqQyxJQUFJLElBQUksR0FBTSxJQUFJLENBQUMsYUFBYSxtQ0FBZ0MsQ0FBQztR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L3NoYXJlZC9teXByb2ZpbGUvbXlwcm9maWxlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtTZWxlY3RJdGVtfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBCYXNlVXJsU2VydmljZSB9IGZyb20gJy4uL2Jhc2V1cmwvYmFzZXVybC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT0ZDTWVtYmVycyB9IGZyb20gJy4uLy4uL215cHJvZmlsZS9vZmNtZW1iZXJzJztcclxuaW1wb3J0IHsgU2tpbGwgfSBmcm9tICcuLi8uLi9teXByb2ZpbGUvc2tpbGwnO1xyXG5pbXBvcnQgeyBDb21tb25FcnJvciB9IGZyb20gJy4uLy4uL2xvZ2lucGFnZS9jb21tb25lcnJvcic7XHJcbmltcG9ydCB7RmlsZVVwbG9hZH0gZnJvbSAnLi4vLi4vbXlwcm9maWxlL2ZpbGV1cGxvYWQnO1xyXG5pbXBvcnQgeyBNeVByb2plY3QgfSBmcm9tICcuLi8uLi9teXByb2ZpbGUvbXlwcm9qZWN0JztcclxuaW1wb3J0IHsgTXlQcm9qZWN0R3JpZCB9IGZyb20gJy4uLy4uL215cHJvZmlsZS9teXByb2plY3RncmlkJztcclxuaW1wb3J0IHsgTWVtYmVyRW1wbG95bWVudCB9IGZyb20gJy4uLy4uL215cHJvZmlsZS9tZW1iZXJlbXBsb3ltZW50JztcclxuaW1wb3J0IHsgRW1wbG95bWVudEdyaWQgfSBmcm9tICcuLi8uLi9teXByb2ZpbGUvZW1wbG95bWVudGdyaWQnO1xyXG5pbXBvcnQgeyBNZW1iZXJFeHBlcmllbmNlIH0gZnJvbSAnLi4vLi4vbXlwcm9maWxlL21lbWJlcmV4cGVyaWVuY2UnO1xyXG5pbXBvcnQgeyBFeHBlcmllbmNlR3JpZCB9IGZyb20gJy4uLy4uL215cHJvZmlsZS9leHBlcmllbmNlZ3JpZCc7XHJcbmltcG9ydCB7IE1lbWJlckVkdWNhdGlvbiB9IGZyb20gJy4uLy4uL215cHJvZmlsZS9tZW1iZXJlZHVjYXRpb24nO1xyXG5pbXBvcnQgeyBFZHVjYXRpb25HcmlkIH0gZnJvbSAnLi4vLi4vbXlwcm9maWxlL2VkdWNhdGlvbmdyaWQnO1xyXG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJzsgIC8vIGZvciBkZWJ1Z2dpbmdcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIHRoZSBOYW1lTGlzdCBzZXJ2aWNlIHdpdGggbWV0aG9kcyB0byByZWFkIG5hbWVzIGFuZCBhZGQgbmFtZXMuXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNeXByb2ZpbGVTZXJ2aWNlIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBOYW1lTGlzdFNlcnZpY2Ugd2l0aCB0aGUgaW5qZWN0ZWQgSHR0cC5cclxuICAgKiBAcGFyYW0ge0h0dHB9IGh0dHAgLSBUaGUgaW5qZWN0ZWQgSHR0cC5cclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKi9cclxuICBcclxuICBwcml2YXRlIGJhc2VVcmw6IHN0cmluZztcclxuICBwcml2YXRlIGJhc2VVcmxTa2lsbHM6IHN0cmluZztcclxuICAgcHJpdmF0ZSBiYXNlVXJsRHJwOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBiYXNlVXJsc2VydmljZTogQmFzZVVybFNlcnZpY2UpIHtcclxuICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmxzZXJ2aWNlLmdldEJhc2V1cmwoKSsncHJvZmlsZS8nO1xyXG4gICAgdGhpcy5iYXNlVXJsU2tpbGxzID0gYmFzZVVybHNlcnZpY2UuZ2V0QmFzZXVybCgpKydza2lsbC8nO1xyXG4gICAgdGhpcy5iYXNlVXJsRHJwPWJhc2VVcmxzZXJ2aWNlLmdldEJhc2V1cmwoKSsnc3ViY2F0ZWdvcnkvJztcclxuICB9XHJcblxyXG4gIGdldCgpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL2Fzc2V0cy9kYXRhLmpzb24nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAvLyAgICAgICAgICAgICAgLmRvKGRhdGEgPT4gY29uc29sZS5sb2coJ3NlcnZlciBkYXRhOicsIGRhdGEpKSAgLy8gZGVidWdcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgfVxyXG5cclxuICAgIGdldEF1dG9Ta2lsbHMoaW5wYXJhbTogc3RyaW5nKTogT2JzZXJ2YWJsZTxTa2lsbFtdPntcclxuICAgIFxyXG4gICAgbGV0IGhlYWRlcnMxID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMxLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICAgXHJcbiAgICB2YXIgYm9keTEgPSBgaW5wdXQwPSR7IGlucGFyYW19YDtcclxuICAgIFxyXG4gICAgdmFyIHVybDIgPSBgJHt0aGlzLmJhc2VVcmxTa2lsbHN9V1NfdGJsX3NraWxsX21hc3Rlcl9zZWxlY3Rqc29uYDtcclxuICAgIFxyXG4gICAgbGV0IGNvbXBsYWludHMxJCA9IHRoaXMuaHR0cFxyXG4gICAgICAucG9zdCh1cmwyICwgYm9keTEgLHtoZWFkZXJzOiBoZWFkZXJzMX0pXHJcbiAgICAgIC5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgICAvL2FsZXJ0KFwiZ2V0RGlzcGxheUFsbDIgYWZ0ZXJcIik7XHJcbiAgICAgIHJldHVybiBjb21wbGFpbnRzMSQ7IFxyXG4gIH1cclxuXHJcbiAgZ2V0TXlQcm9maWxlU2tpbGxzKG1lbWJlcnNlc3Npb25pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxTa2lsbFtdPntcclxuICAgIFxyXG4gICAgbGV0IGhlYWRlcnMxID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMxLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICAgXHJcbiAgICB2YXIgYm9keTEgPSBgbWVtYmVyc2Vzc2lvbmlkPSR7bWVtYmVyc2Vzc2lvbmlkfWA7XHJcbiAgICBcclxuICAgIHZhciB1cmwyID0gYCR7dGhpcy5iYXNlVXJsfVdTX3Byb2NfbWVtYmVyX2dldGFsbF9za2lsbHNgO1xyXG4gICAgXHJcbiAgICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KHVybDIgLCBib2R5MSAse2hlYWRlcnM6IGhlYWRlcnMxfSlcclxuICAgICAgLm1hcCgocmVzOlJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICAgIC8vYWxlcnQoXCJnZXREaXNwbGF5QWxsMiBhZnRlclwiKTtcclxuICAgICAgcmV0dXJuIGNvbXBsYWludHMxJDsgXHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0TWFpbkNhdChpbnBhcmFtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFNlbGVjdEl0ZW1bXT57XHJcbiAgICBcclxuICAgIGxldCBoZWFkZXJzMSA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuICAgIFxyXG4gICAgdmFyIGJvZHkxID0gYGlucHV0MD0keyBpbnBhcmFtfWA7XHJcbiAgICBcclxuICAgIHZhciB1cmwyID0gYCR7dGhpcy5iYXNlVXJsRHJwfVdTX3RibF9tYWluY2F0X21hc3Rlcl9kcnBqc29uYDtcclxuICAgIFxyXG4gICAgbGV0IGNvbXBsYWludHMxJCA9IHRoaXMuaHR0cFxyXG4gICAgICAucG9zdCh1cmwyICwgYm9keTEgLHtoZWFkZXJzOiBoZWFkZXJzMX0pXHJcbiAgICAgIC5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgICAvL2FsZXJ0KFwiZ2V0RGlzcGxheUFsbDIgYWZ0ZXJcIik7XHJcbiAgICAgIHJldHVybiBjb21wbGFpbnRzMSQ7IFxyXG4gIH1cclxuXHJcblxyXG4gIGdldEVkdWNhdGlvbkRycChpbnBhcmFtOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFNlbGVjdEl0ZW1bXT57XHJcbiAgICBcclxuICAgIGxldCBoZWFkZXJzMSA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuICAgIFxyXG4gICAgdmFyIGJvZHkxID0gYGlucHV0MD0keyBpbnBhcmFtfWA7XHJcbiAgICBcclxuICAgIHZhciB1cmwyID0gYCR7dGhpcy5iYXNlVXJsfVdTX3RibF9lZHVjYXRpb25fbWFzdGVyX2RycGpzb25gO1xyXG4gICAgXHJcbiAgICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KHVybDIgLCBib2R5MSAse2hlYWRlcnM6IGhlYWRlcnMxfSlcclxuICAgICAgLm1hcCgocmVzOlJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICAgIC8vYWxlcnQoXCJnZXREaXNwbGF5QWxsMiBhZnRlclwiKTtcclxuICAgICAgcmV0dXJuIGNvbXBsYWludHMxJDsgXHJcbiAgfVxyXG5cclxuICBteXByb2ZpbGUoaW5wYXJhbTogT0ZDTWVtYmVycyk6IE9ic2VydmFibGU8T0ZDTWVtYmVyc1tdPntcclxuICAgIC8vSGVhZGVyIGRlY2xhcmF0aW9uXHJcbiAgICBsZXQgaGVhZGVyczEgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVyczEuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcbiAgICAvL0JvZHkgcGFyYW1zXHJcbiAgICB2YXIgYm9keTEgPSBgaW5wdXQwPSR7SlNPTi5zdHJpbmdpZnkoIGlucGFyYW0pfWA7XHJcbiAgICAvLyBVUkwgZGVjbGFyYXRpb25cclxuICAgIHZhciB1cmwyID0gYCR7dGhpcy5iYXNlVXJsfVdTX3RibF9vZmNtZW1iZXJzX21hc3Rlcl9jcmVhdGVgOy8vaW5zZXJ0TWlsZXN0b25lc1Byb2plY3RgO1xyXG4gICAgXHJcbiAgICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KHVybDIgLCBib2R5MSAse2hlYWRlcnM6IGhlYWRlcnMxfSkgLy8gUG9zdCBVUkwgYW5kIGhlYWRlclxyXG4gICAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpIC8vIE1hcHBpbmcgcmVzcG9uc2UgdG8gcmV0dXJuIHZhcmlhYmxlXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTsgLy8gRXJyb3IgaGFuZGxlclxyXG4gICAgICAvL2FsZXJ0KFwiZ2V0RGlzcGxheUFsbDIgYWZ0ZXJcIik7XHJcbiAgICAgIHJldHVybiBjb21wbGFpbnRzMSQ7IFxyXG4gIH1cclxuXHJcblxyXG4gLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAgICAgTXkgUHJvZmlsZSAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4gIHNhdmVNeVByb2ZpbGUobWVtYmVyc2Vzc2lvbmlkOiBzdHJpbmcsaW5wYXJhbTogT0ZDTWVtYmVycyxpbnBhcmFtMjogU2tpbGxbXSwgaW5wYXJhbTM6RmlsZVVwbG9hZFtdKTogT2JzZXJ2YWJsZTxDb21tb25FcnJvcj4ge1xyXG5cclxuICAgIGxldCBoZWFkZXJzMSA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuXHJcbiAgICB2YXIgYm9keTEgPSBgbWVtYmVyc2Vzc2lvbmlkPSR7bWVtYmVyc2Vzc2lvbmlkfSZpbnBhcmFtPSR7SlNPTi5zdHJpbmdpZnkoIGlucGFyYW0pfSZpbnBhcmFtMj0ke0pTT04uc3RyaW5naWZ5KCBpbnBhcmFtMil9JmZpbGV1cGxvYWRqc29uPSR7SlNPTi5zdHJpbmdpZnkoIGlucGFyYW0zKX1gO1xyXG5cclxuICAgIHZhciB1cmwyID0gYCR7dGhpcy5iYXNlVXJsfVdTX3Byb2NfbWVtYmVyX215cHJvZmlsZWA7XHJcblxyXG4gICAgbGV0IGNvbXBsYWludHMxJCA9IHRoaXMuaHR0cFxyXG4gICAgICAucG9zdCh1cmwyLCBib2R5MSwgeyBoZWFkZXJzOiBoZWFkZXJzMSB9KVxyXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcblxyXG4gICAgcmV0dXJuIGNvbXBsYWludHMxJDtcclxuICB9XHJcbiBcclxuIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogICAgIE15IFByb2plY3QgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuICBzYXZlTXlQcm9qZWN0KG1lbWJlcnNlc3Npb25pZDogc3RyaW5nLGlucGFyYW06IE15UHJvamVjdCxpbnBhcmFtMjogU2tpbGxbXSwgaW5wYXJhbTM6RmlsZVVwbG9hZFtdKTogT2JzZXJ2YWJsZTxDb21tb25FcnJvcj4ge1xyXG5cclxuICAgIGxldCBoZWFkZXJzMSA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuXHJcbiAgICB2YXIgYm9keTEgPSBgbWVtYmVyc2Vzc2lvbmlkPSR7bWVtYmVyc2Vzc2lvbmlkfSZpbnBhcmFtPSR7SlNPTi5zdHJpbmdpZnkoIGlucGFyYW0pfSZpbnBhcmFtMj0ke0pTT04uc3RyaW5naWZ5KCBpbnBhcmFtMil9JmZpbGV1cGxvYWRqc29uPSR7SlNPTi5zdHJpbmdpZnkoIGlucGFyYW0zKX1gO1xyXG4gICAgdmFyIHVybDIgPSBgJHt0aGlzLmJhc2VVcmx9V1NfcHJvY19tZW1iZXJfbXlwcm9qZWN0YDtcclxuXHJcbiAgICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KHVybDIsIGJvZHkxLCB7IGhlYWRlcnM6IGhlYWRlcnMxIH0pXHJcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuXHJcbiAgICByZXR1cm4gY29tcGxhaW50czEkO1xyXG4gIH1cclxuXHJcblxyXG4gIGdldE15UHJvamVjdEdyaWQobWVtYmVyc2Vzc2lvbmlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE15UHJvamVjdEdyaWQ+e1xyXG4gICBcclxuICAgIGxldCBoZWFkZXJzMSA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuICAgXHJcbiAgICB2YXIgYm9keTEgPSBgbWVtYmVyc2Vzc2lvbmlkPSR7bWVtYmVyc2Vzc2lvbmlkfWA7XHJcbiAgIFxyXG4gICAgdmFyIHVybDIgPSBgJHt0aGlzLmJhc2VVcmx9V1NfcHJvY192d19tZW1iZXJteXByb2plY3RfbWFpbmNhdF9zZWxlY3Rqc29uYDsvL3NlbGVjdEVkaXRNaWxlc3RvbmVgO1xyXG4gICAgXHJcbiAgICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KHVybDIgLCBib2R5MSAse2hlYWRlcnM6IGhlYWRlcnMxfSlcclxuICAgICAgLm1hcCgocmVzOlJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICAgIC8vYWxlcnQoXCJnZXREaXNwbGF5QWxsMiBhZnRlclwiKTtcclxuICAgICAgcmV0dXJuIGNvbXBsYWludHMxJDsgXHJcbiAgfVxyXG5cclxuIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogICAgIE1lbWJlciBFbXBsb3ltZW50ICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbiAgc2F2ZU1lbWJlckVtcGxveW1lbnQobWVtYmVyc2Vzc2lvbmlkOiBzdHJpbmcsaW5wYXJhbTogTWVtYmVyRW1wbG95bWVudCxpbnBhcmFtMjogU2tpbGxbXSwgaW5wYXJhbTM6RmlsZVVwbG9hZFtdKTogT2JzZXJ2YWJsZTxDb21tb25FcnJvcj4ge1xyXG5cclxuICAgIGxldCBoZWFkZXJzMSA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuXHJcbiAgICB2YXIgYm9keTEgPSBgbWVtYmVyc2Vzc2lvbmlkPSR7bWVtYmVyc2Vzc2lvbmlkfSZpbnBhcmFtPSR7SlNPTi5zdHJpbmdpZnkoIGlucGFyYW0pfSZpbnBhcmFtMj0ke0pTT04uc3RyaW5naWZ5KCBpbnBhcmFtMil9JmZpbGV1cGxvYWRqc29uPSR7SlNPTi5zdHJpbmdpZnkoIGlucGFyYW0zKX1gO1xyXG4gICAgXHJcbiAgICB2YXIgdXJsMiA9IGAke3RoaXMuYmFzZVVybH1XU19wcm9jX21lbWJlcl9lbXBsb3ltZW50YDtcclxuXHJcbiAgICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KHVybDIsIGJvZHkxLCB7IGhlYWRlcnM6IGhlYWRlcnMxIH0pXHJcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuXHJcbiAgICByZXR1cm4gY29tcGxhaW50czEkO1xyXG4gIH1cclxuXHJcblxyXG5cclxuIGdldEVtcGxveW1lbnRHcmlkKG1lbWJlcnNlc3Npb25pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxFbXBsb3ltZW50R3JpZD57XHJcbiAgIFxyXG4gICAgbGV0IGhlYWRlcnMxID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMxLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICBcclxuICAgIHZhciBib2R5MSA9IGBtZW1iZXJzZXNzaW9uaWQ9JHttZW1iZXJzZXNzaW9uaWR9YDtcclxuICAgXHJcbiAgICB2YXIgdXJsMiA9IGAke3RoaXMuYmFzZVVybH1XU19wcm9jX3Z3X21lbWJlcmVtcGxveW1lbnRfbWFpbmNhdF9zZWxlY3Rqc29uYDsvL3NlbGVjdEVkaXRNaWxlc3RvbmVgO1xyXG4gICAgXHJcbiAgICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KHVybDIgLCBib2R5MSAse2hlYWRlcnM6IGhlYWRlcnMxfSlcclxuICAgICAgLm1hcCgocmVzOlJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICAgIC8vYWxlcnQoXCJnZXREaXNwbGF5QWxsMiBhZnRlclwiKTtcclxuICAgICAgcmV0dXJuIGNvbXBsYWludHMxJDsgXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAgICAgTWVtYmVyIEVtcGxveW1lbnQgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuICBzYXZlTWVtYmVyRWR1Y2F0aW9uKG1lbWJlcnNlc3Npb25pZDogc3RyaW5nLGlucGFyYW06IE1lbWJlckVkdWNhdGlvbik6IE9ic2VydmFibGU8Q29tbW9uRXJyb3I+IHtcclxuXHJcbiAgICBsZXQgaGVhZGVyczEgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVyczEuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcblxyXG4gICAgdmFyIGJvZHkxID0gYG1lbWJlcnNlc3Npb25pZD0ke21lbWJlcnNlc3Npb25pZH0maW5wYXJhbT0ke0pTT04uc3RyaW5naWZ5KCBpbnBhcmFtKX1gO1xyXG4gIFxyXG4gICAgdmFyIHVybDIgPSBgJHt0aGlzLmJhc2VVcmx9V1NfcHJvY19tZW1iZXJfZWR1Y2F0aW9uYDtcclxuXHJcbiAgICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KHVybDIsIGJvZHkxLCB7IGhlYWRlcnM6IGhlYWRlcnMxIH0pXHJcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuXHJcbiAgICByZXR1cm4gY29tcGxhaW50czEkO1xyXG4gIH1cclxuXHJcblxyXG5cclxuIGdldEVkdWNhdGlvbkdyaWQobWVtYmVyc2Vzc2lvbmlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEVkdWNhdGlvbkdyaWQ+e1xyXG4gICBcclxuICAgIGxldCBoZWFkZXJzMSA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzMS5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuICAgXHJcbiAgICB2YXIgYm9keTEgPSBgbWVtYmVyc2Vzc2lvbmlkPSR7bWVtYmVyc2Vzc2lvbmlkfWA7XHJcbiAgIFxyXG4gICAgdmFyIHVybDIgPSBgJHt0aGlzLmJhc2VVcmx9V1NfcHJvY192d19tZW1iZXJlZHVjYXRpb25fZWR1Y2F0aW9uX3NlbGVjdGpzb25gOy8vc2VsZWN0RWRpdE1pbGVzdG9uZWA7XHJcbiAgICBcclxuICAgIGxldCBjb21wbGFpbnRzMSQgPSB0aGlzLmh0dHBcclxuICAgICAgLnBvc3QodXJsMiAsIGJvZHkxICx7aGVhZGVyczogaGVhZGVyczF9KVxyXG4gICAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgICAgLy9hbGVydChcImdldERpc3BsYXlBbGwyIGFmdGVyXCIpO1xyXG4gICAgICByZXR1cm4gY29tcGxhaW50czEkOyBcclxuICB9XHJcblxyXG5cclxuXHJcbiAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICAgICBNZW1iZXIgRXhwZXJpZW5jZSAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4gIHNhdmVNZW1iZXJFeHBlcmllbmNlKG1lbWJlcnNlc3Npb25pZDogc3RyaW5nLGlucGFyYW06IE1lbWJlckV4cGVyaWVuY2UsaW5wYXJhbTI6IFNraWxsW10sIGlucGFyYW0zOkZpbGVVcGxvYWRbXSk6IE9ic2VydmFibGU8Q29tbW9uRXJyb3I+IHtcclxuXHJcbiAgICBsZXQgaGVhZGVyczEgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVyczEuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XHJcblxyXG4gICAgdmFyIGJvZHkxID0gYG1lbWJlcnNlc3Npb25pZD0ke21lbWJlcnNlc3Npb25pZH0maW5wYXJhbT0ke0pTT04uc3RyaW5naWZ5KCBpbnBhcmFtKX0maW5wYXJhbTI9JHtKU09OLnN0cmluZ2lmeSggaW5wYXJhbTIpfSZmaWxldXBsb2FkanNvbj0ke0pTT04uc3RyaW5naWZ5KCBpbnBhcmFtMyl9YDtcclxuICAgXHJcbiAgICB2YXIgdXJsMiA9IGAke3RoaXMuYmFzZVVybH1XU19wcm9jX21lbWJlcl9leHBlcmllbmNlYDtcclxuXHJcbiAgICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KHVybDIsIGJvZHkxLCB7IGhlYWRlcnM6IGhlYWRlcnMxIH0pXHJcbiAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuXHJcbiAgICByZXR1cm4gY29tcGxhaW50czEkO1xyXG4gIH1cclxuXHJcblxyXG5cclxuIGdldEV4cGVyaWVuY2VHcmlkKG1lbWJlcnNlc3Npb25pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxFeHBlcmllbmNlR3JpZD57XHJcbiAgIFxyXG4gICAgbGV0IGhlYWRlcnMxID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMxLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICBcclxuICAgIHZhciBib2R5MSA9IGBtZW1iZXJzZXNzaW9uaWQ9JHttZW1iZXJzZXNzaW9uaWR9YDtcclxuICAgXHJcbiAgICB2YXIgdXJsMiA9IGAke3RoaXMuYmFzZVVybH1XU19wcm9jX3Z3X21lbWJlcmV4cGVyaWVuY2VfbWFpbmNhdF9zZWxlY3Rqc29uYDsvL3NlbGVjdEVkaXRNaWxlc3RvbmVgO1xyXG4gICAgXHJcbiAgICBsZXQgY29tcGxhaW50czEkID0gdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KHVybDIgLCBib2R5MSAse2hlYWRlcnM6IGhlYWRlcnMxfSlcclxuICAgICAgLm1hcCgocmVzOlJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICAgIC8vYWxlcnQoXCJnZXREaXNwbGF5QWxsMiBhZnRlclwiKTtcclxuICAgICAgcmV0dXJuIGNvbXBsYWludHMxJDsgXHJcbiAgfVxyXG5cclxuICBcclxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcclxuICAgIC8vIEluIGEgcmVhbCB3b3JsZCBhcHAsIHdlIG1pZ2h0IHVzZSBhIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXHJcbiAgICAvLyBXZSdkIGFsc28gZGlnIGRlZXBlciBpbnRvIHRoZSBlcnJvciB0byBnZXQgYSBiZXR0ZXIgbWVzc2FnZVxyXG4gICAgbGV0IGVyck1zZyA9IChlcnJvci5tZXNzYWdlKSA/IGVycm9yLm1lc3NhZ2UgOlxyXG4gICAgICBlcnJvci5zdGF0dXMgPyBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0fWAgOiAnU2VydmVyIGVycm9yJztcclxuICAgXHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJNc2cpO1xyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuIl19
