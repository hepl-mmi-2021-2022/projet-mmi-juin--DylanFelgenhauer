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

eval("\n\nexports.__esModule = true;\nexports.Canvas = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar Canvas = function () {\n  function Canvas() {\n    this.canvas = document.getElementById('my-canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.resizeCanvas();\n  }\n\n  Canvas.prototype.resizeCanvas = function () {\n    this.canvas.width = settings_1.settings.canvas.width;\n    this.canvas.height = settings_1.settings.canvas.height;\n    this.addEventListener();\n  };\n\n  Canvas.prototype.addEventListener = function () {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.resizeCanvas();\n    });\n  };\n\n  return Canvas;\n}();\n\nexports.Canvas = Canvas;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ2FudmFzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFJSTtBQUNJLFNBQUtBLE1BQUwsR0FBY0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVcsS0FBS0gsTUFBTCxDQUFZSSxVQUFaLENBQXVCLElBQXZCLENBQVg7QUFDQSxTQUFLQyxZQUFMO0FBQ0g7O0FBQ0RDO0FBQ0ksU0FBS04sTUFBTCxDQUFZTyxLQUFaLEdBQWtCQyxvQkFBU1IsTUFBVCxDQUFnQk8sS0FBbEM7QUFDQSxTQUFLUCxNQUFMLENBQVlTLE1BQVosR0FBbUJELG9CQUFTUixNQUFULENBQWdCUyxNQUFuQztBQUNBLFNBQUtDLGdCQUFMO0FBQ0gsR0FKRDs7QUFLQUo7QUFBQTs7QUFDSUssVUFBTSxDQUFDRCxnQkFBUCxDQUF3QixRQUF4QixFQUFpQztBQUM3QkUsV0FBSSxDQUFDUCxZQUFMO0FBQ0gsS0FGRDtBQUdILEdBSkQ7O0FBS0o7QUFBQyxDQW5CRDs7QUFBYVEsY0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL0NhbnZhcy50cz84NWE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFze1xyXG4gICAgY2FudmFzOkhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgY3R4IDpDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMucmVzaXplQ2FudmFzKCk7XHJcbiAgICB9XHJcbiAgICByZXNpemVDYW52YXMoKXtcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aD1zZXR0aW5ncy5jYW52YXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0PXNldHRpbmdzLmNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCk7XHJcbiAgICB9XHJcbiAgICBhZGRFdmVudExpc3RlbmVyKCl7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKCk9PntcclxuICAgICAgICAgICAgdGhpcy5yZXNpemVDYW52YXMoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwicmVzaXplQ2FudmFzIiwiQ2FudmFzIiwid2lkdGgiLCJzZXR0aW5nc18xIiwiaGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsIl90aGlzIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Canvas.ts\n");

/***/ }),

