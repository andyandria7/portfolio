import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/img/Web_Photo_Editor.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Permettez-moi de <span className="purple">me présenter</span>
            </h1>
            <p className="home-about-body">
              Je m'appelle <b className="purple">Andy Andrianarimalala</b>, un{" "}
              <b className="purple">développeur web & mobile</b> passionné par
              l’innovation et la création de solutions numériques modernes.
              <br />
              <br />
              Diplômé d’une <b className="purple">licence en Informatique</b> à
              l’Université <b>ESMIA</b>, j’ai acquis de solides compétences
              techniques en <b className="purple">Laravel</b>,{" "}
              <b className="purple">CodeIgniter</b>,{" "}
              <b className="purple">Vue.js</b>,{" "}
              <b className="purple">React.js</b> et{" "}
              <b className="purple">React Native</b>.
              <br />
              <br />
              Au fil de mes stages chez <b>HOPES Formation</b>,{" "}
              <b>Nir’Info</b> et <b>Hulsia</b>, j’ai développé plusieurs
              projets allant de la création d’applications web complètes avec{" "}
              <b>Laravel + Inertia.js + React.js/Vue.js</b> à des applications mobiles
              avec <b>React Native (Expo)</b> connectées à des API{" "}
              <b>CodeIgniter 4</b>.
              <br />
              <br />
              Toujours en quête de nouveaux défis, je cherche à collaborer sur
              des projets innovants où je peux mettre à profit mes compétences
              en <b className="purple">développement full-stack</b> et
              continuer à progresser dans les domaines du web et du mobile.
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
            <h1>Retrouvez-moi sur :</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/andyandria7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/tonny.kwel"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/andy-andria-a97512291/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            <p>
              N’hésitez pas à me{" "}
              <span className="purple">contacter pour collaborer !</span>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
