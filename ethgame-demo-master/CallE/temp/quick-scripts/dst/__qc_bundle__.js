
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/App/Global');
require('./assets/Script/Backpack/BackpackItem');
require('./assets/Script/Backpack/UI_BackPackScrollView');
require('./assets/Script/BaseModel/DataHelper');
require('./assets/Script/BaseModel/MsgEvent');
require('./assets/Script/BaseModel/Types');
require('./assets/Script/Energy/EnergyItem');
require('./assets/Script/Energy/EnergyProp');
require('./assets/Script/Energy/FriendEnergyItem');
require('./assets/Script/Friend/FriendItem');
require('./assets/Script/Friend/UI_FriendScrollView');
require('./assets/Script/Loading/Loading');
require('./assets/Script/MainScene/GroupCtrl/FriendEnergyGroupCtrl');
require('./assets/Script/MainScene/GroupCtrl/HomeGroupCtrl');
require('./assets/Script/MainScene/GroupCtrl/StartEnergyGroupCtrl');
require('./assets/Script/MainScene/MainSceneCtrl');
require('./assets/Script/MainScene/RobotInforCtrl');
require('./assets/Script/MainScene/ToastCtrl');
require('./assets/Script/Manager/DataManager');
require('./assets/Script/Model/FriendProp');
require('./assets/Script/Model/PlayerProp');
require('./assets/Script/Model/RobotProp');
require('./assets/Script/Shop/ShopItem');
require('./assets/Script/Shop/UI_ShopScrollView');
require('./assets/Script/Utils/LocalDataAPI');
require('./assets/Script/Utils/Utils');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Backpack/UI_BackPackScrollView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3862bfJzqxFxJgpUEWuADkS', 'UI_BackPackScrollView');
// Script/Backpack/UI_BackPackScrollView.ts

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
var DataManager_1 = require("../Manager/DataManager");
var BackpackItem_1 = require("./BackpackItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UI_BackPackScrollView = /** @class */ (function (_super) {
    __extends(UI_BackPackScrollView, _super);
    function UI_BackPackScrollView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemPrefab = null;
        _this.lytContent = null;
        _this.maskNode = null;
        _this.colCount = 3;
        _this._itemPools = [];
        _this._cacheData = [];
        _this._inited = false;
        _this._totalHeight = 0;
        _this._itemCount = 0;
        return _this;
    }
    UI_BackPackScrollView.prototype.onLoad = function () {
        var _this = this;
        // this.content.parent.parent.getComponent(cc.Widget).updateAlignment();
        this.content.parent.getComponent(cc.Widget).updateAlignment();
        this._InitPoolSize();
        this._itemPools = [];
        this.content.destroyAllChildren();
        var initItemGenerator = this._GetItemGenerator();
        var cb = function () {
            var it = initItemGenerator.next();
            if (it.done) {
                _this.unschedule(cb);
            }
        };
        this.schedule(cb, 1 / cc.game.getFrameRate());
        Global_1.default.Inst.On(MsgEvent_1.LocMsg.UPDATE_BACK_PACK_DATA, this._FreashData, this);
    };
    UI_BackPackScrollView.prototype.onEnable = function () {
        _super.prototype.onEnable.call(this);
        // let testData: IRobot[] = [];
        // for (let index = 0; index < 20; index++) {
        //     let data: IRobot = {
        //         id: index,
        //         robotImgId: index % RobotTypeCount,
        //         mint: index,
        //         level: index,
        //         robotType: index % RobotTypeCount,
        //         efficiency: Math.ceil(Math.random() * 10) / 10,
        //         luck: Math.ceil(Math.random() * 10) / 10,
        //         loss: Math.ceil(Math.random() * 10) / 10,
        //         sol: 0
        //     }
        //     testData.push(data)
        // }
        var robotList = DataManager_1.default.Inst.GetData(Types_1.DataBaseKey.PLAYER_DATA).robotList;
        this.SetData(robotList);
    };
    UI_BackPackScrollView.prototype._FreashData = function (gameTypeCreatDatas) {
        this.SetData(gameTypeCreatDatas);
    };
    UI_BackPackScrollView.prototype.SetData = function (gameTypeCreatDatas) {
        this._cacheData = [];
        this._totalHeight = 0;
        //AppLog.Log('-- itemCount: ', this._itemCount);
        for (var i = 0, poolIdx = 0; i < gameTypeCreatDatas.length; ++i, ++poolIdx) {
            if (poolIdx >= this._itemCount)
                poolIdx = 0;
            var h = this.itemPrefab.data.height;
            this._cacheData.push({
                idx: i,
                roomTypeData: gameTypeCreatDatas[i],
                poolIdx: poolIdx,
                height: h,
            });
        }
        var col = Math.ceil(this._cacheData.length / this.colCount);
        var padding = this.lytContent.paddingTop + this.lytContent.paddingBottom;
        this._totalHeight = col * this.itemPrefab.data.height + (col - 1) * this.lytContent.spacingY + padding;
        this.content.height = this.elastic ? Math.max(this._totalHeight, this.content.parent.height) : this._totalHeight;
        if (this._inited)
            this.OnScrolling(this, null);
    };
    UI_BackPackScrollView.prototype.OnScrolling = function (event, customEventData) {
        if (!this._inited)
            return;
        if (!this.itemPrefab.data)
            return;
        var offsetY = event.getScrollOffset().y;
        var res = this._CalculateStartAndEndIdx(offsetY);
        for (var i = res.startRow; i <= res.endRow; ++i) {
            for (var j = 0; j < this.colCount; ++j) {
                this._ProcessScrollViewItem(i * this.colCount + j);
            }
        }
    };
    UI_BackPackScrollView.prototype._CalculateStartAndEndIdx = function (offsetY) {
        var itemHeight = this.itemPrefab.data.height + this.lytContent.spacingY;
        var startRow = Math.floor((offsetY + this.lytContent.paddingTop) / itemHeight);
        // if (startRow > 0) --startRow;
        var maxRow = Math.ceil(this._itemCount / this.colCount) - 1;
        var maxDataCount = Math.ceil(this._cacheData.length / this.colCount);
        var endRow = startRow + maxRow;
        if (endRow >= maxDataCount) {
            endRow = maxDataCount - 1;
        }
        return {
            startRow: startRow,
            endRow: endRow,
        };
    };
    UI_BackPackScrollView.prototype._ProcessScrollViewItem = function (idx) {
        var data = this._cacheData[idx];
        if (!data)
            return;
        var item = this._itemPools[data.poolIdx];
        // if (!item || (item && item.renderIdx == idx && item.robotId == data.roomTypeData.id)) return;
        if (!item)
            return;
        item.node.name = idx.toString();
        item.SetItem(idx, data.roomTypeData);
        item.node.active = true;
        item.node.setPosition(this._CalculateItemPos(idx));
    };
    UI_BackPackScrollView.prototype._CalculateItemPos = function (idx) {
        var row = Math.floor(idx / this.colCount);
        var offsetY = row * (this.itemPrefab.data.height + this.lytContent.spacingY) + this.itemPrefab.data.height / 2;
        //posX
        var xStart = -this.lytContent.node.width / 2 + this.lytContent.paddingLeft;
        var col = idx - row * this.colCount;
        var x = xStart + col * (this.itemPrefab.data.width + this.lytContent.spacingX) + this.itemPrefab.data.width / 2;
        return cc.v2(x, -offsetY);
    };
    UI_BackPackScrollView.prototype._GetItemGenerator = function () {
        var index, node, comp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    index = 0;
                    _a.label = 1;
                case 1:
                    if (!(index < this._itemCount)) return [3 /*break*/, 4];
                    node = cc.instantiate(this.itemPrefab);
                    node.active = false;
                    this.content.addChild(node);
                    comp = node.getComponent(BackpackItem_1.default);
                    this._itemPools.push(comp);
                    return [4 /*yield*/];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    index++;
                    return [3 /*break*/, 1];
                case 4:
                    this._inited = true;
                    this.OnScrolling(this, null);
                    return [2 /*return*/];
            }
        });
    };
    UI_BackPackScrollView.prototype._InitPoolSize = function () {
        var item_w = this.itemPrefab.data.width;
        var item_h = this.itemPrefab.data.height;
        var colCount = this.colCount;
        var rowCount = Math.abs(Math.ceil(this.content.parent.height / (item_h + this.lytContent.spacingY)));
        this._itemCount = colCount * (rowCount + 1);
    };
    __decorate([
        property(cc.Prefab)
    ], UI_BackPackScrollView.prototype, "itemPrefab", void 0);
    __decorate([
        property(cc.Layout)
    ], UI_BackPackScrollView.prototype, "lytContent", void 0);
    __decorate([
        property(cc.Node)
    ], UI_BackPackScrollView.prototype, "maskNode", void 0);
    __decorate([
        property({ displayName: '每行个数' })
    ], UI_BackPackScrollView.prototype, "colCount", void 0);
    UI_BackPackScrollView = __decorate([
        ccclass
    ], UI_BackPackScrollView);
    return UI_BackPackScrollView;
}(cc.ScrollView));
exports.default = UI_BackPackScrollView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYWNrcGFja1xcVUlfQmFja1BhY2tTY3JvbGxWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUFtQztBQUNuQyxrREFBK0M7QUFDL0MsNENBQWlEO0FBQ2pELHNEQUFpRDtBQUdqRCwrQ0FBMEM7QUFLcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBbUQseUNBQWE7SUFBaEU7UUFBQSxxRUFtS0M7UUFqS0csZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRWIsZ0JBQVUsR0FBbUIsRUFBRSxDQUFDO1FBQ2hDLGdCQUFVLEdBQTZFLEVBQUUsQ0FBQztRQUUxRixhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDOztJQW9KM0IsQ0FBQztJQWxKRyxzQ0FBTSxHQUFOO1FBQUEsaUJBaUJDO1FBaEJHLHdFQUF3RTtRQUN4RSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzlELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFbEMsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNqRCxJQUFJLEVBQUUsR0FBRztZQUNM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QXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vQXBwL0dsb2JhbFwiO1xyXG5pbXBvcnQgeyBMb2NNc2cgfSBmcm9tIFwiLi4vQmFzZU1vZGVsL01zZ0V2ZW50XCI7XHJcbmltcG9ydCB7IERhdGFCYXNlS2V5IH0gZnJvbSBcIi4uL0Jhc2VNb2RlbC9UeXBlc1wiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgSVBsYXllckluZm8gfSBmcm9tIFwiLi4vTW9kZWwvUGxheWVyUHJvcFwiO1xyXG5pbXBvcnQgeyBJUm9ib3QgfSBmcm9tIFwiLi4vTW9kZWwvUm9ib3RQcm9wXCI7XHJcbmltcG9ydCBCYWNrcGFja0l0ZW0gZnJvbSBcIi4vQmFja3BhY2tJdGVtXCI7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSV9CYWNrUGFja1Njcm9sbFZpZXcgZXh0ZW5kcyBjYy5TY3JvbGxWaWV3IHtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBpdGVtUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxheW91dClcclxuICAgIGx5dENvbnRlbnQ6IGNjLkxheW91dCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1hc2tOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiAn5q+P6KGM5Liq5pWwJyB9KVxyXG4gICAgY29sQ291bnQ6IG51bWJlciA9IDM7XHJcblxyXG4gICAgcHJpdmF0ZSBfaXRlbVBvb2xzOiBCYWNrcGFja0l0ZW1bXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfY2FjaGVEYXRhOiB7IGlkeDogbnVtYmVyLCByb29tVHlwZURhdGE6IElSb2JvdCwgcG9vbElkeDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9W10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9pbml0ZWQgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3RvdGFsSGVpZ2h0ID0gMDtcclxuICAgIHByaXZhdGUgX2l0ZW1Db3VudCA9IDA7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIHRoaXMuY29udGVudC5wYXJlbnQucGFyZW50LmdldENvbXBvbmVudChjYy5XaWRnZXQpLnVwZGF0ZUFsaWdubWVudCgpO1xyXG4gICAgICAgIHRoaXMuY29udGVudC5wYXJlbnQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudXBkYXRlQWxpZ25tZW50KCk7XHJcbiAgICAgICAgdGhpcy5fSW5pdFBvb2xTaXplKCk7XHJcbiAgICAgICAgdGhpcy5faXRlbVBvb2xzID0gW107XHJcbiAgICAgICAgdGhpcy5jb250ZW50LmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xyXG5cclxuICAgICAgICBsZXQgaW5pdEl0ZW1HZW5lcmF0b3IgPSB0aGlzLl9HZXRJdGVtR2VuZXJhdG9yKCk7XHJcbiAgICAgICAgbGV0IGNiID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaXQgPSBpbml0SXRlbUdlbmVyYXRvci5uZXh0KCk7XHJcbiAgICAgICAgICAgIGlmIChpdC5kb25lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUoY2IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGNiLCAxIC8gY2MuZ2FtZS5nZXRGcmFtZVJhdGUoKSk7XHJcblxyXG4gICAgICAgIEdsb2JhbC5JbnN0Lk9uKExvY01zZy5VUERBVEVfQkFDS19QQUNLX0RBVEEsIHRoaXMuX0ZyZWFzaERhdGEsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5vbkVuYWJsZSgpO1xyXG4gICAgICAgIC8vIGxldCB0ZXN0RGF0YTogSVJvYm90W10gPSBbXTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMjA7IGluZGV4KyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IGRhdGE6IElSb2JvdCA9IHtcclxuICAgICAgICAvLyAgICAgICAgIGlkOiBpbmRleCxcclxuICAgICAgICAvLyAgICAgICAgIHJvYm90SW1nSWQ6IGluZGV4ICUgUm9ib3RUeXBlQ291bnQsXHJcbiAgICAgICAgLy8gICAgICAgICBtaW50OiBpbmRleCxcclxuICAgICAgICAvLyAgICAgICAgIGxldmVsOiBpbmRleCxcclxuICAgICAgICAvLyAgICAgICAgIHJvYm90VHlwZTogaW5kZXggJSBSb2JvdFR5cGVDb3VudCxcclxuICAgICAgICAvLyAgICAgICAgIGVmZmljaWVuY3k6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTApIC8gMTAsXHJcbiAgICAgICAgLy8gICAgICAgICBsdWNrOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwKSAvIDEwLFxyXG4gICAgICAgIC8vICAgICAgICAgbG9zczogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMCkgLyAxMCxcclxuICAgICAgICAvLyAgICAgICAgIHNvbDogMFxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIHRlc3REYXRhLnB1c2goZGF0YSlcclxuXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBsZXQgcm9ib3RMaXN0ID0gRGF0YU1hbmFnZXIuSW5zdC5HZXREYXRhPElQbGF5ZXJJbmZvPihEYXRhQmFzZUtleS5QTEFZRVJfREFUQSkucm9ib3RMaXN0O1xyXG4gICAgICAgIHRoaXMuU2V0RGF0YShyb2JvdExpc3QpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfRnJlYXNoRGF0YShnYW1lVHlwZUNyZWF0RGF0YXM6IElSb2JvdFtdKSB7XHJcbiAgICAgICAgdGhpcy5TZXREYXRhKGdhbWVUeXBlQ3JlYXREYXRhcylcclxuICAgIH1cclxuXHJcbiAgICBTZXREYXRhKGdhbWVUeXBlQ3JlYXREYXRhczogSVJvYm90W10pIHtcclxuXHJcbiAgICAgICAgdGhpcy5fY2FjaGVEYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5fdG90YWxIZWlnaHQgPSAwO1xyXG5cclxuICAgICAgICAvL0FwcExvZy5Mb2coJy0tIGl0ZW1Db3VudDogJywgdGhpcy5faXRlbUNvdW50KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIHBvb2xJZHggPSAwOyBpIDwgZ2FtZVR5cGVDcmVhdERhdGFzLmxlbmd0aDsgKytpLCArK3Bvb2xJZHgpIHtcclxuICAgICAgICAgICAgaWYgKHBvb2xJZHggPj0gdGhpcy5faXRlbUNvdW50KSBwb29sSWR4ID0gMDtcclxuICAgICAgICAgICAgbGV0IGggPSB0aGlzLml0ZW1QcmVmYWIuZGF0YS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlRGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkeDogaSxcclxuICAgICAgICAgICAgICAgIHJvb21UeXBlRGF0YTogZ2FtZVR5cGVDcmVhdERhdGFzW2ldLFxyXG4gICAgICAgICAgICAgICAgcG9vbElkeDogcG9vbElkeCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogaCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY29sID0gTWF0aC5jZWlsKHRoaXMuX2NhY2hlRGF0YS5sZW5ndGggLyB0aGlzLmNvbENvdW50KTtcclxuICAgICAgICBsZXQgcGFkZGluZyA9IHRoaXMubHl0Q29udGVudC5wYWRkaW5nVG9wICsgdGhpcy5seXRDb250ZW50LnBhZGRpbmdCb3R0b207XHJcbiAgICAgICAgdGhpcy5fdG90YWxIZWlnaHQgPSBjb2wgKiB0aGlzLml0ZW1QcmVmYWIuZGF0YS5oZWlnaHQgKyAoY29sIC0gMSkgKiB0aGlzLmx5dENvbnRlbnQuc3BhY2luZ1kgKyBwYWRkaW5nO1xyXG4gICAgICAgIHRoaXMuY29udGVudC5oZWlnaHQgPSB0aGlzLmVsYXN0aWMgPyBNYXRoLm1heCh0aGlzLl90b3RhbEhlaWdodCwgdGhpcy5jb250ZW50LnBhcmVudC5oZWlnaHQpIDogdGhpcy5fdG90YWxIZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pbml0ZWQpIHRoaXMuT25TY3JvbGxpbmcodGhpcywgbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgT25TY3JvbGxpbmcoZXZlbnQ6IGNjLlNjcm9sbFZpZXcsIGN1c3RvbUV2ZW50RGF0YTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbml0ZWQpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuaXRlbVByZWZhYi5kYXRhKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBvZmZzZXRZID0gZXZlbnQuZ2V0U2Nyb2xsT2Zmc2V0KCkueTtcclxuICAgICAgICBsZXQgcmVzID0gdGhpcy5fQ2FsY3VsYXRlU3RhcnRBbmRFbmRJZHgob2Zmc2V0WSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHJlcy5zdGFydFJvdzsgaSA8PSByZXMuZW5kUm93OyArK2kpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbENvdW50OyArK2opIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX1Byb2Nlc3NTY3JvbGxWaWV3SXRlbShpICogdGhpcy5jb2xDb3VudCArIGopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX0NhbGN1bGF0ZVN0YXJ0QW5kRW5kSWR4KG9mZnNldFk6IG51bWJlcik6IHsgc3RhcnRSb3c6IG51bWJlcjsgZW5kUm93OiBudW1iZXIgfSB7XHJcblxyXG4gICAgICAgIGxldCBpdGVtSGVpZ2h0ID0gdGhpcy5pdGVtUHJlZmFiLmRhdGEuaGVpZ2h0ICsgdGhpcy5seXRDb250ZW50LnNwYWNpbmdZO1xyXG5cclxuICAgICAgICBsZXQgc3RhcnRSb3cgPSBNYXRoLmZsb29yKChvZmZzZXRZICsgdGhpcy5seXRDb250ZW50LnBhZGRpbmdUb3ApIC8gaXRlbUhlaWdodCk7XHJcbiAgICAgICAgLy8gaWYgKHN0YXJ0Um93ID4gMCkgLS1zdGFydFJvdztcclxuXHJcbiAgICAgICAgbGV0IG1heFJvdyA9IE1hdGguY2VpbCh0aGlzLl9pdGVtQ291bnQgLyB0aGlzLmNvbENvdW50KSAtIDE7XHJcbiAgICAgICAgbGV0IG1heERhdGFDb3VudCA9IE1hdGguY2VpbCh0aGlzLl9jYWNoZURhdGEubGVuZ3RoIC8gdGhpcy5jb2xDb3VudCk7XHJcblxyXG4gICAgICAgIGxldCBlbmRSb3cgPSBzdGFydFJvdyArIG1heFJvdztcclxuICAgICAgICBpZiAoZW5kUm93ID49IG1heERhdGFDb3VudCkge1xyXG4gICAgICAgICAgICBlbmRSb3cgPSBtYXhEYXRhQ291bnQgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdGFydFJvdzogc3RhcnRSb3csXHJcbiAgICAgICAgICAgIGVuZFJvdzogZW5kUm93LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfUHJvY2Vzc1Njcm9sbFZpZXdJdGVtKGlkeDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLl9jYWNoZURhdGFbaWR4XTtcclxuICAgICAgICBpZiAoIWRhdGEpIHJldHVybjtcclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX2l0ZW1Qb29sc1tkYXRhLnBvb2xJZHhdO1xyXG4gICAgICAgIC8vIGlmICghaXRlbSB8fCAoaXRlbSAmJiBpdGVtLnJlbmRlcklkeCA9PSBpZHggJiYgaXRlbS5yb2JvdElkID09IGRhdGEucm9vbVR5cGVEYXRhLmlkKSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghaXRlbSkgcmV0dXJuO1xyXG4gICAgICAgIGl0ZW0ubm9kZS5uYW1lID0gaWR4LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaXRlbS5TZXRJdGVtKGlkeCwgZGF0YS5yb29tVHlwZURhdGEpO1xyXG4gICAgICAgIGl0ZW0ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGl0ZW0ubm9kZS5zZXRQb3NpdGlvbih0aGlzLl9DYWxjdWxhdGVJdGVtUG9zKGlkeCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX0NhbGN1bGF0ZUl0ZW1Qb3MoaWR4KSB7XHJcbiAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoaWR4IC8gdGhpcy5jb2xDb3VudCk7XHJcbiAgICAgICAgbGV0IG9mZnNldFkgPSByb3cgKiAodGhpcy5pdGVtUHJlZmFiLmRhdGEuaGVpZ2h0ICsgdGhpcy5seXRDb250ZW50LnNwYWNpbmdZKSArIHRoaXMuaXRlbVByZWZhYi5kYXRhLmhlaWdodCAvIDI7XHJcbiAgICAgICAgLy9wb3NYXHJcbiAgICAgICAgbGV0IHhTdGFydCA9IC10aGlzLmx5dENvbnRlbnQubm9kZS53aWR0aCAvIDIgKyB0aGlzLmx5dENvbnRlbnQucGFkZGluZ0xlZnQ7XHJcbiAgICAgICAgbGV0IGNvbCA9IGlkeCAtIHJvdyAqIHRoaXMuY29sQ291bnQ7XHJcbiAgICAgICAgbGV0IHggPSB4U3RhcnQgKyBjb2wgKiAodGhpcy5pdGVtUHJlZmFiLmRhdGEud2lkdGggKyB0aGlzLmx5dENvbnRlbnQuc3BhY2luZ1gpICsgdGhpcy5pdGVtUHJlZmFiLmRhdGEud2lkdGggLyAyO1xyXG4gICAgICAgIHJldHVybiBjYy52Mih4LCAtb2Zmc2V0WSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSAqX0dldEl0ZW1HZW5lcmF0b3IoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2l0ZW1Db3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVByZWZhYik7XHJcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgbGV0IGNvbXAgPSBub2RlLmdldENvbXBvbmVudChCYWNrcGFja0l0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLl9pdGVtUG9vbHMucHVzaChjb21wKTtcclxuICAgICAgICAgICAgeWllbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2luaXRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5PblNjcm9sbGluZyh0aGlzLCBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9Jbml0UG9vbFNpemUoKSB7XHJcbiAgICAgICAgbGV0IGl0ZW1fdyA9IHRoaXMuaXRlbVByZWZhYi5kYXRhLndpZHRoO1xyXG4gICAgICAgIGxldCBpdGVtX2ggPSB0aGlzLml0ZW1QcmVmYWIuZGF0YS5oZWlnaHQ7XHJcbiAgICAgICAgbGV0IGNvbENvdW50ID0gdGhpcy5jb2xDb3VudDtcclxuICAgICAgICBsZXQgcm93Q291bnQgPSBNYXRoLmFicyhNYXRoLmNlaWwodGhpcy5jb250ZW50LnBhcmVudC5oZWlnaHQgLyAoaXRlbV9oICsgdGhpcy5seXRDb250ZW50LnNwYWNpbmdZKSkpO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1Db3VudCA9IGNvbENvdW50ICogKHJvd0NvdW50ICsgMSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Friend/UI_FriendScrollView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a8c4XhdGNEWJzmx2gTAvOJ', 'UI_FriendScrollView');
// Script/Friend/UI_FriendScrollView.ts

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
var Types_1 = require("../BaseModel/Types");
var DataManager_1 = require("../Manager/DataManager");
var FriendItem_1 = require("./FriendItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UI_FriendScrollView = /** @class */ (function (_super) {
    __extends(UI_FriendScrollView, _super);
    function UI_FriendScrollView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemPrefab = null;
        _this.lytContent = null;
        _this.maskNode = null;
        _this.colCount = 3;
        _this._itemPools = [];
        _this._cacheData = [];
        _this._inited = false;
        _this._totalHeight = 0;
        _this._itemCount = 0;
        return _this;
    }
    UI_FriendScrollView.prototype.onLoad = function () {
        var _this = this;
        this.content.parent.parent.getComponent(cc.Widget).updateAlignment();
        this.content.parent.getComponent(cc.Widget).updateAlignment();
        this._InitPoolSize();
        this._itemPools = [];
        this.content.destroyAllChildren();
        var initItemGenerator = this._GetItemGenerator();
        var cb = function () {
            var it = initItemGenerator.next();
            if (it.done) {
                _this.unschedule(cb);
            }
        };
        this.schedule(cb, 1 / cc.game.getFrameRate());
    };
    UI_FriendScrollView.prototype.onEnable = function () {
        _super.prototype.onEnable.call(this);
        // let testData: IFriend[] = [];
        // let robot: IRobot = {
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
        // for (let index = 0; index < 20; index++) {
        //     let data: IFriend = {
        //         id: index,
        //         iconId: Math.floor(Math.random() * 6),
        //         name: "玩家" + index,
        //         robot: robot,
        //         getEnergy: false
        //     }
        //     testData.push(data)
        // }
        var friendList = DataManager_1.default.Inst.GetData(Types_1.DataBaseKey.PLAYER_DATA).friendList;
        this.SetData(friendList);
    };
    UI_FriendScrollView.prototype.SetData = function (gameTypeCreatDatas) {
        this._cacheData = [];
        this._totalHeight = 0;
        //AppLog.Log('-- itemCount: ', this._itemCount);
        for (var i = 0, poolIdx = 0; i < gameTypeCreatDatas.length; ++i, ++poolIdx) {
            if (poolIdx >= this._itemCount)
                poolIdx = 0;
            var h = this.itemPrefab.data.height;
            this._cacheData.push({
                idx: i,
                roomTypeData: gameTypeCreatDatas[i],
                poolIdx: poolIdx,
                height: h,
            });
        }
        var col = Math.ceil(this._cacheData.length / this.colCount);
        var padding = this.lytContent.paddingTop + this.lytContent.paddingBottom;
        this._totalHeight = col * this.itemPrefab.data.height + (col - 1) * this.lytContent.spacingY + padding;
        this.content.height = this.elastic ? Math.max(this._totalHeight, this.content.parent.height) : this._totalHeight;
        if (this._inited)
            this.OnScrolling(this, null);
    };
    UI_FriendScrollView.prototype.OnScrolling = function (event, customEventData) {
        if (!this._inited)
            return;
        if (!this.itemPrefab.data)
            return;
        var offsetY = event.getScrollOffset().y;
        var res = this._CalculateStartAndEndIdx(offsetY);
        for (var i = res.startRow; i <= res.endRow; ++i) {
            for (var j = 0; j < this.colCount; ++j) {
                this._ProcessScrollViewItem(i * this.colCount + j);
            }
        }
    };
    UI_FriendScrollView.prototype._CalculateStartAndEndIdx = function (offsetY) {
        var itemHeight = this.itemPrefab.data.height + this.lytContent.spacingY;
        var startRow = Math.floor((offsetY + this.lytContent.paddingTop) / itemHeight);
        // if (startRow > 0) --startRow;
        var maxRow = Math.ceil(this._itemCount / this.colCount) - 1;
        var maxDataCount = Math.ceil(this._cacheData.length / this.colCount);
        var endRow = startRow + maxRow;
        if (endRow >= maxDataCount) {
            endRow = maxDataCount - 1;
        }
        return {
            startRow: startRow,
            endRow: endRow,
        };
    };
    UI_FriendScrollView.prototype._ProcessScrollViewItem = function (idx) {
        var data = this._cacheData[idx];
        if (!data)
            return;
        var item = this._itemPools[data.poolIdx];
        if (!item || (item && item.renderIdx == idx))
            return;
        item.node.name = idx.toString();
        item.SetItem(idx, data.roomTypeData);
        item.node.active = true;
        item.node.setPosition(this._CalculateItemPos(idx));
    };
    UI_FriendScrollView.prototype._CalculateItemPos = function (idx) {
        var row = Math.floor(idx / this.colCount);
        var offsetY = row * (this.itemPrefab.data.height + this.lytContent.spacingY) + this.itemPrefab.data.height / 2;
        //posX
        var xStart = -this.lytContent.node.width / 2 + this.lytContent.paddingLeft;
        var col = idx - row * this.colCount;
        var x = xStart + col * (this.itemPrefab.data.width + this.lytContent.spacingX) + this.itemPrefab.data.width / 2;
        return cc.v2(x, -offsetY);
    };
    UI_FriendScrollView.prototype._GetItemGenerator = function () {
        var index, node, comp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    index = 0;
                    _a.label = 1;
                case 1:
                    if (!(index < this._itemCount)) return [3 /*break*/, 4];
                    node = cc.instantiate(this.itemPrefab);
                    node.active = false;
                    this.content.addChild(node);
                    comp = node.getComponent(FriendItem_1.default);
                    this._itemPools.push(comp);
                    return [4 /*yield*/];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    index++;
                    return [3 /*break*/, 1];
                case 4:
                    this._inited = true;
                    this.OnScrolling(this, null);
                    return [2 /*return*/];
            }
        });
    };
    UI_FriendScrollView.prototype._InitPoolSize = function () {
        var item_w = this.itemPrefab.data.width;
        var item_h = this.itemPrefab.data.height;
        var colCount = Math.abs(Math.ceil(this.content.parent.width / (item_w + this.lytContent.spacingX)));
        var rowCount = Math.abs(Math.ceil(this.content.parent.height / (item_h + this.lytContent.spacingY)));
        this._itemCount = colCount * (rowCount + 1);
    };
    __decorate([
        property(cc.Prefab)
    ], UI_FriendScrollView.prototype, "itemPrefab", void 0);
    __decorate([
        property(cc.Layout)
    ], UI_FriendScrollView.prototype, "lytContent", void 0);
    __decorate([
        property(cc.Node)
    ], UI_FriendScrollView.prototype, "maskNode", void 0);
    __decorate([
        property({ displayName: '每行个数' })
    ], UI_FriendScrollView.prototype, "colCount", void 0);
    UI_FriendScrollView = __decorate([
        ccclass
    ], UI_FriendScrollView);
    return UI_FriendScrollView;
}(cc.ScrollView));
exports.default = UI_FriendScrollView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxGcmllbmRcXFVJX0ZyaWVuZFNjcm9sbFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQWlEO0FBQ2pELHNEQUFpRDtBQUdqRCwyQ0FBc0M7QUFHaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBaUQsdUNBQWE7SUFBOUQ7UUFBQSxxRUFvS0M7UUFsS0csZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRWIsZ0JBQVUsR0FBaUIsRUFBRSxDQUFDO1FBQzlCLGdCQUFVLEdBQThFLEVBQUUsQ0FBQztRQUUzRixhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDOztJQXFKM0IsQ0FBQztJQW5KRyxvQ0FBTSxHQUFOO1FBQUEsaUJBZUM7UUFkRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNyRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzlELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFbEMsSUFBSSxpQkFBaUIsR0FBRyxJ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SixtQkFBbUI7UUFEdkMsT0FBTztPQUNhLG1CQUFtQixDQW9LdkM7SUFBRCwwQkFBQztDQXBLRCxBQW9LQyxDQXBLZ0QsRUFBRSxDQUFDLFVBQVUsR0FvSzdEO2tCQXBLb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YUJhc2VLZXkgfSBmcm9tIFwiLi4vQmFzZU1vZGVsL1R5cGVzXCI7XG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvRGF0YU1hbmFnZXJcIjtcbmltcG9ydCB7IElGcmllbmQgfSBmcm9tIFwiLi4vTW9kZWwvRnJpZW5kUHJvcFwiO1xuaW1wb3J0IHsgSVBsYXllckluZm8gfSBmcm9tIFwiLi4vTW9kZWwvUGxheWVyUHJvcFwiO1xuaW1wb3J0IEZyaWVuZEl0ZW0gZnJvbSBcIi4vRnJpZW5kSXRlbVwiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlfRnJpZW5kU2Nyb2xsVmlldyBleHRlbmRzIGNjLlNjcm9sbFZpZXcge1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgaXRlbVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGF5b3V0KVxuICAgIGx5dENvbnRlbnQ6IGNjLkxheW91dCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWFza05vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiAn5q+P6KGM5Liq5pWwJyB9KVxuICAgIGNvbENvdW50OiBudW1iZXIgPSAzO1xuXG4gICAgcHJpdmF0ZSBfaXRlbVBvb2xzOiBGcmllbmRJdGVtW10gPSBbXTtcbiAgICBwcml2YXRlIF9jYWNoZURhdGE6IHsgaWR4OiBudW1iZXIsIHJvb21UeXBlRGF0YTogSUZyaWVuZCwgcG9vbElkeDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9W10gPSBbXTtcblxuICAgIHByaXZhdGUgX2luaXRlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3RvdGFsSGVpZ2h0ID0gMDtcbiAgICBwcml2YXRlIF9pdGVtQ291bnQgPSAwO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQucGFyZW50LnBhcmVudC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgICAgdGhpcy5jb250ZW50LnBhcmVudC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgICAgdGhpcy5fSW5pdFBvb2xTaXplKCk7XG4gICAgICAgIHRoaXMuX2l0ZW1Qb29scyA9IFtdO1xuICAgICAgICB0aGlzLmNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKCk7XG5cbiAgICAgICAgbGV0IGluaXRJdGVtR2VuZXJhdG9yID0gdGhpcy5fR2V0SXRlbUdlbmVyYXRvcigpO1xuICAgICAgICBsZXQgY2IgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaXQgPSBpbml0SXRlbUdlbmVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICBpZiAoaXQuZG9uZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZShjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoY2IsIDEgLyBjYy5nYW1lLmdldEZyYW1lUmF0ZSgpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIC8vIGxldCB0ZXN0RGF0YTogSUZyaWVuZFtdID0gW107XG4gICAgICAgIC8vIGxldCByb2JvdDogSVJvYm90ID0ge1xuICAgICAgICAvLyAgICAgaWQ6IDEsXG4gICAgICAgIC8vICAgICByb2JvdEltZ0lkOiAyLFxuICAgICAgICAvLyAgICAgcm9ib3RUeXBlOiBSb2JvdFR5cGUuVFlQRV8xLFxuICAgICAgICAvLyAgICAgbGV2ZWw6IDMsXG4gICAgICAgIC8vICAgICBtaW50OiA0LFxuICAgICAgICAvLyAgICAgc29sOiA1LFxuICAgICAgICAvLyAgICAgZWZmaWNpZW5jeTogNixcbiAgICAgICAgLy8gICAgIGx1Y2s6IDcsXG4gICAgICAgIC8vICAgICBsb3NzOiA4XG4gICAgICAgIC8vIH07XG4gICAgICAgIC8vIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyMDsgaW5kZXgrKykge1xuICAgICAgICAvLyAgICAgbGV0IGRhdGE6IElGcmllbmQgPSB7XG4gICAgICAgIC8vICAgICAgICAgaWQ6IGluZGV4LFxuICAgICAgICAvLyAgICAgICAgIGljb25JZDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNiksXG4gICAgICAgIC8vICAgICAgICAgbmFtZTogXCLnjqnlrrZcIiArIGluZGV4LFxuICAgICAgICAvLyAgICAgICAgIHJvYm90OiByb2JvdCxcbiAgICAgICAgLy8gICAgICAgICBnZXRFbmVyZ3k6IGZhbHNlXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICB0ZXN0RGF0YS5wdXNoKGRhdGEpXG5cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGxldCBmcmllbmRMaXN0ID0gRGF0YU1hbmFnZXIuSW5zdC5HZXREYXRhPElQbGF5ZXJJbmZvPihEYXRhQmFzZUtleS5QTEFZRVJfREFUQSkuZnJpZW5kTGlzdDtcbiAgICAgICAgdGhpcy5TZXREYXRhKGZyaWVuZExpc3QpO1xuICAgIH1cblxuICAgIFNldERhdGEoZ2FtZVR5cGVDcmVhdERhdGFzOiBJRnJpZW5kW10pIHtcblxuICAgICAgICB0aGlzLl9jYWNoZURhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5fdG90YWxIZWlnaHQgPSAwO1xuXG4gICAgICAgIC8vQXBwTG9nLkxvZygnLS0gaXRlbUNvdW50OiAnLCB0aGlzLl9pdGVtQ291bnQpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBwb29sSWR4ID0gMDsgaSA8IGdhbWVUeXBlQ3JlYXREYXRhcy5sZW5ndGg7ICsraSwgKytwb29sSWR4KSB7XG4gICAgICAgICAgICBpZiAocG9vbElkeCA+PSB0aGlzLl9pdGVtQ291bnQpIHBvb2xJZHggPSAwO1xuICAgICAgICAgICAgbGV0IGggPSB0aGlzLml0ZW1QcmVmYWIuZGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZURhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgaWR4OiBpLFxuICAgICAgICAgICAgICAgIHJvb21UeXBlRGF0YTogZ2FtZVR5cGVDcmVhdERhdGFzW2ldLFxuICAgICAgICAgICAgICAgIHBvb2xJZHg6IHBvb2xJZHgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY29sID0gTWF0aC5jZWlsKHRoaXMuX2NhY2hlRGF0YS5sZW5ndGggLyB0aGlzLmNvbENvdW50KTtcbiAgICAgICAgbGV0IHBhZGRpbmcgPSB0aGlzLmx5dENvbnRlbnQucGFkZGluZ1RvcCArIHRoaXMubHl0Q29udGVudC5wYWRkaW5nQm90dG9tO1xuICAgICAgICB0aGlzLl90b3RhbEhlaWdodCA9IGNvbCAqIHRoaXMuaXRlbVByZWZhYi5kYXRhLmhlaWdodCArIChjb2wgLSAxKSAqIHRoaXMubHl0Q29udGVudC5zcGFjaW5nWSArIHBhZGRpbmc7XG4gICAgICAgIHRoaXMuY29udGVudC5oZWlnaHQgPSB0aGlzLmVsYXN0aWMgPyBNYXRoLm1heCh0aGlzLl90b3RhbEhlaWdodCwgdGhpcy5jb250ZW50LnBhcmVudC5oZWlnaHQpIDogdGhpcy5fdG90YWxIZWlnaHQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX2luaXRlZCkgdGhpcy5PblNjcm9sbGluZyh0aGlzLCBudWxsKTtcbiAgICB9XG5cbiAgICBPblNjcm9sbGluZyhldmVudDogY2MuU2Nyb2xsVmlldywgY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbml0ZWQpIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLml0ZW1QcmVmYWIuZGF0YSkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBvZmZzZXRZID0gZXZlbnQuZ2V0U2Nyb2xsT2Zmc2V0KCkueTtcbiAgICAgICAgbGV0IHJlcyA9IHRoaXMuX0NhbGN1bGF0ZVN0YXJ0QW5kRW5kSWR4KG9mZnNldFkpO1xuICAgICAgICBmb3IgKGxldCBpID0gcmVzLnN0YXJ0Um93OyBpIDw9IHJlcy5lbmRSb3c7ICsraSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbENvdW50OyArK2opIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9Qcm9jZXNzU2Nyb2xsVmlld0l0ZW0oaSAqIHRoaXMuY29sQ291bnQgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX0NhbGN1bGF0ZVN0YXJ0QW5kRW5kSWR4KG9mZnNldFk6IG51bWJlcik6IHsgc3RhcnRSb3c6IG51bWJlcjsgZW5kUm93OiBudW1iZXIgfSB7XG5cbiAgICAgICAgbGV0IGl0ZW1IZWlnaHQgPSB0aGlzLml0ZW1QcmVmYWIuZGF0YS5oZWlnaHQgKyB0aGlzLmx5dENvbnRlbnQuc3BhY2luZ1k7XG5cbiAgICAgICAgbGV0IHN0YXJ0Um93ID0gTWF0aC5mbG9vcigob2Zmc2V0WSArIHRoaXMubHl0Q29udGVudC5wYWRkaW5nVG9wKSAvIGl0ZW1IZWlnaHQpO1xuICAgICAgICAvLyBpZiAoc3RhcnRSb3cgPiAwKSAtLXN0YXJ0Um93O1xuXG4gICAgICAgIGxldCBtYXhSb3cgPSBNYXRoLmNlaWwodGhpcy5faXRlbUNvdW50IC8gdGhpcy5jb2xDb3VudCkgLSAxO1xuICAgICAgICBsZXQgbWF4RGF0YUNvdW50ID0gTWF0aC5jZWlsKHRoaXMuX2NhY2hlRGF0YS5sZW5ndGggLyB0aGlzLmNvbENvdW50KTtcblxuICAgICAgICBsZXQgZW5kUm93ID0gc3RhcnRSb3cgKyBtYXhSb3c7XG4gICAgICAgIGlmIChlbmRSb3cgPj0gbWF4RGF0YUNvdW50KSB7XG4gICAgICAgICAgICBlbmRSb3cgPSBtYXhEYXRhQ291bnQgLSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGFydFJvdzogc3RhcnRSb3csXG4gICAgICAgICAgICBlbmRSb3c6IGVuZFJvdyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9Qcm9jZXNzU2Nyb2xsVmlld0l0ZW0oaWR4OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLl9jYWNoZURhdGFbaWR4XTtcbiAgICAgICAgaWYgKCFkYXRhKSByZXR1cm47XG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5faXRlbVBvb2xzW2RhdGEucG9vbElkeF07XG4gICAgICAgIGlmICghaXRlbSB8fCAoaXRlbSAmJiBpdGVtLnJlbmRlcklkeCA9PSBpZHgpKSByZXR1cm47XG4gICAgICAgIGl0ZW0ubm9kZS5uYW1lID0gaWR4LnRvU3RyaW5nKCk7XG4gICAgICAgIGl0ZW0uU2V0SXRlbShpZHgsIGRhdGEucm9vbVR5cGVEYXRhKTtcbiAgICAgICAgaXRlbS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGl0ZW0ubm9kZS5zZXRQb3NpdGlvbih0aGlzLl9DYWxjdWxhdGVJdGVtUG9zKGlkeCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX0NhbGN1bGF0ZUl0ZW1Qb3MoaWR4KSB7XG4gICAgICAgIGxldCByb3cgPSBNYXRoLmZsb29yKGlkeCAvIHRoaXMuY29sQ291bnQpO1xuICAgICAgICBsZXQgb2Zmc2V0WSA9IHJvdyAqICh0aGlzLml0ZW1QcmVmYWIuZGF0YS5oZWlnaHQgKyB0aGlzLmx5dENvbnRlbnQuc3BhY2luZ1kpICsgdGhpcy5pdGVtUHJlZmFiLmRhdGEuaGVpZ2h0IC8gMjtcbiAgICAgICAgLy9wb3NYXG4gICAgICAgIGxldCB4U3RhcnQgPSAtdGhpcy5seXRDb250ZW50Lm5vZGUud2lkdGggLyAyICsgdGhpcy5seXRDb250ZW50LnBhZGRpbmdMZWZ0O1xuICAgICAgICBsZXQgY29sID0gaWR4IC0gcm93ICogdGhpcy5jb2xDb3VudDtcbiAgICAgICAgbGV0IHggPSB4U3RhcnQgKyBjb2wgKiAodGhpcy5pdGVtUHJlZmFiLmRhdGEud2lkdGggKyB0aGlzLmx5dENvbnRlbnQuc3BhY2luZ1gpICsgdGhpcy5pdGVtUHJlZmFiLmRhdGEud2lkdGggLyAyO1xuICAgICAgICByZXR1cm4gY2MudjIoeCwgLW9mZnNldFkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgKl9HZXRJdGVtR2VuZXJhdG9yKCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5faXRlbUNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVByZWZhYik7XG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgbGV0IGNvbXAgPSBub2RlLmdldENvbXBvbmVudChGcmllbmRJdGVtKTtcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1Qb29scy5wdXNoKGNvbXApO1xuICAgICAgICAgICAgeWllbGQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5PblNjcm9sbGluZyh0aGlzLCBudWxsKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9Jbml0UG9vbFNpemUoKSB7XG4gICAgICAgIGxldCBpdGVtX3cgPSB0aGlzLml0ZW1QcmVmYWIuZGF0YS53aWR0aDtcbiAgICAgICAgbGV0IGl0ZW1faCA9IHRoaXMuaXRlbVByZWZhYi5kYXRhLmhlaWdodDtcbiAgICAgICAgbGV0IGNvbENvdW50ID0gTWF0aC5hYnMoTWF0aC5jZWlsKHRoaXMuY29udGVudC5wYXJlbnQud2lkdGggLyAoaXRlbV93ICsgdGhpcy5seXRDb250ZW50LnNwYWNpbmdYKSkpO1xuICAgICAgICBsZXQgcm93Q291bnQgPSBNYXRoLmFicyhNYXRoLmNlaWwodGhpcy5jb250ZW50LnBhcmVudC5oZWlnaHQgLyAoaXRlbV9oICsgdGhpcy5seXRDb250ZW50LnNwYWNpbmdZKSkpO1xuICAgICAgICB0aGlzLl9pdGVtQ291bnQgPSBjb2xDb3VudCAqIChyb3dDb3VudCArIDEpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MainScene/GroupCtrl/HomeGroupCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2a57ehg9YRK0qGpB7o87xP1', 'HomeGroupCtrl');
// Script/MainScene/GroupCtrl/HomeGroupCtrl.ts

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
var Global_1 = require("../../App/Global");
var MsgEvent_1 = require("../../BaseModel/MsgEvent");
var Types_1 = require("../../BaseModel/Types");
var EnergyProp_1 = require("../../Energy/EnergyProp");
var DataManager_1 = require("../../Manager/DataManager");
var LocalDataAPI_1 = require("../../Utils/LocalDataAPI");
var Utils_1 = require("../../Utils/Utils");
var RobotInforCtrl_1 = require("../RobotInforCtrl");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HomeGroupCtrl = /** @class */ (function (_super) {
    __extends(HomeGroupCtrl, _super);
    function HomeGroupCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.robotSp = null;
        _this.robotChangeEnergy = null;
        _this.btnChangeEnergy = null;
        _this.iconSFs = [];
        _this.iconNullSF = null;
        _this.energyReseatTime = null;
        //-------------------------------------xueliang
        _this.energyRoot = null;
        _this.energyPref = null;
        _this.btnStartEnergy = null;
        _this.btnEnergyLabel = null;
        _this.startEnergyPref = null;
        _this.btnBg = null;
        _this.btnFs = [];
        _this.startEnergyNode = null;
        _this.showEnergyInfo = [null, null, null, null, null];
        return _this;
        // update (dt) {}
    }
    Object.defineProperty(HomeGroupCtrl.prototype, "player", {
        get: function () {
            return DataManager_1.default.Inst.GetData(Types_1.DataBaseKey.PLAYER_DATA);
        },
        enumerable: false,
        configurable: true
    });
    HomeGroupCtrl.prototype.onLoad = function () {
        this.startEnergyNode = cc.instantiate(this.startEnergyPref);
        cc.director.getScene().addChild(this.startEnergyNode);
        // this.node.addChild(this.startEnergyNode);
        this._UpdateRobot();
        Global_1.default.Inst.On(MsgEvent_1.LocMsg.UPDATE_CUR_ROBOT_INFOR, this._UpdateRobot, this);
        Global_1.default.Inst.On(MsgEvent_1.LocMsg.UPDATE_Energy_INFOR, this._UpdateEnergy, this);
        this._UpdateEnergy();
    };
    HomeGroupCtrl.prototype._UpdateRobot = function () {
        var curRobot = this.player.curRobotUse;
        if (curRobot) {
            this.robotSp.spriteFrame = this.iconSFs[curRobot.robotImgId];
        }
        else {
            this.robotSp.spriteFrame = this.iconNullSF;
        }
        this.robotChangeEnergy.string = "<color=#bb5e5e>" + (this.player.canChangeEnergyNumTotal - this.player.hadChangeEnergyNum) + "</c>/" + this.player.canChangeEnergyNumTotal;
    };
    HomeGroupCtrl.prototype.OnClickChangeEnergy = function () {
        // 无小人、无能量、转化数不足，不现实转化按钮；
        var curRobot = this.player.curRobotUse;
        if (!curRobot) {
            Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.SHOW_TOAST, "Please equip the robot。");
            return;
        }
        if (this.player.collectEnergyCount === 0) {
            Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.SHOW_TOAST, "Insufficient energy。");
            return;
        }
        if (this.player.hadChangeEnergyNum >= this.player.canChangeEnergyNumTotal) {
            Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.SHOW_TOAST, "Physical deficiency。");
            return;
        }
        else {
            LocalDataAPI_1.API_ChangeEnergyToHal();
        }
    };
    HomeGroupCtrl.prototype.OnClickRobot = function () {
        if (this.player.curRobotUse) {
            Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.SHOW_ROBOT_INFOR, this.player.curRobotUse, RobotInforCtrl_1.INFOR_STATE.ISUSEING);
        }
        else {
            if (this.player.robotList.length > 0) {
                Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.CHANGE_GROUP_BY_INDEX, 3);
            }
            else {
                Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.CHANGE_GROUP_BY_INDEX, 4);
            }
        }
    };
    HomeGroupCtrl.prototype.update = function (dt) {
        var data = new Date();
        var second = data.getSeconds();
        this.player.timeReseat;
        if (second > this.player.timeReseat) {
            this.energyReseatTime.node.active = false;
        }
        else {
            this.energyReseatTime.node.active = true;
            this.energyReseatTime.string = Utils_1.default.timeToString(this.player.timeReseat - second);
        }
    };
    Object.defineProperty(HomeGroupCtrl.prototype, "energy", {
        get: function () {
            return DataManager_1.default.Inst.GetData(Types_1.DataBaseKey.ENERGY_DATA);
        },
        enumerable: false,
        configurable: true
    });
    HomeGroupCtrl.prototype._UpdateEnergy = function () {
        // let curRobot = this.player.curRobotUse;
        // this.btnStartEnergy.interactable = !(!curRobot || this.player.collectEnergyCount === 0);
        var energy = this.energy;
        if (energy.length > 0) {
            this.btnEnergyLabel.string = energy[energy.length - 1].isGrow ? "STOP" : "START";
            this.btnBg.spriteFrame = energy[energy.length - 1].isGrow ? this.btnFs[1] : this.btnFs[0];
        }
        else {
            this.btnEnergyLabel.string = "START";
            this.btnBg.spriteFrame = this.btnFs[0];
        }
        for (var x = 0; x < this.showEnergyInfo.length; ++x) {
            if (this.showEnergyInfo[x] && energy.indexOf(this.showEnergyInfo[x]) == -1) {
                this.showEnergyInfo[x] = null;
            }
        }
        if (energy.length > 0) {
            // console.log("_UpdateEnergy:" + JSON.stringify(energy));
            if (energy[energy.length - 1].isGrow) {
                if (!this.showEnergyInfo[this.showEnergyInfo.length - 1] ||
                    this.showEnergyInfo[this.showEnergyInfo.length - 1].energyTime != energy[energy.length - 1].energyTime) {
                    this.showEnergyInfo[this.showEnergyInfo.length - 1] = energy[energy.length - 1];
                    var energyIns = cc.instantiate(this.energyPref);
                    energyIns.getComponent("EnergyItem").SetItem(energy[energy.length - 1]);
                    this._RemoveEnergyByEnergyTime(energy[energy.length - 1].energyTime);
                    this.energyRoot.addChild(energyIns);
                }
                for (var x = 0; x < EnergyProp_1.EnergyShowCount - 1; ++x) {
                    if (x < energy.length - 1 && energy[x].idx != this.showEnergyInfo.length - 1) {
                        if (!this.showEnergyInfo[x] || this.showEnergyInfo[x].energyTime != energy[x].energyTime) {
                            this.showEnergyInfo[x] = energy[x];
                            var energyIns = cc.instantiate(this.energyPref);
                            energyIns.getComponent("EnergyItem").SetItem(energy[x]);
                            this._RemoveEnergyByEnergyTime(energy[x].energyTime);
                            this.energyRoot.addChild(energyIns);
                            LocalDataAPI_1.UpdateEnergy(energy[x]);
                        }
                    }
                    else if (x < energy.length - 1 && energy[x].idx == this.showEnergyInfo.length - 1) {
                        for (var y = 0; y < this.showEnergyInfo.length - 1; ++y) {
                            if (!this.showEnergyInfo[y]) {
                                energy[x].idx = y;
                                this.showEnergyInfo[y] = energy[x];
                                var energyIns = cc.instantiate(this.energyPref);
                                energyIns.getComponent("EnergyItem").SetItem(energy[x]);
                                this._RemoveEnergyByEnergyTime(energy[x].energyTime);
                                this.energyRoot.addChild(energyIns);
                                LocalDataAPI_1.UpdateEnergy(energy[x]);
                            }
                        }
                    }
                }
            }
            else {
                // console.log("_UpdateEnergy: enter");
                for (var x = 0; x < EnergyProp_1.EnergyShowCount; ++x) {
                    if (x < energy.length && energy[x].idx != this.showEnergyInfo.length - 1) {
                        if (!this.showEnergyInfo[x] || this.showEnergyInfo[x].energyTime != energy[x].energyTime) {
                            this.showEnergyInfo[x] = energy[x];
                            var energyIns = cc.instantiate(this.energyPref);
                            energyIns.getComponent("EnergyItem").SetItem(energy[x]);
                            this._RemoveEnergyByEnergyTime(energy[x].energyTime);
                            this.energyRoot.addChild(energyIns);
                            LocalDataAPI_1.UpdateEnergy(energy[x]);
                        }
                    }
                    else if (x < energy.length && energy[x].idx == this.showEnergyInfo.length - 1) {
                        for (var y = 0; y < this.showEnergyInfo.length; ++y) {
                            if (!this.showEnergyInfo[y] && this.showEnergyInfo[this.showEnergyInfo.length - 1].energyTime != energy[x].energyTime) {
                                energy[x].idx = y;
                                this.showEnergyInfo[y] = energy[x];
                                var energyIns = cc.instantiate(this.energyPref);
                                energyIns.getComponent("EnergyItem").SetItem(energy[x]);
                                this._RemoveEnergyByEnergyTime(energy[x].energyTime);
                                this.energyRoot.addChild(energyIns);
                                LocalDataAPI_1.UpdateEnergy(energy[x]);
                            }
                        }
                    }
                }
            }
        }
        if (this.showEnergyInfo[this.showEnergyInfo.length - 1] != null) {
            var children = this.energyRoot.children;
            if (children.length > 0) {
                children[children.length - 1].getComponent("EnergyItem")._InitItem();
            }
            // console.log("childrenCount： " + children.length);
            // for (let x = 0; x < children.length; ++x) {
            //     console.log("childrenInfo： " + children[x].getComponent("EnergyItem").energyData.idx);
            // }
            if (this.showEnergyInfo[this.showEnergyInfo.length - 1].isGrow) {
                for (var x = 0; x < children.length; ++x) {
                    if (children[x].getComponent("EnergyItem").energyData.idx == this.showEnergyInfo.length - 1
                        && !children[x].getComponent("EnergyItem").energyData.isGrow) {
                        children[x].removeFromParent();
                    }
                }
            }
            else {
                for (var x = 0; x < children.length; ++x) {
                    if (children[x].getComponent("EnergyItem").energyData.idx == this.showEnergyInfo.length - 1
                        && children[x].getComponent("EnergyItem").energyData.energyTime != this.showEnergyInfo[this.showEnergyInfo.length - 1].energyTime) {
                        children[x].removeFromParent();
                    }
                }
            }
            var children1 = this.energyRoot.children;
            // console.log("childrenCount1： " + children1.length);
        }
    };
    HomeGroupCtrl.prototype._RemoveEnergyByEnergyTime = function (time) {
        var children = this.energyRoot.children;
        for (var x = 0; x < children.length; ++x) {
            if (children[x].getComponent("EnergyItem").energyData.energyTime == time) {
                children[x].removeFromParent();
                break;
            }
        }
    };
    HomeGroupCtrl.prototype.OnClickStart = function (event, customEventData) {
        // let energy = this.energy;
        // if (energy.length == 0 || !energy[energy.length - 1].isGrow) {
        this.startEnergyNode.getComponent("StartEnergyGroupCtrl")._UpdateBtn();
        this.startEnergyNode.runAction(cc.moveTo(0.3, cc.v2(375, 667)));
        // } else {
        //     StopEnergy();
        // }
    };
    HomeGroupCtrl.prototype.start = function () {
    };
    __decorate([
        property(cc.Sprite)
    ], HomeGroupCtrl.prototype, "robotSp", void 0);
    __decorate([
        property(cc.RichText)
    ], HomeGroupCtrl.prototype, "robotChangeEnergy", void 0);
    __decorate([
        property(cc.Button)
    ], HomeGroupCtrl.prototype, "btnChangeEnergy", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], HomeGroupCtrl.prototype, "iconSFs", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], HomeGroupCtrl.prototype, "iconNullSF", void 0);
    __decorate([
        property(cc.Label)
    ], HomeGroupCtrl.prototype, "energyReseatTime", void 0);
    __decorate([
        property(cc.Node)
    ], HomeGroupCtrl.prototype, "energyRoot", void 0);
    __decorate([
        property(cc.Prefab)
    ], HomeGroupCtrl.prototype, "energyPref", void 0);
    __decorate([
        property(cc.Button)
    ], HomeGroupCtrl.prototype, "btnStartEnergy", void 0);
    __decorate([
        property(cc.Label)
    ], HomeGroupCtrl.prototype, "btnEnergyLabel", void 0);
    __decorate([
        property(cc.Prefab)
    ], HomeGroupCtrl.prototype, "startEnergyPref", void 0);
    __decorate([
        property(cc.Sprite)
    ], HomeGroupCtrl.prototype, "btnBg", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], HomeGroupCtrl.prototype, "btnFs", void 0);
    HomeGroupCtrl = __decorate([
        ccclass
    ], HomeGroupCtrl);
    return HomeGroupCtrl;
}(cc.Component));
exports.default = HomeGroupCtrl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluU2NlbmVcXEdyb3VwQ3RybFxcSG9tZUdyb3VwQ3RybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFDdEMscURBQWtEO0FBQ2xELCtDQUFvRDtBQUNwRCxzREFBbUU7QUFDbkUseURBQW9EO0FBRXBELHlEQUEyRjtBQUMzRiwyQ0FBc0M7QUFDdEMsb0RBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBMFFDO1FBdlFHLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIsdUJBQWlCLEdBQWdCLElBQUksQ0FBQztRQUd0QyxxQkFBZSxHQUFjLElBQUksQ0FBQztRQUdsQyxhQUFPLEdBQXFCLEVBQUUsQ0FBQztRQUcvQixnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFHbEMsc0JBQWdCLEdBQWEsSUFBSSxDQUFDO1FBK0VsQywrQ0FBK0M7UUFHL0MsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHN0Isb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFHakMsb0JBQWMsR0FBYSxJQUFJLENBQUM7UUFHaEMscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFHbEMsV0FBSyxHQUFjLElBQUksQ0FBQztRQUd4QixXQUFLLEdBQXFCLEVBQUUsQ0FBQztRQUVyQixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUNoQyxvQkFBYyxHQUFjLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDOztRQWdKbkUsaUJBQWlCO0lBQ3JCLENBQUM7SUF0UEcsc0JBQUksaUNBQU07YUFBVjtZQUNJLE9BQU8scUJBQVcsQ0FBQyxJQUFJLENBQUMs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SUFFQSxDQUFDO0lBcFFEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ007SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs0REFDZ0I7SUFHdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswREFDYztJQUdsQztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztrREFDSTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3FEQUNTO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkRBQ2U7SUFrRmxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDUztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUNhO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eURBQ2E7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswREFDYztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNJO0lBR3hCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dEQUNFO0lBdEhaLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0EwUWpDO0lBQUQsb0JBQUM7Q0ExUUQsQUEwUUMsQ0ExUTBDLEVBQUUsQ0FBQyxTQUFTLEdBMFF0RDtrQkExUW9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi9BcHAvR2xvYmFsXCI7XHJcbmltcG9ydCB7IExvY01zZyB9IGZyb20gXCIuLi8uLi9CYXNlTW9kZWwvTXNnRXZlbnRcIjtcclxuaW1wb3J0IHsgRGF0YUJhc2VLZXkgfSBmcm9tIFwiLi4vLi4vQmFzZU1vZGVsL1R5cGVzXCI7XHJcbmltcG9ydCB7IEVuZXJneVNob3dDb3VudCwgSUVuZXJneSB9IGZyb20gXCIuLi8uLi9FbmVyZ3kvRW5lcmd5UHJvcFwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uLy4uL01hbmFnZXIvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgSVBsYXllckluZm8gfSBmcm9tIFwiLi4vLi4vTW9kZWwvUGxheWVyUHJvcFwiO1xyXG5pbXBvcnQgeyBBUElfQ2hhbmdlRW5lcmd5VG9IYWwsIFN0b3BFbmVyZ3ksIFVwZGF0ZUVuZXJneSB9IGZyb20gXCIuLi8uLi9VdGlscy9Mb2NhbERhdGFBUElcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9VdGlscy9VdGlsc1wiO1xyXG5pbXBvcnQgeyBJTkZPUl9TVEFURSB9IGZyb20gXCIuLi9Sb2JvdEluZm9yQ3RybFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVHcm91cEN0cmwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICByb2JvdFNwOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcclxuICAgIHJvYm90Q2hhbmdlRW5lcmd5OiBjYy5SaWNoVGV4dCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJ0bkNoYW5nZUVuZXJneTogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIGljb25TRnM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBpY29uTnVsbFNGOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZW5lcmd5UmVzZWF0VGltZTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIGdldCBwbGF5ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIERhdGFNYW5hZ2VyLkluc3QuR2V0RGF0YTxJUGxheWVySW5mbz4oRGF0YUJhc2VLZXkuUExBWUVSX0RBVEEpO1xyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRFbmVyZ3lOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5zdGFydEVuZXJneVByZWYpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQodGhpcy5zdGFydEVuZXJneU5vZGUpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLnN0YXJ0RW5lcmd5Tm9kZSk7XHJcbiAgICAgICAgdGhpcy5fVXBkYXRlUm9ib3QoKTtcclxuICAgICAgICBHbG9iYWwuSW5zdC5PbihMb2NNc2cuVVBEQVRFX0NVUl9ST0JPVF9JTkZPUiwgdGhpcy5fVXBkYXRlUm9ib3QsIHRoaXMpO1xyXG4gICAgICAgIEdsb2JhbC5JbnN0Lk9uKExvY01zZy5VUERBVEVfRW5lcmd5X0lORk9SLCB0aGlzLl9VcGRhdGVFbmVyZ3ksIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX1VwZGF0ZUVuZXJneSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX1VwZGF0ZVJvYm90KCkge1xyXG4gICAgICAgIGxldCBjdXJSb2JvdCA9IHRoaXMucGxheWVyLmN1clJvYm90VXNlO1xyXG4gICAgICAgIGlmIChjdXJSb2JvdCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvYm90U3Auc3ByaXRlRnJhbWUgPSB0aGlzLmljb25TRnNbY3VyUm9ib3Qucm9ib3RJbWdJZF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb2JvdFNwLnNwcml0ZUZyYW1lID0gdGhpcy5pY29uTnVsbFNGO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvYm90Q2hhbmdlRW5lcmd5LnN0cmluZyA9IGA8Y29sb3I9I2JiNWU1ZT4keyh0aGlzLnBsYXllci5jYW5DaGFuZ2VFbmVyZ3lOdW1Ub3RhbCAtIHRoaXMucGxheWVyLmhhZENoYW5nZUVuZXJneU51bSl9PC9jPi8ke3RoaXMucGxheWVyLmNhbkNoYW5nZUVuZXJneU51bVRvdGFsfWA7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBPbkNsaWNrQ2hhbmdlRW5lcmd5KCkge1xyXG4gICAgICAgIC8vIOaXoOWwj+S6uuOAgeaXoOiDvemHj+OAgei9rOWMluaVsOS4jei2s++8jOS4jeeOsOWunui9rOWMluaMiemSru+8m1xyXG4gICAgICAgIGxldCBjdXJSb2JvdCA9IHRoaXMucGxheWVyLmN1clJvYm90VXNlO1xyXG4gICAgICAgIGlmICghY3VyUm9ib3QpIHtcclxuICAgICAgICAgICAgR2xvYmFsLkluc3QuRW1pdChMb2NNc2cuU0hPV19UT0FTVCwgXCJQbGVhc2UgZXF1aXAgdGhlIHJvYm9044CCXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIuY29sbGVjdEVuZXJneUNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgIEdsb2JhbC5JbnN0LkVtaXQoTG9jTXNnLlNIT1dfVE9BU1QsIFwiSW5zdWZmaWNpZW50IGVuZXJneeOAglwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyLmhhZENoYW5nZUVuZXJneU51bSA+PSB0aGlzLnBsYXllci5jYW5DaGFuZ2VFbmVyZ3lOdW1Ub3RhbCkge1xyXG4gICAgICAgICAgICBHbG9iYWwuSW5zdC5FbWl0KExvY01zZy5TSE9XX1RPQVNULCBcIlBoeXNpY2FsIGRlZmljaWVuY3njgIJcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBBUElfQ2hhbmdlRW5lcmd5VG9IYWwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIE9uQ2xpY2tSb2JvdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIuY3VyUm9ib3RVc2UpIHtcclxuICAgICAgICAgICAgR2xvYmFsLkluc3QuRW1pdChMb2NNc2cuU0hPV19ST0JPVF9JTkZPUiwgdGhpcy5wbGF5ZXIuY3VyUm9ib3RVc2UsIElORk9SX1NUQVRFLklTVVNFSU5HKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5yb2JvdExpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgR2xvYmFsLkluc3QuRW1pdChMb2NNc2cuQ0hBTkdFX0dST1VQX0JZX0lOREVYLCAzKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgR2xvYmFsLkluc3QuRW1pdChMb2NNc2cuQ0hBTkdFX0dST1VQX0JZX0lOREVYLCA0KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbGV0IHNlY29uZCA9IGRhdGEuZ2V0U2Vjb25kcygpO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllci50aW1lUmVzZWF0XHJcbiAgICAgICAgaWYgKHNlY29uZCA+IHRoaXMucGxheWVyLnRpbWVSZXNlYXQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVyZ3lSZXNlYXRUaW1lLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVyZ3lSZXNlYXRUaW1lLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5lbmVyZ3lSZXNlYXRUaW1lLnN0cmluZyA9IFV0aWxzLnRpbWVUb1N0cmluZyh0aGlzLnBsYXllci50aW1lUmVzZWF0IC0gc2Vjb25kKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS14dWVsaWFuZ1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5lcmd5Um9vdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGVuZXJneVByZWY6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJ0blN0YXJ0RW5lcmd5OiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGJ0bkVuZXJneUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHN0YXJ0RW5lcmd5UHJlZjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgYnRuQmc6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgICBidG5GczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgc3RhcnRFbmVyZ3lOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgc2hvd0VuZXJneUluZm86IElFbmVyZ3lbXSA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXTtcclxuXHJcbiAgICBnZXQgZW5lcmd5KCkge1xyXG4gICAgICAgIHJldHVybiBEYXRhTWFuYWdlci5JbnN0LkdldERhdGE8SUVuZXJneVtdPihEYXRhQmFzZUtleS5FTkVSR1lfREFUQSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfVXBkYXRlRW5lcmd5KCkge1xyXG4gICAgICAgIC8vIGxldCBjdXJSb2JvdCA9IHRoaXMucGxheWVyLmN1clJvYm90VXNlO1xyXG4gICAgICAgIC8vIHRoaXMuYnRuU3RhcnRFbmVyZ3kuaW50ZXJhY3RhYmxlID0gISghY3VyUm9ib3QgfHwgdGhpcy5wbGF5ZXIuY29sbGVjdEVuZXJneUNvdW50ID09PSAwKTtcclxuXHJcbiAgICAgICAgbGV0IGVuZXJneSA9IHRoaXMuZW5lcmd5O1xyXG4gICAgICAgIGlmIChlbmVyZ3kubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkVuZXJneUxhYmVsLnN0cmluZyA9IGVuZXJneVtlbmVyZ3kubGVuZ3RoIC0gMV0uaXNHcm93ID8gXCJTVE9QXCIgOiBcIlNUQVJUXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuQmcuc3ByaXRlRnJhbWUgPSBlbmVyZ3lbZW5lcmd5Lmxlbmd0aCAtIDFdLmlzR3JvdyA/IHRoaXMuYnRuRnNbMV0gOiB0aGlzLmJ0bkZzWzBdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuRW5lcmd5TGFiZWwuc3RyaW5nID0gXCJTVEFSVFwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkJnLnNwcml0ZUZyYW1lID0gdGhpcy5idG5Gc1swXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5zaG93RW5lcmd5SW5mby5sZW5ndGg7ICsreCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93RW5lcmd5SW5mb1t4XSAmJiBlbmVyZ3kuaW5kZXhPZih0aGlzLnNob3dFbmVyZ3lJbmZvW3hdKSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RW5lcmd5SW5mb1t4XSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbmVyZ3kubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIl9VcGRhdGVFbmVyZ3k6XCIgKyBKU09OLnN0cmluZ2lmeShlbmVyZ3kpKTtcclxuICAgICAgICAgICAgaWYgKGVuZXJneVtlbmVyZ3kubGVuZ3RoIC0gMV0uaXNHcm93KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2hvd0VuZXJneUluZm9bdGhpcy5zaG93RW5lcmd5SW5mby5sZW5ndGggLSAxXSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VuZXJneUluZm9bdGhpcy5zaG93RW5lcmd5SW5mby5sZW5ndGggLSAxXS5lbmVyZ3lUaW1lICE9IGVuZXJneVtlbmVyZ3kubGVuZ3RoIC0gMV0uZW5lcmd5VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VuZXJneUluZm9bdGhpcy5zaG93RW5lcmd5SW5mby5sZW5ndGggLSAxXSA9IGVuZXJneVtlbmVyZ3kubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZXJneUlucyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZW5lcmd5UHJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5lcmd5SW5zLmdldENvbXBvbmVudChcIkVuZXJneUl0ZW1cIikuU2V0SXRlbShlbmVyZ3lbZW5lcmd5Lmxlbmd0aCAtIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9SZW1vdmVFbmVyZ3lCeUVuZXJneVRpbWUoZW5lcmd5W2VuZXJneS5sZW5ndGggLSAxXS5lbmVyZ3lUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZXJneVJvb3QuYWRkQ2hpbGQoZW5lcmd5SW5zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IEVuZXJneVNob3dDb3VudCAtIDE7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4IDwgZW5lcmd5Lmxlbmd0aCAtIDEgJiYgZW5lcmd5W3hdLmlkeCAhPSB0aGlzLnNob3dFbmVyZ3lJbmZvLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNob3dFbmVyZ3lJbmZvW3hdIHx8IHRoaXMuc2hvd0VuZXJneUluZm9beF0uZW5lcmd5VGltZSAhPSBlbmVyZ3lbeF0uZW5lcmd5VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RW5lcmd5SW5mb1t4XSA9IGVuZXJneVt4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbmVyZ3lJbnMgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmVuZXJneVByZWYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lcmd5SW5zLmdldENvbXBvbmVudChcIkVuZXJneUl0ZW1cIikuU2V0SXRlbShlbmVyZ3lbeF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fUmVtb3ZlRW5lcmd5QnlFbmVyZ3lUaW1lKGVuZXJneVt4XS5lbmVyZ3lUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lcmd5Um9vdC5hZGRDaGlsZChlbmVyZ3lJbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlRW5lcmd5KGVuZXJneVt4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHggPCBlbmVyZ3kubGVuZ3RoIC0gMSAmJiBlbmVyZ3lbeF0uaWR4ID09IHRoaXMuc2hvd0VuZXJneUluZm8ubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuc2hvd0VuZXJneUluZm8ubGVuZ3RoIC0gMTsgKyt5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2hvd0VuZXJneUluZm9beV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVyZ3lbeF0uaWR4ID0geTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFbmVyZ3lJbmZvW3ldID0gZW5lcmd5W3hdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbmVyZ3lJbnMgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmVuZXJneVByZWYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZXJneUlucy5nZXRDb21wb25lbnQoXCJFbmVyZ3lJdGVtXCIpLlNldEl0ZW0oZW5lcmd5W3hdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9SZW1vdmVFbmVyZ3lCeUVuZXJneVRpbWUoZW5lcmd5W3hdLmVuZXJneVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lcmd5Um9vdC5hZGRDaGlsZChlbmVyZ3lJbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZUVuZXJneShlbmVyZ3lbeF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJfVXBkYXRlRW5lcmd5OiBlbnRlclwiKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgRW5lcmd5U2hvd0NvdW50OyArK3gpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeCA8IGVuZXJneS5sZW5ndGggJiYgZW5lcmd5W3hdLmlkeCAhPSB0aGlzLnNob3dFbmVyZ3lJbmZvLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNob3dFbmVyZ3lJbmZvW3hdIHx8IHRoaXMuc2hvd0VuZXJneUluZm9beF0uZW5lcmd5VGltZSAhPSBlbmVyZ3lbeF0uZW5lcmd5VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RW5lcmd5SW5mb1t4XSA9IGVuZXJneVt4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbmVyZ3lJbnMgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmVuZXJneVByZWYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lcmd5SW5zLmdldENvbXBvbmVudChcIkVuZXJneUl0ZW1cIikuU2V0SXRlbShlbmVyZ3lbeF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fUmVtb3ZlRW5lcmd5QnlFbmVyZ3lUaW1lKGVuZXJneVt4XS5lbmVyZ3lUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lcmd5Um9vdC5hZGRDaGlsZChlbmVyZ3lJbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlRW5lcmd5KGVuZXJneVt4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHggPCBlbmVyZ3kubGVuZ3RoICYmIGVuZXJneVt4XS5pZHggPT0gdGhpcy5zaG93RW5lcmd5SW5mby5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5zaG93RW5lcmd5SW5mby5sZW5ndGg7ICsreSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNob3dFbmVyZ3lJbmZvW3ldICYmIHRoaXMuc2hvd0VuZXJneUluZm9bdGhpcy5zaG93RW5lcmd5SW5mby5sZW5ndGggLSAxXS5lbmVyZ3lUaW1lICE9IGVuZXJneVt4XS5lbmVyZ3lUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lcmd5W3hdLmlkeCA9IHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RW5lcmd5SW5mb1t5XSA9IGVuZXJneVt4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW5lcmd5SW5zID0gY2MuaW5zdGFudGlhdGUodGhpcy5lbmVyZ3lQcmVmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVyZ3lJbnMuZ2V0Q29tcG9uZW50KFwiRW5lcmd5SXRlbVwiKS5TZXRJdGVtKGVuZXJneVt4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fUmVtb3ZlRW5lcmd5QnlFbmVyZ3lUaW1lKGVuZXJneVt4XS5lbmVyZ3lUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZXJneVJvb3QuYWRkQ2hpbGQoZW5lcmd5SW5zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVFbmVyZ3koZW5lcmd5W3hdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0VuZXJneUluZm9bdGhpcy5zaG93RW5lcmd5SW5mby5sZW5ndGggLSAxXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuZW5lcmd5Um9vdC5jaGlsZHJlbjtcclxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aCAtIDFdLmdldENvbXBvbmVudChcIkVuZXJneUl0ZW1cIikuX0luaXRJdGVtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGlsZHJlbkNvdW5077yaIFwiICsgY2hpbGRyZW4ubGVuZ3RoKTtcclxuICAgICAgICAgICAgLy8gZm9yIChsZXQgeCA9IDA7IHggPCBjaGlsZHJlbi5sZW5ndGg7ICsreCkge1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJjaGlsZHJlbkluZm/vvJogXCIgKyBjaGlsZHJlblt4XS5nZXRDb21wb25lbnQoXCJFbmVyZ3lJdGVtXCIpLmVuZXJneURhdGEuaWR4KTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93RW5lcmd5SW5mb1t0aGlzLnNob3dFbmVyZ3lJbmZvLmxlbmd0aCAtIDFdLmlzR3Jvdykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjaGlsZHJlbi5sZW5ndGg7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlblt4XS5nZXRDb21wb25lbnQoXCJFbmVyZ3lJdGVtXCIpLmVuZXJneURhdGEuaWR4ID09IHRoaXMuc2hvd0VuZXJneUluZm8ubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAhY2hpbGRyZW5beF0uZ2V0Q29tcG9uZW50KFwiRW5lcmd5SXRlbVwiKS5lbmVyZ3lEYXRhLmlzR3Jvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlblt4XS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjaGlsZHJlbi5sZW5ndGg7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlblt4XS5nZXRDb21wb25lbnQoXCJFbmVyZ3lJdGVtXCIpLmVuZXJneURhdGEuaWR4ID09IHRoaXMuc2hvd0VuZXJneUluZm8ubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBjaGlsZHJlblt4XS5nZXRDb21wb25lbnQoXCJFbmVyZ3lJdGVtXCIpLmVuZXJneURhdGEuZW5lcmd5VGltZSAhPSB0aGlzLnNob3dFbmVyZ3lJbmZvW3RoaXMuc2hvd0VuZXJneUluZm8ubGVuZ3RoIC0gMV0uZW5lcmd5VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlblt4XS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbjEgPSB0aGlzLmVuZXJneVJvb3QuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hpbGRyZW5Db3VudDHvvJogXCIgKyBjaGlsZHJlbjEubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfUmVtb3ZlRW5lcmd5QnlFbmVyZ3lUaW1lKHRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuZW5lcmd5Um9vdC5jaGlsZHJlbjtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGNoaWxkcmVuLmxlbmd0aDsgKyt4KSB7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZHJlblt4XS5nZXRDb21wb25lbnQoXCJFbmVyZ3lJdGVtXCIpLmVuZXJneURhdGEuZW5lcmd5VGltZSA9PSB0aW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlblt4XS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBPbkNsaWNrU3RhcnQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIC8vIGxldCBlbmVyZ3kgPSB0aGlzLmVuZXJneTtcclxuICAgICAgICAvLyBpZiAoZW5lcmd5Lmxlbmd0aCA9PSAwIHx8ICFlbmVyZ3lbZW5lcmd5Lmxlbmd0aCAtIDFdLmlzR3Jvdykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0RW5lcmd5Tm9kZS5nZXRDb21wb25lbnQoXCJTdGFydEVuZXJneUdyb3VwQ3RybFwiKS5fVXBkYXRlQnRuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRFbmVyZ3lOb2RlLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC4zLCBjYy52MigzNzUsIDY2NykpKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBTdG9wRW5lcmd5KCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Energy/EnergyItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c2222C/fehFdKAyAOoGlpIT', 'EnergyItem');
// Script/Energy/EnergyItem.ts

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
var Types_1 = require("../BaseModel/Types");
var DataManager_1 = require("../Manager/DataManager");
var LocalDataAPI_1 = require("../Utils/LocalDataAPI");
var EnergyProp_1 = require("./EnergyProp");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EnergyItem = /** @class */ (function (_super) {
    __extends(EnergyItem, _super);
    function EnergyItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionBg = null;
        _this.icon = null;
        _this.mask = null;
        _this.timeBg = null;
        _this.time = null;
        _this.count = null;
        _this.iconSFs = [];
        _this.colors = [];
        _this._energyData = null;
        _this._nowTime = 0;
        _this._deltaTime = 0;
        _this._positions = [cc.v2(-153, 65), cc.v2(170, 47), cc.v2(-272, -30), cc.v2(250, -114), cc.v2(0, 16)];
        _this._start = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    EnergyItem.prototype.onLoad = function () {
        this.node.scale = 0;
    };
    EnergyItem.prototype.start = function () {
        this.node.runAction(cc.sequence(cc.scaleTo(0.3, 1), cc.callFunc(function () {
        })));
    };
    EnergyItem.prototype.update = function (dt) {
        if (this._start) {
            this._deltaTime += dt;
            if (this._deltaTime >= 1) {
                this._UpdateItem();
            }
        }
    };
    Object.defineProperty(EnergyItem.prototype, "energyData", {
        get: function () {
            return this._energyData;
        },
        enumerable: false,
        configurable: true
    });
    EnergyItem.prototype.SetItem = function (data) {
        var nowDate = new Date();
        this._nowTime = nowDate.getTime();
        this._energyData = data;
        this.node.setPosition(this._positions[data.idx]);
        // console.log("SetItem: " + this._energyData.idx);
        this._InitItem();
    };
    EnergyItem.prototype._UpdateItem = function () {
        var _this = this;
        if (this._energyData.isGrow) {
            if (this._deltaTime > 1) {
                this._deltaTime -= 1;
                this._energyData.energyCount = Math.round((this._energyData.energyCount * 10 + 1)) / 10;
                this.count.string = this._energyData.energyCount.toString() + "g";
                // need change data
                if (this._energyData.energyCount % 10 == 9) {
                    // console.log("save data");
                    LocalDataAPI_1.UpdateEnergy(this._energyData);
                }
            }
        }
        else {
            if (this._deltaTime > 1) {
                this._deltaTime -= 1;
                this._nowTime = new Date().getTime();
                if (this._nowTime - this._energyData.energyTime > EnergyProp_1.MaturationTime + EnergyProp_1.CollectionTime) {
                    // time out
                    this.node.getComponent(cc.Button).interactable = false;
                    this.node.runAction(cc.sequence(cc.scaleTo(0.3, 0), cc.callFunc(function () {
                        _this.node.removeFromParent();
                        LocalDataAPI_1.DeleteEnergy(_this._energyData);
                    })));
                }
                else if (this._nowTime - this._energyData.energyTime > EnergyProp_1.MaturationTime) {
                    this.timeBg.active = false;
                    this.node.getComponent(cc.Button).interactable = true;
                }
                else {
                    this.timeBg.active = true;
                    var timeShow = Math.floor((EnergyProp_1.MaturationTime - (this._nowTime - this._energyData.energyTime)) * 0.001);
                    var h = Math.floor(timeShow / 3600);
                    var m = Math.floor(timeShow % 3600 / 60);
                    var s = timeShow % 3600 % 60;
                    this.time.string = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
                }
            }
        }
        if (!this._energyData.isGrow) {
            var data = DataManager_1.default.Inst.GetData(Types_1.DataBaseKey.ENERGY_DATA);
            if (data.indexOf(this._energyData) == -1) {
                this.node.removeFromParent();
            }
        }
    };
    EnergyItem.prototype._InitItem = function () {
        // console.log("_InitItem: " + this._energyData.isGrow);
        if (this._energyData.isGrow) {
            this.icon.spriteFrame = this.iconSFs[this._energyData.energyType];
            this.mask.spriteFrame = this.iconSFs[this._energyData.energyType + 4];
            this.actionBg.active = true;
            this.actionBg.runAction(cc.repeatForever(cc.rotateBy(1, 180)));
            this.mask.node.active = true;
            this.timeBg.active = false;
            this.count.node.color = this.colors[this._energyData.energyType];
            this.count.string = this._energyData.energyCount.toString() + "g";
            this.node.getComponent(cc.Button).interactable = false;
        }
        else {
            this.actionBg.stopAllActions();
            this.actionBg.active = false;
            this.mask.node.active = false;
            this.icon.spriteFrame = this.iconSFs[this._energyData.energyType];
            this.count.node.color = this.colors[this._energyData.energyType];
            this.count.string = this._energyData.energyCount.toString() + "g";
            if (this._nowTime - this._energyData.energyTime > EnergyProp_1.MaturationTime) {
                this.timeBg.active = false;
                this.node.getComponent(cc.Button).interactable = true;
            }
            else {
                this.timeBg.active = true;
                var timeShow = Math.floor((EnergyProp_1.MaturationTime - (this._nowTime - this._energyData.energyTime)) * 0.001);
                var h = Math.floor(timeShow / 3600);
                var m = Math.floor(timeShow % 3600 / 60);
                var s = timeShow % 3600 % 60;
                this.time.string = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
                this.node.getComponent(cc.Button).interactable = false;
            }
        }
        this._start = true;
    };
    EnergyItem.prototype.OnClick = function (event, customEventData) {
        var _this = this;
        // 增加能量
        LocalDataAPI_1.API_CollectEnergy(this._energyData.energyCount);
        // collect energy
        this.node.getComponent(cc.Button).interactable = false;
        this.node.runAction(cc.sequence(cc.spawn(cc.moveTo(0.35, cc.v2(-190, 190)), cc.scaleTo(0.35, 0.3)), cc.callFunc(function () {
            // need change data
            _this.node.removeFromParent();
            LocalDataAPI_1.UpdateEnergy(_this._energyData);
        })));
    };
    __decorate([
        property(cc.Node)
    ], EnergyItem.prototype, "actionBg", void 0);
    __decorate([
        property(cc.Sprite)
    ], EnergyItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Sprite)
    ], EnergyItem.prototype, "mask", void 0);
    __decorate([
        property(cc.Node)
    ], EnergyItem.prototype, "timeBg", void 0);
    __decorate([
        property(cc.Label)
    ], EnergyItem.prototype, "time", void 0);
    __decorate([
        property(cc.Label)
    ], EnergyItem.prototype, "count", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], EnergyItem.prototype, "iconSFs", void 0);
    __decorate([
        property([cc.Color])
    ], EnergyItem.prototype, "colors", void 0);
    EnergyItem = __decorate([
        ccclass
    ], EnergyItem);
    return EnergyItem;
}(cc.Component));
exports.default = EnergyItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVyZ3lcXEVuZXJneUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQWlEO0FBQ2pELHNEQUFpRDtBQUNqRCxzREFBc0Y7QUFDdEYsMkNBQXVFO0FBRWpFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBNkpDO1FBMUpHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGFBQU8sR0FBcUIsRUFBRSxDQUFDO1FBRy9CLFlBQU0sR0FBZSxFQUFFLENBQUM7UUFFaEIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixnQkFBVSxHQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVHLFlBQU0sR0FBWSxLQUFLLENBQUM7O0lBK0hwQyxDQUFDO0lBN0hHLHdCQUF3QjtJQUV4Qiwy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O09BQ2EsVUFBVSxDQTZKOUI7SUFBRCxpQkFBQztDQTdKRCxBQTZKQyxDQTdKdUMsRUFBRSxDQUFDLFNBQVMsR0E2Sm5EO2tCQTdKb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFCYXNlS2V5IH0gZnJvbSBcIi4uL0Jhc2VNb2RlbC9UeXBlc1wiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgQVBJX0NvbGxlY3RFbmVyZ3ksIERlbGV0ZUVuZXJneSwgVXBkYXRlRW5lcmd5IH0gZnJvbSBcIi4uL1V0aWxzL0xvY2FsRGF0YUFQSVwiO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9uVGltZSwgSUVuZXJneSwgTWF0dXJhdGlvblRpbWUgfSBmcm9tIFwiLi9FbmVyZ3lQcm9wXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lcmd5SXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhY3Rpb25CZzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGljb246IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIG1hc2s6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0aW1lQmc6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRpbWU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBjb3VudDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgaWNvblNGczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuQ29sb3JdKVxyXG4gICAgY29sb3JzOiBjYy5Db2xvcltdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfZW5lcmd5RGF0YTogSUVuZXJneSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9ub3dUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfZGVsdGFUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfcG9zaXRpb25zOiBjYy5WZWMyW10gPSBbY2MudjIoLTE1MywgNjUpLCBjYy52MigxNzAsIDQ3KSwgY2MudjIoLTI3MiwgLTMwKSwgY2MudjIoMjUwLCAtMTE0KSwgY2MudjIoMCwgMTYpXTtcclxuICAgIHByaXZhdGUgX3N0YXJ0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zY2FsZVRvKDAuMywgMSksIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICB9KSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWx0YVRpbWUgKz0gZHQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kZWx0YVRpbWUgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fVXBkYXRlSXRlbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbmVyZ3lEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbmVyZ3lEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIFNldEl0ZW0oZGF0YTogSUVuZXJneSkge1xyXG4gICAgICAgIGxldCBub3dEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICB0aGlzLl9ub3dUaW1lID0gbm93RGF0ZS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy5fZW5lcmd5RGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMuX3Bvc2l0aW9uc1tkYXRhLmlkeF0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2V0SXRlbTogXCIgKyB0aGlzLl9lbmVyZ3lEYXRhLmlkeCk7XHJcblxyXG4gICAgICAgIHRoaXMuX0luaXRJdGVtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfVXBkYXRlSXRlbSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZW5lcmd5RGF0YS5pc0dyb3cpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RlbHRhVGltZSA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RlbHRhVGltZSAtPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5lcmd5RGF0YS5lbmVyZ3lDb3VudCA9IE1hdGgucm91bmQoKHRoaXMuX2VuZXJneURhdGEuZW5lcmd5Q291bnQgKiAxMCArIDEpKSAvIDEwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudC5zdHJpbmcgPSB0aGlzLl9lbmVyZ3lEYXRhLmVuZXJneUNvdW50LnRvU3RyaW5nKCkgKyBcImdcIjtcclxuICAgICAgICAgICAgICAgIC8vIG5lZWQgY2hhbmdlIGRhdGFcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9lbmVyZ3lEYXRhLmVuZXJneUNvdW50ICUgMTAgPT0gOSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2F2ZSBkYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIFVwZGF0ZUVuZXJneSh0aGlzLl9lbmVyZ3lEYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kZWx0YVRpbWUgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWx0YVRpbWUgLT0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX25vd1RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9ub3dUaW1lIC0gdGhpcy5fZW5lcmd5RGF0YS5lbmVyZ3lUaW1lID4gTWF0dXJhdGlvblRpbWUgKyBDb2xsZWN0aW9uVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRpbWUgb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjMsIDApLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZUVuZXJneSh0aGlzLl9lbmVyZ3lEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ub3dUaW1lIC0gdGhpcy5fZW5lcmd5RGF0YS5lbmVyZ3lUaW1lID4gTWF0dXJhdGlvblRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVCZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lQmcuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGltZVNob3cgPSBNYXRoLmZsb29yKChNYXR1cmF0aW9uVGltZSAtICh0aGlzLl9ub3dUaW1lIC0gdGhpcy5fZW5lcmd5RGF0YS5lbmVyZ3lUaW1lKSkgKiAwLjAwMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGggPSBNYXRoLmZsb29yKHRpbWVTaG93IC8gMzYwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG0gPSBNYXRoLmZsb29yKHRpbWVTaG93ICUgMzYwMCAvIDYwKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcyA9IHRpbWVTaG93ICUgMzYwMCAlIDYwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZS5zdHJpbmcgPSAoaCA8IDEwID8gXCIwXCIgKyBoIDogaCkgKyBcIjpcIiArIChtIDwgMTAgPyBcIjBcIiArIG0gOiBtKSArIFwiOlwiICsgKHMgPCAxMCA/IFwiMFwiICsgcyA6IHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5fZW5lcmd5RGF0YS5pc0dyb3cpIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBEYXRhTWFuYWdlci5JbnN0LkdldERhdGE8SUVuZXJneVtdPihEYXRhQmFzZUtleS5FTkVSR1lfREFUQSk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmluZGV4T2YodGhpcy5fZW5lcmd5RGF0YSkgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfSW5pdEl0ZW0oKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJfSW5pdEl0ZW06IFwiICsgdGhpcy5fZW5lcmd5RGF0YS5pc0dyb3cpO1xyXG4gICAgICAgIGlmICh0aGlzLl9lbmVyZ3lEYXRhLmlzR3Jvdykge1xyXG4gICAgICAgICAgICB0aGlzLmljb24uc3ByaXRlRnJhbWUgPSB0aGlzLmljb25TRnNbdGhpcy5fZW5lcmd5RGF0YS5lbmVyZ3lUeXBlXTtcclxuICAgICAgICAgICAgdGhpcy5tYXNrLnNwcml0ZUZyYW1lID0gdGhpcy5pY29uU0ZzW3RoaXMuX2VuZXJneURhdGEuZW5lcmd5VHlwZSArIDRdO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbkJnLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uQmcucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoY2Mucm90YXRlQnkoMSwgMTgwKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm1hc2subm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVCZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudC5ub2RlLmNvbG9yID0gdGhpcy5jb2xvcnNbdGhpcy5fZW5lcmd5RGF0YS5lbmVyZ3lUeXBlXTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudC5zdHJpbmcgPSB0aGlzLl9lbmVyZ3lEYXRhLmVuZXJneUNvdW50LnRvU3RyaW5nKCkgKyBcImdcIjtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uQmcuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb25CZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5tYXNrLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuaWNvblNGc1t0aGlzLl9lbmVyZ3lEYXRhLmVuZXJneVR5cGVdO1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50Lm5vZGUuY29sb3IgPSB0aGlzLmNvbG9yc1t0aGlzLl9lbmVyZ3lEYXRhLmVuZXJneVR5cGVdO1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50LnN0cmluZyA9IHRoaXMuX2VuZXJneURhdGEuZW5lcmd5Q291bnQudG9TdHJpbmcoKSArIFwiZ1wiO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fbm93VGltZSAtIHRoaXMuX2VuZXJneURhdGEuZW5lcmd5VGltZSA+IE1hdHVyYXRpb25UaW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVCZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lQmcuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxldCB0aW1lU2hvdyA9IE1hdGguZmxvb3IoKE1hdHVyYXRpb25UaW1lIC0gKHRoaXMuX25vd1RpbWUgLSB0aGlzLl9lbmVyZ3lEYXRhLmVuZXJneVRpbWUpKSAqIDAuMDAxKTtcclxuICAgICAgICAgICAgICAgIGxldCBoID0gTWF0aC5mbG9vcih0aW1lU2hvdyAvIDM2MDApO1xyXG4gICAgICAgICAgICAgICAgbGV0IG0gPSBNYXRoLmZsb29yKHRpbWVTaG93ICUgMzYwMCAvIDYwKTtcclxuICAgICAgICAgICAgICAgIGxldCBzID0gdGltZVNob3cgJSAzNjAwICUgNjA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUuc3RyaW5nID0gKGggPCAxMCA/IFwiMFwiICsgaCA6IGgpICsgXCI6XCIgKyAobSA8IDEwID8gXCIwXCIgKyBtIDogbSkgKyBcIjpcIiArIChzIDwgMTAgPyBcIjBcIiArIHMgOiBzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdGFydCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgT25DbGljayhldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgLy8g5aKe5Yqg6IO96YePXHJcbiAgICAgICAgQVBJX0NvbGxlY3RFbmVyZ3kodGhpcy5fZW5lcmd5RGF0YS5lbmVyZ3lDb3VudCk7XHJcblxyXG4gICAgICAgIC8vIGNvbGxlY3QgZW5lcmd5XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc3Bhd24oY2MubW92ZVRvKDAuMzUsIGNjLnYyKC0xOTAsIDE5MCkpLCBjYy5zY2FsZVRvKDAuMzUsIDAuMykpLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIG5lZWQgY2hhbmdlIGRhdGFcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgVXBkYXRlRW5lcmd5KHRoaXMuX2VuZXJneURhdGEpO1xyXG4gICAgICAgIH0pKSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Shop/UI_ShopScrollView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '211caTuyvtDzZ8N53SYmA8E', 'UI_ShopScrollView');
// Script/Shop/UI_ShopScrollView.ts

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
var DataManager_1 = require("../Manager/DataManager");
var ShopItem_1 = require("./ShopItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UI_ShopScrollView = /** @class */ (function (_super) {
    __extends(UI_ShopScrollView, _super);
    function UI_ShopScrollView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemPrefab = null;
        _this.lytContent = null;
        _this.maskNode = null;
        _this.colCount = 3;
        _this._itemPools = [];
        _this._cacheData = [];
        _this._inited = false;
        _this._totalHeight = 0;
        _this._itemCount = 0;
        return _this;
    }
    UI_ShopScrollView.prototype.onLoad = function () {
        var _this = this;
        // this.content.parent.parent.getComponent(cc.Widget).updateAlignment();
        this.content.parent.getComponent(cc.Widget).updateAlignment();
        this._InitPoolSize();
        this._itemPools = [];
        this.content.destroyAllChildren();
        var initItemGenerator = this._GetItemGenerator();
        var cb = function () {
            var it = initItemGenerator.next();
            if (it.done) {
                _this.unschedule(cb);
            }
        };
        this.schedule(cb, 1 / cc.game.getFrameRate());
        Global_1.default.Inst.On(MsgEvent_1.LocMsg.UPDATE_SHOP_DATA, this._FreashShopData, this);
    };
    UI_ShopScrollView.prototype._FreashShopData = function (gameTypeCreatDatas) {
        this.SetData(gameTypeCreatDatas);
    };
    UI_ShopScrollView.prototype.onEnable = function () {
        _super.prototype.onEnable.call(this);
        // let testData: IRobot[] = [];
        // for (let index = 0; index < 20; index++) {
        //     let data: IRobot = {
        //         id: index,
        //         robotImgId: index % RobotTypeCount,
        //         mint: index,
        //         sol: index,
        //         level: index,
        //         robotType: index % RobotTypeCount,
        //         efficiency: Math.ceil(Math.random() * 10) / 10,
        //         luck: Math.ceil(Math.random() * 10) / 10,
        //         loss: Math.ceil(Math.random() * 10) / 10
        //     }
        //     testData.push(data)
        // }
        var robotList = DataManager_1.default.Inst.GetData(Types_1.DataBaseKey.SHOP_DATA);
        this.SetData(robotList);
    };
    UI_ShopScrollView.prototype.SetData = function (gameTypeCreatDatas) {
        this._cacheData = [];
        this._totalHeight = 0;
        //AppLog.Log('-- itemCount: ', this._itemCount);
        for (var i = 0, poolIdx = 0; i < gameTypeCreatDatas.length; ++i, ++poolIdx) {
            if (poolIdx >= this._itemCount)
                poolIdx = 0;
            var h = this.itemPrefab.data.height;
            this._cacheData.push({
                idx: i,
                roomTypeData: gameTypeCreatDatas[i],
                poolIdx: poolIdx,
                height: h,
            });
        }
        var col = Math.ceil(this._cacheData.length / this.colCount);
        var padding = this.lytContent.paddingTop + this.lytContent.paddingBottom;
        this._totalHeight = col * this.itemPrefab.data.height + (col - 1) * this.lytContent.spacingY + padding;
        this.content.height = this.elastic ? Math.max(this._totalHeight, this.content.parent.height) : this._totalHeight;
        if (this._inited)
            this.OnScrolling(this, null);
    };
    UI_ShopScrollView.prototype.OnScrolling = function (event, customEventData) {
        if (!this._inited)
            return;
        if (!this.itemPrefab.data)
            return;
        var offsetY = event.getScrollOffset().y;
        var res = this._CalculateStartAndEndIdx(offsetY);
        for (var i = res.startRow; i <= res.endRow; ++i) {
            for (var j = 0; j < this.colCount; ++j) {
                this._ProcessScrollViewItem(i * this.colCount + j);
            }
        }
    };
    UI_ShopScrollView.prototype._CalculateStartAndEndIdx = function (offsetY) {
        var itemHeight = this.itemPrefab.data.height + this.lytContent.spacingY;
        var startRow = Math.floor((offsetY + this.lytContent.paddingTop) / itemHeight);
        // if (startRow > 0) --startRow;
        var maxRow = Math.ceil(this._itemCount / this.colCount) - 1;
        var maxDataCount = Math.ceil(this._cacheData.length / this.colCount);
        var endRow = startRow + maxRow;
        if (endRow >= maxDataCount) {
            endRow = maxDataCount - 1;
        }
        return {
            startRow: startRow,
            endRow: endRow,
        };
    };
    UI_ShopScrollView.prototype._ProcessScrollViewItem = function (idx) {
        var data = this._cacheData[idx];
        if (!data)
            return;
        var item = this._itemPools[data.poolIdx];
        if (!item || (item && item.renderIdx == idx && item.robotId == data.roomTypeData.id))
            return;
        item.node.name = idx.toString();
        item.SetItem(idx, data.roomTypeData);
        item.node.active = true;
        item.node.setPosition(this._CalculateItemPos(idx));
    };
    UI_ShopScrollView.prototype._CalculateItemPos = function (idx) {
        var row = Math.floor(idx / this.colCount);
        var offsetY = row * (this.itemPrefab.data.height + this.lytContent.spacingY) + this.itemPrefab.data.height / 2;
        //posX
        var xStart = -this.lytContent.node.width / 2 + this.lytContent.paddingLeft;
        var col = idx - row * this.colCount;
        var x = xStart + col * (this.itemPrefab.data.width + this.lytContent.spacingX) + this.itemPrefab.data.width / 2;
        return cc.v2(x, -offsetY);
    };
    UI_ShopScrollView.prototype._GetItemGenerator = function () {
        var index, node, comp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    index = 0;
                    _a.label = 1;
                case 1:
                    if (!(index < this._itemCount)) return [3 /*break*/, 4];
                    node = cc.instantiate(this.itemPrefab);
                    node.active = false;
                    this.content.addChild(node);
                    comp = node.getComponent(ShopItem_1.default);
                    this._itemPools.push(comp);
                    return [4 /*yield*/];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    index++;
                    return [3 /*break*/, 1];
                case 4:
                    this._inited = true;
                    this.OnScrolling(this, null);
                    return [2 /*return*/];
            }
        });
    };
    UI_ShopScrollView.prototype._InitPoolSize = function () {
        var item_w = this.itemPrefab.data.width;
        var item_h = this.itemPrefab.data.height;
        var colCount = this.colCount;
        var rowCount = Math.abs(Math.ceil(this.content.parent.height / (item_h + this.lytContent.spacingY)));
        this._itemCount = colCount * (rowCount + 1);
    };
    __decorate([
        property(cc.Prefab)
    ], UI_ShopScrollView.prototype, "itemPrefab", void 0);
    __decorate([
        property(cc.Layout)
    ], UI_ShopScrollView.prototype, "lytContent", void 0);
    __decorate([
        property(cc.Node)
    ], UI_ShopScrollView.prototype, "maskNode", void 0);
    __decorate([
        property({ displayName: '每行个数' })
    ], UI_ShopScrollView.prototype, "colCount", void 0);
    UI_ShopScrollView = __decorate([
        ccclass
    ], UI_ShopScrollView);
    return UI_ShopScrollView;
}(cc.ScrollView));
exports.default = UI_ShopScrollView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTaG9wXFxVSV9TaG9wU2Nyb2xsVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBbUM7QUFDbkMsa0RBQStDO0FBQy9DLDRDQUFpRDtBQUNqRCxzREFBaUQ7QUFFakQsdUNBQWtDO0FBSTVCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQStDLHFDQUFhO0lBQTVEO1FBQUEscUVBa0tDO1FBaEtHLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUViLGdCQUFVLEdBQWUsRUFBRSxDQUFDO1FBQzVCLGdCQUFVLEdBQTZFLEVBQUUsQ0FBQztRQUUxRixhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDOztJQW1KM0IsQ0FBQztJQWpKRyxrQ0FBTSxHQUFOO1FBQUEsaUJBaUJDO1FBaEJHLHdFQUF3RTtRQUN4RSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzlELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFbEMsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNqRCxJQUFJLEVBQUUsR0FBRztZQUNMLElBQUksRUFB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a0tyQztJQUFELHdCQUFDO0NBbEtELEFBa0tDLENBbEs4QyxFQUFFLENBQUMsVUFBVSxHQWtLM0Q7a0JBbEtvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2xvYmFsIGZyb20gXCIuLi9BcHAvR2xvYmFsXCI7XG5pbXBvcnQgeyBMb2NNc2cgfSBmcm9tIFwiLi4vQmFzZU1vZGVsL01zZ0V2ZW50XCI7XG5pbXBvcnQgeyBEYXRhQmFzZUtleSB9IGZyb20gXCIuLi9CYXNlTW9kZWwvVHlwZXNcIjtcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IHsgSVJvYm90IH0gZnJvbSBcIi4uL01vZGVsL1JvYm90UHJvcFwiO1xuaW1wb3J0IFNob3BJdGVtIGZyb20gXCIuL1Nob3BJdGVtXCI7XG5cblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJX1Nob3BTY3JvbGxWaWV3IGV4dGVuZHMgY2MuU2Nyb2xsVmlldyB7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBpdGVtUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYXlvdXQpXG4gICAgbHl0Q29udGVudDogY2MuTGF5b3V0ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBtYXNrTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6ICfmr4/ooYzkuKrmlbAnIH0pXG4gICAgY29sQ291bnQ6IG51bWJlciA9IDM7XG5cbiAgICBwcml2YXRlIF9pdGVtUG9vbHM6IFNob3BJdGVtW10gPSBbXTtcbiAgICBwcml2YXRlIF9jYWNoZURhdGE6IHsgaWR4OiBudW1iZXIsIHJvb21UeXBlRGF0YTogSVJvYm90LCBwb29sSWR4OiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH1bXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBfaW5pdGVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfdG90YWxIZWlnaHQgPSAwO1xuICAgIHByaXZhdGUgX2l0ZW1Db3VudCA9IDA7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIHRoaXMuY29udGVudC5wYXJlbnQucGFyZW50LmdldENvbXBvbmVudChjYy5XaWRnZXQpLnVwZGF0ZUFsaWdubWVudCgpO1xuICAgICAgICB0aGlzLmNvbnRlbnQucGFyZW50LmdldENvbXBvbmVudChjYy5XaWRnZXQpLnVwZGF0ZUFsaWdubWVudCgpO1xuICAgICAgICB0aGlzLl9Jbml0UG9vbFNpemUoKTtcbiAgICAgICAgdGhpcy5faXRlbVBvb2xzID0gW107XG4gICAgICAgIHRoaXMuY29udGVudC5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcblxuICAgICAgICBsZXQgaW5pdEl0ZW1HZW5lcmF0b3IgPSB0aGlzLl9HZXRJdGVtR2VuZXJhdG9yKCk7XG4gICAgICAgIGxldCBjYiA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBpdCA9IGluaXRJdGVtR2VuZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgIGlmIChpdC5kb25lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKGNiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZShjYiwgMSAvIGNjLmdhbWUuZ2V0RnJhbWVSYXRlKCkpO1xuXG4gICAgICAgIEdsb2JhbC5JbnN0Lk9uKExvY01zZy5VUERBVEVfU0hPUF9EQVRBLCB0aGlzLl9GcmVhc2hTaG9wRGF0YSwgdGhpcyk7XG4gICAgfVxuICAgIHByaXZhdGUgX0ZyZWFzaFNob3BEYXRhKGdhbWVUeXBlQ3JlYXREYXRhczogSVJvYm90W10pIHtcbiAgICAgICAgdGhpcy5TZXREYXRhKGdhbWVUeXBlQ3JlYXREYXRhcylcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIC8vIGxldCB0ZXN0RGF0YTogSVJvYm90W10gPSBbXTtcbiAgICAgICAgLy8gZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDIwOyBpbmRleCsrKSB7XG4gICAgICAgIC8vICAgICBsZXQgZGF0YTogSVJvYm90ID0ge1xuICAgICAgICAvLyAgICAgICAgIGlkOiBpbmRleCxcbiAgICAgICAgLy8gICAgICAgICByb2JvdEltZ0lkOiBpbmRleCAlIFJvYm90VHlwZUNvdW50LFxuICAgICAgICAvLyAgICAgICAgIG1pbnQ6IGluZGV4LFxuICAgICAgICAvLyAgICAgICAgIHNvbDogaW5kZXgsXG4gICAgICAgIC8vICAgICAgICAgbGV2ZWw6IGluZGV4LFxuICAgICAgICAvLyAgICAgICAgIHJvYm90VHlwZTogaW5kZXggJSBSb2JvdFR5cGVDb3VudCxcbiAgICAgICAgLy8gICAgICAgICBlZmZpY2llbmN5OiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwKSAvIDEwLFxuICAgICAgICAvLyAgICAgICAgIGx1Y2s6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTApIC8gMTAsXG4gICAgICAgIC8vICAgICAgICAgbG9zczogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMCkgLyAxMFxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgdGVzdERhdGEucHVzaChkYXRhKVxuXG4gICAgICAgIC8vIH1cblxuICAgICAgICBsZXQgcm9ib3RMaXN0ID0gRGF0YU1hbmFnZXIuSW5zdC5HZXREYXRhPElSb2JvdFtdPihEYXRhQmFzZUtleS5TSE9QX0RBVEEpO1xuICAgICAgICB0aGlzLlNldERhdGEocm9ib3RMaXN0KTtcbiAgICB9XG5cbiAgICBTZXREYXRhKGdhbWVUeXBlQ3JlYXREYXRhczogSVJvYm90W10pIHtcblxuICAgICAgICB0aGlzLl9jYWNoZURhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5fdG90YWxIZWlnaHQgPSAwO1xuXG4gICAgICAgIC8vQXBwTG9nLkxvZygnLS0gaXRlbUNvdW50OiAnLCB0aGlzLl9pdGVtQ291bnQpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBwb29sSWR4ID0gMDsgaSA8IGdhbWVUeXBlQ3JlYXREYXRhcy5sZW5ndGg7ICsraSwgKytwb29sSWR4KSB7XG4gICAgICAgICAgICBpZiAocG9vbElkeCA+PSB0aGlzLl9pdGVtQ291bnQpIHBvb2xJZHggPSAwO1xuICAgICAgICAgICAgbGV0IGggPSB0aGlzLml0ZW1QcmVmYWIuZGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZURhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgaWR4OiBpLFxuICAgICAgICAgICAgICAgIHJvb21UeXBlRGF0YTogZ2FtZVR5cGVDcmVhdERhdGFzW2ldLFxuICAgICAgICAgICAgICAgIHBvb2xJZHg6IHBvb2xJZHgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY29sID0gTWF0aC5jZWlsKHRoaXMuX2NhY2hlRGF0YS5sZW5ndGggLyB0aGlzLmNvbENvdW50KTtcbiAgICAgICAgbGV0IHBhZGRpbmcgPSB0aGlzLmx5dENvbnRlbnQucGFkZGluZ1RvcCArIHRoaXMubHl0Q29udGVudC5wYWRkaW5nQm90dG9tO1xuICAgICAgICB0aGlzLl90b3RhbEhlaWdodCA9IGNvbCAqIHRoaXMuaXRlbVByZWZhYi5kYXRhLmhlaWdodCArIChjb2wgLSAxKSAqIHRoaXMubHl0Q29udGVudC5zcGFjaW5nWSArIHBhZGRpbmc7XG4gICAgICAgIHRoaXMuY29udGVudC5oZWlnaHQgPSB0aGlzLmVsYXN0aWMgPyBNYXRoLm1heCh0aGlzLl90b3RhbEhlaWdodCwgdGhpcy5jb250ZW50LnBhcmVudC5oZWlnaHQpIDogdGhpcy5fdG90YWxIZWlnaHQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX2luaXRlZCkgdGhpcy5PblNjcm9sbGluZyh0aGlzLCBudWxsKTtcbiAgICB9XG5cbiAgICBPblNjcm9sbGluZyhldmVudDogY2MuU2Nyb2xsVmlldywgY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbml0ZWQpIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLml0ZW1QcmVmYWIuZGF0YSkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBvZmZzZXRZID0gZXZlbnQuZ2V0U2Nyb2xsT2Zmc2V0KCkueTtcbiAgICAgICAgbGV0IHJlcyA9IHRoaXMuX0NhbGN1bGF0ZVN0YXJ0QW5kRW5kSWR4KG9mZnNldFkpO1xuICAgICAgICBmb3IgKGxldCBpID0gcmVzLnN0YXJ0Um93OyBpIDw9IHJlcy5lbmRSb3c7ICsraSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbENvdW50OyArK2opIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9Qcm9jZXNzU2Nyb2xsVmlld0l0ZW0oaSAqIHRoaXMuY29sQ291bnQgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX0NhbGN1bGF0ZVN0YXJ0QW5kRW5kSWR4KG9mZnNldFk6IG51bWJlcik6IHsgc3RhcnRSb3c6IG51bWJlcjsgZW5kUm93OiBudW1iZXIgfSB7XG5cbiAgICAgICAgbGV0IGl0ZW1IZWlnaHQgPSB0aGlzLml0ZW1QcmVmYWIuZGF0YS5oZWlnaHQgKyB0aGlzLmx5dENvbnRlbnQuc3BhY2luZ1k7XG5cbiAgICAgICAgbGV0IHN0YXJ0Um93ID0gTWF0aC5mbG9vcigob2Zmc2V0WSArIHRoaXMubHl0Q29udGVudC5wYWRkaW5nVG9wKSAvIGl0ZW1IZWlnaHQpO1xuICAgICAgICAvLyBpZiAoc3RhcnRSb3cgPiAwKSAtLXN0YXJ0Um93O1xuXG4gICAgICAgIGxldCBtYXhSb3cgPSBNYXRoLmNlaWwodGhpcy5faXRlbUNvdW50IC8gdGhpcy5jb2xDb3VudCkgLSAxO1xuICAgICAgICBsZXQgbWF4RGF0YUNvdW50ID0gTWF0aC5jZWlsKHRoaXMuX2NhY2hlRGF0YS5sZW5ndGggLyB0aGlzLmNvbENvdW50KTtcblxuICAgICAgICBsZXQgZW5kUm93ID0gc3RhcnRSb3cgKyBtYXhSb3c7XG4gICAgICAgIGlmIChlbmRSb3cgPj0gbWF4RGF0YUNvdW50KSB7XG4gICAgICAgICAgICBlbmRSb3cgPSBtYXhEYXRhQ291bnQgLSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGFydFJvdzogc3RhcnRSb3csXG4gICAgICAgICAgICBlbmRSb3c6IGVuZFJvdyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9Qcm9jZXNzU2Nyb2xsVmlld0l0ZW0oaWR4OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLl9jYWNoZURhdGFbaWR4XTtcbiAgICAgICAgaWYgKCFkYXRhKSByZXR1cm47XG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5faXRlbVBvb2xzW2RhdGEucG9vbElkeF07XG4gICAgICAgIGlmICghaXRlbSB8fCAoaXRlbSAmJiBpdGVtLnJlbmRlcklkeCA9PSBpZHggJiYgaXRlbS5yb2JvdElkID09IGRhdGEucm9vbVR5cGVEYXRhLmlkKSkgcmV0dXJuO1xuICAgICAgICBpdGVtLm5vZGUubmFtZSA9IGlkeC50b1N0cmluZygpO1xuICAgICAgICBpdGVtLlNldEl0ZW0oaWR4LCBkYXRhLnJvb21UeXBlRGF0YSk7XG4gICAgICAgIGl0ZW0ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBpdGVtLm5vZGUuc2V0UG9zaXRpb24odGhpcy5fQ2FsY3VsYXRlSXRlbVBvcyhpZHgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9DYWxjdWxhdGVJdGVtUG9zKGlkeCkge1xuICAgICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihpZHggLyB0aGlzLmNvbENvdW50KTtcbiAgICAgICAgbGV0IG9mZnNldFkgPSByb3cgKiAodGhpcy5pdGVtUHJlZmFiLmRhdGEuaGVpZ2h0ICsgdGhpcy5seXRDb250ZW50LnNwYWNpbmdZKSArIHRoaXMuaXRlbVByZWZhYi5kYXRhLmhlaWdodCAvIDI7XG4gICAgICAgIC8vcG9zWFxuICAgICAgICBsZXQgeFN0YXJ0ID0gLXRoaXMubHl0Q29udGVudC5ub2RlLndpZHRoIC8gMiArIHRoaXMubHl0Q29udGVudC5wYWRkaW5nTGVmdDtcbiAgICAgICAgbGV0IGNvbCA9IGlkeCAtIHJvdyAqIHRoaXMuY29sQ291bnQ7XG4gICAgICAgIGxldCB4ID0geFN0YXJ0ICsgY29sICogKHRoaXMuaXRlbVByZWZhYi5kYXRhLndpZHRoICsgdGhpcy5seXRDb250ZW50LnNwYWNpbmdYKSArIHRoaXMuaXRlbVByZWZhYi5kYXRhLndpZHRoIC8gMjtcbiAgICAgICAgcmV0dXJuIGNjLnYyKHgsIC1vZmZzZXRZKTtcbiAgICB9XG5cbiAgICBwcml2YXRlICpfR2V0SXRlbUdlbmVyYXRvcigpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2l0ZW1Db3VudDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1QcmVmYWIpO1xuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIGxldCBjb21wID0gbm9kZS5nZXRDb21wb25lbnQoU2hvcEl0ZW0pO1xuICAgICAgICAgICAgdGhpcy5faXRlbVBvb2xzLnB1c2goY29tcCk7XG4gICAgICAgICAgICB5aWVsZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbml0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLk9uU2Nyb2xsaW5nKHRoaXMsIG51bGwpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX0luaXRQb29sU2l6ZSgpIHtcbiAgICAgICAgbGV0IGl0ZW1fdyA9IHRoaXMuaXRlbVByZWZhYi5kYXRhLndpZHRoO1xuICAgICAgICBsZXQgaXRlbV9oID0gdGhpcy5pdGVtUHJlZmFiLmRhdGEuaGVpZ2h0O1xuICAgICAgICBsZXQgY29sQ291bnQgPSB0aGlzLmNvbENvdW50O1xuICAgICAgICBsZXQgcm93Q291bnQgPSBNYXRoLmFicyhNYXRoLmNlaWwodGhpcy5jb250ZW50LnBhcmVudC5oZWlnaHQgLyAoaXRlbV9oICsgdGhpcy5seXRDb250ZW50LnNwYWNpbmdZKSkpO1xuICAgICAgICB0aGlzLl9pdGVtQ291bnQgPSBjb2xDb3VudCAqIChyb3dDb3VudCArIDEpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Utils/LocalDataAPI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '83ab2PE9JlA/IJMeTI627Zr', 'LocalDataAPI');
// Script/Utils/LocalDataAPI.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEnergy = exports.StopEnergy = exports.UpdateEnergy = exports.API_ChangeEnergyToHal = exports.API_CollectEnergy = exports.API_UseRobot = exports.API_BuyRobot = void 0;
var Global_1 = require("../App/Global");
var MsgEvent_1 = require("../BaseModel/MsgEvent");
var Types_1 = require("../BaseModel/Types");
var EnergyProp_1 = require("../Energy/EnergyProp");
var RobotInforCtrl_1 = require("../MainScene/RobotInforCtrl");
var DataManager_1 = require("../Manager/DataManager");
var Utils_1 = require("./Utils");
// 模拟购买机器人
function API_BuyRobot(robot) {
    // 添加到个人数据
    var playerLoadData = DataManager_1.default.Inst.GetData(Types_1.DataBaseKey.PLAYER_DATA);
    playerLoadData.robotList.push(robot);
    playerLoadData.maticCount -= robot.maticCost;
    //增加可转化能量（暂定10g）
    playerLoadData.canChangeEnergyNumTotal += 10;
    // 更新内存和本地
    DataManager_1.default.Inst.SetData(Types_1.DataBaseKey.PLAYER_DATA, playerLoadData);
    Utils_1.default.SaveData(Types_1.SaveDataKey.PLAYER_DATA, JSON.stringify(playerLoadData));
    // 删除商城该物品
    var shopLoadData = DataManager_1.default.Inst.GetData(Types_1.DataBaseKey.SHOP_DATA);
    shopLoadData = shopLoadData.filter(function (r) { return r.id !== robot.id; });
    // 更新内存和本地
    DataManager_1.default.Inst.SetData(Types_1.DataBaseKey.SHOP_DATA, shopLoadData);
    Utils_1.default.SaveData(Types_1.SaveDataKey.SHOP_DATA, JSON.stringify(shopLoadData));
    // 通知更新Matic余额；
    Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.UPDATE_MARIC_NUM, playerLoadData.maticCount);
    // 通知更新商城UI刷新；
    Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.UPDATE_SHOP_DATA, shopLoadData);
    // 通知更新背包UI刷新；
    Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.UPDATE_BACK_PACK_DATA, playerLoadData.robotList);
    // 通知更新详情页UI刷新；
    Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.UPDATE_ROBOT_INFOR, robot, RobotInforCtrl_1.INFOR_STATE.HAED);
    // 通知更新当前使用小人信息
    Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.UPDATE_CUR_ROBOT_INFOR);
    Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.SHOW_TOAST, "Purchase succeeded");
}
exports.API_BuyRobot = API_BuyRobot;
// 模拟使用和卸载机器人
function API_UseRobot(robot) {
    var playerLoadData = DataManager_1.default.Inst.GetData(Types_1.DataBaseKey.PLAYER_DATA);
    if (playerLoadData.curRobotUse && playerLoadData.curRobotUse.id === robot.id) {
        playerLoadData.curRobotUse = null;
    }
    else {
        playerLoadData.curRobotUse = robot;
    }
    // 更新内存和本地
    DataManager_1.default.Inst.SetData(Types_1.DataBaseKey.PLAYER_DATA, playerLoadData);
    Utils_1.default.SaveData(Types_1.SaveDataKey.PLAYER_DATA, JSON.stringify(playerLoadData));
    // 通知更新详情页UI刷新；
    Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.UPDATE_ROBOT_INFOR, robot, playerLoadData.curRobotUse ? RobotInforCtrl_1.INFOR_STATE.ISUSEING : RobotInforCtrl_1.INFOR_STATE.HAED);
    // 通知更新当前使用小人信息
    Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.UPDATE_CUR_ROBOT_INFOR);
    // 通知更新当前使用小人信息
    Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.UPDATE_BACK_PACK_DATA, playerLoadData.robotList);
}
exports.API_UseRobot = API_UseRobot;
// 收取能量
function API_CollectEnergy(num) {
    var playerLoadData = DataManager_1.default.Inst.GetData(Types_1.DataBaseKey.PLAYER_DATA);
    playerLoadData.collectEnergyCount += num;
    // 更新内存和本地
    DataManager_1.default.Inst.SetData(Types_1.DataBaseKey.PLAYER_DATA, playerLoadData);
    Utils_1.default.SaveData(Types_1.SaveDataKey.PLAYER_DATA, JSON.stringify(playerLoadData));
    // 通知更新收集的能量
    Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.UPDATE_COLLECT_ENERGY);
    // 通知更新当前使用小人信息
    Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.UPDATE_CUR_ROBOT_INFOR);
}
exports.API_CollectEnergy = API_CollectEnergy;
// 能量转化游戏b
function API_ChangeEnergyToHal() {
    var playerLoadData = DataManager_1.default.Inst.GetData(Types_1.DataBaseKey.PLAYER_DATA);
    var num = playerLoadData.collectEnergyCount;
    var canChangeEnergyMax = playerLoadData.canChangeEnergyNumTotal - playerLoadData.hadChangeEnergyNum;
    var changeEnergy = num > canChangeEnergyMax ? canChangeEnergyMax : num;
    // 扣除当前能量
    playerLoadData.collectEnergyCount -= changeEnergy;
    // 已转换修改；
    playerLoadData.hadChangeEnergyNum += changeEnergy;
    var data = new Date();
    var second = data.getSeconds();
    if (second > playerLoadData.timeReseat) {
        playerLoadData.timeReseat = changeEnergy * 600;
    }
    else {
        playerLoadData.timeReseat += changeEnergy * 600;
    }
    // 10g能量等于1hal；
    playerLoadData.halCount += (changeEnergy / 10);
    // 更新内存和本地
    DataManager_1.default.Inst.SetData(Types_1.DataBaseKey.PLAYER_DATA, playerLoadData);
    Utils_1.default.SaveData(Types_1.SaveDataKey.PLAYER_DATA, JSON.stringify(playerLoadData));
    // 通知更新收集的能量
    Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.UPDATE_COLLECT_ENERGY);
    // 通知更新收集的能量
    Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.UPDATE_HAL_COUNT);
    // 通知更新当前使用小人信息
    Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.UPDATE_CUR_ROBOT_INFOR);
    Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.SHOW_TOAST, "Successful conversion of energy \n    into HAL");
}
exports.API_ChangeEnergyToHal = API_ChangeEnergyToHal;
//---------------------------------------xueliang
function UpdateEnergy(energy) {
    var energyLoadData = DataManager_1.default.Inst.GetData(Types_1.DataBaseKey.ENERGY_DATA);
    var update = false;
    if (energy) {
        for (var x = 0; x < energyLoadData.length; ++x) {
            if (energyLoadData[x].energyTime == energy.energyTime) {
                energyLoadData[x] = energy;
                update = true;
            }
        }
        if (!update) {
            energyLoadData.push(energy);
            update = true;
        }
    }
    else {
        var nowTime = new Date().getTime();
        for (var x = energyLoadData.length - 1; x >= 0; --x) {
            if (nowTime - energyLoadData[x].energyTime >= EnergyProp_1.MaturationTime + EnergyProp_1.CollectionTime) {
                energyLoadData.splice(x, 1);
                update = true;
            }
        }
    }
    if (update) {
        // 更新内存和本地
        DataManager_1.default.Inst.SetData(Types_1.DataBaseKey.ENERGY_DATA, energyLoadData);
        Utils_1.default.SaveData(Types_1.SaveDataKey.ENERGY_DATA, JSON.stringify(energyLoadData));
        // 通知更新能量显示
        Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.UPDATE_Energy_INFOR);
    }
}
exports.UpdateEnergy = UpdateEnergy;
function StopEnergy() {
    var energyLoadData = DataManager_1.default.Inst.GetData(Types_1.DataBaseKey.ENERGY_DATA);
    energyLoadData[energyLoadData.length - 1].isGrow = false;
    energyLoadData[energyLoadData.length - 1].energyTime = new Date().getTime();
    // if (energyLoadData[energyLoadData.length - 1].energyCount < 10) {
    //     energyLoadData.pop();
    // }
    // 更新内存和本地
    DataManager_1.default.Inst.SetData(Types_1.DataBaseKey.ENERGY_DATA, energyLoadData);
    Utils_1.default.SaveData(Types_1.SaveDataKey.ENERGY_DATA, JSON.stringify(energyLoadData));
    // 通知更新能量显示
    Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.UPDATE_Energy_INFOR);
}
exports.StopEnergy = StopEnergy;
function DeleteEnergy(energy) {
    var energyLoadData = DataManager_1.default.Inst.GetData(Types_1.DataBaseKey.ENERGY_DATA);
    var idx = energyLoadData.indexOf(energy);
    if (idx != -1) {
        energyLoadData.splice(idx, 1);
        // 更新内存和本地
        DataManager_1.default.Inst.SetData(Types_1.DataBaseKey.ENERGY_DATA, energyLoadData);
        Utils_1.default.SaveData(Types_1.SaveDataKey.ENERGY_DATA, JSON.stringify(energyLoadData));
        // 通知更新能量显示
        Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.UPDATE_Energy_INFOR);
    }
}
exports.DeleteEnergy = DeleteEnergy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxVdGlsc1xcTG9jYWxEYXRhQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUFtQztBQUNuQyxrREFBK0M7QUFDL0MsNENBQThEO0FBQzlELG1EQUErRTtBQUMvRSw4REFBMEQ7QUFDMUQsc0RBQWlEO0FBR2pELGlDQUE0QjtBQUU1QixVQUFVO0FBQ1YsU0FBZ0IsWUFBWSxDQUFDLEtBQWE7SUFDdEMsVUFBVTtJQUNWLElBQUksY0FBYyxHQUFHLHFCQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBYyxtQkFBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BGLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLGNBQWMsQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUU3QyxnQkFBZ0I7SUFDaEIsY0FBYyxDQUFDLHVCQUF1QixJQUFJLEVBQUUsQ0FBQztJQUU3QyxVQUFVO0lBQ1YscUJBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFjLG1CQUFXLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQy9FLGVBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBR3hFLFVBQVU7SUFDVixJQUFJLFlBQVksR0FBRyxxQkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQVcsbUJBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3RSxZQUFZLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQzNELFVBQVU7SUFDVixxQkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQVcsbUJBQVcsQ0FBQyxT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b250ZW50IjpbImltcG9ydCBHbG9iYWwgZnJvbSBcIi4uL0FwcC9HbG9iYWxcIjtcclxuaW1wb3J0IHsgTG9jTXNnIH0gZnJvbSBcIi4uL0Jhc2VNb2RlbC9Nc2dFdmVudFwiO1xyXG5pbXBvcnQgeyBEYXRhQmFzZUtleSwgU2F2ZURhdGFLZXkgfSBmcm9tIFwiLi4vQmFzZU1vZGVsL1R5cGVzXCI7XHJcbmltcG9ydCB7IENvbGxlY3Rpb25UaW1lLCBJRW5lcmd5LCBNYXR1cmF0aW9uVGltZSB9IGZyb20gXCIuLi9FbmVyZ3kvRW5lcmd5UHJvcFwiO1xyXG5pbXBvcnQgeyBJTkZPUl9TVEFURSB9IGZyb20gXCIuLi9NYWluU2NlbmUvUm9ib3RJbmZvckN0cmxcIjtcclxuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IElQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL01vZGVsL1BsYXllclByb3BcIjtcclxuaW1wb3J0IHsgSVJvYm90IH0gZnJvbSBcIi4uL01vZGVsL1JvYm90UHJvcFwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcclxuXHJcbi8vIOaooeaLn+i0reS5sOacuuWZqOS6ulxyXG5leHBvcnQgZnVuY3Rpb24gQVBJX0J1eVJvYm90KHJvYm90OiBJUm9ib3QpIHtcclxuICAgIC8vIOa3u+WKoOWIsOS4quS6uuaVsOaNrlxyXG4gICAgbGV0IHBsYXllckxvYWREYXRhID0gRGF0YU1hbmFnZXIuSW5zdC5HZXREYXRhPElQbGF5ZXJJbmZvPihEYXRhQmFzZUtleS5QTEFZRVJfREFUQSk7XHJcbiAgICBwbGF5ZXJMb2FkRGF0YS5yb2JvdExpc3QucHVzaChyb2JvdCk7XHJcbiAgICBwbGF5ZXJMb2FkRGF0YS5tYXRpY0NvdW50IC09IHJvYm90Lm1hdGljQ29zdDtcclxuXHJcbiAgICAvL+WinuWKoOWPr+i9rOWMluiDvemHj++8iOaaguWumjEwZ++8iVxyXG4gICAgcGxheWVyTG9hZERhdGEuY2FuQ2hhbmdlRW5lcmd5TnVtVG90YWwgKz0gMTA7XHJcblxyXG4gICAgLy8g5pu05paw5YaF5a2Y5ZKM5pys5ZywXHJcbiAgICBEYXRhTWFuYWdlci5JbnN0LlNldERhdGE8SVBsYXllckluZm8+KERhdGFCYXNlS2V5LlBMQVlFUl9EQVRBLCBwbGF5ZXJMb2FkRGF0YSk7XHJcbiAgICBVdGlscy5TYXZlRGF0YShTYXZlRGF0YUtleS5QTEFZRVJfREFUQSwgSlNPTi5zdHJpbmdpZnkocGxheWVyTG9hZERhdGEpKTtcclxuXHJcblxyXG4gICAgLy8g5Yig6Zmk5ZWG5Z+O6K+l54mp5ZOBXHJcbiAgICBsZXQgc2hvcExvYWREYXRhID0gRGF0YU1hbmFnZXIuSW5zdC5HZXREYXRhPElSb2JvdFtdPihEYXRhQmFzZUtleS5TSE9QX0RBVEEpO1xyXG4gICAgc2hvcExvYWREYXRhID0gc2hvcExvYWREYXRhLmZpbHRlcihyID0+IHIuaWQgIT09IHJvYm90LmlkKTtcclxuICAgIC8vIOabtOaWsOWGheWtmOWSjOacrOWcsFxyXG4gICAgRGF0YU1hbmFnZXIuSW5zdC5TZXREYXRhPElSb2JvdFtdPihEYXRhQmFzZUtleS5TSE9QX0RBVEEsIHNob3BMb2FkRGF0YSk7XHJcbiAgICBVdGlscy5TYXZlRGF0YShTYXZlRGF0YUtleS5TSE9QX0RBVEEsIEpTT04uc3RyaW5naWZ5KHNob3BMb2FkRGF0YSkpO1xyXG5cclxuXHJcbiAgICAvLyDpgJrnn6Xmm7TmlrBNYXRpY+S9memine+8m1xyXG4gICAgR2xvYmFsLkluc3QuRW1pdChMb2NNc2cuVVBEQVRFX01BUklDX05VTSwgcGxheWVyTG9hZERhdGEubWF0aWNDb3VudCk7XHJcbiAgICAvLyDpgJrnn6Xmm7TmlrDllYbln45VSeWIt+aWsO+8m1xyXG4gICAgR2xvYmFsLkluc3QuRW1pdChMb2NNc2cuVVBEQVRFX1NIT1BfREFUQSwgc2hvcExvYWREYXRhKTtcclxuICAgIC8vIOmAmuefpeabtOaWsOiDjOWMhVVJ5Yi35paw77ybXHJcbiAgICBHbG9iYWwuSW5zdC5FbWl0KExvY01zZy5VUERBVEVfQkFDS19QQUNLX0RBVEEsIHBsYXllckxvYWREYXRhLnJvYm90TGlzdCk7XHJcbiAgICAvLyDpgJrnn6Xmm7TmlrDor6bmg4XpobVVSeWIt+aWsO+8m1xyXG4gICAgR2xvYmFsLkluc3QuRW1pdChMb2NNc2cuVVBEQVRFX1JPQk9UX0lORk9SLCByb2JvdCwgSU5GT1JfU1RBVEUuSEFFRCk7XHJcbiAgICAvLyDpgJrnn6Xmm7TmlrDlvZPliY3kvb/nlKjlsI/kurrkv6Hmga9cclxuICAgIEdsb2JhbC5JbnN0LkVtaXQoTG9jTXNnLlVQREFURV9DVVJfUk9CT1RfSU5GT1IpO1xyXG5cclxuICAgIEdsb2JhbC5JbnN0LkVtaXQoTG9jTXNnLlNIT1dfVE9BU1QsIFwiUHVyY2hhc2Ugc3VjY2VlZGVkXCIpO1xyXG5cclxufVxyXG5cclxuLy8g5qih5ouf5L2/55So5ZKM5Y246L295py65Zmo5Lq6XHJcbmV4cG9ydCBmdW5jdGlvbiBBUElfVXNlUm9ib3Qocm9ib3Q6IElSb2JvdCkge1xyXG4gICAgbGV0IHBsYXllckxvYWREYXRhID0gRGF0YU1hbmFnZXIuSW5zdC5HZXREYXRhPElQbGF5ZXJJbmZvPihEYXRhQmFzZUtleS5QTEFZRVJfREFUQSk7XHJcbiAgICBpZiAocGxheWVyTG9hZERhdGEuY3VyUm9ib3RVc2UgJiYgcGxheWVyTG9hZERhdGEuY3VyUm9ib3RVc2UuaWQgPT09IHJvYm90LmlkKSB7XHJcbiAgICAgICAgcGxheWVyTG9hZERhdGEuY3VyUm9ib3RVc2UgPSBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwbGF5ZXJMb2FkRGF0YS5jdXJSb2JvdFVzZSA9IHJvYm90O1xyXG4gICAgfVxyXG4gICAgLy8g5pu05paw5YaF5a2Y5ZKM5pys5ZywXHJcbiAgICBEYXRhTWFuYWdlci5JbnN0LlNldERhdGE8SVBsYXllckluZm8+KERhdGFCYXNlS2V5LlBMQVlFUl9EQVRBLCBwbGF5ZXJMb2FkRGF0YSk7XHJcbiAgICBVdGlscy5TYXZlRGF0YShTYXZlRGF0YUtleS5QTEFZRVJfREFUQSwgSlNPTi5zdHJpbmdpZnkocGxheWVyTG9hZERhdGEpKTtcclxuXHJcbiAgICAvLyDpgJrnn6Xmm7TmlrDor6bmg4XpobVVSeWIt+aWsO+8m1xyXG4gICAgR2xvYmFsLkluc3QuRW1pdChMb2NNc2cuVVBEQVRFX1JPQk9UX0lORk9SLCByb2JvdCwgcGxheWVyTG9hZERhdGEuY3VyUm9ib3RVc2UgPyBJTkZPUl9TVEFURS5JU1VTRUlORyA6IElORk9SX1NUQVRFLkhBRUQpO1xyXG4gICAgLy8g6YCa55+l5pu05paw5b2T5YmN5L2/55So5bCP5Lq65L+h5oGvXHJcbiAgICBHbG9iYWwuSW5zdC5FbWl0KExvY01zZy5VUERBVEVfQ1VSX1JPQk9UX0lORk9SKTtcclxuICAgIC8vIOmAmuefpeabtOaWsOW9k+WJjeS9v+eUqOWwj+S6uuS/oeaBr1xyXG4gICAgR2xvYmFsLkluc3QuRW1pdChMb2NNc2cuVVBEQVRFX0JBQ0tfUEFDS19EQVRBLCBwbGF5ZXJMb2FkRGF0YS5yb2JvdExpc3QpO1xyXG5cclxuXHJcbn1cclxuXHJcbi8vIOaUtuWPluiDvemHj1xyXG5leHBvcnQgZnVuY3Rpb24gQVBJX0NvbGxlY3RFbmVyZ3kobnVtOiBudW1iZXIpIHtcclxuICAgIGxldCBwbGF5ZXJMb2FkRGF0YSA9IERhdGFNYW5hZ2VyLkluc3QuR2V0RGF0YTxJUGxheWVySW5mbz4oRGF0YUJhc2VLZXkuUExBWUVSX0RBVEEpO1xyXG4gICAgcGxheWVyTG9hZERhdGEuY29sbGVjdEVuZXJneUNvdW50ICs9IG51bTtcclxuICAgIC8vIOabtOaWsOWGheWtmOWSjOacrOWcsFxyXG4gICAgRGF0YU1hbmFnZXIuSW5zdC5TZXREYXRhPElQbGF5ZXJJbmZvPihEYXRhQmFzZUtleS5QTEFZRVJfREFUQSwgcGxheWVyTG9hZERhdGEpO1xyXG4gICAgVXRpbHMuU2F2ZURhdGEoU2F2ZURhdGFLZXkuUExBWUVSX0RBVEEsIEpTT04uc3RyaW5naWZ5KHBsYXllckxvYWREYXRhKSk7XHJcblxyXG5cclxuICAgIC8vIOmAmuefpeabtOaWsOaUtumbhueahOiDvemHj1xyXG4gICAgR2xvYmFsLkluc3QuRW1pdChMb2NNc2cuVVBEQVRFX0NPTExFQ1RfRU5FUkdZKTtcclxuICAgIC8vIOmAmuefpeabtOaWsOW9k+WJjeS9v+eUqOWwj+S6uuS/oeaBr1xyXG4gICAgR2xvYmFsLkluc3QuRW1pdChMb2NNc2cuVVBEQVRFX0NVUl9ST0JPVF9JTkZPUik7XHJcblxyXG5cclxufVxyXG5cclxuLy8g6IO96YeP6L2s5YyW5ri45oiPYlxyXG5leHBvcnQgZnVuY3Rpb24gQVBJX0NoYW5nZUVuZXJneVRvSGFsKCkge1xyXG5cclxuICAgIGxldCBwbGF5ZXJMb2FkRGF0YSA9IERhdGFNYW5hZ2VyLkluc3QuR2V0RGF0YTxJUGxheWVySW5mbz4oRGF0YUJhc2VLZXkuUExBWUVSX0RBVEEpO1xyXG4gICAgbGV0IG51bSA9IHBsYXllckxvYWREYXRhLmNvbGxlY3RFbmVyZ3lDb3VudDtcclxuXHJcblxyXG5cclxuICAgIGxldCBjYW5DaGFuZ2VFbmVyZ3lNYXggPSBwbGF5ZXJMb2FkRGF0YS5jYW5DaGFuZ2VFbmVyZ3lOdW1Ub3RhbCAtIHBsYXllckxvYWREYXRhLmhhZENoYW5nZUVuZXJneU51bTtcclxuICAgIGxldCBjaGFuZ2VFbmVyZ3kgPSBudW0gPiBjYW5DaGFuZ2VFbmVyZ3lNYXggPyBjYW5DaGFuZ2VFbmVyZ3lNYXggOiBudW07XHJcbiAgICAvLyDmiaPpmaTlvZPliY3og73ph49cclxuICAgIHBsYXllckxvYWREYXRhLmNvbGxlY3RFbmVyZ3lDb3VudCAtPSBjaGFuZ2VFbmVyZ3k7XHJcbiAgICAvLyDlt7LovazmjaLkv67mlLnvvJtcclxuICAgIHBsYXllckxvYWREYXRhLmhhZENoYW5nZUVuZXJneU51bSArPSBjaGFuZ2VFbmVyZ3k7XHJcblxyXG4gICAgbGV0IGRhdGEgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IHNlY29uZCA9IGRhdGEuZ2V0U2Vjb25kcygpO1xyXG4gICAgaWYgKHNlY29uZCA+IHBsYXllckxvYWREYXRhLnRpbWVSZXNlYXQpIHtcclxuICAgICAgICBwbGF5ZXJMb2FkRGF0YS50aW1lUmVzZWF0ID0gY2hhbmdlRW5lcmd5ICogNjAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwbGF5ZXJMb2FkRGF0YS50aW1lUmVzZWF0ICs9IGNoYW5nZUVuZXJneSAqIDYwMDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gMTBn6IO96YeP562J5LqOMWhhbO+8m1xyXG4gICAgcGxheWVyTG9hZERhdGEuaGFsQ291bnQgKz0gKGNoYW5nZUVuZXJneSAvIDEwKTtcclxuICAgIC8vIOabtOaWsOWGheWtmOWSjOacrOWcsFxyXG4gICAgRGF0YU1hbmFnZXIuSW5zdC5TZXREYXRhPElQbGF5ZXJJbmZvPihEYXRhQmFzZUtleS5QTEFZRVJfREFUQSwgcGxheWVyTG9hZERhdGEpO1xyXG4gICAgVXRpbHMuU2F2ZURhdGEoU2F2ZURhdGFLZXkuUExBWUVSX0RBVEEsIEpTT04uc3RyaW5naWZ5KHBsYXllckxvYWREYXRhKSk7XHJcblxyXG5cclxuICAgIC8vIOmAmuefpeabtOaWsOaUtumbhueahOiDvemHj1xyXG4gICAgR2xvYmFsLkluc3QuRW1pdChMb2NNc2cuVVBEQVRFX0NPTExFQ1RfRU5FUkdZKTtcclxuICAgIC8vIOmAmuefpeabtOaWsOaUtumbhueahOiDvemHj1xyXG4gICAgR2xvYmFsLkluc3QuRW1pdChMb2NNc2cuVVBEQVRFX0hBTF9DT1VOVCk7XHJcbiAgICAvLyDpgJrnn6Xmm7TmlrDlvZPliY3kvb/nlKjlsI/kurrkv6Hmga9cclxuICAgIEdsb2JhbC5JbnN0LkVtaXQoTG9jTXNnLlVQREFURV9DVVJfUk9CT1RfSU5GT1IpO1xyXG5cclxuICAgIEdsb2JhbC5JbnN0LkVtaXQoTG9jTXNnLlNIT1dfVE9BU1QsIGBTdWNjZXNzZnVsIGNvbnZlcnNpb24gb2YgZW5lcmd5IFxyXG4gICAgaW50byBIQUxgKTtcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS14dWVsaWFuZ1xyXG5leHBvcnQgZnVuY3Rpb24gVXBkYXRlRW5lcmd5KGVuZXJneT86IElFbmVyZ3kpIHtcclxuICAgIGxldCBlbmVyZ3lMb2FkRGF0YSA9IERhdGFNYW5hZ2VyLkluc3QuR2V0RGF0YTxJRW5lcmd5W10+KERhdGFCYXNlS2V5LkVORVJHWV9EQVRBKTtcclxuICAgIGxldCB1cGRhdGUgPSBmYWxzZTtcclxuICAgIGlmIChlbmVyZ3kpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGVuZXJneUxvYWREYXRhLmxlbmd0aDsgKyt4KSB7XHJcbiAgICAgICAgICAgIGlmIChlbmVyZ3lMb2FkRGF0YVt4XS5lbmVyZ3lUaW1lID09IGVuZXJneS5lbmVyZ3lUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICBlbmVyZ3lMb2FkRGF0YVt4XSA9IGVuZXJneTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF1cGRhdGUpIHtcclxuICAgICAgICAgICAgZW5lcmd5TG9hZERhdGEucHVzaChlbmVyZ3kpO1xyXG4gICAgICAgICAgICB1cGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IG5vd1RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gZW5lcmd5TG9hZERhdGEubGVuZ3RoIC0gMTsgeCA+PSAwOyAtLXgpIHtcclxuICAgICAgICAgICAgaWYgKG5vd1RpbWUgLSBlbmVyZ3lMb2FkRGF0YVt4XS5lbmVyZ3lUaW1lID49IE1hdHVyYXRpb25UaW1lICsgQ29sbGVjdGlvblRpbWUpIHtcclxuICAgICAgICAgICAgICAgIGVuZXJneUxvYWREYXRhLnNwbGljZSh4LCAxKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHVwZGF0ZSkge1xyXG4gICAgICAgIC8vIOabtOaWsOWGheWtmOWSjOacrOWcsFxyXG4gICAgICAgIERhdGFNYW5hZ2VyLkluc3QuU2V0RGF0YTxJRW5lcmd5W10+KERhdGFCYXNlS2V5LkVORVJHWV9EQVRBLCBlbmVyZ3lMb2FkRGF0YSk7XHJcbiAgICAgICAgVXRpbHMuU2F2ZURhdGEoU2F2ZURhdGFLZXkuRU5FUkdZX0RBVEEsIEpTT04uc3RyaW5naWZ5KGVuZXJneUxvYWREYXRhKSk7XHJcblxyXG4gICAgICAgIC8vIOmAmuefpeabtOaWsOiDvemHj+aYvuekulxyXG4gICAgICAgIEdsb2JhbC5JbnN0LkVtaXQoTG9jTXNnLlVQREFURV9FbmVyZ3lfSU5GT1IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU3RvcEVuZXJneSgpIHtcclxuICAgIGxldCBlbmVyZ3lMb2FkRGF0YSA9IERhdGFNYW5hZ2VyLkluc3QuR2V0RGF0YTxJRW5lcmd5W10+KERhdGFCYXNlS2V5LkVORVJHWV9EQVRBKTtcclxuICAgIGVuZXJneUxvYWREYXRhW2VuZXJneUxvYWREYXRhLmxlbmd0aCAtIDFdLmlzR3JvdyA9IGZhbHNlO1xyXG4gICAgZW5lcmd5TG9hZERhdGFbZW5lcmd5TG9hZERhdGEubGVuZ3RoIC0gMV0uZW5lcmd5VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgLy8gaWYgKGVuZXJneUxvYWREYXRhW2VuZXJneUxvYWREYXRhLmxlbmd0aCAtIDFdLmVuZXJneUNvdW50IDwgMTApIHtcclxuICAgIC8vICAgICBlbmVyZ3lMb2FkRGF0YS5wb3AoKTtcclxuICAgIC8vIH1cclxuICAgIC8vIOabtOaWsOWGheWtmOWSjOacrOWcsFxyXG4gICAgRGF0YU1hbmFnZXIuSW5zdC5TZXREYXRhPElFbmVyZ3lbXT4oRGF0YUJhc2VLZXkuRU5FUkdZX0RBVEEsIGVuZXJneUxvYWREYXRhKTtcclxuICAgIFV0aWxzLlNhdmVEYXRhKFNhdmVEYXRhS2V5LkVORVJHWV9EQVRBLCBKU09OLnN0cmluZ2lmeShlbmVyZ3lMb2FkRGF0YSkpO1xyXG5cclxuICAgIC8vIOmAmuefpeabtOaWsOiDvemHj+aYvuekulxyXG4gICAgR2xvYmFsLkluc3QuRW1pdChMb2NNc2cuVVBEQVRFX0VuZXJneV9JTkZPUik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEZWxldGVFbmVyZ3koZW5lcmd5OiBJRW5lcmd5KSB7XHJcbiAgICBsZXQgZW5lcmd5TG9hZERhdGEgPSBEYXRhTWFuYWdlci5JbnN0LkdldERhdGE8SUVuZXJneVtdPihEYXRhQmFzZUtleS5FTkVSR1lfREFUQSk7XHJcbiAgICBsZXQgaWR4ID0gZW5lcmd5TG9hZERhdGEuaW5kZXhPZihlbmVyZ3kpO1xyXG4gICAgaWYgKGlkeCAhPSAtMSkge1xyXG4gICAgICAgIGVuZXJneUxvYWREYXRhLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgIC8vIOabtOaWsOWGheWtmOWSjOacrOWcsFxyXG4gICAgICAgIERhdGFNYW5hZ2VyLkluc3QuU2V0RGF0YTxJRW5lcmd5W10+KERhdGFCYXNlS2V5LkVORVJHWV9EQVRBLCBlbmVyZ3lMb2FkRGF0YSk7XHJcbiAgICAgICAgVXRpbHMuU2F2ZURhdGEoU2F2ZURhdGFLZXkuRU5FUkdZX0RBVEEsIEpTT04uc3RyaW5naWZ5KGVuZXJneUxvYWREYXRhKSk7XHJcblxyXG4gICAgICAgIC8vIOmAmuefpeabtOaWsOiDvemHj+aYvuekulxyXG4gICAgICAgIEdsb2JhbC5JbnN0LkVtaXQoTG9jTXNnLlVQREFURV9FbmVyZ3lfSU5GT1IpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BaseModel/MsgEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3cd1JYg2VCYKaVbTtYPT5I', 'MsgEvent');
// Script/BaseModel/MsgEvent.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocMsg = void 0;
var LocMsg;
(function (LocMsg) {
    // 展示详情页；
    LocMsg[LocMsg["SHOW_ROBOT_INFOR"] = 0] = "SHOW_ROBOT_INFOR";
    // 更新Matic个数；
    LocMsg[LocMsg["UPDATE_MARIC_NUM"] = 1] = "UPDATE_MARIC_NUM";
    // 更新商城数据；
    LocMsg[LocMsg["UPDATE_SHOP_DATA"] = 2] = "UPDATE_SHOP_DATA";
    // 更新背包数据；
    LocMsg[LocMsg["UPDATE_BACK_PACK_DATA"] = 3] = "UPDATE_BACK_PACK_DATA";
    // 更新详情页；
    LocMsg[LocMsg["UPDATE_ROBOT_INFOR"] = 4] = "UPDATE_ROBOT_INFOR";
    // 更新当前使用小人；
    LocMsg[LocMsg["UPDATE_CUR_ROBOT_INFOR"] = 5] = "UPDATE_CUR_ROBOT_INFOR";
    // update energy info
    LocMsg[LocMsg["UPDATE_Energy_INFOR"] = 6] = "UPDATE_Energy_INFOR";
    LocMsg[LocMsg["SHOW_FRIEND_Energy_INFOR"] = 7] = "SHOW_FRIEND_Energy_INFOR";
    // 更新收集的能量；
    LocMsg[LocMsg["UPDATE_COLLECT_ENERGY"] = 8] = "UPDATE_COLLECT_ENERGY";
    // 更新hal；
    LocMsg[LocMsg["UPDATE_HAL_COUNT"] = 9] = "UPDATE_HAL_COUNT";
    // 切换组别 ；
    LocMsg[LocMsg["CHANGE_GROUP_BY_INDEX"] = 10] = "CHANGE_GROUP_BY_INDEX";
    //展示toast
    LocMsg[LocMsg["SHOW_TOAST"] = 11] = "SHOW_TOAST";
})(LocMsg = exports.LocMsg || (exports.LocMsg = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlTW9kZWxcXE1zZ0V2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksTUEwQlg7QUExQkQsV0FBWSxNQUFNO0lBQ2QsU0FBUztJQUNULDJEQUFnQixDQUFBO0lBQ2hCLGFBQWE7SUFDYiwyREFBZ0IsQ0FBQTtJQUNoQixVQUFVO0lBQ1YsMkRBQWdCLENBQUE7SUFDaEIsVUFBVTtJQUNWLHFFQUFxQixDQUFBO0lBQ3JCLFNBQVM7SUFDVCwrREFBa0IsQ0FBQTtJQUNsQixZQUFZO0lBQ1osdUVBQXNCLENBQUE7SUFDdEIscUJBQXFCO0lBQ3JCLGlFQUFtQixDQUFBO0lBQ25CLDJFQUF3QixDQUFBO0lBQ3hCLFdBQVc7SUFDWCxxRUFBcUIsQ0FBQTtJQUNyQixTQUFTO0lBQ1QsMkRBQWdCLENBQUE7SUFDaEIsU0FBUztJQUNULHNFQUFxQixDQUFBO0lBRXJCLFNBQVM7SUFDVCxnREFBVSxDQUFBO0FBRWQsQ0FBQyxFQTFCVyxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUEwQmpCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gTG9jTXNnIHtcclxuICAgIC8vIOWxleekuuivpuaDhemhte+8m1xyXG4gICAgU0hPV19ST0JPVF9JTkZPUixcclxuICAgIC8vIOabtOaWsE1hdGlj5Liq5pWw77ybXHJcbiAgICBVUERBVEVfTUFSSUNfTlVNLFxyXG4gICAgLy8g5pu05paw5ZWG5Z+O5pWw5o2u77ybXHJcbiAgICBVUERBVEVfU0hPUF9EQVRBLFxyXG4gICAgLy8g5pu05paw6IOM5YyF5pWw5o2u77ybXHJcbiAgICBVUERBVEVfQkFDS19QQUNLX0RBVEEsXHJcbiAgICAvLyDmm7TmlrDor6bmg4XpobXvvJtcclxuICAgIFVQREFURV9ST0JPVF9JTkZPUixcclxuICAgIC8vIOabtOaWsOW9k+WJjeS9v+eUqOWwj+S6uu+8m1xyXG4gICAgVVBEQVRFX0NVUl9ST0JPVF9JTkZPUixcclxuICAgIC8vIHVwZGF0ZSBlbmVyZ3kgaW5mb1xyXG4gICAgVVBEQVRFX0VuZXJneV9JTkZPUixcclxuICAgIFNIT1dfRlJJRU5EX0VuZXJneV9JTkZPUixcclxuICAgIC8vIOabtOaWsOaUtumbhueahOiDvemHj++8m1xyXG4gICAgVVBEQVRFX0NPTExFQ1RfRU5FUkdZLFxyXG4gICAgLy8g5pu05pawaGFs77ybXHJcbiAgICBVUERBVEVfSEFMX0NPVU5ULFxyXG4gICAgLy8g5YiH5o2i57uE5YirIO+8m1xyXG4gICAgQ0hBTkdFX0dST1VQX0JZX0lOREVYLFxyXG5cclxuICAgIC8v5bGV56S6dG9hc3RcclxuICAgIFNIT1dfVE9BU1QsXHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Loading/Loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b6a86NmlYBBHq6okc9yDKTD', 'Loading');
// Script/Loading/Loading.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadingTime = 1;
        _this.time = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        this.time += dt;
        if (this.time >= this.loadingTime) {
            cc.director.loadScene("Main");
        }
    };
    __decorate([
        property
    ], NewClass.prototype, "loadingTime", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxMb2FkaW5nXFxMb2FkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcUJDO1FBbEJHLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRWhCLFVBQUksR0FBRyxDQUFDLENBQUM7O0lBZ0JyQixDQUFDO0lBZEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDaEIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUM7WUFDOUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBakJEO1FBREMsUUFBUTtpREFDZTtJQUhQLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FxQjVCO0lBQUQsZUFBQztDQXJCRCxBQXFCQyxDQXJCcUMsRUFBRSxDQUFDLFNBQVMsR0FxQmpEO2tCQXJCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbG9hZGluZ1RpbWU6IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lID0gMDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICB0aGlzLnRpbWUgKz0gZHQ7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZSA+PSB0aGlzLmxvYWRpbmdUaW1lKXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/PlayerProp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd34faHOrGhKvqLEjEqERjAx', 'PlayerProp');
// Script/Model/PlayerProp.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultPlayerInfo = void 0;
var RobotProp_1 = require("./RobotProp");
function DefaultPlayerInfo() {
    var data = {
        id: 0,
        name: "Call-E",
        robotList: [],
        curRobotUse: null,
        maticCount: 9999,
        halCount: 10,
        aceCount: 20,
        collectEnergyCount: 5,
        hadChangeEnergyNum: 0,
        canChangeEnergyNumTotal: 0,
        friendList: [],
        timeReseat: 0
    };
    for (var index = 0; index < 20; index++) {
        var robotType = index % RobotProp_1.RobotTypeCount;
        var friend = {
            id: index,
            iconId: Math.floor(Math.random() * 4),
            name: "A-CallE-" + index,
            curRobotUse: {
                id: Math.ceil(Math.random() * 1000000) + 5000000,
                robotImgId: index % RobotProp_1.RobotTypeCount,
                mint: index,
                maticCost: index,
                level: index,
                robotType: robotType,
                efficiency: Math.ceil(Math.random() * 10),
                luck: Math.ceil(Math.random() * 10),
                pow: Math.ceil(Math.random() * 10),
                intMin: [1, 3, 5, 7][robotType],
                intMax: [3, 5, 7, 10][robotType],
            }
            // TODO 能量
            ,
            totalCreatEnergy: Math.floor(Math.random() * 1000) / 10
        };
        data.friendList.push(friend);
    }
    return data;
}
exports.DefaultPlayerInfo = DefaultPlayerInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcUGxheWVyUHJvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5Q0FBcUQ7QUFpQ3JELFNBQWdCLGlCQUFpQjtJQUM3QixJQUFJLElBQUksR0FBZ0I7UUFDcEIsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsUUFBUTtRQUNkLFNBQVMsRUFBRSxFQUFFO1FBQ2IsV0FBVyxFQUFFLElBQUk7UUFDakIsVUFBVSxFQUFFLElBQUk7UUFDaEIsUUFBUSxFQUFFLEVBQUU7UUFDWixRQUFRLEVBQUUsRUFBRTtRQUNaLGtCQUFrQixFQUFFLENBQUM7UUFDckIsa0JBQWtCLEVBQUUsQ0FBQztRQUNyQix1QkFBdUIsRUFBRSxDQUFDO1FBQzFCLFVBQVUsRUFBRSxFQUFFO1FBQ2QsVUFBVSxFQUFFLENBQUM7S0FDaEIsQ0FBQTtJQUVELEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDckMsSUFBSSxTQUFTLEdBQUcsS0FBSyxHQUFHLDBCQUFjLENBQUM7UUFDdkMsSUFBSSxNQUFNLEdBQVk7WUFDbEIsRUFBRSxFQUFFLEtBQUs7WUFDVCxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3JDLElBQUksRUFBRSxVQUFVLEdBQUcsS0FBSztZQUN4QixXQUFXLEVBQUU7Z0JBQ1QsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLE9BQU87Z0JBQ2hELFVBQVUsRUFBRSxLQUFLLEdBQUcsMEJBQWM7Z0JBQ2xDLElBQUksRUFBRSxLQUFLO2dCQUNYLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixLQUFLLEVBQUUsS0FBSztnQkFDWixTQUFTLEVBQUUsU0FBUztnQkFDcEIsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztnQkFDekMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztnQkFDbkMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztnQkFDbEMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUMvQixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUM7YUFDbkM7WUFDRCxVQUFVOztZQUVWLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUU7U0FDMUQsQ0FBQTtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBRWhDO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQTNDRCw4Q0EyQ0MiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRnJpZW5kIH0gZnJvbSBcIi4vRnJpZW5kUHJvcFwiO1xyXG5pbXBvcnQgeyBJUm9ib3QsIFJvYm90VHlwZUNvdW50IH0gZnJvbSBcIi4vUm9ib3RQcm9wXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQbGF5ZXJJbmZvIHtcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAvL+aLpeacieeahOacuuWZqOS6ulxyXG4gICAgcm9ib3RMaXN0OiBJUm9ib3RbXSxcclxuICAgIC8v5b2T5YmN6KOF5omu55qE5py65Zmo5Lq6XHJcbiAgICBjdXJSb2JvdFVzZTogSVJvYm90O1xyXG4gICAgLy8g56ys5LiJ5pa56LSn5biBXHJcbiAgICBtYXRpY0NvdW50OiBudW1iZXIsXHJcbiAgICAvLyDmuLjmiI/ku6PluIFcclxuICAgIGhhbENvdW50OiBudW1iZXIsXHJcbiAgICBhY2VDb3VudDogbnVtYmVyLFxyXG5cclxuICAgIC8vIOaUtumbhuiDvemHj+aVsFxyXG4gICAgY29sbGVjdEVuZXJneUNvdW50OiBudW1iZXIsXHJcbiAgICAvLyDlt7Lnu4/nlKjmjonnmoTovazmjaLmlbBcclxuICAgIGhhZENoYW5nZUVuZXJneU51bTogbnVtYmVyLFxyXG4gICAgLy8g5oC75YWx5Y+v5Lul6L2s5YyW5pWwXHJcbiAgICBjYW5DaGFuZ2VFbmVyZ3lOdW1Ub3RhbDogbnVtYmVyLFxyXG5cclxuXHJcbiAgICAvLyDlpb3lj4tcclxuICAgIGZyaWVuZExpc3Q6IElGcmllbmRbXSxcclxuXHJcblxyXG5cclxuICAgIC8vVE9ET++8n++8n++8n++8n++8n+iDvemHj1xyXG5cclxuICAgIHRpbWVSZXNlYXQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERlZmF1bHRQbGF5ZXJJbmZvKCk6IElQbGF5ZXJJbmZvIHtcclxuICAgIGxldCBkYXRhOiBJUGxheWVySW5mbyA9IHtcclxuICAgICAgICBpZDogMCxcclxuICAgICAgICBuYW1lOiBcIkNhbGwtRVwiLFxyXG4gICAgICAgIHJvYm90TGlzdDogW10sXHJcbiAgICAgICAgY3VyUm9ib3RVc2U6IG51bGwsXHJcbiAgICAgICAgbWF0aWNDb3VudDogOTk5OSxcclxuICAgICAgICBoYWxDb3VudDogMTAsXHJcbiAgICAgICAgYWNlQ291bnQ6IDIwLFxyXG4gICAgICAgIGNvbGxlY3RFbmVyZ3lDb3VudDogNSxcclxuICAgICAgICBoYWRDaGFuZ2VFbmVyZ3lOdW06IDAsXHJcbiAgICAgICAgY2FuQ2hhbmdlRW5lcmd5TnVtVG90YWw6IDAsXHJcbiAgICAgICAgZnJpZW5kTGlzdDogW10sXHJcbiAgICAgICAgdGltZVJlc2VhdDogMFxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyMDsgaW5kZXgrKykge1xyXG4gICAgICAgIGxldCByb2JvdFR5cGUgPSBpbmRleCAlIFJvYm90VHlwZUNvdW50O1xyXG4gICAgICAgIGxldCBmcmllbmQ6IElGcmllbmQgPSB7XHJcbiAgICAgICAgICAgIGlkOiBpbmRleCxcclxuICAgICAgICAgICAgaWNvbklkOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSxcclxuICAgICAgICAgICAgbmFtZTogXCJBLUNhbGxFLVwiICsgaW5kZXgsXHJcbiAgICAgICAgICAgIGN1clJvYm90VXNlOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKSArIDUwMDAwMDAsXHJcbiAgICAgICAgICAgICAgICByb2JvdEltZ0lkOiBpbmRleCAlIFJvYm90VHlwZUNvdW50LFxyXG4gICAgICAgICAgICAgICAgbWludDogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBtYXRpY0Nvc3Q6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgbGV2ZWw6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgcm9ib3RUeXBlOiByb2JvdFR5cGUsXHJcbiAgICAgICAgICAgICAgICBlZmZpY2llbmN5OiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwKSxcclxuICAgICAgICAgICAgICAgIGx1Y2s6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTApLFxyXG4gICAgICAgICAgICAgICAgcG93OiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwKSxcclxuICAgICAgICAgICAgICAgIGludE1pbjogWzEsIDMsIDUsIDddW3JvYm90VHlwZV0sXHJcbiAgICAgICAgICAgICAgICBpbnRNYXg6IFszLCA1LCA3LCAxMF1bcm9ib3RUeXBlXSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBUT0RPIOiDvemHj1xyXG4gICAgICAgICAgICAsXHJcbiAgICAgICAgICAgIHRvdGFsQ3JlYXRFbmVyZ3k6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApIC8gMTBcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YS5mcmllbmRMaXN0LnB1c2goZnJpZW5kKTtcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YTtcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/App/Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49f66cFvOBMd7WxxjR9OfUS', 'Global');
// Script/App/Global.ts

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
var Types_1 = require("../BaseModel/Types");
var DataManager_1 = require("../Manager/DataManager");
var PlayerProp_1 = require("../Model/PlayerProp");
var RobotProp_1 = require("../Model/RobotProp");
var Utils_1 = require("../Utils/Utils");
var EnergyProp_1 = require("../Energy/EnergyProp");
var LocalDataAPI_1 = require("../Utils/LocalDataAPI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Global = /** @class */ (function (_super) {
    __extends(Global, _super);
    function Global() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Global_1 = Global;
    Object.defineProperty(Global, "Inst", {
        get: function () {
            return this._inst;
        },
        enumerable: false,
        configurable: true
    });
    Global.prototype.onLoad = function () {
        Global_1._inst = this;
        this._InitLocalData();
    };
    Global.prototype.Emit = function (event, arg1, arg2, arg3, arg4, arg5) {
        this.node.emit(event.toString(), arg1, arg2, arg3, arg4, arg5);
    };
    Global.prototype.On = function (event, callback, target, useCapture) {
        this.node.on(event.toString(), callback, target, useCapture);
    };
    Global.prototype.Once = function (event, callback, target, useCapture) {
        this.node.once(event.toString(), callback, target, useCapture);
    };
    Global.prototype.Off = function (event, callback, target, useCapture) {
        this.node.off(event.toString(), callback, target, useCapture);
    };
    // update (dt) {}
    Global.prototype._InitLocalData = function () {
        // 个人数据
        var playerLoadData = Utils_1.default.LoadData(Types_1.SaveDataKey.PLAYER_DATA);
        if (!playerLoadData) {
            var player = PlayerProp_1.DefaultPlayerInfo();
            DataManager_1.default.Inst.SetData(Types_1.DataBaseKey.PLAYER_DATA, player);
            Utils_1.default.SaveData(Types_1.SaveDataKey.PLAYER_DATA, JSON.stringify(player));
        }
        else {
            var player = JSON.parse(playerLoadData);
            DataManager_1.default.Inst.SetData(Types_1.DataBaseKey.PLAYER_DATA, player);
        }
        // 商城数据
        var shopLoadData = Utils_1.default.LoadData(Types_1.SaveDataKey.SHOP_DATA);
        if (!shopLoadData) {
            var shops = RobotProp_1.DefaultShopInfo();
            DataManager_1.default.Inst.SetData(Types_1.DataBaseKey.SHOP_DATA, shops);
            Utils_1.default.SaveData(Types_1.SaveDataKey.SHOP_DATA, JSON.stringify(shops));
        }
        else {
            var shop = JSON.parse(shopLoadData);
            DataManager_1.default.Inst.SetData(Types_1.DataBaseKey.SHOP_DATA, shop);
        }
        // energy data
        Utils_1.default.RemoveSaveData(Types_1.SaveDataKey.ENERGY_DATA);
        var energyLoadData = Utils_1.default.LoadData(Types_1.SaveDataKey.ENERGY_DATA);
        if (!energyLoadData) {
            var energy = EnergyProp_1.DefaultEnergyInfo();
            DataManager_1.default.Inst.SetData(Types_1.DataBaseKey.ENERGY_DATA, energy);
            Utils_1.default.SaveData(Types_1.SaveDataKey.ENERGY_DATA, JSON.stringify(energy));
        }
        else {
            var energy = JSON.parse(energyLoadData);
            DataManager_1.default.Inst.SetData(Types_1.DataBaseKey.ENERGY_DATA, energy);
        }
        LocalDataAPI_1.UpdateEnergy();
    };
    var Global_1;
    Global._inst = null;
    Global = Global_1 = __decorate([
        ccclass
    ], Global);
    return Global;
}(cc.Component));
exports.default = Global;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBcHBcXEdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSw0Q0FBOEQ7QUFDOUQsc0RBQWlEO0FBQ2pELGtEQUFxRTtBQUNyRSxnREFBNkQ7QUFDN0Qsd0NBQW1DO0FBQ25DLG1EQUErRTtBQUMvRSxzREFBbUQ7QUFFN0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7O0lBaUVBLENBQUM7ZUFqRW9CLE1BQU07SUFHdkIsc0JBQWtCLGNBQUk7YUFBdEI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFFRCx1QkFBTSxHQUFOO1FBQ0ksUUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxxQkFBSSxHQUFKLFVBQUssS0FBc0IsRUFBRSxJQUFVLEVBQUUsSUFBVSxFQUFFLElBQVUsRUFBRSxJQUFVLEVBQUUsSUFBVTtRQUNuRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxtQkFBRSxHQUFGLFVBQUcsS0FBc0IsRUFBRSxRQUFrQixFQUFFLE1BQVksRUFBRSxVQUFvQjtRQUM3RSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQscUJBQUksR0FBSixVQUFLLEtBQXNCLEVBQUUsUUFBa0IsRUFB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RTFCO0lBQUQsYUFBQztDQWpFRCxBQWlFQyxDQWpFbUMsRUFBRSxDQUFDLFNBQVMsR0FpRS9DO2tCQWpFb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY01zZyB9IGZyb20gXCIuLi9CYXNlTW9kZWwvTXNnRXZlbnRcIjtcbmltcG9ydCB7IERhdGFCYXNlS2V5LCBTYXZlRGF0YUtleSB9IGZyb20gXCIuLi9CYXNlTW9kZWwvVHlwZXNcIjtcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IHsgRGVmYXVsdFBsYXllckluZm8sIElQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL01vZGVsL1BsYXllclByb3BcIjtcbmltcG9ydCB7IERlZmF1bHRTaG9wSW5mbywgSVJvYm90IH0gZnJvbSBcIi4uL01vZGVsL1JvYm90UHJvcFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9VdGlscy9VdGlsc1wiO1xuaW1wb3J0IHtEZWZhdWx0RW5lcmd5SW5mbywgSUVuZXJneSwgTWFrZU5ld0VuZXJneX0gZnJvbSBcIi4uL0VuZXJneS9FbmVyZ3lQcm9wXCI7XG5pbXBvcnQge1VwZGF0ZUVuZXJneX0gZnJvbSBcIi4uL1V0aWxzL0xvY2FsRGF0YUFQSVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xvYmFsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0OiBHbG9iYWwgPSBudWxsO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEluc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0O1xuICAgIH1cblxuICAgIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgR2xvYmFsLl9pbnN0ID0gdGhpcztcbiAgICAgICAgdGhpcy5fSW5pdExvY2FsRGF0YSgpO1xuICAgIH1cbiAgICBFbWl0KGV2ZW50OiBzdHJpbmcgfCBMb2NNc2csIGFyZzE/OiBhbnksIGFyZzI/OiBhbnksIGFyZzM/OiBhbnksIGFyZzQ/OiBhbnksIGFyZzU/OiBhbnkpIHtcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoZXZlbnQudG9TdHJpbmcoKSwgYXJnMSwgYXJnMiwgYXJnMywgYXJnNCwgYXJnNSk7XG4gICAgfVxuXG4gICAgT24oZXZlbnQ6IHN0cmluZyB8IExvY01zZywgY2FsbGJhY2s6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnksIHVzZUNhcHR1cmU/OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbihldmVudC50b1N0cmluZygpLCBjYWxsYmFjaywgdGFyZ2V0LCB1c2VDYXB0dXJlKTtcbiAgICB9XG5cbiAgICBPbmNlKGV2ZW50OiBzdHJpbmcgfCBMb2NNc2csIGNhbGxiYWNrOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55LCB1c2VDYXB0dXJlPzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLm5vZGUub25jZShldmVudC50b1N0cmluZygpLCBjYWxsYmFjaywgdGFyZ2V0LCB1c2VDYXB0dXJlKTtcbiAgICB9XG5cbiAgICBPZmYoZXZlbnQ6IHN0cmluZyB8IExvY01zZywgY2FsbGJhY2s/OiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55LCB1c2VDYXB0dXJlPzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLm5vZGUub2ZmKGV2ZW50LnRvU3RyaW5nKCksIGNhbGxiYWNrLCB0YXJnZXQsIHVzZUNhcHR1cmUpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG4gICAgcHJpdmF0ZSBfSW5pdExvY2FsRGF0YSgpIHtcblxuICAgICAgICAvLyDkuKrkurrmlbDmja5cbiAgICAgICAgbGV0IHBsYXllckxvYWREYXRhID0gVXRpbHMuTG9hZERhdGEoU2F2ZURhdGFLZXkuUExBWUVSX0RBVEEpO1xuICAgICAgICBpZiAoIXBsYXllckxvYWREYXRhKSB7XG4gICAgICAgICAgICBsZXQgcGxheWVyID0gRGVmYXVsdFBsYXllckluZm8oKTtcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLkluc3QuU2V0RGF0YTxJUGxheWVySW5mbz4oRGF0YUJhc2VLZXkuUExBWUVSX0RBVEEsIHBsYXllcik7XG4gICAgICAgICAgICBVdGlscy5TYXZlRGF0YShTYXZlRGF0YUtleS5QTEFZRVJfREFUQSwgSlNPTi5zdHJpbmdpZnkocGxheWVyKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBwbGF5ZXIgPSBKU09OLnBhcnNlKHBsYXllckxvYWREYXRhKSBhcyBJUGxheWVySW5mbztcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLkluc3QuU2V0RGF0YTxJUGxheWVySW5mbz4oRGF0YUJhc2VLZXkuUExBWUVSX0RBVEEsIHBsYXllcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDllYbln47mlbDmja5cbiAgICAgICAgbGV0IHNob3BMb2FkRGF0YSA9IFV0aWxzLkxvYWREYXRhKFNhdmVEYXRhS2V5LlNIT1BfREFUQSk7XG4gICAgICAgIGlmICghc2hvcExvYWREYXRhKSB7XG4gICAgICAgICAgICBsZXQgc2hvcHMgPSBEZWZhdWx0U2hvcEluZm8oKTtcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLkluc3QuU2V0RGF0YTxJUm9ib3RbXT4oRGF0YUJhc2VLZXkuU0hPUF9EQVRBLCBzaG9wcyk7XG4gICAgICAgICAgICBVdGlscy5TYXZlRGF0YShTYXZlRGF0YUtleS5TSE9QX0RBVEEsIEpTT04uc3RyaW5naWZ5KHNob3BzKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzaG9wID0gSlNPTi5wYXJzZShzaG9wTG9hZERhdGEpIGFzIElSb2JvdFtdO1xuICAgICAgICAgICAgRGF0YU1hbmFnZXIuSW5zdC5TZXREYXRhPElSb2JvdFtdPihEYXRhQmFzZUtleS5TSE9QX0RBVEEsIHNob3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZW5lcmd5IGRhdGFcbiAgICAgICAgVXRpbHMuUmVtb3ZlU2F2ZURhdGEoU2F2ZURhdGFLZXkuRU5FUkdZX0RBVEEpO1xuICAgICAgICBsZXQgZW5lcmd5TG9hZERhdGEgPSBVdGlscy5Mb2FkRGF0YShTYXZlRGF0YUtleS5FTkVSR1lfREFUQSk7XG4gICAgICAgIGlmICghZW5lcmd5TG9hZERhdGEpIHtcbiAgICAgICAgICAgIGxldCBlbmVyZ3kgPSBEZWZhdWx0RW5lcmd5SW5mbygpO1xuICAgICAgICAgICAgRGF0YU1hbmFnZXIuSW5zdC5TZXREYXRhPElFbmVyZ3lbXT4oRGF0YUJhc2VLZXkuRU5FUkdZX0RBVEEsIGVuZXJneSk7XG4gICAgICAgICAgICBVdGlscy5TYXZlRGF0YShTYXZlRGF0YUtleS5FTkVSR1lfREFUQSwgSlNPTi5zdHJpbmdpZnkoZW5lcmd5KSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBlbmVyZ3kgPSBKU09OLnBhcnNlKGVuZXJneUxvYWREYXRhKSBhcyBJRW5lcmd5W107XG4gICAgICAgICAgICBEYXRhTWFuYWdlci5JbnN0LlNldERhdGE8SUVuZXJneVtdPihEYXRhQmFzZUtleS5FTkVSR1lfREFUQSwgZW5lcmd5KTtcbiAgICAgICAgfVxuICAgICAgICBVcGRhdGVFbmVyZ3koKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/DataManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c7ee2uo2y9FFoFwnxZY/SFw', 'DataManager');
// Script/Manager/DataManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**本地数据库管理，所有数据都要加上cache 字段，用来判断是否为脏数据 */
var DataManager = /** @class */ (function () {
    function DataManager() {
        this._dataBase = null;
        this._dataBase = new Map();
    }
    Object.defineProperty(DataManager, "Inst", {
        get: function () {
            if (DataManager._inst == null)
                DataManager._inst = new DataManager();
            return DataManager._inst;
        },
        enumerable: false,
        configurable: true
    });
    DataManager.prototype.SetData = function (key, data) {
        this._dataBase.set(key, data);
    };
    DataManager.prototype.GetData = function (key) {
        if (!this._dataBase.has(key)) {
            throw Error(key + " not exist in database, please confirm");
        }
        return this._dataBase.get(key);
    };
    DataManager.prototype.HasData = function (key) {
        return this._dataBase.has(key) && this._dataBase.get(key) != undefined;
    };
    DataManager.prototype.DeleteData = function (key) {
        this._dataBase.delete(key);
    };
    DataManager._inst = null;
    return DataManager;
}());
exports.default = DataManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxEYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlDQUF5QztBQUN6QztJQStCSTtRQTNCUSxjQUFTLEdBQXFCLElBQUksQ0FBQztRQTRCdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztJQUMvQyxDQUFDO0lBM0JELHNCQUFXLG1CQUFJO2FBQWY7WUFDSSxJQUFJLFdBQVcsQ0FBQyxLQUFLLElBQUksSUFBSTtnQkFDekIsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQzFDLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUVELDZCQUFPLEdBQVAsVUFBVyxHQUFXLEVBQUUsSUFBTztRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBVyxHQUFXO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMxQixNQUFNLEtBQUssQ0FBSSxHQUFHLDJDQUF3QyxDQUFDLENBQUM7U0FDL0Q7UUFDRCxPQUFVLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsR0FBVztRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksU0FBUyxDQUFDO0lBQzNFLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsR0FBVztRQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBM0JjLGlCQUFLLEdBQWdCLElBQUksQ0FBQztJQWdDN0Msa0JBQUM7Q0FsQ0QsQUFrQ0MsSUFBQTtrQkFsQ29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKuacrOWcsOaVsOaNruW6k+euoeeQhu+8jOaJgOacieaVsOaNrumDveimgeWKoOS4imNhY2hlIOWtl+aute+8jOeUqOadpeWIpOaWreaYr+WQpuS4uuiEj+aVsOaNriAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YU1hbmFnZXIge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3Q6IERhdGFNYW5hZ2VyID0gbnVsbDtcblxuICAgIHByaXZhdGUgX2RhdGFCYXNlOiBNYXA8bnVtYmVyLCBhbnk+ID0gbnVsbDtcblxuICAgIHN0YXRpYyBnZXQgSW5zdCgpIHtcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLl9pbnN0ID09IG51bGwpXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5faW5zdCA9IG5ldyBEYXRhTWFuYWdlcigpO1xuICAgICAgICByZXR1cm4gRGF0YU1hbmFnZXIuX2luc3Q7XG4gICAgfVxuXG4gICAgU2V0RGF0YTxUPihrZXk6IG51bWJlciwgZGF0YTogVCkge1xuICAgICAgICB0aGlzLl9kYXRhQmFzZS5zZXQoa2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICBHZXREYXRhPFQ+KGtleTogbnVtYmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5fZGF0YUJhc2UuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGAke2tleX0gbm90IGV4aXN0IGluIGRhdGFiYXNlLCBwbGVhc2UgY29uZmlybWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8VD50aGlzLl9kYXRhQmFzZS5nZXQoa2V5KTtcbiAgICB9XG5cbiAgICBIYXNEYXRhKGtleTogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhQmFzZS5oYXMoa2V5KSAmJiB0aGlzLl9kYXRhQmFzZS5nZXQoa2V5KSAhPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgRGVsZXRlRGF0YShrZXk6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9kYXRhQmFzZS5kZWxldGUoa2V5KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9kYXRhQmFzZSA9IG5ldyBNYXA8bnVtYmVyLCBvYmplY3Q+KCk7XG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BaseModel/DataHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3551cozq9JN6U3jjpgh3VP', 'DataHelper');
// Script/BaseModel/DataHelper.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataHelper = /** @class */ (function () {
    function DataHelper() {
    }
    DataHelper.DefaultPlayerInfo = function () {
        var IPlayerInfo = {};
        return;
    };
    return DataHelper;
}());
exports.default = DataHelper;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlTW9kZWxcXERhdGFIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBU0EsQ0FBQztJQU5VLDRCQUFpQixHQUF4QjtRQUNJLElBQUksV0FBVyxHQUFHLEVBRWpCLENBQUE7UUFDRCxPQUFNO0lBQ1YsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhSGVscGVyIHtcbiAgICBJUGxheWVySW5mb1xuXG4gICAgc3RhdGljIERlZmF1bHRQbGF5ZXJJbmZvKCkge1xuICAgICAgICBsZXQgSVBsYXllckluZm8gPSB7XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Energy/EnergyProp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0173fIOXtNGeacLuF/i4dQH', 'EnergyProp');
// Script/Energy/EnergyProp.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultEnergyInfo = exports.MakeNewEnergy = exports.EnergyType = exports.EnergyTypeCount = exports.CollectionTime = exports.MaturationTime = exports.EnergyShowCount = void 0;
exports.EnergyShowCount = 5;
exports.MaturationTime = 5 * 60 * 1000;
exports.CollectionTime = 30 * 60 * 1000;
// 4
exports.EnergyTypeCount = 4;
var EnergyType;
(function (EnergyType) {
    EnergyType[EnergyType["TYPE_1"] = 0] = "TYPE_1";
    EnergyType[EnergyType["TYPE_2"] = 1] = "TYPE_2";
    EnergyType[EnergyType["TYPE_3"] = 2] = "TYPE_3";
    EnergyType[EnergyType["TYPE_4"] = 3] = "TYPE_4";
})(EnergyType = exports.EnergyType || (exports.EnergyType = {}));
function MakeNewEnergy(idx, type, time, count, grow, steal) {
    return {
        idx: idx,
        energyType: type,
        energyTime: time ? time : new Date().getTime(),
        energyCount: count ? count : 0,
        isGrow: grow ? grow : true,
        canSteal: steal,
    };
}
exports.MakeNewEnergy = MakeNewEnergy;
function DefaultEnergyInfo() {
    var data = [];
    for (var index = 0; index < 3; index++) {
        var energy = {
            idx: index,
            energyType: Math.floor(Math.random() * 4),
            energyTime: new Date().getTime() - index * 1000 * 300,
            energyCount: Math.ceil(Math.random() * 100 + 10),
            isGrow: false,
            canSteal: true,
        };
        data.push(energy);
        console.log("energyType: " + energy.energyType);
    }
    return data;
}
exports.DefaultEnergyInfo = DefaultEnergyInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVyZ3lcXEVuZXJneVByb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV2EsUUFBQSxlQUFlLEdBQUcsQ0FBQyxDQUFDO0FBQ3BCLFFBQUEsY0FBYyxHQUFXLENBQUMsR0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDO0FBQ25DLFFBQUEsY0FBYyxHQUFXLEVBQUUsR0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDO0FBRWpELElBQUk7QUFDUyxRQUFBLGVBQWUsR0FBRyxDQUFDLENBQUM7QUFDakMsSUFBWSxVQUtYO0FBTEQsV0FBWSxVQUFVO0lBQ2xCLCtDQUFNLENBQUE7SUFDTiwrQ0FBTSxDQUFBO0lBQ04sK0NBQU0sQ0FBQTtJQUNOLCtDQUFNLENBQUE7QUFDVixDQUFDLEVBTFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFLckI7QUFFRCxTQUFnQixhQUFhLENBQUMsR0FBVyxFQUFFLElBQWdCLEVBQUUsSUFBYSxFQUFFLEtBQWMsRUFBRSxJQUFjLEVBQUUsS0FBZTtJQUN2SCxPQUFPO1FBQ0gsR0FBRyxFQUFFLEdBQUc7UUFDUixVQUFVLEVBQUUsSUFBSTtRQUNoQixVQUFVLEVBQUUsSUFBSSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFO1FBQzdDLFdBQVcsRUFBRSxLQUFLLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDekIsUUFBUSxFQUFFLEtBQUs7S0FDbEIsQ0FBQztBQUNOLENBQUM7QUFURCxzQ0FTQztBQUVELFNBQWdCLGlCQUFpQjtJQUM3QixJQUFJLElBQUksR0FBYyxFQUFFLENBQUM7SUFFekIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNwQyxJQUFJLE1BQU0sR0FBWTtZQUNsQixHQUFHLEVBQUUsS0FBSztZQUNWLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekMsVUFBVSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxHQUFDLElBQUksR0FBQyxHQUFHO1lBQ2pELFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2hELE1BQU0sRUFBRSxLQUFLO1lBQ2IsUUFBUSxFQUFFLElBQUk7U0FDakIsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ25EO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQWhCRCw4Q0FnQkMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lSb2JvdCwgUm9ib3RUeXBlQ291bnR9IGZyb20gXCIuLi9Nb2RlbC9Sb2JvdFByb3BcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVuZXJneSB7XHJcbiAgICBpZHg6IG51bWJlcixcclxuICAgIGVuZXJneVR5cGU6IEVuZXJneVR5cGUsXHJcbiAgICBlbmVyZ3lUaW1lOiBudW1iZXIsXHJcbiAgICBlbmVyZ3lDb3VudDogbnVtYmVyLFxyXG4gICAgaXNHcm93OiBib29sZWFuLFxyXG4gICAgY2FuU3RlYWw6IGJvb2xlYW4sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFbmVyZ3lTaG93Q291bnQgPSA1O1xyXG5leHBvcnQgY29uc3QgTWF0dXJhdGlvblRpbWU6IG51bWJlciA9IDUqNjAqMTAwMDtcclxuZXhwb3J0IGNvbnN0IENvbGxlY3Rpb25UaW1lOiBudW1iZXIgPSAzMCo2MCoxMDAwO1xyXG5cclxuLy8gNFxyXG5leHBvcnQgY29uc3QgRW5lcmd5VHlwZUNvdW50ID0gNDtcclxuZXhwb3J0IGVudW0gRW5lcmd5VHlwZSB7XHJcbiAgICBUWVBFXzEsXHJcbiAgICBUWVBFXzIsXHJcbiAgICBUWVBFXzMsXHJcbiAgICBUWVBFXzQsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNYWtlTmV3RW5lcmd5KGlkeDogbnVtYmVyLCB0eXBlOiBFbmVyZ3lUeXBlLCB0aW1lPzogbnVtYmVyLCBjb3VudD86IG51bWJlciwgZ3Jvdz86IGJvb2xlYW4sIHN0ZWFsPzogYm9vbGVhbik6IElFbmVyZ3kge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpZHg6IGlkeCxcclxuICAgICAgICBlbmVyZ3lUeXBlOiB0eXBlLFxyXG4gICAgICAgIGVuZXJneVRpbWU6IHRpbWU/IHRpbWUgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuICAgICAgICBlbmVyZ3lDb3VudDogY291bnQ/IGNvdW50IDogMCxcclxuICAgICAgICBpc0dyb3c6IGdyb3c/IGdyb3cgOiB0cnVlLFxyXG4gICAgICAgIGNhblN0ZWFsOiBzdGVhbCxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEZWZhdWx0RW5lcmd5SW5mbygpOiBJRW5lcmd5W10ge1xyXG4gICAgbGV0IGRhdGE6IElFbmVyZ3lbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAzOyBpbmRleCsrKSB7XHJcbiAgICAgICAgbGV0IGVuZXJneTogSUVuZXJneSA9IHtcclxuICAgICAgICAgICAgaWR4OiBpbmRleCxcclxuICAgICAgICAgICAgZW5lcmd5VHlwZTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCksXHJcbiAgICAgICAgICAgIGVuZXJneVRpbWU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gaW5kZXgqMTAwMCozMDAsXHJcbiAgICAgICAgICAgIGVuZXJneUNvdW50OiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCArIDEwKSxcclxuICAgICAgICAgICAgaXNHcm93OiBmYWxzZSxcclxuICAgICAgICAgICAgY2FuU3RlYWw6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBkYXRhLnB1c2goZW5lcmd5KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVuZXJneVR5cGU6IFwiICsgZW5lcmd5LmVuZXJneVR5cGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BaseModel/Types.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26bb93I0j5Dh48DiTuazhDf', 'Types');
// Script/BaseModel/Types.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBaseKey = exports.SaveDataKey = void 0;
var SaveDataKey;
(function (SaveDataKey) {
    SaveDataKey["SHOP_DATA"] = "shop_data";
    SaveDataKey["PLAYER_DATA"] = "player_data";
    SaveDataKey["ENERGY_DATA"] = "energy_data";
})(SaveDataKey = exports.SaveDataKey || (exports.SaveDataKey = {}));
var DataBaseKey;
(function (DataBaseKey) {
    DataBaseKey[DataBaseKey["SHOP_DATA"] = 0] = "SHOP_DATA";
    DataBaseKey[DataBaseKey["PLAYER_DATA"] = 1] = "PLAYER_DATA";
    DataBaseKey[DataBaseKey["ENERGY_DATA"] = 2] = "ENERGY_DATA";
})(DataBaseKey = exports.DataBaseKey || (exports.DataBaseKey = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlTW9kZWxcXFR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksV0FJWDtBQUpELFdBQVksV0FBVztJQUNuQixzQ0FBdUIsQ0FBQTtJQUN2QiwwQ0FBMkIsQ0FBQTtJQUMzQiwwQ0FBMkIsQ0FBQTtBQUMvQixDQUFDLEVBSlcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFJdEI7QUFDRCxJQUFZLFdBSVg7QUFKRCxXQUFZLFdBQVc7SUFDbkIsdURBQVMsQ0FBQTtJQUNULDJEQUFXLENBQUE7SUFDWCwyREFBVyxDQUFBO0FBQ2YsQ0FBQyxFQUpXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBSXRCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gU2F2ZURhdGFLZXkge1xuICAgIFNIT1BfREFUQSA9IFwic2hvcF9kYXRhXCIsXG4gICAgUExBWUVSX0RBVEEgPSBcInBsYXllcl9kYXRhXCIsXG4gICAgRU5FUkdZX0RBVEEgPSBcImVuZXJneV9kYXRhXCIsXG59XG5leHBvcnQgZW51bSBEYXRhQmFzZUtleSB7XG4gICAgU0hPUF9EQVRBLFxuICAgIFBMQVlFUl9EQVRBLFxuICAgIEVORVJHWV9EQVRBLFxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MainScene/ToastCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '565f9sXempH6ZgUbqWsDh+d', 'ToastCtrl');
// Script/MainScene/ToastCtrl.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ToastCtrl = /** @class */ (function (_super) {
    __extends(ToastCtrl, _super);
    function ToastCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nd = null;
        _this.label = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    ToastCtrl.prototype.onLoad = function () {
        Global_1.default.Inst.On(MsgEvent_1.LocMsg.SHOW_TOAST, this._ToastShow, this);
    };
    ToastCtrl.prototype._ToastShow = function (str) {
        this.nd.stopAllActions();
        this.nd.opacity = 0;
        this.label.string = str;
        this.nd.runAction(cc.sequence(cc.fadeIn(0.5), cc.delayTime(1), cc.fadeOut(0.5)));
    };
    __decorate([
        property(cc.Node)
    ], ToastCtrl.prototype, "nd", void 0);
    __decorate([
        property(cc.Label)
    ], ToastCtrl.prototype, "label", void 0);
    ToastCtrl = __decorate([
        ccclass
    ], ToastCtrl);
    return ToastCtrl;
}(cc.Component));
exports.default = ToastCtrl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluU2NlbmVcXFRvYXN0Q3RybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBbUM7QUFDbkMsa0RBQStDO0FBRXpDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBc0JDO1FBbkJHLFFBQUUsR0FBWSxJQUFJLENBQUM7UUFFbkIsV0FBSyxHQUFhLElBQUksQ0FBQzs7UUFnQnZCLGlCQUFpQjtJQUNyQixDQUFDO0lBZEcsd0JBQXdCO0lBRXhCLDBCQUFNLEdBQU47UUFDSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU8sOEJBQVUsR0FBbEIsVUFBbUIsR0FBVztRQUMxQixJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFFeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckYsQ0FBQztJQWpCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNDO0lBRW5CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ0k7SUFMTixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBc0I3QjtJQUFELGdCQUFDO0NBdEJELEFBc0JDLENBdEJzQyxFQUFFLENBQUMsU0FBUyxHQXNCbEQ7a0JBdEJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vQXBwL0dsb2JhbFwiO1xyXG5pbXBvcnQgeyBMb2NNc2cgfSBmcm9tIFwiLi4vQmFzZU1vZGVsL01zZ0V2ZW50XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9hc3RDdHJsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBHbG9iYWwuSW5zdC5PbihMb2NNc2cuU0hPV19UT0FTVCwgdGhpcy5fVG9hc3RTaG93LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9Ub2FzdFNob3coc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm5kLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5uZC5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHN0cjtcclxuXHJcbiAgICAgICAgdGhpcy5uZC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZmFkZUluKDAuNSksIGNjLmRlbGF5VGltZSgxKSwgY2MuZmFkZU91dCgwLjUpKSk7XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MainScene/GroupCtrl/FriendEnergyGroupCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fdb10lFbdtLaYVC4yGLQ5xm', 'FriendEnergyGroupCtrl');
// Script/MainScene/GroupCtrl/FriendEnergyGroupCtrl.ts

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
var EnergyProp_1 = require("../../Energy/EnergyProp");
var DataManager_1 = require("../../Manager/DataManager");
var Types_1 = require("../../BaseModel/Types");
var Global_1 = require("../../App/Global");
var MsgEvent_1 = require("../../BaseModel/MsgEvent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FriendEnergyGroupCtrl = /** @class */ (function (_super) {
    __extends(FriendEnergyGroupCtrl, _super);
    function FriendEnergyGroupCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.energyRoot = null;
        _this.energyPref = null;
        _this.startEnergyNode = null;
        _this.showEnergyInfo = [null, null, null, null, null];
        return _this;
    }
    Object.defineProperty(FriendEnergyGroupCtrl.prototype, "energy", {
        get: function () {
            return DataManager_1.default.Inst.GetData(Types_1.DataBaseKey.ENERGY_DATA);
        },
        enumerable: false,
        configurable: true
    });
    FriendEnergyGroupCtrl.prototype.onEnable = function () {
        this._UpdateEnergy();
    };
    FriendEnergyGroupCtrl.prototype._UpdateEnergy = function () {
        var energy = this.energy;
        for (var x = 0; x < this.showEnergyInfo.length; ++x) {
            if (this.showEnergyInfo[x] && energy.indexOf(this.showEnergyInfo[x]) == -1) {
                this.showEnergyInfo[x] = null;
            }
        }
        if (energy.length > 0) {
            // console.log("_UpdateEnergy:" + JSON.stringify(energy));
            for (var x = 0; x < EnergyProp_1.EnergyShowCount; ++x) {
                if (x < energy.length && energy[x].idx != this.showEnergyInfo.length - 1) {
                    if (!this.showEnergyInfo[x] || this.showEnergyInfo[x].energyTime != energy[x].energyTime) {
                        this.showEnergyInfo[x] = energy[x];
                        var energyIns = cc.instantiate(this.energyPref);
                        energyIns.getComponent("FriendEnergyItem").SetItem(energy[x]);
                        this.energyRoot.addChild(energyIns);
                        // UpdateEnergy(energy[x]);
                    }
                }
                else if (x < energy.length && energy[x].idx == this.showEnergyInfo.length - 1) {
                    for (var y = 0; y < this.showEnergyInfo.length; ++y) {
                        if (!this.showEnergyInfo[y] && this.showEnergyInfo[this.showEnergyInfo.length - 1].energyTime != energy[x].energyTime) {
                            energy[x].idx = y;
                            this.showEnergyInfo[y] = energy[x];
                            var energyIns = cc.instantiate(this.energyPref);
                            energyIns.getComponent("FriendEnergyItem").SetItem(energy[x]);
                            this.energyRoot.addChild(energyIns);
                            // UpdateEnergy(energy[x]);
                        }
                    }
                }
            }
        }
        if (this.showEnergyInfo[this.showEnergyInfo.length - 1] != null) {
            var children = this.energyRoot.children;
            console.log("childrenCount： " + children.length);
            for (var x = 0; x < children.length; ++x) {
                console.log("childrenInfo： " + children[x].getComponent("FriendEnergyItem").energyData.idx);
            }
            if (this.showEnergyInfo[this.showEnergyInfo.length - 1].isGrow) {
                for (var x = 0; x < children.length; ++x) {
                    if (children[x].getComponent("FriendEnergyItem").energyData.idx == this.showEnergyInfo.length - 1
                        && !children[x].getComponent("FriendEnergyItem").energyData.isGrow) {
                        children[x].removeFromParent();
                    }
                }
            }
            else {
                for (var x = 0; x < children.length; ++x) {
                    if (children[x].getComponent("FriendEnergyItem").energyData.idx == this.showEnergyInfo.length - 1
                        && children[x].getComponent("FriendEnergyItem").energyData.energyTime != this.showEnergyInfo[this.showEnergyInfo.length - 1].energyTime) {
                        children[x].removeFromParent();
                    }
                }
            }
            var children1 = this.energyRoot.children;
            console.log("childrenCount1： " + children1.length);
        }
    };
    FriendEnergyGroupCtrl.prototype._RemoveEnergyByEnergyTime = function (time) {
        var children = this.energyRoot.children;
        for (var x = 0; x < children.length; ++x) {
            if (children[x].getComponent("FriendEnergyItem").energyData.energyTime == time) {
                children[x].removeFromParent();
            }
        }
    };
    FriendEnergyGroupCtrl.prototype.OnClickBack = function (event, customEventData) {
        // this.node.runAction(cc.sequence(cc.moveTo(0.3, cc.v2(750, 0)), cc.callFunc(() => {
        //     // need change data
        //     // this.node.removeFromParent();
        // })));
        Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.SHOW_FRIEND_Energy_INFOR, null, 1);
    };
    __decorate([
        property(cc.Node)
    ], FriendEnergyGroupCtrl.prototype, "energyRoot", void 0);
    __decorate([
        property(cc.Prefab)
    ], FriendEnergyGroupCtrl.prototype, "energyPref", void 0);
    FriendEnergyGroupCtrl = __decorate([
        ccclass
    ], FriendEnergyGroupCtrl);
    return FriendEnergyGroupCtrl;
}(cc.Component));
exports.default = FriendEnergyGroupCtrl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluU2NlbmVcXEdyb3VwQ3RybFxcRnJpZW5kRW5lcmd5R3JvdXBDdHJsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFpRTtBQUNqRSx5REFBb0Q7QUFDcEQsK0NBQWtEO0FBRWxELDJDQUFzQztBQUN0QyxxREFBZ0Q7QUFFMUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUQseUNBQVk7SUFBL0Q7UUFBQSxxRUFnR0M7UUE3RkcsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFckIscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFDaEMsb0JBQWMsR0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzs7SUF1RnZFLENBQUM7SUFyRkcsc0JBQUkseUNBQU07YUFBVjtZQUNJLE9BQU8scUJBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFZLG1CQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEUsQ0FBQzs7O09BQUE7SUFFRCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTyw2Q0FBYSxHQUFyQjtRQUVJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFDO1lBQ2hELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENB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ZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbmVyZ3lTaG93Q291bnQsIElFbmVyZ3l9IGZyb20gXCIuLi8uLi9FbmVyZ3kvRW5lcmd5UHJvcFwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uLy4uL01hbmFnZXIvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IHtEYXRhQmFzZUtleX0gZnJvbSBcIi4uLy4uL0Jhc2VNb2RlbC9UeXBlc1wiO1xyXG5pbXBvcnQge1N0b3BFbmVyZ3ksIFVwZGF0ZUVuZXJneX0gZnJvbSBcIi4uLy4uL1V0aWxzL0xvY2FsRGF0YUFQSVwiO1xyXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi9BcHAvR2xvYmFsXCI7XHJcbmltcG9ydCB7TG9jTXNnfSBmcm9tIFwiLi4vLi4vQmFzZU1vZGVsL01zZ0V2ZW50XCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZEVuZXJneUdyb3VwQ3RybCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlbmVyZ3lSb290OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZW5lcmd5UHJlZjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXJ0RW5lcmd5Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNob3dFbmVyZ3lJbmZvOiBJRW5lcmd5W10gPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XHJcblxyXG4gICAgZ2V0IGVuZXJneSgpIHtcclxuICAgICAgICByZXR1cm4gRGF0YU1hbmFnZXIuSW5zdC5HZXREYXRhPElFbmVyZ3lbXT4oRGF0YUJhc2VLZXkuRU5FUkdZX0RBVEEpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCl7XHJcbiAgICAgICAgdGhpcy5fVXBkYXRlRW5lcmd5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfVXBkYXRlRW5lcmd5KCl7XHJcblxyXG4gICAgICAgIGxldCBlbmVyZ3kgPSB0aGlzLmVuZXJneTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnNob3dFbmVyZ3lJbmZvLmxlbmd0aDsgKyt4KXtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0VuZXJneUluZm9beF0gJiYgZW5lcmd5LmluZGV4T2YodGhpcy5zaG93RW5lcmd5SW5mb1t4XSkgPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RW5lcmd5SW5mb1t4XSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVuZXJneS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJfVXBkYXRlRW5lcmd5OlwiICsgSlNPTi5zdHJpbmdpZnkoZW5lcmd5KSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgRW5lcmd5U2hvd0NvdW50OyArK3gpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHggPCBlbmVyZ3kubGVuZ3RoICYmIGVuZXJneVt4XS5pZHggIT0gdGhpcy5zaG93RW5lcmd5SW5mby5sZW5ndGggLSAxKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2hvd0VuZXJneUluZm9beF0gfHwgdGhpcy5zaG93RW5lcmd5SW5mb1t4XS5lbmVyZ3lUaW1lICE9IGVuZXJneVt4XS5lbmVyZ3lUaW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RW5lcmd5SW5mb1t4XSA9IGVuZXJneVt4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVuZXJneUlucyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZW5lcmd5UHJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZXJneUlucy5nZXRDb21wb25lbnQoXCJGcmllbmRFbmVyZ3lJdGVtXCIpLlNldEl0ZW0oZW5lcmd5W3hdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVyZ3lSb290LmFkZENoaWxkKGVuZXJneUlucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZUVuZXJneShlbmVyZ3lbeF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih4IDwgZW5lcmd5Lmxlbmd0aCAmJiBlbmVyZ3lbeF0uaWR4ID09IHRoaXMuc2hvd0VuZXJneUluZm8ubGVuZ3RoIC0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnNob3dFbmVyZ3lJbmZvLmxlbmd0aDsgKyt5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuc2hvd0VuZXJneUluZm9beV0gJiYgdGhpcy5zaG93RW5lcmd5SW5mb1t0aGlzLnNob3dFbmVyZ3lJbmZvLmxlbmd0aCAtIDFdLmVuZXJneVRpbWUgIT0gZW5lcmd5W3hdLmVuZXJneVRpbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lcmd5W3hdLmlkeCA9IHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFbmVyZ3lJbmZvW3ldID0gZW5lcmd5W3hdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVuZXJneUlucyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZW5lcmd5UHJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVyZ3lJbnMuZ2V0Q29tcG9uZW50KFwiRnJpZW5kRW5lcmd5SXRlbVwiKS5TZXRJdGVtKGVuZXJneVt4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZXJneVJvb3QuYWRkQ2hpbGQoZW5lcmd5SW5zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZUVuZXJneShlbmVyZ3lbeF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zaG93RW5lcmd5SW5mb1t0aGlzLnNob3dFbmVyZ3lJbmZvLmxlbmd0aCAtIDFdICE9IG51bGwpe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmVuZXJneVJvb3QuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hpbGRyZW5Db3VudO+8miBcIiArIGNoaWxkcmVuLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgY2hpbGRyZW4ubGVuZ3RoOyArK3gpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGlsZHJlbkluZm/vvJogXCIgKyBjaGlsZHJlblt4XS5nZXRDb21wb25lbnQoXCJGcmllbmRFbmVyZ3lJdGVtXCIpLmVuZXJneURhdGEuaWR4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93RW5lcmd5SW5mb1t0aGlzLnNob3dFbmVyZ3lJbmZvLmxlbmd0aCAtIDFdLmlzR3Jvdyl7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGNoaWxkcmVuLmxlbmd0aDsgKyt4KXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRyZW5beF0uZ2V0Q29tcG9uZW50KFwiRnJpZW5kRW5lcmd5SXRlbVwiKS5lbmVyZ3lEYXRhLmlkeCA9PSB0aGlzLnNob3dFbmVyZ3lJbmZvLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgIWNoaWxkcmVuW3hdLmdldENvbXBvbmVudChcIkZyaWVuZEVuZXJneUl0ZW1cIikuZW5lcmd5RGF0YS5pc0dyb3cpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlblt4XS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjaGlsZHJlbi5sZW5ndGg7ICsreCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuW3hdLmdldENvbXBvbmVudChcIkZyaWVuZEVuZXJneUl0ZW1cIikuZW5lcmd5RGF0YS5pZHggPT0gdGhpcy5zaG93RW5lcmd5SW5mby5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIGNoaWxkcmVuW3hdLmdldENvbXBvbmVudChcIkZyaWVuZEVuZXJneUl0ZW1cIikuZW5lcmd5RGF0YS5lbmVyZ3lUaW1lICE9IHRoaXMuc2hvd0VuZXJneUluZm9bdGhpcy5zaG93RW5lcmd5SW5mby5sZW5ndGggLSAxXS5lbmVyZ3lUaW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5beF0ucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgY2hpbGRyZW4xID0gdGhpcy5lbmVyZ3lSb290LmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoaWxkcmVuQ291bnQx77yaIFwiICsgY2hpbGRyZW4xLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX1JlbW92ZUVuZXJneUJ5RW5lcmd5VGltZSh0aW1lOiBudW1iZXIpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuZW5lcmd5Um9vdC5jaGlsZHJlbjtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGNoaWxkcmVuLmxlbmd0aDsgKyt4KXtcclxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuW3hdLmdldENvbXBvbmVudChcIkZyaWVuZEVuZXJneUl0ZW1cIikuZW5lcmd5RGF0YS5lbmVyZ3lUaW1lID09IHRpbWUpe1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5beF0ucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIE9uQ2xpY2tCYWNrKGV2ZW50LCBjdXN0b21FdmVudERhdGEpe1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZVRvKDAuMywgY2MudjIoNzUwLCAwKSksIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgLy8gbmVlZCBjaGFuZ2UgZGF0YVxyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgIC8vIH0pKSk7XHJcbiAgICAgICAgR2xvYmFsLkluc3QuRW1pdChMb2NNc2cuU0hPV19GUklFTkRfRW5lcmd5X0lORk9SLCBudWxsLCAxKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MainScene/GroupCtrl/StartEnergyGroupCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a38b7LCVtdG8qBfBwcQ7U99', 'StartEnergyGroupCtrl');
// Script/MainScene/GroupCtrl/StartEnergyGroupCtrl.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var LocalDataAPI_1 = require("../../Utils/LocalDataAPI");
var DataManager_1 = require("../../Manager/DataManager");
var EnergyProp_1 = require("../../Energy/EnergyProp");
var Types_1 = require("../../BaseModel/Types");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StartEnergyGroupCtrl = /** @class */ (function (_super) {
    __extends(StartEnergyGroupCtrl, _super);
    function StartEnergyGroupCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startBtn = [];
        _this.stopBtn = [];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    StartEnergyGroupCtrl.prototype.start = function () {
    };
    Object.defineProperty(StartEnergyGroupCtrl.prototype, "energy", {
        // update (dt) {}
        get: function () {
            return DataManager_1.default.Inst.GetData(Types_1.DataBaseKey.ENERGY_DATA);
        },
        enumerable: false,
        configurable: true
    });
    StartEnergyGroupCtrl.prototype._UpdateBtn = function () {
        var energy = this.energy;
        if (energy.length > 0 && energy[energy.length - 1].isGrow) {
            for (var x = 0; x < this.startBtn.length; ++x) {
                if (x == energy[energy.length - 1].energyType.valueOf()) {
                    this.startBtn[x].node.active = false;
                    this.startBtn[x].interactable = false;
                    this.stopBtn[x].node.active = true;
                    this.stopBtn[x].interactable = true;
                }
                else {
                    this.startBtn[x].node.active = true;
                    this.startBtn[x].interactable = false;
                    this.stopBtn[x].node.active = false;
                    this.stopBtn[x].interactable = false;
                }
            }
        }
        else {
            for (var x = 0; x < this.startBtn.length; ++x) {
                this.startBtn[x].node.active = true;
                this.startBtn[x].interactable = true;
                this.stopBtn[x].node.active = false;
                this.stopBtn[x].interactable = false;
            }
        }
    };
    StartEnergyGroupCtrl.prototype.OnClickSelf = function (event, customEventData) {
        this.node.runAction(cc.moveTo(0.3, cc.v2(375, -1334)));
    };
    StartEnergyGroupCtrl.prototype.OnClickStart = function (event, customEventData) {
        var id = parseInt(customEventData);
        var energy = EnergyProp_1.MakeNewEnergy(EnergyProp_1.EnergyShowCount - 1, id);
        LocalDataAPI_1.UpdateEnergy(energy);
        this._UpdateBtn();
    };
    StartEnergyGroupCtrl.prototype.OnClickStop = function (event, customEventData) {
        LocalDataAPI_1.StopEnergy();
        this._UpdateBtn();
    };
    __decorate([
        property([cc.Button])
    ], StartEnergyGroupCtrl.prototype, "startBtn", void 0);
    __decorate([
        property([cc.Button])
    ], StartEnergyGroupCtrl.prototype, "stopBtn", void 0);
    StartEnergyGroupCtrl = __decorate([
        ccclass
    ], StartEnergyGroupCtrl);
    return StartEnergyGroupCtrl;
}(cc.Component));
exports.default = StartEnergyGroupCtrl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluU2NlbmVcXEdyb3VwQ3RybFxcU3RhcnRFbmVyZ3lHcm91cEN0cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYseURBQWtFO0FBQ2xFLHlEQUFvRDtBQUNwRCxzREFBNEY7QUFDNUYsK0NBQWtEO0FBRTVDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWtELHdDQUFZO0lBQTlEO1FBQUEscUVBK0RDO1FBNURHLGNBQVEsR0FBZ0IsRUFBRSxDQUFDO1FBRzNCLGFBQU8sR0FBZ0IsRUFBRSxDQUFDOztJQXlEOUIsQ0FBQztJQXZERyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLG9DQUFLLEdBQUw7SUFFQSxDQUFDO0lBSUQsc0JBQUksd0NBQU07UUFGVixpQkFBaUI7YUFFakI7WUFDSSxPQUFPLHFCQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBWSxtQkFBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hFLENBQUM7OztPQUFBO0lBRU8seUNBQVUsR0FBbEI7UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3pCLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFDO1lBQ3RELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBQztnQkFDMUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFDO29CQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztpQkFDdkM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO29CQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7aUJBQ3hDO2FBQ0o7U0FDSjthQUFNO1lBQ0gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFDO2dCQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzthQUM1QztTQUNKO0lBQ0wsQ0FBQztJQUVELDBDQUFXLEdBQVgsVUFBWSxLQUFLLEVBQUUsZUFBZTtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsMkNBQVksR0FBWixVQUFhLEtBQUssRUFBRSxlQUFlO1FBQy9CLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuQyxJQUFJLE1BQU0sR0FBRywwQkFBYSxDQUFDLDRCQUFlLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELDJCQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCwwQ0FBVyxHQUFYLFVBQVksS0FBSyxFQUFFLGVBQWU7UUFDOUIseUJBQVUsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUEzREQ7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7MERBQ0s7SUFHM0I7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7eURBQ0k7SUFOVCxvQkFBb0I7UUFEeEMsT0FBTztPQUNhLG9CQUFvQixDQStEeEM7SUFBRCwyQkFBQztDQS9ERCxBQStEQyxDQS9EaUQsRUFBRSxDQUFDLFNBQVMsR0ErRDdEO2tCQS9Eb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHtTdG9wRW5lcmd5LCBVcGRhdGVFbmVyZ3l9IGZyb20gXCIuLi8uLi9VdGlscy9Mb2NhbERhdGFBUElcIjtcclxuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuLi8uLi9NYW5hZ2VyL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCB7RW5lcmd5U2hvd0NvdW50LCBFbmVyZ3lUeXBlLCBJRW5lcmd5LCBNYWtlTmV3RW5lcmd5fSBmcm9tIFwiLi4vLi4vRW5lcmd5L0VuZXJneVByb3BcIjtcclxuaW1wb3J0IHtEYXRhQmFzZUtleX0gZnJvbSBcIi4uLy4uL0Jhc2VNb2RlbC9UeXBlc1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydEVuZXJneUdyb3VwQ3RybCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5CdXR0b25dKVxyXG4gICAgc3RhcnRCdG46IGNjLkJ1dHRvbltdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5CdXR0b25dKVxyXG4gICAgc3RvcEJ0bjogY2MuQnV0dG9uW10gPSBbXTtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgZ2V0IGVuZXJneSgpIHtcclxuICAgICAgICByZXR1cm4gRGF0YU1hbmFnZXIuSW5zdC5HZXREYXRhPElFbmVyZ3lbXT4oRGF0YUJhc2VLZXkuRU5FUkdZX0RBVEEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX1VwZGF0ZUJ0bigpe1xyXG4gICAgICAgIGxldCBlbmVyZ3kgPSB0aGlzLmVuZXJneTtcclxuICAgICAgICBpZiAoZW5lcmd5Lmxlbmd0aCA+IDAgJiYgZW5lcmd5W2VuZXJneS5sZW5ndGggLSAxXS5pc0dyb3cpe1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuc3RhcnRCdG4ubGVuZ3RoOyArK3gpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHggPT0gZW5lcmd5W2VuZXJneS5sZW5ndGggLSAxXS5lbmVyZ3lUeXBlLnZhbHVlT2YoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEJ0blt4XS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRCdG5beF0uaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wQnRuW3hdLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BCdG5beF0uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEJ0blt4XS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEJ0blt4XS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BCdG5beF0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BCdG5beF0uaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuc3RhcnRCdG4ubGVuZ3RoOyArK3gpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRCdG5beF0ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRCdG5beF0uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BCdG5beF0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BCdG5beF0uaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgT25DbGlja1NlbGYoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2MubW92ZVRvKDAuMywgY2MudjIoMzc1LCAtMTMzNCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkNsaWNrU3RhcnQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIGxldCBpZCA9IHBhcnNlSW50KGN1c3RvbUV2ZW50RGF0YSk7XHJcbiAgICAgICAgbGV0IGVuZXJneSA9IE1ha2VOZXdFbmVyZ3koRW5lcmd5U2hvd0NvdW50IC0gMSwgaWQpO1xyXG4gICAgICAgIFVwZGF0ZUVuZXJneShlbmVyZ3kpO1xyXG4gICAgICAgIHRoaXMuX1VwZGF0ZUJ0bigpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uQ2xpY2tTdG9wKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICBTdG9wRW5lcmd5KCk7XHJcbiAgICAgICAgdGhpcy5fVXBkYXRlQnRuKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/FriendProp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0f219JdysdCyogP3CjkKOsf', 'FriendProp');
// Script/Model/FriendProp.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRnJpZW5kUHJvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJvYm90IH0gZnJvbSBcIi4vUm9ib3RQcm9wXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElGcmllbmQge1xyXG4gICAgaWQ6IG51bWJlcixcclxuICAgIGljb25JZDogbnVtYmVyLFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgY3VyUm9ib3RVc2U6IElSb2JvdCxcclxuICAgIC8vIFRPRE8g6IO96YeP77ybXHJcblxyXG4gICAgLy8g5aW95Y+L5oC75YWx55qE57u/6Imy5Ye66KGM5Yib6YCg55qE6IO96YePXHJcbiAgICB0b3RhbENyZWF0RW5lcmd5OiBudW1iZXIsXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Utils/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e669aOjT9BMPKVYygzmv0mQ', 'Utils');
// Script/Utils/Utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**存档数据 */
    Utils.SaveData = function (key, data) {
        cc.sys.localStorage.setItem(key, data);
    };
    /**读取数据,没有该数据时回传null */
    Utils.LoadData = function (key) {
        var data = cc.sys.localStorage.getItem(key);
        return data == "" ? null : data;
    };
    /**删除数据 */
    Utils.RemoveSaveData = function (key) {
        cc.sys.localStorage.removeItem(key);
    };
    Utils.timeToString = function (timeSceond) {
        var h = Math.floor(timeSceond / 3600);
        var m = Math.floor(timeSceond % 3600 / 60);
        var s = timeSceond % 3600 % 60;
        return (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
    };
    return Utils;
}());
exports.default = Utils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxVdGlsc1xcVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBdUJBLENBQUM7SUF0QkcsVUFBVTtJQUNJLGNBQVEsR0FBdEIsVUFBdUIsR0FBVyxFQUFFLElBQVM7UUFDekMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsdUJBQXVCO0lBQ1QsY0FBUSxHQUF0QixVQUF1QixHQUFXO1FBQzlCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QyxPQUFPLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxVQUFVO0lBQ0ksb0JBQWMsR0FBNUIsVUFBNkIsR0FBVztRQUNwQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVhLGtCQUFZLEdBQTFCLFVBQTJCLFVBQWtCO1FBQ3pDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsR0FBRyxVQUFVLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUMvQixPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQXZCQSxBQXVCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xyXG4gICAgLyoq5a2Y5qGj5pWw5o2uICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNhdmVEYXRhKGtleTogc3RyaW5nLCBkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiror7vlj5bmlbDmja4s5rKh5pyJ6K+l5pWw5o2u5pe25Zue5LygbnVsbCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkRGF0YShrZXk6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICByZXR1cm4gZGF0YSA9PSBcIlwiID8gbnVsbCA6IGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yig6Zmk5pWw5o2uICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFJlbW92ZVNhdmVEYXRhKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0aW1lVG9TdHJpbmcodGltZVNjZW9uZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGggPSBNYXRoLmZsb29yKHRpbWVTY2VvbmQgLyAzNjAwKTtcclxuICAgICAgICBsZXQgbSA9IE1hdGguZmxvb3IodGltZVNjZW9uZCAlIDM2MDAgLyA2MCk7XHJcbiAgICAgICAgbGV0IHMgPSB0aW1lU2Nlb25kICUgMzYwMCAlIDYwO1xyXG4gICAgICAgIHJldHVybiAoaCA8IDEwID8gXCIwXCIgKyBoIDogaCkgKyBcIjpcIiArIChtIDwgMTAgPyBcIjBcIiArIG0gOiBtKSArIFwiOlwiICsgKHMgPCAxMCA/IFwiMFwiICsgcyA6IHMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/RobotProp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c991cE0JQFEwrswkY82Kriq', 'RobotProp');
// Script/Model/RobotProp.ts

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultShopInfo = exports.RobotTypeDesc = exports.RobotType = exports.RobotTypeCount = void 0;
// 4种类型
exports.RobotTypeCount = 4;
var RobotType;
(function (RobotType) {
    RobotType[RobotType["TYPE_1"] = 0] = "TYPE_1";
    RobotType[RobotType["TYPE_2"] = 1] = "TYPE_2";
    RobotType[RobotType["TYPE_3"] = 2] = "TYPE_3";
    RobotType[RobotType["TYPE_4"] = 3] = "TYPE_4";
})(RobotType = exports.RobotType || (exports.RobotType = {}));
;
// 
exports.RobotTypeDesc = (_a = {},
    _a[RobotType.TYPE_1] = "A-ROBOT",
    _a[RobotType.TYPE_2] = "B-ROBOT",
    _a[RobotType.TYPE_3] = "C-ROBOT",
    _a[RobotType.TYPE_4] = "D-ROBOT",
    _a);
