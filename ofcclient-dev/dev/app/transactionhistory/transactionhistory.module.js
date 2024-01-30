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
var transactionhistory_component_1 = require('./transactionhistory.component');
var transactionhistory_routing_module_1 = require('./transactionhistory-routing.module');
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var primeng_3 = require('primeng/primeng');
var primeng_4 = require('primeng/primeng');
var primeng_5 = require('primeng/primeng');
var first_pipe_1 = require('../shared/pipes/first.pipe');
var mydateformat_pipe_1 = require('../shared/pipes/mydateformat.pipe');
var emailvalidate_pipe_1 = require('../shared/pipes/emailvalidate.pipe');
var index_1 = require('../shared/transactionhistory/index');
var forms_1 = require('@angular/forms');
var TransactionhistoryModule = (function () {
    function TransactionhistoryModule() {
    }
    TransactionhistoryModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, transactionhistory_routing_module_1.TransactionhistoryRoutingModule, primeng_1.DataTableModule, primeng_2.DialogModule, primeng_3.ButtonModule, primeng_1.DropdownModule,
                forms_1.FormsModule, forms_1.ReactiveFormsModule, primeng_1.PasswordModule, primeng_2.CheckboxModule,
                primeng_4.InputTextModule, primeng_5.CalendarModule],
            declarations: [transactionhistory_component_1.TransactionhistoryComponent],
            exports: [transactionhistory_component_1.TransactionhistoryComponent],
            providers: [first_pipe_1.MyCurrencyPipe, mydateformat_pipe_1.MyDateFormat, emailvalidate_pipe_1.EmailValidate, index_1.TransactionhistoryService]
        }), 
        __metadata('design:paramtypes', [])
    ], TransactionhistoryModule);
    return TransactionhistoryModule;
}());
exports.TransactionhistoryModule = TransactionhistoryModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90cmFuc2FjdGlvbmhpc3RvcnkvdHJhbnNhY3Rpb25oaXN0b3J5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDZDQUE0QyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzdFLGtEQUFnRCxxQ0FBcUMsQ0FBQyxDQUFBO0FBRXRGLHdCQUE0RCxpQkFBaUIsQ0FBQyxDQUFBO0FBQzlFLHdCQUEwQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzVELHdCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHdCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHdCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDJCQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELGtDQUE2QixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ2pFLG1DQUE4QixvQ0FBb0MsQ0FBQyxDQUFBO0FBQ25FLHNCQUEwQyxvQ0FBb0MsQ0FBQyxDQUFBO0FBQy9FLHNCQUE4QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBVS9EO0lBQUE7SUFBd0MsQ0FBQztJQVJ6QztRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUsbUVBQStCLEVBQUMseUJBQWUsRUFBQyxzQkFBWSxFQUFDLHNCQUFZLEVBQUMsd0JBQWM7Z0JBQ2hILG1CQUFXLEVBQUMsMkJBQW1CLEVBQUMsd0JBQWMsRUFBQyx3QkFBYztnQkFDN0QseUJBQWUsRUFBQyx3QkFBYyxDQUFDO1lBQy9CLFlBQVksRUFBRSxDQUFDLDBEQUEyQixDQUFDO1lBQzNDLE9BQU8sRUFBRSxDQUFDLDBEQUEyQixDQUFDO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLDJCQUFjLEVBQUMsZ0NBQVksRUFBQyxrQ0FBYSxFQUFDLGlDQUF5QixDQUFDO1NBQ2pGLENBQUM7O2dDQUFBO0lBQ3NDLCtCQUFDO0FBQUQsQ0FBeEMsQUFBeUMsSUFBQTtBQUE1QixnQ0FBd0IsMkJBQUksQ0FBQSIsImZpbGUiOiJhcHAvdHJhbnNhY3Rpb25oaXN0b3J5L3RyYW5zYWN0aW9uaGlzdG9yeS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBUcmFuc2FjdGlvbmhpc3RvcnlDb21wb25lbnQgfSBmcm9tICcuL3RyYW5zYWN0aW9uaGlzdG9yeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmFuc2FjdGlvbmhpc3RvcnlSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi90cmFuc2FjdGlvbmhpc3Rvcnktcm91dGluZy5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHtEYXRhVGFibGVNb2R1bGUsRHJvcGRvd25Nb2R1bGUsUGFzc3dvcmRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7RGlhbG9nTW9kdWxlLENoZWNrYm94TW9kdWxlfSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0J1dHRvbk1vZHVsZX0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuaW1wb3J0IHtJbnB1dFRleHRNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7Q2FsZW5kYXJNb2R1bGV9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7IE15Q3VycmVuY3lQaXBlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2ZpcnN0LnBpcGUnO1xyXG5pbXBvcnQgeyBNeURhdGVGb3JtYXQgfSBmcm9tICcuLi9zaGFyZWQvcGlwZXMvbXlkYXRlZm9ybWF0LnBpcGUnO1xyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRlIH0gZnJvbSAnLi4vc2hhcmVkL3BpcGVzL2VtYWlsdmFsaWRhdGUucGlwZSc7XHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uaGlzdG9yeVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvdHJhbnNhY3Rpb25oaXN0b3J5L2luZGV4JztcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFRyYW5zYWN0aW9uaGlzdG9yeVJvdXRpbmdNb2R1bGUsRGF0YVRhYmxlTW9kdWxlLERpYWxvZ01vZHVsZSxCdXR0b25Nb2R1bGUsRHJvcGRvd25Nb2R1bGUsXHJcbiAgRm9ybXNNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZSxQYXNzd29yZE1vZHVsZSxDaGVja2JveE1vZHVsZSxcclxuICBJbnB1dFRleHRNb2R1bGUsQ2FsZW5kYXJNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1RyYW5zYWN0aW9uaGlzdG9yeUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1RyYW5zYWN0aW9uaGlzdG9yeUNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbTXlDdXJyZW5jeVBpcGUsTXlEYXRlRm9ybWF0LEVtYWlsVmFsaWRhdGUsVHJhbnNhY3Rpb25oaXN0b3J5U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uaGlzdG9yeU1vZHVsZSB7IH1cclxuIl19
