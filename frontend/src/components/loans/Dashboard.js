import React, { Fragment } from "react";
import Form from "./Form";
import Loans from "./Loan";

export default function LoanDashboard() {
  const transaction = {
    name: "",
    type: "LEND",
    reason: "",
    amount: "",
    transfer_date: ""
  }
  return (
    <Fragment>
      <Form transaction={transaction}/>
      <Loans />
    </Fragment>
  );
}
