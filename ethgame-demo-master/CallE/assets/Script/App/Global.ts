import { LocMsg } from "../BaseModel/MsgEvent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Global extends cc.Component {

    private static _inst: Global = null;
    public static get Inst() {
        return this._inst;
    }

    onLoad(): void {
        Global._inst = this;
    }
    Emit(event: string | LocMsg, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) {
        this.node.emit(event.toString(), arg1, arg2, arg3, arg4, arg5);
    }

    On(event: string | LocMsg, callback: Function, target?: any, useCapture?: boolean) {
        this.node.on(event.toString(), callback, target, useCapture);
    }

    Once(event: string | LocMsg, callback: Function, target?: any, useCapture?: boolean) {
        this.node.once(event.toString(), callback, target, useCapture);
    }

    Off(event: string | LocMsg, callback?: Function, target?: any, useCapture?: boolean) {
        this.node.off(event.toString(), callback, target, useCapture);
    }

    // update (dt) {}
}
