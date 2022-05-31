import { IFriend } from "./FriendProp";
import { IRobot, RobotTypeCount } from "./RobotProp";

export interface IPlayerInfo {
    id: number,
    name: string,
    //拥有的机器人
    robotList: IRobot[],
    //当前装扮的机器人
    curRobotUse: IRobot;
    // 第三方货币
    maticCount: number,
    // 游戏代币
    halCount: number,
    aceCount: number,

    // 收集能量数
    collectEnergyCount: number,
    // 已经用掉的转换数
    hadChangeEnergyNum: number,
    // 总共可以转化数
    canChangeEnergyNumTotal: number,


    // 好友
    friendList: IFriend[],



    //TODO？？？？？能量

    timeReseat: number;
}

export function DefaultPlayerInfo(): IPlayerInfo {
    let data: IPlayerInfo = {
        id: 0,
        name: "Call-E",
        robotList: [],
        curRobotUse: null,
        maticCount: 9999,
        halCount: 10,
        aceCount: 20,
        collectEnergyCount: 5,
        hadChangeEnergyNum: 0,
        canChangeEnergyNumTotal: 0,
        friendList: [],
        timeReseat: 0
    }

    for (let index = 0; index < 20; index++) {
        let robotType = index % RobotTypeCount;
        let friend: IFriend = {
            id: index,
            iconId: Math.floor(Math.random() * 4),
            name: "A-CallE-" + index,
            curRobotUse: {
                id: Math.ceil(Math.random() * 1000000) + 5000000,
                robotImgId: index % RobotTypeCount,
                mint: index,
                maticCost: index,
                level: index,
                robotType: robotType,
                efficiency: Math.ceil(Math.random() * 10),
                luck: Math.ceil(Math.random() * 10),
                pow: Math.ceil(Math.random() * 10),
                intMin: [1, 3, 5, 7][robotType],
                intMax: [3, 5, 7, 10][robotType],
            }
            // TODO 能量
            ,
            totalCreatEnergy: Math.floor(Math.random() * 1000) / 10
        }
        data.friendList.push(friend);

    }
    return data;
}