webpackJsonpac__name_([24],{

/***/ "./src/app/grid/grid-demo/grid-demo.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var GridDemo = (function () {
    function GridDemo() {
    }
    GridDemo.prototype.render = function () {
        jQuery.fn.widgster.Constructor.DEFAULTS.bodySelector = '.widget-body';
        var $widgets = jQuery('.widget'), $newsWidget = jQuery('#news-widget'), $sharesWidget = jQuery('#shares-widget'), $autoloadWidget = jQuery('#autoload-widget');
        /**
         * turn off .content-wrap transforms & disable sorting when widget fullscreened
         */
        $widgets.on('fullscreen.widgster', function () {
            jQuery('.content-wrap').css({
                '-webkit-transform': 'none',
                '-ms-transform': 'none',
                transform: 'none',
                'margin': 0,
                'z-index': 2
            });
            // prevent widget from dragging when fullscreened
            jQuery('.widget-container').sortable('option', 'disabled', true);
        }).on('restore.widgster closed.widgster', function () {
            jQuery('.content-wrap').css({
                '-webkit-transform': '',
                '-ms-transform': '',
                transform: '',
                margin: '',
                'z-index': ''
            });
            jQuery('body').css({
                'overflow-y': 'scroll'
            });
            // allow dragging back
            jQuery('.widget-container').sortable('option', 'disabled', false);
        });
        /**
         * Make refresh button spin when loading
         */
        $newsWidget.on('load.widgster', function () {
            jQuery(this).find('[data-widgster="load"] > i').addClass('fa-spin');
        }).on('loaded.widgster', function () {
            jQuery(this).find('[data-widgster="load"] > i').removeClass('fa-spin');
        });
        /**
         * Custom close prompt for news widget
         */
        $newsWidget.widgster({
            showLoader: false,
            closePrompt: function (callback) {
                jQuery('#news-close-modal').modal('show');
                jQuery('#news-widget-remove').on('click', function () {
                    jQuery('#news-close-modal').on('hidden.bs.modal', callback).modal('hide');
                });
            }
        });
        /**
         * Use custom loader template
         */
        $sharesWidget.widgster({
            loaderTemplate: '<div class="loader animated fadeIn">' +
                '   <span class="spinner"><i class="fa fa-spinner fa-spin"></i></span>' +
                '</div>'
        });
        /**
         * Make hidden spinner appear & spin when loading
         */
        $autoloadWidget.on('load.widgster', function () {
            jQuery(this).find('.fa-spinner').addClass('fa-spin in');
        }).on('loaded.widgster', function () {
            jQuery(this).find('.fa-spinner').removeClass('fa-spin in');
        }).on('load.widgster fullscreen.widgster restore.widgster', function () {
            jQuery(this).find('.dropdown.open > .dropdown-toggle').dropdown('toggle');
        });
        /**
         * Init all other widgets with default settings & settings retrieved from data-* attributes
         */
        $widgets.widgster();
        /**
         * Init tooltips for all widget controls on page
         */
        jQuery('.widget-controls > a').tooltip({ placement: 'bottom' });
    };
    GridDemo.prototype.ngOnInit = function () {
        this.render();
    };
    GridDemo = __decorate([
        core_1.Directive({
            selector: '[grid-demo]',
        }), 
        __metadata('design:paramtypes', [])
    ], GridDemo);
    return GridDemo;
}());
exports.GridDemo = GridDemo;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/grid/grid.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var GridComponent = (function () {
    function GridComponent() {
        this.sortOptions = {
            connectWith: '.widget-container',
            handle: 'header, .handle',
            cursor: 'move',
            iframeFix: false,
            items: '.widget:not(.locked)',
            opacity: 0.8,
            helper: 'original',
            revert: true,
            forceHelperSize: true,
            placeholder: 'widget widget-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer'
        };
    }
    GridComponent.prototype.ngOnInit = function () {
        jQuery('.widget-container').sortable(this.sortOptions);
    };
    GridComponent = __decorate([
        core_1.Component({
            selector: '[grid]',
            template: __webpack_require__("./src/app/grid/grid.template.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__("./src/app/grid/grid.style.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], GridComponent);
    return GridComponent;
}());
exports.GridComponent = GridComponent;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/grid/grid.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery-ui/ui/sortable.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var grid_component_1 = __webpack_require__("./src/app/grid/grid.component.ts");
var grid_demo_1 = __webpack_require__("./src/app/grid/grid-demo/grid-demo.ts");
exports.routes = [
    { path: '', component: grid_component_1.GridComponent, pathMatch: 'full' }
];
var GridModule = (function () {
    function GridModule() {
    }
    GridModule.routes = exports.routes;
    GridModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(exports.routes)],
            declarations: [grid_component_1.GridComponent, grid_demo_1.GridDemo]
        }), 
        __metadata('design:paramtypes', [])
    ], GridModule);
    return GridModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GridModule;


