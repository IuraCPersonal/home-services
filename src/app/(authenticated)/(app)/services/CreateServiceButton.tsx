"use client";

import * as React from "react";
import { trpc } from "@/utils/trpc";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";

import { categories, locations, units } from "./utils/constants";

const CreateServiceButton = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const [title, setTitle] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [category, setCategory] = React.useState<string>("");
  const [price, setPrice] = React.useState<number>(0);
  const [unit, setUnit] = React.useState<string>("");
  const [location, setLocation] = React.useState<string>("");

  const create = trpc.service.create.useMutation({
    onSuccess: () => {
      console.log("Service created");
    },
    onError: (error) => {
      console.error("Failed to create service", error);
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onCreate = React.useCallback(async () => {
    const payload = {
      title: title,
      description: description,
      category: category,
      price: price,
      unit: unit,
      location: location,
    };

    const createdService = await create.mutate({ ...payload });
  }, [title, description, category, price, unit, location, create]);

  return (
    <>
      <Button
        variant="contained"
        startIcon={<AddCircleOutline />}
        onClick={handleClickOpen}
      >
        Create
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: async (event: any) => {
            event.preventDefault();
            onCreate();
            handleClose();
          },
        }}
      >
        <DialogTitle>Create New Service</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Complete this form to get started and showcase your service
            offerings to our community of users seeking reliable home services.
          </DialogContentText>

          <TextField
            autoFocus
            required
            InputLabelProps={{ shrink: true }}
            margin="dense"
            id="title"
            label="Service Name"
            type="text"
            fullWidth
            size="small"
            onChange={(event) => setTitle(event.target.value)}
          />

          <TextField
            required
            multiline
            InputLabelProps={{ shrink: true }}
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            size="small"
            onChange={(event) => setDescription(event.target.value)}
          />

          <TextField
            select
            required
            InputLabelProps={{ shrink: true }}
            margin="dense"
            id="category"
            label="Category"
            type="text"
            fullWidth
            size="small"
            SelectProps={{
              native: true,
            }}
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </TextField>

          <Stack direction="row" spacing={2} mt={1}>
            <TextField
              required
              InputLabelProps={{ shrink: true }}
              margin="dense"
              id="price"
              label="Price"
              type="number"
              fullWidth
              size="small"
              InputProps={{
                inputProps: { min: 0 },
                endAdornment: (
                  <InputAdornment position="start">MDL</InputAdornment>
                ),
              }}
            />

            <TextField
              select
              required
              InputLabelProps={{ shrink: true }}
              margin="dense"
              id="unit"
              label="Unit"
              fullWidth
              size="small"
              SelectProps={{
                native: true,
              }}
            >
              {units.map((unit) => (
                <option key={unit.value} value={unit.value}>
                  {unit.label}
                </option>
              ))}
            </TextField>
          </Stack>

          <TextField
            select
            required
            InputLabelProps={{ shrink: true }}
            margin="dense"
            id="location"
            label="Location"
            type="text"
            fullWidth
            size="small"
            SelectProps={{
              native: true,
            }}
          >
            {locations.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </TextField>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateServiceButton;
