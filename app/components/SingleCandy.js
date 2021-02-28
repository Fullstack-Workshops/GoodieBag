import React from 'react';
import { connect } from 'react-redux';
import { fetchCandy } from '../reducers/index';

export class SingleCandy extends React.Component {
  componentDidMount() {
    this.props.fetchCandy(this.props.match.params.id);
  }

  render() {
    const { candy } = this.props;
    return (
      <div id="container">
        <h1>Single Candy Page!</h1>
        <div>Candy Chosen: {candy.name}</div>
        <img src={candy.imageUrl} />
        <div>Quantity: {candy.quantity}</div>
        <div>Description: {candy.description}</div>
      </div>
    )
  }
}

const mapState = state => ({candy: state.candy});
const mapDispatch = dispatch => ({fetchCandy: (id) => dispatch(fetchCandy(id))});

export default connect(mapState, mapDispatch)(SingleCandy);