/***/ },

/***/ "./src/app/grid/grid.style.scss":
/***/ function(module, exports) {

throw new Error("Module build failed: Error: Node Sass does not yet support your current environment: Windows 64-bit with Unsupported runtime (57)\nFor more information on which environments are supported please see:\nhttps://github.com/sass/node-sass/releases/tag/v3.9.3\n    at Object.<anonymous> (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\node-sass\\lib\\index.js:13:11)\n    at Module._compile (module.js:652:30)\n    at Object.Module._extensions..js (module.js:663:10)\n    at Module.load (module.js:565:32)\n    at tryModuleLoad (module.js:505:12)\n    at Function.Module._load (module.js:497:3)\n    at Module.require (module.js:596:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\sass-loader\\index.js:4:12)\n    at Module._compile (module.js:652:30)\n    at Object.Module._extensions..js (module.js:663:10)\n    at Module.load (module.js:565:32)\n    at tryModuleLoad (module.js:505:12)\n    at Function.Module._load (module.js:497:3)\n    at Module.require (module.js:596:17)\n    at require (internal/module.js:11:18)\n    at loadLoader (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\loadLoader.js:13:17)\n    at iteratePitchingLoaders (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:165:10)\n    at D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:173:18\n    at loadLoader (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\loadLoader.js:36:3)\n    at iteratePitchingLoaders (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at runLoaders (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\loader-runner\\lib\\LoaderRunner.js:362:2)\n    at NormalModule.doBuild (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\NormalModule.js:125:2)\n    at NormalModule.build (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\NormalModule.js:173:15)\n    at Compilation.buildModule (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\Compilation.js:127:9)\n    at D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\Compilation.js:303:10\n    at D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\NormalModuleFactory.js:63:13\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\tapable\\lib\\Tapable.js:260:70)\n    at onDoneResolving (D:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\webpack\\lib\\NormalModuleFactory.js:38:11)");

/***/ },

