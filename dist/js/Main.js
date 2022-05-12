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

/***/ "./src/ts/Animate.ts":
/*!***************************!*\
  !*** ./src/ts/Animate.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Animate = void 0;\n\nvar PlayerOne_1 = __webpack_require__(/*! ./PlayerOne */ \"./src/ts/PlayerOne.ts\");\n\nvar PlayerTwo_1 = __webpack_require__(/*! ./PlayerTwo */ \"./src/ts/PlayerTwo.ts\");\n\nvar Ball_1 = __webpack_require__(/*! ./Ball */ \"./src/ts/Ball.ts\");\n\nvar Animate = function () {\n  function Animate() {\n    this.canvas = document.getElementById('my-canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.playerOne = new PlayerOne_1.PlayerOne();\n    this.playerTwo = new PlayerTwo_1.PlayerTwo();\n    this.ball = new Ball_1.Ball();\n    this.playerTwoY = this.canvas.height / 2 - this.playerTwo.height * 0.5;\n  }\n\n  return Animate;\n}();\n\nexports.Animate = Animate;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQW5pbWF0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBO0FBUUk7QUFDSSxTQUFLQSxNQUFMLEdBQWNDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEtBQUtILE1BQUwsQ0FBWUksVUFBWixDQUF1QixJQUF2QixDQUFYO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixJQUFJQyxxQkFBSixFQUFqQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsSUFBSUMscUJBQUosRUFBakI7QUFDQSxTQUFLQyxJQUFMLEdBQVksSUFBSUMsV0FBSixFQUFaO0FBQ0EsU0FBS0MsVUFBTCxHQUFtQixLQUFLWCxNQUFMLENBQVlZLE1BQVosR0FBbUIsQ0FBcEIsR0FBdUIsS0FBS0wsU0FBTCxDQUFlSyxNQUFmLEdBQXNCLEdBQS9EO0FBQ0g7O0FBQ0w7QUFBQyxDQWhCRDs7QUFBYUMsZUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL0FuaW1hdGUudHM/YTc2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BsYXllck9uZX0gZnJvbSBcIi4vUGxheWVyT25lXCI7XHJcbmltcG9ydCB7UGxheWVyVHdvfSBmcm9tIFwiLi9QbGF5ZXJUd29cIjtcclxuaW1wb3J0IHtCYWxsfSBmcm9tIFwiLi9CYWxsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0ZXtcclxuICAgIGNhbnZhczpIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIGN0eCA6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgcGxheWVyT25lIDogUGxheWVyT25lO1xyXG4gICAgcGxheWVyVHdvIDogUGxheWVyVHdvO1xyXG4gICAgYmFsbCA6IEJhbGw7XHJcbiAgICBwbGF5ZXJUd29ZOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMucGxheWVyT25lID0gbmV3IFBsYXllck9uZSgpO1xyXG4gICAgICAgIHRoaXMucGxheWVyVHdvID0gbmV3IFBsYXllclR3bygpO1xyXG4gICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJUd29ZID0gKHRoaXMuY2FudmFzLmhlaWdodC8yKS10aGlzLnBsYXllclR3by5oZWlnaHQqMC41O1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwicGxheWVyT25lIiwiUGxheWVyT25lXzEiLCJwbGF5ZXJUd28iLCJQbGF5ZXJUd29fMSIsImJhbGwiLCJCYWxsXzEiLCJwbGF5ZXJUd29ZIiwiaGVpZ2h0IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Animate.ts\n");

/***/ }),

