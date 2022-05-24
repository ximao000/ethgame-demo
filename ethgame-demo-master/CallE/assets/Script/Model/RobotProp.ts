export interface IRobot {
    id: number,
    robotImgId: number,
    robotType: RobotType,
    level: number,//等级
    mint: number,//合成次数
    sol: number,//sol价格

    // 属性
    efficiency: number,//效率
    luck: number,//幸运
    loss: number,//损耗

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
    [RobotType.TYPE_1]: "初级机器人",
    [RobotType.TYPE_2]: "中级机器人",
    [RobotType.TYPE_3]: "高级机器人",
    [RobotType.TYPE_4]: "史诗机器人",
}