
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MainScene/MainSceneCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
var Types_1 = require("../BaseModel/Types");
var DataManager_1 = require("../Manager/DataManager");
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
        _this.lbHal = null;
        _this.lbAce = null;
        _this.lbCollectEnergy = null;
        _this.ndTop = null;
        _this.toggleContainer = null;
        _this.curCenterGroupIndex = 0;
        _this.centerGroupIsMoving = false;
        _this.centerGroups = [];
        _this._mapEventBind = null;
        return _this;
    }
    Object.defineProperty(Helloworld.prototype, "player", {
        get: function () {
            return DataManager_1.default.Inst.GetData(Types_1.DataBaseKey.PLAYER_DATA);
        },
        enumerable: false,
        configurable: true
    });
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
        this._UpdateTopUI();
        this._InitListener();
    };
    Helloworld.prototype._InitListener = function () {
        var _this = this;
        this._mapEventBind = new Map();
        this._mapEventBind.set(MsgEvent_1.LocMsg.UPDATE_COLLECT_ENERGY.toString(), this._UpdateTopUI);
        this._mapEventBind.set(MsgEvent_1.LocMsg.UPDATE_HAL_COUNT.toString(), this._UpdateTopUI);
        this._mapEventBind.set(MsgEvent_1.LocMsg.SHOW_ROBOT_INFOR.toString(), this._ShowRobotDialog);
        this._mapEventBind.set(MsgEvent_1.LocMsg.SHOW_ROBOT_INFOR.toString(), this._ShowRobotDialog);
        this._mapEventBind.set(MsgEvent_1.LocMsg.CHANGE_GROUP_BY_INDEX.toString(), this._ShowShopGroup);
        this._mapEventBind.forEach(function (value, event) {
            Global_1.default.Inst.On(event, value.bind(_this), _this);
        });
        Global_1.default.Inst.On(MsgEvent_1.LocMsg.SHOW_FRIEND_Energy_INFOR, this.OnBtnClick, this);
    };
    Helloworld.prototype._UpdateTopUI = function () {
        this.lbHal.string = this.player.halCount + "";
        this.lbAce.string = this.player.aceCount + "";
        this.lbCollectEnergy.string = this.player.collectEnergyCount + "";
    };
    Helloworld.prototype._ShowRobotDialog = function (data, state) {
        if (this.robotInforCtrl.node.active)
            return;
        this.robotInforCtrl.setDialog(data, state);
    };
    Helloworld.prototype._ShowShopGroup = function (index) {
        this.toggleContainer.toggleItems[index].check();
        this.OnBtnClick(null, index > 2 ? index - 1 : index);
    };
    Helloworld.prototype.start = function () {
    };
    Helloworld.prototype.OnBtnClick = function (event, customEventData) {
        var _this = this;
        var lastCenterGroupIndex = parseInt(customEventData);
        if (this.curCenterGroupIndex === lastCenterGroupIndex || this.centerGroupIsMoving)
            return;
        this.ndTop.active = lastCenterGroupIndex !== 1;
        //左滑动；
        this.centerGroupIsMoving = true;
        var lastCenterPosX = this.curCenterGroupIndex < lastCenterGroupIndex ? this.node.width : -this.node.width;
        var moveTime = 0.1;
        var oldIndex = this.curCenterGroupIndex;
        // this.centerGroups[lastCenterGroupIndex].active = true;
        this.centerGroups[lastCenterGroupIndex].x = lastCenterPosX;
        this.centerGroups[this.curCenterGroupIndex].runAction(cc.sequence(cc.moveTo(moveTime, cc.v2(-lastCenterPosX, 0)), cc.callFunc(function () {
            _this.centerGroupIsMoving = false;
            // this.centerGroups[oldIndex].active = false;
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
    __decorate([
        property(cc.Label)
    ], Helloworld.prototype, "lbHal", void 0);
    __decorate([
        property(cc.Label)
    ], Helloworld.prototype, "lbAce", void 0);
    __decorate([
        property(cc.Label)
    ], Helloworld.prototype, "lbCollectEnergy", void 0);
    __decorate([
        property(cc.Node)
    ], Helloworld.prototype, "ndTop", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], Helloworld.prototype, "toggleContainer", void 0);
    Helloworld = __decorate([
        ccclass
    ], Helloworld);
    return Helloworld;
}(cc.Component));
exports.default = Helloworld;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluU2NlbmVcXE1haW5TY2VuZUN0cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQW1DO0FBQ25DLGtEQUErQztBQUMvQyw0Q0FBaUQ7QUFDakQsc0RBQWlEO0FBR2pELG1EQUErRDtBQUV6RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTJIQztRQXhIRyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUk5QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixnQkFBVSxHQUFnQixFQUFFLENBQUM7UUFHN0Isb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBSXRDLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixxQkFBZSxHQUFHLElBQUksQ0FBQztRQUd2QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLHFCQUFlLEdBQXVCLElBQUksQ0FBQztRQUVuQyx5QkFBbUIsR0FBVyxDQUFDLENBQUM7UUFDaEMseUJBQW1CLEdBQVksS0FBSyxDQUFDO1FBQ3JDLGtCQUFZLEdBQWMsRUFBRSxDQUFDO1FBQzdCLG1CQUFhLEdBQTBCLElBQUksQ0FBQzs7SUF5RnhELENBQUM7SUF0Rkcsc0JBQUksOEJBQU07YUFBVjtZQUNJLE9BQU8scUJBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFjLG1CQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUUsQ0FBQzs7O09BQUE7SUFDUywyQkFBTSxHQUFoQjtRQUNJLG9DQUFvQztRQUVwQyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxVQUFVLENBQUMs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LENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs2Q0FDSTtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3VEQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0k7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQzt1REFDYztJQTdCMUIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQTJIOUI7SUFBRCxpQkFBQztDQTNIRCxBQTJIQyxDQTNIdUMsRUFBRSxDQUFDLFNBQVMsR0EySG5EO2tCQTNIb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHbG9iYWwgZnJvbSBcIi4uL0FwcC9HbG9iYWxcIjtcclxuaW1wb3J0IHsgTG9jTXNnIH0gZnJvbSBcIi4uL0Jhc2VNb2RlbC9Nc2dFdmVudFwiO1xyXG5pbXBvcnQgeyBEYXRhQmFzZUtleSB9IGZyb20gXCIuLi9CYXNlTW9kZWwvVHlwZXNcIjtcclxuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IElQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL01vZGVsL1BsYXllclByb3BcIjtcclxuaW1wb3J0IHsgSVJvYm90IH0gZnJvbSBcIi4uL01vZGVsL1JvYm90UHJvcFwiO1xyXG5pbXBvcnQgUm9ib3RJbmZvckN0cmwsIHsgSU5GT1JfU1RBVEUgfSBmcm9tIFwiLi9Sb2JvdEluZm9yQ3RybFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbGxvd29ybGQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXHJcbiAgICBtZW51QW5pbTogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjZW50ZXJSb290OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgICBjZW50ZXJQcmVmOiBjYy5QcmVmYWJbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShSb2JvdEluZm9yQ3RybClcclxuICAgIHJvYm90SW5mb3JDdHJsOiBSb2JvdEluZm9yQ3RybCA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiSGFsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJBY2U6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYkNvbGxlY3RFbmVyZ3kgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbmRUb3A6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGVDb250YWluZXIpXHJcbiAgICB0b2dnbGVDb250YWluZXI6IGNjLlRvZ2dsZUNvbnRhaW5lciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJDZW50ZXJHcm91cEluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjZW50ZXJHcm91cElzTW92aW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGNlbnRlckdyb3VwczogY2MuTm9kZVtdID0gW107XHJcbiAgICBwcml2YXRlIF9tYXBFdmVudEJpbmQ6IE1hcDxzdHJpbmcsIEZ1bmN0aW9uPiA9IG51bGw7XHJcblxyXG5cclxuICAgIGdldCBwbGF5ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIERhdGFNYW5hZ2VyLkluc3QuR2V0RGF0YTxJUGxheWVySW5mbz4oRGF0YUJhc2VLZXkuUExBWUVSX0RBVEEpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLm1lbnVBbmltLnBsYXkoJ21lbnVfcmVzZXQnKTtcclxuXHJcbiAgICAgICAgbGV0IGhvbWVDZW50ZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNlbnRlclByZWZbMF0pO1xyXG4gICAgICAgIGhvbWVDZW50ZXIucG9zaXRpb24ueCA9IDA7XHJcbiAgICAgICAgdGhpcy5jZW50ZXJSb290LmFkZENoaWxkKGhvbWVDZW50ZXIpO1xyXG4gICAgICAgIGxldCBmcmllbmRDZW50ZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNlbnRlclByZWZbMV0pO1xyXG4gICAgICAgIHRoaXMuY2VudGVyUm9vdC5hZGRDaGlsZChmcmllbmRDZW50ZXIpO1xyXG4gICAgICAgIGxldCBiYWNrcGFja0NlbnRlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2VudGVyUHJlZlsyXSk7XHJcbiAgICAgICAgdGhpcy5jZW50ZXJSb290LmFkZENoaWxkKGJhY2twYWNrQ2VudGVyKTtcclxuICAgICAgICBsZXQgc2hvcENlbnRlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2VudGVyUHJlZlszXSk7XHJcbiAgICAgICAgdGhpcy5jZW50ZXJSb290LmFkZENoaWxkKHNob3BDZW50ZXIpO1xyXG4gICAgICAgIGxldCBmcmllbmRFbmVyZ3lDZW50ZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNlbnRlclByZWZbNF0pO1xyXG4gICAgICAgIHRoaXMuY2VudGVyUm9vdC5hZGRDaGlsZChmcmllbmRFbmVyZ3lDZW50ZXIpO1xyXG4gICAgICAgIHRoaXMuY2VudGVyR3JvdXBzID0gdGhpcy5jZW50ZXJSb290LmNoaWxkcmVuO1xyXG5cclxuICAgICAgICB0aGlzLl9VcGRhdGVUb3BVSSgpXHJcbiAgICAgICAgdGhpcy5fSW5pdExpc3RlbmVyKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9Jbml0TGlzdGVuZXIoKSB7XHJcbiAgICAgICAgdGhpcy5fbWFwRXZlbnRCaW5kID0gbmV3IE1hcDxzdHJpbmcsIEZ1bmN0aW9uPigpO1xyXG4gICAgICAgIHRoaXMuX21hcEV2ZW50QmluZC5zZXQoTG9jTXNnLlVQREFURV9DT0xMRUNUX0VORVJHWS50b1N0cmluZygpLCB0aGlzLl9VcGRhdGVUb3BVSSk7XHJcbiAgICAgICAgdGhpcy5fbWFwRXZlbnRCaW5kLnNldChMb2NNc2cuVVBEQVRFX0hBTF9DT1VOVC50b1N0cmluZygpLCB0aGlzLl9VcGRhdGVUb3BVSSk7XHJcbiAgICAgICAgdGhpcy5fbWFwRXZlbnRCaW5kLnNldChMb2NNc2cuU0hPV19ST0JPVF9JTkZPUi50b1N0cmluZygpLCB0aGlzLl9TaG93Um9ib3REaWFsb2cpO1xyXG4gICAgICAgIHRoaXMuX21hcEV2ZW50QmluZC5zZXQoTG9jTXNnLlNIT1dfUk9CT1RfSU5GT1IudG9TdHJpbmcoKSwgdGhpcy5fU2hvd1JvYm90RGlhbG9nKTtcclxuICAgICAgICB0aGlzLl9tYXBFdmVudEJpbmQuc2V0KExvY01zZy5DSEFOR0VfR1JPVVBfQllfSU5ERVgudG9TdHJpbmcoKSwgdGhpcy5fU2hvd1Nob3BHcm91cCk7XHJcblxyXG4gICAgICAgIHRoaXMuX21hcEV2ZW50QmluZC5mb3JFYWNoKCh2YWx1ZSwgZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgR2xvYmFsLkluc3QuT24oZXZlbnQsIHZhbHVlLmJpbmQodGhpcyksIHRoaXMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBHbG9iYWwuSW5zdC5PbihMb2NNc2cuU0hPV19GUklFTkRfRW5lcmd5X0lORk9SLCB0aGlzLk9uQnRuQ2xpY2ssIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX1VwZGF0ZVRvcFVJKCkge1xyXG4gICAgICAgIHRoaXMubGJIYWwuc3RyaW5nID0gdGhpcy5wbGF5ZXIuaGFsQ291bnQgKyBcIlwiO1xyXG4gICAgICAgIHRoaXMubGJBY2Uuc3RyaW5nID0gdGhpcy5wbGF5ZXIuYWNlQ291bnQgKyBcIlwiO1xyXG4gICAgICAgIHRoaXMubGJDb2xsZWN0RW5lcmd5LnN0cmluZyA9IHRoaXMucGxheWVyLmNvbGxlY3RFbmVyZ3lDb3VudCArIFwiXCI7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIF9TaG93Um9ib3REaWFsb2coZGF0YTogSVJvYm90LCBzdGF0ZTogSU5GT1JfU1RBVEUpIHtcclxuICAgICAgICBpZiAodGhpcy5yb2JvdEluZm9yQ3RybC5ub2RlLmFjdGl2ZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucm9ib3RJbmZvckN0cmwuc2V0RGlhbG9nKGRhdGEsIHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9TaG93U2hvcEdyb3VwKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZUNvbnRhaW5lci50b2dnbGVJdGVtc1tpbmRleF0uY2hlY2soKTtcclxuICAgICAgICB0aGlzLk9uQnRuQ2xpY2sobnVsbCwgaW5kZXggPiAyID8gaW5kZXggLSAxIDogaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBPbkJ0bkNsaWNrKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICBsZXQgbGFzdENlbnRlckdyb3VwSW5kZXggPSBwYXJzZUludChjdXN0b21FdmVudERhdGEpO1xyXG4gICAgICAgIGlmICh0aGlzLmN1ckNlbnRlckdyb3VwSW5kZXggPT09IGxhc3RDZW50ZXJHcm91cEluZGV4IHx8IHRoaXMuY2VudGVyR3JvdXBJc01vdmluZykgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5uZFRvcC5hY3RpdmUgPSBsYXN0Q2VudGVyR3JvdXBJbmRleCAhPT0gMTtcclxuXHJcbiAgICAgICAgLy/lt6bmu5HliqjvvJtcclxuICAgICAgICB0aGlzLmNlbnRlckdyb3VwSXNNb3ZpbmcgPSB0cnVlO1xyXG4gICAgICAgIGxldCBsYXN0Q2VudGVyUG9zWCA9IHRoaXMuY3VyQ2VudGVyR3JvdXBJbmRleCA8IGxhc3RDZW50ZXJHcm91cEluZGV4ID8gdGhpcy5ub2RlLndpZHRoIDogLXRoaXMubm9kZS53aWR0aDtcclxuICAgICAgICBsZXQgbW92ZVRpbWUgPSAwLjE7XHJcbiAgICAgICAgbGV0IG9sZEluZGV4ID0gdGhpcy5jdXJDZW50ZXJHcm91cEluZGV4O1xyXG5cclxuICAgICAgICAvLyB0aGlzLmNlbnRlckdyb3Vwc1tsYXN0Q2VudGVyR3JvdXBJbmRleF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNlbnRlckdyb3Vwc1tsYXN0Q2VudGVyR3JvdXBJbmRleF0ueCA9IGxhc3RDZW50ZXJQb3NYO1xyXG4gICAgICAgIHRoaXMuY2VudGVyR3JvdXBzW3RoaXMuY3VyQ2VudGVyR3JvdXBJbmRleF0ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbyhtb3ZlVGltZSwgY2MudjIoLWxhc3RDZW50ZXJQb3NYLCAwKSksIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jZW50ZXJHcm91cElzTW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuY2VudGVyR3JvdXBzW29sZEluZGV4XS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgfSkpKTtcclxuICAgICAgICB0aGlzLmNlbnRlckdyb3Vwc1tsYXN0Q2VudGVyR3JvdXBJbmRleF0ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbyhtb3ZlVGltZSwgY2MudjIoMCwgMCkpLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgfSkpKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJDZW50ZXJHcm91cEluZGV4ID0gbGFzdENlbnRlckdyb3VwSW5kZXg7XHJcblxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=