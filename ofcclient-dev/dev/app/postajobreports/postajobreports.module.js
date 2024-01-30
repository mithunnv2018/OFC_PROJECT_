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
var postajobreports_component_1 = require('./postajobreports.component');
var postajobreports_routing_module_1 = require('./postajobreports-routing.module');
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var primeng_3 = require('primeng/primeng');
var primeng_4 = require('primeng/primeng');
var primeng_5 = require('primeng/primeng');
var first_pipe_1 = require('../shared/pipes/first.pipe');
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var index_1 = require('../shared/postajobreports/index');
var forms_1 = require('@angular/forms');
var PostajobreportsModule = (function () {
    function PostajobreportsModule() {
    }
    PostajobreportsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, postajobreports_routing_module_1.PostajobreportsRoutingModule, primeng_1.DataTableModule, primeng_2.DialogModule, primeng_3.ButtonModule, primeng_1.DropdownModule,
                forms_1.FormsModule, forms_1.ReactiveFormsModule,
                primeng_4.InputTextModule, primeng_5.CalendarModule],
            declarations: [postajobreports_component_1.PostajobreportsComponent],
            exports: [postajobreports_component_1.PostajobreportsComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, index_1.PostajobreportsService]
        }), 
        __metadata('design:paramtypes', [])
    ], PostajobreportsModule);
    return PostajobreportsModule;
}());
exports.PostajobreportsModule = PostajobreportsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wb3N0YWpvYnJlcG9ydHMvcG9zdGFqb2JyZXBvcnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDBDQUF5Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3ZFLCtDQUE2QyxrQ0FBa0MsQ0FBQyxDQUFBO0FBRWhGLHdCQUE2QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQy9ELHdCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHdCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHdCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHdCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDJCQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELGtDQUE2QixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ2pFLG1DQUE4QixvQ0FBb0MsQ0FBQyxDQUFBO0FBQ25FLHNCQUF1QyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ3pFLHNCQUE4QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBVS9EO0lBQUE7SUFBcUMsQ0FBQztJQVJ0QztRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUsNkRBQTRCLEVBQUMseUJBQWUsRUFBQyxzQkFBWSxFQUFDLHNCQUFZLEVBQUMsd0JBQWM7Z0JBQzdHLG1CQUFXLEVBQUMsMkJBQW1CO2dCQUMvQix5QkFBZSxFQUFDLHdCQUFjLENBQUM7WUFDL0IsWUFBWSxFQUFFLENBQUMsb0RBQXdCLENBQUM7WUFDeEMsT0FBTyxFQUFFLENBQUMsb0RBQXdCLENBQUM7WUFDbkMsU0FBUyxFQUFFLENBQUMsMkJBQWMsRUFBQyxnQ0FBWSxFQUFDLGtDQUFhLEVBQUMsOEJBQXNCLENBQUM7U0FDOUUsQ0FBQzs7NkJBQUE7SUFDbUMsNEJBQUM7QUFBRCxDQUFyQyxBQUFzQyxJQUFBO0FBQXpCLDZCQUFxQix3QkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9wb3N0YWpvYnJlcG9ydHMvcG9zdGFqb2JyZXBvcnRzLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFBvc3Rham9icmVwb3J0c0NvbXBvbmVudCB9IGZyb20gJy4vcG9zdGFqb2JyZXBvcnRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvc3Rham9icmVwb3J0c1JvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3Bvc3Rham9icmVwb3J0cy1yb3V0aW5nLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQge0RhdGFUYWJsZU1vZHVsZSxEcm9wZG93bk1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtEaWFsb2dNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7QnV0dG9uTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0lucHV0VGV4dE1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtDYWxlbmRhck1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHsgTXlDdXJyZW5jeVBpcGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZmlyc3QucGlwZSc7XHJcbmltcG9ydCB7IE15RGF0ZUZvcm1hdCB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9teWRhdGVmb3JtYXQucGlwZSc7XHJcbmltcG9ydCB7IEVtYWlsVmFsaWRhdGUgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvZW1haWx2YWxpZGF0ZS5waXBlJztcclxuaW1wb3J0IHsgUG9zdGFqb2JyZXBvcnRzU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9wb3N0YWpvYnJlcG9ydHMvaW5kZXgnO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUG9zdGFqb2JyZXBvcnRzUm91dGluZ01vZHVsZSxEYXRhVGFibGVNb2R1bGUsRGlhbG9nTW9kdWxlLEJ1dHRvbk1vZHVsZSxEcm9wZG93bk1vZHVsZSxcclxuICBGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gIElucHV0VGV4dE1vZHVsZSxDYWxlbmRhck1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbUG9zdGFqb2JyZXBvcnRzQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbUG9zdGFqb2JyZXBvcnRzQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtNeUN1cnJlbmN5UGlwZSxNeURhdGVGb3JtYXQsRW1haWxWYWxpZGF0ZSxQb3N0YWpvYnJlcG9ydHNTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9zdGFqb2JyZXBvcnRzTW9kdWxlIHsgfVxyXG4iXX0=
