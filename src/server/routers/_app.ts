import { router } from "../trpc";
import { serviceRouter } from "./service";

export const appRouter = router({
  service: serviceRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
