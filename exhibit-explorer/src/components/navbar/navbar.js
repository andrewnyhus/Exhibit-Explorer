import React, {useState} from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {ExhibitScan} from "../scan/exhibit-scan";
import Modal from "react-bootstrap/Modal";
import { FaQrcode, FaHome } from "react-icons/fa";

export const ExhibitExplorerNav = (props) => {


    const BrandComponent = () => (
        <Navbar.Brand href="/">
            <FaHome/>
        </Navbar.Brand>
    );
    const NavbarToggle = () => <Navbar.Toggle aria-controls="basic-navbar-nav" />;

    const ScannerModal = () => {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const OpenModalButton = () => <Button variant="primary" onClick={handleShow}>Scan <FaQrcode/></Button>;

        const ModalHeader = () => (
            <Modal.Header closeButton>
                <Modal.Title>Scan The Exhibit's QR Code</Modal.Title>
            </Modal.Header>
        );
        const ModalBody = () => (
            <Modal.Body>
                <ExhibitScan/>
            </Modal.Body>
        );
        const ModalFooter = () => (
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
        );

        return (
            <div>
                <OpenModalButton/>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <ModalHeader/>
                    <ModalBody/>
                    <ModalFooter/>
                </Modal>
            </div>
        );
    };

    const NavbarCollapseMenu = () => (
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <ScannerModal/>
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
