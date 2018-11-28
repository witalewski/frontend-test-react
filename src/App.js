import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { AppState } from './AppState';
import { RestaurantsView } from './components/RestaurantsView';
import { RestaurantDetails } from './components/RestaurantDetails';

class App extends Component {
  appState = new AppState();

  render() {
    return (
      <div className="App">
        <Provider appState={this.appState}>
          <Switch>
            <Route exact path="/" component={RestaurantsView} />
            <Route path="/restaurant/:urlFriendlyName" component={RestaurantDetails} />
          </Switch>
        </Provider>
      </div>
    );
  }
}

export default App;
