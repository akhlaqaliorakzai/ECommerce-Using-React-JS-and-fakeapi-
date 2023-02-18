
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import {Navbar,Nav,Container,Form, FormControl, Button, NavDropdown} from 'react-bootstrap'
import {Link, Outlet , NavLink} from "react-router-dom"

export default function MyNavbar (){
    return (
       <Navbar bg="light" expand="lg" className='shadow-lg mb-5'>
            <Container fluid>
            <Link to='/' className='text-decoration-none'><Navbar.Brand className='bg-danger text-white p-2 border border-white'>ApnaCommerce</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Link to ="/" className='nav-link'>Home</Link>
                    <Link to ="/" className='nav-link'>Men's Collection</Link>
                    <Link to ="/" className='nav-link'>Women's Collection</Link>
                    <Link to ="/" className='nav-link'>Kids's Collection</Link>
                    
                </Nav>
                <a href=''><i class="fa fa-heart-o me-2 fa-lg text-danger"></i></a>
                <a href=''><i className='fa fa-shopping-cart me-3 text-danger fa-2x'></i></a>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-danger">Search</Button>
                </Form>
                <Link to="signin" className='ms-2  text-decoration-none text-success'><i className='fa fa-user-o ms-3 fa-lg'></i><span className='ms-2'>Sign in</span></Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            )
}