/***/ "./src/ts/Ball.ts":
/*!************************!*\
  !*** ./src/ts/Ball.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Ball = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar Ball = function () {\n  function Ball() {\n    this.canvas = document.getElementById('my-canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.radius = settings_1.settings.ball.radius;\n    this.ballX = this.canvas.width / 2;\n    this.ballY = this.canvas.height / 2;\n    this.startAngle = settings_1.settings.ball.startAngle;\n    this.endAngle = settings_1.settings.ball.endAngle;\n    this.speedY = settings_1.settings.ball.speedY;\n    this.speedX = settings_1.settings.ball.speedX;\n    this.drawBall();\n    this.animate();\n  }\n\n  Ball.prototype.drawBall = function () {\n    this.ctx.fillStyle = 'white';\n    this.ctx.arc(this.ballX, this.ballY, this.radius, this.startAngle, this.endAngle);\n    this.ctx.fill();\n  };\n\n  Ball.prototype.animate = function () {\n    var _this = this;\n\n    this.ballX += this.speedX;\n    window.requestAnimationFrame(function () {\n      _this.animate();\n    });\n    this.drawBall();\n  };\n\n  return Ball;\n}();\n\nexports.Ball = Ball;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQmFsbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBO0FBV0k7QUFDSSxTQUFLQSxNQUFMLEdBQWNDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEtBQUtILE1BQUwsQ0FBWUksVUFBWixDQUF1QixJQUF2QixDQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQyxvQkFBU0MsSUFBVCxDQUFjRixNQUE1QjtBQUNBLFNBQUtHLEtBQUwsR0FBYSxLQUFLUixNQUFMLENBQVlTLEtBQVosR0FBa0IsQ0FBL0I7QUFDQSxTQUFLQyxLQUFMLEdBQWEsS0FBS1YsTUFBTCxDQUFZVyxNQUFaLEdBQW1CLENBQWhDO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQk4sb0JBQVNDLElBQVQsQ0FBY0ssVUFBaEM7QUFDQSxTQUFLQyxRQUFMLEdBQWdCUCxvQkFBU0MsSUFBVCxDQUFjTSxRQUE5QjtBQUNBLFNBQUtDLE1BQUwsR0FBYVIsb0JBQVNDLElBQVQsQ0FBY08sTUFBM0I7QUFDQSxTQUFLQyxNQUFMLEdBQVlULG9CQUFTQyxJQUFULENBQWNRLE1BQTFCO0FBQ0EsU0FBS0MsUUFBTDtBQUNBLFNBQUtDLE9BQUw7QUFLSDs7QUFDREM7QUFDSSxTQUFLZixHQUFMLENBQVNnQixTQUFULEdBQXFCLE9BQXJCO0FBQ0EsU0FBS2hCLEdBQUwsQ0FBU2lCLEdBQVQsQ0FBYSxLQUFLWixLQUFsQixFQUF3QixLQUFLRSxLQUE3QixFQUFtQyxLQUFLTCxNQUF4QyxFQUErQyxLQUFLTyxVQUFwRCxFQUErRCxLQUFLQyxRQUFwRTtBQUNBLFNBQUtWLEdBQUwsQ0FBU2tCLElBQVQ7QUFDSCxHQUpEOztBQXlCQUg7QUFBQTs7QUFDSSxTQUFLVixLQUFMLElBQVksS0FBS08sTUFBakI7QUFDQU8sVUFBTSxDQUFDQyxxQkFBUCxDQUE2QjtBQUN6QkMsV0FBSSxDQUFDUCxPQUFMO0FBQ0gsS0FGRDtBQUdBLFNBQUtELFFBQUw7QUFDSCxHQU5EOztBQU9KO0FBQUMsQ0E1REQ7O0FBQWFTLFlBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9CYWxsLnRzPzBmODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuZXhwb3J0IGNsYXNzIEJhbGx7XHJcbiAgICBjYW52YXM6SFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBjdHggOkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIGJhbGxYIDogbnVtYmVyO1xyXG4gICAgYmFsbFkgOiBudW1iZXI7XHJcbiAgICByYWRpdXMgOiBudW1iZXI7XHJcbiAgICBzdGFydEFuZ2xlIDogbnVtYmVyO1xyXG4gICAgZW5kQW5nbGUgOiBudW1iZXI7XHJcbiAgICBzcGVlZFkgOiBudW1iZXI7XHJcbiAgICBzcGVlZFggOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gc2V0dGluZ3MuYmFsbC5yYWRpdXM7XHJcbiAgICAgICAgdGhpcy5iYWxsWCA9IHRoaXMuY2FudmFzLndpZHRoLzI7XHJcbiAgICAgICAgdGhpcy5iYWxsWSA9IHRoaXMuY2FudmFzLmhlaWdodC8yO1xyXG4gICAgICAgIHRoaXMuc3RhcnRBbmdsZSA9IHNldHRpbmdzLmJhbGwuc3RhcnRBbmdsZTtcclxuICAgICAgICB0aGlzLmVuZEFuZ2xlID0gc2V0dGluZ3MuYmFsbC5lbmRBbmdsZTtcclxuICAgICAgICB0aGlzLnNwZWVkWT0gc2V0dGluZ3MuYmFsbC5zcGVlZFk7XHJcbiAgICAgICAgdGhpcy5zcGVlZFg9c2V0dGluZ3MuYmFsbC5zcGVlZFg7XHJcbiAgICAgICAgdGhpcy5kcmF3QmFsbCgpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xyXG5cclxuLypcclxuICAgICAgICB0aGlzLmJhbGxCb3VuY2UoKTtcclxuKi9cclxuICAgIH1cclxuICAgIGRyYXdCYWxsKCl7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3doaXRlJztcclxuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy5iYWxsWCx0aGlzLmJhbGxZLHRoaXMucmFkaXVzLHRoaXMuc3RhcnRBbmdsZSx0aGlzLmVuZEFuZ2xlKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcbi8qICAgIGJhbGxCb3VuY2UoKXtcclxuICAgICAgICBpZiAodGhpcy5iYWxsWSt0aGlzLnNwZWVkWSA8PSAwIHx8IHRoaXMuYmFsbFkgKyB0aGlzLnNwZWVkWSA+PSB0aGlzLmNhbnZhcy5oZWlnaHQpe1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkWSA9IC10aGlzLnNwZWVkWTtcclxuICAgICAgICAgICAgdGhpcy5iYWxsWSA9IHRoaXMuc3BlZWRZO1xyXG4gICAgICAgICAgICB0aGlzLmJhbGxYID10aGlzLnNwZWVkWDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5iYWxsWSArPXRoaXMuc3BlZWRZO1xyXG4gICAgICAgICAgICB0aGlzLmJhbGxYICs9IHRoaXMuc3BlZWRYO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJhbGxDb2xsaXNpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBiYWxsQ29sbGlzaW9uKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuYmFsbFgrdGhpcy5zcGVlZFggPD0wIHx8IHRoaXMuYmFsbFgrdGhpcy5zcGVlZFggPj0gdGhpcy5jYW52YXMud2lkdGgpe1xyXG4gICAgICAgICAgICB0aGlzLmJhbGxZKz0gdGhpcy5zcGVlZFk7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRYID0gLXRoaXMuc3BlZWRYO1xyXG4gICAgICAgICAgICB0aGlzLmJhbGxYICs9IHRoaXMuc3BlZWRYO1xyXG4gICAgICAgIH1cclxuICAgIH0qL1xyXG5cclxuICAgIGFuaW1hdGUoKXtcclxuICAgICAgICB0aGlzLmJhbGxYKz10aGlzLnNwZWVkWDtcclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5kcmF3QmFsbCgpO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwicmFkaXVzIiwic2V0dGluZ3NfMSIsImJhbGwiLCJiYWxsWCIsIndpZHRoIiwiYmFsbFkiLCJoZWlnaHQiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJzcGVlZFkiLCJzcGVlZFgiLCJkcmF3QmFsbCIsImFuaW1hdGUiLCJCYWxsIiwiZmlsbFN0eWxlIiwiYXJjIiwiZmlsbCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl90aGlzIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Ball.ts\n");

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

eval("\n\nexports.__esModule = true;\n\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/ts/Canvas.ts\");\n\nvar Ball_1 = __webpack_require__(/*! ./Ball */ \"./src/ts/Ball.ts\");\n\nvar Animate_1 = __webpack_require__(/*! ./Animate */ \"./src/ts/Animate.ts\");\n\nvar Score_1 = __webpack_require__(/*! ./Score */ \"./src/ts/Score.ts\");\n\nvar Main = function () {\n  function Main() {\n    this.canvas = new Canvas_1.Canvas();\n    this.ball = new Ball_1.Ball();\n    this.animate = new Animate_1.Animate();\n    this.score = new Score_1.Score();\n  }\n\n  return Main;\n}();\n\nnew Main();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBR0E7QUFNSTtBQUNJLFNBQUtBLE1BQUwsR0FBYyxJQUFJQyxlQUFKLEVBQWQ7QUFDQSxTQUFLQyxJQUFMLEdBQVksSUFBSUMsV0FBSixFQUFaO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLElBQUlDLGlCQUFKLEVBQWY7QUFDQSxTQUFLQyxLQUFMLEdBQWEsSUFBSUMsYUFBSixFQUFiO0FBQ0g7O0FBQ0w7QUFBQyxDQVpEOztBQWFBLElBQUlDLElBQUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL01haW4udHM/NDg4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NhbnZhc30gZnJvbSBcIi4vQ2FudmFzXCI7XHJcbmltcG9ydCB7UGxheWVyVHdvfSBmcm9tIFwiLi9QbGF5ZXJUd29cIjtcclxuaW1wb3J0IHtQbGF5ZXJPbmV9IGZyb20gXCIuL1BsYXllck9uZVwiO1xyXG5pbXBvcnQge0JhbGx9IGZyb20gXCIuL0JhbGxcIjtcclxuaW1wb3J0IHtBbmltYXRlfSBmcm9tIFwiLi9BbmltYXRlXCI7XHJcbmltcG9ydCB7U2NvcmV9IGZyb20gXCIuL1Njb3JlXCI7XHJcblxyXG5cclxuY2xhc3MgTWFpbntcclxuICAgIGNhbnZhczpDYW52YXM7XHJcbiAgICBhbmltYXRlIDogQW5pbWF0ZTtcclxuICAgIGJhbGw6IEJhbGw7XHJcbiAgICBzY29yZSA6IFNjb3JlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcygpO1xyXG4gICAgICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlID0gbmV3IEFuaW1hdGUoKTtcclxuICAgICAgICB0aGlzLnNjb3JlID0gbmV3IFNjb3JlKCk7XHJcbiAgICB9XHJcbn1cclxubmV3IE1haW4oKTsiXSwibmFtZXMiOlsiY2FudmFzIiwiQ2FudmFzXzEiLCJiYWxsIiwiQmFsbF8xIiwiYW5pbWF0ZSIsIkFuaW1hdGVfMSIsInNjb3JlIiwiU2NvcmVfMSIsIk1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Main.ts\n");

