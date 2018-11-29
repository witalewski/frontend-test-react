import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import c1 from '../../assets/open-now-checkbox--unchecked.png';
import c2 from '../../assets/open-now-checkbox--checked.png';

export class Filters extends Component {
  componentDidMount() {}
  onFilterByOpenNowChange = ({ target: { checked } }) => {
    this.props.setFilterByOpenNow(checked);
  };

  onCategoryChange = ({ target: { value } }) =>
    this.props.setFilterByCategory(value);

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
        <span className="filters__open-now-label">Open Now</span>
        <span className="filters__category-label">Category</span>
        <select onChange={this.onCategoryChange}>
          <option key="All" value="">
            All categories
          </option>
          {this.props.categories.map(c => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default inject(({ appState }) => ({
  filterByOpenNow: appState.filterByOpenNow,
  setFilterByOpenNow: appState.setFilterByOpenNow,
  categories: appState.categories,
  setFilterByCategory: appState.setFilterByCategory,
}))(observer(Filters));
