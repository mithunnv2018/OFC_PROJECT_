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
var MyDateFormat = (function () {
    function MyDateFormat() {
        this.DECIMAL_SEPARATOR = ".";
        this.THOUSANDS_SEPARATOR = "'";
    }
    MyDateFormat.prototype.transform = function (value, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 2; }
        var _a = (value || "").toString()
            .split(this.DECIMAL_SEPARATOR), integer = _a[0], _b = _a[1], fraction = _b === void 0 ? "" : _b;
        fraction = fractionSize > 0
            ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
            : "";
        integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);
        return integer + fraction;
    };
    MyDateFormat.prototype.parse = function (value, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 2; }
        this.mydateformat = new Date(value);
        var strd = this.mydateformat.getFullYear() + '/' + this.mydateformat.getMonth() + '/' + this.mydateformat.getDate();
        return strd;
    };
    MyDateFormat = __decorate([
        core_1.Pipe({ name: "MyDateFormat" }), 
        __metadata('design:paramtypes', [])
    ], MyDateFormat);
    return MyDateFormat;
}());
exports.MyDateFormat = MyDateFormat;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvQyxlQUFlLENBQUMsQ0FBQTtBQUVwRCxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUM7QUFHekI7SUFNRTtRQUVFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLENBQUM7UUFDN0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEdBQUcsQ0FBQztJQUNqQyxDQUFDO0lBRUQsZ0NBQVMsR0FBVCxVQUFVLEtBQXNCLEVBQUUsWUFBd0I7UUFBeEIsNEJBQXdCLEdBQXhCLGdCQUF3QjtRQUN4RCxJQUFBOzBDQUNnQyxFQUQxQixlQUFPLEVBQUUsVUFBYSxFQUFiLGtDQUFhLENBQ0s7UUFFakMsUUFBUSxHQUFHLFlBQVksR0FBRyxDQUFDO2NBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQztjQUN4RSxFQUFFLENBQUM7UUFFUCxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUU3RSxNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztJQUM1QixDQUFDO0lBRUQsNEJBQUssR0FBTCxVQUFNLEtBQVUsRUFBRSxZQUF3QjtRQUF4Qiw0QkFBd0IsR0FBeEIsZ0JBQXdCO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbEMsSUFBSSxJQUFJLEdBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsR0FBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBRTtRQUNySCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQS9CSDtRQUFDLFdBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsQ0FBQzs7b0JBQUE7SUFnQy9CLG1CQUFDO0FBQUQsQ0EvQkEsQUErQkMsSUFBQTtBQS9CWSxvQkFBWSxlQStCeEIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3BpcGVzL215ZGF0ZWZvcm1hdC5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5jb25zdCBQQURESU5HID0gXCIwMDAwMDBcIjtcclxuXHJcbkBQaXBlKHsgbmFtZTogXCJNeURhdGVGb3JtYXRcIiB9KVxyXG5leHBvcnQgY2xhc3MgTXlEYXRlRm9ybWF0IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHByaXZhdGUgREVDSU1BTF9TRVBBUkFUT1I6IHN0cmluZztcclxuICBwcml2YXRlIFRIT1VTQU5EU19TRVBBUkFUT1I6IHN0cmluZztcclxuICBwcml2YXRlIG15ZGF0ZWZvcm1hdDogRGF0ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBUT0RPIGNvbWVzIGZyb20gY29uZmlndXJhdGlvbiBzZXR0aW5nc1xyXG4gICAgdGhpcy5ERUNJTUFMX1NFUEFSQVRPUiA9IFwiLlwiO1xyXG4gICAgdGhpcy5USE9VU0FORFNfU0VQQVJBVE9SID0gXCInXCI7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciB8IHN0cmluZywgZnJhY3Rpb25TaXplOiBudW1iZXIgPSAyKTogc3RyaW5nIHtcclxuICAgIGxldCBbIGludGVnZXIsIGZyYWN0aW9uID0gXCJcIiBdID0gKHZhbHVlIHx8IFwiXCIpLnRvU3RyaW5nKClcclxuICAgICAgLnNwbGl0KHRoaXMuREVDSU1BTF9TRVBBUkFUT1IpO1xyXG5cclxuICAgIGZyYWN0aW9uID0gZnJhY3Rpb25TaXplID4gMFxyXG4gICAgICA/IHRoaXMuREVDSU1BTF9TRVBBUkFUT1IgKyAoZnJhY3Rpb24gKyBQQURESU5HKS5zdWJzdHJpbmcoMCwgZnJhY3Rpb25TaXplKVxyXG4gICAgICA6IFwiXCI7XHJcblxyXG4gICAgaW50ZWdlciA9IGludGVnZXIucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgdGhpcy5USE9VU0FORFNfU0VQQVJBVE9SKTtcclxuXHJcbiAgICByZXR1cm4gaW50ZWdlciArIGZyYWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgcGFyc2UodmFsdWU6IGFueSwgZnJhY3Rpb25TaXplOiBudW1iZXIgPSAyKTogc3RyaW5nIHtcclxuICAgIHRoaXMubXlkYXRlZm9ybWF0PW5ldyBEYXRlKHZhbHVlKTtcclxuICAgIC8vIHRoaXMubXlkYXRlZm9ybWF0LmZvcm1hdCh2YWx1ZSwpXHJcbiAgICB2YXIgc3RyZCA9ICB0aGlzLm15ZGF0ZWZvcm1hdC5nZXRGdWxsWWVhcigpKyAnLycgKyB0aGlzLm15ZGF0ZWZvcm1hdC5nZXRNb250aCgpICsgJy8nICsgdGhpcy5teWRhdGVmb3JtYXQuZ2V0RGF0ZSgpIDtcclxuICAgIHJldHVybiBzdHJkO1xyXG4gIH1cclxufSJdfQ==
