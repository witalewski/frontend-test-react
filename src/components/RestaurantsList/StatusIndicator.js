import React, { Fragment } from 'react';

const StatusIndicator = ({ open }) => (
  <Fragment>
    <span
      className={`restaurants-list-item__status-indicator ${open &&
        'restaurants-list-item__status-indicator--open'}`}
    >
      ⬤
    </span>
    {open ? 'Open now' : 'Closed'}
  </Fragment>
);

export { StatusIndicator };
