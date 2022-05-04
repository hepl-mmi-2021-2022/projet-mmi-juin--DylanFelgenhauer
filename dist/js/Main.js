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

/***/ "./src/ts/Ball.ts":
/*!************************!*\
  !*** ./src/ts/Ball.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Ball = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar Ball = function () {\n  function Ball() {\n    this.canvas = document.getElementById('my-canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.radius = settings_1.settings.ball.radius;\n    this.startAngle = settings_1.settings.ball.startAngle;\n    this.endAngle = settings_1.settings.ball.endAngle;\n    this.drawBall();\n  }\n\n  Ball.prototype.drawBall = function () {\n    this.ctx.fillStyle = 'white';\n    this.ctx.arc(this.canvas.width / 2, this.canvas.height / 2, this.radius, this.startAngle, this.endAngle);\n    this.ctx.fill();\n  };\n\n  return Ball;\n}();\n\nexports.Ball = Ball;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQmFsbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBO0FBT0k7QUFDSSxTQUFLQSxNQUFMLEdBQWNDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEtBQUtILE1BQUwsQ0FBWUksVUFBWixDQUF1QixJQUF2QixDQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQyxvQkFBU0MsSUFBVCxDQUFjRixNQUE1QjtBQUNBLFNBQUtHLFVBQUwsR0FBa0JGLG9CQUFTQyxJQUFULENBQWNDLFVBQWhDO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkgsb0JBQVNDLElBQVQsQ0FBY0UsUUFBOUI7QUFDQSxTQUFLQyxRQUFMO0FBQ0g7O0FBQ0RDO0FBQ0ksU0FBS1IsR0FBTCxDQUFTUyxTQUFULEdBQXFCLE9BQXJCO0FBQ0EsU0FBS1QsR0FBTCxDQUFTVSxHQUFULENBQWEsS0FBS2IsTUFBTCxDQUFZYyxLQUFaLEdBQWtCLENBQS9CLEVBQWlDLEtBQUtkLE1BQUwsQ0FBWWUsTUFBWixHQUFtQixDQUFwRCxFQUFzRCxLQUFLVixNQUEzRCxFQUFrRSxLQUFLRyxVQUF2RSxFQUFrRixLQUFLQyxRQUF2RjtBQUNBLFNBQUtOLEdBQUwsQ0FBU2EsSUFBVDtBQUNILEdBSkQ7O0FBS0o7QUFBQyxDQXBCRDs7QUFBYUMsWUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL0JhbGwudHM/MGY4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5leHBvcnQgY2xhc3MgQmFsbHtcclxuICAgIGNhbnZhczpIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIGN0eCA6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgcmFkaXVzIDogbnVtYmVyO1xyXG4gICAgc3RhcnRBbmdsZSA6IG51bWJlcjtcclxuICAgIGVuZEFuZ2xlIDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LWNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHNldHRpbmdzLmJhbGwucmFkaXVzO1xyXG4gICAgICAgIHRoaXMuc3RhcnRBbmdsZSA9IHNldHRpbmdzLmJhbGwuc3RhcnRBbmdsZTtcclxuICAgICAgICB0aGlzLmVuZEFuZ2xlID0gc2V0dGluZ3MuYmFsbC5lbmRBbmdsZTtcclxuICAgICAgICB0aGlzLmRyYXdCYWxsKCk7XHJcbiAgICB9XHJcbiAgICBkcmF3QmFsbCgpe1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMuY2FudmFzLndpZHRoLzIsdGhpcy5jYW52YXMuaGVpZ2h0LzIsdGhpcy5yYWRpdXMsdGhpcy5zdGFydEFuZ2xlLHRoaXMuZW5kQW5nbGUpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInJhZGl1cyIsInNldHRpbmdzXzEiLCJiYWxsIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiZHJhd0JhbGwiLCJCYWxsIiwiZmlsbFN0eWxlIiwiYXJjIiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Ball.ts\n");

/***/ }),

