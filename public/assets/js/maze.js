/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/inputText.ts":
/*!************************************!*\
  !*** ./src/component/inputText.ts ***!
  \************************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
var Component;
(function (Component) {
    class InputText extends Phaser.Text {
        constructor(game, x, y, width, height, maxLength, text, style) {
            super(game, x, y, text, style);
            this.isFocus = false;
            this.placeholder = 'Input Text';
            if (text.length == 0) {
                text = this.placeholder;
            }
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.text = text;
            this.maxLength = maxLength ? maxLength : 20;
            let group = this.game.add.group();
            let graphics = this.game.make.graphics();
            graphics.lineStyle(2, 0x000000, 1);
            // graphics.beginFill(0xFF700B, 1);
            graphics.drawRect(x, y, width, height);
            // graphics.endFill();
            group.add(graphics);
            this.phaserText = this.game.add.text(x, y, text, style);
            this.phaserText.setTextBounds(0, 0, width, height);
            this.phaserText.alpha = 0.6;
            this.phaserText.inputEnabled = true;
            this.phaserText.events.onInputDown.add((sprite, pointer) => {
                this.isFocus = true;
                this.phaserText.alpha = 1;
            }, this);
            this.game.input.onDown.add((sprite, pointer) => {
                let textX = this.phaserText.world.x;
                let textWidth = this.phaserText.width;
                let textY = this.phaserText.world.y;
                let textHeight = this.phaserText.height;
                if (pointer.clientX > textX && pointer.clientX <= textX + textWidth) {
                    if (pointer.clientY > textY && pointer.clientY <= textY + textHeight) {
                        this.isFocus = true;
                        this.phaserText.alpha = 1;
                        return;
                    }
                }
                this.phaserText.alpha = 0.6;
                this.isFocus = false;
            }, this);
            this.game.input.keyboard.addCallbacks(this, (e) => {
                if (!this.isFocus) {
                    return;
                }
                if (e.keyCode == Phaser.Keyboard.BACKSPACE) {
                    this.phaserText.text = this.phaserText.text.slice(0, -1);
                    return;
                }
                if (this.phaserText.text.length + 1 > this.maxLength) {
                    return;
                }
                this.phaserText.text += e.key;
                this.text = this.phaserText.text;
            });
        }
        render() {
        }
    }
    Component.InputText = InputText;
})(Component || (Component = {}));


/***/ }),

/***/ "./src/controller/serviceController.ts":
/*!*********************************************!*\
  !*** ./src/controller/serviceController.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServiceController; });
/* harmony import */ var _services_stageService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/stageService */ "./src/services/stageService.ts");
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authService */ "./src/services/authService.ts");
/* harmony import */ var _services_recordService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/recordService */ "./src/services/recordService.ts");
/* harmony import */ var _services_rankService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/rankService */ "./src/services/rankService.ts");




class ServiceController {
    constructor(game) {
        this.game = game;
        this.stageService = new _services_stageService__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.authService = new _services_authService__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.recordService = new _services_recordService__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.rankService = new _services_rankService__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.stateController = game.stateController;
    }
    login(userId, callback) {
        this.authService.login(userId, callback);
    }
    registerUser(user) {
        this.authService.registerUser(user);
    }
    getRecord() {
        const userId = this.authService.getLastLoggedInUser().userId;
        const record = this.recordService.getRecord(userId);
        return record;
    }
    getStageInformation() {
        return this.stageService.getStageInformation();
    }
    recordRank(record) {
        this.recordService.setRecord(record);
    }
}


/***/ }),

/***/ "./src/controller/stateController.ts":
/*!*******************************************!*\
  !*** ./src/controller/stateController.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StateController; });
/* harmony import */ var _state_intro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/intro */ "./src/state/intro.ts");
/* harmony import */ var _state_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/login */ "./src/state/login.ts");
/* harmony import */ var _state_level__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/level */ "./src/state/level.ts");
/* harmony import */ var _state_play__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/play */ "./src/state/play.ts");
/* harmony import */ var _state_register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/register */ "./src/state/register.ts");





class StateController {
    constructor() {
    }
    initialize(game, width, height, gameVersion) {
        this.stateManager = new Phaser.StateManager(game);
        this.game = game;
        this.game.state = this.stateManager;
        this.gameVersion = gameVersion;
        this.width = width;
        this.height = height;
        this.init();
    }
    startState(state) {
        let startingState = 'Intro';
        if (state === 'undefined' || state === null) {
            startingState = state;
        }
        this.goState(startingState, true, true, 'Horror Maze', this.gameVersion);
    }
    goState(state, clearWorld, clearCache, ...args) {
        if (!this.stateManager.checkState(state)) {
            throw new Error(`This state(${state}) does not exist!`);
        }
        this.stateManager.start(state, clearWorld, clearCache, ...args);
    }
    init() {
        this.add('Intro', _state_intro__WEBPACK_IMPORTED_MODULE_0__["Intro"], true);
        this.add('Login', _state_login__WEBPACK_IMPORTED_MODULE_1__["Login"], false);
        this.add('Register', _state_register__WEBPACK_IMPORTED_MODULE_4__["Register"], false);
        this.add('Level', _state_level__WEBPACK_IMPORTED_MODULE_2__["Level"], false);
        this.add('Play', _state_play__WEBPACK_IMPORTED_MODULE_3__["Play"], false);
    }
    add(key, state, authStart) {
        this.stateManager.add(key, state, authStart);
    }
}


/***/ }),

/***/ "./src/dao/dao.ts":
/*!************************!*\
  !*** ./src/dao/dao.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DAO; });
class DAO {
    constructor(session) {
        this.session = session;
    }
}


/***/ }),

/***/ "./src/dao/recordDao.ts":
/*!******************************!*\
  !*** ./src/dao/recordDao.ts ***!
  \******************************/
/*! exports provided: RecordDao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordDao", function() { return RecordDao; });
/* harmony import */ var _dao__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dao */ "./src/dao/dao.ts");
/* harmony import */ var _vo_record__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vo/record */ "./src/vo/record.ts");


class RecordDao extends _dao__WEBPACK_IMPORTED_MODULE_0__["default"] {
    insert(table, obj) {
        this.session.set(table, obj.userId, obj.toString());
        return obj;
    }
    select(table, userId) {
        const recordData = this.session.get(table, userId);
        const record = _vo_record__WEBPACK_IMPORTED_MODULE_1__["default"].by(recordData);
        return record;
    }
    update(table, userId, obj) {
        this.session.set(table, userId, obj.toString());
        return obj;
    }
    delete(table, userId) {
        let isSuccess = true;
        try {
            this.session.remove(table, userId);
        }
        catch (_a) {
            isSuccess = false;
        }
        return isSuccess;
    }
    selectAll(table) {
        const objs = this.session.allStorage();
        const obj = objs[table];
        return obj;
    }
}


/***/ }),

/***/ "./src/dao/userDao.ts":
/*!****************************!*\
  !*** ./src/dao/userDao.ts ***!
  \****************************/
/*! exports provided: UserDao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDao", function() { return UserDao; });
/* harmony import */ var _dao__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dao */ "./src/dao/dao.ts");
/* harmony import */ var _vo_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vo/user */ "./src/vo/user.ts");


class UserDao extends _dao__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        this.userKey = 'mazeUserRepo';
    }
    insert(table, obj) {
        this.session.set(table, obj.userId, obj.toString());
        return obj;
    }
    select(table, userId) {
        const userJson = this.session.get(table, userId);
        const user = _vo_user__WEBPACK_IMPORTED_MODULE_1__["default"].by(userJson);
        return user;
    }
    update(table, userId, obj) {
        this.session.set(table, userId, obj.toString());
        return obj;
    }
    delete(table, userId) {
        let isSuccess = true;
        try {
            this.session.remove(table, userId);
        }
        catch (_a) {
            isSuccess = false;
        }
        return isSuccess;
    }
    selectAll(table) {
        const objs = this.session.allStorage();
        const obj = objs[table];
        return obj;
    }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _maze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maze */ "./src/maze.ts");

window.onload = () => {
    const width = 640;
    const height = 600; // 120 * 420
    const parentId = 'game';
    // Should be initialize game object and run
    const maze = new _maze__WEBPACK_IMPORTED_MODULE_0__["Game"].Maze(width, height, parentId);
};


/***/ }),

/***/ "./src/maze.ts":
/*!*********************!*\
  !*** ./src/maze.ts ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _controller_serviceController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/serviceController */ "./src/controller/serviceController.ts");
/* harmony import */ var _controller_stateController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller/stateController */ "./src/controller/stateController.ts");
/// <reference path="../node_modules/phaser-ce/typescript/phaser.d.ts" />


var Game;
(function (Game) {
    class Maze extends Phaser.Game {
        constructor(width, height, parentId) {
            super(width, height, Phaser.AUTO, parentId, null, false, true, null);
            this.serviceController = new _controller_serviceController__WEBPACK_IMPORTED_MODULE_0__["default"](this);
            this.stateController = new _controller_stateController__WEBPACK_IMPORTED_MODULE_1__["default"]();
            this.stateController.initialize(this, width, height, Maze.GAME_VERSION);
            this.stateController.startState();
        }
    }
    Maze.GAME_VERSION = "v1.0";
    Game.Maze = Maze;
})(Game || (Game = {}));


/***/ }),

/***/ "./src/services/authService.ts":
/*!*************************************!*\
  !*** ./src/services/authService.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthService; });
/* harmony import */ var _dao_userDao__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dao/userDao */ "./src/dao/userDao.ts");
/* harmony import */ var _session_localStorageSession__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../session/localStorageSession */ "./src/session/localStorageSession.ts");


class AuthService {
    constructor() {
        this.TABLE_LAST_LOGGED_IN = 'lastLoggedInUser';
        this.USER_TABLE = 'mazeUserRepo';
        this.session = new _session_localStorageSession__WEBPACK_IMPORTED_MODULE_1__["LocalStorageSession"]();
        this.userDao = new _dao_userDao__WEBPACK_IMPORTED_MODULE_0__["UserDao"](this.session);
    }
    initialize() {
    }
    getLastLoggedInUser() {
        const obj = this.userDao.selectAll(this.TABLE_LAST_LOGGED_IN);
        let userObj;
        let user;
        try {
            userObj = JSON.parse(obj);
            const userId = Object.keys(userObj)[0];
            user = userObj[userId];
            user = JSON.parse(user);
        }
        catch (e) {
            user = null;
        }
        return user;
    }
    registerUser(user) {
        this.userDao.insert(this.USER_TABLE, user);
        this.userDao.insert(this.TABLE_LAST_LOGGED_IN, user);
    }
    login(userId, callback) {
        const user = this.userDao.select(this.USER_TABLE, userId);
        if (user) {
            callback(user, true);
        }
        else {
            callback(null, false);
        }
    }
    logout(userId) {
        //TODO: implements it.
        const user = this.userDao.select(this.USER_TABLE, userId);
        console.log('next user would be removed.');
        console.log(user);
        this.userDao.delete(this.USER_TABLE, userId);
    }
}


/***/ }),

/***/ "./src/services/rankService.ts":
/*!*************************************!*\
  !*** ./src/services/rankService.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RankService; });
/* harmony import */ var _vo_rank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vo/rank */ "./src/vo/rank.ts");

class RankService {
    initialize() {
    }
    calculateRank(stageId, elapsedTime) {
        const rankMetrix = {
            0: {
                10: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].S,
                15: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].A,
                20: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].B,
                25: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].C,
                30: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].D,
                35: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].E,
            },
            1: {
                10: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].S,
                15: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].A,
                20: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].B,
                25: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].C,
                30: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].D,
                35: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].E,
            },
            2: {
                10: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].S,
                15: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].A,
                20: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].B,
                25: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].C,
                30: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].D,
                35: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].E,
            },
            3: {
                10: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].S,
                15: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].A,
                20: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].B,
                25: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].C,
                30: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].D,
                35: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].E,
            },
            4: {
                10: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].S,
                15: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].A,
                20: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].B,
                25: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].C,
                30: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].D,
                35: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].E,
            },
            5: {
                10: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].S,
                15: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].A,
                20: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].B,
                25: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].C,
                30: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].D,
                35: _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].E,
            }
        };
        const stageRankMetrix = rankMetrix[stageId];
        for (let key in stageRankMetrix) {
            const timeLimit = parseInt(key);
            if (timeLimit > elapsedTime) {
                return stageRankMetrix[key];
            }
        }
        return _vo_rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].F;
    }
    loadRankInformation() {
    }
}


/***/ }),

/***/ "./src/services/recordService.ts":
/*!***************************************!*\
  !*** ./src/services/recordService.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecordService; });
/* harmony import */ var _session_localStorageSession__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../session/localStorageSession */ "./src/session/localStorageSession.ts");
/* harmony import */ var _dao_recordDao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dao/recordDao */ "./src/dao/recordDao.ts");


class RecordService {
    constructor() {
        this.RECORD_TABLE = 'mazeRecordRepo';
        this.session = new _session_localStorageSession__WEBPACK_IMPORTED_MODULE_0__["LocalStorageSession"]();
        this.recordDao = new _dao_recordDao__WEBPACK_IMPORTED_MODULE_1__["RecordDao"](this.session);
    }
    initialize() {
        throw new Error("Method not implemented.");
    }
    getRecord(userId) {
        const record = this.recordDao.select(this.RECORD_TABLE, userId);
        return record;
    }
    setRecord(record) {
        this.recordDao.insert(this.RECORD_TABLE, record);
    }
}


/***/ }),

/***/ "./src/services/stageService.ts":
/*!**************************************!*\
  !*** ./src/services/stageService.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StageService; });
/* harmony import */ var _vo_stage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vo/stage */ "./src/vo/stage.ts");
/* harmony import */ var _vo_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vo/point */ "./src/vo/point.ts");


class StageService {
    constructor() {
        this.stageMap = {};
        this.generateStageMap();
    }
    initialize() { }
    getStageInformation() {
        return this.stageMap;
    }
    // Load Stage Map Information
    generateStageMap() {
        for (let i = 0; i < StageService.NUM_OF_STAGE; i++) {
            let zeroFormat = '000' + i;
            let mapSeq = zeroFormat.slice(-3);
            const floorPath = 'assets/img/maps/floor-' + mapSeq + '.png';
            const wallPath = 'assets/img/maps/walls-' + mapSeq + '.png';
            const stage = new _vo_stage__WEBPACK_IMPORTED_MODULE_0__["Stage"](i, floorPath, wallPath, [
                _vo_point__WEBPACK_IMPORTED_MODULE_1__["Point"].on(235, 85),
                _vo_point__WEBPACK_IMPORTED_MODULE_1__["Point"].on(565, 400)
            ]);
            this.stageMap[i] = stage;
        }
    }
}
StageService.NUM_OF_STAGE = 5;


/***/ }),

/***/ "./src/session/localStorageSession.ts":
/*!********************************************!*\
  !*** ./src/session/localStorageSession.ts ***!
  \********************************************/
/*! exports provided: LocalStorageSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageSession", function() { return LocalStorageSession; });
class LocalStorageSession {
    get(table, key) {
        const tableData = localStorage.getItem(table) || null;
        if (!tableData) {
            return null;
        }
        const tableJsonObj = JSON.parse(tableData);
        let item = tableJsonObj[key];
        if (typeof item === 'object') {
            return item;
        }
        if (typeof item === 'string') {
            let obj = JSON.parse(item);
            return obj;
        }
        return item;
    }
    set(table, key, value) {
        const originalDataObj = this.get(table, key);
        if (!originalDataObj) {
            let data = {};
            data[key] = value;
            localStorage.setItem(table, JSON.stringify(data));
        }
        else {
            let jsonValue = JSON.parse(value);
            let data = {};
            data[key] = jsonValue;
            let data2 = {};
            data2[key] = originalDataObj;
            const obj = this.extend(data2, data);
            localStorage.setItem(table, JSON.stringify(obj));
        }
    }
    remove(key) {
        localStorage.removeItem(key);
    }
    allStorage() {
        let archive = {};
        let keys = Object.keys(localStorage);
        let i = keys.length;
        while (i--) {
            archive[keys[i]] = localStorage.getItem(keys[i]);
        }
        return archive;
    }
    extend(...args) {
        let o, i, k;
        for (o = {}, i = 0; i < arguments.length; i++) {
            // if (arguments[i].constructor !== Object) continue;
            for (k in arguments[i]) {
                if (arguments[i].hasOwnProperty(k)) {
                    o[k] = arguments[i][k].constructor === Object ? this.extend(o[k] || {}, arguments[i][k]) : arguments[i][k];
                }
            }
        }
        return o;
    }
}


/***/ }),

/***/ "./src/state/base.ts":
/*!***************************!*\
  !*** ./src/state/base.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
class Base extends Phaser.State {
    constructor(game) {
        super();
        // For Ignoring non-exist property error.
        this.serviceController = game.serviceController;
        this.stateController = game.stateController;
    }
    goState(string) {
        this.serviceController;
    }
}


/***/ }),

/***/ "./src/state/intro.ts":
/*!****************************!*\
  !*** ./src/state/intro.ts ***!
  \****************************/
/*! exports provided: Intro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intro", function() { return Intro; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/state/base.ts");

class Intro extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game) {
        super(game);
    }
    init(gameTitle, gameVersion) {
        this.gameTitle = gameTitle;
        this.gameVersion = gameVersion;
    }
    preload() {
    }
    create() {
        this.stage.backgroundColor = '#3b3b3b';
        this.logoText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, this.gameTitle, {
            font: '80px Arial;',
            fill: '#ffffff'
        });
        this.logoText.anchor.setTo(0.5, 0.5);
        this.logoText.alpha = 0.8;
        const p = this.game.world.bounds.bottomRight;
        const footer = this.game.add.text(p.x - 50, p.y - 30, this.gameVersion, {
            font: '15px Arial;',
            fill: '#eeeeee'
        });
        footer.anchor.setTo(0.5, 0.5);
        const self = this;
        setTimeout(function () {
            self.stateController.goState('Login');
        }, Intro.introInterval);
    }
    update() {
    }
}
Intro.introInterval = 2000;


/***/ }),

/***/ "./src/state/level.ts":
/*!****************************!*\
  !*** ./src/state/level.ts ***!
  \****************************/
/*! exports provided: Level */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level", function() { return Level; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/state/base.ts");
/* harmony import */ var _vo_rank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vo/rank */ "./src/vo/rank.ts");


