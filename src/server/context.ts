import * as trpcNext from "@trpc/server/adapters/next";

import { getAuth } from "@clerk/nextjs/server";

export async function createContext({
  req,
  res,
}: trpcNext.CreateNextContextOptions) {
  const { userId, orgId, orgSlug, orgRole } = getAuth(req);

  return {
    req,
    res,
    user: userId ? { id: userId } : null,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
