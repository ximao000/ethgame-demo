import { IRobot } from "../Model/RobotProp";

export interface IFriend {
    id: number,
    iconId: number,
    name: string,
    robot: IRobot,
    getEnergy: boolean,

}