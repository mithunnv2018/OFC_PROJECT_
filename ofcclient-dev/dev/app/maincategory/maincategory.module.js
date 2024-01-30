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
var common_1 = require('@angular/common');
var maincategory_component_1 = require('./maincategory.component');
var maincategory_routing_module_1 = require('./maincategory-routing.module');
var primeng_1 = require('primeng/primeng');
var forms_1 = require('@angular/forms');
var primeng_2 = require('primeng/primeng');
var primeng_3 = require('primeng/primeng');
var primeng_4 = require('primeng/primeng');
var primeng_5 = require('primeng/primeng');
var primeng_6 = require('primeng/primeng');
var primeng_7 = require('primeng/primeng');
var primeng_8 = require('primeng/primeng');
var primeng_9 = require('primeng/primeng');
var first_pipe_1 = require('../shared/pipes/first.pipe');
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var maincategory_service_1 = require('../shared/maincategory/maincategory.service');
var MaincategoryModule = (function () {
    function MaincategoryModule() {
    }
    MaincategoryModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, maincategory_routing_module_1.MaincategoryRoutingModule, forms_1.FormsModule, primeng_8.DropdownModule, primeng_9.CalendarModule, primeng_7.FileUploadModule, primeng_6.DataTableModule, forms_1.ReactiveFormsModule, primeng_5.InputTextModule, primeng_2.GrowlModule, primeng_4.ButtonModule, primeng_1.PanelModule, primeng_3.MessagesModule],
            declarations: [maincategory_component_1.MaincategoryComponent],
            exports: [maincategory_component_1.MaincategoryComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, maincategory_service_1.MainCategoryService]
        }), 
        __metadata('design:paramtypes', [])
    ], MaincategoryModule);
    return MaincategoryModule;
}());
exports.MaincategoryModule = MaincategoryModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYWluY2F0ZWdvcnkvbWFpbmNhdGVnb3J5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHVDQUFzQywwQkFBMEIsQ0FBQyxDQUFBO0FBQ2pFLDRDQUEwQywrQkFBK0IsQ0FBQyxDQUFBO0FBRTFFLHdCQUEwQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzVDLHNCQUE4QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQy9ELHdCQUEwQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzVDLHdCQUEyQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRTdELHdCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHdCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHdCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHdCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pELHdCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHdCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLDJCQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELGtDQUE2QixtQ0FBbUMsQ0FBQyxDQUFBO0FBR2pFLG1DQUE4QixvQ0FBb0MsQ0FBQyxDQUFBO0FBQ25FLHFDQUFrQyw2Q0FBNkMsQ0FBQyxDQUFBO0FBUWhGO0lBQUE7SUFBa0MsQ0FBQztJQU5uQztRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUsdURBQXlCLEVBQUMsbUJBQVcsRUFBQyx3QkFBYyxFQUFDLHdCQUFjLEVBQUMsMEJBQWdCLEVBQUMseUJBQWUsRUFBQywyQkFBbUIsRUFBQyx5QkFBZSxFQUFDLHFCQUFXLEVBQUMsc0JBQVksRUFBQyxxQkFBVyxFQUFDLHdCQUFjLENBQUM7WUFDck4sWUFBWSxFQUFFLENBQUMsOENBQXFCLENBQUM7WUFDckMsT0FBTyxFQUFFLENBQUMsOENBQXFCLENBQUM7WUFDaEMsU0FBUyxFQUFFLENBQUMsMkJBQWMsRUFBQyxnQ0FBWSxFQUFDLGtDQUFhLEVBQUMsMENBQW1CLENBQUM7U0FDM0UsQ0FBQzs7MEJBQUE7SUFDZ0MseUJBQUM7QUFBRCxDQUFsQyxBQUFtQyxJQUFBO0FBQXRCLDBCQUFrQixxQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9tYWluY2F0ZWdvcnkvbWFpbmNhdGVnb3J5Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1haW5jYXRlZ29yeUNvbXBvbmVudCB9IGZyb20gJy4vbWFpbmNhdGVnb3J5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1haW5jYXRlZ29yeVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL21haW5jYXRlZ29yeS1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7Rm9ybUdyb3VwLEZvcm1Db250cm9sLFZhbGlkYXRvcnMsRm9ybUJ1aWxkZXJ9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xyXG5pbXBvcnQge1BhbmVsTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtHcm93bE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtNZXNzYWdlc01vZHVsZSxNZXNzYWdlLEdyb3dsfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtCdXR0b25Nb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7SW5wdXRUZXh0TW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0RhdGFUYWJsZU1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtGaWxlVXBsb2FkTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0Ryb3Bkb3duTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0NhbGVuZGFyTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5cclxuaW1wb3J0IHsgTXlDdXJyZW5jeVBpcGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZmlyc3QucGlwZSc7XHJcbmltcG9ydCB7IE15RGF0ZUZvcm1hdCB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9teWRhdGVmb3JtYXQucGlwZSc7XHJcblxyXG5cclxuaW1wb3J0IHsgRW1haWxWYWxpZGF0ZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9lbWFpbHZhbGlkYXRlLnBpcGUnO1xyXG5pbXBvcnQge01haW5DYXRlZ29yeVNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9tYWluY2F0ZWdvcnkvbWFpbmNhdGVnb3J5LnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNYWluY2F0ZWdvcnlSb3V0aW5nTW9kdWxlLEZvcm1zTW9kdWxlLERyb3Bkb3duTW9kdWxlLENhbGVuZGFyTW9kdWxlLEZpbGVVcGxvYWRNb2R1bGUsRGF0YVRhYmxlTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGUsSW5wdXRUZXh0TW9kdWxlLEdyb3dsTW9kdWxlLEJ1dHRvbk1vZHVsZSxQYW5lbE1vZHVsZSxNZXNzYWdlc01vZHVsZV0sLy8sUGFuZWxNb2R1bGUsTWVzc2FnZXNNb2R1bGUsR3Jvd2xdLFxyXG4gIGRlY2xhcmF0aW9uczogW01haW5jYXRlZ29yeUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW01haW5jYXRlZ29yeUNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbTXlDdXJyZW5jeVBpcGUsTXlEYXRlRm9ybWF0LEVtYWlsVmFsaWRhdGUsTWFpbkNhdGVnb3J5U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1haW5jYXRlZ29yeU1vZHVsZSB7IH1cclxuIl19
