
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Shop/ShopItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47dccJFJv5GhrLfeiBP9PP3', 'ShopItem');
// Script/Shop/ShopItem.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Global_1 = require("../App/Global");
var MsgEvent_1 = require("../BaseModel/MsgEvent");
var RobotInforCtrl_1 = require("../MainScene/RobotInforCtrl");
var RobotProp_1 = require("../Model/RobotProp");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShopItem = /** @class */ (function (_super) {
    __extends(ShopItem, _super);
    function ShopItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.lbType = null;
        _this.lbID = null;
        _this.lbMint = null;
        _this.lbLv = null;
        _this.lbSol = null;
        _this.iconSFs = [];
        _this._renderIdx = -1;
        _this._shopId = 0;
        _this._robotData = null;
        return _this;
    }
    Object.defineProperty(ShopItem.prototype, "renderIdx", {
        get: function () {
            return this._renderIdx;
        },
        enumerable: false,
        configurable: true
    });
    ShopItem.prototype.SetItem = function (idx, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._renderIdx = idx;
                this._robotData = data;
                this._shopId = data.id;
                this.lbMint.string = "Mint:" + data.mint;
                this.lbID.string = "#" + data.id;
                this.lbSol.string = data.sol + "SOL";
                this.lbLv.string = "Lv " + data.level;
                this.lbType.string = RobotProp_1.RobotTypeDesc[data.robotType];
                this.icon.spriteFrame = this.iconSFs[data.robotImgId];
                return [2 /*return*/];
            });
        });
    };
    ShopItem.prototype.OnClickSelf = function (event, customEventData) {
        Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.SHOW_ROBOT_INFOR, this._robotData, RobotInforCtrl_1.INFOR_STATE.BUY);
    };
    __decorate([
        property(cc.Sprite)
    ], ShopItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Label)
    ], ShopItem.prototype, "lbType", void 0);
    __decorate([
        property(cc.Label)
    ], ShopItem.prototype, "lbID", void 0);
    __decorate([
        property(cc.Label)
    ], ShopItem.prototype, "lbMint", void 0);
    __decorate([
        property(cc.Label)
    ], ShopItem.prototype, "lbLv", void 0);
    __decorate([
        property(cc.Label)
    ], ShopItem.prototype, "lbSol", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], ShopItem.prototype, "iconSFs", void 0);
    ShopItem = __decorate([
        ccclass
    ], ShopItem);
    return ShopItem;
}(cc.Component));
exports.default = ShopItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTaG9wXFxTaG9wSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBbUM7QUFDbkMsa0RBQStDO0FBQy9DLDhEQUEwRDtBQUMxRCxnREFBMkQ7QUFHckQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFNNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4Q0M7UUE1Q0csVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLFVBQUksR0FBYSxJQUFJLENBQUM7UUFHdEIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBR3RCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFJdkIsYUFBTyxHQUFxQixFQUFFLENBQUM7UUFLdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUN4QixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLGdCQUFVLEdBQVcsSUFBSSxDQUFDOztJQWtCdEMsQ0FBQztJQXZCRyxzQkFBSSwrQkFBUzthQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBS0ssMEJBQU8sR0FBYixVQUFjLEdBQVcsRUFBRSxJQUFZOzs7Z0JBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO2dCQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUE7Z0JBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcseUJBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBOzs7O0tBQ3hEO0lBRUQsOEJBQVcsR0FBWCxVQUFZLEtBQUssRUFBRSxlQUFlO1FBQzlCLGdCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBTSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsNEJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBMUNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0c7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNHO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ0s7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDRztJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBSXZCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzZDQUNJO0lBckJkLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4QzVCO0lBQUQsZUFBQztDQTlDRCxBQThDQyxDQTlDcUMsRUFBRSxDQUFDLFNBQVMsR0E4Q2pEO2tCQTlDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHbG9iYWwgZnJvbSBcIi4uL0FwcC9HbG9iYWxcIjtcbmltcG9ydCB7IExvY01zZyB9IGZyb20gXCIuLi9CYXNlTW9kZWwvTXNnRXZlbnRcIjtcbmltcG9ydCB7IElORk9SX1NUQVRFIH0gZnJvbSBcIi4uL01haW5TY2VuZS9Sb2JvdEluZm9yQ3RybFwiO1xuaW1wb3J0IHsgSVJvYm90LCBSb2JvdFR5cGVEZXNjIH0gZnJvbSBcIi4uL01vZGVsL1JvYm90UHJvcFwiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cblxuXG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wSXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBpY29uOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiVHlwZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiSUQ6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYk1pbnQ6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkx2OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJTb2w6IGNjLkxhYmVsID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgaWNvblNGczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgZ2V0IHJlbmRlcklkeCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcklkeDtcbiAgICB9XG4gICAgcHJpdmF0ZSBfcmVuZGVySWR4OiBudW1iZXIgPSAtMTtcbiAgICBwcml2YXRlIF9zaG9wSWQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfcm9ib3REYXRhOiBJUm9ib3QgPSBudWxsO1xuXG4gICAgYXN5bmMgU2V0SXRlbShpZHg6IG51bWJlciwgZGF0YTogSVJvYm90KSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcklkeCA9IGlkeDtcbiAgICAgICAgdGhpcy5fcm9ib3REYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5fc2hvcElkID0gZGF0YS5pZDtcbiAgICAgICAgdGhpcy5sYk1pbnQuc3RyaW5nID0gXCJNaW50OlwiICsgZGF0YS5taW50O1xuICAgICAgICB0aGlzLmxiSUQuc3RyaW5nID0gXCIjXCIgKyBkYXRhLmlkXG4gICAgICAgIHRoaXMubGJTb2wuc3RyaW5nID0gZGF0YS5zb2wgKyBcIlNPTFwiO1xuICAgICAgICB0aGlzLmxiTHYuc3RyaW5nID0gXCJMdiBcIiArIGRhdGEubGV2ZWw7XG4gICAgICAgIHRoaXMubGJUeXBlLnN0cmluZyA9IFJvYm90VHlwZURlc2NbZGF0YS5yb2JvdFR5cGVdO1xuICAgICAgICB0aGlzLmljb24uc3ByaXRlRnJhbWUgPSB0aGlzLmljb25TRnNbZGF0YS5yb2JvdEltZ0lkXVxuICAgIH1cblxuICAgIE9uQ2xpY2tTZWxmKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcbiAgICAgICAgR2xvYmFsLkluc3QuRW1pdChMb2NNc2cuU0hPV19ST0JPVF9JTkZPUiwgdGhpcy5fcm9ib3REYXRhLCBJTkZPUl9TVEFURS5CVVkpO1xuICAgIH1cblxufVxuIl19