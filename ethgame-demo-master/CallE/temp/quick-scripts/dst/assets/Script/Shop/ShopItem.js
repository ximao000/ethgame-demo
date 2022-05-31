
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
var LocalDataAPI_1 = require("../Utils/LocalDataAPI");
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
    Object.defineProperty(ShopItem.prototype, "robotId", {
        get: function () {
            return this._robotData.id;
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
                this.lbMint.string = data.mint + "/7";
                this.lbID.string = "#" + data.id;
                this.lbSol.string = data.maticCost + "";
                this.lbLv.string = "Lv." + data.level;
                this.lbType.string = RobotProp_1.RobotTypeDesc[data.robotType];
                this.icon.spriteFrame = this.iconSFs[data.robotImgId];
                return [2 /*return*/];
            });
        });
    };
    ShopItem.prototype.OnClickSelf = function (event, customEventData) {
        Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.SHOW_ROBOT_INFOR, this._robotData, RobotInforCtrl_1.INFOR_STATE.BUY);
    };
    ShopItem.prototype.OnClickBuy = function () {
        LocalDataAPI_1.API_BuyRobot(this._robotData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTaG9wXFxTaG9wSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBbUM7QUFDbkMsa0RBQStDO0FBQy9DLDhEQUEwRDtBQUMxRCxnREFBMkQ7QUFDM0Qsc0RBQXFEO0FBRy9DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBTTVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcURDO1FBbkRHLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBR3RCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBSXZCLGFBQU8sR0FBcUIsRUFBRSxDQUFDO1FBUXZCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDeEIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixnQkFBVSxHQUFXLElBQUksQ0FBQzs7SUFzQnRDLENBQUM7SUE5Qkcsc0JBQUksK0JBQVM7YUFBYjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLDZCQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBS0ssMEJBQU8sR0FBYixVQUFjLEdBQVcsRUFBRSxJQUFZOzs7Z0JBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO2dCQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUE7Z0JBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcseUJBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBOzs7O0tBQ3hEO0lBRUQsOEJBQVcsR0FBWCxVQUFZLEtBQUssRUFBRSxlQUFlO1FBQzlCLGdCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBTSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsNEJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUNJLDJCQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFqREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswQ0FDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0c7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNHO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFJdkI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7NkNBQ0k7SUFyQmQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXFENUI7SUFBRCxlQUFDO0NBckRELEFBcURDLENBckRxQyxFQUFFLENBQUMsU0FBUyxHQXFEakQ7a0JBckRvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vQXBwL0dsb2JhbFwiO1xyXG5pbXBvcnQgeyBMb2NNc2cgfSBmcm9tIFwiLi4vQmFzZU1vZGVsL01zZ0V2ZW50XCI7XHJcbmltcG9ydCB7IElORk9SX1NUQVRFIH0gZnJvbSBcIi4uL01haW5TY2VuZS9Sb2JvdEluZm9yQ3RybFwiO1xyXG5pbXBvcnQgeyBJUm9ib3QsIFJvYm90VHlwZURlc2MgfSBmcm9tIFwiLi4vTW9kZWwvUm9ib3RQcm9wXCI7XHJcbmltcG9ydCB7IEFQSV9CdXlSb2JvdCB9IGZyb20gXCIuLi9VdGlscy9Mb2NhbERhdGFBUElcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuXHJcblxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcEl0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGljb246IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJUeXBlOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJJRDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiTWludDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiTHY6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYlNvbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIGljb25TRnM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBnZXQgcmVuZGVySWR4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJJZHg7XHJcbiAgICB9XHJcbiAgICBnZXQgcm9ib3RJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm9ib3REYXRhLmlkO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfcmVuZGVySWR4OiBudW1iZXIgPSAtMTtcclxuICAgIHByaXZhdGUgX3Nob3BJZDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX3JvYm90RGF0YTogSVJvYm90ID0gbnVsbDtcclxuXHJcbiAgICBhc3luYyBTZXRJdGVtKGlkeDogbnVtYmVyLCBkYXRhOiBJUm9ib3QpIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJJZHggPSBpZHg7XHJcbiAgICAgICAgdGhpcy5fcm9ib3REYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLl9zaG9wSWQgPSBkYXRhLmlkO1xyXG4gICAgICAgIHRoaXMubGJNaW50LnN0cmluZyA9IGRhdGEubWludCArIFwiLzdcIjtcclxuICAgICAgICB0aGlzLmxiSUQuc3RyaW5nID0gXCIjXCIgKyBkYXRhLmlkXHJcbiAgICAgICAgdGhpcy5sYlNvbC5zdHJpbmcgPSBkYXRhLm1hdGljQ29zdCArIFwiXCI7XHJcbiAgICAgICAgdGhpcy5sYkx2LnN0cmluZyA9IFwiTHYuXCIgKyBkYXRhLmxldmVsO1xyXG4gICAgICAgIHRoaXMubGJUeXBlLnN0cmluZyA9IFJvYm90VHlwZURlc2NbZGF0YS5yb2JvdFR5cGVdO1xyXG4gICAgICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuaWNvblNGc1tkYXRhLnJvYm90SW1nSWRdXHJcbiAgICB9XHJcblxyXG4gICAgT25DbGlja1NlbGYoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIEdsb2JhbC5JbnN0LkVtaXQoTG9jTXNnLlNIT1dfUk9CT1RfSU5GT1IsIHRoaXMuX3JvYm90RGF0YSwgSU5GT1JfU1RBVEUuQlVZKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkNsaWNrQnV5KCkge1xyXG4gICAgICAgIEFQSV9CdXlSb2JvdCh0aGlzLl9yb2JvdERhdGEpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=