/***/ }),

/***/ "./src/ts/PlayerOne.ts":
/*!*****************************!*\
  !*** ./src/ts/PlayerOne.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.PlayerOne = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar PlayerOne = function () {\n  function PlayerOne() {\n    this.canvas = document.getElementById('my-canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.height = settings_1.settings.player.height;\n    this.width = settings_1.settings.player.width;\n    this.playerOneY = this.canvas.height / 2 - this.height * 0.5;\n    this.drawPlayerOne();\n    this.addEventListener();\n  }\n\n  PlayerOne.prototype.drawPlayerOne = function () {\n    this.ctx.fillStyle = 'white';\n    this.ctx.fillRect(this.canvas.width - this.width - this.width, this.canvas.height / 2 - this.height * 0.5, this.width, this.height);\n  };\n\n  PlayerOne.prototype.addEventListener = function () {\n    var _this = this;\n\n    window.addEventListener(\"keypress\", function (e) {\n      if (e.key === \"z\") {\n        _this.playerOneY += 3;\n        console.log(\"test\");\n      }\n    });\n  };\n\n  return PlayerOne;\n}();\n\nexports.PlayerOne = PlayerOne;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvUGxheWVyT25lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFRSTtBQUNJLFNBQUtBLE1BQUwsR0FBY0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVcsS0FBS0gsTUFBTCxDQUFZSSxVQUFaLENBQXVCLElBQXZCLENBQVg7QUFDQSxTQUFLQyxNQUFMLEdBQWNDLG9CQUFTQyxNQUFULENBQWdCRixNQUE5QjtBQUNBLFNBQUtHLEtBQUwsR0FBYUYsb0JBQVNDLE1BQVQsQ0FBZ0JDLEtBQTdCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixLQUFLVCxNQUFMLENBQVlLLE1BQVosR0FBbUIsQ0FBbkIsR0FBcUIsS0FBS0EsTUFBTCxHQUFZLEdBQW5EO0FBQ0EsU0FBS0ssYUFBTDtBQUNBLFNBQUtDLGdCQUFMO0FBQ0g7O0FBQ0RDO0FBQ0ksU0FBS1QsR0FBTCxDQUFTVSxTQUFULEdBQW1CLE9BQW5CO0FBQ0EsU0FBS1YsR0FBTCxDQUFTVyxRQUFULENBQW1CLEtBQUtkLE1BQUwsQ0FBWVEsS0FBWixHQUFrQixLQUFLQSxLQUF4QixHQUErQixLQUFLQSxLQUF0RCxFQUE0RCxLQUFLUixNQUFMLENBQVlLLE1BQVosR0FBbUIsQ0FBbkIsR0FBcUIsS0FBS0EsTUFBTCxHQUFZLEdBQTdGLEVBQWtHLEtBQUtHLEtBQXZHLEVBQTZHLEtBQUtILE1BQWxIO0FBQ0gsR0FIRDs7QUFLQU87QUFBQTs7QUFDSUcsVUFBTSxDQUFDSixnQkFBUCxDQUF3QixVQUF4QixFQUFtQyxVQUFDSyxDQUFELEVBQUU7QUFDakMsVUFBSUEsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsR0FBZCxFQUFrQjtBQUNkQyxhQUFJLENBQUNULFVBQUwsSUFBbUIsQ0FBbkI7QUFDQVUsZUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNIO0FBQ0osS0FMRDtBQU1ILEdBUEQ7O0FBUUo7QUFBQyxDQTlCRDs7QUFBYUMsaUJBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9QbGF5ZXJPbmUudHM/MjQwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllck9uZSB7XHJcbiAgICBjYW52YXM6SFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBjdHggOkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIGhlaWdodCA6IG51bWJlcjtcclxuICAgIHdpZHRoIDogbnVtYmVyO1xyXG4gICAgcGxheWVyT25lWTogbnVtYmVyO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBzZXR0aW5ncy5wbGF5ZXIuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBzZXR0aW5ncy5wbGF5ZXIud2lkdGg7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJPbmVZID0gdGhpcy5jYW52YXMuaGVpZ2h0LzItdGhpcy5oZWlnaHQqMC41O1xyXG4gICAgICAgIHRoaXMuZHJhd1BsYXllck9uZSgpO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG4gICAgZHJhd1BsYXllck9uZSgpe1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZT0nd2hpdGUnO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KCh0aGlzLmNhbnZhcy53aWR0aC10aGlzLndpZHRoKS10aGlzLndpZHRoLHRoaXMuY2FudmFzLmhlaWdodC8yLXRoaXMuaGVpZ2h0KjAuNSwgdGhpcy53aWR0aCx0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcigpe1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwoZSk9PntcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcInpcIil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllck9uZVkgKz0gMztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVzdFwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImhlaWdodCIsInNldHRpbmdzXzEiLCJwbGF5ZXIiLCJ3aWR0aCIsInBsYXllck9uZVkiLCJkcmF3UGxheWVyT25lIiwiYWRkRXZlbnRMaXN0ZW5lciIsIlBsYXllck9uZSIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwid2luZG93IiwiZSIsImtleSIsIl90aGlzIiwiY29uc29sZSIsImxvZyIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/PlayerOne.ts\n");

/***/ }),

