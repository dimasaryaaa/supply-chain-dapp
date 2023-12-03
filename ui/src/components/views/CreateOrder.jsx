import React from 'react';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import OrderForm from '../components/OrderForm';

import { compose } from '../../lib/util';
import { connect } from 'react-redux';
import { createOrder } from '../../actions/orders';

const CreateOrder = ({newOrderTx, pending, createOrder}) =>
  (pending ?
      <CircularProgress/> :
      <div>
        <OrderForm onSubmit={ createOrder }/>
        {
          ((!!newOrderTx) ? <Typography>order { newOrderTx }</Typography> : <p/>)
        }
      </div>
  );

export default compose(
  connect(
    state => ({
      newOrderTx: state.orders.newOrderTx,
      pending: state.orders.pending
    }),
    dispatch => ({
      createOrder: order => dispatch(createOrder(order))
    })
  )
)(CreateOrder);