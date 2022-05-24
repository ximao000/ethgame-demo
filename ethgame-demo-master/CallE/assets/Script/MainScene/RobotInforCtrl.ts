import { IRobot, RobotTypeDesc } from "../Model/RobotProp";

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
        this.lbID.string = "#" + data.id;
        this.lbType.string = RobotTypeDesc[data.robotType];
        this.lbMint.string = "Mint:" + data.mint;
        this.lbLv.string = "Lv " + data.level;
        this.lbEfficiency.string = "" + data.efficiency;
        this.lbLuck.string = "" + data.luck;
        this.lbLoss.string = "" + data.loss;
        this.lbSol.string = data.sol + " SOL";
        this.icon.spriteFrame = this.iconSFs[data.robotImgId];

        for (const iterator of this.ndState) {
            iterator.active = false;
        }
        this.ndState[state].active = true;
        this.node.active = true;
    }

    OnBtnClose() {
        this.node.active = false;
    }

    // update (dt) {}
}
