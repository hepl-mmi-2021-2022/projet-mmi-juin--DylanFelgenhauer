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

eval("\n\nexports.__esModule = true;\nexports.PlayerOne = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar PlayerOne = function () {\n  function PlayerOne() {\n    this.canvas = document.getElementById('my-canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.width = settings_1.settings.player.width;\n    this.height = settings_1.settings.player.height;\n    this.x = this.canvas.width / 2;\n    this.y = this.canvas.height / 2;\n    this.radius = settings_1.settings.ball.radius;\n    this.startAngle = settings_1.settings.ball.startAngle;\n    this.endAngle = settings_1.settings.ball.endAngle;\n    this.midlaneWidth = settings_1.settings.midLane.width;\n    this.scoreOne = 0;\n    this.scoreTwo = 0;\n    this.drawElements();\n  }\n\n  PlayerOne.prototype.drawPlayerOne = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillRect(this.width, this.canvas.height / 2 - this.height * 0.5, this.width, this.height);\n    this.ctx.closePath();\n  };\n\n  PlayerOne.prototype.drawPlayerTwo = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillRect(this.canvas.width - this.width * 2, this.canvas.height / 2 - this.height * 0.5, this.width, this.height);\n    this.ctx.closePath();\n  };\n\n  PlayerOne.prototype.drawBall = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = \"white\";\n    this.ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);\n    this.ctx.fill();\n    this.ctx.closePath();\n  };\n\n  PlayerOne.prototype.drawMidlane = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillRect(this.x - this.midlaneWidth * 0.5, 0, this.midlaneWidth, this.canvas.height);\n    this.ctx.closePath();\n  };\n\n  PlayerOne.prototype.displayScoreOne = function () {\n    this.ctx.font = \"16px Arial\";\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillText(this.scoreOne, this.canvas.width / 2 - 60, 30);\n  };\n\n  PlayerOne.prototype.displayScoreTwo = function () {\n    this.ctx.font = \"16px Arial\";\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillText(this.scoreTwo, this.canvas.width / 2 + 50, 30);\n  };\n\n  PlayerOne.prototype.drawElements = function () {\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.drawPlayerOne();\n    this.drawPlayerTwo();\n    this.drawBall();\n    this.drawMidlane();\n    this.displayScoreOne();\n    this.displayScoreTwo();\n  };\n\n  return PlayerOne;\n}();\n\nexports.PlayerOne = PlayerOne;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvUGxheWVyT25lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFpQkk7QUFDSSxTQUFLQSxNQUFMLEdBQWNDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEtBQUtILE1BQUwsQ0FBWUksVUFBWixDQUF1QixJQUF2QixDQUFYO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQyxvQkFBU0MsTUFBVCxDQUFnQkYsS0FBN0I7QUFDQSxTQUFLRyxNQUFMLEdBQWNGLG9CQUFTQyxNQUFULENBQWdCQyxNQUE5QjtBQUNBLFNBQUtDLENBQUwsR0FBUSxLQUFLVCxNQUFMLENBQVlLLEtBQVosR0FBa0IsQ0FBMUI7QUFDQSxTQUFLSyxDQUFMLEdBQVEsS0FBS1YsTUFBTCxDQUFZUSxNQUFaLEdBQW1CLENBQTNCO0FBQ0EsU0FBS0csTUFBTCxHQUFjTCxvQkFBU00sSUFBVCxDQUFjRCxNQUE1QjtBQUNBLFNBQUtFLFVBQUwsR0FBa0JQLG9CQUFTTSxJQUFULENBQWNDLFVBQWhDO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQlIsb0JBQVNNLElBQVQsQ0FBY0UsUUFBOUI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CVCxvQkFBU1UsT0FBVCxDQUFpQlgsS0FBckM7QUFDQSxTQUFLWSxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtDLFlBQUw7QUFDSDs7QUFFREM7QUFDSSxTQUFLakIsR0FBTCxDQUFTa0IsU0FBVDtBQUNBLFNBQUtsQixHQUFMLENBQVNtQixTQUFULEdBQXFCLE9BQXJCO0FBQ0EsU0FBS25CLEdBQUwsQ0FBU29CLFFBQVQsQ0FBa0IsS0FBS2xCLEtBQXZCLEVBQThCLEtBQUtMLE1BQUwsQ0FBWVEsTUFBWixHQUFtQixDQUFuQixHQUFzQixLQUFLQSxNQUFMLEdBQVksR0FBaEUsRUFBc0UsS0FBS0gsS0FBM0UsRUFBa0YsS0FBS0csTUFBdkY7QUFDQSxTQUFLTCxHQUFMLENBQVNxQixTQUFUO0FBQ0gsR0FMRDs7QUFPQUo7QUFDSSxTQUFLakIsR0FBTCxDQUFTa0IsU0FBVDtBQUNBLFNBQUtsQixHQUFMLENBQVNtQixTQUFULEdBQXFCLE9BQXJCO0FBQ0EsU0FBS25CLEdBQUwsQ0FBU29CLFFBQVQsQ0FBa0IsS0FBS3ZCLE1BQUwsQ0FBWUssS0FBWixHQUFtQixLQUFLQSxLQUFMLEdBQVcsQ0FBaEQsRUFBb0QsS0FBS0wsTUFBTCxDQUFZUSxNQUFaLEdBQW1CLENBQW5CLEdBQXNCLEtBQUtBLE1BQUwsR0FBWSxHQUF0RixFQUE0RixLQUFLSCxLQUFqRyxFQUF3RyxLQUFLRyxNQUE3RztBQUNBLFNBQUtMLEdBQUwsQ0FBU3FCLFNBQVQ7QUFDSCxHQUxEOztBQU9BSjtBQUNJLFNBQUtqQixHQUFMLENBQVNrQixTQUFUO0FBQ0EsU0FBS2xCLEdBQUwsQ0FBU21CLFNBQVQsR0FBcUIsT0FBckI7QUFDQSxTQUFLbkIsR0FBTCxDQUFTc0IsR0FBVCxDQUFhLEtBQUtoQixDQUFsQixFQUFvQixLQUFLQyxDQUF6QixFQUEyQixLQUFLQyxNQUFoQyxFQUF1QyxLQUFLRSxVQUE1QyxFQUF1RCxLQUFLQyxRQUE1RDtBQUNBLFNBQUtYLEdBQUwsQ0FBU3VCLElBQVQ7QUFDQSxTQUFLdkIsR0FBTCxDQUFTcUIsU0FBVDtBQUNILEdBTkQ7O0FBT0FKO0FBQ0ksU0FBS2pCLEdBQUwsQ0FBU2tCLFNBQVQ7QUFDQSxTQUFLbEIsR0FBTCxDQUFTbUIsU0FBVCxHQUFxQixPQUFyQjtBQUNBLFNBQUtuQixHQUFMLENBQVNvQixRQUFULENBQWtCLEtBQUtkLENBQUwsR0FBUSxLQUFLTSxZQUFMLEdBQWtCLEdBQTVDLEVBQWlELENBQWpELEVBQW1ELEtBQUtBLFlBQXhELEVBQXFFLEtBQUtmLE1BQUwsQ0FBWVEsTUFBakY7QUFDQSxTQUFLTCxHQUFMLENBQVNxQixTQUFUO0FBQ0gsR0FMRDs7QUFRQUo7QUFDSSxTQUFLakIsR0FBTCxDQUFTd0IsSUFBVCxHQUFnQixZQUFoQjtBQUNBLFNBQUt4QixHQUFMLENBQVNtQixTQUFULEdBQW9CLE9BQXBCO0FBQ0EsU0FBS25CLEdBQUwsQ0FBU3lCLFFBQVQsQ0FBa0IsS0FBS1gsUUFBdkIsRUFBZ0MsS0FBS2pCLE1BQUwsQ0FBWUssS0FBWixHQUFrQixDQUFsQixHQUFxQixFQUFyRCxFQUF3RCxFQUF4RDtBQUNILEdBSkQ7O0FBS0FlO0FBQ0ksU0FBS2pCLEdBQUwsQ0FBU3dCLElBQVQsR0FBZ0IsWUFBaEI7QUFDQSxTQUFLeEIsR0FBTCxDQUFTbUIsU0FBVCxHQUFvQixPQUFwQjtBQUNBLFNBQUtuQixHQUFMLENBQVN5QixRQUFULENBQWtCLEtBQUtWLFFBQXZCLEVBQWdDLEtBQUtsQixNQUFMLENBQVlLLEtBQVosR0FBa0IsQ0FBbEIsR0FBcUIsRUFBckQsRUFBd0QsRUFBeEQ7QUFDSCxHQUpEOztBQU1BZTtBQUNJLFNBQUtqQixHQUFMLENBQVMwQixTQUFULENBQW1CLENBQW5CLEVBQXFCLENBQXJCLEVBQXVCLEtBQUs3QixNQUFMLENBQVlLLEtBQW5DLEVBQXlDLEtBQUtMLE1BQUwsQ0FBWVEsTUFBckQ7QUFDQSxTQUFLc0IsYUFBTDtBQUNBLFNBQUtDLGFBQUw7QUFDQSxTQUFLQyxRQUFMO0FBQ0EsU0FBS0MsV0FBTDtBQUNBLFNBQUtDLGVBQUw7QUFDQSxTQUFLQyxlQUFMO0FBQ0gsR0FSRDs7QUFTSjtBQUFDLENBbEZEOztBQUFhQyxpQkFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL1BsYXllck9uZS50cz8yNDA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyT25lIHtcclxuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgICB4Om51bWJlcjtcclxuICAgIHk6bnVtYmVyO1xyXG4gICAgcmFkaXVzOiBudW1iZXI7XHJcbiAgICBzdGFydEFuZ2xlOm51bWJlcjtcclxuICAgIGVuZEFuZ2xlOm51bWJlcjtcclxuXHJcbiAgICBtaWRsYW5lV2lkdGg6bnVtYmVyO1xyXG5cclxuICAgIHNjb3JlT25lOmFueTtcclxuICAgIHNjb3JlVHdvOmFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LWNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLndpZHRoID0gc2V0dGluZ3MucGxheWVyLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gc2V0dGluZ3MucGxheWVyLmhlaWdodDtcclxuICAgICAgICB0aGlzLng9IHRoaXMuY2FudmFzLndpZHRoLzI7XHJcbiAgICAgICAgdGhpcy55PSB0aGlzLmNhbnZhcy5oZWlnaHQvMjtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHNldHRpbmdzLmJhbGwucmFkaXVzO1xyXG4gICAgICAgIHRoaXMuc3RhcnRBbmdsZSA9IHNldHRpbmdzLmJhbGwuc3RhcnRBbmdsZTtcclxuICAgICAgICB0aGlzLmVuZEFuZ2xlID0gc2V0dGluZ3MuYmFsbC5lbmRBbmdsZTtcclxuICAgICAgICB0aGlzLm1pZGxhbmVXaWR0aCA9IHNldHRpbmdzLm1pZExhbmUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5zY29yZU9uZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zY29yZVR3byA9IDA7XHJcbiAgICAgICAgdGhpcy5kcmF3RWxlbWVudHMoKTtcclxuICAgIH1cclxuICAgIC8vUGxheWVyIE9uZVxyXG4gICAgZHJhd1BsYXllck9uZSgpe1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcclxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQvMi0odGhpcy5oZWlnaHQqMC41KSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICB9XHJcbiAgICAvL1BsYXllciBUd29cclxuICAgIGRyYXdQbGF5ZXJUd28oKXtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy5jYW52YXMud2lkdGgtKHRoaXMud2lkdGgqMiksIHRoaXMuY2FudmFzLmhlaWdodC8yLSh0aGlzLmhlaWdodCowLjUpLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgIH1cclxuICAgIC8vQmFsbFxyXG4gICAgZHJhd0JhbGwoKXtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMueCx0aGlzLnksdGhpcy5yYWRpdXMsdGhpcy5zdGFydEFuZ2xlLHRoaXMuZW5kQW5nbGUpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgIH1cclxuICAgIGRyYXdNaWRsYW5lKCl7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMueC0odGhpcy5taWRsYW5lV2lkdGgqMC41KSwwLHRoaXMubWlkbGFuZVdpZHRoLHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9TY29yZVxyXG4gICAgZGlzcGxheVNjb3JlT25lKCl7XHJcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMTZweCBBcmlhbFwiO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9XCJ3aGl0ZVwiO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRoaXMuc2NvcmVPbmUsdGhpcy5jYW52YXMud2lkdGgvMiAtNjAsMzApO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheVNjb3JlVHdvKCl7XHJcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMTZweCBBcmlhbFwiO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9XCJ3aGl0ZVwiO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRoaXMuc2NvcmVUd28sdGhpcy5jYW52YXMud2lkdGgvMiArNTAsMzApO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdFbGVtZW50cygpe1xyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLDAsdGhpcy5jYW52YXMud2lkdGgsdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmRyYXdQbGF5ZXJPbmUoKTtcclxuICAgICAgICB0aGlzLmRyYXdQbGF5ZXJUd28oKTtcclxuICAgICAgICB0aGlzLmRyYXdCYWxsKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3TWlkbGFuZSgpO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheVNjb3JlT25lKCk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5U2NvcmVUd28oKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwic2V0dGluZ3NfMSIsInBsYXllciIsImhlaWdodCIsIngiLCJ5IiwicmFkaXVzIiwiYmFsbCIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsIm1pZGxhbmVXaWR0aCIsIm1pZExhbmUiLCJzY29yZU9uZSIsInNjb3JlVHdvIiwiZHJhd0VsZW1lbnRzIiwiUGxheWVyT25lIiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJjbG9zZVBhdGgiLCJhcmMiLCJmaWxsIiwiZm9udCIsImZpbGxUZXh0IiwiY2xlYXJSZWN0IiwiZHJhd1BsYXllck9uZSIsImRyYXdQbGF5ZXJUd28iLCJkcmF3QmFsbCIsImRyYXdNaWRsYW5lIiwiZGlzcGxheVNjb3JlT25lIiwiZGlzcGxheVNjb3JlVHdvIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/PlayerOne.ts\n");

