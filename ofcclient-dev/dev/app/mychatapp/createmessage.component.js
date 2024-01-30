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
var chat_service_1 = require('../shared/chat/chat.service');
var core_1 = require('@angular/core');
var CreateMessage = (function () {
    function CreateMessage(chatService) {
        this.chatService = chatService;
        this.usertypes = [];
        this.submitted = false;
        this.message = {
            author: 'gogo',
            message: '',
            otherauthor: 'guest',
        };
        this.othermessage = {
            author: 'guest',
            message: '',
            otherauthor: 'gogo',
        };
        this.usertypes.push({ label: 'Select Sender', value: null });
        this.usertypes.push({ label: 'Admin', value: 'admin' });
        this.usertypes.push({ label: 'Guest', value: 'guest' });
        this.usertypes.push({ label: 'Robot', value: 'robot' });
    }
    CreateMessage.prototype.onSubmit = function () {
    };
    CreateMessage = __decorate([
        core_1.Component({
            selector: 'create-message',
            template: "\n        <p-dropdown [style]=\"{width:'200px'}\" [options]=\"usertypes\" [(ngModel)]=\"message.author\"></p-dropdown>\n        <p-dropdown [style]=\"{width:'200px'}\" [options]=\"usertypes\" [(ngModel)]=\"message.otherauthor\"></p-dropdown>\n\n        <div class=\"input-group col-xs-8\">\n                <input\n                    [(ngModel)]=\"message.message\"\n                    \n                    type=\"text\"\n                    class=\"form-control\"\n                    placeholder=\"message...\" \n                    >\n                <span class=\"input-group-btn\">\n                    <button\n                        class=\"btn btn-secondary\"\n                        type=\"button\" (click)=\"onSubmit()\">send</button>\n                </span>\n            </div>\n            \n        ",
            providers: [chat_service_1.ChatService]
        }), 
        __metadata('design:paramtypes', [chat_service_1.ChatService])
    ], CreateMessage);
    return CreateMessage;
}());
exports.CreateMessage = CreateMessage;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9teWNoYXRhcHAvY3JlYXRlbWVzc2FnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZCQUFrQyw2QkFDbEMsQ0FBQyxDQUQ4RDtBQUMvRCxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUE2QnhDO0lBa0JJLHVCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQWY1QyxjQUFTLEdBQWMsRUFBRSxDQUFDO1FBRWxCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsWUFBTyxHQUFHO1lBQ2QsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsRUFBRTtZQUNYLFdBQVcsRUFBQyxPQUFPO1NBQ3RCLENBQUE7UUFFTyxpQkFBWSxHQUFHO1lBQ25CLE1BQU0sRUFBRSxPQUFPO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxXQUFXLEVBQUMsTUFBTTtTQUNyQixDQUFBO1FBR0csSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMsZUFBZSxFQUFFLEtBQUssRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBR3hELENBQUM7SUFFTyxnQ0FBUSxHQUFoQjtJQUdBLENBQUM7SUF4REw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsb3pCQW1CTDtZQUVMLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7U0FDM0IsQ0FBQzs7cUJBQUE7SUFtQ0Ysb0JBQUM7QUFBRCxDQWpDQSxBQWlDQyxJQUFBO0FBakNZLHFCQUFhLGdCQWlDekIsQ0FBQSIsImZpbGUiOiJhcHAvbXljaGF0YXBwL2NyZWF0ZW1lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGF0U2VydmljZSxNZXNzYWdlfSBmcm9tICcuLi9zaGFyZWQvY2hhdC9jaGF0LnNlcnZpY2UnXHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtTZWxlY3RJdGVtfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NyZWF0ZS1tZXNzYWdlJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPHAtZHJvcGRvd24gW3N0eWxlXT1cInt3aWR0aDonMjAwcHgnfVwiIFtvcHRpb25zXT1cInVzZXJ0eXBlc1wiIFsobmdNb2RlbCldPVwibWVzc2FnZS5hdXRob3JcIj48L3AtZHJvcGRvd24+XHJcbiAgICAgICAgPHAtZHJvcGRvd24gW3N0eWxlXT1cInt3aWR0aDonMjAwcHgnfVwiIFtvcHRpb25zXT1cInVzZXJ0eXBlc1wiIFsobmdNb2RlbCldPVwibWVzc2FnZS5vdGhlcmF1dGhvclwiPjwvcC1kcm9wZG93bj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIGNvbC14cy04XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1lc3NhZ2UubWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm1lc3NhZ2UuLi5cIiBcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib25TdWJtaXQoKVwiPnNlbmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGAsXHJcbiAgICAvLyB0ZW1wbGF0ZVVybDonY3JlYXRlbWVzc2FnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6IFtDaGF0U2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVNZXNzYWdlIHtcclxuXHJcbiAgICAgICAgXHJcbiAgICB1c2VydHlwZXM6U2VsZWN0SXRlbVtdPVtdO1xyXG5cclxuICAgIHByaXZhdGUgc3VibWl0dGVkID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIG1lc3NhZ2UgPSB7XHJcbiAgICAgICAgYXV0aG9yOiAnZ29nbycsXHJcbiAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgb3RoZXJhdXRob3I6J2d1ZXN0JyxcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG90aGVybWVzc2FnZSA9IHtcclxuICAgICAgICBhdXRob3I6ICdndWVzdCcsXHJcbiAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgb3RoZXJhdXRob3I6J2dvZ28nLFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhdFNlcnZpY2U6IENoYXRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy51c2VydHlwZXMucHVzaCh7bGFiZWw6J1NlbGVjdCBTZW5kZXInLCB2YWx1ZTpudWxsfSk7XHJcbiAgICAgICAgdGhpcy51c2VydHlwZXMucHVzaCh7bGFiZWw6J0FkbWluJywgdmFsdWU6J2FkbWluJ30pO1xyXG4gICAgICAgIHRoaXMudXNlcnR5cGVzLnB1c2goe2xhYmVsOidHdWVzdCcsIHZhbHVlOidndWVzdCd9KTtcclxuICAgICAgICB0aGlzLnVzZXJ0eXBlcy5wdXNoKHtsYWJlbDonUm9ib3QnLCB2YWx1ZToncm9ib3QnfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblN1Ym1pdCgpIHtcclxuICAgICAgICAvLyB0aGlzLmNoYXRTZXJ2aWNlLm1lc3NhZ2VzLm5leHQodGhpcy5tZXNzYWdlKTtcclxuICAgICAgICAvLyB0aGlzLm1lc3NhZ2UubWVzc2FnZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuIFxyXG59Il19
