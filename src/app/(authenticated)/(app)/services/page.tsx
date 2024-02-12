import { PageHeader } from "@/components/ui/page-header";
import { Button, Stack } from "@mui/material";

export default async function Page() {
  return (
    <Stack>
      <PageHeader
        title="Services"
        actions={[<Button variant="contained">Create</Button>]}
      />
    </Stack>
  );
}
