import { db } from "@/prisma/db";
import { z } from "zod";

import { procedure, auth, router } from "../trpc";
import { newId } from "@/lib/id-edge";

export const serviceRouter = router({
  list: procedure.use(auth).query(async ({ ctx }) => {
    return await db.service.findMany({});
  }),
  create: procedure
    .use(auth)
    .input(
      z.object({
        title: z
          .string()
          .min(1)
          .regex(/^[a-zA-Z0-9-_\.]+$/),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await db.service.create({
        data: {
          id: newId("service"),
          title: input.title,
          userId: ctx.user?.id,
        },
      });
    }),
});
