import Global from "../App/Global";
import { LocMsg } from "../BaseModel/MsgEvent";
import { DataBaseKey } from "../BaseModel/Types";
import { INFOR_STATE } from "../MainScene/RobotInforCtrl";
import DataManager from "../Manager/DataManager";
import { IPlayerInfo } from "../Model/PlayerProp";
import { IRobot, RobotTypeDesc } from "../Model/RobotProp";
import { API_UseRobot } from "../Utils/LocalDataAPI";
const { ccclass, property } = cc._decorator;

@ccclass
export default class BackpackItem extends cc.Component {
    @property(cc.Sprite)
    icon: cc.Sprite = null;

    @property(cc.Label)
    lbType: cc.Label = null;

    @property(cc.Label)
    lbID: cc.Label = null;

    @property(cc.Label)
    lbMint: cc.Label = null;

    @property(cc.Label)
    lbLv: cc.Label = null;


    @property([cc.Label])
    lbs: cc.Label[] = [];

    @property([cc.SpriteFrame])
    iconSFs: cc.SpriteFrame[] = [];

    @property(cc.Node)
    btnUse: cc.Node = null;

    get renderIdx() {
        return this._renderIdx;
    }

    get robotId() {
        return this._robotData.id;
    }
    private _renderIdx: number = -1;
    private _robotData: IRobot = null;

    async SetItem(idx: number, data: IRobot) {
        this._renderIdx = idx;
        this._robotData = data;
        this.lbMint.string = "Mint:" + data.mint;
        this.lbID.string = "" + data.id
        this.lbLv.string = "Lv." + data.level;
        this.lbType.string = RobotTypeDesc[data.robotType];
        this.icon.spriteFrame = this.iconSFs[data.robotImgId];


        //属性
        this.lbs[0].string = "" + data.efficiency;
        this.lbs[1].string = "" + data.luck;
        this.lbs[2].string = "" + data.pow;
        this.lbs[3].string = data.intMin + "~" + data.intMax;


        let player = DataManager.Inst.GetData<IPlayerInfo>(DataBaseKey.PLAYER_DATA);
        this.btnUse.active = true;
        this.btnUse.children[0].active = player.curRobotUse && player.curRobotUse.id === this._robotData.id ? true : false;
        this.btnUse.children[1].active = !this.btnUse.children[0].active;

    }

    OnClickSelf(event, customEventData) {
        let player = DataManager.Inst.GetData<IPlayerInfo>(DataBaseKey.PLAYER_DATA);
        let sate = player.curRobotUse && player.curRobotUse.id === this._robotData.id ? INFOR_STATE.ISUSEING : INFOR_STATE.HAED;
        Global.Inst.Emit(LocMsg.SHOW_ROBOT_INFOR, this._robotData, sate);
    }


    OnClickUse(event, customEventData) {
        API_UseRobot(this._robotData);
    }

}
