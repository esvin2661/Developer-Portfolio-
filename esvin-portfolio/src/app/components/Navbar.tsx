import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {

  const NavbarContainer = {}

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link href="/">
                  <span className="nav-link">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <span className="nav-link">About</span>
                </Link>
              </li>
              {/* Add other navbar items here */}
              <li className ="nav-item">
                <Link href="/projects">
                    <span className="nav-link">Projects</span>
                </Link>
              </li>
              <li className ="nav-item">
                <Link href="/photos">
                    <span className="nav-link">Photos</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                    <span className="nav-link">Contact
                    </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    };
    
export default Navbar;