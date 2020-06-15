import React, { Fragment } from "react";
import Form from "./Form";
import Loans from "./Loan";

export default function LoanDashboard() {
  return (
    <Fragment>
      <Form />
      <Loans />
    </Fragment>
  );
}
