"use strict";
exports.__esModule = true;
var timestamp_service_1 = require("./timestamp.service");
var TimestampController = {
    getNow: function (req, res) {
        res.json(timestamp_service_1["default"].getTimestamp(''));
    },
    getFromParam: function (req, res) {
        try {
            res.json(timestamp_service_1["default"].getTimestamp(req.params.date));
        }
        catch (e) {
            res.json({ error: e.message });
        }
    }
};
exports["default"] = TimestampController;
