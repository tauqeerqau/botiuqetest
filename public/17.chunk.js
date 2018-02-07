webpackJsonpac__name_([17],{

/***/ "./node_modules/rxjs/add/operator/do.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var do_1 = __webpack_require__("./node_modules/rxjs/operator/do.js");
Observable_1.Observable.prototype.do = do_1._do;
Observable_1.Observable.prototype._do = do_1._do;
//# sourceMappingURL=do.js.map

/***/ },

/***/ "./node_modules/rxjs/operator/do.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("./node_modules/rxjs/Subscriber.js");
/**
 * Perform a side effect for every emission on the source Observable, but return
 * an Observable that is identical to the source.
 *
 * <span class="informal">Intercepts each emission on the source and runs a
 * function, but returns an output which is identical to the source.</span>
 *
 * <img src="./img/do.png" width="100%">
 *
 * Returns a mirrored Observable of the source Observable, but modified so that
 * the provided Observer is called to perform a side effect for every value,
 * error, and completion emitted by the source. Any errors that are thrown in
 * the aforementioned Observer or handlers are safely sent down the error path
 * of the output Observable.
 *
 * This operator is useful for debugging your Observables for the correct values
 * or performing other side effects.
 *
 * Note: this is different to a `subscribe` on the Observable. If the Observable
 * returned by `do` is not subscribed, the side effects specified by the
 * Observer will never happen. `do` therefore simply spies on existing
 * execution, it does not trigger an execution to happen like `subscribe` does.
 *
 * @example <caption>Map every every click to the clientX position of that click, while also logging the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks
 *   .do(ev => console.log(ev))
 *   .map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link map}
 * @see {@link subscribe}
 *
 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
 * callback for `next`.
 * @param {function} [error] Callback for errors in the source.
 * @param {function} [complete] Callback for the completion of the source.
 * @return {Observable} An Observable identical to the source, but runs the
 * specified Observer or callback(s) for each item.
 * @method do
 * @name do
 * @owner Observable
 */
function _do(nextOrObserver, error, complete) {
    return this.lift(new DoOperator(nextOrObserver, error, complete));
}
exports._do = _do;
var DoOperator = (function () {
    function DoOperator(nextOrObserver, error, complete) {
        this.nextOrObserver = nextOrObserver;
        this.error = error;
        this.complete = complete;
    }
    DoOperator.prototype.call = function (subscriber, source) {
        return source._subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
    };
    return DoOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DoSubscriber = (function (_super) {
    __extends(DoSubscriber, _super);
    function DoSubscriber(destination, nextOrObserver, error, complete) {
        _super.call(this, destination);
        var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
        safeSubscriber.syncErrorThrowable = true;
        this.add(safeSubscriber);
        this.safeSubscriber = safeSubscriber;
    }
    DoSubscriber.prototype._next = function (value) {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.next(value);
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.next(value);
        }
    };
    DoSubscriber.prototype._error = function (err) {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.error(err);
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.error(err);
        }
    };
    DoSubscriber.prototype._complete = function () {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.complete();
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.complete();
        }
    };
    return DoSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=do.js.map

/***/ },

/***/ "./src/app/showmeasurement/show.Measurement.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var measurement_1 = __webpack_require__("./src/models/measurement.ts");
var customer_Service_1 = __webpack_require__("./src/services/customer.Service.ts");
var measurement_Service_1 = __webpack_require__("./src/services/measurement.Service.ts");
var employee_Service_1 = __webpack_require__("./src/services/employee.Service.ts");
var ShowMeasurementComponent = (function () {
    function ShowMeasurementComponent(_measurementService, _customerService, _employeeService) {
        this._measurementService = _measurementService;
        this._customerService = _customerService;
        this._employeeService = _employeeService;
        this.MultipleMeasurement = [];
        this._SearchByName = [];
        this.ShalwarKameez = false;
        this.Coat = false;
        this.Sherwani = false;
        this.WaistCoat = false;
        this.Pant = false;
        this.Trouser = false;
    }
    ShowMeasurementComponent.prototype.addMeasurement = function () {
        var _this = this;
        if (this.ShalwarKameez == true) {
            if (this.newMeasurement.ShalwarKameezLength == "" || this.newMeasurement.ShalwarKameezChest == "" || this.newMeasurement.ShalwarKameezWaist == "" || this.newMeasurement.ShalwarKameezHip == "" || this.newMeasurement.ShalwarKameezSleeve == "" || this.newMeasurement.ShalwarKameezShoulder == "" || this.newMeasurement.ShalwarKameezNeck == "" || this.newMeasurement.ShalwarKameezBysep == "" || this.newMeasurement.ShalwarKameezSLength == "" || this.newMeasurement.ShalwarKameezBottom == "") {
                $("#snackbar").html("Please fill the empty Field");
                this.showToast();
            }
            else {
                console.log(this.newMeasurement);
                this._measurementService.addMeasurement(this.newMeasurement).subscribe(function (res) {
                    console.log(res);
                    if (res.code == 200) {
                        $("#snackbar").html("Values Saved!");
                        _this.showToast();
                        _this.newMeasurement = new measurement_1.Measurement();
                        $("#selectType").hide();
                        _this.allFalse();
                    }
                    else {
                        $("#snackbar").html(res.message);
                        _this.showToast();
                    }
                });
            }
        }
        else if (this.Coat == true) {
            if (this.newMeasurement.CoatLength == "" || this.newMeasurement.CoatChest == "" || this.newMeasurement.CoatWaist == "" || this.newMeasurement.CoatHip == "" || this.newMeasurement.CoatSleeve == "" || this.newMeasurement.CoatShoulder == "" || this.newMeasurement.CoatNeck == "" || this.newMeasurement.CoatBysep == "" || this.newMeasurement.CoatHB == "" || this.newMeasurement.CoatCB == "") {
                $("#snackbar").html("Please fill the empty Field");
                this.showToast();
            }
            else {
                console.log(this.newMeasurement);
                this._measurementService.addMeasurement(this.newMeasurement).subscribe(function (res) {
                    console.log(res);
                    if (res.code == 200) {
                        $("#snackbar").html("Values Saved!");
                        _this.showToast();
                        _this.newMeasurement = new measurement_1.Measurement();
                        $("#selectType").hide();
                        _this.allFalse();
                    }
                    else {
                        $("#snackbar").html(res.message);
                        _this.showToast();
                    }
                });
            }
        }
        else if (this.Sherwani == true) {
            if (this.newMeasurement.SherwaniLength == "" || this.newMeasurement.SherwaniChest == "" || this.newMeasurement.SherwaniWaist == "" || this.newMeasurement.SherwaniHip == "" || this.newMeasurement.SherwaniSleeve == "" || this.newMeasurement.SherwaniShoulder == "" || this.newMeasurement.SherwaniNeck == "" || this.newMeasurement.SherwaniBysep == "" || this.newMeasurement.SherwaniHB == "" || this.newMeasurement.SherwaniCB == "") {
                $("#snackbar").html("Please fill the empty Field");
                this.showToast();
            }
            else {
                console.log(this.newMeasurement);
                this._measurementService.addMeasurement(this.newMeasurement).subscribe(function (res) {
                    console.log(res);
                    if (res.code == 200) {
                        $("#snackbar").html("Values Saved!");
                        _this.showToast();
                        _this.newMeasurement = new measurement_1.Measurement();
                        $("#selectType").hide();
                        _this.allFalse();
                    }
                    else {
                        $("#snackbar").html(res.message);
                        _this.showToast();
                    }
                });
            }
        }
        else if (this.WaistCoat == true) {
            if (this.newMeasurement.CoatLength == "" || this.newMeasurement.CoatChest == "" || this.newMeasurement.CoatWaist == "" || this.newMeasurement.CoatHip == "" || this.newMeasurement.CoatHip == "" || this.newMeasurement.CoatShoulder == "" || this.newMeasurement.CoatNeck == "" || this.newMeasurement.CoatBysep == "" || this.newMeasurement.CoatHB == "" || this.newMeasurement.CoatCB == "") {
                $("#snackbar").html("Please fill the empty Field");
                this.showToast();
            }
            else {
                console.log(this.newMeasurement);
                this._measurementService.addMeasurement(this.newMeasurement).subscribe(function (res) {
                    console.log(res);
                    if (res.code == 200) {
                        $("#snackbar").html("Values Saved!");
                        _this.showToast();
                        _this.newMeasurement = new measurement_1.Measurement();
                        $("#selectType").hide();
                        _this.allFalse();
                    }
                    else {
                        $("#snackbar").html(res.message);
                        _this.showToast();
                    }
                });
            }
        }
        else if (this.Pant == true) {
            if (this.newMeasurement.PentWaist == "" || this.newMeasurement.PentHip == "" || this.newMeasurement.PentLength == "" || this.newMeasurement.PantKnee == "" || this.newMeasurement.PentBottom == "" || this.newMeasurement.PentInside == "") {
                $("#snackbar").html("Please fill the empty Field");
                this.showToast();
            }
            else {
                console.log(this.newMeasurement);
                this._measurementService.addMeasurement(this.newMeasurement).subscribe(function (res) {
                    console.log(res);
                    if (res.code == 200) {
                        $("#snackbar").html("Values Saved!");
                        _this.showToast();
                        _this.newMeasurement = new measurement_1.Measurement();
                        $("#selectType").hide();
                        _this.allFalse();
                    }
                    else {
                        $("#snackbar").html(res.message);
                        _this.showToast();
                    }
                });
            }
        }
        else if (this.Trouser == true) {
            if (this.newMeasurement.TrouserWaist == "" || this.newMeasurement.TrouserHip == "" || this.newMeasurement.TrouserLength == "" || this.newMeasurement.TrouserKnee == "" || this.newMeasurement.TrouserBottom == "" || this.newMeasurement.TrouserInside == "") {
                $("#snackbar").html("Please fill the empty Field");
                this.showToast();
            }
            else {
                console.log('employeeid', this.newMeasurement);
                console.log(this.newMeasurement);
                this._measurementService.addMeasurement(this.newMeasurement).subscribe(function (res) {
                    console.log(res);
                    if (res.code == 200) {
                        $("#snackbar").html("Values Saved!");
                        _this.showToast();
                        _this.newMeasurement = new measurement_1.Measurement();
                        $("#selectType").hide();
                        _this.allFalse();
                    }
                    else {
                        $("#snackbar").html(res.message);
                        _this.showToast();
                    }
                });
            }
        }
        else {
            $("#snackbar").html("Please Select Right Choice");
            this.showToast();
        }
    };
    ShowMeasurementComponent.prototype.searchByName = function () {
        var _this = this;
        this._customerService.getCustomersByContactName(this.newMeasurement.CustomerContactName).subscribe(function (res) {
            if (res.code == 200) {
                _this.customers = res.data;
                $("#snackbar").html("Data is Available");
            }
            else {
                _this.customers = null;
                $("#snackbar").html("Data not Available");
            }
            console.log("customer for referance is");
            console.log(_this.customers);
        });
        this.newMeasurement.CustomerContactName = undefined;
    };
    ShowMeasurementComponent.prototype.search = function () {
        var _this = this;
        this._customerService.getCustomersByContactNumber(this.newMeasurement.CustomerContactNumber).subscribe(function (res) {
            if (res.code == 200) {
                _this.customers = res.data;
                console.log(_this.customers);
                $("#snackbar").html("Data is Available");
            }
            else {
                _this.customers = null;
                $("#snackbar").html("Data not Available");
            }
            console.log("customer for referance is");
            console.log(_this.customers);
        });
        this.newMeasurement.CustomerContactNumber = undefined;
    };
    ShowMeasurementComponent.prototype.showToast = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    ShowMeasurementComponent.prototype.onChange = function (_id) {
        console.log("CHange is Clicked" + _id);
        this.newMeasurement.CustomerId = _id;
        $("#selectType").show();
    };
    ShowMeasurementComponent.prototype.allFalse = function () {
        this.Sherwani = false;
        this.WaistCoat = false;
        this.Coat = false;
        this.ShalwarKameez = false;
        this.Pant = false;
        this.Trouser = false;
    };
    ShowMeasurementComponent.prototype.getForms = function (elem) {
        var _this = this;
        this.allFalse();
        console.log("elem is " + elem);
        if (elem == "Shalwar Kameez") {
            console.log("Inside SK");
            this.allFalse();
            this.ShalwarKameez = true;
            this._customerService.GetMeasurementById(this.Customer_Id).subscribe(function (res) {
                console.log("response received is " + res);
                for (var i = 0; i < res.data.length; i++) {
                    if ((res.data[i].CustomerId._id == _this.Customer_Id) || res.data[i].CustomerId._id == _this.customers[i]._id) {
                        _this.MultipleMeasurement[i] = res.data[i];
                        $("#snackbar").html("Data Recieved!");
                        console.log(_this.MultipleMeasurement);
                        _this.showToast();
                    }
                    else {
                        $("#snackbar").html("Data Not Available!");
                        _this.showToast();
                    }
                }
            });
        }
        else if (elem == "Coat") {
            this.allFalse();
            this.Coat = true;
            this._customerService.GetMeasurementById(this.Customer_Id).subscribe(function (res) {
                console.log(res);
                for (var i = 0; i < res.data.length; i++) {
                    if (res.data[i].CustomerId._id == _this.Customer_Id) {
                        _this.MultipleMeasurement[i] = res.data[i];
                        $("#snackbar").html("Data Recieved!");
                        console.log(_this.MultipleMeasurement);
                        _this.showToast();
                    }
                    else {
                        $("#snackbar").html("Data Not Available!");
                        _this.showToast();
                    }
                }
            });
        }
        else if (elem == "Sherwani") {
            this.allFalse();
            this.Sherwani = true;
            this._customerService.GetMeasurementById(this.Customer_Id).subscribe(function (res) {
                console.log(res);
                for (var i = 0; i < res.data.length; i++) {
                    if (res.data[i].CustomerId._id == _this.Customer_Id) {
                        _this.MultipleMeasurement[i] = res.data[i];
                        $("#snackbar").html("Data Recieved!");
                        console.log(_this.MultipleMeasurement);
                        _this.showToast();
                    }
                    else {
                        $("#snackbar").html("Data Not Available!");
                        _this.showToast();
                    }
                }
            });
        }
        else if (elem == "Waist Coat") {
            this.allFalse();
            this.WaistCoat = true;
            this._customerService.GetMeasurementById(this.Customer_Id).subscribe(function (res) {
                console.log(res);
                for (var i = 0; i < res.data.length; i++) {
                    if (res.data[i].CustomerId._id == _this.Customer_Id) {
                        _this.MultipleMeasurement[i] = res.data[i];
                        $("#snackbar").html("Data Recieved!");
                        console.log(_this.MultipleMeasurement);
                        _this.showToast();
                    }
                    else {
                        $("#snackbar").html("Data Not Available!");
                        _this.showToast();
                    }
                }
            });
        }
        else if (elem == "Pant") {
            this.allFalse();
            this.Pant = true;
            this._customerService.GetMeasurementById(this.Customer_Id).subscribe(function (res) {
                console.log(res);
                for (var i = 0; i < res.data.length; i++) {
                    if (res.data[i].CustomerId._id == _this.Customer_Id) {
                        _this.MultipleMeasurement[i] = res.data[i];
                        $("#snackbar").html("Data Recieved!");
                        console.log(_this.MultipleMeasurement);
                        _this.showToast();
                    }
                    else {
                        $("#snackbar").html("Data Not Available!");
                        _this.showToast();
                    }
                }
            });
        }
        else {
            this.allFalse();
            this.Trouser = true;
            this._customerService.GetMeasurementById(this.Customer_Id).subscribe(function (res) {
                console.log(res);
                for (var i = 0; i < res.data.length; i++) {
                    if (res.data[i].CustomerId._id == _this.Customer_Id) {
                        _this.MultipleMeasurement[i] = res.data[i];
                        $("#snackbar").html("Data Recieved!");
                        console.log(_this.MultipleMeasurement);
                        _this.showToast();
                    }
                    else {
                        $("#snackbar").html("Data Not Available!");
                        _this.showToast();
                    }
                }
            });
        }
    };
    ShowMeasurementComponent.prototype.getcutomerId = function (Customer_Id) {
        this.Customer_Id = Customer_Id;
        console.log(this.Customer_Id);
    };
    ShowMeasurementComponent.prototype.getEmployeesShalwarKameezId = function (employeesId) {
        this.Employee_Id = employeesId;
        console.log(this.Employee_Id);
        this._Measurement = new measurement_1.Measurement();
        this._Measurement.ShalwarKameezMeasurementTakenBy = this.Employee_Id;
        this.newMeasurement.ShalwarKameezMeasurementTakenBy = this.Employee_Id;
        console.log('employeeid', this.newMeasurement);
    };
    ShowMeasurementComponent.prototype.getEmployeesSherwaniId = function (employeesId) {
        this._Measurement = new measurement_1.Measurement();
        this.Employee_Id = employeesId;
        this._Measurement.SherwaniMeasurementTakenBy = this.Employee_Id;
        this.newMeasurement.SherwaniMeasurementTakenBy = this.Employee_Id;
        console.log('employeeid', this.newMeasurement);
    };
    ShowMeasurementComponent.prototype.getEmployeesWaistCoatId = function (employeesId) {
        this._Measurement = new measurement_1.Measurement();
        this.Employee_Id = employeesId;
        this._Measurement.WaistCoatMeasurementTakenBy = this.Employee_Id;
        this.newMeasurement.WaistCoatMeasurementTakenBy = this.Employee_Id;
        console.log('employeeid', this.newMeasurement);
    };
    ShowMeasurementComponent.prototype.getEmployeesPantId = function (employeesId) {
        this._Measurement = new measurement_1.Measurement();
        this.Employee_Id = employeesId;
        this._Measurement.PentMeasurementTakenBy = this.Employee_Id;
        this.newMeasurement.PentMeasurementTakenBy = this.Employee_Id;
        console.log('employeeid', this.newMeasurement);
    };
    ShowMeasurementComponent.prototype.getEmployeesCoatId = function (employeesId) {
        this._Measurement = new measurement_1.Measurement();
        this.Employee_Id = employeesId;
        this._Measurement.CoatMeasurementTakenBy = this.Employee_Id;
        this.newMeasurement.CoatMeasurementTakenBy = this.Employee_Id;
        console.log('employeeid', this.newMeasurement);
    };
    ShowMeasurementComponent.prototype.getEmployeesTrouserId = function (employeesId) {
        this._Measurement = new measurement_1.Measurement();
        this.Employee_Id = employeesId;
        this._Measurement.TrouserMeasurementTakenBy = this.Employee_Id;
        this.newMeasurement.TrouserMeasurementTakenBy = this.Employee_Id;
        console.log('employeeid', this.newMeasurement);
    };
    ShowMeasurementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newMeasurement = new measurement_1.Measurement();
        this._employeeService.getEmployees().subscribe(function (res) {
            if (res.code == 200) {
                _this.employees = res.data;
                console.log('Employeesss', _this.employees);
            }
            else {
                _this.employees = null;
            }
            console.log("Employees Received are");
            console.log(_this.employees);
        });
    };
    ShowMeasurementComponent = __decorate([
        core_1.Component({
            selector: 'ShowMeasurement',
            template: __webpack_require__("./src/app/showmeasurement/show.Measurement.template.html"),
            styles: [__webpack_require__("./src/app/showmeasurement/show.Measurement.style.css")],
            providers: [customer_Service_1.CustomerService, measurement_Service_1.MeasurementService, employee_Service_1.EmployeeService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof measurement_Service_1.MeasurementService !== 'undefined' && measurement_Service_1.MeasurementService) === 'function' && _a) || Object, (typeof (_b = typeof customer_Service_1.CustomerService !== 'undefined' && customer_Service_1.CustomerService) === 'function' && _b) || Object, (typeof (_c = typeof employee_Service_1.EmployeeService !== 'undefined' && employee_Service_1.EmployeeService) === 'function' && _c) || Object])
    ], ShowMeasurementComponent);
    return ShowMeasurementComponent;
    var _a, _b, _c;
}());
exports.ShowMeasurementComponent = ShowMeasurementComponent;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/showmeasurement/show.Measurement.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var show_Measurement_component_1 = __webpack_require__("./src/app/showmeasurement/show.Measurement.component.ts");
exports.routes = [
    { path: '', component: show_Measurement_component_1.ShowMeasurementComponent, pathMatch: 'full' }
];
var ShowMeasurementModule = (function () {
    function ShowMeasurementModule() {
    }
    ShowMeasurementModule.routes = exports.routes;
    ShowMeasurementModule = __decorate([
        core_1.NgModule({
            declarations: [
                show_Measurement_component_1.ShowMeasurementComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ShowMeasurementModule);
    return ShowMeasurementModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ShowMeasurementModule;


/***/ },

/***/ "./src/app/showmeasurement/show.Measurement.style.css":
/***/ function(module, exports) {

module.exports = ".add-btn{\r\n    border:none;\r\n    height:46px;\r\n    padding:10px 2px;\r\n    min-width:250px;\r\n    margin:0 auto;\r\n  }\r\n\r\n  fieldset{\r\n    border: 1px solid #ccc;\r\n    padding: 10px;\r\n  }\r\n\r\n  legend{\r\n    color: black;\r\n    font-size: 22px;\r\n    border-bottom: none;\r\n    padding-left: 30px;\r\n  }\r\n\r\n  .common-form{\r\n    -webkit-box-shadow: 0 10px 6px -6px #777;\r\n\t   -moz-box-shadow: 0 10px 6px -6px #777;\r\n\t        box-shadow: 0 10px 6px -6px #777;\r\n  }\r\n\r\n  .row{\r\n    margin-top:20px;\r\n  }\r\n  .row-2{\r\n    margin-top:100px;\r\n  }\r\n\r\n  .measurementsType{\r\n    width:350px;\r\n    height:40px;\r\n    border:1px solid #ccc;\r\n    border-radius: 0;\r\n    padding-left:5px;\r\n    color:#555555;\r\n    padding:10px;\r\n    margin:25px auto;\r\n  }\r\n\r\n  .record-text{\r\n    margin:25px auto;\r\n    text-align: center;\r\n    columns: #222222;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n\r\n\r\n  /* The snackbar - position it at the bottom and in the middle of the screen */\r\n#snackbar {\r\n  visibility: hidden; /* Hidden by default. Visible on click */\r\n  min-width: 250px; /* Set a default minimum width */\r\n  margin-left: -125px; /* Divide value of min-width by 2 */\r\n  background-color: #333; /* Black background color */\r\n  color: #fff; /* White text color */\r\n  text-align: center; /* Centered text */\r\n  border-radius: 2px; /* Rounded borders */\r\n  padding: 16px; /* Padding */\r\n  position: fixed; /* Sit on top of the screen */\r\n  z-index: 1; /* Add a z-index if needed */\r\n  left: 50%; /* Center the snackbar */\r\n  bottom: 30px; /* 30px from the bottom */\r\n}\r\n\r\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\r\n#snackbar.show {\r\n  visibility: visible; /* Show the snackbar */\r\n\r\n/* Add animation: Take 0.5 seconds to fade in and out the snackbar. \r\nHowever, delay the fade out process for 2.5 seconds */\r\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n/* Animations to fade the snackbar in and out */\r\n@-webkit-keyframes fadein {\r\n  from {bottom: 0; opacity: 0;} \r\n  to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n  from {bottom: 0; opacity: 0;}\r\n  to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n  from {bottom: 30px; opacity: 1;} \r\n  to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n  from {bottom: 30px; opacity: 1;}\r\n  to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n#selectType{\r\n  display:none;\r\n  text-align: center;\r\n}"

/***/ },

/***/ "./src/app/showmeasurement/show.Measurement.template.html":
/***/ function(module, exports) {

module.exports = "<h1>Add Measurement Form</h1>\r\n<div id=\"snackbar\"></div>\r\n\r\n<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 col-lg-6 col-sm-6 offset-lg-3 offset-md-3 offset-sm-3 common-form\">\r\n      <div class=\"form-group\">\r\n        \r\n                <label for=\"normal-field\" class=\"col-form-label\">Enter Contact Name</label>\r\n        \r\n                <input type=\"text\" [(ngModel)]=\"newMeasurement.CustomerContactName\" id=\"normal-field\" class=\"form-control custom-inputs\"\r\n                  placeholder=\"Please Enter Customer Contact Name\">\r\n        \r\n              </div>\r\n              <div class=\"form-group\">\r\n                <button (click)=\"searchByName()\" class=\"btn btn-primary\">Search</button>\r\n              </div>\r\n      <div class=\"form-group\">\r\n\r\n        <label for=\"normal-field\" class=\"col-form-label\">Enter Contact Number</label>\r\n\r\n        <input type=\"text\" [(ngModel)]=\"newMeasurement.CustomerContactNumber\" id=\"normal-field\" class=\"form-control custom-inputs\"\r\n          placeholder=\"Please Enter Customer Contact Number\">\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <button (click)=\"search()\" class=\"btn btn-primary\">Search</button>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <select (change)=\"getcutomerId($event.target.value)\">\r\n          <option disabled selected>Select Customers</option>\r\n          <option *ngFor='let customer of customers' value={{customer._id}}>\r\n            {{customer.FullName}}\r\n          </option>\r\n        </select>\r\n\r\n        <select class=\"measurementsType\" (change)=\"getForms($event.target.value)\">\r\n          <option disabled selected>Select Option</option>\r\n          <option value=\"Shalwar Kameez\">Shalwar Kameez</option>\r\n          <option value=\"Coat\">Coat</option>\r\n          <option value=\"Sherwani\">Sherwani</option>\r\n          <option value=\"Waist Coat\">Waist Coat</option>\r\n          <option value=\"Pant\">Pant</option>\r\n          <option value=\"Trouser\">Trouser</option>\r\n\r\n        </select>\r\n      </div>\r\n\r\n  <!--     <div class=\"row\" id=\"selectType\">\r\n        <h1 class=\"record-text\">Record Measurements for:</h1>\r\n       \r\n      </div> -->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row row-2\">\r\n\r\n    </div>\r\n   \r\n    <div class=\"table-responsive\" *ngIf=\"WaistCoat\">          \r\n      <table class=\"table table-bordered table-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Length</th>\r\n            <th>Chest</th>\r\n            <th>Waist</th>\r\n            <th>Hip</th>\r\n            <th>Shoulder</th>\r\n            <th>Neck</th>\r\n            <th>HB</th>\r\n            <th>CB</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let order of MultipleMeasurement;let i=index\">\r\n            <td>{{i}}</td>\r\n            <td>{{order.CoatLength}}</td>\r\n            <td>{{order.CoatChest}}</td>\r\n            <td>{{order.CoatWaist}}</td>\r\n            <td>{{order.CoatHip}}</td>\r\n            <td>{{order.CoatShoulder}}</td>\r\n            <td>{{order.CoatNeck}}</td>\r\n            <td>{{order.CoatHB}}</td>\r\n            <td>{{order.CoatCB}}</td>\r\n           \r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      </div>\r\n \r\n\r\n    <div class=\"table-responsive\" *ngIf=\"ShalwarKameez\">          \r\n    <table class=\"table table-bordered table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>#</th>\r\n          <th>Bottom</th>\r\n          <th>SLength</th>\r\n          <th>Bysep</th>\r\n          <th>Neck</th>\r\n          <th>Shoulder</th>\r\n          <th>Sleeve</th>\r\n          <th>Hip</th>\r\n          <th>Waist</th>\r\n          <th>Chest</th>\r\n          <th>Length</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let order of MultipleMeasurement;let i=index\">\r\n          <td>{{i}}</td>\r\n          <td>{{order.ShalwarKameezBottom}}</td>\r\n          <td>{{order.ShalwarKameezSLength}}</td>\r\n          <td>{{order.ShalwarKameezBysep}}</td>\r\n          <td>{{order.ShalwarKameezNeck}}</td>\r\n          <td>{{order.ShalwarKameezShoulder}}</td>\r\n          <td>{{order.ShalwarKameezSleeve}}</td>\r\n          <td>{{order.ShalwarKameezHip}}</td>\r\n          <td>{{order.ShalwarKameezWaist}}</td>\r\n          <td>{{order.ShalwarKameezChest}}</td>\r\n          <td>{{order.ShalwarKameezLength}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    </div>\r\n\r\n    <div class=\"table-responsive\" *ngIf=\"Pant\">          \r\n      <table class=\"table table-bordered table-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Bottom</th>\r\n            <th>Hip</th>\r\n            <th>Inside</th>\r\n            <th>Knee</th>\r\n            <th>Length</th>\r\n            <th>Waist</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let order of MultipleMeasurement;let i=index\">\r\n            <td>{{i}}</td>\r\n            <td>{{order.PentBottom}}</td>\r\n            <td>{{order.PentHip}}</td>\r\n            <td>{{order.PentInside}}</td>\r\n            <td>{{order.PentKnee}}</td>\r\n            <td>{{order.PentLength}}</td>\r\n            <td>{{order.PentWaist}}</td>\r\n           \r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      </div>\r\n\r\n      <div class=\"table-responsive\" *ngIf=\"Coat\">          \r\n        <table class=\"table table-bordered table-striped\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>Bottom</th>\r\n              <th>SLength</th>\r\n              <th>Bysep</th>\r\n              <th>Neck</th>\r\n              <th>Shoulder</th>\r\n              <th>Sleeve</th>\r\n              <th>Hip</th>\r\n              <th>Waist</th>\r\n              <th>Chest</th>\r\n              <th>Length</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let order of MultipleMeasurement;let i=index\">\r\n              <td>{{i}}</td>\r\n              <td>{{order.CoatBysep}}</td>\r\n              <td>{{order.CoatCB}}</td>\r\n              <td>{{order.CoatChest}}</td>\r\n              <td>{{order.CoatHB}}</td>\r\n              <td>{{order.CoatHip}}</td>\r\n              <td>{{order.CoatLength}}</td>\r\n              <td>{{order.CoatNeck}}</td>\r\n              <td>{{order.CoatShoulder}}</td>\r\n              <td>{{order.CoatSleeve}}</td>\r\n              <td>{{order.CoatWaist}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        </div>\r\n\r\n        <div class=\"table-responsive\" *ngIf=\"Sherwani\">          \r\n          <table class=\"table table-bordered table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th>#</th>\r\n                <th>Sep</th>\r\n                <th>CB</th>\r\n                <th>Chest</th>\r\n                <th>HB</th>\r\n                <th>Hip</th>\r\n                <th>Length</th>\r\n                <th>Shoulder</th>\r\n                <th>Sleeve</th>\r\n                <th>Waist</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let order of MultipleMeasurement;let i=index\">\r\n                <td>{{i}}</td>\r\n                <td>{{order.SherwaniBysep}}</td>\r\n                <td>{{order.SherwaniCB}}</td>\r\n                <td>{{order.SherwaniChest}}</td>\r\n                <td>{{order.SherwaniHB}}</td>\r\n                <td>{{order.SherwaniHip}}</td>\r\n                <td>{{order.SherwaniLength}}</td>\r\n                <td>{{order.SherwaniShoulder}}</td>\r\n                <td>{{order.SherwaniSleeve}}</td>\r\n                <td>{{order.SherwaniWaist}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          </div>\r\n\r\n          \r\n        <div class=\"table-responsive\" *ngIf=\"Trouser\">          \r\n          <table class=\"table table-bordered table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th>#</th>\r\n                <th>Bottom</th>\r\n                <th>Hip</th>\r\n                <th>Inside</th>\r\n                <th>Knee</th>\r\n                <th>Length</th>\r\n                <th>Waist</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let order of MultipleMeasurement;let i=index\">\r\n                <td>{{i}}</td>\r\n                <td>{{order.TrouserBottom}}</td>\r\n                <td>{{order.TrouserHip}}</td>\r\n                <td>{{order.TrouserInside}}</td>\r\n                <td>{{order.TrouserKnee}}</td>\r\n                <td>{{order.TrouserLength}}</td>\r\n                <td>{{order.TrouserWaist}}</td>\r\n                \r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          </div>\r\n\r\n</div>"

/***/ },

/***/ "./src/models/employeeRole.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
var EmployeeRole = (function () {
    function EmployeeRole() {
    }
    return EmployeeRole;
}());
exports.EmployeeRole = EmployeeRole;


/***/ },

/***/ "./src/models/measurement.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
var Measurement = (function () {
    function Measurement() {
    }
    return Measurement;
}());
exports.Measurement = Measurement;


/***/ },

/***/ "./src/services/customer.Service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
var http_2 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/add/operator/do.js");
var Server_1 = __webpack_require__("./src/utilities/Server.ts");
var CustomerService = (function () {
    function CustomerService(_http) {
        this._http = _http;
        this._addCustomerURL = 'customers/addCustomer';
        this._getAllCustomersURL = 'customers/addCustomer';
        this.getCustomersByContactNumberURL = 'customers/getCustomerAndReferancesByContactNumber?ContactNumber=';
        this.getMeasurementURL = 'customers/getMeasurementByCustomerId?CustomerId=';
        this.getAllCustomerNameURL = 'customers/getCustomersByName?FullName=';
        this._addPattern = "customers/addCustomerPattern";
        var server = new Server_1.Server();
        this.baseURL = server.getServerURL();
    }
    // private _addCustomerURL = 'http://localhost:3100/customers/addCustomer';
    //  private _addCustomerURL = "https://ssbotique.herokuapp.com/customers/addCustomer";
    //  private _getAllCustomersURL = 'https://ssbotique.herokuapp.com/customers/getAllCustomers';
    // private getCustomersByContactNumberURL = 'https://ssbotique.herokuapp.com/customers/getCustomerAndReferancesByContactNumber?ContactNumber=';
    // private getMeasurementURL = 'https://ssbotique.herokuapp.com/customers/getMeasurementByCustomerId?CustomerId=';
    // private getAllCustomerNameURL ='https://ssbotique.herokuapp.com/customers/getCustomersByName?FullName=';
    CustomerService.prototype.addCustomer = function (customer) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        console.log(this.baseURL);
        console.log("Customer Received in Service");
        console.log(customer);
        return this._http.post(this.baseURL + this._addCustomerURL, customer, options)
            .map(function (res) { return res.json(); });
    };
    CustomerService.prototype.getAllCustomers = function () {
        return this._http.get(this.baseURL + this._getAllCustomersURL)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); });
    };
    CustomerService.prototype.getCustomersByContactNumber = function (contactNumber) {
        return this._http.get(this.baseURL + this.getCustomersByContactNumberURL + contactNumber)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); });
    };
    CustomerService.prototype.getCustomersByFullName = function (FullName) {
        console.log("Its get in service Full Name ID ", FullName);
        var obj = { id: FullName };
        console.log("object is " + obj);
        return this._http.get(this.baseURL + this.getAllCustomerNameURL + FullName)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); });
    };
    CustomerService.prototype.addPatternService = function (customer_id) {
        var obj = { id: customer_id };
        console.log("Object is");
        console.log(obj);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        console.log("Base URL is " + this.baseURL);
        return this._http.post(this.baseURL + this._addPattern, obj, options)
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); });
    };
    CustomerService.prototype.getCustomersByContactName = function (FullName) {
        return this._http.get(this.baseURL + this.getAllCustomerNameURL + FullName)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); });
    };
    CustomerService.prototype.extractData = function (res) {
        var body = res.json();
        console.log("Extract Data");
        console.log(body);
        return body.data || {};
    };
    CustomerService.prototype.GetMeasurementById = function (CustomerId) {
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        return this._http.get(this.baseURL + this.getMeasurementURL + CustomerId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CustomerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], CustomerService);
    return CustomerService;
    var _a;
}());
exports.CustomerService = CustomerService;


