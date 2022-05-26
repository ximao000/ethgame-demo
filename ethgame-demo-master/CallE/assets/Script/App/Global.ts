import { LocMsg } from "../BaseModel/MsgEvent";
import { DataBaseKey, SaveDataKey } from "../BaseModel/Types";
import DataManager from "../Manager/DataManager";
import { DefaultPlayerInfo, IPlayerInfo } from "../Model/PlayerProp";
import { DefaultShopInfo, IRobot } from "../Model/RobotProp";
import Utils from "../Utils/Utils";
import {DefaultEnergyInfo, IEnergy, MakeNewEnergy} from "../Energy/EnergyProp";
import {UpdateEnergy} from "../Utils/LocalDataAPI";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Global extends cc.Component {

    private static _inst: Global = null;
    public static get Inst() {
        return this._inst;
    }

    onLoad(): void {
        Global._inst = this;
        this._InitLocalData();
    }
    Emit(event: string | LocMsg, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) {
        this.node.emit(event.toString(), arg1, arg2, arg3, arg4, arg5);
    }

    On(event: string | LocMsg, callback: Function, target?: any, useCapture?: boolean) {
        this.node.on(event.toString(), callback, target, useCapture);
    }

    Once(event: string | LocMsg, callback: Function, target?: any, useCapture?: boolean) {
        this.node.once(event.toString(), callback, target, useCapture);
    }

    Off(event: string | LocMsg, callback?: Function, target?: any, useCapture?: boolean) {
        this.node.off(event.toString(), callback, target, useCapture);
    }

    // update (dt) {}
    private _InitLocalData() {

        // 个人数据
        let playerLoadData = Utils.LoadData(SaveDataKey.PLAYER_DATA);
        if (!playerLoadData) {
            let player = DefaultPlayerInfo();
            DataManager.Inst.SetData<IPlayerInfo>(DataBaseKey.PLAYER_DATA, player);
            Utils.SaveData(SaveDataKey.PLAYER_DATA, JSON.stringify(player))
        } else {
            let player = JSON.parse(playerLoadData) as IPlayerInfo;
            DataManager.Inst.SetData<IPlayerInfo>(DataBaseKey.PLAYER_DATA, player);
        }

        // 商城数据
        let shopLoadData = Utils.LoadData(SaveDataKey.SHOP_DATA);
        if (!shopLoadData) {
            let shops = DefaultShopInfo();
            DataManager.Inst.SetData<IRobot[]>(DataBaseKey.SHOP_DATA, shops);
            Utils.SaveData(SaveDataKey.SHOP_DATA, JSON.stringify(shops))
        } else {
            let shop = JSON.parse(shopLoadData) as IRobot[];
            DataManager.Inst.SetData<IRobot[]>(DataBaseKey.SHOP_DATA, shop);
        }

        // energy data
        Utils.RemoveSaveData(SaveDataKey.ENERGY_DATA);
        let energyLoadData = Utils.LoadData(SaveDataKey.ENERGY_DATA);
        if (!energyLoadData) {
            let energy = DefaultEnergyInfo();
            DataManager.Inst.SetData<IEnergy[]>(DataBaseKey.ENERGY_DATA, energy);
            Utils.SaveData(SaveDataKey.ENERGY_DATA, JSON.stringify(energy))
        } else {
            let energy = JSON.parse(energyLoadData) as IEnergy[];
            DataManager.Inst.SetData<IEnergy[]>(DataBaseKey.ENERGY_DATA, energy);
        }
        UpdateEnergy();
    }
}
