import { Component } from '../component';
export declare class TabsComponent extends Component {
    private _tag;
    private _content;
    private tabs;
    private tabsContent;
    constructor(element: HTMLDivElement);
    getInstance(): this;
    getAlias(): string;
    getAttributes(): any;
    getTag(): string;
    getContent(): string;
    initialize(): void;
    applyIndicatorClass(index: any): void;
    displaySelectedTab(selectedTable: number): void;
    removeIndicator(element: any): void;
    addIndicator(element: any): void;
    selectTab(index: number): void;
}