class Level extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game) {
        super(game);
        this.numberOfStagePerPage = 3;
        this.currentPage = 1;
    }
    init(stageMap) {
        this.stageMap = stageMap;
        this.numberOfStage = Object.keys(stageMap).length;
        this.numberOfPage = Math.ceil(this.numberOfStage / this.numberOfStagePerPage);
    }
    preload() {
        this.game.load.spritesheet('stageArrows', '../assets/img/stageArrows.png', 48, 48);
        this.record = this.serviceController.getRecord();
        this.stageBtnGroup = this.game.add.group();
    }
    create() {
        this.game.stage.backgroundColor = '#3b3b3b';
        this.game.stage.alpha = 0.9;
        this.drawStageBtn(this.currentPage);
        this.drawStageMoveBtn();
    }
    update() {
    }
    clearStageBtnField() {
        this.stageBtnGroup.callAll('kill', '');
    }
    drawStageBtn(pageNum) {
        this.clearStageBtnField();
        const width = 200;
        const height = 200;
        let offsetX = (this.game.world.width - 150) / this.numberOfStagePerPage; // 150: padding
        let stageInfos = {};
        if (this.record) {
            stageInfos = this.record.records;
        }
        const offset = (pageNum - 1) * this.numberOfStagePerPage;
        for (let i = offset; i < offset + this.numberOfStagePerPage; i++) {
            if (!this.stageMap[i]) {
                return;
            }
            let stageInfo;
            let stageInfoStr = '';
            if (stageInfos[i]) {
                stageInfo = stageInfos[i];
                stageInfoStr += '\nTime: ' + stageInfo.time + ' seconds';
                stageInfoStr += '\nRank: ' + _vo_rank__WEBPACK_IMPORTED_MODULE_1__["RankUtil"].valueOf(stageInfo.rank);
            }
            const stageBtnText = `Stage-${i + 1}` + stageInfoStr;
            const offsetXOfBtn = offsetX * (i % this.numberOfStagePerPage);
            const stageBtn = this.game.add.text(145 + offsetXOfBtn, 90, stageBtnText, {
                fill: '#ffffff',
                font: '15px Arial'
            });
            stageBtn.inputEnabled = true;
            stageBtn.input.useHandCursor = true;
            const stageNum = i + 1;
            const self = this;
            stageBtn.events.onInputDown.add((e) => {
                if (confirm(`Stage-${stageNum} 이동할까요?`)) {
                    self.stateController.goState('Play', true, true, self.stageMap[i]);
                }
            }, this);
            this.stageBtnGroup.add(stageBtn);
        }
    }
    drawStageMoveBtn() {
        const p = this.game.world.bounds;
        this.lowerStageBtn = this.game.add.button(100, this.game.world.centerY, "stageArrows", this.buttonClicked, this);
        this.higherStageBtn = this.game.add.button(100, this.game.world.centerY, "stageArrows", this.buttonClicked, this);
        this.lowerStageBtn.frame = 0;
        this.higherStageBtn.frame = 1;
        // Align stage page move btn
        this.lowerStageBtn.x = 20;
        this.higherStageBtn.x = p.right - 20 - this.higherStageBtn.width;
        const stageText = this.game.add.text(this.game.world.centerX, 50, 'Stage', {
            fill: '#ffffff',
            font: '20px Arial'
        });
        stageText.anchor.setTo(0.5, 0.5);
    }
    buttonClicked(button, pointer) {
        let currentPage = this.currentPage;
        if (button.frame == 0) { // lowerStageBtn
            if (currentPage === 1) {
                return;
            }
            this.drawStageBtn(--this.currentPage);
        }
        else if (button.frame == 1) { // higherStageBtn
            if (currentPage + 1 > this.numberOfPage) {
                return;
            }
            this.drawStageBtn(++this.currentPage);
        }
    }
}


/***/ }),

/***/ "./src/state/login.ts":
/*!****************************!*\
  !*** ./src/state/login.ts ***!
  \****************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/state/base.ts");

class Login extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game) {
        super(game);
    }
    preload() {
        this.game.load.image('gameLogo', 'assets/img/gamelogo.png');
    }
    create() {
        this.stage.backgroundColor = '#FFFFFF';
        this.gameLogo = this.game.add.image(this.game.world.centerX, 210, 'gameLogo');
        this.gameLogo.anchor.setTo(0.5, 0.5);
        this.loginText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'Login', {
            font: '35px Arial;',
            fill: '#000000'
        });
        this.loginText.anchor.setTo(0.5, 0.5);
        this.loginText.alpha = 0.8;
        this.loginText.inputEnabled = true;
        this.loginText.input.useHandCursor = true;
        const self = this;
        this.loginText.events.onInputDown.add((e) => {
            const tween = self.game.add.tween(self.loginText).to({
                alpha: 0.2
            }, 700, Phaser.Easing.Quadratic.Out, false, 0, 0, false);
            tween.onComplete.add((e) => {
                let user = self.serviceController.authService.getLastLoggedInUser();
                if (user && user.userId) {
                    self.serviceController.login(user.userId, (user, isSuccess) => {
                        if (isSuccess) {
                            alert(`${user.userId}님, 다시 방문해주셨군요. 환영합니다.`);
                            const stageInfo = self.serviceController.getStageInformation();
                            self.stateController.goState('Level', true, true, stageInfo);
                        }
                        else {
                            alert('예전에 방문하신 적이 없으시군요? 사용자 등록화면으로 이동합니다.');
                            self.stateController.goState('Register');
                        }
                    });
                }
                else {
                    alert('예전에 방문하신 적이 없으시군요? 사용자 등록화면으로 이동합니다.');
                    self.stateController.goState('Register');
                }
            }, self);
            tween.start();
        }, this);
        this.loginText.events.onInputOver.add((e) => {
            self.loginText.alpha = 0.5;
        }, this);
        this.loginText.events.onInputOut.add((e) => {
            self.loginText.alpha = 0.8;
        }, this);
    }
    update() {
    }
}


/***/ }),

/***/ "./src/state/play.ts":
/*!***************************!*\
  !*** ./src/state/play.ts ***!
  \***************************/
/*! exports provided: Play */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Play", function() { return Play; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/state/base.ts");
/* harmony import */ var _vo_record__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vo/record */ "./src/vo/record.ts");


class Play extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game) {
        super(game);
        this.speed = 2;
    }
    init(stageInfo) {
        this.stageInfo = stageInfo;
        this.playerPath = 'assets/img/player-spreadsheet.png';
    }
    preload() {
        this.game.load.image('floor', this.stageInfo.floorFilePath);
        this.game.load.image('wall', this.stageInfo.wallFilePath);
        this.game.load.spritesheet('player', this.playerPath, 64, 64, 36);
        this.load.audio("wallCollisionSound", ["assets/mp3/beep-01a.mp3"]);
        this.load.audio("tadaSound", ["assets/mp3/tada-01a.mp3"]);
    }
    create() {
        this.wallCollisionSound = this.add.audio('wallCollisionSound');
        this.tadaSound = this.add.audio('tadaSound');
        this.game.stage.backgroundColor = '#000000';
        // this.game.stage.backgroundColor = '0xffffff'; 
        this.game.world.setBounds(0, 0, this.world.width, this.world.height - 120);
        this.createFloor();
        this.makeFirstExitPoint();
        this.createWall();
        this.createPlayer();
        this.game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
        this.createMask();
        this.floor.mask = this.mask;
        this.timer = this.game.time.create(false);
        this.cursor = this.game.input.keyboard.createCursorKeys();
        this.game.input.keyboard.addCallbacks(this, (key) => {
            //TODO: wasd 가능하게 할 것
            if (key.keyCode === 87) { // W, Up
            }
            else if (key.key === 65) { // A, Left
            }
            else if (key.key === 83) { // S, Down
            }
            else if (key.key === 68) { // D, Right
            }
        });
        this.createTimer();
    }
    createTimer() {
        this.timeText = this.game.add.text(this.game.world.centerX, 500, 'Timer: 0 second', {
            fill: '#ffffff',
            font: '15px Arial'
        });
        this.startTimer();
    }
    startTimer() {
        this.elapsedTime = 0;
        const self = this;
        this.timeHandler = setInterval(() => {
            self.elapsedTime++;
        }, 1000);
    }
    stopTimer() {
        clearInterval(this.timeHandler);
    }
    countTime() {
        // this.elapsedTime = this.game.time.totalElapsedSeconds();
        let timeText = 'Timer: ' + this.elapsedTime + ' seconds';
        this.timeText.setText(timeText, true);
    }
    update() {
        this.movePlayer();
        this.moveFlash();
        this.randomAlphaTo(this.floor);
        this.countTime();
    }
    render() {
        this.game.debug.inputInfo(32, 32);
    }
    makeFirstExitPoint() {
        const idxOfExitPoint = Math.round(Math.random()) * 11 % this.stageInfo.exitPoints.length;
        this.stageInfo.exitPoints[idxOfExitPoint].active = true;
        this.currentExitPoint = this.stageInfo.exitPoints[idxOfExitPoint];
        this.renderExitPoint(this.currentExitPoint);
    }
    renderExitPoint(exitPoint) {
        const graphicalPoint = (x, y) => {
            this.currentExitGraphic = this.game.add.graphics(0, 0);
            this.currentExitGraphic.beginFill(0xff0000, 0.8);
            this.currentExitGraphic.drawCircle(x, y, 10);
            this.currentExitGraphic.endFill();
        };
        graphicalPoint(exitPoint.x, exitPoint.y);
    }
    randomAlphaTo(obj) {
        obj.alpha = 0.5 + Math.random() * 0.5;
    }
    createPlayer() {
        this.player = this.game.add.sprite(75, 75, 'player');
        this.player.anchor.set(.5, .5);
        this.player.animations.add('north', [0, 1, 2, 3, 4, 5, 6, 7, 8], 10, true);
        this.player.animations.add('west', [9, 10, 11, 12, 13, 14, 15, 16, 17], 10, true);
        this.player.animations.add('south', [18, 19, 20, 21, 22, 23, 24, 25, 26], 10, true);
        this.player.animations.add('east', [27, 28, 29, 30, 31, 32, 33, 34, 35], 10, true);
    }
    createFloor() {
        this.floor = this.game.add.sprite(0, 0, 'floor');
        this.floor.width = 640;
        this.floor.height = 480;
    }
    createMask() {
        this.mask = this.game.add.graphics(0, 0);
    }
    createWall() {
        this.wallsBitMap = this.game.make.bitmapData(640, 480);
        this.wallsBitMap.draw('wall');
        this.wallsBitMap.update();
        this.wall = this.game.add.sprite(0, 0, this.wallsBitMap);
    }
    moveFlash() {
        const playerWidth = this.player.width;
        const playerHeight = this.player.height;
        const playerX = this.player.x;
        const playerY = this.player.y;
        const dy = this.game.input.y - playerY;
        const dx = this.game.input.x - playerX;
        const mouseAngle = Math.atan2(dy, dx);
        this.mask.clear();
        this.mask.lineStyle(2, 0xffffff, 1);
        this.mask.beginFill(0x000000);
        this.mask.moveTo(playerX, playerY);
        for (let i = 0; i < Play.numOfRays; i++) {
            const rayAngle = mouseAngle - (Play.lightAngle / 2) + (Play.lightAngle / Play.numOfRays) * i;
            let lastX = playerX;
            let lastY = playerY;
            for (let j = 1; j <= Play.rayLength; j++) {
                const x = Math.round(playerX + (j * Math.cos(rayAngle)));
                const y = Math.round(playerY + (j * Math.sin(rayAngle)));
                const color = this.pickColorOf(x, y, this.wallsBitMap);
                if (color == 0) {
                    lastX = x;
                    lastY = y;
                }
                else {
                    this.mask.lineTo(lastX, lastY);
                    break;
                }
            }
            this.mask.lineTo(lastX, lastY);
        }
        this.mask.lineTo(playerX, playerY);
        this.mask.endFill();
    }
    movePlayer() {
        let xSpeed = 0;
        let ySpeed = 0;
        let isMoving = false;
        let canMove = false;
        const playerWidth = this.player.width;
        const playerHeight = this.player.height;
        const playerX = this.player.x;
        const playerY = this.player.y;
        const color = {
            north: 0,
            south: 0,
            west: 0,
            east: 0
        };
        if (this.cursor.up.isDown) {
            ySpeed -= this.speed;
            this.player.animations.play('north');
            const northEast = this.pickColorOf(playerX + playerWidth / 2 + xSpeed, playerY - playerHeight / 2 + ySpeed, this.wallsBitMap);
            const northWest = this.pickColorOf(playerX - playerWidth / 2 + xSpeed, playerY - playerHeight / 2 + ySpeed, this.wallsBitMap);
            color.north = northEast + northWest;
        }
        if (this.cursor.down.isDown) {
            ySpeed += this.speed;
            this.player.animations.play('south');
            const southEast = this.pickColorOf(playerX + playerWidth / 2 + xSpeed, playerY + playerHeight / 2 + ySpeed, this.wallsBitMap);
            const southWest = this.pickColorOf(playerX - playerWidth / 2 + xSpeed, playerY + playerHeight / 2 + ySpeed, this.wallsBitMap);
            color.south = southEast + southWest;
        }
        if (this.cursor.left.isDown) {
            xSpeed -= this.speed;
            this.player.animations.play('west');
            const westNorth = this.pickColorOf(playerX - playerWidth / 2 + xSpeed, playerY - playerHeight / 2 + ySpeed, this.wallsBitMap);
            const westSouth = this.pickColorOf(playerX - playerWidth / 2 + xSpeed, playerY + playerHeight / 2 + ySpeed, this.wallsBitMap);
            color.west = westNorth + westSouth;
        }
        if (this.cursor.right.isDown) {
            xSpeed += this.speed;
            this.player.animations.play('east');
            const eastNorth = this.pickColorOf(playerX + playerWidth / 2 + xSpeed, playerY - playerHeight / 2 + ySpeed, this.wallsBitMap);
            const eastSouth = this.pickColorOf(playerX + playerWidth / 2 + xSpeed, playerY + playerHeight / 2 + ySpeed, this.wallsBitMap);
            color.east = eastNorth + eastSouth;
        }
        isMoving = Math.abs(xSpeed) + Math.abs(ySpeed) < this.speed * 2 && Math.abs(xSpeed) + Math.abs(ySpeed) > 0;
        canMove = color.north + color.south + color.east + color.west == 0;
        if (isMoving && canMove) {
            this.player.x += xSpeed;
            this.player.y += ySpeed;
        }
        else {
            this.stopPlayerAnimcateion();
        }
        if (isMoving && !canMove) {
            this.game.camera.shake();
            this.wallCollisionSound.play();
        }
        if (Math.abs(this.currentExitPoint.x - this.player.x) < 3 && Math.abs(this.player.y - this.currentExitPoint.y) < 3) {
            alert('Congrat!');
            this.tadaSound.play();
            const userId = this.serviceController.authService.getLastLoggedInUser().userId;
            const stageId = this.stageInfo.stageId;
            const rank = this.serviceController.rankService.calculateRank(stageId, this.elapsedTime);
            const stageRecord = new _vo_record__WEBPACK_IMPORTED_MODULE_1__["StageRecord"](stageId, rank, this.elapsedTime);
            const stageRecordObj = {};
            stageRecordObj[stageId] = stageRecord;
            const record = new _vo_record__WEBPACK_IMPORTED_MODULE_1__["default"](userId, stageRecordObj);
            this.serviceController.recordRank(record);
            const stageInfo = this.serviceController.getStageInformation();
            this.stateController.goState('Level', true, true, stageInfo);
            this.stopTimer();
        }
    }
    pickColorOf(x, y, bitMapData) {
        const color = bitMapData.getPixel32(x, y);
        return color;
    }
    stopPlayerAnimcateion() {
        this.player.animations.stop('north');
        this.player.animations.stop('south');
        this.player.animations.stop('west');
        this.player.animations.stop('east');
    }
}
Play.rayLength = 500;
Play.numOfRays = 20;
Play.lightAngle = Math.PI / 4; // 45 deg.


/***/ }),

/***/ "./src/state/register.ts":
/*!*******************************!*\
  !*** ./src/state/register.ts ***!
  \*******************************/
/*! exports provided: Register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony import */ var _component_inputText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/inputText */ "./src/component/inputText.ts");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/state/base.ts");
/* harmony import */ var _vo_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vo/user */ "./src/vo/user.ts");
/* harmony import */ var _vo_score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vo/score */ "./src/vo/score.ts");




class Register extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(game) {
        super(game);
    }
    preload() {
    }
    setRegisterInputText() {
        let textWidth = 200;
        let textHeight = 80;
        let textX = this.game.world.centerX - textWidth / 2;
        let textY = this.game.world.centerY - textHeight / 2;
        let textMaxLength = 20;
        let textStyle = {
            fill: '#000000',
            boundsAlignH: 'center',
            boundsAlignV: 'middle',
            font: '20px Arial'
        };
        this.inputText = new _component_inputText__WEBPACK_IMPORTED_MODULE_0__["Component"].InputText(this.game, textX, textY, textWidth, textHeight, textMaxLength, 'ex) User00700', textStyle);
    }
    setRegisterButton() {
        let btnWidth = 200;
        let btnHeight = 80;
        let btnX = this.game.world.centerX; // - btnWidth/2;
        let btnY = this.game.world.centerY + 120; // - btnHeight/2 + 100;
        let btnText = 'Register';
        const self = this;
        let textStyle = {
            fill: '#000000',
            boundsAlignH: 'center',
            boundsAlignV: 'middle',
            font: '20px Arial'
        };
        this.registerBtn = this.game.add.text(btnX, btnY, btnText, textStyle);
        this.registerBtn.anchor.setTo(.5, .5);
        this.registerBtn.inputEnabled = true;
        this.registerBtn.input.useHandCursor = true;
        this.registerBtn.events.onInputDown.add((e) => {
            if (confirm(`${self.inputText.text}님으로 하시겠습니까?`)) {
                self.saveUserId();
                const stageInfo = self.serviceController.getStageInformation();
                self.stateController.goState('Level', true, true, stageInfo);
            }
        }, this);
        this.registerBtn.events.onInputOver.add((e) => {
            this.registerBtn.alpha = 0.7;
        }, this);
        this.registerBtn.events.onInputOut.add((e) => {
            this.registerBtn.alpha = 1;
        }, this);
    }
    create() {
        this.setRegisterInputText();
        this.setRegisterButton();
    }
    update() {
        this.inputText.render();
    }
    saveUserId() {
        let userId = this.inputText.text;
        const user = new _vo_user__WEBPACK_IMPORTED_MODULE_2__["default"](userId, new _vo_score__WEBPACK_IMPORTED_MODULE_3__["default"]());
        this.serviceController.registerUser(user);
    }
}


/***/ }),

/***/ "./src/vo/point.ts":
/*!*************************!*\
  !*** ./src/vo/point.ts ***!
  \*************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.active = false;
    }
    static on(x, y) {
        return new Point(x, y);
    }
}


/***/ }),

/***/ "./src/vo/rank.ts":
/*!************************!*\
  !*** ./src/vo/rank.ts ***!
  \************************/
/*! exports provided: Rank, RankUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rank", function() { return Rank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankUtil", function() { return RankUtil; });
var Rank;
(function (Rank) {
    Rank[Rank["NONE"] = 0] = "NONE";
    Rank[Rank["S"] = 1] = "S";
    Rank[Rank["A"] = 2] = "A";
    Rank[Rank["B"] = 3] = "B";
    Rank[Rank["C"] = 4] = "C";
    Rank[Rank["D"] = 5] = "D";
    Rank[Rank["E"] = 6] = "E";
    Rank[Rank["F"] = 7] = "F";
})(Rank || (Rank = {}));
class RankUtil {
    static valueOf(rank) {
        let ret = '';
        switch (rank) {
            case Rank.NONE: {
                break;
            }
            case Rank.S: {
                ret = 'S';
                break;
            }
            case Rank.A: {
                ret = 'A';
                break;
            }
            case Rank.B: {
                ret = 'B';
                break;
            }
            case Rank.C: {
                ret = 'C';
                break;
            }
            case Rank.D: {
                ret = 'D';
                break;
            }
            case Rank.E: {
                ret = 'E';
                break;
            }
            case Rank.F: {
                ret = 'F';
                break;
            }
            default: {
                ret = '';
            }
        }
        return ret;
    }
}


/***/ }),

