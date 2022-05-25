
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
require('./assets/Script/BaseModel/MsgEvent');
require('./assets/Script/Friend/FriendItem');
require('./assets/Script/Friend/FriendProp');
require('./assets/Script/Friend/UI_FriendScrollView');
require('./assets/Script/MainScene/MainSceneCtrl');
require('./assets/Script/MainScene/RobotInforCtrl');
require('./assets/Script/Model/RobotProp');
require('./assets/Script/Shop/ShopItem');
require('./assets/Script/Shop/UI_ShopScrollView');

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
var RobotProp_1 = require("../Model/RobotProp");
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
    };
    UI_ShopScrollView.prototype.onEnable = function () {
        _super.prototype.onEnable.call(this);
        var testData = [];
        for (var index = 0; index < 20; index++) {
            var data = {
                id: index,
                robotImgId: index % RobotProp_1.RobotTypeCount,
                mint: index,
                sol: index,
                level: index,
                robotType: index % RobotProp_1.RobotTypeCount,
                efficiency: Math.ceil(Math.random() * 10) / 10,
                luck: Math.ceil(Math.random() * 10) / 10,
                loss: Math.ceil(Math.random() * 10) / 10
            };
            testData.push(data);
        }
        this.SetData(testData);
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
        if (!item || (item && item.renderIdx == idx))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTaG9wXFxVSV9TaG9wU2Nyb2xsVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBNEQ7QUFDNUQsdUNBQWtDO0FBSTVCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQStDLHFDQUFhO0lBQTVEO1FBQUEscUVBMkpDO1FBekpHLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUViLGdCQUFVLEdBQWUsRUFBRSxDQUFDO1FBQzVCLGdCQUFVLEdBQTZFLEVBQUUsQ0FBQztRQUUxRixhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDOztJQTRJM0IsQ0FBQztJQTFJRyxrQ0FBTSxHQUFOO1FBQUEsaUJBZUM7UUFkRyx3RUFBd0U7UUFDeEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM5RCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRWxDLElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDakQsSUFBSSxFQUFFLEdBQUc7WUFDTCxJQUFJLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQyxJ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SUFSSixpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQTJKckM7SUFBRCx3QkFBQztDQTNKRCxBQTJKQyxDQTNKOEMsRUFBRSxDQUFDLFVBQVUsR0EySjNEO2tCQTNKb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJvYm90LCBSb2JvdFR5cGVDb3VudCB9IGZyb20gXCIuLi9Nb2RlbC9Sb2JvdFByb3BcIjtcbmltcG9ydCBTaG9wSXRlbSBmcm9tIFwiLi9TaG9wSXRlbVwiO1xuXG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSV9TaG9wU2Nyb2xsVmlldyBleHRlbmRzIGNjLlNjcm9sbFZpZXcge1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgaXRlbVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGF5b3V0KVxuICAgIGx5dENvbnRlbnQ6IGNjLkxheW91dCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWFza05vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiAn5q+P6KGM5Liq5pWwJyB9KVxuICAgIGNvbENvdW50OiBudW1iZXIgPSAzO1xuXG4gICAgcHJpdmF0ZSBfaXRlbVBvb2xzOiBTaG9wSXRlbVtdID0gW107XG4gICAgcHJpdmF0ZSBfY2FjaGVEYXRhOiB7IGlkeDogbnVtYmVyLCByb29tVHlwZURhdGE6IElSb2JvdCwgcG9vbElkeDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9W10gPSBbXTtcblxuICAgIHByaXZhdGUgX2luaXRlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3RvdGFsSGVpZ2h0ID0gMDtcbiAgICBwcml2YXRlIF9pdGVtQ291bnQgPSAwO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyB0aGlzLmNvbnRlbnQucGFyZW50LnBhcmVudC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgICAgdGhpcy5jb250ZW50LnBhcmVudC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgICAgdGhpcy5fSW5pdFBvb2xTaXplKCk7XG4gICAgICAgIHRoaXMuX2l0ZW1Qb29scyA9IFtdO1xuICAgICAgICB0aGlzLmNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKCk7XG5cbiAgICAgICAgbGV0IGluaXRJdGVtR2VuZXJhdG9yID0gdGhpcy5fR2V0SXRlbUdlbmVyYXRvcigpO1xuICAgICAgICBsZXQgY2IgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaXQgPSBpbml0SXRlbUdlbmVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICBpZiAoaXQuZG9uZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZShjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoY2IsIDEgLyBjYy5nYW1lLmdldEZyYW1lUmF0ZSgpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIGxldCB0ZXN0RGF0YTogSVJvYm90W10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDIwOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgZGF0YTogSVJvYm90ID0ge1xuICAgICAgICAgICAgICAgIGlkOiBpbmRleCxcbiAgICAgICAgICAgICAgICByb2JvdEltZ0lkOiBpbmRleCAlIFJvYm90VHlwZUNvdW50LFxuICAgICAgICAgICAgICAgIG1pbnQ6IGluZGV4LFxuICAgICAgICAgICAgICAgIHNvbDogaW5kZXgsXG4gICAgICAgICAgICAgICAgbGV2ZWw6IGluZGV4LFxuICAgICAgICAgICAgICAgIHJvYm90VHlwZTogaW5kZXggJSBSb2JvdFR5cGVDb3VudCxcbiAgICAgICAgICAgICAgICBlZmZpY2llbmN5OiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwKSAvIDEwLFxuICAgICAgICAgICAgICAgIGx1Y2s6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTApIC8gMTAsXG4gICAgICAgICAgICAgICAgbG9zczogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMCkgLyAxMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGVzdERhdGEucHVzaChkYXRhKVxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5TZXREYXRhKHRlc3REYXRhKTtcbiAgICB9XG5cbiAgICBTZXREYXRhKGdhbWVUeXBlQ3JlYXREYXRhczogSVJvYm90W10pIHtcblxuICAgICAgICB0aGlzLl9jYWNoZURhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5fdG90YWxIZWlnaHQgPSAwO1xuXG4gICAgICAgIC8vQXBwTG9nLkxvZygnLS0gaXRlbUNvdW50OiAnLCB0aGlzLl9pdGVtQ291bnQpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBwb29sSWR4ID0gMDsgaSA8IGdhbWVUeXBlQ3JlYXREYXRhcy5sZW5ndGg7ICsraSwgKytwb29sSWR4KSB7XG4gICAgICAgICAgICBpZiAocG9vbElkeCA+PSB0aGlzLl9pdGVtQ291bnQpIHBvb2xJZHggPSAwO1xuICAgICAgICAgICAgbGV0IGggPSB0aGlzLml0ZW1QcmVmYWIuZGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZURhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgaWR4OiBpLFxuICAgICAgICAgICAgICAgIHJvb21UeXBlRGF0YTogZ2FtZVR5cGVDcmVhdERhdGFzW2ldLFxuICAgICAgICAgICAgICAgIHBvb2xJZHg6IHBvb2xJZHgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY29sID0gTWF0aC5jZWlsKHRoaXMuX2NhY2hlRGF0YS5sZW5ndGggLyB0aGlzLmNvbENvdW50KTtcbiAgICAgICAgbGV0IHBhZGRpbmcgPSB0aGlzLmx5dENvbnRlbnQucGFkZGluZ1RvcCArIHRoaXMubHl0Q29udGVudC5wYWRkaW5nQm90dG9tO1xuICAgICAgICB0aGlzLl90b3RhbEhlaWdodCA9IGNvbCAqIHRoaXMuaXRlbVByZWZhYi5kYXRhLmhlaWdodCArIChjb2wgLSAxKSAqIHRoaXMubHl0Q29udGVudC5zcGFjaW5nWSArIHBhZGRpbmc7XG4gICAgICAgIHRoaXMuY29udGVudC5oZWlnaHQgPSB0aGlzLmVsYXN0aWMgPyBNYXRoLm1heCh0aGlzLl90b3RhbEhlaWdodCwgdGhpcy5jb250ZW50LnBhcmVudC5oZWlnaHQpIDogdGhpcy5fdG90YWxIZWlnaHQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX2luaXRlZCkgdGhpcy5PblNjcm9sbGluZyh0aGlzLCBudWxsKTtcbiAgICB9XG5cbiAgICBPblNjcm9sbGluZyhldmVudDogY2MuU2Nyb2xsVmlldywgY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbml0ZWQpIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLml0ZW1QcmVmYWIuZGF0YSkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBvZmZzZXRZID0gZXZlbnQuZ2V0U2Nyb2xsT2Zmc2V0KCkueTtcbiAgICAgICAgbGV0IHJlcyA9IHRoaXMuX0NhbGN1bGF0ZVN0YXJ0QW5kRW5kSWR4KG9mZnNldFkpO1xuICAgICAgICBmb3IgKGxldCBpID0gcmVzLnN0YXJ0Um93OyBpIDw9IHJlcy5lbmRSb3c7ICsraSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbENvdW50OyArK2opIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9Qcm9jZXNzU2Nyb2xsVmlld0l0ZW0oaSAqIHRoaXMuY29sQ291bnQgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX0NhbGN1bGF0ZVN0YXJ0QW5kRW5kSWR4KG9mZnNldFk6IG51bWJlcik6IHsgc3RhcnRSb3c6IG51bWJlcjsgZW5kUm93OiBudW1iZXIgfSB7XG5cbiAgICAgICAgbGV0IGl0ZW1IZWlnaHQgPSB0aGlzLml0ZW1QcmVmYWIuZGF0YS5oZWlnaHQgKyB0aGlzLmx5dENvbnRlbnQuc3BhY2luZ1k7XG5cbiAgICAgICAgbGV0IHN0YXJ0Um93ID0gTWF0aC5mbG9vcigob2Zmc2V0WSArIHRoaXMubHl0Q29udGVudC5wYWRkaW5nVG9wKSAvIGl0ZW1IZWlnaHQpO1xuICAgICAgICAvLyBpZiAoc3RhcnRSb3cgPiAwKSAtLXN0YXJ0Um93O1xuXG4gICAgICAgIGxldCBtYXhSb3cgPSBNYXRoLmNlaWwodGhpcy5faXRlbUNvdW50IC8gdGhpcy5jb2xDb3VudCkgLSAxO1xuICAgICAgICBsZXQgbWF4RGF0YUNvdW50ID0gTWF0aC5jZWlsKHRoaXMuX2NhY2hlRGF0YS5sZW5ndGggLyB0aGlzLmNvbENvdW50KTtcblxuICAgICAgICBsZXQgZW5kUm93ID0gc3RhcnRSb3cgKyBtYXhSb3c7XG4gICAgICAgIGlmIChlbmRSb3cgPj0gbWF4RGF0YUNvdW50KSB7XG4gICAgICAgICAgICBlbmRSb3cgPSBtYXhEYXRhQ291bnQgLSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGFydFJvdzogc3RhcnRSb3csXG4gICAgICAgICAgICBlbmRSb3c6IGVuZFJvdyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9Qcm9jZXNzU2Nyb2xsVmlld0l0ZW0oaWR4OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLl9jYWNoZURhdGFbaWR4XTtcbiAgICAgICAgaWYgKCFkYXRhKSByZXR1cm47XG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5faXRlbVBvb2xzW2RhdGEucG9vbElkeF07XG4gICAgICAgIGlmICghaXRlbSB8fCAoaXRlbSAmJiBpdGVtLnJlbmRlcklkeCA9PSBpZHgpKSByZXR1cm47XG4gICAgICAgIGl0ZW0ubm9kZS5uYW1lID0gaWR4LnRvU3RyaW5nKCk7XG4gICAgICAgIGl0ZW0uU2V0SXRlbShpZHgsIGRhdGEucm9vbVR5cGVEYXRhKTtcbiAgICAgICAgaXRlbS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGl0ZW0ubm9kZS5zZXRQb3NpdGlvbih0aGlzLl9DYWxjdWxhdGVJdGVtUG9zKGlkeCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX0NhbGN1bGF0ZUl0ZW1Qb3MoaWR4KSB7XG4gICAgICAgIGxldCByb3cgPSBNYXRoLmZsb29yKGlkeCAvIHRoaXMuY29sQ291bnQpO1xuICAgICAgICBsZXQgb2Zmc2V0WSA9IHJvdyAqICh0aGlzLml0ZW1QcmVmYWIuZGF0YS5oZWlnaHQgKyB0aGlzLmx5dENvbnRlbnQuc3BhY2luZ1kpICsgdGhpcy5pdGVtUHJlZmFiLmRhdGEuaGVpZ2h0IC8gMjtcbiAgICAgICAgLy9wb3NYXG4gICAgICAgIGxldCB4U3RhcnQgPSAtdGhpcy5seXRDb250ZW50Lm5vZGUud2lkdGggLyAyICsgdGhpcy5seXRDb250ZW50LnBhZGRpbmdMZWZ0O1xuICAgICAgICBsZXQgY29sID0gaWR4IC0gcm93ICogdGhpcy5jb2xDb3VudDtcbiAgICAgICAgbGV0IHggPSB4U3RhcnQgKyBjb2wgKiAodGhpcy5pdGVtUHJlZmFiLmRhdGEud2lkdGggKyB0aGlzLmx5dENvbnRlbnQuc3BhY2luZ1gpICsgdGhpcy5pdGVtUHJlZmFiLmRhdGEud2lkdGggLyAyO1xuICAgICAgICByZXR1cm4gY2MudjIoeCwgLW9mZnNldFkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgKl9HZXRJdGVtR2VuZXJhdG9yKCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5faXRlbUNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVByZWZhYik7XG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgbGV0IGNvbXAgPSBub2RlLmdldENvbXBvbmVudChTaG9wSXRlbSk7XG4gICAgICAgICAgICB0aGlzLl9pdGVtUG9vbHMucHVzaChjb21wKTtcbiAgICAgICAgICAgIHlpZWxkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2luaXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuT25TY3JvbGxpbmcodGhpcywgbnVsbCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfSW5pdFBvb2xTaXplKCkge1xuICAgICAgICBsZXQgaXRlbV93ID0gdGhpcy5pdGVtUHJlZmFiLmRhdGEud2lkdGg7XG4gICAgICAgIGxldCBpdGVtX2ggPSB0aGlzLml0ZW1QcmVmYWIuZGF0YS5oZWlnaHQ7XG4gICAgICAgIGxldCBjb2xDb3VudCA9IHRoaXMuY29sQ291bnQ7XG4gICAgICAgIGxldCByb3dDb3VudCA9IE1hdGguYWJzKE1hdGguY2VpbCh0aGlzLmNvbnRlbnQucGFyZW50LmhlaWdodCAvIChpdGVtX2ggKyB0aGlzLmx5dENvbnRlbnQuc3BhY2luZ1kpKSk7XG4gICAgICAgIHRoaXMuX2l0ZW1Db3VudCA9IGNvbENvdW50ICogKHJvd0NvdW50ICsgMSk7XG4gICAgfVxufVxuIl19
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
var RobotInforCtrl_1 = require("../MainScene/RobotInforCtrl");
var RobotProp_1 = require("../Model/RobotProp");
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
    BackpackItem.prototype.SetItem = function (idx, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._renderIdx = idx;
                this._robotData = data;
                this.lbMint.string = "Mint:" + data.mint;
                this.lbID.string = "#" + data.id;
                this.lbLv.string = "Lv " + data.level;
                this.lbType.string = RobotProp_1.RobotTypeDesc[data.robotType];
                this.icon.spriteFrame = this.iconSFs[data.robotImgId];
                this.btnUse.active = false;
                return [2 /*return*/];
            });
        });
    };
    BackpackItem.prototype.OnClickSelf = function (event, customEventData) {
        Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.SHOW_ROBOT_INFOR, this._robotData, RobotInforCtrl_1.INFOR_STATE.HAED);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYWNrcGFja1xcQmFja3BhY2tJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUFtQztBQUNuQyxrREFBK0M7QUFDL0MsOERBQTBEO0FBQzFELGdEQUEyRDtBQUNyRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQTZDQztRQTNDRyxVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUd0QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLFVBQUksR0FBYSxJQUFJLENBQUM7UUFJdEIsYUFBTyxHQUFxQixFQUFFLENBQUM7UUFHL0IsWUFBTSxHQUFZLElBQUksQ0FBQztRQUtmLGdCQUFVLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDeEIsZ0JBQVUsR0FBVyxJQUFJLENBQUM7O0lBa0J0QyxDQUFDO0lBdEJHLHNCQUFJLG1DQUFTO2FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFJSyw4QkFBTyxHQUFiLFVBQWMsR0FBVyxFQUFFLElBQVk7OztnQkFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUE7Z0JBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyx5QkFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs7OztLQUU5QjtJQUVELGtDQUFXLEdBQVgsVUFBWSxLQUFLLEVBQUUsZUFBZTtRQUM5QixnQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLDRCQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakYsQ0FBQztJQXpDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNHO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ0s7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDRztJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ0c7SUFJdEI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7aURBQ0k7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDSztJQXJCTixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBNkNoQztJQUFELG1CQUFDO0NBN0NELEFBNkNDLENBN0N5QyxFQUFFLENBQUMsU0FBUyxHQTZDckQ7a0JBN0NvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vQXBwL0dsb2JhbFwiO1xuaW1wb3J0IHsgTG9jTXNnIH0gZnJvbSBcIi4uL0Jhc2VNb2RlbC9Nc2dFdmVudFwiO1xuaW1wb3J0IHsgSU5GT1JfU1RBVEUgfSBmcm9tIFwiLi4vTWFpblNjZW5lL1JvYm90SW5mb3JDdHJsXCI7XG5pbXBvcnQgeyBJUm9ib3QsIFJvYm90VHlwZURlc2MgfSBmcm9tIFwiLi4vTW9kZWwvUm9ib3RQcm9wXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja3BhY2tJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGljb246IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJUeXBlOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJJRDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiTWludDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiTHY6IGNjLkxhYmVsID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgaWNvblNGczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuVXNlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGdldCByZW5kZXJJZHgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJJZHg7XG4gICAgfVxuICAgIHByaXZhdGUgX3JlbmRlcklkeDogbnVtYmVyID0gLTE7XG4gICAgcHJpdmF0ZSBfcm9ib3REYXRhOiBJUm9ib3QgPSBudWxsO1xuXG4gICAgYXN5bmMgU2V0SXRlbShpZHg6IG51bWJlciwgZGF0YTogSVJvYm90KSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcklkeCA9IGlkeDtcbiAgICAgICAgdGhpcy5fcm9ib3REYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5sYk1pbnQuc3RyaW5nID0gXCJNaW50OlwiICsgZGF0YS5taW50O1xuICAgICAgICB0aGlzLmxiSUQuc3RyaW5nID0gXCIjXCIgKyBkYXRhLmlkXG4gICAgICAgIHRoaXMubGJMdi5zdHJpbmcgPSBcIkx2IFwiICsgZGF0YS5sZXZlbDtcbiAgICAgICAgdGhpcy5sYlR5cGUuc3RyaW5nID0gUm9ib3RUeXBlRGVzY1tkYXRhLnJvYm90VHlwZV07XG4gICAgICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuaWNvblNGc1tkYXRhLnJvYm90SW1nSWRdO1xuICAgICAgICB0aGlzLmJ0blVzZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgIH1cblxuICAgIE9uQ2xpY2tTZWxmKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcbiAgICAgICAgR2xvYmFsLkluc3QuRW1pdChMb2NNc2cuU0hPV19ST0JPVF9JTkZPUiwgdGhpcy5fcm9ib3REYXRhLCBJTkZPUl9TVEFURS5IQUVEKTtcbiAgICB9XG5cbn1cbiJdfQ==
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
var RobotProp_1 = require("../Model/RobotProp");
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
                this.lbRobot.string = RobotProp_1.RobotTypeDesc[data.robot.robotType];
                this.ndEnergy.active = data.getEnergy;
                this.icon.spriteFrame = this.iconSFs[data.iconId];
                return [2 /*return*/];
            });
        });
    };
    HotRoomItem.prototype.OnClickSelf = function (event, customEventData) {
        console.log(this._renderIdx);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxGcmllbmRcXEZyaWVuZEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQW1EO0FBRzdDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBTTVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBb0NDO1FBbENHLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsYUFBTyxHQUFxQixFQUFFLENBQUM7UUFLdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUN4QixlQUFTLEdBQVcsQ0FBQyxDQUFDOztJQWdCbEMsQ0FBQztJQXBCRyxzQkFBSSxrQ0FBUzthQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBSUssNkJBQU8sR0FBYixVQUFjLEdBQVcsRUFBRSxJQUFhOzs7Z0JBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO2dCQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLHlCQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7Ozs7S0FDcEQ7SUFFRCxpQ0FBVyxHQUFYLFVBQVksS0FBSyxFQUFFLGVBQWU7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFakMsQ0FBQztJQWhDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNHO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ0s7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDTTtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dEQUNJO0lBZGQsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQW9DL0I7SUFBRCxrQkFBQztDQXBDRCxBQW9DQyxDQXBDd0MsRUFBRSxDQUFDLFNBQVMsR0FvQ3BEO2tCQXBDb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvYm90VHlwZURlc2MgfSBmcm9tIFwiLi4vTW9kZWwvUm9ib3RQcm9wXCI7XG5pbXBvcnQgeyBJRnJpZW5kIH0gZnJvbSBcIi4vRnJpZW5kUHJvcFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5cblxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG90Um9vbUl0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgaWNvbjogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYk5hbWU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYlJvYm90OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuZEVuZXJneTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBpY29uU0ZzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cbiAgICBnZXQgcmVuZGVySWR4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVySWR4O1xuICAgIH1cbiAgICBwcml2YXRlIF9yZW5kZXJJZHg6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgX2ZyaWRlbklkOiBudW1iZXIgPSAwO1xuXG4gICAgYXN5bmMgU2V0SXRlbShpZHg6IG51bWJlciwgZGF0YTogSUZyaWVuZCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJJZHggPSBpZHg7XG4gICAgICAgIHRoaXMuX2ZyaWRlbklkID0gZGF0YS5pZDtcbiAgICAgICAgdGhpcy5sYk5hbWUuc3RyaW5nID0gZGF0YS5uYW1lO1xuICAgICAgICB0aGlzLmxiUm9ib3Quc3RyaW5nID0gUm9ib3RUeXBlRGVzY1tkYXRhLnJvYm90LnJvYm90VHlwZV07XG4gICAgICAgIHRoaXMubmRFbmVyZ3kuYWN0aXZlID0gZGF0YS5nZXRFbmVyZ3k7XG4gICAgICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuaWNvblNGc1tkYXRhLmljb25JZF1cbiAgICB9XG5cbiAgICBPbkNsaWNrU2VsZihldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3JlbmRlcklkeCk7XG5cbiAgICB9XG5cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluU2NlbmVcXFJvYm90SW5mb3JDdHJsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkQ7QUFFckQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBWSxXQUlYO0FBSkQsV0FBWSxXQUFXO0lBQ25CLDJDQUFHLENBQUE7SUFDSCw2Q0FBSSxDQUFBO0lBQ0oscURBQVEsQ0FBQTtBQUNaLENBQUMsRUFKVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUl0QjtBQUdEO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBeUVDO1FBdEVHLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUd0QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUd0QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUc5QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixhQUFPLEdBQXFCLEVBQUUsQ0FBQztRQUcvQixhQUFPLEdBQWMsRUFBRSxDQUFDOztRQXVDeEIsaUJBQWlCO0lBQ3JCLENBQUM7SUF0Q2EsaUNBQVEsR0FBbEI7UUFDSSxTQUFTO1FBQ1QsdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixxQkFBcUI7UUFDckIsbUNBQW1DO1FBQ25DLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YsY0FBYztRQUNkLEtBQUs7UUFDTCw4Q0FBOEM7SUFDbEQsQ0FBQztJQUNELGtDQUFTLEdBQVQsVUFBVSxJQUFZLEVBQUUsS0FBa0I7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcseUJBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFdEQsS0FBdUIsVUFBWSxFQUFaLEtBQUEsSUFBSSxDQUFDLE9BQU8sRUFBWixjQUFZLEVBQVosSUFBWSxFQUFFO1lBQWhDLElBQU0sUUFBUSxTQUFBO1lBQ2YsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDM0I7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFuRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNHO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ0s7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNHO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0RBQ1c7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7bURBQ0k7SUFHL0I7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7bURBQ0k7SUFqQ1AsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQXlFbEM7SUFBRCxxQkFBQztDQXpFRCxBQXlFQyxDQXpFMkMsRUFBRSxDQUFDLFNBQVMsR0F5RXZEO2tCQXpFb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElSb2JvdCwgUm9ib3RUeXBlRGVzYyB9IGZyb20gXCIuLi9Nb2RlbC9Sb2JvdFByb3BcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IGVudW0gSU5GT1JfU1RBVEUge1xuICAgIEJVWSxcbiAgICBIQUVELFxuICAgIElTVVNFSU5HLFxufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9ib3RJbmZvckN0cmwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBpY29uOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiSUQ6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYlR5cGU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYk1pbnQ6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkx2OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJFZmZpY2llbmN5OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJMdWNrOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJMb3NzOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJTb2w6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgIGljb25TRnM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXG4gICAgbmRTdGF0ZTogY2MuTm9kZVtdID0gW107XG5cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIC8vIC8vIOa1i+ivle+8m1xuICAgICAgICAvLyBsZXQgZGF0YTogSVJvYm90ID0ge1xuICAgICAgICAvLyAgICAgaWQ6IDEsXG4gICAgICAgIC8vICAgICByb2JvdEltZ0lkOiAyLFxuICAgICAgICAvLyAgICAgcm9ib3RUeXBlOiBSb2JvdFR5cGUuVFlQRV8xLFxuICAgICAgICAvLyAgICAgbGV2ZWw6IDMsXG4gICAgICAgIC8vICAgICBtaW50OiA0LFxuICAgICAgICAvLyAgICAgc29sOiA1LFxuICAgICAgICAvLyAgICAgZWZmaWNpZW5jeTogNixcbiAgICAgICAgLy8gICAgIGx1Y2s6IDcsXG4gICAgICAgIC8vICAgICBsb3NzOiA4XG4gICAgICAgIC8vIH07XG4gICAgICAgIC8vIHRoaXMuc2V0RGlhbG9nKGRhdGEsIElORk9SX1NUQVRFLklTVVNFSU5HKTtcbiAgICB9XG4gICAgc2V0RGlhbG9nKGRhdGE6IElSb2JvdCwgc3RhdGU6IElORk9SX1NUQVRFKSB7XG4gICAgICAgIHRoaXMubGJJRC5zdHJpbmcgPSBcIiNcIiArIGRhdGEuaWQ7XG4gICAgICAgIHRoaXMubGJUeXBlLnN0cmluZyA9IFJvYm90VHlwZURlc2NbZGF0YS5yb2JvdFR5cGVdO1xuICAgICAgICB0aGlzLmxiTWludC5zdHJpbmcgPSBcIk1pbnQ6XCIgKyBkYXRhLm1pbnQ7XG4gICAgICAgIHRoaXMubGJMdi5zdHJpbmcgPSBcIkx2IFwiICsgZGF0YS5sZXZlbDtcbiAgICAgICAgdGhpcy5sYkVmZmljaWVuY3kuc3RyaW5nID0gXCJcIiArIGRhdGEuZWZmaWNpZW5jeTtcbiAgICAgICAgdGhpcy5sYkx1Y2suc3RyaW5nID0gXCJcIiArIGRhdGEubHVjaztcbiAgICAgICAgdGhpcy5sYkxvc3Muc3RyaW5nID0gXCJcIiArIGRhdGEubG9zcztcbiAgICAgICAgdGhpcy5sYlNvbC5zdHJpbmcgPSBkYXRhLnNvbCArIFwiIFNPTFwiO1xuICAgICAgICB0aGlzLmljb24uc3ByaXRlRnJhbWUgPSB0aGlzLmljb25TRnNbZGF0YS5yb2JvdEltZ0lkXTtcblxuICAgICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIHRoaXMubmRTdGF0ZSkge1xuICAgICAgICAgICAgaXRlcmF0b3IuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uZFN0YXRlW3N0YXRlXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBPbkJ0bkNsb3NlKCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
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
    LocMsg[LocMsg["SHOW_ROBOT_INFOR"] = 0] = "SHOW_ROBOT_INFOR";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlTW9kZWxcXE1zZ0V2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksTUFFWDtBQUZELFdBQVksTUFBTTtJQUNkLDJEQUFnQixDQUFBO0FBQ3BCLENBQUMsRUFGVyxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFFakIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBMb2NNc2cge1xuICAgIFNIT1dfUk9CT1RfSU5GT1Jcbn0iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBcHBcXEdsb2JhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBWTtJQUFoRDs7SUEyQkEsQ0FBQztlQTNCb0IsTUFBTTtJQUd2QixzQkFBa0IsY0FBSTthQUF0QjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUVELHVCQUFNLEdBQU47UUFDSSxRQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBQ0QscUJBQUksR0FBSixVQUFLLEtBQXNCLEVBQUUsSUFBVSxFQUFFLElBQVUsRUFBRSxJQUFVLEVBQUUsSUFBVSxFQUFFLElBQVU7UUFDbkYsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsbUJBQUUsR0FBRixVQUFHLEtBQXNCLEVBQUUsUUFBa0IsRUFBRSxNQUFZLEVBQUUsVUFBb0I7UUFDN0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELHFCQUFJLEdBQUosVUFBSyxLQUFzQixFQUFFLFFBQWtCLEVBQUUsTUFBWSxFQUFFLFVBQW9CO1FBQy9FLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxvQkFBRyxHQUFILFVBQUksS0FBc0IsRUFBRSxRQUFtQixFQUFFLE1BQVksRUFBRSxVQUFvQjtRQUMvRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNsRSxDQUFDOztJQXRCYyxZQUFLLEdBQVcsSUFBSSxDQUFDO0lBRm5CLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0EyQjFCO0lBQUQsYUFBQztDQTNCRCxBQTJCQyxDQTNCbUMsRUFBRSxDQUFDLFNBQVMsR0EyQi9DO2tCQTNCb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY01zZyB9IGZyb20gXCIuLi9CYXNlTW9kZWwvTXNnRXZlbnRcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JhbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdDogR2xvYmFsID0gbnVsbDtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdDtcbiAgICB9XG5cbiAgICBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIEdsb2JhbC5faW5zdCA9IHRoaXM7XG4gICAgfVxuICAgIEVtaXQoZXZlbnQ6IHN0cmluZyB8IExvY01zZywgYXJnMT86IGFueSwgYXJnMj86IGFueSwgYXJnMz86IGFueSwgYXJnND86IGFueSwgYXJnNT86IGFueSkge1xuICAgICAgICB0aGlzLm5vZGUuZW1pdChldmVudC50b1N0cmluZygpLCBhcmcxLCBhcmcyLCBhcmczLCBhcmc0LCBhcmc1KTtcbiAgICB9XG5cbiAgICBPbihldmVudDogc3RyaW5nIHwgTG9jTXNnLCBjYWxsYmFjazogRnVuY3Rpb24sIHRhcmdldD86IGFueSwgdXNlQ2FwdHVyZT86IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGV2ZW50LnRvU3RyaW5nKCksIGNhbGxiYWNrLCB0YXJnZXQsIHVzZUNhcHR1cmUpO1xuICAgIH1cblxuICAgIE9uY2UoZXZlbnQ6IHN0cmluZyB8IExvY01zZywgY2FsbGJhY2s6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnksIHVzZUNhcHR1cmU/OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbmNlKGV2ZW50LnRvU3RyaW5nKCksIGNhbGxiYWNrLCB0YXJnZXQsIHVzZUNhcHR1cmUpO1xuICAgIH1cblxuICAgIE9mZihldmVudDogc3RyaW5nIHwgTG9jTXNnLCBjYWxsYmFjaz86IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnksIHVzZUNhcHR1cmU/OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoZXZlbnQudG9TdHJpbmcoKSwgY2FsbGJhY2ssIHRhcmdldCwgdXNlQ2FwdHVyZSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
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
var RobotProp_1 = require("../Model/RobotProp");
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
        var testData = [];
        for (var index = 0; index < 20; index++) {
            var data = {
                id: index,
                robotImgId: index % RobotProp_1.RobotTypeCount,
                mint: index,
                level: index,
                robotType: index % RobotProp_1.RobotTypeCount,
                efficiency: Math.ceil(Math.random() * 10) / 10,
                luck: Math.ceil(Math.random() * 10) / 10,
                loss: Math.ceil(Math.random() * 10) / 10,
                sol: 0
            };
            testData.push(data);
        }
        this.SetData(testData);
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
        if (!item || (item && item.renderIdx == idx))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYWNrcGFja1xcVUlfQmFja1BhY2tTY3JvbGxWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUE0RDtBQUM1RCwrQ0FBMEM7QUFLcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBbUQseUNBQWE7SUFBaEU7UUFBQSxxRUEySkM7UUF6SkcsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRWIsZ0JBQVUsR0FBbUIsRUFBRSxDQUFDO1FBQ2hDLGdCQUFVLEdBQTZFLEVBQUUsQ0FBQztRQUUxRixhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDOztJQTRJM0IsQ0FBQztJQTFJRyxzQ0FBTSxHQUFOO1FBQUEsaUJBZUM7UUFkRyx3RUFBd0U7UUFDeEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM5RCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRWxDLElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDakQsSUFBSSxFQUFFLEdBQUc7WUFDTCxJQUFJLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FB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QUM7MkRBQ2I7SUFSSixxQkFBcUI7UUFEekMsT0FBTztPQUNhLHFCQUFxQixDQTJKekM7SUFBRCw0QkFBQztDQTNKRCxBQTJKQyxDQTNKa0QsRUFBRSxDQUFDLFVBQVUsR0EySi9EO2tCQTNKb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJvYm90LCBSb2JvdFR5cGVDb3VudCB9IGZyb20gXCIuLi9Nb2RlbC9Sb2JvdFByb3BcIjtcbmltcG9ydCBCYWNrcGFja0l0ZW0gZnJvbSBcIi4vQmFja3BhY2tJdGVtXCI7XG5cblxuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlfQmFja1BhY2tTY3JvbGxWaWV3IGV4dGVuZHMgY2MuU2Nyb2xsVmlldyB7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBpdGVtUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYXlvdXQpXG4gICAgbHl0Q29udGVudDogY2MuTGF5b3V0ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBtYXNrTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6ICfmr4/ooYzkuKrmlbAnIH0pXG4gICAgY29sQ291bnQ6IG51bWJlciA9IDM7XG5cbiAgICBwcml2YXRlIF9pdGVtUG9vbHM6IEJhY2twYWNrSXRlbVtdID0gW107XG4gICAgcHJpdmF0ZSBfY2FjaGVEYXRhOiB7IGlkeDogbnVtYmVyLCByb29tVHlwZURhdGE6IElSb2JvdCwgcG9vbElkeDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9W10gPSBbXTtcblxuICAgIHByaXZhdGUgX2luaXRlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3RvdGFsSGVpZ2h0ID0gMDtcbiAgICBwcml2YXRlIF9pdGVtQ291bnQgPSAwO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyB0aGlzLmNvbnRlbnQucGFyZW50LnBhcmVudC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgICAgdGhpcy5jb250ZW50LnBhcmVudC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgICAgdGhpcy5fSW5pdFBvb2xTaXplKCk7XG4gICAgICAgIHRoaXMuX2l0ZW1Qb29scyA9IFtdO1xuICAgICAgICB0aGlzLmNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKCk7XG5cbiAgICAgICAgbGV0IGluaXRJdGVtR2VuZXJhdG9yID0gdGhpcy5fR2V0SXRlbUdlbmVyYXRvcigpO1xuICAgICAgICBsZXQgY2IgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaXQgPSBpbml0SXRlbUdlbmVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICBpZiAoaXQuZG9uZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZShjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoY2IsIDEgLyBjYy5nYW1lLmdldEZyYW1lUmF0ZSgpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIGxldCB0ZXN0RGF0YTogSVJvYm90W10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDIwOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgZGF0YTogSVJvYm90ID0ge1xuICAgICAgICAgICAgICAgIGlkOiBpbmRleCxcbiAgICAgICAgICAgICAgICByb2JvdEltZ0lkOiBpbmRleCAlIFJvYm90VHlwZUNvdW50LFxuICAgICAgICAgICAgICAgIG1pbnQ6IGluZGV4LFxuICAgICAgICAgICAgICAgIGxldmVsOiBpbmRleCxcbiAgICAgICAgICAgICAgICByb2JvdFR5cGU6IGluZGV4ICUgUm9ib3RUeXBlQ291bnQsXG4gICAgICAgICAgICAgICAgZWZmaWNpZW5jeTogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMCkgLyAxMCxcbiAgICAgICAgICAgICAgICBsdWNrOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwKSAvIDEwLFxuICAgICAgICAgICAgICAgIGxvc3M6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTApIC8gMTAsXG4gICAgICAgICAgICAgICAgc29sOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZXN0RGF0YS5wdXNoKGRhdGEpXG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLlNldERhdGEodGVzdERhdGEpO1xuICAgIH1cblxuICAgIFNldERhdGEoZ2FtZVR5cGVDcmVhdERhdGFzOiBJUm9ib3RbXSkge1xuXG4gICAgICAgIHRoaXMuX2NhY2hlRGF0YSA9IFtdO1xuICAgICAgICB0aGlzLl90b3RhbEhlaWdodCA9IDA7XG5cbiAgICAgICAgLy9BcHBMb2cuTG9nKCctLSBpdGVtQ291bnQ6ICcsIHRoaXMuX2l0ZW1Db3VudCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIHBvb2xJZHggPSAwOyBpIDwgZ2FtZVR5cGVDcmVhdERhdGFzLmxlbmd0aDsgKytpLCArK3Bvb2xJZHgpIHtcbiAgICAgICAgICAgIGlmIChwb29sSWR4ID49IHRoaXMuX2l0ZW1Db3VudCkgcG9vbElkeCA9IDA7XG4gICAgICAgICAgICBsZXQgaCA9IHRoaXMuaXRlbVByZWZhYi5kYXRhLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZHg6IGksXG4gICAgICAgICAgICAgICAgcm9vbVR5cGVEYXRhOiBnYW1lVHlwZUNyZWF0RGF0YXNbaV0sXG4gICAgICAgICAgICAgICAgcG9vbElkeDogcG9vbElkeCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb2wgPSBNYXRoLmNlaWwodGhpcy5fY2FjaGVEYXRhLmxlbmd0aCAvIHRoaXMuY29sQ291bnQpO1xuICAgICAgICBsZXQgcGFkZGluZyA9IHRoaXMubHl0Q29udGVudC5wYWRkaW5nVG9wICsgdGhpcy5seXRDb250ZW50LnBhZGRpbmdCb3R0b207XG4gICAgICAgIHRoaXMuX3RvdGFsSGVpZ2h0ID0gY29sICogdGhpcy5pdGVtUHJlZmFiLmRhdGEuaGVpZ2h0ICsgKGNvbCAtIDEpICogdGhpcy5seXRDb250ZW50LnNwYWNpbmdZICsgcGFkZGluZztcbiAgICAgICAgdGhpcy5jb250ZW50LmhlaWdodCA9IHRoaXMuZWxhc3RpYyA/IE1hdGgubWF4KHRoaXMuX3RvdGFsSGVpZ2h0LCB0aGlzLmNvbnRlbnQucGFyZW50LmhlaWdodCkgOiB0aGlzLl90b3RhbEhlaWdodDtcblxuICAgICAgICBpZiAodGhpcy5faW5pdGVkKSB0aGlzLk9uU2Nyb2xsaW5nKHRoaXMsIG51bGwpO1xuICAgIH1cblxuICAgIE9uU2Nyb2xsaW5nKGV2ZW50OiBjYy5TY3JvbGxWaWV3LCBjdXN0b21FdmVudERhdGE6IHN0cmluZykge1xuICAgICAgICBpZiAoIXRoaXMuX2luaXRlZCkgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMuaXRlbVByZWZhYi5kYXRhKSByZXR1cm47XG5cbiAgICAgICAgbGV0IG9mZnNldFkgPSBldmVudC5nZXRTY3JvbGxPZmZzZXQoKS55O1xuICAgICAgICBsZXQgcmVzID0gdGhpcy5fQ2FsY3VsYXRlU3RhcnRBbmRFbmRJZHgob2Zmc2V0WSk7XG4gICAgICAgIGZvciAobGV0IGkgPSByZXMuc3RhcnRSb3c7IGkgPD0gcmVzLmVuZFJvdzsgKytpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sQ291bnQ7ICsraikge1xuICAgICAgICAgICAgICAgIHRoaXMuX1Byb2Nlc3NTY3JvbGxWaWV3SXRlbShpICogdGhpcy5jb2xDb3VudCArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfQ2FsY3VsYXRlU3RhcnRBbmRFbmRJZHgob2Zmc2V0WTogbnVtYmVyKTogeyBzdGFydFJvdzogbnVtYmVyOyBlbmRSb3c6IG51bWJlciB9IHtcblxuICAgICAgICBsZXQgaXRlbUhlaWdodCA9IHRoaXMuaXRlbVByZWZhYi5kYXRhLmhlaWdodCArIHRoaXMubHl0Q29udGVudC5zcGFjaW5nWTtcblxuICAgICAgICBsZXQgc3RhcnRSb3cgPSBNYXRoLmZsb29yKChvZmZzZXRZICsgdGhpcy5seXRDb250ZW50LnBhZGRpbmdUb3ApIC8gaXRlbUhlaWdodCk7XG4gICAgICAgIC8vIGlmIChzdGFydFJvdyA+IDApIC0tc3RhcnRSb3c7XG5cbiAgICAgICAgbGV0IG1heFJvdyA9IE1hdGguY2VpbCh0aGlzLl9pdGVtQ291bnQgLyB0aGlzLmNvbENvdW50KSAtIDE7XG4gICAgICAgIGxldCBtYXhEYXRhQ291bnQgPSBNYXRoLmNlaWwodGhpcy5fY2FjaGVEYXRhLmxlbmd0aCAvIHRoaXMuY29sQ291bnQpO1xuXG4gICAgICAgIGxldCBlbmRSb3cgPSBzdGFydFJvdyArIG1heFJvdztcbiAgICAgICAgaWYgKGVuZFJvdyA+PSBtYXhEYXRhQ291bnQpIHtcbiAgICAgICAgICAgIGVuZFJvdyA9IG1heERhdGFDb3VudCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXJ0Um93OiBzdGFydFJvdyxcbiAgICAgICAgICAgIGVuZFJvdzogZW5kUm93LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgX1Byb2Nlc3NTY3JvbGxWaWV3SXRlbShpZHg6IG51bWJlcikge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuX2NhY2hlRGF0YVtpZHhdO1xuICAgICAgICBpZiAoIWRhdGEpIHJldHVybjtcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9pdGVtUG9vbHNbZGF0YS5wb29sSWR4XTtcbiAgICAgICAgaWYgKCFpdGVtIHx8IChpdGVtICYmIGl0ZW0ucmVuZGVySWR4ID09IGlkeCkpIHJldHVybjtcbiAgICAgICAgaXRlbS5ub2RlLm5hbWUgPSBpZHgudG9TdHJpbmcoKTtcbiAgICAgICAgaXRlbS5TZXRJdGVtKGlkeCwgZGF0YS5yb29tVHlwZURhdGEpO1xuICAgICAgICBpdGVtLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaXRlbS5ub2RlLnNldFBvc2l0aW9uKHRoaXMuX0NhbGN1bGF0ZUl0ZW1Qb3MoaWR4KSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfQ2FsY3VsYXRlSXRlbVBvcyhpZHgpIHtcbiAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoaWR4IC8gdGhpcy5jb2xDb3VudCk7XG4gICAgICAgIGxldCBvZmZzZXRZID0gcm93ICogKHRoaXMuaXRlbVByZWZhYi5kYXRhLmhlaWdodCArIHRoaXMubHl0Q29udGVudC5zcGFjaW5nWSkgKyB0aGlzLml0ZW1QcmVmYWIuZGF0YS5oZWlnaHQgLyAyO1xuICAgICAgICAvL3Bvc1hcbiAgICAgICAgbGV0IHhTdGFydCA9IC10aGlzLmx5dENvbnRlbnQubm9kZS53aWR0aCAvIDIgKyB0aGlzLmx5dENvbnRlbnQucGFkZGluZ0xlZnQ7XG4gICAgICAgIGxldCBjb2wgPSBpZHggLSByb3cgKiB0aGlzLmNvbENvdW50O1xuICAgICAgICBsZXQgeCA9IHhTdGFydCArIGNvbCAqICh0aGlzLml0ZW1QcmVmYWIuZGF0YS53aWR0aCArIHRoaXMubHl0Q29udGVudC5zcGFjaW5nWCkgKyB0aGlzLml0ZW1QcmVmYWIuZGF0YS53aWR0aCAvIDI7XG4gICAgICAgIHJldHVybiBjYy52Mih4LCAtb2Zmc2V0WSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSAqX0dldEl0ZW1HZW5lcmF0b3IoKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9pdGVtQ291bnQ7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtUHJlZmFiKTtcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBsZXQgY29tcCA9IG5vZGUuZ2V0Q29tcG9uZW50KEJhY2twYWNrSXRlbSk7XG4gICAgICAgICAgICB0aGlzLl9pdGVtUG9vbHMucHVzaChjb21wKTtcbiAgICAgICAgICAgIHlpZWxkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2luaXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuT25TY3JvbGxpbmcodGhpcywgbnVsbCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfSW5pdFBvb2xTaXplKCkge1xuICAgICAgICBsZXQgaXRlbV93ID0gdGhpcy5pdGVtUHJlZmFiLmRhdGEud2lkdGg7XG4gICAgICAgIGxldCBpdGVtX2ggPSB0aGlzLml0ZW1QcmVmYWIuZGF0YS5oZWlnaHQ7XG4gICAgICAgIGxldCBjb2xDb3VudCA9IHRoaXMuY29sQ291bnQ7XG4gICAgICAgIGxldCByb3dDb3VudCA9IE1hdGguYWJzKE1hdGguY2VpbCh0aGlzLmNvbnRlbnQucGFyZW50LmhlaWdodCAvIChpdGVtX2ggKyB0aGlzLmx5dENvbnRlbnQuc3BhY2luZ1kpKSk7XG4gICAgICAgIHRoaXMuX2l0ZW1Db3VudCA9IGNvbENvdW50ICogKHJvd0NvdW50ICsgMSk7XG4gICAgfVxufVxuIl19
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
exports.RobotTypeDesc = exports.RobotType = exports.RobotTypeCount = void 0;
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
    _a[RobotType.TYPE_1] = "初级机器人",
    _a[RobotType.TYPE_2] = "中级机器人",
    _a[RobotType.TYPE_3] = "高级机器人",
    _a[RobotType.TYPE_4] = "史诗机器人",
    _a);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcUm9ib3RQcm9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsT0FBTztBQUNNLFFBQUEsY0FBYyxHQUFHLENBQUMsQ0FBQztBQUNoQyxJQUFZLFNBS1g7QUFMRCxXQUFZLFNBQVM7SUFDakIsNkNBQU0sQ0FBQTtJQUNOLDZDQUFNLENBQUE7SUFDTiw2Q0FBTSxDQUFBO0lBQ04sNkNBQU0sQ0FBQTtBQUNWLENBQUMsRUFMVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUtwQjtBQUFBLENBQUM7QUFFRixHQUFHO0FBQ1UsUUFBQSxhQUFhO0lBQ3RCLEdBQUMsU0FBUyxDQUFDLE1BQU0sSUFBRyxPQUFPO0lBQzNCLEdBQUMsU0FBUyxDQUFDLE1BQU0sSUFBRyxPQUFPO0lBQzNCLEdBQUMsU0FBUyxDQUFDLE1BQU0sSUFBRyxPQUFPO0lBQzNCLEdBQUMsU0FBUyxDQUFDLE1BQU0sSUFBRyxPQUFPO1FBQzlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJUm9ib3Qge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcm9ib3RJbWdJZDogbnVtYmVyLFxuICAgIHJvYm90VHlwZTogUm9ib3RUeXBlLFxuICAgIGxldmVsOiBudW1iZXIsLy/nrYnnuqdcbiAgICBtaW50OiBudW1iZXIsLy/lkIjmiJDmrKHmlbBcbiAgICBzb2w6IG51bWJlciwvL3NvbOS7t+agvFxuXG4gICAgLy8g5bGe5oCnXG4gICAgZWZmaWNpZW5jeTogbnVtYmVyLC8v5pWI546HXG4gICAgbHVjazogbnVtYmVyLC8v5bm46L+QXG4gICAgbG9zczogbnVtYmVyLC8v5o2f6ICXXG5cbn1cblxuXG4vLyA056eN57G75Z6LXG5leHBvcnQgY29uc3QgUm9ib3RUeXBlQ291bnQgPSA0O1xuZXhwb3J0IGVudW0gUm9ib3RUeXBlIHtcbiAgICBUWVBFXzEsXG4gICAgVFlQRV8yLFxuICAgIFRZUEVfMyxcbiAgICBUWVBFXzQsXG59O1xuXG4vLyBcbmV4cG9ydCBjb25zdCBSb2JvdFR5cGVEZXNjID0ge1xuICAgIFtSb2JvdFR5cGUuVFlQRV8xXTogXCLliJ3nuqfmnLrlmajkurpcIixcbiAgICBbUm9ib3RUeXBlLlRZUEVfMl06IFwi5Lit57qn5py65Zmo5Lq6XCIsXG4gICAgW1JvYm90VHlwZS5UWVBFXzNdOiBcIumrmOe6p+acuuWZqOS6ulwiLFxuICAgIFtSb2JvdFR5cGUuVFlQRV80XTogXCLlj7Lor5fmnLrlmajkurpcIixcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Friend/FriendProp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8edf5hwF59AwpVHzNEnyJy+', 'FriendProp');