/***/ "./src/ts/PlayerTwo.ts":
/*!*****************************!*\
  !*** ./src/ts/PlayerTwo.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.PlayerTwo = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar PlayerTwo = function () {\n  function PlayerTwo() {\n    this.canvas = document.getElementById('my-canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.height = settings_1.settings.player.height;\n    this.width = settings_1.settings.player.width;\n    this.drawPlayerTwo();\n  }\n\n  PlayerTwo.prototype.drawPlayerTwo = function () {\n    this.ctx.fillStyle = 'white';\n    this.ctx.beginPath();\n    this.ctx.fillRect(this.width, this.canvas.height / 2 - this.height * 0.5, this.width, this.height);\n    this.ctx.closePath();\n  };\n\n  return PlayerTwo;\n}();\n\nexports.PlayerTwo = PlayerTwo;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvUGxheWVyVHdvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBR0E7QUFNSTtBQUNJLFNBQUtBLE1BQUwsR0FBY0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVcsS0FBS0gsTUFBTCxDQUFZSSxVQUFaLENBQXVCLElBQXZCLENBQVg7QUFDQSxTQUFLQyxNQUFMLEdBQWNDLG9CQUFTQyxNQUFULENBQWdCRixNQUE5QjtBQUNBLFNBQUtHLEtBQUwsR0FBYUYsb0JBQVNDLE1BQVQsQ0FBZ0JDLEtBQTdCO0FBQ0EsU0FBS0MsYUFBTDtBQUNIOztBQUNEQztBQUNJLFNBQUtQLEdBQUwsQ0FBU1EsU0FBVCxHQUFtQixPQUFuQjtBQUNBLFNBQUtSLEdBQUwsQ0FBU1MsU0FBVDtBQUNBLFNBQUtULEdBQUwsQ0FBU1UsUUFBVCxDQUFrQixLQUFLTCxLQUF2QixFQUE4QixLQUFLUixNQUFMLENBQVlLLE1BQVosR0FBbUIsQ0FBcEIsR0FBdUIsS0FBS0EsTUFBTCxHQUFZLEdBQWhFLEVBQXFFLEtBQUtHLEtBQTFFLEVBQWdGLEtBQUtILE1BQXJGO0FBQ0EsU0FBS0YsR0FBTCxDQUFTVyxTQUFUO0FBQ0gsR0FMRDs7QUFhSjtBQUFDLENBMUJEOztBQUFhQyxpQkFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL1BsYXllclR3by50cz83MWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7UGxheWVyT25lfSBmcm9tIFwiLi9QbGF5ZXJPbmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJUd28ge1xyXG4gICAgY2FudmFzOkhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgY3R4IDpDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBoZWlnaHQgOiBudW1iZXI7XHJcbiAgICB3aWR0aCA6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBzZXR0aW5ncy5wbGF5ZXIuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBzZXR0aW5ncy5wbGF5ZXIud2lkdGg7XHJcbiAgICAgICAgdGhpcy5kcmF3UGxheWVyVHdvKCk7XHJcbiAgICB9XHJcbiAgICBkcmF3UGxheWVyVHdvKCl7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlPSd3aGl0ZSc7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy53aWR0aCwodGhpcy5jYW52YXMuaGVpZ2h0LzIpLXRoaXMuaGVpZ2h0KjAuNSwgdGhpcy53aWR0aCx0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICB9XHJcblxyXG4vKiAgICBhZGRFdmVudExpc3RlbmVyKCl7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLChlKT0+e1xyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwielwiKXtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9Ki9cclxufSJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImhlaWdodCIsInNldHRpbmdzXzEiLCJwbGF5ZXIiLCJ3aWR0aCIsImRyYXdQbGF5ZXJUd28iLCJQbGF5ZXJUd28iLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJmaWxsUmVjdCIsImNsb3NlUGF0aCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/PlayerTwo.ts\n");

/***/ }),

