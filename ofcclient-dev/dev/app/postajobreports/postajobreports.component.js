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
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var index_1 = require('../shared/postajobreports/index');
var app_component_1 = require('../app.component');
var PostajobreportsComponent = (function () {
    function PostajobreportsComponent(router, localService, appComponent, fb, route, mycur, mydate1, emailval) {
        var _this = this;
        this.router = router;
        this.localService = localService;
        this.appComponent = appComponent;
        this.fb = fb;
        this.route = route;
        this.mycur = mycur;
        this.mydate1 = mydate1;
        this.emailval = emailval;
        this.msgs = [];
        var data = sessionStorage.getItem('memberdetails');
        var ofcmemsession = JSON.parse(data);
        this.sessionid = ofcmemsession.ofcmemsession_id;
        this.localService.getAlProjectReport(this.sessionid).subscribe(function (p) { return _this.postajobreportGrid = p; }, function (e) { return console.log("my error " + e, e); }, function () { return console.log(_this.postajobreportGrid); });
    }
    PostajobreportsComponent.prototype.ngOnInit = function () {
        this.clear();
        this.userform = this.fb.group({
            'ofcprojectpostdetails_fname': new forms_1.FormControl('', forms_1.Validators.required),
            'ofcprojectpostdetails_mname': new forms_1.FormControl('', forms_1.Validators.required),
            'ofcprojectpostdetails_lname': new forms_1.FormControl('', forms_1.Validators.required),
            'ofcprojectpostdetails_name': new forms_1.FormControl('', forms_1.Validators.required),
            'ofcmember_type': new forms_1.FormControl('', forms_1.Validators.required),
            'city_id': new forms_1.FormControl('', forms_1.Validators.required),
            'ofcprojectpostdetails_emailid': new forms_1.FormControl('', forms_1.Validators.required),
            'ofcprojectpostdetails_password': new forms_1.FormControl('', forms_1.Validators.required),
            'ofcprojectpostdetails_address1': new forms_1.FormControl('', forms_1.Validators.required),
            'ofcprojectpostdetails_address2': new forms_1.FormControl('', forms_1.Validators.required),
            'ofcprojectpostdetails_pincode': new forms_1.FormControl('', forms_1.Validators.required),
            'ofcprojectpostdetails_contactnos': new forms_1.FormControl('', forms_1.Validators.required),
            'country_id': new forms_1.FormControl('', forms_1.Validators.required),
            'state_id': new forms_1.FormControl('', forms_1.Validators.required)
        });
    };
    PostajobreportsComponent.prototype.clear = function () {
        this.newofcprojectpostdetails = true;
        this.ofcprojectpostdetails = {
            ofcprojectpost_id: '',
            ofcprojectpost_budget: '',
            ofcprojectpost_negotiable: '',
            ofcprojectpost_title: '',
            ofcprojectpost_description: '',
            ofcprojectpost_timeframe: '',
            ofcprojectpost_typepreference: '',
            ofcprojectpost_kind: '',
            ofcprojectpost_budgetamount: '',
            ofcprojectpost_commissionpercentage: '',
            ofcprojectpost_ofccommission: '',
            ofcprojectpost_estimatestartdate: '',
            ofcprojectpost_startdate: '',
            ofcprojectpost_enddate: '',
            ofcprojectpost_invitefreelancers: '',
            ofcprojectpost_public: '',
            subcat_id_fkprojectpost: '',
            country_id_fkprojectpost: '',
            language_id_fkprojectpost: '',
            experience_id_fkprojectpost: '',
            ofcprojectpost_projectamount: '',
            ofcprojectpost_advanceamount: '',
            ofcprojectpost_finalpaidamount: '',
            ofcprojectpost_ispaymenttermsagreed: '',
            ofcprojectpost_ispaid: '',
            ofcprojectpost_iscompleted: '',
            ofcprojectpost_delayed: '',
            ofcprojectpost_istermsaggreedbyme: '',
            ofcprojectpost_istermsaggreedbyfreelancer: '',
            ofcprojectpost_isdispute: '',
            ofcprojectpost_isrefundrequested: '',
            ofcprojectpost_isrefunded: '',
            ofcprojectpost_isdisputeresolved: '',
            createdate: '',
            modifieddate: '',
            status: '',
            filearr: []
        };
    };
    PostajobreportsComponent.prototype.onRowSelect = function (ofcprojectpost_id) {
        this.router.navigate(['/postajobviewpage', ofcprojectpost_id]);
    };
    PostajobreportsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-postajobreports',
            templateUrl: 'postajobreports.component.html',
            styleUrls: ['postajobreports.component.css'],
            providers: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.PostajobreportsService, app_component_1.AppComponent, forms_1.FormBuilder, router_1.ActivatedRoute, first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate])
    ], PostajobreportsComponent);
    return PostajobreportsComponent;
}());
exports.PostajobreportsComponent = PostajobreportsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wb3N0YWpvYnJlcG9ydHMvcG9zdGFqb2JyZXBvcnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHNCQUFnRSxnQkFBZ0IsQ0FBQyxDQUFBO0FBU2pGLHVCQUF1QyxpQkFBaUIsQ0FBQyxDQUFBO0FBR3pELDJCQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBRzVELGtDQUE2QixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ2pFLG1DQUE4QixvQ0FBb0MsQ0FBQyxDQUFBO0FBR25FLHNCQUF1QyxpQ0FBaUMsQ0FBQyxDQUFBO0FBRXpFLDhCQUE2QixrQkFBa0IsQ0FBQyxDQUFBO0FBZWhEO0lBZUksa0NBQ1ksTUFBYyxFQUNkLFlBQW9DLEVBQ3BDLFlBQTBCLEVBQzFCLEVBQWUsRUFDZixLQUFxQixFQUNyQixLQUFxQixFQUNyQixPQUFxQixFQUNyQixRQUF1QjtRQXZCdkMsaUJBdUhDO1FBdkdlLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBd0I7UUFDcEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQXRCbkMsU0FBSSxHQUFjLEVBQUUsQ0FBQztRQTBCakIsSUFBSSxJQUFJLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuRCxJQUFJLGFBQWEsR0FBa0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztRQUdoRCxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFD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WUFDNUIseUJBQXlCLEVBQUUsRUFBRTtZQUM3QiwyQkFBMkIsRUFBRSxFQUFFO1lBQy9CLDRCQUE0QixFQUFFLEVBQUU7WUFDaEMsNEJBQTRCLEVBQUUsRUFBRTtZQUNoQyw4QkFBOEIsRUFBRSxFQUFFO1lBQ2xDLG1DQUFtQyxFQUFFLEVBQUU7WUFDdkMscUJBQXFCLEVBQUUsRUFBRTtZQUN6QiwwQkFBMEIsRUFBRSxFQUFFO1lBQzlCLHNCQUFzQixFQUFFLEVBQUU7WUFDMUIsaUNBQWlDLEVBQUUsRUFBRTtZQUNyQyx5Q0FBeUMsRUFBRSxFQUFFO1lBQzdDLHdCQUF3QixFQUFFLEVBQUU7WUFDNUIsZ0NBQWdDLEVBQUUsRUFBRTtZQUNwQyx5QkFBeUIsRUFBRSxFQUFFO1lBQzdCLGdDQUFnQyxFQUFFLEVBQUU7WUFDcEMsVUFBVSxFQUFFLEVBQUU7WUFDZCxZQUFZLEVBQUUsRUFBRTtZQUNoQixNQUFNLEVBQUUsRUFBRTtZQUNWLE9BQU8sRUFBRSxFQUFFO1NBQ2QsQ0FBQTtJQUdMLENBQUM7SUFJSCw4Q0FBVyxHQUFYLFVBQVksaUJBQXlCO1FBRXBDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLEVBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBRS9ELENBQUM7SUE3SEg7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztZQUM1QyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBRTVCLENBQUM7O2dDQUFBO0lBd0hGLCtCQUFDO0FBQUQsQ0F2SEEsQUF1SEMsSUFBQTtBQXZIWSxnQ0FBd0IsMkJBdUhwQyxDQUFBIiwiZmlsZSI6ImFwcC9wb3N0YWpvYnJlcG9ydHMvcG9zdGFqb2JyZXBvcnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRGF0YVRhYmxlTW9kdWxlLCB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IERpYWxvZ01vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IElucHV0VGV4dE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IENhbGVuZGFyTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1lc3NhZ2VzTW9kdWxlLCBNZXNzYWdlLCBHcm93bCB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IFBhbmVsTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgSW5wdXRUZXh0YXJlYU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgU2VsZWN0SXRlbSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE15RGF0ZUZvcm1hdCB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9teWRhdGVmb3JtYXQucGlwZSc7XHJcbmltcG9ydCB7IEVtYWlsVmFsaWRhdGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZW1haWx2YWxpZGF0ZS5waXBlJztcclxuaW1wb3J0IHsgQ3VzdG9tVmFsaWRhdG9yIH0gZnJvbSAnLi4vc2hhcmVkL3ZhbGlkYXRvcnMvdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XHJcblxyXG5pbXBvcnQgeyBQb3N0YWpvYnJlcG9ydHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3Bvc3Rham9icmVwb3J0cy9pbmRleCc7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT0ZDUHJvamVjdFBvc3REZXRhaWxzIH0gZnJvbSAnLi9vZmNwcm9qZWN0cG9zdGRldGFpbHMnO1xyXG5pbXBvcnQgeyBPRkNtZW1TZXNzaW9uIH0gZnJvbSAnLi4vbG9naW5wYWdlL29mY21lbXNlc3Npb24nO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgQWJvdXRDb21wb25lbnQuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3NkLXBvc3Rham9icmVwb3J0cycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3Bvc3Rham9icmVwb3J0cy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsncG9zdGFqb2JyZXBvcnRzLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHByb3ZpZGVyczogW0FwcENvbXBvbmVudF1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3N0YWpvYnJlcG9ydHNDb21wb25lbnQge1xyXG4gICAgbXNnczogTWVzc2FnZVtdID0gW107XHJcbiAgICB1c2VyZm9ybTogRm9ybUdyb3VwO1xyXG4gICAgYm9vbHBvc3Rham9icmVwb3J0czogYm9vbGVhbjtcclxuXHJcbiAgICBvZmNwcm9qZWN0cG9zdGRldGFpbHM6IE9GQ1Byb2plY3RQb3N0RGV0YWlscztcclxuICAgIG5ld29mY3Byb2plY3Rwb3N0ZGV0YWlsczogYm9vbGVhbjtcclxuXHJcbiAgICBwb3N0YWpvYnJlcG9ydEdyaWQ6IE9GQ1Byb2plY3RQb3N0RGV0YWlsc1tdO1xyXG4gICAgc2VsZWN0ZWRSb3c6IE9GQ1Byb2plY3RQb3N0RGV0YWlscztcclxuICAgIHN1Ym1pdHRlZDogYm9vbGVhbjtcclxuXHJcbiAgICBzZXNzaW9uaWQ6IHN0cmluZztcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIGxvY2FsU2VydmljZTogUG9zdGFqb2JyZXBvcnRzU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgbXljdXI6IE15Q3VycmVuY3lQaXBlLFxyXG4gICAgICAgIHByaXZhdGUgbXlkYXRlMTogTXlEYXRlRm9ybWF0LFxyXG4gICAgICAgIHByaXZhdGUgZW1haWx2YWw6IEVtYWlsVmFsaWRhdGVcclxuICAgICkge1xyXG5cclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdtZW1iZXJkZXRhaWxzJyk7XHJcbiAgICAgICAgbGV0IG9mY21lbXNlc3Npb246IE9GQ21lbVNlc3Npb24gPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbmlkID0gb2ZjbWVtc2Vzc2lvbi5vZmNtZW1zZXNzaW9uX2lkO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5sb2NhbFNlcnZpY2UuZ2V0QWxQcm9qZWN0UmVwb3J0KHRoaXMuc2Vzc2lvbmlkKS5zdWJzY3JpYmUocCA9PiB0aGlzLnBvc3Rham9icmVwb3J0R3JpZCA9IHAsXHJcbiAgICAgICAgICAgIGUgPT4gY29uc29sZS5sb2coXCJteSBlcnJvciBcIiArIGUsIGUpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyh0aGlzLnBvc3Rham9icmVwb3J0R3JpZCkpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnVzZXJmb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgICdvZmNwcm9qZWN0cG9zdGRldGFpbHNfZm5hbWUnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAgICAgICAnb2ZjcHJvamVjdHBvc3RkZXRhaWxzX21uYW1lJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgICAgICAgJ29mY3Byb2plY3Rwb3N0ZGV0YWlsc19sbmFtZSc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICAgICAgICdvZmNwcm9qZWN0cG9zdGRldGFpbHNfbmFtZSc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICAgICAgICdvZmNtZW1iZXJfdHlwZSc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICAgICAgICdjaXR5X2lkJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgICAgICAgJ29mY3Byb2plY3Rwb3N0ZGV0YWlsc19lbWFpbGlkJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgICAgICAgJ29mY3Byb2plY3Rwb3N0ZGV0YWlsc19wYXNzd29yZCc6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICAgICAgICdvZmNwcm9qZWN0cG9zdGRldGFpbHNfYWRkcmVzczEnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAgICAgICAnb2ZjcHJvamVjdHBvc3RkZXRhaWxzX2FkZHJlc3MyJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgICAgICAgJ29mY3Byb2plY3Rwb3N0ZGV0YWlsc19waW5jb2RlJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgICAgICAgJ29mY3Byb2plY3Rwb3N0ZGV0YWlsc19jb250YWN0bm9zJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgICAgICAgJ2NvdW50cnlfaWQnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxyXG4gICAgICAgICAgICAnc3RhdGVfaWQnOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5uZXdvZmNwcm9qZWN0cG9zdGRldGFpbHMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub2ZjcHJvamVjdHBvc3RkZXRhaWxzID0ge1xyXG4gICAgICAgICAgICBvZmNwcm9qZWN0cG9zdF9pZDogJycsXHJcbiAgICAgICAgICAgIG9mY3Byb2plY3Rwb3N0X2J1ZGdldDogJycsXHJcbiAgICAgICAgICAgIG9mY3Byb2plY3Rwb3N0X25lZ290aWFibGU6ICcnLFxyXG4gICAgICAgICAgICBvZmNwcm9qZWN0cG9zdF90aXRsZTogJycsXHJcbiAgICAgICAgICAgIG9mY3Byb2plY3Rwb3N0X2Rlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICAgICAgb2ZjcHJvamVjdHBvc3RfdGltZWZyYW1lOiAnJyxcclxuICAgICAgICAgICAgb2ZjcHJvamVjdHBvc3RfdHlwZXByZWZlcmVuY2U6ICcnLFxyXG4gICAgICAgICAgICBvZmNwcm9qZWN0cG9zdF9raW5kOiAnJyxcclxuICAgICAgICAgICAgb2ZjcHJvamVjdHBvc3RfYnVkZ2V0YW1vdW50OiAnJyxcclxuICAgICAgICAgICAgb2ZjcHJvamVjdHBvc3RfY29tbWlzc2lvbnBlcmNlbnRhZ2U6ICcnLFxyXG4gICAgICAgICAgICBvZmNwcm9qZWN0cG9zdF9vZmNjb21taXNzaW9uOiAnJyxcclxuICAgICAgICAgICAgb2ZjcHJvamVjdHBvc3RfZXN0aW1hdGVzdGFydGRhdGU6ICcnLFxyXG4gICAgICAgICAgICBvZmNwcm9qZWN0cG9zdF9zdGFydGRhdGU6ICcnLFxyXG4gICAgICAgICAgICBvZmNwcm9qZWN0cG9zdF9lbmRkYXRlOiAnJyxcclxuICAgICAgICAgICAgb2ZjcHJvamVjdHBvc3RfaW52aXRlZnJlZWxhbmNlcnM6ICcnLFxyXG4gICAgICAgICAgICBvZmNwcm9qZWN0cG9zdF9wdWJsaWM6ICcnLFxyXG4gICAgICAgICAgICBzdWJjYXRfaWRfZmtwcm9qZWN0cG9zdDogJycsXHJcbiAgICAgICAgICAgIGNvdW50cnlfaWRfZmtwcm9qZWN0cG9zdDogJycsXHJcbiAgICAgICAgICAgIGxhbmd1YWdlX2lkX2ZrcHJvamVjdHBvc3Q6ICcnLFxyXG4gICAgICAgICAgICBleHBlcmllbmNlX2lkX2ZrcHJvamVjdHBvc3Q6ICcnLFxyXG4gICAgICAgICAgICBvZmNwcm9qZWN0cG9zdF9wcm9qZWN0YW1vdW50OiAnJyxcclxuICAgICAgICAgICAgb2ZjcHJvamVjdHBvc3RfYWR2YW5jZWFtb3VudDogJycsXHJcbiAgICAgICAgICAgIG9mY3Byb2plY3Rwb3N0X2ZpbmFscGFpZGFtb3VudDogJycsXHJcbiAgICAgICAgICAgIG9mY3Byb2plY3Rwb3N0X2lzcGF5bWVudHRlcm1zYWdyZWVkOiAnJyxcclxuICAgICAgICAgICAgb2ZjcHJvamVjdHBvc3RfaXNwYWlkOiAnJyxcclxuICAgICAgICAgICAgb2ZjcHJvamVjdHBvc3RfaXNjb21wbGV0ZWQ6ICcnLFxyXG4gICAgICAgICAgICBvZmNwcm9qZWN0cG9zdF9kZWxheWVkOiAnJyxcclxuICAgICAgICAgICAgb2ZjcHJvamVjdHBvc3RfaXN0ZXJtc2FnZ3JlZWRieW1lOiAnJyxcclxuICAgICAgICAgICAgb2ZjcHJvamVjdHBvc3RfaXN0ZXJtc2FnZ3JlZWRieWZyZWVsYW5jZXI6ICcnLFxyXG4gICAgICAgICAgICBvZmNwcm9qZWN0cG9zdF9pc2Rpc3B1dGU6ICcnLFxyXG4gICAgICAgICAgICBvZmNwcm9qZWN0cG9zdF9pc3JlZnVuZHJlcXVlc3RlZDogJycsXHJcbiAgICAgICAgICAgIG9mY3Byb2plY3Rwb3N0X2lzcmVmdW5kZWQ6ICcnLFxyXG4gICAgICAgICAgICBvZmNwcm9qZWN0cG9zdF9pc2Rpc3B1dGVyZXNvbHZlZDogJycsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRhdGU6ICcnLFxyXG4gICAgICAgICAgICBtb2RpZmllZGRhdGU6ICcnLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICcnLFxyXG4gICAgICAgICAgICBmaWxlYXJyOiBbXVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgXHJcbiAgb25Sb3dTZWxlY3Qob2ZjcHJvamVjdHBvc3RfaWQ6IHN0cmluZykge1xyXG4gICAgICAgXHJcbiAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Bvc3Rham9idmlld3BhZ2UnLG9mY3Byb2plY3Rwb3N0X2lkXSk7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl19
