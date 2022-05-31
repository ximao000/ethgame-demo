"use strict";
cc._RF.push(module, 'c991cE0JQFEwrswkY82Kriq', 'RobotProp');
// Script/Model/RobotProp.ts

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultShopInfo = exports.RobotTypeDesc = exports.RobotType = exports.RobotTypeCount = void 0;
// 4种类型
exports.RobotTypeCount = 4;
var RobotType;
(function (RobotType) {
    RobotType[RobotType["TYPE_1"] = 0] = "TYPE_1";
    RobotType[RobotType["TYPE_2"] = 1] = "TYPE_2";
    RobotType[RobotType["TYPE_3"] = 2] = "TYPE_3";
    RobotType[RobotType["TYPE_4"] = 3] = "TYPE_4";
})(RobotType = exports.RobotType || (exports.RobotType = {}));
;
// 
exports.RobotTypeDesc = (_a = {},
    _a[RobotType.TYPE_1] = "A-ROBOT",
    _a[RobotType.TYPE_2] = "B-ROBOT",
    _a[RobotType.TYPE_3] = "C-ROBOT",
    _a[RobotType.TYPE_4] = "D-ROBOT",
    _a);
function DefaultShopInfo() {
    var data = [];
    for (var index = 0; index < 20; index++) {
        var robotType = index % exports.RobotTypeCount;
        var robot = {
            id: Math.ceil(Math.random() * 1000000) + 5000000,
            robotImgId: index % exports.RobotTypeCount,
            mint: Math.ceil(Math.random() * 7),
            maticCost: index,
            level: index,
            robotType: robotType,
            efficiency: Math.ceil(Math.random() * 10),
            luck: Math.ceil(Math.random() * 10),
            pow: Math.ceil(Math.random() * 10),
            intMin: [1, 3, 5, 7][robotType],
            intMax: [3, 5, 7, 10][robotType],
        };
        data.push(robot);
    }
    return data;
}
exports.DefaultShopInfo = DefaultShopInfo;

cc._RF.pop();