/***/ "./src/ts/Canvas.ts":
/*!**************************!*\
  !*** ./src/ts/Canvas.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Canvas = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar Canvas = function () {\n  function Canvas() {\n    this.canvas = document.getElementById('my-canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.midLaneWidth = settings_1.settings.midLane.width;\n    this.resizeCanvas();\n    this.drawMidLane();\n  }\n\n  Canvas.prototype.resizeCanvas = function () {\n    this.canvas.width = settings_1.settings.canvas.width;\n    this.canvas.height = settings_1.settings.canvas.height;\n    this.addEventListener();\n  };\n\n  Canvas.prototype.addEventListener = function () {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.resizeCanvas();\n    });\n  };\n\n  Canvas.prototype.drawMidLane = function () {\n    this.ctx.fillStyle = 'white';\n    this.ctx.fillRect(this.canvas.width / 2 - this.midLaneWidth * 0.5, 0, this.midLaneWidth, this.canvas.height);\n  };\n\n  return Canvas;\n}();\n\nexports.Canvas = Canvas;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ2FudmFzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFNSTtBQUNJLFNBQUtBLE1BQUwsR0FBY0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVcsS0FBS0gsTUFBTCxDQUFZSSxVQUFaLENBQXVCLElBQXZCLENBQVg7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQyxvQkFBU0MsT0FBVCxDQUFpQkMsS0FBckM7QUFDQSxTQUFLQyxZQUFMO0FBQ0EsU0FBS0MsV0FBTDtBQUNIOztBQUNEQztBQUNJLFNBQUtYLE1BQUwsQ0FBWVEsS0FBWixHQUFrQkYsb0JBQVNOLE1BQVQsQ0FBZ0JRLEtBQWxDO0FBQ0EsU0FBS1IsTUFBTCxDQUFZWSxNQUFaLEdBQW1CTixvQkFBU04sTUFBVCxDQUFnQlksTUFBbkM7QUFDQSxTQUFLQyxnQkFBTDtBQUNILEdBSkQ7O0FBS0FGO0FBQUE7O0FBQ0lHLFVBQU0sQ0FBQ0QsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBaUM7QUFDN0JFLFdBQUksQ0FBQ04sWUFBTDtBQUNILEtBRkQ7QUFHSCxHQUpEOztBQUtBRTtBQUNJLFNBQUtSLEdBQUwsQ0FBU2EsU0FBVCxHQUFtQixPQUFuQjtBQUNBLFNBQUtiLEdBQUwsQ0FBU2MsUUFBVCxDQUFrQixLQUFLakIsTUFBTCxDQUFZUSxLQUFaLEdBQWtCLENBQWxCLEdBQW9CLEtBQUtILFlBQUwsR0FBa0IsR0FBeEQsRUFBNEQsQ0FBNUQsRUFBOEQsS0FBS0EsWUFBbkUsRUFBZ0YsS0FBS0wsTUFBTCxDQUFZWSxNQUE1RjtBQUNILEdBSEQ7O0FBSUo7QUFBQyxDQTNCRDs7QUFBYU0sY0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL0NhbnZhcy50cz84NWE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFze1xyXG4gICAgY2FudmFzOkhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgY3R4IDpDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBtaWRMYW5lV2lkdGggOiBudW1iZXI7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LWNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLm1pZExhbmVXaWR0aCA9IHNldHRpbmdzLm1pZExhbmUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5yZXNpemVDYW52YXMoKTtcclxuICAgICAgICB0aGlzLmRyYXdNaWRMYW5lKCk7XHJcbiAgICB9XHJcbiAgICByZXNpemVDYW52YXMoKXtcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aD1zZXR0aW5ncy5jYW52YXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0PXNldHRpbmdzLmNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCk7XHJcbiAgICB9XHJcbiAgICBhZGRFdmVudExpc3RlbmVyKCl7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKCk9PntcclxuICAgICAgICAgICAgdGhpcy5yZXNpemVDYW52YXMoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZHJhd01pZExhbmUoKXtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGU9J3doaXRlJztcclxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLmNhbnZhcy53aWR0aC8yLXRoaXMubWlkTGFuZVdpZHRoKjAuNSwwLHRoaXMubWlkTGFuZVdpZHRoLHRoaXMuY2FudmFzLmhlaWdodClcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIm1pZExhbmVXaWR0aCIsInNldHRpbmdzXzEiLCJtaWRMYW5lIiwid2lkdGgiLCJyZXNpemVDYW52YXMiLCJkcmF3TWlkTGFuZSIsIkNhbnZhcyIsImhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJfdGhpcyIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Canvas.ts\n");

/***/ }),

