
(function () {
var scripts = [{"deps":{"./assets/Script/BaseModel/MsgEvent":7,"./assets/Script/Loading/Loading":8,"./assets/Script/Manager/DataManager":11,"./assets/Script/BaseModel/DataHelper":13,"./assets/Script/Energy/EnergyProp":14,"./assets/Script/BaseModel/Types":15,"./assets/Script/Model/FriendProp":22,"./assets/Script/Utils/Utils":23,"./assets/Script/Model/RobotProp":24,"./assets/Script/Backpack/UI_BackPackScrollView":1,"./assets/Script/Friend/UI_FriendScrollView":2,"./assets/Script/Energy/EnergyItem":4,"./assets/Script/MainScene/GroupCtrl/HomeGroupCtrl":3,"./assets/Script/Shop/UI_ShopScrollView":5,"./assets/Script/Utils/LocalDataAPI":6,"./assets/Script/Model/PlayerProp":9,"./assets/Script/App/Global":10,"./assets/Script/Backpack/BackpackItem":12,"./assets/Script/MainScene/ToastCtrl":16,"./assets/Script/Friend/FriendItem":18,"./assets/Script/MainScene/RobotInforCtrl":19,"./assets/Script/MainScene/MainSceneCtrl":20,"./assets/Script/Shop/ShopItem":25,"./assets/Script/Energy/FriendEnergyItem":26,"./assets/Script/MainScene/GroupCtrl/FriendEnergyGroupCtrl":17,"./assets/Script/MainScene/GroupCtrl/StartEnergyGroupCtrl":21},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../App/Global":10,"../BaseModel/MsgEvent":7,"../Manager/DataManager":11,"./BackpackItem":12,"../BaseModel/Types":15},"path":"preview-scripts/assets/Script/Backpack/UI_BackPackScrollView.js"},{"deps":{"../BaseModel/Types":15,"../Manager/DataManager":11,"./FriendItem":18},"path":"preview-scripts/assets/Script/Friend/UI_FriendScrollView.js"},{"deps":{"../../App/Global":10,"../../BaseModel/MsgEvent":7,"../../BaseModel/Types":15,"../../Energy/EnergyProp":14,"../../Manager/DataManager":11,"../../Utils/LocalDataAPI":6,"../../Utils/Utils":23,"../RobotInforCtrl":19},"path":"preview-scripts/assets/Script/MainScene/GroupCtrl/HomeGroupCtrl.js"},{"deps":{"../BaseModel/Types":15,"../Manager/DataManager":11,"../Utils/LocalDataAPI":6,"./EnergyProp":14},"path":"preview-scripts/assets/Script/Energy/EnergyItem.js"},{"deps":{"../BaseModel/MsgEvent":7,"../App/Global":10,"../Manager/DataManager":11,"../BaseModel/Types":15,"./ShopItem":25},"path":"preview-scripts/assets/Script/Shop/UI_ShopScrollView.js"},{"deps":{"../App/Global":10,"../MainScene/RobotInforCtrl":19,"../BaseModel/MsgEvent":7,"../Energy/EnergyProp":14,"../BaseModel/Types":15,"./Utils":23,"../Manager/DataManager":11},"path":"preview-scripts/assets/Script/Utils/LocalDataAPI.js"},{"deps":{},"path":"preview-scripts/assets/Script/BaseModel/MsgEvent.js"},{"deps":{},"path":"preview-scripts/assets/Script/Loading/Loading.js"},{"deps":{"./RobotProp":24},"path":"preview-scripts/assets/Script/Model/PlayerProp.js"},{"deps":{"../Manager/DataManager":11,"../Model/PlayerProp":9,"../BaseModel/Types":15,"../Model/RobotProp":24,"../Utils/Utils":23,"../Utils/LocalDataAPI":6,"../Energy/EnergyProp":14},"path":"preview-scripts/assets/Script/App/Global.js"},{"deps":{},"path":"preview-scripts/assets/Script/Manager/DataManager.js"},{"deps":{"../App/Global":10,"../BaseModel/MsgEvent":7,"../BaseModel/Types":15,"../Manager/DataManager":11,"../MainScene/RobotInforCtrl":19,"../Utils/LocalDataAPI":6,"../Model/RobotProp":24},"path":"preview-scripts/assets/Script/Backpack/BackpackItem.js"},{"deps":{},"path":"preview-scripts/assets/Script/BaseModel/DataHelper.js"},{"deps":{},"path":"preview-scripts/assets/Script/Energy/EnergyProp.js"},{"deps":{},"path":"preview-scripts/assets/Script/BaseModel/Types.js"},{"deps":{"../BaseModel/MsgEvent":7,"../App/Global":10},"path":"preview-scripts/assets/Script/MainScene/ToastCtrl.js"},{"deps":{"../../Manager/DataManager":11,"../../Energy/EnergyProp":14,"../../App/Global":10,"../../BaseModel/Types":15,"../../BaseModel/MsgEvent":7},"path":"preview-scripts/assets/Script/MainScene/GroupCtrl/FriendEnergyGroupCtrl.js"},{"deps":{"../App/Global":10,"../BaseModel/MsgEvent":7},"path":"preview-scripts/assets/Script/Friend/FriendItem.js"},{"deps":{"../App/Global":10,"../BaseModel/MsgEvent":7,"../Model/RobotProp":24,"../Utils/LocalDataAPI":6},"path":"preview-scripts/assets/Script/MainScene/RobotInforCtrl.js"},{"deps":{"../App/Global":10,"../BaseModel/MsgEvent":7,"../Manager/DataManager":11,"../BaseModel/Types":15,"./RobotInforCtrl":19},"path":"preview-scripts/assets/Script/MainScene/MainSceneCtrl.js"},{"deps":{"../../Utils/LocalDataAPI":6,"../../Energy/EnergyProp":14,"../../Manager/DataManager":11,"../../BaseModel/Types":15},"path":"preview-scripts/assets/Script/MainScene/GroupCtrl/StartEnergyGroupCtrl.js"},{"deps":{},"path":"preview-scripts/assets/Script/Model/FriendProp.js"},{"deps":{},"path":"preview-scripts/assets/Script/Utils/Utils.js"},{"deps":{},"path":"preview-scripts/assets/Script/Model/RobotProp.js"},{"deps":{"../App/Global":10,"../BaseModel/MsgEvent":7,"../Model/RobotProp":24,"../MainScene/RobotInforCtrl":19,"../Utils/LocalDataAPI":6},"path":"preview-scripts/assets/Script/Shop/ShopItem.js"},{"deps":{"../BaseModel/Types":15,"../Manager/DataManager":11,"../Utils/LocalDataAPI":6,"./EnergyProp":14},"path":"preview-scripts/assets/Script/Energy/FriendEnergyItem.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    