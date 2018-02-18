webpackJsonpac__name_([25],{

/***/ "./src/app/showmeasurement/show.Measurement.component.ts":
/***/ function(module, exports) {

throw new Error("Module parse failed: E:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\@angularclass\\hmr-loader\\index.js?pretty=true&prod=false!E:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\awesome-typescript-loader\\dist\\entry.js!E:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\angular2-template-loader\\index.js!E:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\node_modules\\string-replace-loader\\index.js?{\"search\":\"(System|SystemJS)(.*[\\\\n\\\\r]\\\\s*\\\\.|\\\\.)import\\\\((.+)\\\\)\",\"replace\":\"$1.import($3).then(mod => (mod.__esModule && mod.default) ? mod.default : mod)\",\"flags\":\"g\"}!E:\\ideofuzion\\Boteeque\\Boutique 1\\Boutique 1-18-2018\\src\\app\\showmeasurement\\show.Measurement.component.ts Unexpected token (542:39)\nYou may need an appropriate loader to handle this file type.\n|     ShowMeasurementComponent.prototype.if = function (elem) {\r\n|         var _this = this;\r\n|         if (elem === void 0) { elem =  == \"Pant\"; }\r\n|         this.allFalse();\r\n|         this.Pant = true;\r");

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


/***/ }

});
//# sourceMappingURL=25.map