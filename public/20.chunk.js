webpackJsonpac__name_([20],{

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
        this.formshow = true;
        this.Updateformshow = true;
        this.HeaderTitle = false;
        this.HeaderTitle1 = false;
        this.WaistCoat1 = false;
        this.ShalwarKameez1 = false;
        this.Coat1 = false;
        this.Sherwani1 = false;
        this.Pant1 = false;
        this.Trouser1 = false;
        this.Shawl1 = false;
    }
    ShowMeasurementComponent.prototype.UpdateMeasurement = function (order) {
        var _this = this;
        if (this.ShalwarKameez1 == true) {
            if (order.ShalwarKameezLength == "" || order.ShalwarKameezChest == "" || order.ShalwarKameezWaist == "" || order.ShalwarKameezHip == "" || order.ShalwarKameezSleeve == "" || order.ShalwarKameezShoulder == "" || order.ShalwarKameezNeck == "" || order.ShalwarKameezBysep == "" || order.ShalwarKameezSLength == "" || order.ShalwarKameezBottom == "") {
                $("#snackbar").html("Please fill the empty Field");
                this.showToast();
            }
            else {
                console.log(order);
                this._measurementService.addMeasurement(order).subscribe(function (res) {
                    console.log(res);
                    if (res.code == 200) {
                        $("#snackbar").html("Measurement Update Successfully");
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
        else if (this.Coat1 == true) {
            if (order.CoatLength == "" || order.CoatChest == "" || order.CoatWaist == "" || order.CoatHip == "" || order.CoatSleeve == "" || order.CoatShoulder == "" || order.CoatNeck == "" || order.CoatBysep == "" || order.CoatHB == "" || order.CoatCB == "") {
                $("#snackbar").html("Please fill the empty Field");
                this.showToast();
            }
            else {
                console.log(order);
                this._measurementService.addMeasurement(order).subscribe(function (res) {
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
        else if (this.Sherwani1 == true) {
            if (order.SherwaniLength == "" || order.SherwaniChest == "" || order.SherwaniWaist == "" || order.SherwaniHip == "" || order.SherwaniSleeve == "" || order.SherwaniShoulder == "" || order.SherwaniNeck == "" || order.SherwaniBysep == "" || order.SherwaniHB == "" || order.SherwaniCB == "") {
                $("#snackbar").html("Please fill the empty Field");
                this.showToast();
            }
            else {
                console.log(order);
                this._measurementService.addMeasurement(order).subscribe(function (res) {
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
        else if (this.WaistCoat1 == true) {
            if (order.CoatLength == "" || order.CoatChest == "" || order.CoatWaist == "" || order.CoatHip == "" || order.CoatHip == "" || order.CoatShoulder == "" || order.CoatNeck == "" || order.CoatBysep == "" || order.CoatHB == "" || order.CoatCB == "") {
                $("#snackbar").html("Please fill the empty Field");
                this.showToast();
            }
            else {
                console.log(order);
                this._measurementService.addMeasurement(order).subscribe(function (res) {
                    console.log(res);
                    if (res.code == 200) {
                        $("#snackbar").html("Update Values Successfully!");
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
        else if (this.Pant1 == true) {
            if (order.PentWaist == "" || order.PentHip == "" || order.PentLength == "" || order.PantKnee == "" || order.PentBottom == "" || order.PentInside == "") {
                $("#snackbar").html("Please fill the empty Field");
                this.showToast();
            }
            else {
                console.log(order);
                this._measurementService.addMeasurement(order).subscribe(function (res) {
                    console.log(res);
                    if (res.code == 200) {
                        $("#snackbar").html("Update Values Successfully");
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
        else if (this.Trouser1 == true) {
            if (order.TrouserWaist == "" || order.TrouserHip == "" || order.TrouserLength == "" || order.TrouserKnee == "" || order.TrouserBottom == "" || order.TrouserInside == "") {
                $("#snackbar").html("Please fill the empty Field");
                this.showToast();
            }
            else {
                console.log(order);
                this._measurementService.addMeasurement(order).subscribe(function (res) {
                    console.log(res);
                    if (res.code == 200) {
                        $("#snackbar").html("Update values Successfully");
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
    ShowMeasurementComponent.prototype.addMeasurement = function (Order) {
        var _this = this;
        console.log('order values', Order);
        if (this.ShalwarKameez == true) {
            if (this.newMeasurement.ShalwarKameezLength == "" || this.newMeasurement.ShalwarKameezChest == "" || this.newMeasurement.ShalwarKameezWaist == "" || this.newMeasurement.ShalwarKameezHip == "" || this.newMeasurement.ShalwarKameezSleeve == "" || this.newMeasurement.ShalwarKameezShoulder == "" || this.newMeasurement.ShalwarKameezNeck == "" || this.newMeasurement.ShalwarKameezBysep == "" || this.newMeasurement.ShalwarKameezSLength == "" || this.newMeasurement.ShalwarKameezBottom == "") {
                $("#snackbar").html("Please fill the empty Field");
                this.showToast();
            }
            else {
                console.log(this.newMeasurement);
                this._measurementService.addMeasurement(Order).subscribe(function (res) {
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
                _this.showToast();
            }
            else {
                _this.customers = null;
                $("#snackbar").html("Data not Available");
                _this.showToast();
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
    ShowMeasurementComponent.prototype.printWaistCoat = function () {
        this.formshow = false;
        this.allFalse();
        this.WaistCoat = true;
        this.HeaderTitle = true;
    };
    ShowMeasurementComponent.prototype.UpdateTrouser = function () {
        this.formshow = false;
        this.allFalse();
        this.HeaderTitle = true;
        this.Trouser1 = true;
    };
    ShowMeasurementComponent.prototype.UpdatePant = function () {
        this.formshow = false;
        this.allFalse();
        this.HeaderTitle = true;
        this.Pant1 = true;
    };
    ShowMeasurementComponent.prototype.UpdateShalwarKameez = function () {
        this.Updateformshow = false;
        this.formshow = false;
        this.allFalse();
        this.HeaderTitle = true;
        this.ShalwarKameez1 = true;
    };
    ShowMeasurementComponent.prototype.UpdateCoat = function () {
        this.Updateformshow = false;
        this.formshow = false;
        this.allFalse();
        this.HeaderTitle = true;
        this.Coat1 = true;
    };
    ShowMeasurementComponent.prototype.UpdateSherwani = function () {
        this.Updateformshow = false;
        this.formshow = false;
        this.allFalse();
        this.HeaderTitle = true;
        this.Sherwani1 = true;
    };
    ShowMeasurementComponent.prototype.UpdateWaistCoat = function () {
        this.Updateformshow = false;
        this.formshow = false;
        this.allFalse();
        this.HeaderTitle = true;
        this.WaistCoat1 = true;
    };
    ShowMeasurementComponent.prototype.printShalwarKameez = function () {
        this.formshow = false;
        this.allFalse();
        this.ShalwarKameez = true;
        this.HeaderTitle1 = true;
    };
    ShowMeasurementComponent.prototype.printPant = function () {
        this.formshow = false;
        this.allFalse();
        this.Pant = true;
        this.HeaderTitle1 = true;
    };
    ShowMeasurementComponent.prototype.printCoat = function () {
        this.formshow = false;
        this.allFalse();
        this.Coat = true;
        this.HeaderTitle1 = true;
    };
    ShowMeasurementComponent.prototype.printSherwani = function () {
        this.formshow = false;
        this.allFalse();
        this.Sherwani = true;
        this.HeaderTitle1 = true;
    };
    ShowMeasurementComponent.prototype.printTrouser = function () {
        this.formshow = false;
        this.allFalse();
        this.Trouser = true;
        this.HeaderTitle1 = true;
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
        else if (elem == "WaistCoat") {
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

module.exports = ".add-btn{\r\n    border:none;\r\n    height:46px;\r\n    padding:10px 2px;\r\n    min-width:250px;\r\n    margin:0 auto;\r\n  }\r\n\r\n  fieldset{\r\n    border: 1px solid #ccc;\r\n    padding: 10px;\r\n  }\r\n  .customername\r\n  {\r\n    width: 174px;\r\n    height: 40px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 0;\r\n    padding-left: 5px;\r\n    color: #555555;\r\n    padding: 10px;\r\n    margin: 25px auto;\r\n  }\r\n.printbtn\r\n{\r\n  font-size: 15px;\r\n  background: transparent;\r\n  border: none;\r\n  background-color: #23ab23;\r\n  width: 87px;\r\n  height: 29px;\r\n  color: white;\r\n  font-size: 16px;\r\n  border-radius: 5px;\r\n}\r\n  legend{\r\n    color: black;\r\n    font-size: 22px;\r\n    border-bottom: none;\r\n    padding-left: 30px;\r\n  }\r\n\r\n  .common-form{\r\n    -webkit-box-shadow: 0 10px 6px -6px #777;\r\n\t   -moz-box-shadow: 0 10px 6px -6px #777;\r\n\t        box-shadow: 0 10px 6px -6px #777;\r\n  }\r\n\r\n  .row{\r\n    margin-top:20px;\r\n  }\r\n  .row-2{\r\n    margin-top:100px;\r\n  }\r\n\r\n  .measurementsType{\r\n    width:350px;\r\n    height:40px;\r\n    border:1px solid #ccc;\r\n    border-radius: 0;\r\n    padding-left:5px;\r\n    color:#555555;\r\n    padding:10px;\r\n    margin:25px auto;\r\n  }\r\n\r\n  .record-text{\r\n    margin:25px auto;\r\n    text-align: center;\r\n    columns: #222222;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n\r\n\r\n  /* The snackbar - position it at the bottom and in the middle of the screen */\r\n#snackbar {\r\n  visibility: hidden; /* Hidden by default. Visible on click */\r\n  min-width: 250px; /* Set a default minimum width */\r\n  margin-left: -125px; /* Divide value of min-width by 2 */\r\n  background-color: #333; /* Black background color */\r\n  color: #fff; /* White text color */\r\n  text-align: center; /* Centered text */\r\n  border-radius: 2px; /* Rounded borders */\r\n  padding: 16px; /* Padding */\r\n  position: fixed; /* Sit on top of the screen */\r\n  z-index: 1; /* Add a z-index if needed */\r\n  left: 50%; /* Center the snackbar */\r\n  bottom: 30px; /* 30px from the bottom */\r\n}\r\n\r\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\r\n#snackbar.show {\r\n  visibility: visible; /* Show the snackbar */\r\n\r\n/* Add animation: Take 0.5 seconds to fade in and out the snackbar. \r\nHowever, delay the fade out process for 2.5 seconds */\r\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n/* Animations to fade the snackbar in and out */\r\n@-webkit-keyframes fadein {\r\n  from {bottom: 0; opacity: 0;} \r\n  to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n  from {bottom: 0; opacity: 0;}\r\n  to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n  from {bottom: 30px; opacity: 1;} \r\n  to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n  from {bottom: 30px; opacity: 1;}\r\n  to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n#selectType{\r\n  display:none;\r\n  text-align: center;\r\n}"

/***/ },

/***/ "./src/app/showmeasurement/show.Measurement.template.html":
/***/ function(module, exports) {

module.exports = "<div class=\"headertitle\" *ngIf=\"formshow\">\r\n<h1>Show Measurement Form</h1>\r\n</div>\r\n<div id=\"snackbar\"></div>\r\n\r\n<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 col-lg-6 col-sm-6 offset-lg-3 offset-md-3 offset-sm-3 common-form\">\r\n      <div class=\"form-group\"  *ngIf=\"formshow\">\r\n        \r\n                <label for=\"normal-field\" class=\"col-form-label\">Enter Contact Name</label>\r\n        \r\n                <input type=\"text\" [(ngModel)]=\"newMeasurement.CustomerContactName\" id=\"normal-field\" class=\"form-control custom-inputs\"\r\n                  placeholder=\"Please Enter Customer Contact Name\">\r\n        \r\n              </div>\r\n              <div class=\"form-group\" *ngIf=\"formshow\">\r\n                <button (click)=\"searchByName()\" class=\"btn btn-primary\">Search</button>\r\n              </div>\r\n      <div class=\"form-group\" *ngIf=\"formshow\">\r\n\r\n        <label for=\"normal-field\" class=\"col-form-label\">Enter Contact Number</label>\r\n\r\n        <input type=\"text\" [(ngModel)]=\"newMeasurement.CustomerContactNumber\" id=\"normal-field\" class=\"form-control custom-inputs\"\r\n          placeholder=\"Please Enter Customer Contact Number\">\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\" *ngIf=\"formshow\">\r\n        <button (click)=\"search()\" class=\"btn btn-primary\">Search</button>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\" *ngIf=\"formshow\">\r\n        <select class=\"customername\" (change)=\"getcutomerId($event.target.value)\">\r\n          <option disabled selected>Select Customers</option>\r\n          <option *ngFor='let customer of customers' value={{customer._id}}>\r\n            {{customer.FullName}}\r\n          </option>\r\n        </select>\r\n\r\n        <select class=\"measurementsType\" (change)=\"getForms($event.target.value)\">\r\n          <option disabled selected>Select Option</option>\r\n          <option value=\"Shalwar Kameez\">Shalwar Kameez</option>\r\n          <option value=\"Coat\">Coat</option>\r\n          <option value=\"Sherwani\">Sherwani</option>\r\n          <option value=\"Waist Coat\">Waist Coat</option>\r\n          <option value=\"Pant\">Pant</option>\r\n          <option value=\"Trouser\">Trouser</option>\r\n\r\n        </select>\r\n      </div>\r\n\r\n  <!--     <div class=\"row\" id=\"selectType\">\r\n        <h1 class=\"record-text\">Record Measurements for:</h1>\r\n       \r\n      </div> -->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row row-2\">\r\n\r\n    </div>\r\n   \r\n    <div class=\"table-responsive\" *ngIf=\"WaistCoat\">   \r\n        <div class=\"headertitle\" *ngIf=\"HeaderTitle\">\r\n            <h1>Waist Coat</h1>\r\n            </div>       \r\n      <table class=\"table table-bordered table-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Length</th>\r\n            <th>Chest</th>\r\n            <th>Waist</th>\r\n            <th>Hip</th>\r\n            <th>Shoulder</th>\r\n            <th>Neck</th>\r\n            <th>HB</th>\r\n            <th>CB</th>\r\n            <th *ngIf=\"Updateformshow\">Update</th>\r\n            <th *ngIf=\"formshow\">Print</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let order of MultipleMeasurement;let i=index\">\r\n            <td>{{i}}</td>\r\n            <td>{{order.CoatLength}}</td>\r\n            <td>{{order.CoatChest}}</td>\r\n            <td>{{order.CoatWaist}}</td>\r\n            <td>{{order.CoatHip}}</td>\r\n            <td>{{order.CoatShoulder}}</td>\r\n            <td>{{order.CoatNeck}}</td>\r\n            <td>{{order.CoatHB}}</td>\r\n            <td>{{order.CoatCB}}</td>\r\n            <td *ngIf=\"Updateformshow\"><button class=\"printbtn\" (click)=\"UpdateWaistCoat()\" >Update</button></td>\r\n            <td *ngIf=\"formshow\"><button class=\"printbtn\" (click)=\"printWaistCoat()\" >Print<i class=\"fa fa-print\"></i></button></td>\r\n           \r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      </div>\r\n \r\n\r\n    <div class=\"table-responsive\" *ngIf=\"ShalwarKameez\">  \r\n        <div class=\"headertitle\" *ngIf=\"HeaderTitle1\">\r\n            <h1>Shalwar kameez</h1>\r\n            </div>        \r\n    <table class=\"table table-bordered table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>#</th>\r\n          <th>Bottom</th>\r\n          <th>SLength</th>\r\n          <th>Bysep</th>\r\n          <th>Neck</th>\r\n          <th>Shoulder</th>\r\n          <th>Sleeve</th>\r\n          <th>Hip</th>\r\n          <th>Waist</th>\r\n          <th>Chest</th>\r\n          <th>Length</th>\r\n          <th *ngIf=\"formshow\">Update</th>\r\n          <th *ngIf=\"formshow\">Print</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let order of MultipleMeasurement;let i=index\">\r\n          <td>{{i}}</td>\r\n          <td>{{order.ShalwarKameezBottom}}</td>\r\n          <td>{{order.ShalwarKameezSLength}}</td>\r\n          <td>{{order.ShalwarKameezBysep}}</td>\r\n          <td>{{order.ShalwarKameezNeck}}</td>\r\n          <td>{{order.ShalwarKameezShoulder}}</td>\r\n          <td>{{order.ShalwarKameezSleeve}}</td>\r\n          <td>{{order.ShalwarKameezHip}}</td>\r\n          <td>{{order.ShalwarKameezWaist}}</td>\r\n          <td>{{order.ShalwarKameezChest}}</td>\r\n          <td>{{order.ShalwarKameezLength}}</td>\r\n          <td *ngIf=\"formshow\"><button class=\"printbtn\" (click)=\"UpdateShalwarKameez()\" >Update</button></td>\r\n          <td *ngIf=\"formshow\"><button class=\"printbtn\" (click)=\"printShalwarKameez()\" >Print<i class=\"fa fa-print\"></i></button></td> \r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    </div>\r\n\r\n    <div class=\"table-responsive\" *ngIf=\"Pant\"> \r\n        <div class=\"headertitle\" *ngIf=\"HeaderTitle1\">\r\n            <h1>Pant</h1>\r\n            </div>            \r\n      <table class=\"table table-bordered table-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Bottom</th>\r\n            <th>Hip</th>\r\n            <th>Inside</th>\r\n            <th>Knee</th>\r\n            <th>Length</th>\r\n            <th>Waist</th>\r\n            <th *ngIf=\"formshow\">Update</th>\r\n            <th *ngIf=\"formshow\">Print</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let order of MultipleMeasurement;let i=index\">\r\n            <td>{{i}}</td>\r\n            <td>{{order.PentBottom}}</td>\r\n            <td>{{order.PentHip}}</td>\r\n            <td>{{order.PentInside}}</td>\r\n            <td>{{order.PentKnee}}</td>\r\n            <td>{{order.PentLength}}</td>\r\n            <td>{{order.PentWaist}}</td>\r\n            <td *ngIf=\"formshow\"><button class=\"printbtn\" (click)=\"UpdatePant()\" >Update</button></td>\r\n            <td *ngIf=\"formshow\"><button class=\"printbtn\" (click)=\"printPant()\" >Print<i class=\"fa fa-print\"></i></button></td>        \r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      </div>\r\n\r\n      <div class=\"table-responsive\" *ngIf=\"Coat\">  \r\n          <div class=\"headertitle\" *ngIf=\"HeaderTitle1\">\r\n              <h1>Coat</h1>\r\n              </div>            \r\n        <table class=\"table table-bordered table-striped\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>Bottom</th>\r\n              <th>SLength</th>\r\n              <th>Bysep</th>\r\n              <th>Neck</th>\r\n              <th>Shoulder</th>\r\n              <th>Sleeve</th>\r\n              <th>Hip</th>\r\n              <th>Waist</th>\r\n              <th>Chest</th>\r\n              <th>Length</th>\r\n              <th *ngIf=\"formshow\">Update</th>\r\n              <th *ngIf=\"formshow\">Print</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let order of MultipleMeasurement;let i=index\">\r\n              <td>{{i}}</td>\r\n              <td>{{order.CoatBysep}}</td>\r\n              <td>{{order.CoatCB}}</td>\r\n              <td>{{order.CoatChest}}</td>\r\n              <td>{{order.CoatHB}}</td>\r\n              <td>{{order.CoatHip}}</td>\r\n              <td>{{order.CoatLength}}</td>\r\n              <td>{{order.CoatNeck}}</td>\r\n              <td>{{order.CoatShoulder}}</td>\r\n              <td>{{order.CoatSleeve}}</td>\r\n              <td>{{order.CoatWaist}}</td>\r\n              <td *ngIf=\"formshow\"><button class=\"printbtn\" (click)=\"UpdateCoat()\" >Update</button></td>             \r\n              <td *ngIf=\"formshow\"><button class=\"printbtn\" (click)=\"printCoat()\" >Print<i class=\"fa fa-print\"></i></button></td>\r\n              \r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        </div>\r\n\r\n        <div class=\"table-responsive\" *ngIf=\"Sherwani\"> \r\n          <fieldset *ngFor=\"let  order of MultipleMeasurement\">\r\n            <div class=\"headertitle\" *ngIf=\"HeaderTitle1\">\r\n                <h1>Sherwani</h1>\r\n                </div>           \r\n          <table class=\"table table-bordered table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th>#</th>\r\n                <th>Sep</th>\r\n                <th>CB</th>\r\n                <th>Chest</th>\r\n                <th>HB</th>\r\n                <th>Hip</th>\r\n                <th>Length</th>\r\n                <th>Shoulder</th>\r\n                <th>Sleeve</th>\r\n                <th>Waist</th>\r\n                <th *ngIf=\"formshow\">Update</th>\r\n                <th *ngIf=\"formshow\">Print</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let order of MultipleMeasurement;let i=index\">\r\n                <td>{{i}}</td>\r\n                <td>{{order.SherwaniBysep}}</td>\r\n                <td>{{order.SherwaniCB}}</td>\r\n                <td>{{order.SherwaniChest}}</td>\r\n                <td>{{order.SherwaniHB}}</td>\r\n                <td>{{order.SherwaniHip}}</td>\r\n                <td>{{order.SherwaniLength}}</td>\r\n                <td>{{order.SherwaniShoulder}}</td>\r\n                <td>{{order.SherwaniSleeve}}</td>\r\n                <td>{{order.SherwaniWaist}}</td>\r\n                <td *ngIf=\"formshow\"><button class=\"printbtn\" (click)=\"UpdateSherwani()\" >Update</button></td>\r\n                <td *ngIf=\"formshow\"><button class=\"printbtn\" (click)=\"printSherwani()\" >Print<i class=\"fa fa-print\"></i></button></td>\r\n                \r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          </fieldset>\r\n          </div>\r\n\r\n          \r\n        <div class=\"table-responsive\" *ngIf=\"Trouser\">   \r\n            <div class=\"headertitle\" *ngIf=\"HeaderTitle1\">\r\n                <h1>Trouser</h1>\r\n                </div>            \r\n          <table class=\"table table-bordered table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th>#</th>\r\n                <th>Bottom</th>\r\n                <th>Hip</th>\r\n                <th>Inside</th>\r\n                <th>Knee</th>\r\n                <th>Length</th>\r\n                <th>Waist</th>\r\n                <th *ngIf=\"formshow\">Update</th>\r\n                <th *ngIf=\"formshow\">Print</th>\r\n              <th> </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let order of MultipleMeasurement;let i=index\">\r\n                <td>{{i}}</td>\r\n                <td>{{order.TrouserBottom}}</td>\r\n                <td>{{order.TrouserHip}}</td>\r\n                <td>{{order.TrouserInside}}</td>\r\n                <td>{{order.TrouserKnee}}</td>\r\n                <td>{{order.TrouserLength}}</td>\r\n                <td>{{order.TrouserWaist}}</td>\r\n                <td *ngIf=\"formshow\"><button class=\"printbtn\" (click)=\"UpdateTrouser()\" >Update</button></td>\r\n                \r\n                <td *ngIf=\"formshow\"><button class=\"printbtn\" (click)=\"printTrouser()\" >Print<i class=\"fa fa-print\"></i></button></td>\r\n                \r\n                \r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          \r\n          </div>\r\n          \r\n          \r\n      <div class=\"shalwar\" *ngIf=\"ShalwarKameez1\">\r\n          <!-- Shalwar Kameez Div -->\r\n  \r\n          <fieldset *ngFor=\"let order of MultipleMeasurement\">\r\n  \r\n            <legend>Shalwar Kameez</legend>\r\n           \r\n            \r\n            <div class=\"form-group\">\r\n              <label for=\"normal-field\" class=\"col-form-label\">Please Enter Length</label>\r\n  \r\n              <input type=\"text\" #lengthRef=\"ngModel\" [(ngModel)]=\"order.ShalwarKameezLength\" id=\"normal-field\" class=\"form-control custom-inputs\"\r\n                placeholder=\"Length Must Be Numeric\" required pattern=\"[0.0-9.0]*\" ngModel>\r\n                <div *ngIf=\"lengthRef.errors && (lengthRef.dirty || lengthRef.touched)\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!lengthRef.errors.required\">\r\n                  Length Must Be Required\r\n                </div>\r\n                <div [hidden]=\"!lengthRef.errors.pattern\">\r\n                    Please Input Only Numeric Value\r\n                  </div>\r\n                \r\n                </div>\r\n            </div>\r\n  \r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"normal-field\" class=\"col-form-label\"> Please Enter Chest </label>\r\n  \r\n              <input type=\"text\" #chestRef=\"ngModel\" [(ngModel)]=\"order.ShalwarKameezChest\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Length Must Be Numeric\"required pattern=\"[0.0-9.0]*\" ngModel>\r\n                <div *ngIf=\"chestRef.errors && (chestRef.dirty || chestRef.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!chestRef.errors.required\">\r\n                      Length Must Be Required\r\n                    </div>\r\n                    <div [hidden]=\"!chestRef.errors.pattern\">\r\n                        Please Input Only Numeric Value\r\n                      </div>\r\n                    </div>\r\n  \r\n            </div>\r\n  \r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"normal-field\" class=\"col-form-label\">Please Enter Waist</label>\r\n  \r\n              <input type=\"text\" #waistRef=\"ngModel\" [(ngModel)]=\"order.ShalwarKameezWaist\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Waist Must Be Numeric\"\r\n                required pattern=\"[0.0-9.0]*\" ngModel>\r\n                <div *ngIf=\"waistRef.errors && (waistRef.dirty || waistRef.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!waistRef.errors.required\">\r\n                      Length Must Be Required\r\n                    </div>\r\n                    <div [hidden]=\"!waistRef.errors.pattern\">\r\n                        Please Input Only Numeric Value\r\n                      </div>\r\n                    </div>\r\n  \r\n            </div>\r\n  \r\n  \r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"normal-field\" class=\"col-form-label\"> Please Enter Hip Measurement</label>\r\n  \r\n              <input type=\"text\" #hipRef=\"ngModel\" [(ngModel)]=\"order.ShalwarKameezHip\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Hip Measurement Must Be Numeric\" \r\n                required pattern=\"[0.0-9.0]*\" ngModel>\r\n                <div *ngIf=\"hipRef.errors && (hipRef.dirty || hipRef.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!hipRef.errors.required\">\r\n                      Length Must Be Required\r\n                    </div>\r\n                    <div [hidden]=\"!hipRef.errors.pattern\">\r\n                        Please Input Only Numeric Value\r\n                      </div>\r\n                    </div>\r\n  \r\n            </div>\r\n  \r\n  \r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"normal-field\" class=\"col-form-label\">Please Enter Sleeve Length</label>\r\n  \r\n              <input type=\"text\" #sleeveRef=\"ngModel\" [(ngModel)]=\"order.ShalwarKameezSleeve\" id=\"normal-field\" class=\"form-control custom-inputs\"\r\n                placeholder=\"Length Must Be Numeric\" required pattern=\"[0.0-9.0]*\" ngModel>\r\n                <div *ngIf=\"sleeveRef.errors && (sleeveRef.dirty || sleeveRef.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!sleeveRef.errors.required\">\r\n                      Length Must Be Required\r\n                    </div>\r\n                    <div [hidden]=\"!sleeveRef.errors.pattern\">\r\n                        Please Input Only Numeric Value\r\n                      </div>\r\n                    </div>\r\n  \r\n            </div>\r\n  \r\n  \r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"normal-field\" class=\"col-form-label\">Please Enter Shoulder Length</label>\r\n  \r\n              <input type=\"text\" #shRef=\"ngModel\" [(ngModel)]=\"order.ShalwarKameezShoulder\" id=\"normal-field\" class=\"form-control custom-inputs\"\r\n                placeholder=\"Length Must Be Numeric\" required pattern=\"[0.0-9.0]*\" ngModel>\r\n                <div *ngIf=\"shRef.errors && (shRef.dirty || shRef.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!shRef.errors.required\">\r\n                      Length Must Be Required\r\n                    </div>\r\n                    <div [hidden]=\"!shRef.errors.pattern\">\r\n                        Please Input Only Numeric Value\r\n                      </div>\r\n                    </div>\r\n  \r\n            </div>\r\n  \r\n  \r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"normal-field\" class=\"col-form-label\">Please Enter Neck Measurement</label>\r\n  \r\n              <input type=\"text\" #neckRef=\"ngModel\" [(ngModel)]=\"order.ShalwarKameezNeck\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Neck Measurement Must Be Numeric\" required pattern=\"[0.0-9.0]*\" ngModel>\r\n                <div *ngIf=\"neckRef.errors && (neckRef.dirty || neckRef.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!neckRef.errors.required\">\r\n                      Length Must Be Required\r\n                    </div>\r\n                    <div [hidden]=\"!neckRef.errors.pattern\">\r\n                        Please Input Only Numeric Value\r\n                      </div>\r\n                    </div>\r\n  \r\n            </div>\r\n  \r\n  \r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"normal-field\" class=\"col-form-label\">Please Enter Bysep Length</label>\r\n  \r\n              <input type=\"text\" #bysepRef=\"ngModel\" [(ngModel)]=\"order.ShalwarKameezBysep\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Length Must Be Numeric\" required pattern=\"[0.0-9.0]*\" ngModel>\r\n                <div *ngIf=\"bysepRef.errors && (bysepRef.dirty || bysepRef.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!bysepRef.errors.required\">\r\n                      Length Must Be Required\r\n                    </div>\r\n                    <div [hidden]=\"!bysepRef.errors.pattern\">\r\n                        Please Input Only Numeric Value\r\n                      </div>\r\n                    </div>\r\n  \r\n            </div>\r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"normal-field\" class=\"col-form-label\">Please Enter S. Length</label>\r\n  \r\n              <input type=\"text\" #sRef=\"ngModel\" [(ngModel)]=\"order.ShalwarKameezSLength\" id=\"normal-field\" class=\"form-control custom-inputs\"\r\n                placeholder=\"Length Must Be Numeric\" required pattern=\"[0.0-9.0]*\" ngModel>\r\n                <div *ngIf=\"sRef.errors && (sRef.dirty || sRef.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!sRef.errors.required\">\r\n                      Length Must Be Required\r\n                    </div>\r\n                    <div [hidden]=\"!sRef.errors.pattern\">\r\n                        Please Input Only Numeric Value\r\n                      </div>\r\n                    </div>\r\n  \r\n            </div>\r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"normal-field\" class=\"col-form-label\">Please Enter Bottom</label>\r\n  \r\n              <input type=\"text\" #bottomRef=\"ngModel\" [(ngModel)]=\"order.ShalwarKameezBottom\" id=\"normal-field\" class=\"form-control custom-inputs\"\r\n                placeholder=\"Bottom Must Be Numeric\" required pattern=\"[0.0-9.0]*\" ngModel>\r\n                <div *ngIf=\"bottomRef.errors && (bottomRef.dirty || bottomRef.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!bottomRef.errors.required\">\r\n                      Length Must Be Required\r\n                    </div>\r\n                    <div [hidden]=\"!bottomRef.errors.pattern\">\r\n                        Please Input Only Numeric Value\r\n                      </div>\r\n                    </div>\r\n  \r\n            </div>\r\n  \r\n            <button (click)=\"UpdateMeasurement(order)\" class=\"btn btn-success add-btn\">Update Measurement</button>\r\n  \r\n          </fieldset>\r\n  \r\n        </div>\r\n      <div class=\"shalwar\" *ngIf=\"Coat1\">\r\n          <!-- Coat -div -->\r\n  \r\n          <fieldset *ngFor=\"let order of MultipleMeasurement\">\r\n  \r\n            <legend>Coat</legend>\r\n      \r\n            <div class=\"form-group\">\r\n              <label for=\"normal-field\" class=\"col-form-label\">Please Enter Coat Length</label>\r\n  \r\n              <input type=\"text\" #coatRef=\"ngModel\" [(ngModel)]=\"order.CoatLength\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Bottom Must Be Numeric\" required pattern=\"[0.0-9.0]*\" ngModel>\r\n                <div *ngIf=\"coatRef.errors && (coatRef.dirty || coatRef.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!coatRef.errors.required\">\r\n                      Length Must Be Required\r\n                    </div>\r\n                    </div>\r\n  \r\n            </div>\r\n  \r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"normal-field\" class=\"col-form-label\">Please Enter Coat Chest</label>\r\n  \r\n              <input type=\"text\" #coatCRef=\"ngModel\" [(ngModel)]=\"order.CoatChest\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Length Must Be Numeric\"required pattern=\"[0.0-9.0]*\" ngModel>\r\n                <div *ngIf=\"coatCRef.errors && (coatCRef.dirty || coatCRef.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!coatCRef.errors.required\">\r\n                      Length Must Be Required\r\n                    </div>\r\n                    </div>\r\n  \r\n            </div>\r\n  \r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"normal-field\" class=\"col-form-label\">Please Enter coat Waist</label>\r\n  \r\n              <input type=\"text\" #coatWRef=\"ngModel\" [(ngModel)]=\"order.CoatWaist\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Waist Length Must Be Numeric\"required pattern=\"[0.0-9.0]*\" ngModel>\r\n                <div *ngIf=\"coatWRef.errors && (coatWRef.dirty || coatWRef.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!coatWRef.errors.required\">\r\n                      Length Must Be Required\r\n                    </div>\r\n                    </div>\r\n  \r\n            </div>\r\n  \r\n  \r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"normal-field\" class=\"col-form-label\">Please Enter Hip Measurement</label>\r\n  \r\n              <input type=\"text\" #coatHRef=\"ngModel\" [(ngModel)]=\"order.CoatHip\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Hip Measurement Length Must Be Numeric\" required pattern=\"[0.0-9.0]*\" ngModel>\r\n                <div *ngIf=\"coatHRef.errors && (coatHRef.dirty || coatHRef.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!coatHRef.errors.required\">\r\n                      Length Must Be Required\r\n                    </div>\r\n                    </div>\r\n  \r\n            </div>\r\n  \r\n  \r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"normal-field\" class=\"col-form-label\">Please Enter Sleeve Length</label>\r\n  \r\n              <input type=\"text\" #coatSLRef=\"ngModel\" [(ngModel)]=\"order.CoatSleeve\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Sleeve Length Must Be Numeric\" required pattern=\"[0.0-9.0]*\" ngModel>\r\n                <div *ngIf=\"coatSLRef.errors && (coatSLRef.dirty || coatSLRef.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!coatSLRef.errors.required\">\r\n                      Length Must Be Required\r\n                    </div>\r\n                    </div>\r\n  \r\n            </div>\r\n  \r\n  \r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"normal-field\" class=\"col-form-label\">Please Enter Shoulder Length</label>\r\n  \r\n              <input type=\"text\" #coatSORef=\"ngModel\" [(ngModel)]=\"order.CoatShoulder\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Shoulder Length Must Be Numeric\" required pattern=\"[0.0-9.0]*\" ngModel>\r\n                <div *ngIf=\"coatSORef.errors && (coatSORef.dirty || coatSORef.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!coatSORef.errors.required\">\r\n                      Length Must Be Required\r\n                    </div>\r\n                    </div>\r\n  \r\n            </div>\r\n  \r\n  \r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"normal-field\" class=\"col-form-label\">Please Enter Neck Measurement</label>\r\n  \r\n              <input type=\"text\" #coatNeckRef=\"ngModel\" [(ngModel)]=\"order.CoatNeck\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Neck Measurement Must Be Numeric\" required pattern=\"[0.0-9.0]*\" ngModel>\r\n                <div *ngIf=\"coatNeckRef.errors && (coatNeckRef.dirty || coatNeckRef.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!coatNeckRef.errors.required\">\r\n                      Length Must Be Required\r\n                    </div>\r\n                    </div>\r\n  \r\n            </div>\r\n  \r\n  \r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"normal-field\" class=\"col-form-label\">Please Enter Bysep Length</label>\r\n  \r\n              <input type=\"text\" #coatBysepRef=\"ngModel\" [(ngModel)]=\"order.CoatBysep\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Length Must Be Numeric\" required pattern=\"[0.0-9.0]*\" ngModel>\r\n                <div *ngIf=\"coatBysepRef.errors && (coatBysepRef.dirty || coatBysepRef.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!coatBysepRef.errors.required\">\r\n                      Length Must Be Required\r\n                    </div>\r\n                    </div>\r\n  \r\n            </div>\r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"normal-field\" class=\"col-form-label\">Please Enter H.B</label>\r\n  \r\n              <input type=\"text\" #coatHBRef=\"ngModel\" [(ngModel)]=\"order.CoatHB\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"H.B Length Must Be Numeric\" required pattern=\"[0.0-9.0]*\" ngModel>\r\n                <div *ngIf=\"coatHBRef.errors && (coatHBRef.dirty || coatHBRef.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!coatHBRef.errors.required\">\r\n                      Length Must Be Required\r\n                    </div>\r\n                    </div>\r\n  \r\n            </div>\r\n   \r\n            <div class=\"form-group\">\r\n              <label for=\"normal-field\" class=\"col-form-label\">Please Enter C.B</label>\r\n  \r\n              <input type=\"text\"  #coatCBRef=\"ngModel\" [(ngModel)]=\"order.CoatCB\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"C.B Length Must Be Numeric\" required pattern=\"[0.0-9.0]*\" ngModel>\r\n                <div *ngIf=\"coatCBRef.errors && (coatCBRef.dirty || coatCBRef.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!coatCBRef.errors.required\">\r\n                      Length Must Be Required\r\n                    </div>\r\n                    </div>\r\n  \r\n            </div>\r\n  \r\n            <button (click)=\"UpdateMeasurement(order)\" class=\"btn btn-success add-btn\">Update Measurement</button>\r\n  \r\n          </fieldset>\r\n  \r\n        </div>\r\n      <div class=\"shalwar\" *ngIf=\"Sherwani1\">\r\n          \r\n                  <fieldset *ngFor=\"let order of MultipleMeasurement\">\r\n                    <!-- Sherwani div  -->\r\n          \r\n                    <legend>Sherwani</legend>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"normal-field\" class=\"col-form-label\">Please Enter Length</label>\r\n          \r\n                      <input type=\"text\" #waniRef=\"ngModel\" [(ngModel)]=\"order.SherwaniLength\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Length Must Be Numeric\" required pattern=\"[0.0-9.0]*\" ngModel>\r\n                        <div *ngIf=\"waniRef.errors && (waniRef.dirty || waniRef.touched)\" class=\"alert alert-danger\">\r\n                            <div [hidden]=\"!waniRef.errors.required\">\r\n                              Length Must Be Required\r\n                            </div>\r\n                            </div>\r\n          \r\n                    </div>\r\n          \r\n          \r\n                    <div class=\"form-group\">\r\n                      <label for=\"normal-field\" class=\"col-form-label\">Please Enter Sherwani Chest</label>\r\n          \r\n                      <input type=\"text\" #waniCRef=\"ngModel\" [(ngModel)]=\"order.SherwaniChest\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Length Must Be Numeric\"required pattern=\"[0.0-9.0]*\" ngModel>\r\n                        <div *ngIf=\"waniCRef.errors && (waniCRef.dirty || waniCRef.touched)\" class=\"alert alert-danger\">\r\n                            <div [hidden]=\"!waniCRef.errors.required\">\r\n                              Length Must Be Required\r\n                            </div>\r\n                            </div>\r\n          \r\n                    </div>\r\n          \r\n          \r\n                    <div class=\"form-group\">\r\n                      <label for=\"normal-field\" class=\"col-form-label\">Please Enter Sherwani Waist</label>\r\n          \r\n                      <input type=\"text\" #waniWRef=\"ngModel\" [(ngModel)]=\"order.SherwaniWaist\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Waist Length Must Be Numeric\" required pattern=\"[0.0-9.0]*\" ngModel>\r\n                        <div *ngIf=\"waniWRef.errors && (waniWRef.dirty || waniWRef.touched)\" class=\"alert alert-danger\">\r\n                            <div [hidden]=\"!waniWRef.errors.required\">\r\n                              Length Must Be Required\r\n                            </div>\r\n                            </div>\r\n          \r\n                    </div>\r\n          \r\n          \r\n          \r\n                    <div class=\"form-group\">\r\n                      <label for=\"normal-field\" class=\"col-form-label\">Please Enter Hip Measurement</label>\r\n          \r\n                      <input type=\"text\" #waniHRef=\"ngModel\" [(ngModel)]=\"order.SherwaniHip\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Hip Measurement Length Must Be Numeric\" required pattern=\"[0.0-9.0]*\" ngModel>\r\n                        <div *ngIf=\"waniHRef.errors && (waniHRef.dirty || waniHRef.touched)\" class=\"alert alert-danger\">\r\n                            <div [hidden]=\"!waniHRef.errors.required\">\r\n                              Length Must Be Required\r\n                            </div>\r\n                            </div>\r\n          \r\n                    </div>\r\n          \r\n          \r\n          \r\n                    <div class=\"form-group\">\r\n                      <label for=\"normal-field\" class=\"col-form-label\">Please Enter Sleeve Length</label>\r\n          \r\n                      <input type=\"text\" #waniHSRef=\"ngModel\" [(ngModel)]=\"order.SherwaniSleeve\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Sleeve Length Must Be Numeric\" required pattern=\"[0.0-9.0]*\">\r\n                        <div *ngIf=\"waniHSRef.errors && (waniHSRef.dirty || waniHSRef.touched)\" class=\"alert alert-danger\">\r\n                            <div [hidden]=\"!waniHSRef.errors.required\">\r\n                              Length Must Be Required\r\n                            </div>\r\n                            </div>\r\n          \r\n                    </div>\r\n          \r\n          \r\n          \r\n                    <div class=\"form-group\">\r\n                      <label for=\"normal-field\" class=\"col-form-label\">Please Enter Shoulder Length</label>\r\n          \r\n                      <input type=\"text\" #waniHSSRef=\"ngModel\" [(ngModel)]=\"order.SherwaniShoulder\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Shoulder Length Must Be Numeric\" required pattern=\"[0.0-9.0]*\">\r\n                        <div *ngIf=\"waniHSSRef.errors && (waniHSSRef.dirty || waniHSSRef.touched)\" class=\"alert alert-danger\">\r\n                            <div [hidden]=\"!waniHSSRef.errors.required\">\r\n                              Length Must Be Required\r\n                            </div>\r\n                            </div>\r\n          \r\n                    </div>\r\n          \r\n          \r\n          \r\n                    <div class=\"form-group\">\r\n                      <label for=\"normal-field\" class=\"col-form-label\">Please Enter Neck Measurement</label>\r\n          \r\n                      <input type=\"text\" #waniNeckRef=\"ngModel\" [(ngModel)]=\"order.SherwaniNeck\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Neck Measurement Length Must Be Numeric\" required pattern=\"[0.0-9.0]*\">\r\n                        <div *ngIf=\"waniNeckRef.errors && (waniNeckRef.dirty || waniNeckRef.touched)\" class=\"alert alert-danger\">\r\n                            <div [hidden]=\"!waniNeckRef.errors.required\">\r\n                              Length Must Be Required\r\n                            </div>\r\n                            </div>\r\n          \r\n                    </div>\r\n          \r\n          \r\n                    <div class=\"form-group\">\r\n                      <label for=\"normal-field\" class=\"col-form-label\">Please Enter Bysep Length</label>\r\n          \r\n                      <input type=\"text\" #waniBysepRef=\"ngModel\" [(ngModel)]=\"order.SherwaniBysep\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\" Bysep Length Must Be Numeric\" required pattern=\"[0.0-9.0]*\">\r\n                        <div *ngIf=\"waniBysepRef.errors && (waniBysepRef.dirty || waniBysepRef.touched)\" class=\"alert alert-danger\">\r\n                            <div [hidden]=\"!waniBysepRef.errors.required\">\r\n                              Length Must Be Required\r\n                            </div>\r\n                            </div>\r\n          \r\n                    </div>\r\n          \r\n                    <div class=\"form-group\">\r\n                      <label for=\"normal-field\" class=\"col-form-label\">Please Enter H.B</label>\r\n          \r\n                      <input type=\"text\" #waniHBRef=\"ngModel\" [(ngModel)]=\"order.SherwaniHB\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"H.B Length Must Be Numeric\" required pattern=\"[0.0-9.0]*\">\r\n                        <div *ngIf=\"waniHBRef.errors && (waniHBRef.dirty || waniHBRef.touched)\" class=\"alert alert-danger\">\r\n                            <div [hidden]=\"!waniHBRef.errors.required\">\r\n                              Length Must Be Required\r\n                            </div>\r\n                            </div>\r\n          \r\n                    </div>\r\n          \r\n                    <div class=\"form-group\">\r\n                      <label for=\"normal-field\" class=\"col-form-label\">Please Enter C.B</label>\r\n          \r\n                      <input type=\"text\" #waniCBRef=\"ngModel\" [(ngModel)]=\"order.SherwaniCB\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"C.B Length Must Be Numeric\" required pattern=\"[0.0-9.0]*\">\r\n                        <div *ngIf=\"waniCBRef.errors && (waniCBRef.dirty || waniCBRef.touched)\" class=\"alert alert-danger\">\r\n                            <div [hidden]=\"!waniCBRef.errors.required\">\r\n                              Length Must Be Required\r\n                            </div>\r\n                            </div>\r\n          \r\n                    </div>\r\n          \r\n                    <button (click)=\"UpdateMeasurement(order)\" class=\"btn btn-success add-btn\">Update Measurement</button>\r\n          \r\n                  </fieldset>\r\n          \r\n              </div>\r\n          <div class=\"shalwar\" *ngIf=\"Pant1\">\r\n              <!-- pants div  -->\r\n      \r\n              <fieldset *ngFor=\"let order of MultipleMeasurement\">\r\n      \r\n                <legend>Pant</legend> \r\n                <div class=\"form-group\">\r\n                  <label for=\"normal-field\" class=\"col-form-label\">Please Enter Pent Waist</label>\r\n      \r\n                  <input type=\"text\" [(ngModel)]=\"order.PentWaist\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Waist Length Must Be Numaric\"\r\n                    required>\r\n      \r\n                </div>\r\n      \r\n      \r\n      \r\n                <div class=\"form-group\">\r\n                  <label for=\"normal-field\" class=\"col-form-label\">Please Enter Hip Measurement</label>\r\n      \r\n                  <input type=\"text\" [(ngModel)]=\"order.PentHip\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Hip Measurement Length Must Be Numeric\"\r\n                    required>\r\n      \r\n                </div>\r\n      \r\n      \r\n      \r\n                <div class=\"form-group\">\r\n                  <label for=\"normal-field\" class=\"col-form-label\">Please Enter Length</label>\r\n      \r\n                  <input type=\"text\" [(ngModel)]=\"order.PentLength\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Length Must Be Numeric\"\r\n                    required>\r\n      \r\n                </div>\r\n      \r\n      \r\n      \r\n                <div class=\"form-group\">\r\n                  <label for=\"normal-field\" class=\"col-form-label\">Please Enter Knee Measurement</label>\r\n      \r\n                  <input type=\"text\" [(ngModel)]=\"order.PentKnee\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Knee Measurement Length Must Be Numeric\"\r\n                    required>\r\n      \r\n                </div>\r\n      \r\n      \r\n                <div class=\"form-group\">\r\n                  <label for=\"normal-field\" class=\"col-form-label\">Please Enter Bottom</label>\r\n      \r\n                  <input type=\"text\" [(ngModel)]=\"order.PentBottom\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Bottom Length Must Be Numeric\"\r\n                    required>\r\n      \r\n                </div>\r\n      \r\n                <div class=\"form-group\">\r\n                  <label for=\"normal-field\" class=\"col-form-label\">Please Enter Inside</label>\r\n      \r\n                  <input type=\"text\" [(ngModel)]=\"order.PentInside\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Inside Length Must Be Numeric\"\r\n                    required>\r\n      \r\n                </div>\r\n      \r\n                <button (click)=\"UpdateMeasurement(order)\" class=\"btn btn-success add-btn\">Update Measurement</button>\r\n      \r\n              </fieldset>\r\n      \r\n            </div>\r\n            <!-- pants div  -->\r\n      \r\n      <div class=\"shalwar\" *ngIf=\"Shawl1\">\r\n          <!-- Trouser div  -->\r\n  \r\n          <fieldset *ngFor=\"let order of MultipleMeasurement\">\r\n  \r\n            <legend>Shawl</legend>\r\n            <div class=\"form-group\">\r\n              <label for=\"normal-field\" class=\"col-form-label\">Please Enter Shawl Length</label>\r\n  \r\n              <input type=\"text\" [(ngModel)]=\"order.ShawlLength\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Length Must Be Numeric\"\r\n                required>\r\n  \r\n            </div>\r\n  \r\n  \r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"normal-field\" class=\"col-form-label\">Please Enter Shawl Width</label>\r\n  \r\n              <input type=\"text\" [(ngModel)]=\"order.ShawlWidth\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Width Must Be Numeric\"\r\n                required>\r\n  \r\n            </div>\r\n  \r\n  \r\n  \r\n         \r\n  \r\n            <button (click)=\"addMeasurement(order)\" class=\"btn btn-success add-btn\">Add Measurement</button>\r\n  \r\n          </fieldset>\r\n  \r\n        </div>\r\n  \r\n          <div class=\"shalwar\" *ngIf=\"Trouser1\">\r\n              <!-- Trouser div  -->\r\n      \r\n              <fieldset  *ngFor=\"let  order of MultipleMeasurement\">\r\n      \r\n                <legend>Trouser</legend>\r\n      \r\n                     <div class=\"form-group\">\r\n                  <label for=\"normal-field\" class=\"col-form-label\">Please Enter Trouser Waist</label>\r\n      \r\n                  <input type=\"text\" [(ngModel)]=\"order.TrouserWaist\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Waist Must Be Numeric\"\r\n                    required>\r\n      \r\n                </div>\r\n      \r\n      \r\n      \r\n                <div class=\"form-group\">\r\n                  <label for=\"normal-field\" class=\"col-form-label\">Please Enter Hip Measurement</label>\r\n      \r\n                  <input type=\"text\" [(ngModel)]=\"order.TrouserHip\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Hip Measurement Length Must Be Numeric\"\r\n                    required>\r\n      \r\n                </div>\r\n      \r\n      \r\n      \r\n                <div class=\"form-group\">\r\n                  <label for=\"normal-field\" class=\"col-form-label\">Please Enter Trouser Length</label>\r\n      \r\n                  <input type=\"text\" [(ngModel)]=\"order.TrouserLength\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Length Must Be Numeric\"\r\n                    required>\r\n      \r\n                </div>\r\n      \r\n      \r\n      \r\n                <div class=\"form-group\">\r\n                  <label for=\"normal-field\" class=\"col-form-label\">Please Enter Knee Measurement</label>\r\n      \r\n                  <input type=\"text\" [(ngModel)]=\"order.TrouserKnee\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Knee Measurement Must Be Numeric\"\r\n                    required>\r\n      \r\n                </div>\r\n      \r\n      \r\n                <div class=\"form-group\">\r\n                  <label for=\"normal-field\" class=\"col-form-label\">Please Enter Trouser Bottom</label>\r\n      \r\n                  <input type=\"text\" [(ngModel)]=\"order.TrouserBottom\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Bottom Length Must Be Numeric\"\r\n                    required>\r\n      \r\n                </div>\r\n      \r\n                <div class=\"form-group\">\r\n                  <label for=\"normal-field\" class=\"col-form-label\">Please Enter Trouser Inside</label>\r\n      \r\n                  <input type=\"text\" [(ngModel)]=\"order.TrouserInside\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Length Must Be Numeric\"\r\n                    required>\r\n      \r\n                </div>\r\n      \r\n                <button (click)=\"UpdateMeasurement(order)\" class=\"btn btn-success add-btn\">Update Measurement</button>\r\n      \r\n              </fieldset>\r\n      \r\n            </div>\r\n      \r\n          <div class=\"shalwar\" *ngIf=\"WaistCoat1\">\r\n            \r\n                    <fieldset *ngFor=\"let  order of MultipleMeasurement\">\r\n                      <!-- waist coat div  -->\r\n            \r\n                      <legend>Waist Coat</legend>\r\n                    <!--   \r\n                      <div class=\"form-group\">\r\n                        <select (change)=\"getEmployeesWaistCoatId($event.target.value)\">\r\n                          <option disabled selected>Select Employee</option>\r\n                          <option *ngFor='let Employees of employees' value={{Employees._id}}>\r\n                            {{Employees.FullName}}\r\n                          </option>\r\n                        </select>\r\n                      </div> -->\r\n            \r\n                      <div class=\"form-group\">\r\n                        <label for=\"normal-field\" class=\"col-form-label\">Please Enter Coat Length</label>\r\n            \r\n                        <input type=\"text\" [(ngModel)]=\"order.CoatLength\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Coat Length Must Be Numeric\"\r\n                          required>\r\n            \r\n                      </div>\r\n            \r\n            \r\n                      <div class=\"form-group\">\r\n                        <label for=\"normal-field\" class=\"col-form-label\">Please Enter Coat Chest</label>\r\n            \r\n                        <input type=\"text\" [(ngModel)]=\"order.CoatChest\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Coat Chest Length Must Be Numeric\"\r\n                          required>\r\n            \r\n                      </div>\r\n            \r\n            \r\n                      <div class=\"form-group\">\r\n                        <label for=\"normal-field\" class=\"col-form-label\">Please Enter coat Waist</label>\r\n            \r\n                        <input type=\"text\" [(ngModel)]=\"order.CoatWaist\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"coat Waist Must Be Numeric\"\r\n                          required>\r\n            \r\n                      </div>\r\n            \r\n            \r\n            \r\n                      <div class=\"form-group\">\r\n                        <label for=\"normal-field\" class=\"col-form-label\">Please Enter Hip Measurement</label>\r\n            \r\n                        <input type=\"text\" [(ngModel)]=\"order.CoatHip\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Hip Measurement Length Must Be Numeric\"\r\n                          required>\r\n            \r\n                      </div>\r\n            \r\n            \r\n            \r\n                      <div class=\"form-group\">\r\n                        <label for=\"normal-field\" class=\"col-form-label\">Please Enter Shoulder Length</label>\r\n            \r\n                        <input type=\"text\" [(ngModel)]=\"order.CoatShoulder\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Shoulder Length Must Be Numeric\"\r\n                          required>\r\n            \r\n                      </div>\r\n            \r\n            \r\n            \r\n                      <div class=\"form-group\">\r\n                        <label for=\"normal-field\" class=\"col-form-label\">Please Enter Neck Measurement</label>\r\n            \r\n                        <input type=\"text\" [(ngModel)]=\"order.CoatNeck\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"Neck Measurement Length Must Be Numeric\"\r\n                          required>\r\n            \r\n                      </div>\r\n            \r\n            \r\n                      <div class=\"form-group\">\r\n                        <label for=\"normal-field\" class=\"col-form-label\">Please Enter H.B</label>\r\n            \r\n                        <input type=\"text\" [(ngModel)]=\"order.CoatHB\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"H.B Length Must Be Numeric\"\r\n                          required>\r\n            \r\n                      </div>\r\n            \r\n                      <div class=\"form-group\">\r\n                        <label for=\"normal-field\" class=\"col-form-label\">Please Enter C.B</label>\r\n            \r\n                        <input type=\"text\" [(ngModel)]=\"order.CoatCB\" id=\"normal-field\" class=\"form-control custom-inputs\" placeholder=\"C.B Length Must Be Numeric\"\r\n                          required>\r\n            \r\n                      </div>\r\n            \r\n                      <button (click)=\"UpdateMeasurement(order)\" class=\"btn btn-success add-btn\">Update Measurement</button>\r\n            \r\n                    </fieldset>\r\n            \r\n                  </div>\r\n\r\n</div>"

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
    CustomerService.prototype.addPatternService = function (customer_id, MeasurmentValue) {
        var obj = { CustomerId: customer_id, DressType: MeasurmentValue };
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
        return "https://ssbotique1.azurewebsites.net/";
    };
    return Server;
}());
exports.Server = Server;


/***/ }

});
//# sourceMappingURL=20.map