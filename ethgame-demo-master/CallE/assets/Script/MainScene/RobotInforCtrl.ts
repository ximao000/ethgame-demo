import Global from "../App/Global";
import { LocMsg } from "../BaseModel/MsgEvent";
import { IRobot, RobotTypeDesc } from "../Model/RobotProp";
import { API_BuyRobot, API_UseRobot } from "../Utils/LocalDataAPI";

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
    lbInt: cc.Label = null;

    @property(cc.Label)
    lbSol: cc.Label = null;

    @property([cc.SpriteFrame])
    iconSFs: cc.SpriteFrame[] = [];

    @property(cc.Node)
    ndHad: cc.Node = null;

    @property(cc.Node)
    ndBuy: cc.Node = null;

    @property(cc.Node)
    btnUse: cc.Node = null;

    @property(cc.Node)
    btnUnUse: cc.Node = null;


    @property([cc.ProgressBar])
    pgbs: cc.ProgressBar[] = [];

    @property([cc.Node])
    ndInts: cc.Node = null;

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
        this.robot = data; this.lbID.string = "" + data.id;
        this.lbType.string = RobotTypeDesc[data.robotType];
        this.lbMint.string = data.mint + "/7";
        this.lbLv.string = "Lv." + data.level;
        this.lbEfficiency.string = "" + data.efficiency;
        this.lbLuck.string = "" + data.luck;
        this.lbLoss.string = "" + data.pow;
        this.lbInt.string = data.intMin + "~" + data.intMax;
        this.lbSol.string = data.maticCost + "";
        this.icon.spriteFrame = this.iconSFs[data.robotImgId];


        this.pgbs[0].progress = data.efficiency / 10;
        this.pgbs[1].progress = data.luck / 10;
        this.pgbs[2].progress = data.pow / 10;
        for (let index = 0; index < 10; index++) {
            this.ndInts.children[index].active = (index >= data.intMin - 1 && index < data.intMax);

        }
        switch (state) {
            case INFOR_STATE.BUY:
                this.ndHad.active = false;
                this.ndBuy.active = true;
                break;
            case INFOR_STATE.HAED:
                this.ndHad.active = true;
                this.ndBuy.active = false;
                this.btnUse.active = true;
                this.btnUnUse.active = false;
                break;

            case INFOR_STATE.ISUSEING:
                this.ndHad.active = true;
                this.ndBuy.active = false;
                this.btnUse.active = false;
                this.btnUnUse.active = true;
                break;
        }

    }

    OnBtnClose() {
        this.node.active = false;
    }

    OnClickBuy() {
        API_BuyRobot(this.robot);
    }


    OnClickUse() {
        API_UseRobot(this.robot);
    }

    // update (dt) {}
}
