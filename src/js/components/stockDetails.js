const { Component } = require('react');

export default class StockDetails extends Component {
  constructor(params) {
    super(params);

    this.state = {};
  }

  render() {
    return (
      <div className="stock-details">
        <h3>[stockName]</h3>
      </div>
    );
  }
}
