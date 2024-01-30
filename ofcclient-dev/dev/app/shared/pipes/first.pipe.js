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
var MyCurrencyPipe = (function () {
    function MyCurrencyPipe() {
        this.DECIMAL_SEPARATOR = ".";
        this.THOUSANDS_SEPARATOR = "'";
    }
    MyCurrencyPipe.prototype.transform = function (value, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 2; }
        var _a = (value || "").toString()
            .split(this.DECIMAL_SEPARATOR), integer = _a[0], _b = _a[1], fraction = _b === void 0 ? "" : _b;
        fraction = fractionSize > 0
            ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
            : "";
        integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);
        return integer + fraction;
    };
    MyCurrencyPipe.prototype.parse = function (value, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 2; }
        var _a = (value || "").split(this.DECIMAL_SEPARATOR), integer = _a[0], _b = _a[1], fraction = _b === void 0 ? "" : _b;
        integer = integer.replace(new RegExp(this.THOUSANDS_SEPARATOR, "g"), "");
        fraction = parseInt(fraction, 10) > 0 && fractionSize > 0
            ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
            : "";
        return integer + fraction;
    };
    MyCurrencyPipe = __decorate([
        core_1.Pipe({ name: "myCurrency" }), 
        __metadata('design:paramtypes', [])
    ], MyCurrencyPipe);
    return MyCurrencyPipe;
}());
exports.MyCurrencyPipe = MyCurrencyPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGlwZXMvZmlyc3QucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW9DLGVBQWUsQ0FBQyxDQUFBO0FBRXBELElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQztBQUd6QjtJQUtFO1FBRUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEdBQUcsQ0FBQztRQUM3QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsR0FBRyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxrQ0FBUyxHQUFULFVBQVUsS0FBc0IsRUFBRSxZQUF3QjtRQUF4Qiw0QkFBd0IsR0FBeEIsZ0JBQXdCO1FBQ3hELElBQUE7MENBQ2dDLEVBRDFCLGVBQU8sRUFBRSxVQUFhLEVBQWIsa0NBQWEsQ0FDSztRQUVqQyxRQUFRLEdBQUcsWUFBWSxHQUFHLENBQUM7Y0FDdkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDO2NBQ3hFLEVBQUUsQ0FBQztRQUVQLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRTdFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO0lBQzVCLENBQUM7SUFFRCw4QkFBSyxHQUFMLFVBQU0sS0FBYSxFQUFFLFlBQXdCO1FBQXhCLDRCQUF3QixHQUF4QixnQkFBd0I7UUFDM0MsSUFBQSxnREFBNEUsRUFBdEUsZUFBTyxFQUFFLFVBQWEsRUFBYixrQ0FBYSxDQUFpRDtRQUU3RSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFekUsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFlBQVksR0FBRyxDQUFDO2NBQ3JELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQztjQUN4RSxFQUFFLENBQUM7UUFFUCxNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztJQUM1QixDQUFDO0lBbkNIO1FBQUMsV0FBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDOztzQkFBQTtJQW9DN0IscUJBQUM7QUFBRCxDQW5DQSxBQW1DQyxJQUFBO0FBbkNZLHNCQUFjLGlCQW1DMUIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmNvbnN0IFBBRERJTkcgPSBcIjAwMDAwMFwiO1xyXG5cclxuQFBpcGUoeyBuYW1lOiBcIm15Q3VycmVuY3lcIiB9KVxyXG5leHBvcnQgY2xhc3MgTXlDdXJyZW5jeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgcHJpdmF0ZSBERUNJTUFMX1NFUEFSQVRPUjogc3RyaW5nO1xyXG4gIHByaXZhdGUgVEhPVVNBTkRTX1NFUEFSQVRPUjogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIFRPRE8gY29tZXMgZnJvbSBjb25maWd1cmF0aW9uIHNldHRpbmdzXHJcbiAgICB0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SID0gXCIuXCI7XHJcbiAgICB0aGlzLlRIT1VTQU5EU19TRVBBUkFUT1IgPSBcIidcIjtcclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBmcmFjdGlvblNpemU6IG51bWJlciA9IDIpOiBzdHJpbmcge1xyXG4gICAgbGV0IFsgaW50ZWdlciwgZnJhY3Rpb24gPSBcIlwiIF0gPSAodmFsdWUgfHwgXCJcIikudG9TdHJpbmcoKVxyXG4gICAgICAuc3BsaXQodGhpcy5ERUNJTUFMX1NFUEFSQVRPUik7XHJcblxyXG4gICAgZnJhY3Rpb24gPSBmcmFjdGlvblNpemUgPiAwXHJcbiAgICAgID8gdGhpcy5ERUNJTUFMX1NFUEFSQVRPUiArIChmcmFjdGlvbiArIFBBRERJTkcpLnN1YnN0cmluZygwLCBmcmFjdGlvblNpemUpXHJcbiAgICAgIDogXCJcIjtcclxuXHJcbiAgICBpbnRlZ2VyID0gaW50ZWdlci5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCB0aGlzLlRIT1VTQU5EU19TRVBBUkFUT1IpO1xyXG5cclxuICAgIHJldHVybiBpbnRlZ2VyICsgZnJhY3Rpb247XHJcbiAgfVxyXG5cclxuICBwYXJzZSh2YWx1ZTogc3RyaW5nLCBmcmFjdGlvblNpemU6IG51bWJlciA9IDIpOiBzdHJpbmcge1xyXG4gICAgbGV0IFsgaW50ZWdlciwgZnJhY3Rpb24gPSBcIlwiIF0gPSAodmFsdWUgfHwgXCJcIikuc3BsaXQodGhpcy5ERUNJTUFMX1NFUEFSQVRPUik7XHJcblxyXG4gICAgaW50ZWdlciA9IGludGVnZXIucmVwbGFjZShuZXcgUmVnRXhwKHRoaXMuVEhPVVNBTkRTX1NFUEFSQVRPUiwgXCJnXCIpLCBcIlwiKTtcclxuXHJcbiAgICBmcmFjdGlvbiA9IHBhcnNlSW50KGZyYWN0aW9uLCAxMCkgPiAwICYmIGZyYWN0aW9uU2l6ZSA+IDBcclxuICAgICAgPyB0aGlzLkRFQ0lNQUxfU0VQQVJBVE9SICsgKGZyYWN0aW9uICsgUEFERElORykuc3Vic3RyaW5nKDAsIGZyYWN0aW9uU2l6ZSlcclxuICAgICAgOiBcIlwiO1xyXG5cclxuICAgIHJldHVybiBpbnRlZ2VyICsgZnJhY3Rpb247XHJcbiAgfVxyXG59Il19
