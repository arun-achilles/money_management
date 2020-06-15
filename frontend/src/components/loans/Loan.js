import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLoans }from '../../actions/loans'

export class Loans extends Component {
  static propTypes = {
    loans: PropTypes.array.isRequired,
    getLoans: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.getLoans();
  }
  render() {
    return (
      <Fragment>
        <h2>Transaction List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Reason</th>
              <th>Transfered At</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { this.props.loans.map(loan => (
              <tr key={loan.id}>
              <td>{loan.name}</td>
              <td>{loan.type}</td>
              <td>{loan.amount}</td>
              <td>{loan.reason}</td>
              <td>{loan.transfer_date}</td>
              <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loans: state.loans.loans
})

export default connect(mapStateToProps, { getLoans })(Loans);