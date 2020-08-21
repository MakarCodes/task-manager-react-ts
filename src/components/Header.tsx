import * as React from 'react';

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className='header'>
      <h1>Task Manager</h1>
    </div>
  );
};

export default Header;
