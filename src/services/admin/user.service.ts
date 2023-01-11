import { AdminInterface } from "../../interfaces/modalInterfaces/admin.interface";
import { Next } from "../../interfaces/request.interface";
import { ServiceResponseInterface } from "../../interfaces/service.response.interface";
import Admin from "../../models/admin.model";
import Auth from "../../utils/auth";
import { Features } from "../../utils/features";

import { serviceResponse } from "../../utils/service.response";


class UserService{

    /**
     * User List
     * 
    * @param queryString
    * @param adminId
    * @returns
    */
    public async userList(queryString:any, adminId:any):Promise<ServiceResponseInterface>{
        let query= Admin.find({role:2,createdBy:adminId});
        let countQuery = Admin.find({role:2,createdBy:adminId});
        const totalCount=new Features(countQuery,queryString).getCount();
        const count = await totalCount.query;
                /****************** Adding pagination and sorting to our list *************/
   
        const apiFeatures = new Features(query, queryString)
           .filtering()
           .sorting('created_at')
           .searching(["name", "email"])
           .pagination();
         
         const user:AdminInterface[] = await apiFeatures.query;
         user.map(u=>{
            u.password=undefined;
         })
         const currentPage=queryString?.page??1         
         return serviceResponse(false, "User Fetched Successfully",  {user,count,currentPage});
    }

    /**
     * Add User
     * @param data
     * @param adminId
     */
    public async addUser(adminId:any,data:any):Promise<ServiceResponseInterface>{

      let isAdminExist=await Admin.findOne({email:data.email,role:2,createdBy:adminId});
        if (isAdminExist) {
            return serviceResponse(true, "User Already registered with this email id,Please use another!",{});        
        }
        else{
            const encryptedPassword=await Auth.encryptPassword(data.password);
            isAdminExist=await Admin.create({
                email:data.email,
                role:2,
                createdBy:adminId,
                name:data.name,
                password:encryptedPassword
            });
        }  
        return serviceResponse(false, "User Created Successfully!",{});           

    }

    
}

export default new UserService;