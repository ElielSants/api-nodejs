import { Router } from "express";
import UserController from "./controller/UserController";

const routes = Router();

routes.get("/users", UserController.find);

routes.get("/getUserById", UserController.GetUserById);

routes.post("/user", UserController.create);

routes.delete("/deleteUser", UserController.deleteUser);

// routes.patch("/user", UserController.delete);



export default routes;