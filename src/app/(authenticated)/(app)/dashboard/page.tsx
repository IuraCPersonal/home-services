"use client";

import * as React from "react";

import { trpc } from "@/utils/trpc";

const Dashboard: React.FC = () => {
  const hello = trpc.hello.useQuery({ text: "client" });

  if (!hello.data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{hello.data.greeting}</h1>
    </div>
  );
};

export default Dashboard;
