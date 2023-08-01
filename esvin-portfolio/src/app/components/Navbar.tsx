import { Flex, Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import NavLink from './NavLink'; // Import the custom NavLink component

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex as="nav" align="center" justify="space-between" px={4} py={2} bg="gray.100">
      {/* Logo */}
      <NavLink>
        <span className="navbar-brand">Navbar</span>
      </NavLink>

      {/* Hamburger icon and dark theme switcher */}
      <Flex alignItems="center">
        <Button variant="ghost" onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>

      {/* Navigation links */}
      <Flex as="ul" listStyleType="none" mx={0} p={0}>
        <li className="nav-item active">
          <NavLink href="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink href="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink href="/skills">Skills</NavLink>
        </li>
        <li className="nav-item">
          <NavLink href="/projects">Projects</NavLink>
        </li>
        <li className="nav-item">
          <NavLink href="/photos">Photos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink href="/contact">Contact</NavLink>
        </li>
        {/* Rest of the navigation items */}
      </Flex>
    </Flex>
  );
};

export default Navbar;
