import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";

import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/system";
import { Card, Grid, Stack, TextField } from "@mui/material";
import MyAppBar from "./MyAppBar";

function AddCustomerPage() {
  return (
    <>
      <MyAppBar></MyAppBar>
      <Grid container spacing={0} direction="column" alignItems="center">
        <Grid item xs={3}>
          <Card sx={{ width: "1000px", padding: "10px", m: "100px", gap: 2 }}>
            <Stack sx={{ gap: 2 }}>
              <TextField
                id="outlined-basic"
                label="Customer ID"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
              />
              <TextField id="outlined-basic" label="City" variant="outlined" />
              <TextField id="outlined-basic" label="State" variant="outlined" />
              <TextField id="outlined-basic" label="State" variant="outlined" />
              <Stack
                direction={"row"}
                alignItems="center"
                justifyContent={"center"}
                spacing="10px"
              >
                <Button variant="contained">Add</Button>

                <Button variant="contained">Delete</Button>

                <Button variant="contained">Next</Button>
              </Stack>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default AddCustomerPage;
