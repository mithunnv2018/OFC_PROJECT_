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
var index_1 = require('../shared/myproposaldetails/index');
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var baseurl_service_1 = require('../shared/baseurl/baseurl.service');
var chat_service_1 = require('../shared/chat/chat.service');
var MessagesThread = (function () {
    function MessagesThread() {
    }
    return MessagesThread;
}());
exports.MessagesThread = MessagesThread;
var MyproposaldetailsComponent = (function () {
    function MyproposaldetailsComponent(fb, route, router, localService, mycur, mydate1, emailval, baseUrlservice, chatService) {
        var _this = this;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.localService = localService;
        this.mycur = mycur;
        this.mydate1 = mydate1;
        this.emailval = emailval;
        this.baseUrlservice = baseUrlservice;
        this.chatService = chatService;
        this.msgs = [];
        this.messages = [];
        this.msglist = [];
        this.listofusers = [];
        this.listofowner = [];
        this.listofoldchats = [];
        this.chatService.loadSingleChatAtClient();
        this.mybaseurl = baseUrlservice.getBaseurl();
        this.route.params.forEach(function (params) {
            _this.ofcsubmitproposalid = params["ofcsubmitproposal_id"];
        });
        var data = sessionStorage.getItem('memberdetails');
        var ofcmemsession = JSON.parse(data);
        this.sessionid = ofcmemsession.ofcmemsession_id;
        var member_id = ofcmemsession.ofcmembers_id;
        this.localService.getAllSubmittedProposalsById(this.sessionid, this.ofcsubmitproposalid).
            subscribe(function (p) { return _this.myproposaldetailsGrid = p; }, function (e) { return console.log("my error " + e, e); }, function () {
            _this.myproposaldetails = _this.myproposaldetailsGrid[0];
            console.log("myproposaldetails", _this.myproposaldetails);
            _this.loadChat(_this.myproposaldetails, member_id);
        });
    }
    MyproposaldetailsComponent.prototype.clear = function () {
        this.newmyproposaldetails = true;
        this.myproposaldetails = {
            status: '',
            skillsarr: [],
            createdate: '',
            subcat_name: '',
            country_name: '',
            maincat_name: '',
            modifieddate: '',
            experience_name: '',
            projectpostdate: '',
            ofcprojectpost_id: '',
            ofcprojectpost_kind: '',
            ofcprojectpost_title: '',
            ofcsubmitproposal_id: '',
            ofcprojectpost_budget: '',
            ofcprojectpost_ispaid: '',
            ofcprojectpost_public: '',
            ofcprojectpost_delayed: '',
            ofcprojectpost_enddate: '',
            ofcsubmitproposal_terms: '',
            subcat_id_fkprojectpost: '',
            country_id_fkprojectpost: '',
            ofcprojectpost_isdispute: '',
            ofcprojectpost_startdate: '',
            ofcprojectpost_timeframe: '',
            ofcsubmitproposal_budget: '',
            ofcsubmitproposal_status: '',
            language_id_fkprojectpost: '',
            ofcprojectpost_isrefunded: '',
            ofcprojectpost_negotiable: '',
            ofcsubmitproposal_enddate: '',
            ofcsubmitproposal_remarks: '',
            ofcprojectpost_description: '',
            ofcprojectpost_iscompleted: '',
            experience_id_fkprojectpost: '',
            ofcmembers_id_fkprojectpost: '',
            ofcprojectpost_budgetamount: '',
            ofcsubmitproposal_startdate: '',
            ofcsubmitproposal_timeframe: '',
            ofcprojectpost_advanceamount: '',
            ofcprojectpost_ofccommission: '',
            ofcprojectpost_projectamount: '',
            ofcsubmitproposal_negotiable: '',
            ofcsubmitproposal_workstatus: '',
            ofcprojectpost_typepreference: '',
            ofcsubmitproposal_coverletter: '',
            ofcsubmitproposal_finalamount: '',
            ofcmembers_id_fksubmitproposal: '',
            ofcprojectpost_finalpaidamount: '',
            ofcsubmitproposal_availability: '',
            ofcsubmitproposal_estimatedays: '',
            ofcsubmitproposal_completeddate: '',
            ofcprojectpost_estimatestartdate: '',
            ofcprojectpost_invitefreelancers: '',
            ofcprojectpost_isdisputeresolved: '',
            ofcprojectpost_isrefundrequested: '',
            ofcprojectpost_istermsaggreedbyme: '',
            ofcsubmitproposal_commissionamount: '',
            ofcprojectpost_commissionpercentage: '',
            ofcprojectpost_ispaymenttermsagreed: '',
            ofcsubmitproposal_estimatestartdate: '',
            ofcsubmitproposal_proposalacceptdate: '',
            ofcsubmitproposal_proposalrejectdate: '',
            ofcsubmitproposal_commissionpercentage: '',
            ofcsubmitproposal_estimatedhoursindays: '',
            ofcsubmitproposal_iscompletedbyemployeer: '',
            ofcsubmitproposal_reportabusebyemployeer: '',
            ofcprojectpost_istermsaggreedbyfreelancer: '',
            ofcsubmitproposal_iscompletedbyfreelancer: '',
            ofcsubmitproposal_reportabusebyfreelancer: ''
        };
    };
    MyproposaldetailsComponent.prototype.ngOnInit = function () {
        $.getScript('../../resources/ofc/js/drilldown.js');
        $.getScript('../../resources/ofc/js/smk-accordion.js');
        $.getScript('../../resources/ofc/js/myaccordion_jquery.js');
    };
    MyproposaldetailsComponent.prototype.onclickSubmitProposal = function () {
    };
    MyproposaldetailsComponent.prototype.getSkillList = function (skillList) {
        var a = "";
        for (var i = 0; i < skillList.length; i++) {
            var c = skillList[i].skill_name;
            var b = '<div class="skills">' + c + '</div>';
            a += b;
        }
        return a;
    };
    ;
    MyproposaldetailsComponent.prototype.loadChat = function (param, mymemberid) {
        var _this = this;
        var username = mymemberid;
        var postsubmitid = this.ofcsubmitproposalid;
        var projectpostid = param.ofcprojectpost_id;
        this.ownchatid = projectpostid + "_" + postsubmitid + "_" + mymemberid;
        var biddingmemberid = param.ofcmembers_id_fkprojectpost;
        var bidderchatid = projectpostid + "_" + postsubmitid + "_" + biddingmemberid;
        var tempown;
        tempown = {
            author: this.ownchatid,
            message: 'Hi from Chat Owner',
            otherauthor: bidderchatid,
            username: username,
            senderid: mymemberid,
            recieverid: biddingmemberid,
            projectpostid: projectpostid,
            submitproposal_id: postsubmitid,
            ofcsubmitproposalchat_id: '',
            createdate: '',
            modifieddate: '',
            status: 'active',
        };
        var tempother;
        tempother = {
            author: this.ownchatid,
            message: '',
            otherauthor: bidderchatid,
            username: username,
            messages: [],
            senderid: mymemberid,
            recieverid: biddingmemberid,
            projectpostid: projectpostid,
            submitproposal_id: postsubmitid,
            ofcsubmitproposalchat_id: '',
            createdate: '',
            modifieddate: '',
            status: 'active',
        };
        var oldmsg;
        oldmsg = {
            author: this.ownchatid,
            message: '',
            otherauthor: bidderchatid,
            username: username,
            messages: [],
            senderid: mymemberid,
            recieverid: biddingmemberid,
            projectpostid: projectpostid,
            submitproposal_id: postsubmitid,
            ofcsubmitproposalchat_id: '',
            createdate: '',
            modifieddate: '',
            status: 'active',
        };
        this.chatService.getOldChatMessages(postsubmitid).subscribe(function (p) { return oldmsg.messages = p; }, function (e) { return console.log(e); }, function () {
            _this.listofoldchats.push(oldmsg);
        });
        this.listofowner.push(tempown);
        this.listofusers.push(tempother);
        console.log("this.listofusers", this.listofusers);
        this.chatService.messages.subscribe(function (msg) {
            console.log("Rcvd Message bidder=", msg);
            _this.messages.push(msg);
            for (var i = 0; i < _this.listofusers.length; i++) {
                if (_this.listofusers[i].otherauthor == msg.author) {
                    _this.listofusers[i].messages.push(msg);
                }
            }
        });
    };
    MyproposaldetailsComponent.prototype.onSubmitChat = function (index, paramotherauthor) {
        var tempmessage = this.listofusers[index];
        var tempmember = {
            author: this.ownchatid,
            message: tempmessage.message,
            otherauthor: paramotherauthor,
            username: tempmessage.username,
            senderid: tempmessage.senderid,
            recieverid: tempmessage.recieverid,
            projectpostid: tempmessage.projectpostid,
            submitproposal_id: tempmessage.submitproposal_id,
            ofcsubmitproposalchat_id: '',
            createdate: '',
            modifieddate: '',
            status: 'active',
        };
        for (var i = 0; i < this.listofusers.length; i++) {
            if (this.listofusers[i].otherauthor == paramotherauthor) {
                this.listofusers[i].messages.push(tempmember);
            }
        }
        this.chatService.messages.next(tempmember);
        this.listofusers[index].message = '';
    };
    MyproposaldetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-myproposaldetails',
            templateUrl: 'myproposaldetails.component.html',
            styleUrls: ['myproposaldetails.component.css'],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, baseurl_service_1.BaseUrlService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, index_1.MyproposaldetailsService, first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, baseurl_service_1.BaseUrlService, chat_service_1.ChatService])
    ], MyproposaldetailsComponent);
    return MyproposaldetailsComponent;
}());
exports.MyproposaldetailsComponent = MyproposaldetailsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9teXByb3Bvc2FsZGV0YWlscy9teXByb3Bvc2FsZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2QyxlQUFlLENBQUMsQ0FBQTtBQUM3RCxzQkFBZ0UsZ0JBQWdCLENBQUMsQ0FBQTtBQUlqRix1QkFBK0MsaUJBQWlCLENBQUMsQ0FBQTtBQUtqRSwyQkFBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUM1RCxzQkFBeUMsbUNBQW1DLENBQUMsQ0FBQTtBQUk3RSxrQ0FBNkIsbUNBQW1DLENBQUMsQ0FBQTtBQUNqRSxtQ0FBOEIsb0NBQW9DLENBQUMsQ0FBQTtBQUVuRSxnQ0FBK0IsbUNBQW1DLENBQUMsQ0FBQTtBQUtuRSw2QkFBd0MsNkJBQTZCLENBQUMsQ0FBQTtBQUl0RTtJQUFBO0lBY0EsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSxzQkFBYyxpQkFjMUIsQ0FBQTtBQVdEO0lBcUdFLG9DQUFvQixFQUFlLEVBQ3pCLEtBQXFCLEVBQ3JCLE1BQWMsRUFDZCxZQUFzQyxFQUN0QyxLQUFxQixFQUNyQixPQUFxQixFQUNyQixRQUF1QixFQUN2QixjQUE4QixFQUM5QixXQUF1QjtRQTdHbkMsaUJBOFNDO1FBek1xQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBMEI7UUFDdEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQTNHakMsU0FBSSxHQUFjLEVBQUUsQ0FBQztRQWdCckIsYUFBUSxHQUFpQixFQUFFLENBQUM7UUFDNUIsWUFBTyxHQUEwQixF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QVF6QyxDQUFDO0lBblRIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsMkJBQWMsRUFBRSxnQ0FBWSxFQUFFLGtDQUFhLEVBQUUsZ0NBQWMsQ0FBQztTQUN6RSxDQUFDOztrQ0FBQTtJQStTRixpQ0FBQztBQUFELENBOVNBLEFBOFNDLElBQUE7QUE5U1ksa0NBQTBCLDZCQThTdEMsQ0FBQSIsImZpbGUiOiJhcHAvbXlwcm9wb3NhbGRldGFpbHMvbXlwcm9wb3NhbGRldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1lc3NhZ2VzTW9kdWxlLCBNZXNzYWdlLCBHcm93bCB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IFBhbmVsTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgRGF0YVRhYmxlTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBJbnB1dFRleHRhcmVhTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgTXlDdXJyZW5jeVBpcGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZmlyc3QucGlwZSc7XHJcbmltcG9ydCB7IE15cHJvcG9zYWxkZXRhaWxzU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9teXByb3Bvc2FsZGV0YWlscy9pbmRleCc7XHJcbmltcG9ydCB7IE9GQ21lbVNlc3Npb24gfSBmcm9tICcuLi9sb2dpbnBhZ2Uvb2ZjbWVtc2Vzc2lvbic7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBTZWxlY3RJdGVtIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgTXlEYXRlRm9ybWF0IH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL215ZGF0ZWZvcm1hdC5waXBlJztcclxuaW1wb3J0IHsgRW1haWxWYWxpZGF0ZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9lbWFpbHZhbGlkYXRlLnBpcGUnO1xyXG5pbXBvcnQgeyBDdXN0b21WYWxpZGF0b3IgfSBmcm9tICcuLi9zaGFyZWQvdmFsaWRhdG9ycy92YWxpZGF0b3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQmFzZVVybFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvYmFzZXVybC9iYXNldXJsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBNeXByb3Bvc2FsZGV0YWlscyB9IGZyb20gJy4vbXlwcm9wb3NhbGRldGFpbHMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgU2tpbGwgfSBmcm9tICcuL3NraWxsJztcclxuaW1wb3J0IHtDaGF0U2VydmljZSxNZXNzYWdlQ2xpZW50fSBmcm9tICcuLi9zaGFyZWQvY2hhdC9jaGF0LnNlcnZpY2UnO1xyXG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMvUngnO1xyXG5cclxuZGVjbGFyZSB2YXIgJDphbnk7XHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlc1RocmVhZHtcclxuICAgIGF1dGhvcjogc3RyaW5nO1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgb3RoZXJhdXRob3I6c3RyaW5nO1xyXG4gICAgdXNlcm5hbWU6c3RyaW5nO1xyXG4gICAgbWVzc2FnZXM6TWVzc2FnZUNsaWVudFtdO1xyXG4gICAgc2VuZGVyaWQ6c3RyaW5nO1xyXG4gICAgcmVjaWV2ZXJpZDpzdHJpbmc7XHJcbiAgICBwcm9qZWN0cG9zdGlkOnN0cmluZztcclxuICAgIHN1Ym1pdHByb3Bvc2FsX2lkOnN0cmluZztcclxuICAgIG9mY3N1Ym1pdHByb3Bvc2FsY2hhdF9pZDpzdHJpbmc7XHJcbiAgICBjcmVhdGVkYXRlOnN0cmluZztcclxuICAgIG1vZGlmaWVkZGF0ZTpzdHJpbmc7XHJcbiAgICBzdGF0dXM6c3RyaW5nO1xyXG59XHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIG15cHJvcG9zYWxkZXRhaWxzQ29tcG9uZW50LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NkLW15cHJvcG9zYWxkZXRhaWxzJyxcclxuICB0ZW1wbGF0ZVVybDogJ215cHJvcG9zYWxkZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbXlwcm9wb3NhbGRldGFpbHMuY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW015Q3VycmVuY3lQaXBlLCBNeURhdGVGb3JtYXQsIEVtYWlsVmFsaWRhdGUsIEJhc2VVcmxTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlwcm9wb3NhbGRldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBtc2dzOiBNZXNzYWdlW10gPSBbXTtcclxuXHJcbiAgbXlwcm9wb3NhbGRldGFpbHM6IE15cHJvcG9zYWxkZXRhaWxzO1xyXG4gIG15cHJvcG9zYWxkZXRhaWxzR3JpZDogTXlwcm9wb3NhbGRldGFpbHNbXTtcclxuICBcclxuICBzdWJtaXR0ZWQ6IGJvb2xlYW47XHJcblxyXG4gIG5ld215cHJvcG9zYWxkZXRhaWxzOiBib29sZWFuO1xyXG4gIHNlc3Npb25pZDogc3RyaW5nO1xyXG4gIG9mY3N1Ym1pdHByb3Bvc2FsaWQ6IHN0cmluZztcclxuXHJcbiAgbXliYXNldXJsOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSByb3V0ZSQ6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiBvd25jaGF0aWQ6c3RyaW5nO1xyXG5cclxuICBtZXNzYWdlczpNZXNzYWdlQ2xpZW50W109W107XHJcbiAgbXNnbGlzdDpTdWJqZWN0PE1lc3NhZ2VDbGllbnQ+W109W107XHJcbiAgbGlzdG9mdXNlcnM6TWVzc2FnZXNUaHJlYWRbXT1bXTsvL01lc3NhZ2VDbGllbnRbXT1bXTtcclxuICBsaXN0b2Zvd25lcjpNZXNzYWdlQ2xpZW50W109W107XHJcbiAgbGlzdG9mb2xkY2hhdHM6TWVzc2FnZXNUaHJlYWRbXT1bXTtcclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLm5ld215cHJvcG9zYWxkZXRhaWxzID0gdHJ1ZTtcclxuICAgIHRoaXMubXlwcm9wb3NhbGRldGFpbHMgPSB7XHJcblxyXG4gICAgICAgc3RhdHVzOiAnJyxcclxuICAgICAgc2tpbGxzYXJyOiBbXSxcclxuICAgICAgY3JlYXRlZGF0ZTogJycsXHJcbiAgICAgIHN1YmNhdF9uYW1lOiAnJyxcclxuICAgICAgY291bnRyeV9uYW1lOiAnJyxcclxuICAgICAgbWFpbmNhdF9uYW1lOiAnJyxcclxuICAgICAgbW9kaWZpZWRkYXRlOiAnJyxcclxuICAgICAgZXhwZXJpZW5jZV9uYW1lOiAnJyxcclxuICAgICAgcHJvamVjdHBvc3RkYXRlOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfaWQ6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9raW5kOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfdGl0bGU6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9pZDogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2J1ZGdldDogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2lzcGFpZDogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X3B1YmxpYzogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2RlbGF5ZWQ6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9lbmRkYXRlOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfdGVybXM6ICcnLFxyXG4gICAgICBzdWJjYXRfaWRfZmtwcm9qZWN0cG9zdDogJycsXHJcbiAgICAgIGNvdW50cnlfaWRfZmtwcm9qZWN0cG9zdDogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2lzZGlzcHV0ZTogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X3N0YXJ0ZGF0ZTogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X3RpbWVmcmFtZTogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX2J1ZGdldDogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX3N0YXR1czogJycsXHJcbiAgICAgIGxhbmd1YWdlX2lkX2ZrcHJvamVjdHBvc3Q6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9pc3JlZnVuZGVkOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfbmVnb3RpYWJsZTogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX2VuZGRhdGU6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9yZW1hcmtzOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9pc2NvbXBsZXRlZDogJycsXHJcbiAgICAgIGV4cGVyaWVuY2VfaWRfZmtwcm9qZWN0cG9zdDogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfaWRfZmtwcm9qZWN0cG9zdDogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2J1ZGdldGFtb3VudDogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX3N0YXJ0ZGF0ZTogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX3RpbWVmcmFtZTogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2FkdmFuY2VhbW91bnQ6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9vZmNjb21taXNzaW9uOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfcHJvamVjdGFtb3VudDogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX25lZ290aWFibGU6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF93b3Jrc3RhdHVzOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfdHlwZXByZWZlcmVuY2U6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9jb3ZlcmxldHRlcjogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX2ZpbmFsYW1vdW50OiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19pZF9ma3N1Ym1pdHByb3Bvc2FsOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfZmluYWxwYWlkYW1vdW50OiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfYXZhaWxhYmlsaXR5OiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfZXN0aW1hdGVkYXlzOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfY29tcGxldGVkZGF0ZTogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2VzdGltYXRlc3RhcnRkYXRlOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfaW52aXRlZnJlZWxhbmNlcnM6ICcnLFxyXG4gICAgICBvZmNwcm9qZWN0cG9zdF9pc2Rpc3B1dGVyZXNvbHZlZDogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2lzcmVmdW5kcmVxdWVzdGVkOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfaXN0ZXJtc2FnZ3JlZWRieW1lOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfY29tbWlzc2lvbmFtb3VudDogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2NvbW1pc3Npb25wZXJjZW50YWdlOiAnJyxcclxuICAgICAgb2ZjcHJvamVjdHBvc3RfaXNwYXltZW50dGVybXNhZ3JlZWQ6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9lc3RpbWF0ZXN0YXJ0ZGF0ZTogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX3Byb3Bvc2FsYWNjZXB0ZGF0ZTogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX3Byb3Bvc2FscmVqZWN0ZGF0ZTogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX2NvbW1pc3Npb25wZXJjZW50YWdlOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfZXN0aW1hdGVkaG91cnNpbmRheXM6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9pc2NvbXBsZXRlZGJ5ZW1wbG95ZWVyOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfcmVwb3J0YWJ1c2VieWVtcGxveWVlcjogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2lzdGVybXNhZ2dyZWVkYnlmcmVlbGFuY2VyOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfaXNjb21wbGV0ZWRieWZyZWVsYW5jZXI6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9yZXBvcnRhYnVzZWJ5ZnJlZWxhbmNlcjogJydcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgbG9jYWxTZXJ2aWNlOiBNeXByb3Bvc2FsZGV0YWlsc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIG15Y3VyOiBNeUN1cnJlbmN5UGlwZSxcclxuICAgIHByaXZhdGUgbXlkYXRlMTogTXlEYXRlRm9ybWF0LFxyXG4gICAgcHJpdmF0ZSBlbWFpbHZhbDogRW1haWxWYWxpZGF0ZSxcclxuICAgIHByaXZhdGUgYmFzZVVybHNlcnZpY2U6IEJhc2VVcmxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjaGF0U2VydmljZTpDaGF0U2VydmljZVxyXG4gICkge1xyXG5cclxuICAgIHRoaXMuY2hhdFNlcnZpY2UubG9hZFNpbmdsZUNoYXRBdENsaWVudCgpO1xyXG4gICAgXHJcbiAgICB0aGlzLm15YmFzZXVybCA9IGJhc2VVcmxzZXJ2aWNlLmdldEJhc2V1cmwoKTtcclxuICAgIHRoaXMucm91dGUucGFyYW1zLmZvckVhY2goKHBhcmFtczogUGFyYW1zKSA9PiB7XHJcbiAgICB0aGlzLm9mY3N1Ym1pdHByb3Bvc2FsaWQgPSBwYXJhbXNbXCJvZmNzdWJtaXRwcm9wb3NhbF9pZFwiXTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgZGF0YSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ21lbWJlcmRldGFpbHMnKTtcclxuICAgIGxldCBvZmNtZW1zZXNzaW9uOiBPRkNtZW1TZXNzaW9uID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgIHRoaXMuc2Vzc2lvbmlkID0gb2ZjbWVtc2Vzc2lvbi5vZmNtZW1zZXNzaW9uX2lkO1xyXG4gICAgbGV0IG1lbWJlcl9pZD1vZmNtZW1zZXNzaW9uLm9mY21lbWJlcnNfaWQ7XHJcbnRoaXMubG9jYWxTZXJ2aWNlLmdldEFsbFN1Ym1pdHRlZFByb3Bvc2Fsc0J5SWQodGhpcy5zZXNzaW9uaWQsIHRoaXMub2Zjc3VibWl0cHJvcG9zYWxpZCkuXHJcbiAgICAgIHN1YnNjcmliZShwID0+IHRoaXMubXlwcm9wb3NhbGRldGFpbHNHcmlkID0gcCxcclxuICAgICAgZSA9PiBjb25zb2xlLmxvZyhcIm15IGVycm9yIFwiICsgZSwgZSksXHJcbiAgICAgICgpID0+e1xyXG4gICAgICAgICAgICB0aGlzLm15cHJvcG9zYWxkZXRhaWxzID0gdGhpcy5teXByb3Bvc2FsZGV0YWlsc0dyaWRbMF07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibXlwcm9wb3NhbGRldGFpbHNcIix0aGlzLm15cHJvcG9zYWxkZXRhaWxzKVxyXG4gICAgICAgICAgICB0aGlzLmxvYWRDaGF0KHRoaXMubXlwcm9wb3NhbGRldGFpbHMsbWVtYmVyX2lkKTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gIFxyXG5cclxufVxyXG4gIFxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAkLmdldFNjcmlwdCgnLi4vLi4vcmVzb3VyY2VzL29mYy9qcy9kcmlsbGRvd24uanMnKTtcclxuICAgICQuZ2V0U2NyaXB0KCcuLi8uLi9yZXNvdXJjZXMvb2ZjL2pzL3Ntay1hY2NvcmRpb24uanMnKTtcclxuICAgICQuZ2V0U2NyaXB0KCcuLi8uLi9yZXNvdXJjZXMvb2ZjL2pzL215YWNjb3JkaW9uX2pxdWVyeS5qcycpO1xyXG4gICAgICBcclxuICB9XHJcbiAgXHJcbiAgIFxyXG5cclxuXHJcblxyXG5cclxub25jbGlja1N1Ym1pdFByb3Bvc2FsKCkge1xyXG4gICBcclxuICB9XHJcblxyXG4gZ2V0U2tpbGxMaXN0KHNraWxsTGlzdDogU2tpbGxbXSk6IHN0cmluZyB7XHJcbiAgICBsZXQgYTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNraWxsTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgYyA9IHNraWxsTGlzdFtpXS5za2lsbF9uYW1lO1xyXG4gICAgICBsZXQgYiA9ICc8ZGl2IGNsYXNzPVwic2tpbGxzXCI+JyArIGMgKyAnPC9kaXY+JztcclxuICAgICAgYSArPSBiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGE7XHJcbiAgfTtcclxuXHJcbiBsb2FkQ2hhdChwYXJhbTpNeXByb3Bvc2FsZGV0YWlscyxteW1lbWJlcmlkOnN0cmluZyl7XHJcblxyXG4gICAgICBcclxuXHJcbiAgICAgICAgICBsZXQgdXNlcm5hbWU9bXltZW1iZXJpZDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgbGV0IHBvc3RzdWJtaXRpZD10aGlzLm9mY3N1Ym1pdHByb3Bvc2FsaWQ7XHJcbiAgICAgICAgICBsZXQgcHJvamVjdHBvc3RpZD1wYXJhbS5vZmNwcm9qZWN0cG9zdF9pZDtcclxuXHJcbiAgICAgICAgICAvLyB0aGlzLnBvc3RKb2JWaWV3R3JpZC5cclxuICAgICAgICAgIHRoaXMub3duY2hhdGlkPXByb2plY3Rwb3N0aWQrXCJfXCIrcG9zdHN1Ym1pdGlkK1wiX1wiK215bWVtYmVyaWQ7XHJcbiAgICAgICAgICAvL293bmVyaWRcclxuICAgICAgICAgIGxldCBiaWRkaW5nbWVtYmVyaWQ9cGFyYW0ub2ZjbWVtYmVyc19pZF9ma3Byb2plY3Rwb3N0Oy8vb2ZjbWVtYmVyc19pZF9ma3N1Ym1pdHByb3Bvc2FsO1xyXG4gICAgICAgICAgLy9vdGhlcmlkXHJcbiAgICAgICAgICBsZXQgYmlkZGVyY2hhdGlkID1wcm9qZWN0cG9zdGlkK1wiX1wiK3Bvc3RzdWJtaXRpZCtcIl9cIitiaWRkaW5nbWVtYmVyaWQ7XHJcblxyXG4gICAgICAgICAgLy8gdGhpcy5vd25jaGF0aWQ9XCJiaWRkZXJcIjtcclxuICAgICAgICAgIC8vIGJpZGRlcmNoYXRpZD1cIm93bmVyXCI7XHJcblxyXG4gICAgICAgIGxldCB0ZW1wb3duOk1lc3NhZ2VDbGllbnQ7XHJcbiAgICAgICAgdGVtcG93bj17XHJcbiAgICAgICAgICAgIGF1dGhvcjp0aGlzLm93bmNoYXRpZCxcclxuICAgICAgICAgICAgbWVzc2FnZTonSGkgZnJvbSBDaGF0IE93bmVyJyxcclxuICAgICAgICAgICAgb3RoZXJhdXRob3I6YmlkZGVyY2hhdGlkLFxyXG4gICAgICAgICAgICB1c2VybmFtZTp1c2VybmFtZSxcclxuICAgICAgICAgICAgc2VuZGVyaWQ6bXltZW1iZXJpZCxcclxuICAgICAgICAgICAgcmVjaWV2ZXJpZDpiaWRkaW5nbWVtYmVyaWQsXHJcbiAgICAgICAgICAgIHByb2plY3Rwb3N0aWQ6cHJvamVjdHBvc3RpZCxcclxuICAgICAgICAgICAgc3VibWl0cHJvcG9zYWxfaWQ6cG9zdHN1Ym1pdGlkLFxyXG4gICAgICAgICAgICBvZmNzdWJtaXRwcm9wb3NhbGNoYXRfaWQ6JycsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRhdGU6JycsXHJcbiAgICAgICAgICAgIG1vZGlmaWVkZGF0ZTonJyxcclxuICAgICAgICAgICAgc3RhdHVzOidhY3RpdmUnLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCB0ZW1wb3RoZXI6TWVzc2FnZXNUaHJlYWQ7XHJcbiAgICAgICAgdGVtcG90aGVyPXtcclxuICAgICAgICAgICAgYXV0aG9yOnRoaXMub3duY2hhdGlkLFxyXG4gICAgICAgICAgICBtZXNzYWdlOicnLFxyXG4gICAgICAgICAgICBvdGhlcmF1dGhvcjpiaWRkZXJjaGF0aWQsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBtZXNzYWdlczpbXSxcclxuICAgICAgICAgICAgc2VuZGVyaWQ6bXltZW1iZXJpZCxcclxuICAgICAgICAgICAgcmVjaWV2ZXJpZDpiaWRkaW5nbWVtYmVyaWQsXHJcbiAgICAgICAgICAgIHByb2plY3Rwb3N0aWQ6cHJvamVjdHBvc3RpZCxcclxuICAgICAgICAgICAgc3VibWl0cHJvcG9zYWxfaWQ6cG9zdHN1Ym1pdGlkLFxyXG4gICAgICAgICAgICBvZmNzdWJtaXRwcm9wb3NhbGNoYXRfaWQ6JycsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRhdGU6JycsXHJcbiAgICAgICAgICAgIG1vZGlmaWVkZGF0ZTonJyxcclxuICAgICAgICAgICAgc3RhdHVzOidhY3RpdmUnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IG9sZG1zZzpNZXNzYWdlc1RocmVhZDtcclxuICAgICAgICBvbGRtc2c9e1xyXG4gICAgICAgICAgICBhdXRob3I6dGhpcy5vd25jaGF0aWQsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6JycsXHJcbiAgICAgICAgICAgIG90aGVyYXV0aG9yOmJpZGRlcmNoYXRpZCxcclxuICAgICAgICAgICAgdXNlcm5hbWU6dXNlcm5hbWUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzOltdLFxyXG4gICAgICAgICAgICBzZW5kZXJpZDpteW1lbWJlcmlkLFxyXG4gICAgICAgICAgICByZWNpZXZlcmlkOmJpZGRpbmdtZW1iZXJpZCxcclxuICAgICAgICAgICAgcHJvamVjdHBvc3RpZDpwcm9qZWN0cG9zdGlkLFxyXG4gICAgICAgICAgICBzdWJtaXRwcm9wb3NhbF9pZDpwb3N0c3VibWl0aWQsXHJcbiAgICAgICAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsY2hhdF9pZDonJyxcclxuICAgICAgICAgICAgY3JlYXRlZGF0ZTonJyxcclxuICAgICAgICAgICAgbW9kaWZpZWRkYXRlOicnLFxyXG4gICAgICAgICAgICBzdGF0dXM6J2FjdGl2ZScsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGF0U2VydmljZS5nZXRPbGRDaGF0TWVzc2FnZXMocG9zdHN1Ym1pdGlkKS5zdWJzY3JpYmUocCA9PiBvbGRtc2cubWVzc2FnZXM9IHAsXHJcbiAgICAgICAgIGUgPT4gY29uc29sZS5sb2coZSksXHJcbiAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5saXN0b2ZvbGRjaGF0cy5wdXNoKG9sZG1zZyk7XHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIk9MRCBDSEFUIFJFU1VMVD1cIix0aGlzLmxpc3RvZm9sZGNoYXRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgIFxyXG4gICAgICAgIHRoaXMubGlzdG9mb3duZXIucHVzaCh0ZW1wb3duKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmxpc3RvZnVzZXJzLnB1c2godGVtcG90aGVyKTtcclxuICAgICAgICBcclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5saXN0b2Z1c2Vyc1wiLHRoaXMubGlzdG9mdXNlcnMpO1xyXG5cclxuICAgICAgdGhpcy5jaGF0U2VydmljZS5tZXNzYWdlcy5zdWJzY3JpYmUobXNnID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSY3ZkIE1lc3NhZ2UgYmlkZGVyPVwiLG1zZyk7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChtc2cpO1xyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMubGlzdG9mdXNlcnMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgaWYodGhpcy5saXN0b2Z1c2Vyc1tpXS5vdGhlcmF1dGhvcj09bXNnLmF1dGhvcil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RvZnVzZXJzW2ldLm1lc3NhZ2VzLnB1c2gobXNnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAgXHJcblxyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25TdWJtaXRDaGF0KGluZGV4Om51bWJlcixwYXJhbW90aGVyYXV0aG9yOnN0cmluZykge1xyXG4gICAgICAgIC8vIGxldCB0ZW1wbWVtYmVyOk1lc3NhZ2VDbGllbnQ9dGhpcy5saXN0b2Z1c2Vyc1tpbmRleF07XHJcbiAgICAgICAgbGV0IHRlbXBtZXNzYWdlOk1lc3NhZ2VzVGhyZWFkPXRoaXMubGlzdG9mdXNlcnNbaW5kZXhdO1xyXG5cclxuICAgICAgICBsZXQgdGVtcG1lbWJlcjpNZXNzYWdlQ2xpZW50PXtcclxuICAgICAgICAgIGF1dGhvcjp0aGlzLm93bmNoYXRpZCxcclxuICAgICAgICAgIG1lc3NhZ2U6dGVtcG1lc3NhZ2UubWVzc2FnZSxcclxuICAgICAgICAgIG90aGVyYXV0aG9yOnBhcmFtb3RoZXJhdXRob3IsXHJcbiAgICAgICAgICB1c2VybmFtZTp0ZW1wbWVzc2FnZS51c2VybmFtZSxcclxuICAgICAgICAgIHNlbmRlcmlkOnRlbXBtZXNzYWdlLnNlbmRlcmlkLFxyXG4gICAgICAgICAgcmVjaWV2ZXJpZDp0ZW1wbWVzc2FnZS5yZWNpZXZlcmlkLFxyXG4gICAgICAgICAgcHJvamVjdHBvc3RpZDp0ZW1wbWVzc2FnZS5wcm9qZWN0cG9zdGlkLFxyXG4gICAgICAgICAgc3VibWl0cHJvcG9zYWxfaWQ6dGVtcG1lc3NhZ2Uuc3VibWl0cHJvcG9zYWxfaWQsXHJcbiAgICAgICAgICBvZmNzdWJtaXRwcm9wb3NhbGNoYXRfaWQ6JycsXHJcbiAgICAgICAgICBjcmVhdGVkYXRlOicnLFxyXG4gICAgICAgICAgbW9kaWZpZWRkYXRlOicnLFxyXG4gICAgICAgICAgc3RhdHVzOidhY3RpdmUnLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGVtcG1lbWJlci5hdXRob3I9dGhpcy5vd25jaGF0aWQ7XHJcbiAgICAgICAgLy8gdGVtcG1lbWJlci5vdGhlcmF1dGhvcj1wYXJhbW90aGVyYXV0aG9yO1xyXG5cclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMubGlzdG9mdXNlcnMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgaWYodGhpcy5saXN0b2Z1c2Vyc1tpXS5vdGhlcmF1dGhvcj09cGFyYW1vdGhlcmF1dGhvcil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RvZnVzZXJzW2ldLm1lc3NhZ2VzLnB1c2godGVtcG1lbWJlcik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hhdFNlcnZpY2UubWVzc2FnZXMubmV4dCh0ZW1wbWVtYmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5saXN0b2Z1c2Vyc1tpbmRleF0ubWVzc2FnZT0nJztcclxuICAgICAgICAvLyB0aGlzLm1zZ2xpc3RbaW5kZXhdLm5leHQodGVtcG1lbWJlcik7XHJcbiAgICAgICAvLyB0aGlzLmxpc3RvZnVzZXJzW2luZGV4XS5tZXNzYWdlPScnO1xyXG5cclxuICAgICAgICAvL2xldCBsYXN0aW5kZXg9dGhpcy5tZXNzYWdlcy5sZW5ndGg7XHJcbiAgICAgICAgLy90aGlzLm1zZ2xpc3RbaW5kZXhdLm5leHQodGhpcy5tZXNzYWdlc1tpbmRleF1bbGFzdGluZGV4LTFdKTsgXHJcbiAgICAgICAgLy8gdGhpcy5jaGF0U2VydmljZS5tZXNzYWdlcy5uZXh0KHRoaXMubWVzc2FnZSk7XHJcbiAgICAgICAgLy8gdGhpcy5tZXNzYWdlLm1lc3NhZ2UgPSAnJztcclxuICB9XHJcbiAgIFxyXG59XHJcbiJdfQ==
