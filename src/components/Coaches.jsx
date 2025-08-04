import Staff from "./Staff";
import { Container, Row, Col } from "react-bootstrap";

export default function Coaches() {

    const names = [
        "Greg Gard",
        "Joe Krabbenhoft",
        "Sharif Chambliss",
        "Lance Randall",
        "Kirk Penney",
        "Greg Stiemsma"
    ];
      const roles = [
        "Head Coach",
        "Associate Head Coach",
        "Assistant Coach",
        "Assistant Coach",
        "Special Assistant to the Head Coach",
        "Director of Player Development"
    ];

    return (
        <Container className="mt-4">
          <Row>
            {names.map((name, index) => (
              <Col key={index} md={4} className="mb-4">
                <Staff
                  name={name}
                  role={roles[index]}
                />
              </Col>
            ))}
          </Row>
        </Container>
      );
}