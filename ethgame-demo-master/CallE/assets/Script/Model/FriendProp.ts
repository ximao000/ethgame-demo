import { IRobot } from "./RobotProp";

export interface IFriend {
    id: number,
    iconId: number,
    name: string,
    curRobotUse: IRobot,
    // TODO 能量；
}