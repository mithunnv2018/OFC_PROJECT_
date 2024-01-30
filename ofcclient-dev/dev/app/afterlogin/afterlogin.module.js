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
var afterlogin_component_1 = require('./afterlogin.component');
var afterlogin_routing_module_1 = require('./afterlogin-routing.module');
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var primeng_3 = require('primeng/primeng');
var primeng_4 = require('primeng/primeng');
var primeng_5 = require('primeng/primeng');
var first_pipe_1 = require('../shared/pipes/first.pipe');
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var index_1 = require('../shared/afterlogin/index');
var forms_1 = require('@angular/forms');
var AfterloginModule = (function () {
    function AfterloginModule() {
    }
    AfterloginModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, afterlogin_routing_module_1.AfterloginRoutingModule, primeng_1.DataTableModule, primeng_2.DialogModule, primeng_3.ButtonModule, primeng_1.DropdownModule,
                forms_1.FormsModule, forms_1.ReactiveFormsModule,
                primeng_4.InputTextModule, primeng_5.CalendarModule],
            declarations: [afterlogin_component_1.AfterloginComponent],
            exports: [afterlogin_component_1.AfterloginComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, index_1.AfterloginService]
        }), 
        __metadata('design:paramtypes', [])
    ], AfterloginModule);
    return AfterloginModule;
}());
exports.AfterloginModule = AfterloginModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZnRlcmxvZ2luL2FmdGVybG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MscUNBQW9DLHdCQUF3QixDQUFDLENBQUE7QUFDN0QsMENBQXdDLDZCQUE2QixDQUFDLENBQUE7QUFFdEUsd0JBQTZDLGlCQUFpQixDQUFDLENBQUE7QUFDL0Qsd0JBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0Msd0JBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0Msd0JBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsd0JBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsMkJBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsa0NBQTZCLG1DQUFtQyxDQUFDLENBQUE7QUFDakUsbUNBQThCLG9DQUFvQyxDQUFDLENBQUE7QUFDbkUsc0JBQWtDLDRCQUE0QixDQUFDLENBQUE7QUFDL0Qsc0JBQThDLGdCQUFnQixDQUFDLENBQUE7QUFVL0Q7SUFBQTtJQUFnQyxDQUFDO0lBUmpDO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSxtREFBdUIsRUFBQyx5QkFBZSxFQUFDLHNCQUFZLEVBQUMsc0JBQVksRUFBQyx3QkFBYztnQkFDeEcsbUJBQVcsRUFBQywyQkFBbUI7Z0JBQy9CLHlCQUFlLEVBQUMsd0JBQWMsQ0FBQztZQUMvQixZQUFZLEVBQUUsQ0FBQywwQ0FBbUIsQ0FBQztZQUNuQyxPQUFPLEVBQUUsQ0FBQywwQ0FBbUIsQ0FBQztZQUM5QixTQUFTLEVBQUUsQ0FBQywyQkFBYyxFQUFDLGdDQUFZLEVBQUMsa0NBQWEsRUFBQyx5QkFBaUIsQ0FBQztTQUN6RSxDQUFDOzt3QkFBQTtJQUM4Qix1QkFBQztBQUFELENBQWhDLEFBQWlDLElBQUE7QUFBcEIsd0JBQWdCLG1CQUFJLENBQUEiLCJmaWxlIjoiYXBwL2FmdGVybG9naW4vYWZ0ZXJsb2dpbi5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBZnRlcmxvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9hZnRlcmxvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFmdGVybG9naW5Sb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hZnRlcmxvZ2luLXJvdXRpbmcubW9kdWxlJztcclxuXHJcbmltcG9ydCB7RGF0YVRhYmxlTW9kdWxlLERyb3Bkb3duTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0RpYWxvZ01vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtCdXR0b25Nb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7SW5wdXRUZXh0TW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0NhbGVuZGFyTW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQgeyBNeUN1cnJlbmN5UGlwZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9maXJzdC5waXBlJztcclxuaW1wb3J0IHsgTXlEYXRlRm9ybWF0IH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL215ZGF0ZWZvcm1hdC5waXBlJztcclxuaW1wb3J0IHsgRW1haWxWYWxpZGF0ZSB9IGZyb20gJy4uL3NoYXJlZC9waXBlcy9lbWFpbHZhbGlkYXRlLnBpcGUnO1xyXG5pbXBvcnQgeyBBZnRlcmxvZ2luU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9hZnRlcmxvZ2luL2luZGV4JztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEFmdGVybG9naW5Sb3V0aW5nTW9kdWxlLERhdGFUYWJsZU1vZHVsZSxEaWFsb2dNb2R1bGUsQnV0dG9uTW9kdWxlLERyb3Bkb3duTW9kdWxlLFxyXG4gIEZvcm1zTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgSW5wdXRUZXh0TW9kdWxlLENhbGVuZGFyTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtBZnRlcmxvZ2luQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQWZ0ZXJsb2dpbkNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbTXlDdXJyZW5jeVBpcGUsTXlEYXRlRm9ybWF0LEVtYWlsVmFsaWRhdGUsQWZ0ZXJsb2dpblNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZnRlcmxvZ2luTW9kdWxlIHsgfVxyXG4iXX0=
