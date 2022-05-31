import Global from "../App/Global";
import { LocMsg } from "../BaseModel/MsgEvent";
import { INFOR_STATE } from "../MainScene/RobotInforCtrl";
import { IRobot, RobotTypeDesc } from "../Model/RobotProp";
import { API_BuyRobot } from "../Utils/LocalDataAPI";


const { ccclass, property } = cc._decorator;




@ccclass
export default class ShopItem extends cc.Component {
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

    @property(cc.Label)
    lbSol: cc.Label = null;


    @property([cc.SpriteFrame])
    iconSFs: cc.SpriteFrame[] = [];

    get renderIdx() {
        return this._renderIdx;
    }
    get robotId() {
        return this._robotData.id;
    }
    private _renderIdx: number = -1;
    private _shopId: number = 0;
    private _robotData: IRobot = null;

    async SetItem(idx: number, data: IRobot) {
        this._renderIdx = idx;
        this._robotData = data;
        this._shopId = data.id;
        this.lbMint.string = data.mint + "/7";
        this.lbID.string = "#" + data.id
        this.lbSol.string = data.maticCost + "";
        this.lbLv.string = "Lv." + data.level;
        this.lbType.string = RobotTypeDesc[data.robotType];
        this.icon.spriteFrame = this.iconSFs[data.robotImgId]
    }

    OnClickSelf(event, customEventData) {
        Global.Inst.Emit(LocMsg.SHOW_ROBOT_INFOR, this._robotData, INFOR_STATE.BUY);
    }

    OnClickBuy() {
        API_BuyRobot(this._robotData);
    }

}
