import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import { Navbar, Nav, Button} from 'react-bootstrap';
import Home from './container/Home/Home';
import Product from './container/Product/Product';
import BlogPost from './container/BlogPostContainer/BlogPostContainer';
import Mahasiswa from './container/Mahasiswa/Container/Mahasiswa';
import DetailBlogPost from './container/BlogPostContainer/DetailBlogPost';
import MahasiswaDetail from './container/Mahasiswa/Container/MahasiswaDetail';

function App() {
  return (
    <Router>
        <Fragment>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <Link to="/">
                        <Button variant="primary" style={{marginRight:12}}>Home</Button>
                      </Link>
                      <Link to="/mahasiswa">
                        <Button variant="primary" style={{marginRight:12}}>Mahasiswa</Button>
                      </Link>
                      <Link to="/blog-post">
                        <Button variant="primary" style={{marginRight:12}}>Blog Post</Button>
                      </Link>
                      <Link to="/product">
                        <Button variant="primary" style={{marginRight:12}}>Product</Button>
                      </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/mahasiswa" exact component={Mahasiswa} />
                <Route path="/mahasiswa/detail/:id" component={MahasiswaDetail} />
                <Route path="/blog-post" exact component={BlogPost} />
                <Route path="/blog-post/detail/:id" component={DetailBlogPost} />
                <Route path="/product" component={Product} />
            </Switch>
        </Fragment>
    </Router>
  );
}

export default App;
