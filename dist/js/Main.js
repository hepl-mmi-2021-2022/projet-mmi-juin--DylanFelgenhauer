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

eval("\n\nexports.__esModule = true;\nexports.PlayerOne = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar PlayerOne = function () {\n  function PlayerOne() {\n    this.canvas = document.getElementById('my-canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.width = settings_1.settings.player.width;\n    this.height = settings_1.settings.player.height;\n    this.gravity = settings_1.settings.player.gravity;\n    this.ballX = this.canvas.width / 2;\n    this.ballY = this.canvas.height / 2;\n    this.ballSpeedX = settings_1.settings.ball.ballSpeedX;\n    this.ballspeedY = settings_1.settings.ball.ballSpeedY;\n    this.radius = settings_1.settings.ball.radius;\n    this.startAngle = settings_1.settings.ball.startAngle;\n    this.endAngle = settings_1.settings.ball.endAngle;\n    this.midlaneWidth = settings_1.settings.midLane.width;\n    this.midLaneX = this.canvas.width / 2;\n    this.scoreOne = 0;\n    this.scoreTwo = 0;\n    this.posXPlayerOne = this.width;\n    this.posYPlayerOne = this.canvas.height / 2 - this.height * 0.5;\n    this.posXPlayerTwo = this.canvas.width - this.width * 2;\n    this.posYPlayerTwo = this.canvas.height / 2 - this.height * 0.5;\n    this.drawElements();\n    this.animation();\n  }\n\n  PlayerOne.prototype.drawPlayerOne = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillRect(settings_1.settings.playerOne.positions.x, settings_1.settings.playerOne.positions.y, this.width, this.height);\n    this.ctx.closePath();\n  };\n\n  PlayerOne.prototype.drawPlayerTwo = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillRect(settings_1.settings.playerTwo.positions.x, settings_1.settings.playerTwo.positions.y, this.width, this.height);\n    this.ctx.closePath();\n  };\n\n  PlayerOne.prototype.mouvementsPlayer = function () {\n    var _this = this;\n\n    window.addEventListener(\"keydown\", function (e) {\n      if (e.key === \"z\" && settings_1.settings.playerOne.positions.y >= 0) {\n        settings_1.settings.playerOne.positions.y -= _this.gravity;\n      }\n\n      if (e.key === \"s\" && settings_1.settings.playerOne.positions.y + settings_1.settings.playerOne.height <= _this.canvas.height) {\n        settings_1.settings.playerOne.positions.y += _this.gravity;\n      }\n    });\n    window.addEventListener(\"keydown\", function (e) {\n      if (e.key === \"ArrowUp\" && settings_1.settings.playerTwo.positions.y >= 0) {\n        settings_1.settings.playerTwo.positions.y -= _this.gravity;\n      }\n\n      if (e.key === \"ArrowDown\" && settings_1.settings.playerTwo.positions.y + settings_1.settings.playerTwo.height <= _this.canvas.height) {\n        settings_1.settings.playerTwo.positions.y += _this.gravity;\n      }\n    });\n  };\n\n  PlayerOne.prototype.drawBall = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = \"white\";\n    this.ctx.arc(this.ballX, this.ballY, this.radius, this.startAngle, this.endAngle);\n    this.ctx.fill();\n    this.ctx.closePath();\n  };\n\n  PlayerOne.prototype.ballCollision = function () {\n    if (this.ballY + this.ballspeedY <= 0 || this.ballY + this.ballspeedY >= this.canvas.height) {\n      this.ballspeedY = -this.ballspeedY;\n      this.ballY += this.ballspeedY;\n      this.ballX += this.ballSpeedX;\n    } else {\n      this.ballY += this.ballspeedY;\n      this.ballX += this.ballSpeedX;\n    }\n\n    if (this.ballX + this.ballSpeedX <= 0 || this.ballX + this.ballSpeedX >= this.canvas.width) {\n      this.ballSpeedX = -this.ballSpeedX;\n      this.ballY += this.ballspeedY;\n      this.ballX += this.ballSpeedX;\n    } else {\n      this.ballY += this.ballspeedY;\n      this.ballX += this.ballSpeedX;\n    }\n  };\n\n  PlayerOne.prototype.drawMidlane = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillRect(this.midLaneX - this.midlaneWidth * 0.5, 0, this.midlaneWidth, this.canvas.height);\n    this.ctx.closePath();\n  };\n\n  PlayerOne.prototype.displayScoreOne = function () {\n    this.ctx.font = \"16px Arial\";\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillText(this.scoreOne, this.canvas.width / 2 - 60, 30);\n  };\n\n  PlayerOne.prototype.displayScoreTwo = function () {\n    this.ctx.font = \"16px Arial\";\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillText(this.scoreTwo, this.canvas.width / 2 + 50, 30);\n  };\n\n  PlayerOne.prototype.drawElements = function () {\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.drawPlayerOne();\n    this.drawPlayerTwo();\n    this.drawBall();\n    this.drawMidlane();\n    this.displayScoreOne();\n    this.displayScoreTwo();\n  };\n\n  PlayerOne.prototype.animation = function () {\n    var _this = this;\n\n    this.drawElements();\n    this.ballCollision();\n    this.mouvementsPlayer();\n    window.requestAnimationFrame(function () {\n      _this.animation();\n    });\n  };\n\n  return PlayerOne;\n}();\n\nexports.PlayerOne = PlayerOne;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQUtDLGVBQUw7QUFDSCxHQVJEOztBQVVBekI7QUFBQTs7QUFDSSxTQUFLRixZQUFMO0FBQ0EsU0FBSzRCLGFBQUw7QUFDQSxTQUFLQyxnQkFBTDtBQUNBakIsVUFBTSxDQUFDa0IscUJBQVAsQ0FBNkI7QUFDekJkLFdBQUksQ0FBQ2YsU0FBTDtBQUNILEtBRkQ7QUFHSCxHQVBEOztBQVFKO0FBQUMsQ0E1S0Q7O0FBQWE4QixpQkFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL1BsYXllck9uZS50cz8yNDA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyT25lIHtcclxuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgICBiYWxsWDpudW1iZXI7XHJcbiAgICBiYWxsWTpudW1iZXI7XHJcbiAgICBiYWxsU3BlZWRYOm51bWJlcjtcclxuICAgIGJhbGxzcGVlZFk6bnVtYmVyO1xyXG4gICAgcmFkaXVzOiBudW1iZXI7XHJcbiAgICBzdGFydEFuZ2xlOm51bWJlcjtcclxuICAgIGVuZEFuZ2xlOm51bWJlcjtcclxuXHJcbiAgICBtaWRsYW5lV2lkdGg6bnVtYmVyO1xyXG4gICAgbWlkTGFuZVg6bnVtYmVyO1xyXG4gICAgbWlkbGFuZVk6bnVtYmVyO1xyXG5cclxuICAgIHNjb3JlT25lOmFueTtcclxuICAgIHNjb3JlVHdvOmFueTtcclxuXHJcbiAgICBwb3NYUGxheWVyT25lOm51bWJlcjtcclxuICAgIHBvc1lQbGF5ZXJPbmU6bnVtYmVyO1xyXG4gICAgcG9zWFBsYXllclR3bzpudW1iZXI7XHJcbiAgICBwb3NZUGxheWVyVHdvOm51bWJlcjtcclxuICAgIGdyYXZpdHk6bnVtYmVyO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHNldHRpbmdzLnBsYXllci53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHNldHRpbmdzLnBsYXllci5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5ncmF2aXR5ID0gc2V0dGluZ3MucGxheWVyLmdyYXZpdHk7XHJcblxyXG4gICAgICAgIHRoaXMuYmFsbFg9IHRoaXMuY2FudmFzLndpZHRoLzI7XHJcbiAgICAgICAgdGhpcy5iYWxsWT0gdGhpcy5jYW52YXMuaGVpZ2h0LzI7XHJcbiAgICAgICAgdGhpcy5iYWxsU3BlZWRYPXNldHRpbmdzLmJhbGwuYmFsbFNwZWVkWDtcclxuICAgICAgICB0aGlzLmJhbGxzcGVlZFk9c2V0dGluZ3MuYmFsbC5iYWxsU3BlZWRZO1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gc2V0dGluZ3MuYmFsbC5yYWRpdXM7XHJcbiAgICAgICAgdGhpcy5zdGFydEFuZ2xlID0gc2V0dGluZ3MuYmFsbC5zdGFydEFuZ2xlO1xyXG4gICAgICAgIHRoaXMuZW5kQW5nbGUgPSBzZXR0aW5ncy5iYWxsLmVuZEFuZ2xlO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5taWRsYW5lV2lkdGggPSBzZXR0aW5ncy5taWRMYW5lLndpZHRoO1xyXG4gICAgICAgIHRoaXMubWlkTGFuZVggPSB0aGlzLmNhbnZhcy53aWR0aC8yO1xyXG5cclxuICAgICAgICB0aGlzLnNjb3JlT25lID0gMDtcclxuICAgICAgICB0aGlzLnNjb3JlVHdvID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NYUGxheWVyT25lID0gdGhpcy53aWR0aDtcclxuICAgICAgICB0aGlzLnBvc1lQbGF5ZXJPbmUgPSB0aGlzLmNhbnZhcy5oZWlnaHQvMi0odGhpcy5oZWlnaHQqMC41KTtcclxuICAgICAgICB0aGlzLnBvc1hQbGF5ZXJUd28gPSB0aGlzLmNhbnZhcy53aWR0aC0odGhpcy53aWR0aCoyKTtcclxuICAgICAgICB0aGlzLnBvc1lQbGF5ZXJUd28gPSB0aGlzLmNhbnZhcy5oZWlnaHQvMi0odGhpcy5oZWlnaHQqMC41KTtcclxuICAgICAgICB0aGlzLmRyYXdFbGVtZW50cygpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uKCk7XHJcbiAgICB9XHJcbiAgICAvL1BsYXllciBPbmVcclxuICAgIGRyYXdQbGF5ZXJPbmUoKXtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3Qoc2V0dGluZ3MucGxheWVyT25lLnBvc2l0aW9ucy54LCBzZXR0aW5ncy5wbGF5ZXJPbmUucG9zaXRpb25zLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICAvL1BsYXllciBUd29cclxuICAgIGRyYXdQbGF5ZXJUd28oKXtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3Qoc2V0dGluZ3MucGxheWVyVHdvLnBvc2l0aW9ucy54LCBzZXR0aW5ncy5wbGF5ZXJUd28ucG9zaXRpb25zLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxyXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9Nb3V2ZW1lbnRzIHBsYXllclxyXG4gICAgbW91dmVtZW50c1BsYXllcigpe1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSk9PntcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcInpcIiAmJiBzZXR0aW5ncy5wbGF5ZXJPbmUucG9zaXRpb25zLnkgPj0wICl7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5wbGF5ZXJPbmUucG9zaXRpb25zLnkgLT0gdGhpcy5ncmF2aXR5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwic1wiICYmIHNldHRpbmdzLnBsYXllck9uZS5wb3NpdGlvbnMueSArIHNldHRpbmdzLnBsYXllck9uZS5oZWlnaHQgPD0gdGhpcy5jYW52YXMuaGVpZ2h0ICl7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5wbGF5ZXJPbmUucG9zaXRpb25zLnkgKz0gdGhpcy5ncmF2aXR5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKT0+e1xyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dVcFwiICYmIHNldHRpbmdzLnBsYXllclR3by5wb3NpdGlvbnMueSA+PTAgKXtcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzLnBsYXllclR3by5wb3NpdGlvbnMueSAtPSB0aGlzLmdyYXZpdHk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd0Rvd25cIiAmJiBzZXR0aW5ncy5wbGF5ZXJUd28ucG9zaXRpb25zLnkgKyBzZXR0aW5ncy5wbGF5ZXJUd28uaGVpZ2h0IDw9IHRoaXMuY2FudmFzLmhlaWdodCl7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5wbGF5ZXJUd28ucG9zaXRpb25zLnkgKz0gdGhpcy5ncmF2aXR5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9CYWxsXHJcbiAgICBkcmF3QmFsbCgpe1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcclxuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy5iYWxsWCx0aGlzLmJhbGxZLHRoaXMucmFkaXVzLHRoaXMuc3RhcnRBbmdsZSx0aGlzLmVuZEFuZ2xlKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICB9XHJcbiAgICAvL0JhbGxCb3VuY2VcclxuICAgIGJhbGxDb2xsaXNpb24oKXtcclxuICAgICAgICAvL0NvbGxpc2lvbiBZXHJcbiAgICAgICAgaWYgKHRoaXMuYmFsbFkgKyB0aGlzLmJhbGxzcGVlZFkgPD0wIHx8IHRoaXMuYmFsbFkgKyB0aGlzLmJhbGxzcGVlZFkgPj0gdGhpcy5jYW52YXMuaGVpZ2h0KXtcclxuICAgICAgICAgICAgdGhpcy5iYWxsc3BlZWRZID0gLXRoaXMuYmFsbHNwZWVkWTtcclxuICAgICAgICAgICAgdGhpcy5iYWxsWSArPSB0aGlzLmJhbGxzcGVlZFk7XHJcbiAgICAgICAgICAgIHRoaXMuYmFsbFggKz0gdGhpcy5iYWxsU3BlZWRYO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmJhbGxZICs9IHRoaXMuYmFsbHNwZWVkWTtcclxuICAgICAgICAgICAgdGhpcy5iYWxsWCArPSB0aGlzLmJhbGxTcGVlZFg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vQ29sbGlzaW9uIFhcclxuICAgICAgICBpZiAodGhpcy5iYWxsWCArIHRoaXMuYmFsbFNwZWVkWCA8PTAgfHwgdGhpcy5iYWxsWCArIHRoaXMuYmFsbFNwZWVkWCA+PSB0aGlzLmNhbnZhcy53aWR0aCl7XHJcbiAgICAgICAgICAgIHRoaXMuYmFsbFNwZWVkWCA9IC10aGlzLmJhbGxTcGVlZFg7XHJcbiAgICAgICAgICAgIHRoaXMuYmFsbFkgKz0gdGhpcy5iYWxsc3BlZWRZO1xyXG4gICAgICAgICAgICB0aGlzLmJhbGxYICs9IHRoaXMuYmFsbFNwZWVkWDtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFsbFkgKz0gdGhpcy5iYWxsc3BlZWRZO1xyXG4gICAgICAgICAgICB0aGlzLmJhbGxYICs9IHRoaXMuYmFsbFNwZWVkWDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vTWlkbGFuZVxyXG4gICAgZHJhd01pZGxhbmUoKXtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy5taWRMYW5lWC0odGhpcy5taWRsYW5lV2lkdGgqMC41KSwwLHRoaXMubWlkbGFuZVdpZHRoLHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9TY29yZVxyXG4gICAgZGlzcGxheVNjb3JlT25lKCl7XHJcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMTZweCBBcmlhbFwiO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9XCJ3aGl0ZVwiO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRoaXMuc2NvcmVPbmUsdGhpcy5jYW52YXMud2lkdGgvMiAtNjAsMzApO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheVNjb3JlVHdvKCl7XHJcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMTZweCBBcmlhbFwiO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9XCJ3aGl0ZVwiO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRoaXMuc2NvcmVUd28sdGhpcy5jYW52YXMud2lkdGgvMiArNTAsMzApO1xyXG4gICAgfVxyXG4gICAgLy9BZGQgU2NvcmVcclxuXHJcblxyXG4gICAgZHJhd0VsZW1lbnRzKCl7XHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsMCx0aGlzLmNhbnZhcy53aWR0aCx0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuZHJhd1BsYXllck9uZSgpO1xyXG4gICAgICAgIHRoaXMuZHJhd1BsYXllclR3bygpO1xyXG4gICAgICAgIHRoaXMuZHJhd0JhbGwoKTtcclxuICAgICAgICB0aGlzLmRyYXdNaWRsYW5lKCk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5U2NvcmVPbmUoKTtcclxuICAgICAgICB0aGlzLmRpc3BsYXlTY29yZVR3bygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGlvbigpe1xyXG4gICAgICAgIHRoaXMuZHJhd0VsZW1lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5iYWxsQ29sbGlzaW9uKCk7XHJcbiAgICAgICAgdGhpcy5tb3V2ZW1lbnRzUGxheWVyKCk7XHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsInNldHRpbmdzXzEiLCJwbGF5ZXIiLCJoZWlnaHQiLCJncmF2aXR5IiwiYmFsbFgiLCJiYWxsWSIsImJhbGxTcGVlZFgiLCJiYWxsIiwiYmFsbHNwZWVkWSIsImJhbGxTcGVlZFkiLCJyYWRpdXMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJtaWRsYW5lV2lkdGgiLCJtaWRMYW5lIiwibWlkTGFuZVgiLCJzY29yZU9uZSIsInNjb3JlVHdvIiwicG9zWFBsYXllck9uZSIsInBvc1lQbGF5ZXJPbmUiLCJwb3NYUGxheWVyVHdvIiwicG9zWVBsYXllclR3byIsImRyYXdFbGVtZW50cyIsImFuaW1hdGlvbiIsIlBsYXllck9uZSIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwicGxheWVyT25lIiwicG9zaXRpb25zIiwieCIsInkiLCJjbG9zZVBhdGgiLCJwbGF5ZXJUd28iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleSIsIl90aGlzIiwiYXJjIiwiZmlsbCIsImZvbnQiLCJmaWxsVGV4dCIsImNsZWFyUmVjdCIsImRyYXdQbGF5ZXJPbmUiLCJkcmF3UGxheWVyVHdvIiwiZHJhd0JhbGwiLCJkcmF3TWlkbGFuZSIsImRpc3BsYXlTY29yZU9uZSIsImRpc3BsYXlTY29yZVR3byIsImJhbGxDb2xsaXNpb24iLCJtb3V2ZW1lbnRzUGxheWVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/PlayerOne.ts\n");

