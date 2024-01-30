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
var baseurl_service_1 = require('../shared/baseurl/baseurl.service');
var index_1 = require('../shared/postajobviewpage/index');
var app_component_1 = require('../app.component');
var chat_service_1 = require('../shared/chat/chat.service');
var MessagesThread = (function () {
    function MessagesThread() {
    }
    return MessagesThread;
}());
exports.MessagesThread = MessagesThread;
var PostajobviewpageComponent = (function () {
    function PostajobviewpageComponent(router, localService, appComponent, fb, route, mycur, mydate1, emailval, baseUrlservice, chatService) {
        var _this = this;
        this.router = router;
        this.localService = localService;
        this.appComponent = appComponent;
        this.fb = fb;
        this.route = route;
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
        this.mybaseurl = baseUrlservice.getBaseurl();
        this.route.params.forEach(function (params) {
            _this.projectpostid = params["projectpostid"];
        });
        var data = sessionStorage.getItem('memberdetails');
        var ofcmemsession = JSON.parse(data);
        this.sessionid = ofcmemsession.ofcmemsession_id;
        this.mymemberid = ofcmemsession.ofcmembers_id;
        this.displayUI();
    }
    PostajobviewpageComponent.prototype.displayUI = function () {
        var _this = this;
        this.localService.getProjectPostedByProjectId(this.sessionid, this.projectpostid).subscribe(function (p) { return _this.postJobViewGrid = p; }, function (e) { return console.log("my error " + e, e); }, function () {
            _this.loadChat(_this.postJobViewGrid, _this.mymemberid);
        });
        this.localService.getHireJobByProjectId(this.sessionid, this.projectpostid).subscribe(function (p) { return _this.hireJobGrid = p; }, function (e) { return console.log("my error " + e, e); }, function () { });
    };
    PostajobviewpageComponent.prototype.ngOnInit = function () {
        this.clear();
        $.getScript('../../resources/ofc/js/drilldown.js');
        $.getScript('../../resources/ofc/js/smk-accordion.js');
        $.getScript('../../resources/ofc/js/myaccordion_jquery.js');
    };
    PostajobviewpageComponent.prototype.clear = function () {
        this.newpostJobView = true;
        this.postJobView = {
            ofcmembers_id: '',
            ofcmembers_fname: '',
            ofcmembers_mname: '',
            ofcmembers_lname: '',
            ofcmembers_name: '',
            ofcmember_type: '',
            city_id: '',
            ofcmembers_emailid: '',
            ofcmembers_password: '',
            ofcmembers_address1: '',
            ofcmembers_address2: '',
            ofcmembers_pincode: '',
            ofcmembers_contactnos: '',
            ofcmembers_availability: '',
            ofcmembers_displayname: '',
            ofcmembers_description: '',
            ofcmembers_selfrating: '',
            ofcmembers_experiencelevel: '',
            ofcmembers_gender: '',
            ofcmembers_dob: '',
            ofcmembers_nosofteammembers: '',
            city_name: '',
            country_name: '',
            state_name: '',
            ofcsubmitproposal_id: '',
            ofcprojectpost_id_fksubmitproposal: '',
            ofcmembers_id_fksubmitproposal: '',
            ofcsubmitproposal_coverletter: '',
            ofcsubmitproposal_budget: '',
            ofcsubmitproposal_negotiable: '',
            ofcsubmitproposal_commissionpercentage: '',
            ofcsubmitproposal_commissionamount: '',
            ofcsubmitproposal_finalamount: '',
            ofcsubmitproposal_timeframe: '',
            ofcsubmitproposal_availability: '',
            ofcsubmitproposal_status: '',
            ofcsubmitproposal_remarks: '',
            ofcsubmitproposal_terms: '',
            ofcsubmitproposal_estimatestartdate: '',
            ofcsubmitproposal_startdate: '',
            ofcsubmitproposal_enddate: '',
            ofcsubmitproposal_estimatedays: '',
            ofcsubmitproposal_estimatedhoursindays: '',
            ofcsubmitproposal_reportabusebyemployeer: '',
            ofcsubmitproposal_reportabusebyfreelancer: '',
            ofcsubmitproposal_proposalacceptdate: '',
            ofcsubmitproposal_proposalrejectdate: '',
            ofcsubmitproposal_completeddate: '',
            ofcsubmitproposal_iscompletedbyemployeer: '',
            ofcsubmitproposal_iscompletedbyfreelancer: '',
            ofcsubmitproposal_workstatus: '',
            createdate: '',
            modifieddate: '',
            status: '',
            questansarr: [],
            skillsarr: []
        };
    };
    PostajobviewpageComponent.prototype.getSkillList = function (skillList) {
        var a = "";
        for (var i = 0; i < skillList.length; i++) {
            var c = skillList[i].skill_name;
            var b = '<div class="skills">' + c + '</div>';
            a += b;
        }
        return a;
    };
    ;
    PostajobviewpageComponent.prototype.onclickAcceptOffer = function (ofcprojectpostid1) {
        var _this = this;
        this.localService.acceptOffer(this.sessionid, ofcprojectpostid1).subscribe(function (p) { return _this.commonError = p; }, function (e) { return console.log(e); }, function () {
            if (_this.commonError.Isuccess == "1") {
                _this.displayUI();
                _this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Offer Accepted' });
            }
            else {
                var err = _this.commonError.Error;
                _this.msgs.push({ severity: 'info', summary: 'Error', detail: err });
            }
        });
    };
    PostajobviewpageComponent.prototype.onclickRejectOffer = function (ofcprojectpostid2) {
        var _this = this;
        this.localService.rejectOffer(this.sessionid, ofcprojectpostid2).subscribe(function (p) { return _this.commonError = p; }, function (e) { return console.log(e); }, function () {
            if (_this.commonError.Isuccess == "1") {
                _this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Update Successfully' });
            }
            else {
                var err = _this.commonError.Error;
                _this.msgs.push({ severity: 'info', summary: 'Error', detail: err });
            }
        });
    };
    PostajobviewpageComponent.prototype.onclickShortlistOffer = function (ofcprojectpostid3) {
        var _this = this;
        this.localService.shortListOffer(this.sessionid, ofcprojectpostid3).subscribe(function (p) { return _this.commonError = p; }, function (e) { return console.log(e); }, function () {
            if (_this.commonError.Isuccess == "1") {
                _this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Update Successfully' });
            }
            else {
                var err = _this.commonError.Error;
                _this.msgs.push({ severity: 'info', summary: 'Error', detail: err });
            }
        });
    };
    PostajobviewpageComponent.prototype.loadChat = function (param, mymemberidParam) {
        var _this = this;
        var _loop_1 = function(j) {
            var username = this_1.postJobViewGrid[j].ofcmembers_name;
            var postsubmitid = this_1.postJobViewGrid[j].ofcsubmitproposal_id;
            var ownchatidLocal = this_1.projectpostid + "_" + postsubmitid + "_" + mymemberidParam;
            var biddingmemberid = this_1.postJobViewGrid[j].ofcmembers_id_fksubmitproposal;
            var bidderchatid = this_1.projectpostid + "_" + postsubmitid + "_" + biddingmemberid;
            var tempown = void 0;
            tempown = {
                author: ownchatidLocal,
                message: 'Hi from Chat Owner',
                otherauthor: bidderchatid,
                username: username,
                senderid: mymemberidParam,
                recieverid: biddingmemberid,
                projectpostid: this_1.projectpostid,
                submitproposal_id: postsubmitid,
                ofcsubmitproposalchat_id: '',
                createdate: '',
                modifieddate: '',
                status: 'active',
            };
            var tempother = void 0;
            tempother = {
                author: ownchatidLocal,
                message: '',
                otherauthor: bidderchatid,
                username: username,
                messages: [],
                senderid: mymemberidParam,
                recieverid: biddingmemberid,
                projectpostid: this_1.projectpostid,
                submitproposal_id: postsubmitid,
                ofcsubmitproposalchat_id: '',
                createdate: '',
                modifieddate: '',
                status: 'active',
            };
            if (j == 0) {
                this_1.listofowner.push(tempown);
            }
            this_1.listofusers.push(tempother);
            var oldmsg;
            oldmsg = {
                author: ownchatidLocal,
                message: '',
                otherauthor: bidderchatid,
                username: username,
                messages: [],
                senderid: mymemberidParam,
                recieverid: biddingmemberid,
                projectpostid: this_1.projectpostid,
                submitproposal_id: postsubmitid,
                ofcsubmitproposalchat_id: '',
                createdate: '',
                modifieddate: '',
                status: 'active',
            };
            this_1.chatService.getOldChatMessages(postsubmitid).subscribe(function (p) { return oldmsg.messages = p; }, function (e) { return console.log(e); }, function () {
                _this.listofoldchats.push(oldmsg);
                console.log("OLD CHAT RESULT=", _this.listofoldchats);
            });
        };
        var this_1 = this;
        for (var j = 0; j < param.length; j++) {
            _loop_1(j);
        }
        this.chatService.loadChatAtClient(param);
        var _loop_2 = function(k) {
            this_2.chatService.messagesMulti[k].subscribe(function (msg) {
                _this.messages.push(msg);
                if (_this.listofusers[k].otherauthor == msg.author) {
                    _this.listofusers[k].messages.push(msg);
                }
            });
        };
        var this_2 = this;
        for (var k = 0; k < this.chatService.messagesMulti.length; k++) {
            _loop_2(k);
        }
    };
    PostajobviewpageComponent.prototype.onSubmitChat = function (index, paramotherauthor) {
        var tempmessage = this.listofusers[index];
        var tempmember = {
            author: tempmessage.author,
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
        this.chatService.messagesMulti[index].next(tempmember);
        this.listofusers[index].message = '';
    };
    PostajobviewpageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-postajobviewpage',
            templateUrl: 'postajobviewpage.component.html',
            styleUrls: ['postajobviewpage.component.css'],
            providers: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.PostajobviewpageService, app_component_1.AppComponent, forms_1.FormBuilder, router_1.ActivatedRoute, first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, baseurl_service_1.BaseUrlService, chat_service_1.ChatService])
    ], PostajobviewpageComponent);
    return PostajobviewpageComponent;
}());
exports.PostajobviewpageComponent = PostajobviewpageComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wb3N0YWpvYnZpZXdwYWdlL3Bvc3Rham9idmlld3BhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsc0JBQWdFLGdCQUFnQixDQUFDLENBQUE7QUFTakYsdUJBQStDLGlCQUFpQixDQUFDLENBQUE7QUFHakUsMkJBQStCLDRCQUE0QixDQUFDLENBQUE7QUFHNUQsa0NBQTZCLG1DQUFtQyxDQUFDLENBQUE7QUFDakUsbUNBQThCLG9DQUFvQyxDQUFDLENBQUE7QUFFbkUsZ0NBQStCLG1DQUFtQyxDQUFDLENBQUE7QUFDbkUsc0JBQXdDLGtDQUFrQyxDQUFDLENBQUE7QUFHM0UsOEJBQTZCLGtCQUFrQixDQUFDLENBQUE7QUFHaEQsNkJBQXdDLDZCQUE2QixDQUFDLENBQUE7QUFLdEU7SUFBQTtJQWNBLENBQUM7SUFBRCxxQkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksc0JBQWMsaUJBYzFCLENBQUE7QUFZRDtJQTZCRSxtQ0FDVSxNQUFjLEVBQ2QsWUFBcUMsRUFDckMsWUFBMEIsRUFDMUIsRUFBZSxFQUNmLEtBQXFCLEVBQ3JCLEtBQXFCLEVBQ3JCLE9BQXFCLEVBQ3JCLFFBQXVCLEVBQ3ZCLGNBQThCLEVBQzlCLFdBQXVCO1FBdkNuQyxpQkFxWUM7UUF2V1csV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUF5QjtRQUNyQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQXRDakMsU0FB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RUFBRTtZQUNmLE1BQU0sRUFBQyxRQUFRO1NBQ2hCLENBQUE7UUFLRCxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDckMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLElBQUUsZ0JBQWdCLENBQUMsQ0FBQSxDQUFDO2dCQUNwRCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDaEQsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFJMUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEdBQUMsRUFBRSxDQUFDO0lBUXhDLENBQUM7SUEzWUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztZQUM3QyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBRTFCLENBQUM7O2lDQUFBO0lBc1lGLGdDQUFDO0FBQUQsQ0FyWUEsQUFxWUMsSUFBQTtBQXJZWSxpQ0FBeUIsNEJBcVlyQyxDQUFBIiwiZmlsZSI6ImFwcC9wb3N0YWpvYnZpZXdwYWdlL3Bvc3Rham9idmlld3BhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEYXRhVGFibGVNb2R1bGUsIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgRGlhbG9nTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgQ2FsZW5kYXJNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWVzc2FnZXNNb2R1bGUsIE1lc3NhZ2UsIEdyb3dsIH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgUGFuZWxNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IElucHV0VGV4dGFyZWFNb2R1bGUgfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBNeUN1cnJlbmN5UGlwZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9maXJzdC5waXBlJztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IFNlbGVjdEl0ZW0gfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZSc7XHJcbmltcG9ydCB7IEN1c3RvbVZhbGlkYXRvciB9IGZyb20gJy4uL3NoYXJlZC92YWxpZGF0b3JzL3ZhbGlkYXRvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBCYXNlVXJsU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9iYXNldXJsL2Jhc2V1cmwuc2VydmljZSc7XHJcbmltcG9ydCB7IFBvc3Rham9idmlld3BhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3Bvc3Rham9idmlld3BhZ2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21tb25FcnJvciB9IGZyb20gJy4uL2xvZ2lucGFnZS9jb21tb25lcnJvcic7XHJcbmltcG9ydCB7IE9GQ21lbVNlc3Npb24gfSBmcm9tICcuLi9sb2dpbnBhZ2Uvb2ZjbWVtc2Vzc2lvbic7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4uL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb3N0Sm9iVmlldyB9IGZyb20gJy4vcG9zdGpvYnZpZXcnO1xyXG5pbXBvcnQgeyBTa2lsbCB9IGZyb20gJy4vc2tpbGwnO1xyXG5pbXBvcnQge0NoYXRTZXJ2aWNlLE1lc3NhZ2VDbGllbnR9IGZyb20gJy4uL3NoYXJlZC9jaGF0L2NoYXQuc2VydmljZSc7XHJcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcy9SeCc7XHJcblxyXG5cclxuZGVjbGFyZSB2YXIgJDogYW55O1xyXG5leHBvcnQgY2xhc3MgTWVzc2FnZXNUaHJlYWR7XHJcbiAgICBhdXRob3I6IHN0cmluZztcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIG90aGVyYXV0aG9yOnN0cmluZztcclxuICAgIHVzZXJuYW1lOnN0cmluZztcclxuICAgIG1lc3NhZ2VzOk1lc3NhZ2VDbGllbnRbXTtcclxuICAgIHNlbmRlcmlkOnN0cmluZztcclxuICAgIHJlY2lldmVyaWQ6c3RyaW5nO1xyXG4gICAgcHJvamVjdHBvc3RpZDpzdHJpbmc7XHJcbiAgICBzdWJtaXRwcm9wb3NhbF9pZDpzdHJpbmc7XHJcbiAgICBvZmNzdWJtaXRwcm9wb3NhbGNoYXRfaWQ6c3RyaW5nO1xyXG4gICAgY3JlYXRlZGF0ZTpzdHJpbmc7XHJcbiAgICBtb2RpZmllZGRhdGU6c3RyaW5nO1xyXG4gICAgc3RhdHVzOnN0cmluZztcclxufVxyXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBBYm91dENvbXBvbmVudC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzZC1wb3N0YWpvYnZpZXdwYWdlJyxcclxuICB0ZW1wbGF0ZVVybDogJ3Bvc3Rham9idmlld3BhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydwb3N0YWpvYnZpZXdwYWdlLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtBcHBDb21wb25lbnRdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9zdGFqb2J2aWV3cGFnZUNvbXBvbmVudCB7XHJcbiAgbXNnczogTWVzc2FnZVtdID0gW107XHJcbiAgdXNlcmZvcm06IEZvcm1Hcm91cDtcclxuICBib29scG9zdGFqb2J2aWV3cGFnZTogYm9vbGVhbjtcclxuXHJcbiAgcG9zdEpvYlZpZXc6IFBvc3RKb2JWaWV3O1xyXG4gIG5ld3Bvc3RKb2JWaWV3OiBib29sZWFuO1xyXG4gIG15bWVtYmVyaWQ6IHN0cmluZztcclxuICBteWJhc2V1cmw6IHN0cmluZztcclxuXHJcbiAgcG9zdEpvYlZpZXdHcmlkOiBQb3N0Sm9iVmlld1tdO1xyXG4gIGhpcmVKb2JHcmlkOiBQb3N0Sm9iVmlld1tdO1xyXG4gIFxyXG4gIHN1Ym1pdHRlZDogYm9vbGVhbjtcclxuICBzZXNzaW9uaWQ6IHN0cmluZztcclxuICBjb21tb25FcnJvcjogQ29tbW9uRXJyb3I7XHJcbiAgcHJvamVjdHBvc3RpZDogc3RyaW5nO1xyXG5cclxuICBvd25jaGF0aWQ6c3RyaW5nO1xyXG5cclxuICBtZXNzYWdlczpNZXNzYWdlQ2xpZW50W109W107XHJcbiAgbXNnbGlzdDpTdWJqZWN0PE1lc3NhZ2VDbGllbnQ+W109W107XHJcbiAgbGlzdG9mdXNlcnM6TWVzc2FnZXNUaHJlYWRbXT1bXTsvL01lc3NhZ2VDbGllbnRbXT1bXTtcclxuICBsaXN0b2Zvd25lcjpNZXNzYWdlQ2xpZW50W109W107XHJcblxyXG4gIGxpc3RvZm9sZGNoYXRzOk1lc3NhZ2VzVGhyZWFkW109W107XHJcbiAgXHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGxvY2FsU2VydmljZTogUG9zdGFqb2J2aWV3cGFnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50LFxyXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgbXljdXI6IE15Q3VycmVuY3lQaXBlLFxyXG4gICAgcHJpdmF0ZSBteWRhdGUxOiBNeURhdGVGb3JtYXQsXHJcbiAgICBwcml2YXRlIGVtYWlsdmFsOiBFbWFpbFZhbGlkYXRlLFxyXG4gICAgcHJpdmF0ZSBiYXNlVXJsc2VydmljZTogQmFzZVVybFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNoYXRTZXJ2aWNlOkNoYXRTZXJ2aWNlXHJcbiAgKSB7XHJcblxyXG4gICAgdGhpcy5teWJhc2V1cmwgPSBiYXNlVXJsc2VydmljZS5nZXRCYXNldXJsKCk7XHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5mb3JFYWNoKChwYXJhbXM6IFBhcmFtcykgPT4ge1xyXG4gICAgICB0aGlzLnByb2plY3Rwb3N0aWQgPSBwYXJhbXNbXCJwcm9qZWN0cG9zdGlkXCJdO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBkYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbWVtYmVyZGV0YWlscycpO1xyXG4gICAgbGV0IG9mY21lbXNlc3Npb246IE9GQ21lbVNlc3Npb24gPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgdGhpcy5zZXNzaW9uaWQgPSBvZmNtZW1zZXNzaW9uLm9mY21lbXNlc3Npb25faWQ7XHJcbiAgICB0aGlzLm15bWVtYmVyaWQ9b2ZjbWVtc2Vzc2lvbi5vZmNtZW1iZXJzX2lkO1xyXG5cclxuXHJcbiAgICB0aGlzLmRpc3BsYXlVSSgpO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuXHJcbmRpc3BsYXlVSSgpXHJcbntcclxuXHJcblxyXG4gICAgdGhpcy5sb2NhbFNlcnZpY2UuZ2V0UHJvamVjdFBvc3RlZEJ5UHJvamVjdElkKHRoaXMuc2Vzc2lvbmlkLCB0aGlzLnByb2plY3Rwb3N0aWQpLnN1YnNjcmliZShwID0+IHRoaXMucG9zdEpvYlZpZXdHcmlkID0gcCxcclxuICAgICAgZSA9PiBjb25zb2xlLmxvZyhcIm15IGVycm9yIFwiICsgZSwgZSksXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRDaGF0KHRoaXMucG9zdEpvYlZpZXdHcmlkLHRoaXMubXltZW1iZXJpZCk7XHJcbiAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICBcclxuICAgIHRoaXMubG9jYWxTZXJ2aWNlLmdldEhpcmVKb2JCeVByb2plY3RJZCh0aGlzLnNlc3Npb25pZCwgdGhpcy5wcm9qZWN0cG9zdGlkKS5zdWJzY3JpYmUocCA9PiB0aGlzLmhpcmVKb2JHcmlkID0gcCxcclxuICAgICAgZSA9PiBjb25zb2xlLmxvZyhcIm15IGVycm9yIFwiICsgZSwgZSksXHJcbiAgICAgICgpID0+IHt9KTtcclxuXHJcblxyXG59XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICQuZ2V0U2NyaXB0KCcuLi8uLi9yZXNvdXJjZXMvb2ZjL2pzL2RyaWxsZG93bi5qcycpO1xyXG4gICAgJC5nZXRTY3JpcHQoJy4uLy4uL3Jlc291cmNlcy9vZmMvanMvc21rLWFjY29yZGlvbi5qcycpO1xyXG4gICAgJC5nZXRTY3JpcHQoJy4uLy4uL3Jlc291cmNlcy9vZmMvanMvbXlhY2NvcmRpb25fanF1ZXJ5LmpzJyk7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMubmV3cG9zdEpvYlZpZXcgPSB0cnVlO1xyXG4gICAgdGhpcy5wb3N0Sm9iVmlldyA9IHtcclxuICAgICAgb2ZjbWVtYmVyc19pZDonJyxcclxuICAgICAgb2ZjbWVtYmVyc19mbmFtZTogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfbW5hbWU6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2xuYW1lOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19uYW1lOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyX3R5cGU6ICcnLFxyXG4gICAgICBjaXR5X2lkOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19lbWFpbGlkOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19wYXNzd29yZDogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfYWRkcmVzczE6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2FkZHJlc3MyOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19waW5jb2RlOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19jb250YWN0bm9zOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19hdmFpbGFiaWxpdHk6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2Rpc3BsYXluYW1lOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19kZXNjcmlwdGlvbjogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfc2VsZnJhdGluZzogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfZXhwZXJpZW5jZWxldmVsOiAnJyxcclxuICAgICAgb2ZjbWVtYmVyc19nZW5kZXI6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2RvYjogJycsXHJcbiAgICAgIG9mY21lbWJlcnNfbm9zb2Z0ZWFtbWVtYmVyczogJycsXHJcbiAgICAgIGNpdHlfbmFtZTogJycsXHJcbiAgICAgIGNvdW50cnlfbmFtZTogJycsXHJcbiAgICAgIHN0YXRlX25hbWU6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9pZDogJycsXHJcbiAgICAgIG9mY3Byb2plY3Rwb3N0X2lkX2Zrc3VibWl0cHJvcG9zYWw6ICcnLFxyXG4gICAgICBvZmNtZW1iZXJzX2lkX2Zrc3VibWl0cHJvcG9zYWw6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9jb3ZlcmxldHRlcjogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX2J1ZGdldDogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX25lZ290aWFibGU6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9jb21taXNzaW9ucGVyY2VudGFnZTogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX2NvbW1pc3Npb25hbW91bnQ6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9maW5hbGFtb3VudDogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX3RpbWVmcmFtZTogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX2F2YWlsYWJpbGl0eTogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX3N0YXR1czogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX3JlbWFya3M6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF90ZXJtczogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX2VzdGltYXRlc3RhcnRkYXRlOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfc3RhcnRkYXRlOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfZW5kZGF0ZTogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX2VzdGltYXRlZGF5czogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX2VzdGltYXRlZGhvdXJzaW5kYXlzOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfcmVwb3J0YWJ1c2VieWVtcGxveWVlcjogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX3JlcG9ydGFidXNlYnlmcmVlbGFuY2VyOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfcHJvcG9zYWxhY2NlcHRkYXRlOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfcHJvcG9zYWxyZWplY3RkYXRlOiAnJyxcclxuICAgICAgb2Zjc3VibWl0cHJvcG9zYWxfY29tcGxldGVkZGF0ZTogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX2lzY29tcGxldGVkYnllbXBsb3llZXI6ICcnLFxyXG4gICAgICBvZmNzdWJtaXRwcm9wb3NhbF9pc2NvbXBsZXRlZGJ5ZnJlZWxhbmNlcjogJycsXHJcbiAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsX3dvcmtzdGF0dXM6ICcnLFxyXG4gICAgICBjcmVhdGVkYXRlOiAnJyxcclxuICAgICAgbW9kaWZpZWRkYXRlOiAnJyxcclxuICAgICAgc3RhdHVzOiAnJyxcclxuICAgICAgcXVlc3RhbnNhcnI6IFtdLFxyXG4gICAgICBza2lsbHNhcnI6IFtdXHJcbiAgICB9XHJcblxyXG5cclxuICB9XHJcblxyXG5cclxuICBnZXRTa2lsbExpc3Qoc2tpbGxMaXN0OiBTa2lsbFtdKTogc3RyaW5nIHtcclxuICAgIGxldCBhOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2tpbGxMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBjID0gc2tpbGxMaXN0W2ldLnNraWxsX25hbWU7XHJcbiAgICAgIGxldCBiID0gJzxkaXYgY2xhc3M9XCJza2lsbHNcIj4nICsgYyArICc8L2Rpdj4nO1xyXG4gICAgICBhICs9IGI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYTtcclxuICB9O1xyXG5cclxub25jbGlja0FjY2VwdE9mZmVyKG9mY3Byb2plY3Rwb3N0aWQxOnN0cmluZylcclxue1xyXG4gIFxyXG50aGlzLmxvY2FsU2VydmljZS5hY2NlcHRPZmZlcih0aGlzLnNlc3Npb25pZCwgb2ZjcHJvamVjdHBvc3RpZDEpLnN1YnNjcmliZShwID0+IHRoaXMuY29tbW9uRXJyb3IgPSBwLCBlID0+IGNvbnNvbGUubG9nKGUpLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNvbW1vbkVycm9yLklzdWNjZXNzID09IFwiMVwiKSB7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5VUkoKTtcclxuICAgICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnaW5mbycsIHN1bW1hcnk6ICdTdWNjZXNzJywgZGV0YWlsOiAnT2ZmZXIgQWNjZXB0ZWQnIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCBlcnIgPSB0aGlzLmNvbW1vbkVycm9yLkVycm9yO1xyXG4gICAgICAgIHRoaXMubXNncy5wdXNoKHsgc2V2ZXJpdHk6ICdpbmZvJywgc3VtbWFyeTogJ0Vycm9yJywgZGV0YWlsOiBlcnIgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5vbmNsaWNrUmVqZWN0T2ZmZXIob2ZjcHJvamVjdHBvc3RpZDI6c3RyaW5nKVxyXG57XHJcbiAgIFxyXG50aGlzLmxvY2FsU2VydmljZS5yZWplY3RPZmZlcih0aGlzLnNlc3Npb25pZCwgb2ZjcHJvamVjdHBvc3RpZDIpLnN1YnNjcmliZShwID0+IHRoaXMuY29tbW9uRXJyb3IgPSBwLCBlID0+IGNvbnNvbGUubG9nKGUpLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNvbW1vbkVycm9yLklzdWNjZXNzID09IFwiMVwiKSB7XHJcbiAgICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2luZm8nLCBzdW1tYXJ5OiAnU3VjY2VzcycsIGRldGFpbDogJ0Zvcm0gVXBkYXRlIFN1Y2Nlc3NmdWxseScgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IGVyciA9IHRoaXMuY29tbW9uRXJyb3IuRXJyb3I7XHJcbiAgICAgICAgdGhpcy5tc2dzLnB1c2goeyBzZXZlcml0eTogJ2luZm8nLCBzdW1tYXJ5OiAnRXJyb3InLCBkZXRhaWw6IGVyciB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgKTtcclxufVxyXG5cclxub25jbGlja1Nob3J0bGlzdE9mZmVyKG9mY3Byb2plY3Rwb3N0aWQzOnN0cmluZylcclxue1xyXG4gIHRoaXMubG9jYWxTZXJ2aWNlLnNob3J0TGlzdE9mZmVyKHRoaXMuc2Vzc2lvbmlkLCBvZmNwcm9qZWN0cG9zdGlkMykuc3Vic2NyaWJlKHAgPT4gdGhpcy5jb21tb25FcnJvciA9IHAsIGUgPT4gY29uc29sZS5sb2coZSksICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuY29tbW9uRXJyb3IuSXN1Y2Nlc3MgPT0gXCIxXCIpIHtcclxuICAgICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnaW5mbycsIHN1bW1hcnk6ICdTdWNjZXNzJywgZGV0YWlsOiAnRm9ybSBVcGRhdGUgU3VjY2Vzc2Z1bGx5JyB9KTtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBsZXQgZXJyID0gdGhpcy5jb21tb25FcnJvci5FcnJvcjtcclxuICAgICAgICB0aGlzLm1zZ3MucHVzaCh7IHNldmVyaXR5OiAnaW5mbycsIHN1bW1hcnk6ICdFcnJvcicsIGRldGFpbDogZXJyIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICApO1xyXG5cclxuXHJcbn1cclxuXHJcbiAgbG9hZENoYXQocGFyYW06UG9zdEpvYlZpZXdbXSxteW1lbWJlcmlkUGFyYW06c3RyaW5nKXtcclxuXHJcbiAgICAgIGZvcihsZXQgaj0wO2o8cGFyYW0ubGVuZ3RoO2orKyl7XHJcblxyXG4gICAgICAgICAgbGV0IHVzZXJuYW1lPXRoaXMucG9zdEpvYlZpZXdHcmlkW2pdLm9mY21lbWJlcnNfbmFtZTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgbGV0IHBvc3RzdWJtaXRpZD10aGlzLnBvc3RKb2JWaWV3R3JpZFtqXS5vZmNzdWJtaXRwcm9wb3NhbF9pZDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gdGhpcy5wb3N0Sm9iVmlld0dyaWQuXHJcbiAgICAgICAgICAgbGV0IG93bmNoYXRpZExvY2FsPXRoaXMucHJvamVjdHBvc3RpZCtcIl9cIitwb3N0c3VibWl0aWQrXCJfXCIrbXltZW1iZXJpZFBhcmFtO1xyXG4gICAgICAgICAgLy9vd25lcmlkXHJcbiAgICAgICAgICBsZXQgYmlkZGluZ21lbWJlcmlkPXRoaXMucG9zdEpvYlZpZXdHcmlkW2pdLm9mY21lbWJlcnNfaWRfZmtzdWJtaXRwcm9wb3NhbDtcclxuICAgICAgICAgIC8vb3RoZXJpZFxyXG4gICAgICAgICAgbGV0IGJpZGRlcmNoYXRpZCA9IHRoaXMucHJvamVjdHBvc3RpZCtcIl9cIitwb3N0c3VibWl0aWQrXCJfXCIrYmlkZGluZ21lbWJlcmlkO1xyXG5cclxuICAgICAgICAgIC8vIHRoaXMub3duY2hhdGlkPVwib3duZXJcIjtcclxuICAgICAgICAgIC8vIGJpZGRlcmNoYXRpZD1cImJpZGRlclwiO1xyXG5cclxuICAgICAgICBsZXQgdGVtcG93bjpNZXNzYWdlQ2xpZW50O1xyXG4gICAgICAgIHRlbXBvd249e1xyXG4gICAgICAgICAgICBhdXRob3I6b3duY2hhdGlkTG9jYWwsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6J0hpIGZyb20gQ2hhdCBPd25lcicsXHJcbiAgICAgICAgICAgIG90aGVyYXV0aG9yOmJpZGRlcmNoYXRpZCxcclxuICAgICAgICAgICAgdXNlcm5hbWU6dXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHNlbmRlcmlkOm15bWVtYmVyaWRQYXJhbSxcclxuICAgICAgICAgICAgcmVjaWV2ZXJpZDpiaWRkaW5nbWVtYmVyaWQsXHJcbiAgICAgICAgICAgIHByb2plY3Rwb3N0aWQ6dGhpcy5wcm9qZWN0cG9zdGlkLFxyXG4gICAgICAgICAgICBzdWJtaXRwcm9wb3NhbF9pZDpwb3N0c3VibWl0aWQsXHJcbiAgICAgICAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsY2hhdF9pZDonJyxcclxuICAgICAgICAgICAgY3JlYXRlZGF0ZTonJyxcclxuICAgICAgICAgICAgbW9kaWZpZWRkYXRlOicnLFxyXG4gICAgICAgICAgICBzdGF0dXM6J2FjdGl2ZScsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgdGVtcG90aGVyOk1lc3NhZ2VzVGhyZWFkO1xyXG4gICAgICAgIHRlbXBvdGhlcj17XHJcbiAgICAgICAgICAgIGF1dGhvcjpvd25jaGF0aWRMb2NhbCxcclxuICAgICAgICAgICAgbWVzc2FnZTonJyxcclxuICAgICAgICAgICAgb3RoZXJhdXRob3I6YmlkZGVyY2hhdGlkLFxyXG4gICAgICAgICAgICB1c2VybmFtZTp1c2VybmFtZSxcclxuICAgICAgICAgICAgbWVzc2FnZXM6W10sXHJcbiAgICAgICAgICAgIHNlbmRlcmlkOm15bWVtYmVyaWRQYXJhbSxcclxuICAgICAgICAgICAgcmVjaWV2ZXJpZDpiaWRkaW5nbWVtYmVyaWQsXHJcbiAgICAgICAgICAgIHByb2plY3Rwb3N0aWQ6dGhpcy5wcm9qZWN0cG9zdGlkLFxyXG4gICAgICAgICAgICBzdWJtaXRwcm9wb3NhbF9pZDpwb3N0c3VibWl0aWQsXHJcbiAgICAgICAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsY2hhdF9pZDonJyxcclxuICAgICAgICAgICAgY3JlYXRlZGF0ZTonJyxcclxuICAgICAgICAgICAgbW9kaWZpZWRkYXRlOicnLFxyXG4gICAgICAgICAgICBzdGF0dXM6J2FjdGl2ZScsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBpZihqPT0wKXtcclxuICAgICAgICAgIHRoaXMubGlzdG9mb3duZXIucHVzaCh0ZW1wb3duKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5saXN0b2Z1c2Vycy5wdXNoKHRlbXBvdGhlcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG9sZG1zZzpNZXNzYWdlc1RocmVhZDtcclxuICAgICAgICBvbGRtc2c9e1xyXG4gICAgICAgICAgICBhdXRob3I6b3duY2hhdGlkTG9jYWwsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6JycsXHJcbiAgICAgICAgICAgIG90aGVyYXV0aG9yOmJpZGRlcmNoYXRpZCxcclxuICAgICAgICAgICAgdXNlcm5hbWU6dXNlcm5hbWUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzOltdLFxyXG4gICAgICAgICAgICBzZW5kZXJpZDpteW1lbWJlcmlkUGFyYW0sXHJcbiAgICAgICAgICAgIHJlY2lldmVyaWQ6YmlkZGluZ21lbWJlcmlkLFxyXG4gICAgICAgICAgICBwcm9qZWN0cG9zdGlkOnRoaXMucHJvamVjdHBvc3RpZCxcclxuICAgICAgICAgICAgc3VibWl0cHJvcG9zYWxfaWQ6cG9zdHN1Ym1pdGlkLFxyXG4gICAgICAgICAgICBvZmNzdWJtaXRwcm9wb3NhbGNoYXRfaWQ6JycsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRhdGU6JycsXHJcbiAgICAgICAgICAgIG1vZGlmaWVkZGF0ZTonJyxcclxuICAgICAgICAgICAgc3RhdHVzOidhY3RpdmUnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuY2hhdFNlcnZpY2UuZ2V0T2xkQ2hhdE1lc3NhZ2VzKHBvc3RzdWJtaXRpZCkuc3Vic2NyaWJlKHAgPT4gb2xkbXNnLm1lc3NhZ2VzPSBwLFxyXG4gICAgICAgICBlID0+IGNvbnNvbGUubG9nKGUpLFxyXG4gICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMubGlzdG9mb2xkY2hhdHMucHVzaChvbGRtc2cpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT0xEIENIQVQgUkVTVUxUPVwiLHRoaXMubGlzdG9mb2xkY2hhdHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgXHJcbiAgICAgIHRoaXMuY2hhdFNlcnZpY2UubG9hZENoYXRBdENsaWVudChwYXJhbSk7XHJcblxyXG4gICAgICBmb3IobGV0IGs9MDtrPHRoaXMuY2hhdFNlcnZpY2UubWVzc2FnZXNNdWx0aS5sZW5ndGg7aysrKXtcclxuICAgICAgICB0aGlzLmNoYXRTZXJ2aWNlLm1lc3NhZ2VzTXVsdGlba10uc3Vic2NyaWJlKG1zZyA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobXNnKTtcclxuICAgICAgICAgICAgLy8gZm9yKGxldCBpPTA7aTx0aGlzLmxpc3RvZnVzZXJzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgIGlmKHRoaXMubGlzdG9mdXNlcnNba10ub3RoZXJhdXRob3I9PW1zZy5hdXRob3Ipe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0b2Z1c2Vyc1trXS5tZXNzYWdlcy5wdXNoKG1zZyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHRoaXMuY2hhdFNlcnZpY2UubWVzc2FnZXMuc3Vic2NyaWJlKG1zZyA9PiB7XHJcbiAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKFwiUmN2ZCBNZXNzYWdlPVwiLG1zZyk7XHJcbiAgICAgIC8vICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChtc2cpO1xyXG4gICAgICAvLyAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMubGlzdG9mdXNlcnMubGVuZ3RoO2krKyl7XHJcbiAgICAgIC8vICAgICAgICAgaWYodGhpcy5saXN0b2Z1c2Vyc1tpXS5vdGhlcmF1dGhvcj09bXNnLmF1dGhvcil7XHJcbiAgICAgIC8vICAgICAgICAgICB0aGlzLmxpc3RvZnVzZXJzW2ldLm1lc3NhZ2VzLnB1c2gobXNnKTtcclxuICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgIC8vICAgICAgIH1cclxuICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAvLyB0aGlzLm1zZ2xpc3Q9dGhpcy5jaGF0U2VydmljZS5sb2FkQ2hhdEF0Q2xpZW50KHBhcmFtLHRoaXMucHJvamVjdHBvc3RpZCk7XHJcblxyXG5cclxuICAgICAgLy8gZm9yKGxldCBpPTA7aTx0aGlzLm1zZ2xpc3QubGVuZ3RoO2krKyApe1xyXG4gICAgICAvLyAgIHRoaXMubXNnbGlzdFtpXS5zdWJzY3JpYmUobXNnID0+IHtcclxuICAgICAgLy8gICAgICAgdGhpcy5tZXNzYWdlc1tpXS5wdXNoKG1zZyk7XHJcbiAgICAgIC8vICAgfSk7XHJcbiAgICAgIC8vIH0gIFxyXG5cclxuXHJcbiAgICAgIC8vIHRoaXMubXNnbGlzdFswXS5uZXh0KHRoaXMubGlzdG9mb3duZXJbMF0pO1xyXG4gICAgICAvLyB0aGlzLmxpc3RvZm93bmVyWzBdLm1lc3NhZ2U9Jyc7XHJcblxyXG4gICAgICBcclxuXHJcbiAgICAgIC8vdGhpcy5vblN1Ym1pdENoYXQoMCk7XHJcblxyXG4gICAgICAvLyB0aGlzLmNoYXRTZXJ2aWNlLmxvYWRDaGF0QXRDbGllbnRcclxuICAgICAgLy8gICAuc3Vic2NyaWJlKGFyZyA9PiB0aGlzLnByb3BlcnR5ID0gYXJnKTtcclxuICAgICAgXHJcblxyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25TdWJtaXRDaGF0KGluZGV4Om51bWJlcixwYXJhbW90aGVyYXV0aG9yOnN0cmluZykge1xyXG4gICAgICAgIC8vIGxldCB0ZW1wbWVtYmVyOk1lc3NhZ2VDbGllbnQ9dGhpcy5saXN0b2Z1c2Vyc1tpbmRleF07XHJcbiAgICAgICAgbGV0IHRlbXBtZXNzYWdlOk1lc3NhZ2VzVGhyZWFkPXRoaXMubGlzdG9mdXNlcnNbaW5kZXhdO1xyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgbGV0IHRlbXBtZW1iZXI6TWVzc2FnZUNsaWVudD17XHJcbiAgICAgICAgICBhdXRob3I6dGVtcG1lc3NhZ2UuYXV0aG9yLFxyXG4gICAgICAgICAgbWVzc2FnZTp0ZW1wbWVzc2FnZS5tZXNzYWdlLFxyXG4gICAgICAgICAgb3RoZXJhdXRob3I6cGFyYW1vdGhlcmF1dGhvcixcclxuICAgICAgICAgIHVzZXJuYW1lOnRlbXBtZXNzYWdlLnVzZXJuYW1lLFxyXG4gICAgICAgICAgc2VuZGVyaWQ6dGVtcG1lc3NhZ2Uuc2VuZGVyaWQsXHJcbiAgICAgICAgICByZWNpZXZlcmlkOnRlbXBtZXNzYWdlLnJlY2lldmVyaWQsXHJcbiAgICAgICAgICBwcm9qZWN0cG9zdGlkOnRlbXBtZXNzYWdlLnByb2plY3Rwb3N0aWQsXHJcbiAgICAgICAgICBzdWJtaXRwcm9wb3NhbF9pZDp0ZW1wbWVzc2FnZS5zdWJtaXRwcm9wb3NhbF9pZCxcclxuICAgICAgICAgIG9mY3N1Ym1pdHByb3Bvc2FsY2hhdF9pZDonJyxcclxuICAgICAgICAgIGNyZWF0ZWRhdGU6JycsXHJcbiAgICAgICAgICBtb2RpZmllZGRhdGU6JycsXHJcbiAgICAgICAgICBzdGF0dXM6J2FjdGl2ZScsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0ZW1wbWVtYmVyLmF1dGhvcj10aGlzLm93bmNoYXRpZDtcclxuICAgICAgICAvLyB0ZW1wbWVtYmVyLm90aGVyYXV0aG9yPXBhcmFtb3RoZXJhdXRob3I7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5saXN0b2Z1c2Vycy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICBpZih0aGlzLmxpc3RvZnVzZXJzW2ldLm90aGVyYXV0aG9yPT1wYXJhbW90aGVyYXV0aG9yKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdG9mdXNlcnNbaV0ubWVzc2FnZXMucHVzaCh0ZW1wbWVtYmVyKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmNoYXRTZXJ2aWNlLm1lc3NhZ2VzTXVsdGlbaW5kZXhdLm5leHQodGVtcG1lbWJlcik7XHJcbiAgICAgICAgLy9jb21tZW50IGFzIG9uIDA0IGZlYiAyMDE3IGxvZ2ljIHRvIHNlbmQgbXVsdGlwbGUgY29uZXRpb25zICBcclxuICAgICAgICAvLyB0aGlzLmNoYXRTZXJ2aWNlLm1lc3NhZ2VzLm5leHQodGVtcG1lbWJlcik7XHJcblxyXG4gICAgICAgdGhpcy5saXN0b2Z1c2Vyc1tpbmRleF0ubWVzc2FnZT0nJztcclxuICAgICAgICAvLyB0aGlzLm1zZ2xpc3RbaW5kZXhdLm5leHQodGVtcG1lbWJlcik7XHJcbiAgICAgICAvLyB0aGlzLmxpc3RvZnVzZXJzW2luZGV4XS5tZXNzYWdlPScnO1xyXG5cclxuICAgICAgICAvL2xldCBsYXN0aW5kZXg9dGhpcy5tZXNzYWdlcy5sZW5ndGg7XHJcbiAgICAgICAgLy90aGlzLm1zZ2xpc3RbaW5kZXhdLm5leHQodGhpcy5tZXNzYWdlc1tpbmRleF1bbGFzdGluZGV4LTFdKTsgXHJcbiAgICAgICAgLy8gdGhpcy5jaGF0U2VydmljZS5tZXNzYWdlcy5uZXh0KHRoaXMubWVzc2FnZSk7XHJcbiAgICAgICAgLy8gdGhpcy5tZXNzYWdlLm1lc3NhZ2UgPSAnJztcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
