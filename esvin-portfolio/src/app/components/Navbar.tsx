import React from 'react'
import Link from 'next/link';
import Projects from '../projects/page';
import About from '../about/page';
import Contact from '../contact/page';
import Photos from '../photos/page';


const Navbar = () => {
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
            </ul>
          </div>
        </nav>
      );
    };
    
export default Navbar;