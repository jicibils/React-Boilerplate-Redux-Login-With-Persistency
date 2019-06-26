import React from 'react';
import wip from 'assets/img/wip.png';
import './Wip.scss';

function Wip() {
  return (
    <div className="Wip">
      <header className="Wip-header">
        <img src={wip} className="Wip-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Wip;
