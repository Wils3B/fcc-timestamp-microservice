"use strict";
exports.__esModule = true;
var express_1 = require("express");
var timestamp_controller_1 = require("./timestamp.controller");
var TimestampRouter = (0, express_1.Router)();
TimestampRouter.get('/', timestamp_controller_1["default"].getNow);
TimestampRouter.get('/:date', timestamp_controller_1["default"].getFromParam);
exports["default"] = TimestampRouter;
