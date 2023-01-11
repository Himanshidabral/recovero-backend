"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
function env() {
    var _a;
    return {
        nodeEnv: process.env.NODE_ENV,
        apiKey: process.env.MOBILE_ENCRYPTION_KEY,
        dbUrl: (_a = process.env.DB_URL) !== null && _a !== void 0 ? _a : '',
        jwtSecret: process.env.JWT_SECRET,
        jwtExpiresIn: process.env.JWT_EXPIRES_IN,
        awsAccessKey: process.env.ACCESS_KEY,
        awsSecretKey: process.env.SECRET_KEY,
        s3Bucket: process.env.S3_BUCKET,
        s3AssetUrl: process.env.S3_ASSET_URL,
        awsRegion: process.env.AWS_REGION,
        baseUrl: process.env.BASE_URL,
        mailFrom: process.env.MAIL_FROM,
        sendGridApiKey: process.env.SENDGRID_API_KEY,
        assetUrl: process.env.ASSET_URL,
        mailTo: process.env.MAIL_TO
    };
}
exports.env = env;
