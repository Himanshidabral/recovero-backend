import { Next } from "../../interfaces/request.interface";
import { ServiceResponseInterface } from "../../interfaces/service.response.interface";
import Admin from "../../models/admin.model";
import Auth from "../../utils/auth";
import { serviceResponse } from "../../utils/service.response";


class AuthService{

    /**
     * Create Admin
    * @param data:{email:string,password:string}
    * @param next:NEXT
    * @returns
    */
    public async createAdmin(data:{email:string,password:string,name:string},next:Next):Promise<ServiceResponseInterface>{
        let isAdmin=await Admin.findOne({email:data.email,role:1});
        if (isAdmin) {
            return serviceResponse(true, "User Already registered with this email id,Please use another!",{});        
        }
        else{
            const encryptedPassword=await Auth.encryptPassword(data.password);
            isAdmin=await Admin.create({
                email:data.email,
                role:1,
                name:data.name,
                password:encryptedPassword
            });
        }  
        return serviceResponse(false, "User Created Successfully!",{});        
    }

    /**
     * login
    * @param data:{email:string,password:string,role:number}
    * @param next:NEXT
    * @returns
    */
    public async login(data:{email:string,password:string,role:number},next):Promise<ServiceResponseInterface>{
        
        let admin=await Admin.findOne({email:data.email,role:data.role});
        if (!admin) {
            return serviceResponse(true, "Incorrect email or password!",{});        
        }
        const isPasswordValid = await Auth.comparePassword(data.password, admin.password);
        if (!isPasswordValid) {
            return serviceResponse(true, "Invalid email or password!",{});        
        }

            let payload={
                _id:admin._id,
                role:data.role,
                email:admin.email,
                name:admin.name
            }

            let jwtToken= await Auth.getToken(payload,100000,next);
            admin.password=undefined;
            const responseData = { admin, token: jwtToken };
            return serviceResponse(false, "Logged in successfully", responseData);
        }



    /**
     * Change Password
    * @param data:{passwordCurrent:string,password:string}
    * @param adminId:string
    * @param next:NEXT
    * @returns
    */
    public async changePassword(adminId:string,data:{passwordCurrent:string,password:string},next):Promise<ServiceResponseInterface>{
        let admin=await Admin.findOne({_id:adminId});
        if (!admin) {
            return serviceResponse(true, "Invalid Request!",{});        
        }
        const isPasswordValid = await Auth.comparePassword(data.passwordCurrent, admin.password);
        if (!isPasswordValid) {
            return serviceResponse(true, "Invalid password!",{});        
        }
        const encryptedPassword = await Auth.encryptPassword(data.password);
        admin.password=encryptedPassword;
        await admin.save();
        return serviceResponse(false, "Password Changed Successfully", {});
        }
}

export default new AuthService;