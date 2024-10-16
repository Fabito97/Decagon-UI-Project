import Button from './Button';
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <h1 className='logo'>Decag<span>o</span>n</h1>
        <div className='nav-links'>
          <a href='#'>Become a Software Engineer</a>
          <Button />
        </div>

      </div>
    </nav>
  );
};

