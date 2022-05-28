/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/Canvas.ts":
/*!**************************!*\
  !*** ./src/ts/Canvas.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Canvas = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar Canvas = function () {\n  function Canvas() {\n    this.canvas = document.getElementById('my-canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.resizeCanvas();\n    this.addEventListener();\n  }\n\n  Canvas.prototype.resizeCanvas = function () {\n    this.canvas.width = settings_1.settings.canvas.width;\n    this.canvas.height = settings_1.settings.canvas.height;\n  };\n\n  Canvas.prototype.addEventListener = function () {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.resizeCanvas();\n    });\n  };\n\n  return Canvas;\n}();\n\nexports.Canvas = Canvas;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ2FudmFzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFLSTtBQUNJLFNBQUtBLE1BQUwsR0FBY0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVcsS0FBS0gsTUFBTCxDQUFZSSxVQUFaLENBQXVCLElBQXZCLENBQVg7QUFDQSxTQUFLQyxZQUFMO0FBQ0EsU0FBS0MsZ0JBQUw7QUFDSDs7QUFDREM7QUFDSSxTQUFLUCxNQUFMLENBQVlRLEtBQVosR0FBa0JDLG9CQUFTVCxNQUFULENBQWdCUSxLQUFsQztBQUNBLFNBQUtSLE1BQUwsQ0FBWVUsTUFBWixHQUFtQkQsb0JBQVNULE1BQVQsQ0FBZ0JVLE1BQW5DO0FBQ0gsR0FIRDs7QUFJQUg7QUFBQTs7QUFDSUksVUFBTSxDQUFDTCxnQkFBUCxDQUF3QixRQUF4QixFQUFpQztBQUM3Qk0sV0FBSSxDQUFDUCxZQUFMO0FBQ0gsS0FGRDtBQUdILEdBSkQ7O0FBS0o7QUFBQyxDQXBCRDs7QUFBYVEsY0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL0NhbnZhcy50cz84NWE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFze1xyXG4gICAgY2FudmFzOkhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgY3R4IDpDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LWNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLnJlc2l6ZUNhbnZhcygpO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG4gICAgcmVzaXplQ2FudmFzKCl7XHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGg9c2V0dGluZ3MuY2FudmFzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodD1zZXR0aW5ncy5jYW52YXMuaGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcigpe1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMucmVzaXplQ2FudmFzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwicmVzaXplQ2FudmFzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkNhbnZhcyIsIndpZHRoIiwic2V0dGluZ3NfMSIsImhlaWdodCIsIndpbmRvdyIsIl90aGlzIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Canvas.ts\n");

/***/ }),

/***/ "./src/ts/Main.ts":
/*!************************!*\
  !*** ./src/ts/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/ts/Canvas.ts\");\n\nvar PlayerOne_1 = __webpack_require__(/*! ./PlayerOne */ \"./src/ts/PlayerOne.ts\");\n\nvar Main = function () {\n  function Main() {\n    this.canvas = new Canvas_1.Canvas();\n    this.player = new PlayerOne_1.PlayerOne();\n  }\n\n  return Main;\n}();\n\nnew Main();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBSUE7QUFLSTtBQUNJLFNBQUtBLE1BQUwsR0FBYyxJQUFJQyxlQUFKLEVBQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWMsSUFBSUMscUJBQUosRUFBZDtBQUVIOztBQUNMO0FBQUMsQ0FWRDs7QUFXQSxJQUFJQyxJQUFKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9NYWluLnRzPzQ4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSBcIi4vQ2FudmFzXCI7XHJcbmltcG9ydCB7UGxheWVyT25lfSBmcm9tIFwiLi9QbGF5ZXJPbmVcIjtcclxuXHJcblxyXG5cclxuY2xhc3MgTWFpbntcclxuICAgIGNhbnZhczpDYW52YXM7XHJcbiAgICBwbGF5ZXI6UGxheWVyT25lO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXJPbmUoKTtcclxuXHJcbiAgICB9XHJcbn1cclxubmV3IE1haW4oKTsiXSwibmFtZXMiOlsiY2FudmFzIiwiQ2FudmFzXzEiLCJwbGF5ZXIiLCJQbGF5ZXJPbmVfMSIsIk1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Main.ts\n");

