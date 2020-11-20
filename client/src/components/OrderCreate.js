import React from 'react';
import { connect } from 'react-redux';
import { createOrder } from '../../actions';
import OrderForm from './OrderForm';

class OrderCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createOrder(formValues);
  };

  render() {
    return (
      <div>
        <h1 className="ui header center aligned violet">
          Order your Magic Potion
        </h1>
        <OrderForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createOrder })(OrderCreate);
