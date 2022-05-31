
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
var LocalDataAPI_1 = require("../Utils/LocalDataAPI");
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
        _this.lbs = [];
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
            var player;
            return __generator(this, function (_a) {
                this._renderIdx = idx;
                this._robotData = data;
                this.lbMint.string = "Mint:" + data.mint;
                this.lbID.string = "" + data.id;
                this.lbLv.string = "Lv." + data.level;
                this.lbType.string = RobotProp_1.RobotTypeDesc[data.robotType];
                this.icon.spriteFrame = this.iconSFs[data.robotImgId];
                //属性
                this.lbs[0].string = "" + data.efficiency;
                this.lbs[1].string = "" + data.luck;
                this.lbs[2].string = "" + data.pow;
                this.lbs[3].string = data.intMin + "~" + data.intMax;
                player = DataManager_1.default.Inst.GetData(Types_1.DataBaseKey.PLAYER_DATA);
                this.btnUse.active = true;
                this.btnUse.children[0].active = player.curRobotUse && player.curRobotUse.id === this._robotData.id ? true : false;
                this.btnUse.children[1].active = !this.btnUse.children[0].active;
                return [2 /*return*/];
            });
        });
    };
    BackpackItem.prototype.OnClickSelf = function (event, customEventData) {
        var player = DataManager_1.default.Inst.GetData(Types_1.DataBaseKey.PLAYER_DATA);
        var sate = player.curRobotUse && player.curRobotUse.id === this._robotData.id ? RobotInforCtrl_1.INFOR_STATE.ISUSEING : RobotInforCtrl_1.INFOR_STATE.HAED;
        Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.SHOW_ROBOT_INFOR, this._robotData, sate);
    };
    BackpackItem.prototype.OnClickUse = function (event, customEventData) {
        LocalDataAPI_1.API_UseRobot(this._robotData);
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
        property([cc.Label])
    ], BackpackItem.prototype, "lbs", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYWNrcGFja1xcQmFja3BhY2tJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUFtQztBQUNuQyxrREFBK0M7QUFDL0MsNENBQWlEO0FBQ2pELDhEQUEwRDtBQUMxRCxzREFBaUQ7QUFFakQsZ0RBQTJEO0FBQzNELHNEQUFxRDtBQUMvQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQXVFQztRQXJFRyxVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUd0QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLFVBQUksR0FBYSxJQUFJLENBQUM7UUFJdEIsU0FBRyxHQUFlLEVBQUUsQ0FBQztRQUdyQixhQUFPLEdBQXFCLEVBQUUsQ0FBQztRQUcvQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBU2YsZ0JBQVUsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUN4QixnQkFBVSxHQUFXLElBQUksQ0FBQzs7SUFxQ3RDLENBQUM7SUE3Q0csc0JBQUksbUNBQVM7YUFBYjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlDQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBSUssOEJBQU8sR0FBYixVQUFjLEdBQVcsRUFBRSxJQUFZOzs7O2dCQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENB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LENBQUM7Z0RBQ0s7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDRztJQUl0QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs2Q0FDQTtJQUdyQjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztpREFDSTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNLO0lBeEJOLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0F1RWhDO0lBQUQsbUJBQUM7Q0F2RUQsQUF1RUMsQ0F2RXlDLEVBQUUsQ0FBQyxTQUFTLEdBdUVyRDtrQkF2RW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2xvYmFsIGZyb20gXCIuLi9BcHAvR2xvYmFsXCI7XHJcbmltcG9ydCB7IExvY01zZyB9IGZyb20gXCIuLi9CYXNlTW9kZWwvTXNnRXZlbnRcIjtcclxuaW1wb3J0IHsgRGF0YUJhc2VLZXkgfSBmcm9tIFwiLi4vQmFzZU1vZGVsL1R5cGVzXCI7XHJcbmltcG9ydCB7IElORk9SX1NUQVRFIH0gZnJvbSBcIi4uL01haW5TY2VuZS9Sb2JvdEluZm9yQ3RybFwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgSVBsYXllckluZm8gfSBmcm9tIFwiLi4vTW9kZWwvUGxheWVyUHJvcFwiO1xyXG5pbXBvcnQgeyBJUm9ib3QsIFJvYm90VHlwZURlc2MgfSBmcm9tIFwiLi4vTW9kZWwvUm9ib3RQcm9wXCI7XHJcbmltcG9ydCB7IEFQSV9Vc2VSb2JvdCB9IGZyb20gXCIuLi9VdGlscy9Mb2NhbERhdGFBUElcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2twYWNrSXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgaWNvbjogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYlR5cGU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYklEOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJNaW50OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJMdjogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLkxhYmVsXSlcclxuICAgIGxiczogY2MuTGFiZWxbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgaWNvblNGczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuVXNlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBnZXQgcmVuZGVySWR4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJJZHg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHJvYm90SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvYm90RGF0YS5pZDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX3JlbmRlcklkeDogbnVtYmVyID0gLTE7XHJcbiAgICBwcml2YXRlIF9yb2JvdERhdGE6IElSb2JvdCA9IG51bGw7XHJcblxyXG4gICAgYXN5bmMgU2V0SXRlbShpZHg6IG51bWJlciwgZGF0YTogSVJvYm90KSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVySWR4ID0gaWR4O1xyXG4gICAgICAgIHRoaXMuX3JvYm90RGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5sYk1pbnQuc3RyaW5nID0gXCJNaW50OlwiICsgZGF0YS5taW50O1xyXG4gICAgICAgIHRoaXMubGJJRC5zdHJpbmcgPSBcIlwiICsgZGF0YS5pZFxyXG4gICAgICAgIHRoaXMubGJMdi5zdHJpbmcgPSBcIkx2LlwiICsgZGF0YS5sZXZlbDtcclxuICAgICAgICB0aGlzLmxiVHlwZS5zdHJpbmcgPSBSb2JvdFR5cGVEZXNjW2RhdGEucm9ib3RUeXBlXTtcclxuICAgICAgICB0aGlzLmljb24uc3ByaXRlRnJhbWUgPSB0aGlzLmljb25TRnNbZGF0YS5yb2JvdEltZ0lkXTtcclxuXHJcblxyXG4gICAgICAgIC8v5bGe5oCnXHJcbiAgICAgICAgdGhpcy5sYnNbMF0uc3RyaW5nID0gXCJcIiArIGRhdGEuZWZmaWNpZW5jeTtcclxuICAgICAgICB0aGlzLmxic1sxXS5zdHJpbmcgPSBcIlwiICsgZGF0YS5sdWNrO1xyXG4gICAgICAgIHRoaXMubGJzWzJdLnN0cmluZyA9IFwiXCIgKyBkYXRhLnBvdztcclxuICAgICAgICB0aGlzLmxic1szXS5zdHJpbmcgPSBkYXRhLmludE1pbiArIFwiflwiICsgZGF0YS5pbnRNYXg7XHJcblxyXG5cclxuICAgICAgICBsZXQgcGxheWVyID0gRGF0YU1hbmFnZXIuSW5zdC5HZXREYXRhPElQbGF5ZXJJbmZvPihEYXRhQmFzZUtleS5QTEFZRVJfREFUQSk7XHJcbiAgICAgICAgdGhpcy5idG5Vc2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJ0blVzZS5jaGlsZHJlblswXS5hY3RpdmUgPSBwbGF5ZXIuY3VyUm9ib3RVc2UgJiYgcGxheWVyLmN1clJvYm90VXNlLmlkID09PSB0aGlzLl9yb2JvdERhdGEuaWQgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idG5Vc2UuY2hpbGRyZW5bMV0uYWN0aXZlID0gIXRoaXMuYnRuVXNlLmNoaWxkcmVuWzBdLmFjdGl2ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgT25DbGlja1NlbGYoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIGxldCBwbGF5ZXIgPSBEYXRhTWFuYWdlci5JbnN0LkdldERhdGE8SVBsYXllckluZm8+KERhdGFCYXNlS2V5LlBMQVlFUl9EQVRBKTtcclxuICAgICAgICBsZXQgc2F0ZSA9IHBsYXllci5jdXJSb2JvdFVzZSAmJiBwbGF5ZXIuY3VyUm9ib3RVc2UuaWQgPT09IHRoaXMuX3JvYm90RGF0YS5pZCA/IElORk9SX1NUQVRFLklTVVNFSU5HIDogSU5GT1JfU1RBVEUuSEFFRDtcclxuICAgICAgICBHbG9iYWwuSW5zdC5FbWl0KExvY01zZy5TSE9XX1JPQk9UX0lORk9SLCB0aGlzLl9yb2JvdERhdGEsIHNhdGUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBPbkNsaWNrVXNlKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICBBUElfVXNlUm9ib3QodGhpcy5fcm9ib3REYXRhKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19