import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className='flex gap-2 justify-center'>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/Products" end>
        Products
      </NavLink>
    </nav>
  );
};
