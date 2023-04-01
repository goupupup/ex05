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
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
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
                <Route path="/todos" component={TodosPage} />
            </Switch>
        </>
    )
}

export default RouterPage