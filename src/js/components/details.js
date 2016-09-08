const { Component } = require('react');

import StockDetails from './stockDetails';
import Portfolio from './portfolio';

export default class Details extends Component {
  constructor(params) {
    super(params);

    this.state = {};
  }

  render() {
    return (
      <div className="details">
        <StockDetails />
        <Portfolio />
      </div>
    );
  }
}
