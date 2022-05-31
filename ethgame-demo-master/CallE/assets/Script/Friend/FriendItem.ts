import Global from "../App/Global";
import { LocMsg } from "../BaseModel/MsgEvent";
import { IFriend } from "../Model/FriendProp";

const { ccclass, property } = cc._decorator;




@ccclass
export default class HotRoomItem extends cc.Component {
    @property(cc.Sprite)
    icon: cc.Sprite = null;

    @property(cc.Label)
    lbName: cc.Label = null;

    @property(cc.Label)
    lbRobot: cc.Label = null;

    @property(cc.Node)
    ndEnergy: cc.Node = null;

    @property([cc.SpriteFrame])
    iconSFs: cc.SpriteFrame[] = [];

    get renderIdx() {
        return this._renderIdx;
    }
    private _renderIdx: number = -1;
    private _fridenId: number = 0;

    async SetItem(idx: number, data: IFriend) {
        this._renderIdx = idx;
        this._fridenId = data.id;
        this.lbName.string = data.name;
        this.lbRobot.string = data.totalCreatEnergy + "kg";
        // TODO 能量
        // this.ndEnergy.active = data.getEnergy;
        this.icon.spriteFrame = this.iconSFs[data.iconId]
    }

    OnClickSelf(event, customEventData) {
        console.log(this._renderIdx);
        Global.Inst.Emit(LocMsg.SHOW_FRIEND_Energy_INFOR, null, 4);
    }

}
