
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Backpack/BackpackItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3e40ebsaehJNKK2Ro1jVPLt', 'BackpackItem');
// Script/Backpack/BackpackItem.ts

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
var Types_1 = require("../BaseModel/Types");
var RobotInforCtrl_1 = require("../MainScene/RobotInforCtrl");
var DataManager_1 = require("../Manager/DataManager");
var RobotProp_1 = require("../Model/RobotProp");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BackpackItem = /** @class */ (function (_super) {
    __extends(BackpackItem, _super);
    function BackpackItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.lbType = null;
        _this.lbID = null;
        _this.lbMint = null;
        _this.lbLv = null;
        _this.iconSFs = [];
        _this.btnUse = null;
        _this._renderIdx = -1;
        _this._robotData = null;
        return _this;
    }
    Object.defineProperty(BackpackItem.prototype, "renderIdx", {
        get: function () {
            return this._renderIdx;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackpackItem.prototype, "robotId", {
        get: function () {
            return this._robotData.id;
        },
        enumerable: false,
        configurable: true
    });
    BackpackItem.prototype.SetItem = function (idx, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._renderIdx = idx;
                this._robotData = data;
                this.lbMint.string = "Mint:" + data.mint;
                this.lbID.string = "#" + data.id;
                this.lbLv.string = "Lv " + data.level;
                this.lbType.string = RobotProp_1.RobotTypeDesc[data.robotType];
                this.icon.spriteFrame = this.iconSFs[data.robotImgId];
                this.btnUse.active = false;
                return [2 /*return*/];
            });
        });
    };
    BackpackItem.prototype.OnClickSelf = function (event, customEventData) {
        var player = DataManager_1.default.Inst.GetData(Types_1.DataBaseKey.PLAYER_DATA);
        var sate = player.curRobotUse && player.curRobotUse.id === this._robotData.id ? RobotInforCtrl_1.INFOR_STATE.ISUSEING : RobotInforCtrl_1.INFOR_STATE.HAED;
        Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.SHOW_ROBOT_INFOR, this._robotData, sate);
    };
    __decorate([
        property(cc.Sprite)
    ], BackpackItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Label)
    ], BackpackItem.prototype, "lbType", void 0);
    __decorate([
        property(cc.Label)
    ], BackpackItem.prototype, "lbID", void 0);
    __decorate([
        property(cc.Label)
    ], BackpackItem.prototype, "lbMint", void 0);
    __decorate([
        property(cc.Label)
    ], BackpackItem.prototype, "lbLv", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], BackpackItem.prototype, "iconSFs", void 0);
    __decorate([
        property(cc.Node)
    ], BackpackItem.prototype, "btnUse", void 0);
    BackpackItem = __decorate([
        ccclass
    ], BackpackItem);
    return BackpackItem;
}(cc.Component));
exports.default = BackpackItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYWNrcGFja1xcQmFja3BhY2tJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUFtQztBQUNuQyxrREFBK0M7QUFDL0MsNENBQWlEO0FBQ2pELDhEQUEwRDtBQUMxRCxzREFBaUQ7QUFFakQsZ0RBQTJEO0FBQ3JELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBbURDO1FBakRHLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBR3RCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUl0QixhQUFPLEdBQXFCLEVBQUUsQ0FBQztRQUcvQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBU2YsZ0JBQVUsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUN4QixnQkFBVSxHQUFXLElBQUksQ0FBQzs7SUFvQnRDLENBQUM7SUE1Qkcsc0JBQUksbUNBQVM7YUFBYjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlDQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBSUssOEJBQU8sR0FBYixVQUFjLEdBQVcsRUFBRSxJQUFZOzs7Z0JBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO2dCQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFBO2dCQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcseUJBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Ozs7S0FFOUI7SUFFRCxrQ0FBVyxHQUFYLFVBQVksS0FBSyxFQUFFLGVBQWU7UUFDOUIsSUFBSSxNQUFNLEdBQUcscUJBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFjLG1CQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUUsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsNEJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLDRCQUFXLENBQUMsSUFBSSxDQUFDO1FBQ3hILGdCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBTSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQS9DRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNHO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ0s7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDRztJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ0c7SUFJdEI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7aURBQ0k7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDSztJQXJCTixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBbURoQztJQUFELG1CQUFDO0NBbkRELEFBbURDLENBbkR5QyxFQUFFLENBQUMsU0FBUyxHQW1EckQ7a0JBbkRvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vQXBwL0dsb2JhbFwiO1xuaW1wb3J0IHsgTG9jTXNnIH0gZnJvbSBcIi4uL0Jhc2VNb2RlbC9Nc2dFdmVudFwiO1xuaW1wb3J0IHsgRGF0YUJhc2VLZXkgfSBmcm9tIFwiLi4vQmFzZU1vZGVsL1R5cGVzXCI7XG5pbXBvcnQgeyBJTkZPUl9TVEFURSB9IGZyb20gXCIuLi9NYWluU2NlbmUvUm9ib3RJbmZvckN0cmxcIjtcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IHsgSVBsYXllckluZm8gfSBmcm9tIFwiLi4vTW9kZWwvUGxheWVyUHJvcFwiO1xuaW1wb3J0IHsgSVJvYm90LCBSb2JvdFR5cGVEZXNjIH0gZnJvbSBcIi4uL01vZGVsL1JvYm90UHJvcFwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2twYWNrSXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBpY29uOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiVHlwZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiSUQ6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYk1pbnQ6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkx2OiBjYy5MYWJlbCA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgIGljb25TRnM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0blVzZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBnZXQgcmVuZGVySWR4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVySWR4O1xuICAgIH1cblxuICAgIGdldCByb2JvdElkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm9ib3REYXRhLmlkO1xuICAgIH1cbiAgICBwcml2YXRlIF9yZW5kZXJJZHg6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgX3JvYm90RGF0YTogSVJvYm90ID0gbnVsbDtcblxuICAgIGFzeW5jIFNldEl0ZW0oaWR4OiBudW1iZXIsIGRhdGE6IElSb2JvdCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJJZHggPSBpZHg7XG4gICAgICAgIHRoaXMuX3JvYm90RGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMubGJNaW50LnN0cmluZyA9IFwiTWludDpcIiArIGRhdGEubWludDtcbiAgICAgICAgdGhpcy5sYklELnN0cmluZyA9IFwiI1wiICsgZGF0YS5pZFxuICAgICAgICB0aGlzLmxiTHYuc3RyaW5nID0gXCJMdiBcIiArIGRhdGEubGV2ZWw7XG4gICAgICAgIHRoaXMubGJUeXBlLnN0cmluZyA9IFJvYm90VHlwZURlc2NbZGF0YS5yb2JvdFR5cGVdO1xuICAgICAgICB0aGlzLmljb24uc3ByaXRlRnJhbWUgPSB0aGlzLmljb25TRnNbZGF0YS5yb2JvdEltZ0lkXTtcbiAgICAgICAgdGhpcy5idG5Vc2UuYWN0aXZlID0gZmFsc2U7XG5cbiAgICB9XG5cbiAgICBPbkNsaWNrU2VsZihldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgIGxldCBwbGF5ZXIgPSBEYXRhTWFuYWdlci5JbnN0LkdldERhdGE8SVBsYXllckluZm8+KERhdGFCYXNlS2V5LlBMQVlFUl9EQVRBKTtcbiAgICAgICAgbGV0IHNhdGUgPSBwbGF5ZXIuY3VyUm9ib3RVc2UgJiYgcGxheWVyLmN1clJvYm90VXNlLmlkID09PSB0aGlzLl9yb2JvdERhdGEuaWQgPyBJTkZPUl9TVEFURS5JU1VTRUlORyA6IElORk9SX1NUQVRFLkhBRUQ7XG4gICAgICAgIEdsb2JhbC5JbnN0LkVtaXQoTG9jTXNnLlNIT1dfUk9CT1RfSU5GT1IsIHRoaXMuX3JvYm90RGF0YSwgc2F0ZSk7XG4gICAgfVxuXG59XG4iXX0=