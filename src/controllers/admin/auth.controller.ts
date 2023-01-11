import AuthService from "../../services/admin/auth.service";
import _RS from "../../helpers/response.helper";

import { ResInterface, ReqInterface ,Next} from "../../interfaces/request.interface"


class AuthController{

    async createAdmin(req:ReqInterface,res:ResInterface,next:Next)
    {
        try{

            const reqData=req.body;
            const { error, message, data } = await AuthService.createAdmin(reqData,next);
            if (error) {
              return _RS.badRequest(res, "BAD_REQUEST", message, data);
            }
            return _RS.ok(res, "SUCCESS", message, data)

        }catch(err){
            console.log(err);
        }
    }

    async login(req:ReqInterface,res:ResInterface,next:Next){
        try{
              const reqData=req.body;
              const { error, message, data } = await AuthService.login(reqData,next);
              if (error) {
                return _RS.badRequest(res, "BAD_REQUEST", message, data);
              }
              return _RS.ok(res, "SUCCESS", message, data)
        }catch(err){
            next(err);
        }

    }

    async changePassword(req:ReqInterface,res:ResInterface,next:Next){
        try{
            const reqData=req.body;
            const adminId=req.adminData._id;
            const { error, message, data } = await AuthService.changePassword(adminId,reqData,next);
            if (error) {
              return _RS.badRequest(res, "BAD_REQUEST", message, data);
            }
            return _RS.ok(res, "SUCCESS", message, data)
        }catch(err){
            next(err);
        }
    }

}

export default new AuthController