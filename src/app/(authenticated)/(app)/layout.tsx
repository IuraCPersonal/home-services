import * as React from "react";

import Sidebar from "@/components/ui/sidebar";
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

        <Grid item flex={1} sx={{ mr: 4, mt: 4 }}>
          {children}
        </Grid>
      </Grid>
    </ReactQueryProvider>
  );
};

export default Layout;
