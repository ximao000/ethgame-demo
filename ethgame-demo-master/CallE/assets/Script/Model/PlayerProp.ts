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
    canChangeEnergyNumMax: number,


    // 好友
    friendList: IFriend[],



    //TODO？？？？？能量
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
        canChangeEnergyNumMax: 0,
        friendList: []
    }

    for (let index = 0; index < 20; index++) {
        let friend: IFriend = {
            id: index,
            iconId: Math.floor(Math.random() * 6),
            name: "名字" + index,
            curRobotUse: {
                id: Math.ceil(Math.random() * 1000000) + 1000000,
                robotImgId: index % RobotTypeCount,
                mint: index,
                level: index,
                robotType: index % RobotTypeCount,
                efficiency: Math.ceil(Math.random() * 100) / 100,
                luck: Math.ceil(Math.random() * 100) / 100,
                loss: Math.ceil(Math.random() * 100) / 100,
                maticCost: 0
            }
            // TODO 能量
        }
        data.friendList.push(friend);

    }
    return data;
}