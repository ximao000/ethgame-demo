"use strict";
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