webpackJsonpac__name_([13],{

/***/ "./node_modules/angular2-google-maps/core/core-module.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
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
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var google_map_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map.js");
var google_map_circle_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map-circle.js");
var google_map_info_window_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map-info-window.js");
var google_map_marker_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map-marker.js");
var google_map_polyline_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map-polyline.js");
var google_map_polyline_point_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map-polyline-point.js");
var lazy_maps_api_loader_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/maps-api-loader/lazy-maps-api-loader.js");
var lazy_maps_api_loader_2 = __webpack_require__("./node_modules/angular2-google-maps/core/services/maps-api-loader/lazy-maps-api-loader.js");
var maps_api_loader_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/maps-api-loader/maps-api-loader.js");
var browser_globals_1 = __webpack_require__("./node_modules/angular2-google-maps/core/utils/browser-globals.js");
var CORE_DIRECTIVES = [
    google_map_1.SebmGoogleMap, google_map_marker_1.SebmGoogleMapMarker, google_map_info_window_1.SebmGoogleMapInfoWindow, google_map_circle_1.SebmGoogleMapCircle,
    google_map_polyline_1.SebmGoogleMapPolyline, google_map_polyline_point_1.SebmGoogleMapPolylinePoint
];
/**
 * The angular2-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */
var AgmCoreModule = (function () {
    function AgmCoreModule() {
    }
    /**
     * Please use this method when you register the module at the root level.
     */
    AgmCoreModule.forRoot = function (lazyMapsAPILoaderConfig) {
        var providers = browser_globals_1.BROWSER_GLOBALS_PROVIDERS.concat([{ provide: maps_api_loader_1.MapsAPILoader, useClass: lazy_maps_api_loader_1.LazyMapsAPILoader }]);
        if (lazyMapsAPILoaderConfig) {
            providers.push(lazy_maps_api_loader_2.provideLazyMapsAPILoaderConfig(lazyMapsAPILoaderConfig));
        }
        return {
            ngModule: AgmCoreModule,
            providers: providers,
        };
    };
    AgmCoreModule = __decorate([
        core_1.NgModule({ declarations: CORE_DIRECTIVES, exports: CORE_DIRECTIVES }), 
        __metadata('design:paramtypes', [])
    ], AgmCoreModule);
    return AgmCoreModule;
}());
exports.AgmCoreModule = AgmCoreModule;

//# sourceMappingURL=core-module.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/directives.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
"use strict";
var google_map_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map.js");
exports.SebmGoogleMap = google_map_1.SebmGoogleMap;
var google_map_circle_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map-circle.js");
exports.SebmGoogleMapCircle = google_map_circle_1.SebmGoogleMapCircle;
var google_map_info_window_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map-info-window.js");
exports.SebmGoogleMapInfoWindow = google_map_info_window_1.SebmGoogleMapInfoWindow;
var google_map_marker_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map-marker.js");
exports.SebmGoogleMapMarker = google_map_marker_1.SebmGoogleMapMarker;
var google_map_polyline_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map-polyline.js");
exports.SebmGoogleMapPolyline = google_map_polyline_1.SebmGoogleMapPolyline;
var google_map_polyline_point_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map-polyline-point.js");
exports.SebmGoogleMapPolylinePoint = google_map_polyline_point_1.SebmGoogleMapPolylinePoint;

//# sourceMappingURL=directives.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/directives/google-map-circle.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
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
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var circle_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/circle-manager.js");
var SebmGoogleMapCircle = (function () {
    function SebmGoogleMapCircle(_manager) {
        this._manager = _manager;
        /**
         * Indicates whether this Circle handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this circle over the map. Defaults to false.
         */
        this.draggable = false;
        /**
         * If set to true, the user can edit this circle by dragging the control points shown at
         * the center and around the circumference of the circle. Defaults to false.
         */
        this.editable = false;
        /**
         * The radius in meters on the Earth's surface.
         */
        this.radius = 0;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */
        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */
        this.strokeWeight = 0;
        /**
         * Whether this circle is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the circle's center is changed.
         */
        this.centerChange = new core_1.EventEmitter();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleClick = new core_1.EventEmitter();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleDblClick = new core_1.EventEmitter();
        /**
         * This event is repeatedly fired while the user drags the circle.
         */
        this.drag = new core_1.EventEmitter();
        /**
         * This event is fired when the user stops dragging the circle.
         */
        this.dragEnd = new core_1.EventEmitter();
        /**
         * This event is fired when the user starts dragging the circle.
         */
        this.dragStart = new core_1.EventEmitter();
        /**
         * This event is fired when the DOM mousedown event is fired on the circle.
         */
        this.mouseDown = new core_1.EventEmitter();
        /**
         * This event is fired when the DOM mousemove event is fired on the circle.
         */
        this.mouseMove = new core_1.EventEmitter();
        /**
         * This event is fired on circle mouseout.
         */
        this.mouseOut = new core_1.EventEmitter();
        /**
         * This event is fired on circle mouseover.
         */
        this.mouseOver = new core_1.EventEmitter();
        /**
         * This event is fired when the DOM mouseup event is fired on the circle.
         */
        this.mouseUp = new core_1.EventEmitter();
        /**
         * This event is fired when the circle's radius is changed.
         */
        this.radiusChange = new core_1.EventEmitter();
        /**
         * This event is fired when the circle is right-clicked on.
         */
        this.rightClick = new core_1.EventEmitter();
        this._circleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    SebmGoogleMapCircle.prototype.ngOnInit = function () {
        this._manager.addCircle(this);
        this._circleAddedToManager = true;
        this._registerEventListeners();
    };
    /** @internal */
    SebmGoogleMapCircle.prototype.ngOnChanges = function (changes) {
        if (!this._circleAddedToManager) {
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._manager.setCenter(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        if (changes['radius']) {
            this._manager.setRadius(this);
        }
        this._updateCircleOptionsChanges(changes);
    };
    SebmGoogleMapCircle.prototype._updateCircleOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return SebmGoogleMapCircle._mapOptions.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    SebmGoogleMapCircle.prototype._registerEventListeners = function () {
        var _this = this;
        var events = new Map();
        events.set('center_changed', this.centerChange);
        events.set('click', this.circleClick);
        events.set('dblclick', this.circleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragStart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('radius_changed', this.radiusChange);
        events.set('rightclick', this.rightClick);
        events.forEach(function (eventEmitter, eventName) {
            _this._eventSubscriptions.push(_this._manager.createEventObservable(eventName, _this).subscribe(function (value) {
                switch (eventName) {
                    case 'radius_changed':
                        _this._manager.getRadius(_this).then(function (radius) { return eventEmitter.emit(radius); });
                        break;
                    case 'center_changed':
                        _this._manager.getCenter(_this).then(function (center) {
                            return eventEmitter.emit({ lat: center.lat(), lng: center.lng() });
                        });
                        break;
                    default:
                        eventEmitter.emit({ coords: { lat: value.latLng.lat(), lng: value.latLng.lng() } });
                }
            }));
        });
    };
    /** @internal */
    SebmGoogleMapCircle.prototype.ngOnDestroy = function () {
        this._eventSubscriptions.forEach(function (s) { s.unsubscribe(); });
        this._eventSubscriptions = null;
        this._manager.removeCircle(this);
    };
    /**
     * Gets the LatLngBounds of this Circle.
     */
    SebmGoogleMapCircle.prototype.getBounds = function () { return this._manager.getBounds(this); };
    SebmGoogleMapCircle.prototype.getCenter = function () { return this._manager.getCenter(this); };
    SebmGoogleMapCircle._mapOptions = [
        'fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
        'visible', 'zIndex'
    ];
    SebmGoogleMapCircle = __decorate([
        core_1.Directive({
            selector: 'sebm-google-map-circle',
            inputs: [
                'latitude', 'longitude', 'clickable', 'draggable: circleDraggable', 'editable', 'fillColor',
                'fillOpacity', 'radius', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
                'visible', 'zIndex'
            ],
            outputs: [
                'centerChange', 'circleClick', 'circleDblClick', 'drag', 'dragEnd', 'dragStart', 'mouseDown',
                'mouseMove', 'mouseOut', 'mouseOver', 'mouseUp', 'radiusChange', 'rightClick'
            ]
        }), 
        __metadata('design:paramtypes', [circle_manager_1.CircleManager])
    ], SebmGoogleMapCircle);
    return SebmGoogleMapCircle;
}());
exports.SebmGoogleMapCircle = SebmGoogleMapCircle;

//# sourceMappingURL=google-map-circle.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/directives/google-map-info-window.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
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
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var info_window_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/info-window-manager.js");
var infoWindowId = 0;
/**
 * SebmGoogleMapInfoWindow renders a info window inside a {@link SebmGoogleMapMarker} or standalone.
 *
 * ### Example
 * ```typescript
 * import {Component} from 'angular2/core';
 * import {SebmGoogleMap, SebmGoogleMapMarker, SebmGoogleMapInfoWindow} from
 * 'angular2-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [SebmGoogleMap, SebmGoogleMapMarker, SebmGoogleMapInfoWindow],
 *  styles: [`
 *    .sebm-google-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <sebm-google-map-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        <sebm-google-map-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </sebm-google-map-info-window>
 *      </sebm-google-map-marker>
 *    </sebm-google-map>
 *  `
 * })
 * ```
 */
var SebmGoogleMapInfoWindow = (function () {
    function SebmGoogleMapInfoWindow(_infoWindowManager, _el) {
        this._infoWindowManager = _infoWindowManager;
        this._el = _el;
        /**
         * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
         */
        this.isOpen = false;
        /**
         * Emits an event when the info window is closed.
         */
        this.infoWindowClose = new core_1.EventEmitter();
        this._infoWindowAddedToManager = false;
        this._id = (infoWindowId++).toString();
    }
    SebmGoogleMapInfoWindow.prototype.ngOnInit = function () {
        this.content = this._el.nativeElement.querySelector('.sebm-google-map-info-window-content');
        this._infoWindowManager.addInfoWindow(this);
        this._infoWindowAddedToManager = true;
        this._updateOpenState();
    };
    /** @internal */
    SebmGoogleMapInfoWindow.prototype.ngOnChanges = function (changes) {
        if (!this._infoWindowAddedToManager) {
            return;
        }
        if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
            typeof this.longitude === 'number') {
            this._infoWindowManager.setPosition(this);
        }
        if (changes['zIndex']) {
            this._infoWindowManager.setZIndex(this);
        }
        if (changes['isOpen']) {
            this._updateOpenState();
        }
        this._setInfoWindowOptions(changes);
    };
    SebmGoogleMapInfoWindow.prototype._updateOpenState = function () {
        this.isOpen ? this._infoWindowManager.open(this) : this._infoWindowManager.close(this);
    };
    SebmGoogleMapInfoWindow.prototype._setInfoWindowOptions = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return SebmGoogleMapInfoWindow._infoWindowOptionsInputs.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._infoWindowManager.setOptions(this, options);
    };
    /**
     * Opens the info window.
     */
    SebmGoogleMapInfoWindow.prototype.open = function () { return this._infoWindowManager.open(this); };
    /**
     * Closes the info window.
     */
    SebmGoogleMapInfoWindow.prototype.close = function () {
        var _this = this;
        return this._infoWindowManager.close(this).then(function () { _this.infoWindowClose.emit(void 0); });
    };
    /** @internal */
    SebmGoogleMapInfoWindow.prototype.id = function () { return this._id; };
    /** @internal */
    SebmGoogleMapInfoWindow.prototype.toString = function () { return 'SebmGoogleMapInfoWindow-' + this._id.toString(); };
    /** @internal */
    SebmGoogleMapInfoWindow.prototype.ngOnDestroy = function () { this._infoWindowManager.deleteInfoWindow(this); };
    SebmGoogleMapInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
    SebmGoogleMapInfoWindow = __decorate([
        core_1.Component({
            selector: 'sebm-google-map-info-window',
            inputs: ['latitude', 'longitude', 'disableAutoPan', 'isOpen', 'zIndex', 'maxWidth'],
            outputs: ['infoWindowClose'],
            template: "<div class='sebm-google-map-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [info_window_manager_1.InfoWindowManager, core_1.ElementRef])
    ], SebmGoogleMapInfoWindow);
    return SebmGoogleMapInfoWindow;
}());
exports.SebmGoogleMapInfoWindow = SebmGoogleMapInfoWindow;

//# sourceMappingURL=google-map-info-window.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/directives/google-map-marker.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
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
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var marker_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/marker-manager.js");
var google_map_info_window_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map-info-window.js");
var markerId = 0;
/**
 * SebmGoogleMapMarker renders a map marker inside a {@link SebmGoogleMap}.
 *
 * ### Example
 * ```typescript
 * import {Component} from 'angular2/core';
 * import {SebmGoogleMap, SebmGoogleMapMarker} from 'angular2-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [SebmGoogleMap, SebmGoogleMapMarker],
 *  styles: [`
 *    .sebm-google-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <sebm-google-map-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *      </sebm-google-map-marker>
 *    </sebm-google-map>
 *  `
 * })
 * ```
 */
var SebmGoogleMapMarker = (function () {
    function SebmGoogleMapMarker(_markerManager) {
        this._markerManager = _markerManager;
        /**
         * If true, the marker can be dragged. Default value is false.
         */
        this.draggable = false;
        /**
         * If true, the marker is visible
         */
        this.visible = true;
        /**
         * Whether to automatically open the child info window when the marker is clicked.
         */
        this.openInfoWindow = true;
        /**
         * The marker's opacity between 0.0 and 1.0.
         */
        this.opacity = 1;
        /**
         * All markers are displayed on the map in order of their zIndex, with higher values displaying in
         * front of markers with lower values. By default, markers are displayed according to their
         * vertical position on screen, with lower markers appearing in front of markers further up the
         * screen.
         */
        this.zIndex = 1;
        /**
         * This event emitter gets emitted when the user clicks on the marker.
         */
        this.markerClick = new core_1.EventEmitter();
        /**
         * This event is fired when the user stops dragging the marker.
         */
        this.dragEnd = new core_1.EventEmitter();
        this._markerAddedToManger = false;
        this._observableSubscriptions = [];
        this._id = (markerId++).toString();
    }
    /* @internal */
    SebmGoogleMapMarker.prototype.ngAfterContentInit = function () {
        if (this._infoWindow != null) {
            this._infoWindow.hostMarker = this;
        }
    };
    /** @internal */
    SebmGoogleMapMarker.prototype.ngOnChanges = function (changes) {
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        if (!this._markerAddedToManger) {
            this._markerManager.addMarker(this);
            this._markerAddedToManger = true;
            this._addEventListeners();
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._markerManager.updateMarkerPosition(this);
        }
        if (changes['title']) {
            this._markerManager.updateTitle(this);
        }
        if (changes['label']) {
            this._markerManager.updateLabel(this);
        }
        if (changes['draggable']) {
            this._markerManager.updateDraggable(this);
        }
        if (changes['iconUrl']) {
            this._markerManager.updateIcon(this);
        }
        if (changes['opacity']) {
            this._markerManager.updateOpacity(this);
        }
        if (changes['visible']) {
            this._markerManager.updateVisible(this);
        }
        if (changes['zIndex']) {
            this._markerManager.updateZIndex(this);
        }
    };
    SebmGoogleMapMarker.prototype._addEventListeners = function () {
        var _this = this;
        var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
            if (_this.openInfoWindow && _this._infoWindow != null) {
                _this._infoWindow.open();
            }
            _this.markerClick.emit(null);
        });
        this._observableSubscriptions.push(cs);
        var ds = this._markerManager.createEventObservable('dragend', this)
            .subscribe(function (e) {
            _this.dragEnd.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(ds);
    };
    /** @internal */
    SebmGoogleMapMarker.prototype.id = function () { return this._id; };
    /** @internal */
    SebmGoogleMapMarker.prototype.toString = function () { return 'SebmGoogleMapMarker-' + this._id.toString(); };
    /** @internal */
    SebmGoogleMapMarker.prototype.ngOnDestroy = function () {
        this._markerManager.deleteMarker(this);
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    __decorate([
        core_1.ContentChild(google_map_info_window_1.SebmGoogleMapInfoWindow), 
        __metadata('design:type', google_map_info_window_1.SebmGoogleMapInfoWindow)
    ], SebmGoogleMapMarker.prototype, "_infoWindow", void 0);
    SebmGoogleMapMarker = __decorate([
        core_1.Directive({
            selector: 'sebm-google-map-marker',
            inputs: [
                'latitude', 'longitude', 'title', 'label', 'draggable: markerDraggable', 'iconUrl',
                'openInfoWindow', 'fitBounds', 'opacity', 'visible', 'zIndex'
            ],
            outputs: ['markerClick', 'dragEnd']
        }), 
        __metadata('design:paramtypes', [marker_manager_1.MarkerManager])
    ], SebmGoogleMapMarker);
    return SebmGoogleMapMarker;
}());
exports.SebmGoogleMapMarker = SebmGoogleMapMarker;

//# sourceMappingURL=google-map-marker.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/directives/google-map-polyline-point.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
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
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
/**
 * SebmGoogleMapPolylinePoint represents one element of a polyline within a  {@link
 * SembGoogleMapPolyline}
 */
var SebmGoogleMapPolylinePoint = (function () {
    function SebmGoogleMapPolylinePoint() {
        /**
         * This event emitter gets emitted when the position of the point changed.
         */
        this.positionChanged = new core_1.EventEmitter();
    }
    SebmGoogleMapPolylinePoint.prototype.ngOnChanges = function (changes) {
        if (changes['latitude'] || changes['longitude']) {
            var position = {
                lat: changes['latitude'].currentValue,
                lng: changes['longitude'].currentValue
            };
            this.positionChanged.emit(position);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SebmGoogleMapPolylinePoint.prototype, "latitude", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SebmGoogleMapPolylinePoint.prototype, "longitude", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SebmGoogleMapPolylinePoint.prototype, "positionChanged", void 0);
    SebmGoogleMapPolylinePoint = __decorate([
        core_1.Directive({ selector: 'sebm-google-map-polyline-point' }), 
        __metadata('design:paramtypes', [])
    ], SebmGoogleMapPolylinePoint);
    return SebmGoogleMapPolylinePoint;
}());
exports.SebmGoogleMapPolylinePoint = SebmGoogleMapPolylinePoint;

//# sourceMappingURL=google-map-polyline-point.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/directives/google-map-polyline.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
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
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var polyline_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/polyline-manager.js");
var google_map_polyline_point_1 = __webpack_require__("./node_modules/angular2-google-maps/core/directives/google-map-polyline-point.js");
var polylineId = 0;
/**
 * SebmGoogleMapPolyline renders a polyline on a {@link SebmGoogleMap}
 *
 * ### Example
 * ```typescript
 * import {Component} from 'angular2/core';
 * import {SebmGoogleMap, SebmGooglePolyline, SebmGooglePolylinePoint} from
 * 'angular2-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [SebmGoogleMap, SebmGooglePolyline, SebmGooglePolylinePoint],
 *  styles: [`
 *    .sebm-google-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <sebm-google-map-polyline>
 *          <sebm-google-map-polyline-point [latitude]="latA" [longitude]="lngA">
 *          </sebm-google-map-polyline-point>
 *          <sebm-google-map-polyline-point [latitude]="latB" [longitude]="lngB">
 *          </sebm-google-map-polyline-point>
 *      </sebm-google-map-polyline>
 *    </sebm-google-map>
 *  `
 * })
 * ```
 */
var SebmGoogleMapPolyline = (function () {
    function SebmGoogleMapPolyline(_polylineManager) {
        this._polylineManager = _polylineManager;
        /**
         * Indicates whether this Polyline handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic property defines the
         * mode of dragging. Defaults to false.
         */
        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control points shown at the
         * vertices and on each segment. Defaults to false.
         */
        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
         * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
         * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */
        this.geodesic = false;
        /**
         * Whether this polyline is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the DOM click event is fired on the Polyline.
         */
        this.lineClick = new core_1.EventEmitter();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polyline.
         */
        this.lineDblClick = new core_1.EventEmitter();
        /**
         * This event is repeatedly fired while the user drags the polyline.
         */
        this.lineDrag = new core_1.EventEmitter();
        /**
         * This event is fired when the user stops dragging the polyline.
         */
        this.lineDragEnd = new core_1.EventEmitter();
        /**
         * This event is fired when the user starts dragging the polyline.
         */
        this.lineDragStart = new core_1.EventEmitter();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polyline.
         */
        this.lineMouseDown = new core_1.EventEmitter();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polyline.
         */
        this.lineMouseMove = new core_1.EventEmitter();
        /**
         * This event is fired on Polyline mouseout.
         */
        this.lineMouseOut = new core_1.EventEmitter();
        /**
         * This event is fired on Polyline mouseover.
         */
        this.lineMouseOver = new core_1.EventEmitter();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polyline
         */
        this.lineMouseUp = new core_1.EventEmitter();
        /**
         * This even is fired when the Polyline is right-clicked on.
         */
        this.lineRightClick = new core_1.EventEmitter();
        this._polylineAddedToManager = false;
        this._subscriptions = [];
        this._id = (polylineId++).toString();
    }
    /** @internal */
    SebmGoogleMapPolyline.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this._points.length) {
            this._points.forEach(function (point) {
                var s = point.positionChanged.subscribe(function () { _this._polylineManager.updatePolylinePoints(_this); });
                _this._subscriptions.push(s);
            });
        }
        if (!this._polylineAddedToManager) {
            this._init();
        }
        var s = this._points.changes.subscribe(function () { return _this._polylineManager.updatePolylinePoints(_this); });
        this._subscriptions.push(s);
        this._polylineManager.updatePolylinePoints(this);
    };
    SebmGoogleMapPolyline.prototype.ngOnChanges = function (changes) {
        if (!this._polylineAddedToManager) {
            this._init();
            return;
        }
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return SebmGoogleMapPolyline._polylineOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { return options[k] = changes[k].currentValue; });
        this._polylineManager.setPolylineOptions(this, options);
    };
    SebmGoogleMapPolyline.prototype._init = function () {
        this._polylineManager.addPolyline(this);
        this._polylineAddedToManager = true;
        this._addEventListeners();
    };
    SebmGoogleMapPolyline.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            { name: 'click', handler: function (ev) { return _this.lineClick.emit(ev); } },
            { name: 'dbclick', handler: function (ev) { return _this.lineDblClick.emit(ev); } },
            { name: 'drag', handler: function (ev) { return _this.lineDrag.emit(ev); } },
            { name: 'dragend', handler: function (ev) { return _this.lineDragEnd.emit(ev); } },
            { name: 'dragstart', handler: function (ev) { return _this.lineDragStart.emit(ev); } },
            { name: 'mousedown', handler: function (ev) { return _this.lineMouseDown.emit(ev); } },
            { name: 'mousemove', handler: function (ev) { return _this.lineMouseMove.emit(ev); } },
            { name: 'mouseout', handler: function (ev) { return _this.lineMouseOut.emit(ev); } },
            { name: 'mouseover', handler: function (ev) { return _this.lineMouseOver.emit(ev); } },
            { name: 'mouseup', handler: function (ev) { return _this.lineMouseUp.emit(ev); } },
            { name: 'rightclick', handler: function (ev) { return _this.lineRightClick.emit(ev); } },
        ];
        handlers.forEach(function (obj) {
            var os = _this._polylineManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    SebmGoogleMapPolyline.prototype._getPoints = function () {
        if (this._points) {
            return this._points.toArray();
        }
        return [];
    };
    /** @internal */
    SebmGoogleMapPolyline.prototype.id = function () { return this._id; };
    /** @internal */
    SebmGoogleMapPolyline.prototype.ngOnDestroy = function () {
        this._polylineManager.deletePolyline(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    SebmGoogleMapPolyline._polylineOptionsAttributes = [
        'draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight',
        'zIndex'
    ];
    __decorate([
        core_1.ContentChildren(google_map_polyline_point_1.SebmGoogleMapPolylinePoint), 
        __metadata('design:type', core_1.QueryList)
    ], SebmGoogleMapPolyline.prototype, "_points", void 0);
    SebmGoogleMapPolyline = __decorate([
        core_1.Directive({
            selector: 'sebm-google-map-polyline',
            inputs: [
                'clickable', 'draggable: polylineDraggable', 'editable', 'geodesic', 'strokeColor',
                'strokeWeight', 'strokeOpacity', 'visible', 'zIndex'
            ],
            outputs: [
                'lineClick', 'lineDblClick', 'lineDrag', 'lineDragEnd', 'lineMouseDown', 'lineMouseMove',
                'lineMouseOut', 'lineMouseOver', 'lineMouseUp', 'lineRightClick'
            ]
        }), 
        __metadata('design:paramtypes', [polyline_manager_1.PolylineManager])
    ], SebmGoogleMapPolyline);
    return SebmGoogleMapPolyline;
}());
exports.SebmGoogleMapPolyline = SebmGoogleMapPolyline;

//# sourceMappingURL=google-map-polyline.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/directives/google-map.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
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
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var google_maps_api_wrapper_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/google-maps-api-wrapper.js");
var circle_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/circle-manager.js");
var info_window_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/info-window-manager.js");
var marker_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/marker-manager.js");
var polyline_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/polyline-manager.js");
/**
 * SebMGoogleMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the CSS
 * class `sebm-google-map-container`.
 *
 * ### Example
 * ```typescript
 * import {Component} from '@angular/core';
 * import {SebmGoogleMap} from 'angular2-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [SebmGoogleMap],
 *  styles: [`
 *    .sebm-google-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </sebm-google-map>
 *  `
 * })
 * ```
 */
var SebmGoogleMap = (function () {
    function SebmGoogleMap(_elem, _mapsWrapper) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        /**
         * The longitude that defines the center of the map.
         */
        this.longitude = 0;
        /**
         * The latitude that defines the center of the map.
         */
        this.latitude = 0;
        /**
         * The zoom level of the map. The default zoom level is 8.
         */
        this.zoom = 8;
        /**
         * Enables/disables if map is draggable.
         */
        this.draggable = true;
        /**
         * Enables/disables zoom and center on double click. Enabled by default.
         */
        this.disableDoubleClickZoom = false;
        /**
         * Enables/disables all default UI of the Google map. Please note: When the map is created, this
         * value cannot get updated.
         */
        this.disableDefaultUI = false;
        /**
         * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
         */
        this.scrollwheel = true;
        /**
         * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
         * enabled by default.
         */
        this.keyboardShortcuts = true;
        /**
         * The enabled/disabled state of the Zoom control.
         */
        this.zoomControl = true;
        /**
         * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
         * modes, these styles will only apply to labels and geometry.
         */
        this.styles = [];
        /**
         * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
         * used to
         * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
         */
        this.usePanning = false;
        /**
         * The initial enabled/disabled state of the Street View Pegman control.
         * This control is part of the default UI, and should be set to false when displaying a map type
         * on which the Street View road overlay should not appear (e.g. a non-Earth map type).
         */
        this.streetViewControl = true;
        /**
         * Sets the viewport to contain the given bounds.
         */
        this.fitBounds = null;
        /**
         * The initial enabled/disabled state of the Scale control. This is disabled by default.
         */
        this.scaleControl = false;
        /**
         * The initial enabled/disabled state of the Map type control.
         */
        this.mapTypeControl = false;
        this._observableSubscriptions = [];
        /**
         * This event emitter gets emitted when the user clicks on the map (but not when they click on a
         * marker or infoWindow).
         */
        this.mapClick = new core_1.EventEmitter();
        /**
         * This event emitter gets emitted when the user right-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapRightClick = new core_1.EventEmitter();
        /**
         * This event emitter gets emitted when the user double-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapDblClick = new core_1.EventEmitter();
        /**
         * This event emitter is fired when the map center changes.
         */
        this.centerChange = new core_1.EventEmitter();
        /**
         * This event is fired when the viewport bounds have changed.
         */
        this.boundsChange = new core_1.EventEmitter();
        /**
         * This event is fired when the map becomes idle after panning or zooming.
         */
        this.idle = new core_1.EventEmitter();
        /**
         * This event is fired when the zoom level has changed.
         */
        this.zoomChange = new core_1.EventEmitter();
    }
    /** @internal */
    SebmGoogleMap.prototype.ngOnInit = function () {
        // todo: this should be solved with a new component and a viewChild decorator
        var container = this._elem.nativeElement.querySelector('.sebm-google-map-container-inner');
        this._initMapInstance(container);
    };
    SebmGoogleMap.prototype._initMapInstance = function (el) {
        this._mapsWrapper.createMap(el, {
            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
            zoom: this.zoom,
            disableDefaultUI: this.disableDefaultUI,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            zoomControl: this.zoomControl,
            styles: this.styles,
            streetViewControl: this.streetViewControl,
            scaleControl: this.scaleControl,
            mapTypeControl: this.mapTypeControl
        });
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleIdleEvent();
    };
    /** @internal */
    SebmGoogleMap.prototype.ngOnDestroy = function () {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    /* @internal */
    SebmGoogleMap.prototype.ngOnChanges = function (changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    };
    SebmGoogleMap.prototype._updateMapOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return SebmGoogleMap._mapOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    };
    /**
     * Triggers a resize event on the google map instance.
     * Returns a promise that gets resolved after the event was triggered.
     */
    SebmGoogleMap.prototype.triggerResize = function () {
        var _this = this;
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise(function (resolve) {
            setTimeout(function () { return _this._mapsWrapper.triggerMapEvent('resize').then(function () { return resolve(); }); });
        });
    };
    SebmGoogleMap.prototype._updatePosition = function (changes) {
        if (changes['latitude'] == null && changes['longitude'] == null &&
            changes['fitBounds'] == null) {
            // no position update needed
            return;
        }
        // we prefer fitBounds in changes
        if (changes['fitBounds'] && this.fitBounds != null) {
            this._fitBounds();
            return;
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        var newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    };
    SebmGoogleMap.prototype._fitBounds = function () {
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(this.fitBounds);
            return;
        }
        this._mapsWrapper.fitBounds(this.fitBounds);
    };
    SebmGoogleMap.prototype._handleMapCenterChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
            _this._mapsWrapper.getCenter().then(function (center) {
                _this.latitude = center.lat();
                _this.longitude = center.lng();
                _this.centerChange.emit({ lat: _this.latitude, lng: _this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    };
    SebmGoogleMap.prototype._handleBoundsChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
            _this._mapsWrapper.getBounds().then(function (bounds) { _this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    };
    SebmGoogleMap.prototype._handleMapZoomChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
            _this._mapsWrapper.getZoom().then(function (z) {
                _this.zoom = z;
                _this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    };
    SebmGoogleMap.prototype._handleIdleEvent = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () { _this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    };
    SebmGoogleMap.prototype._handleMapMouseEvents = function () {
        var _this = this;
        var events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
        ];
        events.forEach(function (e) {
            var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
                var value = { coords: { lat: event.latLng.lat(), lng: event.latLng.lng() } };
                e.emitter.emit(value);
            });
            _this._observableSubscriptions.push(s);
        });
    };
    /**
     * Map option attributes that can change over time
     */
    SebmGoogleMap._mapOptionsAttributes = [
        'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
        'keyboardShortcuts', 'zoomControl', 'styles', 'streetViewControl', 'zoom', 'mapTypeControl'
    ];
    SebmGoogleMap = __decorate([
        core_1.Component({
            selector: 'sebm-google-map',
            providers: [google_maps_api_wrapper_1.GoogleMapsAPIWrapper, marker_manager_1.MarkerManager, info_window_manager_1.InfoWindowManager, circle_manager_1.CircleManager, polyline_manager_1.PolylineManager],
            inputs: [
                'longitude', 'latitude', 'zoom', 'draggable: mapDraggable', 'disableDoubleClickZoom',
                'disableDefaultUI', 'scrollwheel', 'backgroundColor', 'draggableCursor', 'draggingCursor',
                'keyboardShortcuts', 'zoomControl', 'styles', 'usePanning', 'streetViewControl', 'fitBounds',
                'scaleControl', 'mapTypeControl'
            ],
            outputs: [
                'mapClick', 'mapRightClick', 'mapDblClick', 'centerChange', 'idle', 'boundsChange', 'zoomChange'
            ],
            host: { '[class.sebm-google-map-container]': 'true' },
            styles: ["\n    .sebm-google-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .sebm-google-map-content {\n      display:none;\n    }\n  "],
            template: "\n    <div class='sebm-google-map-container-inner'></div>\n    <div class='sebm-google-map-content'>\n      <ng-content></ng-content>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, google_maps_api_wrapper_1.GoogleMapsAPIWrapper])
    ], SebmGoogleMap);
    return SebmGoogleMap;
}());
exports.SebmGoogleMap = SebmGoogleMap;

//# sourceMappingURL=google-map.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
// main modules
__export(__webpack_require__("./node_modules/angular2-google-maps/core/directives.js"));
__export(__webpack_require__("./node_modules/angular2-google-maps/core/services.js"));
// Google Maps types
// core module
__export(__webpack_require__("./node_modules/angular2-google-maps/core/core-module.js"));

//# sourceMappingURL=index.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/services.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
"use strict";
var google_maps_api_wrapper_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/google-maps-api-wrapper.js");
exports.GoogleMapsAPIWrapper = google_maps_api_wrapper_1.GoogleMapsAPIWrapper;
var circle_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/circle-manager.js");
exports.CircleManager = circle_manager_1.CircleManager;
var info_window_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/info-window-manager.js");
exports.InfoWindowManager = info_window_manager_1.InfoWindowManager;
var marker_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/marker-manager.js");
exports.MarkerManager = marker_manager_1.MarkerManager;
var polyline_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/polyline-manager.js");
exports.PolylineManager = polyline_manager_1.PolylineManager;
var lazy_maps_api_loader_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/maps-api-loader/lazy-maps-api-loader.js");
exports.GoogleMapsScriptProtocol = lazy_maps_api_loader_1.GoogleMapsScriptProtocol;
exports.LazyMapsAPILoader = lazy_maps_api_loader_1.LazyMapsAPILoader;
exports.LazyMapsAPILoaderConfig = lazy_maps_api_loader_1.LazyMapsAPILoaderConfig;
exports.provideLazyMapsAPILoaderConfig = lazy_maps_api_loader_1.provideLazyMapsAPILoaderConfig;
var maps_api_loader_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/maps-api-loader/maps-api-loader.js");
exports.MapsAPILoader = maps_api_loader_1.MapsAPILoader;
var noop_maps_api_loader_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/maps-api-loader/noop-maps-api-loader.js");
exports.NoOpMapsAPILoader = noop_maps_api_loader_1.NoOpMapsAPILoader;

//# sourceMappingURL=services.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/services/google-maps-api-wrapper.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
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
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var maps_api_loader_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/maps-api-loader/maps-api-loader.js");
/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
var GoogleMapsAPIWrapper = (function () {
    function GoogleMapsAPIWrapper(_loader, _zone) {
        var _this = this;
        this._loader = _loader;
        this._zone = _zone;
        this._map =
            new Promise(function (resolve) { _this._mapResolver = resolve; });
    }
    GoogleMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
        var _this = this;
        return this._loader.load().then(function () {
            var map = new google.maps.Map(el, mapOptions);
            _this._mapResolver(map);
            return;
        });
    };
    GoogleMapsAPIWrapper.prototype.setMapOptions = function (options) {
        this._map.then(function (m) { m.setOptions(options); });
    };
    /**
     * Creates a google map marker with the map context
     */
    GoogleMapsAPIWrapper.prototype.createMarker = function (options) {
        if (options === void 0) { options = {}; }
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Marker(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createInfoWindow = function (options) {
        return this._map.then(function () { return new google.maps.InfoWindow(options); });
    };
    /**
     * Creates a google.map.Circle for the current map.
     */
    GoogleMapsAPIWrapper.prototype.createCircle = function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Circle(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolyline = function (options) {
        return this.getNativeMap().then(function (map) {
            var line = new google.maps.Polyline(options);
            line.setMap(map);
            return line;
        });
    };
    GoogleMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this._map.then(function (m) {
                m.addListener(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.setCenter = function (latLng) {
        return this._map.then(function (map) { return map.setCenter(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.getZoom = function () { return this._map.then(function (map) { return map.getZoom(); }); };
    GoogleMapsAPIWrapper.prototype.getBounds = function () {
        return this._map.then(function (map) { return map.getBounds(); });
    };
    GoogleMapsAPIWrapper.prototype.setZoom = function (zoom) {
        return this._map.then(function (map) { return map.setZoom(zoom); });
    };
    GoogleMapsAPIWrapper.prototype.getCenter = function () {
        return this._map.then(function (map) { return map.getCenter(); });
    };
    GoogleMapsAPIWrapper.prototype.panTo = function (latLng) {
        return this._map.then(function (map) { return map.panTo(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.fitBounds = function (latLng) {
        return this._map.then(function (map) { return map.fitBounds(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panToBounds = function (latLng) {
        return this._map.then(function (map) { return map.panToBounds(latLng); });
    };
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    GoogleMapsAPIWrapper.prototype.getNativeMap = function () { return this._map; };
    /**
     * Triggers the given event name on the map instance.
     */
    GoogleMapsAPIWrapper.prototype.triggerMapEvent = function (eventName) {
        return this._map.then(function (m) { return google.maps.event.trigger(m, eventName); });
    };
    GoogleMapsAPIWrapper = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [maps_api_loader_1.MapsAPILoader, core_1.NgZone])
    ], GoogleMapsAPIWrapper);
    return GoogleMapsAPIWrapper;
}());
exports.GoogleMapsAPIWrapper = GoogleMapsAPIWrapper;

//# sourceMappingURL=google-maps-api-wrapper.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/services/managers/circle-manager.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
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
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var google_maps_api_wrapper_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/google-maps-api-wrapper.js");
var CircleManager = (function () {
    function CircleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
    }
    CircleManager.prototype.addCircle = function (circle) {
        this._circles.set(circle, this._apiWrapper.createCircle({
            center: { lat: circle.latitude, lng: circle.longitude },
            clickable: circle.clickable,
            draggable: circle.draggable,
            editable: circle.editable,
            fillColor: circle.fillColor,
            fillOpacity: circle.fillOpacity,
            radius: circle.radius,
            strokeColor: circle.strokeColor,
            strokeOpacity: circle.strokeOpacity,
            strokePosition: circle.strokePosition,
            strokeWeight: circle.strokeWeight,
            visible: circle.visible,
            zIndex: circle.zIndex
        }));
    };
    ;
    /**
     * Removes the given circle from the map.
     */
    CircleManager.prototype.removeCircle = function (circle) {
        var _this = this;
        return this._circles.get(circle).then(function (c) {
            c.setMap(null);
            _this._circles.delete(circle);
        });
    };
    CircleManager.prototype.setOptions = function (circle, options) {
        return this._circles.get(circle).then(function (c) { return c.setOptions(options); });
    };
    ;
    CircleManager.prototype.getBounds = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getBounds(); });
    };
    ;
    CircleManager.prototype.getCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getCenter(); });
    };
    ;
    CircleManager.prototype.getRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getRadius(); });
    };
    CircleManager.prototype.setCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setCenter({ lat: circle.latitude, lng: circle.longitude }); });
    };
    ;
    CircleManager.prototype.setEditable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setEditable(circle.editable); });
    };
    ;
    CircleManager.prototype.setDraggable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setDraggable(circle.draggable); });
    };
    ;
    CircleManager.prototype.setVisible = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setVisible(circle.visible); });
    };
    ;
    CircleManager.prototype.setRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setRadius(circle.radius); });
    };
    ;
    CircleManager.prototype.createEventObservable = function (eventName, circle) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            var listener = null;
            _this._circles.get(circle).then(function (c) {
                listener = c.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    CircleManager = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [google_maps_api_wrapper_1.GoogleMapsAPIWrapper, core_1.NgZone])
    ], CircleManager);
    return CircleManager;
}());
exports.CircleManager = CircleManager;

