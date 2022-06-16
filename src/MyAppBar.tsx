import React, { ReactElement } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/system";
import { Card, Grid, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export interface MyAppBar {}

const MyAppBar = (props: MyAppBar): ReactElement => {
  let navigate = useNavigate();
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
          <Typography  sx={{ margin: "10px" , color: "white" }}>
            FULLSTACK APP (Spring Boot + React)
          </Typography>
          <Button
            sx={{ color: "white" }}
            variant="text"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Button>

          <Button
            sx={{ color: "white" }}
            variant="text"
            onClick={() => {
              navigate("/orders");
            }}
          >
            Add Order
          </Button>

          <Button
            sx={{ color: "white" }}
            variant="text"
            onClick={() => {
              navigate("/customers");
            }}
          >
            Add Customer
          </Button>
          <Button
            sx={{ color: "white" }}
            variant="text"
            onClick={() => {
              navigate("/about");
            }}
          >
            About the Project
          </Button>
        </Stack>
      </AppBar>
    </>
  );
};

export default MyAppBar;
