import Global from "../App/Global";
import { LocMsg } from "../BaseModel/MsgEvent";
import { IRobot, RobotTypeDesc } from "../Model/RobotProp";
import { BuyRobot, UseRobot } from "../Utils/LocalDataAPI";

const { ccclass, property } = cc._decorator;

export enum INFOR_STATE {
    BUY,
    HAED,
    ISUSEING,
}

@ccclass
export default class RobotInforCtrl extends cc.Component {

    @property(cc.Sprite)
    icon: cc.Sprite = null;

    @property(cc.Label)
    lbID: cc.Label = null;

    @property(cc.Label)
    lbType: cc.Label = null;

    @property(cc.Label)
    lbMint: cc.Label = null;

    @property(cc.Label)
    lbLv: cc.Label = null;

    @property(cc.Label)
    lbEfficiency: cc.Label = null;

    @property(cc.Label)
    lbLuck: cc.Label = null;

    @property(cc.Label)
    lbLoss: cc.Label = null;

    @property(cc.Label)
    lbSol: cc.Label = null;

    @property([cc.SpriteFrame])
    iconSFs: cc.SpriteFrame[] = [];

    @property([cc.Node])
    ndState: cc.Node[] = [];

    private robot: IRobot = null;

    protected onLoad(): void {
        Global.Inst.On(LocMsg.UPDATE_ROBOT_INFOR, this.setDataToUI, this)
    }
    protected onEnable(): void {
        // // 测试；
        // let data: IRobot = {
        //     id: 1,
        //     robotImgId: 2,
        //     robotType: RobotType.TYPE_1,
        //     level: 3,
        //     mint: 4,
        //     sol: 5,
        //     efficiency: 6,
        //     luck: 7,
        //     loss: 8
        // };
        // this.setDialog(data, INFOR_STATE.ISUSEING);
    }

    setDialog(data: IRobot, state: INFOR_STATE) {
        this.setDataToUI(data, state);
        this.node.active = true;
    }

    setDataToUI(data: IRobot, state: INFOR_STATE) {
        this.robot = data; this.lbID.string = "#" + data.id;
        this.lbType.string = RobotTypeDesc[data.robotType];
        this.lbMint.string = "Mint:" + data.mint;
        this.lbLv.string = "Lv " + data.level;
        this.lbEfficiency.string = "" + data.efficiency;
        this.lbLuck.string = "" + data.luck;
        this.lbLoss.string = "" + data.loss;
        this.lbSol.string = data.maticCost + " SOL";
        this.icon.spriteFrame = this.iconSFs[data.robotImgId];

        for (const iterator of this.ndState) {
            iterator.active = false;
        }
        this.ndState[state].active = true;
    }

    OnBtnClose() {
        this.node.active = false;
    }

    OnClickBuy() {
        BuyRobot(this.robot);
    }


    OnClickUse() {
        UseRobot(this.robot);
    }

    // update (dt) {}
}
