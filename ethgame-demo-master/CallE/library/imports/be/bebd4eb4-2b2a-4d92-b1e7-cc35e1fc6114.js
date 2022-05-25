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
var RobotProp_1 = require("../Model/RobotProp");
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
        _this.lbSol = null;
        _this.iconSFs = [];
        _this.ndState = [];
        return _this;
        // update (dt) {}
    }
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
        this.lbID.string = "#" + data.id;
        this.lbType.string = RobotProp_1.RobotTypeDesc[data.robotType];
        this.lbMint.string = "Mint:" + data.mint;
        this.lbLv.string = "Lv " + data.level;
        this.lbEfficiency.string = "" + data.efficiency;
        this.lbLuck.string = "" + data.luck;
        this.lbLoss.string = "" + data.loss;
        this.lbSol.string = data.sol + " SOL";
        this.icon.spriteFrame = this.iconSFs[data.robotImgId];
        for (var _i = 0, _a = this.ndState; _i < _a.length; _i++) {
            var iterator = _a[_i];
            iterator.active = false;
        }
        this.ndState[state].active = true;
        this.node.active = true;
    };
    RobotInforCtrl.prototype.OnBtnClose = function () {
        this.node.active = false;
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
    ], RobotInforCtrl.prototype, "lbSol", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], RobotInforCtrl.prototype, "iconSFs", void 0);
    __decorate([
        property([cc.Node])
    ], RobotInforCtrl.prototype, "ndState", void 0);
    RobotInforCtrl = __decorate([
        ccclass
    ], RobotInforCtrl);
    return RobotInforCtrl;
}(cc.Component));
exports.default = RobotInforCtrl;

cc._RF.pop();