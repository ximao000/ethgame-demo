"use strict";
cc._RF.push(module, '49f66cFvOBMd7WxxjR9OfUS', 'Global');
// Script/App/Global.ts

"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Global = /** @class */ (function (_super) {
    __extends(Global, _super);
    function Global() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Global_1 = Global;
    Object.defineProperty(Global, "Inst", {
        get: function () {
            return this._inst;
        },
        enumerable: false,
        configurable: true
    });
    Global.prototype.onLoad = function () {
        Global_1._inst = this;
    };
    Global.prototype.Emit = function (event, arg1, arg2, arg3, arg4, arg5) {
        this.node.emit(event.toString(), arg1, arg2, arg3, arg4, arg5);
    };
    Global.prototype.On = function (event, callback, target, useCapture) {
        this.node.on(event.toString(), callback, target, useCapture);
    };
    Global.prototype.Once = function (event, callback, target, useCapture) {
        this.node.once(event.toString(), callback, target, useCapture);
    };
    Global.prototype.Off = function (event, callback, target, useCapture) {
        this.node.off(event.toString(), callback, target, useCapture);
    };
    var Global_1;
    Global._inst = null;
    Global = Global_1 = __decorate([
        ccclass
    ], Global);
    return Global;
}(cc.Component));
exports.default = Global;

cc._RF.pop();