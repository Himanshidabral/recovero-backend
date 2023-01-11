export interface Environment {
    nodeEnv?: string;
    apiKey?: string;
    dbUrl: string;
    jwtSecret?: string;
    jwtExpiresIn?: string;
    awsAccessKey?: string;
    awsSecretKey?: string;
    s3Bucket?: string;
    s3AssetUrl?: string;
    awsRegion?: string;
    baseUrl?: string;
    mailFrom?: string;
    sendGridApiKey?: string;
    assetUrl?: string;
    mailTo?: string;
}
export declare function env(): Environment;
