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
var TabsComponent = (function (_super) {
    __extends(TabsComponent, _super);
    function TabsComponent(element) {
        var _this = _super.call(this, element) || this;
        _this.initialize();
        return _this;
    }
    TabsComponent.prototype.getInstance = function () {
        return this;
    };
    TabsComponent.prototype.getAlias = function () {
        var alias = this.getAttributes().alias;
        return alias;
    };
    TabsComponent.prototype.getAttributes = function () {
        return this.getElement().dataset;
    };
    TabsComponent.prototype.getTag = function () {
        return this._tag;
    };
    TabsComponent.prototype.getContent = function () {
        return this._content;
    };
    TabsComponent.prototype.initialize = function () {
        var _this = this;
        this.tabs = this._element.querySelectorAll('.tab__item');
        this.tabsContent = this._element.querySelectorAll('.tab__content');
        this.selectTab(1);
        this.tabs.forEach(function (tab) {
            tab.addEventListener('click', function (event) {
                _this.selectTab(event.target.dataset.index);
            });
        });
    };
    TabsComponent.prototype.applyIndicatorClass = function (index) {
        var _this = this;
        this.tabs.forEach(function (tab) {
            if (tab.dataset.index == index) {
                _this.addIndicator(tab);
            }
            else {
                _this.removeIndicator(tab);
            }
        });
    };
    TabsComponent.prototype.displaySelectedTab = function (selectedTable) {
        this.tabsContent.forEach(function (content) {
            if (selectedTable == content.dataset.index) {
                content.classList.remove('helper--is-hidden');
            }
            else {
                content.classList.add('helper--is-hidden');
            }
        });
    };
    TabsComponent.prototype.removeIndicator = function (element) {
        element.classList.remove('tab__item--has-indicator');
    };
    TabsComponent.prototype.addIndicator = function (element) {
        element.classList.add('tab__item--has-indicator');
    };
    TabsComponent.prototype.selectTab = function (index) {
        this.applyIndicatorClass(index);
        this.displaySelectedTab(index);
    };
    return TabsComponent;
}(Component));
export { TabsComponent };
//# sourceMappingURL=tabs-component.js.map