/***/ "./src/ts/Game.ts":
/*!************************!*\
  !*** ./src/ts/Game.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Game = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar Game = function () {\n  function Game() {\n    this.canvas = document.getElementById('my-canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.height = settings_1.settings.player.height;\n    this.width = settings_1.settings.player.width;\n    this.radius = settings_1.settings.ball.radius;\n    this.startAngle = settings_1.settings.ball.startAngle;\n    this.endAngle = settings_1.settings.ball.endAngle;\n    this.midLaneWidth = settings_1.settings.midLane.width;\n    this.playerOne = this.drawPlayerOne();\n    this.drawPlayerTwo();\n    this.drawBall();\n    this.drawMidLane();\n    this.mouseMove();\n    this.addEventListener();\n  }\n\n  Game.prototype.drawPlayerOne = function () {\n    this.ctx.fillStyle = 'white';\n    this.ctx.fillRect(this.canvas.width - this.width - this.width, this.canvas.height / 2 - this.height * 0.5, this.width, this.height);\n  };\n\n  Game.prototype.drawPlayerTwo = function () {\n    this.ctx.fillStyle = 'white';\n    this.ctx.beginPath();\n    this.ctx.fillRect(this.width, this.canvas.height / 2 - this.height * 0.5, this.width, this.height);\n    this.ctx.closePath();\n  };\n\n  Game.prototype.drawMidLane = function () {\n    this.ctx.fillStyle = 'white';\n    this.ctx.fillRect(this.canvas.width / 2, 0, this.midLaneWidth, this.canvas.height);\n  };\n\n  Game.prototype.drawBall = function () {\n    this.ctx.fillStyle = 'white';\n    this.ctx.arc(0, 0, 50, 0, Math.PI * 2);\n  };\n\n  Game.prototype.mouseMove = function () {\n    window.addEventListener('mousemove', function (e) {\n      console.log(\"pageX :\", e.pageX, \"pageY :\", e.pageY);\n    });\n  };\n\n  Game.prototype.addEventListener = function () {};\n\n  return Game;\n}();\n\nexports.Game = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvR2FtZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBV0k7QUFDSSxTQUFLQSxNQUFMLEdBQWNDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEtBQUtILE1BQUwsQ0FBWUksVUFBWixDQUF1QixJQUF2QixDQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQyxvQkFBU0MsTUFBVCxDQUFnQkYsTUFBOUI7QUFDQSxTQUFLRyxLQUFMLEdBQWFGLG9CQUFTQyxNQUFULENBQWdCQyxLQUE3QjtBQUNBLFNBQUtDLE1BQUwsR0FBY0gsb0JBQVNJLElBQVQsQ0FBY0QsTUFBNUI7QUFDQSxTQUFLRSxVQUFMLEdBQWtCTCxvQkFBU0ksSUFBVCxDQUFjQyxVQUFoQztBQUNBLFNBQUtDLFFBQUwsR0FBZ0JOLG9CQUFTSSxJQUFULENBQWNFLFFBQTlCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQlAsb0JBQVNRLE9BQVQsQ0FBaUJOLEtBQXJDO0FBQ0EsU0FBS08sU0FBTCxHQUFpQixLQUFLQyxhQUFMLEVBQWpCO0FBQ0EsU0FBS0MsYUFBTDtBQUNBLFNBQUtDLFFBQUw7QUFDQSxTQUFLQyxXQUFMO0FBQ0EsU0FBS0MsU0FBTDtBQUNBLFNBQUtDLGdCQUFMO0FBQ0g7O0FBRURDO0FBQ0ksU0FBS25CLEdBQUwsQ0FBU29CLFNBQVQsR0FBbUIsT0FBbkI7QUFDQSxTQUFLcEIsR0FBTCxDQUFTcUIsUUFBVCxDQUFtQixLQUFLeEIsTUFBTCxDQUFZUSxLQUFaLEdBQWtCLEtBQUtBLEtBQXhCLEdBQStCLEtBQUtBLEtBQXRELEVBQTRELEtBQUtSLE1BQUwsQ0FBWUssTUFBWixHQUFtQixDQUFuQixHQUFxQixLQUFLQSxNQUFMLEdBQVksR0FBN0YsRUFBa0csS0FBS0csS0FBdkcsRUFBNkcsS0FBS0gsTUFBbEg7QUFDSCxHQUhEOztBQUtBaUI7QUFDSSxTQUFLbkIsR0FBTCxDQUFTb0IsU0FBVCxHQUFtQixPQUFuQjtBQUNBLFNBQUtwQixHQUFMLENBQVNzQixTQUFUO0FBQ0EsU0FBS3RCLEdBQUwsQ0FBU3FCLFFBQVQsQ0FBa0IsS0FBS2hCLEtBQXZCLEVBQThCLEtBQUtSLE1BQUwsQ0FBWUssTUFBWixHQUFtQixDQUFwQixHQUF1QixLQUFLQSxNQUFMLEdBQVksR0FBaEUsRUFBcUUsS0FBS0csS0FBMUUsRUFBZ0YsS0FBS0gsTUFBckY7QUFDQSxTQUFLRixHQUFMLENBQVN1QixTQUFUO0FBQ0gsR0FMRDs7QUFPQUo7QUFDSSxTQUFLbkIsR0FBTCxDQUFTb0IsU0FBVCxHQUFtQixPQUFuQjtBQUNBLFNBQUtwQixHQUFMLENBQVNxQixRQUFULENBQWtCLEtBQUt4QixNQUFMLENBQVlRLEtBQVosR0FBa0IsQ0FBcEMsRUFBc0MsQ0FBdEMsRUFBd0MsS0FBS0ssWUFBN0MsRUFBMEQsS0FBS2IsTUFBTCxDQUFZSyxNQUF0RTtBQUNILEdBSEQ7O0FBS0FpQjtBQUNJLFNBQUtuQixHQUFMLENBQVNvQixTQUFULEdBQXFCLE9BQXJCO0FBQ0EsU0FBS3BCLEdBQUwsQ0FBU3dCLEdBQVQsQ0FBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixFQUFqQixFQUFvQixDQUFwQixFQUFzQkMsSUFBSSxDQUFDQyxFQUFMLEdBQVEsQ0FBOUI7QUFDSCxHQUhEOztBQUlBUDtBQUNJUSxVQUFNLENBQUNULGdCQUFQLENBQXdCLFdBQXhCLEVBQW9DLFVBQUNVLENBQUQsRUFBRTtBQUNsQ0MsYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkYsQ0FBQyxDQUFDRyxLQUF6QixFQUNZLFNBRFosRUFDdUJILENBQUMsQ0FBQ0ksS0FEekI7QUFFSCxLQUhEO0FBSUgsR0FMRDs7QUFNQWIsaURBRUMsQ0FGRDs7QUFLSjtBQUFDLENBNUREOztBQUFhYyxZQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvR2FtZS50cz85ZGE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICBjYW52YXM6SFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBjdHggOkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIGhlaWdodCA6IG51bWJlcjtcclxuICAgIHdpZHRoIDogbnVtYmVyO1xyXG4gICAgcmFkaXVzIDogbnVtYmVyO1xyXG4gICAgc3RhcnRBbmdsZSA6IG51bWJlcjtcclxuICAgIGVuZEFuZ2xlIDogbnVtYmVyO1xyXG4gICAgbWlkTGFuZVdpZHRoIDogbnVtYmVyO1xyXG4gICAgcGxheWVyT25lIDogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LWNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHNldHRpbmdzLnBsYXllci5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHNldHRpbmdzLnBsYXllci53aWR0aDtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHNldHRpbmdzLmJhbGwucmFkaXVzO1xyXG4gICAgICAgIHRoaXMuc3RhcnRBbmdsZSA9IHNldHRpbmdzLmJhbGwuc3RhcnRBbmdsZTtcclxuICAgICAgICB0aGlzLmVuZEFuZ2xlID0gc2V0dGluZ3MuYmFsbC5lbmRBbmdsZTtcclxuICAgICAgICB0aGlzLm1pZExhbmVXaWR0aCA9IHNldHRpbmdzLm1pZExhbmUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJPbmUgPSB0aGlzLmRyYXdQbGF5ZXJPbmUoKTtcclxuICAgICAgICB0aGlzLmRyYXdQbGF5ZXJUd28oKTtcclxuICAgICAgICB0aGlzLmRyYXdCYWxsKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3TWlkTGFuZSgpO1xyXG4gICAgICAgIHRoaXMubW91c2VNb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1BsYXllck9uZSgpe1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZT0nd2hpdGUnO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KCh0aGlzLmNhbnZhcy53aWR0aC10aGlzLndpZHRoKS10aGlzLndpZHRoLHRoaXMuY2FudmFzLmhlaWdodC8yLXRoaXMuaGVpZ2h0KjAuNSwgdGhpcy53aWR0aCx0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1BsYXllclR3bygpe1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZT0nd2hpdGUnO1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMud2lkdGgsKHRoaXMuY2FudmFzLmhlaWdodC8yKS10aGlzLmhlaWdodCowLjUsIHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdNaWRMYW5lKCl7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlPSd3aGl0ZSc7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy5jYW52YXMud2lkdGgvMiwwLHRoaXMubWlkTGFuZVdpZHRoLHRoaXMuY2FudmFzLmhlaWdodClcclxuICAgIH1cclxuXHJcbiAgICBkcmF3QmFsbCgpe1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKDAsMCw1MCwwLE1hdGguUEkqMik7XHJcbiAgICB9XHJcbiAgICBtb3VzZU1vdmUoKXtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywoZSk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwYWdlWCA6XCIgLGUucGFnZVgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFnZVkgOlwiICxlLnBhZ2VZKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBhZGRFdmVudExpc3RlbmVyKCl7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn0iXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJoZWlnaHQiLCJzZXR0aW5nc18xIiwicGxheWVyIiwid2lkdGgiLCJyYWRpdXMiLCJiYWxsIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwibWlkTGFuZVdpZHRoIiwibWlkTGFuZSIsInBsYXllck9uZSIsImRyYXdQbGF5ZXJPbmUiLCJkcmF3UGxheWVyVHdvIiwiZHJhd0JhbGwiLCJkcmF3TWlkTGFuZSIsIm1vdXNlTW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJHYW1lIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJiZWdpblBhdGgiLCJjbG9zZVBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJ3aW5kb3ciLCJlIiwiY29uc29sZSIsImxvZyIsInBhZ2VYIiwicGFnZVkiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Game.ts\n");

/***/ }),

