import React, { Component } from "react";
import { addLoan }from '../../actions/loans'
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Form extends Component {
  state = {
    name: "",
    type: "LEND",
    reason: "",
    amount: "",
    transfer_date: ""
  };

  static propTypes = {
    addLoan: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, type, reason, amount } = this.state;
    const transfer_date = new Date(this.state.transfer_date);
    const loan = { name, type, reason, amount, transfer_date };
    this.props.addLoan(loan);
    this.setState({
        name: "",
        type: "",
        reason: "",
        amount: "",
        transfer_date: ""
    });
  };

  render() {
    const { name, type, reason, amount, transfer_date } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Transaction</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Person Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Type</label>
            <select className="form-control" name="type" onChange={this.onChange} name="type">
                <option value="LEND">LEND</option>
                <option value="BORROW">BORROW</option>
            </select>
          </div>
          <div className="form-group">
            <label>Amount</label>
            <input
              className="form-control"
              type="text"
              name="amount"
              onChange={this.onChange}
              value={amount}
            />
          </div>
          <div className="form-group">
            <label>Transfered At</label>
            <input
              className="form-control"
              type="date"
              name="transfer_date"
              onChange={this.onChange}
              value={transfer_date}
            />
          </div>
          <div className="form-group">
            <label>Reason</label>
            <textarea
              className="form-control"
              type="text"
              name="reason"
              onChange={this.onChange}
              value={reason}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>        
      </div>
    );
  }
}

export default connect(null, { addLoan})(Form);