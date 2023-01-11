"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Admin = new mongoose_1.Schema({
    email: {
        type: String,
        lowercase: true,
        trim: true,
        default: null
    },
    password: {
        type: String,
        default: null
    },
    name: {
        type: String,
        default: null
    },
    passwordChangedAt: {
        type: Date,
    },
    createdBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Admin',
        default: null
    },
    role: {
        type: Number,
        enum: [1, 2] // 1= admin , 2= user
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
exports.default = (0, mongoose_1.model)('Admin', Admin);
