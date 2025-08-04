import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Player({ name, number, position, height, weight, year, hometown }) {
    const navigate = useNavigate();

    function handleJerseyPurchase() {
        const encodedName = encodeURIComponent(name);
        navigate(`/jerseys/${encodedName}`);
    }
    
    return (
        <Card>
            <Card.Body>
                <Card.Title>#{number} — {name}</Card.Title>
                <Card.Text>
                    <strong>Position:</strong> {position}<br />
                    <strong>Height:</strong> {height}<br />
                    <strong>Weight:</strong> {weight} lbs<br />
                    <strong>Year:</strong> {year}<br />
                    <strong>Hometown:</strong> {hometown}
                </Card.Text>
                <Button variant="warning" onClick={handleJerseyPurchase}>
                    Purchase Jersey
                </Button>
            </Card.Body>
        </Card>
    );
}