/***/ "./src/ts/Main.ts":
/*!************************!*\
  !*** ./src/ts/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/ts/Canvas.ts\");\n\nvar PlayerTwo_1 = __webpack_require__(/*! ./PlayerTwo */ \"./src/ts/PlayerTwo.ts\");\n\nvar PlayerOne_1 = __webpack_require__(/*! ./PlayerOne */ \"./src/ts/PlayerOne.ts\");\n\nvar Ball_1 = __webpack_require__(/*! ./Ball */ \"./src/ts/Ball.ts\");\n\nvar Main = function () {\n  function Main() {\n    this.canvas = new Canvas_1.Canvas();\n    this.playerTwo = new PlayerTwo_1.PlayerTwo();\n    this.playerOne = new PlayerOne_1.PlayerOne();\n    this.ball = new Ball_1.Ball();\n  }\n\n  return Main;\n}();\n\nnew Main();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7QUFNSTtBQUNJLFNBQUtBLE1BQUwsR0FBYyxJQUFJQyxlQUFKLEVBQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQUlDLHFCQUFKLEVBQWpCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixJQUFJQyxxQkFBSixFQUFqQjtBQUNBLFNBQUtDLElBQUwsR0FBWSxJQUFJQyxXQUFKLEVBQVo7QUFDSDs7QUFDTDtBQUFDLENBWkQ7O0FBYUEsSUFBSUMsSUFBSiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvTWFpbi50cz80ODhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2FudmFzfSBmcm9tIFwiLi9DYW52YXNcIjtcclxuaW1wb3J0IHtQbGF5ZXJUd299IGZyb20gXCIuL1BsYXllclR3b1wiO1xyXG5pbXBvcnQge1BsYXllck9uZX0gZnJvbSBcIi4vUGxheWVyT25lXCI7XHJcbmltcG9ydCB7QmFsbH0gZnJvbSBcIi4vQmFsbFwiO1xyXG5cclxuXHJcbmNsYXNzIE1haW57XHJcbiAgICBjYW52YXM6Q2FudmFzO1xyXG4gICAgcGxheWVyVHdvIDogUGxheWVyVHdvO1xyXG4gICAgcGxheWVyT25lIDogUGxheWVyT25lO1xyXG4gICAgYmFsbDogQmFsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoKTtcclxuICAgICAgICB0aGlzLnBsYXllclR3byA9IG5ldyBQbGF5ZXJUd28oKTtcclxuICAgICAgICB0aGlzLnBsYXllck9uZSA9IG5ldyBQbGF5ZXJPbmUoKTtcclxuICAgICAgICB0aGlzLmJhbGwgPSBuZXcgQmFsbCgpO1xyXG4gICAgfVxyXG59XHJcbm5ldyBNYWluKCk7Il0sIm5hbWVzIjpbImNhbnZhcyIsIkNhbnZhc18xIiwicGxheWVyVHdvIiwiUGxheWVyVHdvXzEiLCJwbGF5ZXJPbmUiLCJQbGF5ZXJPbmVfMSIsImJhbGwiLCJCYWxsXzEiLCJNYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Main.ts\n");

/***/ }),

