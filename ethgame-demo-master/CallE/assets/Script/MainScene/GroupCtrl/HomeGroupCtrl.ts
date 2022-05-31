import Global from "../../App/Global";
import { LocMsg } from "../../BaseModel/MsgEvent";
import { DataBaseKey } from "../../BaseModel/Types";
import { EnergyShowCount, IEnergy } from "../../Energy/EnergyProp";
import DataManager from "../../Manager/DataManager";
import { IPlayerInfo } from "../../Model/PlayerProp";
import { API_ChangeEnergyToHal, StopEnergy, UpdateEnergy } from "../../Utils/LocalDataAPI";
import Utils from "../../Utils/Utils";
import { INFOR_STATE } from "../RobotInforCtrl";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HomeGroupCtrl extends cc.Component {

    @property(cc.Sprite)
    robotSp: cc.Sprite = null;

    @property(cc.RichText)
    robotChangeEnergy: cc.RichText = null;

    @property(cc.Button)
    btnChangeEnergy: cc.Button = null;

    @property([cc.SpriteFrame])
    iconSFs: cc.SpriteFrame[] = [];

    @property(cc.SpriteFrame)
    iconNullSF: cc.SpriteFrame = null;

    @property(cc.Label)
    energyReseatTime: cc.Label = null;

    get player() {
        return DataManager.Inst.GetData<IPlayerInfo>(DataBaseKey.PLAYER_DATA);
    }
    onLoad() {
        this.startEnergyNode = cc.instantiate(this.startEnergyPref);
        cc.director.getScene().addChild(this.startEnergyNode);
        // this.node.addChild(this.startEnergyNode);
        this._UpdateRobot();
        Global.Inst.On(LocMsg.UPDATE_CUR_ROBOT_INFOR, this._UpdateRobot, this);
        Global.Inst.On(LocMsg.UPDATE_Energy_INFOR, this._UpdateEnergy, this);
        this._UpdateEnergy();
    }

    private _UpdateRobot() {
        let curRobot = this.player.curRobotUse;
        if (curRobot) {
            this.robotSp.spriteFrame = this.iconSFs[curRobot.robotImgId];
        } else {
            this.robotSp.spriteFrame = this.iconNullSF;
        }
        this.robotChangeEnergy.string = `<color=#bb5e5e>${(this.player.canChangeEnergyNumTotal - this.player.hadChangeEnergyNum)}</c>/${this.player.canChangeEnergyNumTotal}`;


    }

    OnClickChangeEnergy() {
        // 无小人、无能量、转化数不足，不现实转化按钮；
        let curRobot = this.player.curRobotUse;
        if (!curRobot) {
            Global.Inst.Emit(LocMsg.SHOW_TOAST, "Please equip the robot。");
            return;
        }

        if (this.player.collectEnergyCount === 0) {
            Global.Inst.Emit(LocMsg.SHOW_TOAST, "Insufficient energy。");
            return;
        }

        if (this.player.hadChangeEnergyNum >= this.player.canChangeEnergyNumTotal) {
            Global.Inst.Emit(LocMsg.SHOW_TOAST, "Physical deficiency。");
            return;
        }

        else {
            API_ChangeEnergyToHal();
        }

    }

    OnClickRobot() {
        if (this.player.curRobotUse) {
            Global.Inst.Emit(LocMsg.SHOW_ROBOT_INFOR, this.player.curRobotUse, INFOR_STATE.ISUSEING)
        } else {
            if (this.player.robotList.length > 0) {
                Global.Inst.Emit(LocMsg.CHANGE_GROUP_BY_INDEX, 3)
            } else {
                Global.Inst.Emit(LocMsg.CHANGE_GROUP_BY_INDEX, 4)
            }

        }

    }
    update(dt) {
        let data = new Date();
        let second = data.getSeconds();

        this.player.timeReseat
        if (second > this.player.timeReseat) {
            this.energyReseatTime.node.active = false;
        } else {
            this.energyReseatTime.node.active = true;
            this.energyReseatTime.string = Utils.timeToString(this.player.timeReseat - second);
        }

    }


    //-------------------------------------xueliang

    @property(cc.Node)
    energyRoot: cc.Node = null;

    @property(cc.Prefab)
    energyPref: cc.Prefab = null;

    @property(cc.Button)
    btnStartEnergy: cc.Button = null;

    @property(cc.Label)
    btnEnergyLabel: cc.Label = null;

    @property(cc.Prefab)
    startEnergyPref: cc.Prefab = null;

    @property(cc.Sprite)
    btnBg: cc.Sprite = null;

    @property([cc.SpriteFrame])
    btnFs: cc.SpriteFrame[] = [];

    private startEnergyNode: cc.Node = null;
    private showEnergyInfo: IEnergy[] = [null, null, null, null, null];

    get energy() {
        return DataManager.Inst.GetData<IEnergy[]>(DataBaseKey.ENERGY_DATA);
    }

    private _UpdateEnergy() {
        // let curRobot = this.player.curRobotUse;
        // this.btnStartEnergy.interactable = !(!curRobot || this.player.collectEnergyCount === 0);

        let energy = this.energy;
        if (energy.length > 0) {
            this.btnEnergyLabel.string = energy[energy.length - 1].isGrow ? "STOP" : "START";
            this.btnBg.spriteFrame = energy[energy.length - 1].isGrow ? this.btnFs[1] : this.btnFs[0];
        } else {
            this.btnEnergyLabel.string = "START";
            this.btnBg.spriteFrame = this.btnFs[0];
        }

        for (let x = 0; x < this.showEnergyInfo.length; ++x) {
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
                    let energyIns = cc.instantiate(this.energyPref);
                    energyIns.getComponent("EnergyItem").SetItem(energy[energy.length - 1]);
                    this._RemoveEnergyByEnergyTime(energy[energy.length - 1].energyTime);
                    this.energyRoot.addChild(energyIns);
                }

                for (let x = 0; x < EnergyShowCount - 1; ++x) {
                    if (x < energy.length - 1 && energy[x].idx != this.showEnergyInfo.length - 1) {
                        if (!this.showEnergyInfo[x] || this.showEnergyInfo[x].energyTime != energy[x].energyTime) {
                            this.showEnergyInfo[x] = energy[x];
                            let energyIns = cc.instantiate(this.energyPref);
                            energyIns.getComponent("EnergyItem").SetItem(energy[x]);
                            this._RemoveEnergyByEnergyTime(energy[x].energyTime);
                            this.energyRoot.addChild(energyIns);
                            UpdateEnergy(energy[x]);
                        }
                    } else if (x < energy.length - 1 && energy[x].idx == this.showEnergyInfo.length - 1) {
                        for (let y = 0; y < this.showEnergyInfo.length - 1; ++y) {
                            if (!this.showEnergyInfo[y]) {
                                energy[x].idx = y;
                                this.showEnergyInfo[y] = energy[x];
                                let energyIns = cc.instantiate(this.energyPref);
                                energyIns.getComponent("EnergyItem").SetItem(energy[x]);
                                this._RemoveEnergyByEnergyTime(energy[x].energyTime);
                                this.energyRoot.addChild(energyIns);
                                UpdateEnergy(energy[x]);
                            }
                        }
                    }
                }
            }
            else {
                // console.log("_UpdateEnergy: enter");
                for (let x = 0; x < EnergyShowCount; ++x) {
                    if (x < energy.length && energy[x].idx != this.showEnergyInfo.length - 1) {
                        if (!this.showEnergyInfo[x] || this.showEnergyInfo[x].energyTime != energy[x].energyTime) {
                            this.showEnergyInfo[x] = energy[x];
                            let energyIns = cc.instantiate(this.energyPref);
                            energyIns.getComponent("EnergyItem").SetItem(energy[x]);
                            this._RemoveEnergyByEnergyTime(energy[x].energyTime);
                            this.energyRoot.addChild(energyIns);
                            UpdateEnergy(energy[x]);
                        }
                    } else if (x < energy.length && energy[x].idx == this.showEnergyInfo.length - 1) {
                        for (let y = 0; y < this.showEnergyInfo.length; ++y) {
                            if (!this.showEnergyInfo[y] && this.showEnergyInfo[this.showEnergyInfo.length - 1].energyTime != energy[x].energyTime) {
                                energy[x].idx = y;
                                this.showEnergyInfo[y] = energy[x];
                                let energyIns = cc.instantiate(this.energyPref);
                                energyIns.getComponent("EnergyItem").SetItem(energy[x]);
                                this._RemoveEnergyByEnergyTime(energy[x].energyTime);
                                this.energyRoot.addChild(energyIns);
                                UpdateEnergy(energy[x]);
                            }
                        }
                    }
                }
            }
        }

        if (this.showEnergyInfo[this.showEnergyInfo.length - 1] != null) {
            let children = this.energyRoot.children;
            if (children.length > 0) {
                children[children.length - 1].getComponent("EnergyItem")._InitItem();
            }
            // console.log("childrenCount： " + children.length);
            // for (let x = 0; x < children.length; ++x) {
            //     console.log("childrenInfo： " + children[x].getComponent("EnergyItem").energyData.idx);
            // }
            if (this.showEnergyInfo[this.showEnergyInfo.length - 1].isGrow) {
                for (let x = 0; x < children.length; ++x) {
                    if (children[x].getComponent("EnergyItem").energyData.idx == this.showEnergyInfo.length - 1
                        && !children[x].getComponent("EnergyItem").energyData.isGrow) {
                        children[x].removeFromParent();
                    }
                }
            } else {
                for (let x = 0; x < children.length; ++x) {
                    if (children[x].getComponent("EnergyItem").energyData.idx == this.showEnergyInfo.length - 1
                        && children[x].getComponent("EnergyItem").energyData.energyTime != this.showEnergyInfo[this.showEnergyInfo.length - 1].energyTime) {
                        children[x].removeFromParent();
                    }
                }
            }
            let children1 = this.energyRoot.children;
            // console.log("childrenCount1： " + children1.length);
        }
    }

    private _RemoveEnergyByEnergyTime(time: number) {
        let children = this.energyRoot.children;
        for (let x = 0; x < children.length; ++x) {
            if (children[x].getComponent("EnergyItem").energyData.energyTime == time) {
                children[x].removeFromParent();
                break;
            }
        }
    }

    OnClickStart(event, customEventData) {
        // let energy = this.energy;
        // if (energy.length == 0 || !energy[energy.length - 1].isGrow) {
            this.startEnergyNode.getComponent("StartEnergyGroupCtrl")._UpdateBtn();
            this.startEnergyNode.runAction(cc.moveTo(0.3, cc.v2(375, 667)));
        // } else {
        //     StopEnergy();
        // }
    }

    start() {

    }

    // update (dt) {}
}