/***/ "./src/ts/Main.ts":
/*!************************!*\
  !*** ./src/ts/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/ts/Canvas.ts\");\n\nvar Game_1 = __webpack_require__(/*! ./Game */ \"./src/ts/Game.ts\");\n\nvar Main = function () {\n  function Main() {\n    this.canvas = new Canvas_1.Canvas();\n    this.game = new Game_1.Game();\n  }\n\n  return Main;\n}();\n\nnew Main();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBR0E7QUFJSTtBQUNJLFNBQUtBLE1BQUwsR0FBYyxJQUFJQyxlQUFKLEVBQWQ7QUFDQSxTQUFLQyxJQUFMLEdBQVksSUFBSUMsV0FBSixFQUFaO0FBQ0g7O0FBQ0w7QUFBQyxDQVJEOztBQVNBLElBQUlDLElBQUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL01haW4udHM/NDg4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NhbnZhc30gZnJvbSBcIi4vQ2FudmFzXCI7XHJcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4vR2FtZVwiO1xyXG5cclxuXHJcbmNsYXNzIE1haW57XHJcbiAgICBjYW52YXM6Q2FudmFzO1xyXG4gICAgZ2FtZSA6IEdhbWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoKTtcclxuICAgIH1cclxufVxyXG5uZXcgTWFpbigpOyJdLCJuYW1lcyI6WyJjYW52YXMiLCJDYW52YXNfMSIsImdhbWUiLCJHYW1lXzEiLCJNYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Main.ts\n");

