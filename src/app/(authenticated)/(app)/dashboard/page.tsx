"use client";

import * as React from "react";

import { trpc } from "@/utils/trpc";

const Dashboard: React.FC = () => {
  const hello = trpc.service.list.useQuery();

  if (!hello.data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Helo</h1>
    </div>
  );
};

export default Dashboard;
