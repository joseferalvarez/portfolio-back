import { Hono } from "hono";
import ApiContactController from "./hono-contact-controller";

const controller = new ApiContactController();
const contactRouter = new Hono();

contactRouter.post("/", async (c) => controller.save(c));

export default contactRouter;