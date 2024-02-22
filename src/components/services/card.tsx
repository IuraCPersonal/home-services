"use client";

import * as React from "react";
import { Service } from "@/lib/kysely/types";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

const ServiceCard: React.FC<Service> = ({
  title,
  location,
  createdAt,
  category,
  price,
  unit,
}) => {
  const today = new Date();
  const diffDays = Math.floor(
    (today.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24)
  );
  const diffHours = Math.floor(
    (today.getTime() - createdAt.getTime()) / (1000 * 60 * 60)
  );

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: "151px", minWidth: "151px", height: "151px" }}
        image="https://source.unsplash.com/random"
        alt="Random image"
      />
      <Box sx={{ display: "flex", flexDirection: "column", flex: "1 1 auto" }}>
        <CardContent
          sx={{
            flex: "1 0 auto",
          }}
        >
          <Stack
            spacing={1}
            sx={{ height: "100%" }}
            justifyContent="space-between"
          >
            <Box>
              <Typography component="h2" variant="h5">
                {title}
              </Typography>
              <Stack
                spacing={1}
                direction="row"
                divider={
                  <Divider orientation="vertical" variant="middle" flexItem />
                }
              >
                <Typography variant="body2" color="text.secondary">
                  {category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Moldova, {location}
                </Typography>
              </Stack>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body2" fontWeight={700} color="green">
                {price} MDL / {unit}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {diffDays === 0
                  ? diffHours === 0
                    ? "Just Now"
                    : `${diffHours} hours ago`
                  : `${diffDays} days ago`}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Box>
    </Card>
  );
};

export default ServiceCard;
