import React from "react";
import { Table } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import { TableContainer } from "@mui/material";
import { Paper } from "@mui/material";

import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "Yonghyun Kim",
    birthDate: 19960629,
    gender: "Male",
    job: "Web developer",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "Yireh Lim",
    birthDate: 19921020,
    gender: "Male",
    job: "Web Designer",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "Hyun Park",
    birthDate: 19850321,
    gender: "Male",
    job: "Front-end developer",
  },
];

function App() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Birth Date</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Job</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((item) => {
            return (
              <Customer
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                id={item.id}
                image={item.image}
                name={item.name}
                birthDate={item.birthDate}
                gender={item.gender}
                job={item.job}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
