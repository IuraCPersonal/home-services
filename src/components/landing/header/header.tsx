import * as React from "react";

import { AppBar, Container, Toolbar } from "@mui/material";

import Branding from "./branding";
import Navigation from "./navigation";

const Header: React.FC = () => {
  return (
    <AppBar position="absolute" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Branding />
          <Navigation />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
