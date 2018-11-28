import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { AppState } from './AppState';
import { RestaurantsList } from './components/RestaurantsList';

class App extends Component {
  appState = new AppState();
  
  render() {
    return (
      <div className="App">
        <Provider appState={this.appState}>
          <RestaurantsList />
        </Provider>
      </div>
    );
  }
}

export default App;
