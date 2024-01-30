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
var postajob_component_1 = require('./postajob.component');
var postajob_routing_module_1 = require('./postajob-routing.module');
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var primeng_3 = require('primeng/primeng');
var primeng_4 = require('primeng/primeng');
var primeng_5 = require('primeng/primeng');
var primeng_6 = require('primeng/primeng');
var first_pipe_1 = require('../shared/pipes/first.pipe');
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var index_1 = require('../shared/postajob/index');
var forms_1 = require('@angular/forms');
var primeng_7 = require('primeng/primeng');
var PostajobModule = (function () {
    function PostajobModule() {
    }
    PostajobModule = __decorate([
        core_1.NgModule({
            imports: [primeng_1.MessagesModule, primeng_1.GrowlModule, primeng_6.AutoCompleteModule, primeng_7.SelectButtonModule, common_1.CommonModule, postajob_routing_module_1.PostajobRoutingModule, primeng_1.DataTableModule, primeng_2.DialogModule, primeng_3.ButtonModule, primeng_1.DropdownModule, primeng_6.FileUploadModule,
                forms_1.FormsModule, forms_1.ReactiveFormsModule,
                primeng_4.InputTextModule, primeng_5.CalendarModule],
            declarations: [postajob_component_1.PostajobComponent],
            exports: [postajob_component_1.PostajobComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, index_1.PostajobService]
        }), 
        __metadata('design:paramtypes', [])
    ], PostajobModule);
    return PostajobModule;
}());
exports.PostajobModule = PostajobModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wb3N0YWpvYi9wb3N0YWpvYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUN6RCx3Q0FBc0MsMkJBQTJCLENBQUMsQ0FBQTtBQUVsRSx3QkFBd0UsaUJBQWlCLENBQUMsQ0FBQTtBQUMxRix3QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3Qyx3QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3Qyx3QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCx3QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx3QkFBa0QsaUJBQWlCLENBQUMsQ0FBQTtBQUNwRSwyQkFBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUM1RCxrQ0FBNkIsbUNBQW1DLENBQUMsQ0FBQTtBQUNqRSxtQ0FBOEIsb0NBQW9DLENBQUMsQ0FBQTtBQUNuRSxzQkFBZ0MsMEJBQTBCLENBQUMsQ0FBQTtBQUMzRCxzQkFBOEMsZ0JBQWdCLENBQUMsQ0FBQTtBQUMvRCx3QkFBaUMsaUJBQWlCLENBQUMsQ0FBQTtBQVNuRDtJQUFBO0lBQThCLENBQUM7SUFSL0I7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyx3QkFBYyxFQUFDLHFCQUFXLEVBQUMsNEJBQWtCLEVBQUMsNEJBQWtCLEVBQUMscUJBQVksRUFBRSwrQ0FBcUIsRUFBQyx5QkFBZSxFQUFDLHNCQUFZLEVBQUMsc0JBQVksRUFBQyx3QkFBYyxFQUFDLDBCQUFnQjtnQkFDeEwsbUJBQVcsRUFBQywyQkFBbUI7Z0JBQy9CLHlCQUFlLEVBQUMsd0JBQWMsQ0FBQztZQUMvQixZQUFZLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztZQUNqQyxPQUFPLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztZQUM1QixTQUFTLEVBQUUsQ0FBQywyQkFBYyxFQUFDLGdDQUFZLEVBQUMsa0NBQWEsRUFBQyx1QkFBZSxDQUFDO1NBQ3ZFLENBQUM7O3NCQUFBO0lBQzRCLHFCQUFDO0FBQUQsQ0FBOUIsQUFBK0IsSUFBQTtBQUFsQixzQkFBYyxpQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9wb3N0YWpvYi9wb3N0YWpvYi5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBQb3N0YWpvYkNvbXBvbmVudCB9IGZyb20gJy4vcG9zdGFqb2IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9zdGFqb2JSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9wb3N0YWpvYi1yb3V0aW5nLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQge0RhdGFUYWJsZU1vZHVsZSxEcm9wZG93bk1vZHVsZSxNZXNzYWdlc01vZHVsZSxHcm93bE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtEaWFsb2dNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7QnV0dG9uTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0lucHV0VGV4dE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtDYWxlbmRhck1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtGaWxlVXBsb2FkTW9kdWxlLEF1dG9Db21wbGV0ZU1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgTXlDdXJyZW5jeVBpcGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZmlyc3QucGlwZSc7XHJcbmltcG9ydCB7IE15RGF0ZUZvcm1hdCB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9teWRhdGVmb3JtYXQucGlwZSc7XHJcbmltcG9ydCB7IEVtYWlsVmFsaWRhdGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZW1haWx2YWxpZGF0ZS5waXBlJztcclxuaW1wb3J0IHsgUG9zdGFqb2JTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3Bvc3Rham9iL2luZGV4JztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7U2VsZWN0QnV0dG9uTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtNZXNzYWdlc01vZHVsZSxHcm93bE1vZHVsZSxBdXRvQ29tcGxldGVNb2R1bGUsU2VsZWN0QnV0dG9uTW9kdWxlLENvbW1vbk1vZHVsZSwgUG9zdGFqb2JSb3V0aW5nTW9kdWxlLERhdGFUYWJsZU1vZHVsZSxEaWFsb2dNb2R1bGUsQnV0dG9uTW9kdWxlLERyb3Bkb3duTW9kdWxlLEZpbGVVcGxvYWRNb2R1bGUsXHJcbiAgRm9ybXNNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICBJbnB1dFRleHRNb2R1bGUsQ2FsZW5kYXJNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1Bvc3Rham9iQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbUG9zdGFqb2JDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW015Q3VycmVuY3lQaXBlLE15RGF0ZUZvcm1hdCxFbWFpbFZhbGlkYXRlLFBvc3Rham9iU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvc3Rham9iTW9kdWxlIHsgfVxyXG4iXX0=
