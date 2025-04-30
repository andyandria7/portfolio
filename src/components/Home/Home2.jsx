import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/img/Web_Photo_Editor.jpg"
// import Tilt from "react-parallax-tilt";
import { SiIndeed } from "react-icons/si";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Permettez-moi de  <span className="purple">me présenter </span>
            </h1>
            <p className="home-about-body">
              Bonjour, je suis un <b className="purple">développeur web </b> passionné par l'innovation et la création des technologies numériques.
              <br />
              <br />
              Ma spécialité réside dans l'utilisation de technologies modernes telles que
              <i>
                <b className="purple"> Vuejs pour le frontend et Laravel pour le backend. </b>
              </i>
              <br />
              <br />
              J'ai acquis mes compétences lors de ma formation chez HOPES Formation, une expérience qui a été cruciale dans mon parcours professionnel.
              <br />
              <br />
              Cette année, j’ai également enrichi mon savoir-faire en suivant une formation chez Nir'Info, où j’ai appris le <b className="purple">développement d’applications mobiles en Java, ainsi que les bases du langage Java.</b>
              <br />
              <br />
              Je suis constamment <b className="purple">en quête de défis stimulants et de nouvelles connaissances</b> pour continuer à évoluer.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TROUVEZ-MOI SUR:</h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/andyandria7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/tonny.kwel"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebook />

                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/andy-andria-a97512291/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
            <p>
              N'hésitez pas à me  <span className="purple">contacter  </span>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Home2