import Hero from "@/components/landing/hero";
import { Container } from "@mui/material";
import * as React from "react";

const Page: React.FC = () => {
  return (
    <Container disableGutters={true} sx={{ ml: 0 }}>
      <Hero />
    </Container>
  );
};

export default Page;
