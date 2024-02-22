import { z } from "zod";

export const createServiceDto = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  location: z.string().min(1),
  category: z.string().min(1),
  price: z.number().min(0),
  unit: z.string().min(1),
});

export type createServiceDtoDto = z.TypeOf<typeof createServiceDto>;
