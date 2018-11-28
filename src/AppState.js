import { observable, action, computed } from 'mobx';

class AppState {
  @observable name = '';

  @action setName = name => {
    this.name = name;
  };

  @computed get greeting() {
    return `Hello, ${this.name || 'User'}!`;
  }
}

export { AppState };
