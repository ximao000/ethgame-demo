"use strict";
cc._RF.push(module, 'bebd460KypNkrHnzDXh/GEU', 'RobotInforCtrl');
// Script/MainScene/RobotInforCtrl.ts

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
exports.INFOR_STATE = void 0;
var Global_1 = require("../App/Global");
var MsgEvent_1 = require("../BaseModel/MsgEvent");
var RobotProp_1 = require("../Model/RobotProp");
var LocalDataAPI_1 = require("../Utils/LocalDataAPI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var INFOR_STATE;
(function (INFOR_STATE) {
    INFOR_STATE[INFOR_STATE["BUY"] = 0] = "BUY";
    INFOR_STATE[INFOR_STATE["HAED"] = 1] = "HAED";
    INFOR_STATE[INFOR_STATE["ISUSEING"] = 2] = "ISUSEING";
})(INFOR_STATE = exports.INFOR_STATE || (exports.INFOR_STATE = {}));
var RobotInforCtrl = /** @class */ (function (_super) {
    __extends(RobotInforCtrl, _super);
    function RobotInforCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.lbID = null;
        _this.lbType = null;
        _this.lbMint = null;
        _this.lbLv = null;
        _this.lbEfficiency = null;
        _this.lbLuck = null;
        _this.lbLoss = null;
        _this.lbInt = null;
        _this.lbSol = null;
        _this.iconSFs = [];
        _this.ndHad = null;
        _this.ndBuy = null;
        _this.btnUse = null;
        _this.btnUnUse = null;
        _this.pgbs = [];
        _this.ndInts = null;
        _this.robot = null;
        return _this;
        // update (dt) {}
    }
    RobotInforCtrl.prototype.onLoad = function () {
        Global_1.default.Inst.On(MsgEvent_1.LocMsg.UPDATE_ROBOT_INFOR, this.setDataToUI, this);
    };
    RobotInforCtrl.prototype.onEnable = function () {
        // // 测试；
        // let data: IRobot = {
        //     id: 1,
        //     robotImgId: 2,
        //     robotType: RobotType.TYPE_1,
        //     level: 3,
        //     mint: 4,
        //     sol: 5,
        //     efficiency: 6,
        //     luck: 7,
        //     loss: 8
        // };
        // this.setDialog(data, INFOR_STATE.ISUSEING);
    };
    RobotInforCtrl.prototype.setDialog = function (data, state) {
        this.setDataToUI(data, state);
        this.node.active = true;
    };
    RobotInforCtrl.prototype.setDataToUI = function (data, state) {
        this.robot = data;
        this.lbID.string = "" + data.id;
        this.lbType.string = RobotProp_1.RobotTypeDesc[data.robotType];
        this.lbMint.string = data.mint + "/7";
        this.lbLv.string = "Lv." + data.level;
        this.lbEfficiency.string = "" + data.efficiency;
        this.lbLuck.string = "" + data.luck;
        this.lbLoss.string = "" + data.pow;
        this.lbInt.string = data.intMin + "~" + data.intMax;
        this.lbSol.string = data.maticCost + "";
        this.icon.spriteFrame = this.iconSFs[data.robotImgId];
        this.pgbs[0].progress = data.efficiency / 10;
        this.pgbs[1].progress = data.luck / 10;
        this.pgbs[2].progress = data.pow / 10;
        for (var index = 0; index < 10; index++) {
            this.ndInts.children[index].active = (index >= data.intMin - 1 && index < data.intMax);
        }
        switch (state) {
            case INFOR_STATE.BUY:
                this.ndHad.active = false;
                this.ndBuy.active = true;
                break;
            case INFOR_STATE.HAED:
                this.ndHad.active = true;
                this.ndBuy.active = false;
                this.btnUse.active = true;
                this.btnUnUse.active = false;
                break;
            case INFOR_STATE.ISUSEING:
                this.ndHad.active = true;
                this.ndBuy.active = false;
                this.btnUse.active = false;
                this.btnUnUse.active = true;
                break;
        }
    };
    RobotInforCtrl.prototype.OnBtnClose = function () {
        this.node.active = false;
    };
    RobotInforCtrl.prototype.OnClickBuy = function () {
        LocalDataAPI_1.API_BuyRobot(this.robot);
    };
    RobotInforCtrl.prototype.OnClickUse = function () {
        LocalDataAPI_1.API_UseRobot(this.robot);
    };
    __decorate([
        property(cc.Sprite)
    ], RobotInforCtrl.prototype, "icon", void 0);
    __decorate([
        property(cc.Label)
    ], RobotInforCtrl.prototype, "lbID", void 0);
    __decorate([
        property(cc.Label)
    ], RobotInforCtrl.prototype, "lbType", void 0);
    __decorate([
        property(cc.Label)
    ], RobotInforCtrl.prototype, "lbMint", void 0);
    __decorate([
        property(cc.Label)
    ], RobotInforCtrl.prototype, "lbLv", void 0);
    __decorate([
        property(cc.Label)
    ], RobotInforCtrl.prototype, "lbEfficiency", void 0);
    __decorate([
        property(cc.Label)
    ], RobotInforCtrl.prototype, "lbLuck", void 0);
    __decorate([
        property(cc.Label)
    ], RobotInforCtrl.prototype, "lbLoss", void 0);
    __decorate([
        property(cc.Label)
    ], RobotInforCtrl.prototype, "lbInt", void 0);
    __decorate([
        property(cc.Label)
    ], RobotInforCtrl.prototype, "lbSol", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], RobotInforCtrl.prototype, "iconSFs", void 0);
    __decorate([
        property(cc.Node)
    ], RobotInforCtrl.prototype, "ndHad", void 0);
    __decorate([
        property(cc.Node)
    ], RobotInforCtrl.prototype, "ndBuy", void 0);
    __decorate([
        property(cc.Node)
    ], RobotInforCtrl.prototype, "btnUse", void 0);
    __decorate([
        property(cc.Node)
    ], RobotInforCtrl.prototype, "btnUnUse", void 0);
    __decorate([
        property([cc.ProgressBar])
    ], RobotInforCtrl.prototype, "pgbs", void 0);
    __decorate([
        property([cc.Node])
    ], RobotInforCtrl.prototype, "ndInts", void 0);
    RobotInforCtrl = __decorate([
        ccclass
    ], RobotInforCtrl);
    return RobotInforCtrl;
}(cc.Component));
exports.default = RobotInforCtrl;

cc._RF.pop();