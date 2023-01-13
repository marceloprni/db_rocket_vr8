import {Router} from "express";
import { ensureAuthenticated } from "../middlewares/ensuresAuthenticated";
import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import { specificationRoutes } from "./specifications.routes";


const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

specificationRoutes.use(ensureAuthenticated);
authenticateRoutes.post("/sessions", authenticateUserController.handle)

export { authenticateRoutes }