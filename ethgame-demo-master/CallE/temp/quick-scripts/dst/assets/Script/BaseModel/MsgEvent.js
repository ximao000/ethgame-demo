
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BaseModel/MsgEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3cd1JYg2VCYKaVbTtYPT5I', 'MsgEvent');
// Script/BaseModel/MsgEvent.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocMsg = void 0;
var LocMsg;
(function (LocMsg) {
    // 展示详情页；
    LocMsg[LocMsg["SHOW_ROBOT_INFOR"] = 0] = "SHOW_ROBOT_INFOR";
    // 更新Matic个数；
    LocMsg[LocMsg["UPDATE_MARIC_NUM"] = 1] = "UPDATE_MARIC_NUM";
    // 更新商城数据；
    LocMsg[LocMsg["UPDATE_SHOP_DATA"] = 2] = "UPDATE_SHOP_DATA";
    // 更新背包数据；
    LocMsg[LocMsg["UPDATE_BACK_PACK_DATA"] = 3] = "UPDATE_BACK_PACK_DATA";
    // 更新详情页；
    LocMsg[LocMsg["UPDATE_ROBOT_INFOR"] = 4] = "UPDATE_ROBOT_INFOR";
    // 更新当前使用小人；
    LocMsg[LocMsg["UPDATE_CUR_ROBOT_INFOR"] = 5] = "UPDATE_CUR_ROBOT_INFOR";
    // update energy info
    LocMsg[LocMsg["UPDATE_Energy_INFOR"] = 6] = "UPDATE_Energy_INFOR";
    LocMsg[LocMsg["SHOW_FRIEND_Energy_INFOR"] = 7] = "SHOW_FRIEND_Energy_INFOR";
    // 更新收集的能量；
    LocMsg[LocMsg["UPDATE_COLLECT_ENERGY"] = 8] = "UPDATE_COLLECT_ENERGY";
    // 更新hal；
    LocMsg[LocMsg["UPDATE_HAL_COUNT"] = 9] = "UPDATE_HAL_COUNT";
    // 切换组别 ；
    LocMsg[LocMsg["CHANGE_GROUP_BY_INDEX"] = 10] = "CHANGE_GROUP_BY_INDEX";
    //展示toast
    LocMsg[LocMsg["SHOW_TOAST"] = 11] = "SHOW_TOAST";
})(LocMsg = exports.LocMsg || (exports.LocMsg = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlTW9kZWxcXE1zZ0V2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksTUEwQlg7QUExQkQsV0FBWSxNQUFNO0lBQ2QsU0FBUztJQUNULDJEQUFnQixDQUFBO0lBQ2hCLGFBQWE7SUFDYiwyREFBZ0IsQ0FBQTtJQUNoQixVQUFVO0lBQ1YsMkRBQWdCLENBQUE7SUFDaEIsVUFBVTtJQUNWLHFFQUFxQixDQUFBO0lBQ3JCLFNBQVM7SUFDVCwrREFBa0IsQ0FBQTtJQUNsQixZQUFZO0lBQ1osdUVBQXNCLENBQUE7SUFDdEIscUJBQXFCO0lBQ3JCLGlFQUFtQixDQUFBO0lBQ25CLDJFQUF3QixDQUFBO0lBQ3hCLFdBQVc7SUFDWCxxRUFBcUIsQ0FBQTtJQUNyQixTQUFTO0lBQ1QsMkRBQWdCLENBQUE7SUFDaEIsU0FBUztJQUNULHNFQUFxQixDQUFBO0lBRXJCLFNBQVM7SUFDVCxnREFBVSxDQUFBO0FBRWQsQ0FBQyxFQTFCVyxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUEwQmpCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gTG9jTXNnIHtcclxuICAgIC8vIOWxleekuuivpuaDhemhte+8m1xyXG4gICAgU0hPV19ST0JPVF9JTkZPUixcclxuICAgIC8vIOabtOaWsE1hdGlj5Liq5pWw77ybXHJcbiAgICBVUERBVEVfTUFSSUNfTlVNLFxyXG4gICAgLy8g5pu05paw5ZWG5Z+O5pWw5o2u77ybXHJcbiAgICBVUERBVEVfU0hPUF9EQVRBLFxyXG4gICAgLy8g5pu05paw6IOM5YyF5pWw5o2u77ybXHJcbiAgICBVUERBVEVfQkFDS19QQUNLX0RBVEEsXHJcbiAgICAvLyDmm7TmlrDor6bmg4XpobXvvJtcclxuICAgIFVQREFURV9ST0JPVF9JTkZPUixcclxuICAgIC8vIOabtOaWsOW9k+WJjeS9v+eUqOWwj+S6uu+8m1xyXG4gICAgVVBEQVRFX0NVUl9ST0JPVF9JTkZPUixcclxuICAgIC8vIHVwZGF0ZSBlbmVyZ3kgaW5mb1xyXG4gICAgVVBEQVRFX0VuZXJneV9JTkZPUixcclxuICAgIFNIT1dfRlJJRU5EX0VuZXJneV9JTkZPUixcclxuICAgIC8vIOabtOaWsOaUtumbhueahOiDvemHj++8m1xyXG4gICAgVVBEQVRFX0NPTExFQ1RfRU5FUkdZLFxyXG4gICAgLy8g5pu05pawaGFs77ybXHJcbiAgICBVUERBVEVfSEFMX0NPVU5ULFxyXG4gICAgLy8g5YiH5o2i57uE5YirIO+8m1xyXG4gICAgQ0hBTkdFX0dST1VQX0JZX0lOREVYLFxyXG5cclxuICAgIC8v5bGV56S6dG9hc3RcclxuICAgIFNIT1dfVE9BU1QsXHJcblxyXG59Il19