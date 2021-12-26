import "dotenv/config";
import express from "express";
import { makeContactsImplementations } from "./factory/helper/contacts-implementation-factory";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

const contactsImplementation = makeContactsImplementations();

export const listLog = contactsImplementation.execute();

export default app;