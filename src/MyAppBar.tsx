import React, { ReactElement } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";

import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/system";
import { Card, Grid, Stack, TextField } from "@mui/material";

export interface MyAppBar {}

const MyAppBar = (props: MyAppBar): ReactElement => {
  return (
    <>
      <AppBar>
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent={"flex-start"}
          spacing="10px"
          sx={{ margin: "10px" }}
        >
          <Button sx={{ color: "white" }} variant="text">
            Home
          </Button>

          <Button sx={{ color: "white" }} variant="text">
            Add Order
          </Button>

          <Button sx={{ color: "white" }} variant="text">
            Add Customer
          </Button>
        </Stack>
      </AppBar>
    </>
  );
};

export default MyAppBar;
