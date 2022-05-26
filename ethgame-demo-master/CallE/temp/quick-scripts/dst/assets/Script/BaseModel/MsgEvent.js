
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
    // 更新详情页；
    LocMsg[LocMsg["UPDATE_ROBOT_INFOR"] = 3] = "UPDATE_ROBOT_INFOR";
    // 更新当前使用小人；
    LocMsg[LocMsg["UPDATE_CUR_ROBOT_INFOR"] = 4] = "UPDATE_CUR_ROBOT_INFOR";
    // update energy info
    LocMsg[LocMsg["UPDATE_Energy_INFOR"] = 5] = "UPDATE_Energy_INFOR";
    //
    LocMsg[LocMsg["SHOW_FRIEND_Energy_INFOR"] = 6] = "SHOW_FRIEND_Energy_INFOR";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlTW9kZWxcXE1zZ0V2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksTUFlWDtBQWZELFdBQVksTUFBTTtJQUNkLFNBQVM7SUFDVCwyREFBZ0IsQ0FBQTtJQUNoQixhQUFhO0lBQ2IsMkRBQWdCLENBQUE7SUFDaEIsVUFBVTtJQUNWLDJEQUFnQixDQUFBO0lBQ2hCLFNBQVM7SUFDVCwrREFBa0IsQ0FBQTtJQUNsQixZQUFZO0lBQ1osdUVBQXNCLENBQUE7SUFDdEIscUJBQXFCO0lBQ3JCLGlFQUFtQixDQUFBO0lBQ25CLEVBQUU7SUFDRiwyRUFBd0IsQ0FBQTtBQUM1QixDQUFDLEVBZlcsTUFBTSxHQUFOLGNBQU0sS0FBTixjQUFNLFFBZWpCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gTG9jTXNnIHtcbiAgICAvLyDlsZXnpLror6bmg4XpobXvvJtcbiAgICBTSE9XX1JPQk9UX0lORk9SLFxuICAgIC8vIOabtOaWsE1hdGlj5Liq5pWw77ybXG4gICAgVVBEQVRFX01BUklDX05VTSxcbiAgICAvLyDmm7TmlrDllYbln47mlbDmja7vvJtcbiAgICBVUERBVEVfU0hPUF9EQVRBLFxuICAgIC8vIOabtOaWsOivpuaDhemhte+8m1xuICAgIFVQREFURV9ST0JPVF9JTkZPUixcbiAgICAvLyDmm7TmlrDlvZPliY3kvb/nlKjlsI/kurrvvJtcbiAgICBVUERBVEVfQ1VSX1JPQk9UX0lORk9SLFxuICAgIC8vIHVwZGF0ZSBlbmVyZ3kgaW5mb1xuICAgIFVQREFURV9FbmVyZ3lfSU5GT1IsXG4gICAgLy9cbiAgICBTSE9XX0ZSSUVORF9FbmVyZ3lfSU5GT1IsXG59Il19