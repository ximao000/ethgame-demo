
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Friend/FriendItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '929f6Qz6CVMEqtAKReH4Ebo', 'FriendItem');
// Script/Friend/FriendItem.ts

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
var RobotProp_1 = require("../Model/RobotProp");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HotRoomItem = /** @class */ (function (_super) {
    __extends(HotRoomItem, _super);
    function HotRoomItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.lbName = null;
        _this.lbRobot = null;
        _this.ndEnergy = null;
        _this.iconSFs = [];
        _this._renderIdx = -1;
        _this._fridenId = 0;
        return _this;
    }
    Object.defineProperty(HotRoomItem.prototype, "renderIdx", {
        get: function () {
            return this._renderIdx;
        },
        enumerable: false,
        configurable: true
    });
    HotRoomItem.prototype.SetItem = function (idx, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._renderIdx = idx;
                this._fridenId = data.id;
                this.lbName.string = data.name;
                this.lbRobot.string = RobotProp_1.RobotTypeDesc[data.robot.robotType];
                this.ndEnergy.active = data.getEnergy;
                this.icon.spriteFrame = this.iconSFs[data.iconId];
                return [2 /*return*/];
            });
        });
    };
    HotRoomItem.prototype.OnClickSelf = function (event, customEventData) {
        console.log(this._renderIdx);
    };
    __decorate([
        property(cc.Sprite)
    ], HotRoomItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Label)
    ], HotRoomItem.prototype, "lbName", void 0);
    __decorate([
        property(cc.Label)
    ], HotRoomItem.prototype, "lbRobot", void 0);
    __decorate([
        property(cc.Node)
    ], HotRoomItem.prototype, "ndEnergy", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], HotRoomItem.prototype, "iconSFs", void 0);
    HotRoomItem = __decorate([
        ccclass
    ], HotRoomItem);
    return HotRoomItem;
}(cc.Component));
exports.default = HotRoomItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxGcmllbmRcXEZyaWVuZEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQW1EO0FBRzdDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBTTVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBb0NDO1FBbENHLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsYUFBTyxHQUFxQixFQUFFLENBQUM7UUFLdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUN4QixlQUFTLEdBQVcsQ0FBQyxDQUFDOztJQWdCbEMsQ0FBQztJQXBCRyxzQkFBSSxrQ0FBUzthQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBSUssNkJBQU8sR0FBYixVQUFjLEdBQVcsRUFBRSxJQUFhOzs7Z0JBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO2dCQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLHlCQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7Ozs7S0FDcEQ7SUFFRCxpQ0FBVyxHQUFYLFVBQVksS0FBSyxFQUFFLGVBQWU7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFakMsQ0FBQztJQWhDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNHO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ0s7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDTTtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dEQUNJO0lBZGQsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQW9DL0I7SUFBRCxrQkFBQztDQXBDRCxBQW9DQyxDQXBDd0MsRUFBRSxDQUFDLFNBQVMsR0FvQ3BEO2tCQXBDb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvYm90VHlwZURlc2MgfSBmcm9tIFwiLi4vTW9kZWwvUm9ib3RQcm9wXCI7XG5pbXBvcnQgeyBJRnJpZW5kIH0gZnJvbSBcIi4vRnJpZW5kUHJvcFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5cblxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG90Um9vbUl0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgaWNvbjogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYk5hbWU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYlJvYm90OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuZEVuZXJneTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBpY29uU0ZzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cbiAgICBnZXQgcmVuZGVySWR4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVySWR4O1xuICAgIH1cbiAgICBwcml2YXRlIF9yZW5kZXJJZHg6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgX2ZyaWRlbklkOiBudW1iZXIgPSAwO1xuXG4gICAgYXN5bmMgU2V0SXRlbShpZHg6IG51bWJlciwgZGF0YTogSUZyaWVuZCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJJZHggPSBpZHg7XG4gICAgICAgIHRoaXMuX2ZyaWRlbklkID0gZGF0YS5pZDtcbiAgICAgICAgdGhpcy5sYk5hbWUuc3RyaW5nID0gZGF0YS5uYW1lO1xuICAgICAgICB0aGlzLmxiUm9ib3Quc3RyaW5nID0gUm9ib3RUeXBlRGVzY1tkYXRhLnJvYm90LnJvYm90VHlwZV07XG4gICAgICAgIHRoaXMubmRFbmVyZ3kuYWN0aXZlID0gZGF0YS5nZXRFbmVyZ3k7XG4gICAgICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuaWNvblNGc1tkYXRhLmljb25JZF1cbiAgICB9XG5cbiAgICBPbkNsaWNrU2VsZihldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3JlbmRlcklkeCk7XG5cbiAgICB9XG5cbn1cbiJdfQ==