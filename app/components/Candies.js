import React from 'react';
import { connect } from 'react-redux';
import { fetchCandies } from '../reducers/index';

export class Candies extends React.Component {
  componentDidMount() {
    this.props.fetchCandies();
  }

  render() {
    const { candies } = this.props;
    return (
      <div id="container">
        <h1>All Candies:</h1>
        {candies.map((candy) => (
          <div key={candy.id}>
            <div>Name: {candy.name}</div>
            <img src={candy.imageUrl} />
            <div>Quantity: {candy.quantity}</div>
            <div>Description: {candy.description}</div>
          </div>
        ))}
      </div>
    )
  }
}

const mapState = state => ({candies: state.candies});
const mapDispatch = dispatch => ({fetchCandies: () => dispatch(fetchCandies())})
export default connect(mapState, mapDispatch)(Candies);
