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


class ServiceController {
    constructor(game) {
        this.game = game;
        this.stageService = new _services_stageService__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.authService = new _services_authService__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.stateController = game.stateController;
    }
    login(userId, callback) {
        this.authService.login(userId, callback);
    }
    registerUser(user) {
        this.authService.registerUser(user);
    }
    getStageInformation() {
        return this.stageService.stageMap;
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
    initialize(game, width, height) {
        this.stateManager = new Phaser.StateManager(game);
        this.game = game;
        this.game.state = this.stateManager;
        this.width = width;
        this.height = height;
        this.init();
    }
    startState(state) {
        let startingState = 'Intro';
        // let startingState = 'Stage';
        if (state === 'undefined' || state === null) {
            startingState = state;
        }
        this.goState(startingState, true, true, 'Horror Maze');
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
        const userDatabase = {};
        userDatabase[obj.userId] = obj.toString();
        this.session.set(table, obj.userId, JSON.stringify(userDatabase));
        return obj;
    }
    select(table, userId) {
        const userStr = this.session.get(table, userId);
        const user = _vo_user__WEBPACK_IMPORTED_MODULE_1__["default"].by(userStr);
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
// import * as g from './maze'

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
            this.stateController.initialize(this, width, height);
            this.stateController.startState();
        }
    }
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
    initialize() {
    }
    getStageInformation(userId) {
    }
    generateStageMap() {
        for (let i = 0; i < 3; i++) {
            let zeroFormat = '000' + i;
            let mapSeq = zeroFormat.slice(-3);
            const floorPath = 'assets/img/maps/floor-' + mapSeq + '.png';
            const wallPath = 'assets/img/maps/walls-' + mapSeq + '.png';
            // const stage = new Stage(i, floorPath, wallPath, Point.on(235, 85));
            const stage = new _vo_stage__WEBPACK_IMPORTED_MODULE_0__["Stage"](i, floorPath, wallPath, [
                _vo_point__WEBPACK_IMPORTED_MODULE_1__["Point"].on(235, 85),
                _vo_point__WEBPACK_IMPORTED_MODULE_1__["Point"].on(565, 400)
            ]);
            this.stageMap[i] = stage;
        }
    }
}


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
        return item;
    }
    set(table, key, value) {
        const originalDataObj = this.get(table, key);
        if (!originalDataObj) {
            const obj = {};
            obj[key] = value;
            const writtenData = JSON.stringify(obj);
            if (typeof value === 'string') {
                localStorage.setItem(table, value);
            }
            else {
                localStorage.setItem(table, writtenData);
            }
        }
        else {
            const obj = Object.assign({}, originalDataObj, JSON.parse(value));
            localStorage.setItem(table, obj);
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
    init(gameTitle) {
        this.gameTitle = gameTitle;
    }
    preload() {
    }
    create() {
        this.stage.backgroundColor = '#4488AA';
        this.logoText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, this.gameTitle, {
            font: '80px Arial;',
            fill: '#ffffff'
        });
        this.logoText.anchor.setTo(0.5, 0.5);
        this.logoText.alpha = 0.8;
        const p = this.game.world.bounds.bottomRight;
        const footer = this.game.add.text(p.x - 100, p.y - 30, 'v1.0, made with Phaser', {
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
Intro.introInterval = 1500;


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

class Level extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game) {
        super(game);
        this.numberOfStage = 3;
    }
    init(stageMap) {
        this.stageMap = stageMap;
    }
    preload() {
        this.game.load.spritesheet('stageArrows', '../assets/img/stageArrows.png', 48, 48);
    }
    create() {
        this.game.stage.backgroundColor = '#9B9B9B';
        this.game.stage.alpha = 0.9;
        this.drawStageBtn();
        this.drawStageMoveBtn();
    }
    update() {
    }
    drawStageBtn() {
        const width = 200;
        const height = 200;
        let offsetX = (this.game.world.width - 200) / 3; // 200: padding
        const stageInfo = new Array(this.numberOfStage);
        for (let i = 0; i < this.numberOfStage; i++) {
            const stageBtnText = `Stage-${i + 1}` + (stageInfo[i] ? '\n' + stageInfo[i] : '');
            const stageBtn = this.game.add.text(145 + (offsetX * i), 90, stageBtnText, {
                fill: '#ffffff',
                font: '15px Arial'
            });
            stageBtn.inputEnabled = true;
            stageBtn.input.useHandCursor = true;
            const stageNum = i + 1;
            stageBtn.events.onInputDown.add((e) => {
                if (confirm(`Wanna Go to Stage-${stageNum}?`)) {
                    this.stateController.goState('Play', true, true, this.stageMap[i]);
                }
            }, this);
            // const btn = this.game.add.button(100 + (offsetX * i), 50, `Stage - ${i}`, (e) => {
            // 	if (confirm(`Go to Stage - ${i}?`)) {
            // 		this.stateController.goState('Play', true, true, this.stageMap[i]);
            // 	}
            // }, this);
        }
    }
    drawStageMoveBtn() {
        const p = this.game.world.bounds;
        this.lowerStageBtn = this.game.add.button(100, 500, "stageArrows", this.buttonClicked);
        this.higherStageBtn = this.game.add.button(100, 500, "stageArrows", this.buttonClicked);
        this.lowerStageBtn.frame = 0;
        this.higherStageBtn.frame = 1;
        // Align stage page move btn
        this.lowerStageBtn.x = 100;
        this.higherStageBtn.x = p.right - 100 - this.higherStageBtn.width;
        const stageText = this.game.add.text(this.game.world.centerX, 50, 'Stage', {
            fill: '#ffffff',
            font: '20px Arial'
        });
        stageText.anchor.setTo(0.5, 0.5);
    }
    buttonClicked(button, pointer) {
        if (button.frame == 0) { // lowerStageBtn
        }
        else if (button.frame == 1) { // higherStageBtn
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
                            alert(`${user.userId}님 환영합니다.`);
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

class Play extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(game) {
        super(game);
    }
    init(stageInfo) {
        this.stageInfo = stageInfo;
        this.playerPath = 'assets/img/player-spreadsheet.png';
    }
    preload() {
        this.game.load.image('floor', this.stageInfo.floorFilePath);
        this.game.load.image('wall', this.stageInfo.wallFilePath);
        this.game.load.spritesheet('player', this.playerPath, 64, 64, 36);
    }
    create() {
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
        const text = this.game.add.text(this.game.world.centerX, 500, 'Timer : ', {
            fill: '#ffffff',
            font: '15px Arial'
        });
    }
    update() {
        this.movePlayer();
        this.moveFlash();
        this.randomAlphaTo(this.floor);
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
            ySpeed -= 1;
            this.player.animations.play('north');
            const northEast = this.pickColorOf(playerX + playerWidth / 2 + xSpeed, playerY - playerHeight / 2 + ySpeed, this.wallsBitMap);
            const northWest = this.pickColorOf(playerX - playerWidth / 2 + xSpeed, playerY - playerHeight / 2 + ySpeed, this.wallsBitMap);
            color.north = northEast + northWest;
        }
        if (this.cursor.down.isDown) {
            ySpeed += 1;
            this.player.animations.play('south');
            const southEast = this.pickColorOf(playerX + playerWidth / 2 + xSpeed, playerY + playerHeight / 2 + ySpeed, this.wallsBitMap);
            const southWest = this.pickColorOf(playerX - playerWidth / 2 + xSpeed, playerY + playerHeight / 2 + ySpeed, this.wallsBitMap);
            color.south = southEast + southWest;
        }
        if (this.cursor.left.isDown) {
            xSpeed -= 1;
            this.player.animations.play('west');
            const westNorth = this.pickColorOf(playerX - playerWidth / 2 + xSpeed, playerY - playerHeight / 2 + ySpeed, this.wallsBitMap);
            const westSouth = this.pickColorOf(playerX - playerWidth / 2 + xSpeed, playerY + playerHeight / 2 + ySpeed, this.wallsBitMap);
            color.west = westNorth + westSouth;
        }
        if (this.cursor.right.isDown) {
            xSpeed += 1;
            this.player.animations.play('east');
            const eastNorth = this.pickColorOf(playerX + playerWidth / 2 + xSpeed, playerY - playerHeight / 2 + ySpeed, this.wallsBitMap);
            const eastSouth = this.pickColorOf(playerX + playerWidth / 2 + xSpeed, playerY + playerHeight / 2 + ySpeed, this.wallsBitMap);
            color.east = eastNorth + eastSouth;
        }
        isMoving = Math.abs(xSpeed) + Math.abs(ySpeed) < 2 && Math.abs(xSpeed) + Math.abs(ySpeed) > 0;
        canMove = color.north + color.south + color.east + color.west == 0;
        if (isMoving && canMove) {
            this.player.x += xSpeed;
            this.player.y += ySpeed;
        }
        else {
            this.stopPlayerAnimcateion();
        }
        if (Math.abs(this.currentExitPoint.x - this.player.x) < 3 && Math.abs(this.player.y - this.currentExitPoint.y) < 3) {
            alert('Congrat!');
            this.stateController.goState('Level');
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
    goFullScreen() {
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
        // this.registerBtn = this.game.add.button(btnX, btnY, btnText, (e) => {
        // 	if (confirm(`${self.inputText.text}님으로 하시겠습니까?`)) {
        // 		self.saveUserId();
        // 		const stageInfo = self.serviceController.getStageInformation();
        // 		self.stateController.goState('Stage', true, true, stageInfo);
        // 	}
        // }, this);
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
/*! exports provided: Rank */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rank", function() { return Rank; });
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

class Score {
    constructor(time, rank) {
        this.time = time | 0;
        this.rank = rank | _rank__WEBPACK_IMPORTED_MODULE_0__["Rank"].NONE;
    }
    toString() {
        return JSON.stringify({
            time: this.time,
            rank: this.rank
        });
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
class User {
    constructor(userId, score) {
        this.userId = userId;
        this.score = score;
        this.registerDate = new Date();
        this.lastVisitDate = new Date();
    }
    static by(jsonString) {
        let json;
        let user = null;
        try {
            json = JSON.parse(jsonString);
            user = new User(json.userId, json.score);
            user.registerDate = json.registerDate;
            user.lastVisitDate = json.lastVisitDate;
        }
        catch (e) {
            // jsonString is not valid.
            // Just ignore this case.
        }
        return user;
    }
    toString() {
        return JSON.stringify(this.toJson());
    }
    toJson() {
        return {
            userId: this.userId,
            score: this.score.toString,
            registerDate: this.registerDate.toString(),
            lastVisitDate: this.lastVisitDate.toString(),
        };
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9pbnB1dFRleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIvc2VydmljZUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIvc3RhdGVDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9kYW8vZGFvLnRzIiwid2VicGFjazovLy8uL3NyYy9kYW8vdXNlckRhby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hemUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2F1dGhTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9zdGFnZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nlc3Npb24vbG9jYWxTdG9yYWdlU2Vzc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvYmFzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvaW50cm8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlL2xldmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS9sb2dpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvcGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvcmVnaXN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZvL3BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy92by9yYW5rLnRzIiwid2VicGFjazovLy8uL3NyYy92by9zY29yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdm8vc3RhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZvL3VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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TSxFQUFFLE9BQU8sR0FBRyxZQUFZLEdBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDMUgsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsV0FBVyxHQUFDLENBQUMsR0FBRyxNQUFNLEVBQUUsT0FBTyxHQUFHLFlBQVksR0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMxSCxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDcEM7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM1QixNQUFNLElBQUksQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFHLFdBQVcsR0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFLE9BQU8sR0FBRyxZQUFZLEdBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDMUgsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsV0FBVyxHQUFDLENBQUMsR0FBRyxNQUFNLEVBQUUsT0FBTyxHQUFHLFlBQVksR0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMxSCxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDcEM7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM1QixNQUFNLElBQUksQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sU0FB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Q0FBQyxNQUFNO1lBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7WUFDMUIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO1lBQzFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRTtTQUM1QyxDQUFDO0lBQ0gsQ0FBQztDQUNEIiwiZmlsZSI6Im1hemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgbmFtZXNwYWNlIENvbXBvbmVudCB7XG5cdGV4cG9ydCBjbGFzcyBJbnB1dFRleHQgZXh0ZW5kcyBQaGFzZXIuVGV4dCB7XG5cdFx0aXNGb2N1cyA9IGZhbHNlO1xuXG5cdFx0eCA6IG51bWJlcjtcblx0XHR5IDogbnVtYmVyO1xuXHRcdHdpZHRoIDogbnVtYmVyO1xuXHRcdGhlaWdodCA6IG51bWJlcjtcblxuXHRcdG1heExlbmd0aCA6IG51bWJlcjtcblxuXHRcdHBsYWNlaG9sZGVyIDogc3RyaW5nO1xuXG5cdFx0XG5cdFx0Ym9yZGVyUmVjdGFuZ2xlciA6IFBoYXNlci5SZWN0YW5nbGU7XG5cblx0XHR0ZXh0IDogc3RyaW5nO1xuXG5cdFx0cGhhc2VyVGV4dCA6IFBoYXNlci5UZXh0O1xuXG5cdFx0Y29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgbWF4TGVuZ3RoLCB0ZXh0LCBzdHlsZSkge1xuXHRcdFx0c3VwZXIoZ2FtZSwgeCwgeSwgIHRleHQsIHN0eWxlKTtcblx0XHRcdHRoaXMucGxhY2Vob2xkZXIgPSAnSW5wdXQgVGV4dCc7XG5cdFx0XHRpZiAodGV4dC5sZW5ndGggPT0gMCkge1xuXHRcdFx0XHR0ZXh0ID0gdGhpcy5wbGFjZWhvbGRlcjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy54ID0geDtcblx0XHRcdHRoaXMueSA9IHk7XG5cdFx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdFx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHRcdHRoaXMudGV4dCA9IHRleHQ7XG5cdFx0XHR0aGlzLm1heExlbmd0aCA9IG1heExlbmd0aCA/IG1heExlbmd0aCA6IDIwO1xuXG5cdFx0XHRsZXQgZ3JvdXAgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKCk7XG5cdFx0XHRsZXQgZ3JhcGhpY3MgPSB0aGlzLmdhbWUubWFrZS5ncmFwaGljcygpO1xuXHRcdFx0Z3JhcGhpY3MubGluZVN0eWxlKDIsIDB4MDAwMDAwLCAxKTtcblx0XHRcdC8vIGdyYXBoaWNzLmJlZ2luRmlsbCgweEZGNzAwQiwgMSk7XG5cdFx0XHRncmFwaGljcy5kcmF3UmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcblx0XHRcdC8vIGdyYXBoaWNzLmVuZEZpbGwoKTtcblx0XHRcdGdyb3VwLmFkZChncmFwaGljcyk7XG5cblx0XHRcdHRoaXMucGhhc2VyVGV4dCA9IHRoaXMuZ2FtZS5hZGQudGV4dCh4LCB5LCB0ZXh0LCBzdHlsZSk7XG5cdFx0XHR0aGlzLnBoYXNlclRleHQuc2V0VGV4dEJvdW5kcygwLCAwLCB3aWR0aCwgaGVpZ2h0KVxuXHRcdFx0dGhpcy5waGFzZXJUZXh0LmFscGhhID0gMC42O1xuXG5cdFx0XHR0aGlzLnBoYXNlclRleHQuaW5wdXRFbmFibGVkID0gdHJ1ZTtcblxuXHRcdFx0dGhpcy5waGFzZXJUZXh0LmV2ZW50cy5vbklucHV0RG93bi5hZGQoKHNwcml0ZSwgcG9pbnRlcikgPT4ge1xuXHRcdFx0XHR0aGlzLmlzRm9jdXMgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLnBoYXNlclRleHQuYWxwaGEgPSAxO1xuXHRcdFx0fSwgdGhpcyk7XG5cdFx0XHRcblx0XHRcdHRoaXMuZ2FtZS5pbnB1dC5vbkRvd24uYWRkKChzcHJpdGUsIHBvaW50ZXIpID0+IHtcblx0XHRcdFx0bGV0IHRleHRYID0gdGhpcy5waGFzZXJUZXh0LndvcmxkLng7XG5cdFx0XHRcdGxldCB0ZXh0V2lkdGggPSB0aGlzLnBoYXNlclRleHQud2lkdGg7XG5cblx0XHRcdFx0bGV0IHRleHRZID0gdGhpcy5waGFzZXJUZXh0LndvcmxkLnk7XG5cdFx0XHRcdGxldCB0ZXh0SGVpZ2h0ID0gdGhpcy5waGFzZXJUZXh0LmhlaWdodDtcblxuXHRcdFx0XHRpZiAocG9pbnRlci5jbGllbnRYID4gdGV4dFggJiYgcG9pbnRlci5jbGllbnRYIDw9IHRleHRYICsgdGV4dFdpZHRoKSB7XG5cdFx0XHRcdFx0aWYgKHBvaW50ZXIuY2xpZW50WSA+IHRleHRZICYmIHBvaW50ZXIuY2xpZW50WSA8PSB0ZXh0WSArIHRleHRIZWlnaHQpIHtcblx0XHRcdFx0XHRcdHRoaXMuaXNGb2N1cyA9IHRydWU7XG5cdFx0XHRcdFx0XHR0aGlzLnBoYXNlclRleHQuYWxwaGEgPSAxO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMucGhhc2VyVGV4dC5hbHBoYSA9IDAuNjtcblx0XHRcdFx0dGhpcy5pc0ZvY3VzID0gZmFsc2U7XG5cdFx0XHR9LCB0aGlzKTtcblxuXHRcdFx0dGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmFkZENhbGxiYWNrcyh0aGlzLCAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMuaXNGb2N1cykge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0aWYgKGUua2V5Q29kZSA9PSBQaGFzZXIuS2V5Ym9hcmQuQkFDS1NQQUNFKSB7XG5cdFx0XHRcdFx0dGhpcy5waGFzZXJUZXh0LnRleHQgPSB0aGlzLnBoYXNlclRleHQudGV4dC5zbGljZSgwLCAtMSk7XG5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gXG5cblx0XHRcdFx0aWYgKHRoaXMucGhhc2VyVGV4dC50ZXh0Lmxlbmd0aCArIDEgPiB0aGlzLm1heExlbmd0aCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy5waGFzZXJUZXh0LnRleHQgKz0gZS5rZXk7XG5cdFx0XHRcdHRoaXMudGV4dCA9IHRoaXMucGhhc2VyVGV4dC50ZXh0O1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmVuZGVyKCkge1xuXHRcdFx0XG5cdFx0fVxuXHR9XG59IiwiaW1wb3J0IFN0YXRlQ29udHJvbGxlciBmcm9tIFwiLi9zdGF0ZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcbmltcG9ydCBTdGFnZVNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL3N0YWdlU2VydmljZVwiO1xuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoU2VydmljZVwiO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi9tYXplXCI7XG5pbXBvcnQgVXRpbCBmcm9tIFwiLi4vdXRpbC91dGlsXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vdm8vdXNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJ2aWNlQ29udHJvbGxlciBpbXBsZW1lbnRzIENvbnRyb2xsZXIge1xuXHRnYW1lIDogUGhhc2VyLkdhbWU7XG5cblx0c3RhZ2VTZXJ2aWNlIDogU3RhZ2VTZXJ2aWNlO1xuXHRhdXRoU2VydmljZSA6IEF1dGhTZXJ2aWNlO1xuXG5cdC8vIEl0IGlzIG5lY2Vzc2FyeSBmb3IgY29udHJvbGluZyBzdGF0ZS5cblx0c3RhdGVDb250cm9sbGVyIDogU3RhdGVDb250cm9sbGVyO1xuXG5cdGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUuTWF6ZSkge1xuXHRcdHRoaXMuZ2FtZSA9IGdhbWU7XG5cdFx0XG5cdFx0dGhpcy5zdGFnZVNlcnZpY2UgPSBuZXcgU3RhZ2VTZXJ2aWNlKCk7XG5cdFx0dGhpcy5hdXRoU2VydmljZSA9IG5ldyBBdXRoU2VydmljZSgpO1xuXHRcdHRoaXMuc3RhdGVDb250cm9sbGVyID0gZ2FtZS5zdGF0ZUNvbnRyb2xsZXI7XG5cdH1cdFxuXHRcblx0cHVibGljIGxvZ2luKHVzZXJJZCwgY2FsbGJhY2spIHtcblx0XHR0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHVzZXJJZCwgY2FsbGJhY2spO1xuXHR9XG5cblx0cHVibGljIHJlZ2lzdGVyVXNlcih1c2VyOiBVc2VyKSB7XG5cdFx0dGhpcy5hdXRoU2VydmljZS5yZWdpc3RlclVzZXIodXNlcik7XG5cdH1cblxuXHRwdWJsaWMgZ2V0U3RhZ2VJbmZvcm1hdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGFnZVNlcnZpY2Uuc3RhZ2VNYXA7XG5cdH1cbn1cbiIsImltcG9ydCB7IEludHJvIH0gZnJvbSAnLi4vc3RhdGUvaW50cm8nO1xuaW1wb3J0IHsgTG9naW4gfSBmcm9tICcuLi9zdGF0ZS9sb2dpbic7XG5pbXBvcnQgeyBMZXZlbCB9IGZyb20gJy4uL3N0YXRlL2xldmVsJztcbmltcG9ydCB7IFBsYXkgfSBmcm9tICcuLi9zdGF0ZS9wbGF5JztcbmltcG9ydCB7IFJlZ2lzdGVyIH0gZnJvbSAnLi4vc3RhdGUvcmVnaXN0ZXInO1xuXG5pbXBvcnQgU2VydmljZUNvbnRyb2xsZXIgZnJvbSAnLi9zZXJ2aWNlQ29udHJvbGxlcic7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi4vbWF6ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlQ29udHJvbGxlciB7XG5cdHN0YXRlTWFuYWdlciA6IFBoYXNlci5TdGF0ZU1hbmFnZXI7XG5cdGdhbWUgOiBQaGFzZXIuR2FtZTtcblxuXHR3aWR0aDogbnVtYmVyO1xuXHRoZWlnaHQ6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHR9XG5cblx0cHVibGljIGluaXRpYWxpemUoZ2FtZTogR2FtZS5NYXplLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuXHRcdHRoaXMuc3RhdGVNYW5hZ2VyID0gbmV3IFBoYXNlci5TdGF0ZU1hbmFnZXIoZ2FtZSk7XG5cdFx0dGhpcy5nYW1lID0gZ2FtZTtcblx0XHR0aGlzLmdhbWUuc3RhdGUgPSB0aGlzLnN0YXRlTWFuYWdlcjtcblxuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblxuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cblx0c3RhcnRTdGF0ZShzdGF0ZT8gOiBzdHJpbmcpIHtcblx0XHRsZXQgc3RhcnRpbmdTdGF0ZSA9ICdJbnRybyc7XG5cdFx0Ly8gbGV0IHN0YXJ0aW5nU3RhdGUgPSAnU3RhZ2UnO1xuXHRcdGlmIChzdGF0ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgc3RhdGUgPT09IG51bGwpIHtcblx0XHRcdHN0YXJ0aW5nU3RhdGUgPSBzdGF0ZTtcblx0XHR9XG5cblx0XHR0aGlzLmdvU3RhdGUoc3RhcnRpbmdTdGF0ZSwgdHJ1ZSwgdHJ1ZSwgJ0hvcnJvciBNYXplJyk7XG5cdH1cblxuXHRwdWJsaWMgZ29TdGF0ZShzdGF0ZTogc3RyaW5nLCBjbGVhcldvcmxkPzogYm9vbGVhbiwgY2xlYXJDYWNoZT86IGJvb2xlYW4sIC4uLmFyZ3M6IGFueVtdKSB7XG5cdFx0aWYgKCF0aGlzLnN0YXRlTWFuYWdlci5jaGVja1N0YXRlKHN0YXRlKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBUaGlzIHN0YXRlKCR7c3RhdGV9KSBkb2VzIG5vdCBleGlzdCFgKTtcblx0XHR9XG5cblx0XHR0aGlzLnN0YXRlTWFuYWdlci5zdGFydChzdGF0ZSwgY2xlYXJXb3JsZCwgY2xlYXJDYWNoZSwgLi4uYXJncyk7XG5cdH1cblxuXHRwcml2YXRlIGluaXQoKSB7XG5cdFx0dGhpcy5hZGQoJ0ludHJvJywgSW50cm8sIHRydWUpO1xuXHRcdHRoaXMuYWRkKCdMb2dpbicsIExvZ2luLCBmYWxzZSk7XG5cdFx0dGhpcy5hZGQoJ1JlZ2lzdGVyJywgUmVnaXN0ZXIsIGZhbHNlKTtcblx0XHR0aGlzLmFkZCgnTGV2ZWwnLCBMZXZlbCwgZmFsc2UpO1xuXHRcdHRoaXMuYWRkKCdQbGF5JywgUGxheSwgZmFsc2UpO1xuXHR9XG5cblx0cHJpdmF0ZSBhZGQoa2V5LCBzdGF0ZSwgYXV0aFN0YXJ0Pykge1xuXHRcdHRoaXMuc3RhdGVNYW5hZ2VyLmFkZChrZXksIHN0YXRlLCBhdXRoU3RhcnQpO1xuXHR9XG59IiwiaW1wb3J0IFNlc3Npb24gZnJvbSBcIi4uL3Nlc3Npb24vc2Vzc2lvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBEQU88VD4ge1xuXHRzZXNzaW9uOiBTZXNzaW9uO1xuXHRjb25zdHJ1Y3RvcihzZXNzaW9uOiBTZXNzaW9uKSB7XG5cdFx0dGhpcy5zZXNzaW9uID0gc2Vzc2lvbjtcblx0fVxuXG5cdHB1YmxpYyBhYnN0cmFjdCBpbnNlcnQodGFibGU6IHN0cmluZywgb2JqOiBUKTogVDtcblx0cHVibGljIGFic3RyYWN0IHNlbGVjdCh0YWJsZTogc3RyaW5nLCBrZXk6IHN0cmluZyk6IFQ7XG5cdHB1YmxpYyBhYnN0cmFjdCB1cGRhdGUodGFibGU6IHN0cmluZywga2V5OiBzdHJpbmcsIG9iajogVCk6IFQ7XG5cdHB1YmxpYyBhYnN0cmFjdCBkZWxldGUodGFibGU6IHN0cmluZywga2V5OiBzdHJpbmcpOiBib29sZWFuO1xuXHRwdWJsaWMgYWJzdHJhY3Qgc2VsZWN0QWxsKHRhYmxlOiBzdHJpbmcpOiBhbnk7Ly9BcnJheTxUPjtcbn0iLCJpbXBvcnQgREFPIGZyb20gXCIuL2Rhb1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uL3ZvL3VzZXJcIjtcblxuZXhwb3J0IGNsYXNzIFVzZXJEYW8gZXh0ZW5kcyBEQU88VXNlcj4ge1xuXHRwcml2YXRlIHJlYWRvbmx5IHVzZXJLZXkgPSAnbWF6ZVVzZXJSZXBvJztcblx0XG5cdHB1YmxpYyBpbnNlcnQodGFibGU6IHN0cmluZywgb2JqOiBVc2VyKTogVXNlciB7XG5cdFx0Y29uc3QgdXNlckRhdGFiYXNlID0ge307XG5cdFx0dXNlckRhdGFiYXNlW29iai51c2VySWRdID0gb2JqLnRvU3RyaW5nKCk7XG5cblx0XHR0aGlzLnNlc3Npb24uc2V0KHRhYmxlLCBvYmoudXNlcklkLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YWJhc2UpKTtcblxuXHRcdHJldHVybiBvYmo7XG5cdH1cblxuXHRwdWJsaWMgc2VsZWN0KHRhYmxlOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKTogVXNlciB7XG5cdFx0Y29uc3QgdXNlclN0ciA9IHRoaXMuc2Vzc2lvbi5nZXQodGFibGUsIHVzZXJJZCk7XG5cblx0XHRjb25zdCB1c2VyOiBVc2VyID0gVXNlci5ieSh1c2VyU3RyKTtcblx0XHRyZXR1cm4gdXNlcjtcblx0fVxuXG5cdHB1YmxpYyB1cGRhdGUodGFibGU6IHN0cmluZyx1c2VySWQ6IHN0cmluZywgb2JqOiBVc2VyKTogVXNlciB7XG5cdFx0dGhpcy5zZXNzaW9uLnNldCh0YWJsZSwgdXNlcklkLCBvYmoudG9TdHJpbmcoKSk7XG5cdFx0XG5cdFx0cmV0dXJuIG9iajtcblx0fVxuXG5cdHB1YmxpYyBkZWxldGUodGFibGU6IHN0cmluZyx1c2VySWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdGxldCBpc1N1Y2Nlc3MgPSB0cnVlO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLnNlc3Npb24ucmVtb3ZlKHRhYmxlLCB1c2VySWQpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0aXNTdWNjZXNzID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlzU3VjY2Vzcztcblx0fVxuXG5cdHB1YmxpYyBzZWxlY3RBbGwodGFibGU6IHN0cmluZyk6IGFueSB7XG5cdFx0Y29uc3Qgb2JqcyA9ICg8YW55PnRoaXMpLnNlc3Npb24uYWxsU3RvcmFnZSgpO1xuXHRcdGNvbnN0IG9iaiA9IG9ianNbdGFibGVdO1xuXG5cdFx0cmV0dXJuIG9iajtcblx0fVxufSIsIi8vIGltcG9ydCAqIGFzIGcgZnJvbSAnLi9tYXplJ1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vbWF6ZSc7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSA2NDA7XG4gICAgY29uc3QgaGVpZ2h0ID0gNjAwOyAvLyAxMjAgKiA0MjBcbiAgICBjb25zdCBwYXJlbnRJZCA9ICdnYW1lJztcblxuICAgIC8vIFNob3VsZCBiZSBpbml0aWFsaXplIGdhbWUgb2JqZWN0IGFuZCBydW5cbiAgICBjb25zdCBtYXplID0gbmV3IEdhbWUuTWF6ZSh3aWR0aCwgaGVpZ2h0LCBwYXJlbnRJZCk7XG59OyIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9ub2RlX21vZHVsZXMvcGhhc2VyLWNlL3R5cGVzY3JpcHQvcGhhc2VyLmQudHNcIiAvPlxuXG5pbXBvcnQgU2VydmljZUNvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlci9zZXJ2aWNlQ29udHJvbGxlclwiO1xuaW1wb3J0IFN0YXRlQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVyL3N0YXRlQ29udHJvbGxlclwiO1xuXG5leHBvcnQgbmFtZXNwYWNlIEdhbWUge1xuXHRleHBvcnQgY2xhc3MgTWF6ZSBleHRlbmRzIFBoYXNlci5HYW1lIHtcblx0XHRzZXJ2aWNlQ29udHJvbGxlciA6IFNlcnZpY2VDb250cm9sbGVyO1xuXHRcdHN0YXRlQ29udHJvbGxlciA6IFN0YXRlQ29udHJvbGxlcjtcblxuXHRcdGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIHBhcmVudElkKSB7XG5cdFx0XHRzdXBlcih3aWR0aCwgaGVpZ2h0LCBQaGFzZXIuQVVUTywgcGFyZW50SWQsIG51bGwsIGZhbHNlLCB0cnVlLCBudWxsKTtcblxuXHRcdFx0dGhpcy5zZXJ2aWNlQ29udHJvbGxlciA9IG5ldyBTZXJ2aWNlQ29udHJvbGxlcih0aGlzKTtcblxuXHRcdFx0dGhpcy5zdGF0ZUNvbnRyb2xsZXIgPSBuZXcgU3RhdGVDb250cm9sbGVyKCk7XG5cdFx0XHR0aGlzLnN0YXRlQ29udHJvbGxlci5pbml0aWFsaXplKHRoaXMsIHdpZHRoLCBoZWlnaHQpO1xuXHRcdFx0dGhpcy5zdGF0ZUNvbnRyb2xsZXIuc3RhcnRTdGF0ZSgpO1xuXHRcdH1cblx0fVxufSIsImltcG9ydCBVdGlsIGZyb20gXCIuLi91dGlsL3V0aWxcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuLi92by91c2VyXCI7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZVwiO1xuaW1wb3J0IERBTyBmcm9tIFwiLi4vZGFvL2Rhb1wiO1xuaW1wb3J0IHsgVXNlckRhbyB9IGZyb20gXCIuLi9kYW8vdXNlckRhb1wiO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2Vzc2lvbiB9IGZyb20gXCIuLi9zZXNzaW9uL2xvY2FsU3RvcmFnZVNlc3Npb25cIjtcbmltcG9ydCBTZXNzaW9uIGZyb20gXCIuLi9zZXNzaW9uL3Nlc3Npb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aFNlcnZpY2UgaW1wbGVtZW50cyBTZXJ2aWNlIHtcblx0dXNlckRhbyA6IERBTzxVc2VyPjtcblx0c2Vzc2lvbiA6IFNlc3Npb247XG5cblx0cHJpdmF0ZSByZWFkb25seSBUQUJMRV9MQVNUX0xPR0dFRF9JTiA9ICdsYXN0TG9nZ2VkSW5Vc2VyJztcblx0cHJpdmF0ZSByZWFkb25seSBVU0VSX1RBQkxFID0gJ21hemVVc2VyUmVwbyc7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5zZXNzaW9uID0gbmV3IExvY2FsU3RvcmFnZVNlc3Npb24oKTtcblx0XHR0aGlzLnVzZXJEYW8gPSBuZXcgVXNlckRhbyh0aGlzLnNlc3Npb24pO1xuXHR9XG5cdFxuXHRwdWJsaWMgaW5pdGlhbGl6ZSgpIHtcblx0XHRcblx0fVxuXG5cdHB1YmxpYyBnZXRMYXN0TG9nZ2VkSW5Vc2VyKCkgOiBVc2VyIHtcblx0XHRjb25zdCBvYmogPSB0aGlzLnVzZXJEYW8uc2VsZWN0QWxsKHRoaXMuVEFCTEVfTEFTVF9MT0dHRURfSU4pO1xuXHRcdGxldCB1c2VyT2JqO1xuXHRcdGxldCB1c2VyO1xuXHRcdHRyeSB7XG5cdFx0XHR1c2VyT2JqID0gSlNPTi5wYXJzZShvYmopO1xuXHRcdFx0Y29uc3QgdXNlcklkID0gT2JqZWN0LmtleXModXNlck9iailbMF07XG5cdFx0XHR1c2VyID0gdXNlck9ialt1c2VySWRdO1xuXHRcdFx0dXNlciA9IEpTT04ucGFyc2UodXNlcik7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0dXNlciA9IG51bGw7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiB1c2VyO1xuXHR9XG5cblx0cHVibGljIHJlZ2lzdGVyVXNlcih1c2VyIDogVXNlcikge1xuXHRcdHRoaXMudXNlckRhby5pbnNlcnQodGhpcy5VU0VSX1RBQkxFLCB1c2VyKTtcblx0XHR0aGlzLnVzZXJEYW8uaW5zZXJ0KHRoaXMuVEFCTEVfTEFTVF9MT0dHRURfSU4sIHVzZXIpO1xuXHR9XG5cblx0cHVibGljIGxvZ2luKHVzZXJJZDogc3RyaW5nLCBjYWxsYmFjazogKHVzZXI6IFVzZXIsIGlzU3VjY2VzczogYm9vbGVhbikgPT4gdm9pZCkge1xuXHRcdGNvbnN0IHVzZXIgPSB0aGlzLnVzZXJEYW8uc2VsZWN0KHRoaXMuVVNFUl9UQUJMRSwgdXNlcklkKTtcblx0XHRpZiAodXNlcikge1xuXHRcdFx0Y2FsbGJhY2sodXNlciwgdHJ1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNhbGxiYWNrKG51bGwsIGZhbHNlKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgbG9nb3V0KHVzZXJJZCkge1xuXHRcdC8vVE9ETzogaW1wbGVtZW50cyBpdC5cblxuXHRcdGNvbnN0IHVzZXIgPSB0aGlzLnVzZXJEYW8uc2VsZWN0KHRoaXMuVVNFUl9UQUJMRSwgdXNlcklkKTtcblx0XHRcblx0XHRjb25zb2xlLmxvZygnbmV4dCB1c2VyIHdvdWxkIGJlIHJlbW92ZWQuJyk7XG5cdFx0Y29uc29sZS5sb2codXNlcik7XG5cdFx0dGhpcy51c2VyRGFvLmRlbGV0ZSh0aGlzLlVTRVJfVEFCTEUsIHVzZXJJZCk7XG5cdH1cbn0iLCJpbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZVwiO1xuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi4vdm8vc3RhZ2VcIjtcbmltcG9ydCB7IFBvaW50IH0gZnJvbSBcIi4uL3ZvL3BvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWdlU2VydmljZSBpbXBsZW1lbnRzIFNlcnZpY2Uge1xuXHR1c2VySWQgOiBzdHJpbmc7XG5cdHN0YWdlTWFwIDogYW55O1xuXHRcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5zdGFnZU1hcCA9IHt9O1xuXHRcdHRoaXMuZ2VuZXJhdGVTdGFnZU1hcCgpO1xuXHR9XG5cblx0cHVibGljIGluaXRpYWxpemUoKSB7XG5cdFx0XG5cdH1cblxuXHRwdWJsaWMgZ2V0U3RhZ2VJbmZvcm1hdGlvbih1c2VySWQgOiBzdHJpbmcpIHtcblxuXHR9XG5cblx0cHJpdmF0ZSBnZW5lcmF0ZVN0YWdlTWFwKCkge1xuXHRcdGZvciAobGV0IGk9MDsgaTwzOyBpKyspIHtcblx0XHRcdGxldCB6ZXJvRm9ybWF0ID0gJzAwMCcgKyBpO1xuXHRcdFx0bGV0IG1hcFNlcSA9IHplcm9Gb3JtYXQuc2xpY2UoLTMpO1xuXG5cdFx0XHRjb25zdCBmbG9vclBhdGggPSAnYXNzZXRzL2ltZy9tYXBzL2Zsb29yLScgKyBtYXBTZXEgKyAnLnBuZyc7XG5cdFx0XHRjb25zdCB3YWxsUGF0aCA9ICdhc3NldHMvaW1nL21hcHMvd2FsbHMtJyArIG1hcFNlcSArICcucG5nJztcblxuXHRcdFx0Ly8gY29uc3Qgc3RhZ2UgPSBuZXcgU3RhZ2UoaSwgZmxvb3JQYXRoLCB3YWxsUGF0aCwgUG9pbnQub24oMjM1LCA4NSkpO1xuXG5cblx0XHRcdGNvbnN0IHN0YWdlID0gbmV3IFN0YWdlKGksIGZsb29yUGF0aCwgd2FsbFBhdGgsIFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0UG9pbnQub24oMjM1LCA4NSksXG5cdFx0XHRcdFx0UG9pbnQub24oNTY1LCA0MDApXG5cdFx0XHRcdF0pO1xuXHRcdFx0XG5cdFx0XHR0aGlzLnN0YWdlTWFwW2ldID0gc3RhZ2U7XG5cdFx0fVxuXHR9XG59IiwiaW1wb3J0IFNlc3Npb24gZnJvbSBcIi4vc2Vzc2lvblwiO1xuXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlU2Vzc2lvbiBpbXBsZW1lbnRzIFNlc3Npb24ge1xuXHRnZXQodGFibGU6IHN0cmluZywga2V5OiBzdHJpbmcpIDogYW55IHtcblx0XHRjb25zdCB0YWJsZURhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0YWJsZSkgfHwgbnVsbDtcblx0XHRpZiAoIXRhYmxlRGF0YSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdGFibGVKc29uT2JqID0gSlNPTi5wYXJzZSh0YWJsZURhdGEpO1xuXHRcdGxldCBpdGVtID0gdGFibGVKc29uT2JqW2tleV07XG5cblx0XHRyZXR1cm4gaXRlbTtcblx0fVxuXG5cdHNldCh0YWJsZTogc3RyaW5nLCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSkgeyAvLyB2YWx1ZTogc3RyaW5nO1xuXHRcdGNvbnN0IG9yaWdpbmFsRGF0YU9iaiA9IHRoaXMuZ2V0KHRhYmxlLCBrZXkpO1xuXHRcdGlmICghb3JpZ2luYWxEYXRhT2JqKSB7XG5cdFx0XHRjb25zdCBvYmogPSB7fTtcblx0XHRcdG9ialtrZXldID0gIHZhbHVlO1xuXG5cdFx0XHRjb25zdCB3cml0dGVuRGF0YSA9IEpTT04uc3RyaW5naWZ5KG9iaik7XG5cblx0XHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRhYmxlLCB2YWx1ZSk7XHRcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRhYmxlLCB3cml0dGVuRGF0YSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IG9iaiA9IE9iamVjdC5hc3NpZ24oe30sIG9yaWdpbmFsRGF0YU9iaiwgSlNPTi5wYXJzZSh2YWx1ZSkpO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0odGFibGUsIG9iaik7XG5cdFx0fVxuXHR9XG5cblx0cmVtb3ZlKGtleTogc3RyaW5nKSB7XG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcblx0fVxuXG5cdGFsbFN0b3JhZ2UoKSB7XG5cdFx0bGV0IGFyY2hpdmUgPSB7fTtcblx0XHRsZXQga2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSk7XG5cdFx0bGV0IGkgPSBrZXlzLmxlbmd0aDtcblxuXHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdGFyY2hpdmVba2V5c1tpXV0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXlzW2ldKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJjaGl2ZTtcblx0fVxufSIsImltcG9ydCB7IFN0YXRlTWFuYWdlciwgR2FtZSB9IGZyb20gXCJwaGFzZXItY2VcIjtcbmltcG9ydCBTZXJ2aWNlQ29udHJvbGxlciBmcm9tIFwiLi4vY29udHJvbGxlci9zZXJ2aWNlQ29udHJvbGxlclwiO1xuaW1wb3J0IFN0YXRlQ29udHJvbGxlciBmcm9tIFwiLi4vY29udHJvbGxlci9zdGF0ZUNvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cdHNlcnZpY2VDb250cm9sbGVyIDogU2VydmljZUNvbnRyb2xsZXI7XG5cdHN0YXRlQ29udHJvbGxlciA6IFN0YXRlQ29udHJvbGxlcjtcblxuXHRjb25zdHJ1Y3RvcihnYW1lIDogUGhhc2VyLkdhbWUpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0Ly8gRm9yIElnbm9yaW5nIG5vbi1leGlzdCBwcm9wZXJ0eSBlcnJvci5cblx0XHR0aGlzLnNlcnZpY2VDb250cm9sbGVyID0gKGdhbWUgYXMgYW55KS5zZXJ2aWNlQ29udHJvbGxlcjtcblx0XHR0aGlzLnN0YXRlQ29udHJvbGxlciA9IChnYW1lIGFzIGFueSkuc3RhdGVDb250cm9sbGVyO1xuXHR9XG5cblx0Z29TdGF0ZShzdHJpbmcpIHtcblx0XHR0aGlzLnNlcnZpY2VDb250cm9sbGVyIFxuXHR9XG5cdFxufSIsImltcG9ydCBCYXNlIGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGNsYXNzIEludHJvIGV4dGVuZHMgQmFzZSB7XG5cdHN0YXRpYyBpbnRyb0ludGVydmFsID0gMTUwMDtcblxuXHRnYW1lVGl0bGUgOiBzdHJpbmc7XG5cdGxvZ29UZXh0IDogUGhhc2VyLlRleHQ7XG5cblx0Y29uc3RydWN0b3IoZ2FtZTogUGhhc2VyLkdhbWUpIHtcblx0XHRzdXBlcihnYW1lKTtcblx0fVxuXG5cdGluaXQoZ2FtZVRpdGxlKSB7XG5cdFx0dGhpcy5nYW1lVGl0bGUgPSBnYW1lVGl0bGU7XG5cdH1cblxuXHRwcmVsb2FkKCkge1xuXHRcdFxuXHR9XG5cblx0Y3JlYXRlKCkge1xuXHRcdHRoaXMuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyM0NDg4QUEnO1xuXG5cdFx0dGhpcy5sb2dvVGV4dCA9IHRoaXMuZ2FtZS5hZGQudGV4dChcblx0XHRcdHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCBcblx0XHRcdHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLCBcblx0XHRcdHRoaXMuZ2FtZVRpdGxlLFxuXHRcdFx0e1xuXHRcdFx0XHRmb250OiAnODBweCBBcmlhbDsnLFxuXHRcdFx0XHRmaWxsOiAnI2ZmZmZmZidcblx0XHRcdH1cblx0XHQpO1xuXHRcdHRoaXMubG9nb1RleHQuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcblx0XHR0aGlzLmxvZ29UZXh0LmFscGhhID0gMC44O1xuXG5cdFx0Y29uc3QgcCA9IHRoaXMuZ2FtZS53b3JsZC5ib3VuZHMuYm90dG9tUmlnaHQ7XG5cdFx0XG5cdFx0Y29uc3QgZm9vdGVyID0gdGhpcy5nYW1lLmFkZC50ZXh0KFxuXHRcdFx0cC54IC0gMTAwLFxuXHRcdFx0cC55IC0gMzAsXG5cdFx0XHQndjEuMCwgbWFkZSB3aXRoIFBoYXNlcicsXG5cdFx0XHR7XG5cdFx0XHRcdGZvbnQ6ICcxNXB4IEFyaWFsOycsXG5cdFx0XHRcdGZpbGw6ICcjZWVlZWVlJ1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0Zm9vdGVyLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG5cblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0c2VsZi5zdGF0ZUNvbnRyb2xsZXIuZ29TdGF0ZSgnTG9naW4nKTtcblx0XHR9LCBJbnRyby5pbnRyb0ludGVydmFsKTtcblx0fVxuXG5cdHVwZGF0ZSgpIHtcblxuXHR9XG59IiwiaW1wb3J0IFNlcnZpY2VDb250cm9sbGVyIGZyb20gXCIuLi9jb250cm9sbGVyL3NlcnZpY2VDb250cm9sbGVyXCI7XG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBMZXZlbCBleHRlbmRzIEJhc2Uge1xuXHRyZWFkb25seSBudW1iZXJPZlN0YWdlID0gMztcblxuXHRsb3dlclN0YWdlQnRuIDogUGhhc2VyLkJ1dHRvbjtcblx0aGlnaGVyU3RhZ2VCdG4gOiBQaGFzZXIuQnV0dG9uO1xuXHRjdXJyZW50U3RhZ2U6IG51bWJlcjtcblx0c3RhZ2VNYXA6IGFueTtcblxuXHRjb25zdHJ1Y3RvcihnYW1lKSB7XG5cdFx0c3VwZXIoZ2FtZSk7XG5cdH1cblx0XG5cdGluaXQoc3RhZ2VNYXApIHtcblx0XHR0aGlzLnN0YWdlTWFwID0gc3RhZ2VNYXA7XG5cdH1cblxuXHRwcmVsb2FkKCkge1xuXHRcdHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdzdGFnZUFycm93cycsICcuLi9hc3NldHMvaW1nL3N0YWdlQXJyb3dzLnBuZycsIDQ4LCA0OCk7XG5cdH1cblxuXHRjcmVhdGUoKSB7XG5cdFx0dGhpcy5nYW1lLnN0YWdlLmJhY2tncm91bmRDb2xvciA9ICcjOUI5QjlCJztcblx0XHR0aGlzLmdhbWUuc3RhZ2UuYWxwaGEgPSAwLjk7XG5cdFx0dGhpcy5kcmF3U3RhZ2VCdG4oKTtcblx0XHR0aGlzLmRyYXdTdGFnZU1vdmVCdG4oKTtcblx0fVxuXG5cdHVwZGF0ZSgpIHtcblxuXHR9XG5cblx0cHJpdmF0ZSBkcmF3U3RhZ2VCdG4oKSB7XG5cdFx0Y29uc3Qgd2lkdGggPSAyMDA7XG5cdFx0Y29uc3QgaGVpZ2h0ID0gMjAwO1xuXG5cdFx0bGV0IG9mZnNldFggPSAodGhpcy5nYW1lLndvcmxkLndpZHRoIC0gMjAwKSAvIDM7IC8vIDIwMDogcGFkZGluZ1xuXG5cdFx0Y29uc3Qgc3RhZ2VJbmZvID0gbmV3IEFycmF5KHRoaXMubnVtYmVyT2ZTdGFnZSk7XG5cdFx0XG5cdFx0Zm9yIChsZXQgaT0wOyBpPHRoaXMubnVtYmVyT2ZTdGFnZTsgaSsrKSB7XG5cdFx0XHRcblx0XHRcdGNvbnN0IHN0YWdlQnRuVGV4dCA9IGBTdGFnZS0ke2krMX1gICsgKHN0YWdlSW5mb1tpXSA/ICdcXG4nICsgc3RhZ2VJbmZvW2ldIDogJycpO1xuXHRcdFx0Y29uc3Qgc3RhZ2VCdG4gPSB0aGlzLmdhbWUuYWRkLnRleHQoMTQ1ICsgKG9mZnNldFggKiBpKSwgOTAsIHN0YWdlQnRuVGV4dCwge1xuXHRcdFx0XHRmaWxsOiAnI2ZmZmZmZicsXG5cdFx0XHRcdGZvbnQ6ICcxNXB4IEFyaWFsJ1xuXHRcdFx0fSk7XG5cblx0XHRcdHN0YWdlQnRuLmlucHV0RW5hYmxlZCA9IHRydWU7XG5cdFx0XHRzdGFnZUJ0bi5pbnB1dC51c2VIYW5kQ3Vyc29yID0gdHJ1ZTtcblx0XHRcdFxuXHRcdFx0Y29uc3Qgc3RhZ2VOdW0gPSBpKzE7XG5cdFx0XHRzdGFnZUJ0bi5ldmVudHMub25JbnB1dERvd24uYWRkKChlKSA9PiB7XG5cdFx0XHRcdGlmIChjb25maXJtKGBXYW5uYSBHbyB0byBTdGFnZS0ke3N0YWdlTnVtfT9gKSkge1xuXHRcdFx0XHRcdHRoaXMuc3RhdGVDb250cm9sbGVyLmdvU3RhdGUoJ1BsYXknLCB0cnVlLCB0cnVlLCB0aGlzLnN0YWdlTWFwW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyk7XG5cblx0XHRcdFxuXHRcdFx0XG5cblx0XHRcdC8vIGNvbnN0IGJ0biA9IHRoaXMuZ2FtZS5hZGQuYnV0dG9uKDEwMCArIChvZmZzZXRYICogaSksIDUwLCBgU3RhZ2UgLSAke2l9YCwgKGUpID0+IHtcblx0XHRcdC8vIFx0aWYgKGNvbmZpcm0oYEdvIHRvIFN0YWdlIC0gJHtpfT9gKSkge1xuXHRcdFx0Ly8gXHRcdHRoaXMuc3RhdGVDb250cm9sbGVyLmdvU3RhdGUoJ1BsYXknLCB0cnVlLCB0cnVlLCB0aGlzLnN0YWdlTWFwW2ldKTtcblx0XHRcdC8vIFx0fVxuXHRcdFx0Ly8gfSwgdGhpcyk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBkcmF3U3RhZ2VNb3ZlQnRuKCkge1xuXHRcdGNvbnN0IHAgPSB0aGlzLmdhbWUud29ybGQuYm91bmRzO1xuXG5cdFx0dGhpcy5sb3dlclN0YWdlQnRuID0gdGhpcy5nYW1lLmFkZC5idXR0b24oMTAwLCA1MDAgLCBcInN0YWdlQXJyb3dzXCIsIHRoaXMuYnV0dG9uQ2xpY2tlZCk7XG5cdFx0dGhpcy5oaWdoZXJTdGFnZUJ0biA9IHRoaXMuZ2FtZS5hZGQuYnV0dG9uKDEwMCwgNTAwLCBcInN0YWdlQXJyb3dzXCIsIHRoaXMuYnV0dG9uQ2xpY2tlZCk7XG5cblx0XHR0aGlzLmxvd2VyU3RhZ2VCdG4uZnJhbWUgPSAwO1xuXHRcdHRoaXMuaGlnaGVyU3RhZ2VCdG4uZnJhbWUgPSAxO1xuXG5cdFx0Ly8gQWxpZ24gc3RhZ2UgcGFnZSBtb3ZlIGJ0blxuXHRcdHRoaXMubG93ZXJTdGFnZUJ0bi54ID0gMTAwO1xuXHRcdHRoaXMuaGlnaGVyU3RhZ2VCdG4ueCA9IHAucmlnaHQgLSAxMDAgLSB0aGlzLmhpZ2hlclN0YWdlQnRuLndpZHRoO1xuXG5cdFx0Y29uc3Qgc3RhZ2VUZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCA1MCwgJ1N0YWdlJywge1xuXHRcdFx0ZmlsbDogJyNmZmZmZmYnLFxuXHRcdFx0Zm9udDogJzIwcHggQXJpYWwnXG5cdFx0fSk7XG5cblx0XHRzdGFnZVRleHQuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcblx0fVxuXG5cdHByaXZhdGUgYnV0dG9uQ2xpY2tlZChidXR0b24sIHBvaW50ZXIpIHtcblx0XHRpZiAoYnV0dG9uLmZyYW1lID09IDApIHsgLy8gbG93ZXJTdGFnZUJ0blxuXG5cdFx0fSBlbHNlIGlmIChidXR0b24uZnJhbWUgPT0gMSkgeyAvLyBoaWdoZXJTdGFnZUJ0blxuXG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vdm8vdXNlcic7XG5cbmV4cG9ydCBjbGFzcyBMb2dpbiBleHRlbmRzIEJhc2Uge1xuXHRsb2dpblRleHQgOiBQaGFzZXIuVGV4dDtcblx0Z2FtZUxvZ28gOiBQaGFzZXIuSW1hZ2U7XG5cblx0Z3Vlc3RVVUlEIDogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGdhbWUpIHtcblx0XHRzdXBlcihnYW1lKTtcblx0fVxuXG5cdHByZWxvYWQoKSB7XG5cdFx0dGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2dhbWVMb2dvJywgJ2Fzc2V0cy9pbWcvZ2FtZWxvZ28ucG5nJyk7XG5cdH1cblxuXHRjcmVhdGUoKSB7XG5cdFx0dGhpcy5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0ZGRkZGRic7XG5cblx0XHR0aGlzLmdhbWVMb2dvID0gdGhpcy5nYW1lLmFkZC5pbWFnZSh0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgMjEwLCAnZ2FtZUxvZ28nKTtcblx0XHR0aGlzLmdhbWVMb2dvLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG5cblx0XHR0aGlzLmxvZ2luVGV4dCA9IHRoaXMuZ2FtZS5hZGQudGV4dChcblx0XHRcdHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCBcblx0XHRcdHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLCBcblx0XHRcdCdMb2dpbicsXG5cdFx0XHR7XG5cdFx0XHRcdGZvbnQ6ICczNXB4IEFyaWFsOycsXG5cdFx0XHRcdGZpbGw6ICcjMDAwMDAwJ1xuXHRcdFx0fVxuXHRcdCk7XG5cdFx0dGhpcy5sb2dpblRleHQuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcblx0XHR0aGlzLmxvZ2luVGV4dC5hbHBoYSA9IDAuODtcblxuXHRcdHRoaXMubG9naW5UZXh0LmlucHV0RW5hYmxlZCA9IHRydWU7XG5cdFx0dGhpcy5sb2dpblRleHQuaW5wdXQudXNlSGFuZEN1cnNvciA9IHRydWU7XG5cblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHR0aGlzLmxvZ2luVGV4dC5ldmVudHMub25JbnB1dERvd24uYWRkKChlKSA9PiB7XG5cdFx0XHRjb25zdCB0d2VlbiA9IHNlbGYuZ2FtZS5hZGQudHdlZW4oc2VsZi5sb2dpblRleHQpLnRvKHtcblx0XHRcdFx0YWxwaGE6IDAuMlxuXHRcdFx0fSwgNzAwLCBQaGFzZXIuRWFzaW5nLlF1YWRyYXRpYy5PdXQsIGZhbHNlLCAwLCAwLCBmYWxzZSk7XG5cdFx0XHRcblx0XHRcdHR3ZWVuLm9uQ29tcGxldGUuYWRkKChlKSA9PiB7XG5cdFx0XHRcdGxldCB1c2VyID0gc2VsZi5zZXJ2aWNlQ29udHJvbGxlci5hdXRoU2VydmljZS5nZXRMYXN0TG9nZ2VkSW5Vc2VyKCk7XG5cdFx0XHRcdGlmICh1c2VyICYmIHVzZXIudXNlcklkKSB7XG5cdFx0XHRcdFx0c2VsZi5zZXJ2aWNlQ29udHJvbGxlci5sb2dpbih1c2VyLnVzZXJJZCwgKHVzZXI6IFVzZXIsIGlzU3VjY2VzczogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGlzU3VjY2Vzcykge1xuXHRcdFx0XHRcdFx0XHRhbGVydChgJHt1c2VyLnVzZXJJZH3ri5gg7ZmY7JiB7ZWp64uI64ukLmApO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBzdGFnZUluZm8gPSBzZWxmLnNlcnZpY2VDb250cm9sbGVyLmdldFN0YWdlSW5mb3JtYXRpb24oKTtcblx0XHRcdFx0XHRcdFx0c2VsZi5zdGF0ZUNvbnRyb2xsZXIuZ29TdGF0ZSgnTGV2ZWwnLCB0cnVlLCB0cnVlLCBzdGFnZUluZm8pO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0YWxlcnQoJ+yYiOyghOyXkCDrsKnrrLjtlZjsi6Ag7KCB7J20IOyXhuycvOyLnOq1sOyalD8g7IKs7Jqp7J6QIOuTseuhne2ZlOuptOycvOuhnCDsnbTrj5ntlanri4jri6QuJyk7XG5cdFx0XHRcdFx0XHRcdHNlbGYuc3RhdGVDb250cm9sbGVyLmdvU3RhdGUoJ1JlZ2lzdGVyJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XHRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRhbGVydCgn7JiI7KCE7JeQIOuwqeusuO2VmOyLoCDsoIHsnbQg7JeG7Jy87Iuc6rWw7JqUPyDsgqzsmqnsnpAg65Ox66Gd7ZmU66m07Jy866GcIOydtOuPme2VqeuLiOuLpC4nKTtcblx0XHRcdFx0XHRzZWxmLnN0YXRlQ29udHJvbGxlci5nb1N0YXRlKCdSZWdpc3RlcicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCBzZWxmKTtcblxuXHRcdFx0dHdlZW4uc3RhcnQoKTtcblx0XHR9LCB0aGlzKTtcblxuXG5cdFx0dGhpcy5sb2dpblRleHQuZXZlbnRzLm9uSW5wdXRPdmVyLmFkZCgoZSkgPT4ge1xuXHRcdFx0c2VsZi5sb2dpblRleHQuYWxwaGEgPSAwLjU7XG5cdFx0fSwgdGhpcyk7XG5cblx0XHR0aGlzLmxvZ2luVGV4dC5ldmVudHMub25JbnB1dE91dC5hZGQoKGUpID0+IHtcblx0XHRcdHNlbGYubG9naW5UZXh0LmFscGhhID0gMC44O1xuXHRcdH0sIHRoaXMpO1xuXHR9XG5cblx0dXBkYXRlKCkge1xuXG5cdH1cbn0iLCJpbXBvcnQgQmFzZSBmcm9tIFwiLi9iYXNlXCI7XG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gXCIuLi92by9zdGFnZVwiO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tIFwiLi4vdm8vcG9pbnRcIjtcblxuZXhwb3J0IGNsYXNzIFBsYXkgZXh0ZW5kcyBCYXNlIHtcblx0c3RhdGljIHJlYWRvbmx5IHJheUxlbmd0aCA9IDUwMDtcblx0c3RhdGljIHJlYWRvbmx5IG51bU9mUmF5cyA9IDIwO1xuXHRzdGF0aWMgcmVhZG9ubHkgbGlnaHRBbmdsZSA9IE1hdGguUEkvNDsgLy8gNDUgZGVnLlxuXG5cdHRpbWVyIDogUGhhc2VyLlRpbWVyO1xuXG5cdC8vIGZsb29yIDogUGhhc2VyLlRpbGVTcHJpdGU7XG5cdGZsb29yIDogUGhhc2VyLlNwcml0ZTtcblx0d2FsbCA6IFBoYXNlci5TcHJpdGU7XG5cdHdhbGxzQml0TWFwIDogUGhhc2VyLkJpdG1hcERhdGE7XG5cdG1hc2sgOiBQaGFzZXIuR3JhcGhpY3M7XG5cdHBsYXllciA6IFBoYXNlci5TcHJpdGU7XG5cdHBsYXllclBhdGggOiBzdHJpbmc7XG5cblx0Y3Vyc29yIDogUGhhc2VyLkN1cnNvcktleXM7XG5cdFxuXHRzdGFnZUluZm8gOiBTdGFnZTtcblx0Y3VycmVudEV4aXRQb2ludCA6IFBvaW50O1xuXHRjdXJyZW50RXhpdEdyYXBoaWMgOiBQaGFzZXIuR3JhcGhpY3M7XG5cblx0Y29uc3RydWN0b3IoZ2FtZSkge1xuXHRcdHN1cGVyKGdhbWUpO1xuXHR9XG5cblx0aW5pdChzdGFnZUluZm8gOiBTdGFnZSkge1xuXHRcdHRoaXMuc3RhZ2VJbmZvID0gc3RhZ2VJbmZvO1xuXHRcdHRoaXMucGxheWVyUGF0aCA9ICdhc3NldHMvaW1nL3BsYXllci1zcHJlYWRzaGVldC5wbmcnO1xuXHR9XG5cblx0cHJlbG9hZCgpIHtcblx0XHR0aGlzLmdhbWUubG9hZC5pbWFnZSgnZmxvb3InLCB0aGlzLnN0YWdlSW5mby5mbG9vckZpbGVQYXRoKTtcblx0XHR0aGlzLmdhbWUubG9hZC5pbWFnZSgnd2FsbCcsIHRoaXMuc3RhZ2VJbmZvLndhbGxGaWxlUGF0aCk7XG5cdFx0dGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ3BsYXllcicsIHRoaXMucGxheWVyUGF0aCwgNjQsIDY0LCAzNik7XG5cdH1cblxuXHRjcmVhdGUoKSB7XG5cdFx0dGhpcy5nYW1lLnN0YWdlLmJhY2tncm91bmRDb2xvciA9ICcjMDAwMDAwJzsgXG5cdFx0Ly8gdGhpcy5nYW1lLnN0YWdlLmJhY2tncm91bmRDb2xvciA9ICcweGZmZmZmZic7IFxuXG5cdFx0dGhpcy5nYW1lLndvcmxkLnNldEJvdW5kcygwLCAwLCB0aGlzLndvcmxkLndpZHRoLCB0aGlzLndvcmxkLmhlaWdodC0xMjApO1xuXHRcdFxuXHRcdHRoaXMuY3JlYXRlRmxvb3IoKTtcblx0XHR0aGlzLm1ha2VGaXJzdEV4aXRQb2ludCgpO1xuXHRcdHRoaXMuY3JlYXRlV2FsbCgpO1xuXHRcdHRoaXMuY3JlYXRlUGxheWVyKCk7IFxuXG5cdFx0dGhpcy5nYW1lLmNhbWVyYS5mb2xsb3codGhpcy5wbGF5ZXIsIFBoYXNlci5DYW1lcmEuRk9MTE9XX0xPQ0tPTiwgMC4xLCAwLjEpO1xuXG5cdFx0dGhpcy5jcmVhdGVNYXNrKCk7XG5cblx0XHR0aGlzLmZsb29yLm1hc2sgPSB0aGlzLm1hc2s7XG5cblx0XHR0aGlzLnRpbWVyID0gdGhpcy5nYW1lLnRpbWUuY3JlYXRlKGZhbHNlKTtcblxuXHRcdHRoaXMuY3Vyc29yID0gdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKTtcblx0XHR0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuYWRkQ2FsbGJhY2tzKHRoaXMsIChrZXkpID0+IHtcblx0XHRcdC8vVE9ETzogd2FzZCDqsIDriqXtlZjqsowg7ZWgIOqyg1xuXHRcdFx0aWYgKGtleS5rZXlDb2RlID09PSA4Nykge1x0XHQvLyBXLCBVcFxuXHRcdFx0XHRcblx0XHRcdH0gZWxzZSBpZiAoa2V5LmtleSA9PT0gNjUpIHtcdC8vIEEsIExlZnRcblx0XHRcdFxuXHRcdFx0fSBlbHNlIGlmIChrZXkua2V5ID09PSA4Mykge1x0Ly8gUywgRG93blxuXHRcdFx0XG5cdFx0XHR9IGVsc2UgaWYgKGtleS5rZXkgPT09IDY4KSB7XHQvLyBELCBSaWdodFxuXHRcdFx0XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmNyZWF0ZVRpbWVyKCk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZVRpbWVyKCkge1xuXHRcdGNvbnN0IHRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIDUwMCwgJ1RpbWVyIDogJywge1xuXHRcdFx0ZmlsbDogJyNmZmZmZmYnLFxuXHRcdFx0Zm9udDogJzE1cHggQXJpYWwnXG5cdFx0fSk7XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0dGhpcy5tb3ZlUGxheWVyKCk7XG5cdFx0dGhpcy5tb3ZlRmxhc2goKTtcblx0XHR0aGlzLnJhbmRvbUFscGhhVG8odGhpcy5mbG9vcik7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dGhpcy5nYW1lLmRlYnVnLmlucHV0SW5mbygzMiwgMzIpO1xuXHR9XG5cblx0cHJpdmF0ZSBtYWtlRmlyc3RFeGl0UG9pbnQoKSB7XG5cdFx0Y29uc3QgaWR4T2ZFeGl0UG9pbnQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpKjExICUgdGhpcy5zdGFnZUluZm8uZXhpdFBvaW50cy5sZW5ndGg7XG5cdFx0dGhpcy5zdGFnZUluZm8uZXhpdFBvaW50c1tpZHhPZkV4aXRQb2ludF0uYWN0aXZlID0gdHJ1ZTtcblx0XHR0aGlzLmN1cnJlbnRFeGl0UG9pbnQgPSB0aGlzLnN0YWdlSW5mby5leGl0UG9pbnRzW2lkeE9mRXhpdFBvaW50XTtcblx0XHR0aGlzLnJlbmRlckV4aXRQb2ludCh0aGlzLmN1cnJlbnRFeGl0UG9pbnQpO1xuXHR9XG5cblx0cHJpdmF0ZSByZW5kZXJFeGl0UG9pbnQoZXhpdFBvaW50IDogUG9pbnQpIHtcblx0XHRjb25zdCBncmFwaGljYWxQb2ludCA9ICh4LCB5KSA9PiB7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGl0R3JhcGhpYyA9IHRoaXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGl0R3JhcGhpYy5iZWdpbkZpbGwoMHhmZjAwMDAsIDAuOCk7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGl0R3JhcGhpYy5kcmF3Q2lyY2xlKHgsIHksIDEwKTtcblx0XHRcdHRoaXMuY3VycmVudEV4aXRHcmFwaGljLmVuZEZpbGwoKTtcblx0XHR9O1xuXG5cdFx0Z3JhcGhpY2FsUG9pbnQoZXhpdFBvaW50LngsIGV4aXRQb2ludC55KTtcblx0fVxuXG5cdHByaXZhdGUgcmFuZG9tQWxwaGFUbyhvYmogOmFueSkge1xuXHRcdG9iai5hbHBoYSA9IDAuNSArIE1hdGgucmFuZG9tKCkgKiAwLjU7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZVBsYXllcigpIHtcblx0XHR0aGlzLnBsYXllciA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDc1LCA3NSwgJ3BsYXllcicpO1xuXHRcdHRoaXMucGxheWVyLmFuY2hvci5zZXQoLjUsIC41KTtcdFxuXG5cdFx0dGhpcy5wbGF5ZXIuYW5pbWF0aW9ucy5hZGQoJ25vcnRoJywgWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdLCAxMCwgdHJ1ZSk7XG5cdFx0dGhpcy5wbGF5ZXIuYW5pbWF0aW9ucy5hZGQoJ3dlc3QnLCBbOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3XSwgMTAsIHRydWUpO1xuXHRcdHRoaXMucGxheWVyLmFuaW1hdGlvbnMuYWRkKCdzb3V0aCcsIFsxOCwgMTksIDIwLCAyMSwgMjIsIDIzLCAyNCwgMjUsIDI2XSwgMTAsIHRydWUpO1xuXHRcdHRoaXMucGxheWVyLmFuaW1hdGlvbnMuYWRkKCdlYXN0JywgWzI3LCAyOCwgMjksIDMwLCAzMSwgMzIsIDMzLCAzNCwgMzUgXSwgMTAsIHRydWUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVGbG9vcigpIHtcblx0XHR0aGlzLmZsb29yID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoMCwgMCwgJ2Zsb29yJyk7XG5cdFx0dGhpcy5mbG9vci53aWR0aCA9IDY0MDtcblx0XHR0aGlzLmZsb29yLmhlaWdodCA9IDQ4MDtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlTWFzaygpIHtcblx0XHR0aGlzLm1hc2sgPSB0aGlzLmdhbWUuYWRkLmdyYXBoaWNzKDAsIDApO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVXYWxsKCkge1xuXHRcdHRoaXMud2FsbHNCaXRNYXAgPSB0aGlzLmdhbWUubWFrZS5iaXRtYXBEYXRhKDY0MCwgNDgwKTtcblx0XHR0aGlzLndhbGxzQml0TWFwLmRyYXcoJ3dhbGwnKTtcblx0XHR0aGlzLndhbGxzQml0TWFwLnVwZGF0ZSgpO1xuXHRcdHRoaXMud2FsbCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsIDAsIHRoaXMud2FsbHNCaXRNYXApO1xuXHR9XG5cblx0cHJpdmF0ZSBtb3ZlRmxhc2goKSB7XG5cdFx0Y29uc3QgcGxheWVyV2lkdGggPSB0aGlzLnBsYXllci53aWR0aDtcblx0XHRjb25zdCBwbGF5ZXJIZWlnaHQgPSB0aGlzLnBsYXllci5oZWlnaHQ7XG5cblx0XHRjb25zdCBwbGF5ZXJYID0gdGhpcy5wbGF5ZXIueDtcblx0XHRjb25zdCBwbGF5ZXJZID0gdGhpcy5wbGF5ZXIueTtcblx0XHRcblx0XHRjb25zdCBkeSA9IHRoaXMuZ2FtZS5pbnB1dC55IC0gcGxheWVyWTtcblx0XHRjb25zdCBkeCA9IHRoaXMuZ2FtZS5pbnB1dC54IC0gcGxheWVyWDtcblxuXHRcdGNvbnN0IG1vdXNlQW5nbGUgPSBNYXRoLmF0YW4yKGR5LCBkeCk7XG5cblx0XHR0aGlzLm1hc2suY2xlYXIoKTtcblx0XHR0aGlzLm1hc2subGluZVN0eWxlKDIsIDB4ZmZmZmZmLCAxKTtcblxuXHRcdHRoaXMubWFzay5iZWdpbkZpbGwoMHgwMDAwMDApO1xuXHRcdHRoaXMubWFzay5tb3ZlVG8ocGxheWVyWCwgcGxheWVyWSk7XG5cdFx0Zm9yIChsZXQgaT0wOyBpPFBsYXkubnVtT2ZSYXlzOyBpKyspIHtcblx0XHRcdGNvbnN0IHJheUFuZ2xlID0gbW91c2VBbmdsZSAtIChQbGF5LmxpZ2h0QW5nbGUvMikgKyAoUGxheS5saWdodEFuZ2xlL1BsYXkubnVtT2ZSYXlzKSAqIGk7XG5cdFx0XHRsZXQgbGFzdFggPSBwbGF5ZXJYO1xuXHRcdFx0bGV0IGxhc3RZID0gcGxheWVyWTtcblx0XHRcdFxuXHRcdFx0Zm9yIChsZXQgaj0xOyBqPD1QbGF5LnJheUxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBNYXRoLnJvdW5kKHBsYXllclggKyAoaiAqIE1hdGguY29zKHJheUFuZ2xlKSkpO1xuXHRcdFx0XHRjb25zdCB5ID0gTWF0aC5yb3VuZChwbGF5ZXJZICsgKGogKiBNYXRoLnNpbihyYXlBbmdsZSkpKTtcblxuXHRcdFx0XHRjb25zdCBjb2xvciA9IHRoaXMucGlja0NvbG9yT2YoeCwgeSwgdGhpcy53YWxsc0JpdE1hcCk7XG5cdFx0XHRcdGlmIChjb2xvciA9PSAwKSB7XG5cdFx0XHRcdFx0bGFzdFggPSB4O1xuXHRcdFx0XHRcdGxhc3RZID0geTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLm1hc2subGluZVRvKGxhc3RYLCBsYXN0WSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubWFzay5saW5lVG8obGFzdFgsIGxhc3RZKTtcblx0XHR9XG5cblx0XHR0aGlzLm1hc2subGluZVRvKHBsYXllclgsIHBsYXllclkpO1xuXHRcdHRoaXMubWFzay5lbmRGaWxsKCk7XG5cdH1cblxuXHRwcml2YXRlIG1vdmVQbGF5ZXIoKSB7XG5cdFx0bGV0IHhTcGVlZCA9IDA7XG5cdFx0bGV0IHlTcGVlZCA9IDA7XG5cdFx0bGV0IGlzTW92aW5nID0gZmFsc2U7XG5cdFx0bGV0IGNhbk1vdmUgPSBmYWxzZTtcblxuXHRcdGNvbnN0IHBsYXllcldpZHRoID0gdGhpcy5wbGF5ZXIud2lkdGg7XG5cdFx0Y29uc3QgcGxheWVySGVpZ2h0ID0gdGhpcy5wbGF5ZXIuaGVpZ2h0O1xuXG5cdFx0Y29uc3QgcGxheWVyWCA9IHRoaXMucGxheWVyLng7XG5cdFx0Y29uc3QgcGxheWVyWSA9IHRoaXMucGxheWVyLnk7XG5cblx0XHRjb25zdCBjb2xvciA9IHtcblx0XHRcdG5vcnRoIDogMCxcblx0XHRcdHNvdXRoIDogMCxcblx0XHRcdHdlc3QgOiAwLFxuXHRcdFx0ZWFzdCA6IDBcblx0XHR9XG5cblx0XHRpZiAodGhpcy5jdXJzb3IudXAuaXNEb3duKSB7XG5cdFx0XHR5U3BlZWQgLT0gMTtcblx0XHRcdHRoaXMucGxheWVyLmFuaW1hdGlvbnMucGxheSgnbm9ydGgnKTtcblx0XHRcdGNvbnN0IG5vcnRoRWFzdCA9IHRoaXMucGlja0NvbG9yT2YocGxheWVyWCArIHBsYXllcldpZHRoLzIgKyB4U3BlZWQsIHBsYXllclkgLSBwbGF5ZXJIZWlnaHQvMiArIHlTcGVlZCwgdGhpcy53YWxsc0JpdE1hcCk7XG5cdFx0XHRjb25zdCBub3J0aFdlc3QgPSB0aGlzLnBpY2tDb2xvck9mKHBsYXllclggLSBwbGF5ZXJXaWR0aC8yICsgeFNwZWVkLCBwbGF5ZXJZIC0gcGxheWVySGVpZ2h0LzIgKyB5U3BlZWQsIHRoaXMud2FsbHNCaXRNYXApO1xuXHRcdFx0Y29sb3Iubm9ydGggPSBub3J0aEVhc3QgKyBub3J0aFdlc3Q7XG5cdFx0fVxuXHRcdFxuXHRcdGlmICh0aGlzLmN1cnNvci5kb3duLmlzRG93bikge1xuXHRcdFx0eVNwZWVkICs9IDE7XG5cdFx0XHR0aGlzLnBsYXllci5hbmltYXRpb25zLnBsYXkoJ3NvdXRoJyk7XG5cdFx0XHRjb25zdCBzb3V0aEVhc3QgPSB0aGlzLnBpY2tDb2xvck9mKHBsYXllclggKyBwbGF5ZXJXaWR0aC8yICsgeFNwZWVkLCBwbGF5ZXJZICsgcGxheWVySGVpZ2h0LzIgKyB5U3BlZWQsIHRoaXMud2FsbHNCaXRNYXApO1xuXHRcdFx0Y29uc3Qgc291dGhXZXN0ID0gdGhpcy5waWNrQ29sb3JPZihwbGF5ZXJYIC0gcGxheWVyV2lkdGgvMiArIHhTcGVlZCwgcGxheWVyWSArIHBsYXllckhlaWdodC8yICsgeVNwZWVkLCB0aGlzLndhbGxzQml0TWFwKTtcblx0XHRcdGNvbG9yLnNvdXRoID0gc291dGhFYXN0ICsgc291dGhXZXN0O1xuXHRcdH1cblx0XHRcblx0XHRpZiAodGhpcy5jdXJzb3IubGVmdC5pc0Rvd24pIHtcblx0XHRcdHhTcGVlZCAtPSAxO1xuXHRcdFx0dGhpcy5wbGF5ZXIuYW5pbWF0aW9ucy5wbGF5KCd3ZXN0Jyk7XG5cdFx0XHRjb25zdCB3ZXN0Tm9ydGggPSB0aGlzLnBpY2tDb2xvck9mKHBsYXllclggLSBwbGF5ZXJXaWR0aC8yICsgeFNwZWVkLCBwbGF5ZXJZIC0gcGxheWVySGVpZ2h0LzIgKyB5U3BlZWQsIHRoaXMud2FsbHNCaXRNYXApO1xuXHRcdFx0Y29uc3Qgd2VzdFNvdXRoID0gdGhpcy5waWNrQ29sb3JPZihwbGF5ZXJYIC0gcGxheWVyV2lkdGgvMiArIHhTcGVlZCwgcGxheWVyWSArIHBsYXllckhlaWdodC8yICsgeVNwZWVkLCB0aGlzLndhbGxzQml0TWFwKTtcblx0XHRcdGNvbG9yLndlc3QgPSB3ZXN0Tm9ydGggKyB3ZXN0U291dGg7XG5cdFx0fVxuXHRcdFxuXHRcdGlmICh0aGlzLmN1cnNvci5yaWdodC5pc0Rvd24pIHtcblx0XHRcdHhTcGVlZCArPSAxO1xuXHRcdFx0dGhpcy5wbGF5ZXIuYW5pbWF0aW9ucy5wbGF5KCdlYXN0Jyk7XG5cdFx0XHRjb25zdCBlYXN0Tm9ydGggPSB0aGlzLnBpY2tDb2xvck9mKHBsYXllclggKyBwbGF5ZXJXaWR0aC8yICsgeFNwZWVkLCBwbGF5ZXJZIC0gcGxheWVySGVpZ2h0LzIgKyB5U3BlZWQsIHRoaXMud2FsbHNCaXRNYXApO1xuXHRcdFx0Y29uc3QgZWFzdFNvdXRoID0gdGhpcy5waWNrQ29sb3JPZihwbGF5ZXJYICsgcGxheWVyV2lkdGgvMiArIHhTcGVlZCwgcGxheWVyWSArIHBsYXllckhlaWdodC8yICsgeVNwZWVkLCB0aGlzLndhbGxzQml0TWFwKTtcblx0XHRcdGNvbG9yLmVhc3QgPSBlYXN0Tm9ydGggKyBlYXN0U291dGg7XG5cdFx0fVxuXG5cdFx0aXNNb3ZpbmcgPSBNYXRoLmFicyh4U3BlZWQpICsgTWF0aC5hYnMoeVNwZWVkKSA8IDIgJiYgTWF0aC5hYnMoeFNwZWVkKSArIE1hdGguYWJzKHlTcGVlZCkgPiAwO1xuXHRcdGNhbk1vdmUgPSBjb2xvci5ub3J0aCArIGNvbG9yLnNvdXRoICsgY29sb3IuZWFzdCArIGNvbG9yLndlc3QgPT0gMDtcblx0XHRpZiAoaXNNb3ZpbmcgJiYgY2FuTW92ZSkge1xuXHRcdFx0dGhpcy5wbGF5ZXIueCArPSB4U3BlZWQ7XG5cdFx0XHR0aGlzLnBsYXllci55ICs9IHlTcGVlZDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zdG9wUGxheWVyQW5pbWNhdGVpb24oKTtcblx0XHR9XG5cblx0XHRcblx0XHRpZiAoTWF0aC5hYnModGhpcy5jdXJyZW50RXhpdFBvaW50LngtdGhpcy5wbGF5ZXIueCkgPCAzICYmIE1hdGguYWJzKHRoaXMucGxheWVyLnktdGhpcy5jdXJyZW50RXhpdFBvaW50LnkpIDwgMykge1xuXHRcdFx0YWxlcnQoJ0NvbmdyYXQhJyk7XG5cdFx0XHR0aGlzLnN0YXRlQ29udHJvbGxlci5nb1N0YXRlKCdMZXZlbCcpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcGlja0NvbG9yT2YoeDogbnVtYmVyLCB5OiBudW1iZXIsIGJpdE1hcERhdGE6IFBoYXNlci5CaXRtYXBEYXRhKSB7XG5cdFx0Y29uc3QgY29sb3IgPSBiaXRNYXBEYXRhLmdldFBpeGVsMzIoeCwgeSk7XG5cdFx0cmV0dXJuIGNvbG9yO1xuXHR9XG5cblx0cHJpdmF0ZSBzdG9wUGxheWVyQW5pbWNhdGVpb24oKSB7XG5cdFx0dGhpcy5wbGF5ZXIuYW5pbWF0aW9ucy5zdG9wKCdub3J0aCcpO1xuXHRcdHRoaXMucGxheWVyLmFuaW1hdGlvbnMuc3RvcCgnc291dGgnKTtcblx0XHR0aGlzLnBsYXllci5hbmltYXRpb25zLnN0b3AoJ3dlc3QnKTtcblx0XHR0aGlzLnBsYXllci5hbmltYXRpb25zLnN0b3AoJ2Vhc3QnKTtcblx0fVxuXG5cblx0cHJpdmF0ZSBnb0Z1bGxTY3JlZW4oKSB7XG5cblx0fVxufSIsImltcG9ydCBVdGlsIGZyb20gJy4uL3V0aWwvdXRpbCc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnQvaW5wdXRUZXh0JztcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgVXNlciBmcm9tICcuLi92by91c2VyJztcbmltcG9ydCBTY29yZSBmcm9tICcuLi92by9zY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBSZWdpc3RlciBleHRlbmRzIEJhc2Uge1xuXHRpbnB1dFRleHQgOiBDb21wb25lbnQuSW5wdXRUZXh0O1xuXHRyZWdpc3RlckJ0biA6IFBoYXNlci5UZXh0O1xuXG5cdGNvbnN0cnVjdG9yKGdhbWUpIHtcblx0XHRzdXBlcihnYW1lKTtcblx0fVxuXG5cdHByZWxvYWQoKSB7XG5cdFx0XG5cdH1cblxuXHRwcml2YXRlIHNldFJlZ2lzdGVySW5wdXRUZXh0KCkge1xuXHRcdGxldCB0ZXh0V2lkdGggPSAyMDA7XG5cdFx0bGV0IHRleHRIZWlnaHQgPSA4MDtcblx0XHRsZXQgdGV4dFggPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWCAtIHRleHRXaWR0aC8yO1xuXHRcdGxldCB0ZXh0WSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZIC0gdGV4dEhlaWdodC8yO1xuXG5cdFx0bGV0IHRleHRNYXhMZW5ndGggPSAyMDtcblxuXHRcdGxldCB0ZXh0U3R5bGUgPSB7XG5cdFx0XHRmaWxsOiAnIzAwMDAwMCcsXG5cdFx0XHRib3VuZHNBbGlnbkg6ICdjZW50ZXInLFxuXHRcdFx0Ym91bmRzQWxpZ25WOiAnbWlkZGxlJyxcblx0XHRcdGZvbnQ6ICcyMHB4IEFyaWFsJ1xuXHRcdH1cblxuXHRcdHRoaXMuaW5wdXRUZXh0ID0gbmV3IENvbXBvbmVudC5JbnB1dFRleHQodGhpcy5nYW1lLCB0ZXh0WCwgdGV4dFksIHRleHRXaWR0aCwgdGV4dEhlaWdodCwgdGV4dE1heExlbmd0aCwgJ2V4KSBVc2VyMDA3MDAnLCB0ZXh0U3R5bGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRSZWdpc3RlckJ1dHRvbigpIHtcblx0XHRsZXQgYnRuV2lkdGggPSAyMDA7XG5cdFx0bGV0IGJ0bkhlaWdodCA9IDgwO1xuXHRcdFxuXHRcdGxldCBidG5YID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclg7Ly8gLSBidG5XaWR0aC8yO1xuXHRcdGxldCBidG5ZID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgKyAxMjA7Ly8gLSBidG5IZWlnaHQvMiArIDEwMDtcblxuXHRcdGxldCBidG5UZXh0ID0gJ1JlZ2lzdGVyJztcblxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXG5cdFx0bGV0IHRleHRTdHlsZSA9IHtcblx0XHRcdGZpbGw6ICcjMDAwMDAwJyxcblx0XHRcdGJvdW5kc0FsaWduSDogJ2NlbnRlcicsXG5cdFx0XHRib3VuZHNBbGlnblY6ICdtaWRkbGUnLFxuXHRcdFx0Zm9udDogJzIwcHggQXJpYWwnXG5cdFx0fVxuXHRcdHRoaXMucmVnaXN0ZXJCdG4gPSB0aGlzLmdhbWUuYWRkLnRleHQoYnRuWCwgYnRuWSwgYnRuVGV4dCwgdGV4dFN0eWxlKTtcblx0XHR0aGlzLnJlZ2lzdGVyQnRuLmFuY2hvci5zZXRUbyguNSwgLjUpO1xuXHRcdFxuXHRcdHRoaXMucmVnaXN0ZXJCdG4uaW5wdXRFbmFibGVkID0gdHJ1ZTtcblx0XHR0aGlzLnJlZ2lzdGVyQnRuLmlucHV0LnVzZUhhbmRDdXJzb3IgPSB0cnVlO1xuXG5cdFx0dGhpcy5yZWdpc3RlckJ0bi5ldmVudHMub25JbnB1dERvd24uYWRkKChlKSA9PiB7XG5cdFx0XHRpZiAoY29uZmlybShgJHtzZWxmLmlucHV0VGV4dC50ZXh0feuLmOycvOuhnCDtlZjsi5zqsqDsirXri4jquYw/YCkpIHtcblx0XHRcdFx0c2VsZi5zYXZlVXNlcklkKCk7XG5cdFx0XHRcdGNvbnN0IHN0YWdlSW5mbyA9IHNlbGYuc2VydmljZUNvbnRyb2xsZXIuZ2V0U3RhZ2VJbmZvcm1hdGlvbigpO1xuXHRcdFx0XHRzZWxmLnN0YXRlQ29udHJvbGxlci5nb1N0YXRlKCdMZXZlbCcsIHRydWUsIHRydWUsIHN0YWdlSW5mbyk7XG5cdFx0XHR9XG5cdFx0fSwgdGhpcyk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyQnRuLmV2ZW50cy5vbklucHV0T3Zlci5hZGQoKGUpID0+IHtcblx0XHRcdHRoaXMucmVnaXN0ZXJCdG4uYWxwaGEgPSAwLjc7XG5cdFx0fSwgdGhpcyk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyQnRuLmV2ZW50cy5vbklucHV0T3V0LmFkZCgoZSkgPT4ge1xuXHRcdFx0dGhpcy5yZWdpc3RlckJ0bi5hbHBoYSA9IDE7XG5cdFx0fSwgdGhpcyk7XG5cblx0XHQvLyB0aGlzLnJlZ2lzdGVyQnRuID0gdGhpcy5nYW1lLmFkZC5idXR0b24oYnRuWCwgYnRuWSwgYnRuVGV4dCwgKGUpID0+IHtcblx0XHQvLyBcdGlmIChjb25maXJtKGAke3NlbGYuaW5wdXRUZXh0LnRleHR964uY7Jy866GcIO2VmOyLnOqyoOyKteuLiOq5jD9gKSkge1xuXHRcdC8vIFx0XHRzZWxmLnNhdmVVc2VySWQoKTtcblx0XHQvLyBcdFx0Y29uc3Qgc3RhZ2VJbmZvID0gc2VsZi5zZXJ2aWNlQ29udHJvbGxlci5nZXRTdGFnZUluZm9ybWF0aW9uKCk7XG5cdFx0Ly8gXHRcdHNlbGYuc3RhdGVDb250cm9sbGVyLmdvU3RhdGUoJ1N0YWdlJywgdHJ1ZSwgdHJ1ZSwgc3RhZ2VJbmZvKTtcblx0XHQvLyBcdH1cblx0XHQvLyB9LCB0aGlzKTtcblxuXHR9XG5cblx0Y3JlYXRlKCkge1xuXG5cdFx0dGhpcy5zZXRSZWdpc3RlcklucHV0VGV4dCgpO1xuXHRcdHRoaXMuc2V0UmVnaXN0ZXJCdXR0b24oKTtcblx0XHRcblx0fVxuXG5cdHVwZGF0ZSgpIHtcblx0XHR0aGlzLmlucHV0VGV4dC5yZW5kZXIoKTtcblx0fVxuXG5cdHNhdmVVc2VySWQoKSB7XG5cdFx0bGV0IHVzZXJJZCA9IHRoaXMuaW5wdXRUZXh0LnRleHQ7XG5cdFx0Y29uc3QgdXNlciA9IG5ldyBVc2VyKHVzZXJJZCwgbmV3IFNjb3JlKCkpO1xuXHRcdHRoaXMuc2VydmljZUNvbnRyb2xsZXIucmVnaXN0ZXJVc2VyKHVzZXIpO1xuXHR9XG59IiwiZXhwb3J0IGNsYXNzIFBvaW50IHtcblx0eDogbnVtYmVyO1xuXHR5OiBudW1iZXI7XG5cdGFjdGl2ZTogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6bnVtYmVyKSB7XG5cdFx0dGhpcy54ID0geDtcblx0XHR0aGlzLnkgPSB5O1xuXHRcdHRoaXMuYWN0aXZlID0gZmFsc2U7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIG9uKHg6IG51bWJlciwgeTpudW1iZXIpIHtcblx0XHRyZXR1cm4gbmV3IFBvaW50KHgseSk7XG5cdH1cbn0iLCJleHBvcnQgZW51bSBSYW5rIHtcblx0Tk9ORSA9IDAsXG5cdFMgPSAxLFxuXHRBID0gMixcblx0QiA9IDMsXG5cdEMgPSA0LFxuXHREID0gNSxcblx0RSA9IDYsXG5cdEYgPSA3XG59IiwiaW1wb3J0IHsgUmFuayB9IGZyb20gXCIuL3JhbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUge1xuXHR0aW1lIDogbnVtYmVyO1xuXHRyYW5rIDogUmFuaztcblx0XG5cdGNvbnN0cnVjdG9yKHRpbWU/OiBudW1iZXIsIHJhbms/OiBSYW5rKSB7XG5cdFx0dGhpcy50aW1lID0gdGltZSB8IDA7XG5cdFx0dGhpcy5yYW5rID0gcmFuayB8IFJhbmsuTk9ORTtcblx0fVxuXG5cdHB1YmxpYyB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0dGltZTogdGhpcy50aW1lLFxuXHRcdFx0cmFuazogdGhpcy5yYW5rXG5cdFx0fSk7XG5cdH1cbn0iLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gXCIuL3BvaW50XCI7XG5pbXBvcnQgeyBNYXBUeXBlIH0gZnJvbSBcIi4vbWFwVHlwZVwiO1xuaW1wb3J0IHsgUmFuayB9IGZyb20gXCIuL3JhbmtcIjtcblxuZXhwb3J0IGNsYXNzIFN0YWdlIHtcblx0c3RhZ2VJZCA6IG51bWJlcjtcblx0Zmxvb3JGaWxlUGF0aCA6IHN0cmluZztcblx0d2FsbEZpbGVQYXRoIDogc3RyaW5nO1xuXG5cdGV4aXRQb2ludHMgOiBBcnJheTxQb2ludD47XG5cdHRpbWVMaW1pdCA6IG51bWJlcjtcblxuXHR0cmVhc3VyZVBvaW50cyA6IEFycmF5PFBvaW50PjtcblxuXHRtYXBUeXBlOiBNYXBUeXBlO1xuXG5cdC8vVE9ETzogPz8/XG5cdHNvdW5kIDogUGhhc2VyLlNvdW5kO1xuXG5cdGNvbnN0cnVjdG9yKHN0YWdlSWQ6IG51bWJlciwgZmxvb3JGaWxlUGF0aDogc3RyaW5nLCB3YWxsRmlsZVBhdGg6IHN0cmluZywgZXhpdFBvaW50czogQXJyYXk8UG9pbnQ+LCB0aW1lTGltaXQ9NTAwMCkge1xuXHRcdHRoaXMuc3RhZ2VJZCA9IHN0YWdlSWQ7XG5cdFx0dGhpcy5mbG9vckZpbGVQYXRoID0gZmxvb3JGaWxlUGF0aDtcblx0XHR0aGlzLndhbGxGaWxlUGF0aCA9IHdhbGxGaWxlUGF0aDtcblx0XHR0aGlzLmV4aXRQb2ludHMgPSBleGl0UG9pbnRzO1xuXG5cdFx0dGhpcy50aW1lTGltaXQgPSB0aW1lTGltaXQ7XG5cdH1cbn0iLCJpbXBvcnQgU2NvcmUgZnJvbSBcIi4vc2NvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG5cdHVzZXJJZCA6IHN0cmluZztcblx0c2NvcmUgOiBTY29yZTtcblx0cmVnaXN0ZXJEYXRlIDogRGF0ZTtcblx0bGFzdFZpc2l0RGF0ZSA6IERhdGU7XG5cblx0Y29uc3RydWN0b3IodXNlcklkLCBzY29yZSkge1xuXHRcdHRoaXMudXNlcklkID0gdXNlcklkO1xuXHRcdHRoaXMuc2NvcmUgPSBzY29yZTtcblx0XHR0aGlzLnJlZ2lzdGVyRGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0dGhpcy5sYXN0VmlzaXREYXRlID0gbmV3IERhdGUoKTtcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgYnkoanNvblN0cmluZyA6IHN0cmluZyk6IFVzZXIge1xuXHRcdGxldCBqc29uO1xuXHRcdGxldCB1c2VyID0gbnVsbDtcblx0XHR0cnkge1xuXHRcdFx0anNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG5cdFx0XHR1c2VyID0gbmV3IFVzZXIoanNvbi51c2VySWQsIGpzb24uc2NvcmUpO1xuXHRcdFx0dXNlci5yZWdpc3RlckRhdGUgPSBqc29uLnJlZ2lzdGVyRGF0ZTtcblx0XHRcdHVzZXIubGFzdFZpc2l0RGF0ZSA9IGpzb24ubGFzdFZpc2l0RGF0ZTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHQvLyBqc29uU3RyaW5nIGlzIG5vdCB2YWxpZC5cblx0XHRcdC8vIEp1c3QgaWdub3JlIHRoaXMgY2FzZS5cblx0XHR9XG5cblx0XHRyZXR1cm4gdXNlcjtcblx0fVxuXG5cdHB1YmxpYyB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy50b0pzb24oKSk7XG5cdH1cblxuXHRwdWJsaWMgdG9Kc29uKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR1c2VySWQ6IHRoaXMudXNlcklkLFxuXHRcdFx0c2NvcmU6IHRoaXMuc2NvcmUudG9TdHJpbmcsXG5cdFx0XHRyZWdpc3RlckRhdGU6IHRoaXMucmVnaXN0ZXJEYXRlLnRvU3RyaW5nKCksXG5cdFx0XHRsYXN0VmlzaXREYXRlOiB0aGlzLmxhc3RWaXNpdERhdGUudG9TdHJpbmcoKSxcblx0XHR9O1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==