function DefaultShopInfo() {
    var data = [];
    for (var index = 0; index < 20; index++) {
        var robotType = index % exports.RobotTypeCount;
        var robot = {
            id: Math.ceil(Math.random() * 1000000) + 5000000,
            robotImgId: index % exports.RobotTypeCount,
            mint: Math.ceil(Math.random() * 7),
            maticCost: index,
            level: index,
            robotType: robotType,
            efficiency: Math.ceil(Math.random() * 10),
            luck: Math.ceil(Math.random() * 10),
            pow: Math.ceil(Math.random() * 10),
            intMin: [1, 3, 5, 7][robotType],
            intMax: [3, 5, 7, 10][robotType],
        };
        data.push(robot);
    }
    return data;
}
exports.DefaultShopInfo = DefaultShopInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcUm9ib3RQcm9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkEsT0FBTztBQUNNLFFBQUEsY0FBYyxHQUFHLENBQUMsQ0FBQztBQUNoQyxJQUFZLFNBS1g7QUFMRCxXQUFZLFNBQVM7SUFDakIsNkNBQU0sQ0FBQTtJQUNOLDZDQUFNLENBQUE7SUFDTiw2Q0FBTSxDQUFBO0lBQ04sNkNBQU0sQ0FBQTtBQUNWLENBQUMsRUFMVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUtwQjtBQUFBLENBQUM7QUFFRixHQUFHO0FBQ1UsUUFBQSxhQUFhO0lBQ3RCLEdBQUMsU0FBUyxDQUFDLE1BQU0sSUFBRyxTQUFTO0lBQzdCLEdBQUMsU0FBUyxDQUFDLE1BQU0sSUFBRyxTQUFTO0lBQzdCLEdBQUMsU0FBUyxDQUFDLE1BQU0sSUFBRyxTQUFTO0lBQzdCLEdBQUMsU0FBUyxDQUFDLE1BQU0sSUFBRyxTQUFTO1FBQ2hDO0FBR0QsU0FBZ0IsZUFBZTtJQUMzQixJQUFJLElBQUksR0FBYSxFQUFFLENBQUM7SUFFeEIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNyQyxJQUFJLFNBQVMsR0FBRyxLQUFLLEdBQUcsc0JBQWMsQ0FBQztRQUN2QyxJQUFJLEtBQUssR0FBVztZQUNoQixFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsT0FBTztZQUNoRCxVQUFVLEVBQUUsS0FBSyxHQUFHLHNCQUFjO1lBQ2xDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbEMsU0FBUyxFQUFFLEtBQUs7WUFDaEIsS0FBSyxFQUFFLEtBQUs7WUFDWixTQUFTLEVBQUUsU0FBUztZQUNwQixVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ3pDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDbkMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNsQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDL0IsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDO1NBQ25DLENBQUE7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBRXBCO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQXRCRCwwQ0FzQkMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElSb2JvdCB7XHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgcm9ib3RJbWdJZDogbnVtYmVyLFxyXG4gICAgcm9ib3RUeXBlOiBSb2JvdFR5cGUsXHJcbiAgICBsZXZlbDogbnVtYmVyLC8v562J57qnXHJcbiAgICBtaW50OiBudW1iZXIsLy/lkIjmiJDmrKHmlbBcclxuICAgIG1hdGljQ29zdDogbnVtYmVyLC8vc29s5Lu35qC8XHJcblxyXG4gICAgLy8g5bGe5oCnXHJcbiAgICBlZmZpY2llbmN5OiBudW1iZXIsLy/mlYjnjodcclxuICAgIGx1Y2s6IG51bWJlciwvL+W5uOi/kFxyXG4gICAgcG93OiBudW1iZXIsLy/mjZ/ogJdcclxuICAgIGludE1pbjogbnVtYmVyLC8v6L2s5YyWXHJcbiAgICBpbnRNYXg6IG51bWJlciwvL+i9rOWMllxyXG5cclxufVxyXG5cclxuXHJcbi8vIDTnp43nsbvlnotcclxuZXhwb3J0IGNvbnN0IFJvYm90VHlwZUNvdW50ID0gNDtcclxuZXhwb3J0IGVudW0gUm9ib3RUeXBlIHtcclxuICAgIFRZUEVfMSxcclxuICAgIFRZUEVfMixcclxuICAgIFRZUEVfMyxcclxuICAgIFRZUEVfNCxcclxufTtcclxuXHJcbi8vIFxyXG5leHBvcnQgY29uc3QgUm9ib3RUeXBlRGVzYyA9IHtcclxuICAgIFtSb2JvdFR5cGUuVFlQRV8xXTogXCJBLVJPQk9UXCIsXHJcbiAgICBbUm9ib3RUeXBlLlRZUEVfMl06IFwiQi1ST0JPVFwiLFxyXG4gICAgW1JvYm90VHlwZS5UWVBFXzNdOiBcIkMtUk9CT1RcIixcclxuICAgIFtSb2JvdFR5cGUuVFlQRV80XTogXCJELVJPQk9UXCIsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGVmYXVsdFNob3BJbmZvKCk6IElSb2JvdFtdIHtcclxuICAgIGxldCBkYXRhOiBJUm9ib3RbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyMDsgaW5kZXgrKykge1xyXG4gICAgICAgIGxldCByb2JvdFR5cGUgPSBpbmRleCAlIFJvYm90VHlwZUNvdW50O1xyXG4gICAgICAgIGxldCByb2JvdDogSVJvYm90ID0ge1xyXG4gICAgICAgICAgICBpZDogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKSArIDUwMDAwMDAsXHJcbiAgICAgICAgICAgIHJvYm90SW1nSWQ6IGluZGV4ICUgUm9ib3RUeXBlQ291bnQsXHJcbiAgICAgICAgICAgIG1pbnQ6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogNyksXHJcbiAgICAgICAgICAgIG1hdGljQ29zdDogaW5kZXgsXHJcbiAgICAgICAgICAgIGxldmVsOiBpbmRleCxcclxuICAgICAgICAgICAgcm9ib3RUeXBlOiByb2JvdFR5cGUsXHJcbiAgICAgICAgICAgIGVmZmljaWVuY3k6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTApLFxyXG4gICAgICAgICAgICBsdWNrOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwKSxcclxuICAgICAgICAgICAgcG93OiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwKSxcclxuICAgICAgICAgICAgaW50TWluOiBbMSwgMywgNSwgN11bcm9ib3RUeXBlXSxcclxuICAgICAgICAgICAgaW50TWF4OiBbMywgNSwgNywgMTBdW3JvYm90VHlwZV0sXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEucHVzaChyb2JvdCk7XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Shop/ShopItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47dccJFJv5GhrLfeiBP9PP3', 'ShopItem');
// Script/Shop/ShopItem.ts

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
var RobotInforCtrl_1 = require("../MainScene/RobotInforCtrl");
var RobotProp_1 = require("../Model/RobotProp");
var LocalDataAPI_1 = require("../Utils/LocalDataAPI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShopItem = /** @class */ (function (_super) {
    __extends(ShopItem, _super);
    function ShopItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.lbType = null;
        _this.lbID = null;
        _this.lbMint = null;
        _this.lbLv = null;
        _this.lbSol = null;
        _this.iconSFs = [];
        _this._renderIdx = -1;
        _this._shopId = 0;
        _this._robotData = null;
        return _this;
    }
    Object.defineProperty(ShopItem.prototype, "renderIdx", {
        get: function () {
            return this._renderIdx;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShopItem.prototype, "robotId", {
        get: function () {
            return this._robotData.id;
        },
        enumerable: false,
        configurable: true
    });
    ShopItem.prototype.SetItem = function (idx, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._renderIdx = idx;
                this._robotData = data;
                this._shopId = data.id;
                this.lbMint.string = data.mint + "/7";
                this.lbID.string = "#" + data.id;
                this.lbSol.string = data.maticCost + "";
                this.lbLv.string = "Lv." + data.level;
                this.lbType.string = RobotProp_1.RobotTypeDesc[data.robotType];
                this.icon.spriteFrame = this.iconSFs[data.robotImgId];
                return [2 /*return*/];
            });
        });
    };
    ShopItem.prototype.OnClickSelf = function (event, customEventData) {
        Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.SHOW_ROBOT_INFOR, this._robotData, RobotInforCtrl_1.INFOR_STATE.BUY);
    };
    ShopItem.prototype.OnClickBuy = function () {
        LocalDataAPI_1.API_BuyRobot(this._robotData);
    };
    __decorate([
        property(cc.Sprite)
    ], ShopItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Label)
    ], ShopItem.prototype, "lbType", void 0);
    __decorate([
        property(cc.Label)
    ], ShopItem.prototype, "lbID", void 0);
    __decorate([
        property(cc.Label)
    ], ShopItem.prototype, "lbMint", void 0);
    __decorate([
        property(cc.Label)
    ], ShopItem.prototype, "lbLv", void 0);
    __decorate([
        property(cc.Label)
    ], ShopItem.prototype, "lbSol", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], ShopItem.prototype, "iconSFs", void 0);
    ShopItem = __decorate([
        ccclass
    ], ShopItem);
    return ShopItem;
}(cc.Component));
exports.default = ShopItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTaG9wXFxTaG9wSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBbUM7QUFDbkMsa0RBQStDO0FBQy9DLDhEQUEwRDtBQUMxRCxnREFBMkQ7QUFDM0Qsc0RBQXFEO0FBRy9DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBTTVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcURDO1FBbkRHLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBR3RCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBSXZCLGFBQU8sR0FBcUIsRUFBRSxDQUFDO1FBUXZCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDeEIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixnQkFBVSxHQUFXLElBQUksQ0FBQzs7SUFzQnRDLENBQUM7SUE5Qkcsc0JBQUksK0JBQVM7YUFBYjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLDZCQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBS0ssMEJBQU8sR0FBYixVQUFjLEdBQVcsRUFBRSxJQUFZOzs7Z0JBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO2dCQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUE7Z0JBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcseUJBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBOzs7O0tBQ3hEO0lBRUQsOEJBQVcsR0FBWCxVQUFZLEtBQUssRUFBRSxlQUFlO1FBQzlCLGdCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBTSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsNEJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUNJLDJCQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFqREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswQ0FDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0c7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNHO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFJdkI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7NkNBQ0k7SUFyQmQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXFENUI7SUFBRCxlQUFDO0NBckRELEFBcURDLENBckRxQyxFQUFFLENBQUMsU0FBUyxHQXFEakQ7a0JBckRvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vQXBwL0dsb2JhbFwiO1xyXG5pbXBvcnQgeyBMb2NNc2cgfSBmcm9tIFwiLi4vQmFzZU1vZGVsL01zZ0V2ZW50XCI7XHJcbmltcG9ydCB7IElORk9SX1NUQVRFIH0gZnJvbSBcIi4uL01haW5TY2VuZS9Sb2JvdEluZm9yQ3RybFwiO1xyXG5pbXBvcnQgeyBJUm9ib3QsIFJvYm90VHlwZURlc2MgfSBmcm9tIFwiLi4vTW9kZWwvUm9ib3RQcm9wXCI7XHJcbmltcG9ydCB7IEFQSV9CdXlSb2JvdCB9IGZyb20gXCIuLi9VdGlscy9Mb2NhbERhdGFBUElcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuXHJcblxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcEl0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGljb246IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJUeXBlOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJJRDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiTWludDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiTHY6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYlNvbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIGljb25TRnM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBnZXQgcmVuZGVySWR4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJJZHg7XHJcbiAgICB9XHJcbiAgICBnZXQgcm9ib3RJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm9ib3REYXRhLmlkO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfcmVuZGVySWR4OiBudW1iZXIgPSAtMTtcclxuICAgIHByaXZhdGUgX3Nob3BJZDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX3JvYm90RGF0YTogSVJvYm90ID0gbnVsbDtcclxuXHJcbiAgICBhc3luYyBTZXRJdGVtKGlkeDogbnVtYmVyLCBkYXRhOiBJUm9ib3QpIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJJZHggPSBpZHg7XHJcbiAgICAgICAgdGhpcy5fcm9ib3REYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLl9zaG9wSWQgPSBkYXRhLmlkO1xyXG4gICAgICAgIHRoaXMubGJNaW50LnN0cmluZyA9IGRhdGEubWludCArIFwiLzdcIjtcclxuICAgICAgICB0aGlzLmxiSUQuc3RyaW5nID0gXCIjXCIgKyBkYXRhLmlkXHJcbiAgICAgICAgdGhpcy5sYlNvbC5zdHJpbmcgPSBkYXRhLm1hdGljQ29zdCArIFwiXCI7XHJcbiAgICAgICAgdGhpcy5sYkx2LnN0cmluZyA9IFwiTHYuXCIgKyBkYXRhLmxldmVsO1xyXG4gICAgICAgIHRoaXMubGJUeXBlLnN0cmluZyA9IFJvYm90VHlwZURlc2NbZGF0YS5yb2JvdFR5cGVdO1xyXG4gICAgICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuaWNvblNGc1tkYXRhLnJvYm90SW1nSWRdXHJcbiAgICB9XHJcblxyXG4gICAgT25DbGlja1NlbGYoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIEdsb2JhbC5JbnN0LkVtaXQoTG9jTXNnLlNIT1dfUk9CT1RfSU5GT1IsIHRoaXMuX3JvYm90RGF0YSwgSU5GT1JfU1RBVEUuQlVZKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkNsaWNrQnV5KCkge1xyXG4gICAgICAgIEFQSV9CdXlSb2JvdCh0aGlzLl9yb2JvdERhdGEpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Energy/FriendEnergyItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f4b0aLeN8RGto5h9Z5sSNkD', 'FriendEnergyItem');
// Script/Energy/FriendEnergyItem.ts

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
var Types_1 = require("../BaseModel/Types");
var DataManager_1 = require("../Manager/DataManager");
var LocalDataAPI_1 = require("../Utils/LocalDataAPI");
var EnergyProp_1 = require("./EnergyProp");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FriendEnergyItem = /** @class */ (function (_super) {
    __extends(FriendEnergyItem, _super);
    function FriendEnergyItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.mask = null;
        _this.timeBg = null;
        _this.time = null;
        _this.count = null;
        _this.iconSFs = [];
        _this.colors = [];
        _this._energyData = null;
        _this._nowTime = 0;
        _this._deltaTime = 0;
        _this._positions = [cc.v2(-153, 65), cc.v2(170, 47), cc.v2(-272, -30), cc.v2(250, -114), cc.v2(0, 16)];
        _this._start = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    FriendEnergyItem.prototype.onLoad = function () {
        this.node.scale = 0;
    };
    FriendEnergyItem.prototype.start = function () {
        this.node.runAction(cc.sequence(cc.scaleTo(0.3, 1), cc.callFunc(function () {
        })));
    };
    FriendEnergyItem.prototype.update = function (dt) {
        if (this._start) {
            this._deltaTime += dt;
            if (this._deltaTime >= 1) {
                this._UpdateItem();
            }
        }
    };
    Object.defineProperty(FriendEnergyItem.prototype, "energyData", {
        get: function () {
            return this._energyData;
        },
        enumerable: false,
        configurable: true
    });
    FriendEnergyItem.prototype.SetItem = function (data) {
        var nowDate = new Date();
        this._nowTime = nowDate.getTime();
        this._energyData = data;
        this.node.setPosition(this._positions[data.idx]);
        // console.log("SetItem: " + this.node.position);
        this._InitItem();
    };
    FriendEnergyItem.prototype._UpdateItem = function () {
        var _this = this;
        if (!this._energyData.isGrow) {
            if (this._deltaTime > 1) {
                this._deltaTime -= 1;
                this._nowTime = new Date().getTime();
                if (this._nowTime - this._energyData.energyTime > EnergyProp_1.MaturationTime + EnergyProp_1.CollectionTime) {
                    // time out
                    this.node.getComponent(cc.Button).interactable = false;
                    this.node.runAction(cc.sequence(cc.scaleTo(0.3, 0), cc.callFunc(function () {
                        _this.node.removeFromParent();
                        LocalDataAPI_1.DeleteEnergy(_this._energyData);
                    })));
                }
                else if (this._nowTime - this._energyData.energyTime > EnergyProp_1.MaturationTime) {
                    this.timeBg.active = false;
                    this.node.getComponent(cc.Button).interactable = true;
                }
                else {
                    this.timeBg.active = true;
                    var timeShow = Math.floor((EnergyProp_1.MaturationTime - (this._nowTime - this._energyData.energyTime)) * 0.001);
                    var h = Math.floor(timeShow / 3600);
                    var m = Math.floor(timeShow % 3600 / 60);
                    var s = timeShow % 3600 % 60;
                    this.time.string = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
                }
            }
            var data = DataManager_1.default.Inst.GetData(Types_1.DataBaseKey.ENERGY_DATA);
            if (data.indexOf(this._energyData) == -1) {
                this.node.removeFromParent();
            }
        }
        else {
            this.node.removeFromParent();
        }
    };
    FriendEnergyItem.prototype._InitItem = function () {
        {
            this.icon.spriteFrame = this.iconSFs[this._energyData.energyType];
            this.count.node.color = this.colors[this._energyData.energyType];
            this.count.string = this._energyData.energyCount.toString() + "g";
            if (this._nowTime - this._energyData.energyTime > EnergyProp_1.MaturationTime) {
                this.timeBg.active = false;
                if (this._energyData.canSteal) {
                    this.node.getComponent(cc.Button).interactable = true;
                    this.mask.node.active = true;
                }
                else {
                    this.node.getComponent(cc.Button).interactable = false;
                    this.mask.node.active = false;
                }
            }
            else {
                this.timeBg.active = true;
                var timeShow = Math.floor((EnergyProp_1.MaturationTime - (this._nowTime - this._energyData.energyTime)) * 0.001);
                var h = Math.floor(timeShow / 3600);
                var m = Math.floor(timeShow % 3600 / 60);
                var s = timeShow % 3600 % 60;
                this.time.string = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
                this.node.getComponent(cc.Button).interactable = false;
                this.mask.node.active = false;
            }
        }
        this._start = true;
    };
    FriendEnergyItem.prototype.OnClick = function (event, customEventData) {
        LocalDataAPI_1.API_CollectEnergy(10);
        // collect energy
        this.node.getComponent(cc.Button).interactable = false;
        this._energyData.canSteal = false;
        LocalDataAPI_1.UpdateEnergy(this._energyData);
        this.mask.node.active = false;
        this.count.string = (this._energyData.energyCount - 10).toString();
        // this.node.runAction(cc.sequence(cc.spawn(cc.moveTo(0.35, cc.v2(235, 194)), cc.scaleTo(0.35, 0.3)), cc.callFunc(() => {
        //     // need change data
        //     this.node.removeFromParent();
        //     UpdateEnergy(this._energyData);
        // })));
    };
    __decorate([
        property(cc.Sprite)
    ], FriendEnergyItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Sprite)
    ], FriendEnergyItem.prototype, "mask", void 0);
    __decorate([
        property(cc.Node)
    ], FriendEnergyItem.prototype, "timeBg", void 0);
    __decorate([
        property(cc.Label)
    ], FriendEnergyItem.prototype, "time", void 0);
    __decorate([
        property(cc.Label)
    ], FriendEnergyItem.prototype, "count", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], FriendEnergyItem.prototype, "iconSFs", void 0);
    __decorate([
        property([cc.Color])
    ], FriendEnergyItem.prototype, "colors", void 0);
    FriendEnergyItem = __decorate([
        ccclass
    ], FriendEnergyItem);
    return FriendEnergyItem;
}(cc.Component));
exports.default = FriendEnergyItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVyZ3lcXEZyaWVuZEVuZXJneUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQWlEO0FBQ2pELHNEQUFpRDtBQUNqRCxzREFBb0Y7QUFDcEYsMkNBQXVFO0FBRWpFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBNElDO1FBeklHLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBYSxJQUFJLENBQUM7UUFHdEIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixhQUFPLEdBQXFCLEVBQUUsQ0FBQztRQUcvQixZQUFNLEdBQWUsRUFBRSxDQUFDO1FBRWhCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZ0JBQVUsR0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1RyxZQUFNLEdBQVksS0FBSyxDQUFDOztJQWlIcEMsQ0FBQztJQS9HRyx3QkFBd0I7SUFFeEIsaUNBQU0sR0FBTjtRQUNJLElBQUks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QUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkUseUhBQXlIO1FBQ3pILDBCQUEwQjtRQUMxQixvQ0FBb0M7UUFDcEMsc0NBQXNDO1FBQ3RDLFFBQVE7SUFDWixDQUFDO0lBeElEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ0c7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ0c7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDSTtJQUd2QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztxREFDSTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztvREFDRztJQXJCUCxnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQTRJcEM7SUFBRCx1QkFBQztDQTVJRCxBQTRJQyxDQTVJNkMsRUFBRSxDQUFDLFNBQVMsR0E0SXpEO2tCQTVJb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YUJhc2VLZXkgfSBmcm9tIFwiLi4vQmFzZU1vZGVsL1R5cGVzXCI7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQge0FQSV9Db2xsZWN0RW5lcmd5LCBEZWxldGVFbmVyZ3ksIFVwZGF0ZUVuZXJneX0gZnJvbSBcIi4uL1V0aWxzL0xvY2FsRGF0YUFQSVwiO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9uVGltZSwgSUVuZXJneSwgTWF0dXJhdGlvblRpbWUgfSBmcm9tIFwiLi9FbmVyZ3lQcm9wXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kRW5lcmd5SXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGljb246IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIG1hc2s6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0aW1lQmc6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRpbWU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBjb3VudDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgaWNvblNGczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuQ29sb3JdKVxyXG4gICAgY29sb3JzOiBjYy5Db2xvcltdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfZW5lcmd5RGF0YTogSUVuZXJneSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9ub3dUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfZGVsdGFUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfcG9zaXRpb25zOiBjYy5WZWMyW10gPSBbY2MudjIoLTE1MywgNjUpLCBjYy52MigxNzAsIDQ3KSwgY2MudjIoLTI3MiwgLTMwKSwgY2MudjIoMjUwLCAtMTE0KSwgY2MudjIoMCwgMTYpXTtcclxuICAgIHByaXZhdGUgX3N0YXJ0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zY2FsZVRvKDAuMywgMSksIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICB9KSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWx0YVRpbWUgKz0gZHQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kZWx0YVRpbWUgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fVXBkYXRlSXRlbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbmVyZ3lEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbmVyZ3lEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIFNldEl0ZW0oZGF0YTogSUVuZXJneSkge1xyXG4gICAgICAgIGxldCBub3dEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICB0aGlzLl9ub3dUaW1lID0gbm93RGF0ZS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy5fZW5lcmd5RGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMuX3Bvc2l0aW9uc1tkYXRhLmlkeF0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU2V0SXRlbTogXCIgKyB0aGlzLm5vZGUucG9zaXRpb24pO1xyXG5cclxuICAgICAgICB0aGlzLl9Jbml0SXRlbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX1VwZGF0ZUl0ZW0oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9lbmVyZ3lEYXRhLmlzR3Jvdyl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kZWx0YVRpbWUgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWx0YVRpbWUgLT0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX25vd1RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9ub3dUaW1lIC0gdGhpcy5fZW5lcmd5RGF0YS5lbmVyZ3lUaW1lID4gTWF0dXJhdGlvblRpbWUgKyBDb2xsZWN0aW9uVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRpbWUgb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjMsIDApLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZUVuZXJneSh0aGlzLl9lbmVyZ3lEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ub3dUaW1lIC0gdGhpcy5fZW5lcmd5RGF0YS5lbmVyZ3lUaW1lID4gTWF0dXJhdGlvblRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVCZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lQmcuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGltZVNob3cgPSBNYXRoLmZsb29yKChNYXR1cmF0aW9uVGltZSAtICh0aGlzLl9ub3dUaW1lIC0gdGhpcy5fZW5lcmd5RGF0YS5lbmVyZ3lUaW1lKSkgKiAwLjAwMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGggPSBNYXRoLmZsb29yKHRpbWVTaG93IC8gMzYwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG0gPSBNYXRoLmZsb29yKHRpbWVTaG93ICUgMzYwMCAvIDYwKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcyA9IHRpbWVTaG93ICUgMzYwMCAlIDYwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZS5zdHJpbmcgPSAoaCA8IDEwID8gXCIwXCIgKyBoIDogaCkgKyBcIjpcIiArIChtIDwgMTAgPyBcIjBcIiArIG0gOiBtKSArIFwiOlwiICsgKHMgPCAxMCA/IFwiMFwiICsgcyA6IHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gRGF0YU1hbmFnZXIuSW5zdC5HZXREYXRhPElFbmVyZ3lbXT4oRGF0YUJhc2VLZXkuRU5FUkdZX0RBVEEpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5pbmRleE9mKHRoaXMuX2VuZXJneURhdGEpID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfSW5pdEl0ZW0oKSB7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmljb24uc3ByaXRlRnJhbWUgPSB0aGlzLmljb25TRnNbdGhpcy5fZW5lcmd5RGF0YS5lbmVyZ3lUeXBlXTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudC5ub2RlLmNvbG9yID0gdGhpcy5jb2xvcnNbdGhpcy5fZW5lcmd5RGF0YS5lbmVyZ3lUeXBlXTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudC5zdHJpbmcgPSB0aGlzLl9lbmVyZ3lEYXRhLmVuZXJneUNvdW50LnRvU3RyaW5nKCkgKyBcImdcIjtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX25vd1RpbWUgLSB0aGlzLl9lbmVyZ3lEYXRhLmVuZXJneVRpbWUgPiBNYXR1cmF0aW9uVGltZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lQmcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZW5lcmd5RGF0YS5jYW5TdGVhbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFzay5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lQmcuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxldCB0aW1lU2hvdyA9IE1hdGguZmxvb3IoKE1hdHVyYXRpb25UaW1lIC0gKHRoaXMuX25vd1RpbWUgLSB0aGlzLl9lbmVyZ3lEYXRhLmVuZXJneVRpbWUpKSAqIDAuMDAxKTtcclxuICAgICAgICAgICAgICAgIGxldCBoID0gTWF0aC5mbG9vcih0aW1lU2hvdyAvIDM2MDApO1xyXG4gICAgICAgICAgICAgICAgbGV0IG0gPSBNYXRoLmZsb29yKHRpbWVTaG93ICUgMzYwMCAvIDYwKTtcclxuICAgICAgICAgICAgICAgIGxldCBzID0gdGltZVNob3cgJSAzNjAwICUgNjA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUuc3RyaW5nID0gKGggPCAxMCA/IFwiMFwiICsgaCA6IGgpICsgXCI6XCIgKyAobSA8IDEwID8gXCIwXCIgKyBtIDogbSkgKyBcIjpcIiArIChzIDwgMTAgPyBcIjBcIiArIHMgOiBzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFzay5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3N0YXJ0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBPbkNsaWNrKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuXHJcbiAgICAgICAgQVBJX0NvbGxlY3RFbmVyZ3koMTApO1xyXG5cclxuICAgICAgICAvLyBjb2xsZWN0IGVuZXJneVxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9lbmVyZ3lEYXRhLmNhblN0ZWFsID0gZmFsc2U7XHJcbiAgICAgICAgVXBkYXRlRW5lcmd5KHRoaXMuX2VuZXJneURhdGEpO1xyXG4gICAgICAgIHRoaXMubWFzay5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY291bnQuc3RyaW5nID0gKHRoaXMuX2VuZXJneURhdGEuZW5lcmd5Q291bnQgLSAxMCkudG9TdHJpbmcoKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNwYXduKGNjLm1vdmVUbygwLjM1LCBjYy52MigyMzUsIDE5NCkpLCBjYy5zY2FsZVRvKDAuMzUsIDAuMykpLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vIG5lZWQgY2hhbmdlIGRhdGFcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAvLyAgICAgVXBkYXRlRW5lcmd5KHRoaXMuX2VuZXJneURhdGEpO1xyXG4gICAgICAgIC8vIH0pKSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
