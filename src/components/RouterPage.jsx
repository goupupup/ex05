
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import PostsPage from './PostsPage';
import TodosPage from './TodosPage';


const RouterPage = () => {
  return (
    <>
        <Navbar bg="light" expand="lg" className='mb-5'>
            <Container>
                <Link to="/posts">LOGO</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">Home</Link>
                        <Link to="/posts">게시글</Link>
                        <Link to="/todos">할일목록</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Switch>
            <Route path="/" component={HomePage} exact={true}/>
            <Route path="/posts" component={PostsPage}/>
            <Route path="/todos" component={TodosPage}/>
        </Switch>
    </>
  )
}

export default RouterPage