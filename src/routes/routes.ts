import { Router } from "express";
import AuthAdminRoutes from "./v1/admin/auth.routes";
import UserAdminRoutes from "./v1/admin/user.routes";



class Routes {
  public router: Router;
  constructor() {
    this.router = Router();
    this.admin();
  }




  admin() {
    this.router.use('/admin/auth', AuthAdminRoutes);
    this.router.use('/admin/user', UserAdminRoutes);

  }

}
export default new Routes().router;