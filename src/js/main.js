'use strict';

import ReactDOM from 'react-dom';
import App from './app.js';

// TODO: Bring this back, later.
//
// const assetsDB = new Dexie('Assets');
// assetsDB.version(1).stores({
//   balance: 'current',
//   portfolio: 'name,bidValue,askValue'
// });

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
