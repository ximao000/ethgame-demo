import {EnergyShowCount, IEnergy} from "../../Energy/EnergyProp";
import DataManager from "../../Manager/DataManager";
import {DataBaseKey} from "../../BaseModel/Types";
import {StopEnergy, UpdateEnergy} from "../../Utils/LocalDataAPI";
import Global from "../../App/Global";
import {LocMsg} from "../../BaseModel/MsgEvent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FriendEnergyGroupCtrl extends cc.Component {

    @property(cc.Node)
    energyRoot: cc.Node = null;

    @property(cc.Prefab)
    energyPref: cc.Prefab = null;

    private startEnergyNode: cc.Node = null;
    private showEnergyInfo: IEnergy[] = [null, null, null, null, null];

    get energy() {
        return DataManager.Inst.GetData<IEnergy[]>(DataBaseKey.ENERGY_DATA);
    }

    onEnable(){
        this._UpdateEnergy();
    }

    private _UpdateEnergy(){

        let energy = this.energy;

        for (let x = 0; x < this.showEnergyInfo.length; ++x){
            if (this.showEnergyInfo[x] && energy.indexOf(this.showEnergyInfo[x]) == -1){
                this.showEnergyInfo[x] = null;
            }
        }
        if (energy.length > 0){
            // console.log("_UpdateEnergy:" + JSON.stringify(energy));
            for (let x = 0; x < EnergyShowCount; ++x){
                if (x < energy.length && energy[x].idx != this.showEnergyInfo.length - 1){
                    if (!this.showEnergyInfo[x] || this.showEnergyInfo[x].energyTime != energy[x].energyTime){
                        this.showEnergyInfo[x] = energy[x];
                        let energyIns = cc.instantiate(this.energyPref);
                        energyIns.getComponent("FriendEnergyItem").SetItem(energy[x]);
                        this.energyRoot.addChild(energyIns);
                        // UpdateEnergy(energy[x]);
                    }
                } else if(x < energy.length && energy[x].idx == this.showEnergyInfo.length - 1){
                    for (let y = 0; y < this.showEnergyInfo.length; ++y){
                        if(!this.showEnergyInfo[y] && this.showEnergyInfo[this.showEnergyInfo.length - 1].energyTime != energy[x].energyTime){
                            energy[x].idx = y;
                            this.showEnergyInfo[y] = energy[x];
                            let energyIns = cc.instantiate(this.energyPref);
                            energyIns.getComponent("FriendEnergyItem").SetItem(energy[x]);
                            this.energyRoot.addChild(energyIns);
                            // UpdateEnergy(energy[x]);
                        }
                    }
                }
            }
        }

        if (this.showEnergyInfo[this.showEnergyInfo.length - 1] != null){
            let children = this.energyRoot.children;
            console.log("childrenCount： " + children.length);
            for (let x = 0; x < children.length; ++x){
                console.log("childrenInfo： " + children[x].getComponent("FriendEnergyItem").energyData.idx);
            }
            if (this.showEnergyInfo[this.showEnergyInfo.length - 1].isGrow){
                for (let x = 0; x < children.length; ++x){
                    if (children[x].getComponent("FriendEnergyItem").energyData.idx == this.showEnergyInfo.length - 1
                        && !children[x].getComponent("FriendEnergyItem").energyData.isGrow){
                        children[x].removeFromParent();
                    }
                }
            } else {
                for (let x = 0; x < children.length; ++x){
                    if (children[x].getComponent("FriendEnergyItem").energyData.idx == this.showEnergyInfo.length - 1
                        && children[x].getComponent("FriendEnergyItem").energyData.energyTime != this.showEnergyInfo[this.showEnergyInfo.length - 1].energyTime){
                        children[x].removeFromParent();
                    }
                }
            }
            let children1 = this.energyRoot.children;
            console.log("childrenCount1： " + children1.length);
        }
    }

    private _RemoveEnergyByEnergyTime(time: number){
        let children = this.energyRoot.children;
        for (let x = 0; x < children.length; ++x){
            if (children[x].getComponent("FriendEnergyItem").energyData.energyTime == time){
                children[x].removeFromParent();
            }
        }
    }

    OnClickBack(event, customEventData){
        // this.node.runAction(cc.sequence(cc.moveTo(0.3, cc.v2(750, 0)), cc.callFunc(() => {
        //     // need change data
        //     // this.node.removeFromParent();
        // })));
        Global.Inst.Emit(LocMsg.SHOW_FRIEND_Energy_INFOR, null, 1);
    }
}
