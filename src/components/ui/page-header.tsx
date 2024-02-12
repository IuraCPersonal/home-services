import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

type Props = {
  title: string;
  description?: string;
  actions?: React.ReactNode[];
};

export const PageHeader: React.FC<Props> = ({
  title,
  description,
  actions,
}) => {
  return (
    <Grid container direction="row" justifyContent="space-between">
      <Grid item>
        <Stack>
          <Typography fontWeight="bold" variant="h4">
            {title}
          </Typography>
          {description && (
            <Typography variant="body2">{description}</Typography>
          )}
        </Stack>
      </Grid>
      <Grid item>
        <Stack direction="row" spacing={2}>
          {actions?.map((action, i) => (
            <div key={i}>{action}</div>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};
