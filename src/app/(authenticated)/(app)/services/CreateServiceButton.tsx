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
import { styled } from "@mui/material/styles";
import { AddCircleOutline, CloudUploadOutlined } from "@mui/icons-material";

import { categories, locations, units } from "./utils/constants";
import { useRouter } from "next/navigation";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const CreateServiceButton = () => {
  const router = useRouter();

  const [open, setOpen] = React.useState<boolean>(false);

  const [title, setTitle] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [category, setCategory] = React.useState<string>("");
  const [price, setPrice] = React.useState<number>(0);
  const [unit, setUnit] = React.useState<string>("");
  const [location, setLocation] = React.useState<string>("");
  const [file, setFile] = React.useState<File | null>(null);
  const [uploading, setUploading] = React.useState<boolean>(false);

  const create = trpc.service.create.useMutation({
    onSuccess: () => {
      router.refresh();
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

  const onCreate = async () => {
    if (!file) {
      return;
    }

    setUploading(true);

    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/v1/s3/upload",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filename: file.name,
          contentType: file.type,
        }),
      }
    );

    if (response.ok) {
      const { url, fields, uuid } = await response.json();

      const formData = new FormData();

      Object.entries(fields).forEach(([key, value]) => {
        formData.append(key, value as string);
      });

      formData.append("file", file);

      const uploadResponse = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (uploadResponse.ok) {
        const payload = {
          title: title,
          description: description,
          category: category,
          price: price,
          unit: unit,
          location: location,
          image: `${process.env.NEXT_PUBLIC_AWS_S3_URL}/${uuid}`,
        };

        await create.mutate({ ...payload });
      } else {
        console.error("S3 Upload Error:", uploadResponse);
        alert("Upload failed.");
      }
    } else {
      alert("Failed to get pre-signed URL.");
    }

    setUploading(false);
  };

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

        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: 500,
          }}
        >
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
            onChange={(event) => setCategory(event.target.value)}
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
              onChange={(event) => setPrice(Number(event.target.value))}
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
              onChange={(event) => setUnit(event.target.value)}
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
            onChange={(event) => setLocation(event.target.value)}
          >
            {locations.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </TextField>

          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadOutlined />}
            size="small"
          >
            Upload Image
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => setFile(event.target.files?.[0] || null)}
              accept="image/png, image/jpeg"
            />
          </Button>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" disabled={uploading}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateServiceButton;
