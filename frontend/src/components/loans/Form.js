import React, { Component } from "react";
import { addLoan , updateLoan }from '../../actions/loans'
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Form extends Component {
  state = {
    transaction: this.props.transaction
  };

  static propTypes = {
    addLoan: PropTypes.func.isRequired,
    updateLoan: PropTypes.func.isRequired
  };

  dateFormat = date => {
    if (date){
        date = new Date(date)
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
        const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date)
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
        return `${ye}-${mo}-${da}`
    } else {
        return date
    }
  }

  onChange = e => {
      let transaction = this.state.transaction;
      transaction[e.target.name] = e.target.value;
      this.setState({ transaction: transaction });
  }

  onSubmit = e => {
    e.preventDefault();
    const { name, type, reason, amount } = this.state.transaction;
    const transfer_date = new Date(this.state.transaction.transfer_date);
    if (this.state.transaction.id) {
        const id = this.state.transaction.id;
        const loan = { id, name, type, reason, amount, transfer_date };
        this.props.updateLoan(loan);
        this.props.closeModal();
    } else {
        const loan = { name, type, reason, amount, transfer_date };
        this.props.addLoan(loan);
    }
    this.setState({
        transaction :{
            name: "",
            type: "",
            reason: "",
            amount: "",
            transfer_date: ""
        }
    });
  };

  render() {
    const { name, type, reason, amount, transfer_date } = this.state.transaction;
    let formatted_transfer_date = this.dateFormat(transfer_date)
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
              value={formatted_transfer_date}
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

export default connect(null, { addLoan, updateLoan})(Form);