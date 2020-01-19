import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import {ExhibitScan} from "../exhibit/exhibit-scan/exhibit-scan";

export const ExhibitExplorerNav = (props) => {


    const BrandComponent = () => (
        <Navbar.Brand href="/">
            Exhibit Explorer
        </Navbar.Brand>
    );
    const NavbarToggle = () => <Navbar.Toggle aria-controls="basic-navbar-nav" />;
    // const
    const popoverStyles = {
        maxWidth: 'min(75vw, 75vh)',
        width: 'min(75vw, 75vh)',
        maxHeight: 'min(75vw, 75vh)',
        height: 'min(75vw, 75vh)'
    };
    const ScannerPopover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">[Insert Scanner Title]</Popover.Title>
            <Popover.Content style={popoverStyles}>
                <ExhibitScan/>
            </Popover.Content>
        </Popover>
    );

    const NavbarCollapseMenu = () => (
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Form inline>
//                    <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={ScannerPopover}>
                        <Button variant="light">Scan Barcode</Button>
 //                   </OverlayTrigger>
                </Form>
                <Nav.Link href="/exhibit/list">Exhibits</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    );

    return (
        <Navbar
            bg={"dark"}
            variant={"dark"}
            expand={"lg"}
            sticky={"top"}
        >
            <BrandComponent/>
            <NavbarToggle/>
            <NavbarCollapseMenu/>
        </Navbar>
    );
};
