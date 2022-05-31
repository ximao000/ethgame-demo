import { IRobot } from "./RobotProp";

export interface IFriend {
    id: number,
    iconId: number,
    name: string,
    curRobotUse: IRobot,
    // TODO 能量；

    // 好友总共的绿色出行创造的能量
    totalCreatEnergy: number,
}