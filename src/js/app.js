import { Component } from 'react';
import Nav from './components/nav';
import Details from './components/details';
import * as GLOBALS from './globals/globals';

export default class App extends Component {
  constructor(params) {
    super(params);

    this.state = {
      q: []
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(str) {
    // Nix the whitespace
    str = str.replace(/\s+/g, '');

    // Let's handle multi-symbol querries
    this.setState({
      q: str.split(',')
    });

    console.debug({ str });

    // TODO: Write a backend proxy to circumvent cors-less response from
    // Benzings, and point this at it.
    fetch(`${GLOBALS.API_URL}${encodeURIComponent(str)}`, {method: 'GET'})
      .then(response => {
        if (response.ok) {
          // TODO: Let's do some shit.
          console.log(response);
        } else {
          // TODO: Make this mo betta
          console.error('there was an error.', response.status);
        }
      })
      .catch(err => {
        // TODO: Make this mo betta
        console.error('there was a more different error.', err, {...err})
      });
  }

  render() {
    return (
      <div className="skexchange">
        <Nav onSearch={this.handleSearch} />
        <Details />
      </div>
    );
  }
}
