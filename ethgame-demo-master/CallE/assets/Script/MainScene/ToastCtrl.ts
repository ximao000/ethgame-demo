import Global from "../App/Global";
import { LocMsg } from "../BaseModel/MsgEvent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ToastCtrl extends cc.Component {

    @property(cc.Node)
    nd: cc.Node = null;
    @property(cc.Label)
    label: cc.Label = null;


    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        Global.Inst.On(LocMsg.SHOW_TOAST, this._ToastShow, this);
    }

    private _ToastShow(str: string) {
        this.nd.stopAllActions();
        this.nd.opacity = 0;
        this.label.string = str;

        this.nd.runAction(cc.sequence(cc.fadeIn(0.5), cc.delayTime(1), cc.fadeOut(0.5)));
    }
    // update (dt) {}
}