/***/ "./src/vo/record.ts":
/*!**************************!*\
  !*** ./src/vo/record.ts ***!
  \**************************/
/*! exports provided: default, StageRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Record; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StageRecord", function() { return StageRecord; });
/* harmony import */ var _vo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vo */ "./src/vo/vo.ts");

class Record extends _vo__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(userId, records) {
        super();
        this.userId = userId;
        this.records = records;
    }
    put(record) {
        this.records[record.stageId] = {
            stageId: record.stageId,
            rank: record.rank,
            time: record.time
        };
        // this.records[record.stageId] = record;
    }
    toJson() {
        let records = {};
        for (let p in this.records) {
            records[p] = this.records[p].toJson();
        }
        return {
            userId: this.userId,
            records: records
        };
    }
    static by(json) {
        if (json == null) {
            return null;
        }
        const user = new Record(json.userId, json.records);
        return user;
    }
}
class StageRecord extends _vo__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(stageId, rank, time) {
        super();
        this.stageId = stageId;
        this.rank = rank;
        this.time = time;
    }
    toJson() {
        return {
            stageId: this.stageId,
            rank: this.rank,
            time: this.time
        };
    }
}


/***/ }),

/***/ "./src/vo/score.ts":
/*!*************************!*\
  !*** ./src/vo/score.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Score; });
/* harmony import */ var _rank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rank */ "./src/vo/rank.ts");
/* harmony import */ var _vo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vo */ "./src/vo/vo.ts");


class Score extends _vo__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(time, rank) {
        super();
        this.time = time | 0;
        this.rank = rank | _rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].NONE;
    }
    toJson() {
        return {
            time: this.time,
            rank: this.rank,
        };
    }
}


/***/ }),

/***/ "./src/vo/stage.ts":
/*!*************************!*\
  !*** ./src/vo/stage.ts ***!
  \*************************/
/*! exports provided: Stage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage", function() { return Stage; });
class Stage {
    constructor(stageId, floorFilePath, wallFilePath, exitPoints, timeLimit = 5000) {
        this.stageId = stageId;
        this.floorFilePath = floorFilePath;
        this.wallFilePath = wallFilePath;
        this.exitPoints = exitPoints;
        this.timeLimit = timeLimit;
    }
}


/***/ }),

/***/ "./src/vo/user.ts":
/*!************************!*\
  !*** ./src/vo/user.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony import */ var _vo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vo */ "./src/vo/vo.ts");

class User extends _vo__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(userId, score) {
        super();
        this.userId = userId;
        this.score = score;
        this.registerDate = new Date();
        this.lastVisitDate = new Date();
    }
    static by(json) {
        if (json == null) {
            return null;
        }
        const user = new User(json.userId, json.score);
        user.registerDate = json.registerDate;
        user.lastVisitDate = json.lastVisitDate;
        return user;
    }
    toJson() {
        return {
            userId: this.userId,
            score: this.score,
            registerDate: this.registerDate,
            lastVisitDate: this.lastVisitDate,
        };
    }
}


/***/ }),

