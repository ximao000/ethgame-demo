
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
        if (!item || (item && item.renderIdx == idx && item.robotId == data.roomTypeData.id))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYWNrcGFja1xcVUlfQmFja1BhY2tTY3JvbGxWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUFpRDtBQUNqRCxzREFBaUQ7QUFHakQsK0NBQTBDO0FBS3BDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQW1ELHlDQUFhO0lBQWhFO1FBQUEscUVBNkpDO1FBM0pHLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUViLGdCQUFVLEdBQW1CLEVBQUUsQ0FBQztRQUNoQyxnQkFBVSxHQUE2RSxFQUFFLENBQUM7UUFFMUYsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixnQkFBVSxHQUFHLENBQUMsQ0FBQzs7SUE4STNCLENBQUM7SUE1SUcsc0NBQU0sR0FBTjtRQUFBLGlCQWVDO1FBZEcsd0VBQXdFO1FBQ3hFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDOUQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUVsQyxJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ2pELElBQUksRUFBRSxHQUFHO1lBQ0wsSUFBSSxFQUFFLEdBQUcsaUJBQWlCLENBQUMs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QkFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Ozs7S0FDaEM7SUFFTyw2Q0FBYSxHQUFyQjtRQUNJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM3QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JHLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxHQUFHLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUExSkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2REFDUztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZEQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkRBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7MkRBQ2I7SUFSSixxQkFBcUI7UUFEekMsT0FBTztPQUNhLHFCQUFxQixDQTZKekM7SUFBRCw0QkFBQztDQTdKRCxBQTZKQyxDQTdKa0QsRUFBRSxDQUFDLFVBQVUsR0E2Si9EO2tCQTdKb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YUJhc2VLZXkgfSBmcm9tIFwiLi4vQmFzZU1vZGVsL1R5cGVzXCI7XG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvRGF0YU1hbmFnZXJcIjtcbmltcG9ydCB7IElQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL01vZGVsL1BsYXllclByb3BcIjtcbmltcG9ydCB7IElSb2JvdCB9IGZyb20gXCIuLi9Nb2RlbC9Sb2JvdFByb3BcIjtcbmltcG9ydCBCYWNrcGFja0l0ZW0gZnJvbSBcIi4vQmFja3BhY2tJdGVtXCI7XG5cblxuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlfQmFja1BhY2tTY3JvbGxWaWV3IGV4dGVuZHMgY2MuU2Nyb2xsVmlldyB7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBpdGVtUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYXlvdXQpXG4gICAgbHl0Q29udGVudDogY2MuTGF5b3V0ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBtYXNrTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6ICfmr4/ooYzkuKrmlbAnIH0pXG4gICAgY29sQ291bnQ6IG51bWJlciA9IDM7XG5cbiAgICBwcml2YXRlIF9pdGVtUG9vbHM6IEJhY2twYWNrSXRlbVtdID0gW107XG4gICAgcHJpdmF0ZSBfY2FjaGVEYXRhOiB7IGlkeDogbnVtYmVyLCByb29tVHlwZURhdGE6IElSb2JvdCwgcG9vbElkeDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9W10gPSBbXTtcblxuICAgIHByaXZhdGUgX2luaXRlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3RvdGFsSGVpZ2h0ID0gMDtcbiAgICBwcml2YXRlIF9pdGVtQ291bnQgPSAwO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyB0aGlzLmNvbnRlbnQucGFyZW50LnBhcmVudC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgICAgdGhpcy5jb250ZW50LnBhcmVudC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgICAgdGhpcy5fSW5pdFBvb2xTaXplKCk7XG4gICAgICAgIHRoaXMuX2l0ZW1Qb29scyA9IFtdO1xuICAgICAgICB0aGlzLmNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKCk7XG5cbiAgICAgICAgbGV0IGluaXRJdGVtR2VuZXJhdG9yID0gdGhpcy5fR2V0SXRlbUdlbmVyYXRvcigpO1xuICAgICAgICBsZXQgY2IgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaXQgPSBpbml0SXRlbUdlbmVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICBpZiAoaXQuZG9uZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZShjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoY2IsIDEgLyBjYy5nYW1lLmdldEZyYW1lUmF0ZSgpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIC8vIGxldCB0ZXN0RGF0YTogSVJvYm90W10gPSBbXTtcbiAgICAgICAgLy8gZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDIwOyBpbmRleCsrKSB7XG4gICAgICAgIC8vICAgICBsZXQgZGF0YTogSVJvYm90ID0ge1xuICAgICAgICAvLyAgICAgICAgIGlkOiBpbmRleCxcbiAgICAgICAgLy8gICAgICAgICByb2JvdEltZ0lkOiBpbmRleCAlIFJvYm90VHlwZUNvdW50LFxuICAgICAgICAvLyAgICAgICAgIG1pbnQ6IGluZGV4LFxuICAgICAgICAvLyAgICAgICAgIGxldmVsOiBpbmRleCxcbiAgICAgICAgLy8gICAgICAgICByb2JvdFR5cGU6IGluZGV4ICUgUm9ib3RUeXBlQ291bnQsXG4gICAgICAgIC8vICAgICAgICAgZWZmaWNpZW5jeTogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMCkgLyAxMCxcbiAgICAgICAgLy8gICAgICAgICBsdWNrOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwKSAvIDEwLFxuICAgICAgICAvLyAgICAgICAgIGxvc3M6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTApIC8gMTAsXG4gICAgICAgIC8vICAgICAgICAgc29sOiAwXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICB0ZXN0RGF0YS5wdXNoKGRhdGEpXG5cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGxldCByb2JvdExpc3QgPSBEYXRhTWFuYWdlci5JbnN0LkdldERhdGE8SVBsYXllckluZm8+KERhdGFCYXNlS2V5LlBMQVlFUl9EQVRBKS5yb2JvdExpc3Q7XG4gICAgICAgIHRoaXMuU2V0RGF0YShyb2JvdExpc3QpO1xuICAgIH1cblxuICAgIFNldERhdGEoZ2FtZVR5cGVDcmVhdERhdGFzOiBJUm9ib3RbXSkge1xuXG4gICAgICAgIHRoaXMuX2NhY2hlRGF0YSA9IFtdO1xuICAgICAgICB0aGlzLl90b3RhbEhlaWdodCA9IDA7XG5cbiAgICAgICAgLy9BcHBMb2cuTG9nKCctLSBpdGVtQ291bnQ6ICcsIHRoaXMuX2l0ZW1Db3VudCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIHBvb2xJZHggPSAwOyBpIDwgZ2FtZVR5cGVDcmVhdERhdGFzLmxlbmd0aDsgKytpLCArK3Bvb2xJZHgpIHtcbiAgICAgICAgICAgIGlmIChwb29sSWR4ID49IHRoaXMuX2l0ZW1Db3VudCkgcG9vbElkeCA9IDA7XG4gICAgICAgICAgICBsZXQgaCA9IHRoaXMuaXRlbVByZWZhYi5kYXRhLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZHg6IGksXG4gICAgICAgICAgICAgICAgcm9vbVR5cGVEYXRhOiBnYW1lVHlwZUNyZWF0RGF0YXNbaV0sXG4gICAgICAgICAgICAgICAgcG9vbElkeDogcG9vbElkeCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb2wgPSBNYXRoLmNlaWwodGhpcy5fY2FjaGVEYXRhLmxlbmd0aCAvIHRoaXMuY29sQ291bnQpO1xuICAgICAgICBsZXQgcGFkZGluZyA9IHRoaXMubHl0Q29udGVudC5wYWRkaW5nVG9wICsgdGhpcy5seXRDb250ZW50LnBhZGRpbmdCb3R0b207XG4gICAgICAgIHRoaXMuX3RvdGFsSGVpZ2h0ID0gY29sICogdGhpcy5pdGVtUHJlZmFiLmRhdGEuaGVpZ2h0ICsgKGNvbCAtIDEpICogdGhpcy5seXRDb250ZW50LnNwYWNpbmdZICsgcGFkZGluZztcbiAgICAgICAgdGhpcy5jb250ZW50LmhlaWdodCA9IHRoaXMuZWxhc3RpYyA/IE1hdGgubWF4KHRoaXMuX3RvdGFsSGVpZ2h0LCB0aGlzLmNvbnRlbnQucGFyZW50LmhlaWdodCkgOiB0aGlzLl90b3RhbEhlaWdodDtcblxuICAgICAgICBpZiAodGhpcy5faW5pdGVkKSB0aGlzLk9uU2Nyb2xsaW5nKHRoaXMsIG51bGwpO1xuICAgIH1cblxuICAgIE9uU2Nyb2xsaW5nKGV2ZW50OiBjYy5TY3JvbGxWaWV3LCBjdXN0b21FdmVudERhdGE6IHN0cmluZykge1xuICAgICAgICBpZiAoIXRoaXMuX2luaXRlZCkgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMuaXRlbVByZWZhYi5kYXRhKSByZXR1cm47XG5cbiAgICAgICAgbGV0IG9mZnNldFkgPSBldmVudC5nZXRTY3JvbGxPZmZzZXQoKS55O1xuICAgICAgICBsZXQgcmVzID0gdGhpcy5fQ2FsY3VsYXRlU3RhcnRBbmRFbmRJZHgob2Zmc2V0WSk7XG4gICAgICAgIGZvciAobGV0IGkgPSByZXMuc3RhcnRSb3c7IGkgPD0gcmVzLmVuZFJvdzsgKytpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sQ291bnQ7ICsraikge1xuICAgICAgICAgICAgICAgIHRoaXMuX1Byb2Nlc3NTY3JvbGxWaWV3SXRlbShpICogdGhpcy5jb2xDb3VudCArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfQ2FsY3VsYXRlU3RhcnRBbmRFbmRJZHgob2Zmc2V0WTogbnVtYmVyKTogeyBzdGFydFJvdzogbnVtYmVyOyBlbmRSb3c6IG51bWJlciB9IHtcblxuICAgICAgICBsZXQgaXRlbUhlaWdodCA9IHRoaXMuaXRlbVByZWZhYi5kYXRhLmhlaWdodCArIHRoaXMubHl0Q29udGVudC5zcGFjaW5nWTtcblxuICAgICAgICBsZXQgc3RhcnRSb3cgPSBNYXRoLmZsb29yKChvZmZzZXRZICsgdGhpcy5seXRDb250ZW50LnBhZGRpbmdUb3ApIC8gaXRlbUhlaWdodCk7XG4gICAgICAgIC8vIGlmIChzdGFydFJvdyA+IDApIC0tc3RhcnRSb3c7XG5cbiAgICAgICAgbGV0IG1heFJvdyA9IE1hdGguY2VpbCh0aGlzLl9pdGVtQ291bnQgLyB0aGlzLmNvbENvdW50KSAtIDE7XG4gICAgICAgIGxldCBtYXhEYXRhQ291bnQgPSBNYXRoLmNlaWwodGhpcy5fY2FjaGVEYXRhLmxlbmd0aCAvIHRoaXMuY29sQ291bnQpO1xuXG4gICAgICAgIGxldCBlbmRSb3cgPSBzdGFydFJvdyArIG1heFJvdztcbiAgICAgICAgaWYgKGVuZFJvdyA+PSBtYXhEYXRhQ291bnQpIHtcbiAgICAgICAgICAgIGVuZFJvdyA9IG1heERhdGFDb3VudCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXJ0Um93OiBzdGFydFJvdyxcbiAgICAgICAgICAgIGVuZFJvdzogZW5kUm93LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgX1Byb2Nlc3NTY3JvbGxWaWV3SXRlbShpZHg6IG51bWJlcikge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuX2NhY2hlRGF0YVtpZHhdO1xuICAgICAgICBpZiAoIWRhdGEpIHJldHVybjtcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9pdGVtUG9vbHNbZGF0YS5wb29sSWR4XTtcbiAgICAgICAgaWYgKCFpdGVtIHx8IChpdGVtICYmIGl0ZW0ucmVuZGVySWR4ID09IGlkeCAmJiBpdGVtLnJvYm90SWQgPT0gZGF0YS5yb29tVHlwZURhdGEuaWQpKSByZXR1cm47XG4gICAgICAgIGl0ZW0ubm9kZS5uYW1lID0gaWR4LnRvU3RyaW5nKCk7XG4gICAgICAgIGl0ZW0uU2V0SXRlbShpZHgsIGRhdGEucm9vbVR5cGVEYXRhKTtcbiAgICAgICAgaXRlbS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGl0ZW0ubm9kZS5zZXRQb3NpdGlvbih0aGlzLl9DYWxjdWxhdGVJdGVtUG9zKGlkeCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX0NhbGN1bGF0ZUl0ZW1Qb3MoaWR4KSB7XG4gICAgICAgIGxldCByb3cgPSBNYXRoLmZsb29yKGlkeCAvIHRoaXMuY29sQ291bnQpO1xuICAgICAgICBsZXQgb2Zmc2V0WSA9IHJvdyAqICh0aGlzLml0ZW1QcmVmYWIuZGF0YS5oZWlnaHQgKyB0aGlzLmx5dENvbnRlbnQuc3BhY2luZ1kpICsgdGhpcy5pdGVtUHJlZmFiLmRhdGEuaGVpZ2h0IC8gMjtcbiAgICAgICAgLy9wb3NYXG4gICAgICAgIGxldCB4U3RhcnQgPSAtdGhpcy5seXRDb250ZW50Lm5vZGUud2lkdGggLyAyICsgdGhpcy5seXRDb250ZW50LnBhZGRpbmdMZWZ0O1xuICAgICAgICBsZXQgY29sID0gaWR4IC0gcm93ICogdGhpcy5jb2xDb3VudDtcbiAgICAgICAgbGV0IHggPSB4U3RhcnQgKyBjb2wgKiAodGhpcy5pdGVtUHJlZmFiLmRhdGEud2lkdGggKyB0aGlzLmx5dENvbnRlbnQuc3BhY2luZ1gpICsgdGhpcy5pdGVtUHJlZmFiLmRhdGEud2lkdGggLyAyO1xuICAgICAgICByZXR1cm4gY2MudjIoeCwgLW9mZnNldFkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgKl9HZXRJdGVtR2VuZXJhdG9yKCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5faXRlbUNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVByZWZhYik7XG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgbGV0IGNvbXAgPSBub2RlLmdldENvbXBvbmVudChCYWNrcGFja0l0ZW0pO1xuICAgICAgICAgICAgdGhpcy5faXRlbVBvb2xzLnB1c2goY29tcCk7XG4gICAgICAgICAgICB5aWVsZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbml0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLk9uU2Nyb2xsaW5nKHRoaXMsIG51bGwpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX0luaXRQb29sU2l6ZSgpIHtcbiAgICAgICAgbGV0IGl0ZW1fdyA9IHRoaXMuaXRlbVByZWZhYi5kYXRhLndpZHRoO1xuICAgICAgICBsZXQgaXRlbV9oID0gdGhpcy5pdGVtUHJlZmFiLmRhdGEuaGVpZ2h0O1xuICAgICAgICBsZXQgY29sQ291bnQgPSB0aGlzLmNvbENvdW50O1xuICAgICAgICBsZXQgcm93Q291bnQgPSBNYXRoLmFicyhNYXRoLmNlaWwodGhpcy5jb250ZW50LnBhcmVudC5oZWlnaHQgLyAoaXRlbV9oICsgdGhpcy5seXRDb250ZW50LnNwYWNpbmdZKSkpO1xuICAgICAgICB0aGlzLl9pdGVtQ291bnQgPSBjb2xDb3VudCAqIChyb3dDb3VudCArIDEpO1xuICAgIH1cbn1cbiJdfQ==