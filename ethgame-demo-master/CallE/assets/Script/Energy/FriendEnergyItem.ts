import {CollectionTime, IEnergy, MaturationTime} from "./EnergyProp";
import DataManager from "../Manager/DataManager";
import {IPlayerInfo} from "../Model/PlayerProp";
import {DataBaseKey} from "../BaseModel/Types";
import {INFOR_STATE} from "../MainScene/RobotInforCtrl";
import Global from "../App/Global";
import {LocMsg} from "../BaseModel/MsgEvent";
import {DeleteEnergy, UpdateEnergy} from "../Utils/LocalDataAPI";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FriendEnergyItem extends cc.Component {

    @property(cc.Sprite)
    icon: cc.Sprite = null;

    @property(cc.Sprite)
    mask: cc.Sprite = null;

    @property(cc.Label)
    time: cc.Label = null;

    @property(cc.Label)
    count: cc.Label = null;

    @property([cc.SpriteFrame])
    iconSFs: cc.SpriteFrame[] = [];

    private _energyData: IEnergy = null;
    private _nowTime: number = 0;
    private _deltaTime: number = 0;
    private _positions: cc.Vec2[] = [cc.v2(57, -15), cc.v2(291, -103), cc.v2(-8, -97), cc.v2(278, -2), cc.v2(163, -19)];
    private _start: boolean = false;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.scale = 0;
    }

    start () {
        this.node.runAction(cc.sequence(cc.scaleTo(0.3, 1), cc.callFunc(() => {
        })));
    }

    update (dt) {
        if (this._start){
            this._deltaTime += dt;
            if (this._deltaTime >= 1){
                this._UpdateItem();
            }
        }
    }

    get energyData(){
        return this._energyData;
    }

    SetItem(data: IEnergy) {
        let nowDate = new Date();
        this._nowTime = nowDate.getTime();
        this._energyData = data;
        this.node.setPosition(this._positions[data.idx]);
        // console.log("SetItem: " + this.node.position);

        this._InitItem();
    }

    private _UpdateItem(){
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
            if (this._deltaTime > 1){
                this._deltaTime -= 1;
                this._nowTime = new Date().getTime();
                if (this._nowTime - this._energyData.energyTime > MaturationTime + CollectionTime){
                    // time out
                    this.node.getComponent(cc.Button).interactable = false;
                    this.node.runAction(cc.sequence(cc.scaleTo(0.3, 0), cc.callFunc(() => {
                        this.node.removeFromParent();
                        // DeleteEnergy(this._energyData);
                    })));
                } else if (this._nowTime - this._energyData.energyTime > MaturationTime){
                    this.mask.node.active = !this._energyData.canSteal;
                    this.time.node.active = false;
                    this.node.getComponent(cc.Button).interactable = true;
                } else {
                    this.mask.node.active = true;
                    this.time.node.active = true;
                    let timeShow = Math.floor((MaturationTime - (this._nowTime - this._energyData.energyTime))*0.001);
                    this.time.string = Math.floor(timeShow/3600) + ":" + Math.floor(timeShow%3600/60) + ":" + timeShow%3600%60;
                }
                if (!this._energyData.canSteal){
                    this.mask.node.active = true;
                }
            }
        }
        if (!this._energyData.isGrow){
            let data = DataManager.Inst.GetData<IEnergy[]>(DataBaseKey.ENERGY_DATA);
            if (data.indexOf(this._energyData) == -1){
                this.node.removeFromParent();
            }
        }
    }

    private _InitItem(){
        if (this._energyData.isGrow){
            this.icon.spriteFrame = this.iconSFs[this._energyData.energyType + 4];
            this.mask.node.active = !this._energyData.canSteal;
            this.time.node.active = false;
            this.count.string = this._energyData.energyCount.toString();
            this.node.getComponent(cc.Button).interactable = false;
        } else {
            this.icon.spriteFrame = this.iconSFs[this._energyData.energyType];
            this.count.string = this._energyData.energyCount.toString();
            if (this._nowTime - this._energyData.energyTime > MaturationTime){
                this.mask.node.active = !this._energyData.canSteal;
                this.time.node.active = false;
                this.node.getComponent(cc.Button).interactable = this._energyData.canSteal;
            } else {
                this.mask.node.active = true;
                this.time.node.active = true;
                let timeShow = Math.floor((MaturationTime - (this._nowTime - this._energyData.energyTime))*0.001);
                this.time.string = Math.floor(timeShow/3600) + ":" + Math.floor(timeShow%3600/60) + ":" + timeShow%3600%60;
                this.node.getComponent(cc.Button).interactable = false;
            }
        }
        this._start = true;
    }

    OnClick(event, customEventData) {
        // collect energy
        this.node.getComponent(cc.Button).interactable = false;
        this._energyData.canSteal = false;
        UpdateEnergy(this._energyData);
        this.mask.node.active = true;
        this.count.string = (this._energyData.energyCount - 10).toString();
        // this.node.runAction(cc.sequence(cc.spawn(cc.moveTo(0.35, cc.v2(235, 194)), cc.scaleTo(0.35, 0.3)), cc.callFunc(() => {
        //     // need change data
        //     this.node.removeFromParent();
        //     UpdateEnergy(this._energyData);
        // })));
    }
}