// Script/Friend/FriendProp.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxGcmllbmRcXEZyaWVuZFByb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElSb2JvdCB9IGZyb20gXCIuLi9Nb2RlbC9Sb2JvdFByb3BcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJRnJpZW5kIHtcbiAgICBpZDogbnVtYmVyLFxuICAgIGljb25JZDogbnVtYmVyLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICByb2JvdDogSVJvYm90LFxuICAgIGdldEVuZXJneTogYm9vbGVhbixcblxufSJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluU2NlbmVcXE1haW5TY2VuZUN0cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQW1DO0FBQ25DLGtEQUErQztBQUUvQyxtREFBK0Q7QUFFekQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUE4RUM7UUEzRUcsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFJOUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBZ0IsRUFBRSxDQUFDO1FBRzdCLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUU5Qix5QkFBbUIsR0FBVyxDQUFDLENBQUM7UUFDaEMseUJBQW1CLEdBQVksS0FBSyxDQUFDO1FBQ3JDLGtCQUFZLEdBQWMsRUFBRSxDQUFDO1FBQzdCLG1CQUFhLEdBQTBCLElBQUksQ0FBQzs7SUE0RHhELENBQUM7SUEzRGEsMkJBQU0sR0FBaEI7UUFDSSxvQ0FBb0M7UUFFcEMsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFFN0MsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDTyxrQ0FBYSxHQUFyQjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEdBQUcsRUFBb0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxpQkFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRWxGLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUs7WUFDcEMsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxFQUFFLEtBQUksQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLHFDQUFnQixHQUF4QixVQUF5QixJQUFZLEVBQUUsS0FBa0I7UUFDckQsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUM1QyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFL0MsQ0FBQztJQUVELDBCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsK0JBQVUsR0FBVixVQUFXLEtBQUssRUFBRSxlQUFlO1FBQWpDLGlCQXVCQztRQXRCRyxJQUFJLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNyRCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsS0FBSyxvQkFBb0IsSUFBSSxJQUFJLENBQUMsbUJBQW1CO1lBQUUsT0FBTztRQUUxRixNQUFNO1FBQ04sSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztRQUNoQyxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzFHLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNuQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFFeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDdEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUM7UUFDM0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUMxSCxLQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUUvQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQzVHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxvQkFBb0IsQ0FBQztJQUdwRCxDQUFDO0lBMUVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ087SUFJOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztrREFDTztJQUc3QjtRQURDLFFBQVEsQ0FBQyx3QkFBYyxDQUFDO3NEQUNhO0lBYnJCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0E4RTlCO0lBQUQsaUJBQUM7Q0E5RUQsQUE4RUMsQ0E5RXVDLEVBQUUsQ0FBQyxTQUFTLEdBOEVuRDtrQkE5RW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2xvYmFsIGZyb20gXCIuLi9BcHAvR2xvYmFsXCI7XG5pbXBvcnQgeyBMb2NNc2cgfSBmcm9tIFwiLi4vQmFzZU1vZGVsL01zZ0V2ZW50XCI7XG5pbXBvcnQgeyBJUm9ib3QgfSBmcm9tIFwiLi4vTW9kZWwvUm9ib3RQcm9wXCI7XG5pbXBvcnQgUm9ib3RJbmZvckN0cmwsIHsgSU5GT1JfU1RBVEUgfSBmcm9tIFwiLi9Sb2JvdEluZm9yQ3RybFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsbG93b3JsZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxuICAgIG1lbnVBbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjZW50ZXJSb290OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcbiAgICBjZW50ZXJQcmVmOiBjYy5QcmVmYWJbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KFJvYm90SW5mb3JDdHJsKVxuICAgIHJvYm90SW5mb3JDdHJsOiBSb2JvdEluZm9yQ3RybCA9IG51bGw7XG5cbiAgICBwcml2YXRlIGN1ckNlbnRlckdyb3VwSW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjZW50ZXJHcm91cElzTW92aW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBjZW50ZXJHcm91cHM6IGNjLk5vZGVbXSA9IFtdO1xuICAgIHByaXZhdGUgX21hcEV2ZW50QmluZDogTWFwPHN0cmluZywgRnVuY3Rpb24+ID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICAvLyB0aGlzLm1lbnVBbmltLnBsYXkoJ21lbnVfcmVzZXQnKTtcblxuICAgICAgICBsZXQgaG9tZUNlbnRlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2VudGVyUHJlZlswXSk7XG4gICAgICAgIGhvbWVDZW50ZXIucG9zaXRpb24ueCA9IDA7XG4gICAgICAgIHRoaXMuY2VudGVyUm9vdC5hZGRDaGlsZChob21lQ2VudGVyKTtcbiAgICAgICAgbGV0IGZyaWVuZENlbnRlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2VudGVyUHJlZlsxXSk7XG4gICAgICAgIHRoaXMuY2VudGVyUm9vdC5hZGRDaGlsZChmcmllbmRDZW50ZXIpO1xuICAgICAgICBsZXQgYmFja3BhY2tDZW50ZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNlbnRlclByZWZbMl0pO1xuICAgICAgICB0aGlzLmNlbnRlclJvb3QuYWRkQ2hpbGQoYmFja3BhY2tDZW50ZXIpO1xuICAgICAgICBsZXQgc2hvcENlbnRlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2VudGVyUHJlZlszXSk7XG4gICAgICAgIHRoaXMuY2VudGVyUm9vdC5hZGRDaGlsZChzaG9wQ2VudGVyKTtcbiAgICAgICAgdGhpcy5jZW50ZXJHcm91cHMgPSB0aGlzLmNlbnRlclJvb3QuY2hpbGRyZW47XG5cbiAgICAgICAgdGhpcy5fSW5pdExpc3RlbmVyKCk7XG4gICAgfVxuICAgIHByaXZhdGUgX0luaXRMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5fbWFwRXZlbnRCaW5kID0gbmV3IE1hcDxzdHJpbmcsIEZ1bmN0aW9uPigpO1xuICAgICAgICB0aGlzLl9tYXBFdmVudEJpbmQuc2V0KExvY01zZy5TSE9XX1JPQk9UX0lORk9SLnRvU3RyaW5nKCksIHRoaXMuX1Nob3dSb2JvdERpYWxvZyk7XG5cbiAgICAgICAgdGhpcy5fbWFwRXZlbnRCaW5kLmZvckVhY2goKHZhbHVlLCBldmVudCkgPT4ge1xuICAgICAgICAgICAgR2xvYmFsLkluc3QuT24oZXZlbnQsIHZhbHVlLmJpbmQodGhpcyksIHRoaXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9TaG93Um9ib3REaWFsb2coZGF0YTogSVJvYm90LCBzdGF0ZTogSU5GT1JfU1RBVEUpIHtcbiAgICAgICAgaWYgKHRoaXMucm9ib3RJbmZvckN0cmwubm9kZS5hY3RpdmUpIHJldHVybjtcbiAgICAgICAgdGhpcy5yb2JvdEluZm9yQ3RybC5zZXREaWFsb2coZGF0YSwgc3RhdGUpO1xuXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBPbkJ0bkNsaWNrKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcbiAgICAgICAgbGV0IGxhc3RDZW50ZXJHcm91cEluZGV4ID0gcGFyc2VJbnQoY3VzdG9tRXZlbnREYXRhKTtcbiAgICAgICAgaWYgKHRoaXMuY3VyQ2VudGVyR3JvdXBJbmRleCA9PT0gbGFzdENlbnRlckdyb3VwSW5kZXggfHwgdGhpcy5jZW50ZXJHcm91cElzTW92aW5nKSByZXR1cm47XG5cbiAgICAgICAgLy/lt6bmu5HliqjvvJtcbiAgICAgICAgdGhpcy5jZW50ZXJHcm91cElzTW92aW5nID0gdHJ1ZTtcbiAgICAgICAgbGV0IGxhc3RDZW50ZXJQb3NYID0gdGhpcy5jdXJDZW50ZXJHcm91cEluZGV4IDwgbGFzdENlbnRlckdyb3VwSW5kZXggPyB0aGlzLm5vZGUud2lkdGggOiAtdGhpcy5ub2RlLndpZHRoO1xuICAgICAgICBsZXQgbW92ZVRpbWUgPSAwLjE7XG4gICAgICAgIGxldCBvbGRJbmRleCA9IHRoaXMuY3VyQ2VudGVyR3JvdXBJbmRleDtcblxuICAgICAgICB0aGlzLmNlbnRlckdyb3Vwc1tsYXN0Q2VudGVyR3JvdXBJbmRleF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jZW50ZXJHcm91cHNbbGFzdENlbnRlckdyb3VwSW5kZXhdLnggPSBsYXN0Q2VudGVyUG9zWDtcbiAgICAgICAgdGhpcy5jZW50ZXJHcm91cHNbdGhpcy5jdXJDZW50ZXJHcm91cEluZGV4XS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZVRvKG1vdmVUaW1lLCBjYy52MigtbGFzdENlbnRlclBvc1gsIDApKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jZW50ZXJHcm91cElzTW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNlbnRlckdyb3Vwc1tvbGRJbmRleF0uYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgfSkpKTtcbiAgICAgICAgdGhpcy5jZW50ZXJHcm91cHNbbGFzdENlbnRlckdyb3VwSW5kZXhdLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlVG8obW92ZVRpbWUsIGNjLnYyKDAsIDApKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICB9KSkpO1xuXG4gICAgICAgIHRoaXMuY3VyQ2VudGVyR3JvdXBJbmRleCA9IGxhc3RDZW50ZXJHcm91cEluZGV4O1xuXG5cbiAgICB9XG59XG4iXX0=
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
    ShopItem.prototype.SetItem = function (idx, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._renderIdx = idx;
                this._robotData = data;
                this._shopId = data.id;
                this.lbMint.string = "Mint:" + data.mint;
                this.lbID.string = "#" + data.id;
                this.lbSol.string = data.sol + "SOL";
                this.lbLv.string = "Lv " + data.level;
                this.lbType.string = RobotProp_1.RobotTypeDesc[data.robotType];
                this.icon.spriteFrame = this.iconSFs[data.robotImgId];
                return [2 /*return*/];
            });
        });
    };
    ShopItem.prototype.OnClickSelf = function (event, customEventData) {
        Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.SHOW_ROBOT_INFOR, this._robotData, RobotInforCtrl_1.INFOR_STATE.BUY);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTaG9wXFxTaG9wSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBbUM7QUFDbkMsa0RBQStDO0FBQy9DLDhEQUEwRDtBQUMxRCxnREFBMkQ7QUFHckQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFNNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4Q0M7UUE1Q0csVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLFVBQUksR0FBYSxJQUFJLENBQUM7UUFHdEIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBR3RCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFJdkIsYUFBTyxHQUFxQixFQUFFLENBQUM7UUFLdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUN4QixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLGdCQUFVLEdBQVcsSUFBSSxDQUFDOztJQWtCdEMsQ0FBQztJQXZCRyxzQkFBSSwrQkFBUzthQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBS0ssMEJBQU8sR0FBYixVQUFjLEdBQVcsRUFBRSxJQUFZOzs7Z0JBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO2dCQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUE7Z0JBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcseUJBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBOzs7O0tBQ3hEO0lBRUQsOEJBQVcsR0FBWCxVQUFZLEtBQUssRUFBRSxlQUFlO1FBQzlCLGdCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBTSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsNEJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBMUNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0c7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNHO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ0s7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDRztJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBSXZCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzZDQUNJO0lBckJkLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4QzVCO0lBQUQsZUFBQztDQTlDRCxBQThDQyxDQTlDcUMsRUFBRSxDQUFDLFNBQVMsR0E4Q2pEO2tCQTlDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHbG9iYWwgZnJvbSBcIi4uL0FwcC9HbG9iYWxcIjtcbmltcG9ydCB7IExvY01zZyB9IGZyb20gXCIuLi9CYXNlTW9kZWwvTXNnRXZlbnRcIjtcbmltcG9ydCB7IElORk9SX1NUQVRFIH0gZnJvbSBcIi4uL01haW5TY2VuZS9Sb2JvdEluZm9yQ3RybFwiO1xuaW1wb3J0IHsgSVJvYm90LCBSb2JvdFR5cGVEZXNjIH0gZnJvbSBcIi4uL01vZGVsL1JvYm90UHJvcFwiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cblxuXG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wSXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBpY29uOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiVHlwZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiSUQ6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYk1pbnQ6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkx2OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJTb2w6IGNjLkxhYmVsID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgaWNvblNGczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgZ2V0IHJlbmRlcklkeCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcklkeDtcbiAgICB9XG4gICAgcHJpdmF0ZSBfcmVuZGVySWR4OiBudW1iZXIgPSAtMTtcbiAgICBwcml2YXRlIF9zaG9wSWQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfcm9ib3REYXRhOiBJUm9ib3QgPSBudWxsO1xuXG4gICAgYXN5bmMgU2V0SXRlbShpZHg6IG51bWJlciwgZGF0YTogSVJvYm90KSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcklkeCA9IGlkeDtcbiAgICAgICAgdGhpcy5fcm9ib3REYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5fc2hvcElkID0gZGF0YS5pZDtcbiAgICAgICAgdGhpcy5sYk1pbnQuc3RyaW5nID0gXCJNaW50OlwiICsgZGF0YS5taW50O1xuICAgICAgICB0aGlzLmxiSUQuc3RyaW5nID0gXCIjXCIgKyBkYXRhLmlkXG4gICAgICAgIHRoaXMubGJTb2wuc3RyaW5nID0gZGF0YS5zb2wgKyBcIlNPTFwiO1xuICAgICAgICB0aGlzLmxiTHYuc3RyaW5nID0gXCJMdiBcIiArIGRhdGEubGV2ZWw7XG4gICAgICAgIHRoaXMubGJUeXBlLnN0cmluZyA9IFJvYm90VHlwZURlc2NbZGF0YS5yb2JvdFR5cGVdO1xuICAgICAgICB0aGlzLmljb24uc3ByaXRlRnJhbWUgPSB0aGlzLmljb25TRnNbZGF0YS5yb2JvdEltZ0lkXVxuICAgIH1cblxuICAgIE9uQ2xpY2tTZWxmKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcbiAgICAgICAgR2xvYmFsLkluc3QuRW1pdChMb2NNc2cuU0hPV19ST0JPVF9JTkZPUiwgdGhpcy5fcm9ib3REYXRhLCBJTkZPUl9TVEFURS5CVVkpO1xuICAgIH1cblxufVxuIl19
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
var RobotProp_1 = require("../Model/RobotProp");
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
        var testData = [];
        var robot = {
            id: 1,
            robotImgId: 2,
            robotType: RobotProp_1.RobotType.TYPE_1,
            level: 3,
            mint: 4,
            sol: 5,
            efficiency: 6,
            luck: 7,
            loss: 8
        };
        for (var index = 0; index < 20; index++) {
            var data = {
                id: index,
                iconId: Math.floor(Math.random() * 6),
                name: "玩家" + index,
                robot: robot,
                getEnergy: false
            };
            testData.push(data);
        }
        this.SetData(testData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxGcmllbmRcXFVJX0ZyaWVuZFNjcm9sbFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQXVEO0FBQ3ZELDJDQUFzQztBQUloQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFpRCx1Q0FBYTtJQUE5RDtRQUFBLHFFQWtLQztRQWhLRyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFFYixnQkFBVSxHQUFpQixFQUFFLENBQUM7UUFDOUIsZ0JBQVUsR0FBOEUsRUFBRSxDQUFDO1FBRTNGLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsZ0JBQVUsR0FBRyxDQUFDLENBQUM7O0lBbUozQixDQUFDO0lBakpHLG9DQUFNLEdBQU47UUFBQSxpQkFlQztRQWRHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDOUQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUVsQyxJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFB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LENBQUM7SUEvSkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyREFDUztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzJEQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eURBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7eURBQ2I7SUFSSixtQkFBbUI7UUFEdkMsT0FBTztPQUNhLG1CQUFtQixDQWtLdkM7SUFBRCwwQkFBQztDQWxLRCxBQWtLQyxDQWxLZ0QsRUFBRSxDQUFDLFVBQVUsR0FrSzdEO2tCQWxLb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJvYm90LCBSb2JvdFR5cGUgfSBmcm9tIFwiLi4vTW9kZWwvUm9ib3RQcm9wXCI7XG5pbXBvcnQgRnJpZW5kSXRlbSBmcm9tIFwiLi9GcmllbmRJdGVtXCI7XG5pbXBvcnQgeyBJRnJpZW5kIH0gZnJvbSBcIi4vRnJpZW5kUHJvcFwiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlfRnJpZW5kU2Nyb2xsVmlldyBleHRlbmRzIGNjLlNjcm9sbFZpZXcge1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgaXRlbVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGF5b3V0KVxuICAgIGx5dENvbnRlbnQ6IGNjLkxheW91dCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWFza05vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiAn5q+P6KGM5Liq5pWwJyB9KVxuICAgIGNvbENvdW50OiBudW1iZXIgPSAzO1xuXG4gICAgcHJpdmF0ZSBfaXRlbVBvb2xzOiBGcmllbmRJdGVtW10gPSBbXTtcbiAgICBwcml2YXRlIF9jYWNoZURhdGE6IHsgaWR4OiBudW1iZXIsIHJvb21UeXBlRGF0YTogSUZyaWVuZCwgcG9vbElkeDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9W10gPSBbXTtcblxuICAgIHByaXZhdGUgX2luaXRlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3RvdGFsSGVpZ2h0ID0gMDtcbiAgICBwcml2YXRlIF9pdGVtQ291bnQgPSAwO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQucGFyZW50LnBhcmVudC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgICAgdGhpcy5jb250ZW50LnBhcmVudC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgICAgdGhpcy5fSW5pdFBvb2xTaXplKCk7XG4gICAgICAgIHRoaXMuX2l0ZW1Qb29scyA9IFtdO1xuICAgICAgICB0aGlzLmNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKCk7XG5cbiAgICAgICAgbGV0IGluaXRJdGVtR2VuZXJhdG9yID0gdGhpcy5fR2V0SXRlbUdlbmVyYXRvcigpO1xuICAgICAgICBsZXQgY2IgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaXQgPSBpbml0SXRlbUdlbmVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICBpZiAoaXQuZG9uZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZShjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoY2IsIDEgLyBjYy5nYW1lLmdldEZyYW1lUmF0ZSgpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm9uRW5hYmxlKCk7XG4gICAgICAgIGxldCB0ZXN0RGF0YTogSUZyaWVuZFtdID0gW107XG4gICAgICAgIGxldCByb2JvdDogSVJvYm90ID0ge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICByb2JvdEltZ0lkOiAyLFxuICAgICAgICAgICAgcm9ib3RUeXBlOiBSb2JvdFR5cGUuVFlQRV8xLFxuICAgICAgICAgICAgbGV2ZWw6IDMsXG4gICAgICAgICAgICBtaW50OiA0LFxuICAgICAgICAgICAgc29sOiA1LFxuICAgICAgICAgICAgZWZmaWNpZW5jeTogNixcbiAgICAgICAgICAgIGx1Y2s6IDcsXG4gICAgICAgICAgICBsb3NzOiA4XG4gICAgICAgIH07XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyMDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IGRhdGE6IElGcmllbmQgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGluZGV4LFxuICAgICAgICAgICAgICAgIGljb25JZDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNiksXG4gICAgICAgICAgICAgICAgbmFtZTogXCLnjqnlrrZcIiArIGluZGV4LFxuICAgICAgICAgICAgICAgIHJvYm90OiByb2JvdCxcbiAgICAgICAgICAgICAgICBnZXRFbmVyZ3k6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZXN0RGF0YS5wdXNoKGRhdGEpXG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLlNldERhdGEodGVzdERhdGEpO1xuICAgIH1cblxuICAgIFNldERhdGEoZ2FtZVR5cGVDcmVhdERhdGFzOiBJRnJpZW5kW10pIHtcblxuICAgICAgICB0aGlzLl9jYWNoZURhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5fdG90YWxIZWlnaHQgPSAwO1xuXG4gICAgICAgIC8vQXBwTG9nLkxvZygnLS0gaXRlbUNvdW50OiAnLCB0aGlzLl9pdGVtQ291bnQpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBwb29sSWR4ID0gMDsgaSA8IGdhbWVUeXBlQ3JlYXREYXRhcy5sZW5ndGg7ICsraSwgKytwb29sSWR4KSB7XG4gICAgICAgICAgICBpZiAocG9vbElkeCA+PSB0aGlzLl9pdGVtQ291bnQpIHBvb2xJZHggPSAwO1xuICAgICAgICAgICAgbGV0IGggPSB0aGlzLml0ZW1QcmVmYWIuZGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLl9jYWNoZURhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgaWR4OiBpLFxuICAgICAgICAgICAgICAgIHJvb21UeXBlRGF0YTogZ2FtZVR5cGVDcmVhdERhdGFzW2ldLFxuICAgICAgICAgICAgICAgIHBvb2xJZHg6IHBvb2xJZHgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY29sID0gTWF0aC5jZWlsKHRoaXMuX2NhY2hlRGF0YS5sZW5ndGggLyB0aGlzLmNvbENvdW50KTtcbiAgICAgICAgbGV0IHBhZGRpbmcgPSB0aGlzLmx5dENvbnRlbnQucGFkZGluZ1RvcCArIHRoaXMubHl0Q29udGVudC5wYWRkaW5nQm90dG9tO1xuICAgICAgICB0aGlzLl90b3RhbEhlaWdodCA9IGNvbCAqIHRoaXMuaXRlbVByZWZhYi5kYXRhLmhlaWdodCArIChjb2wgLSAxKSAqIHRoaXMubHl0Q29udGVudC5zcGFjaW5nWSArIHBhZGRpbmc7XG4gICAgICAgIHRoaXMuY29udGVudC5oZWlnaHQgPSB0aGlzLmVsYXN0aWMgPyBNYXRoLm1heCh0aGlzLl90b3RhbEhlaWdodCwgdGhpcy5jb250ZW50LnBhcmVudC5oZWlnaHQpIDogdGhpcy5fdG90YWxIZWlnaHQ7XG5cbiAgICAgICAgaWYgKHRoaXMuX2luaXRlZCkgdGhpcy5PblNjcm9sbGluZyh0aGlzLCBudWxsKTtcbiAgICB9XG5cbiAgICBPblNjcm9sbGluZyhldmVudDogY2MuU2Nyb2xsVmlldywgY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbml0ZWQpIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLml0ZW1QcmVmYWIuZGF0YSkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBvZmZzZXRZID0gZXZlbnQuZ2V0U2Nyb2xsT2Zmc2V0KCkueTtcbiAgICAgICAgbGV0IHJlcyA9IHRoaXMuX0NhbGN1bGF0ZVN0YXJ0QW5kRW5kSWR4KG9mZnNldFkpO1xuICAgICAgICBmb3IgKGxldCBpID0gcmVzLnN0YXJ0Um93OyBpIDw9IHJlcy5lbmRSb3c7ICsraSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbENvdW50OyArK2opIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9Qcm9jZXNzU2Nyb2xsVmlld0l0ZW0oaSAqIHRoaXMuY29sQ291bnQgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX0NhbGN1bGF0ZVN0YXJ0QW5kRW5kSWR4KG9mZnNldFk6IG51bWJlcik6IHsgc3RhcnRSb3c6IG51bWJlcjsgZW5kUm93OiBudW1iZXIgfSB7XG5cbiAgICAgICAgbGV0IGl0ZW1IZWlnaHQgPSB0aGlzLml0ZW1QcmVmYWIuZGF0YS5oZWlnaHQgKyB0aGlzLmx5dENvbnRlbnQuc3BhY2luZ1k7XG5cbiAgICAgICAgbGV0IHN0YXJ0Um93ID0gTWF0aC5mbG9vcigob2Zmc2V0WSArIHRoaXMubHl0Q29udGVudC5wYWRkaW5nVG9wKSAvIGl0ZW1IZWlnaHQpO1xuICAgICAgICAvLyBpZiAoc3RhcnRSb3cgPiAwKSAtLXN0YXJ0Um93O1xuXG4gICAgICAgIGxldCBtYXhSb3cgPSBNYXRoLmNlaWwodGhpcy5faXRlbUNvdW50IC8gdGhpcy5jb2xDb3VudCkgLSAxO1xuICAgICAgICBsZXQgbWF4RGF0YUNvdW50ID0gTWF0aC5jZWlsKHRoaXMuX2NhY2hlRGF0YS5sZW5ndGggLyB0aGlzLmNvbENvdW50KTtcblxuICAgICAgICBsZXQgZW5kUm93ID0gc3RhcnRSb3cgKyBtYXhSb3c7XG4gICAgICAgIGlmIChlbmRSb3cgPj0gbWF4RGF0YUNvdW50KSB7XG4gICAgICAgICAgICBlbmRSb3cgPSBtYXhEYXRhQ291bnQgLSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGFydFJvdzogc3RhcnRSb3csXG4gICAgICAgICAgICBlbmRSb3c6IGVuZFJvdyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9Qcm9jZXNzU2Nyb2xsVmlld0l0ZW0oaWR4OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLl9jYWNoZURhdGFbaWR4XTtcbiAgICAgICAgaWYgKCFkYXRhKSByZXR1cm47XG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5faXRlbVBvb2xzW2RhdGEucG9vbElkeF07XG4gICAgICAgIGlmICghaXRlbSB8fCAoaXRlbSAmJiBpdGVtLnJlbmRlcklkeCA9PSBpZHgpKSByZXR1cm47XG4gICAgICAgIGl0ZW0ubm9kZS5uYW1lID0gaWR4LnRvU3RyaW5nKCk7XG4gICAgICAgIGl0ZW0uU2V0SXRlbShpZHgsIGRhdGEucm9vbVR5cGVEYXRhKTtcbiAgICAgICAgaXRlbS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGl0ZW0ubm9kZS5zZXRQb3NpdGlvbih0aGlzLl9DYWxjdWxhdGVJdGVtUG9zKGlkeCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX0NhbGN1bGF0ZUl0ZW1Qb3MoaWR4KSB7XG4gICAgICAgIGxldCByb3cgPSBNYXRoLmZsb29yKGlkeCAvIHRoaXMuY29sQ291bnQpO1xuICAgICAgICBsZXQgb2Zmc2V0WSA9IHJvdyAqICh0aGlzLml0ZW1QcmVmYWIuZGF0YS5oZWlnaHQgKyB0aGlzLmx5dENvbnRlbnQuc3BhY2luZ1kpICsgdGhpcy5pdGVtUHJlZmFiLmRhdGEuaGVpZ2h0IC8gMjtcbiAgICAgICAgLy9wb3NYXG4gICAgICAgIGxldCB4U3RhcnQgPSAtdGhpcy5seXRDb250ZW50Lm5vZGUud2lkdGggLyAyICsgdGhpcy5seXRDb250ZW50LnBhZGRpbmdMZWZ0O1xuICAgICAgICBsZXQgY29sID0gaWR4IC0gcm93ICogdGhpcy5jb2xDb3VudDtcbiAgICAgICAgbGV0IHggPSB4U3RhcnQgKyBjb2wgKiAodGhpcy5pdGVtUHJlZmFiLmRhdGEud2lkdGggKyB0aGlzLmx5dENvbnRlbnQuc3BhY2luZ1gpICsgdGhpcy5pdGVtUHJlZmFiLmRhdGEud2lkdGggLyAyO1xuICAgICAgICByZXR1cm4gY2MudjIoeCwgLW9mZnNldFkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgKl9HZXRJdGVtR2VuZXJhdG9yKCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5faXRlbUNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVByZWZhYik7XG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgbGV0IGNvbXAgPSBub2RlLmdldENvbXBvbmVudChGcmllbmRJdGVtKTtcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1Qb29scy5wdXNoKGNvbXApO1xuICAgICAgICAgICAgeWllbGQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5PblNjcm9sbGluZyh0aGlzLCBudWxsKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9Jbml0UG9vbFNpemUoKSB7XG4gICAgICAgIGxldCBpdGVtX3cgPSB0aGlzLml0ZW1QcmVmYWIuZGF0YS53aWR0aDtcbiAgICAgICAgbGV0IGl0ZW1faCA9IHRoaXMuaXRlbVByZWZhYi5kYXRhLmhlaWdodDtcbiAgICAgICAgbGV0IGNvbENvdW50ID0gTWF0aC5hYnMoTWF0aC5jZWlsKHRoaXMuY29udGVudC5wYXJlbnQud2lkdGggLyAoaXRlbV93ICsgdGhpcy5seXRDb250ZW50LnNwYWNpbmdYKSkpO1xuICAgICAgICBsZXQgcm93Q291bnQgPSBNYXRoLmFicyhNYXRoLmNlaWwodGhpcy5jb250ZW50LnBhcmVudC5oZWlnaHQgLyAoaXRlbV9oICsgdGhpcy5seXRDb250ZW50LnNwYWNpbmdZKSkpO1xuICAgICAgICB0aGlzLl9pdGVtQ291bnQgPSBjb2xDb3VudCAqIChyb3dDb3VudCArIDEpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------
