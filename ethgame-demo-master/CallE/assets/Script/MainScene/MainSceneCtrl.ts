import Global from "../App/Global";
import { LocMsg } from "../BaseModel/MsgEvent";
import { IRobot } from "../Model/RobotProp";
import RobotInforCtrl, { INFOR_STATE } from "./RobotInforCtrl";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Animation)
    menuAnim: cc.Animation = null;


    @property(cc.Node)
    centerRoot: cc.Node = null;

    @property([cc.Prefab])
    centerPref: cc.Prefab[] = [];

    @property(RobotInforCtrl)
    robotInforCtrl: RobotInforCtrl = null;

    private curCenterGroupIndex: number = 0;
    private centerGroupIsMoving: boolean = false;
    private centerGroups: cc.Node[] = [];
    private _mapEventBind: Map<string, Function> = null;
    protected onLoad(): void {
        // this.menuAnim.play('menu_reset');

        let homeCenter = cc.instantiate(this.centerPref[0]);
        homeCenter.position.x = 0;
        this.centerRoot.addChild(homeCenter);
        let friendCenter = cc.instantiate(this.centerPref[1]);
        this.centerRoot.addChild(friendCenter);
        let backpackCenter = cc.instantiate(this.centerPref[2]);
        this.centerRoot.addChild(backpackCenter);
        let shopCenter = cc.instantiate(this.centerPref[3]);
        this.centerRoot.addChild(shopCenter);
        let friendEnergyCenter = cc.instantiate(this.centerPref[4]);
        this.centerRoot.addChild(friendEnergyCenter);
        this.centerGroups = this.centerRoot.children;

        this._InitListener();
    }
    private _InitListener() {
        this._mapEventBind = new Map<string, Function>();
        this._mapEventBind.set(LocMsg.SHOW_ROBOT_INFOR.toString(), this._ShowRobotDialog);

        this._mapEventBind.forEach((value, event) => {
            Global.Inst.On(event, value.bind(this), this);
        });

        Global.Inst.On(LocMsg.SHOW_FRIEND_Energy_INFOR, this.OnBtnClick, this);
    }

    private _ShowRobotDialog(data: IRobot, state: INFOR_STATE) {
        if (this.robotInforCtrl.node.active) return;
        this.robotInforCtrl.setDialog(data, state);

    }

    start() {

    }

    OnBtnClick(event, customEventData) {
        let lastCenterGroupIndex = parseInt(customEventData);
        if (this.curCenterGroupIndex === lastCenterGroupIndex || this.centerGroupIsMoving) return;

        //左滑动；
        this.centerGroupIsMoving = true;
        let lastCenterPosX = this.curCenterGroupIndex < lastCenterGroupIndex ? this.node.width : -this.node.width;
        let moveTime = 0.1;
        let oldIndex = this.curCenterGroupIndex;

        this.centerGroups[lastCenterGroupIndex].active = true;
        this.centerGroups[lastCenterGroupIndex].x = lastCenterPosX;
        this.centerGroups[this.curCenterGroupIndex].runAction(cc.sequence(cc.moveTo(moveTime, cc.v2(-lastCenterPosX, 0)), cc.callFunc(() => {
            this.centerGroupIsMoving = false;
            this.centerGroups[oldIndex].active = false;

        })));
        this.centerGroups[lastCenterGroupIndex].runAction(cc.sequence(cc.moveTo(moveTime, cc.v2(0, 0)), cc.callFunc(() => {
        })));

        this.curCenterGroupIndex = lastCenterGroupIndex;


    }
}
