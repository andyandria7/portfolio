import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/img/about.png";
import Home2 from "./Home2";
import Type from "./Type";
import video from "../../assets/img/Colorful Matrix Code Live Wallpaper.mp4";
// import Particle from "../Particle";
// import Home2 from "./Home2";
// import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
      <video autoPlay muted loop id="myVideo" className="video-background"
            src={video} type="video/mp4">
        </video>
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              Bonjour à tous!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  🖐️
                </span>
              </h1>

              <h1 className="heading-name">
                Je suis
                <strong className="main-name"> Andrianarimalala Andy</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              {/* <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              /> */}
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
