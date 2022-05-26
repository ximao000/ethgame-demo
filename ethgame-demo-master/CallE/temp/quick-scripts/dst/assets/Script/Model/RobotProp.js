
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
    _a[RobotType.TYPE_1] = "初级机器人",
    _a[RobotType.TYPE_2] = "中级机器人",
    _a[RobotType.TYPE_3] = "高级机器人",
    _a[RobotType.TYPE_4] = "史诗机器人",
    _a);
function DefaultShopInfo() {
    var data = [];
    for (var index = 0; index < 20; index++) {
        var robot = {
            id: Math.ceil(Math.random() * 1000000) + 5000000,
            robotImgId: index % exports.RobotTypeCount,
            mint: index,
            maticCost: index,
            level: index,
            robotType: index % exports.RobotTypeCount,
            efficiency: Math.ceil(Math.random() * 10) / 10,
            luck: Math.ceil(Math.random() * 10) / 10,
            loss: Math.ceil(Math.random() * 10) / 10
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcUm9ib3RQcm9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsT0FBTztBQUNNLFFBQUEsY0FBYyxHQUFHLENBQUMsQ0FBQztBQUNoQyxJQUFZLFNBS1g7QUFMRCxXQUFZLFNBQVM7SUFDakIsNkNBQU0sQ0FBQTtJQUNOLDZDQUFNLENBQUE7SUFDTiw2Q0FBTSxDQUFBO0lBQ04sNkNBQU0sQ0FBQTtBQUNWLENBQUMsRUFMVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUtwQjtBQUFBLENBQUM7QUFFRixHQUFHO0FBQ1UsUUFBQSxhQUFhO0lBQ3RCLEdBQUMsU0FBUyxDQUFDLE1BQU0sSUFBRyxPQUFPO0lBQzNCLEdBQUMsU0FBUyxDQUFDLE1BQU0sSUFBRyxPQUFPO0lBQzNCLEdBQUMsU0FBUyxDQUFDLE1BQU0sSUFBRyxPQUFPO0lBQzNCLEdBQUMsU0FBUyxDQUFDLE1BQU0sSUFBRyxPQUFPO1FBQzlCO0FBR0QsU0FBZ0IsZUFBZTtJQUMzQixJQUFJLElBQUksR0FBYSxFQUFFLENBQUM7SUFFeEIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNyQyxJQUFJLEtBQUssR0FBVztZQUNoQixFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsT0FBTztZQUNoRCxVQUFVLEVBQUUsS0FBSyxHQUFHLHNCQUFjO1lBQ2xDLElBQUksRUFBRSxLQUFLO1lBQ1gsU0FBUyxFQUFFLEtBQUs7WUFDaEIsS0FBSyxFQUFFLEtBQUs7WUFDWixTQUFTLEVBQUUsS0FBSyxHQUFHLHNCQUFjO1lBQ2pDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFO1lBQzlDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFO1lBQ3hDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFO1NBQzNDLENBQUE7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBRXBCO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQW5CRCwwQ0FtQkMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElSb2JvdCB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByb2JvdEltZ0lkOiBudW1iZXIsXG4gICAgcm9ib3RUeXBlOiBSb2JvdFR5cGUsXG4gICAgbGV2ZWw6IG51bWJlciwvL+etiee6p1xuICAgIG1pbnQ6IG51bWJlciwvL+WQiOaIkOasoeaVsFxuICAgIG1hdGljQ29zdDogbnVtYmVyLC8vc29s5Lu35qC8XG5cbiAgICAvLyDlsZ7mgKdcbiAgICBlZmZpY2llbmN5OiBudW1iZXIsLy/mlYjnjodcbiAgICBsdWNrOiBudW1iZXIsLy/lubjov5BcbiAgICBsb3NzOiBudW1iZXIsLy/mjZ/ogJdcblxufVxuXG5cbi8vIDTnp43nsbvlnotcbmV4cG9ydCBjb25zdCBSb2JvdFR5cGVDb3VudCA9IDQ7XG5leHBvcnQgZW51bSBSb2JvdFR5cGUge1xuICAgIFRZUEVfMSxcbiAgICBUWVBFXzIsXG4gICAgVFlQRV8zLFxuICAgIFRZUEVfNCxcbn07XG5cbi8vIFxuZXhwb3J0IGNvbnN0IFJvYm90VHlwZURlc2MgPSB7XG4gICAgW1JvYm90VHlwZS5UWVBFXzFdOiBcIuWInee6p+acuuWZqOS6ulwiLFxuICAgIFtSb2JvdFR5cGUuVFlQRV8yXTogXCLkuK3nuqfmnLrlmajkurpcIixcbiAgICBbUm9ib3RUeXBlLlRZUEVfM106IFwi6auY57qn5py65Zmo5Lq6XCIsXG4gICAgW1JvYm90VHlwZS5UWVBFXzRdOiBcIuWPsuivl+acuuWZqOS6ulwiLFxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBEZWZhdWx0U2hvcEluZm8oKTogSVJvYm90W10ge1xuICAgIGxldCBkYXRhOiBJUm9ib3RbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDIwOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCByb2JvdDogSVJvYm90ID0ge1xuICAgICAgICAgICAgaWQ6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMDAwMCkgKyA1MDAwMDAwLFxuICAgICAgICAgICAgcm9ib3RJbWdJZDogaW5kZXggJSBSb2JvdFR5cGVDb3VudCxcbiAgICAgICAgICAgIG1pbnQ6IGluZGV4LFxuICAgICAgICAgICAgbWF0aWNDb3N0OiBpbmRleCxcbiAgICAgICAgICAgIGxldmVsOiBpbmRleCxcbiAgICAgICAgICAgIHJvYm90VHlwZTogaW5kZXggJSBSb2JvdFR5cGVDb3VudCxcbiAgICAgICAgICAgIGVmZmljaWVuY3k6IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTApIC8gMTAsXG4gICAgICAgICAgICBsdWNrOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwKSAvIDEwLFxuICAgICAgICAgICAgbG9zczogTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMCkgLyAxMFxuICAgICAgICB9XG4gICAgICAgIGRhdGEucHVzaChyb2JvdCk7XG5cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59Il19