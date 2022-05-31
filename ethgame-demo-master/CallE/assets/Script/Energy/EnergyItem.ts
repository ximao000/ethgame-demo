import { DataBaseKey } from "../BaseModel/Types";
import DataManager from "../Manager/DataManager";
import { API_CollectEnergy, DeleteEnergy, UpdateEnergy } from "../Utils/LocalDataAPI";
import { CollectionTime, IEnergy, MaturationTime } from "./EnergyProp";

const { ccclass, property } = cc._decorator;

@ccclass
export default class EnergyItem extends cc.Component {

    @property(cc.Node)
    actionBg: cc.Node = null;

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
        // console.log("SetItem: " + this._energyData.idx);

        this._InitItem();
    }

    private _UpdateItem() {
        if (this._energyData.isGrow) {
            if (this._deltaTime > 1) {
                this._deltaTime -= 1;
                this._energyData.energyCount = Math.round((this._energyData.energyCount * 10 + 1)) / 10;
                this.count.string = this._energyData.energyCount.toString() + "g";
                // need change data
                if (this._energyData.energyCount % 10 == 9) {
                    // console.log("save data");
                    UpdateEnergy(this._energyData);
                }
            }
        } else {
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
        }
        if (!this._energyData.isGrow) {
            let data = DataManager.Inst.GetData<IEnergy[]>(DataBaseKey.ENERGY_DATA);
            if (data.indexOf(this._energyData) == -1) {
                this.node.removeFromParent();
            }
        }
    }

    private _InitItem() {
        // console.log("_InitItem: " + this._energyData.isGrow);
        if (this._energyData.isGrow) {
            this.icon.spriteFrame = this.iconSFs[this._energyData.energyType];
            this.mask.spriteFrame = this.iconSFs[this._energyData.energyType + 4];
            this.actionBg.active = true;
            this.actionBg.runAction(cc.repeatForever(cc.rotateBy(1, 180)));
            this.mask.node.active = true;
            this.timeBg.active = false;
            this.count.node.color = this.colors[this._energyData.energyType];
            this.count.string = this._energyData.energyCount.toString() + "g";
            this.node.getComponent(cc.Button).interactable = false;
        } else {
            this.actionBg.stopAllActions();
            this.actionBg.active = false;
            this.mask.node.active = false;
            this.icon.spriteFrame = this.iconSFs[this._energyData.energyType];
            this.count.node.color = this.colors[this._energyData.energyType];
            this.count.string = this._energyData.energyCount.toString() + "g";
            if (this._nowTime - this._energyData.energyTime > MaturationTime) {
                this.timeBg.active = false;
                this.node.getComponent(cc.Button).interactable = true;
            } else {
                this.timeBg.active = true;
                let timeShow = Math.floor((MaturationTime - (this._nowTime - this._energyData.energyTime)) * 0.001);
                let h = Math.floor(timeShow / 3600);
                let m = Math.floor(timeShow % 3600 / 60);
                let s = timeShow % 3600 % 60;
                this.time.string = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
                this.node.getComponent(cc.Button).interactable = false;
            }
        }
        this._start = true;
    }

    OnClick(event, customEventData) {
        // 增加能量
        API_CollectEnergy(this._energyData.energyCount);

        // collect energy
        this.node.getComponent(cc.Button).interactable = false;
        this.node.runAction(cc.sequence(cc.spawn(cc.moveTo(0.35, cc.v2(-190, 190)), cc.scaleTo(0.35, 0.3)), cc.callFunc(() => {
            // need change data
            this.node.removeFromParent();
            UpdateEnergy(this._energyData);
        })));
    }
}