/***/ "./src/app/grid/grid.template.html":
/***/ function(module, exports) {

module.exports = "<!-- jquery ui sortable chrome overflow-x fix. when set to hidden does not behaves as expected. resetting back\r\n     just for this page.\r\n     http://bugs.jqueryui.com/ticket/9588 -->\r\n<style>\r\n  body{\r\n    overflow-x: visible;\r\n  }\r\n</style>\r\n<ol class=\"breadcrumb\">\r\n  <li class=\"breadcrumb-item\">YOU ARE HERE</li>\r\n  <li class=\"breadcrumb-item active\">Grid</li>\r\n</ol>\r\n<h1 class=\"page-title\">Grid - <span class=\"fw-semi-bold\">Options</span></h1>\r\n<div class=\"row\">\r\n  <div class=\"col-lg-7 offset-xl-1 \">\r\n    <section class=\"widget\" widget>\r\n      <header>\r\n        <h5>Draggable Grid &nbsp;<span class=\"tag tag-danger fw-normal\">since 2.1</span></h5>\r\n      </header>\r\n      <div class=\"widget-body\">\r\n        <p>\r\n          <strong>Widgster</strong> is a plugin that allows to easily implement basic widget functions that\r\n          lots of our customers have requested.  For now it has the following essential\r\n          widget features:\r\n        </p>\r\n        <ul class=\"text-list\">\r\n          <li><strong>Collapse/Expand</strong> - all widgets can be collapsed to fill only header's vertical space;</li>\r\n          <li><strong>Close</strong> - closable. Any widget may be removed by clicking the close btn;</li>\r\n          <li><strong>Full Screen</strong> - an option to make widget fill the whole window (just like OS);</li>\r\n          <li><strong>Ajax Load</strong> - the hottest option allowing to load/reload widget content asynchronously. You just\r\n            need to provide an url to fetch the data from. With loader delivered.</li>\r\n        </ul>\r\n        <p>It's available under MIT license, check out <a href=\"https://github.com/flatlogic/widgster\" target=\"_blank\">github</a> to find it.</p>\r\n        <p>\r\n          Test it out!\r\n        </p>\r\n      </div>\r\n    </section>\r\n  </div>\r\n</div>\r\n<div class=\"row\" grid-demo>\r\n  <div class=\"col-lg-6  widget-container\">\r\n    <section class=\"widget\" widget id=\"default-widget\" data-widgster-load=\"assets/demo/grid/default.php\">\r\n      <header>\r\n        <h6>Default <span class=\"fw-semi-bold\">Widget</span></h6>\r\n        <div class=\"widget-controls\">\r\n          <a data-widgster=\"load\" title=\"Reload\" href=\"#\"><i class=\"fa fa-refresh\"></i></a>\r\n          <a data-widgster=\"expand\" title=\"Expand\" href=\"#\"><i class=\"glyphicon glyphicon-chevron-up\"></i></a>\r\n          <a data-widgster=\"collapse\" title=\"Collapse\" href=\"#\"><i class=\"glyphicon glyphicon-chevron-down\"></i></a>\r\n          <a data-widgster=\"fullscreen\" title=\"Full Screen\" href=\"#\"><i class=\"glyphicon glyphicon-fullscreen\"></i></a>\r\n          <a data-widgster=\"restore\" title=\"Restore\" href=\"#\"><i class=\"glyphicon glyphicon-resize-small\"></i></a>\r\n          <a data-widgster=\"close\" title=\"Close\" href=\"#\"><i class=\"glyphicon glyphicon-remove\"></i></a>\r\n        </div>\r\n      </header>\r\n      <div class=\"widget-body\">\r\n        <p>A timestamp this widget was created: Apr 24, 19:07:07</p>\r\n        <p>A timestamp this widget was updated: Apr 24, 19:07:07</p>\r\n      </div>\r\n    </section>\r\n    <section class=\"widget\" widget id=\"shares-widget\"\r\n             data-widgster-load=\"assets/demo/grid/shares.php\"\r\n             data-post-processing=\"true\">\r\n      <header>\r\n        <h6>\r\n          <span class=\"tag tag-primary\"><i class=\"fa fa-facebook\"></i></span> &nbsp;\r\n          Latest <span class=\"fw-semi-bold\">Shares</span>\r\n        </h6>\r\n        <div class=\"widget-controls\">\r\n          <a data-widgster=\"load\" title=\"Reload\" href=\"#\"><strong class=\"text-gray-light\">Reload</strong></a>\r\n          <a data-widgster=\"close\" title=\"Close\" href=\"#\"><strong class=\"text-gray-light\">Close</strong></a>\r\n        </div>\r\n      </header>\r\n      <div class=\"widget-body no-padding\">\r\n        <div class=\"list-group list-group-lg\">\r\n          <a href=\"#\" class=\"list-group-item\">\r\n                                <span class=\"thumb-sm pull-xs-left mr\">\r\n                                    <img class=\"img-circle\" src=\"assets/img/people/a1.jpg\" alt=\"...\">\r\n                                </span>\r\n            <i class=\"fa fa-circle pull-xs-right text-danger mt-sm\"></i>\r\n            <h6 class=\"no-margin\">Maikel Basso</h6>\r\n            <small class=\"text-muted\">about 2 mins ago</small>\r\n          </a>\r\n          <a href=\"#\" class=\"list-group-item\">\r\n                                <span class=\"thumb-sm pull-xs-left mr\">\r\n                                    <img class=\"img-circle\" src=\"assets/img/people/a2.jpg\" alt=\"...\">\r\n                                </span>\r\n            <i class=\"fa fa-circle pull-xs-right text-info mt-sm\"></i>\r\n            <h6 class=\"no-margin\">Ianus Arendse</h6>\r\n            <small class=\"text-muted\">about 42 mins ago</small>\r\n          </a>\r\n          <a href=\"#\" class=\"list-group-item\">\r\n                                <span class=\"thumb-sm pull-xs-left mr\">\r\n                                    <img class=\"img-circle\" src=\"assets/img/people/a3.jpg\" alt=\"...\">\r\n                                </span>\r\n            <i class=\"fa fa-circle pull-xs-right text-success mt-sm\"></i>\r\n            <h6 class=\"no-margin\">Valdemar Landau</h6>\r\n            <small class=\"text-muted\">one hour ago</small>\r\n          </a>\r\n          <a href=\"#\" class=\"list-group-item mb-n-md\">\r\n                                <span class=\"thumb-sm pull-xs-left mr\">\r\n                                    <img class=\"img-circle\" src=\"assets/img/people/a4.jpg\" alt=\"...\">\r\n                                </span>\r\n            <i class=\"fa fa-circle pull-xs-right text-warning mt-sm\"></i>\r\n            <h6 class=\"no-margin\">Rick Teagan</h6>\r\n            <small class=\"text-muted\">3 hours ago</small>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"widget\" widget id=\"autoload-widget\"\r\n             data-widgster-load=\"assets/demo/grid/autoload.php\"\r\n             data-post-processing=\"true\"\r\n             data-widgster-autoload=\"true\"\r\n             data-widgster-show-loader=\"false\">\r\n      <header>\r\n        <h6>Autoload <span class=\"fw-semi-bold\">Widget</span></h6>\r\n        <div class=\"widget-controls dropdown\" data-dropdown data-ng-init=\"isOpen = false\" data-is-open=\"isOpen\">\r\n                            <span>\r\n                                <i class=\"fa fa-spinner fa-lg fade mr-xs\"></i>\r\n                            </span>\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n            <i class=\"fa fa-cog\"></i>\r\n          </a>\r\n          <ul class=\"dropdown-menu dropdown-menu-right\">\r\n            <li>\r\n              <a class=\"dropdown-item\" data-widgster=\"load\" title=\"Reload\" ng-click=\"isOpen = false\">Reload\r\n                &nbsp;&nbsp;<span class=\"tag tag-pill tag-success animated bounceIn\"><strong>9</strong></span>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a class=\"dropdown-item\" data-widgster=\"fullscreen\" title=\"Full Screen\" ng-click=\"isOpen = false\">Fullscreen</a>\r\n              <a class=\"dropdown-item\" data-widgster=\"restore\" title=\"Restore\" ng-click=\"isOpen = false\">Restore</a>\r\n            </li>\r\n            <li class=\"dropdown-divider\"></li>\r\n            <li><a class=\"dropdown-item\" data-widgster=\"close\" title=\"Close\" ng-click=\"isOpen = false\">Close</a></li>\r\n          </ul>\r\n        </div>\r\n      </header>\r\n      <div class=\"widget-body\">\r\n        <h3 class=\"text-xs-center no-margin\">Sign up, it's <strong>free</strong></h3>\r\n        <p class=\"lead text-muted text-xs-center\">\r\n          Faith makes it possible to achieve that which man's mind can conceive and believe.\r\n        </p>\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail1\"><i class=\"fa fa-circle text-warning\"></i> &nbsp; Email address</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                   placeholder=\"Enter email\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"pswd\"><i class=\"fa fa-circle text-danger\"></i> &nbsp; Password</label>\r\n            <input class=\"form-control\" id=\"pswd\" type=\"text\" placeholder=\"Min 8 characters\">\r\n          </div>\r\n          <p>\r\n            To make a widget automatically load it's content you just need to set\r\n            <strong>data-widgster-autoload</strong> attribute and provide an url.\r\n          </p>\r\n<pre><code>data-widgster-load=\"server/ajax_widget.html\"\r\ndata-widgster-autoload=\"true\"</code></pre>\r\n          <p>\r\n            <strong>data-widgster-autoload</strong> may be set to an integer value. If set, for example, to\r\n            2000 will refresh widget every 2 seconds.\r\n          </p>\r\n          <div class=\"clearfix\">\r\n            <div class=\"btn-toolbar pull-xs-right\">\r\n              <button type=\"button\" class=\"btn btn-transparent\">Cancel</button>\r\n              <button type=\"button\" class=\"btn btn-success\">&nbsp;Submit&nbsp;</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </section>\r\n    <section class=\"widget\" widget style=\"min-height: 200px\">\r\n      <header>\r\n        <h6>Custom <span class=\"fw-semi-bold\">Loader</span></h6>\r\n      </header>\r\n      <div class=\"widget-body\">\r\n        <div class=\"loader animated fadeIn handle\">\r\n                        <span class=\"spinner\">\r\n                            <i class=\"fa fa-spinner fa-spin\"></i>\r\n                        </span>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </div>\r\n  <div class=\"col-lg-6  widget-container\">\r\n    <section class=\"widget\" widget id=\"news-widget\" data-widgster-load=\"assets/demo/grid/news.php\" data-post-processing=\"true\">\r\n      <header>\r\n        <h6>\r\n          News <span class=\"tag tag-pill tag-success\">17</span>\r\n        </h6>\r\n        <span class=\"text-muted\">spinning refresh button & close prompt</span>\r\n        <div class=\"widget-controls\">\r\n          <a data-widgster=\"expand\" title=\"Expand\" href=\"#\"><i class=\"glyphicon glyphicon-chevron-up\"></i></a>\r\n          <a data-widgster=\"collapse\" title=\"Collapse\" href=\"#\"><i class=\"glyphicon glyphicon-chevron-down\"></i></a>\r\n          <a data-widgster=\"load\" title=\"I am spinning!\" href=\"#\"><i class=\"fa fa-refresh\"></i></a>\r\n          <a data-widgster=\"close\" title=\"Close\" href=\"#\"><i class=\"glyphicon glyphicon-remove\"></i></a>\r\n        </div>\r\n      </header>\r\n      <div class=\"widget-body no-padding\">\r\n        <ul class=\"news-list stretchable\">\r\n          <li>\r\n                                <span class=\"icon bg-danger text-white\">\r\n                                    <i class=\"fa fa-star\"></i>\r\n                                </span>\r\n            <div class=\"news-item-info\">\r\n              <h5 class=\"name no-margin mb-xs\"><a href=\"#\">First Human Colony on Mars</a></h5>\r\n              <p class=\"fs-mini\">\r\n                First 700 people will take part in building first human settlement outside of Earth.\r\n                That's awesome, right?\r\n              </p>\r\n              <time class=\"help-block\">Mar 20, 18:46</time>\r\n            </div>\r\n          </li>\r\n          <li>\r\n                                <span class=\"icon bg-info text-white\">\r\n                                    <i class=\"fa fa-microphone\"></i>\r\n                                </span>\r\n            <div class=\"news-item-info\">\r\n              <h5 class=\"name no-margin mb-xs\"><a href=\"#\">Light Blue reached $300</a></h5>\r\n              <p class=\"fs-mini\">\r\n                Light Blue Inc. shares just hit $300 price. \"This was inevitable. It should\r\n                have happen sooner or later\" - says NYSE expert.\r\n              </p>\r\n              <time class=\"help-block\">Sep 25, 11:59</time>\r\n            </div>\r\n          </li>\r\n          <li>\r\n                                <span class=\"icon bg-success text-white\">\r\n                                    <i class=\"fa fa-eye\"></i>\r\n                                </span>\r\n            <div class=\"news-item-info\">\r\n              <h5 class=\"name no-margin mb-xs\"><a href=\"#\">No more spying</a></h5>\r\n              <p class=\"fs-mini\">\r\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\r\n                incididunt ut labore et dolore magna aliqua.\r\n              </p>\r\n              <time class=\"help-block\">Mar 20, 18:46</time>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div id=\"news-close-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"news-close-modal-label\" aria-hidden=\"true\" style=\"display: none;\">\r\n        <div class=\"modal-dialog\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\r\n              <h5 class=\"modal-title\" id=\"news-close-modal-label\">Sure?</h5>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              Do you really want to unrevertably remove this super news widget?\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n              <button type=\"button\" class=\"btn btn-danger\" id=\"news-widget-remove\">Yes, remove widget</button>\r\n            </div>\r\n\r\n          </div><!-- /.modal-content -->\r\n        </div><!-- /.modal-dialog -->\r\n      </div>\r\n    </section>\r\n    <section class=\"widget locked\" widget data-widgster-collapsed=\"true\">\r\n      <header>\r\n        <h6>Collapsed by default & locked</h6>\r\n        <div class=\"widget-controls\">\r\n          <a data-widgster=\"expand\" title=\"Expand\" href=\"#\"><i class=\"glyphicon glyphicon-chevron-up\"></i></a>\r\n          <a data-widgster=\"collapse\" title=\"Collapse\" href=\"#\"><i class=\"glyphicon glyphicon-chevron-down\"></i></a>\r\n          <a data-widgster=\"close\" title=\"Close\" href=\"#\"><i class=\"glyphicon glyphicon-remove\"></i></a>\r\n        </div>\r\n      </header>\r\n      <div class=\"widget-body\">\r\n        <blockquote >\r\n          There are no limits. There are plateaus, but you must not stay there, you must go beyond\r\n          them. If it kills you, it kills you. A man must constantly exceed his level.\r\n          <footer>\r\n            Bruce Lee\r\n          </footer>\r\n        </blockquote>\r\n        <p>To make a widget initially collapsed just add <code>data-widgster-collapsed=\"true\"</code> attribute to <code>.widget</code>.</p>\r\n        <p>To make it locked (prevent dragging) add <code>.locked</code> class.</p>\r\n      </div>\r\n    </section>\r\n    <section class=\"widget bg-gray\" widget>\r\n      <div class=\"widget-body no-padding\">\r\n        <div class=\"jumbotron handle bg-gray text-white mb-0\">\r\n          <div class=\"container\">\r\n            <h1>Draggable story!</h1>\r\n            <p class=\"lead\">\r\n              <em>Build</em> your own\r\n              interfaces! Sit back and relax.\r\n            </p>\r\n            <p class=\"text-xs-center\">\r\n              <a class=\"btn btn-danger btn-lg\" data-widgster=\"fullscreen\">\r\n                Fullscreen me! &nbsp;\r\n                <i class=\"fa fa-check\"></i>\r\n              </a>\r\n            </p>\r\n            <a class=\"btn btn-danger btn-lg\" data-widgster=\"restore\">\r\n              Want to go back?\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </div>\r\n</div>\r\n"

/***/ }

});
//# sourceMappingURL=24.map