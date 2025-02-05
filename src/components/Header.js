import React from 'react';
import {Navbar,Nav,NavDropdown,Container,Image} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {

    return(
        <header>
          <Navbar className='navbar-style' expand="lg">
          <Container>
               <LinkContainer to = '/'>
               <Navbar.Brand href="/">
            <Image className='logo-imag-style' src = 'images/logo.jpg' alt="VTU" roundedCircle/>
            <h6 className='logo-text-style'> Visvesvaraya Technological University (VTU), Belagavi</h6>
            </Navbar.Brand>
               </LinkContainer>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">

               <LinkContainer to ='/'>
               <Nav.Link href="#">Home</Nav.Link>
               </LinkContainer>
               
               <LinkContainer to ='/about'>
               <Nav.Link href="#">About Us</Nav.Link>
               </LinkContainer>

                   <NavDropdown title="Academic" id="basic-nav-dropdown">
                    <LinkContainer to='/admission'>
                             <NavDropdown.Item href="#">Admission</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/circular/notification'>
                        <NavDropdown.Item href="#">Circulars & Notification</NavDropdown.Item>
                    </LinkContainer>
                        
                     <LinkContainer to='/certificate'>
                        <NavDropdown.Item href="#">Certificate Issued</NavDropdown.Item>
                     </LinkContainer>   
                        
                   </NavDropdown>

                   <NavDropdown title="Examination" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Examination Guidlines</NavDropdown.Item>
                        <NavDropdown.Item href="#">Examination Application</NavDropdown.Item>

                        <LinkContainer to='/result/loginPage'>
                        <NavDropdown.Item href="#">Results</NavDropdown.Item>
                        </LinkContainer>
                        
                   </NavDropdown>

                   <NavDropdown title="VTU Departments" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Computer Science Engineering</NavDropdown.Item>
                        <NavDropdown.Item href="#">Information Science Engineering</NavDropdown.Item>
                        <NavDropdown.Item href="#">Electronics & Communication Engineering</NavDropdown.Item>
                        <NavDropdown.Item href="#">Civil Engineering</NavDropdown.Item>
                        <NavDropdown.Item href="#">Mechanical Engineering</NavDropdown.Item>
                   </NavDropdown>

                   <NavDropdown title="Staff Login" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Login as Admin</NavDropdown.Item>
                   </NavDropdown>

              </Nav>
            </Navbar.Collapse>
          </Container>
            </Navbar>
        </header>
    )
}
export default Header