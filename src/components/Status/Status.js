import React from 'react';

const Status = ({ open }) => (
  <div className="status">
    <span className={`status__indicator ${open && 'status__indicator--open'}`}>
      ⬤
    </span>
    {open ? 'Open Now' : 'Closed'}
  </div>
);

export { Status };
