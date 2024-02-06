import * as React from "react";
import Typography from "@mui/material/Typography";

const Branding: React.FC = () => {
  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 800,
          cursor: "pointer",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Sempio
      </Typography>
    </>
  );
};

export default Branding;
