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
var Chat = (function () {
    function Chat(chatService) {
        var _this = this;
        this.chatService = chatService;
        this.messages = new Array();
        chatService.messages.subscribe(function (msg) {
            _this.messages.push(msg);
        });
    }
    Chat = __decorate([
        core_1.Component({
            selector: 'chat',
            template: "\n        <div class=\"messages\">\n            <p  *ngFor=\"let msg of messages\" >{{ msg.message }}</p>\n        </div>\n    ",
            providers: [chat_service_1.ChatService]
        }), 
        __metadata('design:paramtypes', [chat_service_1.ChatService])
    ], Chat);
    return Chat;
}());
exports.Chat = Chat;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9teWNoYXRhcHAvY2hhdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZCQUFtQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ2pFLHFCQUFvQyxlQUFlLENBQUMsQ0FBQTtBQWFwRDtJQUdJLGNBQW9CLFdBQXdCO1FBSGhELGlCQVFDO1FBTHVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRnBDLGFBQVEsR0FBYyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBR3RDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUM5QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFqQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLGlJQUlUO1lBRUQsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztTQUMzQixDQUFDOztZQUFBO0lBU0YsV0FBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlksWUFBSSxPQVFoQixDQUFBIiwiZmlsZSI6ImFwcC9teWNoYXRhcHAvY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYXRTZXJ2aWNlLCBNZXNzYWdlfSBmcm9tICcuLi9zaGFyZWQvY2hhdC9jaGF0LnNlcnZpY2UnO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcy9SeCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjaGF0JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2VzXCI+XHJcbiAgICAgICAgICAgIDxwICAqbmdGb3I9XCJsZXQgbXNnIG9mIG1lc3NhZ2VzXCIgPnt7IG1zZy5tZXNzYWdlIH19PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIFxyXG4gICAgcHJvdmlkZXJzOiBbQ2hhdFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGF0IHtcclxuICAgIHByaXZhdGUgbWVzc2FnZXM6IE1lc3NhZ2VbXSA9IG5ldyBBcnJheSgpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhdFNlcnZpY2U6IENoYXRTZXJ2aWNlKSB7XHJcbiAgICAgICAgY2hhdFNlcnZpY2UubWVzc2FnZXMuc3Vic2NyaWJlKG1zZyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChtc2cpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19
