import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { AppState } from './AppState';
import { RestaurantsView } from './components/RestaurantsView';

class App extends Component {
  appState = new AppState();

  render() {
    return (
      <div className="App">
        <Provider appState={this.appState}>
          <RestaurantsView />
        </Provider>
      </div>
    );
  }
}

export default App;
