webpackJsonpac__name_([1],{

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

/***/ "./src/app/login/login.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var employee_Service_1 = __webpack_require__("./src/services/employee.Service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var user_1 = __webpack_require__("./src/models/user.ts");
var Login = (function () {
    function Login(_employee, router) {
        this._employee = _employee;
        this.Email = "";
        this.Password = "";
        this.errorMessage = "";
        this.router = router;
    }
    Login.prototype.EnterKey = function (event) {
        if (event.keyCode == 13) {
            this.login();
        }
    };
    Login.prototype.login = function () {
        var _this = this;
        this.errorMessage = "";
        if (this.Email != "" && this.Email !== undefined && this.Password != "" && this.Password !== undefined) {
            this._employee.login(this.Email, this.Password).subscribe(function (response) {
                console.log(response);
                if (response.code != 200) {
                    _this.errorMessage = response.message;
                }
                else {
                    _this.errorMessage = response.message;
                    localStorage.setItem('user', JSON.stringify(response.data));
                    _this.userObject = JSON.parse(localStorage.getItem("user"));
                    if (_this.userObject.EmployeeRole == 1) {
                        setTimeout(function () {
                            _this.router.navigate(["app/customers"]);
                        }, 1000);
                    }
                    else {
                        setTimeout(function () {
                            _this.router.navigate(['app/orderdetail']);
                        }, 1000);
                    }
                }
            });
        }
        else {
            this.errorMessage = "User Name or Password is Required";
        }
    };
    Login.prototype.ngOnInit = function () {
        this.userObject = new user_1.UserModel();
    };
    Login.prototype.myFunction = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    Login = __decorate([
        core_1.Component({
            selector: 'login',
            styles: [__webpack_require__("./src/app/login/login.style.scss")],
            template: __webpack_require__("./src/app/login/login.template.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [employee_Service_1.EmployeeService],
            host: {
                class: 'login-page app'
            }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof employee_Service_1.EmployeeService !== 'undefined' && employee_Service_1.EmployeeService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
    ], Login);
    return Login;
    var _a, _b;
}());
exports.Login = Login;


/***/ },

/***/ "./src/app/login/login.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
exports.routes = [
    { path: '', component: login_component_1.Login, pathMatch: 'full' }
];
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule.routes = exports.routes;
    LoginModule = __decorate([
        core_1.NgModule({
            declarations: [
                login_component_1.Login
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginModule;


/***/ },

/***/ "./src/app/login/login.style.scss":
/***/ function(module, exports) {

throw new Error("Module build failed: Error: Node Sass does not yet support your current environment: Windows 64-bit with Unsupported runtime (57)\nFor more information on which environments are supported please see:\nhttps://github.com/sass/node-sass/releases/tag/v3.9.3\n    at Object.<anonymous> (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\node-sass\\lib\\index.js:13:11)\n    at Module._compile (module.js:652:30)\n    at Object.Module._extensions..js (module.js:663:10)\n    at Module.load (module.js:565:32)\n    at tryModuleLoad (module.js:505:12)\n    at Function.Module._load (module.js:497:3)\n    at Module.require (module.js:596:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\sass-loader\\index.js:4:12)\n    at Module._compile (module.js:652:30)\n    at Object.Module._extensions..js (module.js:663:10)\n    at Module.load (module.js:565:32)\n    at tryModuleLoad (module.js:505:12)\n    at Function.Module._load (module.js:497:3)\n    at Module.require (module.js:596:17)\n    at require (internal/module.js:11:18)\n    at loadLoader (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\loadLoader.js:13:17)\n    at iteratePitchingLoaders (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:165:10)\n    at D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:173:18\n    at loadLoader (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\loadLoader.js:36:3)\n    at iteratePitchingLoaders (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at runLoaders (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:362:2)\n    at NormalModule.doBuild (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\NormalModule.js:125:2)\n    at NormalModule.build (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\NormalModule.js:173:15)\n    at Compilation.buildModule (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\Compilation.js:127:9)\n    at D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\Compilation.js:303:10\n    at D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\NormalModuleFactory.js:63:13\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\tapable\\lib\\Tapable.js:260:70)\n    at onDoneResolving (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\NormalModuleFactory.js:38:11)");

/***/ },

/***/ "./src/app/login/login.template.html":
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div id=\"snackbar\"></div>\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-4 col-md-6 col-xs-10 offset-xl-4 offset-md-3 offset-xs-1\">\r\n        \r\n        <section class=\"widget widget-login animated fadeInUp\">\r\n          <header>\r\n            <h3>Login to SS Boutique</h3>\r\n          </header>\r\n          <div class=\"widget-body\">\r\n            <p class=\"widget-login-info\">\r\n              Use Facebook, Twitter or your email to sign in.\r\n            </p>\r\n            <p class=\"widget-login-info\">\r\n              Don't have an account? Sign up now!\r\n            </p>\r\n            <form class=\"login-form mt-lg\">\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Email\" name=\"Email\" id=\"exampleInputEmail1\" placeholder=\"Username\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input class=\"form-control\" id=\"pswd\" (keydown)=\"EnterKey($event)\" type=\"password\" [(ngModel)]=\"Password\" name=\"Password\" placeholder=\"Password\">\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <p class=\"errorMessage\" style=\"color:red\">{{errorMessage}}</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"clearfix\">\r\n                <div class=\"btn-toolbar pull-xs-right m-t-1\">\r\n                  <a class=\"btn btn-success my-btn btn-sm\" (click)=\"login()\">Login</a>\r\n                </div>\r\n              </div>\r\n              \r\n            </form>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </main>\r\n  <footer class=\"page-footer\">\r\n    2016 &copy; Sing. Admin Dashboard Template.\r\n  </footer>\r\n</div>\r\n"

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

/***/ "./src/models/user.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
var UserModel = (function () {
    function UserModel() {
    }
    return UserModel;
}());
exports.UserModel = UserModel;


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
//# sourceMappingURL=1.map