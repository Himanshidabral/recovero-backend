import { Router } from "express";
import AuthController from "../../../controllers/admin/auth.controller";
import GlobalMiddleware from "../../../middlewares/global.middleware";
class AuthRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.get();
        this.patch();
        this.post();
        this.put();
        this.delete();
    }

    public get() {
        

    }

    public post() {
        this.router.post('/login', AuthController.login);
        this.router.post('/create-admin', AuthController.createAdmin);
        this.router.post('/change-password',GlobalMiddleware.authenticateAdmin,AuthController.changePassword);
    }


    public patch() {

    }

    public put() {
      
    }

    public delete() {

    }
}

export default new AuthRoutes().router;