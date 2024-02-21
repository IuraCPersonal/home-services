"use client";

import * as React from "react";

import { trpc } from "@/utils/trpc";
import { Stack } from "@mui/material";
import { PageHeader } from "@/components/ui/page-header";

const Dashboard: React.FC = () => {
  const hello = trpc.service.list.useQuery();

  if (!hello.data) {
    return <div>Loading...</div>;
  }

  return (
    <Stack>
      <PageHeader title="Dashboard" />
    </Stack>
  );
};

export default Dashboard;
