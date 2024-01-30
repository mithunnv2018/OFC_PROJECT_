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
var homepage_component_1 = require('./homepage.component');
var homepage_routing_module_1 = require('./homepage-routing.module');
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
var homepage_service_1 = require('../shared/homepage/homepage.service');
var primeng_10 = require('primeng/primeng');
var commonbrowsetopskills_module_1 = require('../commonbrowsetopskills/commonbrowsetopskills.module');
var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        core_1.NgModule({
            imports: [primeng_10.CarouselModule, primeng_10.DataGridModule, commonbrowsetopskills_module_1.CommonBrowseTopSkillsModule, common_1.CommonModule, homepage_routing_module_1.HomePageRoutingModule, forms_1.FormsModule, primeng_8.DropdownModule, primeng_9.CalendarModule, primeng_7.FileUploadModule, primeng_6.DataTableModule, forms_1.ReactiveFormsModule, primeng_5.InputTextModule, primeng_2.GrowlModule, primeng_4.ButtonModule, primeng_1.PanelModule, primeng_3.MessagesModule],
            declarations: [homepage_component_1.HomePageComponent],
            exports: [homepage_component_1.HomePageComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, homepage_service_1.HomePageService]
        }), 
        __metadata('design:paramtypes', [])
    ], HomePageModule);
    return HomePageModule;
}());
exports.HomePageModule = HomePageModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lcGFnZS9ob21lcGFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUN6RCx3Q0FBc0MsMkJBQTJCLENBQUMsQ0FBQTtBQUVsRSx3QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM1QyxzQkFBOEMsZ0JBQWdCLENBQUMsQ0FBQTtBQUMvRCx3QkFBMEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM1Qyx3QkFBMkMsaUJBQWlCLENBQUMsQ0FBQTtBQUU3RCx3QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3Qyx3QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCx3QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCx3QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCx3QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx3QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQywyQkFBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUM1RCxrQ0FBNkIsbUNBQW1DLENBQUMsQ0FBQTtBQUNqRSxtQ0FBOEIsb0NBQW9DLENBQUMsQ0FBQTtBQUNuRSxpQ0FBOEIscUNBQXFDLENBQUMsQ0FBQTtBQUNwRSx5QkFBNEMsaUJBQWlCLENBQUMsQ0FBQTtBQUM5RCw2Q0FBMEMsdURBQXVELENBQUMsQ0FBQTtBQVFsRztJQUFBO0lBQThCLENBQUM7SUFOL0I7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyx5QkFBYyxFQUFDLHlCQUFjLEVBQUMsMERBQTJCLEVBQUMscUJBQVksRUFBRSwrQ0FBcUIsRUFBQyxtQkFBVyxFQUFDLHdCQUFjLEVBQUMsd0JBQWMsRUFBQywwQkFBZ0IsRUFBQyx5QkFBZSxFQUFDLDJCQUFtQixFQUFDLHlCQUFlLEVBQUMscUJBQVcsRUFBQyxzQkFBWSxFQUFDLHFCQUFXLEVBQUMsd0JBQWMsQ0FBQztZQUMzUSxZQUFZLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztZQUNqQyxPQUFPLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztZQUM1QixTQUFTLEVBQUUsQ0FBQywyQkFBYyxFQUFDLGdDQUFZLEVBQUMsa0NBQWEsRUFBQyxrQ0FBZSxDQUFDO1NBQ3ZFLENBQUM7O3NCQUFBO0lBQzRCLHFCQUFDO0FBQUQsQ0FBOUIsQUFBK0IsSUFBQTtBQUFsQixzQkFBYyxpQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9ob21lcGFnZS9ob21lcGFnZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIb21lUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZVBhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9ob21lcGFnZS1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7Rm9ybUdyb3VwLEZvcm1Db250cm9sLFZhbGlkYXRvcnMsRm9ybUJ1aWxkZXJ9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xyXG5pbXBvcnQge1BhbmVsTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtHcm93bE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtNZXNzYWdlc01vZHVsZSxNZXNzYWdlLEdyb3dsfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtCdXR0b25Nb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7SW5wdXRUZXh0TW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0RhdGFUYWJsZU1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtGaWxlVXBsb2FkTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0Ryb3Bkb3duTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0NhbGVuZGFyTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5cclxuaW1wb3J0IHsgTXlDdXJyZW5jeVBpcGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZmlyc3QucGlwZSc7XHJcbmltcG9ydCB7IE15RGF0ZUZvcm1hdCB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9teWRhdGVmb3JtYXQucGlwZSc7XHJcbmltcG9ydCB7IEVtYWlsVmFsaWRhdGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZW1haWx2YWxpZGF0ZS5waXBlJztcclxuaW1wb3J0IHtIb21lUGFnZVNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9ob21lcGFnZS9ob21lcGFnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtEYXRhR3JpZE1vZHVsZSxDYXJvdXNlbE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtDb21tb25Ccm93c2VUb3BTa2lsbHNNb2R1bGV9IGZyb20gJy4uL2NvbW1vbmJyb3dzZXRvcHNraWxscy9jb21tb25icm93c2V0b3Bza2lsbHMubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0Nhcm91c2VsTW9kdWxlLERhdGFHcmlkTW9kdWxlLENvbW1vbkJyb3dzZVRvcFNraWxsc01vZHVsZSxDb21tb25Nb2R1bGUsIEhvbWVQYWdlUm91dGluZ01vZHVsZSxGb3Jtc01vZHVsZSxEcm9wZG93bk1vZHVsZSxDYWxlbmRhck1vZHVsZSxGaWxlVXBsb2FkTW9kdWxlLERhdGFUYWJsZU1vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlLElucHV0VGV4dE1vZHVsZSxHcm93bE1vZHVsZSxCdXR0b25Nb2R1bGUsUGFuZWxNb2R1bGUsTWVzc2FnZXNNb2R1bGVdLC8vLFBhbmVsTW9kdWxlLE1lc3NhZ2VzTW9kdWxlLEdyb3dsXSxcclxuICBkZWNsYXJhdGlvbnM6IFtIb21lUGFnZUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0hvbWVQYWdlQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtNeUN1cnJlbmN5UGlwZSxNeURhdGVGb3JtYXQsRW1haWxWYWxpZGF0ZSxIb21lUGFnZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lUGFnZU1vZHVsZSB7IH1cclxuIl19
