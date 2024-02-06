import Sidebar from "@/components/Sidebar";
import { Grid } from "@mui/material";
import * as React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Grid container spacing={4}>
      <Grid item>
        <Sidebar />
      </Grid>

      <Grid item>{children}</Grid>
    </Grid>
  );
};

export default Layout;
