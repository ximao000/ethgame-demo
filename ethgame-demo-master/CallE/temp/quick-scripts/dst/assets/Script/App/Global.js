
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
var Types_1 = require("../BaseModel/Types");
var DataManager_1 = require("../Manager/DataManager");
var PlayerProp_1 = require("../Model/PlayerProp");
var RobotProp_1 = require("../Model/RobotProp");
var Utils_1 = require("../Utils/Utils");
var EnergyProp_1 = require("../Energy/EnergyProp");
var LocalDataAPI_1 = require("../Utils/LocalDataAPI");
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
        this._InitLocalData();
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
    // update (dt) {}
    Global.prototype._InitLocalData = function () {
        // 个人数据
        var playerLoadData = Utils_1.default.LoadData(Types_1.SaveDataKey.PLAYER_DATA);
        if (!playerLoadData) {
            var player = PlayerProp_1.DefaultPlayerInfo();
            DataManager_1.default.Inst.SetData(Types_1.DataBaseKey.PLAYER_DATA, player);
            Utils_1.default.SaveData(Types_1.SaveDataKey.PLAYER_DATA, JSON.stringify(player));
        }
        else {
            var player = JSON.parse(playerLoadData);
            DataManager_1.default.Inst.SetData(Types_1.DataBaseKey.PLAYER_DATA, player);
        }
        // 商城数据
        var shopLoadData = Utils_1.default.LoadData(Types_1.SaveDataKey.SHOP_DATA);
        if (!shopLoadData) {
            var shops = RobotProp_1.DefaultShopInfo();
            DataManager_1.default.Inst.SetData(Types_1.DataBaseKey.SHOP_DATA, shops);
            Utils_1.default.SaveData(Types_1.SaveDataKey.SHOP_DATA, JSON.stringify(shops));
        }
        else {
            var shop = JSON.parse(shopLoadData);
            DataManager_1.default.Inst.SetData(Types_1.DataBaseKey.SHOP_DATA, shop);
        }
        // energy data
        Utils_1.default.RemoveSaveData(Types_1.SaveDataKey.ENERGY_DATA);
        var energyLoadData = Utils_1.default.LoadData(Types_1.SaveDataKey.ENERGY_DATA);
        if (!energyLoadData) {
            var energy = EnergyProp_1.DefaultEnergyInfo();
            DataManager_1.default.Inst.SetData(Types_1.DataBaseKey.ENERGY_DATA, energy);
            Utils_1.default.SaveData(Types_1.SaveDataKey.ENERGY_DATA, JSON.stringify(energy));
        }
        else {
            var energy = JSON.parse(energyLoadData);
            DataManager_1.default.Inst.SetData(Types_1.DataBaseKey.ENERGY_DATA, energy);
        }
        LocalDataAPI_1.UpdateEnergy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBcHBcXEdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSw0Q0FBOEQ7QUFDOUQsc0RBQWlEO0FBQ2pELGtEQUFxRTtBQUNyRSxnREFBNkQ7QUFDN0Qsd0NBQW1DO0FBQ25DLG1EQUErRTtBQUMvRSxzREFBbUQ7QUFFN0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7O0lBaUVBLENBQUM7ZUFqRW9CLE1BQU07SUFHdkIsc0JBQWtCLGNBQUk7YUFBdEI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFFRCx1QkFBTSxHQUFOO1FBQ0ksUUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxxQkFBSSxHQUFKLFVBQUssS0FBc0IsRUFBRSxJQUFVLEVBQUUsSUFBVSxFQUFFLElBQVUsRUFBRSxJQUFVLEVBQUUsSUFBVTtRQUNuRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxtQkFBRSxHQUFGLFVBQUcsS0FBc0IsRUFBRSxRQUFrQixFQUFFLE1BQVksRUFBRSxVQUFvQjtRQUM3RSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQscUJBQUksR0FBSixVQUFLLEtBQXNCLEVBQUUsUUFBa0IsRUFB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RTFCO0lBQUQsYUFBQztDQWpFRCxBQWlFQyxDQWpFbUMsRUFBRSxDQUFDLFNBQVMsR0FpRS9DO2tCQWpFb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY01zZyB9IGZyb20gXCIuLi9CYXNlTW9kZWwvTXNnRXZlbnRcIjtcbmltcG9ydCB7IERhdGFCYXNlS2V5LCBTYXZlRGF0YUtleSB9IGZyb20gXCIuLi9CYXNlTW9kZWwvVHlwZXNcIjtcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IHsgRGVmYXVsdFBsYXllckluZm8sIElQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL01vZGVsL1BsYXllclByb3BcIjtcbmltcG9ydCB7IERlZmF1bHRTaG9wSW5mbywgSVJvYm90IH0gZnJvbSBcIi4uL01vZGVsL1JvYm90UHJvcFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9VdGlscy9VdGlsc1wiO1xuaW1wb3J0IHtEZWZhdWx0RW5lcmd5SW5mbywgSUVuZXJneSwgTWFrZU5ld0VuZXJneX0gZnJvbSBcIi4uL0VuZXJneS9FbmVyZ3lQcm9wXCI7XG5pbXBvcnQge1VwZGF0ZUVuZXJneX0gZnJvbSBcIi4uL1V0aWxzL0xvY2FsRGF0YUFQSVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xvYmFsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0OiBHbG9iYWwgPSBudWxsO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEluc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0O1xuICAgIH1cblxuICAgIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgR2xvYmFsLl9pbnN0ID0gdGhpcztcbiAgICAgICAgdGhpcy5fSW5pdExvY2FsRGF0YSgpO1xuICAgIH1cbiAgICBFbWl0KGV2ZW50OiBzdHJpbmcgfCBMb2NNc2csIGFyZzE/OiBhbnksIGFyZzI/OiBhbnksIGFyZzM/OiBhbnksIGFyZzQ/OiBhbnksIGFyZzU/OiBhbnkpIHtcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoZXZlbnQudG9TdHJpbmcoKSwgYXJnMSwgYXJnMiwgYXJnMywgYXJnNCwgYXJnNSk7XG4gICAgfVxuXG4gICAgT24oZXZlbnQ6IHN0cmluZyB8IExvY01zZywgY2FsbGJhY2s6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnksIHVzZUNhcHR1cmU/OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbihldmVudC50b1N0cmluZygpLCBjYWxsYmFjaywgdGFyZ2V0LCB1c2VDYXB0dXJlKTtcbiAgICB9XG5cbiAgICBPbmNlKGV2ZW50OiBzdHJpbmcgfCBMb2NNc2csIGNhbGxiYWNrOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55LCB1c2VDYXB0dXJlPzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLm5vZGUub25jZShldmVudC50b1N0cmluZygpLCBjYWxsYmFjaywgdGFyZ2V0LCB1c2VDYXB0dXJlKTtcbiAgICB9XG5cbiAgICBPZmYoZXZlbnQ6IHN0cmluZyB8IExvY01zZywgY2FsbGJhY2s/OiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55LCB1c2VDYXB0dXJlPzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLm5vZGUub2ZmKGV2ZW50LnRvU3RyaW5nKCksIGNhbGxiYWNrLCB0YXJnZXQsIHVzZUNhcHR1cmUpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG4gICAgcHJpdmF0ZSBfSW5pdExvY2FsRGF0YSgpIHtcblxuICAgICAgICAvLyDkuKrkurrmlbDmja5cbiAgICAgICAgbGV0IHBsYXllckxvYWREYXRhID0gVXRpbHMuTG9hZERhdGEoU2F2ZURhdGFLZXkuUExBWUVSX0RBVEEpO1xuICAgICAgICBpZiAoIXBsYXllckxvYWREYXRhKSB7XG4gICAgICAgICAgICBsZXQgcGxheWVyID0gRGVmYXVsdFBsYXllckluZm8oKTtcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLkluc3QuU2V0RGF0YTxJUGxheWVySW5mbz4oRGF0YUJhc2VLZXkuUExBWUVSX0RBVEEsIHBsYXllcik7XG4gICAgICAgICAgICBVdGlscy5TYXZlRGF0YShTYXZlRGF0YUtleS5QTEFZRVJfREFUQSwgSlNPTi5zdHJpbmdpZnkocGxheWVyKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBwbGF5ZXIgPSBKU09OLnBhcnNlKHBsYXllckxvYWREYXRhKSBhcyBJUGxheWVySW5mbztcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLkluc3QuU2V0RGF0YTxJUGxheWVySW5mbz4oRGF0YUJhc2VLZXkuUExBWUVSX0RBVEEsIHBsYXllcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDllYbln47mlbDmja5cbiAgICAgICAgbGV0IHNob3BMb2FkRGF0YSA9IFV0aWxzLkxvYWREYXRhKFNhdmVEYXRhS2V5LlNIT1BfREFUQSk7XG4gICAgICAgIGlmICghc2hvcExvYWREYXRhKSB7XG4gICAgICAgICAgICBsZXQgc2hvcHMgPSBEZWZhdWx0U2hvcEluZm8oKTtcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLkluc3QuU2V0RGF0YTxJUm9ib3RbXT4oRGF0YUJhc2VLZXkuU0hPUF9EQVRBLCBzaG9wcyk7XG4gICAgICAgICAgICBVdGlscy5TYXZlRGF0YShTYXZlRGF0YUtleS5TSE9QX0RBVEEsIEpTT04uc3RyaW5naWZ5KHNob3BzKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzaG9wID0gSlNPTi5wYXJzZShzaG9wTG9hZERhdGEpIGFzIElSb2JvdFtdO1xuICAgICAgICAgICAgRGF0YU1hbmFnZXIuSW5zdC5TZXREYXRhPElSb2JvdFtdPihEYXRhQmFzZUtleS5TSE9QX0RBVEEsIHNob3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZW5lcmd5IGRhdGFcbiAgICAgICAgVXRpbHMuUmVtb3ZlU2F2ZURhdGEoU2F2ZURhdGFLZXkuRU5FUkdZX0RBVEEpO1xuICAgICAgICBsZXQgZW5lcmd5TG9hZERhdGEgPSBVdGlscy5Mb2FkRGF0YShTYXZlRGF0YUtleS5FTkVSR1lfREFUQSk7XG4gICAgICAgIGlmICghZW5lcmd5TG9hZERhdGEpIHtcbiAgICAgICAgICAgIGxldCBlbmVyZ3kgPSBEZWZhdWx0RW5lcmd5SW5mbygpO1xuICAgICAgICAgICAgRGF0YU1hbmFnZXIuSW5zdC5TZXREYXRhPElFbmVyZ3lbXT4oRGF0YUJhc2VLZXkuRU5FUkdZX0RBVEEsIGVuZXJneSk7XG4gICAgICAgICAgICBVdGlscy5TYXZlRGF0YShTYXZlRGF0YUtleS5FTkVSR1lfREFUQSwgSlNPTi5zdHJpbmdpZnkoZW5lcmd5KSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBlbmVyZ3kgPSBKU09OLnBhcnNlKGVuZXJneUxvYWREYXRhKSBhcyBJRW5lcmd5W107XG4gICAgICAgICAgICBEYXRhTWFuYWdlci5JbnN0LlNldERhdGE8SUVuZXJneVtdPihEYXRhQmFzZUtleS5FTkVSR1lfREFUQSwgZW5lcmd5KTtcbiAgICAgICAgfVxuICAgICAgICBVcGRhdGVFbmVyZ3koKTtcbiAgICB9XG59XG4iXX0=