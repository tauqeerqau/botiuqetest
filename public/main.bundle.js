var ac_main =
webpackJsonpac__name_([3],{

/***/ "./node_modules/rxjs/add/observable/of.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var of_1 = __webpack_require__("./node_modules/rxjs/observable/of.js");
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ },

/***/ "./src/app/app.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/*
 * Angular 2 decorators and services
 */
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var app_service_1 = __webpack_require__("./src/app/app.service.ts");
/*
 * App Component
 * Top Level Component
 */
var App = (function () {
    function App(appState) {
        this.appState = appState;
    }
    App.prototype.ngOnInit = function () {
        console.log('Initial App State', this.appState.state);
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [
                __webpack_require__("./src/app/scss/application.scss")
            ],
            template: "<router-outlet></router-outlet>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof app_service_1.AppState !== 'undefined' && app_service_1.AppState) === 'function' && _a) || Object])
    ], App);
    return App;
    var _a;
}());
exports.App = App;


/***/ },

/***/ "./src/app/app.config.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var AppConfig = (function () {
    function AppConfig() {
        this.config = {
            name: 'sing',
            title: 'Sing Dashboard App with Angular 2.0 support by Flatlogic',
            version: '3.2.0',
            /**
             * Whether to print and alert some log information
             */
            debug: true,
            /**
             * In-app constants
             */
            settings: {
                colors: {
                    'white': '#fff',
                    'black': '#000',
                    'gray-light': '#999',
                    'gray-lighter': '#eee',
                    'gray': '#666',
                    'gray-dark': '#343434',
                    'gray-darker': '#222',
                    'gray-semi-light': '#777',
                    'gray-semi-lighter': '#ddd',
                    'brand-primary': '#5d8fc2',
                    'brand-success': '#64bd63',
                    'brand-warning': '#f0b518',
                    'brand-danger': '#dd5826',
                    'brand-info': '#5dc4bf'
                },
                screens: {
                    'xs-max': 543,
                    'sm-min': 544,
                    'sm-max': 767,
                    'md-min': 768,
                    'md-max': 991,
                    'lg-min': 992,
                    'lg-max': 1199,
                    'xl-min': 1200
                },
                navCollapseTimeout: 2500
            },
            /**
             * Application state. May be changed when using.
             * Synced to Local Storage
             */
            state: {
                /**
                 * whether navigation is static (prevent automatic collapsing)
                 */
                'nav-static': false
            }
        };
        this._resizeCallbacks = [];
        this._screenSizeCallbacks = {
            xs: { enter: [], exit: [] },
            sm: { enter: [], exit: [] },
            md: { enter: [], exit: [] },
            lg: { enter: [], exit: [] },
            xl: { enter: [], exit: [] }
        };
        this._initResizeEvent();
        this._initOnScreenSizeCallbacks();
    }
    AppConfig.prototype.isScreen = function (size) {
        var screenPx = window.innerWidth;
        return (screenPx >= this.config.settings.screens[size + '-min'] || size === 'xs')
            && (screenPx <= this.config.settings.screens[size + '-max'] || size === 'xl');
    };
    AppConfig.prototype.getScreenSize = function () {
        var screenPx = window.innerWidth;
        if (screenPx <= this.config.settings.screens['xs-max']) {
            return 'xs';
        }
        if ((screenPx >= this.config.settings.screens['sm-min'])
            && (screenPx <= this.config.settings.screens['sm-max'])) {
            return 'sm';
        }
        if ((screenPx >= this.config.settings.screens['md-min'])
            && (screenPx <= this.config.settings.screens['md-max'])) {
            return 'md';
        }
        if ((screenPx >= this.config.settings.screens['lg-min'])
            && (screenPx <= this.config.settings.screens['lg-max'])) {
            return 'lg';
        }
        if (screenPx >= this.config.settings.screens['xl-min']) {
            return 'xl';
        }
    };
    AppConfig.prototype.onScreenSize = function (size, fn, /* Boolean= */ onEnter) {
        onEnter = typeof onEnter !== 'undefined' ? onEnter : true;
        if (typeof size === 'object') {
            for (var i = 0; i < size.length; i++) {
                this._screenSizeCallbacks[size[i]][onEnter ? 'enter' : 'exit'].push(fn);
            }
        }
        else {
            this._screenSizeCallbacks[size][onEnter ? 'enter' : 'exit'].push(fn);
        }
    };
    AppConfig.prototype.changeColor = function (color, ratio, darker) {
        var pad = function (num, totalChars) {
            var padVal = '0';
            num = num + '';
            while (num.length < totalChars) {
                num = padVal + num;
            }
            return num;
        };
        // Trim trailing/leading whitespace
        color = color.replace(/^\s*|\s*$/, '');
        // Expand three-digit hex
        color = color.replace(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i, '#$1$1$2$2$3$3');
        // Calculate ratio
        var difference = Math.round(ratio * 256) * (darker ? -1 : 1), 
        // Determine if input is RGB(A)
        rgb = color.match(new RegExp('^rgba?\\(\\s*' +
            '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
            '\\s*,\\s*' +
            '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
            '\\s*,\\s*' +
            '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
            '(?:\\s*,\\s*' +
            '(0|1|0?\\.\\d+))?' +
            '\\s*\\)$', 'i')), alpha = !!rgb && rgb[4] !== null ? rgb[4] : null, 
        // Convert hex to decimal
        decimal = !!rgb ? [rgb[1], rgb[2], rgb[3]] : color.replace(/^#?([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])/i, function () {
            return parseInt(arguments[1], 16) + ',' +
                parseInt(arguments[2], 16) + ',' +
                parseInt(arguments[3], 16);
        }).split(/,/);
        // Return RGB(A)
        return !!rgb ?
            'rgb' + (alpha !== null ? 'a' : '') + '(' +
                Math[darker ? 'max' : 'min'](parseInt(decimal[0], 10) + difference, darker ? 0 : 255) + ', ' +
                Math[darker ? 'max' : 'min'](parseInt(decimal[1], 10) + difference, darker ? 0 : 255) + ', ' +
                Math[darker ? 'max' : 'min'](parseInt(decimal[2], 10) + difference, darker ? 0 : 255) +
                (alpha !== null ? ', ' + alpha : '') +
                ')' :
            // Return hex
            [
                '#',
                pad(Math[darker ? 'max' : 'min'](parseInt(decimal[0], 10) + difference, darker ? 0 : 255).toString(16), 2),
                pad(Math[darker ? 'max' : 'min'](parseInt(decimal[1], 10) + difference, darker ? 0 : 255).toString(16), 2),
                pad(Math[darker ? 'max' : 'min'](parseInt(decimal[2], 10) + difference, darker ? 0 : 255).toString(16), 2)
            ].join('');
    };
    AppConfig.prototype.lightenColor = function (color, ratio) {
        return this.changeColor(color, ratio, false);
    };
    AppConfig.prototype.darkenColor = function (color, ratio) {
        return this.changeColor(color, ratio, true);
    };
    AppConfig.prototype.max = function (array) {
        return Math.max.apply(null, array);
    };
    AppConfig.prototype.min = function (array) {
        return Math.min.apply(null, array);
    };
    AppConfig.prototype._initResizeEvent = function () {
        var resizeTimeout;
        jQuery(window).on('resize', function () {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function () {
                jQuery(window).trigger('sn:resize');
            }, 100);
        });
    };
    AppConfig.prototype._initOnScreenSizeCallbacks = function () {
        var _this = this;
        var resizeTimeout, prevSize = this.getScreenSize();
        jQuery(window).resize(function () {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function () {
                var size = _this.getScreenSize();
                if (size !== prevSize) {
                    // run exit callbacks first
                    _this._screenSizeCallbacks[prevSize].exit.forEach(function (fn) {
                        fn(size, prevSize);
                    });
                    // run enter callbacks then
                    _this._screenSizeCallbacks[size].enter.forEach(function (fn) {
                        fn(size, prevSize);
                    });
                    console.log('screen changed. new: ' + size + ', old: ' + prevSize);
                }
                prevSize = size;
            }, 100);
        });
    };
    AppConfig.prototype.getConfig = function () {
        return this.config;
    };
    AppConfig = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppConfig);
    return AppConfig;
}());
exports.AppConfig = AppConfig;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/app.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var hmr_1 = __webpack_require__("./node_modules/@angularclass/hmr/dist/index.js");
/*
 * Platform and Environment providers/directives/pipes
 */
