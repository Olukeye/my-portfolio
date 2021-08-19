import React from 'react'
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import me from './me.jpg'
import first from './first.png'
import two from './two.png'

import './styles.css'
import Contact from '../components/Contact';

const Hompage = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className="hero">
                    <div className="heroDiv">
                        <h2>Seun Olukey</h2>
                        <h4>Software Engineer</h4>
                        <h6>Node.js, Express.js, MongoDB, PostgreSQL,<br />React, Vue, Git</h6>
                    </div>
                </section>
                <section className="whatIdo">
                    <h3 style={{ fontFamily: 'monospace', textAlign: 'center',  marginTop: '4rem' }}>About Me</h3>
                    <Container className="pt-3">
                        <Row>
                            <Col xs={12} md={6} lg={6}>
                                <img alt="me" src={me} style={{ width: '100%', height: '95%' }} />
                            </Col>
                            <Col xs={12} md={6} lg={6}>
                                <Card style={{ width: '100%', height: '95%' }}>
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <br />
                                        <Card.Text>
                                            <p>I am an innovative software engineer and I have few years of experience as a software developer.I have  contributed to litle projects including like movie App, a e-commerce platform  to mention a few.</p>
                                            <p>I am proficient in  Javascript. Of these programming languages, I feel most comfortable working with Node.js.  </p>
                                            <p><em>Below are some of the technologies i use: <br />
                                                Nodejs, Expressjs, MongoDB, PostgreSQL, Javascript , React, Github Actions,
                                            </em></p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="whatIdo ">
                    <h3 style={{ fontFamily: 'monospace', textAlign: 'center', marginTop: '2rem' }}>Portfolios</h3>
                    <Container className="pt-3">
                        <Row>
                            <Col xs={12} md={6}  lg={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={first} />
                                    <Card.Body>
                                        <Card.Title>VEVI STORE</Card.Title>
                                        <Card.Text>
                                            An ecommerce web application where users can purchase/make orders
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>Express.js, React,Redux, Mongodb, node.js.</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                    <button className="btn btn-primary"><a href="https://vevi-store.herokuapp.com/">visit us</a></button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} md={6} lg={6}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={two} />
                                    <Card.Body>
                                        <Card.Title>Management App</Card.Title>
                                        <Card.Text>
                                            A job portal application for job seekers and employers. Employers can post jobs and job seekers can apply for jobs..
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>React.js, Redux, Mongodb. Express.js, node.js.</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                  <button className="btn btn-primary"><a href="https://olukeye.github.io/Contact-Manager-With_React/#/">visit page</a></button>  
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Contact/>
            </main>
            <Footer />
        </>
    )
}

export default Hompage