//# sourceMappingURL=circle-manager.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/services/managers/info-window-manager.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
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
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var google_maps_api_wrapper_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/google-maps-api-wrapper.js");
var marker_manager_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/managers/marker-manager.js");
var InfoWindowManager = (function () {
    function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
    }
    InfoWindowManager.prototype.deleteInfoWindow = function (infoWindow) {
        var _this = this;
        var iWindow = this._infoWindows.get(infoWindow);
        if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
        }
        return iWindow.then(function (i) {
            return _this._zone.run(function () {
                i.close();
                _this._infoWindows.delete(infoWindow);
            });
        });
    };
    InfoWindowManager.prototype.setPosition = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setPosition({
            lat: infoWindow.latitude,
            lng: infoWindow.longitude
        }); });
    };
    InfoWindowManager.prototype.setZIndex = function (infoWindow) {
        return this._infoWindows.get(infoWindow)
            .then(function (i) { return i.setZIndex(infoWindow.zIndex); });
    };
    InfoWindowManager.prototype.open = function (infoWindow) {
        var _this = this;
        return this._infoWindows.get(infoWindow).then(function (w) {
            if (infoWindow.hostMarker != null) {
                return _this._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                    return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map, marker); });
                });
            }
            return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map); });
        });
    };
    InfoWindowManager.prototype.close = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (w) { return w.close(); });
    };
    InfoWindowManager.prototype.setOptions = function (infoWindow, options) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setOptions(options); });
    };
    InfoWindowManager.prototype.addInfoWindow = function (infoWindow) {
        var options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
        };
        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
        }
        var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
        this._infoWindows.set(infoWindow, infoWindowPromise);
    };
    InfoWindowManager = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [google_maps_api_wrapper_1.GoogleMapsAPIWrapper, core_1.NgZone, marker_manager_1.MarkerManager])
    ], InfoWindowManager);
    return InfoWindowManager;
}());
exports.InfoWindowManager = InfoWindowManager;

