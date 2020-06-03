(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[router_1.RouterModule.forRoot(routes)],
            router_1.RouterModule] });
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppRoutingModule, { imports: [i1.RouterModule], exports: [router_1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppRoutingModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [router_1.RouterModule.forRoot(routes)],
                exports: [router_1.RouterModule],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i1 = __webpack_require__(/*! ./components/game-frame/game-frame.component */ "./src/app/components/game-frame/game-frame.component.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tictactoe';
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-game-frame");
        } }, directives: [i1.GameFrameComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var game_frame_component_1 = __webpack_require__(/*! ./components/game-frame/game-frame.component */ "./src/app/components/game-frame/game-frame.component.ts");
var board_component_1 = __webpack_require__(/*! ./components/board/board.component */ "./src/app/components/board/board.component.ts");
var square_component_1 = __webpack_require__(/*! ./components/square/square.component */ "./src/app/components/square/square.component.ts");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
var app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [app_component_1.AppComponent] });
    AppModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule
            ]] });
    return AppModule;
}());
exports.AppModule = AppModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [app_component_1.AppComponent,
        game_frame_component_1.GameFrameComponent,
        board_component_1.BoardComponent,
        square_component_1.SquareComponent], imports: [platform_browser_1.BrowserModule,
        animations_1.BrowserAnimationsModule,
        app_routing_module_1.AppRoutingModule,
        forms_1.FormsModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [
                    app_component_1.AppComponent,
                    game_frame_component_1.GameFrameComponent,
                    board_component_1.BoardComponent,
                    square_component_1.SquareComponent
                ],
                imports: [
                    platform_browser_1.BrowserModule,
                    animations_1.BrowserAnimationsModule,
                    app_routing_module_1.AppRoutingModule,
                    forms_1.FormsModule
                ],
                providers: [],
                bootstrap: [app_component_1.AppComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/board/board.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/board/board.component.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var i2 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var i3 = __webpack_require__(/*! ../square/square.component */ "./src/app/components/square/square.component.ts");
function BoardComponent_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var mode_r10 = ctx.$implicit;
    i0.ɵɵproperty("value", mode_r10.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", mode_r10.level, " ");
} }
function BoardComponent_app_square_8_Template(rf, ctx) { if (rf & 1) {
    var _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-square", 18);
    i0.ɵɵlistener("click", function BoardComponent_app_square_8_Template_app_square_click_0_listener() { i0.ɵɵrestoreView(_r14); var i_r12 = ctx.index; var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.makeHumanMove(i_r12); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var value_r11 = ctx.$implicit;
    var i_r12 = ctx.index;
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("winner", ctx_r1.winner)("drawGame", ctx_r1.drawGame)("position", i_r12)("value", value_r11);
} }
function BoardComponent_section_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" (", ctx_r2.humanPlayer, ") - ", ctx_r2.humanScoreVsComp, " ");
} }
function BoardComponent_section_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" (X) - ", ctx_r3.player1Score, " ");
} }
var _c0 = function (a0, a1, a2) { return { "my-turn-2": a0, "winning-icon": a1, "not-clickable": a2 }; };
function BoardComponent_img_18_Template(rf, ctx) { if (rf & 1) {
    var _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 20);
    i0.ɵɵlistener("click", function BoardComponent_img_18_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r16); var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.onStartGameAI(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(1, _c0, ctx_r4.currentPlayer === ctx_r4.aiPlayer && !ctx_r4.winner, ctx_r4.winningPlayer === ctx_r4.aiPlayer, !ctx_r4.isBoardEmpty && !ctx_r4.winningPlayer));
} }
function BoardComponent_img_19_Template(rf, ctx) { if (rf & 1) {
    var _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 21);
    i0.ɵɵlistener("click", function BoardComponent_img_19_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r18); var ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.onStartGameAI(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(1, _c0, ctx_r5.currentPlayer === ctx_r5.aiPlayer && !ctx_r5.winner, ctx_r5.winningPlayer === ctx_r5.aiPlayer, !ctx_r5.isBoardEmpty && !ctx_r5.winningPlayer));
} }
function BoardComponent_img_20_Template(rf, ctx) { if (rf & 1) {
    var _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 22);
    i0.ɵɵlistener("click", function BoardComponent_img_20_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r20); var ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.onSelectHuman(2); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(1, _c0, ctx_r6.currentPlayer === "O" && !ctx_r6.winner, ctx_r6.winningPlayer === "O", !ctx_r6.isBoardEmpty && !ctx_r6.winningPlayer));
} }
function BoardComponent_section_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" (", ctx_r7.aiPlayer, ") - ", ctx_r7.aiScoreVsHuman, " ");
} }
function BoardComponent_section_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" (O) - ", ctx_r8.player2Score, " ");
} }
function BoardComponent_section_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r9.winner.text, "\n");
} }
var _c1 = function (a0) { return { "block-board": a0 }; };
var _c2 = function (a0) { return { invisible: a0 }; };
var _c3 = function (a0, a1, a2) { return { "my-turn": a0, "winning-icon": a1, "not-a-win": a2 }; };
var BoardComponent = /** @class */ (function () {
    function BoardComponent() {
        this.displayPlayerSelect = true;
        this.isGameOver = true;
        this.askPlayAgain = false;
        this.canClick = true;
        this.winningLines = [
            // Horizontal
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            // Verticle
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            // Diagonal
            [0, 4, 8],
            [2, 4, 6],
        ];
        this.availableModes = [
            {
                id: 1,
                level: 'easy'
            },
            {
                id: 2,
                level: 'hard'
            },
            {
                id: 3,
                level: '2-Player'
            }
        ];
    }
    BoardComponent.prototype.ngOnInit = function () {
        this.resetScores();
        this.currentLevel = 1;
        this.newGame();
    };
    BoardComponent.prototype.resetScores = function () {
        this.humanScoreVsComp = 0;
        this.aiScoreVsHuman = 0;
        this.player1Score = 0;
        this.player2Score = 0;
    };
    BoardComponent.prototype.newGame = function () {
        this.board = Array(9).fill(null);
        this.winner = null;
        this.winningPlayer = null;
        this.drawGame = false;
        this.isGameOver = false;
        if (this.currentLevel !== 3) {
            this.onStartGameHuman();
        }
    };
    BoardComponent.prototype.clearBoard = function () {
        if (!this.askPlayAgain) {
            this.board.fill(null);
            this.displayPlayerSelect = true;
        }
        else {
            this.askPlayAgain = false;
            this.newGame();
        }
    };
    Object.defineProperty(BoardComponent.prototype, "isBoardEmpty", {
        get: function () {
            return this.board.every(function (box) { return box === null; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoardComponent.prototype, "currentPlayer", {
        get: function () {
            return this.curPlayer;
        },
        enumerable: true,
        configurable: true
    });
    BoardComponent.prototype.onStartGameHuman = function () {
        this.humanPlayer = 'X';
        this.aiPlayer = 'O';
        this.curPlayer = this.humanPlayer;
    };
    BoardComponent.prototype.onStartGameHuman2 = function () {
        this.humanPlayer = 'O';
        this.aiPlayer = 'X';
        this.curPlayer = this.humanPlayer;
    };
    BoardComponent.prototype.onSelectHuman = function (selection) {
        if (selection === 1) {
            this.onStartGameHuman();
        }
        else {
            this.onStartGameHuman2();
        }
        if (!this.askPlayAgain) {
            this.displayPlayerSelect = false;
        }
        else {
            this.displayPlayerSelect = false;
            this.clearBoard();
        }
    };
    BoardComponent.prototype.switchPlayer = function () {
        var temp = this.humanPlayer;
        this.humanPlayer = this.aiPlayer;
        this.aiPlayer = temp;
        this.curPlayer = this.humanPlayer;
    };
    BoardComponent.prototype.makeHumanMove = function (box) {
        if (this.isGameOver) {
            this.newGame();
            return;
        }
        if (this.askPlayAgain || this.displayPlayerSelect) {
            this.askPlayAgain = false;
            this.displayPlayerSelect = false;
        }
        if (this.board[box] === null) {
            this.board[box] = this.humanPlayer;
            this.curPlayer = this.aiPlayer;
            var winnerResult = this.calculateWinner(this.board);
            winnerResult ? this.winnerMsg(winnerResult) : this.makeComputerMove();
        }
    };
    BoardComponent.prototype.onStartGameAI = function () {
        if (!this.askPlayAgain) {
            this.aiPlayer = 'X';
            this.humanPlayer = 'O';
            this.displayPlayerSelect = false;
            this.makeComputerMove();
        }
        else {
            this.newGame();
            this.aiPlayer = 'X';
            this.humanPlayer = 'O';
            this.askPlayAgain = false;
            this.makeComputerMove();
        }
    };
    BoardComponent.prototype.movesLeft = function () {
        var newBoard = [];
        this.board.filter(function (value, index) {
            if (value === null) {
                newBoard.push(index);
            }
            return value === null;
        });
        return newBoard;
    };
    BoardComponent.prototype.makeComputerMove = function () {
        var _this = this;
        this.canClick = false;
        switch (this.currentLevel) {
            case 1: {
                setTimeout(function () {
                    _this.computerMove();
                    _this.canClick = true;
                    _this.curPlayer = _this.humanPlayer;
                }, 750);
                break;
            }
            case 2: {
                setTimeout(function () {
                    _this.makeAIMove();
                    _this.canClick = true;
                    _this.curPlayer = _this.humanPlayer;
                }, 500);
                break;
            }
            case 3: {
                this.switchPlayer();
                this.canClick = true;
                this.curPlayer = this.humanPlayer;
                var winnerResult = this.calculateWinner(this.board);
                if (winnerResult) {
                    this.winnerMsg(winnerResult);
                }
                break;
            }
        }
    };
    BoardComponent.prototype.computerMove = function () {
        var aiChoices = this.movesLeft();
        var randomSquare = aiChoices[Math.floor(Math.random() * aiChoices.length)];
        if (!this.board[randomSquare]) {
            this.board[randomSquare] = this.aiPlayer;
            var winnerResult = this.calculateWinner(this.board);
            if (winnerResult) {
                this.winnerMsg(winnerResult);
            }
        }
    };
    BoardComponent.prototype.makeAIMove = function () {
        var index = this.minimax(this.board, 0, this.aiPlayer);
        this.board[index] = this.aiPlayer;
        var winnerResult = this.calculateWinner(this.board);
        if (winnerResult) {
            this.winnerMsg(winnerResult);
        }
    };
    BoardComponent.prototype.minimax = function (board, depth, player) {
        var _this = this;
        var winnerResults = this.calculateWinner(board);
        if (winnerResults) {
            switch (winnerResults.winner) {
                case this.humanPlayer:
                    return -100 + depth;
                case this.aiPlayer:
                    return 100 - depth;
                case 'draw':
                    return 0;
            }
        }
        var moves = [];
        board.forEach(function (box, index) {
            if (box === null) {
                board[index] = player;
                var score = _this.minimax(board, depth + 1, player === _this.humanPlayer ? _this.aiPlayer : _this.humanPlayer);
                board[index] = null;
                moves.push({
                    index: index,
                    score: score,
                });
            }
        });
        var minOrMax = player === this.humanPlayer
            ? Math.min.apply(Math, moves.map(function (x) { return x.score; })) : Math.max.apply(Math, moves.map(function (x) { return x.score; }));
        var move = moves.find(function (x) { return x.score === minOrMax; });
        return (depth === 0)
            ? move.index
            : move.score;
    };
    BoardComponent.prototype.calculateWinner = function (currentBoard) {
        var _loop_1 = function (line) {
            var a = line[0], b = line[1], c = line[2];
            if (currentBoard[a] &&
                currentBoard[a] === currentBoard[b] &&
                currentBoard[a] === currentBoard[c]) {
                var loserBoard_1 = [];
                currentBoard.forEach(function (cell, index) {
                    if ((index !== a) && (index !== b) && (index !== c)) {
                        loserBoard_1.push(index);
                    }
                });
                return { value: { winner: currentBoard[a], cells: [a, b, c], loserCells: loserBoard_1 } };
            }
        };
        for (var _i = 0, _a = this.winningLines; _i < _a.length; _i++) {
            var line = _a[_i];
            var state_1 = _loop_1(line);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return (currentBoard.every(function (cell) { return cell !== null; }))
            ? { winner: 'draw' }
            : false;
    };
    BoardComponent.prototype.winnerMsg = function (winner) {
        this.isGameOver = true;
        this.askPlayAgain = true;
        this.winner = winner;
        this.winningPlayer = winner.winner;
        switch (winner.winner) {
            case 'draw':
                this.drawGame = true;
                this.winner.text = 'DRAW GAME!';
                break;
            case this.aiPlayer:
                if (this.currentLevel === 1 || this.currentLevel === 2) {
                    this.aiScoreVsHuman = this.aiScoreVsHuman + 1;
                }
                else if (this.currentLevel === 3) {
                    this.player2Score = this.player2Score + 1;
                }
                this.winner.text = this.aiPlayer + ' WINS';
                break;
            case this.humanPlayer:
                if (this.currentLevel === 1 || this.currentLevel === 2) {
                    this.humanScoreVsComp = this.humanScoreVsComp + 1;
                }
                else if (this.currentLevel === 3) {
                    this.player1Score = this.player1Score + 1;
                }
                this.winner.text = this.humanPlayer + ' WINS';
                break;
        }
    };
    BoardComponent.prototype.levelChange = function (currLevel) {
        this.currentLevel = +currLevel;
        this.newGame();
    };
    BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(); };
    BoardComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BoardComponent, selectors: [["app-board"]], decls: 24, vars: 22, consts: [["name", "chooseLevel", "id", "difficulty-selector", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "reset", 3, "click"], ["src", "./assets/images/reload.svg"], ["id", "blocker-style", 3, "ngClass"], [3, "winner", "drawGame", "position", "value", "click", 4, "ngFor", "ngForOf"], ["id", "player-selection-area"], ["id", "first-move", 3, "ngClass"], ["id", "player-select"], ["id", "human-player-select"], ["src", "./assets/images/brain.svg", 1, "player-icon", "x-icon", 3, "ngClass", "click"], ["class", "score", 4, "ngIf"], ["id", "ai-player-select"], ["class", "player-icon o-icon", "src", "./assets/images/robot.svg", 3, "ngClass", "click", 4, "ngIf"], ["class", "player-icon o-icon", "src", "./assets/images/einstein.svg", 3, "ngClass", "click", 4, "ngIf"], ["class", "player-icon o-icon", "src", "./assets/images/brain-opp.svg", 3, "ngClass", "click", 4, "ngIf"], ["id", "winner", 4, "ngIf"], [3, "value"], [3, "winner", "drawGame", "position", "value", "click"], [1, "score"], ["src", "./assets/images/robot.svg", 1, "player-icon", "o-icon", 3, "ngClass", "click"], ["src", "./assets/images/einstein.svg", 1, "player-icon", "o-icon", 3, "ngClass", "click"], ["src", "./assets/images/brain-opp.svg", 1, "player-icon", "o-icon", 3, "ngClass", "click"], ["id", "winner"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "select", 0);
            i0.ɵɵlistener("ngModelChange", function BoardComponent_Template_select_ngModelChange_0_listener($event) { return ctx.currentLevel = $event; })("ngModelChange", function BoardComponent_Template_select_ngModelChange_0_listener() { return ctx.levelChange(ctx.currentLevel); });
            i0.ɵɵtemplate(1, BoardComponent_option_1_Template, 2, 2, "option", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "button", 2);
            i0.ɵɵlistener("click", function BoardComponent_Template_button_click_2_listener() { return ctx.clearBoard(); });
            i0.ɵɵelement(3, "img", 3);
            i0.ɵɵelementStart(4, "span");
            i0.ɵɵtext(5, "Reset");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "main");
            i0.ɵɵelement(7, "section", 4);
            i0.ɵɵtemplate(8, BoardComponent_app_square_8_Template, 1, 4, "app-square", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "section", 6);
            i0.ɵɵelementStart(10, "h3", 7);
            i0.ɵɵtext(11, "Who Moves First?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 8);
            i0.ɵɵelementStart(13, "section", 9);
            i0.ɵɵelementStart(14, "img", 10);
            i0.ɵɵlistener("click", function BoardComponent_Template_img_click_14_listener() { return ctx.onSelectHuman(1); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(15, BoardComponent_section_15_Template, 2, 2, "section", 11);
            i0.ɵɵtemplate(16, BoardComponent_section_16_Template, 2, 1, "section", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "section", 12);
            i0.ɵɵtemplate(18, BoardComponent_img_18_Template, 1, 5, "img", 13);
            i0.ɵɵtemplate(19, BoardComponent_img_19_Template, 1, 5, "img", 14);
            i0.ɵɵtemplate(20, BoardComponent_img_20_Template, 1, 5, "img", 15);
            i0.ɵɵtemplate(21, BoardComponent_section_21_Template, 2, 2, "section", 11);
            i0.ɵɵtemplate(22, BoardComponent_section_22_Template, 2, 1, "section", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(23, BoardComponent_section_23_Template, 2, 1, "section", 16);
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.currentLevel);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.availableModes);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(14, _c1, !ctx.canClick));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.board);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(16, _c2, !ctx.isBoardEmpty));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(18, _c3, ctx.currentPlayer === ctx.humanPlayer && !ctx.winner && ctx.currentLevel !== 3 || ctx.currentPlayer === "X" && !ctx.winner && ctx.currentLevel === 3, ctx.winningPlayer === ctx.humanPlayer, ctx.currentLevel === 3 && ctx.winningPlayer === "O"));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.currentLevel === 1 || ctx.currentLevel === 2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.currentLevel === 3);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.currentLevel === 1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.currentLevel === 2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.currentLevel === 3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.currentLevel === 1 || ctx.currentLevel === 2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.currentLevel === 3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.winner);
        } }, directives: [i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgModel, i2.NgForOf, i2.NgClass, i2.NgIf, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x, i3.SquareComponent], styles: ["main[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 8rem 8rem 8rem;\n  grid-gap: 0;\n  justify-content: center;\n}\n\napp-square[_ngcontent-%COMP%] {\n  height: 8rem;\n}\n\napp-square[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n#blocker-style[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 25rem;\n  height: 40rem;\n  z-index: -1;\n  background: transparent;\n}\n\n.block-board[_ngcontent-%COMP%] {\n  z-index: 1 !important;\n}\n\n.not-clickable[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n#player-selection-area[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n#player-selection-area[_ngcontent-%COMP%]   #first-move[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 0;\n  color: #2D4057;\n  font-family: \"Roboto Light\";\n}\n\n#player-selection-area[_ngcontent-%COMP%]   .invisible[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n#player-selection-area[_ngcontent-%COMP%]   #player-select[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n#player-selection-area[_ngcontent-%COMP%]   #player-select[_ngcontent-%COMP%]   .player-icon[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  padding: 0.5rem;\n  cursor: pointer;\n  width: 4rem;\n}\n\n#player-selection-area[_ngcontent-%COMP%]   #player-select[_ngcontent-%COMP%]   .my-turn[_ngcontent-%COMP%] {\n  background-color: rgba(66, 118, 208, 0.5);\n  border-radius: 15%;\n}\n\n#player-selection-area[_ngcontent-%COMP%]   #player-select[_ngcontent-%COMP%]   .my-turn-2[_ngcontent-%COMP%] {\n  background-color: rgba(154, 225, 226, 0.5);\n  width: 4rem;\n  border-radius: 15%;\n}\n\n#player-selection-area[_ngcontent-%COMP%]   #player-select[_ngcontent-%COMP%]   .winning-icon[_ngcontent-%COMP%] {\n  background-color: rgba(248, 201, 36, 0.5);\n  -webkit-animation: wiggle 1s forwards;\n          animation: wiggle 1s forwards;\n}\n\n#player-selection-area[_ngcontent-%COMP%]   #player-select[_ngcontent-%COMP%]   .not-a-win[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\n\n#player-selection-area[_ngcontent-%COMP%]   #player-select[_ngcontent-%COMP%]   #human-player-select[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  width: 5rem;\n}\n\n#player-selection-area[_ngcontent-%COMP%]   #player-select[_ngcontent-%COMP%]   #ai-player-select[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  width: 5rem;\n}\n\n#player-selection-area[_ngcontent-%COMP%]   #player-select[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\n  font-family: \"Roboto Light\";\n  margin-top: 0.3rem;\n  width: 5rem;\n  text-align: center;\n}\n\n#winner[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  text-align: center;\n  --winner-msg-color-1: #332851;\n  --winner-msg-color-2: #F6C667;\n  -webkit-animation: winner-msg-animation 2s forwards;\n          animation: winner-msg-animation 2s forwards;\n}\n\n@-webkit-keyframes winner-msg-animation {\n  0% {\n    font-size: 1rem;\n    color: var(--winner-msg-color-1);\n  }\n  100% {\n    font-size: 2rem;\n    color: var(--winner-msg-color-2);\n  }\n}\n\n@keyframes winner-msg-animation {\n  0% {\n    font-size: 1rem;\n    color: var(--winner-msg-color-1);\n  }\n  100% {\n    font-size: 2rem;\n    color: var(--winner-msg-color-2);\n  }\n}\n\n#reset[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.5rem;\n  margin: 1rem auto;\n  width: 5rem;\n  background-color: rgba(51, 40, 81, 0.1);\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n#reset[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 1rem;\n}\n\n#reset[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 0.3rem;\n  font-family: \"Roboto Light\";\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: #2D4057;\n  position: relative;\n  bottom: 1px;\n}\n\n#difficulty-selector[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  position: relative;\n  right: 9rem;\n  width: 5rem;\n}\n\n@-webkit-keyframes wiggle {\n  15% {\n    transform: translateX(5px);\n  }\n  30% {\n    transform: translateX(-5px);\n  }\n  50% {\n    transform: translateX(3px);\n  }\n  65% {\n    transform: translateX(-3px);\n  }\n  80% {\n    transform: translateX(2px);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n\n@keyframes wiggle {\n  15% {\n    transform: translateX(5px);\n  }\n  30% {\n    transform: translateX(-5px);\n  }\n  50% {\n    transform: translateX(3px);\n  }\n  65% {\n    transform: translateX(-3px);\n  }\n  80% {\n    transform: translateX(2px);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXZpbmJpZ2dlcnMvTXlDb2RpbmdQcm9qZWN0cy90aWN0YWN0b2Uvc3JjL2FwcC9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxvQkFBQTtBQ0NKOztBREdBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDQUY7O0FER0E7RUFDRSxxQkFBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FERUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FDQUo7O0FER0U7RUFDRSxrQkFBQTtBQ0RKOztBRElFO0VBQ0UsYUFBQTtBQ0ZKOztBRElJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNGTjs7QURLSTtFQUNFLHlDQUFBO0VBQ0Esa0JBQUE7QUNITjs7QURNSTtFQUNFLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDSk47O0FET0k7RUFDRSx5Q0FBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7QUNMTjs7QURRSTtFQUNFLGtDQUFBO0FDTk47O0FEU0k7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDUE47O0FEVUk7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ1JOOztBRFdJO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1ROOztBRGNBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUVBLDZCQUFBO0VBQ0EsNkJBQUE7RUFHQSxtREFBQTtVQUFBLDJDQUFBO0FDZEY7O0FEaUJBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsZ0NBQUE7RUNkRjtFRGlCQTtJQUNFLGVBQUE7SUFDQSxnQ0FBQTtFQ2ZGO0FBQ0Y7O0FETUE7RUFDRTtJQUNFLGVBQUE7SUFDQSxnQ0FBQTtFQ2RGO0VEaUJBO0lBQ0UsZUFBQTtJQUNBLGdDQUFBO0VDZkY7QUFDRjs7QURtQkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNqQkY7O0FEbUJFO0VBQ0UsV0FBQTtBQ2pCSjs7QURvQkU7RUFDRSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNsQko7O0FEc0JBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDbkJGOztBRHNCQTtFQUNFO0lBR0UsMEJBQUE7RUNwQkY7RURzQkE7SUFHRSwyQkFBQTtFQ3JCRjtFRHVCQTtJQUdFLDBCQUFBO0VDdEJGO0VEd0JBO0lBR0UsMkJBQUE7RUN2QkY7RUR5QkE7SUFHRSwwQkFBQTtFQ3hCRjtFRDBCQTtJQUdFLHdCQUFBO0VDekJGO0FBQ0Y7O0FETEE7RUFDRTtJQUdFLDBCQUFBO0VDcEJGO0VEc0JBO0lBR0UsMkJBQUE7RUNyQkY7RUR1QkE7SUFHRSwwQkFBQTtFQ3RCRjtFRHdCQTtJQUdFLDJCQUFBO0VDdkJGO0VEeUJBO0lBR0UsMEJBQUE7RUN4QkY7RUQwQkE7SUFHRSx3QkFBQTtFQ3pCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ib2FyZC9ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDhyZW0gOHJlbSA4cmVtO1xuICBncmlkLWdhcDogMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmFwcC1zcXVhcmUge1xuICBoZWlnaHQ6IDhyZW07XG5cbiAgLmRpc2FibGVkIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxufVxuXG4jYmxvY2tlci1zdHlsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdpZHRoOiAyNXJlbTtcbiAgaGVpZ2h0OiA0MHJlbTtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uYmxvY2stYm9hcmQge1xuICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7XG59XG5cbi5ub3QtY2xpY2thYmxlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbiNwbGF5ZXItc2VsZWN0aW9uLWFyZWEge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuXG4gICNmaXJzdC1tb3ZlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBjb2xvcjogIzJENDA1NztcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gTGlnaHRcIjtcbiAgfVxuXG4gIC5pbnZpc2libGUge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuXG4gICNwbGF5ZXItc2VsZWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLnBsYXllci1pY29uIHtcbiAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB3aWR0aDogNHJlbTtcbiAgICB9XG5cbiAgICAubXktdHVybiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY2LCAxMTgsIDIwOCwgMC41KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1JTtcbiAgICB9XG5cbiAgICAubXktdHVybi0yIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU0LCAyMjUsIDIyNiwgMC41KTtcbiAgICAgIHdpZHRoOiA0cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTUlO1xuICAgIH1cblxuICAgIC53aW5uaW5nLWljb24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsIDIwMSwgMzYsIDAuNSk7XG4gICAgICBhbmltYXRpb246IHdpZ2dsZSAxcyBmb3J3YXJkcztcbiAgICB9XG5cbiAgICAubm90LWEtd2luIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgI2h1bWFuLXBsYXllci1zZWxlY3Qge1xuICAgICAgZmxleDogMTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgd2lkdGg6IDVyZW07XG4gICAgfVxuXG4gICAgI2FpLXBsYXllci1zZWxlY3Qge1xuICAgICAgZmxleDogMTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDVyZW07XG4gICAgfVxuXG4gICAgLnNjb3JlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBMaWdodFwiO1xuICAgICAgbWFyZ2luLXRvcDogLjNyZW07XG4gICAgICB3aWR0aDogNXJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuI3dpbm5lciB7XG4gIG1hcmdpbi10b3A6IC41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgLS13aW5uZXItbXNnLWNvbG9yLTE6ICMzMzI4NTE7XG4gIC0td2lubmVyLW1zZy1jb2xvci0yOiAjRjZDNjY3O1xuXG5cbiAgYW5pbWF0aW9uOiB3aW5uZXItbXNnLWFuaW1hdGlvbiAycyBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyB3aW5uZXItbXNnLWFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IHZhcigtLXdpbm5lci1tc2ctY29sb3ItMSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6IHZhcigtLXdpbm5lci1tc2ctY29sb3ItMik7XG4gIH1cbn1cblxuXG4jcmVzZXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAuNXJlbTtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG4gIHdpZHRoOiA1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCA0MCwgODEsIDAuMSk7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMXJlbTtcbiAgfVxuXG4gIHNwYW57XG4gICAgcGFkZGluZy1sZWZ0OiAuM3JlbTtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gTGlnaHRcIjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzJENDA1NztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAxcHg7XG4gIH1cbn1cblxuI2RpZmZpY3VsdHktc2VsZWN0b3Ige1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDlyZW07XG4gIHdpZHRoOiA1cmVtO1xufVxuXG5Aa2V5ZnJhbWVzIHdpZ2dsZSB7XG4gIDE1JVxuICB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcbiAgfVxuICAzMCVcbiAge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTtcbiAgfVxuICA1MCVcbiAge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7XG4gIH1cbiAgNjUlXG4gIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7XG4gIH1cbiAgODAlXG4gIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpO1xuICB9XG4gIDEwMCVcbiAge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuIiwibWFpbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOHJlbSA4cmVtIDhyZW07XG4gIGdyaWQtZ2FwOiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuYXBwLXNxdWFyZSB7XG4gIGhlaWdodDogOHJlbTtcbn1cbmFwcC1zcXVhcmUgLmRpc2FibGVkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbiNibG9ja2VyLXN0eWxlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2lkdGg6IDI1cmVtO1xuICBoZWlnaHQ6IDQwcmVtO1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5ibG9jay1ib2FyZCB7XG4gIHotaW5kZXg6IDEgIWltcG9ydGFudDtcbn1cblxuLm5vdC1jbGlja2FibGUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuI3BsYXllci1zZWxlY3Rpb24tYXJlYSB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG4jcGxheWVyLXNlbGVjdGlvbi1hcmVhICNmaXJzdC1tb3ZlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjb2xvcjogIzJENDA1NztcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIExpZ2h0XCI7XG59XG4jcGxheWVyLXNlbGVjdGlvbi1hcmVhIC5pbnZpc2libGUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4jcGxheWVyLXNlbGVjdGlvbi1hcmVhICNwbGF5ZXItc2VsZWN0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbiNwbGF5ZXItc2VsZWN0aW9uLWFyZWEgI3BsYXllci1zZWxlY3QgLnBsYXllci1pY29uIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDRyZW07XG59XG4jcGxheWVyLXNlbGVjdGlvbi1hcmVhICNwbGF5ZXItc2VsZWN0IC5teS10dXJuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NiwgMTE4LCAyMDgsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcbn1cbiNwbGF5ZXItc2VsZWN0aW9uLWFyZWEgI3BsYXllci1zZWxlY3QgLm15LXR1cm4tMiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU0LCAyMjUsIDIyNiwgMC41KTtcbiAgd2lkdGg6IDRyZW07XG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcbn1cbiNwbGF5ZXItc2VsZWN0aW9uLWFyZWEgI3BsYXllci1zZWxlY3QgLndpbm5pbmctaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAyMDEsIDM2LCAwLjUpO1xuICBhbmltYXRpb246IHdpZ2dsZSAxcyBmb3J3YXJkcztcbn1cbiNwbGF5ZXItc2VsZWN0aW9uLWFyZWEgI3BsYXllci1zZWxlY3QgLm5vdC1hLXdpbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4jcGxheWVyLXNlbGVjdGlvbi1hcmVhICNwbGF5ZXItc2VsZWN0ICNodW1hbi1wbGF5ZXItc2VsZWN0IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICB3aWR0aDogNXJlbTtcbn1cbiNwbGF5ZXItc2VsZWN0aW9uLWFyZWEgI3BsYXllci1zZWxlY3QgI2FpLXBsYXllci1zZWxlY3Qge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNXJlbTtcbn1cbiNwbGF5ZXItc2VsZWN0aW9uLWFyZWEgI3BsYXllci1zZWxlY3QgLnNjb3JlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIExpZ2h0XCI7XG4gIG1hcmdpbi10b3A6IDAuM3JlbTtcbiAgd2lkdGg6IDVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3dpbm5lciB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtLXdpbm5lci1tc2ctY29sb3ItMTogIzMzMjg1MTtcbiAgLS13aW5uZXItbXNnLWNvbG9yLTI6ICNGNkM2Njc7XG4gIGFuaW1hdGlvbjogd2lubmVyLW1zZy1hbmltYXRpb24gMnMgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgd2lubmVyLW1zZy1hbmltYXRpb24ge1xuICAwJSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS13aW5uZXItbXNnLWNvbG9yLTEpO1xuICB9XG4gIDEwMCUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogdmFyKC0td2lubmVyLW1zZy1jb2xvci0yKTtcbiAgfVxufVxuI3Jlc2V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMC41cmVtO1xuICBtYXJnaW46IDFyZW0gYXV0bztcbiAgd2lkdGg6IDVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDQwLCA4MSwgMC4xKTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNyZXNldCBpbWcge1xuICB3aWR0aDogMXJlbTtcbn1cbiNyZXNldCBzcGFuIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjNyZW07XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBMaWdodFwiO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMkQ0MDU3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMXB4O1xufVxuXG4jZGlmZmljdWx0eS1zZWxlY3RvciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogOXJlbTtcbiAgd2lkdGg6IDVyZW07XG59XG5cbkBrZXlmcmFtZXMgd2lnZ2xlIHtcbiAgMTUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xuICB9XG4gIDMwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcbiAgfVxuICA2NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcbiAgfVxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59Il19 */"] });
    return BoardComponent;
}());
exports.BoardComponent = BoardComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BoardComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-board',
                templateUrl: './board.component.html',
                styleUrls: ['./board.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/game-frame/game-frame.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/game-frame/game-frame.component.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i1 = __webpack_require__(/*! ../board/board.component */ "./src/app/components/board/board.component.ts");
var GameFrameComponent = /** @class */ (function () {
    function GameFrameComponent() {
    }
    GameFrameComponent.prototype.ngOnInit = function () {
        this.gameMode = 0;
    };
    GameFrameComponent.ɵfac = function GameFrameComponent_Factory(t) { return new (t || GameFrameComponent)(); };
    GameFrameComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GameFrameComponent, selectors: [["app-game-frame"]], decls: 2, vars: 0, consts: [["id", "game-area"]], template: function GameFrameComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "app-board");
            i0.ɵɵelementEnd();
        } }, directives: [i1.BoardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1mcmFtZS9nYW1lLWZyYW1lLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return GameFrameComponent;
}());
exports.GameFrameComponent = GameFrameComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GameFrameComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-game-frame',
                templateUrl: './game-frame.component.html',
                styleUrls: ['./game-frame.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/square/square.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/square/square.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var _c0 = function (a0, a1, a2, a3, a4) { return { "x-class": a0, "o-class": a1, "winner-found": a2, "loser-found": a3, "draw-game": a4 }; };
var SquareComponent = /** @class */ (function () {
    function SquareComponent() {
    }
    SquareComponent.ɵfac = function SquareComponent_Factory(t) { return new (t || SquareComponent)(); };
    SquareComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SquareComponent, selectors: [["app-square"]], inputs: { value: "value", position: "position", winner: "winner", drawGame: "drawGame" }, decls: 2, vars: 9, consts: [[3, "id", "ngClass"]], template: function SquareComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("id", "square" + ctx.position)("ngClass", i0.ɵɵpureFunction5(3, _c0, ctx.value == "X", ctx.value == "O", ctx.winner == null ? null : ctx.winner.cells == null ? null : ctx.winner.cells.includes(ctx.position), ctx.winner == null ? null : ctx.winner.loserCells == null ? null : ctx.winner.loserCells.includes(ctx.position), ctx.drawGame));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx.value, "\n");
        } }, directives: [i1.NgClass], styles: ["section[_ngcontent-%COMP%] {\n  height: 8rem;\n  width: 8rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  border: 0.2rem solid var(--transparent-blue);\n  font-size: 4rem;\n  font-family: Verdana;\n  color: var(--transparent-blue);\n  --transparent-blue: rgba(45, 64, 87, 0.85);\n  --transparent-purple: rgba(59, 47, 94, 0.75);\n  --winner-color-1: #332851;\n  --winner-color-2: #9AE1E2;\n  --winner-color-3: #F6C667;\n  --loser-color-1: lightgrey;\n  --loser-color-2: darkgrey;\n  --loser-color-3: rgba(45, 64, 87, 0.4);\n  --transparent: rgba(255, 255, 255, 50);\n}\nsection[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n#square0[_ngcontent-%COMP%], #square1[_ngcontent-%COMP%], #square2[_ngcontent-%COMP%] {\n  border-top: none;\n}\n#square0[_ngcontent-%COMP%], #square3[_ngcontent-%COMP%], #square6[_ngcontent-%COMP%] {\n  border-left: none;\n}\n#square2[_ngcontent-%COMP%], #square5[_ngcontent-%COMP%], #square8[_ngcontent-%COMP%] {\n  border-right: none;\n}\n#square6[_ngcontent-%COMP%], #square7[_ngcontent-%COMP%], #square8[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.winner-found[_ngcontent-%COMP%] {\n  -webkit-animation: winner-pulse 1s forwards;\n          animation: winner-pulse 1s forwards;\n}\n.loser-found[_ngcontent-%COMP%] {\n  -webkit-animation: loser-pulse 1s forwards;\n          animation: loser-pulse 1s forwards;\n}\n.draw-game[_ngcontent-%COMP%] {\n  -webkit-animation: draw-pulse 1s forwards;\n          animation: draw-pulse 1s forwards;\n}\n@-webkit-keyframes winner-pulse {\n  0% {\n    color: var(--winner-color-1);\n  }\n  50% {\n    color: var(--winner-color-2);\n  }\n  100% {\n    color: var(--winner-color-3);\n  }\n}\n@keyframes winner-pulse {\n  0% {\n    color: var(--winner-color-1);\n  }\n  50% {\n    color: var(--winner-color-2);\n  }\n  100% {\n    color: var(--winner-color-3);\n  }\n}\n@-webkit-keyframes loser-pulse {\n  25% {\n    color: var(--loser-color-1);\n  }\n  50% {\n    color: var(--loser-color-2);\n  }\n  100% {\n    color: var(--loser-color-3);\n  }\n}\n@keyframes loser-pulse {\n  25% {\n    color: var(--loser-color-1);\n  }\n  50% {\n    color: var(--loser-color-2);\n  }\n  100% {\n    color: var(--loser-color-3);\n  }\n}\n@-webkit-keyframes draw-pulse {\n  0% {\n    color: var(--loser-color-1);\n    border-color: var(--loser-color-1);\n  }\n  20% {\n    color: var(--transparent);\n    border-color: var(--transparent);\n  }\n  50% {\n    color: var(--loser-color-2);\n    border-color: var(--loser-color-2);\n  }\n  70% {\n    color: var(--transparent);\n    border-color: var(--transparent);\n  }\n  100% {\n    color: var(--loser-color-3);\n    border-color: var(--loser-color-3);\n  }\n}\n@keyframes draw-pulse {\n  0% {\n    color: var(--loser-color-1);\n    border-color: var(--loser-color-1);\n  }\n  20% {\n    color: var(--transparent);\n    border-color: var(--transparent);\n  }\n  50% {\n    color: var(--loser-color-2);\n    border-color: var(--loser-color-2);\n  }\n  70% {\n    color: var(--transparent);\n    border-color: var(--transparent);\n  }\n  100% {\n    color: var(--loser-color-3);\n    border-color: var(--loser-color-3);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXZpbmJpZ2dlcnMvTXlDb2RpbmdQcm9qZWN0cy90aWN0YWN0b2Uvc3JjL2FwcC9jb21wb25lbnRzL3NxdWFyZS9zcXVhcmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc3F1YXJlL3NxdWFyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFFQSwwQ0FBQTtFQUNBLDRDQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0NBQUE7QUNBRjtBREVFO0VBQ0UsZUFBQTtBQ0FKO0FESUE7RUFDRSxnQkFBQTtBQ0RGO0FESUE7RUFDRSxpQkFBQTtBQ0RGO0FESUE7RUFDRSxrQkFBQTtBQ0RGO0FESUE7RUFDRSxtQkFBQTtBQ0RGO0FESUE7RUFDRSwyQ0FBQTtVQUFBLG1DQUFBO0FDREY7QURJQTtFQUNFLDBDQUFBO1VBQUEsa0NBQUE7QUNERjtBRElBO0VBQ0UseUNBQUE7VUFBQSxpQ0FBQTtBQ0RGO0FES0E7RUFDRTtJQUNFLDRCQUFBO0VDRkY7RURLQTtJQUNFLDRCQUFBO0VDSEY7RURNQTtJQUNFLDRCQUFBO0VDSkY7QUFDRjtBRFBBO0VBQ0U7SUFDRSw0QkFBQTtFQ0ZGO0VES0E7SUFDRSw0QkFBQTtFQ0hGO0VETUE7SUFDRSw0QkFBQTtFQ0pGO0FBQ0Y7QURPQTtFQUNFO0lBQ0UsMkJBQUE7RUNMRjtFRFFBO0lBQ0UsMkJBQUE7RUNORjtFRFNBO0lBQ0UsMkJBQUE7RUNQRjtBQUNGO0FESkE7RUFDRTtJQUNFLDJCQUFBO0VDTEY7RURRQTtJQUNFLDJCQUFBO0VDTkY7RURTQTtJQUNFLDJCQUFBO0VDUEY7QUFDRjtBRFVBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLGtDQUFBO0VDUkY7RURXQTtJQUNFLHlCQUFBO0lBQ0EsZ0NBQUE7RUNURjtFRFlBO0lBQ0UsMkJBQUE7SUFDQSxrQ0FBQTtFQ1ZGO0VEYUE7SUFDRSx5QkFBQTtJQUNBLGdDQUFBO0VDWEY7RURjQTtJQUNFLDJCQUFBO0lBQ0Esa0NBQUE7RUNaRjtBQUNGO0FEWkE7RUFDRTtJQUNFLDJCQUFBO0lBQ0Esa0NBQUE7RUNSRjtFRFdBO0lBQ0UseUJBQUE7SUFDQSxnQ0FBQTtFQ1RGO0VEWUE7SUFDRSwyQkFBQTtJQUNBLGtDQUFBO0VDVkY7RURhQTtJQUNFLHlCQUFBO0lBQ0EsZ0NBQUE7RUNYRjtFRGNBO0lBQ0UsMkJBQUE7SUFDQSxrQ0FBQTtFQ1pGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NxdWFyZS9zcXVhcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgaGVpZ2h0OiA4cmVtO1xuICB3aWR0aDogOHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIGJvcmRlcjogLjJyZW0gc29saWQgdmFyKC0tdHJhbnNwYXJlbnQtYmx1ZSk7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gIGNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1ibHVlKTtcblxuICAtLXRyYW5zcGFyZW50LWJsdWU6IHJnYmEoNDUsIDY0LCA4NywgMC44NSk7XG4gIC0tdHJhbnNwYXJlbnQtcHVycGxlOiByZ2JhKDU5LCA0NywgOTQsIDAuNzUpO1xuICAtLXdpbm5lci1jb2xvci0xOiAjMzMyODUxO1xuICAtLXdpbm5lci1jb2xvci0yOiAjOUFFMUUyO1xuICAtLXdpbm5lci1jb2xvci0zOiAjRjZDNjY3O1xuICAtLWxvc2VyLWNvbG9yLTE6IGxpZ2h0Z3JleTtcbiAgLS1sb3Nlci1jb2xvci0yOiBkYXJrZ3JleTtcbiAgLS1sb3Nlci1jb2xvci0zOiByZ2JhKDQ1LCA2NCwgODcsIDAuNCk7XG4gIC0tdHJhbnNwYXJlbnQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgNTApO1xuXG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4jc3F1YXJlMCwgI3NxdWFyZTEsICNzcXVhcmUyIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuI3NxdWFyZTAsICNzcXVhcmUzLCAjc3F1YXJlNiB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4jc3F1YXJlMiwgI3NxdWFyZTUsICNzcXVhcmU4IHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4jc3F1YXJlNiwgI3NxdWFyZTcsICNzcXVhcmU4IHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLndpbm5lci1mb3VuZCB7XG4gIGFuaW1hdGlvbjogd2lubmVyLXB1bHNlIDFzIGZvcndhcmRzO1xufVxuXG4ubG9zZXItZm91bmQge1xuICBhbmltYXRpb246IGxvc2VyLXB1bHNlIDFzIGZvcndhcmRzO1xufVxuXG4uZHJhdy1nYW1lIHtcbiAgYW5pbWF0aW9uOiBkcmF3LXB1bHNlIDFzIGZvcndhcmRzO1xufVxuXG5cbkBrZXlmcmFtZXMgd2lubmVyLXB1bHNlIHtcbiAgMCUge1xuICAgIGNvbG9yOiB2YXIoLS13aW5uZXItY29sb3ItMSk7XG4gIH1cblxuICA1MCUge1xuICAgIGNvbG9yOiB2YXIoLS13aW5uZXItY29sb3ItMik7XG4gIH1cblxuICAxMDAlIHtcbiAgICBjb2xvcjogdmFyKC0td2lubmVyLWNvbG9yLTMpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbG9zZXItcHVsc2Uge1xuICAyNSUge1xuICAgIGNvbG9yOiB2YXIoLS1sb3Nlci1jb2xvci0xKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgY29sb3I6IHZhcigtLWxvc2VyLWNvbG9yLTIpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgY29sb3I6IHZhcigtLWxvc2VyLWNvbG9yLTMpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZHJhdy1wdWxzZSB7XG4gIDAlIHtcbiAgICBjb2xvcjogdmFyKC0tbG9zZXItY29sb3ItMSk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1sb3Nlci1jb2xvci0xKTtcbiAgfVxuXG4gIDIwJSB7XG4gICAgY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgY29sb3I6IHZhcigtLWxvc2VyLWNvbG9yLTIpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbG9zZXItY29sb3ItMik7XG4gIH1cblxuICA3MCUge1xuICAgIGNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBjb2xvcjogdmFyKC0tbG9zZXItY29sb3ItMyk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1sb3Nlci1jb2xvci0zKTtcbiAgfVxufVxuIiwic2VjdGlvbiB7XG4gIGhlaWdodDogOHJlbTtcbiAgd2lkdGg6IDhyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgdmFyKC0tdHJhbnNwYXJlbnQtYmx1ZSk7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gIGNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1ibHVlKTtcbiAgLS10cmFuc3BhcmVudC1ibHVlOiByZ2JhKDQ1LCA2NCwgODcsIDAuODUpO1xuICAtLXRyYW5zcGFyZW50LXB1cnBsZTogcmdiYSg1OSwgNDcsIDk0LCAwLjc1KTtcbiAgLS13aW5uZXItY29sb3ItMTogIzMzMjg1MTtcbiAgLS13aW5uZXItY29sb3ItMjogIzlBRTFFMjtcbiAgLS13aW5uZXItY29sb3ItMzogI0Y2QzY2NztcbiAgLS1sb3Nlci1jb2xvci0xOiBsaWdodGdyZXk7XG4gIC0tbG9zZXItY29sb3ItMjogZGFya2dyZXk7XG4gIC0tbG9zZXItY29sb3ItMzogcmdiYSg0NSwgNjQsIDg3LCAwLjQpO1xuICAtLXRyYW5zcGFyZW50OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDUwKTtcbn1cbnNlY3Rpb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNzcXVhcmUwLCAjc3F1YXJlMSwgI3NxdWFyZTIge1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG4jc3F1YXJlMCwgI3NxdWFyZTMsICNzcXVhcmU2IHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbiNzcXVhcmUyLCAjc3F1YXJlNSwgI3NxdWFyZTgge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbiNzcXVhcmU2LCAjc3F1YXJlNywgI3NxdWFyZTgge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4ud2lubmVyLWZvdW5kIHtcbiAgYW5pbWF0aW9uOiB3aW5uZXItcHVsc2UgMXMgZm9yd2FyZHM7XG59XG5cbi5sb3Nlci1mb3VuZCB7XG4gIGFuaW1hdGlvbjogbG9zZXItcHVsc2UgMXMgZm9yd2FyZHM7XG59XG5cbi5kcmF3LWdhbWUge1xuICBhbmltYXRpb246IGRyYXctcHVsc2UgMXMgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgd2lubmVyLXB1bHNlIHtcbiAgMCUge1xuICAgIGNvbG9yOiB2YXIoLS13aW5uZXItY29sb3ItMSk7XG4gIH1cbiAgNTAlIHtcbiAgICBjb2xvcjogdmFyKC0td2lubmVyLWNvbG9yLTIpO1xuICB9XG4gIDEwMCUge1xuICAgIGNvbG9yOiB2YXIoLS13aW5uZXItY29sb3ItMyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbG9zZXItcHVsc2Uge1xuICAyNSUge1xuICAgIGNvbG9yOiB2YXIoLS1sb3Nlci1jb2xvci0xKTtcbiAgfVxuICA1MCUge1xuICAgIGNvbG9yOiB2YXIoLS1sb3Nlci1jb2xvci0yKTtcbiAgfVxuICAxMDAlIHtcbiAgICBjb2xvcjogdmFyKC0tbG9zZXItY29sb3ItMyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZHJhdy1wdWxzZSB7XG4gIDAlIHtcbiAgICBjb2xvcjogdmFyKC0tbG9zZXItY29sb3ItMSk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1sb3Nlci1jb2xvci0xKTtcbiAgfVxuICAyMCUge1xuICAgIGNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIH1cbiAgNTAlIHtcbiAgICBjb2xvcjogdmFyKC0tbG9zZXItY29sb3ItMik7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1sb3Nlci1jb2xvci0yKTtcbiAgfVxuICA3MCUge1xuICAgIGNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgY29sb3I6IHZhcigtLWxvc2VyLWNvbG9yLTMpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbG9zZXItY29sb3ItMyk7XG4gIH1cbn0iXX0= */"] });
    return SquareComponent;
}());
exports.SquareComponent = SquareComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SquareComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-square',
                templateUrl: './square.component.html',
                styleUrls: ['./square.component.scss']
            }]
    }], null, { value: [{
            type: core_1.Input
        }], position: [{
            type: core_1.Input
        }], winner: [{
            type: core_1.Input
        }], drawGame: [{
            type: core_1.Input
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __NgCli_bootstrap_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var __NgCli_bootstrap_2 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
__NgCli_bootstrap_2.platformBrowser().bootstrapModule(__NgCli_bootstrap_1.AppModule);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/devinbiggers/MyCodingProjects/tictactoe/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map