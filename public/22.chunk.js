webpackJsonpac__name_([22],{

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

/***/ "./src/app/assignedItems/assignedItems.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var employee_Service_1 = __webpack_require__("./src/services/employee.Service.ts");
var user_1 = __webpack_require__("./src/models/user.ts");
var order_Service_1 = __webpack_require__("./src/services/order.Service.ts");
var AssignedItemsComponent = (function () {
    function AssignedItemsComponent(router, _employeeService, _orderService) {
        var _this = this;
        this._employeeService = _employeeService;
        this._orderService = _orderService;
        this.AssignedItems = [];
        this.allEmployees = [];
        this.router = router;
        this.userObject = new user_1.UserModel();
        this._employeeService.getAssignedItems(this.userObject._id).subscribe(function (a) {
            _this.AssignedItems = a.data;
        });
        this._employeeService.getEmployees().subscribe(function (a) {
            _this.allEmployees = a.data;
        });
    }
    AssignedItemsComponent.prototype.getSelectedUser = function (orderItem, elem) {
        var _this = this;
        this._orderService.AssignThisOrderItemToUser(orderItem._id, this.userObject._id, elem).subscribe(function (a) {
            if (a.code == 200) {
                $("#snackbar").html("Assigned Successfully!");
                _this.showToast();
                _this._employeeService.getAssignedItems(_this.userObject._id).subscribe(function (a) {
                    _this.AssignedItems = a.data;
                });
            }
            else {
                $("#snackbar").html("Errors!");
                _this.showToast();
            }
        });
    };
    AssignedItemsComponent.prototype.showToast = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    AssignedItemsComponent.prototype.searchResult = function () {
        this.router.navigate(['/app', 'extra', 'search']);
    };
    AssignedItemsComponent = __decorate([
        core_1.Component({
            selector: 'assignedItems',
            styles: [__webpack_require__("./src/app/assignedItems/assignedItems.style.scss")],
            template: __webpack_require__("./src/app/assignedItems/assignedItems.template.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [employee_Service_1.EmployeeService, order_Service_1.OrderService],
            host: {
                class: 'assignedItems-page app'
            },
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof employee_Service_1.EmployeeService !== 'undefined' && employee_Service_1.EmployeeService) === 'function' && _b) || Object, (typeof (_c = typeof order_Service_1.OrderService !== 'undefined' && order_Service_1.OrderService) === 'function' && _c) || Object])
    ], AssignedItemsComponent);
    return AssignedItemsComponent;
    var _a, _b, _c;
}());
exports.AssignedItemsComponent = AssignedItemsComponent;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/assignedItems/assignedItems.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var assignedItems_component_ts_1 = __webpack_require__("./src/app/assignedItems/assignedItems.component.ts");
exports.routes = [
    { path: '', component: assignedItems_component_ts_1.AssignedItemsComponent, pathMatch: 'full' }
];
var ErrorModule = (function () {
    function ErrorModule() {
    }
    ErrorModule.routes = exports.routes;
    ErrorModule = __decorate([
        core_1.NgModule({
            declarations: [
                assignedItems_component_ts_1.AssignedItemsComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ErrorModule);
    return ErrorModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ErrorModule;


/***/ },

/***/ "./src/app/assignedItems/assignedItems.style.scss":
/***/ function(module, exports) {

throw new Error("Module build failed: Error: Node Sass does not yet support your current environment: Windows 64-bit with Unsupported runtime (57)\nFor more information on which environments are supported please see:\nhttps://github.com/sass/node-sass/releases/tag/v3.9.3\n    at Object.<anonymous> (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\node-sass\\lib\\index.js:13:11)\n    at Module._compile (module.js:652:30)\n    at Object.Module._extensions..js (module.js:663:10)\n    at Module.load (module.js:565:32)\n    at tryModuleLoad (module.js:505:12)\n    at Function.Module._load (module.js:497:3)\n    at Module.require (module.js:596:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\sass-loader\\index.js:4:12)\n    at Module._compile (module.js:652:30)\n    at Object.Module._extensions..js (module.js:663:10)\n    at Module.load (module.js:565:32)\n    at tryModuleLoad (module.js:505:12)\n    at Function.Module._load (module.js:497:3)\n    at Module.require (module.js:596:17)\n    at require (internal/module.js:11:18)\n    at loadLoader (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\loadLoader.js:13:17)\n    at iteratePitchingLoaders (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:165:10)\n    at D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:173:18\n    at loadLoader (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\loadLoader.js:36:3)\n    at iteratePitchingLoaders (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at runLoaders (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:362:2)\n    at NormalModule.doBuild (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\NormalModule.js:125:2)\n    at NormalModule.build (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\NormalModule.js:173:15)\n    at Compilation.buildModule (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\Compilation.js:127:9)\n    at D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\Compilation.js:303:10\n    at D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\NormalModuleFactory.js:63:13\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\tapable\\lib\\Tapable.js:260:70)\n    at onDoneResolving (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\NormalModuleFactory.js:38:11)");

/***/ },

/***/ "./src/app/assignedItems/assignedItems.template.html":
/***/ function(module, exports) {

module.exports = "<div id=\"snackbar\"></div>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 col-xs-12 col-sm-12\">\r\n                <div class=\"table-responsive\">          \r\n                        <table class=\"table table-bordered table-striped\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th>#</th>\r\n                              <th>Product Name</th>\r\n                              <th>Quantity</th>\r\n                              <th>Price</th>\r\n                              <th>Assigned To</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let order of AssignedItems;let i=index\">\r\n                              <td>{{i}}</td>\r\n                              <td>{{order.ProductName}}</td>\r\n                              <td>{{order.Quantity}}</td>\r\n                              <td>{{order.Price}}</td>\r\n                              <td>\r\n                                    <select class=\"selectType\" (change)=\"getSelectedUser(order,$event.target.value)\">\r\n                                      <option disabled selected>Select User</option>\r\n                                      <option *ngFor=\"let user of allEmployees\" value=\"{{user._id}}\">{{user.FullName}}</option>\r\n                                    </select>\r\n                            </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                        </div>\r\n        </div>\r\n    </div>\r\n</div>"

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

/***/ "./src/models/productType.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
var ProductType = (function () {
    function ProductType() {
    }
    return ProductType;
}());
exports.ProductType = ProductType;


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

/***/ "./src/services/order.Service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
var http_2 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/add/operator/do.js");
var productType_1 = __webpack_require__("./src/models/productType.ts");
var Server_1 = __webpack_require__("./src/utilities/Server.ts");
var OrderService = (function () {
    function OrderService(_http) {
        this._http = _http;
        this._addCustomerOrder = 'orders/addCustomerOrder';
        this._UpdateCustomerOrder = 'orders/updateOrder';
        var server = new Server_1.Server();
        this.baseURL = server.getServerURL();
    }
    OrderService.prototype.UpdateCustomerOrder = function (UpdateOrder) {
        console.log('firstly', UpdateOrder);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this._http.post(this.baseURL + 'orders/updateOrder', UpdateOrder, options)
            .map(this.extractData);
    };
    OrderService.prototype.addCustomerOrder = function (customerOrder) {
        console.log(customerOrder);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this._http.post(this.baseURL + this._addCustomerOrder, customerOrder, options)
            .map(this.extractData);
    };
    OrderService.prototype.getProductTypes = function () {
        var productTypes = [];
        var productType = new productType_1.ProductType;
        productType.Name = "Shalwar Kameez";
        productType.TypeId = 1;
        productTypes.push(productType);
        productType = new productType_1.ProductType();
        productType.Name = "Coat";
        productType.TypeId = 2;
        productTypes.push(productType);
        productType = new productType_1.ProductType();
        productType.Name = "Waist Coat";
        productType.TypeId = 3;
        productTypes.push(productType);
        productType = new productType_1.ProductType();
        productType.Name = "Sherwani";
        productType.TypeId = 4;
        productTypes.push(productType);
        productType = new productType_1.ProductType();
        productType.Name = "Pent";
        productType.TypeId = 5;
        productTypes.push(productType);
        return productTypes;
    };
    OrderService.prototype.extractData = function (res) {
        var body = res.json();
        console.log("Extract Data");
        console.log(body);
        return body.data || {};
    };
    OrderService.prototype.changeOrderItemStatus = function (orderItemId, OrderItemStatus) {
        var data;
        data = { OrderItemId: orderItemId, OrderItemStatus: OrderItemStatus };
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        return this._http.post(this.baseURL + "orders/changeOrderItemAsignee", data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    OrderService.prototype.AssignThisOrderItemToUser = function (orderItem, assignedBy, stitcher, master) {
        var data;
        data = { OrderItemId: orderItem, AssignedBy: assignedBy, SticherName: stitcher, MasterName: master };
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        return this._http.post(this.baseURL + "orders/changeOrderItemAsignee", data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    OrderService.prototype.addUserSystem = function (CustomerId, Name, Password) {
        var data;
        data = { EmployeeId: CustomerId, UserName: Name, Password: Password };
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        return this._http.post(this.baseURL + "/employees/addSystemUser", data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    OrderService.prototype.getOrdersListByOrderStatus = function (elem) {
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        return this._http.get(this.baseURL + "orders/getOrdersByStatus?OrderStatus=" + elem, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    OrderService.prototype.getOrderItem = function (elem) {
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        return this._http.get(this.baseURL + "orders/getOrderItemsByStatus?OrderItemStatus=" + elem, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    OrderService.prototype.getDetailsForOrder = function (id) {
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        return this._http.get(this.baseURL + "orders/getOrderByOrderId?orderId=" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    OrderService.prototype.getorderitem = function (id) {
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        return this._http.get(this.baseURL + "orders/getOrderByOrderId?orderId=" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    OrderService.prototype.editOrderStatus = function (elem, orderId) {
        var data;
        data = { OrderId: orderId, OrderStatus: elem };
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        return this._http.post(this.baseURL + "orders/changeOrderStatus", data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    OrderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], OrderService);
    return OrderService;
    var _a;
}());
exports.OrderService = OrderService;


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
//# sourceMappingURL=22.map