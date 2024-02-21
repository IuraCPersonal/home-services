import { Stack } from "@mui/material";

import { PageHeader } from "@/components/ui/page-header";
import CreateServiceButton from "./CreateServiceButton";

export default async function Page() {
  return (
    <Stack>
      <PageHeader
        title="Services"
        actions={[<CreateServiceButton key="create" />]}
      />
    </Stack>
  );
}
