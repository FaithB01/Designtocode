import React from 'react';

const Header = () => {
  return (
    <header class="brand-header">

      <div class="logo">
        <img src="https://tailwindui.com/img/logos/v1/workflow-mark-on-brand.svg" width="40" height="30" alt="Workflow logo" />
      </div>
      <div class="search">

        <input id="search" class=" placeholder" placeholder="Search projects" type="search" rel="search" />
      </div>
      <div class="end">
        <div class="text">
          <div class="text-one">Documentation
          </div>
          <div class="text-two">Support
          </div>
        </div>
        <div class="prof">
          <img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80" width="30" height="30" alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
