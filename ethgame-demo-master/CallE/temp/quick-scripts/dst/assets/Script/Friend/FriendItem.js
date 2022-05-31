
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
var Global_1 = require("../App/Global");
var MsgEvent_1 = require("../BaseModel/MsgEvent");
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
                this.lbRobot.string = data.totalCreatEnergy + "kg";
                // TODO 能量
                // this.ndEnergy.active = data.getEnergy;
                this.icon.spriteFrame = this.iconSFs[data.iconId];
                return [2 /*return*/];
            });
        });
    };
    HotRoomItem.prototype.OnClickSelf = function (event, customEventData) {
        console.log(this._renderIdx);
        Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.SHOW_FRIEND_Energy_INFOR, null, 4);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxGcmllbmRcXEZyaWVuZEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQW1DO0FBQ25DLGtEQUErQztBQUd6QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQU01QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQXFDQztRQW5DRyxVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUd6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGFBQU8sR0FBcUIsRUFBRSxDQUFDO1FBS3ZCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDeEIsZUFBUyxHQUFXLENBQUMsQ0FBQzs7SUFpQmxDLENBQUM7SUFyQkcsc0JBQUksa0NBQVM7YUFBYjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUlLLDZCQUFPLEdBQWIsVUFBYyxHQUFXLEVBQUUsSUFBYTs7O2dCQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2dCQUNuRCxVQUFVO2dCQUNWLHlDQUF5QztnQkFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7Ozs7S0FDcEQ7SUFFRCxpQ0FBVyxHQUFYLFVBQVksS0FBSyxFQUFFLGVBQWU7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0IsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFNLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFqQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ007SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztnREFDSTtJQWRkLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FxQy9CO0lBQUQsa0JBQUM7Q0FyQ0QsQUFxQ0MsQ0FyQ3dDLEVBQUUsQ0FBQyxTQUFTLEdBcUNwRDtrQkFyQ29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2xvYmFsIGZyb20gXCIuLi9BcHAvR2xvYmFsXCI7XHJcbmltcG9ydCB7IExvY01zZyB9IGZyb20gXCIuLi9CYXNlTW9kZWwvTXNnRXZlbnRcIjtcclxuaW1wb3J0IHsgSUZyaWVuZCB9IGZyb20gXCIuLi9Nb2RlbC9GcmllbmRQcm9wXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuXHJcblxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG90Um9vbUl0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGljb246IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJOYW1lOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJSb2JvdDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbmRFbmVyZ3k6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgaWNvblNGczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIGdldCByZW5kZXJJZHgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcklkeDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX3JlbmRlcklkeDogbnVtYmVyID0gLTE7XHJcbiAgICBwcml2YXRlIF9mcmlkZW5JZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBhc3luYyBTZXRJdGVtKGlkeDogbnVtYmVyLCBkYXRhOiBJRnJpZW5kKSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVySWR4ID0gaWR4O1xyXG4gICAgICAgIHRoaXMuX2ZyaWRlbklkID0gZGF0YS5pZDtcclxuICAgICAgICB0aGlzLmxiTmFtZS5zdHJpbmcgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdGhpcy5sYlJvYm90LnN0cmluZyA9IGRhdGEudG90YWxDcmVhdEVuZXJneSArIFwia2dcIjtcclxuICAgICAgICAvLyBUT0RPIOiDvemHj1xyXG4gICAgICAgIC8vIHRoaXMubmRFbmVyZ3kuYWN0aXZlID0gZGF0YS5nZXRFbmVyZ3k7XHJcbiAgICAgICAgdGhpcy5pY29uLnNwcml0ZUZyYW1lID0gdGhpcy5pY29uU0ZzW2RhdGEuaWNvbklkXVxyXG4gICAgfVxyXG5cclxuICAgIE9uQ2xpY2tTZWxmKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9yZW5kZXJJZHgpO1xyXG4gICAgICAgIEdsb2JhbC5JbnN0LkVtaXQoTG9jTXNnLlNIT1dfRlJJRU5EX0VuZXJneV9JTkZPUiwgbnVsbCwgNCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==