var environment_1 = __webpack_require__("./src/app/environment.ts");
var app_routes_1 = __webpack_require__("./src/app/app.routes.ts");
// App is our top level component
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var app_resolver_1 = __webpack_require__("./src/app/app.resolver.ts");
var app_service_1 = __webpack_require__("./src/app/app.service.ts");
var app_config_1 = __webpack_require__("./src/app/app.config.ts");
var error_component_1 = __webpack_require__("./src/app/error/error.component.ts");
// Application wide providers
var APP_PROVIDERS = app_resolver_1.APP_RESOLVER_PROVIDERS.concat([
    app_service_1.AppState,
    app_config_1.AppConfig
]);
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.state)
            return;
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            var restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // save state
        var state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = hmr_1.createNewHosts(cmpLocation);
        // save input values
        store.restoreInputValues = hmr_1.createInputTransfer();
        // remove styles
        hmr_1.removeNgStyles();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.App],
            declarations: [
                app_component_1.App,
                error_component_1.ErrorComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(app_routes_1.ROUTES, { useHash: true })
            ],
            providers: [
                environment_1.ENV_PROVIDERS,
                APP_PROVIDERS
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ApplicationRef !== 'undefined' && core_1.ApplicationRef) === 'function' && _a) || Object, (typeof (_b = typeof app_service_1.AppState !== 'undefined' && app_service_1.AppState) === 'function' && _b) || Object])
    ], AppModule);
    return AppModule;
    var _a, _b;
}());
exports.AppModule = AppModule;


