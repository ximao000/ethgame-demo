
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/App/Global');
require('./assets/Script/Backpack/BackpackItem');
require('./assets/Script/Backpack/UI_BackPackScrollView');
require('./assets/Script/BaseModel/MsgEvent');
require('./assets/Script/Friend/FriendItem');
require('./assets/Script/Friend/FriendProp');
require('./assets/Script/Friend/UI_FriendScrollView');
require('./assets/Script/MainScene/MainSceneCtrl');
require('./assets/Script/MainScene/RobotInforCtrl');
require('./assets/Script/Model/RobotProp');
require('./assets/Script/Shop/ShopItem');
require('./assets/Script/Shop/UI_ShopScrollView');

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