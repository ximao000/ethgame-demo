
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/App/Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBcHBcXEdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBWTtJQUFoRDs7SUEyQkEsQ0FBQztlQTNCb0IsTUFBTTtJQUd2QixzQkFBa0IsY0FBSTthQUF0QjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUVELHVCQUFNLEdBQU47UUFDSSxRQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBQ0QscUJBQUksR0FBSixVQUFLLEtBQXNCLEVBQUUsSUFBVSxFQUFFLElBQVUsRUFBRSxJQUFVLEVBQUUsSUFBVSxFQUFFLElBQVU7UUFDbkYsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsbUJBQUUsR0FBRixVQUFHLEtBQXNCLEVBQUUsUUFBa0IsRUFBRSxNQUFZLEVBQUUsVUFBb0I7UUFDN0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELHFCQUFJLEdBQUosVUFBSyxLQUFzQixFQUFFLFFBQWtCLEVBQUUsTUFBWSxFQUFFLFVBQW9CO1FBQy9FLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxvQkFBRyxHQUFILFVBQUksS0FBc0IsRUFBRSxRQUFtQixFQUFFLE1BQVksRUFBRSxVQUFvQjtRQUMvRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNsRSxDQUFDOztJQXRCYyxZQUFLLEdBQVcsSUFBSSxDQUFDO0lBRm5CLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0EyQjFCO0lBQUQsYUFBQztDQTNCRCxBQTJCQyxDQTNCbUMsRUFBRSxDQUFDLFNBQVMsR0EyQi9DO2tCQTNCb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY01zZyB9IGZyb20gXCIuLi9CYXNlTW9kZWwvTXNnRXZlbnRcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JhbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdDogR2xvYmFsID0gbnVsbDtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdDtcbiAgICB9XG5cbiAgICBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIEdsb2JhbC5faW5zdCA9IHRoaXM7XG4gICAgfVxuICAgIEVtaXQoZXZlbnQ6IHN0cmluZyB8IExvY01zZywgYXJnMT86IGFueSwgYXJnMj86IGFueSwgYXJnMz86IGFueSwgYXJnND86IGFueSwgYXJnNT86IGFueSkge1xuICAgICAgICB0aGlzLm5vZGUuZW1pdChldmVudC50b1N0cmluZygpLCBhcmcxLCBhcmcyLCBhcmczLCBhcmc0LCBhcmc1KTtcbiAgICB9XG5cbiAgICBPbihldmVudDogc3RyaW5nIHwgTG9jTXNnLCBjYWxsYmFjazogRnVuY3Rpb24sIHRhcmdldD86IGFueSwgdXNlQ2FwdHVyZT86IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGV2ZW50LnRvU3RyaW5nKCksIGNhbGxiYWNrLCB0YXJnZXQsIHVzZUNhcHR1cmUpO1xuICAgIH1cblxuICAgIE9uY2UoZXZlbnQ6IHN0cmluZyB8IExvY01zZywgY2FsbGJhY2s6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnksIHVzZUNhcHR1cmU/OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbmNlKGV2ZW50LnRvU3RyaW5nKCksIGNhbGxiYWNrLCB0YXJnZXQsIHVzZUNhcHR1cmUpO1xuICAgIH1cblxuICAgIE9mZihldmVudDogc3RyaW5nIHwgTG9jTXNnLCBjYWxsYmFjaz86IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnksIHVzZUNhcHR1cmU/OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoZXZlbnQudG9TdHJpbmcoKSwgY2FsbGJhY2ssIHRhcmdldCwgdXNlQ2FwdHVyZSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==