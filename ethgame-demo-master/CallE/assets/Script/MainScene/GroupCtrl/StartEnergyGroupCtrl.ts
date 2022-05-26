// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import {StopEnergy, UpdateEnergy} from "../../Utils/LocalDataAPI";
import DataManager from "../../Manager/DataManager";
import {EnergyShowCount, EnergyType, IEnergy, MakeNewEnergy} from "../../Energy/EnergyProp";
import {DataBaseKey} from "../../BaseModel/Types";

const {ccclass, property} = cc._decorator;

@ccclass
export default class StartEnergyGroupCtrl extends cc.Component {

    @property([cc.Button])
    startBtn: cc.Button[] = [];

    @property([cc.Button])
    stopBtn: cc.Button[] = [];

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}

    get energy() {
        return DataManager.Inst.GetData<IEnergy[]>(DataBaseKey.ENERGY_DATA);
    }

    private _UpdateBtn(){
        let energy = this.energy;
        if (energy.length > 0 && energy[energy.length - 1].isGrow){
            for (let x = 0; x < this.startBtn.length; ++x){
                if (x == energy[energy.length - 1].energyType.valueOf()){
                    this.startBtn[x].node.active = false;
                    this.startBtn[x].interactable = false;
                    this.stopBtn[x].node.active = true;
                    this.stopBtn[x].interactable = true;
                } else {
                    this.startBtn[x].node.active = true;
                    this.startBtn[x].interactable = false;
                    this.stopBtn[x].node.active = false;
                    this.stopBtn[x].interactable = false;
                }
            }
        } else {
            for (let x = 0; x < this.startBtn.length; ++x){
                    this.startBtn[x].node.active = true;
                    this.startBtn[x].interactable = true;
                    this.stopBtn[x].node.active = false;
                    this.stopBtn[x].interactable = false;
            }
        }
    }

    OnClickSelf(event, customEventData) {
        this.node.runAction(cc.moveTo(0.3, cc.v2(0, -1334)));
    }

    OnClickStart(event, customEventData) {
        let id = parseInt(customEventData);
        let energy = MakeNewEnergy(EnergyShowCount - 1, id);
        UpdateEnergy(energy);
        this._UpdateBtn();
    }

    OnClickStop(event, customEventData) {
        StopEnergy();
        this._UpdateBtn();
    }
}
