var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component } from '../component';
var MESSAGE = '[data-loading=message]';
var LoadingComponent = (function (_super) {
    __extends(LoadingComponent, _super);
    function LoadingComponent(element) {
        var _this = _super.call(this, element) || this;
        _this._top = '0';
        _this._left = '0';
        _this._width = '100%';
        _this._height = '100%';
        _this.loadingStart = _this.loadingStart.bind(_this);
        _this.loadingStop = _this.loadingStop.bind(_this);
        _this.setLoadingText = _this.setLoadingText.bind(_this);
        _this._initialize();
        return _this;
    }
    LoadingComponent.prototype.getInstance = function () {
        return this;
    };
    LoadingComponent.prototype._initialize = function () { };
    LoadingComponent.prototype.setPlaceholder = function (query) {
        var Placeholder = document.querySelector(query);
        if (Placeholder)
            this._placeholder = Placeholder;
        return this;
    };
    LoadingComponent.prototype.unsetPlaceholder = function () {
        this._placeholder = null;
        return this;
    };
    LoadingComponent.prototype._getPlaceholder = function () {
        return this._placeholder || document.querySelector('body');
    };
    LoadingComponent.prototype.loadingStart = function (loadingText) {
        if (loadingText === void 0) { loadingText = 'Loading ...'; }
        this.elementPosition();
        this.getElement().style = "top:" + this._top + "; left: " + this._left + "; width: " + this._width + "; height: " + this._height + ";";
        this._setPosition();
        this.getComponent().show();
        this.setLoadingText(loadingText);
        return this;
    };
    LoadingComponent.prototype._setPosition = function () {
        var el = this._getPlaceholder();
        var content = this.getElement().querySelector('.loading__content');
        if (content) {
            if (el == document.querySelector('body')) {
                content.style.position = 'fixed';
            }
            else {
                content.style.position = 'absolute';
            }
        }
    };
    LoadingComponent.prototype.elementPosition = function () {
        var el = this._getPlaceholder();
        this._top = el.offsetTop + 'px';
        this._left = el.offsetLeft + 'px';
        this._width = el.offsetWidth + 'px';
        this._height = el.offsetHeight + 'px';
    };
    LoadingComponent.prototype.loadingStop = function () {
        this.getComponent().hide();
        return this;
    };
    LoadingComponent.prototype.setLoadingText = function (loadingText) {
        this._getMessage().innerHTML = this.getElement().classList.contains('loading--is-oldstyle')
            ? loadingText
            : "\n    <svg class=\"ldi-1lzym4\" width=\"160px\" height=\"160px\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" style=\"background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;\"><!--?xml version=\"1.0\" encoding=\"utf-8\"?--><!--Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)--><svg version=\"1.1\" id=\"\u5716\u5C64_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" style=\"transform-origin: 50px 50px 0px;\" xml:space=\"preserve\"><g style=\"transform-origin: 50px 50px 0px;\"><g style=\"transform-origin: 50px 50px 0px; transform: scale(0.8);\"><g style=\"transform-origin: 50px 50px 0px;\"><g><style type=\"text/css\" style=\"transform-origin: 50px 50px 0px; animation-duration: 0.8s; animation-delay: -0.8s; animation-direction: normal;\" class=\"ld ld-float-px\">.st0{fill:#E0E0E0;} .st1{fill:#F5E6C8;} .st2{fill:none;stroke:#333333;stroke-width:4;stroke-miterlimit:10;} .st3{fill:#333333;} .st4{fill:#66503A;} .st5{fill:none;stroke:#333333;stroke-width:3.8931;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st6{fill:none;stroke:#849B87;stroke-width:7.7863;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st7{fill:#A0C8D7;} .st8{fill:#F5E6C8;stroke:#333333;stroke-width:4.0781;stroke-miterlimit:10;} .st9{fill:none;stroke:#333333;stroke-width:6.0232;stroke-miterlimit:10;} .st10{fill:#ABBD81;stroke:#849B87;stroke-width:4.0394;stroke-linejoin:round;stroke-miterlimit:10;} .st11{fill:#F5E6C8;stroke:#849B87;stroke-width:4;stroke-linejoin:round;stroke-miterlimit:10;} .st12{fill-rule:evenodd;clip-rule:evenodd;fill:#E0E0E0;} .st13{fill:#F47E60;} .st14{fill:none;stroke:#F47E60;stroke-width:5.6388;stroke-miterlimit:10;} .st15{fill:none;stroke:#E15B64;stroke-width:5.6388;stroke-miterlimit:10;} .st16{fill:#F8B26A;} .st17{fill:#77A4BD;} .st18{opacity:0.5;fill:#E15B64;} .st19{fill:#F5E6C8;stroke:#849B87;stroke-width:4.0394;stroke-linejoin:round;stroke-miterlimit:10;} .st20{fill:#E5756C;stroke:#E15B64;stroke-width:4.0394;stroke-linejoin:round;stroke-miterlimit:10;} .st21{fill-rule:evenodd;clip-rule:evenodd;fill:#E0E0E0;stroke:#E15B64;stroke-width:6.0232;stroke-miterlimit:10;} .st22{fill-rule:evenodd;clip-rule:evenodd;fill:#E15B64;stroke:#E15B64;stroke-width:3.7066;stroke-miterlimit:10;} .st23{fill:none;stroke:#333333;stroke-width:6.0232;stroke-linecap:round;stroke-miterlimit:10;} .st24{fill:#333333;stroke:#333333;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st25{fill:none;stroke:#333333;stroke-width:4.4736;stroke-linecap:round;stroke-miterlimit:10;} .st26{fill:#EC6551;} .st27{fill:none;stroke:#E15B64;stroke-width:8.7671;stroke-miterlimit:10;} .st28{fill:none;stroke:#333333;stroke-width:7.6;stroke-miterlimit:10;} .st29{fill:none;stroke:#E0E0E0;stroke-width:3;stroke-miterlimit:10;} .st30{fill:#E0E0E0;stroke:#333333;stroke-width:4.0781;stroke-miterlimit:10;} .st31{fill:none;stroke:#E15B64;stroke-width:4.0781;stroke-miterlimit:10;} .st32{fill:none;stroke:#333333;stroke-width:5.234;stroke-miterlimit:10;} .st33{fill:none;stroke:#E0E0E0;stroke-width:2.7915;stroke-miterlimit:10;} .st34{fill:#E15B64;} .st35{fill:none;stroke:#333333;stroke-width:4;stroke-linejoin:round;stroke-miterlimit:10;} .st36{fill:none;stroke:#849B87;stroke-width:7;stroke-linejoin:round;stroke-miterlimit:10;} .st37{fill:none;stroke:#E15B64;stroke-width:7;stroke-linejoin:round;stroke-miterlimit:10;} .st38{fill:none;stroke:#849B87;stroke-width:7;stroke-miterlimit:10;} .st39{fill:none;stroke:#E15B64;stroke-width:7;stroke-miterlimit:10;} .st40{fill:#323232;} .st41{fill:none;stroke:#333333;stroke-width:3.9264;stroke-linejoin:round;stroke-miterlimit:10;} .st42{fill:#A0C8D7;stroke:#333333;stroke-width:3.8931;stroke-linejoin:round;stroke-miterlimit:10;} .st43{fill:none;stroke:#FFFFFF;stroke-width:3.8931;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st44{fill:none;stroke:#333333;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st45{fill:#849B87;} .st46{fill:#A0C8D7;stroke:#333333;stroke-width:5;stroke-linejoin:round;stroke-miterlimit:10;} .st47{fill:#A0C8D7;stroke:#333333;stroke-width:3.8746;stroke-miterlimit:10;} .st48{fill:none;stroke:#333333;stroke-width:3.8746;stroke-miterlimit:10;} .st49{fill:none;stroke:#333333;stroke-width:7.7493;stroke-linecap:round;stroke-miterlimit:10;} .st50{fill:#FFFFFF;stroke:#333333;stroke-width:2.906;stroke-linecap:round;stroke-miterlimit:10;} .st51{fill:#FFFFFF;stroke:#333333;stroke-width:3.3211;stroke-linecap:round;stroke-miterlimit:10;} .st52{fill:none;stroke:#333333;stroke-width:3.3211;stroke-miterlimit:10;} .st53{fill:none;stroke:#849B87;stroke-width:3.3211;stroke-miterlimit:10;} .st54{fill:#666666;} .st55{fill:none;stroke:#333333;stroke-width:3.2552;stroke-miterlimit:10;} .st56{fill:none;stroke:#E15B64;stroke-width:2.1701;stroke-linecap:round;stroke-miterlimit:10;} .st57{fill:none;stroke:#E15B64;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;} .st58{fill:#ABBD81;} .st59{fill:none;stroke:#849B87;stroke-width:3;stroke-miterlimit:10;} .st60{fill:#E6E6E6;} .st61{fill:#E6E6E6;stroke:#333333;stroke-width:1.7333;stroke-miterlimit:10;} .st62{fill:none;stroke:#333333;stroke-width:1.7333;stroke-miterlimit:10;} .st63{fill:none;stroke:#849B87;stroke-width:2.0711;stroke-miterlimit:10;} .st64{fill:none;stroke:#333333;stroke-width:3.3;stroke-miterlimit:10;} .st65{fill:none;stroke:#E15B64;stroke-width:3.321;stroke-miterlimit:10;} .st66{fill:#CCCCCC;} .st67{fill:#B3B3B3;} .st68{fill:none;stroke:#A0C8D7;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10;} .st69{fill:#FFFFFF;} .st70{fill:none;stroke:#A0C8D7;stroke-width:8;stroke-miterlimit:10;}</style><g style=\"transform-origin: 50px 50px 0px; animation-duration: 0.8s; animation-delay: -0.733333s; animation-direction: normal;\" class=\"ld ld-float-px\"><circle class=\"st28\" cx=\"50\" cy=\"50\" r=\"38\" stroke=\"#fcddc1\" style=\"stroke: rgb(252, 221, 193);\"/></g><g style=\"transform-origin: 50px 50px 0px; animation-duration: 0.8s; animation-delay: -0.666667s; animation-direction: normal;\" class=\"ld ld-float-px\"><polygon class=\"st17\" points=\"71.375,48.072 50,30.075 28.625,48.072 36.407,48.072 36.407,66.125 45.976,66.125 45.976,53.545 54.024,53.545 54.024,66.125 63.593,66.125 63.593,48.072 \" fill=\"#F69947\" style=\"fill: rgb(246, 153, 71);\"/></g><metadata xmlns:d=\"https://loading.io/stock/\" style=\"transform-origin: 50px 50px 0px; animation-duration: 0.8s; animation-delay: -0.6s; animation-direction: normal;\" class=\"ld ld-float-px\">\n    <p>" + loadingText + "</p>\n    ";
    };
    LoadingComponent.prototype._getMessage = function () {
        if (!this._message)
            this._message = this.getElement().querySelector(MESSAGE);
        return this._message;
    };
    return LoadingComponent;
}(Component));
export { LoadingComponent };
//# sourceMappingURL=loading-component.js.map