/***/ },

/***/ "./src/app/app.resolver.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
__webpack_require__("./node_modules/rxjs/add/observable/of.js");
var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return Observable_1.Observable.of({ res: 'I am data' });
    };
    DataResolver = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataResolver);
    return DataResolver;
}());
exports.DataResolver = DataResolver;
// an array of services to resolve routes with data
exports.APP_RESOLVER_PROVIDERS = [
    DataResolver
];


/***/ },

/***/ "./src/app/app.routes.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var error_component_1 = __webpack_require__("./src/app/error/error.component.ts");
exports.ROUTES = [{
        path: '', redirectTo: 'app', pathMatch: 'full'
    }, {
        path: 'app', loadChildren: function () { return __webpack_require__.e/* System.import */(0).then(__webpack_require__.bind(null, "./src/app/layout/layout.module.ts")).then(function (mod) { return (mod.__esModule && mod.default) ? mod.default : mod; }); }
    }, {
        path: 'login', loadChildren: function () { return __webpack_require__.e/* System.import */(1).then(__webpack_require__.bind(null, "./src/app/login/login.module.ts")).then(function (mod) { return (mod.__esModule && mod.default) ? mod.default : mod; }); }
    }, {
        path: 'error', component: error_component_1.ErrorComponent
    }, {
        path: '**', component: error_component_1.ErrorComponent
    }
];


/***/ },

/***/ "./src/app/app.service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    AppState = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppState);
    return AppState;
}());
exports.AppState = AppState;


/***/ },

/***/ "./src/app/environment.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
// Angular 2
// rc2 workaround
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function identity(value) { return value; };
if (false) {
    // Production
    platform_browser_1.disableDebugTools();
    core_1.enableProdMode();
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(core_1.ApplicationRef);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        platform_browser_1.enableDebugTools(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
exports.decorateModuleRef = _decorateModuleRef;
exports.ENV_PROVIDERS = PROVIDERS.slice();


/***/ },

/***/ "./src/app/error/error.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var ErrorComponent = (function () {
    function ErrorComponent(router) {
        this.router = router;
    }
    ErrorComponent.prototype.searchResult = function () {
        this.router.navigate(['/app', 'extra', 'search']);
    };
    ErrorComponent = __decorate([
        core_1.Component({
            selector: 'error',
            styles: [__webpack_require__("./src/app/error/error.style.scss")],
            template: __webpack_require__("./src/app/error/error.template.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                class: 'error-page app'
            },
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
    ], ErrorComponent);
    return ErrorComponent;
    var _a;
}());
exports.ErrorComponent = ErrorComponent;


/***/ },

/***/ "./src/app/error/error.style.scss":
/***/ function(module, exports) {

throw new Error("Module build failed: Error: Node Sass does not yet support your current environment: Windows 64-bit with Unsupported runtime (57)\nFor more information on which environments are supported please see:\nhttps://github.com/sass/node-sass/releases/tag/v3.9.3\n    at Object.<anonymous> (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\node-sass\\lib\\index.js:13:11)\n    at Module._compile (module.js:652:30)\n    at Object.Module._extensions..js (module.js:663:10)\n    at Module.load (module.js:565:32)\n    at tryModuleLoad (module.js:505:12)\n    at Function.Module._load (module.js:497:3)\n    at Module.require (module.js:596:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\sass-loader\\index.js:4:12)\n    at Module._compile (module.js:652:30)\n    at Object.Module._extensions..js (module.js:663:10)\n    at Module.load (module.js:565:32)\n    at tryModuleLoad (module.js:505:12)\n    at Function.Module._load (module.js:497:3)\n    at Module.require (module.js:596:17)\n    at require (internal/module.js:11:18)\n    at loadLoader (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\loadLoader.js:13:17)\n    at iteratePitchingLoaders (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:165:10)\n    at D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:173:18\n    at loadLoader (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\loadLoader.js:36:3)\n    at iteratePitchingLoaders (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at runLoaders (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:362:2)\n    at NormalModule.doBuild (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\NormalModule.js:125:2)\n    at NormalModule.build (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\NormalModule.js:173:15)\n    at Compilation.buildModule (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\Compilation.js:127:9)\n    at D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\Compilation.js:303:10\n    at D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\NormalModuleFactory.js:63:13\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\tapable\\lib\\Tapable.js:260:70)\n    at onDoneResolving (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\NormalModuleFactory.js:38:11)");

/***/ },

