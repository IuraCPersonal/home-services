import { Loading as Spinner } from "@/components/ui/loading";
import { Box } from "@mui/material";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Spinner />
    </Box>
  );
}
