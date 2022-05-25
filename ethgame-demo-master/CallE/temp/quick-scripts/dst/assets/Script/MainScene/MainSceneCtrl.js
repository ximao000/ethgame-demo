
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluU2NlbmVcXE1haW5TY2VuZUN0cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQW1DO0FBQ25DLGtEQUErQztBQUUvQyxtREFBK0Q7QUFFekQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUE4RUM7UUEzRUcsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFJOUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBZ0IsRUFBRSxDQUFDO1FBRzdCLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUU5Qix5QkFBbUIsR0FBVyxDQUFDLENBQUM7UUFDaEMseUJBQW1CLEdBQVksS0FBSyxDQUFDO1FBQ3JDLGtCQUFZLEdBQWMsRUFBRSxDQUFDO1FBQzdCLG1CQUFhLEdBQTBCLElBQUksQ0FBQzs7SUE0RHhELENBQUM7SUEzRGEsMkJBQU0sR0FBaEI7UUFDSSxvQ0FBb0M7UUFFcEMsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVB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QUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQzVHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxvQkFBb0IsQ0FBQztJQUdwRCxDQUFDO0lBMUVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ087SUFJOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztrREFDTztJQUc3QjtRQURDLFFBQVEsQ0FBQyx3QkFBYyxDQUFDO3NEQUNhO0lBYnJCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0E4RTlCO0lBQUQsaUJBQUM7Q0E5RUQsQUE4RUMsQ0E5RXVDLEVBQUUsQ0FBQyxTQUFTLEdBOEVuRDtrQkE5RW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2xvYmFsIGZyb20gXCIuLi9BcHAvR2xvYmFsXCI7XG5pbXBvcnQgeyBMb2NNc2cgfSBmcm9tIFwiLi4vQmFzZU1vZGVsL01zZ0V2ZW50XCI7XG5pbXBvcnQgeyBJUm9ib3QgfSBmcm9tIFwiLi4vTW9kZWwvUm9ib3RQcm9wXCI7XG5pbXBvcnQgUm9ib3RJbmZvckN0cmwsIHsgSU5GT1JfU1RBVEUgfSBmcm9tIFwiLi9Sb2JvdEluZm9yQ3RybFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsbG93b3JsZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxuICAgIG1lbnVBbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjZW50ZXJSb290OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcbiAgICBjZW50ZXJQcmVmOiBjYy5QcmVmYWJbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KFJvYm90SW5mb3JDdHJsKVxuICAgIHJvYm90SW5mb3JDdHJsOiBSb2JvdEluZm9yQ3RybCA9IG51bGw7XG5cbiAgICBwcml2YXRlIGN1ckNlbnRlckdyb3VwSW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjZW50ZXJHcm91cElzTW92aW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBjZW50ZXJHcm91cHM6IGNjLk5vZGVbXSA9IFtdO1xuICAgIHByaXZhdGUgX21hcEV2ZW50QmluZDogTWFwPHN0cmluZywgRnVuY3Rpb24+ID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICAvLyB0aGlzLm1lbnVBbmltLnBsYXkoJ21lbnVfcmVzZXQnKTtcblxuICAgICAgICBsZXQgaG9tZUNlbnRlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2VudGVyUHJlZlswXSk7XG4gICAgICAgIGhvbWVDZW50ZXIucG9zaXRpb24ueCA9IDA7XG4gICAgICAgIHRoaXMuY2VudGVyUm9vdC5hZGRDaGlsZChob21lQ2VudGVyKTtcbiAgICAgICAgbGV0IGZyaWVuZENlbnRlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2VudGVyUHJlZlsxXSk7XG4gICAgICAgIHRoaXMuY2VudGVyUm9vdC5hZGRDaGlsZChmcmllbmRDZW50ZXIpO1xuICAgICAgICBsZXQgYmFja3BhY2tDZW50ZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNlbnRlclByZWZbMl0pO1xuICAgICAgICB0aGlzLmNlbnRlclJvb3QuYWRkQ2hpbGQoYmFja3BhY2tDZW50ZXIpO1xuICAgICAgICBsZXQgc2hvcENlbnRlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2VudGVyUHJlZlszXSk7XG4gICAgICAgIHRoaXMuY2VudGVyUm9vdC5hZGRDaGlsZChzaG9wQ2VudGVyKTtcbiAgICAgICAgdGhpcy5jZW50ZXJHcm91cHMgPSB0aGlzLmNlbnRlclJvb3QuY2hpbGRyZW47XG5cbiAgICAgICAgdGhpcy5fSW5pdExpc3RlbmVyKCk7XG4gICAgfVxuICAgIHByaXZhdGUgX0luaXRMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5fbWFwRXZlbnRCaW5kID0gbmV3IE1hcDxzdHJpbmcsIEZ1bmN0aW9uPigpO1xuICAgICAgICB0aGlzLl9tYXBFdmVudEJpbmQuc2V0KExvY01zZy5TSE9XX1JPQk9UX0lORk9SLnRvU3RyaW5nKCksIHRoaXMuX1Nob3dSb2JvdERpYWxvZyk7XG5cbiAgICAgICAgdGhpcy5fbWFwRXZlbnRCaW5kLmZvckVhY2goKHZhbHVlLCBldmVudCkgPT4ge1xuICAgICAgICAgICAgR2xvYmFsLkluc3QuT24oZXZlbnQsIHZhbHVlLmJpbmQodGhpcyksIHRoaXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9TaG93Um9ib3REaWFsb2coZGF0YTogSVJvYm90LCBzdGF0ZTogSU5GT1JfU1RBVEUpIHtcbiAgICAgICAgaWYgKHRoaXMucm9ib3RJbmZvckN0cmwubm9kZS5hY3RpdmUpIHJldHVybjtcbiAgICAgICAgdGhpcy5yb2JvdEluZm9yQ3RybC5zZXREaWFsb2coZGF0YSwgc3RhdGUpO1xuXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBPbkJ0bkNsaWNrKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcbiAgICAgICAgbGV0IGxhc3RDZW50ZXJHcm91cEluZGV4ID0gcGFyc2VJbnQoY3VzdG9tRXZlbnREYXRhKTtcbiAgICAgICAgaWYgKHRoaXMuY3VyQ2VudGVyR3JvdXBJbmRleCA9PT0gbGFzdENlbnRlckdyb3VwSW5kZXggfHwgdGhpcy5jZW50ZXJHcm91cElzTW92aW5nKSByZXR1cm47XG5cbiAgICAgICAgLy/lt6bmu5HliqjvvJtcbiAgICAgICAgdGhpcy5jZW50ZXJHcm91cElzTW92aW5nID0gdHJ1ZTtcbiAgICAgICAgbGV0IGxhc3RDZW50ZXJQb3NYID0gdGhpcy5jdXJDZW50ZXJHcm91cEluZGV4IDwgbGFzdENlbnRlckdyb3VwSW5kZXggPyB0aGlzLm5vZGUud2lkdGggOiAtdGhpcy5ub2RlLndpZHRoO1xuICAgICAgICBsZXQgbW92ZVRpbWUgPSAwLjE7XG4gICAgICAgIGxldCBvbGRJbmRleCA9IHRoaXMuY3VyQ2VudGVyR3JvdXBJbmRleDtcblxuICAgICAgICB0aGlzLmNlbnRlckdyb3Vwc1tsYXN0Q2VudGVyR3JvdXBJbmRleF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jZW50ZXJHcm91cHNbbGFzdENlbnRlckdyb3VwSW5kZXhdLnggPSBsYXN0Q2VudGVyUG9zWDtcbiAgICAgICAgdGhpcy5jZW50ZXJHcm91cHNbdGhpcy5jdXJDZW50ZXJHcm91cEluZGV4XS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZVRvKG1vdmVUaW1lLCBjYy52MigtbGFzdENlbnRlclBvc1gsIDApKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jZW50ZXJHcm91cElzTW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNlbnRlckdyb3Vwc1tvbGRJbmRleF0uYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgfSkpKTtcbiAgICAgICAgdGhpcy5jZW50ZXJHcm91cHNbbGFzdENlbnRlckdyb3VwSW5kZXhdLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlVG8obW92ZVRpbWUsIGNjLnYyKDAsIDApKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICB9KSkpO1xuXG4gICAgICAgIHRoaXMuY3VyQ2VudGVyR3JvdXBJbmRleCA9IGxhc3RDZW50ZXJHcm91cEluZGV4O1xuXG5cbiAgICB9XG59XG4iXX0=