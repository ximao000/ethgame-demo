
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