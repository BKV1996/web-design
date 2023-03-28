import React from 'react'
import logo from "../images/logo.png"
import { AiOutlineSearch, AiFillGoogleCircle, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { FaSkype, FaHome } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import bdimg from "../images/img2.webp";
import bdimg1 from "../images/corbettrip.png";
import bdimg2 from "../images/grond.png";
import bdimg3 from "../images/india_open.png";
import bdimg4 from "../images/indiaseries.png";
import bdimg5 from "../images/kea.png";
import bdimg6 from "../images/masters.png";
import bdimg7 from "../images/onair.png";
import bdimg8 from "../images/premier_league.png";
import bdimg9 from "../images/screen.png";
import bdimg10 from "../images/supergirls.png";
import bdimg11 from "../images/viz.png";

import './Navbars.css';

import { Button, Col, Nav, NavItem, ListGroupItem, Row, NavLink, ListGroup} from 'react-bootstrap';

const Navbars = () => {
    return (
        <>
            <header>
                <div className='nav1 wd'>
                    <div className='nav2'>
                        <img src={logo} />
                    </div>

                    <div className='nav3'>
                        <FaHome />
                        <AiOutlineSearch />
                        <MdAccountCircle />
                    </div>
                </div>

                <div className='wd'>
                    <Nav className='nav4'>
                        <NavItem><NavLink className='nav5'>Home</NavLink></NavItem>
                        <NavItem><NavLink className='nav5'>Tournament and Event</NavLink></NavItem>
                        <NavItem><NavLink className='nav5'>Clubs and teams</NavLink></NavItem>
                        <NavItem><NavLink className='nav5'>ListGroupItemva play</NavLink></NavItem>
                        <NavItem><NavLink className='nav5'>Matches</NavLink></NavItem>
                        <NavItem><NavLink className='nav5'>Others</NavLink></NavItem>
                        <NavItem><NavLink className='nav5'>Gallery</NavLink></NavItem>
                        <NavItem><NavLink className='nav5'>Partner and franchies</NavLink></NavItem>
                    </Nav>
                </div>
            </header>
            <body>
                <div className='body1 wd'>
                    <div className="body2">
                        <div className="body4">
                            <img className='body3' src={bdimg} />
                            <div className="body9">
                                <div className='body10'>Greater customer engagement</div>
                                <p className='body11'>Lorem ipsum dolor sit amet consectetur adipisicing eListGroupItemt.
                                    Consequatur porro rem Lorem ipsum dolor sit amet consectetur, adipisicing eListGroupItemt.
                                    Architecto quis provident facere, in ducimus ut obcaecati quasi cumque dolor culpa ipsum
                                    sequi itaque temporibus. Reiciendis corporis provident quae debitis est!
                                    quisquam fugiat fugit iure ullam exercitationem vero quo nemo. Lorem ipsum dolor sit amet
                                    consectetur adipisicing eListGroupItemt. Repudiandae cum commodi odio doloremque
                                    consectetur vel, laborum dicta? Nulla, tempore enim, deleniti, veniam
                                    iure corrupti pariatur quaerat at harum ex recusandae.
                                </p>
                            </div>
                        </div>
                        <div className="body5">
                            <img className='body3' src={bdimg} />
                            <div className="body9">
                                <div className='body10'>Greater customer engagement</div>
                                <p className='body11'>Lorem ipsum dolor sit amet consectetur adipisicing eListGroupItemt.
                                    Consequatur porro rem Lorem ipsum dolor sit amet consectetur, adipisicing eListGroupItemt.
                                    Architecto quis provident facere, in ducimus ut obcaecati quasi cumque dolor culpa ipsum
                                    sequi itaque temporibus. Reiciendis corporis provident quae debitis est!
                                    quisquam fugiat fugit iure ullam exercitationem vero quo nemo. Lorem ipsum dolor sit amet
                                    consectetur adipisicing eListGroupItemt. Repudiandae cum commodi odio doloremque
                                    consectetur vel, laborum dicta? Nulla, tempore enim, deleniti, veniam
                                    iure corrupti pariatur quaerat at harum ex recusandae.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="body2">
                        <div className="body7">
                            <img className='body3' src={bdimg} />
                            <div className="body9">
                                <div className='body10'>Greater customer engagement</div>
                                <p className='body11'>Lorem ipsum dolor sit amet consectetur adipisicing eListGroupItemt.
                                    Consequatur porro rem Lorem ipsum dolor sit amet consectetur, adipisicing eListGroupItemt.
                                    Architecto quis provident facere, in ducimus ut obcaecati quasi cumque dolor culpa ipsum
                                    sequi itaque temporibus. Reiciendis corporis provident quae debitis est!
                                    quisquam fugiat fugit iure ullam exercitationem vero quo nemo. Lorem ipsum dolor sit amet
                                    consectetur adipisicing eListGroupItemt. Repudiandae cum commodi odio doloremque
                                    consectetur vel, laborum dicta? Nulla, tempore enim, deleniti, veniam
                                    iure corrupti pariatur quaerat at harum ex recusandae.
                                </p>
                            </div>
                        </div>
                        <div className="body8">
                            <img className='body3' src={bdimg} />
                            <div className="body9">
                                <div className='body10'>Greater customer engagement</div>
                                <p className='body11'>Lorem ipsum dolor sit amet consectetur adipisicing eListGroupItemt.
                                    Consequatur porro rem Lorem ipsum dolor sit amet consectetur, adipisicing eListGroupItemt.
                                    Architecto quis provident facere, in ducimus ut obcaecati quasi cumque dolor culpa ipsum
                                    sequi itaque temporibus. Reiciendis corporis provident quae debitis est!
                                    quisquam fugiat fugit iure ullam exercitationem vero quo nemo. Lorem ipsum dolor sit amet
                                    consectetur adipisicing eListGroupItemt. Repudiandae cum commodi odio doloremque
                                    consectetur vel, laborum dicta? Nulla, tempore enim, deleniti, veniam
                                    iure corrupti pariatur quaerat at harum ex recusandae.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wd">
                    <Button className="body12">Tournaments</Button>
                    <Button className="body13">Tournaments More</Button>
                </div>
                <div className="body14 wd">
                    <div className="body15">
                        Lorem, ipsum dolor sit amet consectetur adipisicing eListGroupItemt. Aperiam, repellendus.
                    </div>
                    <div className="body16">
                        <img className='body18' src={logo} />
                        <br />
                        <Button className='body17'>SignUp</Button>
                    </div>
                </div>
                <div className="body19 wd">
                    Events Gallery
                </div>
                <div className='wd'><Button className="body13">Event Gallery</Button></div>
                <div className="body20 wd">
                    <div className="body21">
                        <div className="body23">How to Play</div>
                        <p className='body24'>Lorem ipsum dolor sit amet consectetur adipisicing eListGroupItemt.
                            Numquam quibusdam placeat vel odio non cupiditate sequi! Sed accusantium non eos.
                        </p>
                        <p className='body24'>Lorem ipsum dolor sit amet consectetur adipisicing eListGroupItemt.
                            Veniam, cum? Lorem ipsum dolor sit amet.
                        </p>
                        <div className="btn1">
                            <Button className='body29'>Start Learning</Button>
                        </div>
                    </div>

                    <div className="body22">
                        <div className="body25">Lorem ipsum dolor sit amet.</div>
                        <p className='body24'>Lorem ipsum dolor sit, amet consectetur adipisicing eListGroupItemt. Dignissimos quasi
                            provident exercitationem recusandae fugit iste excepturi harum rem assumenda perspiciatis maiores cumque,
                        </p>
                        <div className="body26">
                            <div className='body27'>Lorem, ipsum dolor.</div>
                            <p className='body24'>Lorem ipsum dolor sit amet consectetur adipisicing eListGroupItemt. Quia deleniti non,
                                labore vel suscipit voluptate.
                            </p>
                            <div className="btn2">
                                <Button className='body28'>Lorem, ipsum dolor.</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body30 wd">
                    <div className="body31">
                        <img className='body32' src={bdimg1} />
                        <img className='body32' src={bdimg2} />
                        <img className='body32' src={bdimg3} />
                        <img className='body32' src={bdimg4} />
                    </div>
                    <div className="body33">
                        <img className='body32' src={bdimg5} />
                        <img className='body32' src={bdimg6} />
                        <img className='body32' src={bdimg7} />
                        <img className='body32' src={bdimg8} />
                    </div>
                    <div className="body34">
                        <img className='body32' src={bdimg9} />
                        <img className='body32' src={bdimg10} />
                        <img className='body32' src={bdimg11} />
                        <img className='body32' src={bdimg5} />
                    </div>
                </div>
                <div className="body35 wd"></div>
            </body>
            <footer>
                <div className="ft1 wd">
                    <Row>
                    <div className="ft2"> General Info </div>
                        <Col sm={4}>
                            <ListGroup>
                                <ListGroupItem>About Us</ListGroupItem>
                                <ListGroupItem>Contact Us</ListGroupItem>
                                <ListGroupItem>How to play</ListGroupItem>
                                <ListGroupItem>Tournament and events</ListGroupItem>
                                <ListGroupItem>Clubs and team</ListGroupItem>
                                <ListGroupItem>Advantages</ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col sm={4}>
                            <ListGroup>
                                <ListGroupItem>ListGroupItemve play</ListGroupItem>
                                <ListGroupItem>Mateches</ListGroupItem>
                                <ListGroupItem>Offers</ListGroupItem>
                                <ListGroupItem>Gallery</ListGroupItem>
                                <ListGroupItem>Partners and frenchise</ListGroupItem>
                                <ListGroupItem>Rules</ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col sm={4}>
                            
                            <div className="ft3">
                                <div className="ft4">Website Info</div>
                                <div className="ft5">
                                    <ListGroup>
                                        <ListGroupItem>Privacy Policy</ListGroupItem>
                                        <ListGroupItem>Terms and conditions</ListGroupItem>
                                        <ListGroupItem>Site Map</ListGroupItem>
                                        <ListGroupItem>Cookies</ListGroupItem>
                                    </ListGroup>
                                </div>
                                <div className="ft8">Follow Us</div>
                                <div className="ft6">
                                    <NavItem><NavLink> <AiFillGoogleCircle/> </NavLink></NavItem>
                                    <NavItem><NavLink> <BsFacebook/> </NavLink></NavItem>
                                    <NavItem><NavLink> <AiFillInstagram/> </NavLink></NavItem>
                                    <NavItem><NavLink> <AiFillTwitterCircle/> </NavLink></NavItem>
                                    <NavItem><NavLink> <FaSkype/> </NavLink></NavItem>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="ft7 wd">
                    Copyright &copy; 2023 Nokia. All Right Reserved.
                </div>
            </footer>
        </>
    )
}

export default Navbars
