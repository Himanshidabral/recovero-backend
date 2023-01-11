import * as formidable from 'formidable';
import { env } from "../environments/Env"
import * as Jwt from 'jsonwebtoken';
const cryptLib = require('@skavinvarnan/cryptlib');
import _RS from "../helpers/response.helper";

import { ReqInterface, ResInterface } from '../interfaces/request.interface';
import Admin from '../models/admin.model';

class GlobalMiddleware{

    /**
     * 
     * @param req 
     * @param res 
     * @param next 
     */
    public formDataParser(req:ReqInterface,res:any,next:any){
        try{  
            const form=formidable({multiples:true});

            form.parse(req,(err,fields={},files)=>{
                if(err){
                    next(err);
                    return;
                }
                req.body.fields={...fields};
                req.body.files=files;
                next();
            })
        }catch(error){
            next(error)
        }
    }


    
    



     /**
     * Authenticate Admin Incoming request
     * @param req
     * @param res
     * @param next 
     */
     public async authenticateAdmin(req:any,res:any,next:any){
        if(env().nodeEnv=='!dev'){

        }
        const authHeader = req.headers.authorization;

        const token= authHeader?authHeader.slice(7,authHeader.length):null;

        try{
            Jwt.verify(token, env().jwtSecret, (async (error: any, decode: any) => {

                if (error) {
                    if (error.message == "jwt expired") {
                        req.errorStatus = 401;
                        return _RS.unAuthenticated(res, "JWT_EXPIRED", "Admin Not Authorized", {})
                    }
                    if (error.message == "jwt must be provided") {
                        req.errorStatus = 401;
                        return _RS.unAuthenticated(res, "JWT_NEEDED", "Admin Not Authorized", {})
                    }
                } else if (!decode) {
                    req.errorStatus = 401;
                    return _RS.unAuthenticated(res, "JWT_INVALID", "Admin Not Authorized", {})
                } else {
                        let admin = await Admin.findOne({ _id: decode._id });
                    if (!admin) {
                        req.errorStatus = 401;
                        return _RS.unAuthenticated(res, "ADMIN_NOT_FOUND", "Admin Not Authorized", {})
                    }
                    req.adminData = admin;
                    next();
                }
            }))

        }
        catch(error){

        }
    }


     /**
     * Authenticate Admin Incoming request
     * @param req
     * @param res
     * @param next 
     */

     restrictUser(req:ReqInterface,res:ResInterface,next:any){
        let admin=req.adminData;
        let role=admin.role;
        if(role==2){
            return _RS.unAuthenticated(res, "JWT_INVALID", "Admin Not Authorized", {})
        }
        next();

     }

  


}


export default new GlobalMiddleware();