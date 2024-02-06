import * as React from "react";

import Sidebar from "@/components/Sidebar";
import { Grid } from "@mui/material";

import { ReactQueryProvider } from "./react-query-provider";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <Grid container spacing={4}>
        <Grid item>
          <Sidebar />
        </Grid>

        <Grid item>{children}</Grid>
      </Grid>
    </ReactQueryProvider>
  );
};

export default Layout;