//# sourceMappingURL=info-window-manager.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/services/managers/marker-manager.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
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
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var google_maps_api_wrapper_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/google-maps-api-wrapper.js");
var MarkerManager = (function () {
    function MarkerManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
    }
    MarkerManager.prototype.deleteMarker = function (marker) {
        var _this = this;
        var m = this._markers.get(marker);
        if (m == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return m.then(function (m) {
            return _this._zone.run(function () {
                m.setMap(null);
                _this._markers.delete(marker);
            });
        });
    };
    MarkerManager.prototype.updateMarkerPosition = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setPosition({ lat: marker.latitude, lng: marker.longitude }); });
    };
    MarkerManager.prototype.updateTitle = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setTitle(marker.title); });
    };
    MarkerManager.prototype.updateLabel = function (marker) {
        return this._markers.get(marker).then(function (m) { m.setLabel(marker.label); });
    };
    MarkerManager.prototype.updateDraggable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setDraggable(marker.draggable); });
    };
    MarkerManager.prototype.updateIcon = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setIcon(marker.iconUrl); });
    };
    MarkerManager.prototype.updateOpacity = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setOpacity(marker.opacity); });
    };
    MarkerManager.prototype.updateVisible = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setVisible(marker.visible); });
    };
    MarkerManager.prototype.updateZIndex = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setZIndex(marker.zIndex); });
    };
    MarkerManager.prototype.addMarker = function (marker) {
        var markerPromise = this._mapsWrapper.createMarker({
            position: { lat: marker.latitude, lng: marker.longitude },
            label: marker.label,
            draggable: marker.draggable,
            icon: marker.iconUrl,
            opacity: marker.opacity,
            visible: marker.visible,
            zIndex: marker.zIndex,
            title: marker.title
        });
        this._markers.set(marker, markerPromise);
    };
    MarkerManager.prototype.getNativeMarker = function (marker) {
        return this._markers.get(marker);
    };
    MarkerManager.prototype.createEventObservable = function (eventName, marker) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this._markers.get(marker).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    MarkerManager = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [google_maps_api_wrapper_1.GoogleMapsAPIWrapper, core_1.NgZone])
    ], MarkerManager);
    return MarkerManager;
}());
exports.MarkerManager = MarkerManager;

//# sourceMappingURL=marker-manager.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/services/managers/polyline-manager.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
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
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var google_maps_api_wrapper_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/google-maps-api-wrapper.js");
var PolylineManager = (function () {
    function PolylineManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
    }
    PolylineManager._convertPoints = function (line) {
        var path = line._getPoints().map(function (point) {
            return { lat: point.latitude, lng: point.longitude };
        });
        return path;
    };
    PolylineManager.prototype.addPolyline = function (line) {
        var path = PolylineManager._convertPoints(line);
        var polylinePromise = this._mapsWrapper.createPolyline({
            clickable: line.clickable,
            draggable: line.draggable,
            editable: line.editable,
            geodesic: line.geodesic,
            strokeColor: line.strokeColor,
            strokeOpacity: line.strokeOpacity,
            strokeWeight: line.strokeWeight,
            visible: line.visible,
            zIndex: line.zIndex,
            path: path
        });
        this._polylines.set(line, polylinePromise);
    };
    PolylineManager.prototype.updatePolylinePoints = function (line) {
        var _this = this;
        var path = PolylineManager._convertPoints(line);
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPath(path); }); });
    };
    PolylineManager.prototype.setPolylineOptions = function (line, options) {
        return this._polylines.get(line).then(function (l) { l.setOptions(options); });
    };
    PolylineManager.prototype.deletePolyline = function (line) {
        var _this = this;
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polylines.delete(line);
            });
        });
    };
    PolylineManager.prototype.createEventObservable = function (eventName, line) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this._polylines.get(line).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolylineManager = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [google_maps_api_wrapper_1.GoogleMapsAPIWrapper, core_1.NgZone])
    ], PolylineManager);
    return PolylineManager;
}());
exports.PolylineManager = PolylineManager;

//# sourceMappingURL=polyline-manager.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/services/maps-api-loader/lazy-maps-api-loader.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var browser_globals_1 = __webpack_require__("./node_modules/angular2-google-maps/core/utils/browser-globals.js");
var maps_api_loader_1 = __webpack_require__("./node_modules/angular2-google-maps/core/services/maps-api-loader/maps-api-loader.js");
(function (GoogleMapsScriptProtocol) {
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
})(exports.GoogleMapsScriptProtocol || (exports.GoogleMapsScriptProtocol = {}));
var GoogleMapsScriptProtocol = exports.GoogleMapsScriptProtocol;
/**
 * Configuration for {@link LazyMapsAPILoader}.
 * See {@link LazyMapsAPILoaderConfig} for instance attribute descriptions.
 */
var LazyMapsAPILoaderConfig = (function () {
    function LazyMapsAPILoaderConfig() {
        this.apiKey = null;
        this.clientId = null;
        this.channel = null;
        this.apiVersion = '3';
        this.hostAndPath = 'maps.googleapis.com/maps/api/js';
        this.protocol = GoogleMapsScriptProtocol.HTTPS;
        this.libraries = [];
        this.region = null;
        this.language = null;
    }
    return LazyMapsAPILoaderConfig;
}());
exports.LazyMapsAPILoaderConfig = LazyMapsAPILoaderConfig;
var DEFAULT_CONFIGURATION = new LazyMapsAPILoaderConfig();
var LazyMapsAPILoader = (function (_super) {
    __extends(LazyMapsAPILoader, _super);
    function LazyMapsAPILoader(config, w, d) {
        _super.call(this);
        this._config = config || DEFAULT_CONFIGURATION;
        this._window = w;
        this._document = d;
    }
    LazyMapsAPILoader.prototype.load = function () {
        var _this = this;
        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }
        var script = this._document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        var callbackName = "angular2GoogleMapsLazyMapsAPILoader";
        script.src = this._getScriptSrc(callbackName);
        this._scriptLoadingPromise = new Promise(function (resolve, reject) {
            _this._window[callbackName] = function () { resolve(); };
            script.onerror = function (error) { reject(error); };
        });
        this._document.body.appendChild(script);
        return this._scriptLoadingPromise;
    };
    LazyMapsAPILoader.prototype._getScriptSrc = function (callbackName) {
        var protocolType = (this._config && this._config.protocol) || DEFAULT_CONFIGURATION.protocol;
        var protocol;
        switch (protocolType) {
            case GoogleMapsScriptProtocol.AUTO:
                protocol = '';
                break;
            case GoogleMapsScriptProtocol.HTTP:
                protocol = 'http:';
                break;
            case GoogleMapsScriptProtocol.HTTPS:
                protocol = 'https:';
                break;
        }
        var hostAndPath = this._config.hostAndPath || DEFAULT_CONFIGURATION.hostAndPath;
        var queryParams = {
            v: this._config.apiVersion || DEFAULT_CONFIGURATION.apiVersion,
            callback: callbackName,
            key: this._config.apiKey,
            client: this._config.clientId,
            channel: this._config.channel,
            libraries: this._config.libraries,
            region: this._config.region,
            language: this._config.language
        };
        var params = Object.keys(queryParams)
            .filter(function (k) { return queryParams[k] != null; })
            .filter(function (k) {
            // remove empty arrays
            return !Array.isArray(queryParams[k]) ||
                (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
        })
            .map(function (k) {
            // join arrays as comma seperated strings
            var i = queryParams[k];
            if (Array.isArray(i)) {
                return { key: k, value: i.join(',') };
            }
            return { key: k, value: queryParams[k] };
        })
            .map(function (entry) { return entry.key + "=" + entry.value; })
            .join('&');
        return protocol + "//" + hostAndPath + "?" + params;
    };
    LazyMapsAPILoader = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Optional()),
        __param(1, core_1.Inject(browser_globals_1.WINDOW_GLOBAL)),
        __param(2, core_1.Inject(browser_globals_1.DOCUMENT_GLOBAL)), 
        __metadata('design:paramtypes', [LazyMapsAPILoaderConfig, Window, Document])
    ], LazyMapsAPILoader);
    return LazyMapsAPILoader;
}(maps_api_loader_1.MapsAPILoader));
exports.LazyMapsAPILoader = LazyMapsAPILoader;
/**
 * Creates a provider for a {@link LazyMapsAPILoaderConfig})
 */
