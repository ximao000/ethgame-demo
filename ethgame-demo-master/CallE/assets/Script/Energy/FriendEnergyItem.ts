import { DataBaseKey } from "../BaseModel/Types";
import DataManager from "../Manager/DataManager";
import {API_CollectEnergy, DeleteEnergy, UpdateEnergy} from "../Utils/LocalDataAPI";
import { CollectionTime, IEnergy, MaturationTime } from "./EnergyProp";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FriendEnergyItem extends cc.Component {

    @property(cc.Sprite)
    icon: cc.Sprite = null;

    @property(cc.Sprite)
    mask: cc.Sprite = null;

    @property(cc.Node)
    timeBg: cc.Node = null;

    @property(cc.Label)
    time: cc.Label = null;

    @property(cc.Label)
    count: cc.Label = null;

    @property([cc.SpriteFrame])
    iconSFs: cc.SpriteFrame[] = [];

    @property([cc.Color])
    colors: cc.Color[] = [];

    private _energyData: IEnergy = null;
    private _nowTime: number = 0;
    private _deltaTime: number = 0;
    private _positions: cc.Vec2[] = [cc.v2(-153, 65), cc.v2(170, 47), cc.v2(-272, -30), cc.v2(250, -114), cc.v2(0, 16)];
    private _start: boolean = false;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.scale = 0;
    }

    start() {
        this.node.runAction(cc.sequence(cc.scaleTo(0.3, 1), cc.callFunc(() => {
        })));
    }

    update(dt) {
        if (this._start) {
            this._deltaTime += dt;
            if (this._deltaTime >= 1) {
                this._UpdateItem();
            }
        }
    }

    get energyData() {
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

    private _UpdateItem() {
        if (!this._energyData.isGrow){
            if (this._deltaTime > 1) {
                this._deltaTime -= 1;
                this._nowTime = new Date().getTime();
                if (this._nowTime - this._energyData.energyTime > MaturationTime + CollectionTime) {
                    // time out
                    this.node.getComponent(cc.Button).interactable = false;
                    this.node.runAction(cc.sequence(cc.scaleTo(0.3, 0), cc.callFunc(() => {
                        this.node.removeFromParent();
                        DeleteEnergy(this._energyData);
                    })));
                } else if (this._nowTime - this._energyData.energyTime > MaturationTime) {
                    this.timeBg.active = false;
                    this.node.getComponent(cc.Button).interactable = true;
                } else {
                    this.timeBg.active = true;
                    let timeShow = Math.floor((MaturationTime - (this._nowTime - this._energyData.energyTime)) * 0.001);
                    let h = Math.floor(timeShow / 3600);
                    let m = Math.floor(timeShow % 3600 / 60);
                    let s = timeShow % 3600 % 60;
                    this.time.string = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
                }
            }
            let data = DataManager.Inst.GetData<IEnergy[]>(DataBaseKey.ENERGY_DATA);
            if (data.indexOf(this._energyData) == -1) {
                this.node.removeFromParent();
            }
        } else {
            this.node.removeFromParent();
        }
    }

    private _InitItem() {
        {
            this.icon.spriteFrame = this.iconSFs[this._energyData.energyType];
            this.count.node.color = this.colors[this._energyData.energyType];
            this.count.string = this._energyData.energyCount.toString() + "g";
            if (this._nowTime - this._energyData.energyTime > MaturationTime) {
                this.timeBg.active = false;
                if (this._energyData.canSteal){
                    this.node.getComponent(cc.Button).interactable = true;
                    this.mask.node.active = true;
                } else {
                    this.node.getComponent(cc.Button).interactable = false;
                    this.mask.node.active = false;
                }
            } else {
                this.timeBg.active = true;
                let timeShow = Math.floor((MaturationTime - (this._nowTime - this._energyData.energyTime)) * 0.001);
                let h = Math.floor(timeShow / 3600);
                let m = Math.floor(timeShow % 3600 / 60);
                let s = timeShow % 3600 % 60;
                this.time.string = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
                this.node.getComponent(cc.Button).interactable = false;
                this.mask.node.active = false;
            }
        }
        this._start = true;
    }

    OnClick(event, customEventData) {

        API_CollectEnergy(10);

        // collect energy
        this.node.getComponent(cc.Button).interactable = false;
        this._energyData.canSteal = false;
        UpdateEnergy(this._energyData);
        this.mask.node.active = false;
        this.count.string = (this._energyData.energyCount - 10).toString();
        // this.node.runAction(cc.sequence(cc.spawn(cc.moveTo(0.35, cc.v2(235, 194)), cc.scaleTo(0.35, 0.3)), cc.callFunc(() => {
        //     // need change data
        //     this.node.removeFromParent();
        //     UpdateEnergy(this._energyData);
        // })));
    }
}
