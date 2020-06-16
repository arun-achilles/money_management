import React, { Component, Fragment, useRef } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLoans, deleteLoan }from '../../actions/loans'
import EditLoan from './EditLoan';
var FontAwesome  = require('react-fontawesome')


export class Loans extends Component {
  
    constructor(props) {
        super(props);
        this.editFormRef = React.createRef();
    }
    
    static propTypes = {
        loans: PropTypes.array.isRequired,
        getLoans: PropTypes.func.isRequired,
        deleteLoan: PropTypes.func.isRequired
    }
    
  componentDidMount() {
      this.props.getLoans();
    }
    
  editLoan = loan => {
    this.editFormRef.current.showModal(loan);
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
              <td>
                  <FontAwesome onClick={this.editLoan.bind(this, loan)} name="edit" /> &nbsp;
                  <FontAwesome onClick={this.props.deleteLoan.bind(this, loan.id)} name="trash" />
              </td>
              </tr>
            ))}
          </tbody>
        </table>
        <EditLoan ref={this.editFormRef} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loans: state.loans.loans
})

export default connect(mapStateToProps, { getLoans, deleteLoan })(Loans);