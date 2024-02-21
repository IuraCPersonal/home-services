import { db } from "@/prisma/db";

import { procedure, auth, router } from "../trpc";
import { newId } from "@/lib/id-edge";
import { createServiceDto } from "@/dto/service/createService.dto";

export const serviceRouter = router({
  list: procedure.use(auth).query(async ({ ctx }) => {
    return await db.service.findMany({});
  }),
  create: procedure
    .use(auth)
    .input(createServiceDto)
    .mutation(async ({ input, ctx }) => {
      const service = await db.service.create({
        data: {
          id: newId("service"),
          title: input.title,
          description: input.description,
          location: input.location,
          category: input.category,
          price: input.price,
          unit: input.unit,
          userId: ctx.user?.id,
        },
      });

      return service;
    }),
});
