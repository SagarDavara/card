import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import '../styles/header.css'

const Header = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="py-4 header">
            <Navbar {...args} expand="lg">
                <NavbarBrand href="/"><h3>A&E News</h3></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mx-auto" navbar>
                        <NavItem className="px-3">
                            <NavLink className="headerLink" href="/components/">HOME</NavLink>
                        </NavItem>
                        <NavItem className="px-3">
                            <NavLink className="headerLink" href="/components/">PROJECTS</NavLink>
                        </NavItem>
                        <NavItem className="px-3">
                            <NavLink className="headerLink" href="/components/">CONTENT</NavLink>
                        </NavItem>
                        <NavItem className="px-3">
                            <NavLink className="headerLink" href="/components/">CONTACTS</NavLink>
                        </NavItem>
                        <NavItem className="px-3">
                            <NavLink className="headerLink" href="/components/">PIECES</NavLink>
                        </NavItem>
                    </Nav>
                    <NavLink className="btn main-btn rounded-pill border border-black py-3">SEE NOW</NavLink>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
