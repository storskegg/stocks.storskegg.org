const { Component } = require('react');

export default class Nav extends Component {
  constructor(params) {
    super(params);

    this.state = {};

    this.handleEnter = this.handleEnter.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleEnter(e) {
    if (e.charCode === 13) {
      this.handleSearch();
    }
  }

  handleSearch(e) {
    if (typeof this.props.onSearch === 'function') {
      /*
         Note that above, we're only checking for [return]; we are
         not updating state with the changed value. This circumvents
         a possible race condition caused by the delay in React's
         setState() function. Instead, below, we utilize a ref to
         pull the current value of the input directly from the node.
      */
      this.props.onSearch(this.skexSrchStr.value);
    }
  }

  render() {
    return (
      <div className="nav">
        <h3>SKExchange</h3>
        <span className="right">
          <input type="text" onKeyPress={this.handleEnter} ref={(r) => {this.skexSrchStr = r}} placeholder="Stock Symbol" className="search-input" />
          <button className="search-submit" onClick={this.handleSearch}>Search</button>
        </span>
      </div>
    );
  }
}
