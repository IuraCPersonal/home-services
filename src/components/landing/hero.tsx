"use client";

import * as React from "react";
import { Particles } from "./ui/particles";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { GitHub } from "@mui/icons-material";

const Hero: React.FC = () => {
  return (
    <Box position="relative" height="100vh" width="100vw" sx={{ inset: 0 }}>
      <Particles />

      <Stack
        spacing={4}
        height="calc(100vh - 80px)"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h1" fontWeight={700} textAlign="center">
            999.md is not build
          </Typography>
          <Typography
            variant="h1"
            fontWeight={700}
            color="primary"
            textAlign="center"
          >
            for workers
          </Typography>
          <Typography variant="h6" textAlign="center">
            Stop wasting time and money on hiring workers that don't fit your
            needs.
          </Typography>
        </Box>

        <Grid
          container
          spacing={2}
          alignContent="center"
          justifyContent="center"
        >
          <Grid item>
            <Link href="/dashboard">
              <Button variant="contained" color="primary" size="large">
                Get Started
              </Button>
            </Link>
          </Grid>

          <Grid item>
            <Link href="www.github.com/IuraCPersonal" target="_blank">
              <Button
                variant="outlined"
                color="info"
                size="large"
                startIcon={<GitHub />}
              >
                View Github
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Hero;
