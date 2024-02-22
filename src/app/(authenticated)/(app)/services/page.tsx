import { Stack } from "@mui/material";

import { db } from "@/prisma/db";
import { PageHeader } from "@/components/ui/page-header";
import CreateServiceButton from "./CreateServiceButton";
import Card from "@/components/services/card";
import { Service } from "@/lib/kysely/types";

export default async function Page() {
  const services = await db.service.findMany();

  return (
    <Stack spacing={4} mb={4}>
      <PageHeader
        title="Services"
        actions={[<CreateServiceButton key="create" />]}
      />

      <Stack spacing={2}>
        {services
          .sort(
            (serviceA: Service, serviceB: Service) =>
              serviceB.createdAt?.getTime() - serviceA.createdAt?.getTime()
          )
          .map((service) => (
            <Card key={service.id} {...service} />
          ))}
      </Stack>
    </Stack>
  );
}
