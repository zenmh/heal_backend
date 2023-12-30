import { Router } from "express";

const router = Router();

[{ path: "/auth", route: router }].forEach(({ path, route }) =>
  router.use(path, route)
);

export const routes = router;