/***/ }),

/***/ "./src/ts/settings.ts":
/*!****************************!*\
  !*** ./src/ts/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  canvas: {\n    width: 640,\n    height: 480\n  },\n  playerOne: {\n    height: 100,\n    width: 10,\n    gravity: 0.2,\n    positions: {\n      x: 10,\n      y: 240 - 100 * 0.5\n    }\n  },\n  playerTwo: {\n    height: 100,\n    width: 10,\n    gravity: 0.2,\n    positions: {\n      x: 620,\n      y: 240 - 100 * 0.5\n    }\n  },\n  player: {\n    height: 100,\n    width: 10,\n    gravity: 0.2\n  },\n  ball: {\n    radius: 5,\n    startAngle: 0,\n    endAngle: Math.PI * 2,\n    ballSpeedX: 2,\n    ballSpeedY: 2\n  },\n  midLane: {\n    width: 2\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVTtBQUNuQkMsUUFBTSxFQUFDO0FBQ0hDLFNBQUssRUFBQyxHQURIO0FBRUhDLFVBQU0sRUFBQztBQUZKLEdBRFk7QUFLbkJDLFdBQVMsRUFBQztBQUNORCxVQUFNLEVBQUMsR0FERDtBQUVORCxTQUFLLEVBQUMsRUFGQTtBQUdORyxXQUFPLEVBQUUsR0FISDtBQUlOQyxhQUFTLEVBQUM7QUFBQ0MsT0FBQyxFQUFDLEVBQUg7QUFBTUMsT0FBQyxFQUFDLE1BQUksTUFBSTtBQUFoQjtBQUpKLEdBTFM7QUFXbkJDLFdBQVMsRUFBQztBQUNOTixVQUFNLEVBQUMsR0FERDtBQUVORCxTQUFLLEVBQUUsRUFGRDtBQUdORyxXQUFPLEVBQUMsR0FIRjtBQUlOQyxhQUFTLEVBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLE1BQUksTUFBSTtBQUFqQjtBQUpKLEdBWFM7QUFpQm5CRSxRQUFNLEVBQUM7QUFDSFAsVUFBTSxFQUFDLEdBREo7QUFFSEQsU0FBSyxFQUFFLEVBRko7QUFHSEcsV0FBTyxFQUFDO0FBSEwsR0FqQlk7QUFzQm5CTSxNQUFJLEVBQUM7QUFDREMsVUFBTSxFQUFHLENBRFI7QUFFREMsY0FBVSxFQUFHLENBRlo7QUFHREMsWUFBUSxFQUFFQyxJQUFJLENBQUNDLEVBQUwsR0FBUSxDQUhqQjtBQUlEQyxjQUFVLEVBQUUsQ0FKWDtBQUtEQyxjQUFVLEVBQUM7QUFMVixHQXRCYztBQThCbkJDLFNBQU8sRUFBQztBQUNKakIsU0FBSyxFQUFDO0FBREY7QUE5QlcsQ0FBViIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvc2V0dGluZ3MudHM/NzRhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2V0dGluZ3MgPXtcclxuICAgIGNhbnZhczp7XHJcbiAgICAgICAgd2lkdGg6NjQwLFxyXG4gICAgICAgIGhlaWdodDo0ODAsXHJcbiAgICB9LFxyXG4gICAgcGxheWVyT25lOntcclxuICAgICAgICBoZWlnaHQ6MTAwLFxyXG4gICAgICAgIHdpZHRoOjEwLFxyXG4gICAgICAgIGdyYXZpdHk6IDAuMixcclxuICAgICAgICBwb3NpdGlvbnM6e3g6MTAseToyNDAtMTAwKjAuNX1cclxuICAgIH0sXHJcbiAgICBwbGF5ZXJUd286e1xyXG4gICAgICAgIGhlaWdodDoxMDAsXHJcbiAgICAgICAgd2lkdGg6IDEwLFxyXG4gICAgICAgIGdyYXZpdHk6MC4yLFxyXG4gICAgICAgIHBvc2l0aW9uczp7eDo2MjAseToyNDAtMTAwKjAuNX1cclxuICAgIH0sXHJcbiAgICBwbGF5ZXI6e1xyXG4gICAgICAgIGhlaWdodDoxMDAsXHJcbiAgICAgICAgd2lkdGg6IDEwLFxyXG4gICAgICAgIGdyYXZpdHk6MC4yLFxyXG4gICAgfSxcclxuICAgIGJhbGw6e1xyXG4gICAgICAgIHJhZGl1cyA6IDUsXHJcbiAgICAgICAgc3RhcnRBbmdsZSA6IDAsXHJcbiAgICAgICAgZW5kQW5nbGU6IE1hdGguUEkqMixcclxuICAgICAgICBiYWxsU3BlZWRYOiAyLFxyXG4gICAgICAgIGJhbGxTcGVlZFk6MixcclxuXHJcbiAgICB9LFxyXG4gICAgbWlkTGFuZTp7XHJcbiAgICAgICAgd2lkdGg6MixcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJleHBvcnRzIiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJwbGF5ZXJPbmUiLCJncmF2aXR5IiwicG9zaXRpb25zIiwieCIsInkiLCJwbGF5ZXJUd28iLCJwbGF5ZXIiLCJiYWxsIiwicmFkaXVzIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiTWF0aCIsIlBJIiwiYmFsbFNwZWVkWCIsImJhbGxTcGVlZFkiLCJtaWRMYW5lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/settings.ts\n");

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