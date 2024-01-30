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
var postajobviewpage_component_1 = require('./postajobviewpage.component');
var postajobviewpage_routing_module_1 = require('./postajobviewpage-routing.module');
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var primeng_3 = require('primeng/primeng');
var primeng_4 = require('primeng/primeng');
var primeng_5 = require('primeng/primeng');
var primeng_6 = require('primeng/primeng');
var first_pipe_1 = require('../shared/pipes/first.pipe');
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var index_1 = require('../shared/postajobviewpage/index');
var forms_1 = require('@angular/forms');
var PostajobviewpageModule = (function () {
    function PostajobviewpageModule() {
    }
    PostajobviewpageModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, postajobviewpage_routing_module_1.PostajobviewpageRoutingModule, primeng_2.DataTableModule, primeng_3.DialogModule, primeng_4.ButtonModule, primeng_2.DropdownModule,
                forms_1.FormsModule, forms_1.ReactiveFormsModule, primeng_1.AccordionModule, primeng_4.GrowlModule,
                primeng_5.InputTextModule, primeng_6.CalendarModule],
            declarations: [postajobviewpage_component_1.PostajobviewpageComponent],
            exports: [postajobviewpage_component_1.PostajobviewpageComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, index_1.PostajobviewpageService]
        }), 
        __metadata('design:paramtypes', [])
    ], PostajobviewpageModule);
    return PostajobviewpageModule;
}());
exports.PostajobviewpageModule = PostajobviewpageModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wb3N0YWpvYnZpZXdwYWdlL3Bvc3Rham9idmlld3BhZ2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsMkNBQTBDLDhCQUE4QixDQUFDLENBQUE7QUFDekUsZ0RBQThDLG1DQUFtQyxDQUFDLENBQUE7QUFDbEYsd0JBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsd0JBQTZDLGlCQUFpQixDQUFDLENBQUE7QUFDL0Qsd0JBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0Msd0JBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFDekQsd0JBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsd0JBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsMkJBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsa0NBQTZCLG1DQUFtQyxDQUFDLENBQUE7QUFDakUsbUNBQThCLG9DQUFvQyxDQUFDLENBQUE7QUFDbkUsc0JBQXdDLGtDQUFrQyxDQUFDLENBQUE7QUFDM0Usc0JBQThDLGdCQUFnQixDQUFDLENBQUE7QUFVL0Q7SUFBQTtJQUFzQyxDQUFDO0lBUnZDO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSwrREFBNkIsRUFBQyx5QkFBZSxFQUFDLHNCQUFZLEVBQUMsc0JBQVksRUFBQyx3QkFBYztnQkFDOUcsbUJBQVcsRUFBQywyQkFBbUIsRUFBQyx5QkFBZSxFQUFDLHFCQUFXO2dCQUMzRCx5QkFBZSxFQUFDLHdCQUFjLENBQUM7WUFDL0IsWUFBWSxFQUFFLENBQUMsc0RBQXlCLENBQUM7WUFDekMsT0FBTyxFQUFFLENBQUMsc0RBQXlCLENBQUM7WUFDcEMsU0FBUyxFQUFFLENBQUMsMkJBQWMsRUFBQyxnQ0FBWSxFQUFDLGtDQUFhLEVBQUMsK0JBQXVCLENBQUM7U0FDL0UsQ0FBQzs7OEJBQUE7SUFDb0MsNkJBQUM7QUFBRCxDQUF0QyxBQUF1QyxJQUFBO0FBQTFCLDhCQUFzQix5QkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9wb3N0YWpvYnZpZXdwYWdlL3Bvc3Rham9idmlld3BhZ2UubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUG9zdGFqb2J2aWV3cGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcG9zdGFqb2J2aWV3cGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb3N0YWpvYnZpZXdwYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vcG9zdGFqb2J2aWV3cGFnZS1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7QWNjb3JkaW9uTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0RhdGFUYWJsZU1vZHVsZSxEcm9wZG93bk1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtEaWFsb2dNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7QnV0dG9uTW9kdWxlLEdyb3dsTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0lucHV0VGV4dE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtDYWxlbmRhck1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgTXlDdXJyZW5jeVBpcGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZmlyc3QucGlwZSc7XHJcbmltcG9ydCB7IE15RGF0ZUZvcm1hdCB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9teWRhdGVmb3JtYXQucGlwZSc7XHJcbmltcG9ydCB7IEVtYWlsVmFsaWRhdGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZW1haWx2YWxpZGF0ZS5waXBlJztcclxuaW1wb3J0IHsgUG9zdGFqb2J2aWV3cGFnZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvcG9zdGFqb2J2aWV3cGFnZS9pbmRleCc7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBQb3N0YWpvYnZpZXdwYWdlUm91dGluZ01vZHVsZSxEYXRhVGFibGVNb2R1bGUsRGlhbG9nTW9kdWxlLEJ1dHRvbk1vZHVsZSxEcm9wZG93bk1vZHVsZSxcclxuICBGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlLEFjY29yZGlvbk1vZHVsZSxHcm93bE1vZHVsZSxcclxuICBJbnB1dFRleHRNb2R1bGUsQ2FsZW5kYXJNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1Bvc3Rham9idmlld3BhZ2VDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtQb3N0YWpvYnZpZXdwYWdlQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtNeUN1cnJlbmN5UGlwZSxNeURhdGVGb3JtYXQsRW1haWxWYWxpZGF0ZSxQb3N0YWpvYnZpZXdwYWdlU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvc3Rham9idmlld3BhZ2VNb2R1bGUgeyB9XHJcbiJdfQ==
