import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";

import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/system";
import {
  Card,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import MyAppBar from "./MyAppBar";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function OrderTable() {
  return (
    <>
      <MyAppBar></MyAppBar>
      <Card sx={{ width: "1000px", padding: "10px", m: "100px", gap: 2 }}>
        <Typography variant="h4" gutterBottom component="div">
          Orders
        </Typography>
        <TableContainer sx={{}} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Order No</TableCell>
                <TableCell align="center">Calories</TableCell>
                <TableCell align="center">Fat&nbsp;(g)</TableCell>
                <TableCell align="center">Carbs&nbsp;(g)</TableCell>
                <TableCell align="center">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">{row.carbs}</TableCell>
                  <TableCell align="center">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
}

export default OrderTable;
