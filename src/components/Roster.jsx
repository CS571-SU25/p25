import Player from "./Player";
import { Container, Row, Col } from "react-bootstrap";

export default function Roster() {
    const names = [
        "Braeden Carrington", "Nick Boyd", "Zach Kinziger", "Jack Janicki",
        "Elijah Gray", "Andrew Rohde", "Jack Robison", "Hayden Jones",
        "Isaac Gard", "Riccardo Greppi", "Austin Rapp", "Will Garlock",
        "John Blackwell", "Nolan Winter", "Alex Bieliauskas"
    ];
    const numbers = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
    ];
    const positions = [
        "G", "G", "G", "G", "F", "G", "F", "G", "G", "F", "F", "F", "G", "F", "F"
    ];
      
      const heights = [
        "6‑5", "6‑3", "6‑3", "6‑5", "6‑9", "6‑6", "6‑6", "6‑7", "6‑3",
        "6‑10", "6‑10", "7‑0", "6‑4", "7‑0", "6‑10"
    ];
      
      const weights = [
        197, 177, 185, 200, 235, 195, 198, 200, 170,
        255, 238, 243, 203, 235, 238
    ];
      
      const classes = [
        "Sr.", "Sr.", "Fr.", "R‑So.", "Sr.", "Sr.", "So.", "Fr.", "Sr.",
        "So.", "So.", "Fr.", "Jr.", "Jr.", "Fr."
    ];
      
      const hometowns = [
        "Brooklyn Park, Minn.", "Garnerville, N.Y.", "De Pere, Wis.",
        "White Bear Lake, Minn.", "Charlotte, N.C.", "Brookfield, Wis.",
        "Lakeville, Minn.", "Nelson, New Zealand", "Oregon, Wis.",
        "Lecco, Italy", "Melbourne, Australia", "Middleton, Wis.",
        "Bloomfield Hills, Mich.", "Lakeville, Minn.", "Kaunas, Lithuania"
    ];

    return (
        <Container className="mt-4">
            <Row>
                {names.map((name, index) => (
                    <Col key={index} md={4} className="mb-4">
                        <Player
                            name={name}
                            number={numbers[index]}
                            position={positions[index]}
                            height={heights[index]}
                            weight={weights[index]}
                            year={classes[index]}
                            hometown={hometowns[index]}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}