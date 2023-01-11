import * as cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import * as express from 'express';
import * as fs from "fs";
import { now } from "mongoose";
import * as mongoose from 'mongoose';
import * as path from 'path';
import { env } from './environments/Env';
import { Next, ReqInterface, ResInterface } from './interfaces/request.interface';
import routes from './routes/routes';
import { Logger } from './services/Logger/LoggingService';

 class Server{

    public app:express.Application=express();

    constructor()
        {
            this.setConfigurations();
            this.error404Handler();
            this.handleErrors();
        }


    setConfigurations()    
    { 
        this.setMongodb();
        this.enableCors();
        this.configBodyParser();
        this.setRoutes();
    }

    setMongodb()
    { 
        mongoose.connect(env().dbUrl,{
            useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology:true
        }).then(()=>{
            console.log("Database Connected")
        }).catch((e)=>{
            console.log(e);
            
            console.log('failed');
      
        })
    }

    enableCors()
    {
        this.app.use(
            cors({
                origin: true,
                credentials: true
              })
        )
    }

    configBodyParser() {
        this.app.use(express.urlencoded({ extended: true, limit: '10mb' }));
        this.app.use(express.json({ limit: '10mb' }));
      }

    setRoutes(){
        this.app.use((req: ReqInterface, res: ResInterface, next: Next) => {
            res.startTime = new Date().getTime();
            res.api = req.url;
            res.method = req.method;
            console.log(req.url)

            next();
          });

          this.app.use('/api-doc', express.static(path.resolve(process.cwd() + '/assets/apidoc/')));
          this.app.use('/api/documents', express.static('./assets/images/'));
          this.app.use('/api/v1', routes)
      }

    error404Handler() { 
        this.app.use((req: ReqInterface, res: ResInterface) => {
          res.status(404).json({
            message: 'Route not found test',
            status: 404
          });
        })
      }
    
    
    handleErrors() {        
        this.app.use((error: Error, req: ReqInterface, res: ResInterface, next: Next) => {
            Logger.exceptions(error,req)

           
            const errorStatus = req.errorStatus;
            res.status(errorStatus || 500).json({
            message: error.message || 'Something went wrong!!',
            // statusText: error.statusText || "ERROR",
            statusText:'Error',
            status: errorStatus || 500,
            data: {}
            })
        })
      }  

}

export default new Server().app;



