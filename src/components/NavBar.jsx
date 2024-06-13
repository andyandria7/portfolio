import { useState } from "react"
import { Button, Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { AiFillStar, AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument, CgGitFork } from "react-icons/cg";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo_transparent.png"



function NavBar({load}) {
    const [navColor, updateNav] = useState(false);
    const [expand, updateExpanded] = useState(false);

    function scroll() {
        if (window.scrollY >= 20) {
            updateNav(true);
        } else {
            updateNav(false);
        }
    }

    window.addEventListener("scroll", scroll);
    return (
        <div className={load ? "hidden" : ""}>

        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColor ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="/" className="d-flex ">
                    <img src={logo} className="img-fluid logo" alt="brand" />
                    {/* <h2 className="">Andy</h2> */}
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                                <AiOutlineHome style={{ marginBottom: "2px", marginRight:"2vh" }} />Accueil
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/about"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineUser style={{ marginBottom: "2px", marginRight:"1vh" }} /> A propos
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/project"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineFundProjectionScreen
                                    style={{ marginBottom: "2px", marginRight:"1vh" }}
                                />{" "}
                                Projects
                            </Nav.Link>
                        </Nav.Item>

                        {/* <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/resume"
                                onClick={() => updateExpanded(false)}
                            >
                                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                            </Nav.Link>
                        </Nav.Item> */}

                        <Nav.Item className="fork-btn">
                            <Button
                                href="https://github.com/andyandria7"
                                target="_blank"
                                className="fork-btn-inner"
                            >
                                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                                <AiFillStar style={{ fontSize: "1.1em" }} />
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavBar