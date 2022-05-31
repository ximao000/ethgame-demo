
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/RobotProp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcUm9ib3RQcm9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkEsT0FBTztBQUNNLFFBQUEsY0FBYyxHQUFHLENBQUMsQ0FBQztBQUNoQyxJQUFZLFNBS1g7QUFMRCxXQUFZLFNBQVM7SUFDakIsNkNBQU0sQ0FBQTtJQUNOLDZDQUFNLENBQUE7SUFDTiw2Q0FBTSxDQUFBO0lBQ04sNkNBQU0sQ0FBQTtBQUNWLENBQUMsRUFMVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUtwQjtBQUFBLENBQUM7QUFFRixHQUFHO0FBQ1UsUUFBQSxhQUFhO0lBQ3RCLEdBQUMsU0FBUyxDQUFDLE1BQU0sSUFBRyxTQUFTO0lBQzdCLEdBQUMsU0FBUyxDQUFDLE1BQU0sSUFBRyxTQUFTO0lBQzdCLEdBQUMsU0FBUyxDQUFDLE1BQU0sSUFBRyxTQUFTO0lBQzdCLEdBQUMsU0FBUyxDQUFDLE1BQU0sSUFBRyxTQUFTO1FBQ2hDO0FBR0QsU0FBZ0IsZUFBZTtJQUMzQixJQUFJLElBQUksR0FBYSxFQUFFLENBQUM7SUFFeEIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNyQyxJQUFJLFNBQVMsR0FBRyxLQUFLLEdBQUcsc0JBQWMsQ0FBQztRQUN2QyxJQUFJLEtBQUssR0FBVztZQUNoQixFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsT0FBTztZQUNoRCxVQUFVLEVBQUUsS0FBSyxHQUFHLHNCQUFjO1lBQ2xDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbEMsU0FBUyxFQUFFLEtBQUs7WUFDaEIsS0FBSyxFQUFFLEtBQUs7WUFDWixTQUFTLEVBQUUsU0FBUztZQUNwQixVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ3pDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDbkMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNsQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDL0IsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDO1NBQ25DLENBQUE7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBRXBCO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQXRCRCwwQ0FzQkMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElSb2JvdCB7XHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgcm9ib3RJbWdJZDogbnVtYmVyLFxyXG4gICAgcm9ib3RUeXBlOiBSb2JvdFR5cGUsXHJcbiAgICBsZXZlbDogbnVtYmVyLC8v562J57qnXHJcbiAgICBtaW50OiBudW1iZXIsLy/lkIjmiJDmrKHmlbBcclxuICAgIG1hdGljQ29zdDogbnVtYmVyLC8vc29s5Lu35qC8XHJcblxyXG4gICAgLy8g5bGe5oCnXHJcbiAgICBlZmZpY2llbmN5OiBudW1iZXIsLy/mlYjnjodcclxuICAgIGx1Y2s6IG51bWJlciwvL+W5uOi/kFxyXG4gICAgcG93OiBudW1iZXIsLy/mjZ/ogJdcclxuICAgIGludE1pbjogbnVtYmVyLC8v6L2s5YyWXHJcbiAgICBpbnRNYXg6IG51bWJlciwvL+i9rOWMllxyXG5cclxufVxyXG5cclxuXHJcbi8vIDTnp43nsbvlnotcclxuZXhwb3J0IGNvbnN0IFJvYm90VHlwZUNvdW50ID0gNDtcclxuZXhwb3J0IGVudW0gUm9ib3RUeXBlIHtcclxuICAgIFRZUEVfMSxcclxuICAgIFRZUEVfMixcclxuICAgIFRZUEVfMyxcclxuICAgIFRZUEVfNCxcclxufTtcclxuXHJcbi8vIFxyXG5leHBvcnQgY29uc3QgUm9ib3RUeXBlRGVzYyA9IHtcclxuICAgIFtSb2JvdFR5cGUuVFlQRV8xXTogXCJBLVJPQk9UXCIsXHJcbiAgICBbUm9ib3RUeXBlLlRZUEVfMl06IFwiQi1ST0JPVFwiLFxyXG4gICAgW1JvYm90VHlwZS5UWVBFXzNdOiBcIkMtUk9CT1RcIixcclxuICAgIFtSb2JvdFR5cGUuVFlQRV80XTogXCJELVJPQk9UXCIsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGVmYXVsdFNob3BJbmZvKCk6IElSb2JvdFtdIHtcclxuICAgIGxldCBkYXRhOiBJUm9ib3RbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyMDsgaW5kZXgrKykge1xyXG4gICAgICAgIGxldCByb2JvdFR5cGUgPSBpbmRleCAlIFJvYm90VHlwZUNvdW50O1xyXG4gICAgICAgIGxldCByb2JvdDogSVJvYm90ID0ge1xyXG4gICAgICAgICAgICBpZDogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKSArIDUwMDAwMDAsXHJcbiAgICAgICAgICAgIHJvYm90SW1nSWQ6IGluZGV4ICUgUm9ib3RUeXBlQ291bnQsXHJcbiAgICAgICAgICAgIG1pbnQ6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogNyksXHJcbiAgICAgICAgICAgIG1hdGljQ29zdDogaW5kZXgsXHJcbiAgICAgICAgICAgIGxldmVsOiBpbmRleCxcclxuICAgICAgICAgICAgcm9ib3RUeXBlOiByb2JvdFR5cGUsXHJcbiAgICAgICAgICAgIGVmZmljaWVuY3k6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTApLFxyXG4gICAgICAgICAgICBsdWNrOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwKSxcclxuICAgICAgICAgICAgcG93OiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwKSxcclxuICAgICAgICAgICAgaW50TWluOiBbMSwgMywgNSwgN11bcm9ib3RUeXBlXSxcclxuICAgICAgICAgICAgaW50TWF4OiBbMywgNSwgNywgMTBdW3JvYm90VHlwZV0sXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEucHVzaChyb2JvdCk7XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn0iXX0=