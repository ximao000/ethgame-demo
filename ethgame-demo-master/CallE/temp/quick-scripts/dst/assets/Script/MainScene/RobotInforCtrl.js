
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MainScene/RobotInforCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluU2NlbmVcXFJvYm90SW5mb3JDdHJsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBbUM7QUFDbkMsa0RBQStDO0FBQy9DLGdEQUEyRDtBQUMzRCxzREFBbUU7QUFFN0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBWSxXQUlYO0FBSkQsV0FBWSxXQUFXO0lBQ25CLDJDQUFHLENBQUE7SUFDSCw2Q0FBSSxDQUFBO0lBQ0oscURBQVEsQ0FBQTtBQUNaLENBQUMsRUFKVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUl0QjtBQUdEO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBd0lDO1FBcklHLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUd0QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUd0QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUc5QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGFBQU8sR0FBcUIsRUFBRSxDQUFDO1FBRy9CLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFJekIsVUFBSSxHQUFxQixFQUFFLENBQUM7UUFHNUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUVmLFdBQUssR0FBVyxJQUFJLENBQUM7O1FBaUY3QixpQkFBaUI7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SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDRztJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3dEQUNXO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ0s7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7bURBQ0k7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDSTtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNJO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDTztJQUl6QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztnREFDQztJQUc1QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztrREFDRztJQXBETixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBd0lsQztJQUFELHFCQUFDO0NBeElELEFBd0lDLENBeEkyQyxFQUFFLENBQUMsU0FBUyxHQXdJdkQ7a0JBeElvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vQXBwL0dsb2JhbFwiO1xyXG5pbXBvcnQgeyBMb2NNc2cgfSBmcm9tIFwiLi4vQmFzZU1vZGVsL01zZ0V2ZW50XCI7XHJcbmltcG9ydCB7IElSb2JvdCwgUm9ib3RUeXBlRGVzYyB9IGZyb20gXCIuLi9Nb2RlbC9Sb2JvdFByb3BcIjtcclxuaW1wb3J0IHsgQVBJX0J1eVJvYm90LCBBUElfVXNlUm9ib3QgfSBmcm9tIFwiLi4vVXRpbHMvTG9jYWxEYXRhQVBJXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZXhwb3J0IGVudW0gSU5GT1JfU1RBVEUge1xyXG4gICAgQlVZLFxyXG4gICAgSEFFRCxcclxuICAgIElTVVNFSU5HLFxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2JvdEluZm9yQ3RybCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGljb246IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJJRDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiVHlwZTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiTWludDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiTHY6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYkVmZmljaWVuY3k6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYkx1Y2s6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYkxvc3M6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYkludDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiU29sOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgICBpY29uU0ZzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuZEhhZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuZEJ1eTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5Vc2U6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuVW5Vc2U6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlByb2dyZXNzQmFyXSlcclxuICAgIHBnYnM6IGNjLlByb2dyZXNzQmFyW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgbmRJbnRzOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHJvYm90OiBJUm9ib3QgPSBudWxsO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgR2xvYmFsLkluc3QuT24oTG9jTXNnLlVQREFURV9ST0JPVF9JTkZPUiwgdGhpcy5zZXREYXRhVG9VSSwgdGhpcylcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyAvLyDmtYvor5XvvJtcclxuICAgICAgICAvLyBsZXQgZGF0YTogSVJvYm90ID0ge1xyXG4gICAgICAgIC8vICAgICBpZDogMSxcclxuICAgICAgICAvLyAgICAgcm9ib3RJbWdJZDogMixcclxuICAgICAgICAvLyAgICAgcm9ib3RUeXBlOiBSb2JvdFR5cGUuVFlQRV8xLFxyXG4gICAgICAgIC8vICAgICBsZXZlbDogMyxcclxuICAgICAgICAvLyAgICAgbWludDogNCxcclxuICAgICAgICAvLyAgICAgc29sOiA1LFxyXG4gICAgICAgIC8vICAgICBlZmZpY2llbmN5OiA2LFxyXG4gICAgICAgIC8vICAgICBsdWNrOiA3LFxyXG4gICAgICAgIC8vICAgICBsb3NzOiA4XHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICAvLyB0aGlzLnNldERpYWxvZyhkYXRhLCBJTkZPUl9TVEFURS5JU1VTRUlORyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlhbG9nKGRhdGE6IElSb2JvdCwgc3RhdGU6IElORk9SX1NUQVRFKSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhVG9VSShkYXRhLCBzdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF0YVRvVUkoZGF0YTogSVJvYm90LCBzdGF0ZTogSU5GT1JfU1RBVEUpIHtcclxuICAgICAgICB0aGlzLnJvYm90ID0gZGF0YTsgdGhpcy5sYklELnN0cmluZyA9IFwiXCIgKyBkYXRhLmlkO1xyXG4gICAgICAgIHRoaXMubGJUeXBlLnN0cmluZyA9IFJvYm90VHlwZURlc2NbZGF0YS5yb2JvdFR5cGVdO1xyXG4gICAgICAgIHRoaXMubGJNaW50LnN0cmluZyA9IGRhdGEubWludCArIFwiLzdcIjtcclxuICAgICAgICB0aGlzLmxiTHYuc3RyaW5nID0gXCJMdi5cIiArIGRhdGEubGV2ZWw7XHJcbiAgICAgICAgdGhpcy5sYkVmZmljaWVuY3kuc3RyaW5nID0gXCJcIiArIGRhdGEuZWZmaWNpZW5jeTtcclxuICAgICAgICB0aGlzLmxiTHVjay5zdHJpbmcgPSBcIlwiICsgZGF0YS5sdWNrO1xyXG4gICAgICAgIHRoaXMubGJMb3NzLnN0cmluZyA9IFwiXCIgKyBkYXRhLnBvdztcclxuICAgICAgICB0aGlzLmxiSW50LnN0cmluZyA9IGRhdGEuaW50TWluICsgXCJ+XCIgKyBkYXRhLmludE1heDtcclxuICAgICAgICB0aGlzLmxiU29sLnN0cmluZyA9IGRhdGEubWF0aWNDb3N0ICsgXCJcIjtcclxuICAgICAgICB0aGlzLmljb24uc3ByaXRlRnJhbWUgPSB0aGlzLmljb25TRnNbZGF0YS5yb2JvdEltZ0lkXTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMucGdic1swXS5wcm9ncmVzcyA9IGRhdGEuZWZmaWNpZW5jeSAvIDEwO1xyXG4gICAgICAgIHRoaXMucGdic1sxXS5wcm9ncmVzcyA9IGRhdGEubHVjayAvIDEwO1xyXG4gICAgICAgIHRoaXMucGdic1syXS5wcm9ncmVzcyA9IGRhdGEucG93IC8gMTA7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmRJbnRzLmNoaWxkcmVuW2luZGV4XS5hY3RpdmUgPSAoaW5kZXggPj0gZGF0YS5pbnRNaW4gLSAxICYmIGluZGV4IDwgZGF0YS5pbnRNYXgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIElORk9SX1NUQVRFLkJVWTpcclxuICAgICAgICAgICAgICAgIHRoaXMubmRIYWQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5kQnV5LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBJTkZPUl9TVEFURS5IQUVEOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5uZEhhZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZEJ1eS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuVXNlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0blVuVXNlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIElORk9SX1NUQVRFLklTVVNFSU5HOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5uZEhhZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZEJ1eS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuVXNlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5VblVzZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBPbkJ0bkNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBPbkNsaWNrQnV5KCkge1xyXG4gICAgICAgIEFQSV9CdXlSb2JvdCh0aGlzLnJvYm90KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgT25DbGlja1VzZSgpIHtcclxuICAgICAgICBBUElfVXNlUm9ib3QodGhpcy5yb2JvdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=