/***/ }),

/***/ "./src/ts/PlayerOne.ts":
/*!*****************************!*\
  !*** ./src/ts/PlayerOne.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.PlayerOne = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar PlayerOne = function () {\n  function PlayerOne() {\n    this.canvas = document.getElementById('my-canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.width = settings_1.settings.player.width;\n    this.height = settings_1.settings.player.height;\n    this.gravity = settings_1.settings.player.gravity;\n    this.ballX = this.canvas.width / 2;\n    this.ballY = this.canvas.height / 2;\n    this.ballSpeedX = settings_1.settings.ball.ballSpeedX;\n    this.ballspeedY = settings_1.settings.ball.ballSpeedY;\n    this.radius = settings_1.settings.ball.radius;\n    this.startAngle = settings_1.settings.ball.startAngle;\n    this.endAngle = settings_1.settings.ball.endAngle;\n    this.midlaneWidth = settings_1.settings.midLane.width;\n    this.midLaneX = this.canvas.width / 2;\n    this.scoreOne = 0;\n    this.scoreTwo = 0;\n    this.posXPlayerOne = this.width;\n    this.posYPlayerOne = this.canvas.height / 2 - this.height * 0.5;\n    this.posXPlayerTwo = this.canvas.width - this.width * 2;\n    this.posYPlayerTwo = this.canvas.height / 2 - this.height * 0.5;\n    this.drawElements();\n    this.animation();\n  }\n\n  PlayerOne.prototype.drawPlayerOne = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillRect(settings_1.settings.playerOne.positions.x, settings_1.settings.playerOne.positions.y, this.width, this.height);\n    this.ctx.closePath();\n  };\n\n  PlayerOne.prototype.drawPlayerTwo = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillRect(settings_1.settings.playerTwo.positions.x, settings_1.settings.playerTwo.positions.y, this.width, this.height);\n    this.ctx.closePath();\n  };\n\n  PlayerOne.prototype.mouvementsPlayer = function () {\n    var _this = this;\n\n    window.addEventListener(\"keydown\", function (e) {\n      if (e.key === \"z\" && settings_1.settings.playerOne.positions.y >= 0) {\n        settings_1.settings.playerOne.positions.y -= _this.gravity;\n      }\n\n      if (e.key === \"s\" && settings_1.settings.playerOne.positions.y + settings_1.settings.playerOne.height <= _this.canvas.height) {\n        settings_1.settings.playerOne.positions.y += _this.gravity;\n      }\n    });\n    window.addEventListener(\"keydown\", function (e) {\n      if (e.key === \"ArrowUp\" && settings_1.settings.playerTwo.positions.y >= 0) {\n        settings_1.settings.playerTwo.positions.y -= _this.gravity;\n      }\n\n      if (e.key === \"ArrowDown\" && settings_1.settings.playerTwo.positions.y + settings_1.settings.playerTwo.height <= _this.canvas.height) {\n        settings_1.settings.playerTwo.positions.y += _this.gravity;\n      }\n    });\n  };\n\n  PlayerOne.prototype.drawBall = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = \"white\";\n    this.ctx.arc(this.ballX, this.ballY, this.radius, this.startAngle, this.endAngle);\n    this.ctx.fill();\n    this.ctx.closePath();\n  };\n\n  PlayerOne.prototype.ballCollision = function () {\n    if (this.ballY + this.ballspeedY <= 0 || this.ballY + this.ballspeedY >= this.canvas.height) {\n      this.ballspeedY = -this.ballspeedY;\n      this.ballY += this.ballspeedY;\n      this.ballX += this.ballSpeedX;\n    } else {\n      this.ballY += this.ballspeedY;\n      this.ballX += this.ballSpeedX;\n    }\n\n    if (this.ballX + this.ballSpeedX <= 0 || this.ballX + this.ballSpeedX >= this.canvas.width) {\n      this.ballSpeedX = -this.ballSpeedX;\n      this.ballY += this.ballspeedY;\n      this.ballX += this.ballSpeedX;\n    } else {\n      this.ballY += this.ballspeedY;\n      this.ballX += this.ballSpeedX;\n    }\n  };\n\n  PlayerOne.prototype.drawMidlane = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillRect(this.midLaneX - this.midlaneWidth * 0.5, 0, this.midlaneWidth, this.canvas.height);\n    this.ctx.closePath();\n  };\n\n  PlayerOne.prototype.displayScoreOne = function () {\n    this.ctx.font = \"16px Arial\";\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillText(\"Joueur 1: \" + this.scoreOne, this.canvas.width / 5, 30);\n  };\n\n  PlayerOne.prototype.displayScoreTwo = function () {\n    this.ctx.font = \"16px Arial\";\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillText(\"Joueur 2: \" + this.scoreTwo, this.canvas.width / 2 * 1.5 - 50, 30);\n  };\n\n  PlayerOne.prototype.addScore = function () {\n    if (this.ballY + this.ballspeedY <= settings_1.settings.playerTwo.positions.y + settings_1.settings.playerTwo.height && this.ballX + this.ballSpeedX >= settings_1.settings.playerTwo.positions.x && this.ballY + this.ballspeedY > settings_1.settings.playerTwo.positions.y || this.ballY + this.ballspeedY > settings_1.settings.playerOne.positions.y && this.ballX + this.ballSpeedX <= settings_1.settings.playerOne.positions.x + settings_1.settings.playerOne.width) {\n      this.ballSpeedX = this.ballSpeedX * -1;\n    } else if (this.ballX + this.ballSpeedX < settings_1.settings.playerOne.positions.x) {\n      this.scoreTwo += 1;\n      this.ballSpeedX = this.ballSpeedX * -1;\n      this.ballX = this.canvas.width / 2;\n      this.ballY += this.ballspeedY;\n    } else if (this.ballX + this.ballSpeedX > settings_1.settings.playerTwo.positions.x + settings_1.settings.playerTwo.width) {\n      this.scoreOne += 1;\n      this.ballSpeedX = this.ballSpeedX * -1;\n      this.ballX = this.canvas.width / 2 + this.ballSpeedX;\n      this.ballY += this.ballspeedY;\n    }\n  };\n\n  PlayerOne.prototype.drawElements = function () {\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.drawPlayerOne();\n    this.drawPlayerTwo();\n    this.drawBall();\n    this.drawMidlane();\n    this.displayScoreOne();\n    this.displayScoreTwo();\n  };\n\n  PlayerOne.prototype.animation = function () {\n    var _this = this;\n\n    this.drawElements();\n    this.ballCollision();\n    this.mouvementsPlayer();\n    this.addScore();\n    window.requestAnimationFrame(function () {\n      _this.animation();\n    });\n  };\n\n  return PlayerOne;\n}();\n\nexports.PlayerOne = PlayerOne;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxXQUFLRCxLQUFMLElBQWMsS0FBS0csVUFBbkI7QUFDSDtBQUVKLEdBckJEOztBQXdCQWdCO0FBQ0ksU0FBSzNCLEdBQUwsQ0FBUzhDLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBcUIsQ0FBckIsRUFBdUIsS0FBS2pELE1BQUwsQ0FBWUssS0FBbkMsRUFBeUMsS0FBS0wsTUFBTCxDQUFZUSxNQUFyRDtBQUNBLFNBQUswQyxhQUFMO0FBQ0EsU0FBS0MsYUFBTDtBQUNBLFNBQUtDLFFBQUw7QUFDQSxTQUFLQyxXQUFMO0FBQ0EsU0FBS0MsZUFBTDtBQUNBLFNBQUtDLGVBQUw7QUFDSCxHQVJEOztBQVVBekI7QUFBQTs7QUFDSSxTQUFLRixZQUFMO0FBQ0EsU0FBSzRCLGFBQUw7QUFDQSxTQUFLQyxnQkFBTDtBQUNBLFNBQUtDLFFBQUw7QUFDQWxCLFVBQU0sQ0FBQ21CLHFCQUFQLENBQTZCO0FBQ3pCZixXQUFJLENBQUNmLFNBQUw7QUFDSCxLQUZEO0FBR0gsR0FSRDs7QUFTSjtBQUFDLENBbk1EOztBQUFhK0IsaUJBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9QbGF5ZXJPbmUudHM/MjQwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllck9uZSB7XHJcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgYmFsbFg6bnVtYmVyO1xyXG4gICAgYmFsbFk6bnVtYmVyO1xyXG4gICAgYmFsbFNwZWVkWDpudW1iZXI7XHJcbiAgICBiYWxsc3BlZWRZOm51bWJlcjtcclxuICAgIHJhZGl1czogbnVtYmVyO1xyXG4gICAgc3RhcnRBbmdsZTpudW1iZXI7XHJcbiAgICBlbmRBbmdsZTpudW1iZXI7XHJcblxyXG4gICAgbWlkbGFuZVdpZHRoOm51bWJlcjtcclxuICAgIG1pZExhbmVYOm51bWJlcjtcclxuICAgIG1pZGxhbmVZOm51bWJlcjtcclxuXHJcbiAgICBzY29yZU9uZTphbnk7XHJcbiAgICBzY29yZVR3bzphbnk7XHJcblxyXG4gICAgcG9zWFBsYXllck9uZTpudW1iZXI7XHJcbiAgICBwb3NZUGxheWVyT25lOm51bWJlcjtcclxuICAgIHBvc1hQbGF5ZXJUd286bnVtYmVyO1xyXG4gICAgcG9zWVBsYXllclR3bzpudW1iZXI7XHJcbiAgICBncmF2aXR5Om51bWJlcjtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBzZXR0aW5ncy5wbGF5ZXIud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBzZXR0aW5ncy5wbGF5ZXIuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IHNldHRpbmdzLnBsYXllci5ncmF2aXR5O1xyXG5cclxuICAgICAgICB0aGlzLmJhbGxYPSB0aGlzLmNhbnZhcy53aWR0aC8yO1xyXG4gICAgICAgIHRoaXMuYmFsbFk9IHRoaXMuY2FudmFzLmhlaWdodC8yO1xyXG4gICAgICAgIHRoaXMuYmFsbFNwZWVkWD1zZXR0aW5ncy5iYWxsLmJhbGxTcGVlZFg7XHJcbiAgICAgICAgdGhpcy5iYWxsc3BlZWRZPXNldHRpbmdzLmJhbGwuYmFsbFNwZWVkWTtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHNldHRpbmdzLmJhbGwucmFkaXVzO1xyXG4gICAgICAgIHRoaXMuc3RhcnRBbmdsZSA9IHNldHRpbmdzLmJhbGwuc3RhcnRBbmdsZTtcclxuICAgICAgICB0aGlzLmVuZEFuZ2xlID0gc2V0dGluZ3MuYmFsbC5lbmRBbmdsZTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMubWlkbGFuZVdpZHRoID0gc2V0dGluZ3MubWlkTGFuZS53aWR0aDtcclxuICAgICAgICB0aGlzLm1pZExhbmVYID0gdGhpcy5jYW52YXMud2lkdGgvMjtcclxuXHJcbiAgICAgICAgdGhpcy5zY29yZU9uZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zY29yZVR3byA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMucG9zWFBsYXllck9uZSA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5wb3NZUGxheWVyT25lID0gdGhpcy5jYW52YXMuaGVpZ2h0LzItKHRoaXMuaGVpZ2h0KjAuNSk7XHJcbiAgICAgICAgdGhpcy5wb3NYUGxheWVyVHdvID0gdGhpcy5jYW52YXMud2lkdGgtKHRoaXMud2lkdGgqMik7XHJcbiAgICAgICAgdGhpcy5wb3NZUGxheWVyVHdvID0gdGhpcy5jYW52YXMuaGVpZ2h0LzItKHRoaXMuaGVpZ2h0KjAuNSk7XHJcbiAgICAgICAgdGhpcy5kcmF3RWxlbWVudHMoKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbigpO1xyXG4gICAgfVxyXG4gICAgLy9QbGF5ZXIgT25lXHJcbiAgICBkcmF3UGxheWVyT25lKCl7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHNldHRpbmdzLnBsYXllck9uZS5wb3NpdGlvbnMueCwgc2V0dGluZ3MucGxheWVyT25lLnBvc2l0aW9ucy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgLy9QbGF5ZXIgVHdvXHJcbiAgICBkcmF3UGxheWVyVHdvKCl7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHNldHRpbmdzLnBsYXllclR3by5wb3NpdGlvbnMueCwgc2V0dGluZ3MucGxheWVyVHdvLnBvc2l0aW9ucy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vTW91dmVtZW50cyBwbGF5ZXJcclxuICAgIG1vdXZlbWVudHNQbGF5ZXIoKXtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpPT57XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJ6XCIgJiYgc2V0dGluZ3MucGxheWVyT25lLnBvc2l0aW9ucy55ID49MCApe1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3MucGxheWVyT25lLnBvc2l0aW9ucy55IC09IHRoaXMuZ3Jhdml0eTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcInNcIiAmJiBzZXR0aW5ncy5wbGF5ZXJPbmUucG9zaXRpb25zLnkgKyBzZXR0aW5ncy5wbGF5ZXJPbmUuaGVpZ2h0IDw9IHRoaXMuY2FudmFzLmhlaWdodCApe1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3MucGxheWVyT25lLnBvc2l0aW9ucy55ICs9IHRoaXMuZ3Jhdml0eTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSk9PntcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkFycm93VXBcIiAmJiBzZXR0aW5ncy5wbGF5ZXJUd28ucG9zaXRpb25zLnkgPj0wICl7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5wbGF5ZXJUd28ucG9zaXRpb25zLnkgLT0gdGhpcy5ncmF2aXR5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dEb3duXCIgJiYgc2V0dGluZ3MucGxheWVyVHdvLnBvc2l0aW9ucy55ICsgc2V0dGluZ3MucGxheWVyVHdvLmhlaWdodCA8PSB0aGlzLmNhbnZhcy5oZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3MucGxheWVyVHdvLnBvc2l0aW9ucy55ICs9IHRoaXMuZ3Jhdml0eTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vQmFsbFxyXG4gICAgZHJhd0JhbGwoKXtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMuYmFsbFgsdGhpcy5iYWxsWSx0aGlzLnJhZGl1cyx0aGlzLnN0YXJ0QW5nbGUsdGhpcy5lbmRBbmdsZSk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfVxyXG4gICAgLy9CYWxsQm91bmNlXHJcbiAgICBiYWxsQ29sbGlzaW9uKCl7XHJcbiAgICAgICAgLy9Db2xsaXNpb24gWVxyXG4gICAgICAgIGlmICh0aGlzLmJhbGxZICsgdGhpcy5iYWxsc3BlZWRZIDw9MCB8fCB0aGlzLmJhbGxZICsgdGhpcy5iYWxsc3BlZWRZID49IHRoaXMuY2FudmFzLmhlaWdodCl7XHJcbiAgICAgICAgICAgIHRoaXMuYmFsbHNwZWVkWSA9IC10aGlzLmJhbGxzcGVlZFk7XHJcbiAgICAgICAgICAgIHRoaXMuYmFsbFkgKz0gdGhpcy5iYWxsc3BlZWRZO1xyXG4gICAgICAgICAgICB0aGlzLmJhbGxYICs9IHRoaXMuYmFsbFNwZWVkWDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5iYWxsWSArPSB0aGlzLmJhbGxzcGVlZFk7XHJcbiAgICAgICAgICAgIHRoaXMuYmFsbFggKz0gdGhpcy5iYWxsU3BlZWRYO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL0NvbGxpc2lvbiBYXHJcbiAgICAgICAgaWYgKHRoaXMuYmFsbFggKyB0aGlzLmJhbGxTcGVlZFggPD0wIHx8IHRoaXMuYmFsbFggKyB0aGlzLmJhbGxTcGVlZFggPj0gdGhpcy5jYW52YXMud2lkdGgpe1xyXG4gICAgICAgICAgICB0aGlzLmJhbGxTcGVlZFggPSAtdGhpcy5iYWxsU3BlZWRYO1xyXG4gICAgICAgICAgICB0aGlzLmJhbGxZICs9IHRoaXMuYmFsbHNwZWVkWTtcclxuICAgICAgICAgICAgdGhpcy5iYWxsWCArPSB0aGlzLmJhbGxTcGVlZFg7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJhbGxZICs9IHRoaXMuYmFsbHNwZWVkWTtcclxuICAgICAgICAgICAgdGhpcy5iYWxsWCArPSB0aGlzLmJhbGxTcGVlZFg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL01pZGxhbmVcclxuICAgIGRyYXdNaWRsYW5lKCl7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMubWlkTGFuZVgtKHRoaXMubWlkbGFuZVdpZHRoKjAuNSksMCx0aGlzLm1pZGxhbmVXaWR0aCx0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vU2NvcmVcclxuICAgIGRpc3BsYXlTY29yZU9uZSgpe1xyXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjE2cHggQXJpYWxcIjtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPVwid2hpdGVcIjtcclxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCggXCJKb3VldXIgMTogXCIrIHRoaXMuc2NvcmVPbmUsdGhpcy5jYW52YXMud2lkdGgvNSwzMCk7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5U2NvcmVUd28oKXtcclxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIxNnB4IEFyaWFsXCI7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID1cIndoaXRlXCI7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJKb3VldXIgMjogXCIrIHRoaXMuc2NvcmVUd28sdGhpcy5jYW52YXMud2lkdGgvMioxLjUtNTAsMzApO1xyXG4gICAgfVxyXG4gICAgLy9BZGQgU2NvcmVcclxuICAgIGFkZFNjb3JlKCl7XHJcbiAgICAgICAgaWYgKCh0aGlzLmJhbGxZICsgdGhpcy5iYWxsc3BlZWRZIDw9IHNldHRpbmdzLnBsYXllclR3by5wb3NpdGlvbnMueSArIHNldHRpbmdzLnBsYXllclR3by5oZWlnaHQgJiZcclxuICAgICAgICB0aGlzLmJhbGxYICsgdGhpcy5iYWxsU3BlZWRYID49IHNldHRpbmdzLnBsYXllclR3by5wb3NpdGlvbnMueCAmJlxyXG4gICAgICAgIHRoaXMuYmFsbFkgKyB0aGlzLmJhbGxzcGVlZFkgPiBzZXR0aW5ncy5wbGF5ZXJUd28ucG9zaXRpb25zLnkpXHJcbiAgICAgICAgfHxcclxuICAgICAgICAgICAgKHRoaXMuYmFsbFkgKyB0aGlzLmJhbGxzcGVlZFkgPiBzZXR0aW5ncy5wbGF5ZXJPbmUucG9zaXRpb25zLnkgJiZcclxuICAgICAgICB0aGlzLmJhbGxYICsgdGhpcy5iYWxsU3BlZWRYIDw9IHNldHRpbmdzLnBsYXllck9uZS5wb3NpdGlvbnMueCArIHNldHRpbmdzLnBsYXllck9uZS53aWR0aCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmJhbGxTcGVlZFggPSB0aGlzLmJhbGxTcGVlZFggKiAtMTtcclxuICAgICAgICB9ZWxzZSBpZiAodGhpcy5iYWxsWCArIHRoaXMuYmFsbFNwZWVkWCA8IHNldHRpbmdzLnBsYXllck9uZS5wb3NpdGlvbnMueCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmVUd28gKz0gMTtcclxuICAgICAgICAgICAgdGhpcy5iYWxsU3BlZWRYID0gdGhpcy5iYWxsU3BlZWRYICogLTE7XHJcbiAgICAgICAgICAgIHRoaXMuYmFsbFggPSB0aGlzLmNhbnZhcy53aWR0aC8yO1xyXG4gICAgICAgICAgICB0aGlzLmJhbGxZICs9IHRoaXMuYmFsbHNwZWVkWTtcclxuICAgICAgICB9ZWxzZSBpZiAoIHRoaXMuYmFsbFggKyB0aGlzLmJhbGxTcGVlZFggPiBzZXR0aW5ncy5wbGF5ZXJUd28ucG9zaXRpb25zLnggKyBzZXR0aW5ncy5wbGF5ZXJUd28ud2lkdGgpe1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlT25lICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuYmFsbFNwZWVkWCA9IHRoaXMuYmFsbFNwZWVkWCAqIC0xO1xyXG4gICAgICAgICAgICB0aGlzLmJhbGxYID0gdGhpcy5jYW52YXMud2lkdGgvMiArIHRoaXMuYmFsbFNwZWVkWDtcclxuICAgICAgICAgICAgdGhpcy5iYWxsWSArPSB0aGlzLmJhbGxzcGVlZFk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgZHJhd0VsZW1lbnRzKCl7XHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsMCx0aGlzLmNhbnZhcy53aWR0aCx0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuZHJhd1BsYXllck9uZSgpO1xyXG4gICAgICAgIHRoaXMuZHJhd1BsYXllclR3bygpO1xyXG4gICAgICAgIHRoaXMuZHJhd0JhbGwoKTtcclxuICAgICAgICB0aGlzLmRyYXdNaWRsYW5lKCk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5U2NvcmVPbmUoKTtcclxuICAgICAgICB0aGlzLmRpc3BsYXlTY29yZVR3bygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGlvbigpe1xyXG4gICAgICAgIHRoaXMuZHJhd0VsZW1lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5iYWxsQ29sbGlzaW9uKCk7XHJcbiAgICAgICAgdGhpcy5tb3V2ZW1lbnRzUGxheWVyKCk7XHJcbiAgICAgICAgdGhpcy5hZGRTY29yZSgpO1xyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJzZXR0aW5nc18xIiwicGxheWVyIiwiaGVpZ2h0IiwiZ3Jhdml0eSIsImJhbGxYIiwiYmFsbFkiLCJiYWxsU3BlZWRYIiwiYmFsbCIsImJhbGxzcGVlZFkiLCJiYWxsU3BlZWRZIiwicmFkaXVzIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwibWlkbGFuZVdpZHRoIiwibWlkTGFuZSIsIm1pZExhbmVYIiwic2NvcmVPbmUiLCJzY29yZVR3byIsInBvc1hQbGF5ZXJPbmUiLCJwb3NZUGxheWVyT25lIiwicG9zWFBsYXllclR3byIsInBvc1lQbGF5ZXJUd28iLCJkcmF3RWxlbWVudHMiLCJhbmltYXRpb24iLCJQbGF5ZXJPbmUiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInBsYXllck9uZSIsInBvc2l0aW9ucyIsIngiLCJ5IiwiY2xvc2VQYXRoIiwicGxheWVyVHdvIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXkiLCJfdGhpcyIsImFyYyIsImZpbGwiLCJmb250IiwiZmlsbFRleHQiLCJjbGVhclJlY3QiLCJkcmF3UGxheWVyT25lIiwiZHJhd1BsYXllclR3byIsImRyYXdCYWxsIiwiZHJhd01pZGxhbmUiLCJkaXNwbGF5U2NvcmVPbmUiLCJkaXNwbGF5U2NvcmVUd28iLCJiYWxsQ29sbGlzaW9uIiwibW91dmVtZW50c1BsYXllciIsImFkZFNjb3JlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/PlayerOne.ts\n");

/***/ }),

