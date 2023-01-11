import * as Jwt from "jsonwebtoken"
import { env } from "../environments/Env";
import * as Bcrypt from "bcrypt";


class Auth{

    async getToken(data,expiresIn,next){
        expiresIn="30d";
        try{
            return Jwt.sign(
                data,
                env().jwtSecret,
                {
                    expiresIn
                }
                )

        }catch(err){
            return next(err)
        }

    }

    async encryptPassword(password:string):Promise<any>{
        return new Promise((resolve,reject)=>{
            Bcrypt.hash(password,10,(err,hash)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(hash);
                }
            })
        })
    }

    async comparePassword(reqPassword,storedPassword){
        return new Promise((resolve,reject)=>{
           Bcrypt.compare(reqPassword,storedPassword,((err,isSame)=>{
            if(err){
                reject(err);
            } else if(!isSame){
                resolve(false);
            }else{
                resolve(true);
            }

           }))
        })
    }

  

}

export default new Auth();