/***/ "./src/ts/PlayerOne.ts":
/*!*****************************!*\
  !*** ./src/ts/PlayerOne.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.PlayerOne = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar PlayerOne = function () {\n  function PlayerOne() {\n    this.canvas = document.getElementById('my-canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.height = settings_1.settings.player.height;\n    this.width = settings_1.settings.player.width;\n    this.drawPlayerOne();\n  }\n\n  PlayerOne.prototype.drawPlayerOne = function () {\n    this.ctx.fillStyle = 'white';\n    this.ctx.fillRect(this.canvas.width - this.width - this.width, this.canvas.height / 2 - this.height * 0.5, this.width, this.height);\n  };\n\n  return PlayerOne;\n}();\n\nexports.PlayerOne = PlayerOne;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvUGxheWVyT25lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFNSTtBQUNJLFNBQUtBLE1BQUwsR0FBY0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVcsS0FBS0gsTUFBTCxDQUFZSSxVQUFaLENBQXVCLElBQXZCLENBQVg7QUFDQSxTQUFLQyxNQUFMLEdBQWNDLG9CQUFTQyxNQUFULENBQWdCRixNQUE5QjtBQUNBLFNBQUtHLEtBQUwsR0FBYUYsb0JBQVNDLE1BQVQsQ0FBZ0JDLEtBQTdCO0FBQ0EsU0FBS0MsYUFBTDtBQUNIOztBQUNEQztBQUNJLFNBQUtQLEdBQUwsQ0FBU1EsU0FBVCxHQUFtQixPQUFuQjtBQUNBLFNBQUtSLEdBQUwsQ0FBU1MsUUFBVCxDQUFtQixLQUFLWixNQUFMLENBQVlRLEtBQVosR0FBa0IsS0FBS0EsS0FBeEIsR0FBK0IsS0FBS0EsS0FBdEQsRUFBNEQsS0FBS1IsTUFBTCxDQUFZSyxNQUFaLEdBQW1CLENBQW5CLEdBQXFCLEtBQUtBLE1BQUwsR0FBWSxHQUE3RixFQUFrRyxLQUFLRyxLQUF2RyxFQUE2RyxLQUFLSCxNQUFsSDtBQUNILEdBSEQ7O0FBSUo7QUFBQyxDQWpCRDs7QUFBYVEsaUJBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9QbGF5ZXJPbmUudHM/MjQwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllck9uZSB7XHJcbiAgICBjYW52YXM6SFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBjdHggOkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIGhlaWdodCA6IG51bWJlcjtcclxuICAgIHdpZHRoIDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LWNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHNldHRpbmdzLnBsYXllci5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHNldHRpbmdzLnBsYXllci53aWR0aDtcclxuICAgICAgICB0aGlzLmRyYXdQbGF5ZXJPbmUoKTtcclxuICAgIH1cclxuICAgIGRyYXdQbGF5ZXJPbmUoKXtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGU9J3doaXRlJztcclxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgodGhpcy5jYW52YXMud2lkdGgtdGhpcy53aWR0aCktdGhpcy53aWR0aCx0aGlzLmNhbnZhcy5oZWlnaHQvMi10aGlzLmhlaWdodCowLjUsIHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiaGVpZ2h0Iiwic2V0dGluZ3NfMSIsInBsYXllciIsIndpZHRoIiwiZHJhd1BsYXllck9uZSIsIlBsYXllck9uZSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/PlayerOne.ts\n");

/***/ }),

/***/ "./src/ts/PlayerTwo.ts":
/*!*****************************!*\
  !*** ./src/ts/PlayerTwo.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.PlayerTwo = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar PlayerTwo = function () {\n  function PlayerTwo() {\n    this.canvas = document.getElementById('my-canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.height = settings_1.settings.player.height;\n    this.width = settings_1.settings.player.width;\n    this.drawPlayerTwo();\n  }\n\n  PlayerTwo.prototype.drawPlayerTwo = function () {\n    this.ctx.fillStyle = 'white';\n    this.ctx.beginPath();\n    this.ctx.fillRect(this.width, this.canvas.height / 2 - this.height * 0.5, this.width, this.height);\n    this.ctx.closePath();\n  };\n\n  return PlayerTwo;\n}();\n\nexports.PlayerTwo = PlayerTwo;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvUGxheWVyVHdvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFNSTtBQUNJLFNBQUtBLE1BQUwsR0FBY0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVcsS0FBS0gsTUFBTCxDQUFZSSxVQUFaLENBQXVCLElBQXZCLENBQVg7QUFDQSxTQUFLQyxNQUFMLEdBQWNDLG9CQUFTQyxNQUFULENBQWdCRixNQUE5QjtBQUNBLFNBQUtHLEtBQUwsR0FBYUYsb0JBQVNDLE1BQVQsQ0FBZ0JDLEtBQTdCO0FBQ0EsU0FBS0MsYUFBTDtBQUNIOztBQUNEQztBQUNJLFNBQUtQLEdBQUwsQ0FBU1EsU0FBVCxHQUFtQixPQUFuQjtBQUNBLFNBQUtSLEdBQUwsQ0FBU1MsU0FBVDtBQUNBLFNBQUtULEdBQUwsQ0FBU1UsUUFBVCxDQUFrQixLQUFLTCxLQUF2QixFQUE4QixLQUFLUixNQUFMLENBQVlLLE1BQVosR0FBbUIsQ0FBcEIsR0FBdUIsS0FBS0EsTUFBTCxHQUFZLEdBQWhFLEVBQXFFLEtBQUtHLEtBQTFFLEVBQWdGLEtBQUtILE1BQXJGO0FBQ0EsU0FBS0YsR0FBTCxDQUFTVyxTQUFUO0FBQ0gsR0FMRDs7QUFNSjtBQUFDLENBbkJEOztBQUFhQyxpQkFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL1BsYXllclR3by50cz83MWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyVHdvIHtcclxuICAgIGNhbnZhczpIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIGN0eCA6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgaGVpZ2h0IDogbnVtYmVyO1xyXG4gICAgd2lkdGggOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gc2V0dGluZ3MucGxheWVyLmhlaWdodDtcclxuICAgICAgICB0aGlzLndpZHRoID0gc2V0dGluZ3MucGxheWVyLndpZHRoO1xyXG4gICAgICAgIHRoaXMuZHJhd1BsYXllclR3bygpO1xyXG4gICAgfVxyXG4gICAgZHJhd1BsYXllclR3bygpe1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZT0nd2hpdGUnO1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMud2lkdGgsKHRoaXMuY2FudmFzLmhlaWdodC8yKS10aGlzLmhlaWdodCowLjUsIHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiaGVpZ2h0Iiwic2V0dGluZ3NfMSIsInBsYXllciIsIndpZHRoIiwiZHJhd1BsYXllclR3byIsIlBsYXllclR3byIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImZpbGxSZWN0IiwiY2xvc2VQYXRoIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/PlayerTwo.ts\n");

/***/ }),

