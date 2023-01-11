"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: './.env' });
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Env_1 = require("./environments/Env");
const routes_1 = require("./routes/routes");
const LoggingService_1 = require("./services/Logger/LoggingService");
class Server {
    constructor() {
        this.app = express();
        this.setConfigurations();
        this.error404Handler();
        this.handleErrors();
    }
    setConfigurations() {
        this.setMongodb();
        this.enableCors();
        this.configBodyParser();
        this.setRoutes();
    }
    setMongodb() {
        mongoose.connect((0, Env_1.env)().dbUrl, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Database Connected");
        }).catch((e) => {
            console.log(e);
            console.log('failed');
        });
    }
    enableCors() {
        this.app.use(cors({
            origin: true,
            credentials: true
        }));
    }
    configBodyParser() {
        this.app.use(express.urlencoded({ extended: true, limit: '10mb' }));
        this.app.use(express.json({ limit: '10mb' }));
    }
    setRoutes() {
        this.app.use((req, res, next) => {
            res.startTime = new Date().getTime();
            res.api = req.url;
            res.method = req.method;
            console.log(req.url);
            next();
        });
        this.app.use('/api-doc', express.static(path.resolve(process.cwd() + '/assets/apidoc/')));
        this.app.use('/api/documents', express.static('./assets/images/'));
        this.app.use('/api/v1', routes_1.default);
    }
    error404Handler() {
        this.app.use((req, res) => {
            res.status(404).json({
                message: 'Route not found test',
                status: 404
            });
        });
    }
    handleErrors() {
        this.app.use((error, req, res, next) => {
            LoggingService_1.Logger.exceptions(error, req);
            const errorStatus = req.errorStatus;
            res.status(errorStatus || 500).json({
                message: error.message || 'Something went wrong!!',
                // statusText: error.statusText || "ERROR",
                statusText: 'Error',
                status: errorStatus || 500,
                data: {}
            });
        });
    }
}
exports.default = new Server().app;
