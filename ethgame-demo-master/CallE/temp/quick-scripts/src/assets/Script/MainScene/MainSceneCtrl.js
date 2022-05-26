"use strict";
cc._RF.push(module, 'e1b90/rohdEk4SdmmEZANaD', 'MainSceneCtrl');
// Script/MainScene/MainSceneCtrl.ts

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
var Global_1 = require("../App/Global");
var MsgEvent_1 = require("../BaseModel/MsgEvent");
var RobotInforCtrl_1 = require("./RobotInforCtrl");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Helloworld = /** @class */ (function (_super) {
    __extends(Helloworld, _super);
    function Helloworld() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.menuAnim = null;
        _this.centerRoot = null;
        _this.centerPref = [];
        _this.robotInforCtrl = null;
        _this.curCenterGroupIndex = 0;
        _this.centerGroupIsMoving = false;
        _this.centerGroups = [];
        _this._mapEventBind = null;
        return _this;
    }
    Helloworld.prototype.onLoad = function () {
        // this.menuAnim.play('menu_reset');
        var homeCenter = cc.instantiate(this.centerPref[0]);
        homeCenter.position.x = 0;
        this.centerRoot.addChild(homeCenter);
        var friendCenter = cc.instantiate(this.centerPref[1]);
        this.centerRoot.addChild(friendCenter);
        var backpackCenter = cc.instantiate(this.centerPref[2]);
        this.centerRoot.addChild(backpackCenter);
        var shopCenter = cc.instantiate(this.centerPref[3]);
        this.centerRoot.addChild(shopCenter);
        var friendEnergyCenter = cc.instantiate(this.centerPref[4]);
        this.centerRoot.addChild(friendEnergyCenter);
        this.centerGroups = this.centerRoot.children;
        this._InitListener();
    };
    Helloworld.prototype._InitListener = function () {
        var _this = this;
        this._mapEventBind = new Map();
        this._mapEventBind.set(MsgEvent_1.LocMsg.SHOW_ROBOT_INFOR.toString(), this._ShowRobotDialog);
        this._mapEventBind.forEach(function (value, event) {
            Global_1.default.Inst.On(event, value.bind(_this), _this);
        });
        Global_1.default.Inst.On(MsgEvent_1.LocMsg.SHOW_FRIEND_Energy_INFOR, this.OnBtnClick, this);
    };
    Helloworld.prototype._ShowRobotDialog = function (data, state) {
        if (this.robotInforCtrl.node.active)
            return;
        this.robotInforCtrl.setDialog(data, state);
    };
    Helloworld.prototype.start = function () {
    };
    Helloworld.prototype.OnBtnClick = function (event, customEventData) {
        var _this = this;
        var lastCenterGroupIndex = parseInt(customEventData);
        if (this.curCenterGroupIndex === lastCenterGroupIndex || this.centerGroupIsMoving)
            return;
        //左滑动；
        this.centerGroupIsMoving = true;
        var lastCenterPosX = this.curCenterGroupIndex < lastCenterGroupIndex ? this.node.width : -this.node.width;
        var moveTime = 0.1;
        var oldIndex = this.curCenterGroupIndex;
        this.centerGroups[lastCenterGroupIndex].active = true;
        this.centerGroups[lastCenterGroupIndex].x = lastCenterPosX;
        this.centerGroups[this.curCenterGroupIndex].runAction(cc.sequence(cc.moveTo(moveTime, cc.v2(-lastCenterPosX, 0)), cc.callFunc(function () {
            _this.centerGroupIsMoving = false;
            _this.centerGroups[oldIndex].active = false;
        })));
        this.centerGroups[lastCenterGroupIndex].runAction(cc.sequence(cc.moveTo(moveTime, cc.v2(0, 0)), cc.callFunc(function () {
        })));
        this.curCenterGroupIndex = lastCenterGroupIndex;
    };
    __decorate([
        property(cc.Animation)
    ], Helloworld.prototype, "menuAnim", void 0);
    __decorate([
        property(cc.Node)
    ], Helloworld.prototype, "centerRoot", void 0);
    __decorate([
        property([cc.Prefab])
    ], Helloworld.prototype, "centerPref", void 0);
    __decorate([
        property(RobotInforCtrl_1.default)
    ], Helloworld.prototype, "robotInforCtrl", void 0);
    Helloworld = __decorate([
        ccclass
    ], Helloworld);
    return Helloworld;
}(cc.Component));
exports.default = Helloworld;

cc._RF.pop();