/***/ "./src/app/error/error.template.html":
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <main id=\"content\" class=\"error-container\" role=\"main\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-4 col-md-6 col-xs-10 offset-xl-4 offset-md-3 offset-xs-1\">\r\n        <div class=\"error-container\">\r\n          <h1 class=\"error-code\">404</h1>\r\n          <p class=\"error-info\">\r\n            Opps, it seems that this page does not exist.\r\n          </p>\r\n          <p class=\"error-help mb\">\r\n            If you are sure it should, search for it.\r\n          </p>\r\n          <form (ngSubmit)=\"searchResult()\" method=\"get\">\r\n            <div class=\"form-group\">\r\n              <input class=\"form-control input-no-border\" type=\"text\" placeholder=\"Search Pages\">\r\n            </div>\r\n            <button type=\"submit\"  class=\"btn btn-inverse\">\r\n              Search <i class=\"fa fa-search text-warning ml-xs\"></i>\r\n            </button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </main>\r\n\r\n  <footer class=\"page-footer\">\r\n    2016 &copy; Sing. Admin Dashboard Template.\r\n  </footer>\r\n</div>\r\n"

/***/ },

/***/ "./src/app/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
// App
__export(__webpack_require__("./src/app/app.module.ts"));


/***/ },

/***/ "./src/app/scss/application.scss":
/***/ function(module, exports) {

throw new Error("Module build failed: Error: Node Sass does not yet support your current environment: Windows 64-bit with Unsupported runtime (57)\nFor more information on which environments are supported please see:\nhttps://github.com/sass/node-sass/releases/tag/v3.9.3\n    at Object.<anonymous> (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\node-sass\\lib\\index.js:13:11)\n    at Module._compile (module.js:652:30)\n    at Object.Module._extensions..js (module.js:663:10)\n    at Module.load (module.js:565:32)\n    at tryModuleLoad (module.js:505:12)\n    at Function.Module._load (module.js:497:3)\n    at Module.require (module.js:596:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\sass-loader\\index.js:4:12)\n    at Module._compile (module.js:652:30)\n    at Object.Module._extensions..js (module.js:663:10)\n    at Module.load (module.js:565:32)\n    at tryModuleLoad (module.js:505:12)\n    at Function.Module._load (module.js:497:3)\n    at Module.require (module.js:596:17)\n    at require (internal/module.js:11:18)\n    at loadLoader (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\loadLoader.js:13:17)\n    at iteratePitchingLoaders (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:165:10)\n    at D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:173:18\n    at loadLoader (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\loadLoader.js:36:3)\n    at iteratePitchingLoaders (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at runLoaders (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:362:2)\n    at NormalModule.doBuild (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\NormalModule.js:125:2)\n    at NormalModule.build (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\NormalModule.js:173:15)\n    at Compilation.buildModule (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\Compilation.js:127:9)\n    at D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\Compilation.js:303:10\n    at D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\NormalModuleFactory.js:63:13\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\tapable\\lib\\Tapable.js:260:70)\n    at onDoneResolving (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\NormalModuleFactory.js:38:11)");

/***/ },

/***/ "./src/main.browser.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/*
 * Angular bootstraping
 */
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/index.js");
var environment_1 = __webpack_require__("./src/app/environment.ts");
var hmr_1 = __webpack_require__("./node_modules/@angularclass/hmr/dist/index.js");
/*
 * App Module
 * our top level module that holds all of our components
 */
var app_1 = __webpack_require__("./src/app/index.ts");
/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(app_1.AppModule).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(environment_1.decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
// needed for hmr
// in prod this is replace for document ready
hmr_1.bootloader(main);


/***/ }

},["./src/main.browser.ts"]);
//# sourceMappingURL=main.map