import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className='flex gap-2 justify-center'>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/products" end>
        Products
      </NavLink>
    </nav>
  );
};