/***/ }),

/***/ "./src/ts/settings.ts":
/*!****************************!*\
  !*** ./src/ts/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  canvas: {\n    width: 640,\n    height: 480\n  },\n  player: {\n    height: 100,\n    width: 10\n  },\n  ball: {\n    radius: 5,\n    startAngle: 0,\n    endAngle: Math.PI * 2,\n    dx: 5,\n    dy: 1\n  },\n  midLane: {\n    width: 2\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVTtBQUNuQkMsUUFBTSxFQUFDO0FBQ0hDLFNBQUssRUFBQyxHQURIO0FBRUhDLFVBQU0sRUFBQztBQUZKLEdBRFk7QUFLbkJDLFFBQU0sRUFBQztBQUNIRCxVQUFNLEVBQUMsR0FESjtBQUVIRCxTQUFLLEVBQUU7QUFGSixHQUxZO0FBU25CRyxNQUFJLEVBQUM7QUFDREMsVUFBTSxFQUFHLENBRFI7QUFFREMsY0FBVSxFQUFHLENBRlo7QUFHREMsWUFBUSxFQUFFQyxJQUFJLENBQUNDLEVBQUwsR0FBUSxDQUhqQjtBQUlEQyxNQUFFLEVBQUMsQ0FKRjtBQUtEQyxNQUFFLEVBQUM7QUFMRixHQVRjO0FBZ0JuQkMsU0FBTyxFQUFDO0FBQ0pYLFNBQUssRUFBQztBQURGO0FBaEJXLENBQVYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL3NldHRpbmdzLnRzPzc0YWEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNldHRpbmdzID17XHJcbiAgICBjYW52YXM6e1xyXG4gICAgICAgIHdpZHRoOjY0MCxcclxuICAgICAgICBoZWlnaHQ6NDgwLFxyXG4gICAgfSxcclxuICAgIHBsYXllcjp7XHJcbiAgICAgICAgaGVpZ2h0OjEwMCxcclxuICAgICAgICB3aWR0aDogMTAsXHJcbiAgICB9LFxyXG4gICAgYmFsbDp7XHJcbiAgICAgICAgcmFkaXVzIDogNSxcclxuICAgICAgICBzdGFydEFuZ2xlIDogMCxcclxuICAgICAgICBlbmRBbmdsZTogTWF0aC5QSSoyLFxyXG4gICAgICAgIGR4OjUsXHJcbiAgICAgICAgZHk6MSxcclxuICAgIH0sXHJcbiAgICBtaWRMYW5lOntcclxuICAgICAgICB3aWR0aDoyLFxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImV4cG9ydHMiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsInBsYXllciIsImJhbGwiLCJyYWRpdXMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJNYXRoIiwiUEkiLCJkeCIsImR5IiwibWlkTGFuZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/settings.ts\n");

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