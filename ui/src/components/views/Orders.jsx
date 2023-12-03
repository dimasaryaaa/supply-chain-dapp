import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';

import OrderList from '../components/OrderList';

import { compose } from '../../lib/util';
import { connect } from 'react-redux';
import { getOrders } from '../../actions/orders';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class Orders extends React.Component {

  componentWillMount() {
    this.props.getOrders();
  }

  render() {
    const {classes, orders, loading} = this.props;
    return (
      <Card className={ classes.card }>
        <CardContent>
          { loading ? <CircularProgress/>
            :
            <OrderList orders = { orders }/>
          }
        </CardContent>

      </Card>
    );
  }
}

Orders.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  connect(
    state => ({
      orders: state.orders.orders,
      loading: state.orders.loading
    }),
    dispatch => ({
      getOrders: () => dispatch(getOrders())
    })
  )
)(Orders);