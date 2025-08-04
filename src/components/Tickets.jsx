import Games from "./Games";
import { Container, Row, Col } from "react-bootstrap";

export default function Tickets() {
    const teams = ["Indiana", "Michigan", "Purdue", "Nebraska", "Oregon", "Iowa", "Ohio State", "Michigan State", "Penn State", "Illinois", "Minnesota", "Washington", "Maryland", "Rutgers", "UCLA", "USC"];
    const dates = [
        "10/04/2025", "10/11/2025", "10/18/2025", "10/25/2025",
        "11/01/2025", "11/08/2025", "11/15/2025", "11/22/2025",
        "11/29/2025", "12/06/2025", "12/13/2025", "12/20/2025",
        "12/27/2025", "01/03/2026", "01/10/2026", "01/17/2026"
    ];
    const prices = [ 45, 55, 40, 50, 60, 42, 48, 53, 46, 44, 47, 51, 39, 59, 62, 65];

    return (
        <Container className="mt-4">
            <Row>
                {teams.map((team, index) => (
                    <Col key={index} md={4} className="mb-4">
                        <Games opponent={team} date={dates[index]} price={prices[index]} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}