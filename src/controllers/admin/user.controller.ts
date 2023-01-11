
import _RS from "../../helpers/response.helper";

import { ResInterface, ReqInterface ,Next} from "../../interfaces/request.interface"
import UserService from "../../services/admin/user.service";


class UserController{

    async userList(req:ReqInterface,res:ResInterface,next:Next){
         try{
            let queryString=req.query;
            let adminId=req.adminData._id
            const { error, message, data } = await UserService.userList(queryString,adminId);
            if (error) {
              return _RS.badRequest(res, "BAD_REQUEST", message, data);
            }
            return _RS.ok(res, "SUCCESS", message, data)   

         }  catch(err){
          next(err);
         }
    }

    async addUser(req:ReqInterface,res:ResInterface,next:Next){
        try{
            let adminId=req.adminData._id;
            let reqData=req.body;
           const { error, message, data } = await UserService.addUser(adminId,reqData);
           if (error) {
             return _RS.badRequest(res, "BAD_REQUEST", message, data);
           }
           return _RS.ok(res, "SUCCESS", message, data)   

        }  catch(err){
         next(err);
        }
   }


}

export default new UserController;