/***/ },

/***/ "./src/services/employee.Service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
var http_2 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/add/operator/do.js");
var Server_1 = __webpack_require__("./src/utilities/Server.ts");
var employeeRole_1 = __webpack_require__("./src/models/employeeRole.ts");
var EmployeeService = (function () {
    function EmployeeService(_http) {
        this._http = _http;
        this._addEmployeeURL = 'employees/addEmployee';
        this.getEmployeeRolesURL = 'app/employees/EmployeeRole.js';
        var server = new Server_1.Server();
        this.baseURL = server.getServerURL();
    }
    EmployeeService.prototype.addEmployee = function (employee) {
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this._http.post(this.baseURL + this._addEmployeeURL, employee, options)
            .map(this.extractData);
    };
    EmployeeService.prototype.getEmployeeRoles = function () {
        var employeeRoles = [];
        var employeeRole = new employeeRole_1.EmployeeRole();
        employeeRole.Name = "Master";
        employeeRole.RoleID = 1;
        employeeRoles.push(employeeRole);
        employeeRole = new employeeRole_1.EmployeeRole();
        employeeRole.Name = "Shoe Maker";
        employeeRole.RoleID = 2;
        employeeRoles.push(employeeRole);
        employeeRole = new employeeRole_1.EmployeeRole();
        employeeRole.Name = "Sticher";
        employeeRole.RoleID = 3;
        employeeRoles.push(employeeRole);
        employeeRole = new employeeRole_1.EmployeeRole();
        employeeRole.Name = "Embroidery worker";
        employeeRole.RoleID = 4;
        employeeRoles.push(employeeRole);
        return employeeRoles;
    };
    EmployeeService.prototype.extractData = function (res) {
        var body = res.json();
        console.log("Extract Data");
        console.log(body);
        return body.data || {};
    };
    EmployeeService.prototype.getEmployees = function () {
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        return this._http.get(this.baseURL + "employees/getAllEmployees", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    EmployeeService.prototype.login = function (username, password) {
        var data;
        data = { UserName: username, Password: password };
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        return this._http.post(this.baseURL + "employees/login", data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    EmployeeService.prototype.getAssignedItems = function (assignedTo) {
        var data;
        data = { AssignedTo: assignedTo };
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        return this._http.post(this.baseURL + "employees/getMyOrderItems", data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    EmployeeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], EmployeeService);
    return EmployeeService;
    var _a;
}());
exports.EmployeeService = EmployeeService;


/***/ },

/***/ "./src/services/measurement.Service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
var http_2 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/add/operator/do.js");
var Server_1 = __webpack_require__("./src/utilities/Server.ts");
var MeasurementService = (function () {
    function MeasurementService(_http) {
        this._http = _http;
        this._addMeasurmentURL = 'customers/addMeasurement';
        var server = new Server_1.Server();
        this.baseURL = server.getServerURL();
    }
    MeasurementService.prototype.addMeasurement = function (measurement) {
        console.log("Add Measurement is called in Service");
        console.log(measurement);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this._http.post(this.baseURL + this._addMeasurmentURL, measurement, options)
            .map(function (res) { return res.json(); });
    };
    MeasurementService.prototype.extractData = function (res) {
        var body = res.json();
        console.log("Extract Data");
        console.log(body);
        return body.data || {};
    };
    MeasurementService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], MeasurementService);
    return MeasurementService;
    var _a;
}());
exports.MeasurementService = MeasurementService;


/***/ },

/***/ "./src/utilities/Server.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
var Server = (function () {
    function Server() {
    }
    Server.prototype.getServerURL = function () {
        // return "http://localhost:3100/";
        return "https://botiquetest.azurewebsites.net/";
    };
    return Server;
}());
exports.Server = Server;


/***/ }

});
//# sourceMappingURL=17.map