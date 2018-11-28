import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import c1 from '../../assets/open-now-checkbox--unchecked.png';
import c2 from '../../assets/open-now-checkbox--checked.png';

export class Filters extends Component {
    onFilterByOpenNowChange = ({target: {checked}}) => {
        this.props.setFilterByOpenNow(checked)
    }
  render() {
    return (
      <div className="filters">
        {/* Make webpack include the images in the build */}
        <div style={{ display: 'none' }}>
          <img alt="c1" src={c1} />
          <img alt="c2" src={c2} />
        </div>
        Filter by:
        <input
          className="filters__open-now"
          type="checkbox"
          id="opennow"
          checked={this.props.filterByOpenNow}
          onChange={this.onFilterByOpenNowChange}
        />
        <label htmlFor="opennow" />
        Open Now
      </div>
    );
  }
}

export default inject(({ appState }) => ({
  filterByOpenNow: appState.filterByOpenNow,
  setFilterByOpenNow: appState.setFilterByOpenNow,
}))(observer(Filters));