/***/ "./src/ts/Score.ts":
/*!*************************!*\
  !*** ./src/ts/Score.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Score = void 0;\n\nvar Score = function () {\n  function Score() {\n    this.canvas = document.getElementById('my-canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.scoreOne = 0;\n    this.scoreTwo = 0;\n    this.displayScoreOne();\n    this.displayScoreTwo();\n  }\n\n  Score.prototype.displayScoreOne = function () {\n    this.ctx.font = \"16px Arial\";\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillText(this.scoreOne, this.canvas.width / 2 - 60, 30);\n  };\n\n  Score.prototype.displayScoreTwo = function () {\n    this.ctx.font = \"16px Arial\";\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillText(this.scoreTwo, this.canvas.width / 2 + 60, 30);\n  };\n\n  return Score;\n}();\n\nexports.Score = Score;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvU2NvcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQU1JO0FBQ0ksU0FBS0EsTUFBTCxHQUFjQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBZDtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFLSCxNQUFMLENBQVlJLFVBQVosQ0FBdUIsSUFBdkIsQ0FBWDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBS0MsZUFBTDtBQUNBLFNBQUtDLGVBQUw7QUFDSDs7QUFFREM7QUFDSSxTQUFLTixHQUFMLENBQVNPLElBQVQsR0FBZ0IsWUFBaEI7QUFDQSxTQUFLUCxHQUFMLENBQVNRLFNBQVQsR0FBb0IsT0FBcEI7QUFDQSxTQUFLUixHQUFMLENBQVNTLFFBQVQsQ0FBa0IsS0FBS1AsUUFBdkIsRUFBZ0MsS0FBS0wsTUFBTCxDQUFZYSxLQUFaLEdBQWtCLENBQWxCLEdBQXFCLEVBQXJELEVBQXdELEVBQXhEO0FBQ0gsR0FKRDs7QUFLQUo7QUFDSSxTQUFLTixHQUFMLENBQVNPLElBQVQsR0FBZ0IsWUFBaEI7QUFDQSxTQUFLUCxHQUFMLENBQVNRLFNBQVQsR0FBb0IsT0FBcEI7QUFDQSxTQUFLUixHQUFMLENBQVNTLFFBQVQsQ0FBa0IsS0FBS04sUUFBdkIsRUFBZ0MsS0FBS04sTUFBTCxDQUFZYSxLQUFaLEdBQWtCLENBQWxCLEdBQXFCLEVBQXJELEVBQXdELEVBQXhEO0FBQ0gsR0FKRDs7QUFLSjtBQUFDLENBekJEOztBQUFhQyxhQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvU2NvcmUudHM/NTJhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU2NvcmV7XHJcbiAgICBjYW52YXM6SFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBjdHggOkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHNjb3JlT25lIDogYW55O1xyXG4gICAgc2NvcmVUd28gOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVPbmUgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmVUd28gPSAwO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheVNjb3JlT25lKCk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5U2NvcmVUd28oKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5U2NvcmVPbmUoKXtcclxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIxNnB4IEFyaWFsXCI7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID1cIndoaXRlXCI7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQodGhpcy5zY29yZU9uZSx0aGlzLmNhbnZhcy53aWR0aC8yIC02MCwzMCk7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5U2NvcmVUd28oKXtcclxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIxNnB4IEFyaWFsXCI7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID1cIndoaXRlXCI7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQodGhpcy5zY29yZVR3byx0aGlzLmNhbnZhcy53aWR0aC8yICs2MCwzMCk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJzY29yZU9uZSIsInNjb3JlVHdvIiwiZGlzcGxheVNjb3JlT25lIiwiZGlzcGxheVNjb3JlVHdvIiwiU2NvcmUiLCJmb250IiwiZmlsbFN0eWxlIiwiZmlsbFRleHQiLCJ3aWR0aCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Score.ts\n");

/***/ }),

