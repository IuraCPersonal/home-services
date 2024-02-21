"use client";

import React, { PropsWithChildren, useState } from "react";

import superjson from "superjson";
import { httpBatchLink } from "@trpc/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { trpc } from "@/utils/trpc";

export const ReactQueryProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  function getBaseUrl() {
    if (typeof window !== "undefined") {
      // browser should use relative path
      return "";
    }

    if (process.env.VERCEL_URL) {
      // reference for vercel.com
      return `https://${process.env.VERCEL_URL}`;
    }

    // assume localhost
    return `http://localhost:${process.env.PORT ?? 3000}`;
  }

  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          transformer: superjson,
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};
