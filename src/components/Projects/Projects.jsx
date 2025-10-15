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
import examen from '../../assets/img/examen.png'
import gestion from '../../assets/img/gestion.png'
import requete from '../../assets/img/request.png'
import tictactoe from '../../assets/img/tictactoe.png'
import quiz from '../../assets/img/quiz.png'
import blog from '../../assets/img/blog.png'
import ecommerce from '../../assets/img/ecommerce.png'
import pizza from '../../assets/img/pizza.png'
import vente from '../../assets/img/venteOline.png'
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
                    
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={vente}
                            isBlog={false}
                            title="Vente en ligne (Php Java android Api)"
                            ghLink="https://github.com/andyandria7/sale-online"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={pizza}
                            isBlog={false}
                            title="Pizza (Laravel VueJs InertiaJs)"
                            ghLink="https://github.com/andyandria7/pizza"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={ecommerce}
                            isBlog={false}
                            title="Ecommerce (Laravel)"
                            ghLink="https://github.com/andyandria7/Ecommerce"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={blog}
                            isBlog={false}
                            title="blog IA (Laravel)"
                            ghLink="https://github.com/andyandria7/Blog-IA"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={quiz}
                            isBlog={false}
                            title="quiz (VueJs)"
                            ghLink="https://github.com/andyandria7/Quiz"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={tictactoe}
                            isBlog={false}
                            title="Tic Tac Toe (VueJs)"
                            ghLink="https://github.com/andyandria7/VueJs-tic-tac-toe"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={requete}
                            isBlog={false}
                            title="Générateur de requête (vente de voiture) (java)"
                            ghLink="https://github.com/andyandria7/g-n-rateur-de-requ-te"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={gestion}
                            isBlog={false}
                            title="Gestion de stock (java)"
                            ghLink="https://github.com/andyandria7/Gestion-de-stock"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={examen}
                            isBlog={false}
                            title="Examen (java)"
                            ghLink="https://github.com/andyandria7/JavaExamen"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={gamesjs}
                            isBlog={false}
                            title="gamesjs (javascript)"
                            ghLink="https://github.com/andyhttps://github.com/andyandria7/jsGames"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={hopes}
                            isBlog={false}
                            title="hopes (html,css,js)"
                            ghLink="https://github.com/andyandria7/Hopes"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={hotel}
                            isBlog={false}
                            title="hotel (php)"
                            ghLink="https://github.com/andyandria7/Hotel"
                        />
                    </Col>
                   
                </Row>
            </Container>
        </Container>

    )
}

export default Projects