function provideLazyMapsAPILoaderConfig(confLiteral) {
    return {
        provide: LazyMapsAPILoaderConfig,
        useFactory: function () {
            var config = new LazyMapsAPILoaderConfig();
            // todo(sebastian): deprecate LazyMapsAPILoader class
            config.apiKey = confLiteral.apiKey || DEFAULT_CONFIGURATION.apiKey;
            config.apiVersion = confLiteral.apiVersion || DEFAULT_CONFIGURATION.apiVersion;
            config.channel = confLiteral.channel || DEFAULT_CONFIGURATION.channel;
            config.clientId = confLiteral.clientId || DEFAULT_CONFIGURATION.clientId;
            config.hostAndPath = confLiteral.hostAndPath || DEFAULT_CONFIGURATION.hostAndPath;
            config.language = confLiteral.language || DEFAULT_CONFIGURATION.language;
            config.libraries = confLiteral.libraries || DEFAULT_CONFIGURATION.libraries;
            config.protocol = config.protocol || DEFAULT_CONFIGURATION.protocol;
            config.region = config.region || DEFAULT_CONFIGURATION.region;
            return config;
        }
    };
}
exports.provideLazyMapsAPILoaderConfig = provideLazyMapsAPILoaderConfig;

//# sourceMappingURL=lazy-maps-api-loader.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/services/maps-api-loader/maps-api-loader.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
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
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var MapsAPILoader = (function () {
    function MapsAPILoader() {
    }
    MapsAPILoader = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MapsAPILoader);
    return MapsAPILoader;
}());
exports.MapsAPILoader = MapsAPILoader;

//# sourceMappingURL=maps-api-loader.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/services/maps-api-loader/noop-maps-api-loader.js":
/***/ function(module, exports) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
"use strict";
/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
var NoOpMapsAPILoader = (function () {
    function NoOpMapsAPILoader() {
    }
    NoOpMapsAPILoader.prototype.load = function () {
        if (!window.google || !window.google.maps) {
            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
        }
        return Promise.resolve();
    };
    ;
    return NoOpMapsAPILoader;
}());
exports.NoOpMapsAPILoader = NoOpMapsAPILoader;

//# sourceMappingURL=noop-maps-api-loader.js.map


/***/ },

/***/ "./node_modules/angular2-google-maps/core/utils/browser-globals.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * angular2-google-maps - Angular 2 components for Google Maps
 * @version v0.15.0
 * @link https://github.com/SebastianM/angular2-google-maps#readme
 * @license MIT
 */
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
exports.WINDOW_GLOBAL = new core_1.OpaqueToken('angular2-google-maps window_global');
exports.DOCUMENT_GLOBAL = new core_1.OpaqueToken('angular2-google-maps document_global');
exports.BROWSER_GLOBALS_PROVIDERS = [{ provide: exports.WINDOW_GLOBAL, useValue: window }, { provide: exports.DOCUMENT_GLOBAL, useValue: document }];

//# sourceMappingURL=browser-globals.js.map


/***/ },

/***/ "./node_modules/jvectormap/jquery-jvectormap.css":
/***/ function(module, exports) {

module.exports = "svg {\n    touch-action: none;\n}\n\n.jvectormap-container {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    overflow: hidden;\n    touch-action: none;\n}\n\n.jvectormap-tip {\n    position: absolute;\n    display: none;\n    border: solid 1px #CDCDCD;\n    border-radius: 3px;\n    background: #292929;\n    color: white;\n    font-family: sans-serif, Verdana;\n    font-size: smaller;\n    padding: 3px;\n}\n\n.jvectormap-zoomin, .jvectormap-zoomout, .jvectormap-goback {\n    position: absolute;\n    left: 10px;\n    border-radius: 3px;\n    background: #292929;\n    padding: 3px;\n    color: white;\n    cursor: pointer;\n    line-height: 10px;\n    text-align: center;\n    box-sizing: content-box;\n}\n\n.jvectormap-zoomin, .jvectormap-zoomout {\n    width: 10px;\n    height: 10px;\n}\n\n.jvectormap-zoomin {\n    top: 10px;\n}\n\n.jvectormap-zoomout {\n    top: 30px;\n}\n\n.jvectormap-goback {\n    bottom: 10px;\n    z-index: 1000;\n    padding: 6px;\n}\n\n.jvectormap-spinner {\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background: center no-repeat url(data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA==);\n}\n\n.jvectormap-legend-title {\n    font-weight: bold;\n    font-size: 14px;\n    text-align: center;\n}\n\n.jvectormap-legend-cnt {\n    position: absolute;\n}\n\n.jvectormap-legend-cnt-h {\n    bottom: 0;\n    right: 0;\n}\n\n.jvectormap-legend-cnt-v {\n    top: 0;\n    right: 0;\n}\n\n.jvectormap-legend {\n    background: black;\n    color: white;\n    border-radius: 3px;\n}\n\n.jvectormap-legend-cnt-h .jvectormap-legend {\n    float: left;\n    margin: 0 10px 10px 0;\n    padding: 3px 3px 1px 3px;\n}\n\n.jvectormap-legend-cnt-h .jvectormap-legend .jvectormap-legend-tick {\n    float: left;\n}\n\n.jvectormap-legend-cnt-v .jvectormap-legend {\n    margin: 10px 10px 0 0;\n    padding: 3px;\n}\n\n.jvectormap-legend-cnt-h .jvectormap-legend-tick {\n    width: 40px;\n}\n\n.jvectormap-legend-cnt-h .jvectormap-legend-tick-sample {\n    height: 15px;\n}\n\n.jvectormap-legend-cnt-v .jvectormap-legend-tick-sample {\n    height: 20px;\n    width: 20px;\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.jvectormap-legend-tick-text {\n    font-size: 12px;\n}\n\n.jvectormap-legend-cnt-h .jvectormap-legend-tick-text {\n    text-align: center;\n}\n\n.jvectormap-legend-cnt-v .jvectormap-legend-tick-text {\n    display: inline-block;\n    vertical-align: middle;\n    line-height: 20px;\n    padding-left: 3px;\n}"

/***/ },