/***/ }),

/***/ "./src/ts/settings.ts":
/*!****************************!*\
  !*** ./src/ts/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  canvas: {\n    width: 640,\n    height: 480\n  },\n  player: {\n    height: 100,\n    width: 10\n  },\n  ball: {\n    radius: 5,\n    startAngle: 0,\n    endAngle: Math.PI * 2\n  },\n  midLane: {\n    width: 2\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVTtBQUNuQkMsUUFBTSxFQUFDO0FBQ0hDLFNBQUssRUFBQyxHQURIO0FBRUhDLFVBQU0sRUFBQztBQUZKLEdBRFk7QUFLbkJDLFFBQU0sRUFBQztBQUNIRCxVQUFNLEVBQUMsR0FESjtBQUVIRCxTQUFLLEVBQUU7QUFGSixHQUxZO0FBU25CRyxNQUFJLEVBQUM7QUFDREMsVUFBTSxFQUFHLENBRFI7QUFFREMsY0FBVSxFQUFHLENBRlo7QUFHREMsWUFBUSxFQUFFQyxJQUFJLENBQUNDLEVBQUwsR0FBUTtBQUhqQixHQVRjO0FBY25CQyxTQUFPLEVBQUM7QUFDSlQsU0FBSyxFQUFDO0FBREY7QUFkVyxDQUFWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9zZXR0aW5ncy50cz83NGFhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXR0aW5ncyA9e1xyXG4gICAgY2FudmFzOntcclxuICAgICAgICB3aWR0aDo2NDAsXHJcbiAgICAgICAgaGVpZ2h0OjQ4MCxcclxuICAgIH0sXHJcbiAgICBwbGF5ZXI6e1xyXG4gICAgICAgIGhlaWdodDoxMDAsXHJcbiAgICAgICAgd2lkdGg6IDEwLFxyXG4gICAgfSxcclxuICAgIGJhbGw6e1xyXG4gICAgICAgIHJhZGl1cyA6IDUsXHJcbiAgICAgICAgc3RhcnRBbmdsZSA6IDAsXHJcbiAgICAgICAgZW5kQW5nbGU6IE1hdGguUEkqMixcclxuICAgIH0sXHJcbiAgICBtaWRMYW5lOntcclxuICAgICAgICB3aWR0aDoyLFxyXG5cclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJleHBvcnRzIiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJwbGF5ZXIiLCJiYWxsIiwicmFkaXVzIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiTWF0aCIsIlBJIiwibWlkTGFuZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/settings.ts\n");

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