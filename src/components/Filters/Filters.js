import React, { Component } from 'react';
import c1 from '../../assets/open-now-checkbox--unchecked.png';
import c2 from '../../assets/open-now-checkbox--checked.png';

export class Filters extends Component {
  render() {
    return (
      <div className="filters">
      {/* Make webpack include the images in build */}
        <div style={{ display: 'none' }}>
          <img alt="c1" src={c1} />
          <img alt="c2" src={c2} />
        </div>
        Filter by:
        <input className="filters__open-now" type="checkbox" id="opennow" />
        <label for="opennow" />
        Open Now
      </div>
    );
  }
}

export default Filters;
