
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
require('./assets/Script/Friend/FriendProp');
require('./assets/Script/Friend/UI_FriendScrollView');
require('./assets/Script/MainScene/GroupCtrl/FriendEnergyGroupCtrl');
require('./assets/Script/MainScene/GroupCtrl/HomeGroupCtrl');
require('./assets/Script/MainScene/GroupCtrl/StartEnergyGroupCtrl');
require('./assets/Script/MainScene/MainSceneCtrl');
require('./assets/Script/MainScene/RobotInforCtrl');
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
    Object.defineProperty(BackpackItem.prototype, "robotId", {
        get: function () {
            return this._robotData.id;
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
        var player = DataManager_1.default.Inst.GetData(Types_1.DataBaseKey.PLAYER_DATA);
        var sate = player.curRobotUse && player.curRobotUse.id === this._robotData.id ? RobotInforCtrl_1.INFOR_STATE.ISUSEING : RobotInforCtrl_1.INFOR_STATE.HAED;
        Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.SHOW_ROBOT_INFOR, this._robotData, sate);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYWNrcGFja1xcQmFja3BhY2tJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUFtQztBQUNuQyxrREFBK0M7QUFDL0MsNENBQWlEO0FBQ2pELDhEQUEwRDtBQUMxRCxzREFBaUQ7QUFFakQsZ0RBQTJEO0FBQ3JELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBbURDO1FBakRHLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBR3RCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUl0QixhQUFPLEdBQXFCLEVBQUUsQ0FBQztRQUcvQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBU2YsZ0JBQVUsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUN4QixnQkFBVSxHQUFXLElBQUksQ0FBQzs7SUFvQnRDLENBQUM7SUE1Qkcsc0JBQUksbUNBQVM7YUFBYjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlDQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBSUssOEJBQU8sR0FBYixVQUFjLEdBQVcsRUFBRSxJQUFZOzs7Z0JBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO2dCQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFBO2dCQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcseUJBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Ozs7S0FFOUI7SUFFRCxrQ0FBVyxHQUFYLFVBQVksS0FBSyxFQUFFLGVBQWU7UUFDOUIsSUFBSSxNQUFNLEdBQUcscUJBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFjLG1CQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUUsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsNEJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLDRCQUFXLENBQUMsSUFBSSxDQUFDO1FBQ3hILGdCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBTSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQS9DRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNHO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ0s7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDRztJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ0c7SUFJdEI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7aURBQ0k7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDSztJQXJCTixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBbURoQztJQUFELG1CQUFDO0NBbkRELEFBbURDLENBbkR5QyxFQUFFLENBQUMsU0FBUyxHQW1EckQ7a0JBbkRvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vQXBwL0dsb2JhbFwiO1xuaW1wb3J0IHsgTG9jTXNnIH0gZnJvbSBcIi4uL0Jhc2VNb2RlbC9Nc2dFdmVudFwiO1xuaW1wb3J0IHsgRGF0YUJhc2VLZXkgfSBmcm9tIFwiLi4vQmFzZU1vZGVsL1R5cGVzXCI7XG5pbXBvcnQgeyBJTkZPUl9TVEFURSB9IGZyb20gXCIuLi9NYWluU2NlbmUvUm9ib3RJbmZvckN0cmxcIjtcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IHsgSVBsYXllckluZm8gfSBmcm9tIFwiLi4vTW9kZWwvUGxheWVyUHJvcFwiO1xuaW1wb3J0IHsgSVJvYm90LCBSb2JvdFR5cGVEZXNjIH0gZnJvbSBcIi4uL01vZGVsL1JvYm90UHJvcFwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2twYWNrSXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBpY29uOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiVHlwZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiSUQ6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYk1pbnQ6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkx2OiBjYy5MYWJlbCA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgIGljb25TRnM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0blVzZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBnZXQgcmVuZGVySWR4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVySWR4O1xuICAgIH1cblxuICAgIGdldCByb2JvdElkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm9ib3REYXRhLmlkO1xuICAgIH1cbiAgICBwcml2YXRlIF9yZW5kZXJJZHg6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgX3JvYm90RGF0YTogSVJvYm90ID0gbnVsbDtcblxuICAgIGFzeW5jIFNldEl0ZW0oaWR4OiBudW1iZXIsIGRhdGE6IElSb2JvdCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJJZHggPSBpZHg7XG4gICAgICAgIHRoaXMuX3JvYm90RGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMubGJNaW50LnN0cmluZyA9IFwiTWludDpcIiArIGRhdGEubWludDtcbiAgICAgICAgdGhpcy5sYklELnN0cmluZyA9IFwiI1wiICsgZGF0YS5pZFxuICAgICAgICB0aGlzLmxiTHYuc3RyaW5nID0gXCJMdiBcIiArIGRhdGEubGV2ZWw7XG4gICAgICAgIHRoaXMubGJUeXBlLnN0cmluZyA9IFJvYm90VHlwZURlc2NbZGF0YS5yb2JvdFR5cGVdO1xuICAgICAgICB0aGlzLmljb24uc3ByaXRlRnJhbWUgPSB0aGlzLmljb25TRnNbZGF0YS5yb2JvdEltZ0lkXTtcbiAgICAgICAgdGhpcy5idG5Vc2UuYWN0aXZlID0gZmFsc2U7XG5cbiAgICB9XG5cbiAgICBPbkNsaWNrU2VsZihldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgIGxldCBwbGF5ZXIgPSBEYXRhTWFuYWdlci5JbnN0LkdldERhdGE8SVBsYXllckluZm8+KERhdGFCYXNlS2V5LlBMQVlFUl9EQVRBKTtcbiAgICAgICAgbGV0IHNhdGUgPSBwbGF5ZXIuY3VyUm9ib3RVc2UgJiYgcGxheWVyLmN1clJvYm90VXNlLmlkID09PSB0aGlzLl9yb2JvdERhdGEuaWQgPyBJTkZPUl9TVEFURS5JU1VTRUlORyA6IElORk9SX1NUQVRFLkhBRUQ7XG4gICAgICAgIEdsb2JhbC5JbnN0LkVtaXQoTG9jTXNnLlNIT1dfUk9CT1RfSU5GT1IsIHRoaXMuX3JvYm90RGF0YSwgc2F0ZSk7XG4gICAgfVxuXG59XG4iXX0=
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
var DataManager_1 = require("../../Manager/DataManager");
var EnergyProp_1 = require("../../Energy/EnergyProp");
var LocalDataAPI_1 = require("../../Utils/LocalDataAPI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HomeGroupCtrl = /** @class */ (function (_super) {
    __extends(HomeGroupCtrl, _super);
    function HomeGroupCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.robotSp = null;
        _this.robotChangeEnergy = null;
        _this.btnChangeEnergy = null;
        _this.iconSFs = [];
        //-------------------------------------xueliang
        _this.energyRoot = null;
        _this.energyPref = null;
        _this.btnStartEnergy = null;
        _this.btnEnergyLabel = null;
        _this.startEnergyPref = null;
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
        this.node.addChild(this.startEnergyNode);
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
            this.robotSp.spriteFrame = null;
        }
        this.robotChangeEnergy.string = (this.player.canChangeEnergyNumMax - this.player.hadChangeEnergyNum) + " / " + this.player.canChangeEnergyNumMax;
        // 无小人、无能量、转化数不足，不现实转化按钮；
        if (!curRobot || this.player.collectEnergyCount === 0 || this.player.hadChangeEnergyNum >= this.player.canChangeEnergyNumMax) {
            this.btnChangeEnergy.interactable = false;
        }
        else {
            this.btnChangeEnergy.interactable = true;
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
        var curRobot = this.player.curRobotUse;
        // this.btnStartEnergy.interactable = !(!curRobot || this.player.collectEnergyCount === 0);
        var energy = this.energy;
        if (energy.length > 0) {
            this.btnEnergyLabel.string = energy[energy.length - 1].isGrow ? "Stop" : "Start";
        }
        else {
            this.btnEnergyLabel.string = "Start";
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
            console.log("childrenCount： " + children.length);
            for (var x = 0; x < children.length; ++x) {
                console.log("childrenInfo： " + children[x].getComponent("EnergyItem").energyData.idx);
            }
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
            console.log("childrenCount1： " + children1.length);
        }
    };
    HomeGroupCtrl.prototype._RemoveEnergyByEnergyTime = function (time) {
        var children = this.energyRoot.children;
        for (var x = 0; x < children.length; ++x) {
            if (children[x].getComponent("EnergyItem").energyData.energyTime == time) {
                children[x].removeFromParent();
            }
        }
    };
    HomeGroupCtrl.prototype.OnClickStart = function (event, customEventData) {
        var energy = this.energy;
        if (energy.length == 0 || !energy[energy.length - 1].isGrow) {
            this.startEnergyNode.getComponent("StartEnergyGroupCtrl")._UpdateBtn();
            this.startEnergyNode.runAction(cc.moveTo(0.3, cc.v2(0, 0)));
        }
        else {
            LocalDataAPI_1.StopEnergy();
        }
    };
    HomeGroupCtrl.prototype.start = function () {
    };
    __decorate([
        property(cc.Sprite)
    ], HomeGroupCtrl.prototype, "robotSp", void 0);
    __decorate([
        property(cc.Label)
    ], HomeGroupCtrl.prototype, "robotChangeEnergy", void 0);
    __decorate([
        property(cc.Button)
    ], HomeGroupCtrl.prototype, "btnChangeEnergy", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], HomeGroupCtrl.prototype, "iconSFs", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluU2NlbmVcXEdyb3VwQ3RybFxcSG9tZUdyb3VwQ3RybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFDdEMscURBQWtEO0FBQ2xELCtDQUFvRDtBQUNwRCx5REFBb0Q7QUFFcEQsc0RBQWlFO0FBQ2pFLHlEQUFrRTtBQUU1RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQXNNQztRQW5NRyxhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLHVCQUFpQixHQUFhLElBQUksQ0FBQztRQUduQyxxQkFBZSxHQUFjLElBQUksQ0FBQztRQUdsQyxhQUFPLEdBQXFCLEVBQUUsQ0FBQztRQWdDL0IsK0NBQStDO1FBRy9DLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBR2pDLG9CQUFjLEdBQWEsSUFBSSxDQUFDO1FBR2hDLHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBRTFCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLG9CQUFjLEdBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7O1FBdUluRSxpQkFBaUI7SUFDckIsQ0FBQztJQXhMRyxzQkFBSSxpQ0FBTTthQUFWO1lBQ0ksT0FBTyxxQkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQWMsbUJBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxRSxDQUFDOzs7T0FBQTtJQUNELDhCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxD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cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi9BcHAvR2xvYmFsXCI7XG5pbXBvcnQgeyBMb2NNc2cgfSBmcm9tIFwiLi4vLi4vQmFzZU1vZGVsL01zZ0V2ZW50XCI7XG5pbXBvcnQgeyBEYXRhQmFzZUtleSB9IGZyb20gXCIuLi8uLi9CYXNlTW9kZWwvVHlwZXNcIjtcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vLi4vTWFuYWdlci9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IHsgSVBsYXllckluZm8gfSBmcm9tIFwiLi4vLi4vTW9kZWwvUGxheWVyUHJvcFwiO1xuaW1wb3J0IHtFbmVyZ3lTaG93Q291bnQsIElFbmVyZ3l9IGZyb20gXCIuLi8uLi9FbmVyZ3kvRW5lcmd5UHJvcFwiO1xuaW1wb3J0IHtTdG9wRW5lcmd5LCBVcGRhdGVFbmVyZ3l9IGZyb20gXCIuLi8uLi9VdGlscy9Mb2NhbERhdGFBUElcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVHcm91cEN0cmwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICByb2JvdFNwOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHJvYm90Q2hhbmdlRW5lcmd5OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bkNoYW5nZUVuZXJneTogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgIGljb25TRnM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgIGdldCBwbGF5ZXIoKSB7XG4gICAgICAgIHJldHVybiBEYXRhTWFuYWdlci5JbnN0LkdldERhdGE8SVBsYXllckluZm8+KERhdGFCYXNlS2V5LlBMQVlFUl9EQVRBKTtcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnN0YXJ0RW5lcmd5Tm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3RhcnRFbmVyZ3lQcmVmKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHRoaXMuc3RhcnRFbmVyZ3lOb2RlKTtcbiAgICAgICAgdGhpcy5fVXBkYXRlUm9ib3QoKTtcbiAgICAgICAgR2xvYmFsLkluc3QuT24oTG9jTXNnLlVQREFURV9DVVJfUk9CT1RfSU5GT1IsIHRoaXMuX1VwZGF0ZVJvYm90LCB0aGlzKTtcbiAgICAgICAgR2xvYmFsLkluc3QuT24oTG9jTXNnLlVQREFURV9FbmVyZ3lfSU5GT1IsIHRoaXMuX1VwZGF0ZUVuZXJneSwgdGhpcyk7XG4gICAgICAgIHRoaXMuX1VwZGF0ZUVuZXJneSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX1VwZGF0ZVJvYm90KCkge1xuICAgICAgICBsZXQgY3VyUm9ib3QgPSB0aGlzLnBsYXllci5jdXJSb2JvdFVzZTtcbiAgICAgICAgaWYgKGN1clJvYm90KSB7XG4gICAgICAgICAgICB0aGlzLnJvYm90U3Auc3ByaXRlRnJhbWUgPSB0aGlzLmljb25TRnNbY3VyUm9ib3Qucm9ib3RJbWdJZF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJvYm90U3Auc3ByaXRlRnJhbWUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm9ib3RDaGFuZ2VFbmVyZ3kuc3RyaW5nID0gYCR7KHRoaXMucGxheWVyLmNhbkNoYW5nZUVuZXJneU51bU1heCAtIHRoaXMucGxheWVyLmhhZENoYW5nZUVuZXJneU51bSl9IC8gJHt0aGlzLnBsYXllci5jYW5DaGFuZ2VFbmVyZ3lOdW1NYXh9YDtcblxuICAgICAgICAvLyDml6DlsI/kurrjgIHml6Dog73ph4/jgIHovazljJbmlbDkuI3otrPvvIzkuI3njrDlrp7ovazljJbmjInpkq7vvJtcbiAgICAgICAgaWYgKCFjdXJSb2JvdCB8fCB0aGlzLnBsYXllci5jb2xsZWN0RW5lcmd5Q291bnQgPT09IDAgfHwgdGhpcy5wbGF5ZXIuaGFkQ2hhbmdlRW5lcmd5TnVtID49IHRoaXMucGxheWVyLmNhbkNoYW5nZUVuZXJneU51bU1heCkge1xuICAgICAgICAgICAgdGhpcy5idG5DaGFuZ2VFbmVyZ3kuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJ0bkNoYW5nZUVuZXJneS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0teHVlbGlhbmdcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVuZXJneVJvb3Q6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBlbmVyZ3lQcmVmOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5TdGFydEVuZXJneTogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBidG5FbmVyZ3lMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBzdGFydEVuZXJneVByZWY6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBwcml2YXRlIHN0YXJ0RW5lcmd5Tm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBzaG93RW5lcmd5SW5mbzogSUVuZXJneVtdID0gW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdO1xuXG4gICAgZ2V0IGVuZXJneSgpIHtcbiAgICAgICAgcmV0dXJuIERhdGFNYW5hZ2VyLkluc3QuR2V0RGF0YTxJRW5lcmd5W10+KERhdGFCYXNlS2V5LkVORVJHWV9EQVRBKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9VcGRhdGVFbmVyZ3koKXtcbiAgICAgICAgbGV0IGN1clJvYm90ID0gdGhpcy5wbGF5ZXIuY3VyUm9ib3RVc2U7XG4gICAgICAgIC8vIHRoaXMuYnRuU3RhcnRFbmVyZ3kuaW50ZXJhY3RhYmxlID0gISghY3VyUm9ib3QgfHwgdGhpcy5wbGF5ZXIuY29sbGVjdEVuZXJneUNvdW50ID09PSAwKTtcblxuICAgICAgICBsZXQgZW5lcmd5ID0gdGhpcy5lbmVyZ3k7XG4gICAgICAgIGlmIChlbmVyZ3kubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICB0aGlzLmJ0bkVuZXJneUxhYmVsLnN0cmluZyA9IGVuZXJneVtlbmVyZ3kubGVuZ3RoIC0gMV0uaXNHcm93ID8gXCJTdG9wXCIgOiBcIlN0YXJ0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJ0bkVuZXJneUxhYmVsLnN0cmluZyA9IFwiU3RhcnRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5zaG93RW5lcmd5SW5mby5sZW5ndGg7ICsreCl7XG4gICAgICAgICAgICBpZiAodGhpcy5zaG93RW5lcmd5SW5mb1t4XSAmJiBlbmVyZ3kuaW5kZXhPZih0aGlzLnNob3dFbmVyZ3lJbmZvW3hdKSA9PSAtMSl7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RW5lcmd5SW5mb1t4XSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVuZXJneS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiX1VwZGF0ZUVuZXJneTpcIiArIEpTT04uc3RyaW5naWZ5KGVuZXJneSkpO1xuICAgICAgICAgICAgaWYgKGVuZXJneVtlbmVyZ3kubGVuZ3RoIC0gMV0uaXNHcm93KXtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2hvd0VuZXJneUluZm9bdGhpcy5zaG93RW5lcmd5SW5mby5sZW5ndGggLSAxXSB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFbmVyZ3lJbmZvW3RoaXMuc2hvd0VuZXJneUluZm8ubGVuZ3RoIC0gMV0uZW5lcmd5VGltZSAhPSBlbmVyZ3lbZW5lcmd5Lmxlbmd0aCAtIDFdLmVuZXJneVRpbWUpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFbmVyZ3lJbmZvW3RoaXMuc2hvd0VuZXJneUluZm8ubGVuZ3RoIC0gMV0gPSBlbmVyZ3lbZW5lcmd5Lmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZW5lcmd5SW5zID0gY2MuaW5zdGFudGlhdGUodGhpcy5lbmVyZ3lQcmVmKTtcbiAgICAgICAgICAgICAgICAgICAgZW5lcmd5SW5zLmdldENvbXBvbmVudChcIkVuZXJneUl0ZW1cIikuU2V0SXRlbShlbmVyZ3lbZW5lcmd5Lmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fUmVtb3ZlRW5lcmd5QnlFbmVyZ3lUaW1lKGVuZXJneVtlbmVyZ3kubGVuZ3RoIC0gMV0uZW5lcmd5VGltZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lcmd5Um9vdC5hZGRDaGlsZChlbmVyZ3lJbnMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgRW5lcmd5U2hvd0NvdW50IC0gMTsgKyt4KXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggPCBlbmVyZ3kubGVuZ3RoIC0gMSAmJiBlbmVyZ3lbeF0uaWR4ICE9IHRoaXMuc2hvd0VuZXJneUluZm8ubGVuZ3RoIC0gMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2hvd0VuZXJneUluZm9beF0gfHwgdGhpcy5zaG93RW5lcmd5SW5mb1t4XS5lbmVyZ3lUaW1lICE9IGVuZXJneVt4XS5lbmVyZ3lUaW1lKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFbmVyZ3lJbmZvW3hdID0gZW5lcmd5W3hdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbmVyZ3lJbnMgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmVuZXJneVByZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZXJneUlucy5nZXRDb21wb25lbnQoXCJFbmVyZ3lJdGVtXCIpLlNldEl0ZW0oZW5lcmd5W3hdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9SZW1vdmVFbmVyZ3lCeUVuZXJneVRpbWUoZW5lcmd5W3hdLmVuZXJneVRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lcmd5Um9vdC5hZGRDaGlsZChlbmVyZ3lJbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZUVuZXJneShlbmVyZ3lbeF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoeCA8IGVuZXJneS5sZW5ndGggLSAxICYmIGVuZXJneVt4XS5pZHggPT0gdGhpcy5zaG93RW5lcmd5SW5mby5sZW5ndGggLSAxKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5zaG93RW5lcmd5SW5mby5sZW5ndGggLSAxOyArK3kpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLnNob3dFbmVyZ3lJbmZvW3ldKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5lcmd5W3hdLmlkeCA9IHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VuZXJneUluZm9beV0gPSBlbmVyZ3lbeF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbmVyZ3lJbnMgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmVuZXJneVByZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVyZ3lJbnMuZ2V0Q29tcG9uZW50KFwiRW5lcmd5SXRlbVwiKS5TZXRJdGVtKGVuZXJneVt4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX1JlbW92ZUVuZXJneUJ5RW5lcmd5VGltZShlbmVyZ3lbeF0uZW5lcmd5VGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lcmd5Um9vdC5hZGRDaGlsZChlbmVyZ3lJbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVFbmVyZ3koZW5lcmd5W3hdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiX1VwZGF0ZUVuZXJneTogZW50ZXJcIik7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBFbmVyZ3lTaG93Q291bnQ7ICsreCl7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4IDwgZW5lcmd5Lmxlbmd0aCAmJiBlbmVyZ3lbeF0uaWR4ICE9IHRoaXMuc2hvd0VuZXJneUluZm8ubGVuZ3RoIC0gMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2hvd0VuZXJneUluZm9beF0gfHwgdGhpcy5zaG93RW5lcmd5SW5mb1t4XS5lbmVyZ3lUaW1lICE9IGVuZXJneVt4XS5lbmVyZ3lUaW1lKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFbmVyZ3lJbmZvW3hdID0gZW5lcmd5W3hdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbmVyZ3lJbnMgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmVuZXJneVByZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZXJneUlucy5nZXRDb21wb25lbnQoXCJFbmVyZ3lJdGVtXCIpLlNldEl0ZW0oZW5lcmd5W3hdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZXJneVJvb3QuYWRkQ2hpbGQoZW5lcmd5SW5zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVFbmVyZ3koZW5lcmd5W3hdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHggPCBlbmVyZ3kubGVuZ3RoICYmIGVuZXJneVt4XS5pZHggPT0gdGhpcy5zaG93RW5lcmd5SW5mby5sZW5ndGggLSAxKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5zaG93RW5lcmd5SW5mby5sZW5ndGg7ICsreSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuc2hvd0VuZXJneUluZm9beV0gJiYgdGhpcy5zaG93RW5lcmd5SW5mb1t0aGlzLnNob3dFbmVyZ3lJbmZvLmxlbmd0aCAtIDFdLmVuZXJneVRpbWUgIT0gZW5lcmd5W3hdLmVuZXJneVRpbWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmVyZ3lbeF0uaWR4ID0geTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RW5lcmd5SW5mb1t5XSA9IGVuZXJneVt4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVuZXJneUlucyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZW5lcmd5UHJlZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZXJneUlucy5nZXRDb21wb25lbnQoXCJFbmVyZ3lJdGVtXCIpLlNldEl0ZW0oZW5lcmd5W3hdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVyZ3lSb290LmFkZENoaWxkKGVuZXJneUlucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZUVuZXJneShlbmVyZ3lbeF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNob3dFbmVyZ3lJbmZvW3RoaXMuc2hvd0VuZXJneUluZm8ubGVuZ3RoIC0gMV0gIT0gbnVsbCl7XG4gICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmVuZXJneVJvb3QuY2hpbGRyZW47XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoaWxkcmVuQ291bnTvvJogXCIgKyBjaGlsZHJlbi5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjaGlsZHJlbi5sZW5ndGg7ICsreCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGlsZHJlbkluZm/vvJogXCIgKyBjaGlsZHJlblt4XS5nZXRDb21wb25lbnQoXCJFbmVyZ3lJdGVtXCIpLmVuZXJneURhdGEuaWR4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dFbmVyZ3lJbmZvW3RoaXMuc2hvd0VuZXJneUluZm8ubGVuZ3RoIC0gMV0uaXNHcm93KXtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGNoaWxkcmVuLmxlbmd0aDsgKyt4KXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuW3hdLmdldENvbXBvbmVudChcIkVuZXJneUl0ZW1cIikuZW5lcmd5RGF0YS5pZHggPT0gdGhpcy5zaG93RW5lcmd5SW5mby5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAhY2hpbGRyZW5beF0uZ2V0Q29tcG9uZW50KFwiRW5lcmd5SXRlbVwiKS5lbmVyZ3lEYXRhLmlzR3Jvdyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlblt4XS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgY2hpbGRyZW4ubGVuZ3RoOyArK3gpe1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRyZW5beF0uZ2V0Q29tcG9uZW50KFwiRW5lcmd5SXRlbVwiKS5lbmVyZ3lEYXRhLmlkeCA9PSB0aGlzLnNob3dFbmVyZ3lJbmZvLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIGNoaWxkcmVuW3hdLmdldENvbXBvbmVudChcIkVuZXJneUl0ZW1cIikuZW5lcmd5RGF0YS5lbmVyZ3lUaW1lICE9IHRoaXMuc2hvd0VuZXJneUluZm9bdGhpcy5zaG93RW5lcmd5SW5mby5sZW5ndGggLSAxXS5lbmVyZ3lUaW1lKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW3hdLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjaGlsZHJlbjEgPSB0aGlzLmVuZXJneVJvb3QuY2hpbGRyZW47XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoaWxkcmVuQ291bnQx77yaIFwiICsgY2hpbGRyZW4xLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9SZW1vdmVFbmVyZ3lCeUVuZXJneVRpbWUodGltZTogbnVtYmVyKXtcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5lbmVyZ3lSb290LmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGNoaWxkcmVuLmxlbmd0aDsgKyt4KXtcbiAgICAgICAgICAgIGlmIChjaGlsZHJlblt4XS5nZXRDb21wb25lbnQoXCJFbmVyZ3lJdGVtXCIpLmVuZXJneURhdGEuZW5lcmd5VGltZSA9PSB0aW1lKXtcbiAgICAgICAgICAgICAgICBjaGlsZHJlblt4XS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBPbkNsaWNrU3RhcnQoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSl7XG4gICAgICAgIGxldCBlbmVyZ3kgPSB0aGlzLmVuZXJneTtcbiAgICAgICAgaWYgKGVuZXJneS5sZW5ndGggPT0gMCB8fCAhZW5lcmd5W2VuZXJneS5sZW5ndGggLSAxXS5pc0dyb3cpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRFbmVyZ3lOb2RlLmdldENvbXBvbmVudChcIlN0YXJ0RW5lcmd5R3JvdXBDdHJsXCIpLl9VcGRhdGVCdG4oKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRFbmVyZ3lOb2RlLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC4zLCBjYy52MigwLCAwKSkpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBTdG9wRW5lcmd5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
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
var EnergyProp_1 = require("./EnergyProp");
var DataManager_1 = require("../Manager/DataManager");
var Types_1 = require("../BaseModel/Types");
var LocalDataAPI_1 = require("../Utils/LocalDataAPI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EnergyItem = /** @class */ (function (_super) {
    __extends(EnergyItem, _super);
    function EnergyItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.mask = null;
        _this.time = null;
        _this.count = null;
        _this.iconSFs = [];
        _this._energyData = null;
        _this._nowTime = 0;
        _this._deltaTime = 0;
        _this._positions = [cc.v2(57, -15), cc.v2(291, -103), cc.v2(-8, -97), cc.v2(278, -2), cc.v2(163, -19)];
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
        // console.log("SetItem: " + this.node.position);
        this._InitItem();
    };
    EnergyItem.prototype._UpdateItem = function () {
        var _this = this;
        if (this._energyData.isGrow) {
            if (this._deltaTime > 1) {
                this._deltaTime -= 1;
                this._energyData.energyCount = Math.round((this._energyData.energyCount * 10 + 1)) / 10;
                this.count.string = this._energyData.energyCount.toString();
                // need change data
                if (this._energyData.energyCount % 10 == 9) {
                    console.log("save data");
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
                    this.mask.node.active = false;
                    this.time.node.active = false;
                    this.node.getComponent(cc.Button).interactable = true;
                }
                else {
                    this.mask.node.active = true;
                    this.time.node.active = true;
                    var timeShow = Math.floor((EnergyProp_1.MaturationTime - (this._nowTime - this._energyData.energyTime)) * 0.001);
                    this.time.string = Math.floor(timeShow / 3600) + ":" + Math.floor(timeShow % 3600 / 60) + ":" + timeShow % 3600 % 60;
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
        if (this._energyData.isGrow) {
            this.icon.spriteFrame = this.iconSFs[this._energyData.energyType + 4];
            this.mask.node.active = false;
            this.time.node.active = false;
            this.count.string = this._energyData.energyCount.toString();
            this.node.getComponent(cc.Button).interactable = false;
        }
        else {
            this.icon.spriteFrame = this.iconSFs[this._energyData.energyType];
            this.count.string = this._energyData.energyCount.toString();
            if (this._nowTime - this._energyData.energyTime > EnergyProp_1.MaturationTime) {
                this.mask.node.active = false;
                this.time.node.active = false;
                this.node.getComponent(cc.Button).interactable = true;
            }
            else {
                this.mask.node.active = true;
                this.time.node.active = true;
                var timeShow = Math.floor((EnergyProp_1.MaturationTime - (this._nowTime - this._energyData.energyTime)) * 0.001);
                this.time.string = Math.floor(timeShow / 3600) + ":" + Math.floor(timeShow % 3600 / 60) + ":" + timeShow % 3600 % 60;
                this.node.getComponent(cc.Button).interactable = false;
            }
        }
        this._start = true;
    };
    EnergyItem.prototype.OnClick = function (event, customEventData) {
        var _this = this;
        // collect energy
        this.node.getComponent(cc.Button).interactable = false;
        this.node.runAction(cc.sequence(cc.spawn(cc.moveTo(0.35, cc.v2(235, 194)), cc.scaleTo(0.35, 0.3)), cc.callFunc(function () {
            // need change data
            _this.node.removeFromParent();
            LocalDataAPI_1.UpdateEnergy(_this._energyData);
        })));
    };
    __decorate([
        property(cc.Sprite)
    ], EnergyItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Sprite)
    ], EnergyItem.prototype, "mask", void 0);
    __decorate([
        property(cc.Label)
    ], EnergyItem.prototype, "time", void 0);
    __decorate([
        property(cc.Label)
    ], EnergyItem.prototype, "count", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], EnergyItem.prototype, "iconSFs", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVyZ3lcXEVuZXJneUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXFFO0FBQ3JFLHNEQUFpRDtBQUVqRCw0Q0FBK0M7QUFJL0Msc0RBQWlFO0FBRTNELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBc0lDO1FBbklHLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBR3RCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFxQixFQUFFLENBQUM7UUFFdkIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixnQkFBVSxHQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1RyxZQUFNLEdBQVksS0FBSyxDQUFDOztJQWlIcEMsQ0FBQztJQS9HRyx3QkFBd0I7SUFFeEIsMkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lB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LENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQzNHLG1CQUFtQjtZQUNuQixLQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDN0IsMkJBQVksQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQWxJRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNHO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ0c7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDRztJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDOytDQUNJO0lBZmQsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXNJOUI7SUFBRCxpQkFBQztDQXRJRCxBQXNJQyxDQXRJdUMsRUFBRSxDQUFDLFNBQVMsR0FzSW5EO2tCQXRJb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29sbGVjdGlvblRpbWUsIElFbmVyZ3ksIE1hdHVyYXRpb25UaW1lfSBmcm9tIFwiLi9FbmVyZ3lQcm9wXCI7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQge0lQbGF5ZXJJbmZvfSBmcm9tIFwiLi4vTW9kZWwvUGxheWVyUHJvcFwiO1xyXG5pbXBvcnQge0RhdGFCYXNlS2V5fSBmcm9tIFwiLi4vQmFzZU1vZGVsL1R5cGVzXCI7XHJcbmltcG9ydCB7SU5GT1JfU1RBVEV9IGZyb20gXCIuLi9NYWluU2NlbmUvUm9ib3RJbmZvckN0cmxcIjtcclxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vQXBwL0dsb2JhbFwiO1xyXG5pbXBvcnQge0xvY01zZ30gZnJvbSBcIi4uL0Jhc2VNb2RlbC9Nc2dFdmVudFwiO1xyXG5pbXBvcnQge0RlbGV0ZUVuZXJneSwgVXBkYXRlRW5lcmd5fSBmcm9tIFwiLi4vVXRpbHMvTG9jYWxEYXRhQVBJXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZXJneUl0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBpY29uOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBtYXNrOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRpbWU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBjb3VudDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgaWNvblNGczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX2VuZXJneURhdGE6IElFbmVyZ3kgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfbm93VGltZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX2RlbHRhVGltZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX3Bvc2l0aW9uczogY2MuVmVjMltdID0gW2NjLnYyKDU3LCAtMTUpLCBjYy52MigyOTEsIC0xMDMpLCBjYy52MigtOCwgLTk3KSwgY2MudjIoMjc4LCAtMiksIGNjLnYyKDE2MywgLTE5KV07XHJcbiAgICBwcml2YXRlIF9zdGFydDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zY2FsZVRvKDAuMywgMSksIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICB9KSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhcnQpe1xyXG4gICAgICAgICAgICB0aGlzLl9kZWx0YVRpbWUgKz0gZHQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kZWx0YVRpbWUgPj0gMSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9VcGRhdGVJdGVtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVuZXJneURhdGEoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZW5lcmd5RGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBTZXRJdGVtKGRhdGE6IElFbmVyZ3kpIHtcclxuICAgICAgICBsZXQgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdGhpcy5fbm93VGltZSA9IG5vd0RhdGUuZ2V0VGltZSgpO1xyXG4gICAgICAgIHRoaXMuX2VuZXJneURhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLl9wb3NpdGlvbnNbZGF0YS5pZHhdKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlNldEl0ZW06IFwiICsgdGhpcy5ub2RlLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5fSW5pdEl0ZW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9VcGRhdGVJdGVtKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuX2VuZXJneURhdGEuaXNHcm93KXtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RlbHRhVGltZSA+IDEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVsdGFUaW1lIC09IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbmVyZ3lEYXRhLmVuZXJneUNvdW50ID0gTWF0aC5yb3VuZCgodGhpcy5fZW5lcmd5RGF0YS5lbmVyZ3lDb3VudCoxMCArIDEpKS8xMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnQuc3RyaW5nID0gdGhpcy5fZW5lcmd5RGF0YS5lbmVyZ3lDb3VudC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgLy8gbmVlZCBjaGFuZ2UgZGF0YVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2VuZXJneURhdGEuZW5lcmd5Q291bnQlMTAgPT0gOSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYXZlIGRhdGFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgVXBkYXRlRW5lcmd5KHRoaXMuX2VuZXJneURhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RlbHRhVGltZSA+IDEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVsdGFUaW1lIC09IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ub3dUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbm93VGltZSAtIHRoaXMuX2VuZXJneURhdGEuZW5lcmd5VGltZSA+IE1hdHVyYXRpb25UaW1lICsgQ29sbGVjdGlvblRpbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRpbWUgb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjMsIDApLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZUVuZXJneSh0aGlzLl9lbmVyZ3lEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ub3dUaW1lIC0gdGhpcy5fZW5lcmd5RGF0YS5lbmVyZ3lUaW1lID4gTWF0dXJhdGlvblRpbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFzay5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc2subm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWVTaG93ID0gTWF0aC5mbG9vcigoTWF0dXJhdGlvblRpbWUgLSAodGhpcy5fbm93VGltZSAtIHRoaXMuX2VuZXJneURhdGEuZW5lcmd5VGltZSkpKjAuMDAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWUuc3RyaW5nID0gTWF0aC5mbG9vcih0aW1lU2hvdy8zNjAwKSArIFwiOlwiICsgTWF0aC5mbG9vcih0aW1lU2hvdyUzNjAwLzYwKSArIFwiOlwiICsgdGltZVNob3clMzYwMCU2MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuX2VuZXJneURhdGEuaXNHcm93KXtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBEYXRhTWFuYWdlci5JbnN0LkdldERhdGE8SUVuZXJneVtdPihEYXRhQmFzZUtleS5FTkVSR1lfREFUQSk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmluZGV4T2YodGhpcy5fZW5lcmd5RGF0YSkgPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9Jbml0SXRlbSgpe1xyXG4gICAgICAgIGlmICh0aGlzLl9lbmVyZ3lEYXRhLmlzR3Jvdyl7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuaWNvblNGc1t0aGlzLl9lbmVyZ3lEYXRhLmVuZXJneVR5cGUgKyA0XTtcclxuICAgICAgICAgICAgdGhpcy5tYXNrLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudGltZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50LnN0cmluZyA9IHRoaXMuX2VuZXJneURhdGEuZW5lcmd5Q291bnQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuaWNvblNGc1t0aGlzLl9lbmVyZ3lEYXRhLmVuZXJneVR5cGVdO1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50LnN0cmluZyA9IHRoaXMuX2VuZXJneURhdGEuZW5lcmd5Q291bnQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX25vd1RpbWUgLSB0aGlzLl9lbmVyZ3lEYXRhLmVuZXJneVRpbWUgPiBNYXR1cmF0aW9uVGltZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hc2subm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hc2subm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxldCB0aW1lU2hvdyA9IE1hdGguZmxvb3IoKE1hdHVyYXRpb25UaW1lIC0gKHRoaXMuX25vd1RpbWUgLSB0aGlzLl9lbmVyZ3lEYXRhLmVuZXJneVRpbWUpKSowLjAwMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUuc3RyaW5nID0gTWF0aC5mbG9vcih0aW1lU2hvdy8zNjAwKSArIFwiOlwiICsgTWF0aC5mbG9vcih0aW1lU2hvdyUzNjAwLzYwKSArIFwiOlwiICsgdGltZVNob3clMzYwMCU2MDtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdGFydCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgT25DbGljayhldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgLy8gY29sbGVjdCBlbmVyZ3lcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zcGF3bihjYy5tb3ZlVG8oMC4zNSwgY2MudjIoMjM1LCAxOTQpKSwgY2Muc2NhbGVUbygwLjM1LCAwLjMpKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBuZWVkIGNoYW5nZSBkYXRhXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgIFVwZGF0ZUVuZXJneSh0aGlzLl9lbmVyZ3lEYXRhKTtcclxuICAgICAgICB9KSkpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
        canChangeEnergyNumMax: 0,
        friendList: []
    };
    for (var index = 0; index < 20; index++) {
        var friend = {
            id: index,
            iconId: Math.floor(Math.random() * 6),
            name: "名字" + index,
            curRobotUse: {
                id: Math.ceil(Math.random() * 1000000) + 1000000,
                robotImgId: index % RobotProp_1.RobotTypeCount,
                mint: index,
                level: index,
                robotType: index % RobotProp_1.RobotTypeCount,
                efficiency: Math.ceil(Math.random() * 100) / 100,
                luck: Math.ceil(Math.random() * 100) / 100,
                loss: Math.ceil(Math.random() * 100) / 100,
                maticCost: 0
            }
            // TODO 能量
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcUGxheWVyUHJvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5Q0FBcUQ7QUErQnJELFNBQWdCLGlCQUFpQjtJQUM3QixJQUFJLElBQUksR0FBZ0I7UUFDcEIsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsUUFBUTtRQUNkLFNBQVMsRUFBRSxFQUFFO1FBQ2IsV0FBVyxFQUFFLElBQUk7UUFDakIsVUFBVSxFQUFFLElBQUk7UUFDaEIsUUFBUSxFQUFFLEVBQUU7UUFDWixRQUFRLEVBQUUsRUFBRTtRQUNaLGtCQUFrQixFQUFFLENBQUM7UUFDckIsa0JBQWtCLEVBQUUsQ0FBQztRQUNyQixxQkFBcUIsRUFBRSxDQUFDO1FBQ3hCLFVBQVUsRUFBRSxFQUFFO0tBQ2pCLENBQUE7SUFFRCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQ3JDLElBQUksTUFBTSxHQUFZO1lBQ2xCLEVBQUUsRUFBRSxLQUFLO1lBQ1QsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNyQyxJQUFJLEVBQUUsSUFBSSxHQUFHLEtBQUs7WUFDbEIsV0FBVyxFQUFFO2dCQUNULEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxPQUFPO2dCQUNoRCxVQUFVLEVBQUUsS0FBSyxHQUFHLDBCQUFjO2dCQUNsQyxJQUFJLEVBQUUsS0FBSztnQkFDWCxLQUFLLEVBQUUsS0FBSztnQkFDWixTQUFTLEVBQUUsS0FBSyxHQUFHLDBCQUFjO2dCQUNqQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRztnQkFDaEQsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUc7Z0JBQzFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQzthQUNmO1lBQ0QsVUFBVTtTQUNiLENBQUE7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUVoQztJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFyQ0QsOENBcUNDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUZyaWVuZCB9IGZyb20gXCIuL0ZyaWVuZFByb3BcIjtcbmltcG9ydCB7IElSb2JvdCwgUm9ib3RUeXBlQ291bnQgfSBmcm9tIFwiLi9Sb2JvdFByb3BcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJUGxheWVySW5mbyB7XG4gICAgaWQ6IG51bWJlcixcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgLy/mi6XmnInnmoTmnLrlmajkurpcbiAgICByb2JvdExpc3Q6IElSb2JvdFtdLFxuICAgIC8v5b2T5YmN6KOF5omu55qE5py65Zmo5Lq6XG4gICAgY3VyUm9ib3RVc2U6IElSb2JvdDtcbiAgICAvLyDnrKzkuInmlrnotKfluIFcbiAgICBtYXRpY0NvdW50OiBudW1iZXIsXG4gICAgLy8g5ri45oiP5Luj5biBXG4gICAgaGFsQ291bnQ6IG51bWJlcixcbiAgICBhY2VDb3VudDogbnVtYmVyLFxuXG4gICAgLy8g5pS26ZuG6IO96YeP5pWwXG4gICAgY29sbGVjdEVuZXJneUNvdW50OiBudW1iZXIsXG4gICAgLy8g5bey57uP55So5o6J55qE6L2s5o2i5pWwXG4gICAgaGFkQ2hhbmdlRW5lcmd5TnVtOiBudW1iZXIsXG4gICAgLy8g5oC75YWx5Y+v5Lul6L2s5YyW5pWwXG4gICAgY2FuQ2hhbmdlRW5lcmd5TnVtTWF4OiBudW1iZXIsXG5cblxuICAgIC8vIOWlveWPi1xuICAgIGZyaWVuZExpc3Q6IElGcmllbmRbXSxcblxuXG5cbiAgICAvL1RPRE/vvJ/vvJ/vvJ/vvJ/vvJ/og73ph49cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERlZmF1bHRQbGF5ZXJJbmZvKCk6IElQbGF5ZXJJbmZvIHtcbiAgICBsZXQgZGF0YTogSVBsYXllckluZm8gPSB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBuYW1lOiBcIkNhbGwtRVwiLFxuICAgICAgICByb2JvdExpc3Q6IFtdLFxuICAgICAgICBjdXJSb2JvdFVzZTogbnVsbCxcbiAgICAgICAgbWF0aWNDb3VudDogOTk5OSxcbiAgICAgICAgaGFsQ291bnQ6IDEwLFxuICAgICAgICBhY2VDb3VudDogMjAsXG4gICAgICAgIGNvbGxlY3RFbmVyZ3lDb3VudDogNSxcbiAgICAgICAgaGFkQ2hhbmdlRW5lcmd5TnVtOiAwLFxuICAgICAgICBjYW5DaGFuZ2VFbmVyZ3lOdW1NYXg6IDAsXG4gICAgICAgIGZyaWVuZExpc3Q6IFtdXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDIwOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCBmcmllbmQ6IElGcmllbmQgPSB7XG4gICAgICAgICAgICBpZDogaW5kZXgsXG4gICAgICAgICAgICBpY29uSWQ6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpLFxuICAgICAgICAgICAgbmFtZTogXCLlkI3lrZdcIiArIGluZGV4LFxuICAgICAgICAgICAgY3VyUm9ib3RVc2U6IHtcbiAgICAgICAgICAgICAgICBpZDogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKSArIDEwMDAwMDAsXG4gICAgICAgICAgICAgICAgcm9ib3RJbWdJZDogaW5kZXggJSBSb2JvdFR5cGVDb3VudCxcbiAgICAgICAgICAgICAgICBtaW50OiBpbmRleCxcbiAgICAgICAgICAgICAgICBsZXZlbDogaW5kZXgsXG4gICAgICAgICAgICAgICAgcm9ib3RUeXBlOiBpbmRleCAlIFJvYm90VHlwZUNvdW50LFxuICAgICAgICAgICAgICAgIGVmZmljaWVuY3k6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwKSAvIDEwMCxcbiAgICAgICAgICAgICAgICBsdWNrOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCkgLyAxMDAsXG4gICAgICAgICAgICAgICAgbG9zczogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDApIC8gMTAwLFxuICAgICAgICAgICAgICAgIG1hdGljQ29zdDogMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVE9ETyDog73ph49cbiAgICAgICAgfVxuICAgICAgICBkYXRhLmZyaWVuZExpc3QucHVzaChmcmllbmQpO1xuXG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufSJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxVdGlsc1xcVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBZ0JBLENBQUM7SUFmRyxVQUFVO0lBQ0ksY0FBUSxHQUF0QixVQUF1QixHQUFXLEVBQUUsSUFBUztRQUN6QyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCx1QkFBdUI7SUFDVCxjQUFRLEdBQXRCLFVBQXVCLEdBQVc7UUFDOUIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDcEMsQ0FBQztJQUVELFVBQVU7SUFDSSxvQkFBYyxHQUE1QixVQUE2QixHQUFXO1FBQ3BDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0wsWUFBQztBQUFELENBaEJBLEFBZ0JDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyB7XG4gICAgLyoq5a2Y5qGj5pWw5o2uICovXG4gICAgcHVibGljIHN0YXRpYyBTYXZlRGF0YShrZXk6IHN0cmluZywgZGF0YTogYW55KTogdm9pZCB7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKuivu+WPluaVsOaNrizmsqHmnInor6XmlbDmja7ml7blm57kvKBudWxsICovXG4gICAgcHVibGljIHN0YXRpYyBMb2FkRGF0YShrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGxldCBkYXRhID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgIHJldHVybiBkYXRhID09IFwiXCIgPyBudWxsIDogZGF0YTtcbiAgICB9XG5cbiAgICAvKirliKDpmaTmlbDmja4gKi9cbiAgICBwdWJsaWMgc3RhdGljIFJlbW92ZVNhdmVEYXRhKGtleTogc3RyaW5nKSB7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgIH1cbn1cbiJdfQ==
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
    // 更新详情页；
    LocMsg[LocMsg["UPDATE_ROBOT_INFOR"] = 3] = "UPDATE_ROBOT_INFOR";
    // 更新当前使用小人；
    LocMsg[LocMsg["UPDATE_CUR_ROBOT_INFOR"] = 4] = "UPDATE_CUR_ROBOT_INFOR";
    // update energy info
    LocMsg[LocMsg["UPDATE_Energy_INFOR"] = 5] = "UPDATE_Energy_INFOR";
    //
    LocMsg[LocMsg["SHOW_FRIEND_Energy_INFOR"] = 6] = "SHOW_FRIEND_Energy_INFOR";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlTW9kZWxcXE1zZ0V2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksTUFlWDtBQWZELFdBQVksTUFBTTtJQUNkLFNBQVM7SUFDVCwyREFBZ0IsQ0FBQTtJQUNoQixhQUFhO0lBQ2IsMkRBQWdCLENBQUE7SUFDaEIsVUFBVTtJQUNWLDJEQUFnQixDQUFBO0lBQ2hCLFNBQVM7SUFDVCwrREFBa0IsQ0FBQTtJQUNsQixZQUFZO0lBQ1osdUVBQXNCLENBQUE7SUFDdEIscUJBQXFCO0lBQ3JCLGlFQUFtQixDQUFBO0lBQ25CLEVBQUU7SUFDRiwyRUFBd0IsQ0FBQTtBQUM1QixDQUFDLEVBZlcsTUFBTSxHQUFOLGNBQU0sS0FBTixjQUFNLFFBZWpCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gTG9jTXNnIHtcbiAgICAvLyDlsZXnpLror6bmg4XpobXvvJtcbiAgICBTSE9XX1JPQk9UX0lORk9SLFxuICAgIC8vIOabtOaWsE1hdGlj5Liq5pWw77ybXG4gICAgVVBEQVRFX01BUklDX05VTSxcbiAgICAvLyDmm7TmlrDllYbln47mlbDmja7vvJtcbiAgICBVUERBVEVfU0hPUF9EQVRBLFxuICAgIC8vIOabtOaWsOivpuaDhemhte+8m1xuICAgIFVQREFURV9ST0JPVF9JTkZPUixcbiAgICAvLyDmm7TmlrDlvZPliY3kvb/nlKjlsI/kurrvvJtcbiAgICBVUERBVEVfQ1VSX1JPQk9UX0lORk9SLFxuICAgIC8vIHVwZGF0ZSBlbmVyZ3kgaW5mb1xuICAgIFVQREFURV9FbmVyZ3lfSU5GT1IsXG4gICAgLy9cbiAgICBTSE9XX0ZSSUVORF9FbmVyZ3lfSU5GT1IsXG59Il19
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
            energyType: 0,
            energyTime: new Date().getTime() - index * 1000 * 300,
            energyCount: Math.ceil(Math.random() * 1000),
            isGrow: false,
            canSteal: true,
        };
        data.push(energy);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVyZ3lcXEVuZXJneVByb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV2EsUUFBQSxlQUFlLEdBQUcsQ0FBQyxDQUFDO0FBQ3BCLFFBQUEsY0FBYyxHQUFXLENBQUMsR0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDO0FBQ25DLFFBQUEsY0FBYyxHQUFXLEVBQUUsR0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDO0FBRWpELElBQUk7QUFDUyxRQUFBLGVBQWUsR0FBRyxDQUFDLENBQUM7QUFDakMsSUFBWSxVQUtYO0FBTEQsV0FBWSxVQUFVO0lBQ2xCLCtDQUFNLENBQUE7SUFDTiwrQ0FBTSxDQUFBO0lBQ04sK0NBQU0sQ0FBQTtJQUNOLCtDQUFNLENBQUE7QUFDVixDQUFDLEVBTFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFLckI7QUFFRCxTQUFnQixhQUFhLENBQUMsR0FBVyxFQUFFLElBQWdCLEVBQUUsSUFBYSxFQUFFLEtBQWMsRUFBRSxJQUFjLEVBQUUsS0FBZTtJQUN2SCxPQUFPO1FBQ0gsR0FBRyxFQUFFLEdBQUc7UUFDUixVQUFVLEVBQUUsSUFBSTtRQUNoQixVQUFVLEVBQUUsSUFBSSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFO1FBQzdDLFdBQVcsRUFBRSxLQUFLLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDekIsUUFBUSxFQUFFLEtBQUs7S0FDbEIsQ0FBQztBQUNOLENBQUM7QUFURCxzQ0FTQztBQUVELFNBQWdCLGlCQUFpQjtJQUM3QixJQUFJLElBQUksR0FBYyxFQUFFLENBQUM7SUFFekIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNwQyxJQUFJLE1BQU0sR0FBWTtZQUNsQixHQUFHLEVBQUUsS0FBSztZQUNWLFVBQVUsRUFBRSxDQUFDO1lBQ2IsVUFBVSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxHQUFDLElBQUksR0FBQyxHQUFHO1lBQ2pELFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDNUMsTUFBTSxFQUFFLEtBQUs7WUFDYixRQUFRLEVBQUUsSUFBSTtTQUNqQixDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUVyQjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFoQkQsOENBZ0JDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJUm9ib3QsIFJvYm90VHlwZUNvdW50fSBmcm9tIFwiLi4vTW9kZWwvUm9ib3RQcm9wXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElFbmVyZ3kge1xyXG4gICAgaWR4OiBudW1iZXIsXHJcbiAgICBlbmVyZ3lUeXBlOiBFbmVyZ3lUeXBlLFxyXG4gICAgZW5lcmd5VGltZTogbnVtYmVyLFxyXG4gICAgZW5lcmd5Q291bnQ6IG51bWJlcixcclxuICAgIGlzR3JvdzogYm9vbGVhbixcclxuICAgIGNhblN0ZWFsOiBib29sZWFuLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRW5lcmd5U2hvd0NvdW50ID0gNTtcclxuZXhwb3J0IGNvbnN0IE1hdHVyYXRpb25UaW1lOiBudW1iZXIgPSA1KjYwKjEwMDA7XHJcbmV4cG9ydCBjb25zdCBDb2xsZWN0aW9uVGltZTogbnVtYmVyID0gMzAqNjAqMTAwMDtcclxuXHJcbi8vIDRcclxuZXhwb3J0IGNvbnN0IEVuZXJneVR5cGVDb3VudCA9IDQ7XHJcbmV4cG9ydCBlbnVtIEVuZXJneVR5cGUge1xyXG4gICAgVFlQRV8xLFxyXG4gICAgVFlQRV8yLFxyXG4gICAgVFlQRV8zLFxyXG4gICAgVFlQRV80LFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWFrZU5ld0VuZXJneShpZHg6IG51bWJlciwgdHlwZTogRW5lcmd5VHlwZSwgdGltZT86IG51bWJlciwgY291bnQ/OiBudW1iZXIsIGdyb3c/OiBib29sZWFuLCBzdGVhbD86IGJvb2xlYW4pOiBJRW5lcmd5IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWR4OiBpZHgsXHJcbiAgICAgICAgZW5lcmd5VHlwZTogdHlwZSxcclxuICAgICAgICBlbmVyZ3lUaW1lOiB0aW1lPyB0aW1lIDogbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICAgICAgZW5lcmd5Q291bnQ6IGNvdW50PyBjb3VudCA6IDAsXHJcbiAgICAgICAgaXNHcm93OiBncm93PyBncm93IDogdHJ1ZSxcclxuICAgICAgICBjYW5TdGVhbDogc3RlYWwsXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGVmYXVsdEVuZXJneUluZm8oKTogSUVuZXJneVtdIHtcclxuICAgIGxldCBkYXRhOiBJRW5lcmd5W10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMzsgaW5kZXgrKykge1xyXG4gICAgICAgIGxldCBlbmVyZ3k6IElFbmVyZ3kgPSB7XHJcbiAgICAgICAgICAgIGlkeDogaW5kZXgsXHJcbiAgICAgICAgICAgIGVuZXJneVR5cGU6IDAsXHJcbiAgICAgICAgICAgIGVuZXJneVRpbWU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gaW5kZXgqMTAwMCozMDAsXHJcbiAgICAgICAgICAgIGVuZXJneUNvdW50OiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMDApLFxyXG4gICAgICAgICAgICBpc0dyb3c6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYW5TdGVhbDogdHJ1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRhdGEucHVzaChlbmVyZ3kpO1xyXG5cclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhO1xyXG59Il19
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
        _this.lbSol = null;
        _this.iconSFs = [];
        _this.ndState = [];
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
        this.lbID.string = "#" + data.id;
        this.lbType.string = RobotProp_1.RobotTypeDesc[data.robotType];
        this.lbMint.string = "Mint:" + data.mint;
        this.lbLv.string = "Lv " + data.level;
        this.lbEfficiency.string = "" + data.efficiency;
        this.lbLuck.string = "" + data.luck;
        this.lbLoss.string = "" + data.loss;
        this.lbSol.string = data.maticCost + " SOL";
        this.icon.spriteFrame = this.iconSFs[data.robotImgId];
        for (var _i = 0, _a = this.ndState; _i < _a.length; _i++) {
            var iterator = _a[_i];
            iterator.active = false;
        }
        this.ndState[state].active = true;
    };
    RobotInforCtrl.prototype.OnBtnClose = function () {
        this.node.active = false;
    };
    RobotInforCtrl.prototype.OnClickBuy = function () {
        LocalDataAPI_1.BuyRobot(this.robot);
    };
    RobotInforCtrl.prototype.OnClickUse = function () {
        LocalDataAPI_1.UseRobot(this.robot);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluU2NlbmVcXFJvYm90SW5mb3JDdHJsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBbUM7QUFDbkMsa0RBQStDO0FBQy9DLGdEQUEyRDtBQUMzRCxzREFBMkQ7QUFFckQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBWSxXQUlYO0FBSkQsV0FBWSxXQUFXO0lBQ25CLDJDQUFHLENBQUE7SUFDSCw2Q0FBSSxDQUFBO0lBQ0oscURBQVEsQ0FBQTtBQUNaLENBQUMsRUFKVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUl0QjtBQUdEO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBNEZDO1FBekZHLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUd0QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUd0QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUc5QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixhQUFPLEdBQXFCLEVBQUUsQ0FBQztRQUcvQixhQUFPLEdBQWMsRUFBRSxDQUFDO1FBRWhCLFdBQUssR0FBVyxJQUFJLENBQUM7O1FBd0Q3QixpQkFBaUI7SUFDckIsQ0FBQztJQXZEYSwrQkFBTSxHQUFoQjtRQUNJLGdCQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBTSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDckUsQ0FBQztJQUNTLGlDQUFRLEdBQWxCO1FBQ0ks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S0FBSyxDQUFDO2lEQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO21EQUNJO0lBRy9CO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO21EQUNJO0lBakNQLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0E0RmxDO0lBQUQscUJBQUM7Q0E1RkQsQUE0RkMsQ0E1RjJDLEVBQUUsQ0FBQyxTQUFTLEdBNEZ2RDtrQkE1Rm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2xvYmFsIGZyb20gXCIuLi9BcHAvR2xvYmFsXCI7XG5pbXBvcnQgeyBMb2NNc2cgfSBmcm9tIFwiLi4vQmFzZU1vZGVsL01zZ0V2ZW50XCI7XG5pbXBvcnQgeyBJUm9ib3QsIFJvYm90VHlwZURlc2MgfSBmcm9tIFwiLi4vTW9kZWwvUm9ib3RQcm9wXCI7XG5pbXBvcnQgeyBCdXlSb2JvdCwgVXNlUm9ib3QgfSBmcm9tIFwiLi4vVXRpbHMvTG9jYWxEYXRhQVBJXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBlbnVtIElORk9SX1NUQVRFIHtcbiAgICBCVVksXG4gICAgSEFFRCxcbiAgICBJU1VTRUlORyxcbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvYm90SW5mb3JDdHJsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgaWNvbjogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYklEOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJUeXBlOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJNaW50OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJMdjogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiRWZmaWNpZW5jeTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiTHVjazogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiTG9zczogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiU29sOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBpY29uU0ZzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxuICAgIG5kU3RhdGU6IGNjLk5vZGVbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSByb2JvdDogSVJvYm90ID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIEdsb2JhbC5JbnN0Lk9uKExvY01zZy5VUERBVEVfUk9CT1RfSU5GT1IsIHRoaXMuc2V0RGF0YVRvVUksIHRoaXMpXG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gLy8g5rWL6K+V77ybXG4gICAgICAgIC8vIGxldCBkYXRhOiBJUm9ib3QgPSB7XG4gICAgICAgIC8vICAgICBpZDogMSxcbiAgICAgICAgLy8gICAgIHJvYm90SW1nSWQ6IDIsXG4gICAgICAgIC8vICAgICByb2JvdFR5cGU6IFJvYm90VHlwZS5UWVBFXzEsXG4gICAgICAgIC8vICAgICBsZXZlbDogMyxcbiAgICAgICAgLy8gICAgIG1pbnQ6IDQsXG4gICAgICAgIC8vICAgICBzb2w6IDUsXG4gICAgICAgIC8vICAgICBlZmZpY2llbmN5OiA2LFxuICAgICAgICAvLyAgICAgbHVjazogNyxcbiAgICAgICAgLy8gICAgIGxvc3M6IDhcbiAgICAgICAgLy8gfTtcbiAgICAgICAgLy8gdGhpcy5zZXREaWFsb2coZGF0YSwgSU5GT1JfU1RBVEUuSVNVU0VJTkcpO1xuICAgIH1cblxuICAgIHNldERpYWxvZyhkYXRhOiBJUm9ib3QsIHN0YXRlOiBJTkZPUl9TVEFURSkge1xuICAgICAgICB0aGlzLnNldERhdGFUb1VJKGRhdGEsIHN0YXRlKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgc2V0RGF0YVRvVUkoZGF0YTogSVJvYm90LCBzdGF0ZTogSU5GT1JfU1RBVEUpIHtcbiAgICAgICAgdGhpcy5yb2JvdCA9IGRhdGE7IHRoaXMubGJJRC5zdHJpbmcgPSBcIiNcIiArIGRhdGEuaWQ7XG4gICAgICAgIHRoaXMubGJUeXBlLnN0cmluZyA9IFJvYm90VHlwZURlc2NbZGF0YS5yb2JvdFR5cGVdO1xuICAgICAgICB0aGlzLmxiTWludC5zdHJpbmcgPSBcIk1pbnQ6XCIgKyBkYXRhLm1pbnQ7XG4gICAgICAgIHRoaXMubGJMdi5zdHJpbmcgPSBcIkx2IFwiICsgZGF0YS5sZXZlbDtcbiAgICAgICAgdGhpcy5sYkVmZmljaWVuY3kuc3RyaW5nID0gXCJcIiArIGRhdGEuZWZmaWNpZW5jeTtcbiAgICAgICAgdGhpcy5sYkx1Y2suc3RyaW5nID0gXCJcIiArIGRhdGEubHVjaztcbiAgICAgICAgdGhpcy5sYkxvc3Muc3RyaW5nID0gXCJcIiArIGRhdGEubG9zcztcbiAgICAgICAgdGhpcy5sYlNvbC5zdHJpbmcgPSBkYXRhLm1hdGljQ29zdCArIFwiIFNPTFwiO1xuICAgICAgICB0aGlzLmljb24uc3ByaXRlRnJhbWUgPSB0aGlzLmljb25TRnNbZGF0YS5yb2JvdEltZ0lkXTtcblxuICAgICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIHRoaXMubmRTdGF0ZSkge1xuICAgICAgICAgICAgaXRlcmF0b3IuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uZFN0YXRlW3N0YXRlXS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIE9uQnRuQ2xvc2UoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBPbkNsaWNrQnV5KCkge1xuICAgICAgICBCdXlSb2JvdCh0aGlzLnJvYm90KTtcbiAgICB9XG5cblxuICAgIE9uQ2xpY2tVc2UoKSB7XG4gICAgICAgIFVzZVJvYm90KHRoaXMucm9ib3QpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
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
                this.lbRobot.string = RobotProp_1.RobotTypeDesc[data.curRobotUse.robotType];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxGcmllbmRcXEZyaWVuZEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsZ0RBQW1EO0FBQ25ELHdDQUFtQztBQUNuQyxrREFBNkM7QUFFdkMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFNNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFxQ0M7UUFuQ0csVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFHekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixhQUFPLEdBQXFCLEVBQUUsQ0FBQztRQUt2QixnQkFBVSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLGVBQVMsR0FBVyxDQUFDLENBQUM7O0lBaUJsQyxDQUFDO0lBckJHLHNCQUFJLGtDQUFTO2FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFJSyw2QkFBTyxHQUFiLFVBQWMsR0FBVyxFQUFFLElBQWE7OztnQkFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcseUJBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNoRSxVQUFVO2dCQUNWLHlDQUF5QztnQkFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7Ozs7S0FDcEQ7SUFFRCxpQ0FBVyxHQUFYLFVBQVksS0FBSyxFQUFFLGVBQWU7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0IsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFNLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFqQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ007SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztnREFDSTtJQWRkLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FxQy9CO0lBQUQsa0JBQUM7Q0FyQ0QsQUFxQ0MsQ0FyQ3dDLEVBQUUsQ0FBQyxTQUFTLEdBcUNwRDtrQkFyQ29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRnJpZW5kIH0gZnJvbSBcIi4uL01vZGVsL0ZyaWVuZFByb3BcIjtcbmltcG9ydCB7IFJvYm90VHlwZURlc2MgfSBmcm9tIFwiLi4vTW9kZWwvUm9ib3RQcm9wXCI7XG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi9BcHAvR2xvYmFsXCI7XG5pbXBvcnQge0xvY01zZ30gZnJvbSBcIi4uL0Jhc2VNb2RlbC9Nc2dFdmVudFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5cblxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG90Um9vbUl0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgaWNvbjogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYk5hbWU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYlJvYm90OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuZEVuZXJneTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBpY29uU0ZzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cbiAgICBnZXQgcmVuZGVySWR4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVySWR4O1xuICAgIH1cbiAgICBwcml2YXRlIF9yZW5kZXJJZHg6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgX2ZyaWRlbklkOiBudW1iZXIgPSAwO1xuXG4gICAgYXN5bmMgU2V0SXRlbShpZHg6IG51bWJlciwgZGF0YTogSUZyaWVuZCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJJZHggPSBpZHg7XG4gICAgICAgIHRoaXMuX2ZyaWRlbklkID0gZGF0YS5pZDtcbiAgICAgICAgdGhpcy5sYk5hbWUuc3RyaW5nID0gZGF0YS5uYW1lO1xuICAgICAgICB0aGlzLmxiUm9ib3Quc3RyaW5nID0gUm9ib3RUeXBlRGVzY1tkYXRhLmN1clJvYm90VXNlLnJvYm90VHlwZV07XG4gICAgICAgIC8vIFRPRE8g6IO96YePXG4gICAgICAgIC8vIHRoaXMubmRFbmVyZ3kuYWN0aXZlID0gZGF0YS5nZXRFbmVyZ3k7XG4gICAgICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuaWNvblNGc1tkYXRhLmljb25JZF1cbiAgICB9XG5cbiAgICBPbkNsaWNrU2VsZihldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3JlbmRlcklkeCk7XG4gICAgICAgIEdsb2JhbC5JbnN0LkVtaXQoTG9jTXNnLlNIT1dfRlJJRU5EX0VuZXJneV9JTkZPUiwgbnVsbCwgNCk7XG4gICAgfVxuXG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluU2NlbmVcXE1haW5TY2VuZUN0cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQW1DO0FBQ25DLGtEQUErQztBQUUvQyxtREFBK0Q7QUFFekQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFrRkM7UUEvRUcsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFJOUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBZ0IsRUFBRSxDQUFDO1FBRzdCLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUU5Qix5QkFBbUIsR0FBVyxDQUFDLENBQUM7UUFDaEMseUJBQW1CLEdBQVksS0FBSyxDQUFDO1FBQ3JDLGtCQUFZLEdBQWMsRUFBRSxDQUFDO1FBQzdCLG1CQUFhLEdBQTBCLElBQUksQ0FBQzs7SUFnRXhELENBQUM7SUEvRGEsMkJBQU0sR0FBaEI7UUFDSSxvQ0FBb0M7UUFFcEMsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVB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QUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUMxSCxLQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUUvQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQzVHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxvQkFBb0IsQ0FBQztJQUdwRCxDQUFDO0lBOUVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0RBQ087SUFJOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztrREFDTztJQUc3QjtRQURDLFFBQVEsQ0FBQyx3QkFBYyxDQUFDO3NEQUNhO0lBYnJCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FrRjlCO0lBQUQsaUJBQUM7Q0FsRkQsQUFrRkMsQ0FsRnVDLEVBQUUsQ0FBQyxTQUFTLEdBa0ZuRDtrQkFsRm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2xvYmFsIGZyb20gXCIuLi9BcHAvR2xvYmFsXCI7XG5pbXBvcnQgeyBMb2NNc2cgfSBmcm9tIFwiLi4vQmFzZU1vZGVsL01zZ0V2ZW50XCI7XG5pbXBvcnQgeyBJUm9ib3QgfSBmcm9tIFwiLi4vTW9kZWwvUm9ib3RQcm9wXCI7XG5pbXBvcnQgUm9ib3RJbmZvckN0cmwsIHsgSU5GT1JfU1RBVEUgfSBmcm9tIFwiLi9Sb2JvdEluZm9yQ3RybFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsbG93b3JsZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxuICAgIG1lbnVBbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjZW50ZXJSb290OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShbY2MuUHJlZmFiXSlcbiAgICBjZW50ZXJQcmVmOiBjYy5QcmVmYWJbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KFJvYm90SW5mb3JDdHJsKVxuICAgIHJvYm90SW5mb3JDdHJsOiBSb2JvdEluZm9yQ3RybCA9IG51bGw7XG5cbiAgICBwcml2YXRlIGN1ckNlbnRlckdyb3VwSW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjZW50ZXJHcm91cElzTW92aW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBjZW50ZXJHcm91cHM6IGNjLk5vZGVbXSA9IFtdO1xuICAgIHByaXZhdGUgX21hcEV2ZW50QmluZDogTWFwPHN0cmluZywgRnVuY3Rpb24+ID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICAvLyB0aGlzLm1lbnVBbmltLnBsYXkoJ21lbnVfcmVzZXQnKTtcblxuICAgICAgICBsZXQgaG9tZUNlbnRlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2VudGVyUHJlZlswXSk7XG4gICAgICAgIGhvbWVDZW50ZXIucG9zaXRpb24ueCA9IDA7XG4gICAgICAgIHRoaXMuY2VudGVyUm9vdC5hZGRDaGlsZChob21lQ2VudGVyKTtcbiAgICAgICAgbGV0IGZyaWVuZENlbnRlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2VudGVyUHJlZlsxXSk7XG4gICAgICAgIHRoaXMuY2VudGVyUm9vdC5hZGRDaGlsZChmcmllbmRDZW50ZXIpO1xuICAgICAgICBsZXQgYmFja3BhY2tDZW50ZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNlbnRlclByZWZbMl0pO1xuICAgICAgICB0aGlzLmNlbnRlclJvb3QuYWRkQ2hpbGQoYmFja3BhY2tDZW50ZXIpO1xuICAgICAgICBsZXQgc2hvcENlbnRlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2VudGVyUHJlZlszXSk7XG4gICAgICAgIHRoaXMuY2VudGVyUm9vdC5hZGRDaGlsZChzaG9wQ2VudGVyKTtcbiAgICAgICAgbGV0IGZyaWVuZEVuZXJneUNlbnRlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2VudGVyUHJlZls0XSk7XG4gICAgICAgIHRoaXMuY2VudGVyUm9vdC5hZGRDaGlsZChmcmllbmRFbmVyZ3lDZW50ZXIpO1xuICAgICAgICB0aGlzLmNlbnRlckdyb3VwcyA9IHRoaXMuY2VudGVyUm9vdC5jaGlsZHJlbjtcblxuICAgICAgICB0aGlzLl9Jbml0TGlzdGVuZXIoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBfSW5pdExpc3RlbmVyKCkge1xuICAgICAgICB0aGlzLl9tYXBFdmVudEJpbmQgPSBuZXcgTWFwPHN0cmluZywgRnVuY3Rpb24+KCk7XG4gICAgICAgIHRoaXMuX21hcEV2ZW50QmluZC5zZXQoTG9jTXNnLlNIT1dfUk9CT1RfSU5GT1IudG9TdHJpbmcoKSwgdGhpcy5fU2hvd1JvYm90RGlhbG9nKTtcblxuICAgICAgICB0aGlzLl9tYXBFdmVudEJpbmQuZm9yRWFjaCgodmFsdWUsIGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBHbG9iYWwuSW5zdC5PbihldmVudCwgdmFsdWUuYmluZCh0aGlzKSwgdGhpcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIEdsb2JhbC5JbnN0Lk9uKExvY01zZy5TSE9XX0ZSSUVORF9FbmVyZ3lfSU5GT1IsIHRoaXMuT25CdG5DbGljaywgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfU2hvd1JvYm90RGlhbG9nKGRhdGE6IElSb2JvdCwgc3RhdGU6IElORk9SX1NUQVRFKSB7XG4gICAgICAgIGlmICh0aGlzLnJvYm90SW5mb3JDdHJsLm5vZGUuYWN0aXZlKSByZXR1cm47XG4gICAgICAgIHRoaXMucm9ib3RJbmZvckN0cmwuc2V0RGlhbG9nKGRhdGEsIHN0YXRlKTtcblxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgT25CdG5DbGljayhldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgIGxldCBsYXN0Q2VudGVyR3JvdXBJbmRleCA9IHBhcnNlSW50KGN1c3RvbUV2ZW50RGF0YSk7XG4gICAgICAgIGlmICh0aGlzLmN1ckNlbnRlckdyb3VwSW5kZXggPT09IGxhc3RDZW50ZXJHcm91cEluZGV4IHx8IHRoaXMuY2VudGVyR3JvdXBJc01vdmluZykgcmV0dXJuO1xuXG4gICAgICAgIC8v5bem5ruR5Yqo77ybXG4gICAgICAgIHRoaXMuY2VudGVyR3JvdXBJc01vdmluZyA9IHRydWU7XG4gICAgICAgIGxldCBsYXN0Q2VudGVyUG9zWCA9IHRoaXMuY3VyQ2VudGVyR3JvdXBJbmRleCA8IGxhc3RDZW50ZXJHcm91cEluZGV4ID8gdGhpcy5ub2RlLndpZHRoIDogLXRoaXMubm9kZS53aWR0aDtcbiAgICAgICAgbGV0IG1vdmVUaW1lID0gMC4xO1xuICAgICAgICBsZXQgb2xkSW5kZXggPSB0aGlzLmN1ckNlbnRlckdyb3VwSW5kZXg7XG5cbiAgICAgICAgdGhpcy5jZW50ZXJHcm91cHNbbGFzdENlbnRlckdyb3VwSW5kZXhdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2VudGVyR3JvdXBzW2xhc3RDZW50ZXJHcm91cEluZGV4XS54ID0gbGFzdENlbnRlclBvc1g7XG4gICAgICAgIHRoaXMuY2VudGVyR3JvdXBzW3RoaXMuY3VyQ2VudGVyR3JvdXBJbmRleF0ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbyhtb3ZlVGltZSwgY2MudjIoLWxhc3RDZW50ZXJQb3NYLCAwKSksIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2VudGVyR3JvdXBJc01vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jZW50ZXJHcm91cHNbb2xkSW5kZXhdLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIH0pKSk7XG4gICAgICAgIHRoaXMuY2VudGVyR3JvdXBzW2xhc3RDZW50ZXJHcm91cEluZGV4XS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZVRvKG1vdmVUaW1lLCBjYy52MigwLCAwKSksIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgfSkpKTtcblxuICAgICAgICB0aGlzLmN1ckNlbnRlckdyb3VwSW5kZXggPSBsYXN0Q2VudGVyR3JvdXBJbmRleDtcblxuXG4gICAgfVxufVxuIl19
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
    _a[RobotType.TYPE_1] = "初级机器人",
    _a[RobotType.TYPE_2] = "中级机器人",
    _a[RobotType.TYPE_3] = "高级机器人",
    _a[RobotType.TYPE_4] = "史诗机器人",
    _a);
function DefaultShopInfo() {
    var data = [];
    for (var index = 0; index < 20; index++) {
        var robot = {
            id: Math.ceil(Math.random() * 1000000) + 5000000,
            robotImgId: index % exports.RobotTypeCount,
            mint: index,
            maticCost: index,
            level: index,
            robotType: index % exports.RobotTypeCount,
            efficiency: Math.ceil(Math.random() * 10) / 10,
            luck: Math.ceil(Math.random() * 10) / 10,
            loss: Math.ceil(Math.random() * 10) / 10
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcUm9ib3RQcm9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsT0FBTztBQUNNLFFBQUEsY0FBYyxHQUFHLENBQUMsQ0FBQztBQUNoQyxJQUFZLFNBS1g7QUFMRCxXQUFZLFNBQVM7SUFDakIsNkNBQU0sQ0FBQTtJQUNOLDZDQUFNLENBQUE7SUFDTiw2Q0FBTSxDQUFBO0lBQ04sNkNBQU0sQ0FBQTtBQUNWLENBQUMsRUFMVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUtwQjtBQUFBLENBQUM7QUFFRixHQUFHO0FBQ1UsUUFBQSxhQUFhO0lBQ3RCLEdBQUMsU0FBUyxDQUFDLE1BQU0sSUFBRyxPQUFPO0lBQzNCLEdBQUMsU0FBUyxDQUFDLE1BQU0sSUFBRyxPQUFPO0lBQzNCLEdBQUMsU0FBUyxDQUFDLE1BQU0sSUFBRyxPQUFPO0lBQzNCLEdBQUMsU0FBUyxDQUFDLE1BQU0sSUFBRyxPQUFPO1FBQzlCO0FBR0QsU0FBZ0IsZUFBZTtJQUMzQixJQUFJLElBQUksR0FBYSxFQUFFLENBQUM7SUFFeEIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNyQyxJQUFJLEtBQUssR0FBVztZQUNoQixFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsT0FBTztZQUNoRCxVQUFVLEVBQUUsS0FBSyxHQUFHLHNCQUFjO1lBQ2xDLElBQUksRUFBRSxLQUFLO1lBQ1gsU0FBUyxFQUFFLEtBQUs7WUFDaEIsS0FBSyxFQUFFLEtBQUs7WUFDWixTQUFTLEVBQUUsS0FBSyxHQUFHLHNCQUFjO1lBQ2pDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFO1lBQzlDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFO1lBQ3hDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFO1NBQzNDLENBQUE7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBRXBCO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQW5CRCwwQ0FtQkMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElSb2JvdCB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByb2JvdEltZ0lkOiBudW1iZXIsXG4gICAgcm9ib3RUeXBlOiBSb2JvdFR5cGUsXG4gICAgbGV2ZWw6IG51bWJlciwvL+etiee6p1xuICAgIG1pbnQ6IG51bWJlciwvL+WQiOaIkOasoeaVsFxuICAgIG1hdGljQ29zdDogbnVtYmVyLC8vc29s5Lu35qC8XG5cbiAgICAvLyDlsZ7mgKdcbiAgICBlZmZpY2llbmN5OiBudW1iZXIsLy/mlYjnjodcbiAgICBsdWNrOiBudW1iZXIsLy/lubjov5BcbiAgICBsb3NzOiBudW1iZXIsLy/mjZ/ogJdcblxufVxuXG5cbi8vIDTnp43nsbvlnotcbmV4cG9ydCBjb25zdCBSb2JvdFR5cGVDb3VudCA9IDQ7XG5leHBvcnQgZW51bSBSb2JvdFR5cGUge1xuICAgIFRZUEVfMSxcbiAgICBUWVBFXzIsXG4gICAgVFlQRV8zLFxuICAgIFRZUEVfNCxcbn07XG5cbi8vIFxuZXhwb3J0IGNvbnN0IFJvYm90VHlwZURlc2MgPSB7XG4gICAgW1JvYm90VHlwZS5UWVBFXzFdOiBcIuWInee6p+acuuWZqOS6ulwiLFxuICAgIFtSb2JvdFR5cGUuVFlQRV8yXTogXCLkuK3nuqfmnLrlmajkurpcIixcbiAgICBbUm9ib3RUeXBlLlRZUEVfM106IFwi6auY57qn5py65Zmo5Lq6XCIsXG4gICAgW1JvYm90VHlwZS5UWVBFXzRdOiBcIuWPsuivl+acuuWZqOS6ulwiLFxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBEZWZhdWx0U2hvcEluZm8oKTogSVJvYm90W10ge1xuICAgIGxldCBkYXRhOiBJUm9ib3RbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDIwOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCByb2JvdDogSVJvYm90ID0ge1xuICAgICAgICAgICAgaWQ6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMDAwMCkgKyA1MDAwMDAwLFxuICAgICAgICAgICAgcm9ib3RJbWdJZDogaW5kZXggJSBSb2JvdFR5cGVDb3VudCxcbiAgICAgICAgICAgIG1pbnQ6IGluZGV4LFxuICAgICAgICAgICAgbWF0aWNDb3N0OiBpbmRleCxcbiAgICAgICAgICAgIGxldmVsOiBpbmRleCxcbiAgICAgICAgICAgIHJvYm90VHlwZTogaW5kZXggJSBSb2JvdFR5cGVDb3VudCxcbiAgICAgICAgICAgIGVmZmljaWVuY3k6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTApIC8gMTAsXG4gICAgICAgICAgICBsdWNrOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwKSAvIDEwLFxuICAgICAgICAgICAgbG9zczogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMCkgLyAxMFxuICAgICAgICB9XG4gICAgICAgIGRhdGEucHVzaChyb2JvdCk7XG5cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59Il19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRnJpZW5kUHJvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJvYm90IH0gZnJvbSBcIi4vUm9ib3RQcm9wXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZyaWVuZCB7XG4gICAgaWQ6IG51bWJlcixcbiAgICBpY29uSWQ6IG51bWJlcixcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgY3VyUm9ib3RVc2U6IElSb2JvdCxcbiAgICAvLyBUT0RPIOiDvemHj++8m1xufSJdfQ==
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
                this.lbMint.string = "Mint:" + data.mint;
                this.lbID.string = "#" + data.id;
                this.lbSol.string = data.maticCost + "SOL";
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
    ShopItem.prototype.OnClickBuy = function () {
        LocalDataAPI_1.BuyRobot(this._robotData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTaG9wXFxTaG9wSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBbUM7QUFDbkMsa0RBQStDO0FBQy9DLDhEQUEwRDtBQUMxRCxnREFBMkQ7QUFDM0Qsc0RBQWlEO0FBRzNDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBTTVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcURDO1FBbkRHLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBR3RCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBSXZCLGFBQU8sR0FBcUIsRUFBRSxDQUFDO1FBUXZCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDeEIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixnQkFBVSxHQUFXLElBQUksQ0FBQzs7SUFzQnRDLENBQUM7SUE5Qkcsc0JBQUksK0JBQVM7YUFBYjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLDZCQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBS0ssMEJBQU8sR0FBYixVQUFjLEdBQVcsRUFBRSxJQUFZOzs7Z0JBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO2dCQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUE7Z0JBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcseUJBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBOzs7O0tBQ3hEO0lBRUQsOEJBQVcsR0FBWCxVQUFZLEtBQUssRUFBRSxlQUFlO1FBQzlCLGdCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBTSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsNEJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUNJLHVCQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFqREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswQ0FDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0c7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNHO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFJdkI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7NkNBQ0k7SUFyQmQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXFENUI7SUFBRCxlQUFDO0NBckRELEFBcURDLENBckRxQyxFQUFFLENBQUMsU0FBUyxHQXFEakQ7a0JBckRvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vQXBwL0dsb2JhbFwiO1xuaW1wb3J0IHsgTG9jTXNnIH0gZnJvbSBcIi4uL0Jhc2VNb2RlbC9Nc2dFdmVudFwiO1xuaW1wb3J0IHsgSU5GT1JfU1RBVEUgfSBmcm9tIFwiLi4vTWFpblNjZW5lL1JvYm90SW5mb3JDdHJsXCI7XG5pbXBvcnQgeyBJUm9ib3QsIFJvYm90VHlwZURlc2MgfSBmcm9tIFwiLi4vTW9kZWwvUm9ib3RQcm9wXCI7XG5pbXBvcnQgeyBCdXlSb2JvdCB9IGZyb20gXCIuLi9VdGlscy9Mb2NhbERhdGFBUElcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5cblxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcEl0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgaWNvbjogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYlR5cGU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYklEOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJNaW50OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJMdjogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiU29sOiBjYy5MYWJlbCA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgIGljb25TRnM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgIGdldCByZW5kZXJJZHgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJJZHg7XG4gICAgfVxuICAgIGdldCByb2JvdElkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm9ib3REYXRhLmlkO1xuICAgIH1cbiAgICBwcml2YXRlIF9yZW5kZXJJZHg6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgX3Nob3BJZDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9yb2JvdERhdGE6IElSb2JvdCA9IG51bGw7XG5cbiAgICBhc3luYyBTZXRJdGVtKGlkeDogbnVtYmVyLCBkYXRhOiBJUm9ib3QpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVySWR4ID0gaWR4O1xuICAgICAgICB0aGlzLl9yb2JvdERhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLl9zaG9wSWQgPSBkYXRhLmlkO1xuICAgICAgICB0aGlzLmxiTWludC5zdHJpbmcgPSBcIk1pbnQ6XCIgKyBkYXRhLm1pbnQ7XG4gICAgICAgIHRoaXMubGJJRC5zdHJpbmcgPSBcIiNcIiArIGRhdGEuaWRcbiAgICAgICAgdGhpcy5sYlNvbC5zdHJpbmcgPSBkYXRhLm1hdGljQ29zdCArIFwiU09MXCI7XG4gICAgICAgIHRoaXMubGJMdi5zdHJpbmcgPSBcIkx2IFwiICsgZGF0YS5sZXZlbDtcbiAgICAgICAgdGhpcy5sYlR5cGUuc3RyaW5nID0gUm9ib3RUeXBlRGVzY1tkYXRhLnJvYm90VHlwZV07XG4gICAgICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuaWNvblNGc1tkYXRhLnJvYm90SW1nSWRdXG4gICAgfVxuXG4gICAgT25DbGlja1NlbGYoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgICBHbG9iYWwuSW5zdC5FbWl0KExvY01zZy5TSE9XX1JPQk9UX0lORk9SLCB0aGlzLl9yb2JvdERhdGEsIElORk9SX1NUQVRFLkJVWSk7XG4gICAgfVxuXG4gICAgT25DbGlja0J1eSgpIHtcbiAgICAgICAgQnV5Um9ib3QodGhpcy5fcm9ib3REYXRhKTtcbiAgICB9XG5cbn1cbiJdfQ==
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
exports.DeleteEnergy = exports.StopEnergy = exports.UpdateEnergy = exports.UseRobot = exports.BuyRobot = void 0;
var Global_1 = require("../App/Global");
var MsgEvent_1 = require("../BaseModel/MsgEvent");
var Types_1 = require("../BaseModel/Types");
var RobotInforCtrl_1 = require("../MainScene/RobotInforCtrl");
var DataManager_1 = require("../Manager/DataManager");
var Utils_1 = require("./Utils");
var EnergyProp_1 = require("../Energy/EnergyProp");
// 模拟购买机器人
function BuyRobot(robot) {
    // 添加到个人数据
    var playerLoadData = DataManager_1.default.Inst.GetData(Types_1.DataBaseKey.PLAYER_DATA);
    playerLoadData.robotList.push(robot);
    playerLoadData.maticCount -= robot.maticCost;
    //增加可转化能量（暂定10g）
    playerLoadData.canChangeEnergyNumMax += 10;
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
    // 通知更新详情页UI刷新；
    Global_1.default.Inst.Emit(MsgEvent_1.LocMsg.UPDATE_ROBOT_INFOR, robot, RobotInforCtrl_1.INFOR_STATE.HAED);
}
exports.BuyRobot = BuyRobot;
// 模拟使用和卸载机器人
function UseRobot(robot) {
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
}
exports.UseRobot = UseRobot;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxVdGlsc1xcTG9jYWxEYXRhQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUFtQztBQUNuQyxrREFBK0M7QUFDL0MsNENBQThEO0FBQzlELDhEQUEwRDtBQUMxRCxzREFBaUQ7QUFHakQsaUNBQTRCO0FBQzVCLG1EQUE2RTtBQUU3RSxVQUFVO0FBQ1YsU0FBZ0IsUUFBUSxDQUFDLEtBQWE7SUFDbEMsVUFBVTtJQUNWLElBQUksY0FBYyxHQUFHLHFCQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBYyxtQkFBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BGLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLGNBQWMsQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUU3QyxnQkFBZ0I7SUFDaEIsY0FBYyxDQUFDLHFCQUFxQixJQUFJLEVBQUUsQ0FBQztJQUUzQyxVQUFVO0lBQ1YscUJBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFjLG1CQUFXLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQy9FLGVBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBR3hFLFVBQVU7SUFDVixJQUFJLFlBQVksR0FBRyxxQkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQVcsbUJBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3RSxZQUFZLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQzNELFVBQVU7SUFDVixxQkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQVcsbUJBQVcsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDeEUsZUFBSyxDQUFDLFFBQVEsQ0FBQyxtQkFBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFHcEUsZUFBZTtJQUNmLGdCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBTSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyRSxjQUFjO0lBQ2QsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFNLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDeEQsZUFBZTtJQUNmLGdCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBTSxDQUFDLGtCQUFrQixFQUFFLEtBQUssRUFBRSw0QkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXpFLENBQUM7QUE3QkQsNEJBNkJDO0FBRUQsYUFBYTtBQUNiLFNBQWdCLFFBQVEsQ0FBQyxLQUFhO0lBQ2xDLElBQUksY0FBYyxHQUFHLHFCQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBYyxtQkFBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BGLElBQUksY0FBYyxDQUFDLFdBQVcsSUFBSSxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsRUFBRSxFQUFFO1FBQzFFLGNBQWMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0tBQ3JDO1NBQU07UUFDSCxjQUFjLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztLQUN0QztJQUNELFVBQVU7SUFDVixxQkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQWMsbUJBQVcsQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDL0UsZUFBSyxDQUFDLFFBQVEsQ0FBQyxtQkFBVyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFFeEUsZUFBZTtJQUNmLGdCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBTSxDQUFDLGtCQUFrQixFQUFFLEtBQUssRUFBRSxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyw0QkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsNEJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV6SCxlQUFlO0lBQ2YsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUdwRCxDQUFDO0FBbEJELDRCQWtCQztBQUVELGlEQUFpRDtBQUNqRCxTQUFnQixZQUFZLENBQUMsTUFBZ0I7SUFDekMsSUFBSSxjQUFjLEdBQUcscUJBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFZLG1CQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEYsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ25CLElBQUksTUFBTSxFQUFDO1FBQ1AsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUM7WUFDM0MsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUM7Z0JBQ2xELGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7Z0JBQzNCLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDakI7U0FDSjtRQUNELElBQUksQ0FBQyxNQUFNLEVBQUM7WUFDUixjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVCLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDakI7S0FDSjtTQUFNO1FBQ0gsSUFBSSxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUM7WUFDaEQsSUFBSSxPQUFPLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSwyQkFBYyxHQUFHLDJCQUFjLEVBQUM7Z0JBQzFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ2pCO1NBQ0o7S0FDSjtJQUVELElBQUksTUFBTSxFQUFDO1FBQ1AsVUFBVTtRQUNWLHFCQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBWSxtQkFBVyxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUM3RSxlQUFLLENBQUMsUUFBUSxDQUFDLG1CQUFXLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUV4RSxXQUFXO1FBQ1gsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztLQUNoRDtBQUNMLENBQUM7QUFoQ0Qsb0NBZ0NDO0FBRUQsU0FBZ0IsVUFBVTtJQUN0QixJQUFJLGNBQWMsR0FBRyxxQkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQVksbUJBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRixjQUFjLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3pELFVBQVU7SUFDVixxQkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQVksbUJBQVcsQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDN0UsZUFBSyxDQUFDLFFBQVEsQ0FBQyxtQkFBVyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFFeEUsV0FBVztJQUNYLGdCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDakQsQ0FBQztBQVRELGdDQVNDO0FBRUQsU0FBZ0IsWUFBWSxDQUFDLE1BQWU7SUFDeEMsSUFBSSxjQUFjLEdBQUcscUJBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFZLG1CQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEYsSUFBSSxHQUFHLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBQztRQUNWLGNBQWMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLFVBQVU7UUFDVixxQkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQVksbUJBQVcsQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDN0UsZUFBSyxDQUFDLFFBQVEsQ0FBQyxtQkFBVyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFFeEUsV0FBVztRQUNYLGdCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7S0FDaEQ7QUFDTCxDQUFDO0FBWkQsb0NBWUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2xvYmFsIGZyb20gXCIuLi9BcHAvR2xvYmFsXCI7XG5pbXBvcnQgeyBMb2NNc2cgfSBmcm9tIFwiLi4vQmFzZU1vZGVsL01zZ0V2ZW50XCI7XG5pbXBvcnQgeyBEYXRhQmFzZUtleSwgU2F2ZURhdGFLZXkgfSBmcm9tIFwiLi4vQmFzZU1vZGVsL1R5cGVzXCI7XG5pbXBvcnQgeyBJTkZPUl9TVEFURSB9IGZyb20gXCIuLi9NYWluU2NlbmUvUm9ib3RJbmZvckN0cmxcIjtcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IHsgSVBsYXllckluZm8gfSBmcm9tIFwiLi4vTW9kZWwvUGxheWVyUHJvcFwiO1xuaW1wb3J0IHsgSVJvYm90IH0gZnJvbSBcIi4uL01vZGVsL1JvYm90UHJvcFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQge0NvbGxlY3Rpb25UaW1lLCBJRW5lcmd5LCBNYXR1cmF0aW9uVGltZX0gZnJvbSBcIi4uL0VuZXJneS9FbmVyZ3lQcm9wXCI7XG5cbi8vIOaooeaLn+i0reS5sOacuuWZqOS6ulxuZXhwb3J0IGZ1bmN0aW9uIEJ1eVJvYm90KHJvYm90OiBJUm9ib3QpIHtcbiAgICAvLyDmt7vliqDliLDkuKrkurrmlbDmja5cbiAgICBsZXQgcGxheWVyTG9hZERhdGEgPSBEYXRhTWFuYWdlci5JbnN0LkdldERhdGE8SVBsYXllckluZm8+KERhdGFCYXNlS2V5LlBMQVlFUl9EQVRBKTtcbiAgICBwbGF5ZXJMb2FkRGF0YS5yb2JvdExpc3QucHVzaChyb2JvdCk7XG4gICAgcGxheWVyTG9hZERhdGEubWF0aWNDb3VudCAtPSByb2JvdC5tYXRpY0Nvc3Q7XG5cbiAgICAvL+WinuWKoOWPr+i9rOWMluiDvemHj++8iOaaguWumjEwZ++8iVxuICAgIHBsYXllckxvYWREYXRhLmNhbkNoYW5nZUVuZXJneU51bU1heCArPSAxMDtcblxuICAgIC8vIOabtOaWsOWGheWtmOWSjOacrOWcsFxuICAgIERhdGFNYW5hZ2VyLkluc3QuU2V0RGF0YTxJUGxheWVySW5mbz4oRGF0YUJhc2VLZXkuUExBWUVSX0RBVEEsIHBsYXllckxvYWREYXRhKTtcbiAgICBVdGlscy5TYXZlRGF0YShTYXZlRGF0YUtleS5QTEFZRVJfREFUQSwgSlNPTi5zdHJpbmdpZnkocGxheWVyTG9hZERhdGEpKTtcblxuXG4gICAgLy8g5Yig6Zmk5ZWG5Z+O6K+l54mp5ZOBXG4gICAgbGV0IHNob3BMb2FkRGF0YSA9IERhdGFNYW5hZ2VyLkluc3QuR2V0RGF0YTxJUm9ib3RbXT4oRGF0YUJhc2VLZXkuU0hPUF9EQVRBKTtcbiAgICBzaG9wTG9hZERhdGEgPSBzaG9wTG9hZERhdGEuZmlsdGVyKHIgPT4gci5pZCAhPT0gcm9ib3QuaWQpO1xuICAgIC8vIOabtOaWsOWGheWtmOWSjOacrOWcsFxuICAgIERhdGFNYW5hZ2VyLkluc3QuU2V0RGF0YTxJUm9ib3RbXT4oRGF0YUJhc2VLZXkuU0hPUF9EQVRBLCBzaG9wTG9hZERhdGEpO1xuICAgIFV0aWxzLlNhdmVEYXRhKFNhdmVEYXRhS2V5LlNIT1BfREFUQSwgSlNPTi5zdHJpbmdpZnkoc2hvcExvYWREYXRhKSk7XG5cblxuICAgIC8vIOmAmuefpeabtOaWsE1hdGlj5L2Z6aKd77ybXG4gICAgR2xvYmFsLkluc3QuRW1pdChMb2NNc2cuVVBEQVRFX01BUklDX05VTSwgcGxheWVyTG9hZERhdGEubWF0aWNDb3VudCk7XG4gICAgLy8g6YCa55+l5pu05paw5ZWG5Z+OVUnliLfmlrDvvJtcbiAgICBHbG9iYWwuSW5zdC5FbWl0KExvY01zZy5VUERBVEVfU0hPUF9EQVRBLCBzaG9wTG9hZERhdGEpO1xuICAgIC8vIOmAmuefpeabtOaWsOivpuaDhemhtVVJ5Yi35paw77ybXG4gICAgR2xvYmFsLkluc3QuRW1pdChMb2NNc2cuVVBEQVRFX1JPQk9UX0lORk9SLCByb2JvdCwgSU5GT1JfU1RBVEUuSEFFRCk7XG5cbn1cblxuLy8g5qih5ouf5L2/55So5ZKM5Y246L295py65Zmo5Lq6XG5leHBvcnQgZnVuY3Rpb24gVXNlUm9ib3Qocm9ib3Q6IElSb2JvdCkge1xuICAgIGxldCBwbGF5ZXJMb2FkRGF0YSA9IERhdGFNYW5hZ2VyLkluc3QuR2V0RGF0YTxJUGxheWVySW5mbz4oRGF0YUJhc2VLZXkuUExBWUVSX0RBVEEpO1xuICAgIGlmIChwbGF5ZXJMb2FkRGF0YS5jdXJSb2JvdFVzZSAmJiBwbGF5ZXJMb2FkRGF0YS5jdXJSb2JvdFVzZS5pZCA9PT0gcm9ib3QuaWQpIHtcbiAgICAgICAgcGxheWVyTG9hZERhdGEuY3VyUm9ib3RVc2UgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllckxvYWREYXRhLmN1clJvYm90VXNlID0gcm9ib3Q7XG4gICAgfVxuICAgIC8vIOabtOaWsOWGheWtmOWSjOacrOWcsFxuICAgIERhdGFNYW5hZ2VyLkluc3QuU2V0RGF0YTxJUGxheWVySW5mbz4oRGF0YUJhc2VLZXkuUExBWUVSX0RBVEEsIHBsYXllckxvYWREYXRhKTtcbiAgICBVdGlscy5TYXZlRGF0YShTYXZlRGF0YUtleS5QTEFZRVJfREFUQSwgSlNPTi5zdHJpbmdpZnkocGxheWVyTG9hZERhdGEpKTtcblxuICAgIC8vIOmAmuefpeabtOaWsOivpuaDhemhtVVJ5Yi35paw77ybXG4gICAgR2xvYmFsLkluc3QuRW1pdChMb2NNc2cuVVBEQVRFX1JPQk9UX0lORk9SLCByb2JvdCwgcGxheWVyTG9hZERhdGEuY3VyUm9ib3RVc2UgPyBJTkZPUl9TVEFURS5JU1VTRUlORyA6IElORk9SX1NUQVRFLkhBRUQpO1xuXG4gICAgLy8g6YCa55+l5pu05paw5b2T5YmN5L2/55So5bCP5Lq65L+h5oGvXG4gICAgR2xvYmFsLkluc3QuRW1pdChMb2NNc2cuVVBEQVRFX0NVUl9ST0JPVF9JTkZPUik7XG5cblxufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXh1ZWxpYW5nXG5leHBvcnQgZnVuY3Rpb24gVXBkYXRlRW5lcmd5KGVuZXJneT86IElFbmVyZ3kpIHtcbiAgICBsZXQgZW5lcmd5TG9hZERhdGEgPSBEYXRhTWFuYWdlci5JbnN0LkdldERhdGE8SUVuZXJneVtdPihEYXRhQmFzZUtleS5FTkVSR1lfREFUQSk7XG4gICAgbGV0IHVwZGF0ZSA9IGZhbHNlO1xuICAgIGlmIChlbmVyZ3kpe1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGVuZXJneUxvYWREYXRhLmxlbmd0aDsgKyt4KXtcbiAgICAgICAgICAgIGlmIChlbmVyZ3lMb2FkRGF0YVt4XS5lbmVyZ3lUaW1lID09IGVuZXJneS5lbmVyZ3lUaW1lKXtcbiAgICAgICAgICAgICAgICBlbmVyZ3lMb2FkRGF0YVt4XSA9IGVuZXJneTtcbiAgICAgICAgICAgICAgICB1cGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdXBkYXRlKXtcbiAgICAgICAgICAgIGVuZXJneUxvYWREYXRhLnB1c2goZW5lcmd5KTtcbiAgICAgICAgICAgIHVwZGF0ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbm93VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBmb3IgKGxldCB4ID0gZW5lcmd5TG9hZERhdGEubGVuZ3RoIC0gMTsgeCA+PSAwOyAtLXgpe1xuICAgICAgICAgICAgaWYgKG5vd1RpbWUgLSBlbmVyZ3lMb2FkRGF0YVt4XS5lbmVyZ3lUaW1lID49IE1hdHVyYXRpb25UaW1lICsgQ29sbGVjdGlvblRpbWUpe1xuICAgICAgICAgICAgICAgIGVuZXJneUxvYWREYXRhLnNwbGljZSh4LCAxKTtcbiAgICAgICAgICAgICAgICB1cGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVwZGF0ZSl7XG4gICAgICAgIC8vIOabtOaWsOWGheWtmOWSjOacrOWcsFxuICAgICAgICBEYXRhTWFuYWdlci5JbnN0LlNldERhdGE8SUVuZXJneVtdPihEYXRhQmFzZUtleS5FTkVSR1lfREFUQSwgZW5lcmd5TG9hZERhdGEpO1xuICAgICAgICBVdGlscy5TYXZlRGF0YShTYXZlRGF0YUtleS5FTkVSR1lfREFUQSwgSlNPTi5zdHJpbmdpZnkoZW5lcmd5TG9hZERhdGEpKTtcblxuICAgICAgICAvLyDpgJrnn6Xmm7TmlrDog73ph4/mmL7npLpcbiAgICAgICAgR2xvYmFsLkluc3QuRW1pdChMb2NNc2cuVVBEQVRFX0VuZXJneV9JTkZPUik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gU3RvcEVuZXJneSgpIHtcbiAgICBsZXQgZW5lcmd5TG9hZERhdGEgPSBEYXRhTWFuYWdlci5JbnN0LkdldERhdGE8SUVuZXJneVtdPihEYXRhQmFzZUtleS5FTkVSR1lfREFUQSk7XG4gICAgZW5lcmd5TG9hZERhdGFbZW5lcmd5TG9hZERhdGEubGVuZ3RoIC0gMV0uaXNHcm93ID0gZmFsc2U7XG4gICAgLy8g5pu05paw5YaF5a2Y5ZKM5pys5ZywXG4gICAgRGF0YU1hbmFnZXIuSW5zdC5TZXREYXRhPElFbmVyZ3lbXT4oRGF0YUJhc2VLZXkuRU5FUkdZX0RBVEEsIGVuZXJneUxvYWREYXRhKTtcbiAgICBVdGlscy5TYXZlRGF0YShTYXZlRGF0YUtleS5FTkVSR1lfREFUQSwgSlNPTi5zdHJpbmdpZnkoZW5lcmd5TG9hZERhdGEpKTtcblxuICAgIC8vIOmAmuefpeabtOaWsOiDvemHj+aYvuekulxuICAgIEdsb2JhbC5JbnN0LkVtaXQoTG9jTXNnLlVQREFURV9FbmVyZ3lfSU5GT1IpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRGVsZXRlRW5lcmd5KGVuZXJneTogSUVuZXJneSkge1xuICAgIGxldCBlbmVyZ3lMb2FkRGF0YSA9IERhdGFNYW5hZ2VyLkluc3QuR2V0RGF0YTxJRW5lcmd5W10+KERhdGFCYXNlS2V5LkVORVJHWV9EQVRBKTtcbiAgICBsZXQgaWR4ID0gZW5lcmd5TG9hZERhdGEuaW5kZXhPZihlbmVyZ3kpO1xuICAgIGlmIChpZHggIT0gLTEpe1xuICAgICAgICBlbmVyZ3lMb2FkRGF0YS5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgLy8g5pu05paw5YaF5a2Y5ZKM5pys5ZywXG4gICAgICAgIERhdGFNYW5hZ2VyLkluc3QuU2V0RGF0YTxJRW5lcmd5W10+KERhdGFCYXNlS2V5LkVORVJHWV9EQVRBLCBlbmVyZ3lMb2FkRGF0YSk7XG4gICAgICAgIFV0aWxzLlNhdmVEYXRhKFNhdmVEYXRhS2V5LkVORVJHWV9EQVRBLCBKU09OLnN0cmluZ2lmeShlbmVyZ3lMb2FkRGF0YSkpO1xuXG4gICAgICAgIC8vIOmAmuefpeabtOaWsOiDvemHj+aYvuekulxuICAgICAgICBHbG9iYWwuSW5zdC5FbWl0KExvY01zZy5VUERBVEVfRW5lcmd5X0lORk9SKTtcbiAgICB9XG59XG4iXX0=
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
        this.node.runAction(cc.moveTo(0.3, cc.v2(0, -1334)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluU2NlbmVcXEdyb3VwQ3RybFxcU3RhcnRFbmVyZ3lHcm91cEN0cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYseURBQWtFO0FBQ2xFLHlEQUFvRDtBQUNwRCxzREFBNEY7QUFDNUYsK0NBQWtEO0FBRTVDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWtELHdDQUFZO0lBQTlEO1FBQUEscUVBK0RDO1FBNURHLGNBQVEsR0FBZ0IsRUFBRSxDQUFDO1FBRzNCLGFBQU8sR0FBZ0IsRUFBRSxDQUFDOztJQXlEOUIsQ0FBQztJQXZERyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLG9DQUFLLEdBQUw7SUFFQSxDQUFDO0lBSUQsc0JBQUksd0NBQU07UUFGVixpQkFBaUI7YUFFakI7WUFDSSxPQUFPLHFCQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBWSxtQkFBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hFLENBQUM7OztPQUFBO0lBRU8seUNBQVUsR0FBbEI7UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3pCLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFDO1lBQ3RELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBQztnQkFDMUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFDO29CQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztpQkFDdkM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO29CQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7aUJBQ3hDO2FBQ0o7U0FDSjthQUFNO1lBQ0gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFDO2dCQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzthQUM1QztTQUNKO0lBQ0wsQ0FBQztJQUVELDBDQUFXLEdBQVgsVUFBWSxLQUFLLEVBQUUsZUFBZTtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsMkNBQVksR0FBWixVQUFhLEtBQUssRUFBRSxlQUFlO1FBQy9CLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuQyxJQUFJLE1BQU0sR0FBRywwQkFBYSxDQUFDLDRCQUFlLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELDJCQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCwwQ0FBVyxHQUFYLFVBQVksS0FBSyxFQUFFLGVBQWU7UUFDOUIseUJBQVUsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUEzREQ7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7MERBQ0s7SUFHM0I7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7eURBQ0k7SUFOVCxvQkFBb0I7UUFEeEMsT0FBTztPQUNhLG9CQUFvQixDQStEeEM7SUFBRCwyQkFBQztDQS9ERCxBQStEQyxDQS9EaUQsRUFBRSxDQUFDLFNBQVMsR0ErRDdEO2tCQS9Eb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHtTdG9wRW5lcmd5LCBVcGRhdGVFbmVyZ3l9IGZyb20gXCIuLi8uLi9VdGlscy9Mb2NhbERhdGFBUElcIjtcclxuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuLi8uLi9NYW5hZ2VyL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCB7RW5lcmd5U2hvd0NvdW50LCBFbmVyZ3lUeXBlLCBJRW5lcmd5LCBNYWtlTmV3RW5lcmd5fSBmcm9tIFwiLi4vLi4vRW5lcmd5L0VuZXJneVByb3BcIjtcclxuaW1wb3J0IHtEYXRhQmFzZUtleX0gZnJvbSBcIi4uLy4uL0Jhc2VNb2RlbC9UeXBlc1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydEVuZXJneUdyb3VwQ3RybCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5CdXR0b25dKVxyXG4gICAgc3RhcnRCdG46IGNjLkJ1dHRvbltdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KFtjYy5CdXR0b25dKVxyXG4gICAgc3RvcEJ0bjogY2MuQnV0dG9uW10gPSBbXTtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgZ2V0IGVuZXJneSgpIHtcclxuICAgICAgICByZXR1cm4gRGF0YU1hbmFnZXIuSW5zdC5HZXREYXRhPElFbmVyZ3lbXT4oRGF0YUJhc2VLZXkuRU5FUkdZX0RBVEEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX1VwZGF0ZUJ0bigpe1xyXG4gICAgICAgIGxldCBlbmVyZ3kgPSB0aGlzLmVuZXJneTtcclxuICAgICAgICBpZiAoZW5lcmd5Lmxlbmd0aCA+IDAgJiYgZW5lcmd5W2VuZXJneS5sZW5ndGggLSAxXS5pc0dyb3cpe1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuc3RhcnRCdG4ubGVuZ3RoOyArK3gpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHggPT0gZW5lcmd5W2VuZXJneS5sZW5ndGggLSAxXS5lbmVyZ3lUeXBlLnZhbHVlT2YoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEJ0blt4XS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRCdG5beF0uaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wQnRuW3hdLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BCdG5beF0uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEJ0blt4XS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEJ0blt4XS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BCdG5beF0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BCdG5beF0uaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuc3RhcnRCdG4ubGVuZ3RoOyArK3gpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRCdG5beF0ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRCdG5beF0uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BCdG5beF0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BCdG5beF0uaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgT25DbGlja1NlbGYoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2MubW92ZVRvKDAuMywgY2MudjIoMCwgLTEzMzQpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgT25DbGlja1N0YXJ0KGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICBsZXQgaWQgPSBwYXJzZUludChjdXN0b21FdmVudERhdGEpO1xyXG4gICAgICAgIGxldCBlbmVyZ3kgPSBNYWtlTmV3RW5lcmd5KEVuZXJneVNob3dDb3VudCAtIDEsIGlkKTtcclxuICAgICAgICBVcGRhdGVFbmVyZ3koZW5lcmd5KTtcclxuICAgICAgICB0aGlzLl9VcGRhdGVCdG4oKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkNsaWNrU3RvcChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgU3RvcEVuZXJneSgpO1xyXG4gICAgICAgIHRoaXMuX1VwZGF0ZUJ0bigpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
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
var EnergyProp_1 = require("./EnergyProp");
var DataManager_1 = require("../Manager/DataManager");
var Types_1 = require("../BaseModel/Types");
var LocalDataAPI_1 = require("../Utils/LocalDataAPI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FriendEnergyItem = /** @class */ (function (_super) {
    __extends(FriendEnergyItem, _super);
    function FriendEnergyItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.mask = null;
        _this.time = null;
        _this.count = null;
        _this.iconSFs = [];
        _this._energyData = null;
        _this._nowTime = 0;
        _this._deltaTime = 0;
        _this._positions = [cc.v2(57, -15), cc.v2(291, -103), cc.v2(-8, -97), cc.v2(278, -2), cc.v2(163, -19)];
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
        // if (this._energyData.isGrow){
        //     if (this._deltaTime > 1){
        //         this._deltaTime -= 1;
        //         this._energyData.energyCount = Math.round((this._energyData.energyCount*10 + 1))/10;
        //         this.count.string = this._energyData.energyCount.toString();
        //         // need change data
        //         if (this._energyData.energyCount%10 == 9){
        //             console.log("save data");
        //             UpdateEnergy(this._energyData);
        //         }
        //     }
        // } else
        {
            if (this._deltaTime > 1) {
                this._deltaTime -= 1;
                this._nowTime = new Date().getTime();
                if (this._nowTime - this._energyData.energyTime > EnergyProp_1.MaturationTime + EnergyProp_1.CollectionTime) {
                    // time out
                    this.node.getComponent(cc.Button).interactable = false;
                    this.node.runAction(cc.sequence(cc.scaleTo(0.3, 0), cc.callFunc(function () {
                        _this.node.removeFromParent();
                        // DeleteEnergy(this._energyData);
                    })));
                }
                else if (this._nowTime - this._energyData.energyTime > EnergyProp_1.MaturationTime) {
                    this.mask.node.active = !this._energyData.canSteal;
                    this.time.node.active = false;
                    this.node.getComponent(cc.Button).interactable = true;
                }
                else {
                    this.mask.node.active = true;
                    this.time.node.active = true;
                    var timeShow = Math.floor((EnergyProp_1.MaturationTime - (this._nowTime - this._energyData.energyTime)) * 0.001);
                    this.time.string = Math.floor(timeShow / 3600) + ":" + Math.floor(timeShow % 3600 / 60) + ":" + timeShow % 3600 % 60;
                }
                if (!this._energyData.canSteal) {
                    this.mask.node.active = true;
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
    FriendEnergyItem.prototype._InitItem = function () {
        if (this._energyData.isGrow) {
            this.icon.spriteFrame = this.iconSFs[this._energyData.energyType + 4];
            this.mask.node.active = !this._energyData.canSteal;
            this.time.node.active = false;
            this.count.string = this._energyData.energyCount.toString();
            this.node.getComponent(cc.Button).interactable = false;
        }
        else {
            this.icon.spriteFrame = this.iconSFs[this._energyData.energyType];
            this.count.string = this._energyData.energyCount.toString();
            if (this._nowTime - this._energyData.energyTime > EnergyProp_1.MaturationTime) {
                this.mask.node.active = !this._energyData.canSteal;
                this.time.node.active = false;
                this.node.getComponent(cc.Button).interactable = this._energyData.canSteal;
            }
            else {
                this.mask.node.active = true;
                this.time.node.active = true;
                var timeShow = Math.floor((EnergyProp_1.MaturationTime - (this._nowTime - this._energyData.energyTime)) * 0.001);
                this.time.string = Math.floor(timeShow / 3600) + ":" + Math.floor(timeShow % 3600 / 60) + ":" + timeShow % 3600 % 60;
                this.node.getComponent(cc.Button).interactable = false;
            }
        }
        this._start = true;
    };
    FriendEnergyItem.prototype.OnClick = function (event, customEventData) {
        // collect energy
        this.node.getComponent(cc.Button).interactable = false;
        this._energyData.canSteal = false;
        LocalDataAPI_1.UpdateEnergy(this._energyData);
        this.mask.node.active = true;
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
        property(cc.Label)
    ], FriendEnergyItem.prototype, "time", void 0);
    __decorate([
        property(cc.Label)
    ], FriendEnergyItem.prototype, "count", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], FriendEnergyItem.prototype, "iconSFs", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVyZ3lcXEZyaWVuZEVuZXJneUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXFFO0FBQ3JFLHNEQUFpRDtBQUVqRCw0Q0FBK0M7QUFJL0Msc0RBQWlFO0FBRTNELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBOElDO1FBM0lHLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBR3RCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFxQixFQUFFLENBQUM7UUFFdkIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixnQkFBVSxHQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1RyxZQUFNLEdBQVksS0FBSyxDQUFDOztJQXlIcEMsQ0FBQztJQXZIRyx3QkFBd0I7SUFFeEIsaUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUN4QixD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V0FBVyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0RSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztZQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzFEO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDNUQsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxHQUFHLDJCQUFjLEVBQUM7Z0JBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO2dCQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO2FBQzlFO2lCQUFNO2dCQUNILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQzdCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQywyQkFBYyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBQyxJQUFJLEdBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLFFBQVEsR0FBQyxJQUFJLEdBQUMsRUFBRSxDQUFDO2dCQUMzRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzthQUMxRDtTQUNKO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxLQUFLLEVBQUUsZUFBZTtRQUMxQixpQkFBaUI7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDdkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLDJCQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuRSx5SEFBeUg7UUFDekgsMEJBQTBCO1FBQzFCLG9DQUFvQztRQUNwQyxzQ0FBc0M7UUFDdEMsUUFBUTtJQUNaLENBQUM7SUExSUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNHO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ0c7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDSTtJQUd2QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztxREFDSTtJQWZkLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBOElwQztJQUFELHVCQUFDO0NBOUlELEFBOElDLENBOUk2QyxFQUFFLENBQUMsU0FBUyxHQThJekQ7a0JBOUlvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbGxlY3Rpb25UaW1lLCBJRW5lcmd5LCBNYXR1cmF0aW9uVGltZX0gZnJvbSBcIi4vRW5lcmd5UHJvcFwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IHtJUGxheWVySW5mb30gZnJvbSBcIi4uL01vZGVsL1BsYXllclByb3BcIjtcclxuaW1wb3J0IHtEYXRhQmFzZUtleX0gZnJvbSBcIi4uL0Jhc2VNb2RlbC9UeXBlc1wiO1xyXG5pbXBvcnQge0lORk9SX1NUQVRFfSBmcm9tIFwiLi4vTWFpblNjZW5lL1JvYm90SW5mb3JDdHJsXCI7XHJcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uL0FwcC9HbG9iYWxcIjtcclxuaW1wb3J0IHtMb2NNc2d9IGZyb20gXCIuLi9CYXNlTW9kZWwvTXNnRXZlbnRcIjtcclxuaW1wb3J0IHtEZWxldGVFbmVyZ3ksIFVwZGF0ZUVuZXJneX0gZnJvbSBcIi4uL1V0aWxzL0xvY2FsRGF0YUFQSVwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRFbmVyZ3lJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgaWNvbjogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgbWFzazogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0aW1lOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgY291bnQ6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIGljb25TRnM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9lbmVyZ3lEYXRhOiBJRW5lcmd5ID0gbnVsbDtcclxuICAgIHByaXZhdGUgX25vd1RpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9kZWx0YVRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9wb3NpdGlvbnM6IGNjLlZlYzJbXSA9IFtjYy52Mig1NywgLTE1KSwgY2MudjIoMjkxLCAtMTAzKSwgY2MudjIoLTgsIC05NyksIGNjLnYyKDI3OCwgLTIpLCBjYy52MigxNjMsIC0xOSldO1xyXG4gICAgcHJpdmF0ZSBfc3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjMsIDEpLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgfSkpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KXtcclxuICAgICAgICAgICAgdGhpcy5fZGVsdGFUaW1lICs9IGR0O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZGVsdGFUaW1lID49IDEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fVXBkYXRlSXRlbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbmVyZ3lEYXRhKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VuZXJneURhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgU2V0SXRlbShkYXRhOiBJRW5lcmd5KSB7XHJcbiAgICAgICAgbGV0IG5vd0RhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX25vd1RpbWUgPSBub3dEYXRlLmdldFRpbWUoKTtcclxuICAgICAgICB0aGlzLl9lbmVyZ3lEYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5fcG9zaXRpb25zW2RhdGEuaWR4XSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJTZXRJdGVtOiBcIiArIHRoaXMubm9kZS5wb3NpdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuX0luaXRJdGVtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfVXBkYXRlSXRlbSgpe1xyXG4gICAgICAgIC8vIGlmICh0aGlzLl9lbmVyZ3lEYXRhLmlzR3Jvdyl7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLl9kZWx0YVRpbWUgPiAxKXtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2RlbHRhVGltZSAtPSAxO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fZW5lcmd5RGF0YS5lbmVyZ3lDb3VudCA9IE1hdGgucm91bmQoKHRoaXMuX2VuZXJneURhdGEuZW5lcmd5Q291bnQqMTAgKyAxKSkvMTA7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNvdW50LnN0cmluZyA9IHRoaXMuX2VuZXJneURhdGEuZW5lcmd5Q291bnQudG9TdHJpbmcoKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vIG5lZWQgY2hhbmdlIGRhdGFcclxuICAgICAgICAvLyAgICAgICAgIGlmICh0aGlzLl9lbmVyZ3lEYXRhLmVuZXJneUNvdW50JTEwID09IDkpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2F2ZSBkYXRhXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIFVwZGF0ZUVuZXJneSh0aGlzLl9lbmVyZ3lEYXRhKTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0gZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RlbHRhVGltZSA+IDEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVsdGFUaW1lIC09IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ub3dUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbm93VGltZSAtIHRoaXMuX2VuZXJneURhdGEuZW5lcmd5VGltZSA+IE1hdHVyYXRpb25UaW1lICsgQ29sbGVjdGlvblRpbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRpbWUgb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjMsIDApLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlbGV0ZUVuZXJneSh0aGlzLl9lbmVyZ3lEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ub3dUaW1lIC0gdGhpcy5fZW5lcmd5RGF0YS5lbmVyZ3lUaW1lID4gTWF0dXJhdGlvblRpbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFzay5ub2RlLmFjdGl2ZSA9ICF0aGlzLl9lbmVyZ3lEYXRhLmNhblN0ZWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc2subm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWVTaG93ID0gTWF0aC5mbG9vcigoTWF0dXJhdGlvblRpbWUgLSAodGhpcy5fbm93VGltZSAtIHRoaXMuX2VuZXJneURhdGEuZW5lcmd5VGltZSkpKjAuMDAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWUuc3RyaW5nID0gTWF0aC5mbG9vcih0aW1lU2hvdy8zNjAwKSArIFwiOlwiICsgTWF0aC5mbG9vcih0aW1lU2hvdyUzNjAwLzYwKSArIFwiOlwiICsgdGltZVNob3clMzYwMCU2MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fZW5lcmd5RGF0YS5jYW5TdGVhbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuX2VuZXJneURhdGEuaXNHcm93KXtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBEYXRhTWFuYWdlci5JbnN0LkdldERhdGE8SUVuZXJneVtdPihEYXRhQmFzZUtleS5FTkVSR1lfREFUQSk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmluZGV4T2YodGhpcy5fZW5lcmd5RGF0YSkgPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9Jbml0SXRlbSgpe1xyXG4gICAgICAgIGlmICh0aGlzLl9lbmVyZ3lEYXRhLmlzR3Jvdyl7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuaWNvblNGc1t0aGlzLl9lbmVyZ3lEYXRhLmVuZXJneVR5cGUgKyA0XTtcclxuICAgICAgICAgICAgdGhpcy5tYXNrLm5vZGUuYWN0aXZlID0gIXRoaXMuX2VuZXJneURhdGEuY2FuU3RlYWw7XHJcbiAgICAgICAgICAgIHRoaXMudGltZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50LnN0cmluZyA9IHRoaXMuX2VuZXJneURhdGEuZW5lcmd5Q291bnQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuaWNvblNGc1t0aGlzLl9lbmVyZ3lEYXRhLmVuZXJneVR5cGVdO1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50LnN0cmluZyA9IHRoaXMuX2VuZXJneURhdGEuZW5lcmd5Q291bnQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX25vd1RpbWUgLSB0aGlzLl9lbmVyZ3lEYXRhLmVuZXJneVRpbWUgPiBNYXR1cmF0aW9uVGltZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hc2subm9kZS5hY3RpdmUgPSAhdGhpcy5fZW5lcmd5RGF0YS5jYW5TdGVhbDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRoaXMuX2VuZXJneURhdGEuY2FuU3RlYWw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hc2subm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxldCB0aW1lU2hvdyA9IE1hdGguZmxvb3IoKE1hdHVyYXRpb25UaW1lIC0gKHRoaXMuX25vd1RpbWUgLSB0aGlzLl9lbmVyZ3lEYXRhLmVuZXJneVRpbWUpKSowLjAwMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUuc3RyaW5nID0gTWF0aC5mbG9vcih0aW1lU2hvdy8zNjAwKSArIFwiOlwiICsgTWF0aC5mbG9vcih0aW1lU2hvdyUzNjAwLzYwKSArIFwiOlwiICsgdGltZVNob3clMzYwMCU2MDtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zdGFydCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgT25DbGljayhldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgLy8gY29sbGVjdCBlbmVyZ3lcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fZW5lcmd5RGF0YS5jYW5TdGVhbCA9IGZhbHNlO1xyXG4gICAgICAgIFVwZGF0ZUVuZXJneSh0aGlzLl9lbmVyZ3lEYXRhKTtcclxuICAgICAgICB0aGlzLm1hc2subm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY291bnQuc3RyaW5nID0gKHRoaXMuX2VuZXJneURhdGEuZW5lcmd5Q291bnQgLSAxMCkudG9TdHJpbmcoKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNwYXduKGNjLm1vdmVUbygwLjM1LCBjYy52MigyMzUsIDE5NCkpLCBjYy5zY2FsZVRvKDAuMzUsIDAuMykpLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vIG5lZWQgY2hhbmdlIGRhdGFcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAvLyAgICAgVXBkYXRlRW5lcmd5KHRoaXMuX2VuZXJneURhdGEpO1xyXG4gICAgICAgIC8vIH0pKSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
