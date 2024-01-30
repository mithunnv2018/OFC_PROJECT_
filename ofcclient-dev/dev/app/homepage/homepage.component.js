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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var first_pipe_1 = require('../shared/pipes/first.pipe');
var index_1 = require('../shared/homepage/index');
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var baseurl_service_1 = require('../shared/baseurl/baseurl.service');
var HomePageComponent = (function () {
    function HomePageComponent(fb, route, router, localService, mycur, mydate1, emailval, baseUrlservice) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.localService = localService;
        this.mycur = mycur;
        this.mydate1 = mydate1;
        this.emailval = emailval;
        this.baseUrlservice = baseUrlservice;
        this.msgs = [];
        this.homepages = [];
        this.drpvar = [];
        this.drphomepage = [];
        this.uploadedFiles = [];
        this.fileuploadarr = [];
        this.temppopularsearch = [];
        this.testimonial = [];
        this.plan = [];
        this.popularsearchhomepage = [];
        this.popularserviceshomepage = [];
        this.mybaseurl = baseUrlservice.getBaseurl();
        this.mybaseurlpopularserviceimages = baseUrlservice.getBaseurlfiledownloadepath();
    }
    HomePageComponent.prototype.clear = function () {
        this.newhomepage = true;
        this.homepage = {
            status: 'active',
            comp_id: '',
            member_id: '',
            homepage_id: '1',
            homepage_name: '',
            homepage_budget: '',
            homepage_enddate: '',
            homepage_remarks: '',
            homepage_manhours: '',
            HomePage_timeframe: '',
            homepage_completed: 'No',
            homepage_startdate: '',
            homepage_commission: '',
            homepage_description: '',
            homepage_requireddaystocomplete: '',
        };
        this.fileupload = {
            fileName: '',
            fileType: '',
            filePath: '',
            fileStatus: '',
            uploadfile_filename: ''
        };
    };
    HomePageComponent.prototype.onRowSelect = function (event) {
        this.newhomepage = false;
        var tempproj;
        tempproj = this.selectedRow;
    };
    HomePageComponent.prototype.aftercalldate = function () {
        this.startdate = new Date(Number(this.homepage.homepage_startdate));
        this.enddate = new Date(Number(this.homepage.homepage_enddate));
    };
    HomePageComponent.prototype.onFinalFileUpload = function () {
        for (var i = 0; i < this.uploadedFiles.length; i++) {
            var filename = this.uploadedFiles[i].name;
            this.fileupload.fileName = filename;
            this.fileupload.filePath = '';
            this.fileupload.fileStatus = 'Yes';
            this.fileupload.fileType = 'img';
            this.fileupload.uploadfile_filename = '';
            this.fileuploadarr.push(this.fileupload);
        }
    };
    HomePageComponent.prototype.onSubmit = function () {
        this.homepage.homepage_startdate = this.mydate1.parse(this.startdate);
        this.homepage.homepage_enddate = this.mydate1.parse(this.enddate);
        this.onFinalFileUpload();
        this.submitted = true;
        this.msgs = [];
        console.log(JSON.stringify(this.homepage));
        this.msgs.push({ severity: 'info', summary: 'Please wait', detail: 'Form Submitted Successfully.. Please wait..' });
        this.submitted = true;
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Update Successfully' });
    };
    HomePageComponent.prototype.onUpload = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
        }
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    };
    HomePageComponent.prototype.onBeforeUpload = function (event) {
        event.xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;multipart/form-data;');
        console.log("mith here:");
    };
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clear();
        var pop1 = {
            popularsearchname: 'Company Search',
            popularsearchurl: 'resources/ofc/images/popular-searches-01.png',
        };
        var pop2 = {
            popularsearchname: 'Trademarks & Patent',
            popularsearchurl: 'resources/ofc/images/popular-searches-02.png',
        };
        var pop3 = {
            popularsearchname: 'Telemarketing',
            popularsearchurl: 'resources/ofc/images/popular-searches-03.png',
        };
        var pop4 = {
            popularsearchname: 'Article Writing',
            popularsearchurl: 'resources/ofc/images/popular-searches-04.png',
        };
        var pop5 = {
            popularsearchname: 'Factory',
            popularsearchurl: 'resources/ofc/images/popular-searches-05.png',
        };
        var pop6 = {
            popularsearchname: 'Promotional Videos',
            popularsearchurl: 'resources/ofc/images/popular-searches-06.png',
        };
        this.localService
            .getPopularServicesFileUpload()
            .subscribe(function (p) { return _this.popularserviceshomepage = p; }, function (e) { return console.log(e); }, function () {
        });
        this.localService
            .getPopularSearch()
            .subscribe(function (p) { return _this.popularsearchhomepage = p; }, function (e) { return console.log(e); }, function () { });
        this.localService
            .getTestimonial()
            .subscribe(function (p) { return _this.testimonial = p; }, function (e) { return console.log(e); }, function () { return _this.processdata(); });
        this.localService
            .getPriceNLevel()
            .subscribe(function (p) { return _this.plan = p; }, function (e) { return console.log(e); }, function () { return _this.processdata(); });
    };
    HomePageComponent.prototype.processdata = function () {
    };
    HomePageComponent.prototype.populatedrp = function () {
        for (var i = 0; i < this.drpvar.length; i++) {
            this.drphomepage.push({ label: this.drpvar[i].labeld, value: this.drpvar[i].valued });
        }
    };
    HomePageComponent.prototype.drpchange = function (events1) {
    };
    Object.defineProperty(HomePageComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.userform.value); },
        enumerable: true,
        configurable: true
    });
    HomePageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-homepage',
            templateUrl: 'homepage.component.html',
            styleUrls: ['homepage.component.css'],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, baseurl_service_1.BaseUrlService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, index_1.HomePageService, first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, baseurl_service_1.BaseUrlService])
    ], HomePageComponent);
    return HomePageComponent;
}());
exports.HomePageComponent = HomePageComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpQyxlQUFlLENBQUMsQ0FBQTtBQUNqRCxzQkFBMkQsZ0JBQWdCLENBQUMsQ0FBQTtBQUk1RSx1QkFBdUMsaUJBQWlCLENBQUMsQ0FBQTtBQVN6RCwyQkFBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUM1RCxzQkFBZ0MsMEJBQTBCLENBQUMsQ0FBQTtBQUkzRCxrQ0FBNkIsbUNBQW1DLENBQUMsQ0FBQTtBQUNqRSxtQ0FBOEIsb0NBQW9DLENBQUMsQ0FBQTtBQUVuRSxnQ0FBNkIsbUNBQW1DLENBQUMsQ0FBQTtBQW9CakU7SUF1RkUsMkJBQW9CLEVBQWUsRUFDZixLQUFxQixFQUNyQixNQUFjLEVBQ2QsWUFBNkIsRUFDN0IsS0FBcUIsRUFDckIsT0FBcUIsRUFDckIsUUFBdUIsRUFDdkIsY0FBNkI7UUFQN0IsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFDN0IsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBMUZqRCxTQUFJLEdBQVksRUFBRSxDQUFDO1FBR25CLGNBQVMsR0FBYSxFQUFFLENBQUM7UUFNeEIsV0FBTSxHQUFjLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFlLEVBQUUsQ0FBQztRQVc5QixrQkFBYSxHQUFVLEVBQUUsQ0FBQztRQUUxQixrQkFBYSxHQUFlLEVBQUUsQ0FBQztRQVMvQixzQkFBaUIsR0FBdUIsRUFBRSxDQUFDO1FBRTNDLGdCQUFXLEdBQWlCLEVBQUUsQ0FBQztRQUUvQixTQUFJLEdBQVMsRUFBRSxDQUFDO1FBRWhCLDBC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O0lBR0QscUNBQVMsR0FBVCxVQUFVLE9BQVk7SUFFdEIsQ0FBQztJQUdELHNCQUFJLHlDQUFVO2FBQWQsY0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBdFhsRTtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztZQUNyQyxTQUFTLEVBQUMsQ0FBQywyQkFBYyxFQUFDLGdDQUFZLEVBQUMsa0NBQWEsRUFBQyxnQ0FBYyxDQUFDO1NBQ3JFLENBQUM7O3lCQUFBO0lBa1hELHdCQUFDO0FBQUQsQ0FqWEQsQUFpWEUsSUFBQTtBQWpYVyx5QkFBaUIsb0JBaVg1QixDQUFBIiwiZmlsZSI6ImFwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUdyb3VwLEZvcm1Db250cm9sLFZhbGlkYXRvcnMsRm9ybUJ1aWxkZXJ9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7TWVzc2FnZXNNb2R1bGUsTWVzc2FnZSxHcm93bH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtQYW5lbE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7QnV0dG9uTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0hvbWVQYWdlfSBmcm9tICcuL2hvbWVwYWdlJztcclxuaW1wb3J0IHtEcm9wZG93bjF9IGZyb20gJy4vZHJvcGRvd24xJztcclxuaW1wb3J0IHtGaWxlVXBsb2FkfSBmcm9tICcuL2ZpbGV1cGxvYWQnO1xyXG5pbXBvcnQge0RhdGFUYWJsZU1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtEcm9wZG93bk1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuXHJcblxyXG5pbXBvcnQgeyBNeUN1cnJlbmN5UGlwZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9maXJzdC5waXBlJztcclxuaW1wb3J0IHsgSG9tZVBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2hvbWVwYWdlL2luZGV4JztcclxuXHJcbmltcG9ydCB7RmlsZVVwbG9hZE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtTZWxlY3RJdGVtfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZSc7XHJcbmltcG9ydCB7IEN1c3RvbVZhbGlkYXRvciB9IGZyb20gJy4uL3NoYXJlZC92YWxpZGF0b3JzL3ZhbGlkYXRvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0Jhc2VVcmxTZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvYmFzZXVybC9iYXNldXJsLnNlcnZpY2UnO1xyXG5cclxuLy90ZW1wIHRzXHJcbmltcG9ydCB7VGVtcFBvcHVsYXJTZWFyY2h9IGZyb20gJy4vdGVtcHBvcHVsYXJzZWFyY2gnO1xyXG4vL2FzIGRvbmUgb24gMTggamFuIDIwMTcgYnkgTWFuZGFyXHJcbmltcG9ydCB7UG9wdWxhclNlYXJjaEhvbWVwYWdlfSBmcm9tICcuL3BvcHVsYXJzZWFyY2hob21lcGFnZSc7XHJcbmltcG9ydCB7VGVzdGltb25pYWx9IGZyb20gJy4vdGVzdGltb25pYWwnO1xyXG5pbXBvcnQge1BsYW59IGZyb20gJy4vcGxhbic7XHJcbi8vYXMgZG9uZSBvbiAzMCBqYW4gMjAxNyBieSBNYW5kYXIgZm9yIHBvcHVsYXIgc2VydmljZSBwb3B1bGF0ZVxyXG5pbXBvcnQge1BvcHVsYXJTZXJ2aWNlSG9tZXBhZ2V9IGZyb20gJy4vcG9wdWxhcnNlcnZpY2VzaG9tZXBhZ2UnO1xyXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBob21lcGFnZUNvbXBvbmVudC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzZC1ob21lcGFnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdob21lcGFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2hvbWVwYWdlLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6W015Q3VycmVuY3lQaXBlLE15RGF0ZUZvcm1hdCxFbWFpbFZhbGlkYXRlLEJhc2VVcmxTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8vRm9ybSBncm9wIFxyXG4gIHVzZXJmb3JtOiBGb3JtR3JvdXA7XHJcbiAgLy8gR3Jvd2wgbWVzc2VnZVxyXG4gIG1zZ3M6IE1lc3NhZ2VbXT1bXTtcclxuXHJcbiAgLy9EZWNsYXJlOiBEYXRhIGhhbmRsaW5nIGZvciBHcmlkIGZsb3csIGZvcm0gZmxvd1xyXG4gIGhvbWVwYWdlczogSG9tZVBhZ2VbXT1bXTtcclxuICBzdWJtaXR0ZWQ6IGJvb2xlYW47XHJcbiAgaG9tZXBhZ2U6IEhvbWVQYWdlO1xyXG4gIHNlbGVjdGVkUm93OiBIb21lUGFnZTtcclxuXHJcbiAgIC8vIEZvcm0gZGF0YSBwcmVmaWxsZWRcclxuICAgZHJwdmFyOiBEcm9wZG93bjFbXT1bXTtcclxuICAgZHJwaG9tZXBhZ2U6IFNlbGVjdEl0ZW1bXT1bXTtcclxuICAgc3RhcnRkYXRlOiBEYXRlO1xyXG4gICBlbmRkYXRlOiBEYXRlO1xyXG5cclxuICAgLy9ib29sZWFuIHZhbHVlIGZvciBBZGQgbmV3IG9yIEVkaXQgTW9kZVxyXG4gICBuZXdob21lcGFnZTogYm9vbGVhbjtcclxuICAgXHJcbiAgLy8gIHNlbGVjdGVkaG9tZXBhZ2U6IHN0cmluZztcclxuICAgICAgIFxyXG4gIC8vKioqIGZpbGV1cGxvYWQgRGVjbGFyZSAqKipcclxuICAvL0NsaWVudCBmb3JtYXQgZm9yIGZpbGUgdXBsb2FkXHJcbiAgdXBsb2FkZWRGaWxlczogYW55W10gPSBbXTtcclxuICAvL3NlcnZlciBmb3JtYXQgZm9yIGZpbGUgdXBsb2FkXHJcbiAgZmlsZXVwbG9hZGFycjogRmlsZVVwbG9hZFtdPVtdO1xyXG4gIGZpbGV1cGxvYWQ6IEZpbGVVcGxvYWQ7XHJcblxyXG4gIG15YmFzZXVybDpzdHJpbmc7XHJcblxyXG4gIC8vYXMgZG9uZSBvbiAzMSBqYW4gMjAxNyBieSBNYW5kYXIgZm9yIHBvcHVsYXJzZXJ2aWNlIGltYWdlcyBkaXNwbGF5IG9uIGhvbWVwYWdlXHJcbiAgbXliYXNldXJscG9wdWxhcnNlcnZpY2VpbWFnZXM6c3RyaW5nO1xyXG5cclxuICAvL3RlbXBcclxuICB0ZW1wcG9wdWxhcnNlYXJjaCA6IFRlbXBQb3B1bGFyU2VhcmNoW109W107XHJcblxyXG4gIHRlc3RpbW9uaWFsIDogVGVzdGltb25pYWxbXT1bXTtcclxuXHJcbiAgcGxhbiA6UGxhbltdPVtdO1xyXG5cclxuICBwb3B1bGFyc2VhcmNoaG9tZXBhZ2U6UG9wdWxhclNlYXJjaEhvbWVwYWdlW109W107XHJcblxyXG4gIC8vYXMgZG9uZSBvbiAzMCBqYW4gMjAxNyBieSBNYW5kYXIgZm9yIGRpc3BsYXlpbmcgcG9wdWxhciBzZXJ2aWNlc1xyXG4vL2FzIGRvbmUgb24gMzEgamFuIDIwMTcgYnkgTWFuZGFyIGZvciBkaXNwbGF5aW5nIHBvcHVsYXIgc2VydmljZXMoPXJlZG9uZT0pXHJcbiAgcG9wdWxhcnNlcnZpY2VzaG9tZXBhZ2UgOiBQb3B1bGFyU2VydmljZUhvbWVwYWdlW109W107XHJcbiAgXHJcbiAgXHJcblxyXG4gIC8vcG9wdWxhcnNlcnZpY2VzRmlsZVVwbG9hZCA6IEZpbGVVcGxvYWRbXT1bXTtcclxuXHJcbiAgLy9QcmVwYXJlIGRhdGEgZm9yIG5ldyBlbnRyeSBvciBpbml0aXplIGRhdGEgZHVyaW5nIGZvcm0gbG9hZCBieSBjbGVhcmluZyBkYXRhIG9yIHByZXNldHRpbmcgZGF0YVxyXG4gIGNsZWFyKCl7XHJcbiAgICAgICAgdGhpcy5uZXdob21lcGFnZT10cnVlO1xyXG4gICAgICAgIHRoaXMuaG9tZXBhZ2U9e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIHN0YXR1cyA6J2FjdGl2ZScsXHJcbiAgICAgICAgICBjb21wX2lkIDonJyxcclxuICAgICAgICAgIG1lbWJlcl9pZCA6JycsXHJcbiAgICAgICAgICBob21lcGFnZV9pZDonMScsXHJcbiAgICAgICAgICBob21lcGFnZV9uYW1lOicnLFxyXG4gICAgICAgICAgaG9tZXBhZ2VfYnVkZ2V0OicnLFxyXG4gICAgICAgICAgaG9tZXBhZ2VfZW5kZGF0ZTonJyxcclxuICAgICAgICAgIGhvbWVwYWdlX3JlbWFya3M6JycsXHJcbiAgICAgICAgICBob21lcGFnZV9tYW5ob3VyczonJyxcclxuICAgICAgICAgIEhvbWVQYWdlX3RpbWVmcmFtZTonJyxcclxuICAgICAgICAgIGhvbWVwYWdlX2NvbXBsZXRlZDonTm8nLFxyXG4gICAgICAgICAgaG9tZXBhZ2Vfc3RhcnRkYXRlOicnLFxyXG4gICAgICAgICAgaG9tZXBhZ2VfY29tbWlzc2lvbjonJyxcclxuICAgICAgICAgIGhvbWVwYWdlX2Rlc2NyaXB0aW9uOicnLFxyXG4gICAgICAgICAgaG9tZXBhZ2VfcmVxdWlyZWRkYXlzdG9jb21wbGV0ZTonJyxcclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIHRoaXMuZmlsZXVwbG9hZD17XHJcbiAgICAgIGZpbGVOYW1lOiAnJyxcclxuICAgICAgZmlsZVR5cGU6ICcnLFxyXG4gICAgICBmaWxlUGF0aDogJycsXHJcbiAgICAgIGZpbGVTdGF0dXM6ICcnLFxyXG4gICAgICB1cGxvYWRmaWxlX2ZpbGVuYW1lOiAnJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gY29uc3RydWN0b3IgaW5pdGlhemUgb2YgYWxsIG5lY2Vzc2FyeSB2YXJpYWJsZSBhbmQgb2JqZWN0c1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBsb2NhbFNlcnZpY2U6IEhvbWVQYWdlU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG15Y3VyOiBNeUN1cnJlbmN5UGlwZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIG15ZGF0ZTE6IE15RGF0ZUZvcm1hdCxcclxuICAgICAgICAgICAgICBwcml2YXRlIGVtYWlsdmFsOiBFbWFpbFZhbGlkYXRlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgYmFzZVVybHNlcnZpY2U6QmFzZVVybFNlcnZpY2VcclxuICAgICAgICAgICAgICApe1xyXG4gICAgICAgICAgIHRoaXMubXliYXNldXJsPWJhc2VVcmxzZXJ2aWNlLmdldEJhc2V1cmwoKTtcclxuXHJcbiAgICAgICAgICAgdGhpcy5teWJhc2V1cmxwb3B1bGFyc2VydmljZWltYWdlcz1iYXNlVXJsc2VydmljZS5nZXRCYXNldXJsZmlsZWRvd25sb2FkZXBhdGgoKTsgICAgIFxyXG4gICAgICAgICAgLy8gZHJwb3AgZG93biBjYW4gb25seSBiZSBwb3B1bGF0ZWQgaW4gY29uc3RydWN0b3IgYW5kIG5vdCBpbiBuZ2luaXQoKVxyXG4gICAgICAgICAgLy8gdGhpcy5sb2NhbFNlcnZpY2VcclxuICAgICAgICAgIC8vIC5nZXRzZWxlY3RkcnBob21lcGFnZSgnaGonKVxyXG4gICAgICAgICAgLy8gLnN1YnNjcmliZShcclxuICAgICAgICAgIC8vICAgLyogaGFwcHkgcGF0aCAqLyBwID0+dGhpcy5kcnB2YXI9cCwvL2FsZXJ0KCBKU09OLnN0cmluZ2lmeSggcCkpLFxyXG4gICAgICAgICAgLy8gICAvKiBlcnJvciBwYXRoICovIGUgPT4gY29uc29sZS5sb2coZSksXHJcbiAgICAgICAgICAvLyAgIC8qIG9uQ29tcGxldGUgKi8gKCkgPT4gdGhpcy5wb3B1bGF0ZWRycCgpKTsvL3t0aGlzLm15bWV0aG9kKHRoaXMuZHJwdmFyKTt9KTsvL3RoaXMubXNncy5wdXNoKHtzZXZlcml0eTonaW5mbycsIHN1bW1hcnk6J1N1Y2Nlc3MnLCBkZXRhaWw6J0Zvcm0gVXBkYXRlIFN1Y2Nlc3NmdWxseTogJyArIEpTT04uc3RyaW5naWZ5KCB0aGlzLmRycHZhcikgKyAnIDogJyArIHRoaXMuZHJwdmFyLmxlbmd0aH0pKTtcclxuXHJcbiAgICBcclxuICB9XHJcbiAgb25Sb3dTZWxlY3QoZXZlbnQ6IGFueSl7XHJcbiAgICAgICAgIC8vSW5kaWNhdG9yIGZvciBmb3JtIGlzIGluIEVkaXQgbW9kZVxyXG4gICAgICAgICB0aGlzLm5ld2hvbWVwYWdlPWZhbHNlO1xyXG4gICAgICAgICAvL0NvcHkgb2Ygcm93IHNlbGVjdGVkXHJcbiAgICAgICAgLy8gIHRoaXMuaG9tZXBhZ2U9dGhpcy5zZWxlY3RlZFJvdztcclxuICAgICAgICAgbGV0IHRlbXBwcm9qOiBIb21lUGFnZTtcclxuICAgICAgICAgdGVtcHByb2ogPSB0aGlzLnNlbGVjdGVkUm93O1xyXG4gICAgICAgICAvL0NhbGxpbmcgV1MgdG8gZ2V0IHRoZSBzZWxlY3RlZCBkYXRhIGZyb20gc2VydmVyIERCIG9mIHRoZSBzZWxlY3RlZCByb3dcclxuICAgICAgLy8gICAgdGhpcy5sb2NhbFNlcnZpY2VcclxuICAgICAgLy8gLmdldHNlbGVjdEFsbGZpbGVIb21lUGFnZSh0ZW1wcHJvai5ob21lcGFnZV9pZClcclxuICAgICAgLy8gLnN1YnNjcmliZShcclxuICAgICAgLy8gICAgLyogaGFwcHkgcGF0aCAqLyBwID0+IHRoaXMuZmlsZXVwbG9hZGFycj1wLFxyXG4gICAgICAvLyAgICAvKiBlcnJvciBwYXRoICovIGUgPT4gY29uc29sZS5sb2coIGUpLFxyXG4gICAgICAvLyAgICAvKiBvbkNvbXBsZXRlICovICgpID0+IGNvbnNvbGUubG9nKCdkb25lIGdldHNlbGVjdEFsbGZpbGV1cGxvYWRob21lcGFnZTogJyArIHRoaXMuZmlsZXVwbG9hZGFycikpO1xyXG5cclxuICAgICAgICAvLyAgY29uc29sZS5sb2coJ29uUm93U2VsZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkgKHRoaXMuaG9tZXBhZ2UpKTtcclxuICAgICAgICAvLyAgY29uc29sZS5sb2coJ29uUm93U2VsZWN0IGZpbGV1cGxvYWRhcnI6ICcgKyBKU09OLnN0cmluZ2lmeSAodGhpcy5maWxldXBsb2FkYXJyKSk7XHJcblxyXG4gICAgICAgICAvL0NhbGxpbmcgV1MgdG8gZ2V0IHRoZSBzZWxlY3RlZCBkYXRhIGZyb20gc2VydmVyIERCIG9mIHRoZSBzZWxlY3RlZCByb3dcclxuICAgICAgLy8gICB0aGlzLmxvY2FsU2VydmljZVxyXG4gICAgICAvLyAuZ2V0ZWRpdCh0ZW1wcHJvai5ob21lcGFnZV9pZClcclxuICAgICAgLy8gLnN1YnNjcmliZShcclxuICAgICAgLy8gICAgLyogaGFwcHkgcGF0aCAqLyBwID0+IHRoaXMuaG9tZXBhZ2U9cCxcclxuICAgICAgLy8gICAgLyogZXJyb3IgcGF0aCAqLyBlID0+IGNvbnNvbGUubG9nKCBlKSxcclxuICAgICAgLy8gICAgLyogb25Db21wbGV0ZSAqLyAoKSA9PiB7dGhpcy5hZnRlcmNhbGxkYXRlKCk7fSApOy8vY29uc29sZS5sb2coJ2RvbmUgZ2V0c2VsZWN0RWRpdGhvbWVwYWdlOiAnICsgdGhpcy5ob21lcGFnZSkpO1xyXG5cclxuICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gIH1cclxuICBhZnRlcmNhbGxkYXRlKCl7XHJcbiAgICAvLyAgYWxlcnQoSlNPTi5zdHJpbmdpZnkoIHRoaXMuaG9tZXBhZ2UpKTtcclxuICAgIC8vIGFsZXJ0KHRoaXMuaG9tZXBhZ2UuaG9tZXBhZ2VfZW5kZGF0ZSk7XHJcbiAgICAvLyAgICAgIGFsZXJ0KG5ldyBEYXRlKE51bWJlcih0aGlzLmhvbWVwYWdlLmhvbWVwYWdlX2VuZGRhdGUpICkpO1xyXG4gICAgLy8gICAgICBhbGVydChuZXcgRGF0ZShOdW1iZXIodGhpcy5ob21lcGFnZS5ob21lcGFnZV9zdGFydGRhdGUpICkpO1xyXG4gICAgdGhpcy5zdGFydGRhdGUgID0gbmV3IERhdGUoTnVtYmVyKHRoaXMuaG9tZXBhZ2UuaG9tZXBhZ2Vfc3RhcnRkYXRlICkpO1xyXG4gICAgdGhpcy5lbmRkYXRlICA9IG5ldyBEYXRlKE51bWJlcih0aGlzLmhvbWVwYWdlLmhvbWVwYWdlX2VuZGRhdGUgKSk7XHJcbiAgfVxyXG5cclxuICAvL1ByZXBhcmUgZm9yIEpTT04gZm9yIGZpbGUgdG8gYmUgdXBsb2FkZWQgdG8gc2VydmVyIGp1c3QgYWZ0ZXIgZm9ybSBzdWJtaXNzaW9uXHJcbiAgb25GaW5hbEZpbGVVcGxvYWQoKXsgICBcclxuICBcclxuICAgIC8vIGFsZXJ0KHRoaXMudXBsb2FkZWRGaWxlcy5sZW5ndGgpO1xyXG4gICAgZm9yKGxldCBpPTA7aTx0aGlzLnVwbG9hZGVkRmlsZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICBsZXQgZmlsZW5hbWU9dGhpcy51cGxvYWRlZEZpbGVzW2ldLm5hbWU7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLmZpbGV1cGxvYWQuZmlsZU5hbWU9ZmlsZW5hbWU7XHJcbiAgICAgICAgICB0aGlzLmZpbGV1cGxvYWQuZmlsZVBhdGg9Jyc7XHJcbiAgICAgICAgICB0aGlzLmZpbGV1cGxvYWQuZmlsZVN0YXR1cz0nWWVzJztcclxuICAgICAgICAgIHRoaXMuZmlsZXVwbG9hZC5maWxlVHlwZT0naW1nJztcclxuICAgICAgICAgIHRoaXMuZmlsZXVwbG9hZC51cGxvYWRmaWxlX2ZpbGVuYW1lPScnO1xyXG4gICAgICAgICAvLyBhbGVydChcImluc2lkZWZpbGV1cGxvYWQ6IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5maWxldXBsb2FkKSk7XHJcbiAgICAgICAgICB0aGlzLmZpbGV1cGxvYWRhcnIucHVzaCh0aGlzLmZpbGV1cGxvYWQpO1xyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcbiAgIFxyXG4gIH0gXHJcblxyXG4gIC8vIERhdGUgY2hhbmdlIGV2ZW50IHRvIGZvcm1hdCBuZ21vZGVsIHRvIG91ciBmb3JtYXQgZGF0ZSBhbmQgY2FsbGluZyBwaXBlIFxyXG4gIC8vIHN0YXJ0ZGF0ZWNoYW5nZSgpe1xyXG4gIC8vICAgdGhpcy5ob21lcGFnZS5wcm9qbWlsZV9zdGFydGRhdGU9dGhpcy5teWRhdGUxLnBhcnNlKHRoaXMuaG9tZXBhZ2UucHJvam1pbGVfc3RhcnRkYXRlKVxyXG4gIC8vIH1cclxuICAvLyBlbmRkYXRlY2hhbmdlKCl7XHJcbiAgLy8gICB0aGlzLmhvbWVwYWdlLnByb2ptaWxlX2VuZGRhdGU9dGhpcy5teWRhdGUxLnBhcnNlKHRoaXMuaG9tZXBhZ2UucHJvam1pbGVfZW5kZGF0ZSlcclxuICAvLyB9XHJcblxyXG5cclxuICBvblN1Ym1pdCgpe1xyXG4gICAgICAvLyAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHRoaXMuc2VsZWN0ZWRSb3cpKTtcclxuICAgICAgICAvL2FsZXJ0KHRoaXMuaG9tZXBhZ2UuaG9tZXBhZ2Vfc3RhcnRkYXRlKTtcclxuICAgICAgICB0aGlzLmhvbWVwYWdlLmhvbWVwYWdlX3N0YXJ0ZGF0ZT10aGlzLm15ZGF0ZTEucGFyc2UodGhpcy5zdGFydGRhdGUpXHJcbiAgXHJcbiAgICAgICAgdGhpcy5ob21lcGFnZS5ob21lcGFnZV9lbmRkYXRlPXRoaXMubXlkYXRlMS5wYXJzZSh0aGlzLmVuZGRhdGUpXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5vbkZpbmFsRmlsZVVwbG9hZCgpO1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1zZ3MgPSBbXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmhvbWVwYWdlKSk7XHJcbiAgICAgICAgdGhpcy5tc2dzLnB1c2goe3NldmVyaXR5OidpbmZvJywgc3VtbWFyeTonUGxlYXNlIHdhaXQnLCBkZXRhaWw6J0Zvcm0gU3VibWl0dGVkIFN1Y2Nlc3NmdWxseS4uIFBsZWFzZSB3YWl0Li4nfSlcclxuICAgICAgICBcclxuICAgICAgICAvLyAgY29uc29sZS5sb2coJ29uU3VibWl0IG9uUm93U2VsZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkgKHRoaXMuaG9tZXBhZ2UpKTtcclxuICAgICAgICAvLyAgY29uc29sZS5sb2coJ29uU3VibWl0IG9uUm93U2VsZWN0IGZpbGV1cGxvYWRhcnI6ICcgKyBKU09OLnN0cmluZ2lmeSAodGhpcy5maWxldXBsb2FkYXJyKSk7XHJcblxyXG4gICAgICAgIC8vIGlmKHRoaXMubmV3aG9tZXBhZ2Upey8vQWRkIG5ldyBlbnRyeSBzYXZpbmdcclxuICAgICAgICAvLyAgICB0aGlzLmxvY2FsU2VydmljZVxyXG4gICAgICAgIC8vICAgLmluc2VydCh0aGlzLmhvbWVwYWdlLHRoaXMuZmlsZXVwbG9hZGFycilcclxuICAgICAgICAvLyAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgLy8gICAgIC8qIGhhcHB5IHBhdGggKi8gcCA9PiB0aGlzLmhvbWVwYWdlcyA9IHAsXHJcbiAgICAgICAgLy8gICAgIC8qIGVycm9yIHBhdGggKi8gZSA9PiBjb25zb2xlLmxvZyhlKSxcclxuICAgICAgICAvLyAgICAgLyogb25Db21wbGV0ZSAqLyAoKSA9PiB0aGlzLm1zZ3MucHVzaCh7c2V2ZXJpdHk6J2luZm8nLCBzdW1tYXJ5OidTdWNjZXNzJywgZGV0YWlsOidGb3JtIFVwZGF0ZSBTdWNjZXNzZnVsbHknfSkpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNleyAvLyB1cGRhdGUgZW50cnkgc2F2aW5nXHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnaG9tZXBhZ2U6ICcgKyBKU09OLnN0cmluZ2lmeSggdGhpcy5ob21lcGFnZSkgKyAnICwgZjonICsgIEpTT04uc3RyaW5naWZ5KCB0aGlzLmZpbGV1cGxvYWRhcnIpKTtcclxuICAgICAgICAvLyAgIHRoaXMubG9jYWxTZXJ2aWNlXHJcbiAgICAgICAgLy8gICAudXBkYXRlKHRoaXMuaG9tZXBhZ2UsdGhpcy5maWxldXBsb2FkYXJyKVxyXG4gICAgICAgIC8vICAgLnN1YnNjcmliZShcclxuICAgICAgICAvLyAgICAgLyogaGFwcHkgcGF0aCAqLyBwID0+IHRoaXMuaG9tZXBhZ2VzID0gcCxcclxuICAgICAgICAvLyAgICAgLyogZXJyb3IgcGF0aCAqLyBlID0+IGNvbnNvbGUubG9nKGUpLFxyXG4gICAgICAgIC8vICAgICAvKiBvbkNvbXBsZXRlICovICgpID0+IHRoaXMubXNncy5wdXNoKHtzZXZlcml0eTonaW5mbycsIHN1bW1hcnk6J1N1Y2Nlc3MnLCBkZXRhaWw6J0Zvcm0gVXBkYXRlIFN1Y2Nlc3NmdWxseSd9KSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5tc2dzID0gW107XHJcbiAgICAgICAgICB0aGlzLm1zZ3MucHVzaCh7c2V2ZXJpdHk6J2luZm8nLCBzdW1tYXJ5OidTdWNjZXNzJywgZGV0YWlsOidGb3JtIFVwZGF0ZSBTdWNjZXNzZnVsbHknfSk7XHJcbiAgfVxyXG5cclxuICAvL3VwbG9hZCBmaWxlcyB0byB0aGUgc2VydmVyXHJcbm9uVXBsb2FkKGV2ZW50OiBhbnkpe1xyXG4gIC8vYWxlcnQoZXZlbnQuZmlsZXMpO1xyXG4gIGZvcihsZXQgZmlsZSBvZiBldmVudC5maWxlcykge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLnVwbG9hZGVkRmlsZXMucHVzaChmaWxlKTtcclxuICB9XHJcbiAgXHJcbiAgLy9jb25zb2xlLmxvZyhldmVudC54aHIucmVzcG9uc2UpO1xyXG4gIHRoaXMubXNncyA9IFtdO1xyXG4gIHRoaXMubXNncy5wdXNoKHtzZXZlcml0eTogJ2luZm8nLCBzdW1tYXJ5OiAnRmlsZSBVcGxvYWRlZCcsIGRldGFpbDogJyd9KTtcclxufVxyXG5cclxuICAvL0ZpbGUgdXBsb2FkIGV2ZW50XHJcbm9uQmVmb3JlVXBsb2FkKGV2ZW50IDphbnkgKXtcclxuICBldmVudC54aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDttdWx0aXBhcnQvZm9ybS1kYXRhOycpO1xyXG4gIGNvbnNvbGUubG9nKFwibWl0aCBoZXJlOlwiKTtcclxufVxyXG5cclxuLy9Gb3JtIGluaXRcclxubmdPbkluaXQoKSB7IFxyXG4gICAgICAvL0NsZWFyIGV2ZW50IGFuZCBpbml0YWxpemUgb2JqZWN0c1xyXG4gICAgICB0aGlzLmNsZWFyKCk7XHJcblxyXG4gICAgICBcclxuLy9wb3B1bGFyIHNlYXJjaFxyXG4gICAgICBsZXQgcG9wMSA9IHtcclxuICAgICAgICBwb3B1bGFyc2VhcmNobmFtZSA6J0NvbXBhbnkgU2VhcmNoJyxcclxuICAgIHBvcHVsYXJzZWFyY2h1cmwgOidyZXNvdXJjZXMvb2ZjL2ltYWdlcy9wb3B1bGFyLXNlYXJjaGVzLTAxLnBuZycsXHJcbiAgICAgIH1cclxuICAgICAgbGV0IHBvcDIgPSB7XHJcbiAgICAgICAgcG9wdWxhcnNlYXJjaG5hbWUgOidUcmFkZW1hcmtzICYgUGF0ZW50JyxcclxuICAgIHBvcHVsYXJzZWFyY2h1cmwgOidyZXNvdXJjZXMvb2ZjL2ltYWdlcy9wb3B1bGFyLXNlYXJjaGVzLTAyLnBuZycsXHJcbiAgICAgIH1cclxuICAgICAgbGV0IHBvcDMgPSB7XHJcbiAgICAgICAgcG9wdWxhcnNlYXJjaG5hbWUgOidUZWxlbWFya2V0aW5nJyxcclxuICAgIHBvcHVsYXJzZWFyY2h1cmwgOidyZXNvdXJjZXMvb2ZjL2ltYWdlcy9wb3B1bGFyLXNlYXJjaGVzLTAzLnBuZycsXHJcbiAgICAgIH1cclxuICAgICAgbGV0IHBvcDQgPSB7XHJcbiAgICAgICAgcG9wdWxhcnNlYXJjaG5hbWUgOidBcnRpY2xlIFdyaXRpbmcnLFxyXG4gICAgcG9wdWxhcnNlYXJjaHVybCA6J3Jlc291cmNlcy9vZmMvaW1hZ2VzL3BvcHVsYXItc2VhcmNoZXMtMDQucG5nJyxcclxuICAgICAgfVxyXG4gICAgICBsZXQgcG9wNSA9IHtcclxuICAgICAgICBwb3B1bGFyc2VhcmNobmFtZSA6J0ZhY3RvcnknLFxyXG4gICAgcG9wdWxhcnNlYXJjaHVybCA6J3Jlc291cmNlcy9vZmMvaW1hZ2VzL3BvcHVsYXItc2VhcmNoZXMtMDUucG5nJyxcclxuICAgICAgfVxyXG4gICAgICBsZXQgcG9wNiA9IHtcclxuICAgICAgICBwb3B1bGFyc2VhcmNobmFtZSA6J1Byb21vdGlvbmFsIFZpZGVvcycsXHJcbiAgICBwb3B1bGFyc2VhcmNodXJsIDoncmVzb3VyY2VzL29mYy9pbWFnZXMvcG9wdWxhci1zZWFyY2hlcy0wNi5wbmcnLFxyXG4gICAgICB9XHJcbiAgICAgIC8vIHRoaXMudGVtcHBvcHVsYXJzZWFyY2gucHVzaChwb3AxKTtcclxuICAgICAgLy8gdGhpcy50ZW1wcG9wdWxhcnNlYXJjaC5wdXNoKHBvcDIpO1xyXG4gICAgICAvLyB0aGlzLnRlbXBwb3B1bGFyc2VhcmNoLnB1c2gocG9wMyk7XHJcbiAgICAgIC8vIHRoaXMudGVtcHBvcHVsYXJzZWFyY2gucHVzaChwb3A0KTtcclxuICAgICAgLy8gdGhpcy50ZW1wcG9wdWxhcnNlYXJjaC5wdXNoKHBvcDUpO1xyXG4gICAgICAvLyB0aGlzLnRlbXBwb3B1bGFyc2VhcmNoLnB1c2gocG9wNik7XHJcblxyXG4gICAgICBcclxuICAgICAgLy9hcyBkb25lIG9uIDMwIGphbiAyMDE3IGJ5IE1hbmRhciBmb3IgZGlzcGxheWluZyBwb3B1bGFyIHNlcnZpY2VzXHJcbiAgICAgIHRoaXMubG9jYWxTZXJ2aWNlXHJcbiAgICAgIC5nZXRQb3B1bGFyU2VydmljZXNGaWxlVXBsb2FkKClcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAvKiBoYXBweSBwYXRoICovIHAgPT4gdGhpcy5wb3B1bGFyc2VydmljZXNob21lcGFnZT1wLFxyXG4gICAgICAgIC8qIGVycm9yIHBhdGggKi8gZSA9PiBjb25zb2xlLmxvZyggZSksXHJcbiAgICAgICAgLyogb25Db21wbGV0ZSAqLyAoKSA9PiB7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCd0aGlzLnBvcHVsYXJzZXJ2aWNlc2hvbWVwYWdlIDogJytKU09OLnN0cmluZ2lmeSh0aGlzLnBvcHVsYXJzZXJ2aWNlc2hvbWVwYWdlKSk7XHJcbiAgICAgICAgICAvL3RoaXMucG9wdWxhcnNlcnZpY2VpbWFnZWFyciA9IFtdO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZygndGhpcy5wb3B1bGFyc2VydmljZXNob21lcGFnZSBpbmRleCAwIDogJyt0aGlzLnBvcHVsYXJzZXJ2aWNlc2hvbWVwYWdlWzBdLnVwbG9hZGZpbGVfZmlsZW5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgXHJcbiAgICAgIC8vZ2V0IHBvcHVsYXIgc2VhcmNoIGRhdGFcclxuXHJcbnRoaXMubG9jYWxTZXJ2aWNlXHJcbiAgICAgIC5nZXRQb3B1bGFyU2VhcmNoKClcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgLyogaGFwcHkgcGF0aCAqLyBwID0+IHRoaXMucG9wdWxhcnNlYXJjaGhvbWVwYWdlPXAsXHJcbiAgICAgICAgIC8qIGVycm9yIHBhdGggKi8gZSA9PiBjb25zb2xlLmxvZyggZSksXHJcbiAgICAgICAgIC8qIG9uQ29tcGxldGUgKi8gKCkgPT4ge31cclxuICAgICAgICAgICApO1xyXG5cclxuICAgICAgLy90ZXN0aW1vbmlhbCBkYXRhXHJcbiAgICAgICAgdGhpcy5sb2NhbFNlcnZpY2VcclxuICAgICAgLmdldFRlc3RpbW9uaWFsKClcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgLyogaGFwcHkgcGF0aCAqLyBwID0+IHRoaXMudGVzdGltb25pYWw9cCxcclxuICAgICAgICAgLyogZXJyb3IgcGF0aCAqLyBlID0+IGNvbnNvbGUubG9nKCBlKSxcclxuICAgICAgICAgLyogb25Db21wbGV0ZSAqLyAoKSA9PiB0aGlzLnByb2Nlc3NkYXRhKCkpO1xyXG5cclxuLy9wcmljZSBuIGxldmVsIGRhdGFcclxuICAgICAgICAgdGhpcy5sb2NhbFNlcnZpY2VcclxuICAgICAgLmdldFByaWNlTkxldmVsKClcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgLyogaGFwcHkgcGF0aCAqLyBwID0+IHRoaXMucGxhbj1wLFxyXG4gICAgICAgICAvKiBlcnJvciBwYXRoICovIGUgPT4gY29uc29sZS5sb2coIGUpLFxyXG4gICAgICAgICAvKiBvbkNvbXBsZXRlICovICgpID0+IHRoaXMucHJvY2Vzc2RhdGEoKSk7XHJcblxyXG5cclxuICAgICAgXHJcbiAgICAgIC8vIGFsZXJ0KCB0aGlzLnN0YXJ0ZGF0ZS5nZXREYXkgKyAnLycgK3RoaXMuc3RhcnRkYXRlLmdldE1vbnRoICsgJy8nICt0aGlzLnN0YXJ0ZGF0ZS5nZXRGdWxsWWVhcik7IFxyXG4gICAgICAvLyBhbGVydCggJ251bWJlcjogJyArIHRoaXMubXljdXIucGFyc2UoXCIxMFwiKSk7XHJcbiAgICAgIC8vIGxldCBibDogYm9vbGVhbjtcclxuICAgICAgLy8gYmwgPSAgdGhpcy5lbWFpbHZhbC5wYXJzZSgnYXR1bGt1bHZlZ21haWwuY29tJywnJyk7XHJcbiAgICAgIC8vIGFsZXJ0KGJsICk7XHJcblxyXG4gICAgICAvL0NyZWF0ZSB1c2VyZm9ybSBhbmQgYXBwbHkgVmFsaWRhdGlvblxyXG4gICAgICAvLyBhbGVydCh0aGlzLm15ZGF0ZTEucGFyc2UoICcyMDE2LTEyLTEzVDE4OjMwOjAwLjAwMFonKSk7XHJcbiAgICAgIC8vIHRoaXMudXNlcmZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgLy8gICAgICAgJ25hbWUnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCxDdXN0b21WYWxpZGF0b3IuaXNFbWFpbFZhbGlkXSkpLFxyXG4gICAgICAvLyAgICAgICAgJ2J1ZGdldCc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgIC8vICAgICAgICAncmVtYXJrcyc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgIC8vICAgICAgICAnbWFuaG91cnMnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAvLyAgICAgICAgJ3N0YXJ0ZGF0ZXYnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAvLyAgICAgICAgJ2VuZGRhdGV2JzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgLy8gICAgICAgICd0aW1lZnJhbWUnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAvLyAgICAgICAgJ2NvbXBsZXRlZCc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgIC8vICAgICAgICAnY29tbWlzc2lvbic6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgIC8vICAgICAgICAnZGVzY3JpcHRpb24nOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAvLyAgICAgICAgJ2RheXNyZXF1aXJlZCc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAvLyAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vcHJlbG9hZCBkYXRhIEdyaWQgcmVxdWlyZWQgXHJcbiAgICAgIC8vICAgdGhpcy5sb2NhbFNlcnZpY2VcclxuICAgICAgLy8gLmdldGFsbCgpXHJcbiAgICAgIC8vIC5zdWJzY3JpYmUoXHJcbiAgICAgIC8vICAgIC8qIGhhcHB5IHBhdGggKi8gcCA9PiB0aGlzLmhvbWVwYWdlcz1wLFxyXG4gICAgICAvLyAgICAvKiBlcnJvciBwYXRoICovIGUgPT4gY29uc29sZS5sb2coIGUpLFxyXG4gICAgICAvLyAgICAvKiBvbkNvbXBsZXRlICovICgpID0+IHRoaXMucHJvY2Vzc2RhdGEoKSk7XHJcblxyXG4gICAgICAgICBcclxuICAgICAgICBcclxuICB9XHJcbiAgcHJvY2Vzc2RhdGEoKXtcclxuICAgIFxyXG5cclxuICB9XHJcbiAgcG9wdWxhdGVkcnAoKXsgLy9wb3B1bGF0ZSBkcm9wZG93bnMgb24gcGFnZSBsb2FkLiBieSB1c2luZyBwdXNoIGFuZCBTZWxlY3RJdGVtXHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuZHJwdmFyLmxlbmd0aCk7XHJcbiAgICAgICAgZm9yKHZhciBpID0wO2k8dGhpcy5kcnB2YXIubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAvL2FsZXJ0KHRoaXMuZHJwdmFyW2ldLmxhYmVsZCArICcgOiAnICArIHRoaXMuZHJwdmFyW2ldLnZhbHVlZCk7XHJcbiAgICAgICAgICAgdGhpcy5kcnBob21lcGFnZS5wdXNoKHtsYWJlbDp0aGlzLmRycHZhcltpXS5sYWJlbGQgLCB2YWx1ZTp0aGlzLmRycHZhcltpXS52YWx1ZWR9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gYWxlcnQoSlNPTi5zdHJpbmdpZnkodGhpcy5kcnBob21lcGFnZSkpO1xyXG5cclxuICB9XHJcblxyXG4gIC8vRHJvcGRvd24gY2hhbmdlIGV2ZW50IGNhcHR1cmVcclxuICBkcnBjaGFuZ2UoZXZlbnRzMTogYW55KXtcclxuICAgIC8vIGFsZXJ0KGV2ZW50czEudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLy9KdXN0IGEgbWV0aG9kIHRvIGNhbGwgdXNlciBmb3JtIGRhdGEgb24gZm9ybSBzdWJtaXRcclxuICBnZXQgZGlhZ25vc3RpYygpIHsgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMudXNlcmZvcm0udmFsdWUpOyB9XHJcblxyXG4gfVxyXG4iXX0=
