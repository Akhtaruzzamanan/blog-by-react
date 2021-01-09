import React, {useState, useEffect} from 'react';

// ReactStrap desing Navbar
import {
    Collapse,
    Nav,
    NavItem,
    NavbarBrand,
    NavLink
} from 'reactstrap';
  
// Navbar Custom Style  
import {CustomNavbar, Logo, NavMenu, CustomToggler} from './navbar-style';

function BloogerNavbar (props){

    // Toggle Function Here Start
    const [click, setClick] = useState(false);
  
    const toggle = () => setClick(!click);
    const closeMenu = () => setClick(false)
    // Toggle Function Here End
  
    // sticky navbar Logic start
  
      const [scrolled, setScrolled] = useState(false);
  
      const handleScroll = () => {
          const offset = window.scrollY;
          if (offset > 75) {
              setScrolled(true);
          }
          else {
              setScrolled(false)
          }
      }
  
      useEffect(() => {
          window.addEventListener('scroll', handleScroll)
      })
  
    // navbar sticky logic end
  
    return (
  
      <>
        <CustomNavbar expand="md" scrolled = {scrolled} >
            <div className = "container-fluid px-4">
                <NavbarBrand scrolled = {scrolled} to="/" className = "navbar-brand"><Logo scrolled = {scrolled} >Blooger</Logo></NavbarBrand>
                <CustomToggler onClick={toggle}>
                    <i className = {click ? "fas fa-times" : "fas fa-bars"}/>
                </CustomToggler>
                <Collapse isOpen={click} navbar >
                    <Nav className="mx-auto nav-menu text-capitalize" navbar>
                        <NavItem>
                        <NavLink to="/" onClick = {closeMenu}><NavMenu scrolled = {scrolled} >home</NavMenu></NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink to="/about" onClick = {closeMenu}><NavMenu scrolled = {scrolled} >category</NavMenu></NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink to="/services" onClick = {closeMenu}><NavMenu scrolled = {scrolled} >archive</NavMenu></NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink to="/skills" onClick = {closeMenu}><NavMenu scrolled = {scrolled} >Pages</NavMenu></NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink to="/contact" onClick = {closeMenu}><NavMenu scrolled = {scrolled} >contact us</NavMenu></NavLink>
                        </NavItem>
                    </Nav>
                    <Nav>
                        <NavItem>
                            <NavLink href="#" className = "px-2" onClick = {closeMenu}> <NavMenu scrolled = {scrolled} > <i class="fab fa-facebook-f"/> </NavMenu></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className = "px-2" onClick = {closeMenu}> <NavMenu scrolled = {scrolled} > <i class="fab fa-instagram"/> </NavMenu></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className = "px-2" onClick = {closeMenu}> <NavMenu scrolled = {scrolled} > <i class="fab fa-twitter"/> </NavMenu></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className = "px-2" onClick = {closeMenu}> <NavMenu scrolled = {scrolled} > <i class="fab fa-youtube"/> </NavMenu></NavLink>
                        </NavItem>
                    </Nav>

                {/* <NavbarText className = 'ml-2'>Simple Text</NavbarText> */}
                </Collapse>
            </div>
        </CustomNavbar>
      </>
  
    );
  }

export default BloogerNavbar
