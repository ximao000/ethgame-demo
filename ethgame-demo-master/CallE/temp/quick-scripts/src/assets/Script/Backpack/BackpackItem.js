"use strict";
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