import { PageHeader } from "@/components/ui/page-header";
import { VerifiedUser } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";

export default async function Page() {
  return (
    <Stack>
      <PageHeader
        title="Profile"
        actions={[
          <Button variant="contained" startIcon={<VerifiedUser />}>
            Edit
          </Button>,
        ]}
      />
    </Stack>
  );
}
