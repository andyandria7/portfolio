import { Col, Row } from "react-bootstrap";
import { FaUbuntu, FaWindows } from "react-icons/fa";

export default function Systeme() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <FaUbuntu />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaWindows />
            </Col>
        </Row>
    )
}
