import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar'



function SiteNav() {
    
    return (
        <header>
            <Navbar>
                <Container>
                    <Navbar.Brand>MediDoc</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-md-auto'>
                    
                            <Nav.Link href='/login'>Login</Nav.Link>
                            <Nav.Link href='/register'>Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default SiteNav;