/***/ "./src/ts/settings.ts":
/*!****************************!*\
  !*** ./src/ts/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  canvas: {\n    width: 640,\n    height: 480\n  },\n  player: {\n    height: 100,\n    width: 10\n  },\n  ball: {\n    radius: 5,\n    startAngle: 0,\n    endAngle: Math.PI * 2,\n    speedX: 1,\n    speedY: 1\n  },\n  midLane: {\n    width: 2\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVTtBQUNuQkMsUUFBTSxFQUFDO0FBQ0hDLFNBQUssRUFBQyxHQURIO0FBRUhDLFVBQU0sRUFBQztBQUZKLEdBRFk7QUFLbkJDLFFBQU0sRUFBQztBQUNIRCxVQUFNLEVBQUMsR0FESjtBQUVIRCxTQUFLLEVBQUU7QUFGSixHQUxZO0FBU25CRyxNQUFJLEVBQUM7QUFDREMsVUFBTSxFQUFHLENBRFI7QUFFREMsY0FBVSxFQUFHLENBRlo7QUFHREMsWUFBUSxFQUFFQyxJQUFJLENBQUNDLEVBQUwsR0FBUSxDQUhqQjtBQUlEQyxVQUFNLEVBQUcsQ0FKUjtBQUtEQyxVQUFNLEVBQUc7QUFMUixHQVRjO0FBZ0JuQkMsU0FBTyxFQUFDO0FBQ0pYLFNBQUssRUFBQztBQURGO0FBaEJXLENBQVYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL3NldHRpbmdzLnRzPzc0YWEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNldHRpbmdzID17XHJcbiAgICBjYW52YXM6e1xyXG4gICAgICAgIHdpZHRoOjY0MCxcclxuICAgICAgICBoZWlnaHQ6NDgwLFxyXG4gICAgfSxcclxuICAgIHBsYXllcjp7XHJcbiAgICAgICAgaGVpZ2h0OjEwMCxcclxuICAgICAgICB3aWR0aDogMTAsXHJcbiAgICB9LFxyXG4gICAgYmFsbDp7XHJcbiAgICAgICAgcmFkaXVzIDogNSxcclxuICAgICAgICBzdGFydEFuZ2xlIDogMCxcclxuICAgICAgICBlbmRBbmdsZTogTWF0aC5QSSoyLFxyXG4gICAgICAgIHNwZWVkWCA6IDEsXHJcbiAgICAgICAgc3BlZWRZIDogMSxcclxuICAgIH0sXHJcbiAgICBtaWRMYW5lOntcclxuICAgICAgICB3aWR0aDoyLFxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImV4cG9ydHMiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsInBsYXllciIsImJhbGwiLCJyYWRpdXMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJNYXRoIiwiUEkiLCJzcGVlZFgiLCJzcGVlZFkiLCJtaWRMYW5lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/settings.ts\n");

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