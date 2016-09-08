const { Component } = require('react');

export default class Portfolio extends Component {
  constructor(params) {
    super(params);

    this.state = {};
  }

  render() {
    return (
      <div className="portfolio">
        <h3>Current Portfolio</h3>
      </div>
    );
  }
}
