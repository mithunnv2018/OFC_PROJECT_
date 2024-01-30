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
var core_1 = require("@angular/core");
var PADDING = "000000";
var EmailValidate = (function () {
    function EmailValidate() {
        this.DECIMAL_SEPARATOR = ".";
        this.THOUSANDS_SEPARATOR = "'";
    }
    EmailValidate.prototype.transform = function (value, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 2; }
        var _a = (value || "").toString()
            .split(this.DECIMAL_SEPARATOR), integer = _a[0], _b = _a[1], fraction = _b === void 0 ? "" : _b;
        fraction = fractionSize > 0
            ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
            : "";
        integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);
        return integer + fraction;
    };
    EmailValidate.prototype.parse = function (value, args) {
        var atpos = value.indexOf("@");
        var dotpos = value.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= value.length) {
            return false;
        }
        return true;
    };
    EmailValidate = __decorate([
        core_1.Pipe({ name: "EmailValidate" }), 
        __metadata('design:paramtypes', [])
    ], EmailValidate);
    return EmailValidate;
}());
exports.EmailValidate = EmailValidate;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGlwZXMvZW1haWx2YWxpZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0MsZUFBZSxDQUFDLENBQUE7QUFFcEQsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDO0FBR3pCO0lBTUU7UUFFRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxDQUFDO1FBQzdCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxHQUFHLENBQUM7SUFDakMsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxLQUFzQixFQUFFLFlBQXdCO1FBQXhCLDRCQUF3QixHQUF4QixnQkFBd0I7UUFDeEQsSUFBQTswQ0FDZ0MsRUFEMUIsZUFBTyxFQUFFLFVBQWEsRUFBYixrQ0FBYSxDQUNLO1FBRWpDLFFBQVEsR0FBRyxZQUFZLEdBQUcsQ0FBQztjQUN2QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUM7Y0FDeEUsRUFBRSxDQUFDO1FBRVAsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFN0UsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQztJQUVELDZCQUFLLEdBQUwsVUFBTSxLQUFhLEVBQUUsSUFBYTtRQUVoQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFDLENBQUMsSUFBSSxNQUFNLEdBQUMsS0FBSyxHQUFDLENBQUMsSUFBSSxNQUFNLEdBQUMsQ0FBQyxJQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRXRELE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBbkNIO1FBQUMsV0FBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxDQUFDOztxQkFBQTtJQW9DaEMsb0JBQUM7QUFBRCxDQW5DQSxBQW1DQyxJQUFBO0FBbkNZLHFCQUFhLGdCQW1DekIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuY29uc3QgUEFERElORyA9IFwiMDAwMDAwXCI7XHJcblxyXG5AUGlwZSh7IG5hbWU6IFwiRW1haWxWYWxpZGF0ZVwiIH0pXHJcbmV4cG9ydCBjbGFzcyBFbWFpbFZhbGlkYXRlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHByaXZhdGUgREVDSU1BTF9TRVBBUkFUT1I6IHN0cmluZztcclxuICBwcml2YXRlIFRIT1VTQU5EU19TRVBBUkFUT1I6IHN0cmluZztcclxuICBwcml2YXRlIG15ZGF0ZWZvcm1hdDogRGF0ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBUT0RPIGNvbWVzIGZyb20gY29uZmlndXJhdGlvbiBzZXR0aW5nc1xyXG4gICAgdGhpcy5ERUNJTUFMX1NFUEFSQVRPUiA9IFwiLlwiO1xyXG4gICAgdGhpcy5USE9VU0FORFNfU0VQQVJBVE9SID0gXCInXCI7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciB8IHN0cmluZywgZnJhY3Rpb25TaXplOiBudW1iZXIgPSAyKTogc3RyaW5nIHtcclxuICAgIGxldCBbIGludGVnZXIsIGZyYWN0aW9uID0gXCJcIiBdID0gKHZhbHVlIHx8IFwiXCIpLnRvU3RyaW5nKClcclxuICAgICAgLnNwbGl0KHRoaXMuREVDSU1BTF9TRVBBUkFUT1IpO1xyXG5cclxuICAgIGZyYWN0aW9uID0gZnJhY3Rpb25TaXplID4gMFxyXG4gICAgICA/IHRoaXMuREVDSU1BTF9TRVBBUkFUT1IgKyAoZnJhY3Rpb24gKyBQQURESU5HKS5zdWJzdHJpbmcoMCwgZnJhY3Rpb25TaXplKVxyXG4gICAgICA6IFwiXCI7XHJcblxyXG4gICAgaW50ZWdlciA9IGludGVnZXIucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgdGhpcy5USE9VU0FORFNfU0VQQVJBVE9SKTtcclxuXHJcbiAgICByZXR1cm4gaW50ZWdlciArIGZyYWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgcGFyc2UodmFsdWU6IHN0cmluZywgYXJncyA6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgXHJcbiAgICB2YXIgYXRwb3MgPSB2YWx1ZS5pbmRleE9mKFwiQFwiKTtcclxuICAgIHZhciBkb3Rwb3MgPSB2YWx1ZS5sYXN0SW5kZXhPZihcIi5cIik7XHJcbiAgICBpZiAoYXRwb3M8MSB8fCBkb3Rwb3M8YXRwb3MrMiB8fCBkb3Rwb3MrMj49dmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gYWxlcnQoXCJOb3QgYSB2YWxpZCBlLW1haWwgYWRkcmVzc1wiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn0iXX0=
