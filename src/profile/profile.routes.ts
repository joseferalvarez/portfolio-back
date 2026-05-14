import { Hono } from "hono";
import { ProfileController } from "./profile.controller";

const profile = new Hono();
const controller = new ProfileController();

profile.get("/card/:lang/:id", async (c) => {
  const id = c.req.param("id");
  const lang = c.req.param("lang");
  const result = await controller.getProfileCard(id, lang);
  return c.json(result);
});

profile.get("/section/profile/:lang/:id", async (c) => {
  const lang = c.req.param("lang");
  const id = c.req.param("id");
  const result = await controller.getProfileSection(id, lang);
  return c.json(result);
});

profile.get("/section/projects/:lang/:id", async (c) => {
  const lang = c.req.param("lang");
  const id = c.req.param("id");
  const result = await controller.getProjectsSection(id, lang);
  return c.json(result);
});

profile.get("/section/experience/:lang/:id", async (c) => {
  const lang = c.req.param("lang");
  const id = c.req.param("id");
  const result = await controller.getExperience(id, lang);
  return c.json(result);
});

export default profile;
