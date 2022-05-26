import Global from "../App/Global";
import { LocMsg } from "../BaseModel/MsgEvent";
import { DataBaseKey, SaveDataKey } from "../BaseModel/Types";
import { INFOR_STATE } from "../MainScene/RobotInforCtrl";
import DataManager from "../Manager/DataManager";
import { IPlayerInfo } from "../Model/PlayerProp";
import { IRobot } from "../Model/RobotProp";
import Utils from "./Utils";
import {CollectionTime, IEnergy, MaturationTime} from "../Energy/EnergyProp";

// 模拟购买机器人
export function BuyRobot(robot: IRobot) {
    // 添加到个人数据
    let playerLoadData = DataManager.Inst.GetData<IPlayerInfo>(DataBaseKey.PLAYER_DATA);
    playerLoadData.robotList.push(robot);
    playerLoadData.maticCount -= robot.maticCost;

    //增加可转化能量（暂定10g）
    playerLoadData.canChangeEnergyNumMax += 10;

    // 更新内存和本地
    DataManager.Inst.SetData<IPlayerInfo>(DataBaseKey.PLAYER_DATA, playerLoadData);
    Utils.SaveData(SaveDataKey.PLAYER_DATA, JSON.stringify(playerLoadData));


    // 删除商城该物品
    let shopLoadData = DataManager.Inst.GetData<IRobot[]>(DataBaseKey.SHOP_DATA);
    shopLoadData = shopLoadData.filter(r => r.id !== robot.id);
    // 更新内存和本地
    DataManager.Inst.SetData<IRobot[]>(DataBaseKey.SHOP_DATA, shopLoadData);
    Utils.SaveData(SaveDataKey.SHOP_DATA, JSON.stringify(shopLoadData));


    // 通知更新Matic余额；
    Global.Inst.Emit(LocMsg.UPDATE_MARIC_NUM, playerLoadData.maticCount);
    // 通知更新商城UI刷新；
    Global.Inst.Emit(LocMsg.UPDATE_SHOP_DATA, shopLoadData);
    // 通知更新详情页UI刷新；
    Global.Inst.Emit(LocMsg.UPDATE_ROBOT_INFOR, robot, INFOR_STATE.HAED);

}

// 模拟使用和卸载机器人
export function UseRobot(robot: IRobot) {
    let playerLoadData = DataManager.Inst.GetData<IPlayerInfo>(DataBaseKey.PLAYER_DATA);
    if (playerLoadData.curRobotUse && playerLoadData.curRobotUse.id === robot.id) {
        playerLoadData.curRobotUse = null;
    } else {
        playerLoadData.curRobotUse = robot;
    }
    // 更新内存和本地
    DataManager.Inst.SetData<IPlayerInfo>(DataBaseKey.PLAYER_DATA, playerLoadData);
    Utils.SaveData(SaveDataKey.PLAYER_DATA, JSON.stringify(playerLoadData));

    // 通知更新详情页UI刷新；
    Global.Inst.Emit(LocMsg.UPDATE_ROBOT_INFOR, robot, playerLoadData.curRobotUse ? INFOR_STATE.ISUSEING : INFOR_STATE.HAED);

    // 通知更新当前使用小人信息
    Global.Inst.Emit(LocMsg.UPDATE_CUR_ROBOT_INFOR);


}

//---------------------------------------xueliang
export function UpdateEnergy(energy?: IEnergy) {
    let energyLoadData = DataManager.Inst.GetData<IEnergy[]>(DataBaseKey.ENERGY_DATA);
    let update = false;
    if (energy){
        for (let x = 0; x < energyLoadData.length; ++x){
            if (energyLoadData[x].energyTime == energy.energyTime){
                energyLoadData[x] = energy;
                update = true;
            }
        }
        if (!update){
            energyLoadData.push(energy);
            update = true;
        }
    } else {
        let nowTime = new Date().getTime();
        for (let x = energyLoadData.length - 1; x >= 0; --x){
            if (nowTime - energyLoadData[x].energyTime >= MaturationTime + CollectionTime){
                energyLoadData.splice(x, 1);
                update = true;
            }
        }
    }

    if (update){
        // 更新内存和本地
        DataManager.Inst.SetData<IEnergy[]>(DataBaseKey.ENERGY_DATA, energyLoadData);
        Utils.SaveData(SaveDataKey.ENERGY_DATA, JSON.stringify(energyLoadData));

        // 通知更新能量显示
        Global.Inst.Emit(LocMsg.UPDATE_Energy_INFOR);
    }
}

export function StopEnergy() {
    let energyLoadData = DataManager.Inst.GetData<IEnergy[]>(DataBaseKey.ENERGY_DATA);
    energyLoadData[energyLoadData.length - 1].isGrow = false;
    // 更新内存和本地
    DataManager.Inst.SetData<IEnergy[]>(DataBaseKey.ENERGY_DATA, energyLoadData);
    Utils.SaveData(SaveDataKey.ENERGY_DATA, JSON.stringify(energyLoadData));

    // 通知更新能量显示
    Global.Inst.Emit(LocMsg.UPDATE_Energy_INFOR);
}

export function DeleteEnergy(energy: IEnergy) {
    let energyLoadData = DataManager.Inst.GetData<IEnergy[]>(DataBaseKey.ENERGY_DATA);
    let idx = energyLoadData.indexOf(energy);
    if (idx != -1){
        energyLoadData.splice(idx, 1);
        // 更新内存和本地
        DataManager.Inst.SetData<IEnergy[]>(DataBaseKey.ENERGY_DATA, energyLoadData);
        Utils.SaveData(SaveDataKey.ENERGY_DATA, JSON.stringify(energyLoadData));

        // 通知更新能量显示
        Global.Inst.Emit(LocMsg.UPDATE_Energy_INFOR);
    }
}
