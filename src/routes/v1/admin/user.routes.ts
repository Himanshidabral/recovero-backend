import { Router } from "express";
import UserController from "../../../controllers/admin/user.controller";
import GlobalMiddleware from "../../../middlewares/global.middleware";
class UserRoutes {
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
        this.router.get('/list',GlobalMiddleware.authenticateAdmin,GlobalMiddleware.restrictUser,UserController.userList);

    }

    public post() {
        this.router.post('/add-user',GlobalMiddleware.authenticateAdmin,GlobalMiddleware.restrictUser, UserController.addUser);

    }


    public patch() {

    }

    public put() {
      
    }

    public delete() {

    }
}

export default new UserRoutes().router;