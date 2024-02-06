"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { UserButton, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Home, Person } from "@mui/icons-material";

const drawerWidth = 240;

const pages = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <Home />,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <Person />,
  },
];

export default function Sidebar() {
  const { user } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  const drawer = (
    <div>
      <Toolbar>
        <UserButton afterSignOutUrl="/" />
        <Typography ml={2} variant="h6" noWrap component="div">
          Welcome, {user?.lastName}
        </Typography>
      </Toolbar>
      <List>
        {pages.map(({ title, path, icon }, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              selected={pathname === path}
              onClick={() => router.push(path)}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText color="primary" primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
