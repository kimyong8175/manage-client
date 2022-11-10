import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

function Customer(props) {
  return (
    <TableRow>
      <TableCell>{props.id}</TableCell>
      <TableCell>
        <img src={props.image} alt="profile" />
      </TableCell>
      <TableCell>{props.name}</TableCell>
      <TableCell>{props.birthDate}</TableCell>
      <TableCell>{props.gender}</TableCell>
      <TableCell>{props.job}</TableCell>
    </TableRow>
  );
}

export default Customer;

// function CustomerProfile(props) {
//   return (
//     <div>
//       <img src={props.image} alt="profile" />
//       <h2>
//         Name: {props.name} ({props.id})
//       </h2>
//     </div>
//   );
// }

// function CustomerInfo(props) {
//   return (
//     <div>
//       <p>Birth: {props.birthDate}</p>
//       <p>Gender: {props.gender}</p>
//       <p>Job: {props.job}</p>
//     </div>
//   );
//}

/* <CustomerProfile image={props.image} name={props.name} id={props.id} />
      <CustomerInfo
        birthDate={props.birthDate}
        gender={props.gender}
        job={props.job}
      /> */
