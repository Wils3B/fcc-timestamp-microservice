"use strict";
exports.__esModule = true;
var TimestampService = {
    getTimestamp: function (timestamp) {
        var date = "".concat(Number(timestamp)) === timestamp ? Number(timestamp) : timestamp;
        var parsedDate = new Date(date);
        if (parsedDate.toString() === 'Invalid Date') {
            throw new Error('Invalid Date');
        }
        return {
            unix: parsedDate.getTime(),
            utc: parsedDate.toUTCString()
        };
    }
};
exports["default"] = TimestampService;
