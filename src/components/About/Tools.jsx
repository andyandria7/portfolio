import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiEclipseide, SiAnaconda, SiAndroidstudio, SiAdobephotoshop, SiKrita, SiLaragon, SiMysql, SiFigma } from "react-icons/si";

function Tools() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiMysql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiLaragon />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAnaconda />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiEclipseide />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAndroidstudio />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAdobephotoshop />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiKrita />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFigma />
            </Col>
        </Row>
    )
}

export default Tools