/***/ "./src/ts/settings.ts":
/*!****************************!*\
  !*** ./src/ts/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  canvas: {\n    width: 640,\n    height: 480\n  },\n  player: {\n    height: 100,\n    width: 10\n  },\n  ball: {\n    radius: 5,\n    startAngle: 0,\n    endAngle: Math.PI * 2\n  },\n  midLane: {\n    width: 2\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVTtBQUNuQkMsUUFBTSxFQUFDO0FBQ0hDLFNBQUssRUFBQyxHQURIO0FBRUhDLFVBQU0sRUFBQztBQUZKLEdBRFk7QUFLbkJDLFFBQU0sRUFBQztBQUNIRCxVQUFNLEVBQUMsR0FESjtBQUVIRCxTQUFLLEVBQUU7QUFGSixHQUxZO0FBU25CRyxNQUFJLEVBQUM7QUFDREMsVUFBTSxFQUFHLENBRFI7QUFFREMsY0FBVSxFQUFHLENBRlo7QUFHREMsWUFBUSxFQUFFQyxJQUFJLENBQUNDLEVBQUwsR0FBUTtBQUhqQixHQVRjO0FBY25CQyxTQUFPLEVBQUM7QUFDSlQsU0FBSyxFQUFDO0FBREY7QUFkVyxDQUFWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9zZXR0aW5ncy50cz83NGFhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXR0aW5ncyA9e1xyXG4gICAgY2FudmFzOntcclxuICAgICAgICB3aWR0aDo2NDAsXHJcbiAgICAgICAgaGVpZ2h0OjQ4MCxcclxuICAgIH0sXHJcbiAgICBwbGF5ZXI6e1xyXG4gICAgICAgIGhlaWdodDoxMDAsXHJcbiAgICAgICAgd2lkdGg6IDEwLFxyXG4gICAgfSxcclxuICAgIGJhbGw6e1xyXG4gICAgICAgIHJhZGl1cyA6IDUsXHJcbiAgICAgICAgc3RhcnRBbmdsZSA6IDAsXHJcbiAgICAgICAgZW5kQW5nbGU6IE1hdGguUEkqMixcclxuICAgIH0sXHJcbiAgICBtaWRMYW5lOntcclxuICAgICAgICB3aWR0aDoyLFxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImV4cG9ydHMiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsInBsYXllciIsImJhbGwiLCJyYWRpdXMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJNYXRoIiwiUEkiLCJtaWRMYW5lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/settings.ts\n");

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