/***/ "./node_modules/jvectormap/jquery-jvectormap.min.js":
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, $) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function($){var apiParams={set:{colors:1,values:1,backgroundColor:1,scaleColors:1,normalizeFunction:1,focus:1},get:{selectedRegions:1,selectedMarkers:1,mapObject:1,regionName:1}};$.fn.vectorMap=function(options){var map,methodName,map=this.children(".jvectormap-container").data("mapObject");if("addMap"===options)jvm.Map.maps[arguments[1]]=arguments[2];else{if(("set"===options||"get"===options)&&apiParams[options][arguments[1]])return methodName=arguments[1].charAt(0).toUpperCase()+arguments[1].substr(1),map[options+methodName].apply(map,Array.prototype.slice.call(arguments,2));options=options||{},options.container=this,map=new jvm.Map(options)}return this}}(jQuery),function(factory){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__("./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=factory:factory(jQuery)}(function($){function handler(event){var orgEvent=event||window.event,args=slice.call(arguments,1),delta=0,deltaX=0,deltaY=0,absDelta=0;if(event=$.event.fix(orgEvent),event.type="mousewheel","detail"in orgEvent&&(deltaY=-1*orgEvent.detail),"wheelDelta"in orgEvent&&(deltaY=orgEvent.wheelDelta),"wheelDeltaY"in orgEvent&&(deltaY=orgEvent.wheelDeltaY),"wheelDeltaX"in orgEvent&&(deltaX=-1*orgEvent.wheelDeltaX),"axis"in orgEvent&&orgEvent.axis===orgEvent.HORIZONTAL_AXIS&&(deltaX=-1*deltaY,deltaY=0),delta=0===deltaY?deltaX:deltaY,"deltaY"in orgEvent&&(deltaY=-1*orgEvent.deltaY,delta=deltaY),"deltaX"in orgEvent&&(deltaX=orgEvent.deltaX,0===deltaY&&(delta=-1*deltaX)),0!==deltaY||0!==deltaX){if(1===orgEvent.deltaMode){var lineHeight=$.data(this,"mousewheel-line-height");delta*=lineHeight,deltaY*=lineHeight,deltaX*=lineHeight}else if(2===orgEvent.deltaMode){var pageHeight=$.data(this,"mousewheel-page-height");delta*=pageHeight,deltaY*=pageHeight,deltaX*=pageHeight}return absDelta=Math.max(Math.abs(deltaY),Math.abs(deltaX)),(!lowestDelta||lowestDelta>absDelta)&&(lowestDelta=absDelta,shouldAdjustOldDeltas(orgEvent,absDelta)&&(lowestDelta/=40)),shouldAdjustOldDeltas(orgEvent,absDelta)&&(delta/=40,deltaX/=40,deltaY/=40),delta=Math[delta>=1?"floor":"ceil"](delta/lowestDelta),deltaX=Math[deltaX>=1?"floor":"ceil"](deltaX/lowestDelta),deltaY=Math[deltaY>=1?"floor":"ceil"](deltaY/lowestDelta),event.deltaX=deltaX,event.deltaY=deltaY,event.deltaFactor=lowestDelta,event.deltaMode=0,args.unshift(event,delta,deltaX,deltaY),nullLowestDeltaTimeout&&clearTimeout(nullLowestDeltaTimeout),nullLowestDeltaTimeout=setTimeout(nullLowestDelta,200),($.event.dispatch||$.event.handle).apply(this,args)}}function nullLowestDelta(){lowestDelta=null}function shouldAdjustOldDeltas(orgEvent,absDelta){return special.settings.adjustOldDeltas&&"mousewheel"===orgEvent.type&&absDelta%120===0}var nullLowestDeltaTimeout,lowestDelta,toFix=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],toBind="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],slice=Array.prototype.slice;if($.event.fixHooks)for(var i=toFix.length;i;)$.event.fixHooks[toFix[--i]]=$.event.mouseHooks;var special=$.event.special.mousewheel={version:"3.1.9",setup:function(){if(this.addEventListener)for(var i=toBind.length;i;)this.addEventListener(toBind[--i],handler,!1);else this.onmousewheel=handler;$.data(this,"mousewheel-line-height",special.getLineHeight(this)),$.data(this,"mousewheel-page-height",special.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var i=toBind.length;i;)this.removeEventListener(toBind[--i],handler,!1);else this.onmousewheel=null},getLineHeight:function(elem){return parseInt($(elem)["offsetParent"in $.fn?"offsetParent":"parent"]().css("fontSize"),10)},getPageHeight:function(elem){return $(elem).height()},settings:{adjustOldDeltas:!0}};$.fn.extend({mousewheel:function(fn){return fn?this.bind("mousewheel",fn):this.trigger("mousewheel")},unmousewheel:function(fn){return this.unbind("mousewheel",fn)}})});var jvm={inherits:function(child,parent){function temp(){}temp.prototype=parent.prototype,child.prototype=new temp,child.prototype.constructor=child,child.parentClass=parent},mixin:function(target,source){var prop;for(prop in source.prototype)source.prototype.hasOwnProperty(prop)&&(target.prototype[prop]=source.prototype[prop])},min:function(values){var i,min=Number.MAX_VALUE;if(values instanceof Array)for(i=0;i<values.length;i++)values[i]<min&&(min=values[i]);else for(i in values)values[i]<min&&(min=values[i]);return min},max:function(values){var i,max=Number.MIN_VALUE;if(values instanceof Array)for(i=0;i<values.length;i++)values[i]>max&&(max=values[i]);else for(i in values)values[i]>max&&(max=values[i]);return max},keys:function(object){var key,keys=[];for(key in object)keys.push(key);return keys},values:function(object){var key,i,values=[];for(i=0;i<arguments.length;i++){object=arguments[i];for(key in object)values.push(object[key])}return values},whenImageLoaded:function(url){var deferred=new jvm.$.Deferred,img=jvm.$("<img/>");return img.error(function(){deferred.reject()}).load(function(){deferred.resolve(img)}),img.attr("src",url),deferred},isImageUrl:function(s){return/\.\w{3,4}$/.test(s)}};jvm.$=jQuery,Array.prototype.indexOf||(Array.prototype.indexOf=function(searchElement,fromIndex){var k;if(null==this)throw new TypeError('"this" is null or not defined');var O=Object(this),len=O.length>>>0;if(0===len)return-1;var n=+fromIndex||0;if(Math.abs(n)===1/0&&(n=0),n>=len)return-1;for(k=Math.max(n>=0?n:len-Math.abs(n),0);len>k;){if(k in O&&O[k]===searchElement)return k;k++}return-1}),jvm.AbstractElement=function(name,config){this.node=this.createElement(name),this.name=name,this.properties={},config&&this.set(config)},jvm.AbstractElement.prototype.set=function(property,value){var key;if("object"==typeof property)for(key in property)this.properties[key]=property[key],this.applyAttr(key,property[key]);else this.properties[property]=value,this.applyAttr(property,value)},jvm.AbstractElement.prototype.get=function(property){return this.properties[property]},jvm.AbstractElement.prototype.applyAttr=function(property,value){this.node.setAttribute(property,value)},jvm.AbstractElement.prototype.remove=function(){jvm.$(this.node).remove()},jvm.AbstractCanvasElement=function(container,width,height){this.container=container,this.setSize(width,height),this.rootElement=new jvm[this.classPrefix+"GroupElement"],this.node.appendChild(this.rootElement.node),this.container.appendChild(this.node)},jvm.AbstractCanvasElement.prototype.add=function(element,group){group=group||this.rootElement,group.add(element),element.canvas=this},jvm.AbstractCanvasElement.prototype.addPath=function(config,style,group){var el=new jvm[this.classPrefix+"PathElement"](config,style);return this.add(el,group),el},jvm.AbstractCanvasElement.prototype.addCircle=function(config,style,group){var el=new jvm[this.classPrefix+"CircleElement"](config,style);return this.add(el,group),el},jvm.AbstractCanvasElement.prototype.addImage=function(config,style,group){var el=new jvm[this.classPrefix+"ImageElement"](config,style);return this.add(el,group),el},jvm.AbstractCanvasElement.prototype.addText=function(config,style,group){var el=new jvm[this.classPrefix+"TextElement"](config,style);return this.add(el,group),el},jvm.AbstractCanvasElement.prototype.addGroup=function(parentGroup){var el=new jvm[this.classPrefix+"GroupElement"];return parentGroup?parentGroup.node.appendChild(el.node):this.node.appendChild(el.node),el.canvas=this,el},jvm.AbstractShapeElement=function(name,config,style){this.style=style||{},this.style.current=this.style.current||{},this.isHovered=!1,this.isSelected=!1,this.updateStyle()},jvm.AbstractShapeElement.prototype.setStyle=function(property,value){var styles={};"object"==typeof property?styles=property:styles[property]=value,jvm.$.extend(this.style.current,styles),this.updateStyle()},jvm.AbstractShapeElement.prototype.updateStyle=function(){var attrs={};jvm.AbstractShapeElement.mergeStyles(attrs,this.style.initial),jvm.AbstractShapeElement.mergeStyles(attrs,this.style.current),this.isHovered&&jvm.AbstractShapeElement.mergeStyles(attrs,this.style.hover),this.isSelected&&(jvm.AbstractShapeElement.mergeStyles(attrs,this.style.selected),this.isHovered&&jvm.AbstractShapeElement.mergeStyles(attrs,this.style.selectedHover)),this.set(attrs)},jvm.AbstractShapeElement.mergeStyles=function(styles,newStyles){var key;newStyles=newStyles||{};for(key in newStyles)null===newStyles[key]?delete styles[key]:styles[key]=newStyles[key]},jvm.SVGElement=function(){jvm.SVGElement.parentClass.apply(this,arguments)},jvm.inherits(jvm.SVGElement,jvm.AbstractElement),jvm.SVGElement.svgns="http://www.w3.org/2000/svg",jvm.SVGElement.prototype.createElement=function(tagName){return document.createElementNS(jvm.SVGElement.svgns,tagName)},jvm.SVGElement.prototype.addClass=function(className){this.node.setAttribute("class",className)},jvm.SVGElement.prototype.getElementCtr=function(ctr){return jvm["SVG"+ctr]},jvm.SVGElement.prototype.getBBox=function(){return this.node.getBBox()},jvm.SVGGroupElement=function(){jvm.SVGGroupElement.parentClass.call(this,"g")},jvm.inherits(jvm.SVGGroupElement,jvm.SVGElement),jvm.SVGGroupElement.prototype.add=function(element){this.node.appendChild(element.node)},jvm.SVGCanvasElement=function(){this.classPrefix="SVG",jvm.SVGCanvasElement.parentClass.call(this,"svg"),this.defsElement=new jvm.SVGElement("defs"),this.node.appendChild(this.defsElement.node),jvm.AbstractCanvasElement.apply(this,arguments)},jvm.inherits(jvm.SVGCanvasElement,jvm.SVGElement),jvm.mixin(jvm.SVGCanvasElement,jvm.AbstractCanvasElement),jvm.SVGCanvasElement.prototype.setSize=function(width,height){this.width=width,this.height=height,this.node.setAttribute("width",width),this.node.setAttribute("height",height)},jvm.SVGCanvasElement.prototype.applyTransformParams=function(scale,transX,transY){this.scale=scale,this.transX=transX,this.transY=transY,this.rootElement.node.setAttribute("transform","scale("+scale+") translate("+transX+", "+transY+")")},jvm.SVGShapeElement=function(name,config){jvm.SVGShapeElement.parentClass.call(this,name,config),jvm.AbstractShapeElement.apply(this,arguments)},jvm.inherits(jvm.SVGShapeElement,jvm.SVGElement),jvm.mixin(jvm.SVGShapeElement,jvm.AbstractShapeElement),jvm.SVGShapeElement.prototype.applyAttr=function(attr,value){var patternEl,imageEl,that=this;"fill"===attr&&jvm.isImageUrl(value)?jvm.SVGShapeElement.images[value]?this.applyAttr("fill","url(#image"+jvm.SVGShapeElement.images[value]+")"):jvm.whenImageLoaded(value).then(function(img){imageEl=new jvm.SVGElement("image"),imageEl.node.setAttributeNS("http://www.w3.org/1999/xlink","href",value),imageEl.applyAttr("x","0"),imageEl.applyAttr("y","0"),imageEl.applyAttr("width",img[0].width),imageEl.applyAttr("height",img[0].height),patternEl=new jvm.SVGElement("pattern"),patternEl.applyAttr("id","image"+jvm.SVGShapeElement.imageCounter),patternEl.applyAttr("x",0),patternEl.applyAttr("y",0),patternEl.applyAttr("width",img[0].width/2),patternEl.applyAttr("height",img[0].height/2),patternEl.applyAttr("viewBox","0 0 "+img[0].width+" "+img[0].height),patternEl.applyAttr("patternUnits","userSpaceOnUse"),patternEl.node.appendChild(imageEl.node),that.canvas.defsElement.node.appendChild(patternEl.node),jvm.SVGShapeElement.images[value]=jvm.SVGShapeElement.imageCounter++,that.applyAttr("fill","url(#image"+jvm.SVGShapeElement.images[value]+")")}):jvm.SVGShapeElement.parentClass.prototype.applyAttr.apply(this,arguments)},jvm.SVGShapeElement.imageCounter=1,jvm.SVGShapeElement.images={},jvm.SVGPathElement=function(config,style){jvm.SVGPathElement.parentClass.call(this,"path",config,style),this.node.setAttribute("fill-rule","evenodd")},jvm.inherits(jvm.SVGPathElement,jvm.SVGShapeElement),jvm.SVGCircleElement=function(config,style){jvm.SVGCircleElement.parentClass.call(this,"circle",config,style)},jvm.inherits(jvm.SVGCircleElement,jvm.SVGShapeElement),jvm.SVGImageElement=function(config,style){jvm.SVGImageElement.parentClass.call(this,"image",config,style)},jvm.inherits(jvm.SVGImageElement,jvm.SVGShapeElement),jvm.SVGImageElement.prototype.applyAttr=function(attr,value){var that=this;"image"==attr?jvm.whenImageLoaded(value).then(function(img){that.node.setAttributeNS("http://www.w3.org/1999/xlink","href",value),that.width=img[0].width,that.height=img[0].height,that.applyAttr("width",that.width),that.applyAttr("height",that.height),that.applyAttr("x",that.cx-that.width/2),that.applyAttr("y",that.cy-that.height/2),jvm.$(that.node).trigger("imageloaded",[img])}):"cx"==attr?(this.cx=value,this.width&&this.applyAttr("x",value-this.width/2)):"cy"==attr?(this.cy=value,this.height&&this.applyAttr("y",value-this.height/2)):jvm.SVGImageElement.parentClass.prototype.applyAttr.apply(this,arguments)},jvm.SVGTextElement=function(config,style){jvm.SVGTextElement.parentClass.call(this,"text",config,style)},jvm.inherits(jvm.SVGTextElement,jvm.SVGShapeElement),jvm.SVGTextElement.prototype.applyAttr=function(attr,value){"text"===attr?this.node.textContent=value:jvm.SVGTextElement.parentClass.prototype.applyAttr.apply(this,arguments)},jvm.VMLElement=function(){jvm.VMLElement.VMLInitialized||jvm.VMLElement.initializeVML(),jvm.VMLElement.parentClass.apply(this,arguments)},jvm.inherits(jvm.VMLElement,jvm.AbstractElement),jvm.VMLElement.VMLInitialized=!1,jvm.VMLElement.initializeVML=function(){try{document.namespaces.rvml||document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),jvm.VMLElement.prototype.createElement=function(tagName){return document.createElement("<rvml:"+tagName+' class="rvml">')}}catch(e){jvm.VMLElement.prototype.createElement=function(tagName){return document.createElement("<"+tagName+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)"),jvm.VMLElement.VMLInitialized=!0},jvm.VMLElement.prototype.getElementCtr=function(ctr){return jvm["VML"+ctr]},jvm.VMLElement.prototype.addClass=function(className){jvm.$(this.node).addClass(className)},jvm.VMLElement.prototype.applyAttr=function(attr,value){this.node[attr]=value},jvm.VMLElement.prototype.getBBox=function(){var node=jvm.$(this.node);return{x:node.position().left/this.canvas.scale,y:node.position().top/this.canvas.scale,width:node.width()/this.canvas.scale,height:node.height()/this.canvas.scale}},jvm.VMLGroupElement=function(){jvm.VMLGroupElement.parentClass.call(this,"group"),this.node.style.left="0px",this.node.style.top="0px",this.node.coordorigin="0 0"},jvm.inherits(jvm.VMLGroupElement,jvm.VMLElement),jvm.VMLGroupElement.prototype.add=function(element){this.node.appendChild(element.node)},jvm.VMLCanvasElement=function(){this.classPrefix="VML",jvm.VMLCanvasElement.parentClass.call(this,"group"),jvm.AbstractCanvasElement.apply(this,arguments),this.node.style.position="absolute"},jvm.inherits(jvm.VMLCanvasElement,jvm.VMLElement),jvm.mixin(jvm.VMLCanvasElement,jvm.AbstractCanvasElement),jvm.VMLCanvasElement.prototype.setSize=function(width,height){var paths,groups,i,l;if(this.width=width,this.height=height,this.node.style.width=width+"px",this.node.style.height=height+"px",this.node.coordsize=width+" "+height,this.node.coordorigin="0 0",this.rootElement){for(paths=this.rootElement.node.getElementsByTagName("shape"),i=0,l=paths.length;l>i;i++)paths[i].coordsize=width+" "+height,paths[i].style.width=width+"px",paths[i].style.height=height+"px";for(groups=this.node.getElementsByTagName("group"),i=0,l=groups.length;l>i;i++)groups[i].coordsize=width+" "+height,groups[i].style.width=width+"px",groups[i].style.height=height+"px"}},jvm.VMLCanvasElement.prototype.applyTransformParams=function(scale,transX,transY){this.scale=scale,this.transX=transX,this.transY=transY,this.rootElement.node.coordorigin=this.width-transX-this.width/100+","+(this.height-transY-this.height/100),this.rootElement.node.coordsize=this.width/scale+","+this.height/scale},jvm.VMLShapeElement=function(name,config){jvm.VMLShapeElement.parentClass.call(this,name,config),this.fillElement=new jvm.VMLElement("fill"),this.strokeElement=new jvm.VMLElement("stroke"),this.node.appendChild(this.fillElement.node),this.node.appendChild(this.strokeElement.node),this.node.stroked=!1,jvm.AbstractShapeElement.apply(this,arguments)},jvm.inherits(jvm.VMLShapeElement,jvm.VMLElement),jvm.mixin(jvm.VMLShapeElement,jvm.AbstractShapeElement),jvm.VMLShapeElement.prototype.applyAttr=function(attr,value){switch(attr){case"fill":this.node.fillcolor=value;break;case"fill-opacity":this.fillElement.node.opacity=Math.round(100*value)+"%";break;case"stroke":this.node.stroked="none"===value?!1:!0,this.node.strokecolor=value;break;case"stroke-opacity":this.strokeElement.node.opacity=Math.round(100*value)+"%";break;case"stroke-width":this.node.stroked=0===parseInt(value,10)?!1:!0,this.node.strokeweight=value;break;case"d":this.node.path=jvm.VMLPathElement.pathSvgToVml(value);break;default:jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this,arguments)}},jvm.VMLPathElement=function(config,style){var scale=new jvm.VMLElement("skew");jvm.VMLPathElement.parentClass.call(this,"shape",config,style),this.node.coordorigin="0 0",scale.node.on=!0,scale.node.matrix="0.01,0,0,0.01,0,0",scale.node.offset="0,0",this.node.appendChild(scale.node)},jvm.inherits(jvm.VMLPathElement,jvm.VMLShapeElement),jvm.VMLPathElement.prototype.applyAttr=function(attr,value){"d"===attr?this.node.path=jvm.VMLPathElement.pathSvgToVml(value):jvm.VMLShapeElement.prototype.applyAttr.call(this,attr,value)},jvm.VMLPathElement.pathSvgToVml=function(path){var ctrlx,ctrly,cx=0,cy=0;return path=path.replace(/(-?\d+)e(-?\d+)/g,"0"),path.replace(/([MmLlHhVvCcSs])\s*((?:-?\d*(?:\.\d+)?\s*,?\s*)+)/g,function(segment,letter,coords){coords=coords.replace(/(\d)-/g,"$1,-").replace(/^\s+/g,"").replace(/\s+$/g,"").replace(/\s+/g,",").split(","),coords[0]||coords.shift();for(var i=0,l=coords.length;l>i;i++)coords[i]=Math.round(100*coords[i]);switch(letter){case"m":return cx+=coords[0],cy+=coords[1],"t"+coords.join(",");case"M":return cx=coords[0],cy=coords[1],"m"+coords.join(",");case"l":return cx+=coords[0],cy+=coords[1],"r"+coords.join(",");case"L":return cx=coords[0],cy=coords[1],"l"+coords.join(",");case"h":return cx+=coords[0],"r"+coords[0]+",0";case"H":return cx=coords[0],"l"+cx+","+cy;case"v":return cy+=coords[0],"r0,"+coords[0];case"V":return cy=coords[0],"l"+cx+","+cy;case"c":return ctrlx=cx+coords[coords.length-4],ctrly=cy+coords[coords.length-3],cx+=coords[coords.length-2],cy+=coords[coords.length-1],"v"+coords.join(",");case"C":return ctrlx=coords[coords.length-4],ctrly=coords[coords.length-3],cx=coords[coords.length-2],cy=coords[coords.length-1],"c"+coords.join(",");case"s":return coords.unshift(cy-ctrly),coords.unshift(cx-ctrlx),ctrlx=cx+coords[coords.length-4],ctrly=cy+coords[coords.length-3],cx+=coords[coords.length-2],cy+=coords[coords.length-1],"v"+coords.join(",");case"S":return coords.unshift(cy+cy-ctrly),coords.unshift(cx+cx-ctrlx),ctrlx=coords[coords.length-4],ctrly=coords[coords.length-3],cx=coords[coords.length-2],cy=coords[coords.length-1],"c"+coords.join(",")}return""}).replace(/z/g,"e")},jvm.VMLCircleElement=function(config,style){jvm.VMLCircleElement.parentClass.call(this,"oval",config,style)},jvm.inherits(jvm.VMLCircleElement,jvm.VMLShapeElement),jvm.VMLCircleElement.prototype.applyAttr=function(attr,value){switch(attr){case"r":this.node.style.width=2*value+"px",this.node.style.height=2*value+"px",this.applyAttr("cx",this.get("cx")||0),this.applyAttr("cy",this.get("cy")||0);break;case"cx":if(!value)return;this.node.style.left=value-(this.get("r")||0)+"px";break;case"cy":if(!value)return;this.node.style.top=value-(this.get("r")||0)+"px";break;default:jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this,attr,value)}},jvm.VectorCanvas=function(container,width,height){return this.mode=window.SVGAngle?"svg":"vml",this.impl="svg"==this.mode?new jvm.SVGCanvasElement(container,width,height):new jvm.VMLCanvasElement(container,width,height),this.impl.mode=this.mode,this.impl},jvm.SimpleScale=function(scale){this.scale=scale},jvm.SimpleScale.prototype.getValue=function(value){return value},jvm.OrdinalScale=function(scale){this.scale=scale},jvm.OrdinalScale.prototype.getValue=function(value){return this.scale[value]},jvm.OrdinalScale.prototype.getTicks=function(){var key,ticks=[];for(key in this.scale)ticks.push({label:key,value:this.scale[key]});return ticks},jvm.NumericScale=function(scale,normalizeFunction,minValue,maxValue){this.scale=[],normalizeFunction=normalizeFunction||"linear",scale&&this.setScale(scale),normalizeFunction&&this.setNormalizeFunction(normalizeFunction),"undefined"!=typeof minValue&&this.setMin(minValue),"undefined"!=typeof maxValue&&this.setMax(maxValue)},jvm.NumericScale.prototype={setMin:function(min){this.clearMinValue=min,this.minValue="function"==typeof this.normalize?this.normalize(min):min},setMax:function(max){this.clearMaxValue=max,this.maxValue="function"==typeof this.normalize?this.normalize(max):max},setScale:function(scale){var i;for(this.scale=[],i=0;i<scale.length;i++)this.scale[i]=[scale[i]]},setNormalizeFunction:function(f){"polynomial"===f?this.normalize=function(value){return Math.pow(value,.2)}:"linear"===f?delete this.normalize:this.normalize=f,this.setMin(this.clearMinValue),this.setMax(this.clearMaxValue)},getValue:function(value){var l,c,lengthes=[],fullLength=0,i=0;for("function"==typeof this.normalize&&(value=this.normalize(value)),i=0;i<this.scale.length-1;i++)l=this.vectorLength(this.vectorSubtract(this.scale[i+1],this.scale[i])),lengthes.push(l),fullLength+=l;for(c=(this.maxValue-this.minValue)/fullLength,i=0;i<lengthes.length;i++)lengthes[i]*=c;for(i=0,value-=this.minValue;value-lengthes[i]>=0;)value-=lengthes[i],i++;return value=this.vectorToNum(i==this.scale.length-1?this.scale[i]:this.vectorAdd(this.scale[i],this.vectorMult(this.vectorSubtract(this.scale[i+1],this.scale[i]),value/lengthes[i])))},vectorToNum:function(vector){var i,num=0;for(i=0;i<vector.length;i++)num+=Math.round(vector[i])*Math.pow(256,vector.length-i-1);return num},vectorSubtract:function(vector1,vector2){var i,vector=[];for(i=0;i<vector1.length;i++)vector[i]=vector1[i]-vector2[i];return vector},vectorAdd:function(vector1,vector2){var i,vector=[];for(i=0;i<vector1.length;i++)vector[i]=vector1[i]+vector2[i];return vector},vectorMult:function(vector,num){var i,result=[];for(i=0;i<vector.length;i++)result[i]=vector[i]*num;return result},vectorLength:function(vector){var i,result=0;for(i=0;i<vector.length;i++)result+=vector[i]*vector[i];return Math.sqrt(result)},getTicks:function(){var tick,v,m=5,extent=[this.clearMinValue,this.clearMaxValue],span=extent[1]-extent[0],step=Math.pow(10,Math.floor(Math.log(span/m)/Math.LN10)),err=m/span*step,ticks=[];for(.15>=err?step*=10:.35>=err?step*=5:.75>=err&&(step*=2),extent[0]=Math.floor(extent[0]/step)*step,extent[1]=Math.ceil(extent[1]/step)*step,tick=extent[0];tick<=extent[1];)v=tick==extent[0]?this.clearMinValue:tick==extent[1]?this.clearMaxValue:tick,ticks.push({label:tick,value:this.getValue(v)}),tick+=step;return ticks}},jvm.ColorScale=function(){jvm.ColorScale.parentClass.apply(this,arguments)},jvm.inherits(jvm.ColorScale,jvm.NumericScale),jvm.ColorScale.prototype.setScale=function(scale){var i;for(i=0;i<scale.length;i++)this.scale[i]=jvm.ColorScale.rgbToArray(scale[i])},jvm.ColorScale.prototype.getValue=function(value){return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this,value))},jvm.ColorScale.arrayToRgb=function(ar){var d,i,rgb="#";for(i=0;i<ar.length;i++)d=ar[i].toString(16),rgb+=1==d.length?"0"+d:d;return rgb},jvm.ColorScale.numToRgb=function(num){for(num=num.toString(16);num.length<6;)num="0"+num;return"#"+num},jvm.ColorScale.rgbToArray=function(rgb){return rgb=rgb.substr(1),[parseInt(rgb.substr(0,2),16),parseInt(rgb.substr(2,2),16),parseInt(rgb.substr(4,2),16)]},jvm.Legend=function(params){this.params=params||{},this.map=this.params.map,this.series=this.params.series,this.body=jvm.$("<div/>"),this.body.addClass("jvectormap-legend"),this.params.cssClass&&this.body.addClass(this.params.cssClass),params.vertical?this.map.legendCntVertical.append(this.body):this.map.legendCntHorizontal.append(this.body),this.render()},jvm.Legend.prototype.render=function(){var i,tick,sample,label,ticks=this.series.scale.getTicks(),inner=jvm.$("<div/>").addClass("jvectormap-legend-inner");for(this.body.html(""),this.params.title&&this.body.append(jvm.$("<div/>").addClass("jvectormap-legend-title").html(this.params.title)),this.body.append(inner),i=0;i<ticks.length;i++){switch(tick=jvm.$("<div/>").addClass("jvectormap-legend-tick"),sample=jvm.$("<div/>").addClass("jvectormap-legend-tick-sample"),this.series.params.attribute){case"fill":jvm.isImageUrl(ticks[i].value)?sample.css("background","url("+ticks[i].value+")"):sample.css("background",ticks[i].value);break;case"stroke":sample.css("background",ticks[i].value);break;case"image":sample.css("background","url("+ticks[i].value+") no-repeat center center");break;case"r":jvm.$("<div/>").css({"border-radius":ticks[i].value,border:this.map.params.markerStyle.initial["stroke-width"]+"px "+this.map.params.markerStyle.initial.stroke+" solid",width:2*ticks[i].value+"px",height:2*ticks[i].value+"px",background:this.map.params.markerStyle.initial.fill}).appendTo(sample)}tick.append(sample),label=ticks[i].label,this.params.labelRender&&(label=this.params.labelRender(label)),tick.append(jvm.$("<div>"+label+" </div>").addClass("jvectormap-legend-tick-text")),inner.append(tick)}inner.append(jvm.$("<div/>").css("clear","both"))},jvm.DataSeries=function(params,elements,map){var scaleConstructor;params=params||{},params.attribute=params.attribute||"fill",this.elements=elements,this.params=params,this.map=map,params.attributes&&this.setAttributes(params.attributes),jvm.$.isArray(params.scale)?(scaleConstructor="fill"===params.attribute||"stroke"===params.attribute?jvm.ColorScale:jvm.NumericScale,this.scale=new scaleConstructor(params.scale,params.normalizeFunction,params.min,params.max)):this.scale=params.scale?new jvm.OrdinalScale(params.scale):new jvm.SimpleScale(params.scale),this.values=params.values||{},this.setValues(this.values),this.params.legend&&(this.legend=new jvm.Legend($.extend({map:this.map,series:this},this.params.legend)))},jvm.DataSeries.prototype={setAttributes:function(key,attr){var code,attrs=key;if("string"==typeof key)this.elements[key]&&this.elements[key].setStyle(this.params.attribute,attr);else for(code in attrs)this.elements[code]&&this.elements[code].element.setStyle(this.params.attribute,attrs[code])},setValues:function(values){var val,cc,max=-Number.MAX_VALUE,min=Number.MAX_VALUE,attrs={};if(this.scale instanceof jvm.OrdinalScale||this.scale instanceof jvm.SimpleScale)for(cc in values)attrs[cc]=values[cc]?this.scale.getValue(values[cc]):this.elements[cc].element.style.initial[this.params.attribute];else{if("undefined"==typeof this.params.min||"undefined"==typeof this.params.max)for(cc in values)val=parseFloat(values[cc]),val>max&&(max=val),min>val&&(min=val);"undefined"==typeof this.params.min?(this.scale.setMin(min),this.params.min=min):this.scale.setMin(this.params.min),"undefined"==typeof this.params.max?(this.scale.setMax(max),this.params.max=max):this.scale.setMax(this.params.max);for(cc in values)"indexOf"!=cc&&(val=parseFloat(values[cc]),attrs[cc]=isNaN(val)?this.elements[cc].element.style.initial[this.params.attribute]:this.scale.getValue(val))}this.setAttributes(attrs),jvm.$.extend(this.values,values)},clear:function(){var key,attrs={};for(key in this.values)this.elements[key]&&(attrs[key]=this.elements[key].element.shape.style.initial[this.params.attribute]);this.setAttributes(attrs),this.values={}},setScale:function(scale){this.scale.setScale(scale),this.values&&this.setValues(this.values)},setNormalizeFunction:function(f){this.scale.setNormalizeFunction(f),this.values&&this.setValues(this.values)}},jvm.Proj={degRad:180/Math.PI,radDeg:Math.PI/180,radius:6381372,sgn:function(n){return n>0?1:0>n?-1:n},mill:function(lat,lng,c){return{x:this.radius*(lng-c)*this.radDeg,y:-this.radius*Math.log(Math.tan((45+.4*lat)*this.radDeg))/.8}},mill_inv:function(x,y,c){return{lat:(2.5*Math.atan(Math.exp(.8*y/this.radius))-5*Math.PI/8)*this.degRad,lng:(c*this.radDeg+x/this.radius)*this.degRad}},merc:function(lat,lng,c){return{x:this.radius*(lng-c)*this.radDeg,y:-this.radius*Math.log(Math.tan(Math.PI/4+lat*Math.PI/360))}},merc_inv:function(x,y,c){return{lat:(2*Math.atan(Math.exp(y/this.radius))-Math.PI/2)*this.degRad,lng:(c*this.radDeg+x/this.radius)*this.degRad}},aea:function(lat,lng,c){var fi0=0,lambda0=c*this.radDeg,fi1=29.5*this.radDeg,fi2=45.5*this.radDeg,fi=lat*this.radDeg,lambda=lng*this.radDeg,n=(Math.sin(fi1)+Math.sin(fi2))/2,C=Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),theta=n*(lambda-lambda0),ro=Math.sqrt(C-2*n*Math.sin(fi))/n,ro0=Math.sqrt(C-2*n*Math.sin(fi0))/n;return{x:ro*Math.sin(theta)*this.radius,y:-(ro0-ro*Math.cos(theta))*this.radius}},aea_inv:function(xCoord,yCoord,c){var x=xCoord/this.radius,y=yCoord/this.radius,fi0=0,lambda0=c*this.radDeg,fi1=29.5*this.radDeg,fi2=45.5*this.radDeg,n=(Math.sin(fi1)+Math.sin(fi2))/2,C=Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),ro0=Math.sqrt(C-2*n*Math.sin(fi0))/n,ro=Math.sqrt(x*x+(ro0-y)*(ro0-y)),theta=Math.atan(x/(ro0-y));return{lat:Math.asin((C-ro*ro*n*n)/(2*n))*this.degRad,lng:(lambda0+theta/n)*this.degRad}},lcc:function(lat,lng,c){var fi0=0,lambda0=c*this.radDeg,lambda=lng*this.radDeg,fi1=33*this.radDeg,fi2=45*this.radDeg,fi=lat*this.radDeg,n=Math.log(Math.cos(fi1)*(1/Math.cos(fi2)))/Math.log(Math.tan(Math.PI/4+fi2/2)*(1/Math.tan(Math.PI/4+fi1/2))),F=Math.cos(fi1)*Math.pow(Math.tan(Math.PI/4+fi1/2),n)/n,ro=F*Math.pow(1/Math.tan(Math.PI/4+fi/2),n),ro0=F*Math.pow(1/Math.tan(Math.PI/4+fi0/2),n);return{x:ro*Math.sin(n*(lambda-lambda0))*this.radius,y:-(ro0-ro*Math.cos(n*(lambda-lambda0)))*this.radius}},lcc_inv:function(xCoord,yCoord,c){var x=xCoord/this.radius,y=yCoord/this.radius,fi0=0,lambda0=c*this.radDeg,fi1=33*this.radDeg,fi2=45*this.radDeg,n=Math.log(Math.cos(fi1)*(1/Math.cos(fi2)))/Math.log(Math.tan(Math.PI/4+fi2/2)*(1/Math.tan(Math.PI/4+fi1/2))),F=Math.cos(fi1)*Math.pow(Math.tan(Math.PI/4+fi1/2),n)/n,ro0=F*Math.pow(1/Math.tan(Math.PI/4+fi0/2),n),ro=this.sgn(n)*Math.sqrt(x*x+(ro0-y)*(ro0-y)),theta=Math.atan(x/(ro0-y));return{lat:(2*Math.atan(Math.pow(F/ro,1/n))-Math.PI/2)*this.degRad,lng:(lambda0+theta/n)*this.degRad}}},jvm.MapObject=function(){},jvm.MapObject.prototype.getLabelText=function(key){var text;return text=this.config.label?"function"==typeof this.config.label.render?this.config.label.render(key):key:null},jvm.MapObject.prototype.getLabelOffsets=function(key){var offsets;return this.config.label&&("function"==typeof this.config.label.offsets?offsets=this.config.label.offsets(key):"object"==typeof this.config.label.offsets&&(offsets=this.config.label.offsets[key])),offsets||[0,0]},jvm.MapObject.prototype.setHovered=function(isHovered){this.isHovered!==isHovered&&(this.isHovered=isHovered,this.shape.isHovered=isHovered,this.shape.updateStyle(),this.label&&(this.label.isHovered=isHovered,this.label.updateStyle()))},jvm.MapObject.prototype.setSelected=function(isSelected){this.isSelected!==isSelected&&(this.isSelected=isSelected,this.shape.isSelected=isSelected,this.shape.updateStyle(),this.label&&(this.label.isSelected=isSelected,this.label.updateStyle()),jvm.$(this.shape).trigger("selected",[isSelected]))},jvm.MapObject.prototype.setStyle=function(){this.shape.setStyle.apply(this.shape,arguments)},jvm.MapObject.prototype.remove=function(){this.shape.remove(),this.label&&this.label.remove()},jvm.Region=function(config){var bbox,text,offsets;this.config=config,this.map=this.config.map,this.shape=config.canvas.addPath({d:config.path,"data-code":config.code},config.style,config.canvas.rootElement),this.shape.addClass("jvectormap-region jvectormap-element"),bbox=this.shape.getBBox(),text=this.getLabelText(config.code),
this.config.label&&text&&(offsets=this.getLabelOffsets(config.code),this.labelX=bbox.x+bbox.width/2+offsets[0],this.labelY=bbox.y+bbox.height/2+offsets[1],this.label=config.canvas.addText({text:text,"text-anchor":"middle","alignment-baseline":"central",x:this.labelX,y:this.labelY,"data-code":config.code},config.labelStyle,config.labelsGroup),this.label.addClass("jvectormap-region jvectormap-element"))},jvm.inherits(jvm.Region,jvm.MapObject),jvm.Region.prototype.updateLabelPosition=function(){this.label&&this.label.set({x:this.labelX*this.map.scale+this.map.transX*this.map.scale,y:this.labelY*this.map.scale+this.map.transY*this.map.scale})},jvm.Marker=function(config){var text;this.config=config,this.map=this.config.map,this.isImage=!!this.config.style.initial.image,this.createShape(),text=this.getLabelText(config.index),this.config.label&&text&&(this.offsets=this.getLabelOffsets(config.index),this.labelX=config.cx/this.map.scale-this.map.transX,this.labelY=config.cy/this.map.scale-this.map.transY,this.label=config.canvas.addText({text:text,"data-index":config.index,dy:"0.6ex",x:this.labelX,y:this.labelY},config.labelStyle,config.labelsGroup),this.label.addClass("jvectormap-marker jvectormap-element"))},jvm.inherits(jvm.Marker,jvm.MapObject),jvm.Marker.prototype.createShape=function(){var that=this;this.shape&&this.shape.remove(),this.shape=this.config.canvas[this.isImage?"addImage":"addCircle"]({"data-index":this.config.index,cx:this.config.cx,cy:this.config.cy},this.config.style,this.config.group),this.shape.addClass("jvectormap-marker jvectormap-element"),this.isImage&&jvm.$(this.shape.node).on("imageloaded",function(){that.updateLabelPosition()})},jvm.Marker.prototype.updateLabelPosition=function(){this.label&&this.label.set({x:this.labelX*this.map.scale+this.offsets[0]+this.map.transX*this.map.scale+5+(this.isImage?(this.shape.width||0)/2:this.shape.properties.r),y:this.labelY*this.map.scale+this.map.transY*this.map.scale+this.offsets[1]})},jvm.Marker.prototype.setStyle=function(property){var isImage;jvm.Marker.parentClass.prototype.setStyle.apply(this,arguments),"r"===property&&this.updateLabelPosition(),isImage=!!this.shape.get("image"),isImage!=this.isImage&&(this.isImage=isImage,this.config.style=jvm.$.extend(!0,{},this.shape.style),this.createShape())},jvm.Map=function(params){var e,map=this;if(this.params=jvm.$.extend(!0,{},jvm.Map.defaultParams,params),!jvm.Map.maps[this.params.map])throw new Error("Attempt to use map which was not loaded: "+this.params.map);this.mapData=jvm.Map.maps[this.params.map],this.markers={},this.regions={},this.regionsColors={},this.regionsData={},this.container=jvm.$("<div>").addClass("jvectormap-container"),this.params.container&&this.params.container.append(this.container),this.container.data("mapObject",this),this.defaultWidth=this.mapData.width,this.defaultHeight=this.mapData.height,this.setBackgroundColor(this.params.backgroundColor),this.onResize=function(){map.updateSize()},jvm.$(window).resize(this.onResize);for(e in jvm.Map.apiEvents)this.params[e]&&this.container.bind(jvm.Map.apiEvents[e]+".jvectormap",this.params[e]);this.canvas=new jvm.VectorCanvas(this.container[0],this.width,this.height),this.params.bindTouchEvents&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch?this.bindContainerTouchEvents():window.MSGesture&&this.bindContainerPointerEvents()),this.bindContainerEvents(),this.bindElementEvents(),this.createTip(),this.params.zoomButtons&&this.bindZoomButtons(),this.createRegions(),this.createMarkers(this.params.markers||{}),this.updateSize(),this.params.focusOn&&("string"==typeof this.params.focusOn?this.params.focusOn={region:this.params.focusOn}:jvm.$.isArray(this.params.focusOn)&&(this.params.focusOn={regions:this.params.focusOn}),this.setFocus(this.params.focusOn)),this.params.selectedRegions&&this.setSelectedRegions(this.params.selectedRegions),this.params.selectedMarkers&&this.setSelectedMarkers(this.params.selectedMarkers),this.legendCntHorizontal=jvm.$("<div/>").addClass("jvectormap-legend-cnt jvectormap-legend-cnt-h"),this.legendCntVertical=jvm.$("<div/>").addClass("jvectormap-legend-cnt jvectormap-legend-cnt-v"),this.container.append(this.legendCntHorizontal),this.container.append(this.legendCntVertical),this.params.series&&this.createSeries()},jvm.Map.prototype={transX:0,transY:0,scale:1,baseTransX:0,baseTransY:0,baseScale:1,width:0,height:0,setBackgroundColor:function(backgroundColor){this.container.css("background-color",backgroundColor)},resize:function(){var curBaseScale=this.baseScale;this.width/this.height>this.defaultWidth/this.defaultHeight?(this.baseScale=this.height/this.defaultHeight,this.baseTransX=Math.abs(this.width-this.defaultWidth*this.baseScale)/(2*this.baseScale)):(this.baseScale=this.width/this.defaultWidth,this.baseTransY=Math.abs(this.height-this.defaultHeight*this.baseScale)/(2*this.baseScale)),this.scale*=this.baseScale/curBaseScale,this.transX*=this.baseScale/curBaseScale,this.transY*=this.baseScale/curBaseScale},updateSize:function(){this.width=this.container.width(),this.height=this.container.height(),this.resize(),this.canvas.setSize(this.width,this.height),this.applyTransform()},reset:function(){var key,i;for(key in this.series)for(i=0;i<this.series[key].length;i++)this.series[key][i].clear();this.scale=this.baseScale,this.transX=this.baseTransX,this.transY=this.baseTransY,this.applyTransform()},applyTransform:function(){var maxTransX,maxTransY,minTransX,minTransY;this.defaultWidth*this.scale<=this.width?(maxTransX=(this.width-this.defaultWidth*this.scale)/(2*this.scale),minTransX=(this.width-this.defaultWidth*this.scale)/(2*this.scale)):(maxTransX=0,minTransX=(this.width-this.defaultWidth*this.scale)/this.scale),this.defaultHeight*this.scale<=this.height?(maxTransY=(this.height-this.defaultHeight*this.scale)/(2*this.scale),minTransY=(this.height-this.defaultHeight*this.scale)/(2*this.scale)):(maxTransY=0,minTransY=(this.height-this.defaultHeight*this.scale)/this.scale),this.transY>maxTransY?this.transY=maxTransY:this.transY<minTransY&&(this.transY=minTransY),this.transX>maxTransX?this.transX=maxTransX:this.transX<minTransX&&(this.transX=minTransX),this.canvas.applyTransformParams(this.scale,this.transX,this.transY),this.markers&&this.repositionMarkers(),this.repositionLabels(),this.container.trigger("viewportChange",[this.scale/this.baseScale,this.transX,this.transY])},bindContainerEvents:function(){var oldPageX,oldPageY,mouseDown=!1,map=this;this.params.panOnDrag&&(this.container.mousemove(function(e){return mouseDown&&(map.transX-=(oldPageX-e.pageX)/map.scale,map.transY-=(oldPageY-e.pageY)/map.scale,map.applyTransform(),oldPageX=e.pageX,oldPageY=e.pageY),!1}).mousedown(function(e){return mouseDown=!0,oldPageX=e.pageX,oldPageY=e.pageY,!1}),this.onContainerMouseUp=function(){mouseDown=!1},jvm.$("body").mouseup(this.onContainerMouseUp)),this.params.zoomOnScroll&&this.container.mousewheel(function(event){var offset=jvm.$(map.container).offset(),centerX=event.pageX-offset.left,centerY=event.pageY-offset.top,zoomStep=Math.pow(1+map.params.zoomOnScrollSpeed/1e3,event.deltaFactor*event.deltaY);map.tip.hide(),map.setScale(map.scale*zoomStep,centerX,centerY),event.preventDefault()})},bindContainerTouchEvents:function(){var touchStartScale,touchStartDistance,touchX,touchY,centerTouchX,centerTouchY,lastTouchesLength,map=this,handleTouchEvent=function(e){var offset,scale,transXOld,transYOld,touches=e.originalEvent.touches;"touchstart"==e.type&&(lastTouchesLength=0),1==touches.length?(1==lastTouchesLength&&(transXOld=map.transX,transYOld=map.transY,map.transX-=(touchX-touches[0].pageX)/map.scale,map.transY-=(touchY-touches[0].pageY)/map.scale,map.applyTransform(),map.tip.hide(),(transXOld!=map.transX||transYOld!=map.transY)&&e.preventDefault()),touchX=touches[0].pageX,touchY=touches[0].pageY):2==touches.length&&(2==lastTouchesLength?(scale=Math.sqrt(Math.pow(touches[0].pageX-touches[1].pageX,2)+Math.pow(touches[0].pageY-touches[1].pageY,2))/touchStartDistance,map.setScale(touchStartScale*scale,centerTouchX,centerTouchY),map.tip.hide(),e.preventDefault()):(offset=jvm.$(map.container).offset(),centerTouchX=touches[0].pageX>touches[1].pageX?touches[1].pageX+(touches[0].pageX-touches[1].pageX)/2:touches[0].pageX+(touches[1].pageX-touches[0].pageX)/2,centerTouchY=touches[0].pageY>touches[1].pageY?touches[1].pageY+(touches[0].pageY-touches[1].pageY)/2:touches[0].pageY+(touches[1].pageY-touches[0].pageY)/2,centerTouchX-=offset.left,centerTouchY-=offset.top,touchStartScale=map.scale,touchStartDistance=Math.sqrt(Math.pow(touches[0].pageX-touches[1].pageX,2)+Math.pow(touches[0].pageY-touches[1].pageY,2)))),lastTouchesLength=touches.length};jvm.$(this.container).bind("touchstart",handleTouchEvent),jvm.$(this.container).bind("touchmove",handleTouchEvent)},bindContainerPointerEvents:function(){var map=this,gesture=new MSGesture,element=this.container[0],handlePointerDownEvent=function(e){gesture.addPointer(e.pointerId)},handleGestureEvent=function(e){var transXOld,transYOld;(0!=e.translationX||0!=e.translationY)&&(transXOld=map.transX,transYOld=map.transY,map.transX+=e.translationX/map.scale,map.transY+=e.translationY/map.scale,map.applyTransform(),map.tip.hide(),(transXOld!=map.transX||transYOld!=map.transY)&&e.preventDefault()),1!=e.scale&&(map.setScale(map.scale*e.scale,e.offsetX,e.offsetY),map.tip.hide(),e.preventDefault())};gesture.target=element,element.addEventListener("MSGestureChange",handleGestureEvent,!1),element.addEventListener("pointerdown",handlePointerDownEvent,!1)},bindElementEvents:function(){var pageX,pageY,mouseMoved,map=this;this.container.mousemove(function(e){Math.abs(pageX-e.pageX)+Math.abs(pageY-e.pageY)>2&&(mouseMoved=!0)}),this.container.delegate("[class~='jvectormap-element']","mouseover mouseout",function(e){var baseVal=jvm.$(this).attr("class").baseVal||jvm.$(this).attr("class"),type=-1===baseVal.indexOf("jvectormap-region")?"marker":"region",code=jvm.$(this).attr("region"==type?"data-code":"data-index"),element="region"==type?map.regions[code].element:map.markers[code].element,tipText="region"==type?map.mapData.paths[code].name:map.markers[code].config.name||"",tipShowEvent=jvm.$.Event(type+"TipShow.jvectormap"),overEvent=jvm.$.Event(type+"Over.jvectormap");"mouseover"==e.type?(map.container.trigger(overEvent,[code]),overEvent.isDefaultPrevented()||element.setHovered(!0),map.tip.text(tipText),map.container.trigger(tipShowEvent,[map.tip,code]),tipShowEvent.isDefaultPrevented()||(map.tip.show(),map.tipWidth=map.tip.width(),map.tipHeight=map.tip.height())):(element.setHovered(!1),map.tip.hide(),map.container.trigger(type+"Out.jvectormap",[code]))}),this.container.delegate("[class~='jvectormap-element']","mousedown",function(e){pageX=e.pageX,pageY=e.pageY,mouseMoved=!1}),this.container.delegate("[class~='jvectormap-element']","mouseup",function(){var baseVal=jvm.$(this).attr("class").baseVal?jvm.$(this).attr("class").baseVal:jvm.$(this).attr("class"),type=-1===baseVal.indexOf("jvectormap-region")?"marker":"region",code=jvm.$(this).attr("region"==type?"data-code":"data-index"),clickEvent=jvm.$.Event(type+"Click.jvectormap"),element="region"==type?map.regions[code].element:map.markers[code].element;mouseMoved||(map.container.trigger(clickEvent,[code]),("region"===type&&map.params.regionsSelectable||"marker"===type&&map.params.markersSelectable)&&(clickEvent.isDefaultPrevented()||(map.params[type+"sSelectableOne"]&&map.clearSelected(type+"s"),element.setSelected(!element.isSelected))))})},bindZoomButtons:function(){var map=this;jvm.$("<div/>").addClass("jvectormap-zoomin").text("+").appendTo(this.container),jvm.$("<div/>").addClass("jvectormap-zoomout").html("&#x2212;").appendTo(this.container),this.container.find(".jvectormap-zoomin").click(function(){map.setScale(map.scale*map.params.zoomStep,map.width/2,map.height/2,!1,map.params.zoomAnimate)}),this.container.find(".jvectormap-zoomout").click(function(){map.setScale(map.scale/map.params.zoomStep,map.width/2,map.height/2,!1,map.params.zoomAnimate)})},createTip:function(){var map=this;this.tip=jvm.$("<div/>").addClass("jvectormap-tip").appendTo(jvm.$("body")),this.container.mousemove(function(e){var left=e.pageX-15-map.tipWidth,top=e.pageY-15-map.tipHeight;5>left&&(left=e.pageX+15),5>top&&(top=e.pageY+15),map.tip.css({left:left,top:top})})},setScale:function(scale,anchorX,anchorY,isCentered,animate){var interval,scaleStart,scaleDiff,transXStart,transXDiff,transYStart,transYDiff,transX,transY,viewportChangeEvent=jvm.$.Event("zoom.jvectormap"),that=this,i=0,count=Math.abs(Math.round(60*(scale-this.scale)/Math.max(scale,this.scale))),deferred=new jvm.$.Deferred;return scale>this.params.zoomMax*this.baseScale?scale=this.params.zoomMax*this.baseScale:scale<this.params.zoomMin*this.baseScale&&(scale=this.params.zoomMin*this.baseScale),"undefined"!=typeof anchorX&&"undefined"!=typeof anchorY&&(zoomStep=scale/this.scale,isCentered?(transX=anchorX+this.defaultWidth*(this.width/(this.defaultWidth*scale))/2,transY=anchorY+this.defaultHeight*(this.height/(this.defaultHeight*scale))/2):(transX=this.transX-(zoomStep-1)/scale*anchorX,transY=this.transY-(zoomStep-1)/scale*anchorY)),animate&&count>0?(scaleStart=this.scale,scaleDiff=(scale-scaleStart)/count,transXStart=this.transX*this.scale,transYStart=this.transY*this.scale,transXDiff=(transX*scale-transXStart)/count,transYDiff=(transY*scale-transYStart)/count,interval=setInterval(function(){i+=1,that.scale=scaleStart+scaleDiff*i,that.transX=(transXStart+transXDiff*i)/that.scale,that.transY=(transYStart+transYDiff*i)/that.scale,that.applyTransform(),i==count&&(clearInterval(interval),that.container.trigger(viewportChangeEvent,[scale/that.baseScale]),deferred.resolve())},10)):(this.transX=transX,this.transY=transY,this.scale=scale,this.applyTransform(),this.container.trigger(viewportChangeEvent,[scale/this.baseScale]),deferred.resolve()),deferred},setFocus:function(config){var bbox,itemBbox,newBbox,codes,i,point;if(config=config||{},config.region?codes=[config.region]:config.regions&&(codes=config.regions),codes){for(i=0;i<codes.length;i++)this.regions[codes[i]]&&(itemBbox=this.regions[codes[i]].element.shape.getBBox(),itemBbox&&("undefined"==typeof bbox?bbox=itemBbox:(newBbox={x:Math.min(bbox.x,itemBbox.x),y:Math.min(bbox.y,itemBbox.y),width:Math.max(bbox.x+bbox.width,itemBbox.x+itemBbox.width)-Math.min(bbox.x,itemBbox.x),height:Math.max(bbox.y+bbox.height,itemBbox.y+itemBbox.height)-Math.min(bbox.y,itemBbox.y)},bbox=newBbox)));return this.setScale(Math.min(this.width/bbox.width,this.height/bbox.height),-(bbox.x+bbox.width/2),-(bbox.y+bbox.height/2),!0,config.animate)}return config.lat&&config.lng?(point=this.latLngToPoint(config.lat,config.lng),config.x=this.transX-point.x/this.scale,config.y=this.transY-point.y/this.scale):config.x&&config.y&&(config.x*=-this.defaultWidth,config.y*=-this.defaultHeight),this.setScale(config.scale*this.baseScale,config.x,config.y,!0,config.animate)},getSelected:function(type){var key,selected=[];for(key in this[type])this[type][key].element.isSelected&&selected.push(key);return selected},getSelectedRegions:function(){return this.getSelected("regions")},getSelectedMarkers:function(){return this.getSelected("markers")},setSelected:function(type,keys){var i;if("object"!=typeof keys&&(keys=[keys]),jvm.$.isArray(keys))for(i=0;i<keys.length;i++)this[type][keys[i]].element.setSelected(!0);else for(i in keys)this[type][i].element.setSelected(!!keys[i])},setSelectedRegions:function(keys){this.setSelected("regions",keys)},setSelectedMarkers:function(keys){this.setSelected("markers",keys)},clearSelected:function(type){var i,select={},selected=this.getSelected(type);for(i=0;i<selected.length;i++)select[selected[i]]=!1;this.setSelected(type,select)},clearSelectedRegions:function(){this.clearSelected("regions")},clearSelectedMarkers:function(){this.clearSelected("markers")},getMapObject:function(){return this},getRegionName:function(code){return this.mapData.paths[code].name},createRegions:function(){var key,region,map=this;this.regionLabelsGroup=this.regionLabelsGroup||this.canvas.addGroup();for(key in this.mapData.paths)region=new jvm.Region({map:this,path:this.mapData.paths[key].path,code:key,style:jvm.$.extend(!0,{},this.params.regionStyle),labelStyle:jvm.$.extend(!0,{},this.params.regionLabelStyle),canvas:this.canvas,labelsGroup:this.regionLabelsGroup,label:"vml"!=this.canvas.mode?this.params.labels&&this.params.labels.regions:null}),jvm.$(region.shape).bind("selected",function(e,isSelected){map.container.trigger("regionSelected.jvectormap",[jvm.$(this.node).attr("data-code"),isSelected,map.getSelectedRegions()])}),this.regions[key]={element:region,config:this.mapData.paths[key]}},createMarkers:function(markers){var i,marker,point,markerConfig,markersArray,map=this;if(this.markersGroup=this.markersGroup||this.canvas.addGroup(),this.markerLabelsGroup=this.markerLabelsGroup||this.canvas.addGroup(),jvm.$.isArray(markers))for(markersArray=markers.slice(),markers={},i=0;i<markersArray.length;i++)markers[i]=markersArray[i];for(i in markers)markerConfig=markers[i]instanceof Array?{latLng:markers[i]}:markers[i],point=this.getMarkerPosition(markerConfig),point!==!1&&(marker=new jvm.Marker({map:this,style:jvm.$.extend(!0,{},this.params.markerStyle,{initial:markerConfig.style||{}}),labelStyle:jvm.$.extend(!0,{},this.params.markerLabelStyle),index:i,cx:point.x,cy:point.y,group:this.markersGroup,canvas:this.canvas,labelsGroup:this.markerLabelsGroup,label:"vml"!=this.canvas.mode?this.params.labels&&this.params.labels.markers:null}),jvm.$(marker.shape).bind("selected",function(e,isSelected){map.container.trigger("markerSelected.jvectormap",[jvm.$(this.node).attr("data-index"),isSelected,map.getSelectedMarkers()])}),this.markers[i]&&this.removeMarkers([i]),this.markers[i]={element:marker,config:markerConfig})},repositionMarkers:function(){var i,point;for(i in this.markers)point=this.getMarkerPosition(this.markers[i].config),point!==!1&&this.markers[i].element.setStyle({cx:point.x,cy:point.y})},repositionLabels:function(){var key;for(key in this.regions)this.regions[key].element.updateLabelPosition();for(key in this.markers)this.markers[key].element.updateLabelPosition()},getMarkerPosition:function(markerConfig){return jvm.Map.maps[this.params.map].projection?this.latLngToPoint.apply(this,markerConfig.latLng||[0,0]):{x:markerConfig.coords[0]*this.scale+this.transX*this.scale,y:markerConfig.coords[1]*this.scale+this.transY*this.scale}},addMarker:function(key,marker,seriesData){var values,i,markers={},data=[],seriesData=seriesData||[];for(markers[key]=marker,i=0;i<seriesData.length;i++)values={},"undefined"!=typeof seriesData[i]&&(values[key]=seriesData[i]),data.push(values);this.addMarkers(markers,data)},addMarkers:function(markers,seriesData){var i;for(seriesData=seriesData||[],this.createMarkers(markers),i=0;i<seriesData.length;i++)this.series.markers[i].setValues(seriesData[i]||{})},removeMarkers:function(markers){var i;for(i=0;i<markers.length;i++)this.markers[markers[i]].element.remove(),delete this.markers[markers[i]]},removeAllMarkers:function(){var i,markers=[];for(i in this.markers)markers.push(i);this.removeMarkers(markers)},latLngToPoint:function(lat,lng){var point,inset,bbox,proj=jvm.Map.maps[this.params.map].projection,centralMeridian=proj.centralMeridian;return-180+centralMeridian>lng&&(lng+=360),point=jvm.Proj[proj.type](lat,lng,centralMeridian),inset=this.getInsetForPoint(point.x,point.y),inset?(bbox=inset.bbox,point.x=(point.x-bbox[0].x)/(bbox[1].x-bbox[0].x)*inset.width*this.scale,point.y=(point.y-bbox[0].y)/(bbox[1].y-bbox[0].y)*inset.height*this.scale,{x:point.x+this.transX*this.scale+inset.left*this.scale,y:point.y+this.transY*this.scale+inset.top*this.scale}):!1},pointToLatLng:function(x,y){var i,inset,bbox,nx,ny,proj=jvm.Map.maps[this.params.map].projection,centralMeridian=proj.centralMeridian,insets=jvm.Map.maps[this.params.map].insets;for(i=0;i<insets.length;i++)if(inset=insets[i],bbox=inset.bbox,nx=x-(this.transX*this.scale+inset.left*this.scale),ny=y-(this.transY*this.scale+inset.top*this.scale),nx=nx/(inset.width*this.scale)*(bbox[1].x-bbox[0].x)+bbox[0].x,ny=ny/(inset.height*this.scale)*(bbox[1].y-bbox[0].y)+bbox[0].y,nx>bbox[0].x&&nx<bbox[1].x&&ny>bbox[0].y&&ny<bbox[1].y)return jvm.Proj[proj.type+"_inv"](nx,-ny,centralMeridian);return!1},getInsetForPoint:function(x,y){var i,bbox,insets=jvm.Map.maps[this.params.map].insets;for(i=0;i<insets.length;i++)if(bbox=insets[i].bbox,x>bbox[0].x&&x<bbox[1].x&&y>bbox[0].y&&y<bbox[1].y)return insets[i]},createSeries:function(){var i,key;this.series={markers:[],regions:[]};for(key in this.params.series)for(i=0;i<this.params.series[key].length;i++)this.series[key][i]=new jvm.DataSeries(this.params.series[key][i],this[key],this)},remove:function(){this.tip.remove(),this.container.remove(),jvm.$(window).unbind("resize",this.onResize),jvm.$("body").unbind("mouseup",this.onContainerMouseUp)}},jvm.Map.maps={},jvm.Map.defaultParams={map:"world_mill_en",backgroundColor:"#505050",zoomButtons:!0,zoomOnScroll:!0,zoomOnScrollSpeed:3,panOnDrag:!0,zoomMax:8,zoomMin:1,zoomStep:1.6,zoomAnimate:!0,regionsSelectable:!1,markersSelectable:!1,bindTouchEvents:!0,regionStyle:{initial:{fill:"white","fill-opacity":1,stroke:"none","stroke-width":0,"stroke-opacity":1},hover:{"fill-opacity":.8,cursor:"pointer"},selected:{fill:"yellow"},selectedHover:{}},regionLabelStyle:{initial:{"font-family":"Verdana","font-size":"12","font-weight":"bold",cursor:"default",fill:"black"},hover:{cursor:"pointer"}},markerStyle:{initial:{fill:"grey",stroke:"#505050","fill-opacity":1,"stroke-width":1,"stroke-opacity":1,r:5},hover:{stroke:"black","stroke-width":2,cursor:"pointer"},selected:{fill:"blue"},selectedHover:{}},markerLabelStyle:{initial:{"font-family":"Verdana","font-size":"12","font-weight":"bold",cursor:"default",fill:"black"},hover:{cursor:"pointer"}}},jvm.Map.apiEvents={onRegionTipShow:"regionTipShow",onRegionOver:"regionOver",onRegionOut:"regionOut",onRegionClick:"regionClick",onRegionSelected:"regionSelected",onMarkerTipShow:"markerTipShow",onMarkerOver:"markerOver",onMarkerOut:"markerOut",onMarkerClick:"markerClick",onMarkerSelected:"markerSelected",onViewportChange:"viewportChange"},jvm.MultiMap=function(params){var that=this;this.maps={},this.params=jvm.$.extend(!0,{},jvm.MultiMap.defaultParams,params),this.params.maxLevel=this.params.maxLevel||Number.MAX_VALUE,this.params.main=this.params.main||{},this.params.main.multiMapLevel=0,this.history=[this.addMap(this.params.main.map,this.params.main)],this.defaultProjection=this.history[0].mapData.projection.type,this.mapsLoaded={},this.params.container.css({position:"relative"}),this.backButton=jvm.$("<div/>").addClass("jvectormap-goback").text("Back").appendTo(this.params.container),this.backButton.hide(),this.backButton.click(function(){that.goBack()}),this.spinner=jvm.$("<div/>").addClass("jvectormap-spinner").appendTo(this.params.container),this.spinner.hide()},jvm.MultiMap.prototype={addMap:function(name,config){var cnt=jvm.$("<div/>").css({width:"100%",height:"100%"});return this.params.container.append(cnt),this.maps[name]=new jvm.Map(jvm.$.extend(config,{container:cnt})),this.params.maxLevel>config.multiMapLevel&&this.maps[name].container.on("regionClick.jvectormap",{scope:this},function(e,code){var multimap=e.data.scope,mapName=multimap.params.mapNameByCode(code,multimap);multimap.drillDownPromise&&"pending"===multimap.drillDownPromise.state()||multimap.drillDown(mapName,code)}),this.maps[name]},downloadMap:function(code){var that=this,deferred=jvm.$.Deferred();return this.mapsLoaded[code]?deferred.resolve():jvm.$.get(this.params.mapUrlByCode(code,this)).then(function(){that.mapsLoaded[code]=!0,deferred.resolve()},function(){deferred.reject()}),deferred},drillDown:function(name,code){var currentMap=this.history[this.history.length-1],that=this,focusPromise=currentMap.setFocus({region:code,animate:!0}),downloadPromise=this.downloadMap(code);focusPromise.then(function(){"pending"===downloadPromise.state()&&that.spinner.show()}),downloadPromise.always(function(){that.spinner.hide()}),this.drillDownPromise=jvm.$.when(downloadPromise,focusPromise),this.drillDownPromise.then(function(){currentMap.params.container.hide(),that.maps[name]?that.maps[name].params.container.show():that.addMap(name,{map:name,multiMapLevel:currentMap.params.multiMapLevel+1}),that.history.push(that.maps[name]),that.backButton.show()})},goBack:function(){var currentMap=this.history.pop(),prevMap=this.history[this.history.length-1],that=this;currentMap.setFocus({scale:1,x:.5,y:.5,animate:!0}).then(function(){currentMap.params.container.hide(),prevMap.params.container.show(),prevMap.updateSize(),1===that.history.length&&that.backButton.hide(),prevMap.setFocus({scale:1,x:.5,y:.5,animate:!0})})}},jvm.MultiMap.defaultParams={mapNameByCode:function(code,multiMap){return code.toLowerCase()+"_"+multiMap.defaultProjection+"_en"},mapUrlByCode:function(code,multiMap){return"jquery-jvectormap-data-"+code.toLowerCase()+"-"+multiMap.defaultProjection+"-en.js"}};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js"), __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/maps/google/maps-google.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var MapsGoogle = (function () {
    function MapsGoogle() {
        this.lat = -37.813179;
        this.lng = 144.950259;
        this.zoom = 12;
    }
    MapsGoogle = __decorate([
        core_1.Component({
            selector: '[maps-google]',
            template: __webpack_require__("./src/app/maps/google/maps-google.template.html"),
            styles: ['sebm-google-map { height: 100% }']
        }), 
        __metadata('design:paramtypes', [])
    ], MapsGoogle);
    return MapsGoogle;
}());
exports.MapsGoogle = MapsGoogle;


