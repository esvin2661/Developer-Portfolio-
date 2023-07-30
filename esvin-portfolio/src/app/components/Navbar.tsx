import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar">
      <Link href="/" passHref>
        <span className="navbar-brand">Navbar</span>
      </Link>
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link href="/" passHref>
              <span className="nav-link">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" passHref>
              <span className="nav-link">About</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/skills" passHref>
              <span className="nav-link">Skills</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/projects" passHref> 
              <span className="nav-link">Projects</span>
              </Link>
          </li>
          <li className="nav-item">
            <Link href="/photos" passHref>
              <span className="nav-link">Photos</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" passHref>
              <span className="nav-link">Contact</span>
            </Link> 
          </li>
          {/* Rest of the navigation items */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
