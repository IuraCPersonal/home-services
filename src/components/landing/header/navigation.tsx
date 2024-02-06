import * as React from "react";
import { Box, Button } from "@mui/material";

const Navigation: React.FC = () => {
  const pages = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: "flex-end",
        }}
      >
        {pages.map((page) => (
          <Button
            key={page.title}
            color="inherit"
            sx={{ my: 2, display: "block", textTransform: "capitalize" }}
          >
            {page.title}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default Navigation;
