import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import voyage from '../../assets/img/voyage.png'
import bus from '../../assets/img/bus.png'
import madarail from '../../assets/img/madarail.png'
import menu from '../../assets/img/menu.png'
import car from '../../assets/img/car.png'
import auto from '../../assets/img/auto.png'
import animationscroll from '../../assets/img/animationscroll.png'
import clippath from '../../assets/img/clippath.png'
import facebook from '../../assets/img/facebook.png'
import gamesjs from '../../assets/img/gamesjs.png'
import hopes from '../../assets/img/hopes.png'
import hotel from '../../assets/img/hotel.png'


function Projects() {
    return (
        <Container fluid className="project-section">
            <Container>
                <h1 className="project-heading">
                    Mes Récent <strong className="purple">Projet     </strong>
                </h1>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {/* <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={voyage}
                            isBlog={false}
                            title="voyage"
                            ghLink="https://github.com/andyandria7"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={bus}
                            isBlog={false}
                            title="bus"
                            ghLink="https://github.com/andyandria7"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={madarail}
                            isBlog={false}
                            title="madarail"
                            ghLink="https://github.com/andyandria7"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={menu}
                            isBlog={false}
                            title="menu"
                            ghLink="https://github.com/andyandria7"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={car}
                            isBlog={false}
                            title="car"
                            ghLink="https://github.com/andyandria7"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={auto}
                            isBlog={false}
                            title="auto"
                            ghLink="https://github.com/andyandria7"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={animationscroll}
                            isBlog={false}
                            title="animationscroll"
                            ghLink="https://github.com/andyandria7"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={clippath}
                            isBlog={false}
                            title="clippath"
                            ghLink="https://github.com/andyandria7"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={facebook}
                            isBlog={false}
                            title="facebook"
                            ghLink="https://github.com/andyandria7"
                        />
                    </Col> */}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={gamesjs}
                            isBlog={false}
                            title="gamesjs"
                            ghLink="https://github.com/andyandria7"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={hopes}
                            isBlog={false}
                            title="hopes"
                            ghLink="https://github.com/andyandria7"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={hotel}
                            isBlog={false}
                            title="hotel"
                            ghLink="https://github.com/andyandria7"
                        />
                    </Col>
                   
                </Row>
            </Container>
        </Container>

    )
}

export default Projects