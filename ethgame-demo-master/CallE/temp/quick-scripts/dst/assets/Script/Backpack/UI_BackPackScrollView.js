
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