/***/ "./src/vo/vo.ts":
/*!**********************!*\
  !*** ./src/vo/vo.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vo; });
class Vo {
    toString() {
        return JSON.stringify(this.toJson());
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9pbnB1dFRleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIvc2VydmljZUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIvc3RhdGVDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9kYW8vZGFvLnRzIiwid2VicGFjazovLy8uL3NyYy9kYW8vcmVjb3JkRGFvLnRzIiwid2VicGFjazovLy8uL3NyYy9kYW8vdXNlckRhby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hemUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2F1dGhTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9yYW5rU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcmVjb3JkU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc3RhZ2VTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXNzaW9uL2xvY2FsU3RvcmFnZVNlc3Npb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlL2Jhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlL2ludHJvLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS9sZXZlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvbG9naW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlL3BsYXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlL3JlZ2lzdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy92by9wb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdm8vcmFuay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdm8vcmVjb3JkLnRzIiwid2VicGFjazovLy8uL3NyYy92by9zY29yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdm8vc3RhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZvL3VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZvL3ZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuRU0sSUFBVyxTQUFTLENBaUd6QjtBQWpHRCxXQUFpQixTQUFTO0lBQ3pCLGVBQXVCLFNBQVEsTUFBTSxDQUFDLElBQUk7UUFtQnpDLFlBQVksSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUs7WUFDNUQsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFHLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQW5CakMsWUFBTyxHQUFHLEtBQUssQ0FBQztZQW9CZixJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztZQUNoQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUNyQixJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN4QjtZQUVELElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1gsSUFB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QUFJLENBQUMsQ0FBQztnQkFDVixFQUFFLEVBQUUsNkNBQUksQ0FBQyxDQUFDO2dCQUNWLEVBQUUsRUFBRSw2Q0FBSSxDQUFDLENBQUM7Z0JBQ1YsRUFBRSxFQUFFLDZDQUFJLENBQUMsQ0FBQztnQkFDVixFQUFFLEVBQUUsNkNBQUksQ0FBQyxDQUFDO2dCQUNWLEVBQUUsRUFBRSw2Q0FBSSxDQUFDLENBQUM7YUFDVjtZQUNELENBQUMsRUFBRTtnQkFDRixFQUFFLEVBQUUsNkNBQUksQ0FBQyxDQUFDO2dCQUNWLEVBQUUsRUFBRSw2Q0FBSSxDQUFDLENBQUM7Z0JBQ1YsRUFBRSxFQUFFLDZDQUFJLENBQUMsQ0FBQztnQkFDVixFQUFFLEVBQUUsNkNBQUksQ0FBQyxDQUFDO2dCQUNWLEVBQUUsRUFBRSw2Q0FBSSxDQUFDLENBQUM7Z0JBQ1YsRUFBRSxFQUFFLDZDQUFJLENBQUMsQ0FBQzthQUNWO1lBQ0QsQ0FBQyxFQUFFO2dCQUNGLEVBQUUsRUFBRSw2Q0FBSSxDQUFDLENBQUM7Z0JBQ1YsRUFBRSxFQUFFLDZDQUFJLENBQUMsQ0FBQztnQkFDVixFQUFFLEVBQUUsNkNBQUksQ0FBQyxDQUFDO2dCQUNWLEVBQUUsRUFBRSw2Q0FBSSxDQUFDLENBQUM7Z0JBQ1YsRUFBRSxFQUFFLDZDQUFJLENBQUMsQ0FBQztnQkFDVixFQUFFLEVBQUUsNkNBQUksQ0FBQyxDQUFDO2FBQ1Y7WUFDRCxDQUFDLEVBQUU7Z0JBQ0YsRUFBRSxFQUFFLDZDQUFJLENBQUMsQ0FBQztnQkFDVixFQUFFLEVBQUUsNkNBQUksQ0FBQyxDQUFDO2dCQUNWLEVBQUUsRUFBRSw2Q0FBSSxDQUFDLENBQUM7Z0JBQ1YsRUFBRSxFQUFFLDZDQUFJLENBQUMsQ0FBQztnQkFDVixFQUFFLEVBQUUsNkNBQUksQ0FBQyxDQUFDO2dCQUNWLEVBQUUsRUFBRSw2Q0FBSSxDQUFDLENBQUM7YUFDVjtZQUNELENBQUMsRUFBRTtnQkFDRixFQUFFLEVBQUUsNkNBQUksQ0FBQyxDQUFDO2dCQUNWLEVBQUUsRUFBRSw2Q0FBSSxDQUFDLENBQUM7Z0JBQ1Ys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Q0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDdkMsQ0FBQztJQUVPLFlBQVk7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRS9CLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFB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RSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUV4QyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRCxNQUFNO1FBQ0wsT0FBTztZQUNOLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtTQUNqQyxDQUFDO0lBQ0gsQ0FBQztDQUNEOzs7Ozs7Ozs7Ozs7Ozs7QUNwQ2E7SUFDYixRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FHRCIsImZpbGUiOiJtYXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IG5hbWVzcGFjZSBDb21wb25lbnQge1xuXHRleHBvcnQgY2xhc3MgSW5wdXRUZXh0IGV4dGVuZHMgUGhhc2VyLlRleHQge1xuXHRcdGlzRm9jdXMgPSBmYWxzZTtcblxuXHRcdHggOiBudW1iZXI7XG5cdFx0eSA6IG51bWJlcjtcblx0XHR3aWR0aCA6IG51bWJlcjtcblx0XHRoZWlnaHQgOiBudW1iZXI7XG5cblx0XHRtYXhMZW5ndGggOiBudW1iZXI7XG5cblx0XHRwbGFjZWhvbGRlciA6IHN0cmluZztcblxuXHRcdFxuXHRcdGJvcmRlclJlY3RhbmdsZXIgOiBQaGFzZXIuUmVjdGFuZ2xlO1xuXG5cdFx0dGV4dCA6IHN0cmluZztcblxuXHRcdHBoYXNlclRleHQgOiBQaGFzZXIuVGV4dDtcblxuXHRcdGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIHdpZHRoLCBoZWlnaHQsIG1heExlbmd0aCwgdGV4dCwgc3R5bGUpIHtcblx0XHRcdHN1cGVyKGdhbWUsIHgsIHksICB0ZXh0LCBzdHlsZSk7XG5cdFx0XHR0aGlzLnBsYWNlaG9sZGVyID0gJ0lucHV0IFRleHQnO1xuXHRcdFx0aWYgKHRleHQubGVuZ3RoID09IDApIHtcblx0XHRcdFx0dGV4dCA9IHRoaXMucGxhY2Vob2xkZXI7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMueCA9IHg7XG5cdFx0XHR0aGlzLnkgPSB5O1xuXHRcdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXHRcdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0XHR0aGlzLnRleHQgPSB0ZXh0O1xuXHRcdFx0dGhpcy5tYXhMZW5ndGggPSBtYXhMZW5ndGggPyBtYXhMZW5ndGggOiAyMDtcblxuXHRcdFx0bGV0IGdyb3VwID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xuXHRcdFx0bGV0IGdyYXBoaWNzID0gdGhpcy5nYW1lLm1ha2UuZ3JhcGhpY3MoKTtcblx0XHRcdGdyYXBoaWNzLmxpbmVTdHlsZSgyLCAweDAwMDAwMCwgMSk7XG5cdFx0XHQvLyBncmFwaGljcy5iZWdpbkZpbGwoMHhGRjcwMEIsIDEpO1xuXHRcdFx0Z3JhcGhpY3MuZHJhd1JlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG5cdFx0XHQvLyBncmFwaGljcy5lbmRGaWxsKCk7XG5cdFx0XHRncm91cC5hZGQoZ3JhcGhpY3MpO1xuXG5cdFx0XHR0aGlzLnBoYXNlclRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQoeCwgeSwgdGV4dCwgc3R5bGUpO1xuXHRcdFx0dGhpcy5waGFzZXJUZXh0LnNldFRleHRCb3VuZHMoMCwgMCwgd2lkdGgsIGhlaWdodClcblx0XHRcdHRoaXMucGhhc2VyVGV4dC5hbHBoYSA9IDAuNjtcblxuXHRcdFx0dGhpcy5waGFzZXJUZXh0LmlucHV0RW5hYmxlZCA9IHRydWU7XG5cblx0XHRcdHRoaXMucGhhc2VyVGV4dC5ldmVudHMub25JbnB1dERvd24uYWRkKChzcHJpdGUsIHBvaW50ZXIpID0+IHtcblx0XHRcdFx0dGhpcy5pc0ZvY3VzID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5waGFzZXJUZXh0LmFscGhhID0gMTtcblx0XHRcdH0sIHRoaXMpO1xuXHRcdFx0XG5cdFx0XHR0aGlzLmdhbWUuaW5wdXQub25Eb3duLmFkZCgoc3ByaXRlLCBwb2ludGVyKSA9PiB7XG5cdFx0XHRcdGxldCB0ZXh0WCA9IHRoaXMucGhhc2VyVGV4dC53b3JsZC54O1xuXHRcdFx0XHRsZXQgdGV4dFdpZHRoID0gdGhpcy5waGFzZXJUZXh0LndpZHRoO1xuXG5cdFx0XHRcdGxldCB0ZXh0WSA9IHRoaXMucGhhc2VyVGV4dC53b3JsZC55O1xuXHRcdFx0XHRsZXQgdGV4dEhlaWdodCA9IHRoaXMucGhhc2VyVGV4dC5oZWlnaHQ7XG5cblx0XHRcdFx0aWYgKHBvaW50ZXIuY2xpZW50WCA+IHRleHRYICYmIHBvaW50ZXIuY2xpZW50WCA8PSB0ZXh0WCArIHRleHRXaWR0aCkge1xuXHRcdFx0XHRcdGlmIChwb2ludGVyLmNsaWVudFkgPiB0ZXh0WSAmJiBwb2ludGVyLmNsaWVudFkgPD0gdGV4dFkgKyB0ZXh0SGVpZ2h0KSB7XG5cdFx0XHRcdFx0XHR0aGlzLmlzRm9jdXMgPSB0cnVlO1xuXHRcdFx0XHRcdFx0dGhpcy5waGFzZXJUZXh0LmFscGhhID0gMTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLnBoYXNlclRleHQuYWxwaGEgPSAwLjY7XG5cdFx0XHRcdHRoaXMuaXNGb2N1cyA9IGZhbHNlO1xuXHRcdFx0fSwgdGhpcyk7XG5cblx0XHRcdHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRDYWxsYmFja3ModGhpcywgKGUpID0+IHtcblx0XHRcdFx0aWYgKCF0aGlzLmlzRm9jdXMpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGlmIChlLmtleUNvZGUgPT0gUGhhc2VyLktleWJvYXJkLkJBQ0tTUEFDRSkge1xuXHRcdFx0XHRcdHRoaXMucGhhc2VyVGV4dC50ZXh0ID0gdGhpcy5waGFzZXJUZXh0LnRleHQuc2xpY2UoMCwgLTEpO1xuXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IFxuXG5cdFx0XHRcdGlmICh0aGlzLnBoYXNlclRleHQudGV4dC5sZW5ndGggKyAxID4gdGhpcy5tYXhMZW5ndGgpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMucGhhc2VyVGV4dC50ZXh0ICs9IGUua2V5O1xuXHRcdFx0XHR0aGlzLnRleHQgPSB0aGlzLnBoYXNlclRleHQudGV4dDtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJlbmRlcigpIHtcblx0XHRcdFxuXHRcdH1cblx0fVxufSIsImltcG9ydCBTdGF0ZUNvbnRyb2xsZXIgZnJvbSBcIi4vc3RhdGVDb250cm9sbGVyXCI7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5pbXBvcnQgU3RhZ2VTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9zdGFnZVNlcnZpY2VcIjtcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aFNlcnZpY2VcIjtcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vbWF6ZVwiO1xuaW1wb3J0IFV0aWwgZnJvbSBcIi4uL3V0aWwvdXRpbFwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uL3ZvL3VzZXJcIjtcbmltcG9ydCBSZWNvcmRTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9yZWNvcmRTZXJ2aWNlXCI7XG5pbXBvcnQgUmVjb3JkIGZyb20gXCIuLi92by9yZWNvcmRcIjtcbmltcG9ydCBSYW5rU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvcmFua1NlcnZpY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VydmljZUNvbnRyb2xsZXIgaW1wbGVtZW50cyBDb250cm9sbGVyIHtcblx0Z2FtZSA6IFBoYXNlci5HYW1lO1xuXG5cdHN0YWdlU2VydmljZSA6IFN0YWdlU2VydmljZTtcblx0YXV0aFNlcnZpY2UgOiBBdXRoU2VydmljZTtcblx0cmVjb3JkU2VydmljZSA6IFJlY29yZFNlcnZpY2U7XG5cdHJhbmtTZXJ2aWNlIDogUmFua1NlcnZpY2U7XG5cblx0Ly8gSXQgaXMgbmVjZXNzYXJ5IGZvciBjb250cm9saW5nIHN0YXRlLlxuXHRzdGF0ZUNvbnRyb2xsZXIgOiBTdGF0ZUNvbnRyb2xsZXI7XG5cblx0Y29uc3RydWN0b3IoZ2FtZTogR2FtZS5NYXplKSB7XG5cdFx0dGhpcy5nYW1lID0gZ2FtZTtcdFx0XG5cdFx0dGhpcy5zdGFnZVNlcnZpY2UgPSBuZXcgU3RhZ2VTZXJ2aWNlKCk7XG5cdFx0dGhpcy5hdXRoU2VydmljZSA9IG5ldyBBdXRoU2VydmljZSgpO1xuXHRcdHRoaXMucmVjb3JkU2VydmljZSA9IG5ldyBSZWNvcmRTZXJ2aWNlKCk7XG5cdFx0dGhpcy5yYW5rU2VydmljZSA9IG5ldyBSYW5rU2VydmljZSgpO1x0XHRcblx0XHRcblx0XHR0aGlzLnN0YXRlQ29udHJvbGxlciA9IGdhbWUuc3RhdGVDb250cm9sbGVyO1xuXHR9XHRcblx0XG5cdHB1YmxpYyBsb2dpbih1c2VySWQsIGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5hdXRoU2VydmljZS5sb2dpbih1c2VySWQsIGNhbGxiYWNrKTtcblx0fVxuXG5cdHB1YmxpYyByZWdpc3RlclVzZXIodXNlcjogVXNlcikge1xuXHRcdHRoaXMuYXV0aFNlcnZpY2UucmVnaXN0ZXJVc2VyKHVzZXIpO1xuXHR9XG5cblx0cHVibGljIGdldFJlY29yZCgpIDogUmVjb3JkIHtcblx0XHRjb25zdCB1c2VySWQgPSB0aGlzLmF1dGhTZXJ2aWNlLmdldExhc3RMb2dnZWRJblVzZXIoKS51c2VySWQ7XG5cdFx0Y29uc3QgcmVjb3JkID0gdGhpcy5yZWNvcmRTZXJ2aWNlLmdldFJlY29yZCh1c2VySWQpO1xuXHRcdHJldHVybiByZWNvcmQ7XG5cdH1cblxuXHRwdWJsaWMgZ2V0U3RhZ2VJbmZvcm1hdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGFnZVNlcnZpY2UuZ2V0U3RhZ2VJbmZvcm1hdGlvbigpO1xuXHR9XG5cblx0cHVibGljIHJlY29yZFJhbmsocmVjb3JkOiBSZWNvcmQpIHtcblx0XHR0aGlzLnJlY29yZFNlcnZpY2Uuc2V0UmVjb3JkKHJlY29yZCk7XG5cdH1cbn1cbiIsImltcG9ydCB7IEludHJvIH0gZnJvbSAnLi4vc3RhdGUvaW50cm8nO1xuaW1wb3J0IHsgTG9naW4gfSBmcm9tICcuLi9zdGF0ZS9sb2dpbic7XG5pbXBvcnQgeyBMZXZlbCB9IGZyb20gJy4uL3N0YXRlL2xldmVsJztcbmltcG9ydCB7IFBsYXkgfSBmcm9tICcuLi9zdGF0ZS9wbGF5JztcbmltcG9ydCB7IFJlZ2lzdGVyIH0gZnJvbSAnLi4vc3RhdGUvcmVnaXN0ZXInO1xuXG5pbXBvcnQgU2VydmljZUNvbnRyb2xsZXIgZnJvbSAnLi9zZXJ2aWNlQ29udHJvbGxlcic7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi4vbWF6ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlQ29udHJvbGxlciB7XG5cdHN0YXRlTWFuYWdlciA6IFBoYXNlci5TdGF0ZU1hbmFnZXI7XG5cdGdhbWUgOiBQaGFzZXIuR2FtZTtcblxuXHR3aWR0aDogbnVtYmVyO1xuXHRoZWlnaHQ6IG51bWJlcjtcblxuXG5cdGdhbWVWZXJzaW9uOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0fVxuXG5cdHB1YmxpYyBpbml0aWFsaXplKGdhbWU6IEdhbWUuTWF6ZSwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGdhbWVWZXJzaW9uOiBzdHJpbmcpIHtcblx0XHR0aGlzLnN0YXRlTWFuYWdlciA9IG5ldyBQaGFzZXIuU3RhdGVNYW5hZ2VyKGdhbWUpO1xuXHRcdHRoaXMuZ2FtZSA9IGdhbWU7XG5cdFx0dGhpcy5nYW1lLnN0YXRlID0gdGhpcy5zdGF0ZU1hbmFnZXI7XG5cdFx0dGhpcy5nYW1lVmVyc2lvbiA9IGdhbWVWZXJzaW9uO1xuXG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRzdGFydFN0YXRlKHN0YXRlPyA6IHN0cmluZykge1xuXHRcdGxldCBzdGFydGluZ1N0YXRlID0gJ0ludHJvJztcblx0XHRpZiAoc3RhdGUgPT09ICd1bmRlZmluZWQnIHx8IHN0YXRlID09PSBudWxsKSB7XG5cdFx0XHRzdGFydGluZ1N0YXRlID0gc3RhdGU7XG5cdFx0fVxuXG5cdFx0dGhpcy5nb1N0YXRlKHN0YXJ0aW5nU3RhdGUsIHRydWUsIHRydWUsICdIb3Jyb3IgTWF6ZScsIHRoaXMuZ2FtZVZlcnNpb24pO1xuXHR9XG5cblx0cHVibGljIGdvU3RhdGUoc3RhdGU6IHN0cmluZywgY2xlYXJXb3JsZD86IGJvb2xlYW4sIGNsZWFyQ2FjaGU/OiBib29sZWFuLCAuLi5hcmdzOiBhbnlbXSkge1xuXHRcdGlmICghdGhpcy5zdGF0ZU1hbmFnZXIuY2hlY2tTdGF0ZShzdGF0ZSkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgVGhpcyBzdGF0ZSgke3N0YXRlfSkgZG9lcyBub3QgZXhpc3QhYCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zdGF0ZU1hbmFnZXIuc3RhcnQoc3RhdGUsIGNsZWFyV29ybGQsIGNsZWFyQ2FjaGUsIC4uLmFyZ3MpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0KCkge1xuXHRcdHRoaXMuYWRkKCdJbnRybycsIEludHJvLCB0cnVlKTtcblx0XHR0aGlzLmFkZCgnTG9naW4nLCBMb2dpbiwgZmFsc2UpO1xuXHRcdHRoaXMuYWRkKCdSZWdpc3RlcicsIFJlZ2lzdGVyLCBmYWxzZSk7XG5cdFx0dGhpcy5hZGQoJ0xldmVsJywgTGV2ZWwsIGZhbHNlKTtcblx0XHR0aGlzLmFkZCgnUGxheScsIFBsYXksIGZhbHNlKTtcblx0fVxuXG5cdHByaXZhdGUgYWRkKGtleSwgc3RhdGUsIGF1dGhTdGFydD8pIHtcblx0XHR0aGlzLnN0YXRlTWFuYWdlci5hZGQoa2V5LCBzdGF0ZSwgYXV0aFN0YXJ0KTtcblx0fVxufSIsImltcG9ydCBTZXNzaW9uIGZyb20gXCIuLi9zZXNzaW9uL3Nlc3Npb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgREFPPFQ+IHtcblx0c2Vzc2lvbjogU2Vzc2lvbjtcblx0Y29uc3RydWN0b3Ioc2Vzc2lvbjogU2Vzc2lvbikge1xuXHRcdHRoaXMuc2Vzc2lvbiA9IHNlc3Npb247XG5cdH1cblxuXHRwdWJsaWMgYWJzdHJhY3QgaW5zZXJ0KHRhYmxlOiBzdHJpbmcsIG9iajogVCk6IFQ7XG5cdHB1YmxpYyBhYnN0cmFjdCBzZWxlY3QodGFibGU6IHN0cmluZywga2V5OiBzdHJpbmcpOiBUO1xuXHRwdWJsaWMgYWJzdHJhY3QgdXBkYXRlKHRhYmxlOiBzdHJpbmcsIGtleTogc3RyaW5nLCBvYmo6IFQpOiBUO1xuXHRwdWJsaWMgYWJzdHJhY3QgZGVsZXRlKHRhYmxlOiBzdHJpbmcsIGtleTogc3RyaW5nKTogYm9vbGVhbjtcblx0cHVibGljIGFic3RyYWN0IHNlbGVjdEFsbCh0YWJsZTogc3RyaW5nKTogYW55Oy8vQXJyYXk8VD47XG59IiwiaW1wb3J0IERBTyBmcm9tIFwiLi9kYW9cIjtcbmltcG9ydCBSZWNvcmQgZnJvbSBcIi4uL3ZvL3JlY29yZFwiO1xuXG5leHBvcnQgY2xhc3MgUmVjb3JkRGFvIGV4dGVuZHMgREFPPFJlY29yZD4ge1xuXG5cdHB1YmxpYyBpbnNlcnQodGFibGU6IHN0cmluZywgb2JqOiBSZWNvcmQpOiBSZWNvcmQge1xuXHRcdHRoaXMuc2Vzc2lvbi5zZXQodGFibGUsIG9iai51c2VySWQsIG9iai50b1N0cmluZygpKTtcblxuXHRcdHJldHVybiBvYmo7XG5cdH1cblxuXHRwdWJsaWMgc2VsZWN0KHRhYmxlOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKTogUmVjb3JkIHtcblx0XHRjb25zdCByZWNvcmREYXRhID0gdGhpcy5zZXNzaW9uLmdldCh0YWJsZSwgdXNlcklkKTtcblx0XHRjb25zdCByZWNvcmQ6IFJlY29yZCA9IFJlY29yZC5ieShyZWNvcmREYXRhKTtcblx0XHRyZXR1cm4gcmVjb3JkO1xuXHR9XG5cblx0cHVibGljIHVwZGF0ZSh0YWJsZTogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgb2JqOiBSZWNvcmQpOiBSZWNvcmQge1xuXHRcdHRoaXMuc2Vzc2lvbi5zZXQodGFibGUsIHVzZXJJZCwgb2JqLnRvU3RyaW5nKCkpO1xuXHRcdFxuXHRcdHJldHVybiBvYmo7XG5cdH1cblxuXHRwdWJsaWMgZGVsZXRlKHRhYmxlOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0bGV0IGlzU3VjY2VzcyA9IHRydWU7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuc2Vzc2lvbi5yZW1vdmUodGFibGUsIHVzZXJJZCk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRpc1N1Y2Nlc3MgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaXNTdWNjZXNzO1xuXHR9XG5cblx0cHVibGljIHNlbGVjdEFsbCh0YWJsZTogc3RyaW5nKTogYW55IHtcblx0XHRjb25zdCBvYmpzID0gKDxhbnk+dGhpcykuc2Vzc2lvbi5hbGxTdG9yYWdlKCk7XG5cdFx0Y29uc3Qgb2JqID0gb2Jqc1t0YWJsZV07XG5cblx0XHRyZXR1cm4gb2JqO1xuXHR9XG59IiwiaW1wb3J0IERBTyBmcm9tIFwiLi9kYW9cIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuLi92by91c2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyRGFvIGV4dGVuZHMgREFPPFVzZXI+IHtcblx0cHJpdmF0ZSByZWFkb25seSB1c2VyS2V5ID0gJ21hemVVc2VyUmVwbyc7XG5cdFxuXHRwdWJsaWMgaW5zZXJ0KHRhYmxlOiBzdHJpbmcsIG9iajogVXNlcik6IFVzZXIge1xuXHRcdHRoaXMuc2Vzc2lvbi5zZXQodGFibGUsIG9iai51c2VySWQsIG9iai50b1N0cmluZygpKTtcblxuXHRcdHJldHVybiBvYmo7XG5cdH1cblxuXHRwdWJsaWMgc2VsZWN0KHRhYmxlOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKTogVXNlciB7XG5cdFx0Y29uc3QgdXNlckpzb24gPSB0aGlzLnNlc3Npb24uZ2V0KHRhYmxlLCB1c2VySWQpO1xuXG5cdFx0Y29uc3QgdXNlcjogVXNlciA9IFVzZXIuYnkodXNlckpzb24pO1xuXHRcdHJldHVybiB1c2VyO1xuXHR9XG5cblx0cHVibGljIHVwZGF0ZSh0YWJsZTogc3RyaW5nLHVzZXJJZDogc3RyaW5nLCBvYmo6IFVzZXIpOiBVc2VyIHtcblx0XHR0aGlzLnNlc3Npb24uc2V0KHRhYmxlLCB1c2VySWQsIG9iai50b1N0cmluZygpKTtcblx0XHRcblx0XHRyZXR1cm4gb2JqO1xuXHR9XG5cblx0cHVibGljIGRlbGV0ZSh0YWJsZTogc3RyaW5nLCB1c2VySWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdGxldCBpc1N1Y2Nlc3MgPSB0cnVlO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnNlc3Npb24ucmVtb3ZlKHRhYmxlLCB1c2VySWQpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0aXNTdWNjZXNzID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlzU3VjY2Vzcztcblx0fVxuXG5cdHB1YmxpYyBzZWxlY3RBbGwodGFibGU6IHN0cmluZyk6IGFueSB7XG5cdFx0Y29uc3Qgb2JqcyA9ICg8YW55PnRoaXMpLnNlc3Npb24uYWxsU3RvcmFnZSgpO1xuXHRcdGNvbnN0IG9iaiA9IG9ianNbdGFibGVdO1xuXG5cdFx0cmV0dXJuIG9iajtcblx0fVxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL21hemUnO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gNjQwO1xuICAgIGNvbnN0IGhlaWdodCA9IDYwMDsgLy8gMTIwICogNDIwXG4gICAgY29uc3QgcGFyZW50SWQgPSAnZ2FtZSc7XG5cbiAgICAvLyBTaG91bGQgYmUgaW5pdGlhbGl6ZSBnYW1lIG9iamVjdCBhbmQgcnVuXG4gICAgY29uc3QgbWF6ZSA9IG5ldyBHYW1lLk1hemUod2lkdGgsIGhlaWdodCwgcGFyZW50SWQpO1xufTsiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vbm9kZV9tb2R1bGVzL3BoYXNlci1jZS90eXBlc2NyaXB0L3BoYXNlci5kLnRzXCIgLz5cblxuaW1wb3J0IFNlcnZpY2VDb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXIvc2VydmljZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBTdGF0ZUNvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlci9zdGF0ZUNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IG5hbWVzcGFjZSBHYW1lIHtcblx0ZXhwb3J0IGNsYXNzIE1hemUgZXh0ZW5kcyBQaGFzZXIuR2FtZSB7XG5cdFx0c3RhdGljIEdBTUVfVkVSU0lPTiA9IFwidjEuMFwiO1xuXG5cdFx0c2VydmljZUNvbnRyb2xsZXIgOiBTZXJ2aWNlQ29udHJvbGxlcjtcblx0XHRzdGF0ZUNvbnRyb2xsZXIgOiBTdGF0ZUNvbnRyb2xsZXI7XG5cblx0XHRjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0LCBwYXJlbnRJZCkge1xuXHRcdFx0c3VwZXIod2lkdGgsIGhlaWdodCwgUGhhc2VyLkFVVE8sIHBhcmVudElkLCBudWxsLCBmYWxzZSwgdHJ1ZSwgbnVsbCk7XG5cblx0XHRcdHRoaXMuc2VydmljZUNvbnRyb2xsZXIgPSBuZXcgU2VydmljZUNvbnRyb2xsZXIodGhpcyk7XG5cblx0XHRcdHRoaXMuc3RhdGVDb250cm9sbGVyID0gbmV3IFN0YXRlQ29udHJvbGxlcigpO1xuXHRcdFx0dGhpcy5zdGF0ZUNvbnRyb2xsZXIuaW5pdGlhbGl6ZSh0aGlzLCB3aWR0aCwgaGVpZ2h0LCBNYXplLkdBTUVfVkVSU0lPTik7XG5cdFx0XHR0aGlzLnN0YXRlQ29udHJvbGxlci5zdGFydFN0YXRlKCk7XG5cdFx0fVxuXHR9XG59IiwiaW1wb3J0IFV0aWwgZnJvbSBcIi4uL3V0aWwvdXRpbFwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uL3ZvL3VzZXJcIjtcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlXCI7XG5pbXBvcnQgREFPIGZyb20gXCIuLi9kYW8vZGFvXCI7XG5pbXBvcnQgeyBVc2VyRGFvIH0gZnJvbSBcIi4uL2Rhby91c2VyRGFvXCI7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXNzaW9uIH0gZnJvbSBcIi4uL3Nlc3Npb24vbG9jYWxTdG9yYWdlU2Vzc2lvblwiO1xuaW1wb3J0IFNlc3Npb24gZnJvbSBcIi4uL3Nlc3Npb24vc2Vzc2lvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoU2VydmljZSBpbXBsZW1lbnRzIFNlcnZpY2Uge1xuXHR1c2VyRGFvIDogREFPPFVzZXI+O1xuXHRzZXNzaW9uIDogU2Vzc2lvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IFRBQkxFX0xBU1RfTE9HR0VEX0lOID0gJ2xhc3RMb2dnZWRJblVzZXInO1xuXHRwcml2YXRlIHJlYWRvbmx5IFVTRVJfVEFCTEUgPSAnbWF6ZVVzZXJSZXBvJztcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnNlc3Npb24gPSBuZXcgTG9jYWxTdG9yYWdlU2Vzc2lvbigpO1xuXHRcdHRoaXMudXNlckRhbyA9IG5ldyBVc2VyRGFvKHRoaXMuc2Vzc2lvbik7XG5cdH1cblx0XG5cdHB1YmxpYyBpbml0aWFsaXplKCkge1xuXHRcdFxuXHR9XG5cblx0cHVibGljIGdldExhc3RMb2dnZWRJblVzZXIoKSA6IFVzZXIge1xuXHRcdGNvbnN0IG9iaiA9IHRoaXMudXNlckRhby5zZWxlY3RBbGwodGhpcy5UQUJMRV9MQVNUX0xPR0dFRF9JTik7XG5cdFx0bGV0IHVzZXJPYmo7XG5cdFx0bGV0IHVzZXI7XG5cdFx0XG5cdFx0dHJ5IHtcblx0XHRcdHVzZXJPYmogPSBKU09OLnBhcnNlKG9iaik7XG5cdFx0XHRjb25zdCB1c2VySWQgPSBPYmplY3Qua2V5cyh1c2VyT2JqKVswXTtcblx0XHRcdHVzZXIgPSB1c2VyT2JqW3VzZXJJZF07XG5cdFx0XHR1c2VyID0gSlNPTi5wYXJzZSh1c2VyKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHR1c2VyID0gbnVsbDtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHVzZXI7XG5cdH1cblxuXHRwdWJsaWMgcmVnaXN0ZXJVc2VyKHVzZXIgOiBVc2VyKSB7XG5cdFx0dGhpcy51c2VyRGFvLmluc2VydCh0aGlzLlVTRVJfVEFCTEUsIHVzZXIpO1xuXHRcdHRoaXMudXNlckRhby5pbnNlcnQodGhpcy5UQUJMRV9MQVNUX0xPR0dFRF9JTiwgdXNlcik7XG5cdH1cblxuXHRwdWJsaWMgbG9naW4odXNlcklkOiBzdHJpbmcsIGNhbGxiYWNrOiAodXNlcjogVXNlciwgaXNTdWNjZXNzOiBib29sZWFuKSA9PiB2b2lkKSB7XG5cdFx0Y29uc3QgdXNlciA9IHRoaXMudXNlckRhby5zZWxlY3QodGhpcy5VU0VSX1RBQkxFLCB1c2VySWQpO1xuXHRcdGlmICh1c2VyKSB7XG5cdFx0XHRjYWxsYmFjayh1c2VyLCB0cnVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2FsbGJhY2sobnVsbCwgZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBsb2dvdXQodXNlcklkKSB7XG5cdFx0Ly9UT0RPOiBpbXBsZW1lbnRzIGl0LlxuXG5cdFx0Y29uc3QgdXNlciA9IHRoaXMudXNlckRhby5zZWxlY3QodGhpcy5VU0VSX1RBQkxFLCB1c2VySWQpO1xuXHRcdFxuXHRcdGNvbnNvbGUubG9nKCduZXh0IHVzZXIgd291bGQgYmUgcmVtb3ZlZC4nKTtcblx0XHRjb25zb2xlLmxvZyh1c2VyKTtcblx0XHR0aGlzLnVzZXJEYW8uZGVsZXRlKHRoaXMuVVNFUl9UQUJMRSwgdXNlcklkKTtcblx0fVxufSIsImltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlXCI7XG5pbXBvcnQgREFPIGZyb20gXCIuLi9kYW8vZGFvXCI7XG5pbXBvcnQgeyBSYW5rIH0gZnJvbSBcIi4uL3ZvL3JhbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFua1NlcnZpY2UgaW1wbGVtZW50cyBTZXJ2aWNlIHtcblx0cmFua0luZm86IGFueTtcblx0cmFua0RBTyA6IERBTzxSYW5rPjtcblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSgpIHtcblx0XHRcblx0fVxuXG5cdHB1YmxpYyBjYWxjdWxhdGVSYW5rKHN0YWdlSWQ6IG51bWJlciwgZWxhcHNlZFRpbWU6IG51bWJlcikgOiBSYW5rIHtcblx0XHRjb25zdCByYW5rTWV0cml4ID0ge1xuXHRcdFx0MDoge1xuXHRcdFx0XHQxMDogUmFuay5TLFxuXHRcdFx0XHQxNTogUmFuay5BLFxuXHRcdFx0XHQyMDogUmFuay5CLFxuXHRcdFx0XHQyNTogUmFuay5DLFxuXHRcdFx0XHQzMDogUmFuay5ELFxuXHRcdFx0XHQzNTogUmFuay5FLFxuXHRcdFx0fSxcblx0XHRcdDE6IHtcblx0XHRcdFx0MTA6IFJhbmsuUyxcblx0XHRcdFx0MTU6IFJhbmsuQSxcblx0XHRcdFx0MjA6IFJhbmsuQixcblx0XHRcdFx0MjU6IFJhbmsuQyxcblx0XHRcdFx0MzA6IFJhbmsuRCxcblx0XHRcdFx0MzU6IFJhbmsuRSxcblx0XHRcdH0sXG5cdFx0XHQyOiB7XG5cdFx0XHRcdDEwOiBSYW5rLlMsXG5cdFx0XHRcdDE1OiBSYW5rLkEsXG5cdFx0XHRcdDIwOiBSYW5rLkIsXG5cdFx0XHRcdDI1OiBSYW5rLkMsXG5cdFx0XHRcdDMwOiBSYW5rLkQsXG5cdFx0XHRcdDM1OiBSYW5rLkUsXG5cdFx0XHR9LFxuXHRcdFx0Mzoge1xuXHRcdFx0XHQxMDogUmFuay5TLFxuXHRcdFx0XHQxNTogUmFuay5BLFxuXHRcdFx0XHQyMDogUmFuay5CLFxuXHRcdFx0XHQyNTogUmFuay5DLFxuXHRcdFx0XHQzMDogUmFuay5ELFxuXHRcdFx0XHQzNTogUmFuay5FLFxuXHRcdFx0fSxcblx0XHRcdDQ6IHtcblx0XHRcdFx0MTA6IFJhbmsuUyxcblx0XHRcdFx0MTU6IFJhbmsuQSxcblx0XHRcdFx0MjA6IFJhbmsuQixcblx0XHRcdFx0MjU6IFJhbmsuQyxcblx0XHRcdFx0MzA6IFJhbmsuRCxcblx0XHRcdFx0MzU6IFJhbmsuRSxcblx0XHRcdH0sXG5cdFx0XHQ1OiB7XG5cdFx0XHRcdDEwOiBSYW5rLlMsXG5cdFx0XHRcdDE1OiBSYW5rLkEsXG5cdFx0XHRcdDIwOiBSYW5rLkIsXG5cdFx0XHRcdDI1OiBSYW5rLkMsXG5cdFx0XHRcdDMwOiBSYW5rLkQsXG5cdFx0XHRcdDM1OiBSYW5rLkUsXG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IHN0YWdlUmFua01ldHJpeCA9IHJhbmtNZXRyaXhbc3RhZ2VJZF07XG5cdFx0Zm9yIChsZXQga2V5IGluIHN0YWdlUmFua01ldHJpeCkge1xuXHRcdFx0Y29uc3QgdGltZUxpbWl0ID0gcGFyc2VJbnQoa2V5KTtcblx0XHRcdGlmICh0aW1lTGltaXQgPiBlbGFwc2VkVGltZSkge1xuXHRcdFx0XHRyZXR1cm4gc3RhZ2VSYW5rTWV0cml4W2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFJhbmsuRjtcblx0fVxuXG5cdGxvYWRSYW5rSW5mb3JtYXRpb24oKSB7XG5cblx0fVxufSIsImltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlXCI7XG5pbXBvcnQgREFPIGZyb20gXCIuLi9kYW8vZGFvXCI7XG5pbXBvcnQgUmVjb3JkIGZyb20gXCIuLi92by9yZWNvcmRcIjtcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlc3Npb24gfSBmcm9tIFwiLi4vc2Vzc2lvbi9sb2NhbFN0b3JhZ2VTZXNzaW9uXCI7XG5pbXBvcnQgeyBSZWNvcmREYW8gfSBmcm9tIFwiLi4vZGFvL3JlY29yZERhb1wiO1xuaW1wb3J0IFNlc3Npb24gZnJvbSBcIi4uL3Nlc3Npb24vc2Vzc2lvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNvcmRTZXJ2aWNlIGltcGxlbWVudHMgU2VydmljZSB7XG5cdHJlY29yZERhbyA6IERBTzxSZWNvcmQ+O1xuXHRzZXNzaW9uIDogU2Vzc2lvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IFJFQ09SRF9UQUJMRSA9ICdtYXplUmVjb3JkUmVwbyc7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5zZXNzaW9uID0gbmV3IExvY2FsU3RvcmFnZVNlc3Npb24oKTtcblx0XHR0aGlzLnJlY29yZERhbyA9IG5ldyBSZWNvcmREYW8odGhpcy5zZXNzaW9uKTtcblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG5cdH1cblxuXHRwdWJsaWMgZ2V0UmVjb3JkKHVzZXJJZDogc3RyaW5nKTogUmVjb3JkIHtcblx0XHRjb25zdCByZWNvcmQgPSB0aGlzLnJlY29yZERhby5zZWxlY3QodGhpcy5SRUNPUkRfVEFCTEUsIHVzZXJJZCk7XG5cdFx0cmV0dXJuIHJlY29yZDtcblx0fVxuXG5cdHB1YmxpYyBzZXRSZWNvcmQocmVjb3JkOiBSZWNvcmQpIHtcblx0XHR0aGlzLnJlY29yZERhby5pbnNlcnQodGhpcy5SRUNPUkRfVEFCTEUsIHJlY29yZCk7XG5cdH1cblxuXHRcbn0iLCJpbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZVwiO1xuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi4vdm8vc3RhZ2VcIjtcbmltcG9ydCB7IFBvaW50IH0gZnJvbSBcIi4uL3ZvL3BvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWdlU2VydmljZSBpbXBsZW1lbnRzIFNlcnZpY2Uge1xuXHRzdGF0aWMgTlVNX09GX1NUQUdFID0gNTtcblx0c3RhZ2VNYXAgOiBhbnk7XG5cdFxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnN0YWdlTWFwID0ge307XG5cdFx0dGhpcy5nZW5lcmF0ZVN0YWdlTWFwKCk7XG5cdH1cblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSgpIHsgfVxuXG5cdHB1YmxpYyBnZXRTdGFnZUluZm9ybWF0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YWdlTWFwO1xuXHR9XG5cblx0Ly8gTG9hZCBTdGFnZSBNYXAgSW5mb3JtYXRpb25cblx0cHJpdmF0ZSBnZW5lcmF0ZVN0YWdlTWFwKCkge1xuXHRcdGZvciAobGV0IGk9MDsgaTxTdGFnZVNlcnZpY2UuTlVNX09GX1NUQUdFOyBpKyspIHtcblx0XHRcdGxldCB6ZXJvRm9ybWF0ID0gJzAwMCcgKyBpO1xuXHRcdFx0bGV0IG1hcFNlcSA9IHplcm9Gb3JtYXQuc2xpY2UoLTMpO1xuXG5cdFx0XHRjb25zdCBmbG9vclBhdGggPSAnYXNzZXRzL2ltZy9tYXBzL2Zsb29yLScgKyBtYXBTZXEgKyAnLnBuZyc7XG5cdFx0XHRjb25zdCB3YWxsUGF0aCA9ICdhc3NldHMvaW1nL21hcHMvd2FsbHMtJyArIG1hcFNlcSArICcucG5nJztcblxuXHRcdFx0Y29uc3Qgc3RhZ2UgPSBuZXcgU3RhZ2UoaSwgZmxvb3JQYXRoLCB3YWxsUGF0aCwgXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRQb2ludC5vbigyMzUsIDg1KSxcblx0XHRcdFx0XHRQb2ludC5vbig1NjUsIDQwMClcblx0XHRcdFx0XSk7XG5cdFx0XHRcblx0XHRcdHRoaXMuc3RhZ2VNYXBbaV0gPSBzdGFnZTtcblx0XHR9XG5cdH1cbn0iLCJpbXBvcnQgU2Vzc2lvbiBmcm9tIFwiLi9zZXNzaW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VTZXNzaW9uIGltcGxlbWVudHMgU2Vzc2lvbiB7XG5cdGdldCh0YWJsZTogc3RyaW5nLCBrZXk6IHN0cmluZykgOiBhbnkge1xuXHRcdGNvbnN0IHRhYmxlRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRhYmxlKSB8fCBudWxsO1xuXHRcdGlmICghdGFibGVEYXRhKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRjb25zdCB0YWJsZUpzb25PYmogPSBKU09OLnBhcnNlKHRhYmxlRGF0YSk7XG5cdFx0bGV0IGl0ZW0gPSB0YWJsZUpzb25PYmpba2V5XTtcblx0XHRpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gaXRlbTtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRsZXQgb2JqID0gSlNPTi5wYXJzZShpdGVtKTtcdFxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XHRcdFxuXHRcdHJldHVybiBpdGVtO1xuXHR9XG5cblx0c2V0KHRhYmxlOiBzdHJpbmcsIGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG5cdFx0Y29uc3Qgb3JpZ2luYWxEYXRhT2JqID0gdGhpcy5nZXQodGFibGUsIGtleSk7XG5cdFx0aWYgKCFvcmlnaW5hbERhdGFPYmopIHtcblx0XHRcdGxldCBkYXRhID0ge307XG5cdFx0XHRkYXRhW2tleV0gPSB2YWx1ZTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRhYmxlLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBqc29uVmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKTtcblx0XHRcdGxldCBkYXRhID0ge307XG5cdFx0XHRkYXRhW2tleV0gPSBqc29uVmFsdWU7XG5cblx0XHRcdGxldCBkYXRhMiA9IHt9O1xuXHRcdFx0ZGF0YTJba2V5XSA9IG9yaWdpbmFsRGF0YU9iajtcblx0XHRcdFxuXHRcdFx0Y29uc3Qgb2JqID0gdGhpcy5leHRlbmQoZGF0YTIsIGRhdGEpO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0odGFibGUsIEpTT04uc3RyaW5naWZ5KG9iaikpO1xuXHRcdH1cblx0fVxuXG5cdHJlbW92ZShrZXk6IHN0cmluZykge1xuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG5cdH1cblxuXHRhbGxTdG9yYWdlKCkge1xuXHRcdGxldCBhcmNoaXZlID0ge307XG5cdFx0bGV0IGtleXMgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpO1xuXHRcdGxldCBpID0ga2V5cy5sZW5ndGg7XG5cblx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHRhcmNoaXZlW2tleXNbaV1dID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5c1tpXSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFyY2hpdmU7XG5cdH1cblxuXG5cdHByaXZhdGUgZXh0ZW5kKC4uLmFyZ3MpIHtcblx0XHRsZXQgbywgaSwgaztcblx0XHRmb3IgKG8gPSB7fSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdC8vIGlmIChhcmd1bWVudHNbaV0uY29uc3RydWN0b3IgIT09IE9iamVjdCkgY29udGludWU7XG5cdFx0XHRmb3IgKGsgaW4gYXJndW1lbnRzW2ldKSB7XG5cdFx0XHRcdGlmIChhcmd1bWVudHNbaV0uaGFzT3duUHJvcGVydHkoaykpIHtcblx0XHRcdFx0XHRvW2tdID0gYXJndW1lbnRzW2ldW2tdLmNvbnN0cnVjdG9yID09PSBPYmplY3QgPyB0aGlzLmV4dGVuZChvW2tdIHx8IHt9LCBhcmd1bWVudHNbaV1ba10pIDogYXJndW1lbnRzW2ldW2tdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBvO1xuXHR9XG59IiwiaW1wb3J0IHsgU3RhdGVNYW5hZ2VyLCBHYW1lIH0gZnJvbSBcInBoYXNlci1jZVwiO1xuaW1wb3J0IFNlcnZpY2VDb250cm9sbGVyIGZyb20gXCIuLi9jb250cm9sbGVyL3NlcnZpY2VDb250cm9sbGVyXCI7XG5pbXBvcnQgU3RhdGVDb250cm9sbGVyIGZyb20gXCIuLi9jb250cm9sbGVyL3N0YXRlQ29udHJvbGxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblx0c2VydmljZUNvbnRyb2xsZXIgOiBTZXJ2aWNlQ29udHJvbGxlcjtcblx0c3RhdGVDb250cm9sbGVyIDogU3RhdGVDb250cm9sbGVyO1xuXG5cdGNvbnN0cnVjdG9yKGdhbWUgOiBQaGFzZXIuR2FtZSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHQvLyBGb3IgSWdub3Jpbmcgbm9uLWV4aXN0IHByb3BlcnR5IGVycm9yLlxuXHRcdHRoaXMuc2VydmljZUNvbnRyb2xsZXIgPSAoZ2FtZSBhcyBhbnkpLnNlcnZpY2VDb250cm9sbGVyO1xuXHRcdHRoaXMuc3RhdGVDb250cm9sbGVyID0gKGdhbWUgYXMgYW55KS5zdGF0ZUNvbnRyb2xsZXI7XG5cdH1cblxuXHRnb1N0YXRlKHN0cmluZykge1xuXHRcdHRoaXMuc2VydmljZUNvbnRyb2xsZXIgXG5cdH1cblx0XG59IiwiaW1wb3J0IEJhc2UgZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgSW50cm8gZXh0ZW5kcyBCYXNlIHtcblx0c3RhdGljIGludHJvSW50ZXJ2YWwgPSAyMDAwO1xuXG5cdGdhbWVUaXRsZSA6IHN0cmluZztcblx0Z2FtZVZlcnNpb24gOiBzdHJpbmc7XG5cdGxvZ29UZXh0IDogUGhhc2VyLlRleHQ7XG5cblx0Y29uc3RydWN0b3IoZ2FtZTogUGhhc2VyLkdhbWUpIHtcblx0XHRzdXBlcihnYW1lKTtcblx0fVxuXG5cdGluaXQoZ2FtZVRpdGxlLCBnYW1lVmVyc2lvbikge1xuXHRcdHRoaXMuZ2FtZVRpdGxlID0gZ2FtZVRpdGxlO1xuXHRcdHRoaXMuZ2FtZVZlcnNpb24gPSBnYW1lVmVyc2lvbjtcblx0fVxuXG5cdHByZWxvYWQoKSB7XG5cdFx0XG5cdH1cblxuXHRjcmVhdGUoKSB7XG5cdFx0dGhpcy5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzNiM2IzYic7XG5cblx0XHR0aGlzLmxvZ29UZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KFxuXHRcdFx0dGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIFxuXHRcdFx0dGhpcy5nYW1lLndvcmxkLmNlbnRlclksIFxuXHRcdFx0dGhpcy5nYW1lVGl0bGUsXG5cdFx0XHR7XG5cdFx0XHRcdGZvbnQ6ICc4MHB4IEFyaWFsOycsXG5cdFx0XHRcdGZpbGw6ICcjZmZmZmZmJ1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0dGhpcy5sb2dvVGV4dC5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuXHRcdHRoaXMubG9nb1RleHQuYWxwaGEgPSAwLjg7XG5cblx0XHRjb25zdCBwID0gdGhpcy5nYW1lLndvcmxkLmJvdW5kcy5ib3R0b21SaWdodDtcblx0XHRcblx0XHRjb25zdCBmb290ZXIgPSB0aGlzLmdhbWUuYWRkLnRleHQoXG5cdFx0XHRwLngtNTAsXG5cdFx0XHRwLnktMzAsXG5cdFx0XHR0aGlzLmdhbWVWZXJzaW9uLFxuXHRcdFx0e1xuXHRcdFx0XHRmb250OiAnMTVweCBBcmlhbDsnLFxuXHRcdFx0XHRmaWxsOiAnI2VlZWVlZSdcblx0XHRcdH1cblx0XHQpO1xuXHRcdGZvb3Rlci5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdHNlbGYuc3RhdGVDb250cm9sbGVyLmdvU3RhdGUoJ0xvZ2luJyk7XG5cdFx0fSwgSW50cm8uaW50cm9JbnRlcnZhbCk7XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cblx0fVxufSIsImltcG9ydCBTZXJ2aWNlQ29udHJvbGxlciBmcm9tIFwiLi4vY29udHJvbGxlci9zZXJ2aWNlQ29udHJvbGxlclwiO1xuaW1wb3J0IEJhc2UgZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IFJlY29yZCwgeyBTdGFnZVJlY29yZCB9IGZyb20gXCIuLi92by9yZWNvcmRcIlxuaW1wb3J0IHsgUmFua1V0aWwgfSBmcm9tIFwiLi4vdm8vcmFua1wiO1xuXG5leHBvcnQgY2xhc3MgTGV2ZWwgZXh0ZW5kcyBCYXNlIHtcblx0cmVhZG9ubHkgbnVtYmVyT2ZTdGFnZVBlclBhZ2UgPSAzO1xuXG5cdGxvd2VyU3RhZ2VCdG4gOiBQaGFzZXIuQnV0dG9uO1xuXHRoaWdoZXJTdGFnZUJ0biA6IFBoYXNlci5CdXR0b247XG5cdFxuXHRudW1iZXJPZlN0YWdlOiBudW1iZXI7XG5cdG51bWJlck9mUGFnZTogbnVtYmVyO1xuXHRjdXJyZW50UGFnZTogbnVtYmVyO1xuXHRzdGFnZU1hcDogYW55O1xuXG5cdHJlY29yZDogUmVjb3JkO1xuXG5cdHN0YWdlQnRuR3JvdXA6IFBoYXNlci5Hcm91cDtcblxuXHRjb25zdHJ1Y3RvcihnYW1lKSB7XG5cdFx0c3VwZXIoZ2FtZSk7XG5cdFx0dGhpcy5jdXJyZW50UGFnZSA9IDE7XG5cdH1cblx0XG5cdGluaXQoc3RhZ2VNYXApIHtcblx0XHR0aGlzLnN0YWdlTWFwID0gc3RhZ2VNYXA7XG5cdFx0dGhpcy5udW1iZXJPZlN0YWdlID0gT2JqZWN0LmtleXMoc3RhZ2VNYXApLmxlbmd0aDtcblx0XHR0aGlzLm51bWJlck9mUGFnZSA9IE1hdGguY2VpbCh0aGlzLm51bWJlck9mU3RhZ2UvdGhpcy5udW1iZXJPZlN0YWdlUGVyUGFnZSk7XG5cdH1cblxuXHRwcmVsb2FkKCkge1xuXHRcdHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdzdGFnZUFycm93cycsICcuLi9hc3NldHMvaW1nL3N0YWdlQXJyb3dzLnBuZycsIDQ4LCA0OCk7XG5cdFx0dGhpcy5yZWNvcmQgPSB0aGlzLnNlcnZpY2VDb250cm9sbGVyLmdldFJlY29yZCgpO1xuXHRcdHRoaXMuc3RhZ2VCdG5Hcm91cCA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcblx0fVxuXG5cdGNyZWF0ZSgpIHtcblx0XHR0aGlzLmdhbWUuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyMzYjNiM2InO1xuXHRcdHRoaXMuZ2FtZS5zdGFnZS5hbHBoYSA9IDAuOTtcblx0XHR0aGlzLmRyYXdTdGFnZUJ0bih0aGlzLmN1cnJlbnRQYWdlKTtcblx0XHR0aGlzLmRyYXdTdGFnZU1vdmVCdG4oKTtcblx0fVxuXG5cdHVwZGF0ZSgpIHtcblxuXHR9XG5cblx0cHJpdmF0ZSBjbGVhclN0YWdlQnRuRmllbGQoKSB7XG5cdFx0dGhpcy5zdGFnZUJ0bkdyb3VwLmNhbGxBbGwoJ2tpbGwnLCAnJyk7XG5cdH1cblxuXHRwcml2YXRlIGRyYXdTdGFnZUJ0bihwYWdlTnVtKSB7XG5cdFx0dGhpcy5jbGVhclN0YWdlQnRuRmllbGQoKTtcblxuXHRcdGNvbnN0IHdpZHRoID0gMjAwO1xuXHRcdGNvbnN0IGhlaWdodCA9IDIwMDtcblxuXHRcdGxldCBvZmZzZXRYID0gKHRoaXMuZ2FtZS53b3JsZC53aWR0aCAtIDE1MCkgLyB0aGlzLm51bWJlck9mU3RhZ2VQZXJQYWdlOyAvLyAxNTA6IHBhZGRpbmdcblxuXHRcdGxldCBzdGFnZUluZm9zID0ge307XG5cdFx0aWYgKHRoaXMucmVjb3JkKSB7XG5cdFx0XHRzdGFnZUluZm9zID0gdGhpcy5yZWNvcmQucmVjb3Jkcztcblx0XHR9XG5cdFx0XG5cdFx0Y29uc3Qgb2Zmc2V0ID0gKHBhZ2VOdW0tMSkgKiB0aGlzLm51bWJlck9mU3RhZ2VQZXJQYWdlO1xuXHRcdGZvciAobGV0IGk9b2Zmc2V0OyBpPG9mZnNldCt0aGlzLm51bWJlck9mU3RhZ2VQZXJQYWdlOyBpKyspIHtcblx0XHRcdGlmICghdGhpcy5zdGFnZU1hcFtpXSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGxldCBzdGFnZUluZm86IFN0YWdlUmVjb3JkO1xuXHRcdFx0bGV0IHN0YWdlSW5mb1N0ciA9ICcnO1xuXHRcdFx0aWYgKHN0YWdlSW5mb3NbaV0pIHtcblx0XHRcdFx0c3RhZ2VJbmZvID0gc3RhZ2VJbmZvc1tpXTtcblx0XHRcdFx0c3RhZ2VJbmZvU3RyICs9ICdcXG5UaW1lOiAnICsgc3RhZ2VJbmZvLnRpbWUgKyAnIHNlY29uZHMnO1xuXHRcdFx0XHRzdGFnZUluZm9TdHIgKz0gJ1xcblJhbms6ICcgKyBSYW5rVXRpbC52YWx1ZU9mKHN0YWdlSW5mby5yYW5rKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc3RhZ2VCdG5UZXh0ID0gYFN0YWdlLSR7aSsxfWAgKyBzdGFnZUluZm9TdHI7XG5cblx0XHRcdGNvbnN0IG9mZnNldFhPZkJ0biA9IG9mZnNldFggKiAoaSV0aGlzLm51bWJlck9mU3RhZ2VQZXJQYWdlKTtcblxuXHRcdFx0Y29uc3Qgc3RhZ2VCdG4gPSB0aGlzLmdhbWUuYWRkLnRleHQoMTQ1ICsgb2Zmc2V0WE9mQnRuLCA5MCwgc3RhZ2VCdG5UZXh0LCB7XG5cdFx0XHRcdGZpbGw6ICcjZmZmZmZmJyxcblx0XHRcdFx0Zm9udDogJzE1cHggQXJpYWwnXG5cdFx0XHR9KTtcblxuXHRcdFx0c3RhZ2VCdG4uaW5wdXRFbmFibGVkID0gdHJ1ZTtcblx0XHRcdHN0YWdlQnRuLmlucHV0LnVzZUhhbmRDdXJzb3IgPSB0cnVlO1xuXHRcdFx0XG5cdFx0XHRjb25zdCBzdGFnZU51bSA9IGkrMTtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c3RhZ2VCdG4uZXZlbnRzLm9uSW5wdXREb3duLmFkZCgoZSkgPT4ge1xuXHRcdFx0XHRpZiAoY29uZmlybShgU3RhZ2UtJHtzdGFnZU51bX0g7J2064+Z7ZWg6rmM7JqUP2ApKSB7XG5cdFx0XHRcdFx0c2VsZi5zdGF0ZUNvbnRyb2xsZXIuZ29TdGF0ZSgnUGxheScsIHRydWUsIHRydWUsIHNlbGYuc3RhZ2VNYXBbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKTtcblxuXHRcdFx0dGhpcy5zdGFnZUJ0bkdyb3VwLmFkZChzdGFnZUJ0bik7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBkcmF3U3RhZ2VNb3ZlQnRuKCkge1xuXHRcdGNvbnN0IHAgPSB0aGlzLmdhbWUud29ybGQuYm91bmRzO1xuXG5cdFx0dGhpcy5sb3dlclN0YWdlQnRuID0gdGhpcy5nYW1lLmFkZC5idXR0b24oMTAwLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWSAsIFwic3RhZ2VBcnJvd3NcIiwgdGhpcy5idXR0b25DbGlja2VkLCB0aGlzKTtcblx0XHR0aGlzLmhpZ2hlclN0YWdlQnRuID0gdGhpcy5nYW1lLmFkZC5idXR0b24oMTAwLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWSwgXCJzdGFnZUFycm93c1wiLCB0aGlzLmJ1dHRvbkNsaWNrZWQsIHRoaXMpO1xuXG5cdFx0dGhpcy5sb3dlclN0YWdlQnRuLmZyYW1lID0gMDtcblx0XHR0aGlzLmhpZ2hlclN0YWdlQnRuLmZyYW1lID0gMTtcblxuXHRcdC8vIEFsaWduIHN0YWdlIHBhZ2UgbW92ZSBidG5cblx0XHR0aGlzLmxvd2VyU3RhZ2VCdG4ueCA9IDIwO1xuXHRcdHRoaXMuaGlnaGVyU3RhZ2VCdG4ueCA9IHAucmlnaHQgLSAyMCAtIHRoaXMuaGlnaGVyU3RhZ2VCdG4ud2lkdGg7XG5cblx0XHRjb25zdCBzdGFnZVRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIDUwLCAnU3RhZ2UnLCB7XG5cdFx0XHRmaWxsOiAnI2ZmZmZmZicsXG5cdFx0XHRmb250OiAnMjBweCBBcmlhbCdcblx0XHR9KTtcblxuXHRcdHN0YWdlVGV4dC5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuXHR9XG5cblx0cHJpdmF0ZSBidXR0b25DbGlja2VkKGJ1dHRvbiwgcG9pbnRlcikge1xuXHRcdGxldCBjdXJyZW50UGFnZSA9IHRoaXMuY3VycmVudFBhZ2U7XG5cdFx0aWYgKGJ1dHRvbi5mcmFtZSA9PSAwKSB7IC8vIGxvd2VyU3RhZ2VCdG5cblx0XHRcdGlmIChjdXJyZW50UGFnZSA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRyYXdTdGFnZUJ0bigtLXRoaXMuY3VycmVudFBhZ2UpO1xuXHRcdH0gZWxzZSBpZiAoYnV0dG9uLmZyYW1lID09IDEpIHsgLy8gaGlnaGVyU3RhZ2VCdG5cblx0XHRcdGlmIChjdXJyZW50UGFnZSsxID4gdGhpcy5udW1iZXJPZlBhZ2UpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5kcmF3U3RhZ2VCdG4oKyt0aGlzLmN1cnJlbnRQYWdlKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgVXNlciBmcm9tICcuLi92by91c2VyJztcblxuZXhwb3J0IGNsYXNzIExvZ2luIGV4dGVuZHMgQmFzZSB7XG5cdGxvZ2luVGV4dCA6IFBoYXNlci5UZXh0O1xuXHRnYW1lTG9nbyA6IFBoYXNlci5JbWFnZTtcblxuXHRndWVzdFVVSUQgOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoZ2FtZSkge1xuXHRcdHN1cGVyKGdhbWUpO1xuXHR9XG5cblx0cHJlbG9hZCgpIHtcblx0XHR0aGlzLmdhbWUubG9hZC5pbWFnZSgnZ2FtZUxvZ28nLCAnYXNzZXRzL2ltZy9nYW1lbG9nby5wbmcnKTtcblx0fVxuXG5cdGNyZWF0ZSgpIHtcblx0XHR0aGlzLnN0YWdlLmJhY2tncm91bmRDb2xvciA9ICcjRkZGRkZGJztcblxuXHRcdHRoaXMuZ2FtZUxvZ28gPSB0aGlzLmdhbWUuYWRkLmltYWdlKHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCAyMTAsICdnYW1lTG9nbycpO1xuXHRcdHRoaXMuZ2FtZUxvZ28uYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcblxuXHRcdHRoaXMubG9naW5UZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KFxuXHRcdFx0dGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIFxuXHRcdFx0dGhpcy5nYW1lLndvcmxkLmNlbnRlclksIFxuXHRcdFx0J0xvZ2luJyxcblx0XHRcdHtcblx0XHRcdFx0Zm9udDogJzM1cHggQXJpYWw7Jyxcblx0XHRcdFx0ZmlsbDogJyMwMDAwMDAnXG5cdFx0XHR9XG5cdFx0KTtcblx0XHR0aGlzLmxvZ2luVGV4dC5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuXHRcdHRoaXMubG9naW5UZXh0LmFscGhhID0gMC44O1xuXG5cdFx0dGhpcy5sb2dpblRleHQuaW5wdXRFbmFibGVkID0gdHJ1ZTtcblx0XHR0aGlzLmxvZ2luVGV4dC5pbnB1dC51c2VIYW5kQ3Vyc29yID0gdHJ1ZTtcblxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdHRoaXMubG9naW5UZXh0LmV2ZW50cy5vbklucHV0RG93bi5hZGQoKGUpID0+IHtcblx0XHRcdGNvbnN0IHR3ZWVuID0gc2VsZi5nYW1lLmFkZC50d2VlbihzZWxmLmxvZ2luVGV4dCkudG8oe1xuXHRcdFx0XHRhbHBoYTogMC4yXG5cdFx0XHR9LCA3MDAsIFBoYXNlci5FYXNpbmcuUXVhZHJhdGljLk91dCwgZmFsc2UsIDAsIDAsIGZhbHNlKTtcblx0XHRcdFxuXHRcdFx0dHdlZW4ub25Db21wbGV0ZS5hZGQoKGUpID0+IHtcblx0XHRcdFx0bGV0IHVzZXIgPSBzZWxmLnNlcnZpY2VDb250cm9sbGVyLmF1dGhTZXJ2aWNlLmdldExhc3RMb2dnZWRJblVzZXIoKTtcblx0XHRcdFx0aWYgKHVzZXIgJiYgdXNlci51c2VySWQpIHtcblx0XHRcdFx0XHRzZWxmLnNlcnZpY2VDb250cm9sbGVyLmxvZ2luKHVzZXIudXNlcklkLCAodXNlcjogVXNlciwgaXNTdWNjZXNzOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoaXNTdWNjZXNzKSB7XG5cdFx0XHRcdFx0XHRcdGFsZXJ0KGAke3VzZXIudXNlcklkfeuLmCwg64uk7IucIOuwqeusuO2VtOyjvOyFqOq1sOyalC4g7ZmY7JiB7ZWp64uI64ukLmApO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBzdGFnZUluZm8gPSBzZWxmLnNlcnZpY2VDb250cm9sbGVyLmdldFN0YWdlSW5mb3JtYXRpb24oKTtcblx0XHRcdFx0XHRcdFx0c2VsZi5zdGF0ZUNvbnRyb2xsZXIuZ29TdGF0ZSgnTGV2ZWwnLCB0cnVlLCB0cnVlLCBzdGFnZUluZm8pO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0YWxlcnQoJ+yYiOyghOyXkCDrsKnrrLjtlZjsi6Ag7KCB7J20IOyXhuycvOyLnOq1sOyalD8g7IKs7Jqp7J6QIOuTseuhne2ZlOuptOycvOuhnCDsnbTrj5ntlanri4jri6QuJyk7XG5cdFx0XHRcdFx0XHRcdHNlbGYuc3RhdGVDb250cm9sbGVyLmdvU3RhdGUoJ1JlZ2lzdGVyJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XHRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRhbGVydCgn7JiI7KCE7JeQIOuwqeusuO2VmOyLoCDsoIHsnbQg7JeG7Jy87Iuc6rWw7JqUPyDsgqzsmqnsnpAg65Ox66Gd7ZmU66m07Jy866GcIOydtOuPme2VqeuLiOuLpC4nKTtcblx0XHRcdFx0XHRzZWxmLnN0YXRlQ29udHJvbGxlci5nb1N0YXRlKCdSZWdpc3RlcicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCBzZWxmKTtcblxuXHRcdFx0dHdlZW4uc3RhcnQoKTtcblx0XHR9LCB0aGlzKTtcblxuXG5cdFx0dGhpcy5sb2dpblRleHQuZXZlbnRzLm9uSW5wdXRPdmVyLmFkZCgoZSkgPT4ge1xuXHRcdFx0c2VsZi5sb2dpblRleHQuYWxwaGEgPSAwLjU7XG5cdFx0fSwgdGhpcyk7XG5cblx0XHR0aGlzLmxvZ2luVGV4dC5ldmVudHMub25JbnB1dE91dC5hZGQoKGUpID0+IHtcblx0XHRcdHNlbGYubG9naW5UZXh0LmFscGhhID0gMC44O1xuXHRcdH0sIHRoaXMpO1xuXHR9XG5cblx0dXBkYXRlKCkge1xuXG5cdH1cbn0iLCJpbXBvcnQgQmFzZSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gXCIuLi92by9zdGFnZVwiO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tIFwiLi4vdm8vcG9pbnRcIjtcbmltcG9ydCB7IFJlY29yZERhbyB9IGZyb20gXCIuLi9kYW8vcmVjb3JkRGFvXCI7XG5pbXBvcnQgUmVjb3JkLCB7IFN0YWdlUmVjb3JkIH0gZnJvbSBcIi4uL3ZvL3JlY29yZFwiO1xuaW1wb3J0IHsgUmFuayB9IGZyb20gXCIuLi92by9yYW5rXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5IGV4dGVuZHMgQmFzZSB7XG5cdHN0YXRpYyByZWFkb25seSByYXlMZW5ndGggPSA1MDA7XG5cdHN0YXRpYyByZWFkb25seSBudW1PZlJheXMgPSAyMDtcblx0c3RhdGljIHJlYWRvbmx5IGxpZ2h0QW5nbGUgPSBNYXRoLlBJLzQ7IC8vIDQ1IGRlZy5cblxuXHRwcml2YXRlIHJlYWRvbmx5IHNwZWVkID0gMjtcblxuXHR0aW1lciA6IFBoYXNlci5UaW1lcjtcblx0ZWxhcHNlZFRpbWUgOiBudW1iZXI7XG5cdHRpbWVIYW5kbGVyOiBudW1iZXI7XG5cdHRpbWVUZXh0IDogUGhhc2VyLlRleHQ7XG5cdFxuXHRmbG9vciA6IFBoYXNlci5TcHJpdGU7XG5cdHdhbGwgOiBQaGFzZXIuU3ByaXRlO1xuXHR3YWxsc0JpdE1hcCA6IFBoYXNlci5CaXRtYXBEYXRhO1xuXHRtYXNrIDogUGhhc2VyLkdyYXBoaWNzO1xuXHRwbGF5ZXIgOiBQaGFzZXIuU3ByaXRlO1xuXHRwbGF5ZXJQYXRoIDogc3RyaW5nO1xuXG5cdGN1cnNvciA6IFBoYXNlci5DdXJzb3JLZXlzO1xuXHRcblx0c3RhZ2VJbmZvIDogU3RhZ2U7XG5cdGN1cnJlbnRFeGl0UG9pbnQgOiBQb2ludDtcblx0Y3VycmVudEV4aXRHcmFwaGljIDogUGhhc2VyLkdyYXBoaWNzO1xuXG5cdHdhbGxDb2xsaXNpb25Tb3VuZDogUGhhc2VyLlNvdW5kO1xuXHR0YWRhU291bmQ6IFBoYXNlci5Tb3VuZDtcblxuXHRjb25zdHJ1Y3RvcihnYW1lKSB7XG5cdFx0c3VwZXIoZ2FtZSk7XG5cdH1cblxuXHRpbml0KHN0YWdlSW5mbyA6IFN0YWdlKSB7XG5cdFx0dGhpcy5zdGFnZUluZm8gPSBzdGFnZUluZm87XG5cdFx0dGhpcy5wbGF5ZXJQYXRoID0gJ2Fzc2V0cy9pbWcvcGxheWVyLXNwcmVhZHNoZWV0LnBuZyc7XG5cdH1cblxuXHRwcmVsb2FkKCkge1xuXHRcdHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdmbG9vcicsIHRoaXMuc3RhZ2VJbmZvLmZsb29yRmlsZVBhdGgpO1xuXHRcdHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd3YWxsJywgdGhpcy5zdGFnZUluZm8ud2FsbEZpbGVQYXRoKTtcblx0XHR0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgncGxheWVyJywgdGhpcy5wbGF5ZXJQYXRoLCA2NCwgNjQsIDM2KTtcblx0XHR0aGlzLmxvYWQuYXVkaW8oXCJ3YWxsQ29sbGlzaW9uU291bmRcIiwgW1wiYXNzZXRzL21wMy9iZWVwLTAxYS5tcDNcIl0pO1xuXHRcdHRoaXMubG9hZC5hdWRpbyhcInRhZGFTb3VuZFwiLCBbXCJhc3NldHMvbXAzL3RhZGEtMDFhLm1wM1wiXSk7XG5cdH1cblxuXHRjcmVhdGUoKSB7XG5cdFx0dGhpcy53YWxsQ29sbGlzaW9uU291bmQgPSB0aGlzLmFkZC5hdWRpbygnd2FsbENvbGxpc2lvblNvdW5kJyk7XG5cdFx0dGhpcy50YWRhU291bmQgPSB0aGlzLmFkZC5hdWRpbygndGFkYVNvdW5kJyk7XG5cblx0XHR0aGlzLmdhbWUuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyMwMDAwMDAnOyBcblx0XHQvLyB0aGlzLmdhbWUuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJzB4ZmZmZmZmJzsgXG5cblx0XHR0aGlzLmdhbWUud29ybGQuc2V0Qm91bmRzKDAsIDAsIHRoaXMud29ybGQud2lkdGgsIHRoaXMud29ybGQuaGVpZ2h0LTEyMCk7XG5cdFx0XG5cdFx0dGhpcy5jcmVhdGVGbG9vcigpO1xuXHRcdHRoaXMubWFrZUZpcnN0RXhpdFBvaW50KCk7XG5cdFx0dGhpcy5jcmVhdGVXYWxsKCk7XG5cdFx0dGhpcy5jcmVhdGVQbGF5ZXIoKTsgXG5cblx0XHR0aGlzLmdhbWUuY2FtZXJhLmZvbGxvdyh0aGlzLnBsYXllciwgUGhhc2VyLkNhbWVyYS5GT0xMT1dfTE9DS09OLCAwLjEsIDAuMSk7XG5cblx0XHR0aGlzLmNyZWF0ZU1hc2soKTtcblxuXHRcdHRoaXMuZmxvb3IubWFzayA9IHRoaXMubWFzaztcblxuXHRcdHRoaXMudGltZXIgPSB0aGlzLmdhbWUudGltZS5jcmVhdGUoZmFsc2UpO1xuXG5cdFx0dGhpcy5jdXJzb3IgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xuXHRcdHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRDYWxsYmFja3ModGhpcywgKGtleSkgPT4ge1xuXHRcdFx0Ly9UT0RPOiB3YXNkIOqwgOuKpe2VmOqyjCDtlaAg6rKDXG5cdFx0XHRpZiAoa2V5LmtleUNvZGUgPT09IDg3KSB7XHRcdC8vIFcsIFVwXG5cdFx0XHRcdFxuXHRcdFx0fSBlbHNlIGlmIChrZXkua2V5ID09PSA2NSkge1x0Ly8gQSwgTGVmdFxuXHRcdFx0XG5cdFx0XHR9IGVsc2UgaWYgKGtleS5rZXkgPT09IDgzKSB7XHQvLyBTLCBEb3duXG5cdFx0XHRcblx0XHRcdH0gZWxzZSBpZiAoa2V5LmtleSA9PT0gNjgpIHtcdC8vIEQsIFJpZ2h0XG5cdFx0XHRcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMuY3JlYXRlVGltZXIoKTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlVGltZXIoKSB7XG5cdFx0dGhpcy50aW1lVGV4dCA9IHRoaXMuZ2FtZS5hZGQudGV4dCh0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgNTAwLCAnVGltZXI6IDAgc2Vjb25kJywge1xuXHRcdFx0ZmlsbDogJyNmZmZmZmYnLFxuXHRcdFx0Zm9udDogJzE1cHggQXJpYWwnXG5cdFx0fSk7XG5cblx0XHR0aGlzLnN0YXJ0VGltZXIoKTtcblx0fVxuXG5cdHByaXZhdGUgc3RhcnRUaW1lcigpIHtcblx0XHR0aGlzLmVsYXBzZWRUaW1lID0gMDtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHR0aGlzLnRpbWVIYW5kbGVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0c2VsZi5lbGFwc2VkVGltZSsrO1xuXHRcdH0sIDEwMDApO1xuXHR9XG5cblx0cHJpdmF0ZSBzdG9wVGltZXIoKSB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVIYW5kbGVyKTtcblx0fVxuXG5cdHByaXZhdGUgY291bnRUaW1lKCkge1xuXHRcdC8vIHRoaXMuZWxhcHNlZFRpbWUgPSB0aGlzLmdhbWUudGltZS50b3RhbEVsYXBzZWRTZWNvbmRzKCk7XG5cblx0XHRsZXQgdGltZVRleHQgPSAnVGltZXI6ICcgKyB0aGlzLmVsYXBzZWRUaW1lICsgJyBzZWNvbmRzJ1xuXHRcdHRoaXMudGltZVRleHQuc2V0VGV4dCh0aW1lVGV4dCwgdHJ1ZSk7XG5cdH1cblxuXG5cdHVwZGF0ZSgpIHtcblx0XHR0aGlzLm1vdmVQbGF5ZXIoKTtcblx0XHR0aGlzLm1vdmVGbGFzaCgpO1xuXHRcdHRoaXMucmFuZG9tQWxwaGFUbyh0aGlzLmZsb29yKTtcblx0XHR0aGlzLmNvdW50VGltZSgpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHRoaXMuZ2FtZS5kZWJ1Zy5pbnB1dEluZm8oMzIsIDMyKTtcblxuXHRcdFxuXHR9XG5cblx0cHJpdmF0ZSBtYWtlRmlyc3RFeGl0UG9pbnQoKSB7XG5cdFx0Y29uc3QgaWR4T2ZFeGl0UG9pbnQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpKjExICUgdGhpcy5zdGFnZUluZm8uZXhpdFBvaW50cy5sZW5ndGg7XG5cdFx0dGhpcy5zdGFnZUluZm8uZXhpdFBvaW50c1tpZHhPZkV4aXRQb2ludF0uYWN0aXZlID0gdHJ1ZTtcblx0XHR0aGlzLmN1cnJlbnRFeGl0UG9pbnQgPSB0aGlzLnN0YWdlSW5mby5leGl0UG9pbnRzW2lkeE9mRXhpdFBvaW50XTtcblx0XHR0aGlzLnJlbmRlckV4aXRQb2ludCh0aGlzLmN1cnJlbnRFeGl0UG9pbnQpO1xuXHR9XG5cblx0cHJpdmF0ZSByZW5kZXJFeGl0UG9pbnQoZXhpdFBvaW50IDogUG9pbnQpIHtcblx0XHRjb25zdCBncmFwaGljYWxQb2ludCA9ICh4LCB5KSA9PiB7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGl0R3JhcGhpYyA9IHRoaXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGl0R3JhcGhpYy5iZWdpbkZpbGwoMHhmZjAwMDAsIDAuOCk7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGl0R3JhcGhpYy5kcmF3Q2lyY2xlKHgsIHksIDEwKTtcblx0XHRcdHRoaXMuY3VycmVudEV4aXRHcmFwaGljLmVuZEZpbGwoKTtcblx0XHR9O1xuXG5cdFx0Z3JhcGhpY2FsUG9pbnQoZXhpdFBvaW50LngsIGV4aXRQb2ludC55KTtcblx0fVxuXG5cdHByaXZhdGUgcmFuZG9tQWxwaGFUbyhvYmogOmFueSkge1xuXHRcdG9iai5hbHBoYSA9IDAuNSArIE1hdGgucmFuZG9tKCkgKiAwLjU7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZVBsYXllcigpIHtcblx0XHR0aGlzLnBsYXllciA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDc1LCA3NSwgJ3BsYXllcicpO1xuXHRcdHRoaXMucGxheWVyLmFuY2hvci5zZXQoLjUsIC41KTtcdFxuXG5cdFx0dGhpcy5wbGF5ZXIuYW5pbWF0aW9ucy5hZGQoJ25vcnRoJywgWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdLCAxMCwgdHJ1ZSk7XG5cdFx0dGhpcy5wbGF5ZXIuYW5pbWF0aW9ucy5hZGQoJ3dlc3QnLCBbOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3XSwgMTAsIHRydWUpO1xuXHRcdHRoaXMucGxheWVyLmFuaW1hdGlvbnMuYWRkKCdzb3V0aCcsIFsxOCwgMTksIDIwLCAyMSwgMjIsIDIzLCAyNCwgMjUsIDI2XSwgMTAsIHRydWUpO1xuXHRcdHRoaXMucGxheWVyLmFuaW1hdGlvbnMuYWRkKCdlYXN0JywgWzI3LCAyOCwgMjksIDMwLCAzMSwgMzIsIDMzLCAzNCwgMzUgXSwgMTAsIHRydWUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVGbG9vcigpIHtcblx0XHR0aGlzLmZsb29yID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoMCwgMCwgJ2Zsb29yJyk7XG5cdFx0dGhpcy5mbG9vci53aWR0aCA9IDY0MDtcblx0XHR0aGlzLmZsb29yLmhlaWdodCA9IDQ4MDtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlTWFzaygpIHtcblx0XHR0aGlzLm1hc2sgPSB0aGlzLmdhbWUuYWRkLmdyYXBoaWNzKDAsIDApO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVXYWxsKCkge1xuXHRcdHRoaXMud2FsbHNCaXRNYXAgPSB0aGlzLmdhbWUubWFrZS5iaXRtYXBEYXRhKDY0MCwgNDgwKTtcblx0XHR0aGlzLndhbGxzQml0TWFwLmRyYXcoJ3dhbGwnKTtcblx0XHR0aGlzLndhbGxzQml0TWFwLnVwZGF0ZSgpO1xuXHRcdHRoaXMud2FsbCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsIDAsIHRoaXMud2FsbHNCaXRNYXApO1xuXHR9XG5cblx0cHJpdmF0ZSBtb3ZlRmxhc2goKSB7XG5cdFx0Y29uc3QgcGxheWVyV2lkdGggPSB0aGlzLnBsYXllci53aWR0aDtcblx0XHRjb25zdCBwbGF5ZXJIZWlnaHQgPSB0aGlzLnBsYXllci5oZWlnaHQ7XG5cblx0XHRjb25zdCBwbGF5ZXJYID0gdGhpcy5wbGF5ZXIueDtcblx0XHRjb25zdCBwbGF5ZXJZID0gdGhpcy5wbGF5ZXIueTtcblx0XHRcblx0XHRjb25zdCBkeSA9IHRoaXMuZ2FtZS5pbnB1dC55IC0gcGxheWVyWTtcblx0XHRjb25zdCBkeCA9IHRoaXMuZ2FtZS5pbnB1dC54IC0gcGxheWVyWDtcblxuXHRcdGNvbnN0IG1vdXNlQW5nbGUgPSBNYXRoLmF0YW4yKGR5LCBkeCk7XG5cblx0XHR0aGlzLm1hc2suY2xlYXIoKTtcblx0XHR0aGlzLm1hc2subGluZVN0eWxlKDIsIDB4ZmZmZmZmLCAxKTtcblxuXHRcdHRoaXMubWFzay5iZWdpbkZpbGwoMHgwMDAwMDApO1xuXHRcdHRoaXMubWFzay5tb3ZlVG8ocGxheWVyWCwgcGxheWVyWSk7XG5cdFx0Zm9yIChsZXQgaT0wOyBpPFBsYXkubnVtT2ZSYXlzOyBpKyspIHtcblx0XHRcdGNvbnN0IHJheUFuZ2xlID0gbW91c2VBbmdsZSAtIChQbGF5LmxpZ2h0QW5nbGUvMikgKyAoUGxheS5saWdodEFuZ2xlL1BsYXkubnVtT2ZSYXlzKSAqIGk7XG5cdFx0XHRsZXQgbGFzdFggPSBwbGF5ZXJYO1xuXHRcdFx0bGV0IGxhc3RZID0gcGxheWVyWTtcblx0XHRcdFxuXHRcdFx0Zm9yIChsZXQgaj0xOyBqPD1QbGF5LnJheUxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBNYXRoLnJvdW5kKHBsYXllclggKyAoaiAqIE1hdGguY29zKHJheUFuZ2xlKSkpO1xuXHRcdFx0XHRjb25zdCB5ID0gTWF0aC5yb3VuZChwbGF5ZXJZICsgKGogKiBNYXRoLnNpbihyYXlBbmdsZSkpKTtcblxuXHRcdFx0XHRjb25zdCBjb2xvciA9IHRoaXMucGlja0NvbG9yT2YoeCwgeSwgdGhpcy53YWxsc0JpdE1hcCk7XG5cdFx0XHRcdGlmIChjb2xvciA9PSAwKSB7XG5cdFx0XHRcdFx0bGFzdFggPSB4O1xuXHRcdFx0XHRcdGxhc3RZID0geTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLm1hc2subGluZVRvKGxhc3RYLCBsYXN0WSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubWFzay5saW5lVG8obGFzdFgsIGxhc3RZKTtcblx0XHR9XG5cblx0XHR0aGlzLm1hc2subGluZVRvKHBsYXllclgsIHBsYXllclkpO1xuXHRcdHRoaXMubWFzay5lbmRGaWxsKCk7XG5cdH1cblxuXHRwcml2YXRlIG1vdmVQbGF5ZXIoKSB7XG5cdFx0bGV0IHhTcGVlZCA9IDA7XG5cdFx0bGV0IHlTcGVlZCA9IDA7XG5cdFx0bGV0IGlzTW92aW5nID0gZmFsc2U7XG5cdFx0bGV0IGNhbk1vdmUgPSBmYWxzZTtcblxuXHRcdGNvbnN0IHBsYXllcldpZHRoID0gdGhpcy5wbGF5ZXIud2lkdGg7XG5cdFx0Y29uc3QgcGxheWVySGVpZ2h0ID0gdGhpcy5wbGF5ZXIuaGVpZ2h0O1xuXG5cdFx0Y29uc3QgcGxheWVyWCA9IHRoaXMucGxheWVyLng7XG5cdFx0Y29uc3QgcGxheWVyWSA9IHRoaXMucGxheWVyLnk7XG5cblx0XHRjb25zdCBjb2xvciA9IHtcblx0XHRcdG5vcnRoIDogMCxcblx0XHRcdHNvdXRoIDogMCxcblx0XHRcdHdlc3QgOiAwLFxuXHRcdFx0ZWFzdCA6IDBcblx0XHR9XG5cblx0XHRpZiAodGhpcy5jdXJzb3IudXAuaXNEb3duKSB7XG5cdFx0XHR5U3BlZWQgLT0gdGhpcy5zcGVlZDtcblx0XHRcdHRoaXMucGxheWVyLmFuaW1hdGlvbnMucGxheSgnbm9ydGgnKTtcblx0XHRcdGNvbnN0IG5vcnRoRWFzdCA9IHRoaXMucGlja0NvbG9yT2YocGxheWVyWCArIHBsYXllcldpZHRoLzIgKyB4U3BlZWQsIHBsYXllclkgLSBwbGF5ZXJIZWlnaHQvMiArIHlTcGVlZCwgdGhpcy53YWxsc0JpdE1hcCk7XG5cdFx0XHRjb25zdCBub3J0aFdlc3QgPSB0aGlzLnBpY2tDb2xvck9mKHBsYXllclggLSBwbGF5ZXJXaWR0aC8yICsgeFNwZWVkLCBwbGF5ZXJZIC0gcGxheWVySGVpZ2h0LzIgKyB5U3BlZWQsIHRoaXMud2FsbHNCaXRNYXApO1xuXHRcdFx0Y29sb3Iubm9ydGggPSBub3J0aEVhc3QgKyBub3J0aFdlc3Q7XG5cdFx0fVxuXHRcdFxuXHRcdGlmICh0aGlzLmN1cnNvci5kb3duLmlzRG93bikge1xuXHRcdFx0eVNwZWVkICs9IHRoaXMuc3BlZWQ7XG5cdFx0XHR0aGlzLnBsYXllci5hbmltYXRpb25zLnBsYXkoJ3NvdXRoJyk7XG5cdFx0XHRjb25zdCBzb3V0aEVhc3QgPSB0aGlzLnBpY2tDb2xvck9mKHBsYXllclggKyBwbGF5ZXJXaWR0aC8yICsgeFNwZWVkLCBwbGF5ZXJZICsgcGxheWVySGVpZ2h0LzIgKyB5U3BlZWQsIHRoaXMud2FsbHNCaXRNYXApO1xuXHRcdFx0Y29uc3Qgc291dGhXZXN0ID0gdGhpcy5waWNrQ29sb3JPZihwbGF5ZXJYIC0gcGxheWVyV2lkdGgvMiArIHhTcGVlZCwgcGxheWVyWSArIHBsYXllckhlaWdodC8yICsgeVNwZWVkLCB0aGlzLndhbGxzQml0TWFwKTtcblx0XHRcdGNvbG9yLnNvdXRoID0gc291dGhFYXN0ICsgc291dGhXZXN0O1xuXHRcdH1cblx0XHRcblx0XHRpZiAodGhpcy5jdXJzb3IubGVmdC5pc0Rvd24pIHtcblx0XHRcdHhTcGVlZCAtPSB0aGlzLnNwZWVkO1xuXHRcdFx0dGhpcy5wbGF5ZXIuYW5pbWF0aW9ucy5wbGF5KCd3ZXN0Jyk7XG5cdFx0XHRjb25zdCB3ZXN0Tm9ydGggPSB0aGlzLnBpY2tDb2xvck9mKHBsYXllclggLSBwbGF5ZXJXaWR0aC8yICsgeFNwZWVkLCBwbGF5ZXJZIC0gcGxheWVySGVpZ2h0LzIgKyB5U3BlZWQsIHRoaXMud2FsbHNCaXRNYXApO1xuXHRcdFx0Y29uc3Qgd2VzdFNvdXRoID0gdGhpcy5waWNrQ29sb3JPZihwbGF5ZXJYIC0gcGxheWVyV2lkdGgvMiArIHhTcGVlZCwgcGxheWVyWSArIHBsYXllckhlaWdodC8yICsgeVNwZWVkLCB0aGlzLndhbGxzQml0TWFwKTtcblx0XHRcdGNvbG9yLndlc3QgPSB3ZXN0Tm9ydGggKyB3ZXN0U291dGg7XG5cdFx0fVxuXHRcdFxuXHRcdGlmICh0aGlzLmN1cnNvci5yaWdodC5pc0Rvd24pIHtcblx0XHRcdHhTcGVlZCArPSB0aGlzLnNwZWVkO1xuXHRcdFx0dGhpcy5wbGF5ZXIuYW5pbWF0aW9ucy5wbGF5KCdlYXN0Jyk7XG5cdFx0XHRjb25zdCBlYXN0Tm9ydGggPSB0aGlzLnBpY2tDb2xvck9mKHBsYXllclggKyBwbGF5ZXJXaWR0aC8yICsgeFNwZWVkLCBwbGF5ZXJZIC0gcGxheWVySGVpZ2h0LzIgKyB5U3BlZWQsIHRoaXMud2FsbHNCaXRNYXApO1xuXHRcdFx0Y29uc3QgZWFzdFNvdXRoID0gdGhpcy5waWNrQ29sb3JPZihwbGF5ZXJYICsgcGxheWVyV2lkdGgvMiArIHhTcGVlZCwgcGxheWVyWSArIHBsYXllckhlaWdodC8yICsgeVNwZWVkLCB0aGlzLndhbGxzQml0TWFwKTtcblx0XHRcdGNvbG9yLmVhc3QgPSBlYXN0Tm9ydGggKyBlYXN0U291dGg7XG5cdFx0fVxuXG5cdFx0aXNNb3ZpbmcgPSBNYXRoLmFicyh4U3BlZWQpICsgTWF0aC5hYnMoeVNwZWVkKSA8IHRoaXMuc3BlZWQqMiAmJiBNYXRoLmFicyh4U3BlZWQpICsgTWF0aC5hYnMoeVNwZWVkKSA+IDA7XG5cdFx0Y2FuTW92ZSA9IGNvbG9yLm5vcnRoICsgY29sb3Iuc291dGggKyBjb2xvci5lYXN0ICsgY29sb3Iud2VzdCA9PSAwO1xuXHRcdGlmIChpc01vdmluZyAmJiBjYW5Nb3ZlKSB7XG5cdFx0XHR0aGlzLnBsYXllci54ICs9IHhTcGVlZDtcblx0XHRcdHRoaXMucGxheWVyLnkgKz0geVNwZWVkO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnN0b3BQbGF5ZXJBbmltY2F0ZWlvbigpO1xuXHRcdH1cblxuXHRcdGlmIChpc01vdmluZyAmJiAhY2FuTW92ZSkge1xuXHRcdFx0dGhpcy5nYW1lLmNhbWVyYS5zaGFrZSgpO1xuXHRcdFx0dGhpcy53YWxsQ29sbGlzaW9uU291bmQucGxheSgpO1xuXHRcdH1cblxuXHRcdFxuXHRcdGlmIChNYXRoLmFicyh0aGlzLmN1cnJlbnRFeGl0UG9pbnQueC10aGlzLnBsYXllci54KSA8IDMgJiYgTWF0aC5hYnModGhpcy5wbGF5ZXIueS10aGlzLmN1cnJlbnRFeGl0UG9pbnQueSkgPCAzKSB7XG5cdFx0XHRhbGVydCgnQ29uZ3JhdCEnKTtcblx0XHRcdHRoaXMudGFkYVNvdW5kLnBsYXkoKTtcblxuXHRcdFx0Y29uc3QgdXNlcklkID0gdGhpcy5zZXJ2aWNlQ29udHJvbGxlci5hdXRoU2VydmljZS5nZXRMYXN0TG9nZ2VkSW5Vc2VyKCkudXNlcklkO1xuXHRcdFx0Y29uc3Qgc3RhZ2VJZCA9IHRoaXMuc3RhZ2VJbmZvLnN0YWdlSWQ7XG5cdFx0XHRjb25zdCByYW5rID0gdGhpcy5zZXJ2aWNlQ29udHJvbGxlci5yYW5rU2VydmljZS5jYWxjdWxhdGVSYW5rKHN0YWdlSWQsIHRoaXMuZWxhcHNlZFRpbWUpO1xuXG5cdFx0XHRjb25zdCBzdGFnZVJlY29yZCA9IG5ldyBTdGFnZVJlY29yZChzdGFnZUlkLCByYW5rLCB0aGlzLmVsYXBzZWRUaW1lKTtcblx0XHRcdGNvbnN0IHN0YWdlUmVjb3JkT2JqID0ge307XG5cdFx0XHRzdGFnZVJlY29yZE9ialtzdGFnZUlkXSA9IHN0YWdlUmVjb3JkO1xuXHRcdFx0Y29uc3QgcmVjb3JkID0gbmV3IFJlY29yZCh1c2VySWQsIHN0YWdlUmVjb3JkT2JqKTtcblx0XHRcdHRoaXMuc2VydmljZUNvbnRyb2xsZXIucmVjb3JkUmFuayhyZWNvcmQpO1xuXHRcdFx0XG5cdFx0XHRjb25zdCBzdGFnZUluZm8gPSB0aGlzLnNlcnZpY2VDb250cm9sbGVyLmdldFN0YWdlSW5mb3JtYXRpb24oKTtcblx0XHRcdHRoaXMuc3RhdGVDb250cm9sbGVyLmdvU3RhdGUoJ0xldmVsJywgdHJ1ZSwgdHJ1ZSwgc3RhZ2VJbmZvKTtcblxuXHRcdFx0dGhpcy5zdG9wVGltZXIoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHBpY2tDb2xvck9mKHg6IG51bWJlciwgeTogbnVtYmVyLCBiaXRNYXBEYXRhOiBQaGFzZXIuQml0bWFwRGF0YSkge1xuXHRcdGNvbnN0IGNvbG9yID0gYml0TWFwRGF0YS5nZXRQaXhlbDMyKHgsIHkpO1xuXHRcdHJldHVybiBjb2xvcjtcblx0fVxuXG5cdHByaXZhdGUgc3RvcFBsYXllckFuaW1jYXRlaW9uKCkge1xuXHRcdHRoaXMucGxheWVyLmFuaW1hdGlvbnMuc3RvcCgnbm9ydGgnKTtcblx0XHR0aGlzLnBsYXllci5hbmltYXRpb25zLnN0b3AoJ3NvdXRoJyk7XG5cdFx0dGhpcy5wbGF5ZXIuYW5pbWF0aW9ucy5zdG9wKCd3ZXN0Jyk7XG5cdFx0dGhpcy5wbGF5ZXIuYW5pbWF0aW9ucy5zdG9wKCdlYXN0Jyk7XG5cdH1cbn0iLCJpbXBvcnQgVXRpbCBmcm9tICcuLi91dGlsL3V0aWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50L2lucHV0VGV4dCc7XG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vdm8vdXNlcic7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi4vdm8vc2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXIgZXh0ZW5kcyBCYXNlIHtcblx0aW5wdXRUZXh0IDogQ29tcG9uZW50LklucHV0VGV4dDtcblx0cmVnaXN0ZXJCdG4gOiBQaGFzZXIuVGV4dDtcblxuXHRjb25zdHJ1Y3RvcihnYW1lKSB7XG5cdFx0c3VwZXIoZ2FtZSk7XG5cdH1cblxuXHRwcmVsb2FkKCkge1xuXHRcdFxuXHR9XG5cblx0cHJpdmF0ZSBzZXRSZWdpc3RlcklucHV0VGV4dCgpIHtcblx0XHRsZXQgdGV4dFdpZHRoID0gMjAwO1xuXHRcdGxldCB0ZXh0SGVpZ2h0ID0gODA7XG5cdFx0bGV0IHRleHRYID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclggLSB0ZXh0V2lkdGgvMjtcblx0XHRsZXQgdGV4dFkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWSAtIHRleHRIZWlnaHQvMjtcblxuXHRcdGxldCB0ZXh0TWF4TGVuZ3RoID0gMjA7XG5cblx0XHRsZXQgdGV4dFN0eWxlID0ge1xuXHRcdFx0ZmlsbDogJyMwMDAwMDAnLFxuXHRcdFx0Ym91bmRzQWxpZ25IOiAnY2VudGVyJyxcblx0XHRcdGJvdW5kc0FsaWduVjogJ21pZGRsZScsXG5cdFx0XHRmb250OiAnMjBweCBBcmlhbCdcblx0XHR9XG5cblx0XHR0aGlzLmlucHV0VGV4dCA9IG5ldyBDb21wb25lbnQuSW5wdXRUZXh0KHRoaXMuZ2FtZSwgdGV4dFgsIHRleHRZLCB0ZXh0V2lkdGgsIHRleHRIZWlnaHQsIHRleHRNYXhMZW5ndGgsICdleCkgVXNlcjAwNzAwJywgdGV4dFN0eWxlKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0UmVnaXN0ZXJCdXR0b24oKSB7XG5cdFx0bGV0IGJ0bldpZHRoID0gMjAwO1xuXHRcdGxldCBidG5IZWlnaHQgPSA4MDtcblx0XHRcblx0XHRsZXQgYnRuWCA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYOy8vIC0gYnRuV2lkdGgvMjtcblx0XHRsZXQgYnRuWSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZICsgMTIwOy8vIC0gYnRuSGVpZ2h0LzIgKyAxMDA7XG5cblx0XHRsZXQgYnRuVGV4dCA9ICdSZWdpc3Rlcic7XG5cblx0XHRjb25zdCBzZWxmID0gdGhpcztcblxuXHRcdGxldCB0ZXh0U3R5bGUgPSB7XG5cdFx0XHRmaWxsOiAnIzAwMDAwMCcsXG5cdFx0XHRib3VuZHNBbGlnbkg6ICdjZW50ZXInLFxuXHRcdFx0Ym91bmRzQWxpZ25WOiAnbWlkZGxlJyxcblx0XHRcdGZvbnQ6ICcyMHB4IEFyaWFsJ1xuXHRcdH1cblx0XHR0aGlzLnJlZ2lzdGVyQnRuID0gdGhpcy5nYW1lLmFkZC50ZXh0KGJ0blgsIGJ0blksIGJ0blRleHQsIHRleHRTdHlsZSk7XG5cdFx0dGhpcy5yZWdpc3RlckJ0bi5hbmNob3Iuc2V0VG8oLjUsIC41KTtcblx0XHRcblx0XHR0aGlzLnJlZ2lzdGVyQnRuLmlucHV0RW5hYmxlZCA9IHRydWU7XG5cdFx0dGhpcy5yZWdpc3RlckJ0bi5pbnB1dC51c2VIYW5kQ3Vyc29yID0gdHJ1ZTtcblxuXHRcdHRoaXMucmVnaXN0ZXJCdG4uZXZlbnRzLm9uSW5wdXREb3duLmFkZCgoZSkgPT4ge1xuXHRcdFx0aWYgKGNvbmZpcm0oYCR7c2VsZi5pbnB1dFRleHQudGV4dH3ri5jsnLzroZwg7ZWY7Iuc6rKg7Iq164uI6rmMP2ApKSB7XG5cdFx0XHRcdHNlbGYuc2F2ZVVzZXJJZCgpO1xuXHRcdFx0XHRjb25zdCBzdGFnZUluZm8gPSBzZWxmLnNlcnZpY2VDb250cm9sbGVyLmdldFN0YWdlSW5mb3JtYXRpb24oKTtcblx0XHRcdFx0c2VsZi5zdGF0ZUNvbnRyb2xsZXIuZ29TdGF0ZSgnTGV2ZWwnLCB0cnVlLCB0cnVlLCBzdGFnZUluZm8pO1xuXHRcdFx0fVxuXHRcdH0sIHRoaXMpO1xuXG5cdFx0dGhpcy5yZWdpc3RlckJ0bi5ldmVudHMub25JbnB1dE92ZXIuYWRkKChlKSA9PiB7XG5cdFx0XHR0aGlzLnJlZ2lzdGVyQnRuLmFscGhhID0gMC43O1xuXHRcdH0sIHRoaXMpO1xuXG5cdFx0dGhpcy5yZWdpc3RlckJ0bi5ldmVudHMub25JbnB1dE91dC5hZGQoKGUpID0+IHtcblx0XHRcdHRoaXMucmVnaXN0ZXJCdG4uYWxwaGEgPSAxO1xuXHRcdH0sIHRoaXMpO1xuXHR9XG5cblx0Y3JlYXRlKCkge1xuXHRcdHRoaXMuc2V0UmVnaXN0ZXJJbnB1dFRleHQoKTtcblx0XHR0aGlzLnNldFJlZ2lzdGVyQnV0dG9uKCk7XG5cdFx0XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0dGhpcy5pbnB1dFRleHQucmVuZGVyKCk7XG5cdH1cblxuXHRzYXZlVXNlcklkKCkge1xuXHRcdGxldCB1c2VySWQgPSB0aGlzLmlucHV0VGV4dC50ZXh0O1xuXHRcdGNvbnN0IHVzZXIgPSBuZXcgVXNlcih1c2VySWQsIG5ldyBTY29yZSgpKTtcblx0XHR0aGlzLnNlcnZpY2VDb250cm9sbGVyLnJlZ2lzdGVyVXNlcih1c2VyKTtcblx0fVxufSIsImV4cG9ydCBjbGFzcyBQb2ludCB7XG5cdHg6IG51bWJlcjtcblx0eTogbnVtYmVyO1xuXHRhY3RpdmU6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoeDogbnVtYmVyLCB5Om51bWJlcikge1xuXHRcdHRoaXMueCA9IHg7XG5cdFx0dGhpcy55ID0geTtcblx0XHR0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBvbih4OiBudW1iZXIsIHk6bnVtYmVyKSB7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCh4LHkpO1xuXHR9XG59IiwiZXhwb3J0IGVudW0gUmFuayB7XG5cdE5PTkUgPSAwLFxuXHRTID0gMSxcblx0QSA9IDIsXG5cdEIgPSAzLFxuXHRDID0gNCxcblx0RCA9IDUsXG5cdEUgPSA2LFxuXHRGID0gN1xufVxuXG5cbmV4cG9ydCBjbGFzcyBSYW5rVXRpbCB7XG5cdHN0YXRpYyB2YWx1ZU9mKHJhbms6IFJhbmspOiBzdHJpbmcge1xuXHRcdGxldCByZXQgPSAnJztcblxuXHRcdHN3aXRjaChyYW5rKSB7XG5cdFx0XHRjYXNlIFJhbmsuTk9ORToge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgUmFuay5TOiB7XG5cdFx0XHRcdHJldCA9ICdTJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRjYXNlIFJhbmsuQToge1xuXHRcdFx0XHRyZXQgPSAnQSc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSBSYW5rLkI6IHtcblx0XHRcdFx0cmV0ID0gJ0InO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgUmFuay5DOiB7XG5cdFx0XHRcdHJldCA9ICdDJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRjYXNlIFJhbmsuRDoge1xuXHRcdFx0XHRyZXQgPSAnRCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSBSYW5rLkU6IHtcblx0XHRcdFx0cmV0ID0gJ0UnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgUmFuay5GOiB7XG5cdFx0XHRcdHJldCA9ICdGJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdHJldCA9ICcnO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXQ7XG5cdH1cbn0iLCJpbXBvcnQgeyBSYW5rIH0gZnJvbSBcIi4vcmFua1wiO1xuaW1wb3J0IFZvIGZyb20gXCIuL3ZvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY29yZCBleHRlbmRzIFZvIHtcblx0dXNlcklkOiBzdHJpbmc7XG5cdHJlY29yZHM6IGFueTtcblxuXHRjb25zdHJ1Y3Rvcih1c2VySWQsIHJlY29yZHMpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudXNlcklkID0gdXNlcklkO1xuXHRcdHRoaXMucmVjb3JkcyA9IHJlY29yZHM7XG5cdH1cblxuXHRwdXQocmVjb3JkOiBTdGFnZVJlY29yZCkge1xuXHRcdHRoaXMucmVjb3Jkc1tyZWNvcmQuc3RhZ2VJZF0gPSB7XG5cdFx0XHRzdGFnZUlkOiByZWNvcmQuc3RhZ2VJZCxcblx0XHRcdHJhbms6IHJlY29yZC5yYW5rLFxuXHRcdFx0dGltZTogcmVjb3JkLnRpbWVcblx0XHR9XG5cdFx0Ly8gdGhpcy5yZWNvcmRzW3JlY29yZC5zdGFnZUlkXSA9IHJlY29yZDtcblx0fVxuXG5cdHRvSnNvbigpIHtcblx0XHRsZXQgcmVjb3JkcyA9IHt9O1xuXG5cdFx0Zm9yIChsZXQgcCBpbiB0aGlzLnJlY29yZHMpIHtcblx0XHRcdHJlY29yZHNbcF0gPSB0aGlzLnJlY29yZHNbcF0udG9Kc29uKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHVzZXJJZDogdGhpcy51c2VySWQsXG5cdFx0XHRyZWNvcmRzOiByZWNvcmRzXG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHN0YXRpYyBieShqc29uIDogYW55KTogUmVjb3JkIHtcblx0XHRpZiAoanNvbiA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3QgdXNlcjogUmVjb3JkID0gbmV3IFJlY29yZChqc29uLnVzZXJJZCwganNvbi5yZWNvcmRzKTtcblx0XHRyZXR1cm4gdXNlcjtcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgU3RhZ2VSZWNvcmQgZXh0ZW5kcyBWbyB7XG5cdHN0YWdlSWQ6IG51bWJlcjtcblx0cmFuazogUmFuaztcblx0dGltZTogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHN0YWdlSWQsIHJhbms6IFJhbmssIHRpbWUpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3RhZ2VJZCA9IHN0YWdlSWQ7XG5cdFx0dGhpcy5yYW5rID0gcmFuaztcblx0XHR0aGlzLnRpbWUgPSB0aW1lO1xuXHR9XG5cblx0dG9Kc29uKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzdGFnZUlkOiB0aGlzLnN0YWdlSWQsXG5cdFx0XHRyYW5rOiB0aGlzLnJhbmssXG5cdFx0XHR0aW1lOiB0aGlzLnRpbWVcblx0XHR9XG5cdH1cbn0iLCJpbXBvcnQgeyBSYW5rIH0gZnJvbSBcIi4vcmFua1wiO1xuaW1wb3J0IFZvIGZyb20gXCIuL3ZvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlIGV4dGVuZHMgVm8ge1xuXHR0aW1lIDogbnVtYmVyO1xuXHRyYW5rIDogUmFuaztcblx0XG5cdGNvbnN0cnVjdG9yKHRpbWU/OiBudW1iZXIsIHJhbms/OiBSYW5rKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMudGltZSA9IHRpbWUgfCAwO1xuXHRcdHRoaXMucmFuayA9IHJhbmsgfCBSYW5rLk5PTkU7XG5cdH1cblxuXHR0b0pzb24oKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRpbWU6IHRoaXMudGltZSxcblx0XHRcdHJhbms6IHRoaXMucmFuayxcblx0XHR9XG5cdH1cblx0XG59IiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tIFwiLi9wb2ludFwiO1xuaW1wb3J0IHsgTWFwVHlwZSB9IGZyb20gXCIuL21hcFR5cGVcIjtcbmltcG9ydCB7IFJhbmsgfSBmcm9tIFwiLi9yYW5rXCI7XG5cbmV4cG9ydCBjbGFzcyBTdGFnZSB7XG5cdGNvbnN0cnVjdG9yKHN0YWdlSWQ6IG51bWJlciwgZmxvb3JGaWxlUGF0aDogc3RyaW5nLCB3YWxsRmlsZVBhdGg6IHN0cmluZywgZXhpdFBvaW50czogQXJyYXk8UG9pbnQ+LCB0aW1lTGltaXQ9NTAwMCkge1xuXHRcdHRoaXMuc3RhZ2VJZCA9IHN0YWdlSWQ7XG5cdFx0dGhpcy5mbG9vckZpbGVQYXRoID0gZmxvb3JGaWxlUGF0aDtcblx0XHR0aGlzLndhbGxGaWxlUGF0aCA9IHdhbGxGaWxlUGF0aDtcblx0XHR0aGlzLmV4aXRQb2ludHMgPSBleGl0UG9pbnRzO1xuXG5cdFx0dGhpcy50aW1lTGltaXQgPSB0aW1lTGltaXQ7XG5cdH1cblx0XG5cdHN0YWdlSWQgOiBudW1iZXI7XG5cdGZsb29yRmlsZVBhdGggOiBzdHJpbmc7XG5cdHdhbGxGaWxlUGF0aCA6IHN0cmluZztcblxuXHRleGl0UG9pbnRzIDogQXJyYXk8UG9pbnQ+O1xuXHR0aW1lTGltaXQgOiBudW1iZXI7XG5cblx0dHJlYXN1cmVQb2ludHMgOiBBcnJheTxQb2ludD47XG5cblx0bWFwVHlwZTogTWFwVHlwZTtcblxuXHQvL1RPRE86ID8/P1xuXHRzb3VuZCA6IFBoYXNlci5Tb3VuZDtcblxuXHRcbn0iLCJpbXBvcnQgU2NvcmUgZnJvbSBcIi4vc2NvcmVcIjtcbmltcG9ydCBWbyBmcm9tIFwiLi92b1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIGV4dGVuZHMgVm8ge1xuXHR1c2VySWQgOiBzdHJpbmc7XG5cdHNjb3JlIDogU2NvcmU7XG5cdHJlZ2lzdGVyRGF0ZSA6IERhdGU7XG5cdGxhc3RWaXNpdERhdGUgOiBEYXRlO1xuXG5cdGNvbnN0cnVjdG9yKHVzZXJJZCwgc2NvcmUpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudXNlcklkID0gdXNlcklkO1xuXHRcdHRoaXMuc2NvcmUgPSBzY29yZTtcblx0XHR0aGlzLnJlZ2lzdGVyRGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0dGhpcy5sYXN0VmlzaXREYXRlID0gbmV3IERhdGUoKTtcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgYnkoanNvbiA6IGFueSk6IFVzZXIge1xuXHRcdGlmIChqc29uID09IG51bGwpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCB1c2VyOiBVc2VyID0gbmV3IFVzZXIoanNvbi51c2VySWQsIGpzb24uc2NvcmUpO1xuXHRcdHVzZXIucmVnaXN0ZXJEYXRlID0ganNvbi5yZWdpc3RlckRhdGU7XG5cdFx0dXNlci5sYXN0VmlzaXREYXRlID0ganNvbi5sYXN0VmlzaXREYXRlO1xuXG5cdFx0cmV0dXJuIHVzZXI7XG5cdH1cblxuXHR0b0pzb24oKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHVzZXJJZDogdGhpcy51c2VySWQsXG5cdFx0XHRzY29yZTogdGhpcy5zY29yZSxcblx0XHRcdHJlZ2lzdGVyRGF0ZTogdGhpcy5yZWdpc3RlckRhdGUsXG5cdFx0XHRsYXN0VmlzaXREYXRlOiB0aGlzLmxhc3RWaXNpdERhdGUsXG5cdFx0fTtcblx0fVxufSIsImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFZvIHtcblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMudG9Kc29uKCkpO1xuXHR9XG5cblx0YWJzdHJhY3QgdG9Kc29uKCkgOiBhbnk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==