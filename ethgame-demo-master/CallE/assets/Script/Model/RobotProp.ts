export interface IRobot {
    id: number,
    robotImgId: number,
    robotType: RobotType,
    level: number,//等级
    mint: number,//合成次数
    maticCost: number,//sol价格

    // 属性
    efficiency: number,//效率
    luck: number,//幸运
    pow: number,//损耗
    intMin: number,//转化
    intMax: number,//转化

}


// 4种类型
export const RobotTypeCount = 4;
export enum RobotType {
    TYPE_1,
    TYPE_2,
    TYPE_3,
    TYPE_4,
};

// 
export const RobotTypeDesc = {
    [RobotType.TYPE_1]: "A-ROBOT",
    [RobotType.TYPE_2]: "B-ROBOT",
    [RobotType.TYPE_3]: "C-ROBOT",
    [RobotType.TYPE_4]: "D-ROBOT",
}


export function DefaultShopInfo(): IRobot[] {
    let data: IRobot[] = [];

    for (let index = 0; index < 20; index++) {
        let robotType = index % RobotTypeCount;
        let robot: IRobot = {
            id: Math.ceil(Math.random() * 1000000) + 5000000,
            robotImgId: index % RobotTypeCount,
            mint: Math.ceil(Math.random() * 7),
            maticCost: index,
            level: index,
            robotType: robotType,
            efficiency: Math.ceil(Math.random() * 10),
            luck: Math.ceil(Math.random() * 10),
            pow: Math.ceil(Math.random() * 10),
            intMin: [1, 3, 5, 7][robotType],
            intMax: [3, 5, 7, 10][robotType],
        }
        data.push(robot);

    }
    return data;
}