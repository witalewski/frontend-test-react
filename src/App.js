import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { AppState } from './AppState';
import { RestaurantsView } from './components/RestaurantsView';

class App extends Component {
  appState = new AppState();

  render() {
    return (
      <div className="App">
        <Provider appState={this.appState}>
          <Switch>
            <Route exact path="/" component={RestaurantsView} />
          </Switch>
        </Provider>
      </div>
    );
  }
}

export default App;
