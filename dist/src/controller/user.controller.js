"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserId = void 0;
const UserId = (req, res) => {
    try {
        const user = req.auth;
        res.status(200).json({
            message: "UserId successfully recived.",
            user,
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Error in getting userID",
        });
    }
};
exports.UserId = UserId;
