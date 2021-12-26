import Router from "express";
import { ListDomainsController } from "../presentation/controllers/list-domains-controller";

const listDomainsController = new ListDomainsController;

const router = Router();

router.get("/contacts/list", listDomainsController.handle);

export { router };