/***/ "./src/ts/settings.ts":
/*!****************************!*\
  !*** ./src/ts/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  canvas: {\n    width: 640,\n    height: 480\n  },\n  playerOne: {\n    height: 100,\n    width: 10,\n    gravity: 0.2,\n    positions: {\n      x: 10,\n      y: 240 - 100 * 0.5\n    }\n  },\n  playerTwo: {\n    height: 100,\n    width: 10,\n    gravity: 0.2,\n    positions: {\n      x: 620,\n      y: 240 - 100 * 0.5\n    }\n  },\n  player: {\n    height: 100,\n    width: 10,\n    gravity: 0.2\n  },\n  ball: {\n    radius: 5,\n    startAngle: 0,\n    endAngle: Math.PI * 2,\n    ballSpeedX: 2,\n    ballSpeedY: 2\n  },\n  midLane: {\n    width: 2\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVTtBQUNuQkMsUUFBTSxFQUFDO0FBQ0hDLFNBQUssRUFBQyxHQURIO0FBRUhDLFVBQU0sRUFBQztBQUZKLEdBRFk7QUFLbkJDLFdBQVMsRUFBQztBQUNORCxVQUFNLEVBQUMsR0FERDtBQUVORCxTQUFLLEVBQUMsRUFGQTtBQUdORyxXQUFPLEVBQUUsR0FISDtBQUlOQyxhQUFTLEVBQUM7QUFBQ0MsT0FBQyxFQUFDLEVBQUg7QUFBTUMsT0FBQyxFQUFDLE1BQUksTUFBSTtBQUFoQjtBQUpKLEdBTFM7QUFXbkJDLFdBQVMsRUFBQztBQUNOTixVQUFNLEVBQUMsR0FERDtBQUVORCxTQUFLLEVBQUUsRUFGRDtBQUdORyxXQUFPLEVBQUMsR0FIRjtBQUlOQyxhQUFTLEVBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLE1BQUksTUFBSTtBQUFqQjtBQUpKLEdBWFM7QUFpQm5CRSxRQUFNLEVBQUM7QUFDSFAsVUFBTSxFQUFDLEdBREo7QUFFSEQsU0FBSyxFQUFFLEVBRko7QUFHSEcsV0FBTyxFQUFDO0FBSEwsR0FqQlk7QUFzQm5CTSxNQUFJLEVBQUM7QUFDREMsVUFBTSxFQUFHLENBRFI7QUFFREMsY0FBVSxFQUFHLENBRlo7QUFHREMsWUFBUSxFQUFFQyxJQUFJLENBQUNDLEVBQUwsR0FBUSxDQUhqQjtBQUlEQyxjQUFVLEVBQUMsQ0FKVjtBQUtEQyxjQUFVLEVBQUM7QUFMVixHQXRCYztBQThCbkJDLFNBQU8sRUFBQztBQUNKakIsU0FBSyxFQUFDO0FBREY7QUE5QlcsQ0FBViIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvc2V0dGluZ3MudHM/NzRhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2V0dGluZ3MgPXtcclxuICAgIGNhbnZhczp7XHJcbiAgICAgICAgd2lkdGg6NjQwLFxyXG4gICAgICAgIGhlaWdodDo0ODAsXHJcbiAgICB9LFxyXG4gICAgcGxheWVyT25lOntcclxuICAgICAgICBoZWlnaHQ6MTAwLFxyXG4gICAgICAgIHdpZHRoOjEwLFxyXG4gICAgICAgIGdyYXZpdHk6IDAuMixcclxuICAgICAgICBwb3NpdGlvbnM6e3g6MTAseToyNDAtMTAwKjAuNX1cclxuICAgIH0sXHJcbiAgICBwbGF5ZXJUd286e1xyXG4gICAgICAgIGhlaWdodDoxMDAsXHJcbiAgICAgICAgd2lkdGg6IDEwLFxyXG4gICAgICAgIGdyYXZpdHk6MC4yLFxyXG4gICAgICAgIHBvc2l0aW9uczp7eDo2MjAseToyNDAtMTAwKjAuNX1cclxuICAgIH0sXHJcbiAgICBwbGF5ZXI6e1xyXG4gICAgICAgIGhlaWdodDoxMDAsXHJcbiAgICAgICAgd2lkdGg6IDEwLFxyXG4gICAgICAgIGdyYXZpdHk6MC4yLFxyXG4gICAgfSxcclxuICAgIGJhbGw6e1xyXG4gICAgICAgIHJhZGl1cyA6IDUsXHJcbiAgICAgICAgc3RhcnRBbmdsZSA6IDAsXHJcbiAgICAgICAgZW5kQW5nbGU6IE1hdGguUEkqMixcclxuICAgICAgICBiYWxsU3BlZWRYOjIsXHJcbiAgICAgICAgYmFsbFNwZWVkWToyLFxyXG5cclxuICAgIH0sXHJcbiAgICBtaWRMYW5lOntcclxuICAgICAgICB3aWR0aDoyLFxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImV4cG9ydHMiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsInBsYXllck9uZSIsImdyYXZpdHkiLCJwb3NpdGlvbnMiLCJ4IiwieSIsInBsYXllclR3byIsInBsYXllciIsImJhbGwiLCJyYWRpdXMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJNYXRoIiwiUEkiLCJiYWxsU3BlZWRYIiwiYmFsbFNwZWVkWSIsIm1pZExhbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy9zY3NzL21haW4uc2Nzcz9mN2U1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktemplate_projet_examen"] = self["webpackChunktemplate_projet_examen"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/ts/Main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;