/***/ },

/***/ "./src/app/maps/google/maps-google.template.html":
/***/ function(module, exports) {

module.exports = "<sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" class=\"content-map\">\r\n  <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\" [markerDraggable]=\"true\">\r\n  </sebm-google-map-marker>\r\n</sebm-google-map>\r\n<h1 class=\"page-title\">Google <span class=\"fw-semi-bold\">Maps</span></h1>\r\n"

/***/ },

/***/ "./src/app/maps/maps.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
__webpack_require__("./node_modules/jvectormap/jquery-jvectormap.min.js");
__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jvectormap-world/jquery-jvectormap-world-mill-en.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var ng2_bootstrap_1 = __webpack_require__("./node_modules/ng2-bootstrap/ng2-bootstrap.js");
var ng2_bootstrap_2 = __webpack_require__("./node_modules/ng2-bootstrap/ng2-bootstrap.js");
var core_2 = __webpack_require__("./node_modules/angular2-google-maps/core/index.js");
var maps_google_component_1 = __webpack_require__("./src/app/maps/google/maps-google.component.ts");
var maps_vector_component_1 = __webpack_require__("./src/app/maps/vector/maps-vector.component.ts");
exports.routes = [
    { path: '', redirectTo: 'google', pathMatch: 'full' },
    { path: 'google', component: maps_google_component_1.MapsGoogle },
    { path: 'vector', component: maps_vector_component_1.MapsVector }
];
var UiElementsModule = (function () {
    function UiElementsModule() {
    }
    UiElementsModule.routes = exports.routes;
    UiElementsModule = __decorate([
        core_1.NgModule({
            declarations: [
                // Components / Directives/ Pipes
                maps_google_component_1.MapsGoogle,
                maps_vector_component_1.MapsVector
            ],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(exports.routes),
                ng2_bootstrap_1.AlertModule,
                ng2_bootstrap_1.TooltipModule,
                ng2_bootstrap_2.ButtonsModule,
                ng2_bootstrap_2.DropdownModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
                })
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], UiElementsModule);
    return UiElementsModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UiElementsModule;


/***/ },

/***/ "./src/app/maps/vector/maps-vector.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var app_config_1 = __webpack_require__("./src/app/app.config.ts");
var MapsVector = (function () {
    function MapsVector(config) {
        this.config = config.getConfig();
        this.configFn = config;
        this.data = {
            map: 'world_mill_en',
            scaleColors: ['#C8EEFF', '#0071A4'],
            normalizeFunction: 'polynomial',
            focusOn: {
                x: 0.5359,
                y: 0.4,
                scale: 2.5
            },
            zoomMin: 0.85,
            hoverColor: false,
            regionStyle: {
                initial: {
                    fill: '#bdbdbd',
                    'fill-opacity': 1,
                    stroke: '#bdbdbd',
                    'stroke-width': 0,
                    'stroke-opacity': 0
                },
                hover: {
                    'fill-opacity': 0.8
                }
            },
            markerStyle: {
                initial: {
                    fill: this.config.settings.colors['brand-danger'],
                    stroke: this.configFn.darkenColor(this.config.settings.colors['brand-danger'], .1),
                    'fill-opacity': 1,
                    'stroke-width': 4,
                    'stroke-opacity': 0.2,
                    r: 5
                },
                hover: {
                    stroke: 'black',
                    'stroke-width': 5
                }
            },
            backgroundColor: '#eee',
            markers: [
                { latLng: [41.90, 12.45], name: 'Vatican City' },
                { latLng: [43.73, 7.41], name: 'Monaco' },
                { latLng: [-0.52, 166.93], name: 'Nauru' },
                { latLng: [-8.51, 179.21], name: 'Tuvalu' },
                { latLng: [43.93, 12.46], name: 'San Marino' },
                { latLng: [47.14, 9.52], name: 'Liechtenstein' },
                { latLng: [7.11, 171.06], name: 'Marshall Islands' },
                { latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis' },
                { latLng: [3.2, 73.22], name: 'Maldives' },
                { latLng: [35.88, 14.5], name: 'Malta' },
                { latLng: [12.05, -61.75], name: 'Grenada' },
                { latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines' },
                { latLng: [13.16, -59.55], name: 'Barbados' },
                { latLng: [17.11, -61.85], name: 'Antigua and Barbuda' },
                { latLng: [-4.61, 55.45], name: 'Seychelles' },
                { latLng: [7.35, 134.46], name: 'Palau' },
                { latLng: [42.5, 1.51], name: 'Andorra' },
                { latLng: [14.01, -60.98], name: 'Saint Lucia' },
                { latLng: [6.91, 158.18], name: 'Federated States of Micronesia' },
                { latLng: [1.3, 103.8], name: 'Singapore' },
                { latLng: [1.46, 173.03], name: 'Kiribati' },
                { latLng: [-21.13, -175.2], name: 'Tonga' },
                { latLng: [15.3, -61.38], name: 'Dominica' },
                { latLng: [-20.2, 57.5], name: 'Mauritius' },
                { latLng: [26.02, 50.55], name: 'Bahrain' },
                { latLng: [0.33, 6.73], name: 'S?o Tom? and Pr?ncipe' }
            ]
        };
    }
    MapsVector.prototype.ngOnInit = function () {
        jQuery('.vector-map').vectorMap(this.data);
    };
    MapsVector = __decorate([
        core_1.Component({
            selector: '[maps-vector]',
            template: __webpack_require__("./src/app/maps/vector/maps-vector.template.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__("./node_modules/jvectormap/jquery-jvectormap.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof app_config_1.AppConfig !== 'undefined' && app_config_1.AppConfig) === 'function' && _a) || Object])
    ], MapsVector);
    return MapsVector;
    var _a;
}());
exports.MapsVector = MapsVector;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/maps/vector/maps-vector.template.html":
/***/ function(module, exports) {

module.exports = "<div class=\"content-map vector-map\">\r\n</div>\r\n<header class=\"page-title\">\r\n  <h1 class=\"no-margin mb-sm\">Vector <span class=\"fw-semi-bold\">Maps</span></h1>\r\n  <p class=\"page-title fs-sm no-margin\">\r\n    <span class=\"fw-semi-bold\">1 656 843</span>\r\n    <span class=\"ml-xs circle bg-gray\"><i class=\"text-gray-lighter fa fa-circle\"></i></span>\r\n  </p>\r\n</header>\r\n"

/***/ }

});
//# sourceMappingURL=13.map